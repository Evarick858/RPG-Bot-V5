/*
  RPG Command : profile
  Base : Lenwy SCM — RPG Extension

  Flow:
  1. Player types "profile" or "stats" (with prefix)
  2. Bot displays comprehensive character information:
     - Name, Level, Class, Title
     - HP, Mana, XP progress
     - Base stats (Attack, Defense, Agility, Luck)
     - Equipped items with bonuses
     - Active passives (class + equipment)
     - Current location
     - Gold and inventory count
  3. Shows equipment bonuses separately from base stats
*/

import fs from "fs";
import path from "path";
import { getEquipmentStats, getArmorSetBonus, getAllPassives } from "../../database/rpg/equipmentHelper.js";
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

function buildBar(current, max, size = 10) {
  const filled = Math.round((current / max) * size);
  const empty = size - filled;
  return `[${"■".repeat(Math.max(0, filled))}${"□".repeat(Math.max(0, empty))}]`;
}

function buildProfileMessage(player) {
  // Get player language
  const lang = getLanguage(getPlayerLanguage(player));
  
  // Equipment stats
  const equipStats = getEquipmentStats(player);
  
  // Calculate actual max HP/Mana with equipment
  const actualMaxHp = player.stats.maxHp + (equipStats.hp || 0);
  const actualMaxMana = player.stats.maxMana + (equipStats.mana || 0);
  
  // Bars
  const hpBar = buildBar(player.stats.hp, actualMaxHp);
  const manaBar = buildBar(player.stats.mana, actualMaxMana);
  const xpBar = buildBar(player.xp, player.xpToNext);

  // Percentages
  const hpPct = Math.round((player.stats.hp / actualMaxHp) * 100);
  const manaPct = Math.round((player.stats.mana / actualMaxMana) * 100);
  const xpPct = Math.round((player.xp / player.xpToNext) * 100);

  const hasEquipment = Object.values(equipStats).some(v => v > 0);

  // Build base stats section
  let statsText = `📊 *${getText(lang, "profile.stats")}*\n`;
  statsText += `⚔️ ${getText(lang, "common.attack")}: ${player.stats.attack}`;
  if (equipStats.attack > 0) statsText += ` (+${equipStats.attack})`;
  statsText += `\n`;
  
  statsText += `🛡️ ${getText(lang, "common.defense")}: ${player.stats.defense}`;
  if (equipStats.defense > 0) statsText += ` (+${equipStats.defense})`;
  statsText += `\n`;
  
  statsText += `⚡ ${getText(lang, "common.agility")}: ${player.stats.agility}`;
  if (equipStats.agility > 0) statsText += ` (+${equipStats.agility})`;
  statsText += `\n`;
  
  statsText += `🍀 ${getText(lang, "common.luck")}: ${player.stats.luck}`;
  if (equipStats.luck > 0) statsText += ` (+${equipStats.luck})`;

  // Equipment section
  let equipmentText = `\n\n⚔️ *${getText(lang, "profile.equipment")}*\n`;
  
  // Weapon
  if (player.equipment?.weapon?.id) {
    equipmentText += `🗡️ ${player.equipment.weapon.name}\n`;
  } else {
    equipmentText += `🗡️ ${lang.code === "id" ? "Senjata: Tidak ada" : "Weapon: None"}\n`;
  }

  // Offhand
  if (player.equipment?.offhand?.id) {
    equipmentText += `🛡️ ${player.equipment.offhand.name}\n`;
  } else {
    equipmentText += `🛡️ ${lang.code === "id" ? "Offhand: Tidak ada" : "Offhand: None"}\n`;
  }

  // Armor
  const armorSlots = [
    { slot: "head", emoji: "🪖", label: "Head" },
    { slot: "chest", emoji: "🦺", label: "Chest" },
    { slot: "legs", emoji: "👖", label: "Legs" },
    { slot: "boots", emoji: "🥾", label: "Boots" },
  ];

  let armorEquipped = 0;
  for (const { slot, emoji } of armorSlots) {
    if (player.equipment?.armor?.[slot]?.id) {
      armorEquipped++;
    }
  }

  if (armorEquipped > 0) {
    equipmentText += `🦺 ${lang.code === "id" ? "Armor" : "Armor"}: ${armorEquipped}/4 ${lang.code === "id" ? "bagian" : "pieces"}\n`;
  } else {
    equipmentText += `🦺 ${lang.code === "id" ? "Armor: Tidak ada" : "Armor: None"}\n`;
  }

  // Accessory
  if (player.equipment?.accessory?.id) {
    equipmentText += `💍 ${player.equipment.accessory.name}\n`;
  } else {
    equipmentText += `💍 ${lang.code === "id" ? "Aksesoris: Tidak ada" : "Accessory: None"}\n`;
  }

  // Equipment bonuses summary
  if (hasEquipment) {
    equipmentText += `\n✨ *${lang.code === "id" ? "Bonus Perlengkapan" : "Equipment Bonuses"}:*\n`;
    if (equipStats.attack > 0) equipmentText += `⚔️ +${equipStats.attack} ${getText(lang, "common.attack")}\n`;
    if (equipStats.defense > 0) equipmentText += `🛡️ +${equipStats.defense} ${getText(lang, "common.defense")}\n`;
    if (equipStats.hp > 0) equipmentText += `❤️ +${equipStats.hp} ${getText(lang, "common.hp")}\n`;
    if (equipStats.mana > 0) equipmentText += `💧 +${equipStats.mana} ${getText(lang, "common.mana")}\n`;
    if (equipStats.agility > 0) equipmentText += `⚡ +${equipStats.agility} ${getText(lang, "common.agility")}\n`;
    if (equipStats.luck > 0) equipmentText += `🍀 +${equipStats.luck} ${getText(lang, "common.luck")}\n`;
    if (equipStats.critChance > 0) equipmentText += `🎯 +${equipStats.critChance}% ${lang.code === "id" ? "Kritis" : "Crit"}\n`;
    if (equipStats.blockChance > 0) equipmentText += `🛡️ +${equipStats.blockChance}% ${lang.code === "id" ? "Blok" : "Block"}\n`;
  }

  // Passives section
  const allPassives = getAllPassives(player);
  let passivesText = ``;
  
  if (allPassives.length > 0) {
    passivesText += `\n💫 *${lang.code === "id" ? "Pasif Aktif" : "Active Passives"}:*\n`;
    for (const passive of allPassives) {
      passivesText += `${passive.emoji} ${passive.name}\n`;
    }
  }

  // Armor set bonus
  const setBonus = getArmorSetBonus(player);
  if (setBonus) {
    passivesText += `\n✨ *${lang.code === "id" ? "Bonus Set Armor" : "Armor Set Bonus"}:*\n`;
    passivesText += `${setBonus.setName.split('_').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')} Set (4/4)\n`;
  }

  // Build full message
  return (
    `👤 *${player.name}*\n` +
    `🏅 ${player.title || (lang.code === "id" ? "Petualang" : "Adventurer")}\n` +
    `📍 ${player.currentLocation.split('_').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')}\n\n` +
    `========================\n` +
    `🎖️ ${getText(lang, "common.level")}: ${player.level} | 💰 ${getText(lang, "common.gold")}: ${player.gold}\n` +
    `❤️ ${getText(lang, "common.hp")}: ${hpBar} ${player.stats.hp}/${actualMaxHp} (${hpPct}%)\n` +
    `💧 ${getText(lang, "common.mana")}: ${manaBar} ${player.stats.mana}/${actualMaxMana} (${manaPct}%)\n` +
    `✨ ${getText(lang, "common.xp")}: ${xpBar} ${player.xp}/${player.xpToNext} (${xpPct}%)\n\n` +
    `========================\n` +
    `🎓 ${getText(lang, "common.class")}: ${player.class.charAt(0).toUpperCase() + player.class.slice(1)}\n` +
    `${statsText}\n` +
    `========================\n` +
    `${equipmentText}` +
    `${passivesText}\n` +
    `========================\n` +
    `🎒 ${getText(lang, "common.inventory")}: ${player.inventory.length} ${lang.code === "id" ? "item" : "items"}\n` +
    `📊 ${lang.code === "id" ? "Poin Stat" : "Stat Points"}: ${player.statPoints || 0}\n` +
    `⚡ ${lang.code === "id" ? "Poin Skill" : "Skill Points"}: ${player.skillPoints || 0}\n\n` +
    `💡 *${getText(lang, "profile.commands")}*\n` +
    `• !equipment - ${lang.code === "id" ? "Lihat perlengkapan" : "View equipped items"}\n` +
    `• !bag - ${lang.code === "id" ? "Lihat inventori" : "View inventory"}\n` +
    `• !hunt - ${lang.code === "id" ? "Mulai pertarungan" : "Start battle"}`
  );
}

// ── Metadata ─────────────────────────────────────────────

export const info = {
  name: "Profile",
  menu: ["profile", "stats", "me"],
  case: ["profile", "stats", "me"],
  description: "View your character profile, stats, and equipment.",
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
  const { lenwy, normalizedSender, LenwyText } = leni;

  // Block bot
  const botJid = lenwy.user?.id?.split(":")[0] + "@s.whatsapp.net";
  if (normalizedSender === botJid) return;

  const players = loadPlayers();
  const player = players[normalizedSender];

  if (!player) {
    const lang = getLanguage("id"); // Default to Indonesian for non-registered
    return LenwyText(
      `⚠️ *${getText(lang, "common.notRegistered")}*\n\n` +
      getText(lang, "common.registerFirst")
    );
  }

  // Initialize equipment if not exists
  if (!player.equipment) {
    player.equipment = {
      weapon: { id: null, name: null, type: null, twoHanded: false, stats: {} },
      offhand: { id: null, name: null, type: null, stats: {} },
      armor: {
        head: { id: null, name: null, stats: {} },
        chest: { id: null, name: null, stats: {} },
        legs: { id: null, name: null, stats: {} },
        boots: { id: null, name: null, stats: {} },
      },
      accessory: { id: null, name: null, stats: {} },
    };
  }

  return LenwyText(buildProfileMessage(player));
}
