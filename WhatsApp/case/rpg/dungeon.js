/*
  RPG Command: dungeon
  Base : Lenwy SCM — RPG Extension

  Dungeon System:
  - 2 runs per day (resets at midnight)
  - Party-based (1-5 players)
  - 20 floors per dungeon
  - Mini-bosses at floors 5, 10, 15
  - Final boss at floor 20
  - Rewards only after final boss kill
*/

import fs from "fs";
import path from "path";
import { getDungeonByLocation } from "../../database/rpg/dungeons.js";
import { getPlayerParty } from "../../database/rpg/partySystem.js";
import { getEquipmentStats } from "../../database/rpg/equipmentHelper.js";
import { getLanguage, getText, getPlayerLanguage } from "../../database/rpg/languages.js";

const playersPath = path.join(process.cwd(), "WhatsApp", "database", "rpg", "players.json");

// Active dungeon sessions (in-memory)
// Structure: { partyId: { party, dungeonId, tier, floor, combat, rewards, started } }
export const dungeonSessions = new Map();

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

function checkDailyReset(player) {
  const now = new Date();
  const lastReset = player.dungeonLastReset ? new Date(player.dungeonLastReset) : null;
  
  if (!lastReset || lastReset.toDateString() !== now.toDateString()) {
    // New day - reset runs
    player.dungeonRuns = 0;
    player.dungeonLastReset = now.toISOString();
    return true;
  }
  return false;
}

// ══════════════════════════════════════════════════════════
// DUNGEON COMMANDS
// ══════════════════════════════════════════════════════════

export async function handleDungeonCommand(lenwy, m, args, context) {
  const { normalizedSender, replyJid } = context;
  const playerJid = normalizedSender;
  
  const players = loadPlayers();
  const player = players[playerJid];
  const prefix = globalThis.noprefix ? "" : "!";

  if (!player) {
    const lang = getLanguage("en");
    return await lenwy.sendMessage(replyJid, {
      text: getText(lang, "dungeon.needRegister", { prefix }),
    });
  }
  
  const lang = getLanguage(getPlayerLanguage(player));

  const subCommand = args[0]?.toLowerCase();

  // No subcommand - show dungeon info
  if (!subCommand) {
    return await showDungeonInfo(lenwy, replyJid, player, lang);
  }

  // Subcommands
  switch (subCommand) {
    case "start":
      return await startDungeon(lenwy, m, player, players, playerJid, lang);
    case "info":
      return await showDungeonInfo(lenwy, replyJid, player, lang);
    default:
      return await lenwy.sendMessage(replyJid, {
        text: getText(lang, "dungeon.unknownCommand", { prefix }),
      });
  }
}

async function showDungeonInfo(lenwy, replyJid, player, lang) {
  // Check daily reset
  checkDailyReset(player);
  
  const runsLeft = 2 - (player.dungeonRuns || 0);
  const location = player.currentLocation;

  const dungeonLocations = {
    "forgotten_crypt_entrance": getText(lang, "dungeon.locationForgottenCrypt"),
    "volcanic_rift_gate": getText(lang, "dungeon.locationVolcanicRift"),
    "frozen_abyss_portal": getText(lang, "dungeon.locationFrozenAbyss"),
  };

  const availableDungeon = dungeonLocations[location];

  const message = 
    getText(lang, "dungeon.title") + "\n\n" +
    getText(lang, "dungeon.dailyRuns", { left: runsLeft }) + "\n" +
    getText(lang, "dungeon.currentLocation", { location: player.currentLocation }) + "\n\n" +
    (availableDungeon 
      ? getText(lang, "dungeon.available") + "\n" + availableDungeon + "\n\n" +
        getText(lang, "dungeon.features") + "\n" +
        getText(lang, "dungeon.feature1") + "\n" +
        getText(lang, "dungeon.feature2") + "\n" +
        getText(lang, "dungeon.feature3") + "\n" +
        getText(lang, "dungeon.feature4") + "\n" +
        getText(lang, "dungeon.feature5") + "\n" +
        getText(lang, "dungeon.feature6") + "\n\n" +
        getText(lang, "dungeon.rules") + "\n" +
        getText(lang, "dungeon.rule1") + "\n" +
        getText(lang, "dungeon.rule2") + "\n" +
        getText(lang, "dungeon.rule3") + "\n" +
        getText(lang, "dungeon.rule4") + "\n\n" +
        getText(lang, "dungeon.commands") + "\n" +
        getText(lang, "dungeon.createParty") + "\n" +
        getText(lang, "dungeon.inviteParty") + "\n" +
        getText(lang, "dungeon.startDungeon")
      : getText(lang, "dungeon.noDungeon")
    );

  return await lenwy.sendMessage(replyJid, { text: message });
}
async function startDungeon(lenwy, m, player, players, normalizedSender, lang) {
  const playerJid = normalizedSender;
  const replyJid = m.key.remoteJid;

  // Check daily reset
  checkDailyReset(player);

  // Check daily runs
  if ((player.dungeonRuns || 0) >= 2) {
    return await lenwy.sendMessage(replyJid, {
      text: getText(lang, "dungeon.noRunsLeft"),
    });
  }

  // Check if at dungeon location
  const dungeon = getDungeonByLocation(player.currentLocation);
  if (!dungeon) {
    return await lenwy.sendMessage(replyJid, {
      text: getText(lang, "dungeon.notAtEntrance"),
    });
  }

  // Check party
  const party = getPlayerParty(playerJid);
  if (!party) {
    return await lenwy.sendMessage(replyJid, {
      text: getText(lang, "dungeon.needParty"),
    });
  }

  // Check if leader
  if (party.leader !== playerJid) {
    return await lenwy.sendMessage(replyJid, {
      text: getText(lang, "dungeon.notLeader"),
    });
  }

  // Check if party already in dungeon
  if (party.inDungeon) {
    return await lenwy.sendMessage(replyJid, {
      text: getText(lang, "dungeon.alreadyInDungeon"),
    });
  }

  // Check all party members' daily runs
  for (const memberJid of party.members) {
    const member = players[memberJid];
    if (!member) continue;
    
    checkDailyReset(member);
    
    if ((member.dungeonRuns || 0) >= 2) {
      const memberName = member.name || memberJid.split("@")[0];
      return await lenwy.sendMessage(replyJid, {
        text: getText(lang, "dungeon.memberNoRuns", { name: memberName }),
      });
    }
  }

  // Increment dungeon runs for all party members
  for (const memberJid of party.members) {
    const member = players[memberJid];
    if (member) {
      member.dungeonRuns = (member.dungeonRuns || 0) + 1;
    }
  }
  savePlayers(players);

  // Mark party as in dungeon
  party.inDungeon = true;
  party.dungeon = dungeon.id;

  // Create dungeon session
  const session = {
    party,
    partyId: party.id,
    dungeonId: dungeon.id,
    tier: dungeon.tier,
    floor: 1,
    combat: null,
    rewards: null,
    started: Date.now(),
    miniBossesKilled: 0, // Track mini-boss kills for partial rewards
  };

  dungeonSessions.set(party.id, session);

  // Start floor 1
  await startFloor(lenwy, replyJid, party, session, dungeon, players, lang);
}

export async function startFloor(lenwy, replyJid, party, session, dungeon, players, lang = null) {
  if (!lang) {
    const leader = players[party.leader] || players[party.members[0]];
    lang = getLanguage(getPlayerLanguage(leader));
  }
  const floor = session.floor;
  const floorData = dungeon.getFloorData(floor);

  // Heal party members 20% between floors (except floor 1)
  if (floor > 1) {
    for (const memberJid of party.members) {
      const member = players[memberJid];
      if (member) {
        // Get equipment stats for actual max HP/Mana
        const equipStats = getEquipmentStats(member);
        const actualMaxHp = member.stats.maxHp + (equipStats.hp || 0);
        const actualMaxMana = member.stats.maxMana + (equipStats.mana || 0);
        
        const hpHeal = Math.floor(actualMaxHp * 0.2);
        const manaHeal = Math.floor(actualMaxMana * 0.2);
        member.stats.hp = Math.min(member.stats.hp + hpHeal, actualMaxHp);
        member.stats.mana = Math.min(member.stats.mana + manaHeal, actualMaxMana);
      }
    }
    savePlayers(players);

    // Show transition message
    await lenwy.sendMessage(replyJid, {
      text:
        getText(lang, "dungeon.movingToFloor", { floor }) + "\n\n" +
        `📍 ${floorData.theme}\n` +
        getText(lang, "dungeon.partyHealed") + "\n\n" +
        getText(lang, "dungeon.prepareForBattle"),
    });

    await new Promise(resolve => setTimeout(resolve, 2000));
  }

  // Get enemy or boss
  const enemy = floorData.isBoss ? floorData.boss : floorData.enemy;

  if (!enemy) {
    return await lenwy.sendMessage(replyJid, {
      text: getText(lang, "dungeon.noEnemyFound", { floor }),
    });
  }

  // Create simplified combat state for dungeon
  const combatState = {
    player: null, // Will be set per turn
    enemy: { ...enemy, hp: enemy.stats.hp, maxHp: enemy.stats.hp, mana: enemy.stats.mana || 0, maxMana: enemy.stats.mana || 0, sp: 0, statusEffects: [], stunned: 0 },
    party,
    partyMembers: party.members.map(jid => {
      const p = players[jid];
      return {
        jid,
        name: p.name,
        hp: p.stats.hp,
        maxHp: p.stats.maxHp,
        mana: p.stats.mana,
        maxMana: p.stats.maxMana,
        alive: true,
      };
    }),
    currentTurn: 0, // Index in party.members array
    mode: "dungeon",
  };

  session.combat = combatState;

  // Show floor intro
  const floorType = floorData.isBoss ? getText(lang, "dungeon.bossFloor") : getText(lang, "dungeon.combatFloor");
  const currentPlayerJid = party.members[0];
  const currentPlayer = players[currentPlayerJid];
  const levelLabel = getText(lang, "common.level");
  const hpLabel = getText(lang, "common.hp");
  const manaLabel = getText(lang, "common.mana");
  const floorLabel = lang.code === "id" ? "Lantai" : "Floor";
  
  const message = 
    `🏰 *${dungeon.name}* - ${floorLabel} ${floor}/20\n` +
    `📍 ${floorData.theme}\n\n` +
    `${floorType}\n` +
    `${enemy.emoji} *${enemy.name}*\n` +
    `❤️ ${hpLabel}: ${enemy.stats.hp}\n` +
    `💧 ${manaLabel}: ${enemy.stats.mana || 0}\n\n` +
    `${getText(lang, "dungeon.partyHeader")}\n` +
    party.members.map(jid => {
      const p = players[jid];
      return `• ${p.name} (${levelLabel} ${p.level}) - ${hpLabel}: ${p.stats.hp}/${p.stats.maxHp}`;
    }).join("\n") +
    `\n\n` +
    getText(lang, "dungeon.playerTurn", { name: currentPlayer.name }) + "\n" +
    getText(lang, "dungeon.combatPrompt");

  await lenwy.sendMessage(replyJid, { text: message });
}

export default {
  handleDungeonCommand,
  dungeonSessions,
  startFloor,
};
