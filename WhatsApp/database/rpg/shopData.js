/*
  RPG Shop Data
  Base : Lenwy SCM — RPG Extension

  Location-based shop system with:
  - Different inventory per location
  - Limited stock that refreshes every 30 minutes
  - Different prices per location
  - Shop categories (General, Advanced, Specialist, Magic, Rogue)
  - RANDOMIZED inventory based on rarity and category
  - Persistent restock timers (survives bot restart)
*/

import { items } from "./items.js";
import fs from "fs";
import path from "path";

// ── Shop Categories ──────────────────────────────────────

export const shopCategories = {
  general: {
    name: "General Store",
    emoji: "🏪",
    description: "Basic supplies for adventurers",
  },
  advanced: {
    name: "Advanced Trader",
    emoji: "💎",
    description: "Quality equipment and rare materials",
  },
  specialist: {
    name: "Specialist Shop",
    emoji: "⚔️",
    description: "High-tier equipment and combat items",
  },
  magic: {
    name: "Mystic Emporium",
    emoji: "🔮",
    description: "Magical items and mage equipment",
  },
  rogue: {
    name: "Shadow Market",
    emoji: "🌑",
    description: "Stealth gear and rogue equipment",
  },
};

// ── Shop Inventories by Location ─────────────────────────

// Shop configuration defines what TYPES of items a shop can sell
// Actual inventory is randomized on each restock

export const locationShops = {
  
  // ═══════════════════════════════════════════════════════
  // STARTER VILLAGE — General Store (ALWAYS HAS ESSENTIALS)
  // ═══════════════════════════════════════════════════════
  starter_village: {
    category: "general",
    priceMultiplier: 1.0,
    inventorySize: 25,
    guaranteedItems: [
      // Always available starter items
      { itemId: "health_potion", stock: 20 },
      { itemId: "mana_potion", stock: 20 },
      { itemId: "rusty_sword", stock: 5 },
      { itemId: "wooden_bow", stock: 5 },
      { itemId: "iron_dagger", stock: 5 },
      { itemId: "wooden_staff", stock: 5 },
      { itemId: "stone_axe", stock: 5 },
      { itemId: "basic_rod", stock: 5 },
      { itemId: "basic_axe", stock: 5 },
      { itemId: "town_portal", stock: 10 },
    ],
    randomPool: {
      categories: ["weapon", "armor", "consumable", "tool"],
      rarities: ["common", "uncommon"],
      minLevel: 1,
      maxLevel: 5,
      count: 15, // Additional random items
    },
  },

  // ═══════════════════════════════════════════════════════
  // LAKESIDE INN — General Store (Beginner)
  // ═══════════════════════════════════════════════════════
  lakeside_inn: {
    category: "general",
    priceMultiplier: 1.0,
    inventorySize: 15,
    guaranteedItems: [
      { itemId: "health_potion", stock: 15 },
      { itemId: "mana_potion", stock: 15 },
      { itemId: "town_portal", stock: 10 },
    ],
    randomPool: {
      categories: ["consumable", "tool", "utility"],
      rarities: ["common", "uncommon"],
      minLevel: 1,
      maxLevel: 3,
      count: 12,
    },
  },

  // ═══════════════════════════════════════════════════════
  // FARMER'S MARKET — Food & Tools
  // ═══════════════════════════════════════════════════════
  farmers_market: {
    category: "general",
    priceMultiplier: 0.9, // 10% cheaper
    inventorySize: 18,
    guaranteedItems: [
      { itemId: "health_potion", stock: 20 },
      { itemId: "basic_axe", stock: 10 },
    ],
    randomPool: {
      categories: ["consumable", "tool", "material"],
      rarities: ["common", "uncommon"],
      minLevel: 1,
      maxLevel: 3,
      count: 16,
    },
  },

  // ═══════════════════════════════════════════════════════
  // RIVERSIDE CAMP — Fishing Gear
  // ═══════════════════════════════════════════════════════
  riverside_camp: {
    category: "general",
    priceMultiplier: 1.0,
    inventorySize: 12,
    guaranteedItems: [
      { itemId: "basic_rod", stock: 10 },
      { itemId: "health_potion", stock: 15 },
    ],
    randomPool: {
      categories: ["tool", "consumable"],
      rarities: ["common", "uncommon"],
      minLevel: 1,
      maxLevel: 5,
      count: 10,
    },
  },

  // ═══════════════════════════════════════════════════════
  // WOODLAND OUTPOST — Ranger Supplies
  // ═══════════════════════════════════════════════════════
  woodland_outpost: {
    category: "general",
    priceMultiplier: 1.1,
    inventorySize: 16,
    guaranteedItems: [
      { itemId: "health_potion", stock: 15 },
      { itemId: "basic_axe", stock: 8 },
    ],
    randomPool: {
      categories: ["weapon", "tool", "consumable"],
      rarities: ["common", "uncommon"],
      minLevel: 1,
      maxLevel: 5,
      count: 14,
    },
  },

  // ═══════════════════════════════════════════════════════
  // TRADING POST — Advanced Trader
  // ═══════════════════════════════════════════════════════
  trading_post: {
    category: "advanced",
    priceMultiplier: 1.2,
    inventorySize: 30,
    guaranteedItems: [
      { itemId: "mega_potion", stock: 15 },
      { itemId: "elixir", stock: 5 },
      { itemId: "location_stone", stock: 5 },
    ],
    randomPool: {
      categories: ["weapon", "armor", "consumable", "material"],
      rarities: ["uncommon", "rare"],
      minLevel: 3,
      maxLevel: 15,
      count: 27,
    },
  },

  // ═══════════════════════════════════════════════════════
  // FISHING VILLAGE — General Store (Fishing Focus)
  // ═══════════════════════════════════════════════════════
  fishing_village: {
    category: "general",
    priceMultiplier: 1.0,
    inventorySize: 12,
    guaranteedItems: [
      { itemId: "basic_rod", stock: 10 },
      { itemId: "iron_rod", stock: 5 },
      { itemId: "health_potion", stock: 15 },
    ],
    randomPool: {
      categories: ["tool", "consumable"],
      rarities: ["common", "uncommon"],
      minLevel: 1,
      maxLevel: 5,
      count: 9,
    },
  },

  // ═══════════════════════════════════════════════════════
  // JADE TEMPLE — Monk/Spiritual Items
  // ═══════════════════════════════════════════════════════
  jade_temple: {
    category: "magic",
    priceMultiplier: 1.3,
    inventorySize: 18,
    guaranteedItems: [
      { itemId: "health_potion", stock: 15 },
      { itemId: "mana_potion", stock: 15 },
    ],
    randomPool: {
      categories: ["skill_book", "consumable"],
      rarities: ["uncommon", "rare"],
      minLevel: 3,
      maxLevel: 10,
      count: 16,
    },
  },

  // ═══════════════════════════════════════════════════════
  // MINERS REST — Mining Tools & Materials
  // ═══════════════════════════════════════════════════════
  miners_rest: {
    category: "general",
    priceMultiplier: 1.1,
    inventorySize: 16,
    guaranteedItems: [
      { itemId: "iron_pickaxe", stock: 10 },
      { itemId: "health_potion", stock: 15 },
    ],
    randomPool: {
      categories: ["tool", "material", "consumable"],
      rarities: ["common", "uncommon", "rare"],
      minLevel: 4,
      maxLevel: 10,
      count: 14,
    },
  },

  // ═══════════════════════════════════════════════════════
  // MOUNTAIN OUTPOST — Specialist Shop (Warrior Focus)
  // ═══════════════════════════════════════════════════════
  mountain_outpost: {
    category: "specialist",
    priceMultiplier: 1.5,
    inventorySize: 25,
    guaranteedItems: [
      { itemId: "elixir", stock: 10 },
    ],
    randomPool: {
      categories: ["weapon", "armor", "skill_book", "consumable"],
      rarities: ["rare", "epic"],
      minLevel: 10,
      maxLevel: 30,
      count: 24,
      classFilter: ["warrior"], // Prefer warrior items
    },
  },

  // ═══════════════════════════════════════════════════════
  // DESERT OASIS — Advanced Trader
  // ═══════════════════════════════════════════════════════
  desert_oasis: {
    category: "advanced",
    priceMultiplier: 1.3,
    inventorySize: 25,
    guaranteedItems: [
      { itemId: "mega_potion", stock: 20 },
      { itemId: "elixir", stock: 10 },
    ],
    randomPool: {
      categories: ["weapon", "armor", "consumable"],
      rarities: ["rare", "epic"],
      minLevel: 10,
      maxLevel: 25,
      count: 23,
    },
  },

  // ═══════════════════════════════════════════════════════
  // FLOATING SANCTUARY — Magic Shop (Mage Focus)
  // ═══════════════════════════════════════════════════════
  floating_sanctuary: {
    category: "magic",
    priceMultiplier: 1.4,
    inventorySize: 22,
    guaranteedItems: [
      { itemId: "mana_potion", stock: 30 },
      { itemId: "elixir", stock: 15 },
    ],
    randomPool: {
      categories: ["weapon", "armor", "skill_book"],
      rarities: ["rare", "epic"],
      minLevel: 10,
      maxLevel: 30,
      count: 20,
      classFilter: ["mage"], // Prefer mage items
    },
  },

  // ═══════════════════════════════════════════════════════
  // UNDERGROUND CITY — Rogue Shop (Rogue Focus)
  // ═══════════════════════════════════════════════════════
  underground_city: {
    category: "rogue",
    priceMultiplier: 1.3,
    inventorySize: 24,
    guaranteedItems: [
      { itemId: "poison_bomb", stock: 20 },
      { itemId: "smoke_grenade", stock: 20 },
    ],
    randomPool: {
      categories: ["weapon", "armor", "skill_book", "consumable"],
      rarities: ["rare", "epic"],
      minLevel: 10,
      maxLevel: 30,
      count: 22,
      classFilter: ["rogue"], // Prefer rogue items
    },
  },

  // ═══════════════════════════════════════════════════════
  // FAIRY VILLAGE — Magic Items
  // ═══════════════════════════════════════════════════════
  fairy_village: {
    category: "magic",
    priceMultiplier: 1.3,
    inventorySize: 20,
    guaranteedItems: [
      { itemId: "elixir", stock: 15 },
    ],
    randomPool: {
      categories: ["consumable", "utility", "skill_book"],
      rarities: ["uncommon", "rare", "epic"],
      minLevel: 5,
      maxLevel: 20,
      count: 19,
    },
  },

  // ═══════════════════════════════════════════════════════
  // MYSTIC TEMPLE — Magic Shop (All Classes)
  // ═══════════════════════════════════════════════════════
  mystic_temple: {
    category: "magic",
    priceMultiplier: 1.5,
    inventorySize: 18,
    guaranteedItems: [
      { itemId: "skill_reset_tome", stock: 2 },
      { itemId: "bag_expansion", stock: 5 },
      { itemId: "elixir", stock: 20 },
    ],
    randomPool: {
      categories: ["skill_book", "utility"],
      rarities: ["rare", "epic"],
      minLevel: 10,
      maxLevel: 35,
      count: 15,
    },
  },
};

// ── Randomization System ─────────────────────────────────

/**
 * Rarity weights for random selection
 */
const RARITY_WEIGHTS = {
  common: 50,
  uncommon: 30,
  rare: 15,
  epic: 4,
  legendary: 1,
};

/**
 * Stock amounts by rarity
 */
const STOCK_BY_RARITY = {
  common: { min: 10, max: 20 },
  uncommon: { min: 5, max: 10 },
  rare: { min: 3, max: 5 },
  epic: { min: 1, max: 3 },
  legendary: { min: 1, max: 1 },
};

/**
 * Get random item from weighted rarity pool
 * @param {string[]} allowedRarities 
 * @returns {string}
 */
function getRandomRarity(allowedRarities) {
  const weights = allowedRarities.map(r => RARITY_WEIGHTS[r] || 1);
  const totalWeight = weights.reduce((sum, w) => sum + w, 0);
  let random = Math.random() * totalWeight;
  
  for (let i = 0; i < allowedRarities.length; i++) {
    random -= weights[i];
    if (random <= 0) return allowedRarities[i];
  }
  
  return allowedRarities[0];
}

/**
 * Get random stock amount for rarity
 * @param {string} rarity 
 * @returns {number}
 */
function getRandomStock(rarity) {
  const range = STOCK_BY_RARITY[rarity] || { min: 5, max: 10 };
  return Math.floor(Math.random() * (range.max - range.min + 1)) + range.min;
}

/**
 * Filter items by criteria
 * @param {object} criteria 
 * @returns {object[]}
 */
function filterItems(criteria) {
  const { categories, rarities, minLevel, maxLevel, classFilter } = criteria;
  
  return Object.values(items).filter(item => {
    // Must have buyPrice to be sellable
    if (!item.buyPrice || item.buyPrice === 0) return false;
    
    // Category filter
    if (categories && !categories.includes(item.category)) return false;
    
    // Rarity filter
    if (rarities && item.rarity && !rarities.includes(item.rarity)) return false;
    
    // Level filter (if item has requiredLevel)
    if (item.requiredLevel) {
      if (minLevel && item.requiredLevel < minLevel) return false;
      if (maxLevel && item.requiredLevel > maxLevel) return false;
    }
    
    // Class filter (for skill books and class-specific items)
    if (classFilter && item.requiredClass) {
      const hasMatchingClass = item.requiredClass.some(c => 
        classFilter.includes(c.toLowerCase())
      );
      if (!hasMatchingClass) return false;
    }
    
    return true;
  });
}

/**
 * Generate random shop inventory
 * @param {object} shopConfig 
 * @returns {object[]}
 */
function generateShopInventory(shopConfig) {
  const inventory = [];
  
  // Add guaranteed items
  if (shopConfig.guaranteedItems) {
    for (const item of shopConfig.guaranteedItems) {
      inventory.push({
        itemId: item.itemId,
        stock: item.stock,
      });
    }
  }
  
  // Add random items
  if (shopConfig.randomPool) {
    const pool = shopConfig.randomPool;
    const availableItems = filterItems(pool);
    
    if (availableItems.length === 0) {
      console.warn(`No items available for shop random pool:`, pool);
      return inventory;
    }
    
    // Shuffle and select random items
    const shuffled = availableItems.sort(() => Math.random() - 0.5);
    const count = Math.min(pool.count, shuffled.length);
    
    for (let i = 0; i < count; i++) {
      const item = shuffled[i];
      const rarity = item.rarity || "common";
      const stock = getRandomStock(rarity);
      
      inventory.push({
        itemId: item.id,
        stock: stock,
      });
    }
  }
  
  return inventory;
}

// ── Shop Stock Management ────────────────────────────────

// Restock interval: 30 minutes (in milliseconds)
export const RESTOCK_INTERVAL = 30 * 60 * 1000;

// Path to persistent restock data
const restockDataPath = path.join(process.cwd(), "WhatsApp", "database", "rpg", "shopRestock.json");

// Load restock timers from file
function loadRestockTimers() {
  try {
    if (fs.existsSync(restockDataPath)) {
      const data = JSON.parse(fs.readFileSync(restockDataPath, "utf8"));
      return data;
    }
  } catch (error) {
    console.error("Error loading restock timers:", error);
  }
  return {};
}

// Save restock timers to file
function saveRestockTimers(timers) {
  try {
    fs.writeFileSync(restockDataPath, JSON.stringify(timers, null, 2), "utf8");
  } catch (error) {
    console.error("Error saving restock timers:", error);
  }
}

// Track last restock time per location (loaded from file)
export let shopRestockTimers = loadRestockTimers();

/**
 * Check if shop needs restocking
 * @param {string} locationId 
 * @returns {boolean}
 */
export function needsRestock(locationId) {
  if (!shopRestockTimers[locationId]) return true;
  const timeSinceRestock = Date.now() - shopRestockTimers[locationId];
  return timeSinceRestock >= RESTOCK_INTERVAL;
}

/**
 * Get time until next restock
 * @param {string} locationId 
 * @returns {number} milliseconds until restock
 */
export function getTimeUntilRestock(locationId) {
  if (!shopRestockTimers[locationId]) return 0;
  const timeSinceRestock = Date.now() - shopRestockTimers[locationId];
  const remaining = RESTOCK_INTERVAL - timeSinceRestock;
  return Math.max(0, remaining);
}

/**
 * Format time until restock as human-readable string
 * @param {number} ms 
 * @returns {string}
 */
export function formatRestockTime(ms) {
  const minutes = Math.floor(ms / 60000);
  const seconds = Math.floor((ms % 60000) / 1000);
  if (minutes > 0) {
    return `${minutes}m ${seconds}s`;
  }
  return `${seconds}s`;
}

/**
 * Restock a shop with randomized inventory
 * @param {string} locationId 
 */
export function restockShop(locationId) {
  const shopConfig = locationShops[locationId];
  if (!shopConfig) return;

  // Generate new random inventory
  shopConfig.inventory = generateShopInventory(shopConfig);

  // Update timer and save to file
  shopRestockTimers[locationId] = Date.now();
  saveRestockTimers(shopRestockTimers);
}

/**
 * Check if a location has a shop
 * @param {string} locationId 
 * @returns {boolean}
 */
export function hasShop(locationId) {
  return locationShops[locationId] !== undefined;
}

/**
 * Get shop inventory for a location
 * @param {string} locationId 
 * @returns {object|null}
 */
export function getShopInventory(locationId) {
  const shopConfig = locationShops[locationId];
  if (!shopConfig) return null;

  // Auto-restock if needed
  if (needsRestock(locationId)) {
    restockShop(locationId);
  }

  // Return shop with current inventory
  return {
    ...shopConfig,
    inventory: shopConfig.inventory || [],
  };
}

/**
 * Get item price at a location
 * @param {string} itemId 
 * @param {string} locationId 
 * @returns {number|null}
 */
export function getItemPrice(itemId, locationId) {
  const shop = locationShops[locationId];
  if (!shop) return null;

  const item = items[itemId];
  if (!item || !item.buyPrice) return null;

  return Math.floor(item.buyPrice * shop.priceMultiplier);
}

/**
 * Purchase item from shop
 * @param {string} itemId 
 * @param {string} locationId 
 * @param {number} quantity 
 * @returns {object} { success, message, cost }
 */
export function purchaseItem(itemId, locationId, quantity = 1) {
  const shopConfig = locationShops[locationId];
  if (!shopConfig) {
    return { success: false, message: "No shop at this location." };
  }

  if (!shopConfig.inventory) {
    return { success: false, message: "Shop inventory not initialized." };
  }

  const shopItem = shopConfig.inventory.find(i => i.itemId === itemId);
  if (!shopItem) {
    return { success: false, message: "Item not available at this shop." };
  }

  if (shopItem.stock < quantity) {
    return { 
      success: false, 
      message: `Not enough stock. Available: ${shopItem.stock}` 
    };
  }

  const price = getItemPrice(itemId, locationId);
  const totalCost = price * quantity;

  // Deduct stock
  shopItem.stock -= quantity;

  return {
    success: true,
    message: "Purchase successful!",
    cost: totalCost,
    quantity: quantity,
  };
}

/**
 * Initialize all shop inventories (call on bot start)
 */
export function initializeShops() {
  console.log("Initializing shop inventories...");
  
  for (const locationId in locationShops) {
    const shopConfig = locationShops[locationId];
    
    // Check if shop needs initialization or restock
    if (!shopConfig.inventory || needsRestock(locationId)) {
      console.log(`Restocking shop: ${locationId}`);
      restockShop(locationId);
    }
  }
  
  console.log("Shop initialization complete!");
}

export default {
  shopCategories,
  locationShops,
  needsRestock,
  getTimeUntilRestock,
  formatRestockTime,
  restockShop,
  hasShop,
  getShopInventory,
  getItemPrice,
  purchaseItem,
  initializeShops,
};
