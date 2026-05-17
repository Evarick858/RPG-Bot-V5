/*
  !craft Command
  Base : Lenwy SCM — RPG Extension

  Allows players to craft items using discovered recipes
  Usage: !craft <recipe_name> [quantity]
*/

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { items } from "../../database/rpg/items.js";
import { resolveCraftMaterial } from "../../database/rpg/craftMaterials.js";
import { trackCrafting } from "../../database/rpg/questTracker.js";
import { 
  recipes, 
  getRecipeById, 
  hasRequiredMaterials,
  getCraftableRecipes 
} from "../../database/rpg/recipes.js";
import {
  parseFusionArgs,
  validateFusion,
  fusionBudgetRequired,
  itemFusionValue,
} from "../../database/rpg/universalCraft.js";
import { getLanguage, getText, getPlayerLanguage } from "../../database/rpg/languages.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const playersPath = path.resolve(__dirname, "../../database/rpg/players.json");
const recipeCategoryLabels = {
  en: {
    weapon: "Weapon",
    armor: "Armor",
    consumable: "Consumable",
    tool: "Tool",
    material: "Material",
    utility: "Utility",
    shield: "Shield",
  },
  id: {
    weapon: "Senjata",
    armor: "Armor",
    consumable: "Konsumsi",
    tool: "Alat",
    material: "Material",
    utility: "Utilitas",
    shield: "Perisai",
  },
};

function getRecipeCategoryLabel(lang, category) {
  const labels = recipeCategoryLabels[lang?.code] || recipeCategoryLabels.en;
  return labels[category] || category;
}

/** @param {string} s */
function normalizeRecipeSlug(s) {
  return String(s).toLowerCase().replace(/\s+/g, "_");
}

/** Last token is quantity only if it is a positive integer (fixes `craft x 1` producing `x_1`). */
function parseCraftArgs(args) {
  if (args.length >= 2) {
    const last = args[args.length - 1];
    if (/^\d+$/.test(last)) {
      const qty = parseInt(last, 10);
      if (qty > 0) {
        return { quantity: qty, nameParts: args.slice(0, -1) };
      }
    }
  }
  return { quantity: 1, nameParts: args };
}

/** @param {string} slug normalized key like mega_potion or crab_axe */
function findRecipeBySlug(slug) {
  if (!slug) return null;
  const byKey = getRecipeById(slug);
  if (byKey) return byKey;

  for (const r of Object.values(recipes)) {
    if (normalizeRecipeSlug(r.name) === slug) return r;
  }

  for (const r of Object.values(recipes)) {
    if (r.result?.itemId === slug) return r;
  }

  for (const r of Object.values(recipes)) {
    const it = items[r.result?.itemId];
    if (it?.name && normalizeRecipeSlug(it.name) === slug) return r;
  }

  return null;
}

// ── Metadata ─────────────────────────────────────────────

export const info = {
  name: "Craft",
  menu: ["craft"],
  case: ["craft"],
  description: "Craft with discovered recipes or universal fusion (any items → any item)",
  hidden: false,
  owner: false,
  premium: false,
  group: false,
  private: false,
  admin: false,
  botAdmin: false,
  allowPrivate: true,
};

// ── Handler ───────────────────────────────────────────────

export default async function handler(leni) {
  const { lenwy, normalizedSender, LenwyText, args } = leni;
  const sender = normalizedSender;
  
  const playersData = JSON.parse(fs.readFileSync(playersPath, "utf-8"));
  
  // Check if player is registered
  if (!playersData[sender]) {
    const lang = getLanguage("en");
    return LenwyText(getText(lang, "craft.needRegister"));
  }

  const player = playersData[sender];
  const lang = getLanguage(getPlayerLanguage(player));

  // Initialize recipes array if not exists
  if (!player.knownRecipes) {
    player.knownRecipes = [];
  }

  // Convert inventory array to bag object format
  const playerBag = {};
  for (const item of player.inventory || []) {
    playerBag[item.id] = item.qty;
  }

  // If no args, show craftable recipes
  if (args.length === 0) {
    return await showCraftableRecipes(lenwy, sender, player, playerBag, LenwyText);
  }

  // ── Universal fusion: any items may be consumed as materials ─────────────
  const fusionParsed = parseFusionArgs(args.map((a) => String(a)));
  if (fusionParsed) {
    if (fusionParsed.error === "usage") {
      return LenwyText(getText(lang, "craft.fuseUsage"));
    }
    if (fusionParsed.error === "badMaterials") {
      return LenwyText(getText(lang, "craft.fuseBadMaterials"));
    }
    if (fusionParsed.error === "badTarget") {
      return LenwyText(
        getText(lang, "craft.fuseBadTarget", { slug: fusionParsed.slug || "?" })
      );
    }
    if (fusionParsed.error === "badMaterialId") {
      return LenwyText(
        getText(lang, "craft.fuseBadMaterialId", { id: fusionParsed.itemId || "?" })
      );
    }

    const { target, outputQty, materials } = fusionParsed;
    const check = validateFusion(target, outputQty, materials, playerBag);
    if (!check.ok) {
      if (check.error === "cannotUseTarget") {
        return LenwyText(getText(lang, "craft.fuseCannotUseTarget"));
      }
      if (check.error === "notEnough") {
        return LenwyText(getText(lang, "craft.fuseNotEnough", { detail: check.detail || "" }));
      }
      if (check.error === "lowValue") {
        return LenwyText(
          getText(lang, "craft.fuseLowValue", {
            need: check.detail || "0",
            offered: check.offered || "0",
          })
        );
      }
      if (check.error === "tooMany") {
        return LenwyText(getText(lang, "craft.fuseTooMany"));
      }
      if (check.error === "noMaterials") {
        return LenwyText(getText(lang, "craft.fuseBadMaterials"));
      }
      return LenwyText(getText(lang, "craft.recipeNotFound"));
    }

    for (const m of materials) {
      const invItem = player.inventory.find((i) => i.id === m.itemId);
      if (invItem) {
        invItem.qty -= m.qty;
        if (invItem.qty <= 0) {
          player.inventory = player.inventory.filter((i) => i.id !== m.itemId);
        }
      }
    }

    const outId = target.id;
    const outQty = Math.max(1, Math.floor(Number(outputQty) || 1));
    const invOut = player.inventory.find((i) => i.id === outId);
    if (invOut) invOut.qty += outQty;
    else player.inventory.push({ id: outId, qty: outQty });

    playersData[sender] = player;
    fs.writeFileSync(playersPath, JSON.stringify(playersData, null, 2));

    trackCrafting(sender, outQty);

    const matsLine = materials
      .map((m) => {
        const mi = resolveCraftMaterial(m.itemId);
        return `- ${mi?.name || m.itemId} x${m.qty}`;
      })
      .join("\n");

    const needV = fusionBudgetRequired(target, outQty);
    const offeredV = materials.reduce(
      (s, m) => s + itemFusionValue(items[m.itemId]) * m.qty,
      0
    );

    return LenwyText(
      getText(lang, "craft.fuseSuccess", {
        item: target.name || outId,
        qty: String(outQty),
        materials: matsLine,
        need: String(needV),
        offered: String(offeredV),
      })
    );
  }

  // Parse: craft <recipe or output item name> [quantity]
  const { quantity, nameParts } = parseCraftArgs(args);
  const recipeName = nameParts.join("_").toLowerCase();

  const recipe = findRecipeBySlug(recipeName);

  if (!recipe) {
    return LenwyText(getText(lang, "craft.recipeNotFound"));
  }

  // Check if player knows this recipe
  if (!player.knownRecipes.includes(recipe.id)) {
    return LenwyText(getText(lang, "craft.recipeNotDiscovered"));
  }

  // Check if player has required materials
  if (!hasRequiredMaterials(recipe, playerBag)) {
    const missingMaterials = [];
    for (const mat of recipe.materials) {
      const playerAmount = playerBag[mat.itemId] || 0;
      if (playerAmount < mat.quantity * quantity) {
        const item = resolveCraftMaterial(mat.itemId);
        missingMaterials.push(
          `${item?.name || mat.itemId}: ${playerAmount}/${mat.quantity * quantity}`
        );
      }
    }

    return LenwyText(getText(lang, "craft.notEnoughMaterials", { missing: missingMaterials.join("\n") }));
  }

  // Craft the item
  return await craftItem(lenwy, sender, player, recipe, quantity, playersData, LenwyText);
}

// ── Helper Functions ──────────────────────────────────────
/**
 * Show all craftable recipes
 */
async function showCraftableRecipes(lenwy, sender, player, playerBag, LenwyText) {
  const lang = getLanguage(getPlayerLanguage(player));
  const craftable = getCraftableRecipes(playerBag, player.knownRecipes);

  if (craftable.length === 0) {
    // Check if player has any recipes at all
    if (!player.knownRecipes || player.knownRecipes.length === 0) {
      return LenwyText(getText(lang, "craft.noRecipes") + getText(lang, "craft.fuseTip"));
    } else {
      return LenwyText(
        getText(lang, "craft.noMaterials", { count: player.knownRecipes.length }) +
          getText(lang, "craft.fuseTip")
      );
    }
  }

  // Group by category
  const byCategory = {};
  for (const recipe of craftable) {
    if (!byCategory[recipe.category]) {
      byCategory[recipe.category] = [];
    }
    byCategory[recipe.category].push(recipe);
  }

  let message = getText(lang, "craft.title") + "\n\n";
  
  for (const [category, recipeList] of Object.entries(byCategory)) {
    message += `*${getRecipeCategoryLabel(lang, category)}*\n`;
    
    for (const recipe of recipeList) {
      const resultItem = items[recipe.result.itemId];
      message += `\n${resultItem?.name || recipe.result.itemId}\n`;
      message += getText(lang, "craft.result", { qty: recipe.result.quantity }) + "\n";
      message += getText(lang, "craft.materials") + "\n";
      
      for (const mat of recipe.materials) {
        const matItem = resolveCraftMaterial(mat.itemId);
        const playerAmount = playerBag[mat.itemId] || 0;
        const hasEnough = playerAmount >= mat.quantity ? "✅" : "❌";
        message += `  - ${hasEnough} ${matItem?.name || mat.itemId} (${playerAmount}/${mat.quantity})\n`;
      }
      
      message += getText(lang, "craft.command", { id: recipe.id }) + "\n";
    }
    message += "\n";
  }

  message += getText(lang, "craft.tip");
  message += getText(lang, "craft.fuseTip");

  return LenwyText(message);
}

/**
 * Craft an item
 */
async function craftItem(lenwy, sender, player, recipe, quantity, playersData, LenwyText) {
  const lang = getLanguage(getPlayerLanguage(player));
  
  // Deduct materials from inventory
  for (const mat of recipe.materials) {
    const totalNeeded = mat.quantity * quantity;
    const invItem = player.inventory.find(i => i.id === mat.itemId);
    
    if (invItem) {
      invItem.qty -= totalNeeded;
      if (invItem.qty <= 0) {
        player.inventory = player.inventory.filter(i => i.id !== mat.itemId);
      }
    }
  }

  // Add crafted item to inventory
  const resultItemId = recipe.result.itemId;
  const resultQuantity = recipe.result.quantity * quantity;
  
  const invItem = player.inventory.find(i => i.id === resultItemId);
  if (invItem) {
    invItem.qty += resultQuantity;
  } else {
    player.inventory.push({ id: resultItemId, qty: resultQuantity });
  }

  // Save player data
  playersData[sender] = player;
  fs.writeFileSync(playersPath, JSON.stringify(playersData, null, 2));

  // Track quest progress (track each item crafted)
  trackCrafting(sender, resultQuantity);

  const resultItem = items[resultItemId];
  
  const materialsUsed = recipe.materials.map(mat => {
    const matItem = resolveCraftMaterial(mat.itemId);
    return `- ${matItem?.name || mat.itemId} x${mat.quantity * quantity}`;
  }).join("\n");
  
  return LenwyText(getText(lang, "craft.success", {
    item: resultItem?.name || resultItemId,
    qty: resultQuantity,
    materials: materialsUsed
  }));
}
