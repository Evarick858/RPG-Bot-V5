/*
  RPG Skill Database
  Base : Lenwy SCM — RPG Extension

  Rarities:
  - C      (Common)    — easy to get, basic effects
  - U      (Uncommon)  — slightly stronger, some utility
  - R      (Rare)      — notable power, limited access
  - SSR    (Super Rare)— strong effects, hard to obtain
  - UR     (Ultra Rare)— very powerful, very rare
  - Mythic (Mythic)    — legendary power, near impossible to get

  damageType:
  - "physical" : reduced by enemy physicalDef, boosted by physicalAtk
  - "magical"  : reduced by enemy magicalDef, boosted by magicalAtk
  - "hybrid"   : reduced by enemy hybridDef, boosted by hybridAtk
  - "none"     : no damage (pure utility/buff/heal)

  allowedClasses: ["all"] = any class can use it
                 ["warrior", "mage"] = class-locked

  source: how the skill can be obtained
  - "level_up"  : automatically learned at unlockLevel
  - "scroll"    : found as item drop or bought at shop
  - "quest"     : reward from completing a quest
  - "boss_drop" : rare drop from boss enemies only

  cooldown: minimum 7 turns
*/

export const skills = {

  // ══════════════════════════════════════════
  // C — COMMON (5 skills)
  // ══════════════════════════════════════════

  power_strike: {
    id: "power_strike",
    name: "Power Strike",
    emoji: "💥",
    rarity: "C",
    category: "physical",
    damageType: "physical",
    allowedClasses: ["warrior"],
    unlockLevel: 3,
    effect: "damage",
    value: 25,
    manaCost: 10,
    cooldown: 7,
    description: "A focused strike that deals 25 physical damage.",
    source: ["level_up", "scroll"],
  },

  quick_slash: {
    id: "quick_slash",
    name: "Quick Slash",
    emoji: "🗡️",
    rarity: "C",
    category: "physical",
    damageType: "physical",
    allowedClasses: ["rogue"],
    unlockLevel: 3,
    effect: "damage",
    value: 18,
    manaCost: 8,
    cooldown: 7,
    description: "A fast slash dealing 18 physical damage.",
    source: ["level_up", "scroll"],
  },

  magic_missile: {
    id: "magic_missile",
    name: "Magic Missile",
    emoji: "✨",
    rarity: "C",
    category: "magic",
    damageType: "magical",
    allowedClasses: ["mage"],
    unlockLevel: 3,
    effect: "damage",
    value: 22,
    manaCost: 12,
    cooldown: 7,
    description: "Fires a bolt of pure magic energy, dealing 22 magical damage.",
    source: ["level_up", "scroll"],
  },

  minor_heal: {
    id: "minor_heal",
    name: "Minor Heal",
    emoji: "💚",
    rarity: "C",
    category: "support",
    damageType: "none",
    allowedClasses: ["all"],
    unlockLevel: 2,
    effect: "heal",
    value: 20,
    manaCost: 15,
    cooldown: 7,
    description: "Restores 20 HP. Available to all classes.",
    source: ["level_up", "scroll"],
  },

  taunt: {
    id: "taunt",
    name: "Taunt",
    emoji: "😤",
    rarity: "C",
    category: "support",
    damageType: "none",
    allowedClasses: ["warrior"],
    unlockLevel: 4,
    effect: "taunt",
    value: 1,
    duration: 2,
    manaCost: 8,
    cooldown: 7,
    description: "Forces the enemy to target you for 2 rounds.",
    source: ["level_up", "scroll"],
  },

  // ══════════════════════════════════════════
  // U — UNCOMMON (4 skills)
  // ══════════════════════════════════════════

  poison_blade: {
    id: "poison_blade",
    name: "Poison Blade",
    emoji: "🐍",
    rarity: "U",
    category: "physical",
    damageType: "hybrid",
    allowedClasses: ["rogue"],
    unlockLevel: 6,
    effect: "poison",
    value: 7,
    duration: 4,
    damage: 10,
    manaCost: 18,
    cooldown: 7,
    description: "Coats blade with poison. Deals 10 hybrid damage + 7 poison damage/round for 4 rounds.",
    source: ["scroll", "quest"],
  },

  battle_cry: {
    id: "battle_cry",
    name: "Battle Cry",
    emoji: "📣",
    rarity: "U",
    category: "support",
    damageType: "none",
    allowedClasses: ["warrior"],
    unlockLevel: 6,
    effect: "buff_atk",
    value: 10,
    duration: 3,
    manaCost: 15,
    cooldown: 7,
    description: "Lets out a fierce war cry, increasing own attack by 10 for 3 rounds.",
    source: ["level_up", "scroll"],
  },

  ice_lance: {
    id: "ice_lance",
    name: "Ice Lance",
    emoji: "🧊",
    rarity: "U",
    category: "magic",
    damageType: "magical",
    allowedClasses: ["mage"],
    unlockLevel: 6,
    effect: "slow",
    value: 8,
    duration: 2,
    damage: 28,
    manaCost: 25,
    cooldown: 7,
    description: "Hurls a lance of ice dealing 28 magical damage and reducing enemy agility by 8 for 2 rounds.",
    source: ["scroll", "quest"],
  },

  smoke_bomb: {
    id: "smoke_bomb",
    name: "Smoke Bomb",
    emoji: "💨",
    rarity: "U",
    category: "stealth",
    damageType: "none",
    allowedClasses: ["rogue"],
    unlockLevel: 7,
    effect: "evasion_buff",
    value: 30,
    duration: 2,
    manaCost: 20,
    cooldown: 7,
    description: "Throws a smoke bomb, increasing own evasion by 30% for 2 rounds.",
    source: ["scroll", "quest"],
  },

  // ══════════════════════════════════════════
  // R — RARE (4 skills)
  // ══════════════════════════════════════════

  whirlwind: {
    id: "whirlwind",
    name: "Whirlwind",
    emoji: "🌀",
    rarity: "R",
    category: "physical",
    damageType: "physical",
    allowedClasses: ["warrior"],
    unlockLevel: 10,
    effect: "damage",
    value: 45,
    manaCost: 30,
    cooldown: 7,
    description: "Spins with weapon extended, dealing 45 physical damage in a powerful sweeping blow.",
    source: ["scroll", "boss_drop"],
  },

  thunder_shock: {
    id: "thunder_shock",
    name: "Thunder Shock",
    emoji: "⚡",
    rarity: "R",
    category: "magic",
    damageType: "magical",
    allowedClasses: ["mage"],
    unlockLevel: 10,
    effect: "stun",
    value: 1,
    duration: 1,
    damage: 38,
    manaCost: 35,
    cooldown: 7,
    description: "Calls down a bolt of lightning dealing 38 magical damage and stunning the enemy for 1 round.",
    source: ["scroll", "boss_drop"],
  },

  ambush: {
    id: "ambush",
    name: "Ambush",
    emoji: "🎯",
    rarity: "R",
    category: "stealth",
    damageType: "physical",
    allowedClasses: ["rogue"],
    unlockLevel: 10,
    effect: "bleed",
    value: 10,
    duration: 4,
    damage: 30,
    manaCost: 28,
    cooldown: 7,
    description: "Strikes from the shadows dealing 30 physical damage and causing bleed for 10 damage/round over 4 rounds.",
    source: ["scroll", "boss_drop"],
  },

  mana_drain: {
    id: "mana_drain",
    name: "Mana Drain",
    emoji: "🔵",
    rarity: "R",
    category: "magic",
    damageType: "magical",
    allowedClasses: ["mage", "rogue"],
    unlockLevel: 9,
    effect: "manaburn",
    value: 40,
    damage: 15,
    manaCost: 25,
    cooldown: 7,
    description: "Drains 40 mana from the enemy and deals 15 magical damage.",
    source: ["scroll", "quest"],
  },

  // ══════════════════════════════════════════
  // SSR — SUPER RARE (3 skills)
  // ══════════════════════════════════════════

  blade_storm: {
    id: "blade_storm",
    name: "Blade Storm",
    emoji: "🌪️",
    rarity: "SSR",
    category: "physical",
    damageType: "hybrid",
    allowedClasses: ["warrior", "rogue"],
    unlockLevel: 15,
    effect: "damage",
    value: 70,
    manaCost: 45,
    cooldown: 7,
    description: "Unleashes a furious storm of blade strikes dealing 70 hybrid damage.",
    source: ["boss_drop", "scroll"],
  },

  meteor: {
    id: "meteor",
    name: "Meteor",
    emoji: "☄️",
    rarity: "SSR",
    category: "magic",
    damageType: "magical",
    allowedClasses: ["mage"],
    unlockLevel: 15,
    effect: "burn",
    value: 15,
    duration: 3,
    damage: 60,
    manaCost: 60,
    cooldown: 7,
    description: "Calls down a meteor dealing 60 magical damage and burning the enemy for 15 damage/round for 3 rounds.",
    source: ["boss_drop", "quest"],
  },

  death_mark: {
    id: "death_mark",
    name: "Death Mark",
    emoji: "💀",
    rarity: "SSR",
    category: "debuff",
    damageType: "hybrid",
    allowedClasses: ["rogue"],
    unlockLevel: 14,
    effect: "execute",
    value: 50,
    manaCost: 50,
    cooldown: 7,
    description: "Marks the enemy for death. If their HP is below 20%, instantly deals 50% of their max HP as hybrid damage.",
    source: ["boss_drop"],
  },

  // ══════════════════════════════════════════
  // UR — ULTRA RARE (2 skills)
  // ══════════════════════════════════════════

  divine_shield: {
    id: "divine_shield",
    name: "Divine Shield",
    emoji: "🛡️",
    rarity: "UR",
    category: "support",
    damageType: "none",
    allowedClasses: ["warrior"],
    unlockLevel: 20,
    effect: "shield",
    value: 999,
    duration: 1,
    manaCost: 60,
    cooldown: 8,
    description: "Surrounds self with divine light, absorbing ALL damage for 1 round.",
    source: ["boss_drop"],
  },

  void_rift: {
    id: "void_rift",
    name: "Void Rift",
    emoji: "🌑",
    rarity: "UR",
    category: "magic",
    damageType: "magical",
    allowedClasses: ["mage"],
    unlockLevel: 20,
    effect: "silence",
    value: 1,
    duration: 3,
    damage: 80,
    manaCost: 80,
    cooldown: 8,
    description: "Tears open a rift in reality dealing 80 magical damage and silencing the enemy for 3 rounds.",
    source: ["boss_drop"],
  },

  // ══════════════════════════════════════════
  // Mythic — MYTHIC (2 skills)
  // ══════════════════════════════════════════

  ragnarok: {
    id: "ragnarok",
    name: "Ragnarok",
    emoji: "🔥⚔️",
    rarity: "Mythic",
    category: "physical",
    damageType: "hybrid",
    allowedClasses: ["warrior"],
    unlockLevel: 30,
    effect: "damage",
    value: 150,
    manaCost: 100,
    cooldown: 10,
    description: "The ultimate warrior technique. Channels all power into one catastrophic strike dealing 150 hybrid damage.",
    source: ["boss_drop"],
  },

  world_ender: {
    id: "world_ender",
    name: "World Ender",
    emoji: "💫",
    rarity: "Mythic",
    category: "magic",
    damageType: "magical",
    allowedClasses: ["mage"],
    unlockLevel: 30,
    effect: "burn",
    value: 30,
    duration: 5,
    damage: 120,
    manaCost: 120,
    cooldown: 10,
    description: "Channels the power of destruction itself. Deals 120 magical damage and burns for 30 damage/round for 5 rounds.",
    source: ["boss_drop"],
  },

};

// ── Rarity config ────────────────────────────────────────

export const rarityConfig = {
  C:      { label: "Common",     color: "⬜", dropWeight: 60   },
  U:      { label: "Uncommon",   color: "🟩", dropWeight: 25   },
  R:      { label: "Rare",       color: "🟦", dropWeight: 10   },
  SSR:    { label: "Super Rare", color: "🟪", dropWeight: 4    },
  UR:     { label: "Ultra Rare", color: "🟧", dropWeight: 1    },
  Mythic: { label: "Mythic",     color: "🌟", dropWeight: 0.1  },
};

// ── Helpers ──────────────────────────────────────────────

export function getSkillById(id) {
  return skills[id] || null;
}

export function getSkillsByClass(classId) {
  return Object.values(skills).filter(
    (s) => s.allowedClasses.includes("all") || s.allowedClasses.includes(classId)
  );
}

export function getSkillsByRarity(rarity) {
  return Object.values(skills).filter((s) => s.rarity === rarity);
}

export function getSkillsForLevel(classId, level) {
  return Object.values(skills).filter(
    (s) =>
      s.unlockLevel <= level &&
      (s.allowedClasses.includes("all") || s.allowedClasses.includes(classId)) &&
      s.source.includes("level_up")
  );
}

export default skills;
