/*
  !leaderboard Command
  Base : Lenwy SCM — RPG Extension

  View top players in various categories
  Usage: !leaderboard [category]
  Categories: level, gold, power, pvp, monsters
*/

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { getEquipmentStats } from "../../database/rpg/equipmentHelper.js";
import { getLanguage, getText, getPlayerLanguage } from "../../database/rpg/languages.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const playersPath = path.resolve(__dirname, "../../database/rpg/players.json");

// ── Metadata ─────────────────────────────────────────────

export const info = {
  name: "Leaderboard",
  menu: ["leaderboard"],
  case: ["leaderboard", "lb", "top", "rank"],
  description: "View top players in various categories",
  hidden: false,
  owner: false,
  premium: false,
  group: false,
  private: false,
  admin: false,
  botAdmin: false,
  allowPrivate: true,
};

// ── Handler ───────────────────────────────────────────────

export default async function handler(leni) {
  const { lenwy, normalizedSender, LenwyText, args } = leni;
  const sender = normalizedSender;
  
  const playersData = JSON.parse(fs.readFileSync(playersPath, "utf-8"));
  
  // Remove metadata
  const players = { ...playersData };
  delete players._comment;
  delete players._template;

  const viewer = players[sender];
  const lang = getLanguage(viewer ? getPlayerLanguage(viewer) : "en");

  // Check if there are any players
  if (Object.keys(players).length === 0) {
    return LenwyText(getText(lang, "leaderboardCmd.noPlayers"));
  }

  // Get category from args
  const category = args[0]?.toLowerCase() || "menu";

  // Show menu if no category or invalid category
  const validCategories = ["level", "gold", "power", "pvp", "monsters"];

  if (category === "menu" || !validCategories.includes(category)) {
    return showLeaderboardMenu(LenwyText, lang);
  }

  switch (category) {
    case "level":
      return showLevelLeaderboard(players, sender, LenwyText, lang);
    case "gold":
      return showGoldLeaderboard(players, sender, LenwyText, lang);
    case "power":
      return showPowerLeaderboard(players, sender, LenwyText, lang);
    case "pvp":
      return showPvPLeaderboard(players, sender, LenwyText, lang);
    case "monsters":
      return showMonstersLeaderboard(players, sender, LenwyText, lang);
    default:
      return showLeaderboardMenu(LenwyText, lang);
  }
}

// ── Helper Functions ──────────────────────────────────────

/**
 * Show leaderboard menu
 */
function showLeaderboardMenu(LenwyText, lang) {
  const sep = getText(lang, "leaderboardCmd.sep");
  const message =
    `${getText(lang, "leaderboardCmd.menuTitle")}\n\n` +
    `${getText(lang, "leaderboardCmd.menuChoose")}\n\n` +
    `${getText(lang, "leaderboardCmd.lbLevelLine")}\n` +
    `${getText(lang, "leaderboardCmd.lbGoldLine")}\n` +
    `${getText(lang, "leaderboardCmd.lbPowerLine")}\n` +
    `${getText(lang, "leaderboardCmd.lbPvpLine")}\n` +
    `${getText(lang, "leaderboardCmd.lbMonstersLine")}\n\n` +
    `${sep}\n` +
    `${getText(lang, "leaderboardCmd.menuAliases")}`;

  return LenwyText(message);
}

/**
 * Show level leaderboard
 */
function formatRankLine(lang, medal, rank, name, marker, level) {
  return getText(lang, "leaderboardCmd.rankLine", {
    medal,
    rank: String(rank),
    name,
    marker,
    level: String(level),
  });
}

function showLevelLeaderboard(players, currentSender, LenwyText, lang) {
  const playerArray = Object.entries(players).map(([id, data]) => ({
    id,
    name: data.name,
    level: data.level || 1,
    class: data.class || "Adventurer"
  }));

  // Sort by level (descending)
  playerArray.sort((a, b) => b.level - a.level);

  // Get top 10
  const top10 = playerArray.slice(0, 10);

  // Find current player rank
  const currentPlayerIndex = playerArray.findIndex(p => p.id === currentSender);
  const currentPlayerRank = currentPlayerIndex + 1;

  const sep = getText(lang, "leaderboardCmd.sep");

  let message = `${getText(lang, "leaderboardCmd.catLevel")}\n\n${sep}\n`;

  top10.forEach((player, index) => {
    const rank = index + 1;
    const medal = getRankMedal(rank);
    const isCurrentPlayer = player.id === currentSender;
    const marker = isCurrentPlayer ? " 👈" : "";
    message += `${formatRankLine(lang, medal, rank, player.name, marker, player.level)}\n`;
  });

  // Show current player rank if not in top 10
  if (currentPlayerRank > 10) {
    const currentPlayer = playerArray[currentPlayerIndex];
    message += `\n${sep}\n`;
    message += `${getText(lang, "leaderboardCmd.yourRankLine", {
      rank: String(currentPlayerRank),
      level: String(currentPlayer.level),
    })}\n`;
  }

  message += `${sep}\n`;
  message += getText(lang, "leaderboardCmd.totalPlayersLine", { count: String(playerArray.length) });

  return LenwyText(message);
}

/**
 * Show gold leaderboard
 */
function showGoldLeaderboard(players, currentSender, LenwyText, lang) {
  const playerArray = Object.entries(players).map(([id, data]) => ({
    id,
    name: data.name,
    gold: data.gold || 0,
    level: data.level || 1
  }));

  // Sort by gold (descending)
  playerArray.sort((a, b) => b.gold - a.gold);

  const top10 = playerArray.slice(0, 10);
  const currentPlayerIndex = playerArray.findIndex(p => p.id === currentSender);
  const currentPlayerRank = currentPlayerIndex + 1;
  const sep = getText(lang, "leaderboardCmd.sep");

  let message = `${getText(lang, "leaderboardCmd.catGold")}\n\n${sep}\n`;

  top10.forEach((player, index) => {
    const rank = index + 1;
    const medal = getRankMedal(rank);
    const isCurrentPlayer = player.id === currentSender;
    const marker = isCurrentPlayer ? " 👈" : "";
    message += `${formatRankLine(lang, medal, rank, player.name, marker, player.level)}\n`;
  });

  if (currentPlayerRank > 10) {
    const currentPlayer = playerArray[currentPlayerIndex];
    message += `\n${sep}\n`;
    message += `${getText(lang, "leaderboardCmd.yourRankLine", {
      rank: String(currentPlayerRank),
      level: String(currentPlayer.level),
    })}\n`;
  }

  message += `${sep}\n`;
  message += getText(lang, "leaderboardCmd.totalPlayersLine", { count: String(playerArray.length) });

  return LenwyText(message);
}

/**
 * Show combat power leaderboard
 */
function showPowerLeaderboard(players, currentSender, LenwyText, lang) {
  const playerArray = Object.entries(players).map(([id, data]) => {
    // Calculate total combat power (base stats + equipment)
    const equipStats = getEquipmentStats(data);
    const totalAttack = (data.stats?.attack || 0) + (equipStats.attack || 0);
    const totalDefense = (data.stats?.defense || 0) + (equipStats.defense || 0);
    const combatPower = totalAttack + totalDefense;

    return {
      id,
      name: data.name,
      power: combatPower,
      attack: totalAttack,
      defense: totalDefense,
      level: data.level || 1
    };
  });

  // Sort by combat power (descending)
  playerArray.sort((a, b) => b.power - a.power);

  // Get top 10
  const top10 = playerArray.slice(0, 10);

  // Find current player rank
  const currentPlayerIndex = playerArray.findIndex(p => p.id === currentSender);
  const currentPlayerRank = currentPlayerIndex + 1;

  const sep = getText(lang, "leaderboardCmd.sep");

  let message = `${getText(lang, "leaderboardCmd.catPower")}\n\n${sep}\n`;

  top10.forEach((player, index) => {
    const rank = index + 1;
    const medal = getRankMedal(rank);
    const isCurrentPlayer = player.id === currentSender;
    const marker = isCurrentPlayer ? " 👈" : "";
    message += `${formatRankLine(lang, medal, rank, player.name, marker, player.level)}\n`;
  });

  if (currentPlayerRank > 10) {
    const currentPlayer = playerArray[currentPlayerIndex];
    message += `\n${sep}\n`;
    message += `${getText(lang, "leaderboardCmd.yourRankLine", {
      rank: String(currentPlayerRank),
      level: String(currentPlayer.level),
    })}\n`;
  }

  message += `\n${sep}\n`;
  message += getText(lang, "leaderboardCmd.totalPlayersLine", { count: String(playerArray.length) });

  return LenwyText(message);
}

/**
 * Show PvP leaderboard
 */
function showPvPLeaderboard(players, currentSender, LenwyText, lang) {
  const playerArray = Object.entries(players).map(([id, data]) => ({
    id,
    name: data.name,
    wins: data.pvpWins || 0,
    losses: data.pvpLosses || 0,
    winRate: calculateWinRate(data.pvpWins || 0, data.pvpLosses || 0),
    level: data.level || 1
  }));

  // Sort by wins (descending), then by win rate
  playerArray.sort((a, b) => {
    if (b.wins !== a.wins) return b.wins - a.wins;
    return b.winRate - a.winRate;
  });

  // Get top 10
  const top10 = playerArray.slice(0, 10);

  // Find current player rank
  const currentPlayerIndex = playerArray.findIndex(p => p.id === currentSender);
  const currentPlayerRank = currentPlayerIndex + 1;

  const sep = getText(lang, "leaderboardCmd.sep");

  let message = `${getText(lang, "leaderboardCmd.catPvp")}\n\n${sep}\n`;

  top10.forEach((player, index) => {
    const rank = index + 1;
    const medal = getRankMedal(rank);
    const isCurrentPlayer = player.id === currentSender;
    const marker = isCurrentPlayer ? " 👈" : "";
    message += `${formatRankLine(lang, medal, rank, player.name, marker, player.level)}\n`;
  });

  if (currentPlayerRank > 10) {
    const currentPlayer = playerArray[currentPlayerIndex];
    message += `\n${sep}\n`;
    message += `${getText(lang, "leaderboardCmd.yourRankLine", {
      rank: String(currentPlayerRank),
      level: String(currentPlayer.level),
    })}\n`;
  }

  message += `${sep}\n`;
  message += getText(lang, "leaderboardCmd.totalPlayersLine", { count: String(playerArray.length) });

  return LenwyText(message);
}

/**
 * Show monsters defeated leaderboard
 */
function showMonstersLeaderboard(players, currentSender, LenwyText, lang) {
  const playerArray = Object.entries(players).map(([id, data]) => ({
    id,
    name: data.name,
    monsters: data.monstersDefeated || 0,
    level: data.level || 1,
    class: data.class || "Adventurer"
  }));

  // Sort by monsters defeated (descending)
  playerArray.sort((a, b) => b.monsters - a.monsters);

  // Get top 10
  const top10 = playerArray.slice(0, 10);

  // Find current player rank
  const currentPlayerIndex = playerArray.findIndex(p => p.id === currentSender);
  const currentPlayerRank = currentPlayerIndex + 1;

  const sep = getText(lang, "leaderboardCmd.sep");

  let message = `${getText(lang, "leaderboardCmd.catMonsters")}\n\n${sep}\n`;

  top10.forEach((player, index) => {
    const rank = index + 1;
    const medal = getRankMedal(rank);
    const isCurrentPlayer = player.id === currentSender;
    const marker = isCurrentPlayer ? " 👈" : "";
    message += `${formatRankLine(lang, medal, rank, player.name, marker, player.level)}\n`;
  });

  if (currentPlayerRank > 10) {
    const currentPlayer = playerArray[currentPlayerIndex];
    message += `\n${sep}\n`;
    message += `${getText(lang, "leaderboardCmd.yourRankLine", {
      rank: String(currentPlayerRank),
      level: String(currentPlayer.level),
    })}\n`;
  }

  message += `${sep}\n`;
  message += getText(lang, "leaderboardCmd.totalPlayersLine", { count: String(playerArray.length) });

  return LenwyText(message);
}

/**
 * Get rank medal emoji
 */
function getRankMedal(rank) {
  switch (rank) {
    case 1: return "🥇";
    case 2: return "🥈";
    case 3: return "🥉";
    default: return "  ";
  }
}

/**
 * Calculate win rate percentage
 */
function calculateWinRate(wins, losses) {
  const total = wins + losses;
  if (total === 0) return 0;
  return Math.round((wins / total) * 100);
}
