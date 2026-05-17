/*
  RPG Command : equipskill
  Base : Lenwy SCM — RPG Extension

  Equip a learned skill to a slot
  
  Usage: !equipskill <skill_name> <slot>
  Example: !equipskill fireball 2
*/

import fs from "fs";
import path from "path";
import { getSkillById } from "../../database/rpg/skills.js";
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

// Normalize skill name input
function normalizeSkillName(input) {
  return input.trim().toLowerCase().replace(/\s+/g, "_");
}

// ── Metadata ─────────────────────────────────────────────

export const info = {
  name: "Equip Skill",
  menu: ["equipskill"],
  case: ["equipskill"],
  description: "Equip a learned skill to a slot (1-3).",
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
  const lang = player ? getLanguage(getPlayerLanguage(player)) : getLanguage("id");

  if (!player) {
    return LenwyText(getText(lang, "equipskillCmd.notRegistered"));
  }

  // Parse arguments
  if (args.length < 2) {
    return LenwyText(getText(lang, "equipskillCmd.usage"));
  }

  const slotNum = parseInt(args[args.length - 1]);
  const skillNameParts = args.slice(0, -1);
  const skillName = normalizeSkillName(skillNameParts.join(" "));

  // Validate slot
  if (isNaN(slotNum) || slotNum < 1 || slotNum > 3) {
    return LenwyText(getText(lang, "equipskillCmd.invalidSlot"));
  }

  const slotIndex = slotNum - 1;

  // Check if skill is learned
  const learnedSkills = player.learnedSkills || [];
  if (!learnedSkills.includes(skillName)) {
    return LenwyText(getText(lang, "equipskillCmd.notLearned", { skill: skillName }));
  }

  // Get skill data
  const skillData = getSkillById(skillName);
  if (!skillData) {
    return LenwyText(getText(lang, "equipskillCmd.skillMissing", { skill: skillName }));
  }

  // Check if skill is already equipped in another slot
  for (let i = 0; i < 3; i++) {
    if (player.skills[i] && player.skills[i].id === skillName) {
      return LenwyText(
        getText(lang, "equipskillCmd.alreadyEquipped", {
          name: skillData.name,
          slot: i + 1,
        })
      );
    }
  }

  // Equip the skill
  player.skills[slotIndex] = {
    id: skillData.id,
    name: skillData.name,
    damageType: skillData.damageType,
    effect: skillData.effect,
    value: skillData.value,
    duration: skillData.duration || 0,
    damage: skillData.value, // For damage skills
    manaCost: skillData.manaCost,
    cooldown: skillData.cooldown,
    cooldownRemaining: 0,
    description: skillData.description,
  };

  player.lastActive = new Date().toISOString();
  players[normalizedSender] = player;
  savePlayers(players);

  return LenwyText(
    getText(lang, "equipskillCmd.success", {
      emoji: skillData.emoji || "",
      name: skillData.name,
      slot: slotNum,
      description: skillData.description,
      mana: skillData.manaCost,
      cd: skillData.cooldown,
    })
  );
}
