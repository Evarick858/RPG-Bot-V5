/*
  RPG Command: petlevel / petenhance
  Base: Lenwy SCM — RPG Extension

  Pet Leveling System:
  - Use pet items to gain XP
  - Enhance pets by consuming other pets
  - Max level 20 with exponential XP requirements
  
  Commands:
  - petlevel <pet#> <item> - Use item to level up pet
  - petenhance <target#> <material#> - Consume material pet to enhance target
*/

import fs from "fs";
import path from "path";
import {
  getPetById,
  calculatePetStatBonus,
  getXPForNextLevel,
  calculateEnhancementXP,
  calculateItemXP,
  petLevelConfig,
  rarityConfig,
} from "../../database/rpg/pets.js";
import { getItemByName } from "../../database/rpg/items.js";
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

function removeFromInventory(player, itemId, qty = 1) {
  const item = player.inventory.find((i) => i.id === itemId);
  if (!item || item.qty < qty) return false;
  
  item.qty -= qty;
  if (item.qty <= 0) {
    player.inventory = player.inventory.filter((i) => i.id !== itemId);
  }
  return true;
}

// ══════════════════════════════════════════════════════════
// PET LEVELING WITH ITEMS
// ══════════════════════════════════════════════════════════

async function levelUpPet(lenwy, replyJid, playerJid, player, petIndex, itemName) {
  const lang = getLanguage(getPlayerLanguage(player));

  if (!player.pets || player.pets.length === 0) {
    await lenwy.sendMessage(replyJid, {
      text: getText(lang, "petlevelCmd.noPets"),
    });
    return;
  }
  
  const index = petIndex - 1;
  if (index < 0 || index >= player.pets.length) {
    await lenwy.sendMessage(replyJid, {
      text: getText(lang, "petlevelCmd.invalidPetNum", { count: String(player.pets.length) }),
    });
    return;
  }
  
  const petData = player.pets[index];
  const petInfo = getPetById(petData.id);
  
  if (!petInfo) {
    await lenwy.sendMessage(replyJid, {
      text: getText(lang, "petlevelCmd.petMissingMeta"),
    });
    return;
  }
  
  // Check if already max level
  if (petData.level >= petLevelConfig.maxLevel) {
    await lenwy.sendMessage(replyJid, {
      text: getText(lang, "petlevelCmd.alreadyMaxPet", {
        name: petData.name,
        max: String(petLevelConfig.maxLevel),
      }),
    });
    return;
  }
  
  // Find item
  const itemId = itemName.toLowerCase().replace(/\s+/g, "_");
  const itemData = getItemByName(itemId);
  
  if (!itemData || itemData.category !== "consumable" || itemData.target !== "pet") {
    await lenwy.sendMessage(replyJid, {
      text: getText(lang, "petlevelCmd.invalidPetItem"),
    });
    return;
  }
  
  // Check inventory
  const invItem = player.inventory.find((i) => i.id === itemData.id);
  if (!invItem || invItem.qty <= 0) {
    await lenwy.sendMessage(replyJid, {
      text: getText(lang, "petlevelCmd.missingItemInv", { item: itemData.name }),
    });
    return;
  }
  
  // Calculate XP gain
  const xpGain = calculateItemXP(itemData.id);
  const oldXP = petData.xp;
  const oldLevel = petData.level;
  
  petData.xp += xpGain;
  
  // Level up logic
  let leveledUp = false;
  let levelsGained = 0;
  
  while (petData.level < petLevelConfig.maxLevel) {
    const xpNeeded = getXPForNextLevel(petData.level);
    if (petData.xp >= xpNeeded) {
      petData.xp -= xpNeeded;
      petData.level++;
      levelsGained++;
      leveledUp = true;
    } else {
      break;
    }
  }
  
  // Cap XP at max level
  if (petData.level >= petLevelConfig.maxLevel) {
    petData.xp = 0;
  }
  
  // Remove item from inventory
  removeFromInventory(player, itemData.id, 1);
  
  // Save player
  player.lastActive = new Date().toISOString();
  const players = loadPlayers();
  players[playerJid] = player;
  savePlayers(players);
  
  // Build response
  const currentStatBonus = calculatePetStatBonus(petInfo, petData.level);
  const xpForNext = getXPForNextLevel(petData.level);

  let text =
    getText(lang, "petlevelCmd.itemUsedHeader", {
      item: itemData.name,
      emoji: petInfo.emoji,
      petName: petData.name,
    }) +
    getText(lang, "petlevelCmd.xpGainLine", { xp: String(xpGain) });

  if (leveledUp) {
    text += getText(lang, "petlevelCmd.levelUpLine", {
      from: String(oldLevel),
      to: String(petData.level),
    });
    if (levelsGained > 1) {
      text += getText(lang, "petlevelCmd.multiLevelLine", { n: String(levelsGained) });
    }
    text += getText(lang, "petlevelCmd.newStatsHeader");
    text += getText(lang, "petlevelCmd.statBonusLine", {
      bonus: String(currentStatBonus),
      type: petInfo.statBonus.type.toUpperCase(),
    });
  }

  if (petData.level < petLevelConfig.maxLevel) {
    text += getText(lang, "petlevelCmd.progressLine", {
      xp: String(petData.xp),
      need: String(xpForNext),
      next: String(petData.level + 1),
    });
  } else {
    text += getText(lang, "petlevelCmd.maxReached");
  }

  await lenwy.sendMessage(replyJid, { text });
}

// ══════════════════════════════════════════════════════════
// PET ENHANCEMENT (CONSUME OTHER PETS)
// ══════════════════════════════════════════════════════════

async function enhancePet(lenwy, replyJid, playerJid, player, targetIndex, materialIndex) {
  const lang = getLanguage(getPlayerLanguage(player));

  if (!player.pets || player.pets.length < 2) {
    await lenwy.sendMessage(replyJid, {
      text: getText(lang, "petlevelCmd.needTwoPetsEnhance"),
    });
    return;
  }
  
  const targetIdx = targetIndex - 1;
  const materialIdx = materialIndex - 1;
  
  if (targetIdx < 0 || targetIdx >= player.pets.length) {
    await lenwy.sendMessage(replyJid, {
      text: getText(lang, "petlevelCmd.invalidTargetNum", { count: String(player.pets.length) }),
    });
    return;
  }
  
  if (materialIdx < 0 || materialIdx >= player.pets.length) {
    await lenwy.sendMessage(replyJid, {
      text: getText(lang, "petlevelCmd.invalidMaterialNum", { count: String(player.pets.length) }),
    });
    return;
  }
  
  if (targetIdx === materialIdx) {
    await lenwy.sendMessage(replyJid, {
      text: getText(lang, "petlevelCmd.enhanceSelf"),
    });
    return;
  }
  
  const targetPet = player.pets[targetIdx];
  const materialPet = player.pets[materialIdx];
  
  const targetInfo = getPetById(targetPet.id);
  const materialInfo = getPetById(materialPet.id);
  
  if (!targetInfo || !materialInfo) {
    await lenwy.sendMessage(replyJid, {
      text: getText(lang, "petlevelCmd.petMissingMeta"),
    });
    return;
  }
  
  // Check if target is max level
  if (targetPet.level >= petLevelConfig.maxLevel) {
    await lenwy.sendMessage(replyJid, {
      text: getText(lang, "petlevelCmd.targetAlreadyMaxEnhance", { name: targetPet.name }),
    });
    return;
  }
  
  // Check if target is equipped
  if (player.equippedPet === targetIdx) {
    await lenwy.sendMessage(replyJid, {
      text: getText(lang, "petlevelCmd.equippedTarget", { name: targetPet.name }),
    });
    return;
  }
  
  // Check if material is equipped
  if (player.equippedPet === materialIdx) {
    await lenwy.sendMessage(replyJid, {
      text: getText(lang, "petlevelCmd.equippedMaterial", { name: materialPet.name }),
    });
    return;
  }
  
  // Calculate XP gain
  const xpGain = calculateEnhancementXP(materialInfo.rarity, targetInfo.rarity);
  const oldLevel = targetPet.level;
  
  targetPet.xp += xpGain;
  
  // Level up logic
  let leveledUp = false;
  let levelsGained = 0;
  
  while (targetPet.level < petLevelConfig.maxLevel) {
    const xpNeeded = getXPForNextLevel(targetPet.level);
    if (targetPet.xp >= xpNeeded) {
      targetPet.xp -= xpNeeded;
      targetPet.level++;
      levelsGained++;
      leveledUp = true;
    } else {
      break;
    }
  }
  
  // Cap XP at max level
  if (targetPet.level >= petLevelConfig.maxLevel) {
    targetPet.xp = 0;
  }
  
  // Remove material pet
  player.pets.splice(materialIdx, 1);
  
  // Adjust equipped pet index if needed
  if (player.equippedPet !== null && player.equippedPet > materialIdx) {
    player.equippedPet--;
  }
  
  // Save player
  player.lastActive = new Date().toISOString();
  const players = loadPlayers();
  players[playerJid] = player;
  savePlayers(players);
  
  // Build response
  const currentStatBonus = calculatePetStatBonus(targetInfo, targetPet.level);
  const xpForNext = getXPForNextLevel(targetPet.level);
  const materialRarityInfo = rarityConfig[materialInfo.rarity];
  const sameRarityBonus =
    materialInfo.rarity === targetInfo.rarity ? getText(lang, "petlevelCmd.sameRarityBonus") : "";

  let text = getText(lang, "petlevelCmd.enhanceTitle");
  text += getText(lang, "petlevelCmd.consumedLine", {
    emoji: materialInfo.emoji,
    name: materialPet.name,
    rarityEmoji: materialRarityInfo.emoji,
  });
  text += getText(lang, "petlevelCmd.xpGainEnhanceLine", {
    xp: String(xpGain),
    bonus: sameRarityBonus,
  });

  if (leveledUp) {
    text += getText(lang, "petlevelCmd.levelUpLine", {
      from: String(oldLevel),
      to: String(targetPet.level),
    });
    if (levelsGained > 1) {
      text += getText(lang, "petlevelCmd.multiLevelLine", { n: String(levelsGained) });
    }
    text += getText(lang, "petlevelCmd.levelUpEnhanceSection", {
      emoji: targetInfo.emoji,
      name: targetPet.name,
    });
    text += getText(lang, "petlevelCmd.statBonusLine", {
      bonus: String(currentStatBonus),
      type: targetInfo.statBonus.type.toUpperCase(),
    });
  } else {
    text += getText(lang, "petlevelCmd.statsOneLine", {
      emoji: targetInfo.emoji,
      name: targetPet.name,
      level: String(targetPet.level),
      bonus: String(currentStatBonus),
      type: targetInfo.statBonus.type.toUpperCase(),
    });
  }

  if (targetPet.level < petLevelConfig.maxLevel) {
    text += getText(lang, "petlevelCmd.progressLine", {
      xp: String(targetPet.xp),
      need: String(xpForNext),
      next: String(targetPet.level + 1),
    });
  } else {
    text += getText(lang, "petlevelCmd.maxReached");
  }

  await lenwy.sendMessage(replyJid, { text });
}

// ══════════════════════════════════════════════════════════
// COMMAND EXPORT
// ══════════════════════════════════════════════════════════

export const info = {
  name: "Pet Level",
  menu: ["petlevel", "petenhance"],
  case: ["petlevel", "petenhance"],
  description: "Level up pets with items or enhance by consuming other pets.",
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
  const { lenwy, replyJid, normalizedSender, LenwyText, command, args } = leni;

  const botJid = lenwy.user?.id?.split(":")[0] + "@s.whatsapp.net";
  if (normalizedSender === botJid) return;

  const players = loadPlayers();
  const player = players[normalizedSender];
  const langP = player ? getLanguage(getPlayerLanguage(player)) : getLanguage("id");

  if (!player) {
    return LenwyText(getText(langP, "gold.notRegistered"));
  }

  if (command === "petlevel") {
    const petNumber = parseInt(args[0]);
    const itemName = args.slice(1).join(" ");
    
    if (!petNumber || !itemName) {
      return LenwyText(getText(langP, "petlevelCmd.petlevelUsage"));
    }
    
    await levelUpPet(lenwy, replyJid, normalizedSender, player, petNumber, itemName);
  } else if (command === "petenhance") {
    const targetNumber = parseInt(args[0]);
    const materialNumber = parseInt(args[1]);
    
    if (!targetNumber || !materialNumber) {
      return LenwyText(getText(langP, "petlevelCmd.petenhanceUsage"));
    }
    
    await enhancePet(lenwy, replyJid, normalizedSender, player, targetNumber, materialNumber);
  }
}
