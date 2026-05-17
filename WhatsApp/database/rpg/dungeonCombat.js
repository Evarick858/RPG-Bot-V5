/*
  RPG Dungeon Combat Handler
  Base : Lenwy SCM — RPG Extension

  Handles turn-based party combat in dungeons:
  - Turn order: P1 → P2 → P3 → P4 → P5 → Enemy
  - Same commands as hunt: attack, defend, skill, item, run, status
  - Floor progression after victory
  - Reward distribution after final boss
*/

import fs from "fs";
import path from "path";
import { dungeonSessions } from "../../case/rpg/dungeon.js";
import { getDungeonById } from "../../database/rpg/dungeons.js";
import { disbandParty } from "../../database/rpg/partySystem.js";
import {
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
  rollCrit,
  MAX_SP,
  DEFEND_SP_GAIN,
} from "../../database/rpg/combat.js";
import { getItemByName, negativeEffects } from "../../database/rpg/items.js";

const playersPath = path.join(process.cwd(), "WhatsApp", "database", "rpg", "players.json");

// ══════════════════════════════════════════════════════════
// HELPER FUNCTIONS
// ══════════════════════════════════════════════════════════

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

function generateLoot(tier) {
  const loot = {
    equipment: [],
    items: [],
    gold: 0,
  };

  loot.gold = Math.floor(Math.random() * 5001) + 5000;

  for (let i = 0; i < 3; i++) {
    const rarity = rollRarity();
    loot.equipment.push({
      type: Math.random() < 0.5 ? "weapon" : "armor",
      rarity,
      tier,
      name: `${tier}_${rarity}_${Date.now()}_${i}`,
    });
  }

  const itemPool = ["health_potion", "mana_potion", "elixir", "phoenix_down", "smoke_grenade"];
  for (let i = 0; i < 2; i++) {
    const item = itemPool[Math.floor(Math.random() * itemPool.length)];
    loot.items.push({ id: item, qty: Math.floor(Math.random() * 3) + 1 });
  }

  return loot;
}

function rollRarity() {
  const roll = Math.random() * 100;
  if (roll < 0.01) return "legendary";
  if (roll < 5.01) return "epic";
  if (roll < 45.01) return "rare";
  if (roll < 75.01) return "uncommon";
  return "common";
}

// Generate partial rewards based on mini-boss kills
function generatePartialLoot(tier, miniBossesKilled) {
  const loot = {
    equipment: [],
    items: [],
    gold: 0,
  };

  if (miniBossesKilled === 1) {
    // 1st mini-boss: 1 weapon/armor up to rare, 500 gold
    loot.gold = 500;
    const rarity = rollRarityUpToRare();
    loot.equipment.push({
      type: Math.random() < 0.5 ? "weapon" : "armor",
      rarity,
      tier,
      name: `${tier}_${rarity}_${Date.now()}_partial1`,
    });
  } else if (miniBossesKilled === 2) {
    // 2nd mini-boss: 1 rare weapon/armor, 3 random items, 1000 gold
    loot.gold = 1000;
    loot.equipment.push({
      type: Math.random() < 0.5 ? "weapon" : "armor",
      rarity: "rare",
      tier,
      name: `${tier}_rare_${Date.now()}_partial2`,
    });
    const itemPool = ["health_potion", "mana_potion", "elixir", "phoenix_down", "smoke_grenade"];
    for (let i = 0; i < 3; i++) {
      const item = itemPool[Math.floor(Math.random() * itemPool.length)];
      loot.items.push({ id: item, qty: Math.floor(Math.random() * 3) + 1 });
    }
  } else if (miniBossesKilled === 3) {
    // 3rd mini-boss: 1 weapon/armor (1% epic, rest lower), 5 random items, 1500 gold
    loot.gold = 1500;
    const rarity = rollRarityUpToEpic();
    loot.equipment.push({
      type: Math.random() < 0.5 ? "weapon" : "armor",
      rarity,
      tier,
      name: `${tier}_${rarity}_${Date.now()}_partial3`,
    });
    const itemPool = ["health_potion", "mana_potion", "elixir", "phoenix_down", "smoke_grenade"];
    for (let i = 0; i < 5; i++) {
      const item = itemPool[Math.floor(Math.random() * itemPool.length)];
      loot.items.push({ id: item, qty: Math.floor(Math.random() * 3) + 1 });
    }
  }

  return loot;
}

function rollRarityUpToRare() {
  const roll = Math.random() * 100;
  if (roll < 40) return "rare";      // 40%
  if (roll < 70) return "uncommon";  // 30%
  return "common";                    // 30%
}

function rollRarityUpToEpic() {
  const roll = Math.random() * 100;
  if (roll < 1) return "epic";       // 1%
  if (roll < 41) return "rare";      // 40%
  if (roll < 71) return "uncommon";  // 30%
  return "common";                    // 29%
}

// ══════════════════════════════════════════════════════════
// DUNGEON COMBAT HANDLER
// ══════════════════════════════════════════════════════════

export async function handleDungeonCombatInput(lenwy, replyJid, playerJid, input) {
  const players = loadPlayers();
  const player = players[playerJid];

  if (!player) return false;

  // Find player's dungeon session
  let session = null;
  for (const [partyId, s] of dungeonSessions.entries()) {
    if (s.party.members.includes(playerJid)) {
      session = s;
      break;
    }
  }

  if (!session || !session.combat) return false;

  const state = session.combat;
  const party = session.party;

  // Check if it's this player's turn
  const currentPlayerJid = party.members[state.currentTurn];
  if (currentPlayerJid !== playerJid) {
    await lenwy.sendMessage(replyJid, {
      text: `⏳ It's not your turn! Wait for ${players[currentPlayerJid]?.name || "another player"}'s turn.`,
    });
    return true;
  }

  const parts = input.trim().toLowerCase().split(/\s+/);
  const action = parts[0];
  const arg = parts[1];

  const p = state.player;
  const e = state.enemy;
  const logs = [];

  // Status command
  if (action === "status") {
    await sendCombatStatus(lenwy, replyJid, session, players);
    return true;
  }

  // Check if player is stunned
  if (isStunned(p)) {
    logs.push(`😵 You are stunned! Skipping your turn...`);
    tickStun(p);
  } else {
    // Process player action
    const actionResult = await processPlayerAction(action, arg, parts, p, e, state, player, logs);
    if (actionResult === "invalid") {
      await lenwy.sendMessage(replyJid, {
        text: `❌ Unknown command!\n\nType: attack / defend / skill [1/2/3] / item / run / status`,
      });
      return true;
    }
    if (actionResult === "run") {
      // Player left dungeon
      return true;
    }
  }

  // Check if enemy died
  if (e.hp <= 0) {
    await handleFloorVictory(lenwy, replyJid, session, players, logs);
    return true;
  }

  // Move to next player's turn
  state.currentTurn = (state.currentTurn + 1) % party.members.length;

  // If back to first player, it's enemy turn
  if (state.currentTurn === 0) {
    await doEnemyTurn(lenwy, replyJid, state, logs, players);

    // Check if all players died
    const allDead = party.members.every(jid => {
      const member = players[jid];
      return !member || member.stats.hp <= 0;
    });

    if (allDead) {
      await handlePartyWipe(lenwy, replyJid, session, players);
      return true;
    }

    // Check if enemy died from status effects
    if (e.hp <= 0) {
      await handleFloorVictory(lenwy, replyJid, session, players, logs);
      return true;
    }

    // Back to first player
    state.currentTurn = 0;
  }

  // Show updated combat status
  const logText = logs.join("\n");
  await lenwy.sendMessage(replyJid, { text: logText });
  await sendCombatStatus(lenwy, replyJid, session, players);

  return true;
}

async function processPlayerAction(action, arg, parts, p, e, state, player, logs) {
  if (action === "attack") {
    if (rollDodge(p, e)) {
      logs.push(`💨 ${e.name} dodged your attack!`);
    } else {
      const isCrit = rollCrit(p.luck);
      const atkValue = getEffectiveAttack(p);
      const result = calcDamage(p, e, "physical", atkValue, isCrit);

      applyDamage(e, result.damage);
      p.sp = 0;

      logs.push(`⚔️ You attack ${e.name}!`);
      if (result.isCrit) logs.push(`💥 Critical Hit!`);
      if (result.spDrain > 0) logs.push(`🛡️ Enemy shield: -${result.spDrain} SP`);
      if (result.shieldBroke) logs.push(`💥 ENEMY SHIELD BREAK!`);
      logs.push(`💔 Dealt ${result.damage} damage! ${e.name} HP: ${e.hp}/${e.maxHp}`);

      const reflected = checkReflect(e, p, result.damage);
      if (reflected > 0) {
        logs.push(`🪞 ${e.name} reflects ${reflected} damage back!`);
        player.stats.hp = Math.max(0, player.stats.hp - reflected);
      }
    }
    return "success";
  }

  if (action === "defend") {
    const gained = Math.min(DEFEND_SP_GAIN, MAX_SP - p.sp);
    p.sp += gained;
    logs.push(`🛡️ You raise your guard! SP: ${p.sp}/${MAX_SP}`);
    return "success";
  }

  if (action === "skill") {
    const slotNum = parseInt(arg) - 1;
    let skill = null;
    
    if (slotNum === 3 && p.weaponSkill) {
      skill = p.weaponSkill;
    } else {
      skill = p.skills?.[slotNum];
    }

    if (!skill || !skill.id) {
      logs.push(`❌ No skill in slot ${slotNum + 1}.`);
    } else if (isSilenced(p)) {
      logs.push(`🤐 You are silenced! Can't use skills.`);
    } else if (skill.cooldownRemaining > 0) {
      logs.push(`⏳ ${skill.name} is on cooldown! (${skill.cooldownRemaining} turns)`);
    } else if (p.mana < skill.manaCost) {
      logs.push(`❌ Not enough mana! Need ${skill.manaCost}, have ${p.mana}.`);
    } else {
      p.mana -= skill.manaCost;
      skill.cooldownRemaining = skill.cooldown;
      p.sp = 0;

      logs.push(`✨ ${skill.name}!`);

      const selfEffects = ["heal", "regen", "buff_atk", "buff_def", "evasion_buff", "haste", "reflect"];
      const targetCombatant = selfEffects.includes(skill.effect) ? p : e;
      const isTargetingEnemy = targetCombatant === e;

      let damageDealt = 0;

      if (skill.damageType !== "none" && isTargetingEnemy) {
        if (rollDodge(p, e)) {
          logs.push(`💨 ${e.name} dodged!`);
        } else {
          const isCrit = rollCrit(p.luck);
          const dmgValue = skill.damage || skill.baseDamage || skill.value || getEffectiveAttack(p);
          const result = calcDamage(p, e, skill.damageType || "physical", dmgValue, isCrit);

          applyDamage(e, result.damage);
          damageDealt = result.damage;

          if (result.isCrit) logs.push(`💥 Critical Hit!`);
          logs.push(`💔 Dealt ${result.damage} damage!`);
        }
      }

      const effectResult = applyEffect(skill.effect, p, targetCombatant, skill, damageDealt);
      logs.push(...effectResult.logs);

      if (effectResult.extraDamage > 0) {
        applyDamage(e, effectResult.extraDamage);
        logs.push(`💀 Execute: ${effectResult.extraDamage} extra damage!`);
      }

      logs.push(`${e.name} HP: ${e.hp}/${e.maxHp}`);
    }
    return "success";
  }

  if (action === "run") {
    // Player leaves party and dungeon
    logs.push(`🏃 You fled from the dungeon!`);
    // Handle player leaving (will be implemented in handlePlayerRun)
    return "run";
  }

  if (action === "item") {
    if (!arg) {
      logs.push(`❌ Usage: item <name>\nExample: item health_potion`);
      return "success";
    }

    const itemName = parts.slice(1).join("_").toLowerCase();
    const itemData = getItemByName(itemName);

    if (!itemData || !itemData.usableInBattle) {
      logs.push(`❌ Invalid or unusable item: ${itemName}`);
      return "success";
    }

    const invItem = player.inventory.find(i => i.id === itemData.id);
    if (!invItem || invItem.qty <= 0) {
      logs.push(`❌ You don't have ${itemData.name}!`);
      return "success";
    }

    invItem.qty--;
    logs.push(`💼 Used ${itemData.name}!`);

    // Apply item effect
    switch (itemData.effect) {
      case "heal":
        const healed = Math.min(itemData.value, player.stats.maxHp - player.stats.hp);
        player.stats.hp += healed;
        logs.push(`💚 Restored ${healed} HP! HP: ${player.stats.hp}/${player.stats.maxHp}`);
        break;
      case "mana_restore":
        const restored = Math.min(itemData.value, player.stats.maxMana - player.stats.mana);
        player.stats.mana += restored;
        logs.push(`💙 Restored ${restored} mana! Mana: ${player.stats.mana}/${player.stats.maxMana}`);
        break;
      case "cleanse":
        p.statusEffects = p.statusEffects.filter(ef => !negativeEffects.has(ef.type));
        p.stunned = 0;
        logs.push(`✅ Cleansed negative effects!`);
        break;
      default:
        logs.push(`⚠️ Item effect not implemented: ${itemData.effect}`);
    }

    return "success";
  }

  return "invalid";
}

async function doEnemyTurn(lenwy, replyJid, state, logs, players) {
  const e = state.enemy;
  const party = state.party;

  logs.push("", `--- ${e.name}'s turn ---`);

  // Enemy mana regen
  const enemyManaRegen = Math.floor(e.maxMana * 0.05);
  if (enemyManaRegen > 0 && e.mana < e.maxMana) {
    e.mana = Math.min(e.mana + enemyManaRegen, e.maxMana);
  }

  // Tick passives
  const passiveLogs = applyPassive(e);
  logs.push(...passiveLogs);

  // Tick status effects
  const statusLogs = tickStatusEffects(e);
  logs.push(...statusLogs);

  tickCooldowns(e);

  if (e.hp <= 0) return;

  if (isStunned(e)) {
    logs.push(`😵 ${e.name} is stunned!`);
    tickStun(e);
    return;
  }

  // Enemy AI - target random alive player
  const alivePlayers = party.members.filter(jid => {
    const p = players[jid];
    return p && p.stats.hp > 0;
  });

  if (alivePlayers.length === 0) return;

  const targetJid = alivePlayers[Math.floor(Math.random() * alivePlayers.length)];
  const target = players[targetJid];

  const decision = enemyAI(e, state.player);

  if (decision.action === "defend") {
    e.sp = Math.min(e.sp + DEFEND_SP_GAIN, MAX_SP);
    logs.push(`🛡️ ${e.name} defends! SP: ${e.sp}`);
    return;
  }

  if (decision.action === "attack") {
    if (rollDodge(e, state.player)) {
      logs.push(`💨 ${target.name} dodged!`);
    } else {
      const isCrit = rollCrit(0);
      const atkValue = getEffectiveAttack(e);
      const result = calcDamage(e, state.player, "physical", atkValue, isCrit);

      target.stats.hp = Math.max(0, target.stats.hp - result.damage);

      logs.push(`${e.name} attacks ${target.name}!`);
      if (result.isCrit) logs.push(`💥 Critical hit!`);
      logs.push(`💔 ${target.name} takes ${result.damage} damage! HP: ${target.stats.hp}/${target.stats.maxHp}`);

      if (target.stats.hp <= 0) {
        logs.push(`💀 ${target.name} has fallen!`);
      }
    }
  }
}

async function handleFloorVictory(lenwy, replyJid, session, players, logs) {
  const dungeon = getDungeonById(session.dungeonId);
  const floor = session.floor;

  logs.push("", `✅ Floor ${floor} cleared!`);

  // Check if this was a mini-boss floor
  const miniBossFloors = [5, 10, 15];
  if (miniBossFloors.includes(floor)) {
    session.miniBossesKilled++;
    logs.push(`🏆 Mini-Boss defeated! (${session.miniBossesKilled}/3)`);
  }

  // Check if final boss
  if (floor === 20) {
    await handleFinalBossVictory(lenwy, replyJid, session, players, logs);
    return;
  }

  // Move to next floor
  session.floor++;
  session.combat = null;

  const logText = logs.join("\n");
  await lenwy.sendMessage(replyJid, { text: logText });

  // Save player HP/mana
  for (const memberJid of session.party.members) {
    const member = players[memberJid];
    if (member) {
      member.stats.hp = Math.max(1, member.stats.hp);
    }
  }
  savePlayers(players);

  // Start next floor after delay
  setTimeout(async () => {
    const { startFloor } = await import("../../case/rpg/dungeon.js");
    await startFloor(lenwy, replyJid, session.party, session, dungeon, players);
  }, 3000);
}

async function handleFinalBossVictory(lenwy, replyJid, session, players, logs) {
  const loot = generateLoot(session.tier);

  // Distribute rewards to all party members
  for (const memberJid of session.party.members) {
    const member = players[memberJid];
    if (!member) continue;

    member.gold = (member.gold || 0) + loot.gold;
    member.xp = (member.xp || 0) + 5000;

    // Add equipment and items
    for (const equip of loot.equipment) {
      member.inventory.push({ id: equip.name, qty: 1, type: equip.type, rarity: equip.rarity });
    }
    for (const item of loot.items) {
      const existing = member.inventory.find(i => i.id === item.id);
      if (existing) existing.qty += item.qty;
      else member.inventory.push(item);
    }
  }

  savePlayers(players);

  const equipList = loot.equipment.map(e => `• ${e.rarity} ${e.type}`).join("\n");
  const itemList = loot.items.map(i => `• ${i.id} x${i.qty}`).join("\n");

  const message =
    logs.join("\n") + "\n\n" +
    `🏆 *DUNGEON CLEARED!*\n\n` +
    `🎁 *Rewards (per player):*\n` +
    `💰 Gold: ${loot.gold}\n` +
    `⭐ XP: 5000\n\n` +
    `⚔️ *Equipment:*\n${equipList}\n\n` +
    `🎒 *Items:*\n${itemList}\n\n` +
    `✅ Congratulations!`;

  await lenwy.sendMessage(replyJid, { text: message });

  // Clean up
  dungeonSessions.delete(session.party.id);
  disbandParty(session.party.id);
}

async function handlePartyWipe(lenwy, replyJid, session, players) {
  const miniBossesKilled = session.miniBossesKilled;
  
  // Check if any mini-bosses were killed for partial rewards
  if (miniBossesKilled > 0) {
    const loot = generatePartialLoot(session.tier, miniBossesKilled);

    // Distribute partial rewards to all party members
    for (const memberJid of session.party.members) {
      const member = players[memberJid];
      if (!member) continue;

      member.stats.hp = 1;
      member.currentLocation = "starter_village";
      member.gold = (member.gold || 0) + loot.gold;

      // Add equipment and items
      for (const equip of loot.equipment) {
        member.inventory.push({ id: equip.name, qty: 1, type: equip.type, rarity: equip.rarity });
      }
      for (const item of loot.items) {
        const existing = member.inventory.find(i => i.id === item.id);
        if (existing) existing.qty += item.qty;
        else member.inventory.push(item);
      }
    }

    savePlayers(players);

    const equipList = loot.equipment.map(e => `• ${e.rarity} ${e.type}`).join("\n");
    const itemList = loot.items.length > 0 ? loot.items.map(i => `• ${i.id} x${i.qty}`).join("\n") : "None";

    await lenwy.sendMessage(replyJid, {
      text:
        `💀 *PARTY WIPED!*\n\n` +
        `Your party has been defeated...\n\n` +
        `🏆 *Partial Rewards (${miniBossesKilled} Mini-Boss${miniBossesKilled > 1 ? 'es' : ''} Defeated):*\n` +
        `💰 Gold: ${loot.gold}\n\n` +
        (loot.equipment.length > 0 ? `⚔️ *Equipment:*\n${equipList}\n\n` : '') +
        (loot.items.length > 0 ? `🎒 *Items:*\n${itemList}\n\n` : '') +
        `All members wake up at Starter Village with 1 HP.\n\n` +
        `Better luck next time!`,
    });
  } else {
    // No mini-bosses killed - no rewards
    for (const memberJid of session.party.members) {
      const member = players[memberJid];
      if (member) {
        member.stats.hp = 1;
        member.currentLocation = "starter_village";
      }
    }

    savePlayers(players);

    await lenwy.sendMessage(replyJid, {
      text:
        `💀 *PARTY WIPED!*\n\n` +
        `Your party has been defeated...\n\n` +
        `All members wake up at Starter Village with 1 HP.\n` +
        `No rewards obtained.\n\n` +
        `Better luck next time!`,
    });
  }

  dungeonSessions.delete(session.party.id);
  disbandParty(session.party.id);
}

async function sendCombatStatus(lenwy, replyJid, session, players) {
  const state = session.combat;
  const e = state.enemy;
  const party = session.party;
  const dungeon = getDungeonById(session.dungeonId);

  const currentPlayerJid = party.members[state.currentTurn];
  const currentPlayer = players[currentPlayerJid];

  const partyStatus = party.members.map(jid => {
    const p = players[jid];
    const isCurrent = jid === currentPlayerJid;
    const icon = isCurrent ? "▶️" : p.stats.hp > 0 ? "⚔️" : "💀";
    return `${icon} ${p.name} - HP: ${p.stats.hp}/${p.stats.maxHp}`;
  }).join("\n");

  const message =
    `🏰 *${dungeon.name}* - Floor ${session.floor}/20\n\n` +
    `${e.emoji} *${e.name}*\n` +
    `❤️ HP: ${e.hp}/${e.maxHp}\n\n` +
    `👥 *Party:*\n${partyStatus}\n\n` +
    `💡 *${currentPlayer.name}'s turn!*\n` +
    `Type: attack / defend / skill [1/2/3] / item / run`;

  await lenwy.sendMessage(replyJid, { text: message });
}

export default {
  handleDungeonCombatInput,
};
