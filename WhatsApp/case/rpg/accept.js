/*
  RPG Command : accept
  Base : Lenwy SCM — RPG Extension

  Accept a PVP challenge
*/

import fs from "fs";
import path from "path";
import { getLanguage, getText, getPlayerLanguage } from "../../database/rpg/languages.js";
import { pvpChallenges } from "../../database/rpg/sessionManager.js";

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

// ── Command export ───────────────────────────────────────

export const info = {
  name: "Accept",
  menu: ["accept"],
  case: ["accept"],
  description: "Accept a PVP challenge.",
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
  const player = players[normalizedSender];
  const langP = player ? getLanguage(getPlayerLanguage(player)) : getLanguage("id");

  if (!player) {
    return LenwyText(getText(langP, "pvpChallenge.notRegistered"));
  }

  // Check if there's a pending challenge
  const challenge = pvpChallenges.get(normalizedSender);
  if (!challenge) {
    return LenwyText(getText(langP, "pvpChallenge.noChallenge"));
  }

  // Get challenger data
  const challenger = players[challenge.challengerJid];
  if (!challenger) {
    pvpChallenges.delete(normalizedSender);
    return LenwyText(getText(langP, "pvpChallenge.challengerGone"));
  }

  const langC = getLanguage(getPlayerLanguage(challenger));

  // Check if challenger is still alive
  if (challenger.stats.hp <= 0) {
    pvpChallenges.delete(normalizedSender);
    return LenwyText(getText(langP, "pvpChallenge.challengerDefeated", { name: challenger.name }));
  }

  // Check if player is still alive
  if (player.stats.hp <= 0) {
    pvpChallenges.delete(normalizedSender);
    return LenwyText(getText(langP, "pvpChallenge.youDefeated"));
  }

  // Check if either player is in combat
  const { combatSessions } = await import("../../database/rpg/sessionManager.js");
  if (combatSessions.has(normalizedSender)) {
    pvpChallenges.delete(normalizedSender);
    return LenwyText(getText(langP, "pvpChallenge.youInCombat"));
  }
  if (combatSessions.has(challenge.challengerJid)) {
    pvpChallenges.delete(normalizedSender);
    return LenwyText(getText(langP, "pvpChallenge.challengerInCombat", { name: challenger.name }));
  }

  // Remove challenge
  pvpChallenges.delete(normalizedSender);

  // Start PVP
  const { startPvP } = await import("./pvpCombat.js");
  await startPvP(lenwy, replyJid, challenge.challengerJid, normalizedSender, challenger, player, false);

  // Notify accepter
  await LenwyText(getText(langP, "pvpChallenge.acceptedYou", { name: challenger.name }));

  // Notify challenger
  try {
    await lenwy.sendMessage(challenge.challengerJid, {
      text: getText(langC, "pvpChallenge.acceptedChallenger", { name: player.name }),
    });
  } catch (err) {
    console.log("[ACCEPT] Could not notify challenger:", err.message);
  }
}
