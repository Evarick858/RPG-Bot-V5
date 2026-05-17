/*
  RPG Ore Database
  Base : Lenwy SCM — RPG Extension

  Ore rarity system:
  - Junk      : worthless debris
  - Common    : basic materials, low value
  - Uncommon  : decent materials, medium value
  - Rare      : valuable ores, high value
  - Epic      : very rare, very valuable
  - Legendary : near impossible, extremely valuable

  Luck stat affects rarity roll (same cap system as fishing):
  - Hard cap: Legendary max 50% no matter how high luck is

  rockHp     : how many hit points the rock has before breaking
  location   : which mining spots this ore can appear in
*/

export const ores = {

  // ══════════════════════════════════════════
  // JUNK
  // ══════════════════════════════════════════

  dirt_clump: {
    id: "dirt_clump",
    name: "💩 Dirt Clump",
    rarity: "Junk",
    description: "Just a clump of dirt. Completely useless.",
    sellPrice: 0,
    location: ["mine_entrance", "deep_mine", "lava_cave", "mountain_pass"],
    baseChance: 15,
    maxLuckBonus: 0,
    rockHp: 20,
  },

  broken_stone: {
    id: "broken_stone",
    name: "🪨 Broken Stone",
    rarity: "Junk",
    description: "A crumbled piece of rock. Nothing valuable here.",
    sellPrice: 0,
    location: ["mine_entrance", "deep_mine", "mountain_pass"],
    baseChance: 10,
    maxLuckBonus: 0,
    rockHp: 20,
  },

  // ══════════════════════════════════════════
  // COMMON
  // ══════════════════════════════════════════

  coal: {
    id: "coal",
    name: "🖤 Coal",
    rarity: "Common",
    description: "A chunk of coal. Used for smelting and fuel.",
    sellPrice: 5,
    location: ["mine_entrance", "deep_mine", "mountain_pass"],
    baseChance: 30,
    maxLuckBonus: 5,
    rockHp: 30,
  },

  stone: {
    id: "stone",
    name: "🪨 Stone",
    rarity: "Common",
    description: "A solid piece of stone. Used in crafting.",
    sellPrice: 3,
    location: ["mine_entrance", "deep_mine", "lava_cave", "mountain_pass"],
    baseChance: 25,
    maxLuckBonus: 5,
    rockHp: 25,
  },

  // ══════════════════════════════════════════
  // UNCOMMON
  // ══════════════════════════════════════════

  iron_ore: {
    id: "iron_ore",
    name: "🔩 Iron Ore",
    rarity: "Uncommon",
    description: "Raw iron ore. Can be smelted into iron bars.",
    sellPrice: 18,
    location: ["mine_entrance", "deep_mine", "mountain_pass"],
    baseChance: 15,
    maxLuckBonus: 8,
    rockHp: 40,
  },

  copper_ore: {
    id: "copper_ore",
    name: "🟤 Copper Ore",
    rarity: "Uncommon",
    description: "Raw copper ore. Used in crafting tools and accessories.",
    sellPrice: 15,
    location: ["mine_entrance", "deep_mine"],
    baseChance: 12,
    maxLuckBonus: 8,
    rockHp: 35,
  },

  // ══════════════════════════════════════════
  // RARE
  // ══════════════════════════════════════════

  silver_ore: {
    id: "silver_ore",
    name: "⚪ Silver Ore",
    rarity: "Rare",
    description: "Gleaming silver ore. Valuable and used in fine crafting.",
    sellPrice: 60,
    location: ["deep_mine", "mountain_pass"],
    baseChance: 8,
    maxLuckBonus: 12,
    rockHp: 60,
  },

  gold_ore: {
    id: "gold_ore",
    name: "🟡 Gold Ore",
    rarity: "Rare",
    description: "Precious gold ore. Highly sought after by merchants.",
    sellPrice: 80,
    location: ["deep_mine", "lava_cave"],
    baseChance: 6,
    maxLuckBonus: 12,
    rockHp: 70,
  },

  // ══════════════════════════════════════════
  // EPIC
  // ══════════════════════════════════════════

  mithril_ore: {
    id: "mithril_ore",
    name: "🔵 Mithril Ore",
    rarity: "Epic",
    description: "A legendary metal ore, lighter than iron but stronger than steel.",
    sellPrice: 250,
    location: ["lava_cave", "mountain_pass"],
    baseChance: 0.8,
    maxLuckBonus: 5,
    rockHp: 100,
  },

  obsidian: {
    id: "obsidian",
    name: "⬛ Obsidian",
    rarity: "Epic",
    description: "Volcanic glass formed from cooled lava. Extremely hard and sharp.",
    sellPrice: 280,
    location: ["lava_cave"],
    baseChance: 0.5,
    maxLuckBonus: 5,
    rockHp: 120,
  },

  // ══════════════════════════════════════════
  // LEGENDARY
  // ══════════════════════════════════════════

  dragon_stone: {
    id: "dragon_stone",
    name: "🔴 Dragon Stone",
    rarity: "Legendary",
    description: "A crimson stone infused with dragon energy. Said to be a fragment of a dragon's heart.",
    sellPrice: 1000,
    location: ["lava_cave"],
    baseChance: 0.0001,
    maxLuckBonus: 0.5,
    rockHp: 200,
  },

  void_crystal: {
    id: "void_crystal",
    name: "🌑 Void Crystal",
    rarity: "Legendary",
    description: "A crystal that absorbs all light. Found only in the deepest mountain caves.",
    sellPrice: 1200,
    location: ["mountain_pass", "deep_mine"],
    baseChance: 0.0001,
    maxLuckBonus: 0.5,
    rockHp: 180,
  },

};

// ── Ore rarity config ────────────────────────────────────

export const oreRarityConfig = {
  Junk:      { label: "Junk",      color: "🗑️",  order: 0 },
  Common:    { label: "Common",    color: "⬜",   order: 1 },
  Uncommon:  { label: "Uncommon",  color: "🟩",   order: 2 },
  Rare:      { label: "Rare",      color: "🟦",   order: 3 },
  Epic:      { label: "Epic",      color: "🟪",   order: 4 },
  Legendary: { label: "Legendary", color: "🌟",   order: 5 },
};

// ── Pickaxe tiers ────────────────────────────────────────

export const pickaxes = {
  basic_pickaxe: {
    id: "basic_pickaxe",
    name: "⛏️ Basic Pickaxe",
    description: "A simple pickaxe. Better than bare hands.",
    damagePerHit: 8,
    rareBonus: 0,
    epicBonus: 0,
    legendaryBonus: 0,
    maxDurability: 50,  // breaks after 50 hits
    rarity: "Common",
  },
  wooden_pickaxe: {
    id: "wooden_pickaxe",
    name: "🪨 Wooden Pickaxe",
    description: "A basic wooden pickaxe. Weak but better than nothing.",
    damagePerHit: 10,
    rareBonus: 0,
    epicBonus: 0,
    legendaryBonus: 0,
    maxDurability: 80,  // breaks after 80 hits
    rarity: "Common",
  },
  iron_pickaxe: {
    id: "iron_pickaxe",
    name: "⛏️ Iron Pickaxe",
    description: "A sturdy iron pickaxe. Good for most ores.",
    damagePerHit: 20,
    rareBonus: 2,
    epicBonus: 0,
    legendaryBonus: 0,
    maxDurability: 150,  // breaks after 150 hits
    rarity: "Uncommon",
  },
  gold_pickaxe: {
    id: "gold_pickaxe",
    name: "⛏️ Gold Pickaxe",
    description: "A gleaming gold pickaxe. Attracts rare and epic ores.",
    damagePerHit: 30,
    rareBonus: 4,
    epicBonus: 0.2,
    legendaryBonus: 0,
    maxDurability: 250,  // breaks after 250 hits
    rarity: "Rare",
  },
  diamond_pickaxe: {
    id: "diamond_pickaxe",
    name: "💎 Diamond Pickaxe",
    description: "The finest pickaxe. Even legendary ores can't resist it.",
    damagePerHit: 50,
    rareBonus: 6,
    epicBonus: 0.5,
    legendaryBonus: 0.0001,
    maxDurability: 500,  // breaks after 500 hits
    rarity: "Epic",
  },
};

// ── Helpers ──────────────────────────────────────────────

export function getOresByLocation(locationId) {
  // Allow mining anywhere - return all non-junk ores
  return Object.values(ores).filter((o) => o.rarity !== "Junk");
}

export function rollOre(locationId, luck, pickaxeId = "wooden_pickaxe") {
  const pickaxe = pickaxes[pickaxeId] || pickaxes.wooden_pickaxe;
  const available = getOresByLocation(locationId);
  if (available.length === 0) return null;

  const pool = available.map((ore) => {
    let chance = ore.baseChance;
    const luckBonus = Math.min(luck * 0.1, ore.maxLuckBonus);

    let pickBonus = 0;
    if (ore.rarity === "Rare")      pickBonus = pickaxe.rareBonus;
    if (ore.rarity === "Epic")      pickBonus = pickaxe.epicBonus;
    if (ore.rarity === "Legendary") pickBonus = pickaxe.legendaryBonus;

    if (ore.rarity === "Legendary") {
      chance = Math.min(chance + luckBonus + pickBonus, 1);
    } else if (ore.rarity === "Epic") {
      chance = Math.min(chance + luckBonus + pickBonus, 10);
    } else {
      chance = chance + luckBonus + pickBonus;
    }

    return { ore, chance };
  });

  const totalWeight = pool.reduce((sum, p) => sum + p.chance, 0);
  let roll = Math.random() * totalWeight;

  for (const entry of pool) {
    roll -= entry.chance;
    if (roll <= 0) return entry.ore;
  }

  return pool[0].ore;
}

export default ores;
