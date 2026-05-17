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
import { initCombatState } from "../../database/rpg/combat.js";

const playersPath = path.join(process.cwd(), "WhatsApp", "database", "rpg", "players.json");

// Active dungeon sessions (in-memory)
// Structure: { partyId: { dungeon, floor, combat, rewards, started } }
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

function generateLoot(tier) {
  const loot = {
    equipment: [],
    items: [],
    gold: 0,
  };

  // Gold: 5000-10000
  loot.gold = Math.floor(Math.random() * 5001) + 5000;

  // 3 equipment items
  for (let i = 0; i < 3; i++) {
    const rarity = rollRarity();
    loot.equipment.push({
      type: Math.random() < 0.5 ? "weapon" : "armor",
      rarity,
      tier,
      id: `${tier}_${rarity}_${Date.now()}_${i}`,
    });
  }

  // 2 random items
  const itemPool = ["health_potion", "mana_potion", "elixir", "phoenix_down", "smoke_grenade"];
  for (let i = 0; i < 2; i++) {
    const item = itemPool[Math.floor(Math.random() * itemPool.length)];
    loot.items.push({ id: item, qty: Math.floor(Math.random() * 3) + 1 });
  }

  return loot;
}

function rollRarity() {
  const roll = Math.random() * 100;
  if (roll < 0.01) return "legendary";  // 0.01%
  if (roll < 5.01) return "epic";       // 5%
  if (roll < 45.01) return "rare";      // 40%
  if (roll < 75.01) return "uncommon";  // 30%
  return "common";                       // 24.99%
}

// ══════════════════════════════════════════════════════════
// DUNGEON COMMANDS
// ══════════════════════════════════════════════════════════

export async function handleDungeonCommand(lenwy, m, args) {
  const playerJid = m.key?.participant || m.key?.remoteJid || m.sender;
  const normalizedJid = playerJid.split("@")[0].split(":")[0] + "@s.whatsapp.net";
  const replyJid = m.key.remoteJid;
  const players = loadPlayers();
  const player = players[normalizedJid];

  if (!player) {
    const prefix = globalThis.noprefix ? "" : "!";
    return await lenwy.sendMessage(replyJid, {
      text: `❌ You need to register first! Use *${prefix}register* to start your adventure.`,
    });
  }

  const subCommand = args[0]?.toLowerCase();

  // No subcommand - show dungeon info
  if (!subCommand) {
    return await showDungeonInfo(lenwy, replyJid, player);
  }

  // Subcommands
  switch (subCommand) {
    case "start":
      return await startDungeon(lenwy, m, player, players);
    case "info":
      return await showDungeonInfo(lenwy, replyJid, player);
    default:
      return await lenwy.sendMessage(replyJid, {
        text: 
          `❌ Unknown dungeon command!\n\n` +
          `*Available commands:*\n` +
          `• *dungeon* - Show dungeon info\n` +
          `• *dungeon start* - Enter dungeon (leader only)\n` +
          `• *dungeon info* - Show dungeon details`,
      });
  }
}

async function showDungeonInfo(lenwy, replyJid, player) {
  // Check daily reset
  checkDailyReset(player);
  
  const runsLeft = 2 - (player.dungeonRuns || 0);
  const location = player.currentLocation;

  const dungeonLocations = {
    "forgotten_crypt_entrance": "🏚️ Forgotten Crypt (Easy) - Lv.10+",
    "volcanic_rift_gate": "🌋 Volcanic Rift (Normal) - Lv.20+",
    "frozen_abyss_portal": "❄️ Frozen Abyss (Hard) - Lv.30+",
  };

  const availableDungeon = dungeonLocations[location];

  const message = 
    `🏰 *Dungeon System*\n\n` +
    `📅 Daily Runs: ${runsLeft}/2 remaining\n` +
    `📍 Current Location: ${player.currentLocation}\n\n` +
    (availableDungeon 
      ? `✅ *Available Dungeon:*\n${availableDungeon}\n\n` +
        `🎯 *Dungeon Features:*\n` +
        `• 20 floors to conquer\n` +
        `• Mini-bosses every 5 floors\n` +
        `• Final boss at floor 20\n` +
        `• Party size: 1-5 players\n` +
        `• Rewards: Equipment, items, gold\n` +
        `• 20% HP/Mana heal between floors\n\n` +
        `⚠️ *Rules:*\n` +
        `• No rewards if you die or surrender\n` +
        `• Only get rewards after killing final boss\n` +
        `• Everyone gets the same loot\n` +
        `• If you run, you leave the party\n\n` +
        `💡 *Commands:*\n` +
        `• *party create* - Create a party\n` +
        `• *party invite @user* - Invite players\n` +
        `• *dungeon start* - Enter dungeon (leader only)`
      : `❌ *No dungeon available here!*\n\n` +
        `Travel to a dungeon entrance:\n` +
        `• Forgotten Crypt Entrance (Easy)\n` +
        `• Volcanic Rift Gate (Normal)\n` +
        `• Frozen Abyss Portal (Hard)`
    );

  return await lenwy.sendMessage(replyJid, { text: message });
}

async function startDungeon(lenwy, m, player, players) {
  const playerJid = m.key?.participant || m.key?.remoteJid || m.sender;
  const normalizedJid = playerJid.split("@")[0].split(":")[0] + "@s.whatsapp.net";
  const replyJid = m.key.remoteJid;

  // Check daily reset
  checkDailyReset(player);

  // Check daily runs
  if ((player.dungeonRuns || 0) >= 2) {
    return await lenwy.sendMessage(replyJid, {
      text: "❌ You've used all your dungeon runs today! Resets at midnight.",
    });
  }

  // Check if at dungeon location
  const dungeon = getDungeonByLocation(player.currentLocation);
  if (!dungeon) {
    return await lenwy.sendMessage(replyJid, {
      text: "❌ You must be at a dungeon entrance to start!\n\nTravel to: Forgotten Crypt Entrance, Volcanic Rift Gate, or Frozen Abyss Portal",
    });
  }

  // Check party
  const party = getPlayerParty(playerJid);
  if (!party) {
    return await lenwy.sendMessage(replyJid, {
      text: "❌ You need a party to enter the dungeon!\n\nCreate one with: *party create*\n\nYou can enter solo or invite up to 4 others.",
    });
  }

  // Check if leader
  if (party.leader !== playerJid) {
    return await lenwy.sendMessage(replyJid, {
      text: "❌ Only the party leader can start the dungeon!",
    });
  }

  // Check if party already in dungeon
  if (party.inDungeon) {
    return await lenwy.sendMessage(replyJid, {
      text: "❌ Your party is already in a dungeon!",
    });
  }

  // Check all party members' daily runs
  for (const memberJid of party.members) {
    const member = players[memberJid];
    if (!member) continue;
    
    checkDailyReset(member);
    
    if ((member.dungeonRuns || 0) >= 2) {
      const memberName = member.name || "A party member";
      return await lenwy.sendMessage(replyJid, {
        text: `❌ ${memberName} has no dungeon runs left today!`,
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
    partyId: party.id,
    dungeonId: dungeon.id,
    tier: dungeon.tier,
    floor: 1,
    combat: null,
    rewards: null,
    started: Date.now(),
  };

  dungeonSessions.set(party.id, session);

  // Start floor 1
  await startFloor(lenwy, replyJid, party, session, dungeon, players);
}

async function startFloor(lenwy, replyJid, party, session, dungeon, players) {
  const floor = session.floor;
  const floorData = dungeon.getFloorData(floor);

  // Heal party members 20% between floors (except floor 1)
  if (floor > 1) {
    for (const memberJid of party.members) {
      const member = players[memberJid];
      if (member) {
        const hpHeal = Math.floor(member.stats.maxHp * 0.2);
        const manaHeal = Math.floor(member.stats.maxMana * 0.2);
        member.stats.hp = Math.min(member.stats.hp + hpHeal, member.stats.maxHp);
        member.stats.mana = Math.min(member.stats.mana + manaHeal, member.stats.maxMana);
      }
    }
    savePlayers(players);

    // Show transition message
    await lenwy.sendMessage(replyJid, {
      text: 
        `🚪 *Moving to Floor ${floor}...*\n\n` +
        `📍 ${floorData.theme}\n` +
        `💚 Party healed 20% HP/Mana\n\n` +
        `⚔️ Prepare for battle!`,
    });

    await new Promise(resolve => setTimeout(resolve, 2000));
  }

  // Get enemy or boss
  const enemy = floorData.isBoss ? floorData.boss : floorData.enemy;

  if (!enemy) {
    return await lenwy.sendMessage(replyJid, {
      text: `❌ Error: No enemy found for floor ${floor}!`,
    });
  }

  // Initialize combat for first party member (leader)
  const leaderJid = party.leader;
  const leader = players[leaderJid];

  const combatState = initCombatState(leaderJid, replyJid, leader, enemy, "dungeon");
  combatState.party = party;
  combatState.partyMembers = party.members.map(jid => {
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
  });
  combatState.currentTurn = 0; // Index in party.members array

  session.combat = combatState;

  // Show floor intro
  const floorType = floorData.isBoss ? "⚠️ *BOSS FLOOR*" : "⚔️ *Combat Floor*";
  const message = 
    `🏰 *${dungeon.name}* - Floor ${floor}/20\n` +
    `📍 ${floorData.theme}\n\n` +
    `${floorType}\n` +
    `${enemy.emoji} *${enemy.name}*\n` +
    `❤️ HP: ${enemy.stats.hp}\n` +
    `💧 Mana: ${enemy.stats.mana || 0}\n\n` +
    `👥 *Party:*\n` +
    party.members.map(jid => {
      const p = players[jid];
      return `• ${p.name} (Lv.${p.level}) - HP: ${p.stats.hp}/${p.stats.maxHp}`;
    }).join("\n") +
    `\n\n` +
    `💡 *${leader.name}'s turn!*\n` +
    `Type: attack / defend / skill [1/2/3] / item / run`;

  await lenwy.sendMessage(replyJid, { text: message });
}

// Export for use in combat handler
export async function handleDungeonCombat(lenwy, m, input) {
  // This will be called from the main combat handler
  // For now, return false to indicate not handled
  return false;
}

export default {
  handleDungeonCommand,
  handleDungeonCombat,
  dungeonSessions,
};
