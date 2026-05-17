/*
  RPG Herb/Plant Database
  Base : Lenwy SCM — RPG Extension

  Forage rarity system:
  - Common    : basic plants, low value
  - Uncommon  : useful herbs, medium value
  - Rare      : powerful plants, high value
  - Epic      : very rare, very valuable
  - Legendary : near impossible, extremely valuable

  Pattern system:
  - Each forage session shows 3 random symbols
  - Symbols: leaf, shroom, flower, root, berry
  - Player must type them back correctly
  - Correct answers boost rarity chances
*/

export const herbs = {

  // ══════════════════════════════════════════
  // COMMON
  // ══════════════════════════════════════════

  wild_herb: {
    id: "wild_herb",
    name: "🌿 Wild Herb",
    rarity: "Common",
    description: "A common herb found in most forests. Used in basic potions.",
    sellPrice: 5,
    location: ["peaceful_forest", "green_meadow", "misty_grove", "ancient_oak", "riverside_path", "flower_garden", "mushroom_patch", "berry_thicket", "rocky_path", "forgotten_shrine", "sky_gardens", "sandstorm_valley", "ancient_ruins"],
    baseChance: 40,
    maxLuckBonus: 5,
  },

  wild_mushroom: {
    id: "wild_mushroom",
    name: "🍄 Wild Mushroom",
    rarity: "Common",
    description: "A common mushroom. Edible but not particularly useful.",
    sellPrice: 4,
    location: ["peaceful_forest", "misty_grove", "mushroom_patch", "ancient_oak", "forgotten_shrine"],
    baseChance: 35,
    maxLuckBonus: 5,
  },

  // ══════════════════════════════════════════
  // UNCOMMON
  // ══════════════════════════════════════════

  healing_herb: {
    id: "healing_herb",
    name: "💚 Healing Herb",
    rarity: "Uncommon",
    description: "A herb with mild healing properties. Used in healing potions.",
    sellPrice: 20,
    location: ["peaceful_forest", "misty_grove", "ancient_oak", "flower_garden", "berry_thicket", "forgotten_shrine", "sky_gardens"],
    baseChance: 20,
    maxLuckBonus: 8,
  },

  poison_mushroom: {
    id: "poison_mushroom",
    name: "☠️ Poison Mushroom",
    rarity: "Uncommon",
    description: "A toxic mushroom. Dangerous to eat but useful for crafting poisons.",
    sellPrice: 22,
    location: ["misty_grove", "mushroom_patch", "ancient_oak", "sandstorm_valley"],
    baseChance: 15,
    maxLuckBonus: 8,
  },

  swamp_root: {
    id: "swamp_root",
    name: "🌱 Swamp Root",
    rarity: "Uncommon",
    description: "A gnarled root from the swamp. Has strange alchemical properties.",
    sellPrice: 18,
    location: ["riverside_path", "shallow_pond", "sandy_beach", "misty_grove"],
    baseChance: 18,
    maxLuckBonus: 8,
  },

  // ══════════════════════════════════════════
  // RARE
  // ══════════════════════════════════════════

  moonflower: {
    id: "moonflower",
    name: "🌸 Moonflower",
    rarity: "Rare",
    description: "A flower that only blooms under moonlight. Highly sought by alchemists.",
    sellPrice: 75,
    location: ["ancient_oak", "forgotten_shrine", "sky_gardens", "floating_sanctuary"],
    baseChance: 8,
    maxLuckBonus: 12,
  },

  dragon_herb: {
    id: "dragon_herb",
    name: "🔴 Dragon Herb",
    rarity: "Rare",
    description: "A fiery red herb that grows near volcanic areas. Burns to the touch.",
    sellPrice: 90,
    location: ["volcanic_ridge", "magma_chamber", "scorched_dunes", "sandstorm_valley"],
    baseChance: 6,
    maxLuckBonus: 12,
  },

  // ══════════════════════════════════════════
  // EPIC
  // ══════════════════════════════════════════

  phoenix_petal: {
    id: "phoenix_petal",
    name: "🔥 Phoenix Petal",
    rarity: "Epic",
    description: "A petal from a flower touched by phoenix fire. Glows with inner warmth.",
    sellPrice: 280,
    location: ["volcanic_ridge", "magma_chamber", "scorched_dunes", "sky_gardens"],
    baseChance: 3,
    maxLuckBonus: 20,
  },

  shadow_root: {
    id: "shadow_root",
    name: "🌑 Shadow Root",
    rarity: "Epic",
    description: "A root that grows in complete darkness. Absorbs light around it.",
    sellPrice: 300,
    location: ["hidden_cave", "deep_mines", "crystal_labyrinth", "spirit_realm"],
    baseChance: 2,
    maxLuckBonus: 20,
  },

  // ══════════════════════════════════════════
  // LEGENDARY
  // ══════════════════════════════════════════

  elixir_flower: {
    id: "elixir_flower",
    name: "✨ Elixir Flower",
    rarity: "Legendary",
    description: "A mythical flower said to be the key ingredient in the Elixir of Life.",
    sellPrice: 1500,
    location: ["ancient_oak", "forgotten_shrine", "sky_gardens", "floating_sanctuary", "astral_plane"],
    baseChance: 0.5,
    maxLuckBonus: 50,
  },

  soul_herb: {
    id: "soul_herb",
    name: "💫 Soul Herb",
    rarity: "Legendary",
    description: "An herb that resonates with the soul. Said to grant visions of the future.",
    sellPrice: 1800,
    location: ["spirit_realm", "void_gate", "astral_plane", "mystic_temple"],
    baseChance: 0.3,
    maxLuckBonus: 50,
  },

};

// ── Herb rarity config ───────────────────────────────────

export const herbRarityConfig = {
  Common:    { label: "Common",    color: "⬜",  order: 1 },
  Uncommon:  { label: "Uncommon",  color: "🟩",  order: 2 },
  Rare:      { label: "Rare",      color: "🟦",  order: 3 },
  Epic:      { label: "Epic",      color: "🟪",  order: 4 },
  Legendary: { label: "Legendary", color: "🌟",  order: 5 },
};

// ── Pattern symbols ──────────────────────────────────────
// These are the symbols shown in the memory minigame

export const forageSymbols = [
  { key: "leaf",   emoji: "🌿", label: "leaf"   },
  { key: "shroom", emoji: "🍄", label: "shroom" },
  { key: "flower", emoji: "🌸", label: "flower" },
  { key: "root",   emoji: "🌱", label: "root"   },
  { key: "berry",  emoji: "🫐", label: "berry"  },
];

// Generate a random pattern of 3 symbols
export function generatePattern() {
  const shuffled = [...forageSymbols].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, 3);
}

// Score the player's answer vs the pattern
// Returns: "perfect" | "good" | "okay" | "wrong"
export function scoreAnswer(pattern, answer) {
  const answerWords = answer.trim().toLowerCase().split(/\s+/);
  const patternKeys = pattern.map((s) => s.key);

  let correct = 0;
  for (let i = 0; i < patternKeys.length; i++) {
    if (answerWords[i] === patternKeys[i]) correct++;
  }

  if (correct === 3) return "perfect";
  if (correct === 2) return "good";
  if (correct === 1) return "okay";
  return "wrong";
}

// ── Roll herb ────────────────────────────────────────────

export function rollHerb(locationId, luck, scoreResult) {
  // Allow foraging anywhere - return all herbs
  const available = Object.values(herbs);
  if (available.length === 0) return null;

  // Only reward if PERFECT (3/3 correct)
  if (scoreResult !== "perfect") {
    return null; // No reward unless all 3 are correct
  }

  // Score multiplier for luck (only perfect gets here now)
  const scoreMult = 2.0; // Perfect score multiplier

  const pool = available.map((herb) => {
    let chance = herb.baseChance;
    const luckBonus = Math.min(luck * 0.3 * scoreMult, herb.maxLuckBonus);

    if (herb.rarity === "Legendary") {
      chance = Math.min(chance + luckBonus, 50);
    } else {
      chance = chance + luckBonus;
    }

    return { herb, chance };
  });

  const totalWeight = pool.reduce((sum, p) => sum + p.chance, 0);
  let roll = Math.random() * totalWeight;

  for (const entry of pool) {
    roll -= entry.chance;
    if (roll <= 0) return entry.herb;
  }

  return pool[0].herb;
}

export default herbs;
