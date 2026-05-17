
/*
  RPG PVP Combat Handler
  Base : Lenwy SCM — RPG Extension

  Turn-based PVP combat system:
  - 30 second turn timer
  - Same mechanics as hunt (attack, defend, skill, item)
  - Winner gets 10% of loser's gold
  - Winner has 20% chance to get 1-5 random items from loser
*/

import fs from "fs";
import path from "path";
import { getItemByName, negativeEffects } from "../../database/rpg/items.js";
import { trackPvPWin, trackGoldEarned } from "../../database/rpg/questTracker.js";
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
  applyPassive,
  getEffectiveAttack,
  rollCrit,
  DEFEND_SP_GAIN,
  MAX_SP,
} from "../../database/rpg/combat.js";
import { combatSessions } from "../../database/rpg/sessionManager.js";
import { claimBounty, hasBounty } from "../../database/rpg/bountySystem.js";
import { addReputation, reputationChanges, isEvilReputation } from "../../database/rpg/reputation.js";
import { getLanguage, getText, getPlayerLanguage } from "../../database/rpg/languages.js";

const playersPath = path.join(process.cwd(), "WhatsApp", "database", "rpg", "players.json");

// PVP turn timeout (30 seconds)
const PVP_TURN_TIMEOUT = 30000;

// ── Helpers ──────────────────────────────────────────────

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

function removeFromInventory(player, itemId, qty = 1) {
  const existing = player.inventory.find((i) => i.id === itemId);
  if (!existing) return false;
  existing.qty -= qty;
  if (existing.qty <= 0) {
    player.inventory = player.inventory.filter((i) => i.id !== itemId);
  }
  return true;
}

function viewerLang(jid) {
  const players = loadPlayers();
  const p = players[jid];
  return getLanguage(getPlayerLanguage(p));
}

function logLang(state) {
  return getLanguage(state?.logLangCode || "en");
}

// ── Send/edit combat message ─────────────────────────────

async function sendCombatMessage(lenwy, state, text) {
  if (state.messageKey) {
    await lenwy.sendMessage(state.replyJid, { text, edit: state.messageKey });
  } else {
    const sent = await lenwy.sendMessage(state.replyJid, { text });
    state.messageKey = sent?.key;
  }
}

// ── Send personalized DM to both players ──────────────────

async function sendDMToBothPlayers(lenwy, state, player1Text, player2Text) {
  // Send new messages to both players (no editing)
  await lenwy.sendMessage(state.playerJid, { text: player1Text });
  await lenwy.sendMessage(state.enemyJid, { text: player2Text });
}

// ── Build PVP status ─────────────────────────────────────

function buildPvPStatus(state, perspective = "player1", lang) {
  const L = lang || logLang(state);
  const isPlayer1View = perspective === "player1";

  const you = isPlayer1View ? state.player : state.enemy;
  const opponent = isPlayer1View ? state.enemy : state.player;

  const youHpBar = buildBar(you.hp, you.maxHp, 8);
  const oppHpBar = buildBar(opponent.hp, opponent.maxHp, 8);
  const youSpBar = you.sp > 0 ? ` 🛡️${you.sp}` : "";
  const oppSpBar = opponent.sp > 0 ? ` 🛡️${opponent.sp}` : "";

  const youStatus = isStunned(you) ? getText(L, "pvpCmd.stunned") : isSilenced(you) ? getText(L, "pvpCmd.silenced") : "";
  const oppStatus = isStunned(opponent)
    ? getText(L, "pvpCmd.stunned")
    : isSilenced(opponent)
      ? getText(L, "pvpCmd.silenced")
      : "";

  const isYourTurn =
    (state.turn === "player" && isPlayer1View) ||
    (state.turn === "enemy" && !isPlayer1View);
  const turnText = isYourTurn
    ? getText(L, "pvpCmd.turnYour")
    : getText(L, "pvpCmd.turnOpponent", { name: opponent.name });
  const timeLeft = state.turnTimeout ? Math.ceil((state.turnTimeout - Date.now()) / 1000) : 30;

  const skillSlots = (you.skills || [])
    .map((s, i) => {
      if (!s || !s.id) {
        return getText(L, "pvpCmd.skillEmptySlot", { i: String(i + 1) });
      }
      const cd = s.cooldownRemaining > 0 ? ` ⏳${s.cooldownRemaining}` : "";
      return `[${i + 1}] ${s.name}${cd}`;
    })
    .join("  ");

  let weaponSkillSlot = "";
  let fourSlash = "";
  if (you.weaponSkill) {
    const ws = you.weaponSkill;
    const cd = ws.cooldownRemaining > 0 ? ` ⏳${ws.cooldownRemaining}` : "";
    weaponSkillSlot = getText(L, "pvpCmd.weaponSlot", { name: ws.name, cd });
    fourSlash = "/4";
  }

  return (
    getText(L, "pvpCmd.roundTitle", { round: String(state.round) }) +
    getText(L, "pvpCmd.youLine", { name: you.name, st: youStatus }) +
    getText(L, "pvpCmd.hpBarLine", {
      bar: youHpBar,
      hp: String(you.hp),
      maxHp: String(you.maxHp),
      sp: youSpBar,
    }) +
    getText(L, "pvpCmd.manaLine", {
      mana: String(you.mana),
      maxMana: String(you.maxMana),
    }) +
    getText(L, "pvpCmd.oppNamed", { name: opponent.name, st: oppStatus }) +
    getText(L, "pvpCmd.hpBarLine", {
      bar: oppHpBar,
      hp: String(opponent.hp),
      maxHp: String(opponent.maxHp),
      sp: oppSpBar,
    }) +
    "\n" +
    getText(L, "pvpCmd.skillsBlock", {
      skills: `${skillSlots}${weaponSkillSlot}`,
    }) +
    getText(L, "pvpCmd.turnLine", {
      turnLabel: turnText,
      secs: String(timeLeft),
    }) +
    getText(L, "pvpCmd.commandsLine", { four: fourSlash })
  );
}

function buildBar(current, max, size = 8) {
  const filled = Math.round((current / max) * size);
  const empty = size - filled;
  return `[${"■".repeat(Math.max(0, filled))}${"□".repeat(Math.max(0, empty))}]`;
}

// ── Handle PVP victory ───────────────────────────────────

async function handlePvPVictory(lenwy, state) {
  const players = loadPlayers();
  const winner = players[state.playerJid];
  const loser = players[state.enemyJid];
  
  if (!winner || !loser) return;

  // Calculate gold reward (10% of loser's gold)
  let goldStolen = Math.floor(loser.gold * 0.10);
  
  // Check if loser is evil and this was an ambush - take 50% instead
  if (state.isAmbush && isEvilReputation(loser.reputation || 0)) {
    goldStolen = Math.floor(loser.gold * 0.50);
  }
  
  // Check if loser has bounty
  let bountyGold = 0;
  if (hasBounty(state.enemyJid)) {
    bountyGold = claimBounty(state.enemyJid, state.playerJid);
    addReputation(winner, reputationChanges.killBountiedPlayer, "Killed bountied player");
  }
  
  // Check if this was an ambush
  if (state.isAmbush) {
    addReputation(winner, reputationChanges.ambushPlayer, "Ambushed player");
  }
  
  const totalGold = goldStolen + bountyGold;
  winner.gold = (winner.gold || 0) + totalGold;
  loser.gold = Math.max(0, loser.gold - goldStolen);

  // 20% chance to steal 1-5 random items from loser's bag (non-equipped)
  // If loser is evil and ambushed, steal 5 items guaranteed
  const stolenItems = [];
  let itemsToSteal = 0;
  let stealChance = 0.20;
  
  if (state.isAmbush && isEvilReputation(loser.reputation || 0)) {
    itemsToSteal = 5;
    stealChance = 1.0; // 100% chance
  } else {
    itemsToSteal = Math.floor(Math.random() * 5) + 1; // 1-5 items
  }
  
  if (Math.random() < stealChance) {
    // Get non-equipped items
    const availableItems = loser.inventory.filter((item) => {
      const itemData = getItemByName(item.id);
      return itemData && itemData.category !== "weapon" && itemData.category !== "armor";
    });

    if (availableItems.length > 0) {
      for (let i = 0; i < itemsToSteal && availableItems.length > 0; i++) {
        const randomIndex = Math.floor(Math.random() * availableItems.length);
        const stolenItem = availableItems.splice(randomIndex, 1)[0];
        
        const qtyToSteal = Math.min(stolenItem.qty, Math.floor(Math.random() * 3) + 1); // 1-3 qty
        if (removeFromInventory(loser, stolenItem.id, qtyToSteal)) {
          addToInventory(winner, stolenItem.id, qtyToSteal);
          stolenItems.push({ id: stolenItem.id, qty: qtyToSteal });
        }
      }
    }
  }

  // Sync HP/mana back
  winner.stats.hp = state.player.hp;
  winner.stats.mana = state.player.mana;
  loser.stats.hp = 1; // Loser respawns with 1 HP
  loser.stats.mana = loser.stats.maxMana;
  loser.currentLocation = "starter_village"; // Respawn at starter village

  // Update stats
  winner.stats_tracker.totalKills = (winner.stats_tracker.totalKills || 0) + 1;
  winner.stats_tracker.totalGoldEarned = (winner.stats_tracker.totalGoldEarned || 0) + goldStolen;
  loser.stats_tracker.totalDeaths = (loser.stats_tracker.totalDeaths || 0) + 1;

  winner.lastActive = new Date().toISOString();
  loser.lastActive = new Date().toISOString();
  
  players[state.playerJid] = winner;
  players[state.enemyJid] = loser;
  savePlayers(players);

  // Track quest progress for PVP win and gold earned
  trackPvPWin(state.playerJid, 1);
  trackGoldEarned(state.playerJid, goldStolen);

  const langW = viewerLang(state.playerJid);
  const langL = viewerLang(state.enemyJid);

  const itemLines = (items, langObj) =>
    items.map((it) => getText(langObj, "pvpCmd.itemLine", { id: it.id, qty: String(it.qty) })).join("\n");

  const stolenWinnerExtra =
    (stolenItems.length > 0
      ? `${getText(langW, "pvpCmd.itemsStolenHeader")}\n${itemLines(stolenItems, langW)}`
      : "") +
    (bountyGold > 0 ? getText(langW, "pvpCmd.bountyClaimed", { gold: String(bountyGold) }) : "") +
    (state.isAmbush && isEvilReputation(loser.reputation || 0)
      ? getText(langW, "pvpCmd.evilPenaltyNote")
      : "");

  await lenwy.sendMessage(state.playerJid, {
    text:
      getText(langW, "pvpCmd.victoryTitle") +
      getText(langW, "pvpCmd.victoryBody", { name: loser.name }) +
      getText(langW, "pvpCmd.victoryGoldLine", {
        gold: String(goldStolen),
        extra: stolenWinnerExtra ? `\n${stolenWinnerExtra}` : "",
      }) +
      "\n" +
      getText(langW, "pvpCmd.victoryTotals", {
        total: String(totalGold),
        hp: String(state.player.hp),
        maxHp: String(state.player.maxHp),
        mana: String(state.player.mana),
        maxMana: String(state.player.maxMana),
      }),
  });

  const lostExtras =
    stolenItems.length > 0
      ? `${getText(langL, "pvpCmd.itemsLostHeader")}\n${itemLines(stolenItems, langL)}`
      : "";

  await lenwy.sendMessage(state.enemyJid, {
    text:
      getText(langL, "pvpCmd.defeatedTitle") +
      getText(langL, "pvpCmd.defeatedBody", { winner: winner.name }) +
      getText(langL, "pvpCmd.defeatedGoldLost", {
        gold: String(goldStolen),
        itemsLost: lostExtras ? `\n${lostExtras}` : "",
      }) +
      "\n" +
      getText(langL, "pvpCmd.respawnHint"),
  });

  const langG = viewerLang(state.playerJid);
  const itemsGrpNote =
    stolenItems.length > 0
      ? getText(langG, "pvpCmd.itemsStolenShort", { n: String(stolenItems.length) })
      : "";

  if (state.replyJid !== state.playerJid && state.replyJid !== state.enemyJid) {
    await lenwy.sendMessage(state.replyJid, {
      text:
        getText(langG, "pvpCmd.battleEnded") +
        getText(langG, "pvpCmd.battleWinner", { winner: winner.name, loser: loser.name }) +
        getText(langG, "pvpCmd.battleGoldStolen", {
          gold: String(goldStolen),
          itemsNote: itemsGrpNote || "",
        }),
    });
  }
}

// ── Handle PVP defeat ────────────────────────────────────

async function handlePvPDefeat(lenwy, state) {
  const players = loadPlayers();
  const winner = players[state.enemyJid];
  const loser = players[state.playerJid];
  
  if (!winner || !loser) return;

  // Calculate gold reward (10% of loser's gold)
  const goldStolen = Math.floor(loser.gold * 0.10);
  winner.gold = (winner.gold || 0) + goldStolen;
  loser.gold = Math.max(0, loser.gold - goldStolen);

  // 20% chance to steal 1-5 random items
  const stolenItems = [];
  if (Math.random() < 0.20) {
    const availableItems = loser.inventory.filter((item) => {
      const itemData = getItemByName(item.id);
      return itemData && itemData.category !== "weapon" && itemData.category !== "armor";
    });

    if (availableItems.length > 0) {
      const numToSteal = Math.floor(Math.random() * 5) + 1;
      for (let i = 0; i < numToSteal && availableItems.length > 0; i++) {
        const randomIndex = Math.floor(Math.random() * availableItems.length);
        const stolenItem = availableItems.splice(randomIndex, 1)[0];
        
        const qtyToSteal = Math.min(stolenItem.qty, Math.floor(Math.random() * 3) + 1);
        if (removeFromInventory(loser, stolenItem.id, qtyToSteal)) {
          addToInventory(winner, stolenItem.id, qtyToSteal);
          stolenItems.push({ id: stolenItem.id, qty: qtyToSteal });
        }
      }
    }
  }

  // Sync HP/mana
  winner.stats.hp = state.enemy.hp;
  winner.stats.mana = state.enemy.mana;
  loser.stats.hp = 1;
  loser.stats.mana = loser.stats.maxMana;
  loser.currentLocation = "starter_village";

  // Update stats
  winner.stats_tracker.totalKills = (winner.stats_tracker.totalKills || 0) + 1;
  winner.stats_tracker.totalGoldEarned = (winner.stats_tracker.totalGoldEarned || 0) + goldStolen;
  loser.stats_tracker.totalDeaths = (loser.stats_tracker.totalDeaths || 0) + 1;

  winner.lastActive = new Date().toISOString();
  loser.lastActive = new Date().toISOString();
  
  players[state.playerJid] = loser;
  players[state.enemyJid] = winner;
  savePlayers(players);

  const langWinner = viewerLang(state.enemyJid);
  const langLoser = viewerLang(state.playerJid);

  const itemLines = (items, langObj) =>
    items.map((it) => getText(langObj, "pvpCmd.itemLine", { id: it.id, qty: String(it.qty) })).join("\n");

  const lostExtras =
    stolenItems.length > 0
      ? `${getText(langLoser, "pvpCmd.itemsLostHeader")}\n${itemLines(stolenItems, langLoser)}`
      : "";

  await lenwy.sendMessage(state.playerJid, {
    text:
      getText(langLoser, "pvpCmd.defeatedTitle") +
      getText(langLoser, "pvpCmd.defeatedBody", { winner: winner.name }) +
      getText(langLoser, "pvpCmd.defeatedGoldLost", {
        gold: String(goldStolen),
        itemsLost: lostExtras ? `\n${lostExtras}` : "",
      }) +
      "\n" +
      getText(langLoser, "pvpCmd.respawnHint"),
  });

  const wonExtras =
    stolenItems.length > 0
      ? `${getText(langWinner, "pvpCmd.itemsStolenHeader")}\n${itemLines(stolenItems, langWinner)}`
      : "";

  await lenwy.sendMessage(state.enemyJid, {
    text:
      getText(langWinner, "pvpCmd.victoryTitle") +
      getText(langWinner, "pvpCmd.victoryBody", { name: loser.name }) +
      getText(langWinner, "pvpCmd.victoryGoldLine", {
        gold: String(goldStolen),
        extra: wonExtras ? `\n${wonExtras}` : "",
      }) +
      "\n" +
      getText(langWinner, "pvpCmd.victoryTotals", {
        total: String(goldStolen),
        hp: String(state.enemy.hp),
        maxHp: String(state.enemy.maxHp),
        mana: String(state.enemy.mana),
        maxMana: String(state.enemy.maxMana),
      }),
  });

  const langG = viewerLang(state.enemyJid);
  const itemsGrpNote =
    stolenItems.length > 0
      ? getText(langG, "pvpCmd.itemsStolenShort", { n: String(stolenItems.length) })
      : "";

  if (state.replyJid !== state.playerJid && state.replyJid !== state.enemyJid) {
    await lenwy.sendMessage(state.replyJid, {
      text:
        getText(langG, "pvpCmd.battleEnded") +
        getText(langG, "pvpCmd.battleWinner", { winner: winner.name, loser: loser.name }) +
        getText(langG, "pvpCmd.battleGoldStolen", {
          gold: String(goldStolen),
          itemsNote: itemsGrpNote || "",
        }),
    });
  }
}

// ── Opponent turn (AI or timeout) ────────────────────────

async function doOpponentTurn(lenwy, state) {
  const L = logLang(state);
  const opponent = state.enemy;
  const player = state.player;
  const logs = [];

  // Natural mana regeneration
  const manaRegen = Math.floor(opponent.maxMana * 0.05);
  if (manaRegen > 0 && opponent.mana < opponent.maxMana) {
    const actualRegen = Math.min(manaRegen, opponent.maxMana - opponent.mana);
    opponent.mana += actualRegen;
  }

  // Tick passives
  const passiveLogs = applyPassive(opponent);
  logs.push(...passiveLogs);

  // Tick status effects
  const statusLogs = tickStatusEffects(opponent);
  logs.push(...statusLogs);

  // Tick cooldowns
  tickCooldowns(opponent);

  // Check if opponent died from status effects
  if (opponent.hp <= 0) {
    state.isOver = true;
    state.winner = "player";
    return logs;
  }

  // Tick stun
  if (isStunned(opponent)) {
    logs.push(getText(L, "pvpCmd.logStunnedSkip", { name: opponent.name }));
    tickStun(opponent);
    return logs;
  }

  const rand = Math.random();

  if (rand < 0.20 && opponent.sp < MAX_SP) {
    opponent.sp = Math.min(opponent.sp + DEFEND_SP_GAIN, MAX_SP);
    logs.push(getText(L, "pvpCmd.logDefendSp", { name: opponent.name, sp: String(opponent.sp) }));
    return logs;
  }

  if (rand < 0.50 && opponent.skills && opponent.skills.length > 0) {
    const availableSkills = opponent.skills.filter((s, i) => {
      if (!s || !s.id) return false;
      const cd = s.cooldownRemaining || 0;
      return cd === 0 && opponent.mana >= (s.manaCost || 0);
    });

    if (availableSkills.length > 0) {
      const skill = availableSkills[Math.floor(Math.random() * availableSkills.length)];

      if (skill.damageType !== "none" && rollDodge(opponent, player)) {
        logs.push(
          getText(L, "pvpCmd.logYouDodgeSkill", { name: opponent.name, skill: skill.name }),
        );
        skill.cooldownRemaining = skill.cooldown || 4;
        if (skill.manaCost) opponent.mana = Math.max(0, opponent.mana - skill.manaCost);
        return logs;
      }

      const isCrit = rollCrit(opponent.luck || 0);
      const atkValue = skill.value || getEffectiveAttack(opponent);
      const result = calcDamage(
        opponent,
        player,
        skill.damageType || "physical",
        atkValue,
        isCrit,
        true,
      );

      if (skill.damageType !== "none") {
        applyDamage(player, result.damage);
      }
      if (skill.manaCost) opponent.mana = Math.max(0, opponent.mana - skill.manaCost);
      skill.cooldownRemaining = skill.cooldown || 4;

      logs.push(getText(L, "pvpCmd.logUsesSkill", { name: opponent.name, skill: skill.name }));
      if (result.isCrit) logs.push(getText(L, "pvpCmd.logCrit"));
      if (result.spDrain > 0) {
        logs.push(getText(L, "pvpCmd.logShieldAbsorbYou", { n: String(result.spDrain) }));
        if (result.damage > 0) {
          logs.push(
            getText(L, "pvpCmd.logYouTake", {
              d: String(result.damage),
              hp: String(player.hp),
              maxHp: String(player.maxHp),
            }),
          );
        } else {
          logs.push(
            getText(L, "pvpCmd.logShieldBlocksYou", {
              hp: String(player.hp),
              maxHp: String(player.maxHp),
            }),
          );
        }
      } else {
        logs.push(
          getText(L, "pvpCmd.logYouTake", {
            d: String(result.damage),
            hp: String(player.hp),
            maxHp: String(player.maxHp),
          }),
        );
      }
      if (result.shieldBroke) logs.push(getText(L, "pvpCmd.logShieldBrokenYou"));
      if (result.shieldBreakTriggered) {
        logs.push(getText(L, "pvpCmd.logShieldBreakTrigger"));
        const stunned = applyStun(player, 1, false);
        if (stunned) logs.push(getText(L, "pvpCmd.logYouStunned1"));
      }

      const selfEffects = ["heal", "regen", "buff_atk", "buff_def", "evasion_buff", "haste", "reflect"];
      const effectTarget = selfEffects.includes(skill.effect) ? opponent : player;
      const effectResult = applyEffect(skill.effect, opponent, effectTarget, skill, result.damage);
      logs.push(...effectResult.logs);

      if (skill.damageType !== "none") {
        const reflected = checkReflect(player, opponent, result.damage);
        if (reflected > 0) {
          logs.push(getText(L, "pvpCmd.logReflectYou", { n: String(reflected) }));
        }
      }

      return logs;
    }
  }

  if (rollDodge(opponent, player)) {
    logs.push(getText(L, "pvpCmd.logYouDodgeAtk", { name: opponent.name }));
    return logs;
  }

  const isCrit = rollCrit(opponent.luck || 0);
  const atkValue = getEffectiveAttack(opponent);
  const result = calcDamage(opponent, player, "physical", atkValue, isCrit, true);

  applyDamage(player, result.damage);

  logs.push(getText(L, "pvpCmd.logAttacks", { name: opponent.name }));
  if (result.isCrit) logs.push(getText(L, "pvpCmd.logCrit"));
  if (result.spDrain > 0) {
    logs.push(getText(L, "pvpCmd.logShieldAbsorbYou", { n: String(result.spDrain) }));
    if (result.damage > 0) {
      logs.push(
        getText(L, "pvpCmd.logYouTake", {
          d: String(result.damage),
          hp: String(player.hp),
          maxHp: String(player.maxHp),
        }),
      );
    } else {
      logs.push(
        getText(L, "pvpCmd.logShieldBlocksYou", {
          hp: String(player.hp),
          maxHp: String(player.maxHp),
        }),
      );
    }
  } else {
    logs.push(
      getText(L, "pvpCmd.logYouTake", {
        d: String(result.damage),
        hp: String(player.hp),
        maxHp: String(player.maxHp),
      }),
    );
  }
  if (result.shieldBroke) logs.push(getText(L, "pvpCmd.logShieldBrokenYou"));
  if (result.shieldBreakTriggered) {
    logs.push(getText(L, "pvpCmd.logShieldBreakTriggerShort"));
    const stunned = applyStun(player, 1, false);
    if (stunned) logs.push(getText(L, "pvpCmd.logYouStunned1"));
  }

  const reflected = checkReflect(player, opponent, result.damage);
  if (reflected > 0) logs.push(getText(L, "pvpCmd.logReflectYou", { n: String(reflected) }));

  return logs;
}

// ── Handle PVP combat input ──────────────────────────────

export async function handlePvPInput(lenwy, replyJid, playerJid, input) {
  const state = combatSessions.get(playerJid);
  if (!state || state.mode !== "pvp") return false;

  const Lyn = viewerLang(playerJid);
  const Llog = logLang(state);

  // Clean up zombie sessions
  if (state.isOver) {
    combatSessions.delete(playerJid);
    combatSessions.delete(state.enemyJid);
    return false;
  }

  // Check if it's this player's turn
  const isPlayerTurn = (state.turn === "player" && playerJid === state.playerJid) ||
                       (state.turn === "enemy" && playerJid === state.enemyJid);
  
  if (!isPlayerTurn) {
    const waitName = state.turn === "player" ? state.player.name : state.enemy.name;
    await lenwy.sendMessage(replyJid, {
      text: getText(Lyn, "pvpCmd.notYourTurn", { name: waitName }),
    });
    return true;
  }

  // Clear turn timeout
  if (state.turnTimeoutId) {
    clearTimeout(state.turnTimeoutId);
    state.turnTimeoutId = null;
  }

  const parts = input.trim().toLowerCase().split(/\s+/);
  const action = parts[0];
  const arg = parts[1];

  // Determine who is acting
  const actor = state.turn === "player" ? state.player : state.enemy;
  const target = state.turn === "player" ? state.enemy : state.player;
  const actorJid = state.turn === "player" ? state.playerJid : state.enemyJid;
  const logs = [];

  // Status — no turn consumed
  if (action === "status") {
    // Send personalized status to the requesting player
    const perspective = playerJid === state.playerJid ? "player1" : "player2";
    await lenwy.sendMessage(playerJid, {
      text: buildPvPStatus(state, perspective, Lyn),
    });
    // Restart turn timeout
    startTurnTimeout(lenwy, state);
    return true;
  }

  // Check if actor is stunned
  if (isStunned(actor)) {
    logs.push(getText(Llog, "pvpCmd.logYouStunnedTurn"));
    tickStun(actor);
  } else {

    // ── ATTACK ──────────────────────────────────────────
    if (action === "attack") {
      if (rollDodge(actor, target)) {
        logs.push(getText(Llog, "pvpCmd.logTargetDodgedYou", { name: target.name }));
      } else {
        const isCrit = rollCrit(actor.luck);
        const atkValue = getEffectiveAttack(actor);
        const result = calcDamage(actor, target, "physical", atkValue, isCrit, true);

        applyDamage(target, result.damage);
        actor.sp = 0;

        logs.push(getText(Llog, "pvpCmd.logYouAttack", { name: target.name }));
        if (result.isCrit) logs.push(getText(Llog, "pvpCmd.logCritHit"));
        if (result.spDrain > 0) {
          logs.push(getText(Llog, "pvpCmd.logEnemyShieldAbsorb", { n: String(result.spDrain) }));
          if (result.damage > 0) {
            logs.push(
              getText(Llog, "pvpCmd.logDealt", {
                d: String(result.damage),
                name: target.name,
                hp: String(target.hp),
                maxHp: String(target.maxHp),
              }),
            );
          } else {
            logs.push(
              getText(Llog, "pvpCmd.logEnemyShieldBlock", {
                name: target.name,
                hp: String(target.hp),
                maxHp: String(target.maxHp),
              }),
            );
          }
        } else {
          logs.push(
            getText(Llog, "pvpCmd.logDealt", {
              d: String(result.damage),
              name: target.name,
              hp: String(target.hp),
              maxHp: String(target.maxHp),
            }),
          );
        }
        if (result.shieldBroke) logs.push(getText(Llog, "pvpCmd.logEnemyShieldBreak"));
        if (result.shieldBreakTriggered) {
          logs.push(getText(Llog, "pvpCmd.logShieldBreakTriggerShort"));
          applyStun(target, 1, false);
          logs.push(getText(Llog, "pvpCmd.logTargetStunned", { name: target.name }));
        }

        const reflected = checkReflect(target, actor, result.damage);
        if (reflected > 0) {
          logs.push(getText(Llog, "pvpCmd.logTargetReflects", { name: target.name, n: String(reflected) }));
        }
      }
      actor.lastAction = "attack";
    }

    // ── DEFEND ──────────────────────────────────────────
    else if (action === "defend") {
      const gained = Math.min(DEFEND_SP_GAIN, MAX_SP - actor.sp);
      actor.sp += gained;
      logs.push(
        getText(Llog, "pvpCmd.logYouGuard", {
          sp: String(actor.sp),
          maxSp: String(MAX_SP),
        }),
      );
      actor.lastAction = "defend";
    }

    // ── SKILL ───────────────────────────────────────────
    else if (action === "skill") {
      const slotNum = parseInt(arg) - 1;
      
      let skill = null;
      if (slotNum === 3 && actor.weaponSkill) {
        skill = actor.weaponSkill;
      } else {
        skill = actor.skills?.[slotNum];
      }

      if (!skill || !skill.id) {
        await lenwy.sendMessage(playerJid, {
          text: getText(Lyn, "pvpCmd.noSkillSlot", { slot: String(slotNum + 1) }),
        });
        startTurnTimeout(lenwy, state);
        return true;
      } else if (isSilenced(actor)) {
        await lenwy.sendMessage(playerJid, {
          text: getText(Lyn, "pvpCmd.silencedCantSkill"),
        });
        startTurnTimeout(lenwy, state);
        return true;
      } else if (skill.cooldownRemaining > 0) {
        await lenwy.sendMessage(playerJid, {
          text: getText(Lyn, "pvpCmd.skillCooldown", {
            skill: skill.name,
            n: String(skill.cooldownRemaining),
          }),
        });
        startTurnTimeout(lenwy, state);
        return true;
      } else if (actor.mana < skill.manaCost) {
        await lenwy.sendMessage(playerJid, {
          text: getText(Lyn, "pvpCmd.notEnoughMana", {
            need: String(skill.manaCost),
            have: String(actor.mana),
          }),
        });
        startTurnTimeout(lenwy, state);
        return true;
      } else {
        actor.mana -= skill.manaCost;
        skill.cooldownRemaining = skill.cooldown;
        actor.sp = 0;

        logs.push(getText(Llog, "pvpCmd.logSkillName", { skill: skill.name }));

        const selfEffects = ["heal", "regen", "buff_atk", "buff_def", "evasion_buff", "haste", "reflect"];
        const skillTarget = selfEffects.includes(skill.effect) ? actor : target;
        const isTargetingEnemy = skillTarget === target;

        let damageDealt = 0;

        if (skill.damageType !== "none" && isTargetingEnemy) {
          if (rollDodge(actor, target)) {
            logs.push(getText(Llog, "pvpCmd.logTargetDodgeSkill", { name: target.name }));
          } else {
            const isCrit = rollCrit(actor.luck);
            const dmgValue = skill.damage || skill.baseDamage || skill.value || getEffectiveAttack(actor);
            const result = calcDamage(actor, target, skill.damageType || "physical", dmgValue, isCrit, true);

            applyDamage(target, result.damage);
            damageDealt = result.damage;

            if (result.isCrit) logs.push(getText(Llog, "pvpCmd.logCritHit"));
            if (result.spDrain > 0) {
              logs.push(getText(Llog, "pvpCmd.logEnemyShieldAbsorb", { n: String(result.spDrain) }));
              if (result.damage > 0) {
                logs.push(getText(Llog, "pvpCmd.logDealt", {
                  d: String(result.damage),
                  name: target.name,
                  hp: String(target.hp),
                  maxHp: String(target.maxHp),
                }));
              } else {
                logs.push(getText(Llog, "pvpCmd.logEnemyShieldBlockSkill"));
              }
            } else {
              logs.push(
                getText(Llog, "pvpCmd.logDealt", {
                  d: String(result.damage),
                  name: target.name,
                  hp: String(target.hp),
                  maxHp: String(target.maxHp),
                }),
              );
            }
            if (result.shieldBroke) logs.push(getText(Llog, "pvpCmd.logEnemyShieldBreak"));
            if (result.shieldBreakTriggered) {
              logs.push(getText(Llog, "pvpCmd.logShieldBreakTriggerShort"));
              applyStun(target, 1, false);
              logs.push(getText(Llog, "pvpCmd.logTargetStunned", { name: target.name }));
            }

            const reflected = checkReflect(target, actor, result.damage);
            if (reflected > 0) {
              logs.push(
                getText(Llog, "pvpCmd.logTargetReflects", { name: target.name, n: String(reflected) }),
              );
            }
          }
        }

        const effectResult = applyEffect(skill.effect, actor, skillTarget, skill, damageDealt);
        logs.push(...effectResult.logs);

        if (effectResult.extraDamage > 0) {
          applyDamage(target, effectResult.extraDamage);
          logs.push(
            getText(Llog, "pvpCmd.logExecuteExtra", {
              n: String(effectResult.extraDamage),
            }),
          );
        }

        logs.push(
          getText(Llog, "pvpCmd.logHpRemain", {
            name: target.name,
            hp: String(target.hp),
            maxHp: String(target.maxHp),
          }),
        );
        actor.lastAction = "skill";
      }
    }

    // ── RUN ─────────────────────────────────────────────
    else if (action === "run") {
      // Base 20% chance + luck scaling (200 luck = 55% total)
      const luckBonus = Math.min((actor.luck / 200) * 35, 35); // Max 35% bonus from luck
      const runChance = 20 + luckBonus; // 20% base + up to 35% = 55% max
      
      if (Math.random() * 100 < runChance) {
        state.isOver = true;
        combatSessions.delete(state.playerJid);
        combatSessions.delete(state.enemyJid);
        
        // Sync HP back to database
        const players = loadPlayers();
        if (players[actorJid]) {
          players[actorJid].stats.hp = actor.hp;
          players[actorJid].stats.mana = actor.mana;
          savePlayers(players);
        }

        const otherJid = actorJid === state.playerJid ? state.enemyJid : state.playerJid;
        
        // Send to both players' DMs
        await lenwy.sendMessage(actorJid, {
          text: getText(viewerLang(actorJid), "pvpCmd.escapedYou"),
        });

        await lenwy.sendMessage(otherJid, {
          text: getText(viewerLang(otherJid), "pvpCmd.escapedOther", { name: actor.name }),
        });

        // Announce in group (only if not DM)
        if (state.replyJid !== state.playerJid && state.replyJid !== state.enemyJid) {
          const Lg = logLang(state);
          await lenwy.sendMessage(state.replyJid, {
            text: getText(Lg, "pvpCmd.battleEndedEscaped", { name: actor.name }),
          });
        }

        return true;
      } else {
        logs.push(getText(Llog, "pvpCmd.logFailEscape", { name: target.name }));
        actor.lastAction = "run_failed";
        // Switch turns - opponent gets a free turn
        state.turn = state.turn === "player" ? "enemy" : "player";
      }
    }

    // ── ITEM ────────────────────────────────────────────
    else if (action === "item") {
      if (!arg) {
        const combatItemList = actor.inventory
          .filter((i) => getItemByName(i.id)?.usableInBattle)
          .map((i) => {
            const data = getItemByName(i.id);
            return getText(Lyn, "pvpCmd.itemLine", {
              id: data?.name || i.id,
              qty: String(i.qty),
            });
          })
          .join("\n") || getText(Lyn, "pvpCmd.itemNoneCombat");

        await lenwy.sendMessage(playerJid, {
          text: getText(Lyn, "pvpCmd.itemUsage", { list: combatItemList }),
        });
        startTurnTimeout(lenwy, state);
        return true;
      }

      const itemName = parts.slice(1).join("_").toLowerCase();
      const itemData = getItemByName(itemName);

      if (!itemData || !itemData.usableInBattle) {
        await lenwy.sendMessage(playerJid, {
          text: getText(Lyn, "pvpCmd.itemCannotUse"),
        });
        startTurnTimeout(lenwy, state);
        return true;
      }

      const invItem = actor.inventory.find((i) => i.id === itemData.id);
      if (!invItem || invItem.qty <= 0) {
        await lenwy.sendMessage(playerJid, {
          text: getText(Lyn, "pvpCmd.itemDontHave", { item: itemData.name }),
        });
        startTurnTimeout(lenwy, state);
        return true;
      }

      // Consume item
      invItem.qty--;
      if (invItem.qty <= 0) {
        actor.inventory = actor.inventory.filter((i) => i.id !== itemData.id);
      }

      const battleMsg = (itemData.battleMessage || "").replace("{enemy}", target.name);
      logs.push(getText(Llog, "pvpCmd.itemUsedBanner", { name: itemData.name }));
      logs.push(battleMsg);

      // Apply item effect
      switch (itemData.effect) {
        case "heal": {
          const healed = Math.min(itemData.value, actor.maxHp - actor.hp);
          actor.hp += healed;
          logs.push(
            getText(Llog, "pvpCmd.hpOnlyLine", {
              hp: String(actor.hp),
              maxHp: String(actor.maxHp),
            }),
          );
          break;
        }
        case "mana_restore": {
          const restored = Math.min(itemData.value, actor.maxMana - actor.mana);
          actor.mana += restored;
          logs.push(
            getText(Llog, "pvpCmd.manaOnlyLine", {
              mana: String(actor.mana),
              maxMana: String(actor.maxMana),
            }),
          );
          break;
        }
        case "full_restore":
          actor.hp = actor.maxHp;
          actor.mana = actor.maxMana;
          logs.push(
            getText(Llog, "pvpCmd.hpManaLine", {
              hp: String(actor.hp),
              maxHp: String(actor.maxHp),
              mana: String(actor.mana),
              maxMana: String(actor.maxMana),
            }),
          );
          break;
        case "cleanse": {
          const before = actor.statusEffects.length;
          actor.statusEffects = actor.statusEffects.filter((ef) => !negativeEffects.has(ef.type));
          actor.stunned = 0;
          const removed = before - actor.statusEffects.length;
          logs.push(getText(Llog, "pvpCmd.cleanseRemoved", { n: String(removed) }));
          break;
        }
        case "poison":
          target.statusEffects.push({ type: "poison", value: itemData.value, duration: itemData.duration });
          break;
        case "burn":
          target.statusEffects.push({ type: "burn", value: itemData.value, duration: itemData.duration });
          break;
        case "stun":
          target.stunned = (target.stunned || 0) + itemData.duration;
          logs.push(
            getText(Llog, "pvpCmd.victimStunnedItem", {
              name: target.name,
              n: String(itemData.duration),
            }),
          );
          break;
      }

      actor.lastAction = "item";
    }

    else {
      await lenwy.sendMessage(playerJid, {
        text: getText(Lyn, "pvpCmd.unknownCommand"),
      });
      startTurnTimeout(lenwy, state);
      return true;
    }
  }

  // Check target death after action
  if (target.hp <= 0) {
    state.isOver = true;
    state.winner = state.turn;
    combatSessions.delete(state.playerJid);
    combatSessions.delete(state.enemyJid);
    
    const logText = logs.join("\n");
    const victimJid = actorJid === state.playerJid ? state.enemyJid : state.playerJid;
    const Lactor = viewerLang(actorJid);
    const Lvictim = viewerLang(victimJid);
    
    await lenwy.sendMessage(actorJid, {
      text: `${logText}${getText(Lactor, "pvpCmd.finishingStrike")}`,
    });
    
    await lenwy.sendMessage(victimJid, {
      text: `${logText}${getText(Lvictim, "pvpCmd.finishingVictim")}`,
    });
    
    if (state.turn === "player") {
      await handlePvPVictory(lenwy, state);
    } else {
      await handlePvPDefeat(lenwy, state);
    }
    return true;
  }

  // Switch turns (opponent gets free turn after failed run)
  const shouldSwitchTurn = actor.lastAction !== "run_failed";
  if (shouldSwitchTurn) {
    state.turn = state.turn === "player" ? "enemy" : "player";
  }
  state.round++;

  // Natural mana regeneration for actor (silent - no message)
  const actorManaRegen = Math.floor(actor.maxMana * 0.05);
  if (actorManaRegen > 0 && actor.mana < actor.maxMana) {
    const actualRegen = Math.min(actorManaRegen, actor.maxMana - actor.mana);
    actor.mana += actualRegen;
  }

  // Tick actor status effects
  const actorStatusLogs = tickStatusEffects(actor);
  logs.push(...actorStatusLogs);

  // Tick actor skill cooldowns
  for (const skill of (actor.skills || [])) {
    if (skill && skill.cooldownRemaining > 0) skill.cooldownRemaining--;
  }
  if (actor.weaponSkill && actor.weaponSkill.cooldownRemaining > 0) {
    actor.weaponSkill.cooldownRemaining--;
  }

  // Apply actor passive
  const actorPassiveLogs = applyPassive(actor);
  logs.push(...actorPassiveLogs);

  // Check actor death from status effects
  if (actor.hp <= 0) {
    state.isOver = true;
    state.winner = state.turn;
    combatSessions.delete(state.playerJid);
    combatSessions.delete(state.enemyJid);
    
    const logText = logs.join("\n");
    const observerJid = actorJid === state.playerJid ? state.enemyJid : state.playerJid;
    const Lactor = viewerLang(actorJid);
    const Lobs = viewerLang(observerJid);
    
    await lenwy.sendMessage(actorJid, {
      text: `${logText}${getText(Lactor, "pvpCmd.defeatedByStatusSelf")}`,
    });
    
    await lenwy.sendMessage(observerJid, {
      text: `${logText}${getText(Lobs, "pvpCmd.defeatedByStatusOther", { name: actor.name })}`,
    });
    
    if (state.turn === "enemy") {
      await handlePvPVictory(lenwy, state);
    } else {
      await handlePvPDefeat(lenwy, state);
    }
    return true;
  }

  // Combat continues
  const logText = logs.join("\n");
  const Lp1 = viewerLang(state.playerJid);
  const Lp2 = viewerLang(state.enemyJid);
  const player1Status = buildPvPStatus(state, "player1", Lp1);
  const player2Status = buildPvPStatus(state, "player2", Lp2);
  
  // Send logs and status to both players (no personalization of logs needed)
  await lenwy.sendMessage(state.playerJid, {
    text: `${logText}\n\n${getText(Lp1, "pvpCmd.divider")}\n\n${player1Status}`,
  });
  
  await lenwy.sendMessage(state.enemyJid, {
    text: `${logText}\n\n${getText(Lp2, "pvpCmd.divider")}\n\n${player2Status}`,
  });

  // Start turn timeout for next player
  startTurnTimeout(lenwy, state);

  return true;
}

// ── Turn timeout handler ─────────────────────────────────

function startTurnTimeout(lenwy, state) {
  // Clear existing timeout
  if (state.turnTimeoutId) {
    clearTimeout(state.turnTimeoutId);
  }

  // Set new timeout
  state.turnTimeout = Date.now() + PVP_TURN_TIMEOUT;
  state.turnTimeoutId = setTimeout(async () => {
    if (state.isOver) return;

    // Turn timed out - switch to other player
    const timedOutPlayer = state.turn === "player" ? state.player : state.enemy;
    const otherPlayer = state.turn === "player" ? state.enemy : state.player;
    const timedOutJid = state.turn === "player" ? state.playerJid : state.enemyJid;
    const otherJid = state.turn === "player" ? state.enemyJid : state.playerJid;

    // Switch turns
    state.turn = state.turn === "player" ? "enemy" : "player";
    state.round++;

    // Build status for both players
    const Lp1 = viewerLang(state.playerJid);
    const Lp2 = viewerLang(state.enemyJid);
    const player1Status = buildPvPStatus(state, "player1", Lp1);
    const player2Status = buildPvPStatus(state, "player2", Lp2);

    const Lto = viewerLang(timedOutJid);
    const Lother = viewerLang(otherJid);

    // Send timeout notification with updated status to timed out player
    await lenwy.sendMessage(timedOutJid, {
      text:
        getText(Lto, "pvpCmd.turnTimeoutSelf", { name: otherPlayer.name }) +
        `${getText(Lto, "pvpCmd.divider")}\n\n` +
        `${timedOutJid === state.playerJid ? player1Status : player2Status}`,
    });

    // Send notification with updated status to other player
    await lenwy.sendMessage(otherJid, {
      text:
        getText(Lother, "pvpCmd.turnTimeoutOther", { name: timedOutPlayer.name }) +
        `${getText(Lother, "pvpCmd.divider")}\n\n` +
        `${otherJid === state.playerJid ? player1Status : player2Status}`,
    });

    // Start timeout for next player
    startTurnTimeout(lenwy, state);
  }, PVP_TURN_TIMEOUT);
}

// ── Start PVP ────────────────────────────────────────────

export async function startPvP(lenwy, replyJid, player1Jid, player2Jid, player1Data, player2Data, isAmbush = false) {
  const hostLangObj = getLanguage(getPlayerLanguage(player1Data));

  // Check if either player is already in combat
  if (combatSessions.has(player1Jid) || combatSessions.has(player2Jid)) {
    await lenwy.sendMessage(replyJid, {
      text: getText(hostLangObj, "pvpCmd.alreadyInCombat"),
    });
    return;
  }

  // Create PVP state using combat engine
  const state = initCombatState(player1Jid, replyJid, player1Data, player2Data, "pvp");
  state.logLangCode = getPlayerLanguage(player1Data);
  
  // Add PVP-specific properties
  state.enemyJid = player2Jid;
  state.isAmbush = isAmbush;
  state.turnTimeout = Date.now() + PVP_TURN_TIMEOUT;
  state.turnTimeoutId = null;

  // Rename enemy to player2 for clarity
  state.enemy.name = player2Data.name;
  state.enemy.jid = player2Jid;

  // Store session for both players
  combatSessions.set(player1Jid, state);
  combatSessions.set(player2Jid, state);

  console.log(`[PVP DEBUG] Combat session created for ${player1Jid} vs ${player2Jid}`);

  const L1 = getLanguage(getPlayerLanguage(player1Data));
  const L2 = getLanguage(getPlayerLanguage(player2Data));

  // Announce in group (or DM thread): host / player1 language
  await lenwy.sendMessage(replyJid, {
    text: getText(hostLangObj, "pvpCmd.battleStartedGroup", {
      p1: player1Data.name,
      p2: player2Data.name,
      ambushLine: isAmbush ? getText(hostLangObj, "pvpCmd.ambushLineGroup") : "",
    }),
  });

  // Send personalized battle status to both players' DMs
  const player1Status = buildPvPStatus(state, "player1", L1);
  const player2Status = buildPvPStatus(state, "player2", L2);

  await lenwy.sendMessage(player1Jid, {
    text:
      getText(L1, "pvpCmd.battleStartedDm", {
        opp: player2Data.name,
        ambushLine: isAmbush ? getText(L1, "pvpCmd.ambushLineP1") : "",
      }) +
      `${getText(L1, "pvpCmd.divider")}\n\n` +
      `${player1Status}`,
  });

  await lenwy.sendMessage(player2Jid, {
    text:
      getText(L2, "pvpCmd.battleStartedDm", {
        opp: player1Data.name,
        ambushLine: isAmbush ? getText(L2, "pvpCmd.ambushLineP2") : "",
      }) +
      `${getText(L2, "pvpCmd.divider")}\n\n` +
      `${player2Status}`,
  });

  // Start turn timeout
  startTurnTimeout(lenwy, state);
}

// ── Export ───────────────────────────────────────────────

export default {
  startPvP,
  handlePvPInput,
};
