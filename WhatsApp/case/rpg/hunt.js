/*
  RPG Command : hunt
  Base : Lenwy SCM — RPG Extension

  Flow:
  1. Player types "hunt" (with prefix)
  2. Random enemy spawns based on current location
  3. Combat starts — player and enemy take turns
  4. Player commands (no prefix): attack, defend, skill 1/2/3, item, run, status
  5. After player action → enemy takes their turn (auto)
  6. Combat ends when HP = 0 or player runs

  All combat inputs handled via RPG session interceptor in evarick.js
*/

import fs from "fs";
import path from "path";
import { getRandomEnemy, getEnemyById } from "../../database/rpg/enemies.js";
import { canDoAction } from "../../database/rpg/locations.js";
import { getItemByName, negativeEffects } from "../../database/rpg/items.js";
import { trackCombat, trackGoldEarned } from "../../database/rpg/questTracker.js";
import { getLanguage, getText, getPlayerLanguage } from "../../database/rpg/languages.js";
import {
  initCombatState,
  calcDamage,
  applyDamage,
  applyStun,
  applyEffect,
  tickStatusEffects,
  tickCooldowns,
  tickStun,
  isStunned,
  isSilenced,
  rollDodge,
  checkReflect,
  enemyAI,
  applyPassive,
  getEffectiveAttack,
  buildCombatStatus,
  rollCrit,
  DEFEND_SP_GAIN,
  MAX_SP,
  SHIELD_BREAK_MULTIPLIER,
  SHIELD_BREAK_RESET_SP,
} from "../../database/rpg/combat.js";
import { combatSessions } from "../../database/rpg/sessionManager.js";

const playersPath = path.join(process.cwd(), "WhatsApp", "database", "rpg", "players.json");

// Export combatSessions for backward compatibility
export { combatSessions };

// -- Helpers ----------------------------------------------

function loadPlayers() {
  try {
    const data = JSON.parse(fs.readFileSync(playersPath, "utf8"));
    const players = { ...data };
    delete players._comment;
    delete players._template;
    return players;
  } catch {
    return {};
  }
}

function savePlayers(players) {
  const raw = fs.readFileSync(playersPath, "utf8");
  const data = JSON.parse(raw);
  const updated = { _comment: data._comment, _template: data._template, ...players };
  fs.writeFileSync(playersPath, JSON.stringify(updated, null, 2), "utf8");
}

function addToInventory(player, itemId, qty = 1) {
  const existing = player.inventory.find((i) => i.id === itemId);
  if (existing) existing.qty += qty;
  else player.inventory.push({ id: itemId, qty });
}

function rollDrops(drops) {
  const result = [];
  for (const drop of drops) {
    if (Math.random() * 100 < drop.chance) {
      const qty = Math.floor(Math.random() * (drop.max - drop.min + 1)) + drop.min;
      result.push({ id: drop.item, qty });
    }
  }
  return result;
}

// -- Send/edit combat message -----------------------------

async function sendCombatMessage(lenwy, state, text) {
  if (state.messageKey) {
    await lenwy.sendMessage(state.replyJid, { text, edit: state.messageKey });
  } else {
    const sent = await lenwy.sendMessage(state.replyJid, { text });
    state.messageKey = sent?.key;
  }
}

// -- Enemy turn -------------------------------------------

async function doEnemyTurn(lenwy, state) {
  const e = state.enemy;
  const p = state.player;
  const logs = [];

  // Natural mana regeneration for enemy (5% of max mana per turn)
  const enemyManaRegen = Math.floor(e.maxMana * 0.05);
  if (enemyManaRegen > 0 && e.mana < e.maxMana) {
    const actualRegen = Math.min(enemyManaRegen, e.maxMana - e.mana);
    e.mana += actualRegen;
  }

  // Tick passives
  const passiveLogs = applyPassive(e);
  logs.push(...passiveLogs);

  // Tick status effects
  const statusLogs = tickStatusEffects(e);
  logs.push(...statusLogs);

  // Tick cooldowns
  tickCooldowns(e);

  // Check if enemy died from status effects
  if (e.hp <= 0) {
    state.isOver = true;
    state.winner = "player";
    return logs;
  }

  // Tick stun
  if (isStunned(e)) {
    logs.push(`😵 ${e.name} is stunned and skips their turn!`);
    tickStun(e);
    return logs;
  }

  // Enemy AI decision
  const decision = enemyAI(e, p);

  if (decision.action === "defend") {
    e.sp = Math.min(e.sp + DEFEND_SP_GAIN, MAX_SP);
    logs.push(`🛡️ ${e.name} raises their guard! SP: ${e.sp}`);
    return logs;
  }

  if (decision.action === "item") {
    const itemData = getItemByName(decision.itemId);
    if (!itemData) {
      // Fallback to attack if item not found
      decision.action = "attack";
    } else {
      const target = decision.target === "self" ? e : p;
      const targetName = decision.target === "self" ? e.name : "you";
      
      logs.push(`💼 ${e.name} uses *${itemData.name}*!`);
      
      // Apply item effect
      switch (itemData.effect) {
        case "heal": {
          const healed = Math.min(itemData.value, e.maxHp - e.hp);
          e.hp += healed;
          logs.push(`💚 ${e.name} restores *${healed} HP*! HP: ${e.hp}/${e.maxHp}`);
          break;
        }
        case "mana_restore": {
          const restored = Math.min(itemData.value, e.maxMana - e.mana);
          e.mana += restored;
          logs.push(`💙 ${e.name} restores *${restored} mana*! Mana: ${e.mana}/${e.maxMana}`);
          break;
        }
        case "cleanse": {
          const before = e.statusEffects.length;
          e.statusEffects = e.statusEffects.filter((ef) => !negativeEffects.has(ef.type));
          e.stunned = 0;
          const removed = before - e.statusEffects.length;
          logs.push(`✅ ${e.name} removed ${removed} negative effect(s)!`);
          break;
        }
        case "regen": {
          e.statusEffects.push({ type: "regen", value: itemData.value, duration: itemData.duration });
          logs.push(`💚 ${e.name} will regenerate *${itemData.value} HP/turn* for *${itemData.duration} turns*!`);
          break;
        }
        case "evasion_buff": {
          e.statusEffects.push({ type: "evasion_buff", value: itemData.value, duration: itemData.duration });
          logs.push(`💨 ${e.name}'s evasion increased by *${itemData.value}%* for *${itemData.duration} turns*!`);
          break;
        }
        case "poison": {
          p.statusEffects.push({ type: "poison", value: itemData.value, duration: itemData.duration });
          logs.push(`☠️ You are poisoned! Taking *${itemData.value} damage/turn* for *${itemData.duration} turns*!`);
          break;
        }
        case "burn": {
          p.statusEffects.push({ type: "burn", value: itemData.value, duration: itemData.duration });
          logs.push(`🔥 You are burning! Taking *${itemData.value} damage/turn* for *${itemData.duration} turns*!`);
          break;
        }
        case "stun": {
          p.stunned = (p.stunned || 0) + itemData.duration;
          logs.push(`😵 You are stunned for ${itemData.duration} turn(s)!`);
          break;
        }
        default:
          logs.push(`⚠️ Item effect not implemented: ${itemData.effect}`);
      }
      
      return logs;
    }
  }

  if (decision.action === "skill" && e.skills[decision.skillIndex]) {
    const skill = e.skills[decision.skillIndex];

    // Check if player dodges
    if (skill.damageType !== "none" && rollDodge(e, p)) {
      logs.push(`💨 *You dodged ${e.name}'s ${skill.name}!*`);
      e.skillCooldowns[skill.name] = skill.cooldown || 4;
      if (skill.manaCost) e.mana = Math.max(0, e.mana - skill.manaCost);
      return logs;
    }

    const isCrit = rollCrit(0);
    const atkValue = skill.value || getEffectiveAttack(e);
    const result = calcDamage(e, p, skill.damageType || "physical", atkValue, isCrit, true);

    if (skill.damageType !== "none") {
      applyDamage(p, result.damage);
    }
    if (skill.manaCost) e.mana = Math.max(0, e.mana - skill.manaCost);
    e.skillCooldowns[skill.name] = skill.cooldown || 4;

    logs.push(`${e.name} uses *${skill.name}*!`);
    if (result.isCrit) logs.push(`💥 Critical hit!`);
    if (result.spDrain > 0) logs.push(`🛡️ Your shield weakened! -${result.spDrain} SP (${p.sp}/${MAX_SP})`);
    if (result.shieldBroke) {
      logs.push(`💥 *SHIELD BREAK!* Your shield is broken! Next hit will deal 3x damage!`);
    }
    if (result.shieldBreakTriggered) {
      logs.push(`⚠️ *SHIELD BREAK TRIGGERED!* 3x damage dealt!`);
      const stunned = applyStun(p, 1, false);
      if (stunned) logs.push(`😵 You are stunned for 1 turn!`);
    }
    if (skill.damageType !== "none") {
      logs.push(`💔 You take *${result.damage}* damage! HP: ${p.hp}/${p.maxHp}`);
    }

    // Apply skill effect to player
    const selfEffects = ["heal", "regen", "buff_atk", "buff_def", "evasion_buff", "haste", "reflect"];
    const effectTarget = selfEffects.includes(skill.effect) ? e : p;
    const effectResult = applyEffect(skill.effect, e, effectTarget, skill, result.damage);
    logs.push(...effectResult.logs);

    // Reflect
    if (skill.damageType !== "none") {
      const reflected = checkReflect(p, e, result.damage);
      if (reflected > 0) logs.push(`🪞 You reflect ${reflected} damage back!`);
    }

    // Thorns passive
    if (p.passive?.effect === "thorns" && skill.damageType !== "none") {
      const thornDmg = p.passive.value;
      applyDamage(e, thornDmg);
      logs.push(`🌵 Thorns! ${e.name} takes ${thornDmg} damage back!`);
    }

    return logs;
  }

  // Basic attack
  if (rollDodge(e, p)) {
    logs.push(`💨 *You dodged ${e.name}'s attack!*`);
    return logs;
  }

  const isCrit = rollCrit(0);
  const atkValue = getEffectiveAttack(e);
  const result = calcDamage(e, p, "physical", atkValue, isCrit, true);

  applyDamage(p, result.damage);

  logs.push(`${e.name} attacks!`);
  if (result.isCrit) logs.push(`💥 Critical hit!`);
  if (result.spDrain > 0) {
    logs.push(`🛡️ Shield absorbed ${result.spDrain} damage!`);
    if (result.damage > 0) {
      logs.push(`💔 You take *${result.damage}* damage! HP: ${p.hp}/${p.maxHp}`);
    } else {
      logs.push(`🛡️ All damage blocked by shield! HP: ${p.hp}/${p.maxHp}`);
    }
  } else {
    logs.push(`💔 You take *${result.damage}* damage! HP: ${p.hp}/${p.maxHp}`);
  }
  if (result.shieldBroke) {
    logs.push(`💥 *SHIELD BREAK!* Your shield is broken! Next hit deals 3x damage!`);
  }
  if (result.shieldBreakTriggered) {
    logs.push(`💥 *SHIELD BREAK TRIGGERED!* 3x damage!`);
    const stunned = applyStun(p, 1, false);
    if (stunned) logs.push(`😵 You are stunned for 1 turn!`);
  }
  logs.push(`💔 You take *${result.damage}* damage! HP: ${p.hp}/${p.maxHp}`);

  // Reflect
  const reflected = checkReflect(p, e, result.damage);
  if (reflected > 0) logs.push(`🪞 You reflect ${reflected} damage back to ${e.name}!`);

  // Thorns passive
  if (p.passive?.effect === "thorns") {
    const thornDmg = p.passive.value;
    applyDamage(e, thornDmg);
    logs.push(`🌵 Thorns! ${e.name} takes ${thornDmg} damage back!`);
  }

  return logs;
}

// -- Handle combat victory --------------------------------

async function handleVictory(lenwy, state) {
  const players = loadPlayers();
  const playerData = players[state.playerJid];
  if (!playerData) return;

  const lang = getLanguage(getPlayerLanguage(playerData));
  const e = state.enemy;
  const drops = rollDrops(e.drops);
  const goldEarned = Math.floor(Math.random() * (e.gold.max - e.gold.min + 1)) + e.gold.min;

  // Apply rewards
  playerData.gold = (playerData.gold || 0) + goldEarned;
  playerData.xp = (playerData.xp || 0) + e.xp;
  playerData.stats_tracker.totalKills = (playerData.stats_tracker.totalKills || 0) + 1;
  playerData.stats_tracker.totalGoldEarned = (playerData.stats_tracker.totalGoldEarned || 0) + goldEarned;
  if (e.isBoss) playerData.stats_tracker.bossesKilled = (playerData.stats_tracker.bossesKilled || 0) + 1;

  // Apply drops
  for (const drop of drops) addToInventory(playerData, drop.id, drop.qty);

  // Sync HP/mana back
  playerData.stats.hp = state.player.hp;
  playerData.stats.mana = state.player.mana;

  // Level up check
  let levelUpText = "";
  while (playerData.xp >= playerData.xpToNext) {
    playerData.xp -= playerData.xpToNext;
    playerData.level++;
    playerData.xpToNext = Math.floor(playerData.xpToNext * 1.5);
    playerData.statPoints = (playerData.statPoints || 0) + 3;
    levelUpText += `\n⭐ *${getText(lang, "hunt.levelUp", {level: playerData.level})}*`;
  }

  playerData.lastActive = new Date().toISOString();
  players[state.playerJid] = playerData;
  savePlayers(players);

  // Track quest progress
  trackCombat(state.playerJid, 1);
  trackGoldEarned(state.playerJid, goldEarned);

  const dropText = drops.length > 0
    ? drops.map((d) => `• ${d.id} x${d.qty}`).join("\n")
    : "• Nothing dropped";

  await sendCombatMessage(lenwy, state,
    `${getText(lang, "hunt.victory", {enemy: e.name})}\n\n` +
    `🎁 *${lang.code === "id" ? "Drops" : "Drops"}:*\n${dropText}\n\n` +
    `💰 ${getText(lang, "common.gold")}: +${goldEarned}\n` +
    `⭐ ${getText(lang, "common.xp")}: +${e.xp}\n` +
    `${levelUpText}\n\n` +
    `❤️ ${getText(lang, "common.hp")}: ${state.player.hp}/${state.player.maxHp}\n\n` +
    `${lang.code === "id" ? "Ketik *hunt* untuk bertarung lagi!" : "Type *hunt* to fight again!"}`
  );
}

// -- Handle combat defeat ---------------------------------

async function handleDefeat(lenwy, state) {
  const players = loadPlayers();
  const playerData = players[state.playerJid];
  if (!playerData) return;

  const lang = getLanguage(getPlayerLanguage(playerData));

  playerData.stats_tracker.totalDeaths = (playerData.stats_tracker.totalDeaths || 0) + 1;
  // Respawn at starter village with 1 HP
  playerData.stats.hp = 1;
  playerData.currentLocation = "starter_village";
  playerData.lastActive = new Date().toISOString();
  players[state.playerJid] = playerData;
  savePlayers(players);

  await sendCombatMessage(lenwy, state,
    `${getText(lang, "hunt.defeat", {enemy: state.enemy.name})}\n\n` +
    `${lang.code === "id" ? `*${state.enemy.name}* telah mengalahkan kamu...\n\nKamu terbangun kembali di Starter Village dengan 1 HP.\nKunjungi toko untuk membeli potion dan pulih!\n\nKetik *hunt* untuk mencoba lagi.` : `*${state.enemy.name}* has defeated you...\n\nYou wake up back at the Starter Village with 1 HP.\nVisit the shop to buy potions and recover!\n\nType *hunt* to try again.`}`
  );
}

// -- Process player action --------------------------------

export async function handleCombatInput(lenwy, replyJid, playerJid, input) {
  const state = combatSessions.get(playerJid);
  if (!state) return false;
  
  // Clean up zombie sessions
  if (state.isOver) {
    combatSessions.delete(playerJid);
    return false;
  }

  const parts = input.trim().toLowerCase().split(/\s+/);
  const action = parts[0];
  const arg = parts[1];

  const p = state.player;
  const e = state.enemy;
  const logs = [];

  // Status • no turn consumed
  if (action === "status") {
    await sendCombatMessage(lenwy, state, buildCombatStatus(state));
    return true;
  }

  // Check if player is stunned
  if (isStunned(p)) {
    logs.push(`✨ *You are stunned!* Skipping your turn...`);
    tickStun(p);
  } else {

    // -- ATTACK ------------------------------------------
    if (action === "attack") {
      // Check dodge
      if (rollDodge(p, e)) {
        logs.push(`✨ *${e.name} dodged your attack!*`);
      } else {
        const isCrit = rollCrit(p.luck);
        const atkValue = getEffectiveAttack(p);
        const result = calcDamage(p, e, "physical", atkValue, isCrit, true);

        applyDamage(e, result.damage);
        p.sp = 0;

        logs.push(`⚔️ *You attack ${e.name}!*`);
        if (result.isCrit) logs.push(`💥 *Critical Hit!* (${getCritChanceText(p.luck)}% chance)`);
        if (result.spDrain > 0) {
          logs.push(`🛡️ Enemy shield absorbed ${result.spDrain} damage!`);
          if (result.damage > 0) {
            logs.push(`⚔️ Dealt *${result.damage}* damage! ${e.name} HP: ${e.hp}/${e.maxHp}`);
          } else {
            logs.push(`🛡️ All damage blocked by enemy shield! ${e.name} HP: ${e.hp}/${e.maxHp}`);
          }
        } else {
          logs.push(`⚔️ Dealt *${result.damage}* damage! ${e.name} HP: ${e.hp}/${e.maxHp}`);
        }
        if (result.shieldBroke) logs.push(`💥 *ENEMY SHIELD BREAK!* Next hit deals 3x damage!`);
        if (result.shieldBreakTriggered) {
          logs.push(`💥 *SHIELD BREAK TRIGGERED!* 3x damage!`);
          applyStun(e, 1, e.isBoss);
          if (!e.isBoss) logs.push(`😵 ${e.name} is stunned for 1 turn!`);
        }
        // Damage message already shown above

        // Reflect
        const reflected = checkReflect(e, p, result.damage);
        if (reflected > 0) logs.push(`🪞 ${e.name} reflects ${reflected} damage back!`);

        // Thorns passive on enemy
        if (e.passive?.effect === "thorns") {
          const thornDmg = e.passive.value;
          applyDamage(p, thornDmg);
          logs.push(`🌵 ${e.name}'s thorns deal ${thornDmg} damage back to you!`);
        }
      }
      state.player.lastAction = "attack";
    }

    // -- DEFEND ------------------------------------------
    else if (action === "defend") {
      const gained = Math.min(DEFEND_SP_GAIN, MAX_SP - p.sp);
      p.sp += gained;
      logs.push(`?✨ *You raise your guard!* SP: ${p.sp}/${MAX_SP}`);
      state.player.lastAction = "defend";
    }

    // -- SKILL -------------------------------------------
    else if (action === "skill") {
      const slotNum = parseInt(arg) - 1;
      
      // Check if slot 4 (weapon skill)
      let skill = null;
      if (slotNum === 3 && p.weaponSkill) {
        skill = p.weaponSkill;
      } else {
        skill = p.skills?.[slotNum];
      }

      if (!skill || !skill.id) {
        logs.push(`✨ *No skill in slot ${slotNum + 1}.*`);
      } else if (isSilenced(p)) {
        logs.push(`🤐 *You are silenced!* Can't use skills this turn.`);
      } else if (skill.cooldownRemaining > 0) {
        logs.push(`⚠️ *${skill.name}* is on cooldown! (${skill.cooldownRemaining} turns left)`);
      } else if (p.mana < skill.manaCost) {
        logs.push(`✨ *Not enough mana!* Need ${skill.manaCost}, have ${p.mana}.`);
      } else {
        p.mana -= skill.manaCost;
        skill.cooldownRemaining = skill.cooldown;
        p.sp = 0;

        logs.push(`✨ *${skill.name}!*`);

        // Determine target • buffs/heals target self, everything else targets enemy
        const selfEffects = ["heal", "regen", "buff_atk", "buff_def", "evasion_buff", "haste", "reflect"];
        const targetCombatant = selfEffects.includes(skill.effect) ? p : e;
        const isTargetingEnemy = targetCombatant === e;

        let damageDealt = 0;

        // Deal damage if skill has damage component
        if (skill.damageType !== "none" && isTargetingEnemy) {
          if (rollDodge(p, e)) {
            logs.push(`✨ *${e.name} dodged!*`);
          } else {
            const isCrit = rollCrit(p.luck);
            const dmgValue = skill.damage || skill.baseDamage || skill.value || getEffectiveAttack(p);
            const result = calcDamage(p, e, skill.damageType || "physical", dmgValue, isCrit, true);

            applyDamage(e, result.damage);
            damageDealt = result.damage;

            if (result.isCrit) logs.push(`💥 *Critical Hit!*`);
            if (result.spDrain > 0) {
              logs.push(`🛡️ Enemy shield absorbed ${result.spDrain} damage!`);
              if (result.damage > 0) {
                logs.push(`⚔️ Dealt *${result.damage}* damage!`);
              } else {
                logs.push(`🛡️ All damage blocked by enemy shield!`);
              }
            } else {
              logs.push(`⚔️ Dealt *${result.damage}* damage!`);
            }
            if (result.shieldBroke) logs.push(`💥 *ENEMY SHIELD BREAK!*`);
            if (result.shieldBreakTriggered) {
              logs.push(`💥 *SHIELD BREAK TRIGGERED!* 3x damage!`);
              applyStun(e, 1, e.isBoss);
              if (!e.isBoss) logs.push(`😵 ${e.name} is stunned!`);
            }
            logs.push(`⚔️ Dealt *${result.damage}* damage!`);

            // Reflect
            const reflected = checkReflect(e, p, result.damage);
            if (reflected > 0) logs.push(`🪞 ${e.name} reflects ${reflected} damage back!`);
          }
        }

        // Apply skill effect
        const effectResult = applyEffect(skill.effect, p, targetCombatant, skill, damageDealt);
        logs.push(...effectResult.logs);

        // Execute extra damage
        if (effectResult.extraDamage > 0) {
          applyDamage(e, effectResult.extraDamage);
          logs.push(`💀 Execute deals ${effectResult.extraDamage} extra damage!`);
        }

        // Haste • player acts again (flag handled after enemy turn)
        if (p._haste) {
          logs.push(`💨 *Haste active!* You act again after enemy turn.`);
        }

        logs.push(`${e.name} HP: ${e.hp}/${e.maxHp}`);
        state.player.lastAction = "skill";
      }
    }

    // -- RUN ---------------------------------------------
    else if (action === "run") {
      // Base 20% chance + luck scaling (200 luck = 55% total)
      const luckBonus = Math.min((p.luck / 200) * 35, 35); // Max 35% bonus from luck
      const runChance = 20 + luckBonus; // 20% base + up to 35% = 55% max
      if (Math.random() * 100 < runChance) {
        state.isOver = true;
        combatSessions.delete(playerJid);
        await sendCombatMessage(lenwy, state,
          `🏃 *You escaped!*\n\n` +
          `You fled from *${e.name}*.\n` +
          `No rewards gained.\n\n` +
          `Type *hunt* to fight again.`
        );
        return true;
      } else {
        logs.push(`❌ *Failed to escape!* ${e.name} blocks your path and gets a free attack!`);
        state.player.lastAction = "run_failed";
        // Enemy gets a free turn after failed escape
      }
    }

    // -- ITEM --------------------------------------------
    else if (action === "item") {
      if (!arg) {
        const combatItemList = p.inventory
          .filter((i) => getItemByName(i.id)?.usableInBattle)
          .map((i) => {
            const data = getItemByName(i.id);
            return `• ${data?.name || i.id} x${i.qty}`;
          })
          .join("\n") || "None";

        logs.push(
          `✨ *Usage:* item <name>\n` +
          `Example: *item health_potion*\n\n` +
          `Your combat items:\n${combatItemList}`
        );
        return true;
      }

      const itemName = parts.slice(1).join("_").toLowerCase();
      const itemData = getItemByName(itemName);

      if (!itemData) {
        logs.push(`✨ *Item "${itemName}" not found.*\nCheck your inventory with *bag* command.`);
        return true;
      }

      if (!itemData.usableInBattle) {
        logs.push(`✨ *${itemData.name}* cannot be used in battle.`);
        return true;
      }

      // Check inventory
      const invItem = p.inventory.find((i) => i.id === itemData.id);
      if (!invItem || invItem.qty <= 0) {
        logs.push(`✨ *You don't have ${itemData.name} in your inventory.*`);
        return true;
      }

      // Consume item
      invItem.qty--;
      if (invItem.qty <= 0) {
        p.inventory = p.inventory.filter((i) => i.id !== itemData.id);
      }

      const battleMsg = (itemData.battleMessage || "").replace("{enemy}", e.name);
      logs.push(`✨ *${itemData.name}*`);
      logs.push(battleMsg);

      // Apply item effect
      switch (itemData.effect) {
        case "heal": {
          const healed = Math.min(itemData.value, p.maxHp - p.hp);
          p.hp += healed;
          logs.push(`❤️ HP: ${p.hp}/${p.maxHp}`);
          break;
        }
        case "mana_restore": {
          const restored = Math.min(itemData.value, p.maxMana - p.mana);
          p.mana += restored;
          logs.push(`💙 Mana: ${p.mana}/${p.maxMana}`);
          break;
        }
        case "full_restore": {
          p.hp = p.maxHp;
          p.mana = p.maxMana;
          logs.push(`❤️ HP: ${p.hp}/${p.maxHp} | 💙 Mana: ${p.mana}/${p.maxMana}`);
          break;
        }
        case "cleanse": {
          const before = p.statusEffects.length;
          p.statusEffects = p.statusEffects.filter((ef) => !negativeEffects.has(ef.type));
          p.stunned = 0;
          const removed = before - p.statusEffects.length;
          logs.push(`✅ Removed ${removed} negative effect(s).`);
          break;
        }
        case "regen": {
          p.statusEffects.push({ type: "regen", value: itemData.value, duration: itemData.duration });
          break;
        }
        case "evasion_buff": {
          p.statusEffects.push({ type: "evasion_buff", value: itemData.value, duration: itemData.duration });
          break;
        }
        case "poison": {
          e.statusEffects.push({ type: "poison", value: itemData.value, duration: itemData.duration });
          logs.push(`${e.name} HP: ${e.hp}/${e.maxHp}`);
          break;
        }
        case "burn": {
          e.statusEffects.push({ type: "burn", value: itemData.value, duration: itemData.duration });
          logs.push(`${e.name} HP: ${e.hp}/${e.maxHp}`);
          break;
        }
        case "stun": {
          if (e.isBoss) {
            logs.push(`?✨ *${e.name} is immune to stun!*`);
          } else {
            e.stunned = (e.stunned || 0) + itemData.duration;
            logs.push(`😵 ${e.name} is stunned for ${itemData.duration} turn(s)!`);
          }
          break;
        }
        case "escape": {
          if (e.isBoss) {
            logs.push(`?✨ *Can't escape from a boss fight!*`);
            // Refund item
            const refund = p.inventory.find((i) => i.id === itemData.id);
            if (refund) refund.qty++;
            else p.inventory.push({ id: itemData.id, qty: 1 });
          } else {
            state.isOver = true;
            combatSessions.delete(playerJid);
            await sendCombatMessage(lenwy, state,
              `🏃 *Escaped!*\n\nYou used an Escape Rope and fled the battle!\nNo rewards gained.\n\nType *hunt* to fight again.`
            );
            return true;
          }
          break;
        }
        default:
          logs.push(`⚠️ This item has no battle effect.`);
      }

      state.player.lastAction = "item";
    }

    else {
      await sendCombatMessage(lenwy, state,
        `✨ *Unknown command.*\n\nType: attack / defend / skill [1/2/3] / item / run / status`
      );
      return true;
    }
  }

  // Check enemy death after player action
  if (e.hp <= 0) {
    state.isOver = true;
    state.winner = "player";
    combatSessions.delete(playerJid);
    const logText = logs.join("\n");
    await sendCombatMessage(lenwy, state, logText + "\n\n✨ *Finishing blow!*");
    await handleVictory(lenwy, state);
    return true;
  }

  // -- ENEMY TURN ---------------------------------------
  state.round++;
  const enemyLogs = await doEnemyTurn(lenwy, state);
  logs.push("", `--- *${e.name}'s turn* ---`);
  logs.push(...enemyLogs);

  // Natural mana regeneration (5% of max mana per turn)
  const playerManaRegen = Math.floor(p.maxMana * 0.05);
  if (playerManaRegen > 0 && p.mana < p.maxMana) {
    const actualRegen = Math.min(playerManaRegen, p.maxMana - p.mana);
    p.mana += actualRegen;
    logs.push(`💙 Natural mana regen: +${actualRegen} mana (${p.mana}/${p.maxMana})`);
  }

  // Tick player status effects
  const playerStatusLogs = tickStatusEffects(p);
  logs.push(...playerStatusLogs);

  // Tick player skill cooldowns
  for (const skill of (p.skills || [])) {
    if (skill && skill.cooldownRemaining > 0) skill.cooldownRemaining--;
  }
  
  // Tick weapon skill cooldown
  if (p.weaponSkill && p.weaponSkill.cooldownRemaining > 0) {
    p.weaponSkill.cooldownRemaining--;
  }

  // Apply player passive
  const playerPassiveLogs = applyPassive(p);
  logs.push(...playerPassiveLogs);

  // Check player death
  if (p.hp <= 0) {
    state.isOver = true;
    state.winner = "enemy";
    combatSessions.delete(playerJid);
    const logText = logs.join("\n");
    await sendCombatMessage(lenwy, state, logText);
    await handleDefeat(lenwy, state);
    return true;
  }

  // Check enemy death from status effects
  if (e.hp <= 0) {
    state.isOver = true;
    state.winner = "player";
    combatSessions.delete(playerJid);
    const logText = logs.join("\n");
    await sendCombatMessage(lenwy, state, logText + "\n\n✨ *Enemy defeated by status effects!*");
    await handleVictory(lenwy, state);
    return true;
  }

  // Combat continues • show updated status
  const logText = logs.join("\n");
  const statusText = buildCombatStatus(state);
  await sendCombatMessage(lenwy, state, `${logText}\n\n${statusText}`);

  return true;
}

function getCritChanceText(luck) {
  return Math.min(Math.floor(luck / 10), 50);
}

// -- Start hunt -------------------------------------------

export async function startHunt(lenwy, replyJid, playerJid, player) {
  const lang = getLanguage(getPlayerLanguage(player));
  
  if (!canDoAction(player.currentLocation, "hunt")) {
    await lenwy.sendMessage(replyJid, {
      text: getText(lang, "hunt.notHere"),
    });
    return;
  }

  if (combatSessions.has(playerJid)) {
    await lenwy.sendMessage(replyJid, {
      text: `✨ *You are already in combat!*\n\nType *attack*, *defend*, *skill [1/2/3]*, *run*, or *status*.`,
    });
    return;
  }

  const enemy = getRandomEnemy(player.currentLocation);
  if (!enemy) {
    await lenwy.sendMessage(replyJid, {
      text: `✨ *No enemies found here. Try a different location.*`,
    });
    return;
  }

  const state = initCombatState(playerJid, replyJid, player, enemy, "hunt");
  combatSessions.set(playerJid, state);
  
  console.log(`[HUNT DEBUG] Combat session created for ${playerJid}`);
  console.log(`[HUNT DEBUG] Session keys after set:`, Array.from(combatSessions.keys()));
  console.log(`[HUNT DEBUG] Session exists:`, combatSessions.has(playerJid));

  const sent = await lenwy.sendMessage(replyJid, {
    text:
      `⚔️ *A wild ${enemy.name} appears!*\n\n` +
      `${enemy.emoji || "👹"} *${enemy.name}*\n` +
      `❤️ HP: ${enemy.stats.hp}\n` +
      `⭐ Tier: ${enemy.tier}\n\n` +
      `${buildCombatStatus(state)}`,
  });
  state.messageKey = sent?.key;
}

// -- Command export ---------------------------------------

export const info = {
  name: "Hunt",
  menu: ["hunt"],
  case: ["hunt"],
  description: "Hunt enemies in your current location.",
  hidden: false,
  owner: false,
  premium: false,
  group: false,
  private: false,
  admin: false,
  botAdmin: false,
  allowPrivate: true,
};

export default async function handler(leni) {
  const { lenwy, replyJid, normalizedSender, LenwyText } = leni;

  const botJid = lenwy.user?.id?.split(":")[0] + "@s.whatsapp.net";
  if (normalizedSender === botJid) return;

  const players = loadPlayers();
  const player = players[normalizedSender];

  if (!player) {
    return LenwyText(`✨ *You are not registered yet!*\n\nType *register <your name>* to start.`);
  }

  await startHunt(lenwy, replyJid, normalizedSender, player);
}

