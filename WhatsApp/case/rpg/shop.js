/*
  RPG Command : shop
  Base : Lenwy SCM — RPG Extension

  Commands:
  - shop          → view current shop stock

  Rules:
  - Must be at a location with a shop
  - Shop stock is limited, resets every 30 minutes
  - Different shops sell different items
  - Prices vary by location
  - Bot is excluded
*/

import fs from "fs";
import path from "path";
import { getLocationById } from "../../database/rpg/locations.js";
import { 
  locationShops, 
  shopCategories, 
  getShopInventory, 
  getItemPrice,
  getTimeUntilRestock,
  formatRestockTime
} from "../../database/rpg/shopData.js";
import { items } from "../../database/rpg/items.js";
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

// ── Metadata ─────────────────────────────────────────────

export const info = {
  name: "Shop",
  menu: ["shop"],
  case: ["shop"],
  description: "Browse the local shop. Stock resets every 30 minutes.",
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
  const {
    lenwy,
    normalizedSender,
    LenwyText,
  } = leni;

  const botJid = lenwy.user?.id?.split(":")[0] + "@s.whatsapp.net";
  if (normalizedSender === botJid) return;

  const players = loadPlayers();
  const player = players[normalizedSender];

  if (!player) {
    const lang = getLanguage("id");
    return LenwyText(
      `⚠️ *${getText(lang, "common.notRegistered")}*\n\n${getText(lang, "common.registerFirst")}`
    );
  }

  const lang = getLanguage(getPlayerLanguage(player));

  const location = getLocationById(player.currentLocation);
  const shop = getShopInventory(player.currentLocation);

  if (!shop) {
    if (lang.code === "id") {
      return LenwyText(
        `🚫 *Tidak ada toko di sini.*\n\n` +
        `Pergi ke lokasi yang memiliki toko.\n\n` +
        `*Lokasi toko yang diketahui:*\n` +
        `• 🏘️ Desa Pemula (Toko Umum)\n` +
        `• 🏪 Pos Dagang (Pedagang Lanjutan)\n` +
        `• 🎣 Desa Nelayan (Perlengkapan Memancing)\n` +
        `• ⛰️ Pos Gunung (Spesialis Warrior)\n` +
        `• 🏜️ Oasis Gurun (Pedagang Lanjutan)\n` +
        `• ☁️ Sanctum Terapung (Toko Sihir)\n` +
        `• 🌑 Kota Bawah Tanah (Toko Rogue)\n` +
        `• 🏛️ Kuil Mistis (Toko Sihir)\n\n` +
        `Ketik *!location* untuk melihat posisi kamu.`
      );
    }
    return LenwyText(
      `🚫 *There is no shop here.*\n\n` +
      `Travel to a location with a shop.\n\n` +
      `*Known shop locations:*\n` +
      `• 🏘️ Starter Village (General Store)\n` +
      `• 🏪 Trading Post (Advanced Trader)\n` +
      `• 🎣 Fishing Village (Fishing Gear)\n` +
      `• ⛰️ Mountain Outpost (Warrior Specialist)\n` +
      `• 🏜️ Desert Oasis (Advanced Trader)\n` +
      `• ☁️ Floating Sanctuary (Magic Shop)\n` +
      `• 🌑 Underground City (Rogue Shop)\n` +
      `• 🏛️ Mystic Temple (Magic Shop)\n\n` +
      `Type *!location* to see where you are.`
    );
  }

  // Get shop category info
  const category = shopCategories[shop.category];
  const timeUntilRestock = getTimeUntilRestock(player.currentLocation);

  // Build shop display
  let text = `${category.emoji} *${category.name}*\n`;
  text += `📍 ${location?.name || player.currentLocation}\n`;
  text += `💬 "${category.description}"\n\n`;
  text += `${getText(lang, "shop.yourGold", {gold: player.gold})}\n`;
  text += `⏱️ ${lang.code === "id" ? "Restock dalam" : "Restock in"}: *${formatRestockTime(timeUntilRestock)}*\n`;
  text += `💵 ${lang.code === "id" ? "Pengali harga" : "Price multiplier"}: *${shop.priceMultiplier}x*\n\n`;
  text += `*═══ ${lang.code === "id" ? "INVENTORI" : "INVENTORY"} ═══*\n`;

  // Group items by category
  const itemsByCategory = {};
  
  for (const shopItem of shop.inventory) {
    const itemData = items[shopItem.itemId];
    if (!itemData) continue;

    const cat = itemData.category || "other";
    if (!itemsByCategory[cat]) itemsByCategory[cat] = [];
    
    const price = getItemPrice(shopItem.itemId, player.currentLocation);
    itemsByCategory[cat].push({
      ...itemData,
      stock: shopItem.stock,
      price: price,
    });
  }

  // Display items by category
  const categoryOrder = ["weapon", "armor", "consumable", "tool", "skill_book", "material", "utility", "other"];
  const categoryEmojis = {
    weapon: "⚔️",
    armor: "🛡️",
    consumable: "🧪",
    tool: "🔨",
    skill_book: "📚",
    material: "📦",
    utility: "🎒",
    other: "📦",
  };
  const categoryNames = lang.code === "id"
    ? {
        weapon: "senjata",
        armor: "armor",
        consumable: "konsumsi",
        tool: "alat",
        skill_book: "buku skill",
        material: "material",
        utility: "utilitas",
        other: "lainnya",
      }
    : {};

  for (const cat of categoryOrder) {
    if (!itemsByCategory[cat]) continue;

    const emoji = categoryEmojis[cat] || "📦";
    const catName = (categoryNames[cat] || cat.replace("_", " ")).toUpperCase();
    text += `\n${emoji} *${catName}*\n`;

    for (const item of itemsByCategory[cat]) {
      const stockText = item.stock > 0
        ? (lang.code === "id" ? `(${item.stock} tersisa)` : `(${item.stock} left)`)
        : (lang.code === "id" ? `(HABIS)` : `(OUT OF STOCK)`);

      if (cat === "skill_book") {
        // Skill books get a detailed display with ID and requirements
        const classes = item.requiredClass?.join("/") || (lang.code === "id" ? "Semua" : "All");
        const level = item.requiredLevel || 1;
        const rarityLabel = item.rarity ? `[${item.rarity.toUpperCase()}]` : "";
        text += `• ${item.name} - *${item.price}g* ${stockText}\n`;
        text += `  ${rarityLabel} Lv${level}+ ${classes}\n`;
        text += `  🔑 \`${item.id}\`\n`;
      } else {
        text += `• ${item.name} - *${item.price}g* ${stockText}\n`;
        // Show rarity for weapons and armor
        if (item.rarity && (cat === "weapon" || cat === "armor")) {
          text += `  [${item.rarity.toUpperCase()}] 🔑 \`${item.id}\`\n`;
        }
      }
    }
  }

  const isId = lang.code === "id";
  text += `\n*═══ ${isId ? "CARA MEMBELI" : "HOW TO BUY"} ═══*\n`;
  text += `• *!buy <id>* — ${isId ? "Beli 1 item" : "Buy 1 item"}\n`;
  text += `• *!buy <id> <qty>* — ${isId ? "Beli beberapa" : "Buy multiple"}\n\n`;
  text += `*${isId ? "Contoh" : "Examples"}:*\n`;
  text += `!buy health_potion\n`;
  text += `!buy health_potion 5\n`;
  text += `!buy skill_book_meteor\n\n`;
  text += `📚 *${isId ? "Cara pakai Skill Book" : "How to use a Skill Book"}:*\n`;
  text += `1. ${isId ? "Beli" : "Buy"}: !buy skill_book_meteor\n`;
  text += `2. ${isId ? "Pelajari" : "Learn"}: !study skill_book_meteor\n`;
  text += `3. ${isId ? "Pasang" : "Equip"}: !equipskill meteor 1\n\n`;
  text += `💡 *Tip:* ${isId ? "ID item ada di bawah nama item (contoh: `health_potion`)" : "Item ID is shown below each item name (e.g., `health_potion`)"}`;

  return LenwyText(text);
}
