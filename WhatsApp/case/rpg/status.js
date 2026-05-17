/*
  RPG Command : status
  Base : Lenwy SCM — RPG Extension

  Flow:
  1. Player types "status" during combat (no prefix needed)
  2. Bot displays detailed battle status:
     - Player HP, Mana, SP (shield points)
     - Enemy HP, SP
     - Player skill cooldowns
     - Active status effects on both player and enemy
     - Current round number
  3. Works in any combat mode (hunt, pvp, raid)
  4. Does NOT consume a turn — purely informational

  This command is handled via RPG session interceptor in evarick.js
  But also available as a standalone command for testing.
*/

import fs from "fs";
import path from "path";
import { combatSessions } from "./hunt.js";
import { formatActiveEffects } from "../../database/rpg/skillEffects.js";
import { getLanguage, getText, getPlayerLanguage } from "../../database/rpg/languages.js";

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

// ── Helpers ──────────────────────────────────────────────

function buildBar(current, max, size = 10) {
  const filled = Math.round((current / max) * size);
  const empty = size - filled;
  return `[${"■".repeat(Math.max(0, filled))}${"□".repeat(Math.max(0, empty))}]`;
}

function buildStatusMessage(lang, state) {
  const p = state.player;
  const e = state.enemy;

  const pHpBar = buildBar(p.hp, p.maxHp, 10);
  const eHpBar = buildBar(e.hp, e.maxHp, 10);
  const pHpPct = Math.round((p.hp / p.maxHp) * 100);
  const eHpPct = Math.round((e.hp / e.maxHp) * 100);

  const pSpBar =
    p.sp > 0 ? getText(lang, "combatStatus.shieldLine", { cur: String(p.sp), max: "1000" }) : "";
  const eSpBar =
    e.sp > 0 ? getText(lang, "combatStatus.shieldLine", { cur: String(e.sp), max: "1000" }) : "";

  const pEffects = formatActiveEffects(p);
  const eEffects = formatActiveEffects(e);
  const pEffectsText = pEffects
    ? getText(lang, "combatStatus.effectsLine", { list: pEffects })
    : "";
  const eEffectsText = eEffects
    ? getText(lang, "combatStatus.effectsLine", { list: eEffects })
    : "";

  const pStunned =
    (p.stunned || 0) > 0
      ? getText(lang, "combatStatus.stunned", { rounds: String(p.stunned) })
      : "";
  const eStunned =
    (e.stunned || 0) > 0
      ? getText(lang, "combatStatus.stunned", { rounds: String(e.stunned) })
      : "";
  const pSilenced = (p.statusEffects || []).some((ef) => ef.type === "silence")
    ? getText(lang, "combatStatus.silenced")
    : "";
  const eSilenced = (e.statusEffects || []).some((ef) => ef.type === "silence")
    ? getText(lang, "combatStatus.silenced")
    : "";

  const pStatusText =
    pStunned || pSilenced
      ? getText(lang, "combatStatus.playerStatusLine", { stunned: pStunned, silent: pSilenced })
      : "";
  const eStatusText =
    eStunned || eSilenced
      ? getText(lang, "combatStatus.playerStatusLine", { stunned: eStunned, silent: eSilenced })
      : "";

  let equipTxt = "";
  if (p._equipmentBonus) {
    const bonus = p._equipmentBonus;
    const bonuses = [];
    if (bonus.attack > 0) bonuses.push(`⚔️+${bonus.attack}`);
    if (bonus.defense > 0) bonuses.push(`🛡️+${bonus.defense}`);
    if (bonus.hp > 0) bonuses.push(`❤️+${bonus.hp}`);
    if (bonus.mana > 0) bonuses.push(`💧+${bonus.mana}`);
    if (bonuses.length > 0) {
      equipTxt = getText(lang, "combatStatus.equipLine", { bonuses: bonuses.join(" ") });
    }
  }

  let passivesTxt = "";
  if (p.allPassives && p.allPassives.length > 0) {
    const passiveNames = p.allPassives.map((pass) => `${pass.emoji}${pass.name}`).join(", ");
    passivesTxt = getText(lang, "combatStatus.passivesLine", { names: passiveNames });
  }

  let skillsBlock = "";
  (p.skills || []).forEach((s, i) => {
    const slotNum = String(i + 1);
    if (!s?.id) {
      skillsBlock += getText(lang, "combatStatus.skillEmptyRow", { i: slotNum });
      return;
    }
    const cdTxt =
      s.cooldownRemaining > 0
        ? getText(lang, "combatStatus.cooldownWait", { n: String(s.cooldownRemaining) })
        : getText(lang, "combatStatus.cooldownReady");
    const manaStr =
      s.manaCost > 0
        ? getText(lang, "combatStatus.manaCostTpl", { cost: String(s.manaCost) })
        : "";
    skillsBlock += getText(lang, "combatStatus.skillRowFmt", {
      i: slotNum,
      name: s.name,
      cdTxt,
      manaStr,
    });
  });

  const bossTag = e.isBoss ? getText(lang, "combatStatus.bossTag") : "";

  return (
    getText(lang, "combatStatus.title", { round: String(state.round) }) +
    getText(lang, "combatStatus.playerHeader", { name: p.name }) +
    getText(lang, "combatStatus.hpLineP", {
      bar: pHpBar,
      hp: String(p.hp),
      maxHp: String(p.maxHp),
      pct: String(pHpPct),
      shield: pSpBar,
    }) +
    getText(lang, "combatStatus.manaLineP", {
      mana: String(p.mana),
      maxMana: String(p.maxMana),
      equipTxt,
      passivesTxt,
      pStatusComb: pStatusText,
      pfx: pEffectsText,
    }) +
    getText(lang, "combatStatus.skillsHeader") +
    `${skillsBlock}\n` +
    getText(lang, "combatStatus.dividerMid") +
    getText(lang, "combatStatus.enemyHeader", {
      emoji: e.emoji || "👾",
      name: e.name,
      bossTag,
    }) +
    getText(lang, "combatStatus.hpLineE", {
      bar: eHpBar,
      hp: String(e.hp),
      maxHp: String(e.maxHp),
      pct: String(eHpPct),
      shield: eSpBar,
      eStatusComb: eStatusText,
      efx: eEffectsText,
    }) +
    getText(lang, "combatStatus.footer")
  );
}

// ── Handle status check ──────────────────────────────────

export async function handleStatus(lenwy, replyJid, playerJid) {
  const session = combatSessions.get(playerJid);
  const players = loadPlayers();
  const viewer = players[playerJid];
  const lang = getLanguage(viewer ? getPlayerLanguage(viewer) : "en");

  if (!session || session.isOver) {
    await lenwy.sendMessage(replyJid, {
      text: getText(lang, "combatStatus.notInCombat"),
    });
    return;
  }

  const statusText = buildStatusMessage(lang, session);

  await lenwy.sendMessage(replyJid, {
    text: statusText,
  });
}

// ── Metadata ─────────────────────────────────────────────

export const info = {
  name: "Status",
  menu: ["status"],
  case: ["status"],
  description: "View detailed battle status during combat.",
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
  const { lenwy, replyJid, normalizedSender } = leni;

  const botJid = lenwy.user?.id?.split(":")[0] + "@s.whatsapp.net";
  if (normalizedSender === botJid) return;

  await handleStatus(lenwy, replyJid, normalizedSender);
}
