/*
  RPG Quest Tracker
  Base : Lenwy SCM — RPG Extension

  Automatically tracks and updates quest progress
*/

import fs from "fs";
import path from "path";
import { updateQuestProgress, initPlayerQuests } from "./quests.js";

const playersPath = path.join(process.cwd(), "WhatsApp", "database", "rpg", "players.json");

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

// ── Quest Tracking Functions ─────────────────────────────

/**
 * Track combat (monster kills)
 */
export function trackCombat(playerJid, amount = 1) {
  const players = loadPlayers();
  const player = players[playerJid];
  
  if (!player) return;
  
  if (!player.quests) {
    player.quests = initPlayerQuests();
  }
  
  updateQuestProgress(player.quests, "combat", amount);
  
  players[playerJid] = player;
  savePlayers(players);
}

/**
 * Track gathering (fish/mine/chop/forage)
 */
export function trackGathering(playerJid, amount = 1) {
  const players = loadPlayers();
  const player = players[playerJid];
  
  if (!player) return;
  
  if (!player.quests) {
    player.quests = initPlayerQuests();
  }
  
  updateQuestProgress(player.quests, "gathering", amount);
  
  players[playerJid] = player;
  savePlayers(players);
}

/**
 * Track gold earned
 */
export function trackGoldEarned(playerJid, amount) {
  const players = loadPlayers();
  const player = players[playerJid];
  
  if (!player) return;
  
  if (!player.quests) {
    player.quests = initPlayerQuests();
  }
  
  updateQuestProgress(player.quests, "gold_earned", amount);
  
  players[playerJid] = player;
  savePlayers(players);
}

/**
 * Track travel
 */
export function trackTravel(playerJid, amount = 1) {
  const players = loadPlayers();
  const player = players[playerJid];
  
  if (!player) return;
  
  if (!player.quests) {
    player.quests = initPlayerQuests();
  }
  
  updateQuestProgress(player.quests, "travel", amount);
  
  players[playerJid] = player;
  savePlayers(players);
}

/**
 * Track crafting
 */
export function trackCrafting(playerJid, amount = 1) {
  const players = loadPlayers();
  const player = players[playerJid];
  
  if (!player) return;
  
  if (!player.quests) {
    player.quests = initPlayerQuests();
  }
  
  updateQuestProgress(player.quests, "crafting", amount);
  
  players[playerJid] = player;
  savePlayers(players);
}

/**
 * Track PVP wins
 */
export function trackPvPWin(playerJid, amount = 1) {
  const players = loadPlayers();
  const player = players[playerJid];
  
  if (!player) return;
  
  if (!player.quests) {
    player.quests = initPlayerQuests();
  }
  
  updateQuestProgress(player.quests, "pvp_wins", amount);
  
  players[playerJid] = player;
  savePlayers(players);
}

/**
 * Track pet levels
 */
export function trackPetLevel(playerJid, amount = 1) {
  const players = loadPlayers();
  const player = players[playerJid];
  
  if (!player) return;
  
  if (!player.quests) {
    player.quests = initPlayerQuests();
  }
  
  updateQuestProgress(player.quests, "pet_levels", amount);
  
  players[playerJid] = player;
  savePlayers(players);
}

export default {
  trackCombat,
  trackGathering,
  trackGoldEarned,
  trackTravel,
  trackCrafting,
  trackPvPWin,
  trackPetLevel
};
