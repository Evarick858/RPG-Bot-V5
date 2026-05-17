/*
  RPG Fish Database
  Base : Lenwy SCM — RPG Extension

  Fish rarity system:
  - Junk     : trash items, no value
  - Common   : basic fish, low sell price
  - Uncommon : decent fish, medium sell price
  - Rare     : good fish, high sell price
  - Epic     : very rare fish, very high sell price
  - Legendary: near impossible, extremely valuable

  Luck stat affects rarity roll:
  - Luck scales rare+ chances UP
  - Hard cap: Legendary max 50% no matter how high luck is
  - Formula: bonus = min(luck * 0.3, maxBonus) where maxBonus varies per rarity

  location: which fishing spots this fish can appear in
*/

export const fishList = {

  // ══════════════════════════════════════════
  // JUNK (always possible, no luck bonus)
  // ══════════════════════════════════════════

  old_boot: {
    id: "old_boot",
    name: "👟 Old Boot",
    rarity: "Junk",
    description: "A waterlogged old boot. Completely useless.",
    sellPrice: 0,
    location: ["fishing_docks", "deep_forest", "swamp"],
    baseChance: 15,
    maxLuckBonus: 0,
  },

  torn_net: {
    id: "torn_net",
    name: "🕸️ Torn Net",
    rarity: "Junk",
    description: "A piece of torn fishing net. Maybe someone can use it.",
    sellPrice: 1,
    location: ["fishing_docks", "swamp"],
    baseChance: 10,
    maxLuckBonus: 0,
  },

  soggy_scroll: {
    id: "soggy_scroll",
    name: "📜 Soggy Scroll",
    rarity: "Junk",
    description: "A completely unreadable wet scroll. Worthless.",
    sellPrice: 0,
    location: ["fishing_docks", "deep_forest", "swamp"],
    baseChance: 5,
    maxLuckBonus: 0,
  },

  // ══════════════════════════════════════════
  // COMMON
  // ══════════════════════════════════════════

  small_carp: {
    id: "small_carp",
    name: "🐟 Small Carp",
    rarity: "Common",
    description: "A small, ordinary carp. Common in most waters.",
    sellPrice: 5,
    location: ["fishing_docks", "deep_forest", "swamp"],
    baseChance: 30,
    maxLuckBonus: 5,
  },

  river_trout: {
    id: "river_trout",
    name: "🐠 River Trout",
    rarity: "Common",
    description: "A speckled trout from the river. Decent eating.",
    sellPrice: 8,
    location: ["fishing_docks", "deep_forest"],
    baseChance: 20,
    maxLuckBonus: 5,
  },

  mudfish: {
    id: "mudfish",
    name: "🐡 Mudfish",
    rarity: "Common",
    description: "A flat fish that lives in muddy waters. Tastes like mud.",
    sellPrice: 4,
    location: ["swamp"],
    baseChance: 25,
    maxLuckBonus: 5,
  },

  // ══════════════════════════════════════════
  // UNCOMMON
  // ══════════════════════════════════════════

  silver_bass: {
    id: "silver_bass",
    name: "🐟 Silver Bass",
    rarity: "Uncommon",
    description: "A shimmering silver fish. Prized by local cooks.",
    sellPrice: 20,
    location: ["fishing_docks", "deep_forest"],
    baseChance: 15,
    maxLuckBonus: 8,
  },

  swamp_eel: {
    id: "swamp_eel",
    name: "🐍 Swamp Eel",
    rarity: "Uncommon",
    description: "A slippery eel from the swamp. Surprisingly tasty.",
    sellPrice: 18,
    location: ["swamp"],
    baseChance: 15,
    maxLuckBonus: 8,
  },

  spotted_pike: {
    id: "spotted_pike",
    name: "🐟 Spotted Pike",
    rarity: "Uncommon",
    description: "A fierce predator fish with distinctive spots.",
    sellPrice: 22,
    location: ["fishing_docks", "deep_forest"],
    baseChance: 12,
    maxLuckBonus: 8,
  },

  // ══════════════════════════════════════════
  // RARE
  // ══════════════════════════════════════════

  golden_carp: {
    id: "golden_carp",
    name: "✨ Golden Carp",
    rarity: "Rare",
    description: "A carp with golden scales. Highly sought after by collectors.",
    sellPrice: 80,
    location: ["fishing_docks", "deep_forest"],
    baseChance: 8,
    maxLuckBonus: 12,
  },

  shadow_eel: {
    id: "shadow_eel",
    name: "🌑 Shadow Eel",
    rarity: "Rare",
    description: "A dark eel that only appears in murky swamp waters at night.",
    sellPrice: 90,
    location: ["swamp"],
    baseChance: 6,
    maxLuckBonus: 12,
  },

  crystal_trout: {
    id: "crystal_trout",
    name: "💎 Crystal Trout",
    rarity: "Rare",
    description: "A translucent trout with crystal-like scales. Beautiful and rare.",
    sellPrice: 100,
    location: ["deep_forest"],
    baseChance: 5,
    maxLuckBonus: 12,
  },

  // ══════════════════════════════════════════
  // EPIC
  // ══════════════════════════════════════════

  ancient_catfish: {
    id: "ancient_catfish",
    name: "🐋 Ancient Catfish",
    rarity: "Epic",
    description: "A massive catfish that has lived for centuries. Its whiskers are said to have magical properties.",
    sellPrice: 300,
    location: ["fishing_docks", "swamp"],
    baseChance: 0.8,
    maxLuckBonus: 5,
  },

  void_fish: {
    id: "void_fish",
    name: "🌀 Void Fish",
    rarity: "Epic",
    description: "A fish that seems to absorb light around it. Nobody knows where it comes from.",
    sellPrice: 350,
    location: ["swamp", "deep_forest"],
    baseChance: 0.5,
    maxLuckBonus: 5,
  },

  // ══════════════════════════════════════════
  // LEGENDARY
  // ══════════════════════════════════════════

  dragon_koi: {
    id: "dragon_koi",
    name: "🐉 Dragon Koi",
    rarity: "Legendary",
    description: "A mythical koi fish with dragon-like scales. Said to grant wishes to whoever catches it.",
    sellPrice: 1000,
    location: ["fishing_docks"],
    baseChance: 0.0001,
    maxLuckBonus: 0.5,
  },

  phantom_eel: {
    id: "phantom_eel",
    name: "👻 Phantom Eel",
    rarity: "Legendary",
    description: "A ghostly eel that phases in and out of reality. Extremely rare and extremely valuable.",
    sellPrice: 1200,
    location: ["swamp", "deep_forest"],
    baseChance: 0.0001,
    maxLuckBonus: 0.5,
  },

};

// ── Rarity config ────────────────────────────────────────

export const fishRarityConfig = {
  Junk:      { label: "Junk",      color: "🗑️",  order: 0 },
  Common:    { label: "Common",    color: "⬜",   order: 1 },
  Uncommon:  { label: "Uncommon",  color: "🟩",   order: 2 },
  Rare:      { label: "Rare",      color: "🟦",   order: 3 },
  Epic:      { label: "Epic",      color: "🟪",   order: 4 },
  Legendary: { label: "Legendary", color: "🌟",   order: 5 },
};

// ── Fishing rod tiers ────────────────────────────────────

export const fishingRods = {
  basic_rod: {
    id: "basic_rod",
    name: "🎣 Basic Rod",
    description: "A simple wooden fishing rod. Gets the job done.",
    rareBonus: 0,
    epicBonus: 0,
    legendaryBonus: 0,
    maxDurability: 60,  // breaks after 60 uses
    rarity: "Common",
  },
  iron_rod: {
    id: "iron_rod",
    name: "🎣 Iron Rod",
    description: "A sturdy iron rod. Better at catching rare fish.",
    rareBonus: 2,
    epicBonus: 0,
    legendaryBonus: 0,
    maxDurability: 150,  // breaks after 150 uses
    rarity: "Uncommon",
  },
  golden_rod: {
    id: "golden_rod",
    name: "🎣 Golden Rod",
    description: "A gleaming golden rod. Attracts rare and epic fish.",
    rareBonus: 4,
    epicBonus: 0.2,
    legendaryBonus: 0,
    maxDurability: 250,  // breaks after 250 uses
    rarity: "Rare",
  },
  crystal_rod: {
    id: "crystal_rod",
    name: "🎣 Crystal Rod",
    description: "A legendary crystal rod. Even legendary fish can't resist it.",
    rareBonus: 6,
    epicBonus: 0.5,
    legendaryBonus: 0.0001,
    maxDurability: 500,  // breaks after 500 uses
    rarity: "Epic",
  },
};

// ── Helpers ──────────────────────────────────────────────

// Get fish available at a location
export function getFishByLocation(locationId) {
  // Allow fishing anywhere - return all non-junk fish
  return Object.values(fishList).filter((f) => f.rarity !== "Junk");
}

// Roll for a fish given luck stat and rod
// Returns a fish object or null (escaped)
export function rollFish(locationId, luck, rodId = "basic_rod") {
  const rod = fishingRods[rodId] || fishingRods.basic_rod;
  const available = getFishByLocation(locationId);
  if (available.length === 0) return null;

  // Build weighted pool
  const pool = available.map((fish) => {
    let chance = fish.baseChance;

    // Apply luck bonus (capped per fish)
    const luckBonus = Math.min(luck * 0.1, fish.maxLuckBonus);

    // Apply rod bonus based on rarity
    let rodBonus = 0;
    if (fish.rarity === "Rare")      rodBonus = rod.rareBonus;
    if (fish.rarity === "Epic")      rodBonus = rod.epicBonus;
    if (fish.rarity === "Legendary") rodBonus = rod.legendaryBonus;

    // Legendary hard cap: total chance never exceeds 1%
    if (fish.rarity === "Legendary") {
      chance = Math.min(chance + luckBonus + rodBonus, 1);
    } else if (fish.rarity === "Epic") {
      chance = Math.min(chance + luckBonus + rodBonus, 10);
    } else {
      chance = chance + luckBonus + rodBonus;
    }

    return { fish, chance };
  });

  // Roll
  const totalWeight = pool.reduce((sum, p) => sum + p.chance, 0);
  let roll = Math.random() * totalWeight;

  for (const entry of pool) {
    roll -= entry.chance;
    if (roll <= 0) return entry.fish;
  }

  return pool[0].fish;
}

export default fishList;
