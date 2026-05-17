/*
  RPG Command : chop
  Base : Lenwy SCM — RPG Extension

  Flow:
  1. Player types "chop" (with prefix) to find a tree
  2. Bot sends tree HP bar + bouncing cursor (edited message)
  3. Cursor bounces left/right every second
  4. Player types "swing" (no prefix) to swing axe
  5. Bot checks cursor position vs center → damage multiplier
  6. Tree HP drops by (axe damage * timing multiplier)
  7. Tree falls at 0 HP → wood drops based on luck + axe

  "swing" mid-session is handled via RPG session interceptor in evarick.js
  The initial "chop" command uses the normal prefix system
*/

import fs from "fs";
import path from "path";
import { canDoAction } from "../../database/rpg/locations.js";
import { rollWood, woodRarityConfig, axes, woods, chopTimingMultiplier } from "../../database/rpg/woods.js";
import { choppingSessions } from "../../database/rpg/sessionManager.js";
import { trackGathering } from "../../database/rpg/questTracker.js";
import { getLanguage, getText, getPlayerLanguage } from "../../database/rpg/languages.js";

const playersPath = path.join(process.cwd(), "WhatsApp", "database", "rpg", "players.json");

const CURSOR_SIZE = 10;
const CENTER_POSITIONS = [4, 5]; // sweet spot

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

function getEquippedAxe(player) {
  const axeIds = ["diamond_axe", "golden_axe", "iron_axe", "wooden_axe", "basic_axe"];
  for (const id of axeIds) {
    const tool = player.inventory.find((i) => i.id === id);
    if (tool) {
      // Initialize durability if not present
      if (tool.durability === undefined) {
        const axe = axes[id];
        tool.durability = axe.maxDurability;
      }
      // Only return if tool has durability left
      if (tool.durability > 0) {
        return { id, tool };
      }
    }
  }
  return null;
}

function getDurabilityBar(current, max) {
  const percent = (current / max) * 100;
  const filled = Math.round((current / max) * 10);
  const empty = 10 - filled;
  
  let color = "🟢"; // green
  if (percent <= 25) color = "🔴"; // red
  else if (percent <= 50) color = "🟡"; // yellow
  
  return `${color} [${"■".repeat(filled)}${"□".repeat(empty)}] ${current}/${max}`;
}

function reduceDurability(player, toolId) {
  const tool = player.inventory.find((i) => i.id === toolId);
  if (!tool) return false;
  
  tool.durability = Math.max(0, tool.durability - 1);
  return tool.durability === 0; // returns true if broken
}

// Build swing counter display
function buildSwingCounter(lang, current, max) {
  const remaining = max - current;
  const done = "✅".repeat(current);
  const todo = "⬜".repeat(remaining);
  const suffix = getText(lang, "chopping.swingSuffix");
  return `${done}${todo} ${current}/${max} ${suffix}`;
}

function timingHitLine(lang, timing) {
  const keys = {
    perfect: "chopping.perfectHit",
    good: "chopping.goodHit",
    okay: "chopping.okayHit",
    miss: "chopping.missHit",
  };
  const line = getText(lang, keys[timing]);
  return line ? `${line}\n\n` : "";
}

// Build cursor bar — cursor bounces, sweet spot always at center
function buildCursorBar(cursorPos) {
  let bar = "[";
  for (let i = 0; i < CURSOR_SIZE; i++) {
    if (i === cursorPos) {
      bar += "🪓"; // cursor (axe)
    } else if (CENTER_POSITIONS.includes(i)) {
      bar += "🎯"; // sweet spot
    } else {
      bar += "⬜";
    }
  }
  bar += "]";
  return bar;
}

// Get timing result based on cursor distance from center
function getTimingResult(cursorPos) {
  const dist = Math.min(
    ...CENTER_POSITIONS.map((c) => Math.abs(cursorPos - c))
  );
  if (dist === 0) return "perfect";
  if (dist === 1) return "good";
  if (dist === 2) return "okay";
  return "miss";
}

// Get required swings based on rarity
function getRequiredSwings(rarity) {
  const swingMap = {
    "Common": 1,
    "Uncommon": 2,
    "Rare": 3,
    "Epic": 4,
    "Legendary": 5,
  };
  return swingMap[rarity] || 1;
}

// Build full chopping message
function buildChopText(lang, session, axeName, axeDurability, axeMaxDurability, lastHit = null) {
  const swingCounter = buildSwingCounter(lang, session.swingCount, session.requiredSwings);
  const cursorBar = buildCursorBar(session.cursorPos);

  let treeEmoji = "🌲";
  const progress = session.swingCount / session.requiredSwings;
  if (progress >= 0.75) treeEmoji = "🪵";
  else if (progress >= 0.5) treeEmoji = "🌿";

  let hitLine = "";
  if (lastHit) {
    hitLine = timingHitLine(lang, lastHit.timing);
  }

  let durabilityLine = "";
  if (axeDurability !== null && axeMaxDurability !== null) {
    const durabilityBar = getDurabilityBar(axeDurability, axeMaxDurability);
    durabilityLine = getText(lang, "chopping.pickaxeDurabilityBlock", { bar: durabilityBar });
  }

  return (
    `${getText(lang, "chopping.panelTitle")}` +
    `${getText(lang, "chopping.progressLine", { emoji: treeEmoji, counter: swingCounter })}` +
    `${hitLine}` +
    `${cursorBar}\n` +
    `${getText(lang, "chopping.sweetSpotLegend")}` +
    `${getText(lang, "chopping.axeLine", { name: axeName })}` +
    `${durabilityLine}` +
    `${getText(lang, "chopping.swingPrompt")}` +
    `${getText(lang, "chopping.swingHint")}`
  );
}

// ── Start chopping session ───────────────────────────────

export async function startChopping(lenwy, replyJid, playerJid, player) {
  const locale = getPlayerLanguage(player);
  const lang = getLanguage(locale);

  if (!canDoAction(player.currentLocation, "chop")) {
    await lenwy.sendMessage(replyJid, {
      text: getText(lang, "chopping.cantChop"),
    });
    return;
  }

  const axeData = getEquippedAxe(player);
  if (!axeData) {
    await lenwy.sendMessage(replyJid, {
      text: getText(lang, "chopping.noAxe"),
    });
    return;
  }
  
  const { id: axeId, tool: axeTool } = axeData;

  // Save player if durability was just initialized
  const players = loadPlayers();
  players[playerJid] = player;
  savePlayers(players);

  if (choppingSessions.has(playerJid)) {
    await lenwy.sendMessage(replyJid, {
      text: getText(lang, "chopping.alreadyChopping"),
    });
    return;
  }

  const axe = axes[axeId];

  // Roll which tree/wood to find
  const targetWood = rollWood(player.currentLocation, player.stats.luck, axeId);
  if (!targetWood) {
    await lenwy.sendMessage(replyJid, {
      text: getText(lang, "chopping.noTrees"),
    });
    return;
  }

  const requiredSwings = getRequiredSwings(targetWood.rarity);

  const session = {
    playerJid,
    replyJid,
    locale,
    axeId,
    targetWoodId: targetWood.id,
    swingCount: 0,
    requiredSwings: requiredSwings,
    cursorPos: 0,
    cursorDirection: 1, // 1 = moving right, -1 = moving left
    messageKey: null,
    cursorInterval: null,
    lastHit: null,
  };

  choppingSessions.set(playerJid, session);

  // Send initial message (without durability bar during session)
  const text = buildChopText(lang, session, axe.name, null, null);
  const sent = await lenwy.sendMessage(replyJid, { text });
  session.messageKey = sent?.key;

  // Move cursor every second — bounces left/right
  session.cursorInterval = setInterval(async () => {
    const s = choppingSessions.get(playerJid);
    if (!s) return;

    // Move cursor
    s.cursorPos += s.cursorDirection;

    // Bounce at edges
    if (s.cursorPos >= CURSOR_SIZE - 1) {
      s.cursorPos = CURSOR_SIZE - 1;
      s.cursorDirection = -1;
    } else if (s.cursorPos <= 0) {
      s.cursorPos = 0;
      s.cursorDirection = 1;
    }

    // Edit message with new cursor position (no durability bar during session)
    if (s.messageKey) {
      const langTick = getLanguage(s.locale || "en");
      await lenwy.sendMessage(replyJid, {
        text: buildChopText(langTick, s, axe.name, null, null, s.lastHit),
        edit: s.messageKey,
      });
      s.lastHit = null; // clear hit feedback after one tick
    }
  }, 1000);

  // Auto-expire after 10 minutes
  setTimeout(() => {
    const s = choppingSessions.get(playerJid);
    if (s) {
      clearInterval(s.cursorInterval);
      choppingSessions.delete(playerJid);
    }
  }, 10 * 60 * 1000);
}

// ── Handle "chop" mid-session ────────────────────────────

export async function handleChop(lenwy, replyJid, playerJid) {
  const session = choppingSessions.get(playerJid);

  if (!session) {
    // No active session — this will be handled by the prefix command
    return false; // signal: not handled
  }

  const axe = axes[session.axeId];
  const timing = getTimingResult(session.cursorPos);

  // Only count successful hits (not misses)
  if (timing !== "miss") {
    session.swingCount++;
  }

  session.lastHit = { timing };

  // Load player and reduce durability
  const players = loadPlayers();
  const player = players[playerJid];
  if (!player) return true;

  const lang = getLanguage(getPlayerLanguage(player) || session.locale || "en");

  const axeBroke = reduceDurability(player, session.axeId);
  const axeTool = player.inventory.find((i) => i.id === session.axeId);
  const currentDurability = axeTool?.durability || 0;

  // Tree fell (reached required swings)
  if (session.swingCount >= session.requiredSwings) {
    clearInterval(session.cursorInterval);
    choppingSessions.delete(playerJid);

    const wood = woods[session.targetWoodId];
    addToInventory(player, wood.id, 1);
    player.stats_tracker.chopCount = (player.stats_tracker.chopCount || 0) + 1;
    player.lastActive = new Date().toISOString();
    
    // Remove broken axe
    if (axeBroke) {
      player.inventory = player.inventory.filter((i) => i.id !== session.axeId);
    }
    
    players[playerJid] = player;
    savePlayers(players);

    // Track quest progress
    trackGathering(playerJid, 1);

    const rarityInfo = woodRarityConfig[wood.rarity];
    const hitKeys = {
      perfect: "chopping.perfectHit",
      good: "chopping.goodHit",
      okay: "chopping.okayHit",
      miss: "chopping.missHit",
    };

    let durabilityMsg = "";
    if (axeBroke) {
      durabilityMsg = getText(lang, "chopping.axeBrokeReward", { axe: axe.name });
    } else {
      const durabilityBar = getDurabilityBar(currentDurability, axe.maxDurability);
      durabilityMsg = getText(lang, "chopping.axeDurabilityFooter", { bar: durabilityBar });
    }

    const finalSwingLine = `${getText(lang, hitKeys[timing])} ${getText(lang, "chopping.finalSwingNote")}`;

    if (session.messageKey) {
      await lenwy.sendMessage(replyJid, {
        text:
          `${getText(lang, "chopping.treeFellSuccess")}` +
          `${finalSwingLine}\n\n` +
          `${buildSwingCounter(lang, session.requiredSwings, session.requiredSwings)}\n\n` +
          `${getText(lang, "fishing.catchLine", {
            color: rarityInfo.color,
            rarity: wood.rarity,
            name: wood.name,
          })}\n` +
          `${getText(lang, "mining.oreDescLine", { desc: wood.description })}\n` +
          `${getText(lang, "fishing.sellValue", { price: wood.sellPrice })}\n\n` +
          `${getText(lang, "fishing.addedInventory")}${durabilityMsg}\n\n` +
          `${getText(lang, "chopping.chopAgain")}`,
        edit: session.messageKey,
      });
    }
    return true;
  }

  // Axe broke mid-session
  if (axeBroke) {
    clearInterval(session.cursorInterval);
    choppingSessions.delete(playerJid);
    
    player.inventory = player.inventory.filter((i) => i.id !== session.axeId);
    player.lastActive = new Date().toISOString();
    players[playerJid] = player;
    savePlayers(players);

    if (session.messageKey) {
      await lenwy.sendMessage(replyJid, {
        text: getText(lang, "chopping.axeBroke", { axe: axe.name }),
        edit: session.messageKey,
      });
    }
    return true;
  }

  // Tree still standing — update message (no durability bar during session)
  player.lastActive = new Date().toISOString();
  players[playerJid] = player;
  savePlayers(players);

  if (session.messageKey) {
    await lenwy.sendMessage(replyJid, {
      text: buildChopText(lang, session, axe.name, null, null, session.lastHit),
      edit: session.messageKey,
    });
    session.lastHit = null;
  }

  return true;
}

// ── Command export ───────────────────────────────────────

export const info = {
  name: "Chopping",
  menu: ["chop"],
  case: ["chop"],
  description: "Chop trees to gather wood.",
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

  // If player has active session, handle as mid-session chop
  const handled = await handleChop(lenwy, replyJid, normalizedSender);
  if (handled) return;

  // Otherwise start new session
  await startChopping(lenwy, replyJid, normalizedSender, player);
}
