/*
  RPG Class Definitions
  Base : Lenwy SCM — RPG Extension

  Each class has:
  - id, name, emoji, description
  - baseStats : starting stats for this class
  - starterSkill : the one skill they begin with
  - passive : their permanent passive ability

  New stats:
  - physicalAtk  : bonus to physical damage dealt
  - magicalAtk   : bonus to magical damage dealt
  - hybridAtk    : bonus to hybrid damage dealt
  - physicalDef  : reduces incoming physical damage
  - magicalDef   : reduces incoming magical damage
  - hybridDef    : reduces both physical and magical damage (smaller)
*/

export const classes = {

  warrior: {
    id: "warrior",
    name: "Warrior",
    emoji: "⚔️",
    description: "Built like a wall. Slow and unlucky, but nearly impossible to kill. Thrives in long fights.",
    baseStats: {
      hp: 150,
      maxHp: 150,
      mana: 20,
      maxMana: 20,
      attack: 13,
      defense: 12,
      agility: 4,
      luck: 3,
      // Physical specialist — high physicalDef, zero magic
      physicalAtk: 8,
      magicalAtk: 0,
      hybridAtk: 2,
      physicalDef: 10,
      magicalDef: 0,
      hybridDef: 3,
    },
    starterSkill: {
      id: "shield_bash",
      name: "Shield Bash",
      damageType: "physical",
      effect: "stun",
      value: 1,
      duration: 1,
      damage: 12,
      manaCost: 8,
      cooldown: 4,
      cooldownRemaining: 0,
      description: "Bashes the enemy with a shield, dealing 12 physical damage and stunning them for 1 round.",
    },
    passive: {
      id: "iron_will",
      name: "Iron Will",
      effect: "defense_boost_low_hp",
      value: 8,
      threshold: 25,
      description: "When HP drops below 25%, defense increases by 8.",
    },
  },

  mage: {
    id: "mage",
    name: "Mage",
    emoji: "🧙",
    description: "A glass cannon. Devastating magic power but dies fast if enemies get close.",
    baseStats: {
      hp: 70,
      maxHp: 70,
      mana: 120,
      maxMana: 120,
      attack: 18,
      defense: 2,
      agility: 9,
      luck: 8,
      // Magic specialist — high magicalAtk/Def, zero physical
      physicalAtk: 0,
      magicalAtk: 12,
      hybridAtk: 3,
      physicalDef: 0,
      magicalDef: 10,
      hybridDef: 3,
    },
    starterSkill: {
      id: "frost_bolt",
      name: "Frost Bolt",
      damageType: "magical",
      effect: "slow",
      value: 6,
      damage: 20,
      duration: 2,
      manaCost: 18,
      cooldown: 4,
      cooldownRemaining: 0,
      description: "Launches a bolt of frost, dealing 20 magical damage and reducing enemy agility by 6 for 2 rounds.",
    },
    passive: {
      id: "arcane_mind",
      name: "Arcane Mind",
      effect: "mana_regen",
      value: 6,
      description: "Naturally channels mana, regenerating 6 mana every round in combat.",
    },
  },

  rogue: {
    id: "rogue",
    name: "Rogue",
    emoji: "🗡️",
    description: "Never fights fair. Paper-thin defense but insane agility and luck. Hits hardest when least expected.",
    baseStats: {
      hp: 90,
      maxHp: 90,
      mana: 45,
      maxMana: 45,
      attack: 14,
      defense: 3,
      agility: 20,
      luck: 14,
      // Hybrid specialist — balanced but lower than specialists
      physicalAtk: 5,
      magicalAtk: 3,
      hybridAtk: 8,
      physicalDef: 2,
      magicalDef: 2,
      hybridDef: 5,
    },
    starterSkill: {
      id: "backstab",
      name: "Backstab",
      damageType: "physical",
      effect: "damage",
      value: 14,
      damage: 14,
      manaCost: 15,
      cooldown: 7,
      cooldownRemaining: 0,
      description: "Strikes from the shadows. Deals 14 physical damage.",
    },
    passive: {
      id: "shadow_step",
      name: "Shadow Step",
      effect: "agility_to_dodge",
      value: 1,
      description: "Agility directly translates to dodge chance in combat. High agility = hard to hit.",
    },
  },

};

// Helper: get class by id
export function getClassById(id) {
  return classes[id.toLowerCase()] || null;
}

// Helper: get all class ids
export function getClassList() {
  return Object.values(classes).map((c) => ({
    id: c.id,
    name: c.name,
    emoji: c.emoji,
    description: c.description,
  }));
}

export default classes;
