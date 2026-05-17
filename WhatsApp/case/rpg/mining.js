/*
  RPG Command : mine
  Base : Lenwy SCM — RPG Extension

  Flow:
  1. Player types "mine" (with prefix)
  2. Bot finds a rock and shows HP bar + stamina (edited message)
  3. Player types "hit" (no prefix) to swing pickaxe
  4. Each hit reduces rock HP by pickaxe damage
  5. Each hit costs 1 stamina (max 8)
  6. Rock breaks → ore drops based on luck + pickaxe
  7. Stamina runs out before rock breaks → partial reward or nothing

  "hit" is handled via RPG session interceptor in evarick.js
*/

import fs from "fs";
import path from "path";
import { canDoAction } from "../../database/rpg/locations.js";
import { rollOre, oreRarityConfig, pickaxes, ores } from "../../database/rpg/ores.js";
import { trackGathering } from "../../database/rpg/questTracker.js";
import { miningSessions } from "../../database/rpg/sessionManager.js";
import { getLanguage, getText, getPlayerLanguage } from "../../database/rpg/languages.js";

const playersPath = path.join(process.cwd(), "WhatsApp", "database", "rpg", "players.json");

const MAX_STAMINA = 8;
const STAMINA_REGEN_MS = 30000; // 30 seconds per stamina point

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

function getEquippedPickaxe(player) {
  const pickaxeIds = ["diamond_pickaxe", "gold_pickaxe", "iron_pickaxe", "wooden_pickaxe", "basic_pickaxe"];
  for (const id of pickaxeIds) {
    const tool = player.inventory.find((i) => i.id === id);
    if (tool) {
      // Initialize durability if not present
      if (tool.durability === undefined) {
        const pickaxe = pickaxes[id];
        tool.durability = pickaxe.maxDurability;
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

// Build HP bar
function buildHpBar(current, max) {
  const filled = Math.round((current / max) * 10);
  const empty = 10 - filled;
  return `[${"■".repeat(filled)}${"□".repeat(empty)}] ${current}/${max}`;
}

// Build stamina bar
function buildStaminaBar(current, max) {
  const filled = current;
  const empty = max - current;
  return `[${"⚡".repeat(filled)}${"⬜".repeat(empty)}] ${current}/${max}`;
}

// Build full mining message
function buildMiningText(session, pickaxeName, pickaxeDurability, pickaxeMaxDurability, lang) {
  const hpBar = buildHpBar(session.rockHp, session.rockMaxHp);
  const staminaBar = buildStaminaBar(session.stamina, MAX_STAMINA);
  const hpPercent = Math.round((session.rockHp / session.rockMaxHp) * 100);

  let rockEmoji = "🪨";
  if (hpPercent <= 25) rockEmoji = "💥";
  else if (hpPercent <= 50) rockEmoji = "🔨";

  let durabilityLine = "";
  if (pickaxeDurability !== null && pickaxeMaxDurability !== null) {
    const durabilityBar = getDurabilityBar(pickaxeDurability, pickaxeMaxDurability);
    durabilityLine = getText(lang, "mining.pickaxeDurabilityBlock", { bar: durabilityBar });
  }

  const staminaWarn =
    session.stamina === 0 ? getText(lang, "mining.noStamina") : "";

  return (
    getText(lang, "mining.miningInProgress") +
    `${getText(lang, "mining.rockHpLine", { emoji: rockEmoji, bar: hpBar })}\n\n` +
    `${getText(lang, "mining.staminaLine", { bar: staminaBar })}\n\n` +
    `${getText(lang, "mining.pickaxeLine", { name: pickaxeName })}\n` +
    `${durabilityLine}` +
    `${getText(lang, "mining.hitPrompt")}\n` +
    `${staminaWarn}`
  );
}

// ── Start mining session ─────────────────────────────────

export async function startMining(lenwy, replyJid, playerJid, player) {
  const lang = getLanguage(getPlayerLanguage(player));

  if (!canDoAction(player.currentLocation, "mine")) {
    await lenwy.sendMessage(replyJid, {
      text: getText(lang, "mining.cantMine"),
    });
    return;
  }

  const pickaxeData = getEquippedPickaxe(player);
  if (!pickaxeData) {
    await lenwy.sendMessage(replyJid, {
      text: getText(lang, "mining.noPickaxe"),
    });
    return;
  }

  const { id: pickaxeId, tool: pickaxeTool } = pickaxeData;

  // Save player if durability was just initialized
  const players = loadPlayers();
  players[playerJid] = player;
  savePlayers(players);

  if (miningSessions.has(playerJid)) {
    await lenwy.sendMessage(replyJid, {
      text: getText(lang, "mining.alreadyMining"),
    });
    return;
  }

  const pickaxe = pickaxes[pickaxeId];

  // Roll which ore rock to find (determines rock HP)
  const targetOre = rollOre(player.currentLocation, player.stats.luck, pickaxeId);
  if (!targetOre) {
    await lenwy.sendMessage(replyJid, {
      text: getText(lang, "mining.noRocks"),
    });
    return;
  }

  const session = {
    playerJid,
    replyJid,
    pickaxeId,
    targetOreId: targetOre.id,
    rockHp: targetOre.rockHp,
    rockMaxHp: targetOre.rockHp,
    stamina: MAX_STAMINA,
    messageKey: null,
    staminaRegenInterval: null,
  };

  miningSessions.set(playerJid, session);

  // Send initial mining message (without durability during session)
  const text = buildMiningText(session, pickaxe.name, null, null, lang);
  const sent = await lenwy.sendMessage(replyJid, { text });
  session.messageKey = sent?.key;

  // Stamina regen — +1 stamina every 30 seconds
  session.staminaRegenInterval = setInterval(async () => {
    const s = miningSessions.get(playerJid);
    if (!s) return;

    if (s.stamina < MAX_STAMINA) {
      s.stamina++;

      if (s.messageKey) {
        const updatedText = buildMiningText(s, pickaxe.name, null, null, lang);
        await lenwy.sendMessage(replyJid, {
          text: updatedText,
          edit: s.messageKey,
        });
      }
    }
  }, STAMINA_REGEN_MS);

  // Auto-expire session after 10 minutes
  setTimeout(() => {
    const s = miningSessions.get(playerJid);
    if (s) {
      clearInterval(s.staminaRegenInterval);
      miningSessions.delete(playerJid);
    }
  }, 10 * 60 * 1000);
}

// ── Handle "hit" input ───────────────────────────────────

export async function handleHit(lenwy, replyJid, playerJid) {
  const session = miningSessions.get(playerJid);

  const players = loadPlayers();
  let player = players[playerJid];
  let lang = player ? getLanguage(getPlayerLanguage(player)) : getLanguage("id");

  if (!session) {
    await lenwy.sendMessage(replyJid, {
      text: getText(lang, "mining.notMining"),
    });
    return;
  }

  const pickaxe = pickaxes[session.pickaxeId];

  // No stamina
  if (session.stamina <= 0) {
    if (session.messageKey) {
      await lenwy.sendMessage(replyJid, {
        text: buildMiningText(session, pickaxe.name, null, null, lang),
        edit: session.messageKey,
      });
    }
    return;
  }

  // Load player and reduce durability
  player = players[playerJid];
  if (!player) return;
  lang = getLanguage(getPlayerLanguage(player));

  const pickaxeBroke = reduceDurability(player, session.pickaxeId);
  const pickaxeTool = player.inventory.find((i) => i.id === session.pickaxeId);
  const currentDurability = pickaxeTool?.durability || 0;

  // Apply hit
  session.stamina--;
  session.rockHp = Math.max(0, session.rockHp - pickaxe.damagePerHit);

  // Rock broken
  if (session.rockHp <= 0) {
    clearInterval(session.staminaRegenInterval);
    miningSessions.delete(playerJid);

    const ore = ores[session.targetOreId];
    addToInventory(player, ore.id, 1);
    player.stats_tracker.mineCount = (player.stats_tracker.mineCount || 0) + 1;
    
    // Remove broken pickaxe
    if (pickaxeBroke) {
      player.inventory = player.inventory.filter((i) => i.id !== session.pickaxeId);
    }
    
    player.lastActive = new Date().toISOString();
    players[playerJid] = player;
    savePlayers(players);

    // Track quest progress
    trackGathering(playerJid, 1);

    const rarityInfo = oreRarityConfig[ore.rarity];

    let durabilityMsg = "";
    if (pickaxeBroke) {
      durabilityMsg = getText(lang, "mining.pickaxeBrokeReward", { pickaxe: pickaxe.name });
    } else {
      const durabilityBar = getDurabilityBar(currentDurability, pickaxe.maxDurability);
      durabilityMsg = getText(lang, "mining.pickaxeDurabilityReward", { bar: durabilityBar });
    }

    if (session.messageKey) {
      await lenwy.sendMessage(replyJid, {
        text:
          `${getText(lang, "mining.rockBroken")}` +
          `${buildHpBar(0, session.rockMaxHp)}\n\n` +
          `${getText(lang, "fishing.catchLine", {
            color: rarityInfo.color,
            rarity: ore.rarity,
            name: ore.name,
          })}\n` +
          `${getText(lang, "mining.oreDescLine", { desc: ore.description })}\n` +
          `${getText(lang, "fishing.sellValue", { price: ore.sellPrice })}\n\n` +
          `${getText(lang, "fishing.addedInventory")}${durabilityMsg}\n\n` +
          `${getText(lang, "mining.mineAgain")}`,
        edit: session.messageKey,
      });
    }
    return;
  }

  // Pickaxe broke mid-session
  if (pickaxeBroke) {
    clearInterval(session.staminaRegenInterval);
    miningSessions.delete(playerJid);
    
    player.inventory = player.inventory.filter((i) => i.id !== session.pickaxeId);
    player.lastActive = new Date().toISOString();
    players[playerJid] = player;
    savePlayers(players);

    if (session.messageKey) {
      await lenwy.sendMessage(replyJid, {
        text: getText(lang, "mining.pickaxeBroke", { pickaxe: pickaxe.name }),
        edit: session.messageKey,
      });
    }
    return;
  }

  // Rock still alive — update message (no durability during session)
  player.lastActive = new Date().toISOString();
  players[playerJid] = player;
  savePlayers(players);

  if (session.messageKey) {
    await lenwy.sendMessage(replyJid, {
      text: buildMiningText(session, pickaxe.name, null, null, lang),
      edit: session.messageKey,
    });
  }
}

// ── Command export ───────────────────────────────────────

export const info = {
  name: "Mining",
  menu: ["mine"],
  case: ["mine"],
  description: "Mine rocks to find ores and gems.",
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

  await startMining(lenwy, replyJid, normalizedSender, player);
}
