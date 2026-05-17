/*
  RPG Command : addstat
  Base : Lenwy SCM — RPG Extension

  Allocate stat points earned from leveling up
  
  Usage: 
  - !addstat - View available stat points and current stats
  - !addstat <stat> <amount> - Add points to a stat
  
  Available stats:
  - hp / maxhp - Increase max HP (+10 HP per point)
  - mana / maxmana - Increase max mana (+10 mana per point)
  - attack / atk - Increase attack (+1 per point)
  - defense / def - Increase defense (+1 per point)
  - agility / agi - Increase agility (+1 per point)
  - luck - Increase luck (+1 per point)
  
  Example: !addstat attack 5
*/

import fs from "fs";
import path from "path";
import { getLanguage, getText, getPlayerLanguage } from "../../database/rpg/languages.js";

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
  const updated = {
    _comment: data._comment,
    _template: data._template,
    ...players,
  };
  fs.writeFileSync(playersPath, JSON.stringify(updated, null, 2), "utf8");
}

// Normalize stat name input
function normalizeStatName(input) {
  const normalized = input.toLowerCase().trim();
  const statMap = {
    "hp": "maxHp",
    "maxhp": "maxHp",
    "health": "maxHp",
    "mana": "maxMana",
    "maxmana": "maxMana",
    "mp": "maxMana",
    "attack": "attack",
    "atk": "attack",
    "defense": "defense",
    "def": "defense",
    "agility": "agility",
    "agi": "agility",
    "speed": "agility",
    "luck": "luck",
  };
  return statMap[normalized] || null;
}

// Get stat increase per point
function getStatIncrease(statName) {
  const increases = {
    "maxHp": 10,
    "maxMana": 10,
    "attack": 1,
    "defense": 1,
    "agility": 1,
    "luck": 1,
  };
  return increases[statName] || 1;
}

// Get stat display name
function getStatDisplayName(statName) {
  const names = {
    "maxHp": "Max HP",
    "maxMana": "Max Mana",
    "attack": "Attack",
    "defense": "Defense",
    "agility": "Agility",
    "luck": "Luck",
  };
  return names[statName] || statName;
}

// Get stat emoji
function getStatEmoji(statName) {
  const emojis = {
    "maxHp": "❤️",
    "maxMana": "💧",
    "attack": "⚔️",
    "defense": "🛡️",
    "agility": "⚡",
    "luck": "🍀",
  };
  return emojis[statName] || "📊";
}

// ── Metadata ─────────────────────────────────────────────

export const info = {
  name: "Add Stat",
  menu: ["addstat"],
  case: ["addstat", "allocate", "statpoint"],
  description: "Allocate stat points to increase your stats.",
  hidden: false,
  owner: false,
  premium: false,
  group: false,
  private: false,
  admin: false,
  botAdmin: false,
  allowPrivate: true,
};

// ── Handler ──────────────────────────────────────────────

export default async function handler(leni) {
  const { lenwy, normalizedSender, LenwyText, args } = leni;

  // Block bot
  const botJid = lenwy.user?.id?.split(":")[0] + "@s.whatsapp.net";
  if (normalizedSender === botJid) return;

  const players = loadPlayers();
  const player = players[normalizedSender];

  if (!player) {
    const lang = getLanguage("id");
    return LenwyText(
      `⚠️ *${getText(lang, "common.notRegistered")}*\n\n` +
      getText(lang, "common.registerFirst")
    );
  }

  const lang = getLanguage(getPlayerLanguage(player));

  // Initialize stat points if not exists
  if (typeof player.statPoints === 'undefined') {
    player.statPoints = 0;
  }

  // No arguments - show current stats and available points
  if (args.length === 0) {
    const prefix = globalThis.noprefix ? "" : "!";
    return LenwyText(
      `${getText(lang, "stats.title")}\n\n` +
      `${getText(lang, "stats.available", {points: player.statPoints})}\n\n` +
      `========================\n` +
      `*${getText(lang, "stats.current")}*\n` +
      `❤️ ${lang.code === "id" ? "Max HP" : "Max HP"}: ${player.stats.maxHp}\n` +
      `💧 ${lang.code === "id" ? "Max Mana" : "Max Mana"}: ${player.stats.maxMana}\n` +
      `⚔️ ${getText(lang, "common.attack")}: ${player.stats.attack}\n` +
      `🛡️ ${getText(lang, "common.defense")}: ${player.stats.defense}\n` +
      `⚡ ${getText(lang, "common.agility")}: ${player.stats.agility}\n` +
      `🍀 ${getText(lang, "common.luck")}: ${player.stats.luck}\n\n` +
      `========================\n` +
      `*${getText(lang, "stats.increases")}*\n` +
      `❤️ HP: +10 ${getText(lang, "stats.perPoint")}\n` +
      `💧 Mana: +10 ${getText(lang, "stats.perPoint")}\n` +
      `⚔️ ${getText(lang, "common.attack")}: +1 ${getText(lang, "stats.perPoint")}\n` +
      `🛡️ ${getText(lang, "common.defense")}: +1 ${getText(lang, "stats.perPoint")}\n` +
      `⚡ ${getText(lang, "common.agility")}: +1 ${getText(lang, "stats.perPoint")}\n` +
      `🍀 ${getText(lang, "common.luck")}: +1 ${getText(lang, "stats.perPoint")}\n\n` +
      `========================\n` +
      `*${lang.code === "id" ? "Penggunaan" : "Usage"}:*\n` +
      `${prefix}addstat <stat> <${lang.code === "id" ? "jumlah" : "amount"}>\n\n` +
      `*${lang.code === "id" ? "Contoh" : "Examples"}:*\n` +
      `${prefix}addstat attack 5\n` +
      `${prefix}addstat hp 3\n` +
      `${prefix}addstat agility 2\n\n` +
      `💡 ${lang.code === "id" ? "Kamu mendapat 3 poin stat per level!" : "You earn 3 stat points per level!"}`
    );
  }

  // Parse arguments
  if (args.length < 2) {
    const prefix = globalThis.noprefix ? "" : "!";
    return LenwyText(
      `⚠️ *Invalid usage!*\n\n` +
      `Usage: ${prefix}addstat <stat> <amount>\n` +
      `Example: ${prefix}addstat attack 5\n\n` +
      `Type ${prefix}addstat to see available stats.`
    );
  }

  const statInput = args[0];
  const amount = parseInt(args[1]);

  // Validate stat name
  const statName = normalizeStatName(statInput);
  if (!statName) {
    return LenwyText(
      `❌ *Unknown stat: "${statInput}"*\n\n` +
      `Available stats:\n` +
      `• hp / maxhp\n` +
      `• mana / maxmana\n` +
      `• attack / atk\n` +
      `• defense / def\n` +
      `• agility / agi\n` +
      `• luck`
    );
  }

  // Validate amount
  if (isNaN(amount) || amount < 1) {
    return LenwyText(
      `⚠️ *Invalid amount!*\n\n` +
      `Amount must be a positive number.\n` +
      `Example: addstat attack 5`
    );
  }

  // Check if player has enough stat points
  if (player.statPoints < amount) {
    return LenwyText(getText(lang, "stats.notEnough", {have: player.statPoints, need: amount}));
  }

  // Apply stat increase
  const increase = getStatIncrease(statName);
  const totalIncrease = increase * amount;
  const oldValue = player.stats[statName];
  
  player.stats[statName] += totalIncrease;
  player.statPoints -= amount;

  // If increasing max HP/Mana, also increase current HP/Mana
  if (statName === "maxHp") {
    player.stats.hp += totalIncrease;
  } else if (statName === "maxMana") {
    player.stats.mana += totalIncrease;
  }

  player.lastActive = new Date().toISOString();
  players[normalizedSender] = player;
  savePlayers(players);

  const emoji = getStatEmoji(statName);
  const displayName = getStatDisplayName(statName);

  return LenwyText(
    getText(lang, "stats.success", {
      emoji: emoji,
      stat: displayName,
      old: oldValue,
      new: player.stats[statName],
      increase: totalIncrease
    }) + `\n\n` +
    `💎 ${lang.code === "id" ? "Poin Stat" : "Stat Points"}: ${player.statPoints + amount} → ${player.statPoints}\n` +
    `📊 ${lang.code === "id" ? "Poin Digunakan" : "Points Used"}: ${amount}\n\n` +
    `${lang.code === "id" ? "Ketik *profil* untuk melihat stats terbaru!" : "Type *profile* to see your updated stats!"}`
  );
}
