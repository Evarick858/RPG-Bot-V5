/*
  RPG Command: searching
  Base: Lenwy SCM — RPG Extension

  Search for treasures, monsters, pets, and more in huntable locations!
  
  Features:
  - 30-second cooldown
  - Animated searching with message editing
  - Multiple outcomes: gold, monster drops, nothing, story trigger, pets!
  - Pet taming mini-game (emoji sequence matching)
  - Only works in locations that allow hunting
*/

import fs from "fs";
import path from "path";
import { canDoAction, getLocationById } from "../../database/rpg/locations.js";
import { getRandomEnemy } from "../../database/rpg/enemies.js";
import {
  rollForPet,
  generateTamingSequence,
  formatPetInfo,
  rarityConfig,
  tamingEmojis
} from "../../database/rpg/pets.js";
import { searchingSessions } from "../../database/rpg/sessionManager.js";
import { getLanguage, getText, getPlayerLanguage } from "../../database/rpg/languages.js";

const playersPath = path.join(process.cwd(), "WhatsApp", "database", "rpg", "players.json");
const COOLDOWN_MS = 30000; // 30 seconds
const searchingCooldowns = new Map();

// ══════════════════════════════════════════════════════════
// HELPER FUNCTIONS
// ══════════════════════════════════════════════════════════

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

function addToInventory(player, itemId, qty = 1) {
  const existing = player.inventory.find((i) => i.id === itemId);
  if (existing) existing.qty += qty;
  else player.inventory.push({ id: itemId, qty });
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// ══════════════════════════════════════════════════════════
// SEARCHING ANIMATIONS
// ══════════════════════════════════════════════════════════

function getSearchingAnimations(lang) {
  return [
    getText(lang, "searching.anim1"),
    getText(lang, "searching.anim2"),
    getText(lang, "searching.anim3"),
    getText(lang, "searching.anim4"),
    getText(lang, "searching.anim5"),
  ];
}

async function playSearchingAnimation(lenwy, replyJid, lang) {
  const searchingAnimations = getSearchingAnimations(lang);
  let messageKey = null;
  
  for (const frame of searchingAnimations) {
    if (messageKey) {
      await lenwy.sendMessage(replyJid, { text: frame, edit: messageKey });
    } else {
      const sent = await lenwy.sendMessage(replyJid, { text: frame });
      messageKey = sent?.key;
    }
    await sleep(800);
  }
  
  return messageKey;
}

// ══════════════════════════════════════════════════════════
// OUTCOME CALCULATORS
// ══════════════════════════════════════════════════════════

function rollOutcome() {
  const roll = Math.random() * 100;
  
  // Pet encounter: 7.955% total (sum of all pet rarities)
  if (roll < 7.955) return "pet";
  
  // Story trigger: 5%
  if (roll < 12.955) return "story";
  
  // Monster drop: 25%
  if (roll < 37.955) return "monster_drop";
  
  // Gold: 30%
  if (roll < 67.955) return "gold";
  
  // Nothing/Zonk: 32.045%
  return "nothing";
}

function rollGold() {
  return Math.floor(Math.random() * 20) + 1; // 1-20 gold
}

function getMonsterDrops(location) {
  const enemy = getRandomEnemy(location);
  if (!enemy || !enemy.drops || enemy.drops.length === 0) return null;
  
  // Pick a random drop from enemy's drop table
  const drop = enemy.drops[Math.floor(Math.random() * enemy.drops.length)];
  
  // Roll for drop chance
  if (Math.random() * 100 < drop.chance) {
    const qty = Math.floor(Math.random() * (drop.max - drop.min + 1)) + drop.min;
    return { item: drop.item, qty, enemyName: enemy.name };
  }
  
  return null;
}

// ══════════════════════════════════════════════════════════
// PET TAMING MINI-GAME
// ══════════════════════════════════════════════════════════

async function startPetTaming(lenwy, replyJid, playerJid, pet, messageKey, locale) {
  const lang = getLanguage(locale);
  const sequence = generateTamingSequence(pet.tamingSequenceLength);
  const rarityInfo = rarityConfig[pet.rarity];

  const rarityLine = getText(lang, "searching.petTamingRarity", {
    emoji: rarityInfo.emoji,
    name: rarityInfo.name,
  });

  const tamingText = getText(lang, "searching.petTamingHeader", {
    emoji: pet.emoji,
    name: pet.name,
    rarityLine,
    sequence,
    emojis: tamingEmojis.join(" "),
  });

  await lenwy.sendMessage(replyJid, { text: tamingText, edit: messageKey });

  // Store taming session
  searchingSessions.set(playerJid, {
    type: "pet_taming",
    pet,
    sequence,
    attempts: 3,
    startTime: Date.now(),
    messageKey,
    replyJid,
    locale: locale || "en",
  });
}

export async function handleTamingInput(lenwy, replyJid, playerJid, input) {
  const session = searchingSessions.get(playerJid);
  if (!session || session.type !== "pet_taming") return false;

  const lang = getLanguage(session.locale || "en");

  // Check timeout (15 seconds per attempt)
  const elapsed = Date.now() - session.startTime;
  if (elapsed > 15000) {
    searchingSessions.delete(playerJid);
    await lenwy.sendMessage(replyJid, {
      text: getText(lang, "searching.tamingTimeout", {
        emoji: session.pet.emoji,
        name: session.pet.name,
      }),
    });
    return true;
  }
  
  // Clean input (remove spaces)
  const cleanInput = input.replace(/\s+/g, "");
  
  // Check if input matches
  if (cleanInput === session.sequence) {
    // SUCCESS! Add pet to player
    const players = loadPlayers();
    const player = players[playerJid];
    
    if (!player) {
      searchingSessions.delete(playerJid);
      return true;
    }
    
    // Initialize pets array if not exists
    if (!player.pets) player.pets = [];
    if (!player.equippedPet) player.equippedPet = null;
    
    // Add pet to collection
    player.pets.push({
      id: session.pet.id,
      name: session.pet.name,
      level: 1,
      xp: 0,
      xpToNext: 100,
      obtainedAt: new Date().toISOString(),
      mood: "Happy"
    });
    
    player.lastActive = new Date().toISOString();
    players[playerJid] = player;
    savePlayers(players);
    
    const successText = getText(lang, "searching.tamingSuccessAlt", {
      emoji: session.pet.emoji,
      name: session.pet.name,
      info: formatPetInfo(session.pet),
    });

    await lenwy.sendMessage(replyJid, { text: successText });
    searchingSessions.delete(playerJid);
    return true;
  } else {
    // FAILED ATTEMPT
    session.attempts--;
    session.startTime = Date.now(); // Reset timer for next attempt
    
    if (session.attempts <= 0) {
      searchingSessions.delete(playerJid);
      await lenwy.sendMessage(replyJid, {
        text: getText(lang, "searching.tamingFailed", {
          emoji: session.pet.emoji,
          name: session.pet.name,
        }),
      });
      return true;
    }

    await lenwy.sendMessage(replyJid, {
      text: getText(lang, "searching.wrongSequence", {
        attempts: String(session.attempts),
        sequence: session.sequence,
      }),
    });
    return true;
  }
}

// ══════════════════════════════════════════════════════════
// MAIN SEARCHING LOGIC
// ══════════════════════════════════════════════════════════

async function executeSearching(lenwy, replyJid, playerJid, player) {
  const locale = getPlayerLanguage(player);
  const lang = getLanguage(locale);

  // Check cooldown
  const lastSearch = searchingCooldowns.get(playerJid);
  if (lastSearch) {
    const elapsed = Date.now() - lastSearch;
    if (elapsed < COOLDOWN_MS) {
      const remaining = Math.ceil((COOLDOWN_MS - elapsed) / 1000);
      await lenwy.sendMessage(replyJid, {
        text: getText(lang, "searching.cooldownSecs", { seconds: String(remaining) }),
      });
      return;
    }
  }

  // Check if location allows hunting
  if (!canDoAction(player.currentLocation, "hunt")) {
    await lenwy.sendMessage(replyJid, {
      text: getText(lang, "searching.cantSearchHunt"),
    });
    return;
  }

  // Set cooldown
  searchingCooldowns.set(playerJid, Date.now());

  // Play searching animation
  const messageKey = await playSearchingAnimation(lenwy, replyJid, lang);

  // Roll for outcome
  const outcome = rollOutcome();
  const location = getLocationById(player.currentLocation);

  let resultText = "";

  switch (outcome) {
    case "pet": {
      const pet = rollForPet();
      if (pet) {
        await startPetTaming(lenwy, replyJid, playerJid, pet, messageKey, locale);
        return;
      }
      const gold = rollGold();
      player.gold = (player.gold || 0) + gold;
      resultText = getText(lang, "searching.foundGoldAlt", {
        gold: String(gold),
        total: String(player.gold),
      });
      break;
    }

    case "story": {
      const totalAfter = (player.gold || 0) + 10;
      resultText = getText(lang, "searching.storyInLocation", {
        emoji: location.emoji,
        location: location.name,
        total: String(totalAfter),
      });
      player.gold = totalAfter;
      break;
    }

    case "monster_drop": {
      const drop = getMonsterDrops(player.currentLocation);
      if (drop) {
        addToInventory(player, drop.item, drop.qty);
        resultText = getText(lang, "searching.foundMonsterDrop", {
          enemy: drop.enemyName,
          item: drop.item,
          qty: String(drop.qty),
        });
      } else {
        const gold = rollGold();
        player.gold = (player.gold || 0) + gold;
        resultText = getText(lang, "searching.foundGoldAlt", {
          gold: String(gold),
          total: String(player.gold),
        });
      }
      break;
    }

    case "gold": {
      const gold = rollGold();
      player.gold = (player.gold || 0) + gold;
      resultText = getText(lang, "searching.foundGold", {
        gold: String(gold),
        total: String(player.gold),
      });
      break;
    }

    case "nothing": {
      const zonkKeys = [
        "searching.nothing",
        "searching.zonk",
        "searching.empty",
        "searching.wind",
        "searching.crickets",
      ];
      const pick = zonkKeys[Math.floor(Math.random() * zonkKeys.length)];
      resultText = getText(lang, pick);
      break;
    }
  }

  // Save player data
  player.lastActive = new Date().toISOString();
  const players = loadPlayers();
  players[playerJid] = player;
  savePlayers(players);

  // Send result
  await lenwy.sendMessage(replyJid, { text: resultText, edit: messageKey });
}

// ══════════════════════════════════════════════════════════
// COMMAND EXPORT
// ══════════════════════════════════════════════════════════

export const info = {
  name: "Searching",
  menu: ["searching"],
  case: ["searching"],
  description: "Search for treasures, pets, and more in dangerous locations!",
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

  await executeSearching(lenwy, replyJid, normalizedSender, player);
}
