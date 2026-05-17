/*
  RPG Commands : !location, !travel
  Base : Lenwy SCM — RPG Extension

  !location           → shows current location + available actions + connected locations
  !travel <name>      → travel to a directly connected location

  Rules:
  - Player must be registered
  - Destination must be directly connected to current location
  - Player must meet the minLevel requirement of the destination
  - Bot is excluded from all RPG commands
*/

import fs from "fs";
import path from "path";
import { getLocationById, areConnected, getReachableLocations, canDoAction } from "../../database/rpg/locations.js";
import { startHunt } from "./hunt.js";
import { getRandomEncounter, getAvailableChoices } from "../../database/rpg/story.js";
import { storySessions } from "../../database/rpg/sessionManager.js";
import { trackTravel } from "../../database/rpg/questTracker.js";
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

// Action display labels
const actionLabels = {
  hunt:   "🏹 Hunt",
  mine:   "⛏️ Mine",
  chop:   "🪓 Chop",
  fish:   "🎣 Fish",
  forage: "🍄 Forage",
  shop:   "🛒 Shop",
};

// Normalize location name input → id
// Accepts: "deep forest", "deep_forest", "DeepForest", "forest" etc.
function normalizeLocationInput(input) {
  return input.trim().toLowerCase().replace(/\s+/g, "_");
}

// ── Metadata ─────────────────────────────────────────────

export const info = {
  name: "Travel",
  menu: ["location"],
  case: ["location", "travel", "map"],
  description: "View your current location or travel to a connected location.",
  hidden: false,
  owner: false,
  premium: false,
  group: false,
  private: false,
  admin: false,
  botAdmin: false,
  allowPrivate: true,
};

// ── Handler ───────────────────────────────────────────────

export default async function handler(leni) {
  const {
    command,
    q,
    lenwy,
    replyJid,
    LenwyText,
    normalizedSender,
  } = leni;

  // Block bot from using RPG commands
  const botJid = lenwy.user?.id?.split(":")[0] + "@s.whatsapp.net";
  if (normalizedSender === botJid) return;

  const players = loadPlayers();
  const player = players[normalizedSender];

  // Must be registered
  if (!player) {
    const lang = getLanguage("id");
    return LenwyText(
      `⚠️ *${getText(lang, "common.notRegistered")}*\n\n` +
      getText(lang, "common.registerFirst")
    );
  }

  const lang = getLanguage(getPlayerLanguage(player));

  // Update last active
  player.lastActive = new Date().toISOString();

  const currentLoc = getLocationById(player.currentLocation);

  // ════════════════════════════════════════
  // COMMAND: !map
  // ════════════════════════════════════════
  if (command === "map") {
    return LenwyText(
      `🗺️ *World Map*\n\n` +
      `Explore the full world map here:\n` +
      `🔗 https://evarick858.github.io/Worldmap-RPG/\n\n` +
      `💡 *Tips:*\n` +
      `• Use the map to plan your travels\n` +
      `• See all locations and connections\n` +
      `• Type *!location* to see where you are now\n` +
      `• Type *!travel <location>* to move`
    );
  }

  // ════════════════════════════════════════
  // COMMAND: !location
  // ════════════════════════════════════════
  if (command === "location") {
    if (!currentLoc) {
      return LenwyText(`⚠️ *Location data error. Please contact the owner.*`);
    }

    const reachable = getReachableLocations(player.currentLocation);
    const safeTag = currentLoc.safe ? "✅ Safe Zone" : "⚠️ Dangerous Zone";

    // Available actions
    const actionText = currentLoc.actions.length > 0
      ? currentLoc.actions.map((a) => actionLabels[a] || a).join("  |  ")
      : "None";

    // Connected locations
    const connectedText = reachable.map((loc) => {
      // Show warning emoji only if location level is higher than player level
      const isHarder = loc.minLevel > player.level;
      const warningEmoji = isHarder ? "⚠️ " : "";
      const levelWarning = isHarder ? ` *(Hard - Lv.${loc.minLevel} recommended)*` : "";
      const safeIcon = loc.safe ? "✅" : "";
      return `${safeIcon}${warningEmoji}${loc.emoji} ${loc.name}${levelWarning}`;
    }).join("\n");

    // Find other players in the same location
    const playersInLocation = [];
    for (const [jid, p] of Object.entries(players)) {
      // Skip self, skip non-players (like _comment, _template)
      if (jid === normalizedSender || jid.startsWith("_") || !p.currentLocation) continue;
      
      // Check if player is in the same location
      if (p.currentLocation === player.currentLocation) {
        playersInLocation.push({
          name: p.name,
          level: p.level,
          class: p.class,
        });
      }
    }

    // Build players in location text
    let playersText = "";
    if (playersInLocation.length > 0) {
      playersText = `\n👥 *Players Here:* (${playersInLocation.length})\n`;
      playersInLocation.forEach(p => {
        const className = p.class.charAt(0).toUpperCase() + p.class.slice(1);
        playersText += `• ${p.name} (Lv.${p.level} ${className})\n`;
      });
      playersText += `\n`;
    }

    return LenwyText(
      `${getText(lang, "location.title")}\n` +
      `${currentLoc.emoji} *${currentLoc.name}*\n` +
      `${safeTag}\n\n` +
      `📖 ${currentLoc.description}\n\n` +
      `${getText(lang, "location.actions")}\n` +
      `${actionText}\n` +
      `${playersText}\n` +
      `${getText(lang, "location.connected")}\n` +
      `${connectedText}\n\n` +
      `🗺️ ${lang.code === "id" ? "Lihat peta dunia" : "View world map"}: https://evarick858.github.io/Worldmap-RPG/\n\n` +
      `${getText(lang, "location.travelHint")}`
    );
  }

  // ════════════════════════════════════════
  // COMMAND: !travel <location name>
  // ════════════════════════════════════════
  if (command === "travel") {
    if (!q.trim()) {
      return LenwyText(
        `⚠️ *Please specify a destination.*\n\n` +
        `Usage: *!travel <location name>*\n` +
        `Example: *!travel forest*\n\n` +
        `Type *!location* to see where you can go.`
      );
    }

    const destId = normalizeLocationInput(q);
    const destLoc = getLocationById(destId);

    // Unknown location
    if (!destLoc) {
      return LenwyText(
        `❓ *"${q}" is not a known location.*\n\n` +
        `Type *!location* to see available destinations.`
      );
    }

    // Already there
    if (destId === player.currentLocation) {
      return LenwyText(
        `📍 *You are already at ${currentLoc.emoji} ${currentLoc.name}!*`
      );
    }

    // Not directly connected
    if (!areConnected(player.currentLocation, destId)) {
      // Find if they've been to a location that connects to destination
      const hint = getReachableLocations(player.currentLocation)
        .map((l) => `${l.emoji} *${l.name}*`)
        .join(", ");

      return LenwyText(
        `🚫 *You can't travel directly to ${destLoc.emoji} ${destLoc.name}.*\n\n` +
        `You must travel through connected locations first.\n\n` +
        `📍 From *${currentLoc.name}* you can go to:\n${hint}\n\n` +
        `🗺️ View world map: https://evarick858.github.io/Worldmap-RPG/\n` +
        `Type *!location* to see the full map.`
      );
    }

    // Level requirement check - just warn but allow travel
    const levelWarning = player.level < destLoc.minLevel
      ? `\n⚠️ *Warning: This area is dangerous for Level ${player.level}! (Recommended: Lv.${destLoc.minLevel})*\n`
      : "";

    // All good — travel
    const wasUnlocked = player.unlockedLocations.includes(destId);
    player.currentLocation = destId;

    if (!wasUnlocked) {
      player.unlockedLocations.push(destId);
    }

    players[normalizedSender] = player;
    savePlayers(players);

    // Track quest progress (only count new locations)
    if (!wasUnlocked) {
      trackTravel(normalizedSender, 1);
    }

    const safeTag = destLoc.safe ? "✅ Safe Zone" : "⚠️ Dangerous Zone";
    const actionText = destLoc.actions.length > 0
      ? destLoc.actions.map((a) => actionLabels[a] || a).join("  |  ")
      : "None";

    const discoveredText = wasUnlocked ? "" : `\n🗺️ *New location discovered!*`;

    // ═══════════════════════════════════════════════════════
    // 20% CHANCE OF ENEMY ENCOUNTER (if not safe zone)
    // ═══════════════════════════════════════════════════════
    if (!destLoc.safe) {
      const enemyChance = Math.random() * 100;
      
      if (enemyChance < 20) {
        // Enemy ambush! Start combat immediately
        await LenwyText(
          `🚶 *Travelling to ${destLoc.emoji} ${destLoc.name}...*${levelWarning}\n` +
          `${discoveredText}\n\n` +
          `⚔️ *AMBUSH!*\n\n` +
          `An enemy appears on the road!\n` +
          `Prepare for battle...`
        );
        
        // Small delay for dramatic effect
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        // Start hunt/combat
        await startHunt(lenwy, replyJid, normalizedSender, player);
        return;
      }
    }

    // ═══════════════════════════════════════════════════════
    // 10% CHANCE OF STORY ENCOUNTER
    // ═══════════════════════════════════════════════════════
    const encounterChance = Math.random() * 100;
    
    if (encounterChance < 10) {
      // Try to get a story encounter for this location
      const encounter = getRandomEncounter(destId);
      
      if (encounter) {
        // Store encounter session
        storySessions.set(normalizedSender, {
          encounterId: encounter.id,
          timestamp: Date.now(),
        });

        // Convert player inventory to bag format for checking
        const playerBag = {};
        for (const item of player.inventory) {
          playerBag[item.id] = item.qty;
        }

        // Get available choices with requirement checks
        const choices = getAvailableChoices(encounter, playerBag, player.gold);
        const choiceText = choices.map((c) => {
          const status = c.canChoose ? "✅" : "❌";
          return `${status} *${c.key}* - ${c.label}`;
        }).join("\n");

        // Get connected locations from new destination
        const nextLocations = getReachableLocations(destId);
        const nextLocationsText = nextLocations.map((loc) => {
          const isHarder = loc.minLevel > player.level;
          const warningEmoji = isHarder ? "⚠️ " : "";
          const levelWarning = isHarder ? ` *(Lv.${loc.minLevel})*` : "";
          const safeIcon = loc.safe ? "✅" : "";
          return `${safeIcon}${warningEmoji}${loc.emoji} ${loc.name}${levelWarning}`;
        }).join("\n");

        return LenwyText(
          `🚶 *Travelling to ${destLoc.emoji} ${destLoc.name}...*${levelWarning}\n` +
          `${discoveredText}\n` +
          `📍 *You arrived at ${destLoc.emoji} ${destLoc.name}*\n\n` +
          `━━━━━━━━━━━━━━━━━━━━\n` +
          `${encounter.emoji} *${encounter.title}*\n` +
          `━━━━━━━━━━━━━━━━━━━━\n\n` +
          `${encounter.description}\n\n` +
          `*What will you do?*\n` +
          `${choiceText}\n\n` +
          `Use: *!story <choice>* (e.g., !story help)\n` +
          `Choices: take, run, fight, leave, talk, help, ignore\n\n` +
          `🗺️ *After this, you can travel to:*\n` +
          `${nextLocationsText}`
        );
      }
    }

    // Get connected locations from new destination
    const nextLocations = getReachableLocations(destId);
    const nextLocationsText = nextLocations.map((loc) => {
      const isHarder = loc.minLevel > player.level;
      const warningEmoji = isHarder ? "⚠️ " : "";
      const levelWarning = isHarder ? ` *(Lv.${loc.minLevel})*` : "";
      const safeIcon = loc.safe ? "✅" : "";
      return `${safeIcon}${warningEmoji}${loc.emoji} ${loc.name}${levelWarning}`;
    }).join("\n");

    // Normal travel (no encounter)
    return LenwyText(
      `${getText(lang, "travel.travelTo", {location: destLoc.name})}${levelWarning}\n` +
      `${discoveredText}\n` +
      `${getText(lang, "travel.arrived", {location: destLoc.name})}\n` +
      `${safeTag}\n\n` +
      `📖 ${destLoc.description}\n\n` +
      `${getText(lang, "travel.actions")}\n` +
      `${actionText}\n\n` +
      `🗺️ *${lang.code === "id" ? "Kamu bisa pergi ke" : "You can travel to"}:*\n` +
      `${nextLocationsText}\n\n` +
      `🗺️ ${lang.code === "id" ? "Lihat peta dunia" : "World map"}: https://evarick858.github.io/Worldmap-RPG/\n` +
      `${lang.code === "id" ? "Ketik *!travel <lokasi>* untuk berpindah atau *!location* untuk detail." : "Type *!travel <location>* to move or *!location* for details."}`
    );
  }
}
