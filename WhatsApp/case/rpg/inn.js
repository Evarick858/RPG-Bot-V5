/*
  RPG Command : inn
  Base : Lenwy SCM — RPG Extension

  Inn System:
  - Available in locations WITH shops
  - Costs 30-100 gold (varies by location)
  - Instant full HP and Mana restore
  - Grants "Well Rested" buff: 10% HP/Mana regen per turn for 10 turns
  - Provides "resting" status (prevents instant PVP attacks)
*/

import fs from "fs";
import path from "path";
import { getLocationById } from "../../database/rpg/locations.js";
import { campSessions } from "../../database/rpg/sessionManager.js";
import { getEquipmentStats } from "../../database/rpg/equipmentHelper.js";
import { getLanguage, getText, getPlayerLanguage } from "../../database/rpg/languages.js";

const playersPath = path.join(process.cwd(), "WhatsApp", "database", "rpg", "players.json");

// ── Inn Prices by Location ───────────────────────────────

const innPrices = {
  starter_village: 30,
  trading_post: 30,
  fishing_village: 30,
  mountain_outpost: 50,
  desert_oasis: 50,
  floating_sanctuary: 75,
  underground_city: 75,
  mystic_temple: 100,
};

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

// ── Use Inn ──────────────────────────────────────────────

export async function useInn(lenwy, replyJid, playerJid, player, langProvided) {
  const lang =
    langProvided || getLanguage(getPlayerLanguage(player));
  const prefix = globalThis.noprefix ? "" : "!";

  const location = getLocationById(player.currentLocation);

  if (!location) {
    await lenwy.sendMessage(replyJid, {
      text: getText(lang, "innCmd.invalidLocation"),
    });
    return;
  }

  if (!location.actions.includes("shop")) {
    await lenwy.sendMessage(replyJid, {
      text: getText(lang, "innCmd.noInnHere", { prefix }),
    });
    return;
  }

  const { combatSessions } = await import("../../database/rpg/sessionManager.js");
  if (combatSessions.has(playerJid)) {
    await lenwy.sendMessage(replyJid, {
      text: getText(lang, "innCmd.cannotRestCombat"),
    });
    return;
  }

  if (campSessions.has(playerJid)) {
    await lenwy.sendMessage(replyJid, {
      text: getText(lang, "innCmd.alreadyResting"),
    });
    return;
  }

  const price = innPrices[player.currentLocation] || 50;

  if (player.gold < price) {
    await lenwy.sendMessage(replyJid, {
      text: getText(lang, "innCmd.notEnoughGold", {
        price: String(price),
        gold: String(player.gold),
        needed: String(price - player.gold),
      }),
    });
    return;
  }

  const equipStats = getEquipmentStats(player);
  const actualMaxHp = player.stats.maxHp + (equipStats.hp || 0);
  const actualMaxMana = player.stats.maxMana + (equipStats.mana || 0);

  const hasWellRestedBuff = player.statusEffects?.some((e) => e.type === "well_rested");
  if (
    player.stats.hp >= actualMaxHp &&
    player.stats.mana >= actualMaxMana &&
    hasWellRestedBuff
  ) {
    await lenwy.sendMessage(replyJid, {
      text: getText(lang, "innCmd.alreadyWellRested", {
        hp: String(player.stats.hp),
        maxHp: String(actualMaxHp),
        mana: String(player.stats.mana),
        maxMana: String(actualMaxMana),
      }),
    });
    return;
  }

  const players = loadPlayers();
  const playerData = players[playerJid];
  playerData.gold -= price;

  const hpRestored = actualMaxHp - playerData.stats.hp;
  const manaRestored = actualMaxMana - playerData.stats.mana;

  playerData.stats.hp = actualMaxHp;
  playerData.stats.mana = actualMaxMana;

  if (!playerData.statusEffects) playerData.statusEffects = [];
  playerData.statusEffects = playerData.statusEffects.filter((e) => e.type !== "well_rested");
  playerData.statusEffects.push({
    type: "well_rested",
    value: 10,
    duration: 10,
    description: getText(lang, "innCmd.effectStoredDesc"),
  });

  playerData.lastActive = new Date().toISOString();
  players[playerJid] = playerData;
  savePlayers(players);

  const sent = await lenwy.sendMessage(replyJid, {
    text: getText(langNow, "innCmd.welcomeRest", {
      price: String(price),
      remaining: String(playerData.gold),
      hp: String(playerData.stats.hp),
      maxHp: String(actualMaxHp),
      hpGain: String(hpRestored),
      mana: String(playerData.stats.mana),
      maxMana: String(actualMaxMana),
      manaGain: String(manaRestored),
    }),
  });

  const session = {
    playerJid,
    replyJid,
    messageKey: sent?.key,
    isInn: true,
    startTime: Date.now(),
  };

  campSessions.set(playerJid, session);
}

// ── Leave Inn ────────────────────────────────────────────

export async function leaveInn(lenwy, replyJid, playerJid) {
  const session = campSessions.get(playerJid);

  if (!session || !session.isInn) {
    return;
  }

  campSessions.delete(playerJid);

  const players = loadPlayers();
  const viewer = players[playerJid];
  const lang = getLanguage(viewer ? getPlayerLanguage(viewer) : "id");

  await lenwy.sendMessage(replyJid, {
    text: getText(lang, "innCmd.leaveCheckout"),
  });
}

// ── Command export ───────────────────────────────────────

export const info = {
  name: "Inn",
  menu: ["inn"],
  case: ["inn"],
  description: "Rest at an inn for full heal + regen buff (towns only).",
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

  const prefix = globalThis.noprefix ? "" : "!";
  const players = loadPlayers();
  const player = players[normalizedSender];

  if (!player) {
    const langU = getLanguage("id");
    return LenwyText(getText(langU, "innCmd.notRegistered", { prefix }));
  }

  const lang = getLanguage(getPlayerLanguage(player));
  await useInn(lenwy, replyJid, normalizedSender, player, lang);
}
