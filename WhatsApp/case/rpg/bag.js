/*
  RPG Command : bag
  Base : Lenwy SCM — RPG Extension

  Flow:
  1. Player types "bag" (with prefix)
  2. Bot displays inventory organized by category:
     - Combat items (potions, grenades, etc.)
     - Utility items (teleports, escape ropes)
     - Materials (bars, planks, crafting items)
     - Quest items (keys, letters, gems)
     - Fish (all caught fish)
     - Ores (all mined ores)
     - Woods (all chopped wood)
     - Herbs (all foraged herbs)
  3. Shows quantity, sell value per item, and total inventory value
  4. Bot is excluded from using this command
*/

import fs from "fs";
import path from "path";
import { items } from "../../database/rpg/items.js";
import { fishList } from "../../database/rpg/fish.js";
import { ores } from "../../database/rpg/ores.js";
import { woods } from "../../database/rpg/woods.js";
import { herbs } from "../../database/rpg/herbs.js";
import { getLanguage, getText, getPlayerLanguage } from "../../database/rpg/languages.js";

const playersPath = path.join(process.cwd(), "WhatsApp", "database", "rpg", "players.json");

// ── Helpers ──────────────────────────────────────────────

function loadPlayers() {
  try {
    const data = JSON.parse(fs.readFileSync(playersPath, "utf8"));
    const players = { ...data };
    delete players._comment;
    delete players._template;
    return players;
  } catch {
    return {};
  }
}

// Get item data from any database
function getItemData(itemId) {
  // Check items.js first
  if (items[itemId]) return items[itemId];

  // Check fish
  if (fishList[itemId]) return fishList[itemId];

  // Check ores
  if (ores[itemId]) return ores[itemId];

  // Check woods
  if (woods[itemId]) return woods[itemId];

  // Check herbs
  if (herbs[itemId]) return herbs[itemId];

  // Unknown item
  return {
    id: itemId,
    name: `❓ ${itemId.replace(/_/g, " ")}`,
    category: "unknown",
    description: "Unknown item",
    sellPrice: 0,
  };
}

// Categorize inventory items
function categorizeInventory(inventory) {
  const categories = {
    combat: [],
    utility: [],
    tools: [],
    pet_items: [],
    skill_books: [],
    weapons: [],
    armor: [],
    shields: [],
    accessories: [],
    material: [],
    quest: [],
    fish: [],
    ore: [],
    wood: [],
    herb: [],
    unknown: [],
  };

  for (const invItem of inventory) {
    const itemData = getItemData(invItem.id);

    // Determine category
    if (fishList[invItem.id]) {
      categories.fish.push({ ...invItem, data: itemData });
    } else if (ores[invItem.id]) {
      categories.ore.push({ ...invItem, data: itemData });
    } else if (woods[invItem.id]) {
      categories.wood.push({ ...invItem, data: itemData });
    } else if (herbs[invItem.id]) {
      categories.herb.push({ ...invItem, data: itemData });
    } else if (itemData.category === "skill_book") {
      categories.skill_books.push({ ...invItem, data: itemData });
    } else if (itemData.category === "weapon") {
      categories.weapons.push({ ...invItem, data: itemData });
    } else if (itemData.category === "armor") {
      categories.armor.push({ ...invItem, data: itemData });
    } else if (itemData.category === "shield") {
      categories.shields.push({ ...invItem, data: itemData });
    } else if (itemData.category === "accessory") {
      categories.accessories.push({ ...invItem, data: itemData });
    } else if (itemData.category === "consumable" && itemData.target === "pet") {
      categories.pet_items.push({ ...invItem, data: itemData });
    } else if (itemData.category === "consumable" || itemData.usableInBattle) {
      categories.combat.push({ ...invItem, data: itemData });
    } else if (itemData.category === "tool") {
      categories.tools.push({ ...invItem, data: itemData });
    } else if (itemData.category === "utility") {
      categories.utility.push({ ...invItem, data: itemData });
    } else if (itemData.category === "material") {
      categories.material.push({ ...invItem, data: itemData });
    } else if (itemData.category === "quest") {
      categories.quest.push({ ...invItem, data: itemData });
    } else {
      categories.unknown.push({ ...invItem, data: itemData });
    }
  }

  return categories;
}

// Build category section text
function buildCategorySection(title, emoji, items) {
  if (items.length === 0) return "";

  let text = `\n${emoji} *${title}*\n`;
  for (const item of items) {
    const sellValue = item.data.sellPrice * item.qty;
    const sellText = item.data.sellPrice > 0 ? ` (${sellValue}g)` : "";
    text += `• ${item.data.name} x${item.qty}${sellText}\n`;
  }
  return text;
}

// Calculate total inventory value
function calculateTotalValue(inventory) {
  let total = 0;
  for (const invItem of inventory) {
    const itemData = getItemData(invItem.id);
    total += (itemData.sellPrice || 0) * invItem.qty;
  }
  return total;
}

// ── Metadata ─────────────────────────────────────────────

export const info = {
  name: "Bag",
  menu: ["bag"],
  case: ["bag", "inventory"],
  description: "View your inventory and all items you've collected.",
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
  const { lenwy, replyJid, normalizedSender, LenwyText } = leni;

  // Block bot
  const botJid = lenwy.user?.id?.split(":")[0] + "@s.whatsapp.net";
  if (normalizedSender === botJid) return;

  const players = loadPlayers();
  const player = players[normalizedSender];

  if (!player) {
    const lang = getLanguage("id"); // Default to Indonesian for non-registered
    return LenwyText(
      `⚠️ *${getText(lang, "common.notRegistered")}*\n\n` +
      getText(lang, "common.registerFirst")
    );
  }

  const lang = getLanguage(getPlayerLanguage(player));

  // Empty inventory
  if (!player.inventory || player.inventory.length === 0) {
    return LenwyText(
      `🎒 *${getText(lang, "bag.title")}*\n` +
      `${player.name}\n\n` +
      `${getText(lang, "bag.empty")}\n\n` +
      `💰 ${getText(lang, "common.gold")}: ${player.gold}\n\n` +
      `${lang.code === "id" ? "Pergi berburu, memancing, menambang, atau menebang untuk mengumpulkan item!" : "Go hunting, fishing, mining, or chopping to collect items!"}`
    );
  }

  // Categorize inventory
  const categories = categorizeInventory(player.inventory);
  const totalValue = calculateTotalValue(player.inventory);
  const totalItems = player.inventory.reduce((sum, i) => sum + i.qty, 0);

  // Build message
  let message = `🎒 *${getText(lang, "bag.title")}*\n`;
  message += `${player.name}\n`;
  message += `📦 ${getText(lang, "bag.items", {count: totalItems})}\n`;
  message += `💰 ${getText(lang, "bag.gold", {gold: player.gold})}\n`;
  message += `💎 ${lang.code === "id" ? "Total nilai tas" : "Total bag value"}: ${totalValue}g\n`;

  // Add category sections
  message += buildCategorySection("Combat Items", "⚔️", categories.combat);
  message += buildCategorySection("Skill Books", "📚", categories.skill_books);
  message += buildCategorySection("Weapons", "⚔️", categories.weapons);
  message += buildCategorySection("Armor", "🛡️", categories.armor);
  message += buildCategorySection("Shields", "🛡️", categories.shields);
  message += buildCategorySection("Accessories", "💍", categories.accessories);
  message += buildCategorySection("Tools", "🔧", categories.tools);
  message += buildCategorySection("Pet Items", "🐾", categories.pet_items);
  message += buildCategorySection("Utility Items", "🛠️", categories.utility);
  message += buildCategorySection("Materials", "📦", categories.material);
  message += buildCategorySection("Quest Items", "📜", categories.quest);
  message += buildCategorySection("Fish", "🐟", categories.fish);
  message += buildCategorySection("Ores & Gems", "⛏️", categories.ore);
  message += buildCategorySection("Wood", "🪵", categories.wood);
  message += buildCategorySection("Herbs & Plants", "🌿", categories.herb);

  if (categories.unknown.length > 0) {
    message += buildCategorySection("Unknown Items", "❓", categories.unknown);
  }

  message += `\n💡 *${getText(lang, "bag.commands")}*\n`;
  message += getText(lang, "bag.useItem") + `\n`;
  message += getText(lang, "bag.equipItem") + `\n`;
  message += getText(lang, "bag.sellItem");

  return LenwyText(message);
}
