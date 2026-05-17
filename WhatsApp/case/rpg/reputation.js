/*
  RPG Command : reputation
  Base : Lenwy SCM — RPG Extension

  View your reputation and its effects
  
  Usage:
  - reputation
  - reputation @player
  - reputation <name>
*/

import fs from "fs";
import path from "path";
import { getReputationTitle, formatReputationBar } from "../../database/rpg/story.js";
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

// ── Command export ───────────────────────────────────────

export const info = {
  name: "Reputation",
  menu: ["reputation", "rep"],
  case: ["reputation", "rep"],
  description: "View your reputation and its effects.",
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
  const { lenwy, replyJid, normalizedSender, LenwyText, args, m } = leni;

  const botJid = lenwy.user?.id?.split(":")[0] + "@s.whatsapp.net";
  if (normalizedSender === botJid) return;

  const players = loadPlayers();

  const viewer = players[normalizedSender];
  const lang = viewer ? getLanguage(getPlayerLanguage(viewer)) : getLanguage("en");

  // Get target player (self or specified player)
  let targetJid = normalizedSender;
  let targetName = null;

  if (args.length > 0) {
    // Check for mention
    if (m.message?.extendedTextMessage?.contextInfo?.mentionedJid?.length > 0) {
      targetJid = m.message.extendedTextMessage.contextInfo.mentionedJid[0];
    } else {
      // Search by name
      targetName = args.join(" ").toLowerCase();
      const found = Object.entries(players).find(([jid, p]) => 
        p.name.toLowerCase() === targetName
      );
      if (found) {
        targetJid = found[0];
      } else {
        return LenwyText(getText(lang, "reputationCmd.playerNotFound", { name: targetName }));
      }
    }
  }

  const player = players[targetJid];

  if (!player) {
    return LenwyText(getText(lang, "reputationCmd.targetNotRegistered"));
  }

  // Initialize reputation if not exists
  if (typeof player.reputation === "undefined") {
    player.reputation = 0;
  }

  const reputation = player.reputation;
  const repTitle = getReputationTitle(reputation);
  const repBar = formatReputationBar(reputation);

  const div = "\n\n========================\n\n";

  let message = `${repTitle.emoji}\n${getText(lang, "reputationCmd.header")}\n\n`;
  message += `*${player.name}*\n`;
  message += getText(lang, "reputationCmd.alignmentPrefix", {
    color: repTitle.color,
    title: repTitle.title,
  });
  message += "\n";
  message += getText(lang, "reputationCmd.points", { reputation: String(reputation) }) + "\n\n";
  message += `${repBar}\n`;
  message += getText(lang, "reputationCmd.spectrum") + div;

  message += getText(lang, "reputationCmd.currentEffectsTitle") + `\n\n`;

  if (reputation >= 50) {
    message += getText(lang, "reputationCmd.goodBenefitsTitle") + `\n`;
    message += getText(lang, "reputationCmd.goodBenefitsBullets") + div;
  } else if (reputation <= -50) {
    message += getText(lang, "reputationCmd.evilEffectsTitle") + `\n`;
    message += getText(lang, "reputationCmd.evilBullets") + div;
  } else {
    message += getText(lang, "reputationCmd.neutralTitle") + `\n`;
    message += getText(lang, "reputationCmd.neutralBullets") + div;
  }

  message += getText(lang, "reputationCmd.tiersTitle") + `\n`;
  message += getText(lang, "reputationCmd.tierSaint") + `\n`;
  message += getText(lang, "reputationCmd.tierHero") + `\n`;
  message += getText(lang, "reputationCmd.tierGood") + `\n`;
  message += getText(lang, "reputationCmd.tierNeutralTier") + `\n`;
  message += getText(lang, "reputationCmd.tierBad") + `\n`;
  message += getText(lang, "reputationCmd.tierVillain") + `\n`;
  message += getText(lang, "reputationCmd.tierDemon") + div;

  message += getText(lang, "reputationCmd.howToTitle") + `\n\n`;
  message += getText(lang, "reputationCmd.gainTitle") + `\n`;
  message += getText(lang, "reputationCmd.gainBullets") + `\n\n`;
  message += getText(lang, "reputationCmd.loseTitle") + `\n`;
  message += getText(lang, "reputationCmd.loseBullets") + `\n\n`;
  message += getText(lang, "reputationCmd.tip");

  return LenwyText(message);
}
