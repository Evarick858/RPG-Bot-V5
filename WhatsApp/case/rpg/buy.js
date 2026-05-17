/*
  RPG Command : buy
  Base : Lenwy SCM — RPG Extension

  Usage: buy <item name> [qty]
  Example: buy health_potion
           buy health_potion 3

  Rules:
  - Must be at a location with a shop
  - Item must be in current shop stock
  - Must have enough gold
  - Stock is limited and deducted after purchase
  - Default qty = 1
*/

import fs from "fs";
import path from "path";
import { getShopInventory, getItemPrice, purchaseItem } from "../../database/rpg/shopData.js";
import { getItemByName } from "../../database/rpg/items.js";
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

function addToInventory(player, itemId, qty = 1) {
  if (!player.inventory) player.inventory = [];
  const existing = player.inventory.find((i) => i.id === itemId);
  if (existing) existing.qty += qty;
  else player.inventory.push({ id: itemId, qty });
}

function cmdPrefix() {
  return globalThis.noprefix ? "" : "!";
}

export const info = {
  name: "Buy",
  menu: ["buy"],
  case: ["buy"],
  description: "Buy an item from the shop.",
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
  const { normalizedSender, LenwyText, q, lenwy } = leni;

  const px = cmdPrefix();

  const botJid = lenwy.user?.id?.split(":")[0] + "@s.whatsapp.net";
  if (normalizedSender === botJid) return;

  const players = loadPlayers();
  const player = players[normalizedSender];

  if (!player) {
    const lang = getLanguage("id");
    return LenwyText(getText(lang, "gold.notRegistered"));
  }

  const lang = getLanguage(getPlayerLanguage(player));

  const shop = getShopInventory(player.currentLocation);

  if (!shop) {
    return LenwyText(getText(lang, "shop.buyNoShop", { prefix: px }));
  }

  if (!q.trim()) {
    return LenwyText(getText(lang, "shop.buyUsage", { prefix: px }));
  }

  const parts = q.trim().toLowerCase().split(/\s+/);
  let qty = 1;
  let itemNameParts = parts;

  const lastPart = parts[parts.length - 1];
  if (/^\d+$/.test(lastPart)) {
    qty = Math.max(1, Math.min(99, parseInt(lastPart)));
    itemNameParts = parts.slice(0, -1);
  }

  const itemName = itemNameParts.join("_");
  const itemData = getItemByName(itemName);

  if (!itemData) {
    // Smart fallback: try prefixing with "skill_book_" if not found
    const skillBookAttempt = getItemByName(`skill_book_${itemName}`);
    if (skillBookAttempt) {
      // Check if it's in this shop before redirecting
      const shopItem = shop.inventory.find((s) => s.itemId === skillBookAttempt.id);
      if (shopItem) {
        return LenwyText(
          lang.code === "id"
            ? `💡 *Maksud kamu* \`${skillBookAttempt.id}\`?\n\nKetik: *!buy ${skillBookAttempt.id}*`
            : `💡 *Did you mean* \`${skillBookAttempt.id}\`?\n\nType: *!buy ${skillBookAttempt.id}*`
        );
      }
    }
    return LenwyText(getText(lang, "shop.buyItemNotFound", { item: itemName, prefix: px }));
  }

  if (itemData.buyPrice <= 0) {
    return LenwyText(getText(lang, "shop.itemNotPurchasable", { name: itemData.name }));
  }

  const shopItem = shop.inventory.find((s) => s.itemId === itemData.id);

  if (!shopItem) {
    return LenwyText(getText(lang, "shop.itemNotInThisShop", { name: itemData.name, prefix: px }));
  }

  if (shopItem.stock < qty) {
    return LenwyText(
      getText(lang, "shop.buyLowStock", {
        name: itemData.name,
        stock: String(shopItem.stock),
        want: String(qty),
      }),
    );
  }

  const price = getItemPrice(itemData.id, player.currentLocation);
  const totalCost = price * qty;

  if (player.gold < totalCost) {
    return LenwyText(
      getText(lang, "shop.buyFailed", {
        reason: getText(lang, "shop.notEnoughGold", {
          need: totalCost,
          have: player.gold,
        }),
      }),
    );
  }

  const purchaseResult = purchaseItem(itemData.id, player.currentLocation, qty);

  if (!purchaseResult.success) {
    return LenwyText(
      getText(lang, "shop.purchaseFailed", { message: purchaseResult.message }),
    );
  }

  player.gold -= totalCost;
  addToInventory(player, itemData.id, qty);
  player.lastActive = new Date().toISOString();
  players[normalizedSender] = player;
  savePlayers(players);

  return LenwyText(
    getText(lang, "shop.buySuccess", { qty, item: itemData.name, price: totalCost }) +
      `\n` +
      getText(lang, "shop.buyRemainingGold", { gold: String(player.gold) }) +
      getText(lang, "shop.buyStockRemaining", { stock: String(shopItem.stock) }) +
      getText(lang, "shop.buyAddedToInventory"),
  );
}
