/*
  RPG Command : camp
  Base : Lenwy SCM — RPG Extension

  Camp System:
  - Available in locations WITHOUT shops
  - Regenerates 1% HP and Mana per second
  - Animated message updates
  - Provides "camping" status (prevents instant PVP attacks)
  - Can still accept/decline challenges while camping

  NOTE: `/leave` is shared with inn — inn sessions delegate to inn.js when `session.isInn`.
*/

import fs from "fs";
import path from "path";
import { getLocationById } from "../../database/rpg/locations.js";
import { campSessions } from "../../database/rpg/sessionManager.js";
import { getEquipmentStats } from "../../database/rpg/equipmentHelper.js";
import { getLanguage, getText, getPlayerLanguage } from "../../database/rpg/languages.js";
import { leaveInn } from "./inn.js";

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

function savePlayers(players) {
  const raw = fs.readFileSync(playersPath, "utf8");
  const data = JSON.parse(raw);
  const updated = { _comment: data._comment, _template: data._template, ...players };
  fs.writeFileSync(playersPath, JSON.stringify(updated, null, 2), "utf8");
}

function campAnimFrames(lang) {
  const a = getText(lang, "campCmd.animA");
  const b = getText(lang, "campCmd.animB");
  return [a, b, a, b];
}

function cmdPrefix() {
  return globalThis.noprefix ? "" : "!";
}

// ── Start Camping ────────────────────────────────────────

export async function startCamp(lenwy, replyJid, playerJid, player, langProvided) {
  const lang =
    langProvided || getLanguage(getPlayerLanguage(player));
  const prefix = cmdPrefix();

  const location = getLocationById(player.currentLocation);

  if (!location) {
    await lenwy.sendMessage(replyJid, {
      text: getText(lang, "campCmd.invalidLocation"),
    });
    return;
  }

  if (location.actions.includes("shop")) {
    await lenwy.sendMessage(replyJid, {
      text: getText(lang, "campCmd.cantCampInTown", { prefix }),
    });
    return;
  }

  if (campSessions.has(playerJid)) {
    await lenwy.sendMessage(replyJid, {
      text: getText(lang, "campCmd.alreadyCamping"),
    });
    return;
  }

  const { combatSessions } = await import("../../database/rpg/sessionManager.js");
  if (combatSessions.has(playerJid)) {
    await lenwy.sendMessage(replyJid, {
      text: getText(lang, "campCmd.cannotInCombat"),
    });
    return;
  }

  const initialHp = player.stats.hp;
  const initialMana = player.stats.mana;

  const equipStats = getEquipmentStats(player);
  const maxHp = player.stats.maxHp + (equipStats.hp || 0);
  const maxMana = player.stats.maxMana + (equipStats.mana || 0);

  if (initialHp >= maxHp && initialMana >= maxMana) {
    await lenwy.sendMessage(replyJid, {
      text: getText(lang, "campCmd.alreadyFull", {
        hp: String(initialHp),
        maxHp: String(maxHp),
        mana: String(initialMana),
        maxMana: String(maxMana),
      }),
    });
    return;
  }

  const sent = await lenwy.sendMessage(replyJid, {
    text: getText(lang, "campCmd.settingUpCamp", {
      hp: String(initialHp),
      maxHp: String(maxHp),
      mana: String(initialMana),
      maxMana: String(maxMana),
    }),
  });

  const frames = campAnimFrames(lang);

  const session = {
    playerJid,
    replyJid,
    messageKey: sent?.key,
    startTime: Date.now(),
    currentHp: initialHp,
    currentMana: initialMana,
    maxHp,
    maxMana,
    frameIndex: 0,
    secondsElapsed: 0,
    uiLangCode: lang.code,
    campFramesCached: frames,
  };

  campSessions.set(playerJid, session);

  startRegenLoop(lenwy, session);
}

// ── Regeneration Loop ────────────────────────────────────

async function startRegenLoop(lenwy, session) {
  const MAX_CAMP_TIME = 300;
  const prefix = cmdPrefix();

  const interval = setInterval(async () => {
    if (!campSessions.has(session.playerJid)) {
      clearInterval(interval);
      return;
    }

    const lang = getLanguage(session.uiLangCode || "id");

    session.secondsElapsed++;

    if (session.secondsElapsed >= MAX_CAMP_TIME) {
      clearInterval(interval);

      const players = loadPlayers();
      const playerData = players[session.playerJid];
      if (playerData) {
        playerData.stats.hp = session.currentHp;
        playerData.stats.mana = session.currentMana;
        playerData.lastActive = new Date().toISOString();
        players[session.playerJid] = playerData;
        savePlayers(players);
      }

      try {
        await lenwy.sendMessage(session.replyJid, {
          text: getText(lang, "campCmd.timeoutReached", {
            mins: "5",
            hp: String(session.currentHp),
            maxHp: String(session.maxHp),
            mana: String(session.currentMana),
            maxMana: String(session.maxMana),
            prefix,
          }),
          edit: session.messageKey,
        });
      } catch (err) {
        console.error("[CAMP] Failed to send timeout message:", err.message);
      }

      campSessions.delete(session.playerJid);
      return;
    }

    const hpRegen = Math.ceil(session.maxHp * 0.01);
    const manaRegen = Math.ceil(session.maxMana * 0.01);

    const oldHp = session.currentHp;
    const oldMana = session.currentMana;

    session.currentHp = Math.min(session.currentHp + hpRegen, session.maxHp);
    session.currentMana = Math.min(session.currentMana + manaRegen, session.maxMana);

    const hpGained = session.currentHp - oldHp;
    const manaGained = session.currentMana - oldMana;

    const isFullyHealed =
      session.currentHp >= session.maxHp && session.currentMana >= session.maxMana;

    session.frameIndex =
      (session.frameIndex + 1) % (session.campFramesCached?.length || 4);

    const frameList = session.campFramesCached || campAnimFrames(lang);
    const frame = frameList[session.frameIndex % frameList.length];

    let statusText = `${frame}\n\n`;

    if (isFullyHealed) {
      statusText += getText(lang, "campCmd.fullyRestedBanner", {
        hp: String(session.currentHp),
        maxHp: String(session.maxHp),
        mana: String(session.currentMana),
        maxMana: String(session.maxMana),
        secs: String(session.secondsElapsed),
      });
    } else {
      const hpPct = Math.floor((session.currentHp / session.maxHp) * 100);
      const manaPct = Math.floor((session.currentMana / session.maxMana) * 100);
      statusText += getText(lang, "campCmd.regenBanner", {
        hp: String(session.currentHp),
        maxHp: String(session.maxHp),
        hpPct: String(hpPct),
        hpGain: String(hpGained),
        mana: String(session.currentMana),
        maxMana: String(session.maxMana),
        manaPct: String(manaPct),
        manaGain: String(manaGained),
        secs: String(session.secondsElapsed),
      });
    }

    try {
      await lenwy.sendMessage(session.replyJid, {
        text: statusText,
        edit: session.messageKey,
      });
    } catch (err) {
      console.error("[CAMP] Failed to update message:", err.message);
      clearInterval(interval);
      campSessions.delete(session.playerJid);
      return;
    }

    if (isFullyHealed) {
      clearInterval(interval);
    }
  }, 1000);

  session.intervalId = interval;
}

// ── Leave Camp ───────────────────────────────────────────

export async function leaveCamp(lenwy, replyJid, playerJid) {
  const players = loadPlayers();
  const viewer = players[playerJid];
  const lang = getLanguage(viewer ? getPlayerLanguage(viewer) : "id");

  const session = campSessions.get(playerJid);

  if (!session) {
    await lenwy.sendMessage(replyJid, {
      text: getText(lang, "campCmd.notCamping"),
    });
    return;
  }

  if (session.isInn) {
    return leaveInn(lenwy, replyJid, playerJid);
  }

  if (session.intervalId) {
    clearInterval(session.intervalId);
  }

  const player = players[playerJid];

  if (player) {
    player.stats.hp = session.currentHp;
    player.stats.mana = session.currentMana;
    player.lastActive = new Date().toISOString();
    players[playerJid] = player;
    savePlayers(players);
  }

  campSessions.delete(playerJid);

  await lenwy.sendMessage(replyJid, {
    text: getText(lang, "campCmd.leaveSummary", {
      hp: String(session.currentHp),
      maxHp: String(session.maxHp),
      mana: String(session.currentMana),
      maxMana: String(session.maxMana),
      secs: String(session.secondsElapsed ?? 0),
    }),
  });
}

// ── Command export ───────────────────────────────────────

export const info = {
  name: "Camp",
  menu: ["camp", "leave"],
  case: ["camp", "leave"],
  description: "Set up camp to regenerate HP and Mana (wilderness only).",
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
  const { lenwy, replyJid, normalizedSender, LenwyText, command } = leni;

  const botJid = lenwy.user?.id?.split(":")[0] + "@s.whatsapp.net";
  if (normalizedSender === botJid) return;

  const px = cmdPrefix();
  const players = loadPlayers();
  const player = players[normalizedSender];

  if (!player) {
    const langU = getLanguage("id");
    return LenwyText(getText(langU, "campCmd.notRegistered", { prefix: px }));
  }

  const lang = getLanguage(getPlayerLanguage(player));

  if (command === "camp") {
    await startCamp(lenwy, replyJid, normalizedSender, player, lang);
  } else if (command === "leave") {
    await leaveCamp(lenwy, replyJid, normalizedSender);
  }
}
