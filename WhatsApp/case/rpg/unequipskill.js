/*
  RPG Command : unequipskill
  Base : Lenwy SCM — RPG Extension

  Remove a skill from an equipped slot
  
  Usage: !unequipskill <slot>
  Example: !unequipskill 2
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

// ── Metadata ─────────────────────────────────────────────

export const info = {
  name: "Unequip Skill",
  menu: ["unequipskill"],
  case: ["unequipskill"],
  description: "Remove a skill from an equipped slot.",
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
    return LenwyText(getText(lang, "unequipskillCmd.notRegistered"));
  }

  // Parse slot number
  if (args.length === 0) {
    return LenwyText(getText(lang, "unequipskillCmd.usage"));
  }

  const slotNum = parseInt(args[0]);

  // Validate slot
  if (isNaN(slotNum) || slotNum < 1 || slotNum > 3) {
    return LenwyText(getText(lang, "unequipskillCmd.invalidSlot"));
  }

  const slotIndex = slotNum - 1;
  const skill = player.skills[slotIndex];

  // Check if slot is empty
  if (!skill || !skill.id) {
    return LenwyText(getText(lang, "unequipskillCmd.emptySlot", { slot: slotNum }));
  }

  const skillName = skill.name;

  // Unequip the skill (set to null)
  player.skills[slotIndex] = {
    id: null,
    name: null,
    damageType: null,
    effect: null,
    value: 0,
    manaCost: 0,
    cooldown: 0,
    cooldownRemaining: 0,
    description: null,
  };

  player.lastActive = new Date().toISOString();
  players[normalizedSender] = player;
  savePlayers(players);

  return LenwyText(
    getText(lang, "unequipskillCmd.success", {
      name: skillName,
      slot: slotNum,
      id: skill.id,
    })
  );
}
