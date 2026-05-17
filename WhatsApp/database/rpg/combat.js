/*
  RPG Combat Engine
  Base : Lenwy SCM — RPG Extension

  Shared combat logic for: hunt, pvp, raid
  All 19 skill effects are handled by skillEffects.js
*/

import { applyEffect, tickAllEffects, formatActiveEffects } from "./skillEffects.js";
import { getEquipmentStats, getWeaponPassive, getWeaponSkill, getArmorSetBonus, getAllPassives } from "./equipmentHelper.js";

// Re-export so hunt.js only needs to import from combat.js
export { applyEffect, tickAllEffects, formatActiveEffects };

// ── Constants ────────────────────────────────────────────

export const MAX_SP = 1000;
export const DEFEND_SP_GAIN = 200;
export const SP_DRAIN_MIN = 50;
export const SP_DRAIN_MAX = 150;
export const SHIELD_BREAK_MULTIPLIER = 3;
export const SHIELD_BREAK_RESET_SP = 100;
export const CRIT_DAMAGE_BASE = 100;
export const CRIT_DAMAGE_BONUS = 0.5;
export const MAX_CRIT_CHANCE = 50;
export const CRIT_LUCK_DIVISOR = 10;
/** Used for hunt/PvP armor: damage ≈ raw × K / (K + DEF) — avoids flat DEF making hits always 1 */
export const ARMOR_RATIO_K = 100;

// ── Crit ─────────────────────────────────────────────────

export function getCritChance(luck) {
  return Math.min(luck / CRIT_LUCK_DIVISOR, MAX_CRIT_CHANCE);
}

export function rollCrit(luck) {
  return Math.random() * 100 < getCritChance(luck);
}

// ── Damage calculation ───────────────────────────────────

export function calcDamage(
  attacker,
  defender,
  damageType,
  baseValue,
  isCrit = false,
  useRatioArmor = false,
) {
  let raw = baseValue;

  // Attacker type bonus
  if (damageType === "physical") raw += (attacker.physicalAtk || 0);
  else if (damageType === "magical") raw += (attacker.magicalAtk || 0);
  else if (damageType === "hybrid")  raw += (attacker.hybridAtk || 0);

  // Crit
  if (isCrit) {
    raw = CRIT_DAMAGE_BASE + Math.floor(raw * (1 + CRIT_DAMAGE_BONUS));
  }

  // Mark effect — +25% damage to marked target
  const isMarked = (defender.statusEffects || []).some((e) => e.type === "mark");
  if (isMarked) raw = Math.floor(raw * 1.25);

  // Defender type defense
  let def = 0;
  if (damageType === "physical") def = (defender.physicalDef || 0);
  else if (damageType === "magical") def = (defender.magicalDef || 0);
  else if (damageType === "hybrid")  def = (defender.hybridDef || 0);

  // Freeze halves defense
  const isFrozen = (defender.statusEffects || []).some((e) => e.type === "freeze");
  if (isFrozen) def = Math.floor(def * 0.5);

  // debuff_def reduces defense
  const defDebuff = (defender.statusEffects || [])
    .filter((e) => e.type === "debuff_def")
    .reduce((sum, e) => sum + e.value, 0);
  def = Math.max(0, def - defDebuff);

  let damage;
  if (useRatioArmor) {
    const k = ARMOR_RATIO_K + def;
    damage = Math.max(1, Math.floor((raw * ARMOR_RATIO_K) / Math.max(1, k)));
  } else {
    damage = Math.max(1, raw - def);
  }

  // Shield break multiplier
  let shieldBreakTriggered = false;
  if (defender.shieldBroken) {
    damage = damage * SHIELD_BREAK_MULTIPLIER;
    defender.shieldBroken = false;
    shieldBreakTriggered = true;
  }

  // Drain SP separately (doesn't reduce HP damage)
  let spDrain = 0;
  let shieldBroke = false;
  if (defender.sp > 0) {
    spDrain = Math.floor(Math.random() * (SP_DRAIN_MAX - SP_DRAIN_MIN + 1)) + SP_DRAIN_MIN;
    spDrain = Math.min(spDrain, defender.sp);
    defender.sp -= spDrain;
    if (defender.sp <= 0) {
      defender.sp = 0;
      shieldBroke = true;
      defender.shieldBroken = true;
    }
  } else {
    defender.sp = 0;
  }

  return { damage, spDrain, shieldBroke, shieldBreakTriggered, isCrit };
}

// ── Apply damage ─────────────────────────────────────────

export function applyDamage(target, damage) {
  target.hp = Math.max(0, target.hp - damage);
}

// ── Apply stun ───────────────────────────────────────────

export function applyStun(target, turns, isBoss = false) {
  if (isBoss) return false;
  target.stunned = (target.stunned || 0) + turns;
  return true;
}

// ── Tick status effects (delegates to skillEffects.js) ───

export function tickStatusEffects(target) {
  return tickAllEffects(target);
}

// ── Check dodge ──────────────────────────────────────────

export function rollDodge(attacker, defender) {
  // Blind: attacker has 50% miss chance
  const isBlind = (attacker.statusEffects || []).some((e) => e.type === "blind");
  if (isBlind && Math.random() < 0.5) return true;

  // Slow reduces defender agility for dodge calc
  const slowDebuff = (defender.statusEffects || [])
    .filter((e) => e.type === "slow")
    .reduce((sum, e) => sum + e.value, 0);
  const effectiveAgility = Math.max(0, (defender.agility || 0) - slowDebuff);

  // Evasion buff on defender
  const evasionBonus = (defender.statusEffects || [])
    .filter((e) => e.type === "evasion_buff")
    .reduce((sum, e) => sum + e.value, 0);

  const baseEvasion = Math.min(effectiveAgility * 0.2, 30);
  const totalEvasion = Math.min(baseEvasion + evasionBonus, 80);

  return Math.random() * 100 < totalEvasion;
}

// ── Check reflect ────────────────────────────────────────

export function checkReflect(defender, attacker, damage) {
  const reflectEffect = (defender.statusEffects || []).find((e) => e.type === "reflect");
  if (!reflectEffect) return 0;
  const reflected = Math.floor(damage * (reflectEffect.value / 100));
  applyDamage(attacker, reflected);
  return reflected;
}

// ── Tick cooldowns ───────────────────────────────────────

export function tickCooldowns(combatant) {
  if (!combatant.skillCooldowns) return;
  for (const key of Object.keys(combatant.skillCooldowns)) {
    if (combatant.skillCooldowns[key] > 0) combatant.skillCooldowns[key]--;
  }
}

// ── Stun / silence helpers ───────────────────────────────

export function isStunned(combatant) {
  return (combatant.stunned || 0) > 0;
}

export function isSilenced(combatant) {
  return (combatant.statusEffects || []).some((e) => e.type === "silence");
}

export function tickStun(combatant) {
  if (combatant.stunned > 0) combatant.stunned--;
}

// ── Enemy AI ─────────────────────────────────────────────

// Enemy item pool - items enemies can use in combat
const ENEMY_ITEM_POOL = [
  // Healing items (self-target)
  { id: "health_potion", weight: 30, target: "self" },
  { id: "mana_potion", weight: 20, target: "self" },
  { id: "regen_herb", weight: 15, target: "self" },
  { id: "antidote", weight: 10, target: "self" },
  
  // Offensive items (player-target)
  { id: "poison_bomb", weight: 20, target: "enemy" },
  { id: "fire_flask", weight: 20, target: "enemy" },
  { id: "stun_grenade", weight: 15, target: "enemy" },
  
  // Defensive items (self-target)
  { id: "smoke_grenade", weight: 15, target: "self" },
];

function selectRandomEnemyItem() {
  const totalWeight = ENEMY_ITEM_POOL.reduce((sum, item) => sum + item.weight, 0);
  let random = Math.random() * totalWeight;
  
  for (const item of ENEMY_ITEM_POOL) {
    random -= item.weight;
    if (random <= 0) return item;
  }
  
  return ENEMY_ITEM_POOL[0]; // Fallback
}

export function enemyAI(enemy, player) {
  if (isStunned(enemy)) return { action: "stunned" };

  const shouldDefend = enemy.sp < 100 || Math.random() < 0.20;
  if (shouldDefend && enemy.sp < MAX_SP) return { action: "defend" };

  // 30% chance to use an item
  if (Math.random() < 0.30) {
    // Initialize item usage tracker if not exists
    if (!enemy.itemUsageCount) {
      enemy.itemUsageCount = {};
    }
    
    // Smart item selection based on situation
    const hpPercent = (enemy.hp / enemy.maxHp) * 100;
    const manaPercent = (enemy.mana / enemy.maxMana) * 100;
    const hasNegativeEffects = (enemy.statusEffects || []).some(e => 
      ["poison", "burn", "bleed", "slow", "blind", "curse"].includes(e.type)
    );
    
    let selectedItem = null;
    
    // Prioritize healing when low HP
    if (hpPercent < 40 && Math.random() < 0.7) {
      const healItems = ENEMY_ITEM_POOL.filter(i => 
        (i.id === "health_potion" || i.id === "regen_herb") && 
        i.target === "self" &&
        (enemy.itemUsageCount[i.id] || 0) < 3
      );
      if (healItems.length > 0) {
        selectedItem = healItems[0];
      }
    }
    
    // Prioritize antidote when has negative effects
    if (!selectedItem && hasNegativeEffects && Math.random() < 0.6) {
      const antidote = ENEMY_ITEM_POOL.find(i => 
        i.id === "antidote" && (enemy.itemUsageCount[i.id] || 0) < 3
      );
      if (antidote) {
        selectedItem = antidote;
      }
    }
    
    // Prioritize mana potion when low mana
    if (!selectedItem && manaPercent < 30 && Math.random() < 0.5) {
      const manaItem = ENEMY_ITEM_POOL.find(i => 
        i.id === "mana_potion" && (enemy.itemUsageCount[i.id] || 0) < 3
      );
      if (manaItem) {
        selectedItem = manaItem;
      }
    }
    
    // Otherwise try to use random item that hasn't been used 3 times
    if (!selectedItem) {
      const availableItems = ENEMY_ITEM_POOL.filter(i => 
        (enemy.itemUsageCount[i.id] || 0) < 3
      );
      
      if (availableItems.length > 0) {
        // Weighted random selection from available items
        const totalWeight = availableItems.reduce((sum, item) => sum + item.weight, 0);
        let random = Math.random() * totalWeight;
        
        for (const item of availableItems) {
          random -= item.weight;
          if (random <= 0) {
            selectedItem = item;
            break;
          }
        }
        
        if (!selectedItem) selectedItem = availableItems[0];
      }
    }
    
    // Use the selected item if found
    if (selectedItem) {
      // Increment usage count
      enemy.itemUsageCount[selectedItem.id] = (enemy.itemUsageCount[selectedItem.id] || 0) + 1;
      return { action: "item", itemId: selectedItem.id, target: selectedItem.target };
    }
    
    // If no items available, fall through to skill/attack
  }

  // 50% chance to use skill (if available)
  if (enemy.skills && enemy.skills.length > 0 && Math.random() < 0.50) {
    const available = enemy.skills
      .map((s, i) => ({ s, i }))
      .filter(({ s }) => {
        const cd = enemy.skillCooldowns?.[s.name] || 0;
        return cd === 0 && (enemy.mana || 0) >= (s.manaCost || 0);
      });

    if (available.length > 0) {
      const chosen = available[Math.floor(Math.random() * available.length)];
      return { action: "skill", skillIndex: chosen.i };
    }
  }

  return { action: "attack" };
}

// ── Apply passive ────────────────────────────────────────

export function applyPassive(combatant) {
  // Support multiple passives (for players with equipment)
  const passives = combatant.allPassives || (combatant.passive ? [combatant.passive] : []);
  if (passives.length === 0) return [];
  
  const logs = [];

  for (const passive of passives) {
    if (!passive) continue;

    switch (passive.effect) {
      case "enrage": {
        const hpPct = (combatant.hp / combatant.maxHp) * 100;
        const wasActive = combatant._enrageActive || false;
        combatant._enrageActive = hpPct < (passive.threshold || 30);
        if (combatant._enrageActive && !wasActive) {
          logs.push(`😡 ${combatant.name}'s *${passive.name}* activates! Attack +${passive.value}`);
        }
        break;
      }
      case "regen": {
        const heal = Math.min(passive.value, combatant.maxHp - combatant.hp);
        if (heal > 0) { 
          combatant.hp += heal; 
          logs.push(`💚 ${combatant.name}'s *${passive.name}*: +${heal} HP`); 
        }
        break;
      }
      case "mana_regen": {
        const manaHeal = Math.min(passive.value, combatant.maxMana - combatant.mana);
        if (manaHeal > 0) { 
          combatant.mana += manaHeal; 
          logs.push(`💧 ${combatant.name}'s *${passive.name}*: +${manaHeal} Mana`); 
        }
        break;
      }
      case "defense_boost_low_hp": {
        const hpPct = (combatant.hp / combatant.maxHp) * 100;
        const wasActive = combatant._defenseBoostActive || false;
        combatant._defenseBoostActive = hpPct < (passive.threshold || 25);
        if (combatant._defenseBoostActive && !wasActive) {
          logs.push(`🛡️ ${combatant.name}'s *${passive.name}* activates! Defense +${passive.value}`);
        }
        break;
      }
      case "berserker_rage": {
        const hpPct = (combatant.hp / combatant.maxHp) * 100;
        const wasActive = combatant._berserkerActive || false;
        combatant._berserkerActive = hpPct < (passive.threshold || 20);
        if (combatant._berserkerActive && !wasActive) {
          logs.push(`💢 ${combatant.name}'s *${passive.name}* activates! Attack +${passive.value}, Defense -${passive.defensePenalty || 5}`);
        }
        break;
      }
      case "last_stand": {
        const hpPct = (combatant.hp / combatant.maxHp) * 100;
        const wasActive = combatant._lastStandActive || false;
        combatant._lastStandActive = hpPct < (passive.threshold || 15);
        if (combatant._lastStandActive && !wasActive) {
          logs.push(`⚔️ ${combatant.name}'s *${passive.name}* activates! All stats +${passive.value}!`);
        }
        break;
      }
      case "agility_to_dodge":
      case "thorns":
      case "defense_boost":
      case "attack_boost":
      case "dodge_boost":
      case "crit_boost":
      case "luck_boost":
      case "lifesteal":
      case "poison_on_hit":
      case "burn_on_hit":
      case "slow_on_hit":
      case "cooldown_reduction":
      case "mana_cost_reduction":
      case "damage_reduction":
      case "stun_immunity":
      case "silence_immunity":
      case "slow_immunity":
        // Handled in other functions (damage calc, dodge, etc.)
        break;
    }
  }

  return logs;
}

// ── Effective stats ──────────────────────────────────────

export function getEffectiveAttack(combatant) {
  let atk = combatant.attack || 0;
  if (combatant._enrageActive) atk += combatant.passive?.value || 0;
  for (const e of (combatant.statusEffects || [])) {
    if (e.type === "buff_atk")   atk += e.value;
    if (e.type === "debuff_atk") atk -= e.value;
  }
  return Math.max(0, atk);
}

export function getEffectiveDefense(combatant) {
  let def = combatant.defense || 0;
  if (combatant._defenseBoostActive) def += combatant.passive?.value || 0;
  for (const e of (combatant.statusEffects || [])) {
    if (e.type === "buff_def")   def += e.value;
    if (e.type === "debuff_def") def -= e.value;
  }
  return Math.max(0, def);
}

// ── Combat status display ────────────────────────────────

export function buildCombatStatus(state) {
  const p = state.player;
  const e = state.enemy;

  const pHpBar = buildBar(p.hp, p.maxHp, 8);
  const eHpBar = buildBar(e.hp, e.maxHp, 8);
  const pSpBar = p.sp > 0 ? ` 🛡️${p.sp}` : "";
  const eSpBar = e.sp > 0 ? ` 🛡️${e.sp}` : "";
  const pEffects = formatActiveEffects(p);
  const eEffects = formatActiveEffects(e);
  const pStatus = isStunned(p) ? " 💫STUNNED" : isSilenced(p) ? " 🤐SILENCED" : "";
  const eStatus = isStunned(e) ? " 💫STUNNED" : isSilenced(e) ? " 🤐SILENCED" : "";

  const skillSlots = (p.skills || []).map((s, i) => {
    if (!s || !s.id) return `[${i + 1}] —`;
    const cd = s.cooldownRemaining > 0 ? ` ⏳${s.cooldownRemaining}` : "";
    return `[${i + 1}] ${s.name}${cd}`;
  }).join("  ");
  
  // Add weapon skill as slot 4 if equipped
  let weaponSkillSlot = "";
  if (p.weaponSkill) {
    const ws = p.weaponSkill;
    const cd = ws.cooldownRemaining > 0 ? ` ⏳${ws.cooldownRemaining}` : "";
    weaponSkillSlot = `  [4] ${ws.name}${cd}`;
  }

  return (
    `⚔️ *Round ${state.round}*\n\n` +
    `👤 *${p.name}*${pStatus}\n` +
    `❤️ ${pHpBar} ${p.hp}/${p.maxHp}${pSpBar}\n` +
    `💧 Mana: ${p.mana}/${p.maxMana}\n` +
    `${pEffects ? `✨ ${pEffects}\n` : ""}` +
    `\n` +
    `${e.emoji || "👾"} *${e.name}*${eStatus}\n` +
    `❤️ ${eHpBar} ${e.hp}/${e.maxHp}${eSpBar}\n` +
    `${eEffects ? `✨ ${eEffects}\n` : ""}` +
    `\n` +
    `🎯 *Skills:* ${skillSlots}${weaponSkillSlot}\n\n` +
    `*Your turn!* Type:\n` +
    `⚔️ attack  🛡️ defend  💥 skill [1/2/3${weaponSkillSlot ? "/4" : ""}]\n` +
    `🎒 item  🏃 run  📊 status`
  );
}

function buildBar(current, max, size = 8) {
  const filled = Math.round((current / max) * size);
  const empty = size - filled;
  return `[${"■".repeat(Math.max(0, filled))}${"□".repeat(Math.max(0, empty))}]`;
}

// ── Init combat state ────────────────────────────────────

export function initCombatState(playerJid, replyJid, playerData, enemyData, mode = "hunt") {
  // Get equipment bonuses for player
  const equipStats = getEquipmentStats(playerData);
  const weaponSkill = getWeaponSkill(playerData);
  const allPassives = getAllPassives(playerData);
  
  // Combine class passive with equipment passives
  const primaryPassive = allPassives.length > 0 ? allPassives[0] : null;
  
  // Initialize weapon skill cooldown if it exists (clone to avoid reference issues)
  let weaponSkillCopy = null;
  if (weaponSkill) {
    weaponSkillCopy = {
      ...weaponSkill,
      cooldownRemaining: 0
    };
  }
  
  console.log(`[COMBAT INIT] Weapon skill:`, weaponSkillCopy);
  
  // For PVP mode, get enemy equipment stats too
  let enemyEquipStats = {};
  let enemyWeaponSkill = null;
  let enemyAllPassives = [];
  let enemyPrimaryPassive = null;
  
  if (mode === "pvp") {
    enemyEquipStats = getEquipmentStats(enemyData);
    enemyWeaponSkill = getWeaponSkill(enemyData);
    enemyAllPassives = getAllPassives(enemyData);
    enemyPrimaryPassive = enemyAllPassives.length > 0 ? enemyAllPassives[0] : null;
    
    // Clone enemy weapon skill
    if (enemyWeaponSkill) {
      enemyWeaponSkill = {
        ...enemyWeaponSkill,
        cooldownRemaining: 0
      };
    }
  }
  
  return {
    playerJid,
    replyJid,
    mode,
    turn: "player",
    round: 1,
    isOver: false,
    winner: null,
    messageKey: null,

    player: {
      name: playerData.name,
      hp: playerData.stats.hp,
      maxHp: playerData.stats.maxHp + (equipStats.hp || 0),
      mana: playerData.stats.mana,
      maxMana: playerData.stats.maxMana + (equipStats.mana || 0),
      attack: playerData.stats.attack + (equipStats.attack || 0),
      defense: playerData.stats.defense + (equipStats.defense || 0),
      agility: playerData.stats.agility + (equipStats.agility || 0),
      luck: playerData.stats.luck + (equipStats.luck || 0),
      physicalAtk: (playerData.stats.physicalAtk || 0) + (equipStats.physicalAtk || 0),
      magicalAtk: (playerData.stats.magicalAtk || 0) + (equipStats.magicalAtk || 0),
      hybridAtk: (playerData.stats.hybridAtk || 0) + (equipStats.hybridAtk || 0),
      physicalDef: (playerData.stats.physicalDef || 0) + (equipStats.physicalDef || 0),
      magicalDef: (playerData.stats.magicalDef || 0) + (equipStats.magicalDef || 0),
      hybridDef: (playerData.stats.hybridDef || 0) + (equipStats.hybridDef || 0),
      critChance: (equipStats.critChance || 0),
      blockChance: (equipStats.blockChance || 0),
      skills: playerData.skills || [],
      passive: primaryPassive,
      allPassives: allPassives, // Store all passives for multi-passive support
      weaponSkill: weaponSkillCopy, // Store weapon skill separately
      inventory: playerData.inventory || [],
      equipment: playerData.equipment || null,
      sp: MAX_SP,
      shieldBroken: false,
      stunned: 0,
      statusEffects: [],
      lastAction: null,
      _enrageActive: false,
      _defenseBoostActive: false,
      _haste: false,
      _equipmentBonus: equipStats, // Store for display
    },

    enemy: mode === "pvp" ? {
      // PVP mode - enemy is a player with equipment
      id: enemyData.id || "player",
      name: enemyData.name,
      emoji: "👤",
      isBoss: false,
      hp: enemyData.stats.hp,
      maxHp: enemyData.stats.maxHp + (enemyEquipStats.hp || 0),
      mana: enemyData.stats.mana,
      maxMana: enemyData.stats.maxMana + (enemyEquipStats.mana || 0),
      attack: enemyData.stats.attack + (enemyEquipStats.attack || 0),
      defense: enemyData.stats.defense + (enemyEquipStats.defense || 0),
      agility: enemyData.stats.agility + (enemyEquipStats.agility || 0),
      luck: enemyData.stats.luck + (enemyEquipStats.luck || 0),
      physicalAtk: (enemyData.stats.physicalAtk || 0) + (enemyEquipStats.physicalAtk || 0),
      magicalAtk: (enemyData.stats.magicalAtk || 0) + (enemyEquipStats.magicalAtk || 0),
      hybridAtk: (enemyData.stats.hybridAtk || 0) + (enemyEquipStats.hybridAtk || 0),
      physicalDef: (enemyData.stats.physicalDef || 0) + (enemyEquipStats.physicalDef || 0),
      magicalDef: (enemyData.stats.magicalDef || 0) + (enemyEquipStats.magicalDef || 0),
      hybridDef: (enemyData.stats.hybridDef || 0) + (enemyEquipStats.hybridDef || 0),
      critChance: (enemyEquipStats.critChance || 0),
      blockChance: (enemyEquipStats.blockChance || 0),
      skills: enemyData.skills || [],
      passive: enemyPrimaryPassive,
      allPassives: enemyAllPassives,
      weaponSkill: enemyWeaponSkill,
      inventory: enemyData.inventory || [],
      equipment: enemyData.equipment || null,
      sp: MAX_SP,
      shieldBroken: false,
      stunned: 0,
      statusEffects: [],
      skillCooldowns: {},
      _enrageActive: false,
      _haste: false,
      _equipmentBonus: enemyEquipStats,
    } : {
      // Hunt mode - enemy is a monster
      id: enemyData.id,
      name: enemyData.name,
      emoji: enemyData.emoji || "👾",
      isBoss: enemyData.isBoss || false,
      hp: enemyData.stats.hp,
      maxHp: enemyData.stats.hp,
      mana: enemyData.stats.mana || 0,
      maxMana: enemyData.stats.mana || 0,
      attack: enemyData.stats.attack,
      defense: enemyData.stats.defense || 0,
      agility: enemyData.stats.agility || 0,
      luck: enemyData.stats.luck || 0,
      physicalAtk: enemyData.stats.physicalAtk || 0,
      magicalAtk: enemyData.stats.magicalAtk || 0,
      hybridAtk: enemyData.stats.hybridAtk || 0,
      physicalDef: enemyData.stats.physicalDef || 0,
      magicalDef: enemyData.stats.magicalDef || 0,
      hybridDef: enemyData.stats.hybridDef || 0,
      skills: enemyData.skills || [],
      passive: enemyData.passive || null,
      sp: MAX_SP,
      shieldBroken: false,
      stunned: 0,
      statusEffects: [],
      skillCooldowns: {},
      drops: enemyData.drops || [],
      xp: enemyData.xp || 0,
      gold: enemyData.gold || { min: 0, max: 0 },
      _enrageActive: false,
      _haste: false,
    },
  };
}

export default {
  calcDamage,
  applyDamage,
  applyStun,
  applyEffect,
  tickStatusEffects,
  tickAllEffects,
  tickCooldowns,
  tickStun,
  isStunned,
  isSilenced,
  rollDodge,
  checkReflect,
  enemyAI,
  applyPassive,
  getEffectiveAttack,
  getEffectiveDefense,
  buildCombatStatus,
  initCombatState,
  rollCrit,
  getCritChance,
};
