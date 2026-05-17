/*
  RPG Command: pets
  Base: Lenwy SCM — RPG Extension

  View and manage your pet collection!
  
  Commands:
  - pets: View all your pets
  - pets <number>: View detailed info about a specific pet
  - pets equip <number>: Equip a pet
  - pets unequip: Unequip current pet
  
  Note: Use the separate "pat" command to pat your equipped pet!
*/

import fs from "fs";
import path from "path";
import {
  getPetById,
  getRandomFlavorText,
  getRandomMood,
  rarityConfig,
  calculatePetStatBonus,
  getXPForNextLevel,
  petLevelConfig,
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

const petRarityLabels = {
  en: {
    C: "Common",
    U: "Uncommon",
    R: "Rare",
    SR: "Super Rare",
    SSR: "Super Super Rare",
  },
  id: {
    C: "Umum",
    U: "Tidak Umum",
    R: "Langka",
    SR: "Super Langka",
    SSR: "Sangat Langka",
  },
};

const petStatTypeLabels = {
  en: {
    attack: "ATTACK",
    defense: "DEFENSE",
    agility: "AGILITY",
    luck: "LUCK",
  },
  id: {
    attack: "SERANGAN",
    defense: "PERTAHANAN",
    agility: "KELINCAHAN",
    luck: "KEBERUNTUNGAN",
  },
};

const petMoodLabels = {
  id: {
    Happy: "Senang",
    Curious: "Penasaran",
    Playful: "Ceria",
    Sleepy: "Mengantuk",
    Energetic: "Energik",
    Mysterious: "Misterius",
    Lazy: "Malas",
    Mischievous: "Usil",
    Affectionate: "Penyayang",
    Aloof: "Acuh",
    Calm: "Tenang",
    Wise: "Bijak",
    Content: "Puas",
    Patient: "Sabar",
    Alert: "Waspada",
    Protective: "Protektif",
    Fierce: "Garang",
    Gentle: "Lembut",
    Vigilant: "Siaga",
    Loyal: "Setia",
    Restless: "Gelisah",
    Powerful: "Kuat",
    Mystical: "Mistis",
    Graceful: "Anggun",
    Observant: "Tajam",
    Majestic: "Agung",
    Proud: "Bangga",
    Ethereal: "Halus",
    Watchful: "Mengawasi",
    Divine: "Ilahi",
    Noble: "Mulia",
    Serene: "Damai",
    Eternal: "Abadi",
    Radiant: "Bersinar",
  },
};

function getPetRarityLabel(lang, rarityCode) {
  const labels = petRarityLabels[lang?.code] || petRarityLabels.en;
  return labels[rarityCode] || rarityCode;
}

function getPetStatTypeLabel(lang, statType) {
  const labels = petStatTypeLabels[lang?.code] || petStatTypeLabels.en;
  return labels[statType] || String(statType || "").toUpperCase();
}

function getPetMoodLabel(lang, mood) {
  const labels = petMoodLabels[lang?.code] || {};
  return labels[mood] || mood;
}

function formatPetInfoLocalized(lang, pet, level = 1) {
  const rarityInfo = rarityConfig[pet.rarity];
  const actualStatBonus = calculatePetStatBonus(pet, level);
  const maxStatBonus = pet.statBonus.baseValue;
  const statTypeLabel = getPetStatTypeLabel(lang, pet.statBonus.type);
  const rarityLabel = lang?.code === "id" ? "Kelangkaan" : "Rarity";
  const levelBonusLabel = lang?.code === "id" ? `📊 Bonus Level ${level}:` : `📊 Level ${level} Bonus:`;
  const maxBonusLabel = lang?.code === "id" ? "📊 Bonus Maks (Lv.20):" : "📊 Max (Lv.20) Bonus:";
  
  let info = `${pet.emoji} *${pet.name}*\n`;
  info += `${rarityInfo.emoji} ${rarityLabel}: ${getPetRarityLabel(lang, pet.rarity)}\n`;
  info += `${levelBonusLabel} +${actualStatBonus} ${statTypeLabel}\n`;
  info += `${maxBonusLabel} +${maxStatBonus} ${statTypeLabel}\n`;
  
  if (pet.passive) {
    info += `${getText(lang, "pets.passive")} ${pet.passive.emoji} ${pet.passive.name}\n`;
    info += `   └ ${pet.passive.description}\n`;
  }
  
  info += `\n📖 ${pet.description}`;
  return info;
}

// ══════════════════════════════════════════════════════════
// PET COMMANDS
// ══════════════════════════════════════════════════════════

async function viewAllPets(lenwy, replyJid, player) {
  const lang = getLanguage(getPlayerLanguage(player));
  
  if (!player.pets || player.pets.length === 0) {
    await lenwy.sendMessage(replyJid, {
      text: getText(lang, "pets.title") + "\n\n" + getText(lang, "pets.noPets")
    });
    return;
  }
  
  let text = getText(lang, "pets.collection", { count: player.pets.length }) + "\n\n";
  
  player.pets.forEach((petData, index) => {
    const petInfo = getPetById(petData.id);
    if (!petInfo) return;
    
    const rarityInfo = rarityConfig[petInfo.rarity];
    const isEquipped = player.equippedPet === index;
    const equippedMark = isEquipped ? "✅ " : "";
    const actualStatBonus = calculatePetStatBonus(petInfo, petData.level);
    const rarityName = getPetRarityLabel(lang, petInfo.rarity);
    const statType = getPetStatTypeLabel(lang, petInfo.statBonus.type);
    const mood = getPetMoodLabel(lang, petData.mood || getText(lang, "pets.moodDefault"));
    
    text += `${index + 1}. ${equippedMark}${petInfo.emoji} ${petData.name}\n`;
    text += `   ${rarityInfo.emoji} ${rarityName} | Lv.${petData.level} | +${actualStatBonus} ${statType}\n`;
    text += getText(lang, "pets.moodSummary", { mood }) + "\n\n";
  });
  
  text += `\n${getText(lang, "pets.commands")}\n`;
  text += getText(lang, "pets.viewDetails") + "\n";
  text += getText(lang, "pets.equipPet") + "\n";
  text += getText(lang, "pets.unequipPet") + "\n";
  text += getText(lang, "pets.patPet") + "\n";
  text += getText(lang, "pets.levelUpPet") + "\n";
  text += getText(lang, "pets.enhancePet");
  
  await lenwy.sendMessage(replyJid, { text });
}

async function viewPetDetails(lenwy, replyJid, player, petIndex) {
  const lang = getLanguage(getPlayerLanguage(player));
  
  if (!player.pets || player.pets.length === 0) {
    await lenwy.sendMessage(replyJid, {
      text: getText(lang, "pets.noPets")
    });
    return;
  }
  
  const index = petIndex - 1;
  if (index < 0 || index >= player.pets.length) {
    await lenwy.sendMessage(replyJid, {
      text: getText(lang, "pets.invalidNumber", { count: player.pets.length })
    });
    return;
  }
  
  const petData = player.pets[index];
  const petInfo = getPetById(petData.id);
  
  if (!petInfo) {
    await lenwy.sendMessage(replyJid, {
      text: getText(lang, "pets.petNotFound")
    });
    return;
  }
  
  const isEquipped = player.equippedPet === index;
  const flavorText = getRandomFlavorText(petInfo);
  const mood = getPetMoodLabel(lang, petData.mood || getRandomMood(petInfo));
  const actualStatBonus = calculatePetStatBonus(petInfo, petData.level);
  const maxStatBonus = petInfo.statBonus.baseValue;
  const xpForNext = getXPForNextLevel(petData.level);
  
  let text = getText(lang, "pets.details") + "\n\n";
  text += `${formatPetInfoLocalized(lang, petInfo, petData.level)}\n\n`;
  text += getText(lang, "pets.yourPet") + "\n";
  text += getText(lang, "pets.level", { level: petData.level, maxLevel: petLevelConfig.maxLevel }) + "\n";
  text += getText(lang, "pets.currentBonus", { bonus: actualStatBonus, type: getPetStatTypeLabel(lang, petInfo.statBonus.type) }) + "\n";
  text += getText(lang, "pets.maxBonus", { max: maxStatBonus, type: getPetStatTypeLabel(lang, petInfo.statBonus.type) }) + "\n";
  
  if (petData.level < petLevelConfig.maxLevel) {
    text += getText(lang, "pets.xp", { xp: petData.xp, next: xpForNext }) + "\n";
  } else {
    text += getText(lang, "pets.xpMax") + "\n";
  }
  
  text += getText(lang, "pets.mood", { mood }) + "\n";
  text += getText(lang, "pets.obtained", { date: new Date(petData.obtainedAt).toLocaleDateString() }) + "\n";
  const statusText = isEquipped ? getText(lang, "pets.statusEquipped") : getText(lang, "pets.statusNotEquipped");
  text += getText(lang, "pets.status", { status: statusText }) + "\n\n";
  text += `💭 ${flavorText}\n\n`;
  text += getText(lang, "pets.levelUpCommands") + "\n";
  text += getText(lang, "pets.levelUpUseItem", { index: petIndex }) + "\n";
  text += getText(lang, "pets.levelUpConsumePet", { index: petIndex }) + "\n\n";
  text += getText(lang, "pets.interaction") + "\n";
  text += getText(lang, "pets.patCommand");
  
  await lenwy.sendMessage(replyJid, { text });
}

async function equipPet(lenwy, replyJid, playerJid, player, petIndex) {
  const lang = getLanguage(getPlayerLanguage(player));
  
  if (!player.pets || player.pets.length === 0) {
    await lenwy.sendMessage(replyJid, {
      text: getText(lang, "pets.noPets")
    });
    return;
  }
  
  const index = petIndex - 1;
  if (index < 0 || index >= player.pets.length) {
    await lenwy.sendMessage(replyJid, {
      text: getText(lang, "pets.invalidNumber", { count: player.pets.length })
    });
    return;
  }
  
  if (player.equippedPet === index) {
    await lenwy.sendMessage(replyJid, {
      text: getText(lang, "pets.alreadyEquipped")
    });
    return;
  }
  
  const petData = player.pets[index];
  const petInfo = getPetById(petData.id);
  
  if (!petInfo) {
    await lenwy.sendMessage(replyJid, {
      text: getText(lang, "pets.petNotFound")
    });
    return;
  }
  
  // Equip the pet
  player.equippedPet = index;
  player.lastActive = new Date().toISOString();
  
  const players = loadPlayers();
  players[playerJid] = player;
  savePlayers(players);
  
  const actualStatBonus = calculatePetStatBonus(petInfo, petData.level);
  let text = getText(lang, "pets.petEquipped", {
    emoji: petInfo.emoji,
    name: petData.name,
    bonus: actualStatBonus,
    type: getPetStatTypeLabel(lang, petInfo.statBonus.type),
    level: petData.level
  }) + "\n";
  
  if (petInfo.passive) {
    text += `${getText(lang, "pets.passive")} ${petInfo.passive.emoji} ${petInfo.passive.name}\n`;
    text += `   └ ${petInfo.passive.description}\n`;
  }
  
  text += `\n${getRandomFlavorText(petInfo)}`;
  
  await lenwy.sendMessage(replyJid, { text });
}

async function unequipPet(lenwy, replyJid, playerJid, player) {
  const lang = getLanguage(getPlayerLanguage(player));
  
  if (player.equippedPet === null || player.equippedPet === undefined) {
    await lenwy.sendMessage(replyJid, {
      text: getText(lang, "pets.noPetEquipped")
    });
    return;
  }
  
  const petData = player.pets[player.equippedPet];
  const petInfo = getPetById(petData.id);
  
  player.equippedPet = null;
  player.lastActive = new Date().toISOString();
  
  const players = loadPlayers();
  players[playerJid] = player;
  savePlayers(players);
  
  await lenwy.sendMessage(replyJid, {
    text: getText(lang, "pets.petUnequipped", {
      emoji: petInfo.emoji,
      name: petData.name
    })
  });
}

// Pat functionality moved to separate pat.js command

// ══════════════════════════════════════════════════════════
// COMMAND EXPORT
// ══════════════════════════════════════════════════════════

export const info = {
  name: "Pets",
  menu: ["pets"],
  case: ["pets"],
  description: "View and manage your pet collection!",
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
  const { lenwy, replyJid, normalizedSender, LenwyText, args } = leni;

  const botJid = lenwy.user?.id?.split(":")[0] + "@s.whatsapp.net";
  if (normalizedSender === botJid) return;

  const players = loadPlayers();
  const player = players[normalizedSender];

  if (!player) {
    const lang = getLanguage("en");
    return LenwyText(getText(lang, "common.notRegisteredFull"));
  }
  
  const lang = getLanguage(getPlayerLanguage(player));

  // Initialize pets array if not exists
  if (!player.pets) player.pets = [];
  if (player.equippedPet === undefined) player.equippedPet = null;

  // Parse command
  const subCommand = args[0]?.toLowerCase();
  const petNumber = parseInt(args[1]);

  if (!subCommand) {
    // View all pets
    await viewAllPets(lenwy, replyJid, player);
  } else if (subCommand === "equip" && petNumber) {
    // Equip pet
    await equipPet(lenwy, replyJid, normalizedSender, player, petNumber);
  } else if (subCommand === "unequip") {
    // Unequip pet
    await unequipPet(lenwy, replyJid, normalizedSender, player);
  } else if (!isNaN(parseInt(subCommand))) {
    // View specific pet details
    await viewPetDetails(lenwy, replyJid, player, parseInt(subCommand));
  } else {
    await lenwy.sendMessage(replyJid, {
      text: getText(lang, "pets.usage")
    });
  }
}
