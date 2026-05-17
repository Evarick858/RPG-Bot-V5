/*
  RPG Command : language
  Base : Lenwy SCM — RPG Extension

  Change bot language for the player
  
  Usage:
  - language - Show current language
  - language <code> - Change language
  
  Available languages:
  - en (English)
  - id (Bahasa Indonesia)
*/

import fs from "fs";
import path from "path";
import { languages, getLanguage, getText } from "../../database/rpg/languages.js";

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

// ── Metadata ─────────────────────────────────────────────

export const info = {
  name: "Language",
  menu: ["language", "bahasa"],
  case: ["language", "lang", "bahasa"],
  description: "Change bot language / Ubah bahasa bot",
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
    return LenwyText(
      `⚠️ *You are not registered yet!* / *Kamu belum terdaftar!*\n\n` +
      `Type *register <your name>* to start.\n` +
      `Ketik *register <nama kamu>* untuk memulai.`
    );
  }

  // Initialize language if not set
  if (!player.language) {
    player.language = "en";
  }

  const currentLang = getLanguage(player.language);

  // No arguments - show current language and available languages
  if (args.length === 0) {
    const availableList = Object.values(languages)
      .map(l => `${l.flag} *${l.code}* - ${l.name}`)
      .join("\n");

    return LenwyText(
      getText(currentLang, "language.current", {
        flag: currentLang.flag,
        name: currentLang.name,
      }) +
      `\n\n` +
      getText(currentLang, "language.available", {
        languages: availableList,
      })
    );
  }

  // Change language
  const newLangCode = args[0].toLowerCase();
  
  if (!languages[newLangCode]) {
    const availableList = Object.values(languages)
      .map(l => `${l.flag} *${l.code}* - ${l.name}`)
      .join("\n");
    
    return LenwyText(
      getText(currentLang, "language.invalid", {
        languages: availableList,
      })
    );
  }

  // Update player language
  player.language = newLangCode;
  player.lastActive = new Date().toISOString();
  players[normalizedSender] = player;
  savePlayers(players);

  const newLang = getLanguage(newLangCode);

  // Try to edit the registration message if it exists
  if (player.registrationMessageKey) {
    try {
      const cls = await import("../../database/rpg/classes.js").then(m => m.getClassById(player.class));
      const s = player.stats;
      const prefix = globalThis.noprefix ? "" : "!";

      let editedMessage = "";
      
      if (newLangCode === "en") {
        // English version
        editedMessage = 
          `🎉 *Welcome to the world, ${player.name}!*\n\n` +
          `${cls.emoji} *Class: ${cls.name}*\n` +
          `📖 ${cls.description}\n\n` +
          `📊 *Your Starting Stats:*\n` +
          `❤️ HP      : ${s.maxHp}\n` +
          `💧 Mana    : ${s.maxMana}\n` +
          `⚔️ Attack  : ${s.attack}\n` +
          `🛡️ Defense : ${s.defense}\n` +
          `💨 Agility : ${s.agility}\n` +
          `🍀 Luck    : ${s.luck}\n\n` +
          `✨ *Starter Skill:* ${player.skills[0].name}\n` +
          `${player.skills[0].description}\n\n` +
          `🔮 *Passive:* ${player.passive.name}\n` +
          `${player.passive.description}\n\n` +
          `📍 *Location:* Starter Village\n` +
          `💰 *Gold:* ${player.gold}\n\n` +
          `Type *${prefix}profile* to see your full stats.\n` +
          `Type *${prefix}location* to see where you are.\n` +
          `Type *${prefix}hunt* to start fighting!`;
      } else {
        // Indonesian version
        editedMessage = 
          `🎉 *Selamat datang di dunia ini, ${player.name}!*\n\n` +
          `${cls.emoji} *Kelas: ${cls.name}*\n` +
          `📖 ${cls.description}\n\n` +
          `📊 *Stats Awal Kamu:*\n` +
          `❤️ HP      : ${s.maxHp}\n` +
          `💧 Mana    : ${s.maxMana}\n` +
          `⚔️ Serangan  : ${s.attack}\n` +
          `🛡️ Pertahanan : ${s.defense}\n` +
          `💨 Kelincahan : ${s.agility}\n` +
          `🍀 Keberuntungan    : ${s.luck}\n\n` +
          `✨ *Skill Awal:* ${player.skills[0].name}\n` +
          `${player.skills[0].description}\n\n` +
          `🔮 *Pasif:* ${player.passive.name}\n` +
          `${player.passive.description}\n\n` +
          `📍 *Lokasi:* Desa Pemula\n` +
          `💰 *Emas:* ${player.gold}\n\n` +
          `Ketik *${prefix}profil* untuk melihat stats lengkap.\n` +
          `Ketik *${prefix}lokasi* untuk melihat posisi kamu.\n` +
          `Ketik *${prefix}hunt* untuk mulai bertarung!`;
      }

      // Edit the message
      await lenwy.sendMessage(normalizedSender, {
        text: editedMessage,
        edit: player.registrationMessageKey
      });
    } catch (err) {
      console.log("[LANGUAGE] Could not edit registration message:", err.message);
    }
  }

  return LenwyText(
    getText(newLang, "language.changed", {
      flag: newLang.flag,
      name: newLang.name,
    })
  );
}
