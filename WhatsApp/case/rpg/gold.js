/*
  RPG Command : gold / g
  Base : Lenwy SCM — RPG Extension

  Quick command to check your current gold balance.
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

// ── Metadata ─────────────────────────────────────────────

export const info = {
  name: "Gold",
  menu: ["gold", "g"],
  case: ["gold", "g"],
  description: "Check your current gold balance.",
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
  const { normalizedSender, LenwyText, lenwy } = leni;

  // Block bot
  const botJid = lenwy.user?.id?.split(":")[0] + "@s.whatsapp.net";
  if (normalizedSender === botJid) return;

  const players = loadPlayers();
  const player = players[normalizedSender];

  if (!player) {
    const lang = getLanguage("id");
    return LenwyText(getText(lang, "gold.notRegistered"));
  }

  const lang = getLanguage(getPlayerLanguage(player));
  const goldAmount = player.gold || 0;
  const formattedGold = goldAmount.toLocaleString();

  return LenwyText(
    `${getText(lang, "gold.title", { name: player.name })}\n\n` +
      `${getText(lang, "gold.balance", { gold: formattedGold })}\n\n` +
      `${getText(lang, "gold.tip")}`
  );
}
