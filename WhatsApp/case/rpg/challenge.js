/*
  RPG Command : challenge
  Base : Lenwy SCM — RPG Extension

  PVP Challenge System:
  - Challenge another player to PVP combat
  - If both players are in the same location, instant attack (no accept needed)
  - Otherwise, target must accept the challenge
  - Winner gets 10% of loser's gold
  - Winner has 20% chance to get 1-5 random items from loser's bag (non-equipped)
*/

import fs from "fs";
import path from "path";
import { pvpChallenges } from "../../database/rpg/sessionManager.js";
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
  name: "Challenge",
  menu: ["challenge"],
  case: ["challenge"],
  description: "Challenge another player to PVP combat.",
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
  const challenger = players[normalizedSender];

  if (!challenger) {
    const langU = getLanguage("id");
    return LenwyText(getText(langU, "gold.notRegistered"));
  }

  const lang = getLanguage(getPlayerLanguage(challenger));

  // Check if player is in combat
  const { combatSessions } = await import("../../database/rpg/sessionManager.js");
  if (combatSessions.has(normalizedSender)) {
    return LenwyText(getText(lang, "challengeCmd.alreadyInCombatFull"));
  }

  // Get target player from mention or name
  let targetJid = null;
  let targetName = null;

  // Check for mention
  if (m.message?.extendedTextMessage?.contextInfo?.mentionedJid?.length > 0) {
    targetJid = m.message.extendedTextMessage.contextInfo.mentionedJid[0];
  } else if (args.length > 0) {
    // Search by name
    targetName = args.join(" ").toLowerCase();
    const found = Object.entries(players).find(([jid, p]) => 
      p.name.toLowerCase() === targetName
    );
    if (found) {
      targetJid = found[0];
    }
  }

  if (!targetJid) {
    return LenwyText(getText(lang, "challengeCmd.needTarget"));
  }

  // Check if target exists
  const target = players[targetJid];
  if (!target) {
    return LenwyText(getText(lang, "challengeCmd.targetNotRegistered"));
  }

  // Can't challenge yourself
  if (targetJid === normalizedSender) {
    return LenwyText(getText(lang, "challengeCmd.cantChallengeSelf"));
  }

  // Check if target is in combat
  if (combatSessions.has(targetJid)) {
    return LenwyText(getText(lang, "challengeCmd.targetInCombat", { name: target.name }));
  }

  // Check if challenger has enough HP
  if (challenger.stats.hp <= 0) {
    return LenwyText(getText(lang, "challengeCmd.challengerDefeated"));
  }

  // Check if target has enough HP
  if (target.stats.hp <= 0) {
    return LenwyText(getText(lang, "challengeCmd.targetDefeated", { name: target.name }));
  }

  // Check if both players are in the same location
  const sameLocation = challenger.currentLocation === target.currentLocation;
  
  // Check if in starter village (safe zone - no ambush allowed)
  const inStarterVillage = challenger.currentLocation === "starter_village";

  // Check if target is camping/resting (protected status)
  const { campSessions } = await import("../../database/rpg/sessionManager.js");
  const targetIsCamping = campSessions.has(targetJid);

  if (sameLocation && !targetIsCamping && !inStarterVillage) {
    // Instant attack - no accept needed (only if target is NOT camping and NOT in starter village)
    const { startPvP } = await import("./pvpCombat.js");
    await startPvP(lenwy, replyJid, normalizedSender, targetJid, challenger, target, true);

    const langTar = getLanguage(getPlayerLanguage(target));

    await LenwyText(
      getText(lang, "challengeCmd.ambushChallenger", {
        target: target.name,
        self: challenger.name,
      }),
    );

    try {
      await lenwy.sendMessage(targetJid, {
        text: getText(langTar, "challengeCmd.ambushTarget", {
          challenger: challenger.name,
        }),
      });
    } catch (err) {
      console.log("[CHALLENGE] Could not notify target:", err.message);
    }

    return;
  } else if (sameLocation && (targetIsCamping || inStarterVillage)) {
    const langTar = getLanguage(getPlayerLanguage(target));
    const protectionReasonCh = getText(
      lang,
      inStarterVillage ? "challengeCmd.protStarter" : "challengeCmd.protCamping",
    );
    const protectionReasonTa = getText(
      langTar,
      inStarterVillage ? "challengeCmd.protStarter" : "challengeCmd.protCamping",
    );

    pvpChallenges.set(targetJid, {
      challengerJid: normalizedSender,
      challengerName: challenger.name,
      targetJid: targetJid,
      targetName: target.name,
      timestamp: Date.now(),
      replyJid: replyJid,
    });

    const expireTextCh = getText(lang, "challengeCmd.challengeExpired", { target: target.name });

    setTimeout(() => {
      if (pvpChallenges.has(targetJid)) {
        const challenge = pvpChallenges.get(targetJid);
        if (challenge.challengerJid === normalizedSender) {
          pvpChallenges.delete(targetJid);
          lenwy.sendMessage(normalizedSender, {
            text: expireTextCh,
          });
        }
      }
    }, 60000);

    await LenwyText(
      getText(lang, "challengeCmd.challengeSentProtected", {
        target: target.name,
        reason: protectionReasonCh,
      }),
    );

    try {
      await lenwy.sendMessage(targetJid, {
        text: getText(langTar, "challengeCmd.dmInviteProtected", {
          challenger: challenger.name,
          reason: protectionReasonTa,
        }),
      });
    } catch (err) {
      console.log("[CHALLENGE] Could not notify target:", err.message);
    }
  } else {
    // Different locations - need accept
    // Store challenge
    pvpChallenges.set(targetJid, {
      challengerJid: normalizedSender,
      challengerName: challenger.name,
      targetJid: targetJid,
      targetName: target.name,
      timestamp: Date.now(),
      replyJid: replyJid,
    });

    const langTar2 = getLanguage(getPlayerLanguage(target));
    const expireRemote = getText(lang, "challengeCmd.challengeExpired", { target: target.name });

    setTimeout(() => {
      if (pvpChallenges.has(targetJid)) {
        const challenge = pvpChallenges.get(targetJid);
        if (challenge.challengerJid === normalizedSender) {
          pvpChallenges.delete(targetJid);
          lenwy.sendMessage(normalizedSender, {
            text: expireRemote,
          });
        }
      }
    }, 60000);

    await LenwyText(
      getText(lang, "challengeCmd.challengeSentRemote", { target: target.name }),
    );

    try {
      await lenwy.sendMessage(targetJid, {
        text: getText(langTar2, "challengeCmd.dmInvite", {
          challenger: challenger.name,
        }),
      });
    } catch (err) {
      console.log("[CHALLENGE] Could not notify target:", err.message);
    }
  }
}
