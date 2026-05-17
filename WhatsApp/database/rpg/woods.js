/*
  RPG Wood Database
  Base : Lenwy SCM — RPG Extension

  Wood rarity system:
  - Common    : basic wood, low value
  - Uncommon  : decent wood, medium value
  - Rare      : valuable wood, high value
  - Epic      : very rare, very valuable
  - Legendary : near impossible, extremely valuable

  No junk — every tree gives something useful.

  treeHp   : how much HP the tree has before falling
  location : which chopping spots this wood can appear in
*/

export const woods = {

  // ══════════════════════════════════════════
  // COMMON
  // ══════════════════════════════════════════

  oak_wood: {
    id: "oak_wood",
    name: "🪵 Oak Wood",
    rarity: "Common",
    description: "Sturdy oak wood. The most common timber found in forests.",
    sellPrice: 6,
    location: ["peaceful_forest", "mushroom_patch", "hidden_cave", "world_tree_peak"],
    baseChance: 40,
    maxLuckBonus: 5,
    treeHp: 40,
  },

  pine_wood: {
    id: "pine_wood",
    name: "🌲 Pine Wood",
    rarity: "Common",
    description: "Light pine wood with a pleasant scent. Good for basic crafting.",
    sellPrice: 5,
    location: ["peaceful_forest", "mushroom_patch", "hidden_cave", "world_tree_peak"],
    baseChance: 35,
    maxLuckBonus: 5,
    treeHp: 35,
  },

  // ══════════════════════════════════════════
  // UNCOMMON
  // ══════════════════════════════════════════

  birch_wood: {
    id: "birch_wood",
    name: "🌿 Birch Wood",
    rarity: "Uncommon",
    description: "Smooth white birch wood. Prized for furniture and fine crafting.",
    sellPrice: 20,
    location: ["peaceful_forest", "mushroom_patch", "hidden_cave", "world_tree_peak"],
    baseChance: 20,
    maxLuckBonus: 8,
    treeHp: 55,
  },

  mahogany: {
    id: "mahogany",
    name: "🟤 Mahogany",
    rarity: "Uncommon",
    description: "Rich dark mahogany wood. Highly valued by craftsmen.",
    sellPrice: 25,
    location: ["peaceful_forest", "mushroom_patch", "hidden_cave", "world_tree_peak"],
    baseChance: 15,
    maxLuckBonus: 8,
    treeHp: 60,
  },

  // ══════════════════════════════════════════
  // RARE
  // ══════════════════════════════════════════

  ebony_wood: {
    id: "ebony_wood",
    name: "⬛ Ebony Wood",
    rarity: "Rare",
    description: "Dense black ebony wood. Extremely hard and valuable.",
    sellPrice: 70,
    location: ["peaceful_forest", "mushroom_patch", "hidden_cave", "world_tree_peak"],
    baseChance: 8,
    maxLuckBonus: 12,
    treeHp: 80,
  },

  ironwood: {
    id: "ironwood",
    name: "🔩 Ironwood",
    rarity: "Rare",
    description: "Wood as hard as iron. Used to craft powerful weapons and armor.",
    sellPrice: 85,
    location: ["peaceful_forest", "mushroom_patch", "hidden_cave", "world_tree_peak"],
    baseChance: 6,
    maxLuckBonus: 12,
    treeHp: 100,
  },

  // ══════════════════════════════════════════
  // EPIC
  // ══════════════════════════════════════════

  dragonwood: {
    id: "dragonwood",
    name: "🔥 Dragonwood",
    rarity: "Epic",
    description: "Wood from a tree scorched by dragon fire. Infused with flame energy.",
    sellPrice: 300,
    location: ["peaceful_forest", "mushroom_patch", "hidden_cave", "world_tree_peak"],
    baseChance: 3,
    maxLuckBonus: 20,
    treeHp: 140,
  },

  ghostwood: {
    id: "ghostwood",
    name: "👻 Ghostwood",
    rarity: "Epic",
    description: "Pale wood from a tree that grows in cursed soil. Slightly translucent.",
    sellPrice: 320,
    location: ["peaceful_forest", "mushroom_patch", "hidden_cave", "world_tree_peak"],
    baseChance: 2,
    maxLuckBonus: 20,
    treeHp: 130,
  },

  // ══════════════════════════════════════════
  // LEGENDARY
  // ══════════════════════════════════════════

  world_tree_branch: {
    id: "world_tree_branch",
    name: "🌳 World Tree Branch",
    rarity: "Legendary",
    description: "A branch from the legendary World Tree. Said to contain the essence of all life.",
    sellPrice: 1500,
    location: ["peaceful_forest", "mushroom_patch", "hidden_cave", "world_tree_peak"],
    baseChance: 0.5,
    maxLuckBonus: 50,
    treeHp: 300,
  },

  eternal_oak: {
    id: "eternal_oak",
    name: "✨ Eternal Oak",
    rarity: "Legendary",
    description: "Wood from a tree that has stood for ten thousand years. Radiates ancient power.",
    sellPrice: 1800,
    location: ["peaceful_forest", "mushroom_patch", "hidden_cave", "world_tree_peak"],
    baseChance: 0.3,
    maxLuckBonus: 50,
    treeHp: 350,
  },

};

// ── Wood rarity config ───────────────────────────────────

export const woodRarityConfig = {
  Common:    { label: "Common",    color: "⬜",  order: 1 },
  Uncommon:  { label: "Uncommon",  color: "🟩",  order: 2 },
  Rare:      { label: "Rare",      color: "🟦",  order: 3 },
  Epic:      { label: "Epic",      color: "🟪",  order: 4 },
  Legendary: { label: "Legendary", color: "🌟",  order: 5 },
};

// ── Axe tiers ────────────────────────────────────────────

export const axes = {
  basic_axe: {
    id: "basic_axe",
    name: "🪓 Basic Axe",
    description: "A simple axe. Better than nothing.",
    baseDamage: 8,     // damage on perfect hit
    rareBonus: 0,
    epicBonus: 0,
    legendaryBonus: 0,
    maxDurability: 50,  // breaks after 50 uses
    rarity: "Common",
  },
  wooden_axe: {
    id: "wooden_axe",
    name: "🪓 Wooden Axe",
    description: "A basic wooden axe. Slow and weak.",
    baseDamage: 10,    // damage on perfect hit
    rareBonus: 0,
    epicBonus: 0,
    legendaryBonus: 0,
    maxDurability: 80,  // breaks after 80 uses
    rarity: "Common",
  },
  iron_axe: {
    id: "iron_axe",
    name: "🪓 Iron Axe",
    description: "A sturdy iron axe. Good for most trees.",
    baseDamage: 20,
    rareBonus: 5,
    epicBonus: 0,
    legendaryBonus: 0,
    maxDurability: 150,  // breaks after 150 uses
    rarity: "Uncommon",
  },
  golden_axe: {
    id: "golden_axe",
    name: "🪓 Golden Axe",
    description: "A gleaming golden axe. Attracts rare wood.",
    baseDamage: 30,
    rareBonus: 10,
    epicBonus: 5,
    legendaryBonus: 0,
    maxDurability: 250,  // breaks after 250 uses
    rarity: "Rare",
  },
  diamond_axe: {
    id: "diamond_axe",
    name: "💎 Diamond Axe",
    description: "The finest axe. Even legendary trees fall before it.",
    baseDamage: 50,
    rareBonus: 15,
    epicBonus: 10,
    legendaryBonus: 3,
    maxDurability: 500,  // breaks after 500 uses
    rarity: "Epic",
  },
};

// ── Timing multipliers ───────────────────────────────────
// Based on cursor distance from center (positions 4-5)

export const chopTimingMultiplier = {
  perfect: 1.0,   // full damage
  good:    0.75,
  okay:    0.5,
  miss:    0.25,
};

// ── Helpers ──────────────────────────────────────────────

export function getWoodsByLocation(locationId) {
  return Object.values(woods).filter((w) =>
    w.location.includes(locationId)
  );
}

export function rollWood(locationId, luck, axeId = "wooden_axe") {
  const axe = axes[axeId] || axes.wooden_axe;
  const available = getWoodsByLocation(locationId);
  if (available.length === 0) return null;

  const pool = available.map((wood) => {
    let chance = wood.baseChance;
    const luckBonus = Math.min(luck * 0.3, wood.maxLuckBonus);

    let axeBonus = 0;
    if (wood.rarity === "Rare")      axeBonus = axe.rareBonus;
    if (wood.rarity === "Epic")      axeBonus = axe.epicBonus;
    if (wood.rarity === "Legendary") axeBonus = axe.legendaryBonus;

    if (wood.rarity === "Legendary") {
      chance = Math.min(chance + luckBonus + axeBonus, 50);
    } else {
      chance = chance + luckBonus + axeBonus;
    }

    return { wood, chance };
  });

  const totalWeight = pool.reduce((sum, p) => sum + p.chance, 0);
  let roll = Math.random() * totalWeight;

  for (const entry of pool) {
    roll -= entry.chance;
    if (roll <= 0) return entry.wood;
  }

  return pool[0].wood;
}

export default woods;

