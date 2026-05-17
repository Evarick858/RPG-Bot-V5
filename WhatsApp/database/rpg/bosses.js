/*
  RPG Dungeon Bosses Database
  Base : Lenwy SCM — RPG Extension

  Boss Types:
  - Mini-Boss (floors 5, 10, 15): 3 passives, stun immune
  - Final Boss (floor 20): 5 passives, stun immune

  Dungeon Tiers:
  - Easy: Level 10+ recommended
  - Normal: Level 20+ recommended
  - Hard: Level 30+ recommended
*/

export const bosses = {

  // ═══════════════════════════════════════════════════════════
  // EASY DUNGEON BOSSES (Forgotten Crypt)
  // ═══════════════════════════════════════════════════════════

  // ── Floor 5 Mini-Boss ──
  crypt_guardian: {
    id: "crypt_guardian",
    name: "Crypt Guardian",
    emoji: "🗿",
    tier: "easy",
    floor: 5,
    isBoss: true,
    isMiniBoss: true,
    stats: {
      hp: 800,
      mana: 200,
      attack: 25,
      defense: 20,
      agility: 8,
      physicalAtk: 30,
      magicalAtk: 10,
      hybridAtk: 15,
      physicalDef: 25,
      magicalDef: 15,
      hybridDef: 20,
    },
    skills: [
      {
        id: "stone_slam",
        name: "Stone Slam",
        description: "Slams the ground with massive force",
        manaCost: 30,
        cooldown: 8,
        damageType: "physical",
        baseDamage: 45,
        effect: "stun",
        value: 1,
        duration: 1,
      },
      {
        id: "fortify",
        name: "Fortify",
        description: "Hardens stone body",
        manaCost: 25,
        cooldown: 9,
        damageType: "none",
        effect: "buff_def",
        value: 15,
        duration: 3,
      },
    ],
    passives: [
      { id: "iron_skin", name: "Iron Skin", emoji: "🛡️", effect: "defense_boost", value: 8 },
      { id: "regeneration", name: "Regeneration", emoji: "💚", effect: "regen", value: 10 },
      { id: "thorns", name: "Thorns", emoji: "🌵", effect: "thorns", value: 8 },
    ],
    drops: [],
    xp: 500,
    gold: { min: 0, max: 0 },
  },

  // ── Floor 10 Mini-Boss ──
  shadow_reaper: {
    id: "shadow_reaper",
    name: "Shadow Reaper",
    emoji: "👤",
    tier: "easy",
    floor: 10,
    isBoss: true,
    isMiniBoss: true,
    stats: {
      hp: 1200,
      mana: 300,
      attack: 35,
      defense: 15,
      agility: 20,
      physicalAtk: 25,
      magicalAtk: 35,
      hybridAtk: 30,
      physicalDef: 15,
      magicalDef: 25,
      hybridDef: 20,
    },
    skills: [
      {
        id: "shadow_strike",
        name: "Shadow Strike",
        description: "Strikes from the shadows",
        manaCost: 40,
        cooldown: 8,
        damageType: "hybrid",
        baseDamage: 55,
        effect: "blind",
        value: 50,
        duration: 2,
      },
      {
        id: "life_drain",
        name: "Life Drain",
        description: "Drains life force",
        manaCost: 35,
        cooldown: 9,
        damageType: "magical",
        baseDamage: 40,
        effect: "heal",
        value: 40,
      },
    ],
    passives: [
      { id: "nimble", name: "Nimble", emoji: "💨", effect: "dodge_boost", value: 20 },
      { id: "vampiric", name: "Vampiric", emoji: "🧛", effect: "lifesteal", value: 25 },
      { id: "swift_strikes", name: "Swift Strikes", emoji: "⚡", effect: "agility_boost", value: 10 },
    ],
    drops: [],
    xp: 800,
    gold: { min: 0, max: 0 },
  },

  // ── Floor 15 Mini-Boss ──
  bone_lord: {
    id: "bone_lord",
    name: "Bone Lord",
    emoji: "💀",
    tier: "easy",
    floor: 15,
    isBoss: true,
    isMiniBoss: true,
    stats: {
      hp: 1600,
      mana: 350,
      attack: 40,
      defense: 25,
      agility: 12,
      physicalAtk: 45,
      magicalAtk: 30,
      hybridAtk: 35,
      physicalDef: 30,
      magicalDef: 20,
      hybridDef: 25,
    },
    skills: [
      {
        id: "bone_spear",
        name: "Bone Spear",
        description: "Hurls a spear of bone",
        manaCost: 45,
        cooldown: 8,
        damageType: "physical",
        baseDamage: 65,
        effect: "bleed",
        value: 12,
        duration: 4,
      },
      {
        id: "death_curse",
        name: "Death Curse",
        description: "Curses the enemy",
        manaCost: 50,
        cooldown: 10,
        damageType: "magical",
        baseDamage: 50,
        effect: "curse",
        value: 10,
        duration: 5,
      },
    ],
    passives: [
      { id: "enrage", name: "Enrage", emoji: "😡", effect: "enrage", value: 15, threshold: 30 },
      { id: "poison_touch", name: "Poison Touch", emoji: "☠️", effect: "poison_on_hit", value: 8, chance: 35, duration: 4 },
      { id: "thick_hide", name: "Thick Hide", emoji: "🦏", effect: "damage_reduction", value: 5 },
    ],
    drops: [],
    xp: 1200,
    gold: { min: 0, max: 0 },
  },

  // ── Floor 20 Final Boss ──
  lich_king: {
    id: "lich_king",
    name: "Lich King",
    emoji: "👑💀",
    tier: "easy",
    floor: 20,
    isBoss: true,
    isFinalBoss: true,
    stats: {
      hp: 3000,
      mana: 500,
      attack: 50,
      defense: 35,
      agility: 15,
      physicalAtk: 40,
      magicalAtk: 60,
      hybridAtk: 50,
      physicalDef: 35,
      magicalDef: 40,
      hybridDef: 35,
    },
    skills: [
      {
        id: "death_wave",
        name: "Death Wave",
        description: "Unleashes a wave of death energy",
        manaCost: 80,
        cooldown: 9,
        damageType: "magical",
        baseDamage: 90,
        effect: "curse",
        value: 15,
        duration: 5,
      },
      {
        id: "soul_harvest",
        name: "Soul Harvest",
        description: "Harvests souls to restore health",
        manaCost: 70,
        cooldown: 10,
        damageType: "hybrid",
        baseDamage: 70,
        effect: "heal",
        value: 100,
      },
      {
        id: "frost_nova",
        name: "Frost Nova",
        description: "Freezes enemies in place",
        manaCost: 60,
        cooldown: 8,
        damageType: "magical",
        baseDamage: 60,
        effect: "freeze",
        value: 1,
        duration: 2,
      },
    ],
    passives: [
      { id: "fast_regeneration", name: "Fast Regeneration", emoji: "💚", effect: "regen", value: 15 },
      { id: "arcane_mind", name: "Arcane Mind", emoji: "💧", effect: "mana_regen", value: 10 },
      { id: "magic_resistance", name: "Magic Resistance", emoji: "✨", effect: "magical_def_boost", value: 15 },
      { id: "iron_will", name: "Iron Will", emoji: "🛡️", effect: "defense_boost_low_hp", value: 12, threshold: 25 },
      { id: "phoenix_heart", name: "Phoenix Heart", emoji: "🔥", effect: "phoenix_revive", value: 30, threshold: 10 },
    ],
    drops: [],
    xp: 5000,
    gold: { min: 5000, max: 10000 },
  },

  // ═══════════════════════════════════════════════════════════
  // NORMAL DUNGEON BOSSES (Volcanic Rift)
  // ═══════════════════════════════════════════════════════════

  // ── Floor 5 Mini-Boss ──
  magma_golem: {
    id: "magma_golem",
    name: "Magma Golem",
    emoji: "🔥🗿",
    tier: "normal",
    floor: 5,
    isBoss: true,
    isMiniBoss: true,
    stats: {
      hp: 1500,
      mana: 250,
      attack: 40,
      defense: 35,
      agility: 6,
      physicalAtk: 50,
      magicalAtk: 30,
      hybridAtk: 40,
      physicalDef: 40,
      magicalDef: 25,
      hybridDef: 30,
    },
    skills: [
      {
        id: "lava_burst",
        name: "Lava Burst",
        description: "Erupts with molten lava",
        manaCost: 50,
        cooldown: 8,
        damageType: "magical",
        baseDamage: 70,
        effect: "burn",
        value: 15,
        duration: 4,
      },
      {
        id: "molten_armor",
        name: "Molten Armor",
        description: "Coats body in molten rock",
        manaCost: 40,
        cooldown: 9,
        damageType: "none",
        effect: "buff_def",
        value: 20,
        duration: 3,
      },
    ],
    passives: [
      { id: "stone_skin", name: "Stone Skin", emoji: "🪨", effect: "defense_boost", value: 12 },
      { id: "burning_aura", name: "Burning Aura", emoji: "🔥", effect: "burn_on_hit", value: 10, chance: 30, duration: 4 },
      { id: "thorns", name: "Thorns", emoji: "🌵", effect: "thorns", value: 12 },
    ],
    drops: [],
    xp: 1000,
    gold: { min: 0, max: 0 },
  },

  // ── Floor 10 Mini-Boss ──
  flame_warden: {
    id: "flame_warden",
    name: "Flame Warden",
    emoji: "🔥⚔️",
    tier: "normal",
    floor: 10,
    isBoss: true,
    isMiniBoss: true,
    stats: {
      hp: 2200,
      mana: 400,
      attack: 55,
      defense: 30,
      agility: 18,
      physicalAtk: 50,
      magicalAtk: 55,
      hybridAtk: 52,
      physicalDef: 30,
      magicalDef: 35,
      hybridDef: 32,
    },
    skills: [
      {
        id: "inferno_slash",
        name: "Inferno Slash",
        description: "Slashes with a flaming blade",
        manaCost: 60,
        cooldown: 8,
        damageType: "hybrid",
        baseDamage: 85,
        effect: "burn",
        value: 18,
        duration: 4,
      },
      {
        id: "fire_shield",
        name: "Fire Shield",
        description: "Surrounds self with flames",
        manaCost: 50,
        cooldown: 10,
        damageType: "none",
        effect: "reflect",
        value: 30,
        duration: 3,
      },
    ],
    passives: [
      { id: "berserker_rage", name: "Berserker Rage", emoji: "💢", effect: "berserker_rage", value: 20, defensePenalty: 8, threshold: 20 },
      { id: "burning_aura", name: "Burning Aura", emoji: "🔥", effect: "burn_on_hit", value: 12, chance: 35, duration: 4 },
      { id: "critical_eye", name: "Critical Eye", emoji: "🎯", effect: "crit_boost", value: 15 },
    ],
    drops: [],
    xp: 1500,
    gold: { min: 0, max: 0 },
  },

  // ── Floor 15 Mini-Boss ──
  inferno_drake: {
    id: "inferno_drake",
    name: "Inferno Drake",
    emoji: "🐉",
    tier: "normal",
    floor: 15,
    isBoss: true,
    isMiniBoss: true,
    stats: {
      hp: 3000,
      mana: 450,
      attack: 65,
      defense: 40,
      agility: 22,
      physicalAtk: 60,
      magicalAtk: 70,
      hybridAtk: 65,
      physicalDef: 40,
      magicalDef: 45,
      hybridDef: 42,
    },
    skills: [
      {
        id: "dragon_breath",
        name: "Dragon Breath",
        description: "Breathes devastating fire",
        manaCost: 80,
        cooldown: 9,
        damageType: "magical",
        baseDamage: 100,
        effect: "burn",
        value: 20,
        duration: 5,
      },
      {
        id: "wing_buffet",
        name: "Wing Buffet",
        description: "Powerful wing strike",
        manaCost: 60,
        cooldown: 8,
        damageType: "physical",
        baseDamage: 80,
        effect: "slow",
        value: 10,
        duration: 3,
      },
    ],
    passives: [
      { id: "enrage", name: "Enrage", emoji: "😡", effect: "enrage", value: 25, threshold: 30 },
      { id: "fast_regeneration", name: "Fast Regeneration", emoji: "💚", effect: "regen", value: 15 },
      { id: "mighty_blow", name: "Mighty Blow", emoji: "💥", effect: "attack_boost", value: 15 },
    ],
    drops: [],
    xp: 2000,
    gold: { min: 0, max: 0 },
  },

  // ── Floor 20 Final Boss ──
  volcanic_titan: {
    id: "volcanic_titan",
    name: "Volcanic Titan",
    emoji: "🌋👹",
    tier: "normal",
    floor: 20,
    isBoss: true,
    isFinalBoss: true,
    stats: {
      hp: 5500,
      mana: 600,
      attack: 75,
      defense: 50,
      agility: 20,
      physicalAtk: 70,
      magicalAtk: 80,
      hybridAtk: 75,
      physicalDef: 50,
      magicalDef: 55,
      hybridDef: 52,
    },
    skills: [
      {
        id: "eruption",
        name: "Eruption",
        description: "Causes a massive volcanic eruption",
        manaCost: 100,
        cooldown: 10,
        damageType: "magical",
        baseDamage: 130,
        effect: "burn",
        value: 25,
        duration: 5,
      },
      {
        id: "meteor_strike",
        name: "Meteor Strike",
        description: "Calls down meteors",
        manaCost: 90,
        cooldown: 9,
        damageType: "hybrid",
        baseDamage: 110,
        effect: "stun",
        value: 1,
        duration: 1,
      },
      {
        id: "titan_rage",
        name: "Titan Rage",
        description: "Enters a berserker state",
        manaCost: 80,
        cooldown: 11,
        damageType: "none",
        effect: "buff_atk",
        value: 30,
        duration: 4,
      },
    ],
    passives: [
      { id: "last_stand", name: "Last Stand", emoji: "⚔️", effect: "last_stand", value: 10, threshold: 15 },
      { id: "burning_aura", name: "Burning Aura", emoji: "🔥", effect: "burn_on_hit", value: 15, chance: 40, duration: 5 },
      { id: "stone_skin", name: "Stone Skin", emoji: "🪨", effect: "defense_boost", value: 15 },
      { id: "mana_spring", name: "Mana Spring", emoji: "💧", effect: "mana_regen", value: 15 },
      { id: "adaptive", name: "Adaptive", emoji: "🔄", effect: "adaptive", value: 3, interval: 3 },
    ],
    drops: [],
    xp: 5000,
    gold: { min: 5000, max: 10000 },
  },

  // ═══════════════════════════════════════════════════════════
  // HARD DUNGEON BOSSES (Frozen Abyss)
  // ═══════════════════════════════════════════════════════════

  // ── Floor 5 Mini-Boss ──
  frost_sentinel: {
    id: "frost_sentinel",
    name: "Frost Sentinel",
    emoji: "❄️🗿",
    tier: "hard",
    floor: 5,
    isBoss: true,
    isMiniBoss: true,
    stats: {
      hp: 2500,
      mana: 350,
      attack: 60,
      defense: 50,
      agility: 12,
      physicalAtk: 65,
      magicalAtk: 55,
      hybridAtk: 60,
      physicalDef: 55,
      magicalDef: 50,
      hybridDef: 52,
    },
    skills: [
      {
        id: "ice_prison",
        name: "Ice Prison",
        description: "Traps enemy in ice",
        manaCost: 70,
        cooldown: 9,
        damageType: "magical",
        baseDamage: 90,
        effect: "freeze",
        value: 1,
        duration: 2,
      },
      {
        id: "glacial_armor",
        name: "Glacial Armor",
        description: "Hardens ice shell",
        manaCost: 60,
        cooldown: 10,
        damageType: "none",
        effect: "buff_def",
        value: 25,
        duration: 3,
      },
    ],
    passives: [
      { id: "stone_skin", name: "Stone Skin", emoji: "🪨", effect: "defense_boost", value: 15 },
      { id: "freezing_touch", name: "Freezing Touch", emoji: "🧊", effect: "slow_on_hit", value: 8, chance: 35, duration: 4 },
      { id: "thick_hide", name: "Thick Hide", emoji: "🦏", effect: "damage_reduction", value: 8 },
    ],
    drops: [],
    xp: 1500,
    gold: { min: 0, max: 0 },
  },

  // ── Floor 10 Mini-Boss ──
  ice_wraith: {
    id: "ice_wraith",
    name: "Ice Wraith",
    emoji: "👻❄️",
    tier: "hard",
    floor: 10,
    isBoss: true,
    isMiniBoss: true,
    stats: {
      hp: 3500,
      mana: 500,
      attack: 70,
      defense: 40,
      agility: 28,
      physicalAtk: 60,
      magicalAtk: 85,
      hybridAtk: 72,
      physicalDef: 40,
      magicalDef: 60,
      hybridDef: 50,
    },
    skills: [
      {
        id: "blizzard",
        name: "Blizzard",
        description: "Summons a freezing blizzard",
        manaCost: 90,
        cooldown: 9,
        damageType: "magical",
        baseDamage: 120,
        effect: "slow",
        value: 15,
        duration: 4,
      },
      {
        id: "phase_shift",
        name: "Phase Shift",
        description: "Becomes ethereal",
        manaCost: 70,
        cooldown: 10,
        damageType: "none",
        effect: "evasion_buff",
        value: 50,
        duration: 2,
      },
    ],
    passives: [
      { id: "nimble", name: "Nimble", emoji: "💨", effect: "dodge_boost", value: 25 },
      { id: "vampiric", name: "Vampiric", emoji: "🧛", effect: "lifesteal", value: 30 },
      { id: "arcane_mind", name: "Arcane Mind", emoji: "💧", effect: "mana_regen", value: 15 },
    ],
    drops: [],
    xp: 2500,
    gold: { min: 0, max: 0 },
  },

  // ── Floor 15 Mini-Boss ──
  frozen_colossus: {
    id: "frozen_colossus",
    name: "Frozen Colossus",
    emoji: "🧊👹",
    tier: "hard",
    floor: 15,
    isBoss: true,
    isMiniBoss: true,
    stats: {
      hp: 5000,
      mana: 550,
      attack: 85,
      defense: 60,
      agility: 15,
      physicalAtk: 90,
      magicalAtk: 75,
      hybridAtk: 82,
      physicalDef: 65,
      magicalDef: 55,
      hybridDef: 60,
    },
    skills: [
      {
        id: "avalanche",
        name: "Avalanche",
        description: "Unleashes a devastating avalanche",
        manaCost: 100,
        cooldown: 10,
        damageType: "physical",
        baseDamage: 140,
        effect: "stun",
        value: 1,
        duration: 1,
      },
      {
        id: "permafrost",
        name: "Permafrost",
        description: "Freezes everything around",
        manaCost: 90,
        cooldown: 9,
        damageType: "magical",
        baseDamage: 110,
        effect: "freeze",
        value: 1,
        duration: 3,
      },
    ],
    passives: [
      { id: "berserker_rage", name: "Berserker Rage", emoji: "💢", effect: "berserker_rage", value: 30, defensePenalty: 10, threshold: 20 },
      { id: "fast_regeneration", name: "Fast Regeneration", emoji: "💚", effect: "regen", value: 20 },
      { id: "fortified", name: "Fortified", emoji: "🏰", effect: "physical_def_boost", value: 20 },
    ],
    drops: [],
    xp: 3500,
    gold: { min: 0, max: 0 },
  },

  // ── Floor 20 Final Boss ──
  abyssal_emperor: {
    id: "abyssal_emperor",
    name: "Abyssal Emperor",
    emoji: "👑❄️",
    tier: "hard",
    floor: 20,
    isBoss: true,
    isFinalBoss: true,
    stats: {
      hp: 8000,
      mana: 800,
      attack: 100,
      defense: 70,
      agility: 25,
      physicalAtk: 95,
      magicalAtk: 110,
      hybridAtk: 102,
      physicalDef: 70,
      magicalDef: 75,
      hybridDef: 72,
    },
    skills: [
      {
        id: "absolute_zero",
        name: "Absolute Zero",
        description: "Freezes everything to absolute zero",
        manaCost: 150,
        cooldown: 11,
        damageType: "magical",
        baseDamage: 180,
        effect: "freeze",
        value: 1,
        duration: 3,
      },
      {
        id: "glacial_apocalypse",
        name: "Glacial Apocalypse",
        description: "Brings forth the end of warmth",
        manaCost: 130,
        cooldown: 10,
        damageType: "hybrid",
        baseDamage: 160,
        effect: "curse",
        value: 25,
        duration: 5,
      },
      {
        id: "eternal_winter",
        name: "Eternal Winter",
        description: "Summons eternal winter",
        manaCost: 120,
        cooldown: 9,
        damageType: "magical",
        baseDamage: 140,
        effect: "slow",
        value: 20,
        duration: 5,
      },
    ],
    passives: [
      { id: "last_stand", name: "Last Stand", emoji: "⚔️", effect: "last_stand", value: 15, threshold: 15 },
      { id: "phoenix_heart", name: "Phoenix Heart", emoji: "🔥", effect: "phoenix_revive", value: 40, threshold: 10 },
      { id: "magic_resistance", name: "Magic Resistance", emoji: "✨", effect: "magical_def_boost", value: 20 },
      { id: "mana_spring", name: "Mana Spring", emoji: "💧", effect: "mana_regen", value: 20 },
      { id: "adaptive", name: "Adaptive", emoji: "🔄", effect: "adaptive", value: 5, interval: 3 },
    ],
    drops: [],
    xp: 5000,
    gold: { min: 5000, max: 10000 },
  },

};

// ══════════════════════════════════════════════════════════
// HELPER FUNCTIONS
// ══════════════════════════════════════════════════════════

/**
 * Get boss by ID
 * @param {string} id - boss ID
 * @returns {object|null} boss object or null
 */
export function getBossById(id) {
  return bosses[id] || null;
}

/**
 * Get boss by tier and floor
 * @param {string} tier - "easy", "normal", "hard"
 * @param {number} floor - floor number (5, 10, 15, 20)
 * @returns {object|null} boss object or null
 */
export function getBossByTierAndFloor(tier, floor) {
  return Object.values(bosses).find(
    (b) => b.tier === tier && b.floor === floor
  ) || null;
}

/**
 * Get all mini-bosses for a tier
 * @param {string} tier - "easy", "normal", "hard"
 * @returns {array} array of mini-boss objects
 */
export function getMiniBossesByTier(tier) {
  return Object.values(bosses).filter(
    (b) => b.tier === tier && b.isMiniBoss
  );
}

/**
 * Get final boss for a tier
 * @param {string} tier - "easy", "normal", "hard"
 * @returns {object|null} final boss object or null
 */
export function getFinalBossByTier(tier) {
  return Object.values(bosses).find(
    (b) => b.tier === tier && b.isFinalBoss
  ) || null;
}

/**
 * Get all bosses for a tier
 * @param {string} tier - "easy", "normal", "hard"
 * @returns {array} array of boss objects
 */
export function getBossesByTier(tier) {
  return Object.values(bosses).filter((b) => b.tier === tier);
}

// ══════════════════════════════════════════════════════════
// EXPORTS
// ══════════════════════════════════════════════════════════

export default {
  bosses,
  getBossById,
  getBossByTierAndFloor,
  getMiniBossesByTier,
  getFinalBossByTier,
  getBossesByTier,
};
