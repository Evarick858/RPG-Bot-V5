/*
  RPG Passive Abilities System
  Base : Lenwy SCM — RPG Extension

  Centralized passive ability registry with full logic.
  Works for both players and enemies.

  Each passive has:
  - id: unique identifier
  - name: display name
  - emoji: visual icon
  - description: what it does
  - effect: the effect type
  - value: numeric value for the effect
  - threshold: (optional) HP% threshold for conditional passives
  - apply(combatant): logic that runs each turn
  - getEffectiveStats(combatant, statType): modifies stats dynamically
*/

// ══════════════════════════════════════════════════════════
// PASSIVE REGISTRY
// ══════════════════════════════════════════════════════════

export const passives = {

  // ────────────────────────────────────────────────────────
  // COMBAT PASSIVES - Trigger during battle
  // ────────────────────────────────────────────────────────

  iron_will: {
    id: "iron_will",
    name: "Iron Will",
    emoji: "🛡️",
    description: "When HP drops below 25%, defense increases by 8.",
    effect: "defense_boost_low_hp",
    value: 8,
    threshold: 25,
    /**
     * Apply passive effect each turn
     * @param {object} combatant - player or enemy
     * @returns {string[]} log messages
     */
    apply(combatant) {
      const hpPct = (combatant.hp / combatant.maxHp) * 100;
      const wasActive = combatant._defenseBoostActive || false;
      combatant._defenseBoostActive = hpPct < this.threshold;
      
      if (combatant._defenseBoostActive && !wasActive) {
        return [`🛡️ ${combatant.name}'s *${this.name}* activates! Defense +${this.value}`];
      }
      return [];
    },
    getEffectiveStats(combatant, statType) {
      if (statType === "defense" && combatant._defenseBoostActive) {
        return this.value;
      }
      return 0;
    }
  },

  enrage: {
    id: "enrage",
    name: "Enrage",
    emoji: "😡",
    description: "When HP drops below 30%, attack increases by 10.",
    effect: "enrage",
    value: 10,
    threshold: 30,
    apply(combatant) {
      const hpPct = (combatant.hp / combatant.maxHp) * 100;
      const wasActive = combatant._enrageActive || false;
      combatant._enrageActive = hpPct < this.threshold;
      
      if (combatant._enrageActive && !wasActive) {
        return [`😡 ${combatant.name}'s *${this.name}* activates! Attack +${this.value}`];
      }
      return [];
    },
    getEffectiveStats(combatant, statType) {
      if (statType === "attack" && combatant._enrageActive) {
        return this.value;
      }
      return 0;
    }
  },

  berserker_rage: {
    id: "berserker_rage",
    name: "Berserker Rage",
    emoji: "💢",
    description: "When HP drops below 20%, attack increases by 15 but defense decreases by 5.",
    effect: "berserker_rage",
    value: 15,
    defensePenalty: 5,
    threshold: 20,
    apply(combatant) {
      const hpPct = (combatant.hp / combatant.maxHp) * 100;
      const wasActive = combatant._berserkerActive || false;
      combatant._berserkerActive = hpPct < this.threshold;
      
      if (combatant._berserkerActive && !wasActive) {
        return [`💢 ${combatant.name}'s *${this.name}* activates! Attack +${this.value}, Defense -${this.defensePenalty}`];
      }
      return [];
    },
    getEffectiveStats(combatant, statType) {
      if (!combatant._berserkerActive) return 0;
      if (statType === "attack") return this.value;
      if (statType === "defense") return -this.defensePenalty;
      return 0;
    }
  },

  last_stand: {
    id: "last_stand",
    name: "Last Stand",
    emoji: "⚔️",
    description: "When HP drops below 15%, all stats increase by 5.",
    effect: "last_stand",
    value: 5,
    threshold: 15,
    apply(combatant) {
      const hpPct = (combatant.hp / combatant.maxHp) * 100;
      const wasActive = combatant._lastStandActive || false;
      combatant._lastStandActive = hpPct < this.threshold;
      
      if (combatant._lastStandActive && !wasActive) {
        return [`⚔️ ${combatant.name}'s *${this.name}* activates! All stats +${this.value}!`];
      }
      return [];
    },
    getEffectiveStats(combatant, statType) {
      if (combatant._lastStandActive && ["attack", "defense", "agility"].includes(statType)) {
        return this.value;
      }
      return 0;
    }
  },

  // ────────────────────────────────────────────────────────
  // REGENERATION PASSIVES
  // ────────────────────────────────────────────────────────

  regeneration: {
    id: "regeneration",
    name: "Regeneration",
    emoji: "💚",
    description: "Regenerates 5 HP every turn in combat.",
    effect: "regen",
    value: 5,
    apply(combatant) {
      const heal = Math.min(this.value, combatant.maxHp - combatant.hp);
      if (heal > 0) {
        combatant.hp += heal;
        return [`💚 ${combatant.name}'s *${this.name}*: +${heal} HP`];
      }
      return [];
    },
    getEffectiveStats() { return 0; }
  },

  fast_regeneration: {
    id: "fast_regeneration",
    name: "Fast Regeneration",
    emoji: "💚",
    description: "Regenerates 10 HP every turn in combat.",
    effect: "regen",
    value: 10,
    apply(combatant) {
      const heal = Math.min(this.value, combatant.maxHp - combatant.hp);
      if (heal > 0) {
        combatant.hp += heal;
        return [`💚 ${combatant.name}'s *${this.name}*: +${heal} HP`];
      }
      return [];
    },
    getEffectiveStats() { return 0; }
  },

  arcane_mind: {
    id: "arcane_mind",
    name: "Arcane Mind",
    emoji: "💧",
    description: "Naturally channels mana, regenerating 6 mana every turn in combat.",
    effect: "mana_regen",
    value: 6,
    apply(combatant) {
      const manaHeal = Math.min(this.value, combatant.maxMana - combatant.mana);
      if (manaHeal > 0) {
        combatant.mana += manaHeal;
        return [`💧 ${combatant.name}'s *${this.name}*: +${manaHeal} Mana`];
      }
      return [];
    },
    getEffectiveStats() { return 0; }
  },

  mana_spring: {
    id: "mana_spring",
    name: "Mana Spring",
    emoji: "💧",
    description: "Regenerates 10 mana every turn in combat.",
    effect: "mana_regen",
    value: 10,
    apply(combatant) {
      const manaHeal = Math.min(this.value, combatant.maxMana - combatant.mana);
      if (manaHeal > 0) {
        combatant.mana += manaHeal;
        return [`💧 ${combatant.name}'s *${this.name}*: +${manaHeal} Mana`];
      }
      return [];
    },
    getEffectiveStats() { return 0; }
  },

  // ────────────────────────────────────────────────────────
  // DEFENSIVE PASSIVES
  // ────────────────────────────────────────────────────────

  thorns: {
    id: "thorns",
    name: "Thorns",
    emoji: "🌵",
    description: "Reflects 5 damage back to attackers.",
    effect: "thorns",
    value: 5,
    apply() { return []; }, // Handled in combat damage calculation
    getEffectiveStats() { return 0; }
  },

  iron_skin: {
    id: "iron_skin",
    name: "Iron Skin",
    emoji: "🛡️",
    description: "Permanently increases defense by 5.",
    effect: "defense_boost",
    value: 5,
    apply() { return []; },
    getEffectiveStats(combatant, statType) {
      if (statType === "defense") return this.value;
      return 0;
    }
  },

  stone_skin: {
    id: "stone_skin",
    name: "Stone Skin",
    emoji: "🪨",
    description: "Permanently increases defense by 8.",
    effect: "defense_boost",
    value: 8,
    apply() { return []; },
    getEffectiveStats(combatant, statType) {
      if (statType === "defense") return this.value;
      return 0;
    }
  },

  fortified: {
    id: "fortified",
    name: "Fortified",
    emoji: "🏰",
    description: "Increases physical defense by 10.",
    effect: "physical_def_boost",
    value: 10,
    apply() { return []; },
    getEffectiveStats(combatant, statType) {
      if (statType === "physicalDef") return this.value;
      return 0;
    }
  },

  magic_resistance: {
    id: "magic_resistance",
    name: "Magic Resistance",
    emoji: "✨",
    description: "Increases magical defense by 10.",
    effect: "magical_def_boost",
    value: 10,
    apply() { return []; },
    getEffectiveStats(combatant, statType) {
      if (statType === "magicalDef") return this.value;
      return 0;
    }
  },

  // ────────────────────────────────────────────────────────
  // OFFENSIVE PASSIVES
  // ────────────────────────────────────────────────────────

  shadow_step: {
    id: "shadow_step",
    name: "Shadow Step",
    emoji: "👤",
    description: "Agility directly translates to dodge chance in combat.",
    effect: "agility_to_dodge",
    value: 1,
    apply() { return []; }, // Handled in dodge calculation
    getEffectiveStats() { return 0; }
  },

  swift_strikes: {
    id: "swift_strikes",
    name: "Swift Strikes",
    emoji: "⚡",
    description: "Permanently increases agility by 5.",
    effect: "agility_boost",
    value: 5,
    apply() { return []; },
    getEffectiveStats(combatant, statType) {
      if (statType === "agility") return this.value;
      return 0;
    }
  },

  power_surge: {
    id: "power_surge",
    name: "Power Surge",
    emoji: "💪",
    description: "Permanently increases attack by 5.",
    effect: "attack_boost",
    value: 5,
    apply() { return []; },
    getEffectiveStats(combatant, statType) {
      if (statType === "attack") return this.value;
      return 0;
    }
  },

  mighty_blow: {
    id: "mighty_blow",
    name: "Mighty Blow",
    emoji: "💥",
    description: "Permanently increases attack by 8.",
    effect: "attack_boost",
    value: 8,
    apply() { return []; },
    getEffectiveStats(combatant, statType) {
      if (statType === "attack") return this.value;
      return 0;
    }
  },

  critical_eye: {
    id: "critical_eye",
    name: "Critical Eye",
    emoji: "🎯",
    description: "Increases critical hit chance by 10%.",
    effect: "crit_boost",
    value: 10,
    apply() { return []; }, // Handled in crit calculation
    getEffectiveStats() { return 0; }
  },

  lucky_strike: {
    id: "lucky_strike",
    name: "Lucky Strike",
    emoji: "🍀",
    description: "Permanently increases luck by 5.",
    effect: "luck_boost",
    value: 5,
    apply() { return []; },
    getEffectiveStats(combatant, statType) {
      if (statType === "luck") return this.value;
      return 0;
    }
  },

  // ────────────────────────────────────────────────────────
  // SPECIAL PASSIVES
  // ────────────────────────────────────────────────────────

  vampiric: {
    id: "vampiric",
    name: "Vampiric",
    emoji: "🧛",
    description: "Heals for 20% of damage dealt.",
    effect: "lifesteal",
    value: 20,
    apply() { return []; }, // Handled in damage calculation
    getEffectiveStats() { return 0; }
  },

  poison_touch: {
    id: "poison_touch",
    name: "Poison Touch",
    emoji: "☠️",
    description: "Basic attacks have 30% chance to poison enemy for 3 damage/turn.",
    effect: "poison_on_hit",
    value: 3,
    chance: 30,
    duration: 4,
    apply() { return []; }, // Handled in attack logic
    getEffectiveStats() { return 0; }
  },

  burning_aura: {
    id: "burning_aura",
    name: "Burning Aura",
    emoji: "🔥",
    description: "Basic attacks have 25% chance to burn enemy for 5 damage/turn.",
    effect: "burn_on_hit",
    value: 5,
    chance: 25,
    duration: 4,
    apply() { return []; }, // Handled in attack logic
    getEffectiveStats() { return 0; }
  },

  freezing_touch: {
    id: "freezing_touch",
    name: "Freezing Touch",
    emoji: "🧊",
    description: "Basic attacks have 20% chance to slow enemy by 5 agility.",
    effect: "slow_on_hit",
    value: 5,
    chance: 20,
    duration: 4,
    apply() { return []; }, // Handled in attack logic
    getEffectiveStats() { return 0; }
  },

  battle_focus: {
    id: "battle_focus",
    name: "Battle Focus",
    emoji: "🎯",
    description: "Reduces all skill cooldowns by 1 turn.",
    effect: "cooldown_reduction",
    value: 1,
    apply() { return []; }, // Handled in cooldown tick
    getEffectiveStats() { return 0; }
  },

  mana_efficiency: {
    id: "mana_efficiency",
    name: "Mana Efficiency",
    emoji: "💎",
    description: "All skills cost 20% less mana.",
    effect: "mana_cost_reduction",
    value: 20,
    apply() { return []; }, // Handled in skill cost calculation
    getEffectiveStats() { return 0; }
  },

  thick_hide: {
    id: "thick_hide",
    name: "Thick Hide",
    emoji: "🦏",
    description: "Reduces all incoming damage by 3.",
    effect: "damage_reduction",
    value: 3,
    apply() { return []; }, // Handled in damage calculation
    getEffectiveStats() { return 0; }
  },

  nimble: {
    id: "nimble",
    name: "Nimble",
    emoji: "💨",
    description: "Increases dodge chance by 15%.",
    effect: "dodge_boost",
    value: 15,
    apply() { return []; }, // Handled in dodge calculation
    getEffectiveStats() { return 0; }
  },

  relentless: {
    id: "relentless",
    name: "Relentless",
    emoji: "🔄",
    description: "Immune to stun effects.",
    effect: "stun_immunity",
    value: 1,
    apply() { return []; }, // Handled in stun application
    getEffectiveStats() { return 0; }
  },

  clearmind: {
    id: "clearmind",
    name: "Clear Mind",
    emoji: "🧘",
    description: "Immune to silence effects.",
    effect: "silence_immunity",
    value: 1,
    apply() { return []; }, // Handled in silence application
    getEffectiveStats() { return 0; }
  },

  unstoppable: {
    id: "unstoppable",
    name: "Unstoppable",
    emoji: "🚀",
    description: "Immune to slow effects.",
    effect: "slow_immunity",
    value: 1,
    apply() { return []; }, // Handled in slow application
    getEffectiveStats() { return 0; }
  },

  phoenix_heart: {
    id: "phoenix_heart",
    name: "Phoenix Heart",
    emoji: "🔥",
    description: "When HP drops below 10%, heal for 30% max HP (once per battle).",
    effect: "phoenix_revive",
    value: 30,
    threshold: 10,
    apply(combatant) {
      if (combatant._phoenixUsed) return [];
      
      const hpPct = (combatant.hp / combatant.maxHp) * 100;
      if (hpPct < this.threshold) {
        const heal = Math.floor(combatant.maxHp * (this.value / 100));
        combatant.hp = Math.min(combatant.maxHp, combatant.hp + heal);
        combatant._phoenixUsed = true;
        return [`🔥 ${combatant.name}'s *${this.name}* activates! Restored ${heal} HP!`];
      }
      return [];
    },
    getEffectiveStats() { return 0; }
  },

  second_wind: {
    id: "second_wind",
    name: "Second Wind",
    emoji: "💨",
    description: "When HP drops below 20%, restore 20 mana (once per battle).",
    effect: "second_wind",
    value: 20,
    threshold: 20,
    apply(combatant) {
      if (combatant._secondWindUsed) return [];
      
      const hpPct = (combatant.hp / combatant.maxHp) * 100;
      if (hpPct < this.threshold) {
        const manaRestore = Math.min(this.value, combatant.maxMana - combatant.mana);
        combatant.mana += manaRestore;
        combatant._secondWindUsed = true;
        return [`💨 ${combatant.name}'s *${this.name}* activates! Restored ${manaRestore} Mana!`];
      }
      return [];
    },
    getEffectiveStats() { return 0; }
  },

  adaptive: {
    id: "adaptive",
    name: "Adaptive",
    emoji: "🔄",
    description: "Gains +2 to all stats every 3 turns.",
    effect: "adaptive",
    value: 2,
    interval: 3,
    apply(combatant) {
      if (!combatant._adaptiveStacks) combatant._adaptiveStacks = 0;
      if (!combatant._adaptiveTurns) combatant._adaptiveTurns = 0;
      
      combatant._adaptiveTurns++;
      
      if (combatant._adaptiveTurns >= this.interval) {
        combatant._adaptiveStacks++;
        combatant._adaptiveTurns = 0;
        return [`🔄 ${combatant.name}'s *${this.name}* evolves! All stats +${this.value} (Stack ${combatant._adaptiveStacks})`];
      }
      return [];
    },
    getEffectiveStats(combatant, statType) {
      if (["attack", "defense", "agility"].includes(statType)) {
        return this.value * (combatant._adaptiveStacks || 0);
      }
      return 0;
    }
  },

};

// ══════════════════════════════════════════════════════════
// HELPER FUNCTIONS
// ══════════════════════════════════════════════════════════

/**
 * Get passive by ID
 * @param {string} id - passive ID
 * @returns {object|null} passive object or null
 */
export function getPassiveById(id) {
  return passives[id] || null;
}

/**
 * Apply passive effect for a combatant (called each turn)
 * @param {object} combatant - player or enemy
 * @returns {string[]} log messages
 */
export function applyPassive(combatant) {
  if (!combatant.passive) return [];
  
  const passive = getPassiveById(combatant.passive.id);
  if (!passive) return [];
  
  return passive.apply(combatant);
}

/**
 * Get effective stat bonus from passive
 * @param {object} combatant - player or enemy
 * @param {string} statType - "attack", "defense", "agility", etc.
 * @returns {number} bonus value
 */
export function getPassiveStatBonus(combatant, statType) {
  if (!combatant.passive) return 0;
  
  const passive = getPassiveById(combatant.passive.id);
  if (!passive) return 0;
  
  return passive.getEffectiveStats(combatant, statType);
}

/**
 * Get all available passives as a list
 * @returns {array} array of passive objects
 */
export function getAllPassives() {
  return Object.values(passives);
}

/**
 * Get passives by category
 * @param {string} category - "combat", "regen", "defensive", "offensive", "special"
 * @returns {array} filtered passives
 */
export function getPassivesByCategory(category) {
  const categories = {
    combat: ["iron_will", "enrage", "berserker_rage", "last_stand"],
    regen: ["regeneration", "fast_regeneration", "arcane_mind", "mana_spring"],
    defensive: ["thorns", "iron_skin", "stone_skin", "fortified", "magic_resistance", "thick_hide", "nimble"],
    offensive: ["shadow_step", "swift_strikes", "power_surge", "mighty_blow", "critical_eye", "lucky_strike"],
    special: ["vampiric", "poison_touch", "burning_aura", "freezing_touch", "battle_focus", "mana_efficiency", "relentless", "clearmind", "unstoppable", "phoenix_heart", "second_wind", "adaptive"]
  };
  
  const ids = categories[category] || [];
  return ids.map(id => passives[id]).filter(p => p);
}

// ══════════════════════════════════════════════════════════
// EXPORTS
// ══════════════════════════════════════════════════════════

export default {
  passives,
  getPassiveById,
  applyPassive,
  getPassiveStatBonus,
  getAllPassives,
  getPassivesByCategory
};
