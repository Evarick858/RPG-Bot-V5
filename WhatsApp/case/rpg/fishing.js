/*
  RPG Command : fish
  Base : Lenwy SCM — RPG Extension

  Flow:
  1. Player types "fish" (no prefix)
  2. Bot casts line — random wait 15-40 seconds
  3. Fish bites — bot sends tension meter (edited message)
  4. Meter moves left to right over 10 steps (1 step/second)
  5. Player types "reel" at any point
  6. Bot checks timing vs center position → determines rarity bonus
  7. Fish is rolled and added to inventory

  No prefix needed — handled via RPG session interceptor in evarick.js
*/

import fs from "fs";
import path from "path";
import { canDoAction } from "../../database/rpg/locations.js";
import { rollFish, fishRarityConfig, fishingRods } from "../../database/rpg/fish.js";
import { fishingSessions } from "../../database/rpg/sessionManager.js";
import { trackGathering } from "../../database/rpg/questTracker.js";
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

function getEquippedRod(player) {
  // Check inventory for fishing rods, return best one
  const rodIds = ["crystal_rod", "golden_rod", "iron_rod", "basic_rod"];
  for (const rodId of rodIds) {
    const tool = player.inventory.find((i) => i.id === rodId);
    if (tool) {
      // Initialize durability if not present
      if (tool.durability === undefined) {
        const rod = fishingRods[rodId];
        tool.durability = rod.maxDurability;
      }
      // Only return if tool has durability left
      if (tool.durability > 0) {
        return { id: rodId, tool };
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

// Build tension meter string
// position 0-9, center = 4-5
function buildMeter(position) {
  const size = 10;
  let meter = "[";
  for (let i = 0; i < size; i++) {
    meter += i === position ? "🎣" : "🟦";
  }
  meter += "]";
  return meter;
}

// Calculate timing bonus based on position when player reeled
// Center = positions 4-5 = perfect
// Returns: "perfect" | "good" | "okay" | "miss"
function getTimingResult(position) {
  const dist = Math.min(Math.abs(position - 4), Math.abs(position - 5));
  if (dist === 0) return "perfect";
  if (dist === 1) return "good";
  if (dist === 2) return "okay";
  return "miss";
}

// Timing bonus to luck multiplier
const timingBonus = {
  perfect: 2.0,  // doubles luck effect
  good:    1.5,
  okay:    1.0,  // normal luck
  miss:    0.3,  // bad timing, luck barely helps
};

// ── Main fishing session starter ─────────────────────────

export async function startFishing(lenwy, replyJid, playerJid, player) {
  const lang = getLanguage(getPlayerLanguage(player));

  // Check location
  if (!canDoAction(player.currentLocation, "fish")) {
    await lenwy.sendMessage(replyJid, {
      text: getText(lang, "fishing.cantFish"),
    });
    return;
  }

  // Check for fishing rod
  const rodData = getEquippedRod(player);
  if (!rodData) {
    await lenwy.sendMessage(replyJid, {
      text: getText(lang, "fishing.noRod"),
    });
    return;
  }

  const { id: rodId, tool: rodTool } = rodData;

  // Save player if durability was just initialized
  const players = loadPlayers();
  players[playerJid] = player;
  savePlayers(players);

  // Check if already fishing
  if (fishingSessions.has(playerJid)) {
    await lenwy.sendMessage(replyJid, {
      text: getText(lang, "fishing.alreadyFishing"),
    });
    return;
  }

  const rod = fishingRods[rodId];

  // Cast line
  await lenwy.sendMessage(replyJid, {
    text: getText(lang, "fishing.casting", { name: player.name, rod: rod.name }),
  });

  // Random wait before bite: 15-40 seconds
  const waitTime = Math.floor(Math.random() * 25000) + 15000;

  const session = {
    playerJid,
    replyJid,
    rodId,
    phase: "waiting",   // waiting → biting → done
    meterPosition: 0,
    meterMessageKey: null,
    meterInterval: null,
    biteTimeout: null,
    expireTimeout: null,
  };

  fishingSessions.set(playerJid, session);

  // After wait — fish bites
  session.biteTimeout = setTimeout(async () => {
    if (!fishingSessions.has(playerJid)) return;

    session.phase = "biting";
    session.meterPosition = 0;

    // Send initial meter message (without durability during session)
    const meterText = buildFishingMeterText(lang, session.meterPosition, rod.name, null, null);
    const sent = await lenwy.sendMessage(replyJid, { text: meterText });
    session.meterMessageKey = sent?.key;

    // Move meter every 1 second
    session.meterInterval = setInterval(async () => {
      if (!fishingSessions.has(playerJid)) return;

      session.meterPosition++;

      // Fish escaped if meter goes past end
      if (session.meterPosition >= 10) {
        clearInterval(session.meterInterval);
        fishingSessions.delete(playerJid);

        // Edit message to show escape
        if (session.meterMessageKey) {
          await lenwy.sendMessage(replyJid, {
            text: getText(lang, "fishing.fishEscaped"),
            edit: session.meterMessageKey,
          });
        }
        return;
      }

      // Edit meter message (no durability during session)
      if (session.meterMessageKey) {
        const updatedText = buildFishingMeterText(lang, session.meterPosition, rod.name, null, null);
        await lenwy.sendMessage(replyJid, {
          text: updatedText,
          edit: session.meterMessageKey,
        });
      }
    }, 1000);

    // Auto-expire after 12 seconds if no reel
    session.expireTimeout = setTimeout(() => {
      if (fishingSessions.has(playerJid)) {
        clearInterval(session.meterInterval);
        fishingSessions.delete(playerJid);
      }
    }, 12000);

  }, waitTime);
}

// Build the meter message text
function buildFishingMeterText(lang, position, rodName, rodDurability, rodMaxDurability) {
  const meter = buildMeter(position);
  const centerHint =
    position < 4
      ? getText(lang, "fishing.meterMovingRight")
      : position > 5
        ? getText(lang, "fishing.meterPastCenter")
        : getText(lang, "fishing.meterCenter");

  let durabilityLine = "";
  if (rodDurability !== null && rodMaxDurability !== null) {
    const durabilityBar = getDurabilityBar(rodDurability, rodMaxDurability);
    durabilityLine = getText(lang, "fishing.durabilityHeader", { bar: durabilityBar }) + "\n\n";
  }

  return (
    getText(lang, "fishing.fishBiting") +
    `${meter}\n` +
    `${centerHint}\n\n` +
    getText(lang, "fishing.rodLabel", { rod: rodName }) +
    `\n` +
    `${durabilityLine}` +
    `${getText(lang, "fishing.reelPrompt")}\n` +
    `${getText(lang, "fishing.centerTip")}`
  );
}

// ── Handle "reel" input ───────────────────────────────────

export async function handleReel(lenwy, replyJid, playerJid) {
  const session = fishingSessions.get(playerJid);

  const playersEarly = loadPlayers();
  const pEarly = playersEarly[playerJid];
  const langEarly = pEarly ? getLanguage(getPlayerLanguage(pEarly)) : getLanguage("id");

  if (!session || session.phase !== "biting") {
    await lenwy.sendMessage(replyJid, {
      text: getText(langEarly, "fishing.noFish"),
    });
    return;
  }

  // Stop meter
  clearInterval(session.meterInterval);
  clearTimeout(session.expireTimeout);
  fishingSessions.delete(playerJid);

  const timing = getTimingResult(session.meterPosition);
  const luckMult = timingBonus[timing];

  // Load player
  const players = loadPlayers();
  const player = players[playerJid];
  if (!player) return;

  const lang = getLanguage(getPlayerLanguage(player));

  // Reduce durability
  const rod = fishingRods[session.rodId];
  const rodBroke = reduceDurability(player, session.rodId);
  const rodTool = player.inventory.find((i) => i.id === session.rodId);

  // Roll fish with timing-adjusted luck
  const adjustedLuck = Math.floor(player.stats.luck * luckMult);
  const caught = rollFish(player.currentLocation, adjustedLuck, session.rodId);

  if (!caught) {
    // Remove broken rod
    if (rodBroke) {
      player.inventory = player.inventory.filter((i) => i.id !== session.rodId);
    }
    
    player.lastActive = new Date().toISOString();
    players[playerJid] = player;
    savePlayers(players);

    let durabilityMsg = "";
    if (rodBroke) {
      durabilityMsg = "\n\n" + getText(lang, "fishing.rodBroke", { rod: rod.name });
    } else {
      const durabilityBar = getDurabilityBar(rodTool?.durability || 0, rod.maxDurability);
      durabilityMsg = getText(lang, "fishing.rodDurabilityFooter", { bar: durabilityBar });
    }

    const timingPhrase = {
      perfect: getText(lang, "fishing.perfectTiming"),
      good: getText(lang, "fishing.goodTiming"),
      okay: getText(lang, "fishing.okayTiming"),
      miss: getText(lang, "fishing.badTiming"),
    }[timing];

    if (session.meterMessageKey) {
      await lenwy.sendMessage(replyJid, {
        text:
          getText(lang, "fishing.nothingCaught") +
          `${buildMeter(session.meterPosition)}\n\n` +
          `${getText(lang, "fishing.timingLine", { timing: timingPhrase })}${durabilityMsg}\n\n` +
          `${getText(lang, "fishing.fishAgain")}`,
        edit: session.meterMessageKey,
      });
    }
    return;
  }

  // Add to inventory
  addToInventory(player, caught.id, 1);
  player.stats_tracker.fishCount = (player.stats_tracker.fishCount || 0) + 1;
  
  // Remove broken rod
  if (rodBroke) {
    player.inventory = player.inventory.filter((i) => i.id !== session.rodId);
  }
  
  player.lastActive = new Date().toISOString();
  players[playerJid] = player;
  savePlayers(players);

  // Track quest progress
  trackGathering(playerJid, 1);

  const rarityInfo = fishRarityConfig[caught.rarity];
  const timingText = {
    perfect: getText(lang, "fishing.perfectTiming"),
    good: getText(lang, "fishing.goodTiming"),
    okay: getText(lang, "fishing.okayTiming"),
    miss: getText(lang, "fishing.badTiming"),
  }[timing];

  let durabilityMsg = "";
  if (rodBroke) {
    durabilityMsg = "\n\n" + getText(lang, "fishing.rodBroke", { rod: rod.name });
  } else {
    const durabilityBar = getDurabilityBar(rodTool?.durability || 0, rod.maxDurability);
    durabilityMsg = getText(lang, "fishing.rodDurabilityFooter", { bar: durabilityBar });
  }

  // Edit meter message with result
  if (session.meterMessageKey) {
    await lenwy.sendMessage(replyJid, {
      text:
        `${timingText}\n\n` +
        `${buildMeter(session.meterPosition)}\n\n` +
        `${getText(lang, "fishing.catchLine", {
          color: rarityInfo.color,
          rarity: caught.rarity,
          name: caught.name,
        })}\n` +
        `${getText(lang, "mining.oreDescLine", { desc: caught.description })}\n` +
        `${getText(lang, "fishing.sellValue", { price: caught.sellPrice })}\n\n` +
        `${getText(lang, "fishing.addedInventory")}${durabilityMsg}\n\n` +
        `${getText(lang, "fishing.castAgain")}`,
      edit: session.meterMessageKey,
    });
  }
}

// ── Command export (for prefix-based "fish" command) ─────

export const info = {
  name: "Fishing",
  menu: ["fish"],
  case: ["fish"],
  description: "Cast your fishing rod and catch fish.",
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

  // Block bot
  const botJid = lenwy.user?.id?.split(":")[0] + "@s.whatsapp.net";
  if (normalizedSender === botJid) return;

  const players = loadPlayers();
  const player = players[normalizedSender];

  if (!player) {
    const lang = getLanguage("id");
    return LenwyText(getText(lang, "gold.notRegistered"));
  }

  await startFishing(lenwy, replyJid, normalizedSender, player);
}
