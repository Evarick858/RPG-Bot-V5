/*
  RPG Command : forage
  Base : Lenwy SCM — RPG Extension

  Flow:
  1. Player types "forage" (with prefix)
  2. Bot sends a pattern of 3 symbols (shown for 4 seconds)
  3. Bot edits message to hide pattern — player must type it back
  4. Player types answer without prefix (e.g. "leaf shroom flower")
  5. Bot scores the answer and rolls herb based on accuracy + luck
  6. Herb added to inventory

  Answer is handled via RPG session interceptor in evarick.js
*/

import fs from "fs";
import path from "path";
import { canDoAction } from "../../database/rpg/locations.js";
import { trackGathering } from "../../database/rpg/questTracker.js";
import {
  herbs,
  herbRarityConfig,
  generatePattern,
  scoreAnswer,
  rollHerb,
  forageSymbols,
} from "../../database/rpg/herbs.js";
import { foragingSessions } from "../../database/rpg/sessionManager.js";
import { getLanguage, getText, getPlayerLanguage } from "../../database/rpg/languages.js";

const playersPath = path.join(process.cwd(), "WhatsApp", "database", "rpg", "players.json");

const PATTERN_SHOW_MS = 4000;  // 4 seconds to memorize
const ANSWER_TIMEOUT_MS = 15000; // 15 seconds to answer

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

function addToInventory(player, itemId, qty = 1) {
  const existing = player.inventory.find((i) => i.id === itemId);
  if (existing) {
    existing.qty += qty;
  } else {
    player.inventory.push({ id: itemId, qty });
  }
}

// Build the symbol hint line
function buildSymbolHint() {
  return forageSymbols.map((s) => `${s.emoji} = *${s.key}*`).join("  |  ");
}

// ── Start foraging session ───────────────────────────────

export async function startForaging(lenwy, replyJid, playerJid, player) {
  const locale = getPlayerLanguage(player);
  const lang = getLanguage(locale);

  if (!canDoAction(player.currentLocation, "forage")) {
    await lenwy.sendMessage(replyJid, {
      text: getText(lang, "foraging.cantForage"),
    });
    return;
  }

  if (foragingSessions.has(playerJid)) {
    const s = foragingSessions.get(playerJid);
    if (s.phase === "answering") {
      await lenwy.sendMessage(replyJid, {
        text: getText(lang, "foraging.alreadyForaging"),
      });
      return;
    }
  }

  // Generate random pattern
  const pattern = generatePattern();
  const patternDisplay = pattern.map((s) => s.emoji).join("  ");
  const patternKeys = pattern.map((s) => `*${s.key}*`).join(" ");

  const session = {
    playerJid,
    replyJid,
    locale,
    pattern,
    phase: "showing",   // showing → answering → done
    messageKey: null,
    hideTimeout: null,
    expireTimeout: null,
  };

  foragingSessions.set(playerJid, session);

  // Send pattern message
  const sent = await lenwy.sendMessage(replyJid, {
    text:
      `${getText(lang, "foraging.searching")}\n\n` +
      `${getText(lang, "foraging.spotSomething")}\n\n` +
      `${patternDisplay}\n\n` +
      `${getText(lang, "foraging.fading")}\n\n` +
      `${buildSymbolHint()}`,
  });
  session.messageKey = sent?.key;

  // After 4 seconds — hide pattern, ask for answer
  session.hideTimeout = setTimeout(async () => {
    if (!foragingSessions.has(playerJid)) return;

    session.phase = "answering";

    const langAns = getLanguage(session.locale || "en");

    if (session.messageKey) {
      await lenwy.sendMessage(replyJid, {
        text:
          `${getText(langAns, "foraging.whatDidYouSee")}\n\n` +
          `${getText(langAns, "foraging.patternMasked")}` +
          `${getText(langAns, "foraging.typePatternAgain")}\n\n` +
          `${buildSymbolHint()}\n\n` +
          `${getText(langAns, "foraging.secondsToAnswer")}`,
        edit: session.messageKey,
      });
    }

    // Auto-expire if no answer
    session.expireTimeout = setTimeout(async () => {
      if (!foragingSessions.has(playerJid)) return;
      foragingSessions.delete(playerJid);

      const langExp = getLanguage(session.locale || "en");

      if (session.messageKey) {
        await lenwy.sendMessage(replyJid, {
          text:
            `${getText(langExp, "foraging.tooSlow")}\n\n` +
            `${getText(langExp, "foraging.patternMasked")}` +
            `${getText(langExp, "foraging.patternWas")} ${patternKeys}\n\n` +
            `${getText(langExp, "foraging.forageAgain")}`,
          edit: session.messageKey,
        });
      }
    }, ANSWER_TIMEOUT_MS);

  }, PATTERN_SHOW_MS);
}

// ── Handle forage answer ─────────────────────────────────

export async function handleForageAnswer(lenwy, replyJid, playerJid, answer) {
  const session = foragingSessions.get(playerJid);

  if (!session) {
    return false;
  }

  // Accept answers during both "showing" and "answering" phases
  if (session.phase !== "showing" && session.phase !== "answering") {
    return false;
  }

  // Clear all timeouts
  clearTimeout(session.hideTimeout);
  clearTimeout(session.expireTimeout);
  foragingSessions.delete(playerJid);

  const score = scoreAnswer(session.pattern, answer);
  const patternKeys = session.pattern.map((s) => `*${s.key}*`).join(" ");
  const patternEmojis = session.pattern.map((s) => s.emoji).join("  ");

  // Load player
  const players = loadPlayers();
  const player = players[playerJid];
  if (!player) {
    return true;
  }

  const lang = getLanguage(getPlayerLanguage(player) || session.locale || "en");

  const scoreTexts = {
    perfect: getText(lang, "foraging.scorePerfectNoLoot"),
    good: getText(lang, "foraging.close"),
    okay: getText(lang, "foraging.notEnough"),
    wrong: getText(lang, "foraging.wrong"),
  };

  // Roll herb
  const caught = rollHerb(player.currentLocation, player.stats.luck, score);

  if (!caught) {
    const scoreText = scoreTexts[score];

    if (session.messageKey) {
      await lenwy.sendMessage(replyJid, {
        text:
          `${scoreText}\n\n` +
          `${getText(lang, "foraging.nothingFound")}\n\n` +
          `${getText(lang, "foraging.patternWasEmojis", { emojis: patternEmojis })}\n` +
          `${getText(lang, "foraging.yourAnswerLine", { answer })}\n\n` +
          `${getText(lang, "foraging.mustGetAll")}\n\n` +
          `${getText(lang, "foraging.tryForageAgain")}`,
        edit: session.messageKey,
      });
    }
    return true;
  }

  // Add to inventory
  addToInventory(player, caught.id, 1);
  player.stats_tracker.forageCount = (player.stats_tracker.forageCount || 0) + 1;
  player.lastActive = new Date().toISOString();
  players[playerJid] = player;
  savePlayers(players);

  // Track quest progress
  trackGathering(playerJid, 1);

  const rarityInfo = herbRarityConfig[caught.rarity];

  const scoreLines = {
    perfect: getText(lang, "foraging.scorePerfectLoot"),
    good: getText(lang, "foraging.close"),
    okay: getText(lang, "foraging.notEnough"),
    wrong: getText(lang, "foraging.wrong"),
  };
  const scoreText = scoreLines[score];

  if (session.messageKey) {
    await lenwy.sendMessage(replyJid, {
      text:
        `${scoreText}\n\n` +
        `${getText(lang, "foraging.patternWasEmojis", { emojis: patternEmojis })}\n` +
        `${getText(lang, "foraging.yourAnswerLine", { answer })}\n` +
        `${getText(lang, "fishing.catchLine", {
          color: rarityInfo.color,
          rarity: caught.rarity,
          name: caught.name,
        })}\n` +
        `${getText(lang, "mining.oreDescLine", { desc: caught.description })}\n` +
        `${getText(lang, "fishing.sellValue", { price: caught.sellPrice })}\n\n` +
        `${getText(lang, "fishing.addedInventory")}\n` +
        `${getText(lang, "foraging.forageAgain")}`,
      edit: session.messageKey,
    });
  }

  return true;
}

// ── Command export ───────────────────────────────────────

export const info = {
  name: "Foraging",
  menu: ["forage"],
  case: ["forage"],
  description: "Search for herbs, mushrooms, and rare plants.",
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

  if (!player) {
    const langU = getLanguage("id");
    return LenwyText(getText(langU, "gold.notRegistered"));
  }

  await startForaging(lenwy, replyJid, normalizedSender, player);
}
