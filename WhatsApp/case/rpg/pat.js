/*
  RPG Command: pat
  Base: Lenwy SCM — RPG Extension

  Pat your currently equipped pet with animated messages!
  
  Command:
  - pat: Pat your equipped pet (animated)
*/

import fs from "fs";
import path from "path";
import {
  getPetById,
  getRandomFlavorText,
} from "../../database/rpg/pets.js";
import { getLanguage, getText, getPlayerLanguage } from "../../database/rpg/languages.js";

const playersPath = path.join(process.cwd(), "WhatsApp", "database", "rpg", "players.json");

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

// Sleep helper for animation timing
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// ══════════════════════════════════════════════════════════
// PAT ANIMATION
// ══════════════════════════════════════════════════════════

async function patEquippedPet(lenwy, replyJid, playerJid, player) {
  const lang = getLanguage(getPlayerLanguage(player));

  // Check if pet is equipped
  if (player.equippedPet === null || player.equippedPet === undefined) {
    await lenwy.sendMessage(replyJid, {
      text: getText(lang, "pat.noPetEquipped"),
    });
    return;
  }
  
  const petData = player.pets[player.equippedPet];
  const petInfo = getPetById(petData.id);
  
  if (!petInfo) {
    await lenwy.sendMessage(replyJid, {
      text: getText(lang, "pat.petDataMissing"),
    });
    return;
  }
  
  // Animation frames
  const nf = { emoji: petInfo.emoji, name: petData.name };
  const frames = [
    getText(lang, "pat.frame1", nf),
    getText(lang, "pat.frame2", nf),
    getText(lang, "pat.frame3", nf),
    getText(lang, "pat.frame4", nf),
    getText(lang, "pat.frame5", nf),
  ];
  
  // Send initial message
  const sent = await lenwy.sendMessage(replyJid, {
    text: frames[0],
  });
  
  const messageKey = sent?.key;
  
  if (!messageKey) {
    // Fallback if message editing not supported
    await lenwy.sendMessage(replyJid, {
      text: getText(lang, "pat.fbNoEdit", {
        emoji: petInfo.emoji,
        name: petData.name,
        flavor: getRandomFlavorText(petInfo),
      }),
    });
    return;
  }
  
  // Animate through frames
  for (let i = 1; i < frames.length; i++) {
    await sleep(800); // 800ms between frames
    await lenwy.sendMessage(replyJid, {
      text: frames[i],
      edit: messageKey,
    });
  }
  
  // Final message with random response
  await sleep(1000);
  
  const rnd = Math.floor(Math.random() * 6) + 1;
  let finalMessage;

  switch (rnd) {
    case 1:
      finalMessage = getText(lang, "pat.finale1", nf);
      break;
    case 2:
      finalMessage = getText(lang, "pat.finale2", nf);
      break;
    case 3:
      finalMessage = getText(lang, "pat.finale3", nf);
      break;
    case 4:
      finalMessage = getText(lang, "pat.finale4", {
        emoji: nf.emoji,
        name: nf.name,
        flavor: getRandomFlavorText(petInfo),
      });
      break;
    case 5:
      finalMessage = getText(lang, "pat.finale5", nf);
      break;
    default:
      finalMessage = getText(lang, "pat.finale6", nf);
  }
  
  await lenwy.sendMessage(replyJid, {
    text: finalMessage,
    edit: messageKey,
  });
  
  // Update mood to happy
  petData.mood = "Happy";
  player.lastActive = new Date().toISOString();
  
  const players = loadPlayers();
  players[playerJid] = player;
  savePlayers(players);
}

// ══════════════════════════════════════════════════════════
// COMMAND EXPORT
// ══════════════════════════════════════════════════════════

export const info = {
  name: "Pat",
  menu: ["pat"],
  case: ["pat"],
  description: "Pat your equipped pet with cute animation!",
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

  // Initialize pets array if not exists
  if (!player.pets) player.pets = [];
  if (player.equippedPet === undefined) player.equippedPet = null;

  await patEquippedPet(lenwy, replyJid, normalizedSender, player);
}
