/*
  RPG Command : myskills
  Base : Lenwy SCM — RPG Extension

  Shows all learned skills and equipped skill slots
  
  Usage: !myskills
*/

import fs from "fs";
import path from "path";
import { getSkillById, rarityConfig } from "../../database/rpg/skills.js";
import { getLanguage, getText, getPlayerLanguage } from "../../database/rpg/languages.js";

const playersPath = path.join(process.cwd(), "WhatsApp", "database", "rpg", "players.json");
const skillRarityLabels = {
  en: {
    C: "Common",
    U: "Uncommon",
    R: "Rare",
    SSR: "Super Rare",
    UR: "Ultra Rare",
    Mythic: "Mythic",
  },
  id: {
    C: "Umum",
    U: "Tidak Umum",
    R: "Langka",
    SSR: "Super Langka",
    UR: "Ultra Langka",
    Mythic: "Mitos",
  },
};

function getSkillRarityLabel(lang, rarity, fallback) {
  const labels = skillRarityLabels[lang?.code] || skillRarityLabels.en;
  return labels[rarity] || fallback || rarity;
}

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

// ── Metadata ─────────────────────────────────────────────

export const info = {
  name: "My Skills",
  menu: ["myskills"],
  case: ["myskills", "skills"],
  description: "View all your learned skills and equipped skill slots.",
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
  const { lenwy, normalizedSender, LenwyText } = leni;

  // Block bot
  const botJid = lenwy.user?.id?.split(":")[0] + "@s.whatsapp.net";
  if (normalizedSender === botJid) return;

  const players = loadPlayers();
  const player = players[normalizedSender];

  if (!player) {
    const lang = getLanguage("en");
    return LenwyText(getText(lang, "common.notRegisteredFull"));
  }
  
  const lang = getLanguage(getPlayerLanguage(player));

  // Build equipped skills display
  let equippedText = ``;
  for (let i = 0; i < 3; i++) {
    const skill = player.skills[i];
    if (skill && skill.id) {
      const skillData = getSkillById(skill.id);
      const rarity = skillData ? rarityConfig[skillData.rarity] : null;
      const rarityColor = rarity ? rarity.color : "⬜";
      
      equippedText += getText(lang, "myskills.slot", { slot: i + 1 }) + ` ${rarityColor} ${skill.name}\n`;
      equippedText += getText(lang, "myskills.skillMeta", { mana: skill.manaCost, cooldown: skill.cooldown }) + "\n";
      equippedText += getText(lang, "myskills.skillDescription", { description: skill.description }) + "\n\n";
    } else {
      equippedText += getText(lang, "myskills.slot", { slot: i + 1 }) + ` ${getText(lang, "myskills.empty")}\n\n`;
    }
  }

  // Build learned skills display
  const learnedSkills = player.learnedSkills || [];
  let learnedText = ``;
  
  if (learnedSkills.length === 0) {
    learnedText = getText(lang, "myskills.noSkills");
  } else {
    // Group by rarity
    const grouped = {};
    for (const skillId of learnedSkills) {
      const skillData = getSkillById(skillId);
      if (!skillData) continue;
      
      if (!grouped[skillData.rarity]) {
        grouped[skillData.rarity] = [];
      }
      grouped[skillData.rarity].push(skillData);
    }

    // Display by rarity order
    const rarityOrder = ["C", "U", "R", "SSR", "UR", "Mythic"];
    for (const rarity of rarityOrder) {
      if (!grouped[rarity]) continue;
      
      const rarityInfo = rarityConfig[rarity];
      learnedText += `${rarityInfo.color} *${getSkillRarityLabel(lang, rarity, rarityInfo.label)}*\n`;
      
      for (const skill of grouped[rarity]) {
        learnedText += `• ${skill.emoji} ${skill.name}\n`;
      }
      learnedText += `\n`;
    }

    learnedText += getText(lang, "myskills.tip");
  }

  return LenwyText(
    getText(lang, "myskills.title") + "\n\n" +
    `========================\n` +
    getText(lang, "myskills.equippedSkills") + "\n\n" +
    `${equippedText}` +
    `========================\n` +
    getText(lang, "myskills.learnedSkills", { count: learnedSkills.length }) + "\n\n" +
    `${learnedText}\n` +
    `========================\n` +
    (lang.code === "id"
      ? `*📖 CARA PAKAI SKILL BOOK*\n` +
        `1. Beli di toko: *!buy skill_book_meteor*\n` +
        `2. Pelajari: *!study skill_book_meteor*\n` +
        `3. Pasang ke slot: *!equipskill meteor 1*\n` +
        `4. Lepas dari slot: *!unequipskill 1*\n\n` +
        `*Slot skill:* 1, 2, atau 3\n` +
        `*Gunakan saat battle:* ketik *skill 1*, *skill 2*, atau *skill 3*\n\n` +
        `*Perintah lainnya:*\n` +
        getText(lang, "myskills.equipSkillCmd") + "\n" +
        getText(lang, "myskills.unequipSkillCmd") + "\n" +
        getText(lang, "myskills.shopCmd")
      : `*📖 HOW TO USE SKILL BOOKS*\n` +
        `1. Buy from shop: *!buy skill_book_meteor*\n` +
        `2. Learn it: *!study skill_book_meteor*\n` +
        `3. Equip to a slot: *!equipskill meteor 1*\n` +
        `4. Unequip from slot: *!unequipskill 1*\n\n` +
        `*Skill slots:* 1, 2, or 3\n` +
        `*Use in battle:* type *skill 1*, *skill 2*, or *skill 3*\n\n` +
        `*Other commands:*\n` +
        getText(lang, "myskills.equipSkillCmd") + "\n" +
        getText(lang, "myskills.unequipSkillCmd") + "\n" +
        getText(lang, "myskills.shopCmd"))
  );
}
