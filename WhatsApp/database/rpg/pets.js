/*
  RPG Pet System Database
  Base: Lenwy SCM — RPG Extension

  Pet system with rarity tiers, stat bonuses, and passive effects.
  Players can collect, equip, and interact with pets.

  Rarity Tiers & Drop Rates:
  - C (Common): 5%
  - U (Uncommon): 2%
  - R (Rare): 0.8%
  - SR (Super Rare): 0.15% + Passive Effect
  - SSR (Super Super Rare): 0.005% + Passive Effect

  Taming Difficulty (emoji sequence length):
  - C: 5 emojis
  - U: 6 emojis
  - R: 7 emojis
  - SR: 8 emojis
  - SSR: 9 emojis
*/

// ══════════════════════════════════════════════════════════
// PET LEVELING CONFIGURATION
// ══════════════════════════════════════════════════════════

export const petLevelConfig = {
  maxLevel: 20,
  
  // Base stat percentage at level 1 (scales to 100% at level 20)
  baseStatPercentByRarity: {
    C: 5,    // 5% at level 1 → 100% at level 20
    U: 7,    // 7% at level 1 → 100% at level 20
    R: 10,   // 10% at level 1 → 100% at level 20
    SR: 12,  // 12% at level 1 → 100% at level 20
    SSR: 15, // 15% at level 1 → 100% at level 20
  },
  
  // XP required for each level (exponential growth)
  xpTable: [
    0,      // Level 1 (starting level)
    100,    // Level 2
    150,    // Level 3
    225,    // Level 4
    338,    // Level 5
    507,    // Level 6
    761,    // Level 7
    1142,   // Level 8
    1713,   // Level 9
    2570,   // Level 10
    3855,   // Level 11
    5783,   // Level 12
    8675,   // Level 13
    13013,  // Level 14
    19520,  // Level 15
    29280,  // Level 16
    43920,  // Level 17
    65880,  // Level 18
    98820,  // Level 19
    148230, // Level 20 (max)
  ],
  
  // Enhancement XP gain (consuming other pets)
  enhancementXP: {
    C: 50,    // Common pet gives 50 XP
    U: 150,   // Uncommon pet gives 150 XP
    R: 400,   // Rare pet gives 400 XP
    SR: 1000, // Super Rare pet gives 1000 XP
    SSR: 3000, // Super Super Rare pet gives 3000 XP
  },
  
  // Bonus XP if same rarity (50% bonus)
  sameRarityBonus: 1.5,
};

// ══════════════════════════════════════════════════════════
// PET REGISTRY
// ══════════════════════════════════════════════════════════

export const pets = {

  // ────────────────────────────────────────────────────────
  // COMMON PETS (C) - 5% drop rate
  // ────────────────────────────────────────────────────────

  forest_rabbit: {
    id: "forest_rabbit",
    name: "Forest Rabbit",
    emoji: "🐰",
    rarity: "C",
    description: "A nimble rabbit that hops through the forest. Its quick reflexes inspire agility.",
    statBonus: {
      type: "agility",
      baseValue: 6  // At level 20: 6 agility (5% at level 1 = 0.3, rounds to 1)
    },
    tamingSequenceLength: 5,
    flavorText: [
      "*hops around excitedly* 🐰",
      "The rabbit twitches its nose curiously.",
      "*nibbles on a carrot* Crunch crunch!",
      "Your rabbit looks at you with big, innocent eyes.",
      "The rabbit does a little hop of joy!"
    ],
    mood: ["Happy", "Curious", "Playful", "Sleepy", "Energetic"]
  },

  shadow_cat: {
    id: "shadow_cat",
    name: "Shadow Cat",
    emoji: "🐈‍⬛",
    rarity: "C",
    description: "A mysterious black cat that lurks in shadows. Enhances your luck in mysterious ways.",
    statBonus: {
      type: "luck",
      baseValue: 8  // At level 20: 8 luck
    },
    tamingSequenceLength: 5,
    flavorText: [
      "*purrs softly in the darkness* 🐈‍⬛",
      "The shadow cat's eyes gleam with mischief.",
      "*stretches lazily* Meowww~",
      "Your cat disappears into the shadows, then reappears.",
      "The cat rubs against your leg affectionately."
    ],
    mood: ["Mysterious", "Lazy", "Mischievous", "Affectionate", "Aloof"]
  },

  // ────────────────────────────────────────────────────────
  // UNCOMMON PETS (U) - 2% drop rate
  // ────────────────────────────────────────────────────────

  stone_turtle: {
    id: "stone_turtle",
    name: "Stone Turtle",
    emoji: "🐢",
    rarity: "U",
    description: "An ancient turtle with a shell as hard as stone. Provides solid defense.",
    statBonus: {
      type: "defense",
      baseValue: 12  // At level 20: 12 defense
    },
    tamingSequenceLength: 6,
    flavorText: [
      "*retreats into shell* 🐢",
      "The turtle moves slowly but steadily.",
      "*munches on some leaves* Nom nom...",
      "Your turtle gazes at you with wise, ancient eyes.",
      "The stone turtle's shell gleams in the light."
    ],
    mood: ["Calm", "Wise", "Sleepy", "Content", "Patient"]
  },

  ember_fox: {
    id: "ember_fox",
    name: "Ember Fox",
    emoji: "🦊",
    rarity: "U",
    description: "A clever fox with fur that glows like embers. Boosts your attack power.",
    statBonus: {
      type: "attack",
      baseValue: 10  // At level 20: 10 attack
    },
    tamingSequenceLength: 6,
    flavorText: [
      "*tail swishes with sparks* 🦊✨",
      "The fox's fur crackles with warm energy.",
      "*yips playfully* Yip yip!",
      "Your ember fox circles around you protectively.",
      "Small embers dance around the fox's paws."
    ],
    mood: ["Playful", "Alert", "Energetic", "Clever", "Protective"]
  },

  // ────────────────────────────────────────────────────────
  // RARE PETS (R) - 0.8% drop rate
  // ────────────────────────────────────────────────────────

  frost_bear: {
    id: "frost_bear",
    name: "Frost Bear",
    emoji: "🐻‍❄️",
    rarity: "R",
    description: "A massive bear covered in frost and ice. Its presence fortifies your defenses.",
    statBonus: {
      type: "defense",
      baseValue: 20  // At level 20: 20 defense
    },
    tamingSequenceLength: 7,
    flavorText: [
      "*roars with icy breath* 🐻‍❄️❄️",
      "Frost forms on the ground around the bear.",
      "*shakes its fur, sending ice crystals flying*",
      "Your frost bear stands guard, radiating cold.",
      "The bear nuzzles you gently with its cold nose."
    ],
    mood: ["Protective", "Fierce", "Gentle", "Sleepy", "Vigilant"]
  },

  thunder_wolf: {
    id: "thunder_wolf",
    name: "Thunder Wolf",
    emoji: "🐺",
    rarity: "R",
    description: "A wolf that crackles with lightning. Significantly increases your attack.",
    statBonus: {
      type: "attack",
      baseValue: 16  // At level 20: 16 attack
    },
    tamingSequenceLength: 7,
    flavorText: [
      "*howls as lightning crackles* 🐺⚡",
      "Electric sparks dance across the wolf's fur.",
      "*growls with thunderous energy*",
      "Your thunder wolf's eyes glow with power.",
      "The wolf runs in circles, leaving lightning trails."
    ],
    mood: ["Fierce", "Energetic", "Loyal", "Restless", "Powerful"]
  },

  mystic_lynx: {
    id: "mystic_lynx",
    name: "Mystic Lynx",
    emoji: "🐈",
    rarity: "R",
    description: "A mystical lynx with eyes that see through illusions. Enhances both luck and agility.",
    statBonus: {
      type: "luck",
      baseValue: 18  // At level 20: 18 luck
    },
    tamingSequenceLength: 7,
    flavorText: [
      "*prowls silently with glowing eyes* 🐈✨",
      "The lynx's fur shimmers with mystical energy.",
      "*meows softly, and reality seems to shift*",
      "Your mystic lynx watches everything with knowing eyes.",
      "The lynx leaps gracefully, leaving sparkles in its wake."
    ],
    mood: ["Mystical", "Graceful", "Observant", "Playful", "Wise"]
  },

  // ────────────────────────────────────────────────────────
  // SUPER RARE PETS (SR) - 0.15% drop rate + PASSIVE
  // ────────────────────────────────────────────────────────

  crystal_dragon: {
    id: "crystal_dragon",
    name: "Crystal Dragon",
    emoji: "🐉",
    rarity: "SR",
    description: "A majestic dragon with crystalline scales. Grants immense power and magical protection.",
    statBonus: {
      type: "attack",
      baseValue: 24  // At level 20: 24 attack
    },
    passive: {
      id: "crystal_scales",
      name: "Crystal Scales",
      emoji: "💎",
      effect: "magic_resistance",
      value: 8,
      description: "Increases magical defense by 8."
    },
    tamingSequenceLength: 8,
    flavorText: [
      "*spreads crystalline wings majestically* 🐉💎",
      "The dragon's scales shimmer with rainbow light.",
      "*breathes a mist of crystal shards*",
      "Your crystal dragon circles overhead protectively.",
      "The dragon purrs like distant thunder, content."
    ],
    mood: ["Majestic", "Proud", "Protective", "Wise", "Playful"]
  },

  void_serpent: {
    id: "void_serpent",
    name: "Void Serpent",
    emoji: "🐍",
    rarity: "SR",
    description: "A serpent born from the void itself. Enhances agility and grants evasive powers.",
    statBonus: {
      type: "agility",
      baseValue: 20  // At level 20: 20 agility
    },
    passive: {
      id: "void_phase",
      name: "Void Phase",
      emoji: "👻",
      effect: "dodge_boost",
      value: 10,
      description: "Increases dodge chance by 10%."
    },
    tamingSequenceLength: 8,
    flavorText: [
      "*phases in and out of reality* 🐍✨",
      "The serpent's body ripples with void energy.",
      "*hisses softly, reality bends around it*",
      "Your void serpent coils around you protectively.",
      "The serpent disappears, then reappears beside you."
    ],
    mood: ["Mysterious", "Calm", "Ethereal", "Curious", "Watchful"]
  },

  // ────────────────────────────────────────────────────────
  // SUPER SUPER RARE PETS (SSR) - 0.005% drop rate + PASSIVE
  // ────────────────────────────────────────────────────────

  phoenix: {
    id: "phoenix",
    name: "Phoenix",
    emoji: "🔥",
    rarity: "SSR",
    description: "The legendary immortal firebird. Grants incredible power and the blessing of rebirth.",
    statBonus: {
      type: "attack",
      baseValue: 30  // At level 20: 30 attack
    },
    passive: {
      id: "phoenix_blessing",
      name: "Phoenix Blessing",
      emoji: "🔥",
      effect: "phoenix_revive",
      value: 25,
      threshold: 10,
      description: "When HP drops below 10%, heal for 25% max HP (once per battle)."
    },
    tamingSequenceLength: 9,
    flavorText: [
      "*erupts in brilliant flames* 🔥✨",
      "The phoenix's feathers burn with eternal fire.",
      "*sings a hauntingly beautiful melody*",
      "Your phoenix soars above, leaving trails of fire.",
      "The phoenix lands on your shoulder, radiating warmth."
    ],
    mood: ["Majestic", "Fierce", "Gentle", "Eternal", "Radiant"]
  },

  celestial_tiger: {
    id: "celestial_tiger",
    name: "Celestial Tiger",
    emoji: "🐅",
    rarity: "SSR",
    description: "A divine tiger blessed by the heavens. Grants supreme combat prowess and regeneration.",
    statBonus: {
      type: "attack",
      baseValue: 26  // At level 20: 26 attack
    },
    passive: {
      id: "celestial_vigor",
      name: "Celestial Vigor",
      emoji: "⭐",
      effect: "regen",
      value: 8,
      description: "Regenerates 8 HP every turn in combat."
    },
    tamingSequenceLength: 9,
    flavorText: [
      "*roars with divine authority* 🐅⭐",
      "Celestial light emanates from the tiger's stripes.",
      "*prowls with otherworldly grace*",
      "Your celestial tiger's eyes glow with starlight.",
      "The tiger rubs against you, purring like thunder."
    ],
    mood: ["Divine", "Fierce", "Noble", "Protective", "Serene"]
  }

};

// ══════════════════════════════════════════════════════════
// RARITY CONFIGURATION
// ══════════════════════════════════════════════════════════

export const rarityConfig = {
  C: {
    name: "Common",
    color: "⚪",
    dropRate: 5.0,
    emoji: "⚪"
  },
  U: {
    name: "Uncommon",
    color: "🟢",
    dropRate: 2.0,
    emoji: "🟢"
  },
  R: {
    name: "Rare",
    color: "🔵",
    dropRate: 0.8,
    emoji: "🔵"
  },
  SR: {
    name: "Super Rare",
    color: "🟣",
    dropRate: 0.15,
    emoji: "🟣"
  },
  SSR: {
    name: "Super Super Rare",
    color: "🟡",
    dropRate: 0.005,
    emoji: "🟡"
  }
};

// ══════════════════════════════════════════════════════════
// TAMING EMOJI POOL
// ══════════════════════════════════════════════════════════

export const tamingEmojis = ["🔥", "💧", "⚡", "🌿", "❄️", "🌟", "💎", "🌙"];

// ══════════════════════════════════════════════════════════
// HELPER FUNCTIONS
// ══════════════════════════════════════════════════════════

/**
 * Get pet by ID
 * @param {string} id - pet ID
 * @returns {object|null} pet object or null
 */
export function getPetById(id) {
  return pets[id] || null;
}

/**
 * Get all pets by rarity
 * @param {string} rarity - "C", "U", "R", "SR", "SSR"
 * @returns {array} array of pet objects
 */
export function getPetsByRarity(rarity) {
  return Object.values(pets).filter(pet => pet.rarity === rarity);
}

/**
 * Get random pet based on rarity drop rates
 * @returns {object|null} pet object or null if no pet dropped
 */
export function rollForPet() {
  const roll = Math.random() * 100;
  
  let cumulativeRate = 0;
  const rarities = ["SSR", "SR", "R", "U", "C"];
  
  for (const rarity of rarities) {
    cumulativeRate += rarityConfig[rarity].dropRate;
    if (roll < cumulativeRate) {
      const petsOfRarity = getPetsByRarity(rarity);
      if (petsOfRarity.length > 0) {
        return petsOfRarity[Math.floor(Math.random() * petsOfRarity.length)];
      }
    }
  }
  
  return null; // No pet dropped
}

/**
 * Generate random taming sequence
 * @param {number} length - sequence length
 * @returns {string} emoji sequence
 */
export function generateTamingSequence(length) {
  let sequence = "";
  for (let i = 0; i < length; i++) {
    sequence += tamingEmojis[Math.floor(Math.random() * tamingEmojis.length)];
  }
  return sequence;
}

/**
 * Get random flavor text for a pet
 * @param {object} pet - pet object
 * @returns {string} random flavor text
 */
export function getRandomFlavorText(pet) {
  if (!pet.flavorText || pet.flavorText.length === 0) {
    return `${pet.emoji} *${pet.name} is here!*`;
  }
  return pet.flavorText[Math.floor(Math.random() * pet.flavorText.length)];
}

/**
 * Get random mood for a pet
 * @param {object} pet - pet object
 * @returns {string} random mood
 */
export function getRandomMood(pet) {
  if (!pet.mood || pet.mood.length === 0) {
    return "Content";
  }
  return pet.mood[Math.floor(Math.random() * pet.mood.length)];
}

/**
 * Calculate actual stat bonus based on pet level
 * @param {object} pet - pet object from database
 * @param {number} level - current pet level (1-20)
 * @returns {number} actual stat value
 */
export function calculatePetStatBonus(pet, level) {
  if (!pet || !pet.statBonus) return 0;
  
  const baseValue = pet.statBonus.baseValue;
  const rarity = pet.rarity;
  const basePercent = petLevelConfig.baseStatPercentByRarity[rarity] || 5;
  
  // Calculate percentage at current level
  // Linear scaling from basePercent at level 1 to 100% at level 20
  const percentAtLevel = basePercent + ((100 - basePercent) * (level - 1) / 19);
  
  // Calculate actual stat value
  const actualValue = Math.floor(baseValue * (percentAtLevel / 100));
  
  return Math.max(1, actualValue); // Minimum 1 stat
}

/**
 * Get XP required for next level
 * @param {number} currentLevel - current level (1-19)
 * @returns {number} XP required for next level
 */
export function getXPForNextLevel(currentLevel) {
  if (currentLevel >= petLevelConfig.maxLevel) return 0;
  return petLevelConfig.xpTable[currentLevel] || 0;
}

/**
 * Calculate XP gain from enhancing with another pet
 * @param {string} materialRarity - rarity of pet being consumed
 * @param {string} targetRarity - rarity of pet being enhanced
 * @returns {number} XP gained
 */
export function calculateEnhancementXP(materialRarity, targetRarity) {
  const baseXP = petLevelConfig.enhancementXP[materialRarity] || 50;
  
  // Bonus if same rarity
  if (materialRarity === targetRarity) {
    return Math.floor(baseXP * petLevelConfig.sameRarityBonus);
  }
  
  return baseXP;
}

/**
 * Calculate XP gain from using pet items
 * @param {string} itemId - pet item ID
 * @returns {number} XP gained
 */
export function calculateItemXP(itemId) {
  const xpValues = {
    "pet_treat_basic": 50,
    "pet_treat_premium": 150,
    "pet_elixir": 500,
    "pet_bond_crystal": 1000,
  };
  
  return xpValues[itemId] || 0;
}

/**
 * Get all pets as array
 * @returns {array} array of all pet objects
 */
export function getAllPets() {
  return Object.values(pets);
}

/**
 * Calculate pet stat bonus for player
 * @param {object} pet - pet object
 * @returns {object} stat bonus object { type: "attack", value: 10 }
 */
export function getPetStatBonus(pet) {
  return pet.statBonus || { type: null, value: 0 };
}

/**
 * Get pet passive effect (SR and SSR only)
 * @param {object} pet - pet object
 * @returns {object|null} passive object or null
 */
export function getPetPassive(pet) {
  return pet.passive || null;
}

/**
 * Format pet info for display
 * @param {object} pet - pet object from database
 * @param {number} level - pet level (default 1)
 * @returns {string} formatted pet info
 */
export function formatPetInfo(pet, level = 1) {
  const rarityInfo = rarityConfig[pet.rarity];
  const actualStatBonus = calculatePetStatBonus(pet, level);
  const maxStatBonus = pet.statBonus.baseValue;
  
  let info = `${pet.emoji} *${pet.name}*\n`;
  info += `${rarityInfo.emoji} Rarity: ${rarityInfo.name}\n`;
  info += `📊 Level ${level} Bonus: +${actualStatBonus} ${pet.statBonus.type.toUpperCase()}\n`;
  info += `📊 Max (Lv.20) Bonus: +${maxStatBonus} ${pet.statBonus.type.toUpperCase()}\n`;
  
  if (pet.passive) {
    info += `✨ Passive: ${pet.passive.emoji} ${pet.passive.name}\n`;
    info += `   └ ${pet.passive.description}\n`;
  }
  
  info += `\n📖 ${pet.description}`;
  
  return info;
}

// ══════════════════════════════════════════════════════════
// PET SHOP ITEMS (Future Level-Up System)
// ══════════════════════════════════════════════════════════

export const petShopItems = {
  pet_treat_basic: {
    id: "pet_treat_basic",
    name: "Basic Pet Treat",
    emoji: "🍖",
    description: "A simple treat that pets love. Grants 50 pet XP.",
    price: 100,
    xpGain: 50,
    category: "pet_item"
  },
  
  pet_treat_premium: {
    id: "pet_treat_premium",
    name: "Premium Pet Treat",
    emoji: "🥩",
    description: "A high-quality treat for discerning pets. Grants 150 pet XP.",
    price: 300,
    xpGain: 150,
    category: "pet_item"
  },
  
  pet_elixir: {
    id: "pet_elixir",
    name: "Pet Growth Elixir",
    emoji: "🧪",
    description: "A magical elixir that accelerates pet growth. Grants 500 pet XP.",
    price: 1000,
    xpGain: 500,
    category: "pet_item"
  },
  
  pet_bond_crystal: {
    id: "pet_bond_crystal",
    name: "Bond Crystal",
    emoji: "💎",
    description: "Strengthens the bond with your pet. Grants 1000 pet XP.",
    price: 2500,
    xpGain: 1000,
    category: "pet_item"
  },
  
  pet_skill_scroll: {
    id: "pet_skill_scroll",
    name: "Pet Skill Scroll",
    emoji: "📜",
    description: "Teaches your pet a new trick. (Future feature)",
    price: 5000,
    category: "pet_item"
  }
};

// ══════════════════════════════════════════════════════════
// EXPORTS
// ══════════════════════════════════════════════════════════

export default {
  pets,
  rarityConfig,
  tamingEmojis,
  petShopItems,
  petLevelConfig,
  getPetById,
  getPetsByRarity,
  rollForPet,
  generateTamingSequence,
  getRandomFlavorText,
  getRandomMood,
  getAllPets,
  getPetStatBonus,
  getPetPassive,
  formatPetInfo,
  calculatePetStatBonus,
  getXPForNextLevel,
  calculateEnhancementXP,
  calculateItemXP,
};
