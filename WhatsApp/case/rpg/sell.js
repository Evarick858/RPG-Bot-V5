/*
  RPG Command : sell
  Base : Lenwy SCM — RPG Extension

  Enhanced selling system with multiple options:
  
  Single item:
  - sell <item>              → Sell 1 item
  - sell <item> <qty>        → Sell X items
  - sell all <item>          → Sell all of that item
  
  Multiple items:
  - sell <item1>, <item2>    → Sell 1 of each
  - sell <item1>, <item2> <qty> → Sell X of each
  - sell <item1>, <item2> all   → Sell all of each
  
  By category:
  - sell <category> all      → Sell all items in category
  - sell <category> <qty>    → Sell X of each in category
  
  Categories: weapon, armor, material, consumable, tool, fish, ore, wood, herb
  
  Confirmation:
  - sell confirm             → Confirm pending sale

  Rules:
  - Must be at a location with a shop
  - Item must have sellPrice > 0
  - Equipped items cannot be sold
  - Quest items cannot be sold
  - Large sales require confirmation
*/

import fs from "fs";
import path from "path";
import { canDoAction } from "../../database/rpg/locations.js";
import { hasShop } from "../../database/rpg/shopData.js";
import { items } from "../../database/rpg/items.js";
import { fishList } from "../../database/rpg/fish.js";
import { ores } from "../../database/rpg/ores.js";
import { woods } from "../../database/rpg/woods.js";
import { herbs } from "../../database/rpg/herbs.js";
import { getLanguage, getText, getPlayerLanguage } from "../../database/rpg/languages.js";

const playersPath = path.join(process.cwd(), "WhatsApp", "database", "rpg", "players.json");

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

function savePlayers(players) {
  const raw = fs.readFileSync(playersPath, "utf8");
  const data = JSON.parse(raw);
  const updated = {
    _comment: data._comment,
    _template: data._template,
    ...players,
  };
  fs.writeFileSync(playersPath, JSON.stringify(updated, null, 2), "utf8");
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

  return null;
}

// Get all items from player inventory by category
function getItemsByCategory(player, category) {
  const categoryMap = {
    weapon: "weapon",
    armor: "armor",
    material: "material",
    consumable: "consumable",
    tool: "tool",
    utility: "utility",
    quest: "quest",
    fish: "fish",
    ore: "ore",
    wood: "wood",
    herb: "herb",
  };

  const targetCategory = categoryMap[category.toLowerCase()];
  if (!targetCategory) return [];

  const result = [];

  for (const invItem of player.inventory) {
    if (invItem.qty <= 0) continue;

    const itemData = getItemData(invItem.id);
    if (!itemData) continue;

    // Check category
    let matches = false;
    if (targetCategory === "fish" && fishList[invItem.id]) matches = true;
    else if (targetCategory === "ore" && ores[invItem.id]) matches = true;
    else if (targetCategory === "wood" && woods[invItem.id]) matches = true;
    else if (targetCategory === "herb" && herbs[invItem.id]) matches = true;
    else if (itemData.category === targetCategory) matches = true;

    if (matches) {
      result.push({
        invItem,
        itemData,
      });
    }
  }

  return result;
}

// Check if item is equipped
function isItemEquipped(player, itemId) {
  if (!player.equipment) return false;
  
  return Object.values(player.equipment).some(equipped => 
    equipped && equipped.id === itemId
  );
}

// Check if item can be sold
function canSellItem(itemData, player, itemId) {
  // Must have sell price
  if (!itemData.sellPrice || itemData.sellPrice <= 0) return false;
  
  // Cannot sell quest items
  if (itemData.category === "quest") return false;
  
  // Cannot sell equipped items
  if (isItemEquipped(player, itemId)) return false;
  
  return true;
}

export const info = {
  name: "Sell",
  menu: ["sell"],
  case: ["sell"],
  description: "Sell items from your inventory to the shop.",
  hidden: false,
  owner: false,
  premium: false,
  group: false,
  private: false,
  admin: false,
  botAdmin: false,
  allowPrivate: true,
};

export default async function handler(leni) {
  const { lenwy, normalizedSender, LenwyText, q } = leni;

  const botJid = lenwy.user?.id?.split(":")[0] + "@s.whatsapp.net";
  if (normalizedSender === botJid) return;

  const players = loadPlayers();
  const player = players[normalizedSender];
  const lang = player ? getLanguage(getPlayerLanguage(player)) : getLanguage("id");

  if (!player) {
    return LenwyText(
      `⚠️ *${getText(lang, "common.notRegistered")}*\n\n` +
      getText(lang, "common.registerFirst")
    );
  }

  if (!canDoAction(player.currentLocation, "shop") || !hasShop(player.currentLocation)) {
    if (lang.code === "id") {
      return LenwyText(
        `🚫 *Tidak ada toko di sini.*\n\n` +
        `Pergi ke lokasi yang memiliki toko untuk menjual item.`
      );
    }
    return LenwyText(
      `🚫 *There is no shop here.*\n\n` +
      `Travel to a location with a shop to sell items.`
    );
  }

  // Initialize pending sale if not exists
  if (!player.pendingSale) {
    player.pendingSale = null;
  }

  // Handle confirmation
  if (q.trim().toLowerCase() === "confirm" || q.trim().toLowerCase() === "konfirmasi") {
    if (!player.pendingSale) {
      if (lang.code === "id") {
        return LenwyText(`⚠️ *Tidak ada penjualan yang menunggu konfirmasi.*`);
      }
      return LenwyText(`⚠️ *No pending sale to confirm.*`);
    }

    // Execute the sale
    const sale = player.pendingSale;
    let totalEarned = 0;
    const soldItems = [];

    for (const item of sale.items) {
      const invItem = player.inventory.find(i => i.id === item.itemId);
      if (!invItem || invItem.qty < item.qty) continue;

      const earned = item.sellPrice * item.qty;
      totalEarned += earned;

      invItem.qty -= item.qty;
      if (invItem.qty <= 0) {
        player.inventory = player.inventory.filter(i => i.id !== item.itemId);
      }

      soldItems.push({
        name: item.name,
        qty: item.qty,
        earned: earned,
      });
    }

    player.gold += totalEarned;
    player.stats_tracker.totalGoldEarned = (player.stats_tracker.totalGoldEarned || 0) + totalEarned;
    player.lastActive = new Date().toISOString();
    player.pendingSale = null;

    players[normalizedSender] = player;
    savePlayers(players);

    // Build success message
    let text = lang.code === "id" 
      ? `✅ *PENJUALAN BERHASIL!*\n\n`
      : `✅ *SALE SUCCESSFUL!*\n\n`;

    text += lang.code === "id" ? `*═══ ITEM TERJUAL ═══*\n` : `*═══ ITEMS SOLD ═══*\n`;
    
    for (const item of soldItems) {
      text += `• ${item.name} x${item.qty} → *${item.earned}g*\n`;
    }

    text += `\n*═══════════════*\n`;
    text += lang.code === "id" 
      ? `💰 *Total Diterima:* ${totalEarned}g\n`
      : `💰 *Total Earned:* ${totalEarned}g\n`;
    text += lang.code === "id"
      ? `💵 *Gold Sekarang:* ${player.gold}g`
      : `💵 *Current Gold:* ${player.gold}g`;

    return LenwyText(text);
  }

  // Cancel pending sale if new command
  if (player.pendingSale) {
    player.pendingSale = null;
  }

  if (!q.trim()) {
    if (lang.code === "id") {
      return LenwyText(
        `📦 *CARA MENJUAL ITEM*\n\n` +
        `*Jual 1 item:*\n` +
        `• sell <item>\n` +
        `• sell <item> <jumlah>\n` +
        `• sell all <item>\n\n` +
        `*Jual beberapa item:*\n` +
        `• sell <item1>, <item2>\n` +
        `• sell <item1>, <item2> <jumlah>\n` +
        `• sell <item1>, <item2> all\n\n` +
        `*Jual per kategori:*\n` +
        `• sell <kategori> all\n` +
        `• sell <kategori> <jumlah>\n\n` +
        `*Kategori:* weapon, armor, material, consumable, tool, fish, ore, wood, herb\n\n` +
        `*Contoh:*\n` +
        `• sell rat_fur 10\n` +
        `• sell rat_fur, wolf_pelt all\n` +
        `• sell material all\n` +
        `• sell fish 5\n\n` +
        `💡 *Tip:* Penjualan besar akan meminta konfirmasi.`
      );
    }
    return LenwyText(
      `📦 *HOW TO SELL ITEMS*\n\n` +
      `*Sell single item:*\n` +
      `• sell <item>\n` +
      `• sell <item> <quantity>\n` +
      `• sell all <item>\n\n` +
      `*Sell multiple items:*\n` +
      `• sell <item1>, <item2>\n` +
      `• sell <item1>, <item2> <quantity>\n` +
      `• sell <item1>, <item2> all\n\n` +
      `*Sell by category:*\n` +
      `• sell <category> all\n` +
      `• sell <category> <quantity>\n\n` +
      `*Categories:* weapon, armor, material, consumable, tool, fish, ore, wood, herb\n\n` +
      `*Examples:*\n` +
      `• sell rat_fur 10\n` +
      `• sell rat_fur, wolf_pelt all\n` +
      `• sell material all\n` +
      `• sell fish 5\n\n` +
      `💡 *Tip:* Large sales will require confirmation.`
    );
  }

  const input = q.trim().toLowerCase();
  const parts = input.split(/\s+/);

  // Check if it's a category sell
  const categories = ["weapon", "armor", "material", "consumable", "tool", "utility", "fish", "ore", "wood", "herb"];
  const firstWord = parts[0];

  if (categories.includes(firstWord)) {
    // Selling by category
    const category = firstWord;
    const secondWord = parts[1];

    let sellAll = false;
    let qty = 1;

    if (secondWord === "all" || secondWord === "semua") {
      sellAll = true;
    } else if (secondWord && /^\d+$/.test(secondWord)) {
      qty = Math.max(1, Math.min(9999, parseInt(secondWord)));
    } else {
      if (lang.code === "id") {
        return LenwyText(
          `⚠️ *Format salah!*\n\n` +
          `Gunakan:\n` +
          `• sell ${category} all\n` +
          `• sell ${category} <jumlah>`
        );
      }
      return LenwyText(
        `⚠️ *Invalid format!*\n\n` +
        `Use:\n` +
        `• sell ${category} all\n` +
        `• sell ${category} <quantity>`
      );
    }

    const categoryItems = getItemsByCategory(player, category);
    
    if (categoryItems.length === 0) {
      if (lang.code === "id") {
        return LenwyText(`⚠️ *Tidak ada item ${category} yang bisa dijual.*`);
      }
      return LenwyText(`⚠️ *No ${category} items available to sell.*`);
    }

    // Build sale list
    const saleItems = [];
    let totalValue = 0;
    const skippedItems = [];

    for (const { invItem, itemData } of categoryItems) {
      if (!canSellItem(itemData, player, invItem.id)) {
        skippedItems.push(itemData.name);
        continue;
      }

      const qtyToSell = sellAll ? invItem.qty : Math.min(qty, invItem.qty);
      const value = itemData.sellPrice * qtyToSell;

      saleItems.push({
        itemId: invItem.id,
        name: itemData.name,
        qty: qtyToSell,
        sellPrice: itemData.sellPrice,
      });

      totalValue += value;
    }

    if (saleItems.length === 0) {
      if (lang.code === "id") {
        return LenwyText(`⚠️ *Tidak ada item ${category} yang bisa dijual.*\n\n${skippedItems.length > 0 ? `Item yang tidak bisa dijual: ${skippedItems.join(", ")}` : ""}`);
      }
      return LenwyText(`⚠️ *No ${category} items can be sold.*\n\n${skippedItems.length > 0 ? `Cannot sell: ${skippedItems.join(", ")}` : ""}`);
    }

    // Require confirmation for category sales
    player.pendingSale = {
      items: saleItems,
      totalValue: totalValue,
    };
    players[normalizedSender] = player;
    savePlayers(players);

    let text = lang.code === "id"
      ? `⚠️ *KONFIRMASI PENJUALAN*\n\n`
      : `⚠️ *SALE CONFIRMATION*\n\n`;

    text += lang.code === "id" ? `*Kategori:* ${category}\n\n` : `*Category:* ${category}\n\n`;
    text += lang.code === "id" ? `*═══ ITEM YANG AKAN DIJUAL ═══*\n` : `*═══ ITEMS TO SELL ═══*\n`;

    for (const item of saleItems.slice(0, 10)) {
      text += `• ${item.name} x${item.qty} → *${item.sellPrice * item.qty}g*\n`;
    }

    if (saleItems.length > 10) {
      text += lang.code === "id" 
        ? `... dan ${saleItems.length - 10} item lainnya\n`
        : `... and ${saleItems.length - 10} more items\n`;
    }

    text += `\n*═══════════════*\n`;
    text += lang.code === "id"
      ? `💰 *Total:* ${totalValue}g\n`
      : `💰 *Total:* ${totalValue}g\n`;
    text += lang.code === "id"
      ? `📦 *Jumlah Item:* ${saleItems.length}\n\n`
      : `📦 *Item Count:* ${saleItems.length}\n\n`;

    if (skippedItems.length > 0) {
      text += lang.code === "id"
        ? `⚠️ *Dilewati:* ${skippedItems.slice(0, 5).join(", ")}${skippedItems.length > 5 ? "..." : ""}\n\n`
        : `⚠️ *Skipped:* ${skippedItems.slice(0, 5).join(", ")}${skippedItems.length > 5 ? "..." : ""}\n\n`;
    }

    text += lang.code === "id"
      ? `Ketik *sell confirm* untuk melanjutkan.`
      : `Type *sell confirm* to proceed.`;

    return LenwyText(text);
  }

  // Check if comma-separated (multiple items)
  if (input.includes(",")) {
    const segments = input.split(",").map(s => s.trim());
    
    // Check if last segment has quantity or "all"
    let sellAll = false;
    let qty = 1;
    const lastSegment = segments[segments.length - 1];
    const lastParts = lastSegment.split(/\s+/);

    if (lastParts.length > 1) {
      const lastWord = lastParts[lastParts.length - 1];
      if (lastWord === "all" || lastWord === "semua") {
        sellAll = true;
        segments[segments.length - 1] = lastParts.slice(0, -1).join("_");
      } else if (/^\d+$/.test(lastWord)) {
        qty = Math.max(1, Math.min(9999, parseInt(lastWord)));
        segments[segments.length - 1] = lastParts.slice(0, -1).join("_");
      }
    }

    // Process each item
    const saleItems = [];
    let totalValue = 0;
    const notFound = [];
    const cannotSell = [];

    for (let itemName of segments) {
      itemName = itemName.replace(/\s+/g, "_");
      const itemData = getItemData(itemName);

      if (!itemData) {
        notFound.push(itemName);
        continue;
      }

      if (!canSellItem(itemData, player, itemData.id)) {
        cannotSell.push(itemData.name);
        continue;
      }

      const invItem = player.inventory.find(i => i.id === itemData.id);
      if (!invItem || invItem.qty <= 0) {
        notFound.push(itemData.name);
        continue;
      }

      const qtyToSell = sellAll ? invItem.qty : Math.min(qty, invItem.qty);
      const value = itemData.sellPrice * qtyToSell;

      saleItems.push({
        itemId: itemData.id,
        name: itemData.name,
        qty: qtyToSell,
        sellPrice: itemData.sellPrice,
      });

      totalValue += value;
    }

    if (saleItems.length === 0) {
      let errorMsg = lang.code === "id" ? `⚠️ *Tidak ada item yang bisa dijual.*\n\n` : `⚠️ *No items can be sold.*\n\n`;
      if (notFound.length > 0) {
        errorMsg += lang.code === "id" 
          ? `Tidak ditemukan: ${notFound.join(", ")}\n`
          : `Not found: ${notFound.join(", ")}\n`;
      }
      if (cannotSell.length > 0) {
        errorMsg += lang.code === "id"
          ? `Tidak bisa dijual: ${cannotSell.join(", ")}`
          : `Cannot sell: ${cannotSell.join(", ")}`;
      }
      return LenwyText(errorMsg);
    }

    // If selling multiple items or large quantity, require confirmation
    if (saleItems.length > 1 || totalValue > 1000) {
      player.pendingSale = {
        items: saleItems,
        totalValue: totalValue,
      };
      players[normalizedSender] = player;
      savePlayers(players);

      let text = lang.code === "id"
        ? `⚠️ *KONFIRMASI PENJUALAN*\n\n`
        : `⚠️ *SALE CONFIRMATION*\n\n`;

      text += lang.code === "id" ? `*═══ ITEM YANG AKAN DIJUAL ═══*\n` : `*═══ ITEMS TO SELL ═══*\n`;

      for (const item of saleItems) {
        text += `• ${item.name} x${item.qty} → *${item.sellPrice * item.qty}g*\n`;
      }

      text += `\n*═══════════════*\n`;
      text += lang.code === "id"
        ? `💰 *Total:* ${totalValue}g\n\n`
        : `💰 *Total:* ${totalValue}g\n\n`;

      if (notFound.length > 0 || cannotSell.length > 0) {
        text += lang.code === "id" ? `⚠️ *Dilewati:*\n` : `⚠️ *Skipped:*\n`;
        if (notFound.length > 0) text += `${notFound.join(", ")}\n`;
        if (cannotSell.length > 0) text += `${cannotSell.join(", ")}\n`;
        text += `\n`;
      }

      text += lang.code === "id"
        ? `Ketik *sell confirm* untuk melanjutkan.`
        : `Type *sell confirm* to proceed.`;

      return LenwyText(text);
    }

    // Single item, small value - sell immediately
    const item = saleItems[0];
    const invItem = player.inventory.find(i => i.id === item.itemId);
    invItem.qty -= item.qty;
    if (invItem.qty <= 0) {
      player.inventory = player.inventory.filter(i => i.id !== item.itemId);
    }

    player.gold += totalValue;
    player.stats_tracker.totalGoldEarned = (player.stats_tracker.totalGoldEarned || 0) + totalValue;
    player.lastActive = new Date().toISOString();
    players[normalizedSender] = player;
    savePlayers(players);

    return LenwyText(
      lang.code === "id"
        ? `✅ *Berhasil menjual!*\n\n` +
          `• ${item.name} x${item.qty}\n` +
          `💰 *Diterima:* ${totalValue}g\n` +
          `💵 *Gold:* ${player.gold}g`
        : `✅ *Successfully sold!*\n\n` +
          `• ${item.name} x${item.qty}\n` +
          `💰 *Earned:* ${totalValue}g\n` +
          `💵 *Gold:* ${player.gold}g`
    );
  }

  // Single item sell (original logic)
  let sellAll = false;
  let itemNameParts = parts;
  let qty = 1;

  if (parts[0] === "all" || parts[0] === "semua") {
    sellAll = true;
    itemNameParts = parts.slice(1);
  } else {
    const lastPart = parts[parts.length - 1];
    if (/^\d+$/.test(lastPart)) {
      qty = Math.max(1, Math.min(9999, parseInt(lastPart)));
      itemNameParts = parts.slice(0, -1);
    }
  }

  const itemName = itemNameParts.join("_");
  const itemData = getItemData(itemName);

  if (!itemData) {
    return LenwyText(
      lang.code === "id"
        ? `⚠️ *Item tidak ditemukan:* ${itemName.replace(/_/g, " ")}`
        : `⚠️ *Item not found:* ${itemName.replace(/_/g, " ")}`
    );
  }

  if (!canSellItem(itemData, player, itemData.id)) {
    let reason = "";
    if (itemData.category === "quest") {
      reason = lang.code === "id" ? "Item quest tidak bisa dijual" : "Quest items cannot be sold";
    } else if (isItemEquipped(player, itemData.id)) {
      reason = lang.code === "id" ? "Item sedang dipakai" : "Item is equipped";
    } else {
      reason = lang.code === "id" ? "Item tidak bisa dijual" : "Item cannot be sold";
    }
    return LenwyText(
      lang.code === "id"
        ? `⚠️ *${itemData.name}* - ${reason}`
        : `⚠️ *${itemData.name}* - ${reason}`
    );
  }

  const invItem = player.inventory.find((i) => i.id === itemData.id);
  if (!invItem || invItem.qty <= 0) {
    return LenwyText(
      lang.code === "id"
        ? `⚠️ *${itemData.name}* tidak ada di inventory.`
        : `⚠️ *${itemData.name}* not in inventory.`
    );
  }

  if (sellAll) qty = invItem.qty;
  qty = Math.min(qty, invItem.qty);

  const totalEarned = itemData.sellPrice * qty;

  // Require confirmation for large sales
  if (totalEarned > 1000 || qty > 50) {
    player.pendingSale = {
      items: [{
        itemId: itemData.id,
        name: itemData.name,
        qty: qty,
        sellPrice: itemData.sellPrice,
      }],
      totalValue: totalEarned,
    };
    players[normalizedSender] = player;
    savePlayers(players);

    return LenwyText(
      lang.code === "id"
        ? `⚠️ *KONFIRMASI PENJUALAN*\n\n` +
          `• ${itemData.name} x${qty}\n` +
          `💰 *Total:* ${totalEarned}g\n\n` +
          `Ketik *sell confirm* untuk melanjutkan.`
        : `⚠️ *SALE CONFIRMATION*\n\n` +
          `• ${itemData.name} x${qty}\n` +
          `💰 *Total:* ${totalEarned}g\n\n` +
          `Type *sell confirm* to proceed.`
    );
  }

  // Sell immediately for small sales
  invItem.qty -= qty;
  if (invItem.qty <= 0) {
    player.inventory = player.inventory.filter((i) => i.id !== itemData.id);
  }

  player.gold += totalEarned;
  player.stats_tracker.totalGoldEarned = (player.stats_tracker.totalGoldEarned || 0) + totalEarned;
  player.lastActive = new Date().toISOString();
  players[normalizedSender] = player;
  savePlayers(players);

  return LenwyText(
    lang.code === "id"
      ? `✅ *Berhasil menjual!*\n\n` +
        `• ${itemData.name} x${qty}\n` +
        `💰 *Diterima:* ${totalEarned}g\n` +
        `💵 *Gold:* ${player.gold}g`
      : `✅ *Successfully sold!*\n\n` +
        `• ${itemData.name} x${qty}\n` +
        `💰 *Earned:* ${totalEarned}g\n` +
        `💵 *Gold:* ${player.gold}g`
  );
}
