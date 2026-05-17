/*
  !recipes Command
  Base : Lenwy SCM — RPG Extension

  View all discovered recipes (both craftable and not craftable)
  Usage: !recipes [category]
*/

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { items } from "../../database/rpg/items.js";
import { resolveCraftMaterial } from "../../database/rpg/craftMaterials.js";
import { recipes, getRecipeById } from "../../database/rpg/recipes.js";
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

// ── Metadata ─────────────────────────────────────────────

export const info = {
  name: "Recipes",
  menu: ["recipes"],
  case: ["recipes", "recipebook", "book"],
  description: "View all your discovered recipes",
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

  if (player.knownRecipes.length === 0) {
    return LenwyText(getText(lang, "recipes.empty"));
  }

  // Filter by category if specified
  const categoryFilter = args[0]?.toLowerCase();

  // Get all known recipes
  const knownRecipes = player.knownRecipes
    .map(id => getRecipeById(id))
    .filter(r => r !== null);

  // Filter by category if specified
  const filteredRecipes = categoryFilter
    ? knownRecipes.filter(r => r.category === categoryFilter)
    : knownRecipes;

  if (filteredRecipes.length === 0) {
    return LenwyText(getText(lang, "recipes.noCategoryFound", { category: categoryFilter }));
  }

  // Group by category
  const byCategory = {};
  for (const recipe of filteredRecipes) {
    if (!byCategory[recipe.category]) {
      byCategory[recipe.category] = [];
    }
    byCategory[recipe.category].push(recipe);
  }

  let message = getText(lang, "recipes.count", { count: player.knownRecipes.length }) + "\n\n";

  for (const [category, recipeList] of Object.entries(byCategory)) {
    message += `*${getRecipeCategoryLabel(lang, category)}*\n`;
    
    for (const recipe of recipeList) {
      const resultItem = items[recipe.result.itemId];
      const canCraft = checkCanCraft(recipe, playerBag);
      const statusIcon = canCraft ? getText(lang, "recipes.canCraft") : getText(lang, "recipes.cantCraft");
      
      message += `\n${statusIcon} ${resultItem?.name || recipe.result.itemId}\n`;
      message += getText(lang, "recipes.result", { qty: recipe.result.quantity }) + "\n";
      message += getText(lang, "recipes.materials") + "\n";
      
      for (const mat of recipe.materials) {
        const matItem = resolveCraftMaterial(mat.itemId);
        const playerAmount = playerBag[mat.itemId] || 0;
        const hasEnough = playerAmount >= mat.quantity ? "✅" : "❌";
        message += `  - ${hasEnough} ${matItem?.name || mat.itemId} (${playerAmount}/${mat.quantity})\n`;
      }
      
      message += getText(lang, "recipes.craftCommand", { id: recipe.id }) + "\n";
    }
    message += "\n";
  }

  message += getText(lang, "recipes.commands");
  message += getText(lang, "recipes.craftCmd") + "\n";
  message += getText(lang, "recipes.craftItemCmd") + "\n";
  message += getText(lang, "recipes.studyCmd");

  return LenwyText(message);
}

// ── Helper Functions ──────────────────────────────────────

/**
 * Check if player can craft a recipe
 */
function checkCanCraft(recipe, playerBag) {
  for (const mat of recipe.materials) {
    const playerAmount = playerBag[mat.itemId] || 0;
    if (playerAmount < mat.quantity) {
      return false;
    }
  }
  return true;
}
