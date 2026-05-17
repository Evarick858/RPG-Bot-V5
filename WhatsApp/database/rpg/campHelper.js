/*
  RPG Camp/Inn Helper
  Base : Lenwy SCM — RPG Extension

  Utility to automatically end camping/inn status when players use other commands
*/

import fs from "fs";
import path from "path";
import { campSessions } from "./sessionManager.js";

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

// ── Auto-end camping/inn when using other commands ───────

/**
 * Automatically ends camping/inn status when player uses any command
 * except camp, inn, leave, accept, decline, accepttrade, declinetrade
 * 
 * @param {string} playerJid - Player's JID
 * @param {string} command - Command being used
 * @returns {boolean} - True if camping was ended, false otherwise
 */
export function autoEndCamping(playerJid, command) {
  // Commands that should NOT end camping
  const allowedWhileCamping = [
    "camp",
    "inn", 
    "leave",
    "accept",      // Can accept PVP challenges while camping
    "decline",     // Can decline PVP challenges while camping
    "accepttrade", // Can accept trades while camping
    "declinetrade" // Can decline trades while camping
  ];

  // If command is allowed while camping, don't end it
  if (allowedWhileCamping.includes(command.toLowerCase())) {
    return false;
  }

  // Check if player is camping/resting
  const session = campSessions.get(playerJid);
  if (!session) {
    return false; // Not camping
  }

  // Clear interval if exists (for camp regeneration)
  if (session.intervalId) {
    clearInterval(session.intervalId);
  }

  // Save HP/Mana to database if it's a camp session
  if (!session.isInn && session.currentHp !== undefined) {
    const players = loadPlayers();
    const player = players[playerJid];
    
    if (player) {
      player.stats.hp = session.currentHp;
      player.stats.mana = session.currentMana;
      player.lastActive = new Date().toISOString();
      players[playerJid] = player;
      savePlayers(players);
    }
  }

  // Remove session
  campSessions.delete(playerJid);

  console.log(`[CAMP HELPER] Auto-ended camping for ${playerJid} (used command: ${command})`);
  
  return true; // Camping was ended
}

/**
 * Check if player is currently camping/resting
 * 
 * @param {string} playerJid - Player's JID
 * @returns {boolean} - True if camping, false otherwise
 */
export function isCamping(playerJid) {
  return campSessions.has(playerJid);
}

/**
 * Get camping session details
 * 
 * @param {string} playerJid - Player's JID
 * @returns {object|null} - Session object or null
 */
export function getCampSession(playerJid) {
  return campSessions.get(playerJid) || null;
}

export default {
  autoEndCamping,
  isCamping,
  getCampSession,
};
