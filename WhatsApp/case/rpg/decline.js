/*
  RPG Command : decline
  Base : Lenwy SCM — RPG Extension

  Decline a PVP challenge
*/

import fs from "fs";
import path from "path";
import { getLanguage, getText, getPlayerLanguage } from "../../database/rpg/languages.js";
import { pvpChallenges } from "../../database/rpg/sessionManager.js";

const playersPath = path.join(process.cwd(), "WhatsApp", "database", "rpg", "players.json");

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

// ── Command export ───────────────────────────────────────

export const info = {
  name: "Decline",
  menu: ["decline"],
  case: ["decline"],
  description: "Decline a PVP challenge.",
  hidden: false,
  owner: false,
  premium: false,
  group: false,
  private: false,
  admin: false,
  botAdmin: false,
  allowPrivate: true,
};

export default async function handler(leni) {
  const { lenwy, replyJid, normalizedSender, LenwyText } = leni;

  const botJid = lenwy.user?.id?.split(":")[0] + "@s.whatsapp.net";
  if (normalizedSender === botJid) return;

  const players = loadPlayers();
  const decliner = players[normalizedSender];
  const langD = decliner ? getLanguage(getPlayerLanguage(decliner)) : getLanguage("id");

  // Check if there's a pending challenge
  const challenge = pvpChallenges.get(normalizedSender);
  if (!challenge) {
    return LenwyText(getText(langD, "pvpChallenge.noChallenge"));
  }

  const challenger = players[challenge.challengerJid];
  const langC = challenger ? getLanguage(getPlayerLanguage(challenger)) : getLanguage("id");

  // Remove challenge
  pvpChallenges.delete(normalizedSender);

  // Notify decliner
  await LenwyText(getText(langD, "pvpChallenge.declinedYou", { name: challenge.challengerName }));

  // Notify challenger in their DM
  try {
    await lenwy.sendMessage(challenge.challengerJid, {
      text: getText(langC, "pvpChallenge.declinedChallenger", { name: challenge.targetName }),
    });
  } catch (err) {
    console.log("[DECLINE] Could not notify challenger:", err.message);
  }

  return true;
}
