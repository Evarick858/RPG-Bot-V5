/*
  RPG Skill Effects
  Base : Lenwy SCM — RPG Extension

  All 19 skill effects with full logic and battle messages.
  shield_break removed per design decision.

  Rules:
  - All duration effects: minimum 4 turns
  - Each effect has clear battle message text
  - Self-targeting effects (buffs/heals) apply to attacker
  - Enemy-targeting effects (debuffs/CC/DoT) apply to target

  Self-targeting effects:
    heal, regen, buff_atk, buff_def, evasion_buff, haste, reflect

  Enemy-targeting effects:
    poison, burn, bleed, stun, silence, slow, freeze,
    debuff_atk, debuff_def, manaburn, blind, curse,
    lifesteal, execute, drain, mark
*/

// ── Minimum duration enforcement ─────────────────────────
const MIN_DURATION = 4;

function safeDuration(d) {
  return Math.max(d || MIN_DURATION, MIN_DURATION);
}

// ── Self-targeting effects ────────────────────────────────
// These apply to the attacker (caster)

const selfEffects = new Set([
  "heal", "regen", "buff_atk", "buff_def",
  "evasion_buff", "haste", "reflect",
]);

export function isSelfEffect(effectType) {
  return selfEffects.has(effectType);
}

// ── Effect registry ───────────────────────────────────────
// Each effect: { apply(attacker, target, skill), tick(target), label, emoji }

export const effectRegistry = {

  // ════════════════════════════════════════
  // DoT — Damage over Time
  // ════════════════════════════════════════

  poison: {
    emoji: "☠️",
    label: "Poison",
    targetSelf: false,
    /**
     * Apply poison to target.
     * Deals value damage/turn, ignores armor.
     */
    apply(attacker, target, skill) {
      const duration = safeDuration(skill.duration);
      const value = skill.value || 5;
      target.statusEffects.push({ type: "poison", value, duration });
      return [
        `☠️ *Poisoned!*`,
        `${target.name} is poisoned — takes *${value} damage/turn* for *${duration} turns*.`,
        `(Ignores armor)`,
      ];
    },
    tick(target, effect) {
      const dmg = effect.value;
      target.hp = Math.max(0, target.hp - dmg);
      const logs = [`☠️ *Poison* deals *${dmg} damage* to ${target.name}. (${effect.duration - 1} turns left)`];
      effect.duration--;
      return { logs, expired: effect.duration <= 0 };
    },
  },

  burn: {
    emoji: "🔥",
    label: "Burn",
    targetSelf: false,
    /**
     * Apply burn to target.
     * Deals value damage/turn, higher than poison, ignores armor.
     */
    apply(attacker, target, skill) {
      const duration = safeDuration(skill.duration);
      const value = skill.value || 8;
      target.statusEffects.push({ type: "burn", value, duration });
      return [
        `🔥 *Burning!*`,
        `${target.name} is set ablaze — takes *${value} damage/turn* for *${duration} turns*.`,
      ];
    },
    tick(target, effect) {
      const dmg = effect.value;
      target.hp = Math.max(0, target.hp - dmg);
      const logs = [`🔥 *Burn* scorches ${target.name} for *${dmg} damage*. (${effect.duration - 1} turns left)`];
      effect.duration--;
      return { logs, expired: effect.duration <= 0 };
    },
  },

  bleed: {
    emoji: "🩸",
    label: "Bleed",
    targetSelf: false,
    /**
     * Apply bleed to target.
     * Physical DoT, deals value damage/turn.
     */
    apply(attacker, target, skill) {
      const duration = safeDuration(skill.duration);
      const value = skill.value || 6;
      target.statusEffects.push({ type: "bleed", value, duration });
      return [
        `🩸 *Bleeding!*`,
        `${target.name} is bleeding — takes *${value} physical damage/turn* for *${duration} turns*.`,
      ];
    },
    tick(target, effect) {
      const dmg = effect.value;
      target.hp = Math.max(0, target.hp - dmg);
      const logs = [`🩸 *Bleed* drains *${dmg} HP* from ${target.name}. (${effect.duration - 1} turns left)`];
      effect.duration--;
      return { logs, expired: effect.duration <= 0 };
    },
  },

  // ════════════════════════════════════════
  // Crowd Control
  // ════════════════════════════════════════

  stun: {
    emoji: "💫",
    label: "Stun",
    targetSelf: false,
    /**
     * Stun target — they skip turns.
     * Bosses are immune.
     */
    apply(attacker, target, skill) {
      if (target.isBoss) {
        return [`🛡️ *${target.name} is immune to stun!*`];
      }
      const duration = safeDuration(skill.duration);
      target.stunned = (target.stunned || 0) + duration;
      return [
        `💫 *Stunned!*`,
        `${target.name} is stunned and will skip *${duration} turn(s)*!`,
      ];
    },
    tick(target, effect) {
      // Stun is tracked via target.stunned, not statusEffects tick
      effect.duration--;
      return { logs: [], expired: effect.duration <= 0 };
    },
  },

  silence: {
    emoji: "🤐",
    label: "Silence",
    targetSelf: false,
    /**
     * Silence target — they cannot use skills.
     */
    apply(attacker, target, skill) {
      const duration = safeDuration(skill.duration);
      target.statusEffects.push({ type: "silence", value: 1, duration });
      return [
        `🤐 *Silenced!*`,
        `${target.name} cannot use skills for *${duration} turns*!`,
      ];
    },
    tick(target, effect) {
      const logs = [];
      effect.duration--;
      if (effect.duration <= 0) logs.push(`🤐 *Silence* on ${target.name} fades.`);
      return { logs, expired: effect.duration <= 0 };
    },
  },

  slow: {
    emoji: "🐢",
    label: "Slow",
    targetSelf: false,
    /**
     * Reduce target agility by value for duration turns.
     * Affects dodge chance.
     */
    apply(attacker, target, skill) {
      const duration = safeDuration(skill.duration);
      const value = skill.value || 5;
      target.statusEffects.push({ type: "slow", value, duration });
      return [
        `🐢 *Slowed!*`,
        `${target.name}'s agility reduced by *${value}* for *${duration} turns*.`,
        `(Dodge chance decreased)`,
      ];
    },
    tick(target, effect) {
      const logs = [];
      effect.duration--;
      if (effect.duration <= 0) logs.push(`🐢 *Slow* on ${target.name} fades. Agility restored.`);
      return { logs, expired: effect.duration <= 0 };
    },
  },

  freeze: {
    emoji: "🧊",
    label: "Freeze",
    targetSelf: false,
    /**
     * Freeze target — stunned AND defense halved.
     * Bosses are immune to the stun but still get defense reduction.
     */
    apply(attacker, target, skill) {
      const duration = safeDuration(skill.duration);
      target.statusEffects.push({ type: "freeze", value: 1, duration });
      const logs = [
        `🧊 *Frozen!*`,
        `${target.name}'s defense is halved for *${duration} turns*!`,
      ];
      if (!target.isBoss) {
        target.stunned = (target.stunned || 0) + 1;
        logs.push(`💫 ${target.name} is also stunned for 1 turn!`);
      } else {
        logs.push(`🛡️ ${target.name} resists the stun but is still frozen!`);
      }
      return logs;
    },
    tick(target, effect) {
      const logs = [];
      effect.duration--;
      if (effect.duration <= 0) logs.push(`🧊 *Freeze* on ${target.name} melts. Defense restored.`);
      return { logs, expired: effect.duration <= 0 };
    },
  },

  // ════════════════════════════════════════
  // Debuffs
  // ════════════════════════════════════════

  debuff_atk: {
    emoji: "📉",
    label: "Attack Down",
    targetSelf: false,
    /**
     * Reduce target attack by value for duration turns.
     */
    apply(attacker, target, skill) {
      const duration = safeDuration(skill.duration);
      const value = skill.value || 5;
      target.statusEffects.push({ type: "debuff_atk", value, duration });
      return [
        `📉 *Attack Down!*`,
        `${target.name}'s attack reduced by *${value}* for *${duration} turns*.`,
      ];
    },
    tick(target, effect) {
      const logs = [];
      effect.duration--;
      if (effect.duration <= 0) logs.push(`📉 *Attack Down* on ${target.name} fades. Attack restored.`);
      return { logs, expired: effect.duration <= 0 };
    },
  },

  debuff_def: {
    emoji: "🛡️📉",
    label: "Defense Down",
    targetSelf: false,
    /**
     * Reduce target defense by value for duration turns.
     */
    apply(attacker, target, skill) {
      const duration = safeDuration(skill.duration);
      const value = skill.value || 5;
      target.statusEffects.push({ type: "debuff_def", value, duration });
      return [
        `🛡️📉 *Defense Down!*`,
        `${target.name}'s defense reduced by *${value}* for *${duration} turns*.`,
      ];
    },
    tick(target, effect) {
      const logs = [];
      effect.duration--;
      if (effect.duration <= 0) logs.push(`🛡️ *Defense Down* on ${target.name} fades. Defense restored.`);
      return { logs, expired: effect.duration <= 0 };
    },
  },

  manaburn: {
    emoji: "💧🔥",
    label: "Mana Burn",
    targetSelf: false,
    /**
     * Instantly drain value mana from target.
     * No duration — instant effect.
     */
    apply(attacker, target, skill) {
      const value = skill.value || 20;
      const burned = Math.min(value, target.mana || 0);
      target.mana = Math.max(0, (target.mana || 0) - burned);
      return [
        `💧🔥 *Mana Burn!*`,
        `Drained *${burned} mana* from ${target.name}!`,
        `${target.name} mana: ${target.mana}/${target.maxMana}`,
      ];
    },
    tick() {
      // Instant effect — no tick needed
      return { logs: [], expired: true };
    },
  },

  blind: {
    emoji: "👁️",
    label: "Blind",
    targetSelf: false,
    /**
     * Target has 50% miss chance for duration turns.
     */
    apply(attacker, target, skill) {
      const duration = safeDuration(skill.duration);
      target.statusEffects.push({ type: "blind", value: 50, duration });
      return [
        `👁️ *Blinded!*`,
        `${target.name} has *50% miss chance* for *${duration} turns*!`,
      ];
    },
    tick(target, effect) {
      const logs = [];
      effect.duration--;
      if (effect.duration <= 0) logs.push(`👁️ *Blind* on ${target.name} fades. Vision restored.`);
      return { logs, expired: effect.duration <= 0 };
    },
  },

  curse: {
    emoji: "💀",
    label: "Curse",
    targetSelf: false,
    /**
     * All healing on target reduced by 50% for duration turns.
     */
    apply(attacker, target, skill) {
      const duration = safeDuration(skill.duration);
      target.statusEffects.push({ type: "curse", value: 50, duration });
      return [
        `💀 *Cursed!*`,
        `${target.name}'s healing is reduced by *50%* for *${duration} turns*!`,
      ];
    },
    tick(target, effect) {
      const logs = [];
      effect.duration--;
      if (effect.duration <= 0) logs.push(`💀 *Curse* on ${target.name} fades.`);
      return { logs, expired: effect.duration <= 0 };
    },
  },

  // ════════════════════════════════════════
  // Buffs (self-targeting)
  // ════════════════════════════════════════

  buff_atk: {
    emoji: "📈",
    label: "Attack Up",
    targetSelf: true,
    /**
     * Increase own attack by value for duration turns.
     */
    apply(attacker, target, skill) {
      const duration = safeDuration(skill.duration);
      const value = skill.value || 5;
      attacker.statusEffects.push({ type: "buff_atk", value, duration });
      return [
        `📈 *Attack Up!*`,
        `${attacker.name}'s attack increased by *${value}* for *${duration} turns*!`,
      ];
    },
    tick(target, effect) {
      const logs = [];
      effect.duration--;
      if (effect.duration <= 0) logs.push(`📈 *Attack Up* on ${target.name} fades.`);
      return { logs, expired: effect.duration <= 0 };
    },
  },

  buff_def: {
    emoji: "🛡️📈",
    label: "Defense Up",
    targetSelf: true,
    /**
     * Increase own defense by value for duration turns.
     */
    apply(attacker, target, skill) {
      const duration = safeDuration(skill.duration);
      const value = skill.value || 5;
      attacker.statusEffects.push({ type: "buff_def", value, duration });
      return [
        `🛡️📈 *Defense Up!*`,
        `${attacker.name}'s defense increased by *${value}* for *${duration} turns*!`,
      ];
    },
    tick(target, effect) {
      const logs = [];
      effect.duration--;
      if (effect.duration <= 0) logs.push(`🛡️ *Defense Up* on ${target.name} fades.`);
      return { logs, expired: effect.duration <= 0 };
    },
  },

  evasion_buff: {
    emoji: "💨",
    label: "Evasion Up",
    targetSelf: true,
    /**
     * Increase own dodge chance by value% for duration turns.
     */
    apply(attacker, target, skill) {
      const duration = safeDuration(skill.duration);
      const value = skill.value || 20;
      attacker.statusEffects.push({ type: "evasion_buff", value, duration });
      return [
        `💨 *Evasion Up!*`,
        `${attacker.name}'s dodge chance increased by *${value}%* for *${duration} turns*!`,
      ];
    },
    tick(target, effect) {
      const logs = [];
      effect.duration--;
      if (effect.duration <= 0) logs.push(`💨 *Evasion Up* on ${target.name} fades.`);
      return { logs, expired: effect.duration <= 0 };
    },
  },

  haste: {
    emoji: "⚡",
    label: "Haste",
    targetSelf: true,
    /**
     * Act twice this turn.
     * Sets _haste flag on attacker.
     */
    apply(attacker, target, skill) {
      attacker._haste = true;
      return [
        `⚡ *Haste!*`,
        `${attacker.name} moves with blinding speed — acts *twice this turn*!`,
      ];
    },
    tick() {
      // Instant — no tick
      return { logs: [], expired: true };
    },
  },

  reflect: {
    emoji: "🪞",
    label: "Reflect",
    targetSelf: true,
    /**
     * Reflect value% of incoming damage back to attacker for duration turns.
     */
    apply(attacker, target, skill) {
      const duration = safeDuration(skill.duration);
      const value = skill.value || 20;
      attacker.statusEffects.push({ type: "reflect", value, duration });
      return [
        `🪞 *Reflect!*`,
        `${attacker.name} will reflect *${value}%* of incoming damage for *${duration} turns*!`,
      ];
    },
    tick(target, effect) {
      const logs = [];
      effect.duration--;
      if (effect.duration <= 0) logs.push(`🪞 *Reflect* on ${target.name} fades.`);
      return { logs, expired: effect.duration <= 0 };
    },
  },

  // ════════════════════════════════════════
  // Recovery
  // ════════════════════════════════════════

  heal: {
    emoji: "💚",
    label: "Heal",
    targetSelf: true,
    /**
     * Instantly restore value HP.
     * Reduced by 50% if target is cursed.
     */
    apply(attacker, target, skill) {
      const value = skill.value || 20;
      const isCursed = (attacker.statusEffects || []).some((e) => e.type === "curse");
      const actual = isCursed ? Math.floor(value * 0.5) : value;
      const healed = Math.min(actual, attacker.maxHp - attacker.hp);
      attacker.hp += healed;
      const cursedNote = isCursed ? ` *(Curse reduced healing!)*` : "";
      return [
        `💚 *Healed!*`,
        `${attacker.name} restores *${healed} HP*!${cursedNote}`,
        `HP: ${attacker.hp}/${attacker.maxHp}`,
      ];
    },
    tick() {
      return { logs: [], expired: true };
    },
  },

  regen: {
    emoji: "💚",
    label: "Regeneration",
    targetSelf: true,
    /**
     * Restore value HP per turn for duration turns.
     * Reduced by 50% if cursed.
     */
    apply(attacker, target, skill) {
      const duration = safeDuration(skill.duration);
      const value = skill.value || 8;
      attacker.statusEffects.push({ type: "regen", value, duration });
      return [
        `💚 *Regenerating!*`,
        `${attacker.name} will restore *${value} HP/turn* for *${duration} turns*!`,
      ];
    },
    tick(target, effect) {
      const isCursed = (target.statusEffects || []).some((e) => e.type === "curse");
      const actual = isCursed ? Math.floor(effect.value * 0.5) : effect.value;
      const healed = Math.min(actual, target.maxHp - target.hp);
      target.hp += healed;
      const cursedNote = isCursed ? ` *(Curse halved regen!)*` : "";
      const logs = [`💚 *Regen* restores *${healed} HP* to ${target.name}.${cursedNote} (${effect.duration - 1} turns left)`];
      effect.duration--;
      return { logs, expired: effect.duration <= 0 };
    },
  },

  well_rested: {
    emoji: "🌟",
    label: "Well Rested",
    targetSelf: true,
    /**
     * Inn buff: Restore 10% HP and Mana per turn for 10 turns.
     */
    apply(attacker, target, skill) {
      // This is applied by inn.js, not by skills
      return [];
    },
    tick(target, effect) {
      const hpRegen = Math.ceil(target.maxHp * 0.10);
      const manaRegen = Math.ceil(target.maxMana * 0.10);
      
      const hpHealed = Math.min(hpRegen, target.maxHp - target.hp);
      const manaRestored = Math.min(manaRegen, target.maxMana - target.mana);
      
      target.hp += hpHealed;
      target.mana += manaRestored;
      
      const logs = [];
      if (hpHealed > 0 || manaRestored > 0) {
        logs.push(`🌟 *Well Rested* restores *${hpHealed} HP* and *${manaRestored} Mana* to ${target.name}. (${effect.duration - 1} turns left)`);
      } else {
        logs.push(`🌟 *Well Rested* buff active. (${effect.duration - 1} turns left)`);
      }
      
      effect.duration--;
      return { logs, expired: effect.duration <= 0 };
    },
  },

  // ════════════════════════════════════════
  // Special
  // ════════════════════════════════════════

  lifesteal: {
    emoji: "🧛",
    label: "Lifesteal",
    targetSelf: false,
    /**
     * Restore HP equal to value% of damage dealt.
     * Requires damageDealt to be passed in.
     */
    apply(attacker, target, skill, damageDealt = 0) {
      const pct = skill.value || 30;
      const stolen = Math.floor(damageDealt * (pct / 100));
      const isCursed = (attacker.statusEffects || []).some((e) => e.type === "curse");
      const actual = isCursed ? Math.floor(stolen * 0.5) : stolen;
      const healed = Math.min(actual, attacker.maxHp - attacker.hp);
      attacker.hp += healed;
      const cursedNote = isCursed ? ` *(Curse halved lifesteal!)*` : "";
      return [
        `🧛 *Lifesteal!*`,
        `${attacker.name} absorbs *${healed} HP* from the attack!${cursedNote}`,
        `HP: ${attacker.hp}/${attacker.maxHp}`,
      ];
    },
    tick() {
      return { logs: [], expired: true };
    },
  },

  execute: {
    emoji: "💀",
    label: "Execute",
    targetSelf: false,
    /**
     * Deal 2x damage if target HP is below value%.
     * Returns extraDamage to be applied.
     */
    apply(attacker, target, skill) {
      const threshold = skill.value || 30;
      const hpPct = (target.hp / target.maxHp) * 100;
      if (hpPct <= threshold) {
        const extraDmg = target.hp; // instant kill
        return {
          logs: [
            `💀 *Execute!*`,
            `${target.name} is below *${threshold}% HP* — finishing blow!`,
            `💢 Execute deals *${extraDmg}* damage!`,
          ],
          extraDamage: extraDmg,
        };
      }
      return {
        logs: [
          `⚠️ *Execute failed!*`,
          `${target.name} is above *${threshold}% HP*. (${Math.round(hpPct)}% remaining)`,
        ],
        extraDamage: 0,
      };
    },
    tick() {
      return { logs: [], expired: true };
    },
  },

  drain: {
    emoji: "🌀",
    label: "Drain",
    targetSelf: false,
    /**
     * Steal value HP from target — you gain what they lose.
     * Cannot drain target to 0.
     */
    apply(attacker, target, skill) {
      const value = skill.value || 15;
      const drained = Math.min(value, target.hp - 1);
      if (drained <= 0) {
        return [`🌀 *Drain failed!* ${target.name} has too little HP to drain.`];
      }
      target.hp = Math.max(1, target.hp - drained);
      const isCursed = (attacker.statusEffects || []).some((e) => e.type === "curse");
      const actual = isCursed ? Math.floor(drained * 0.5) : drained;
      const healed = Math.min(actual, attacker.maxHp - attacker.hp);
      attacker.hp += healed;
      const cursedNote = isCursed ? ` *(Curse halved drain!)* ` : "";
      return [
        `🌀 *Drain!*`,
        `Stole *${drained} HP* from ${target.name}!${cursedNote}`,
        `${attacker.name} gains *${healed} HP*. HP: ${attacker.hp}/${attacker.maxHp}`,
        `${target.name} HP: ${target.hp}/${target.maxHp}`,
      ];
    },
    tick() {
      return { logs: [], expired: true };
    },
  },

  mark: {
    emoji: "🎯",
    label: "Mark",
    targetSelf: false,
    /**
     * Mark target — all damage dealt to them +25% for duration turns.
     */
    apply(attacker, target, skill) {
      const duration = safeDuration(skill.duration);
      target.statusEffects.push({ type: "mark", value: 25, duration });
      return [
        `🎯 *Marked!*`,
        `${target.name} is marked — takes *+25% damage* for *${duration} turns*!`,
      ];
    },
    tick(target, effect) {
      const logs = [];
      effect.duration--;
      if (effect.duration <= 0) logs.push(`🎯 *Mark* on ${target.name} fades.`);
      return { logs, expired: effect.duration <= 0 };
    },
  },

  taunt: {
    emoji: "😤",
    label: "Taunt",
    targetSelf: false,
    /**
     * Taunt - Forces enemy to target you (PvE only, no effect in current system)
     */
    apply(attacker, target, skill) {
      const duration = safeDuration(skill.duration);
      target.statusEffects.push({ type: "taunt", value: 1, duration });
      return [
        `😤 *Taunted!*`,
        `${target.name} is forced to focus on you for *${duration} turns*!`,
      ];
    },
    tick(target, effect) {
      const logs = [];
      effect.duration--;
      if (effect.duration <= 0) logs.push(`😤 *Taunt* on ${target.name} fades.`);
      return { logs, expired: effect.duration <= 0 };
    },
  },

  shield: {
    emoji: "🛡️",
    label: "Shield",
    targetSelf: true,
    /**
     * Shield - Absorbs damage for duration turns
     */
    apply(attacker, target, skill) {
      const duration = safeDuration(skill.duration);
      const value = skill.value || 100;
      target.statusEffects.push({ type: "shield", value, duration, remaining: value });
      return [
        `🛡️ *Divine Shield!*`,
        `You are protected by a shield that absorbs *${value} damage* for *${duration} turns*!`,
      ];
    },
    tick(target, effect) {
      const logs = [];
      effect.duration--;
      if (effect.duration <= 0 || effect.remaining <= 0) {
        logs.push(`🛡️ *Shield* fades.`);
        return { logs, expired: true };
      }
      return { logs, expired: false };
    },
  },

  damage: {
    emoji: "💥",
    label: "Damage",
    targetSelf: false,
    /**
     * Pure damage effect (handled by combat system)
     */
    apply(attacker, target, skill) {
      return [];
    },
  },

};

// ── Main apply function ───────────────────────────────────

/**
 * Apply a skill effect.
 * @param {string} effectType - the effect id
 * @param {object} attacker - the caster
 * @param {object} target - the enemy/player being targeted
 * @param {object} skill - the skill data
 * @param {number} damageDealt - damage already dealt (for lifesteal)
 * @returns {{ logs: string[], extraDamage: number, healAmount: number }}
 */
export function applyEffect(effectType, attacker, target, skill, damageDealt = 0) {
  const handler = effectRegistry[effectType];
  if (!handler) {
    return { logs: [`⚠️ Unknown effect: ${effectType}`], extraDamage: 0, healAmount: 0 };
  }

  // Self-targeting effects apply to attacker
  const effectTarget = handler.targetSelf ? attacker : target;

  let result;
  if (effectType === "lifesteal") {
    result = handler.apply(attacker, effectTarget, skill, damageDealt);
  } else if (effectType === "execute") {
    result = handler.apply(attacker, effectTarget, skill);
    return {
      logs: result.logs || [],
      extraDamage: result.extraDamage || 0,
      healAmount: 0,
    };
  } else {
    result = handler.apply(attacker, effectTarget, skill);
  }

  // Some effects return plain arrays, some return objects
  if (Array.isArray(result)) {
    return { logs: result, extraDamage: 0, healAmount: 0 };
  }

  return {
    logs: result.logs || [],
    extraDamage: result.extraDamage || 0,
    healAmount: result.healAmount || 0,
  };
}

// ── Tick all status effects on a combatant ────────────────

/**
 * Process all active status effects for one turn.
 * @param {object} combatant - player or enemy
 * @returns {string[]} log messages
 */
export function tickAllEffects(combatant) {
  const logs = [];
  if (!combatant.statusEffects || combatant.statusEffects.length === 0) return logs;

  const remaining = [];

  for (const effect of combatant.statusEffects) {
    const handler = effectRegistry[effect.type];
    if (!handler || !handler.tick) {
      effect.duration--;
      if (effect.duration > 0) remaining.push(effect);
      continue;
    }

    const result = handler.tick(combatant, effect);
    logs.push(...(result.logs || []));

    if (!result.expired) {
      remaining.push(effect);
    }
  }

  combatant.statusEffects = remaining;
  return logs;
}

// ── Format active effects for display ────────────────────

export function formatActiveEffects(combatant) {
  if (!combatant.statusEffects || combatant.statusEffects.length === 0) return "";
  return combatant.statusEffects
    .map((e) => {
      const handler = effectRegistry[e.type];
      const emoji = handler?.emoji || "✨";
      return `${emoji}${e.type}(${e.duration})`;
    })
    .join("  ");
}

export default effectRegistry;
