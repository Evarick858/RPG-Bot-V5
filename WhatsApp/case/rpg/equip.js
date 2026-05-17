/*
  RPG Command : equip / unequip
  Base : Lenwy SCM — RPG Extension

  Commands:
  - !equip <item_name>     → Equip weapon/shield/armor/accessory
  - !unequip <slot>        → Unequip item from slot
  - !equipment             → View all equipped items

  Equipment Slots:
  - weapon (main hand)
  - offhand (shield or second weapon)
  - head, chest, legs, boots (armor)
  - accessory (ring/amulet)

  Equipment Bonuses:
  - Weapons (Rare+): Passive abilities, Legendary also grants skill
  - Armor Sets (Rare+): Set bonus when wearing full 4-piece set
  - Shields & Accessories: Stats only
*/

import fs from "fs";
import path from "path";
import { getItemById } from "../../database/rpg/items.js";
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

// Check if player has item in inventory
function hasItemInInventory(player, itemId) {
  return player.inventory.find((i) => i.id === itemId && i.qty > 0);
}

// Remove item from inventory
function removeFromInventory(player, itemId) {
  const item = player.inventory.find((i) => i.id === itemId);
  if (item) {
    item.qty--;
    if (item.qty <= 0) {
      player.inventory = player.inventory.filter((i) => i.id !== itemId);
    }
  }
}

// Add item to inventory
function addToInventory(player, itemId) {
  const existing = player.inventory.find((i) => i.id === itemId);
  if (existing) {
    existing.qty++;
  } else {
    player.inventory.push({ id: itemId, qty: 1 });
  }
}

// Check if armor set is complete
function checkArmorSetBonus(player) {
  const armorSlots = ["head", "chest", "legs", "boots"];
  const equippedArmor = armorSlots.map((slot) => player.equipment.armor[slot]);

  // Check if all slots are equipped
  if (equippedArmor.some((piece) => !piece.id)) {
    return null; // Not all slots equipped
  }

  // Check if all pieces belong to same set
  const setName = equippedArmor[0].armorSet;
  if (!setName) return null;

  const allSameSet = equippedArmor.every((piece) => piece.armorSet === setName);
  if (!allSameSet) return null;

  // Get set bonus from any piece (they all have the same setBonus)
  const setBonus = equippedArmor[0].setBonus;
  return setBonus;
}

// Get equipment stats summary
function getEquipmentStats(player) {
  const stats = {
    attack: 0,
    defense: 0,
    hp: 0,
    mana: 0,
    agility: 0,
    luck: 0,
    critChance: 0,
    blockChance: 0,
    physicalDef: 0,
    magicalDef: 0,
    physicalAtk: 0,
    magicalAtk: 0,
  };

  // Weapon stats
  if (player.equipment.weapon.id) {
    const weaponStats = player.equipment.weapon.stats || {};
    for (const [stat, value] of Object.entries(weaponStats)) {
      if (stats.hasOwnProperty(stat)) stats[stat] += value;
    }
  }

  // Offhand stats
  if (player.equipment.offhand.id) {
    const offhandStats = player.equipment.offhand.stats || {};
    for (const [stat, value] of Object.entries(offhandStats)) {
      if (stats.hasOwnProperty(stat)) stats[stat] += value;
    }
  }

  // Armor stats
  const armorSlots = ["head", "chest", "legs", "boots"];
  for (const slot of armorSlots) {
    if (player.equipment.armor[slot].id) {
      const armorStats = player.equipment.armor[slot].stats || {};
      for (const [stat, value] of Object.entries(armorStats)) {
        if (stats.hasOwnProperty(stat)) stats[stat] += value;
      }
    }
  }

  // Accessory stats
  if (player.equipment.accessory.id) {
    const accessoryStats = player.equipment.accessory.stats || {};
    for (const [stat, value] of Object.entries(accessoryStats)) {
      if (stats.hasOwnProperty(stat)) stats[stat] += value;
    }
  }

  return stats;
}

function formatSetName(setName = "") {
  return setName
    .split("_")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

function getEquipmentLabels(lang) {
  if (lang.code === "id") {
    return {
      weapon: "Senjata",
      offhand: "Offhand",
      head: "Kepala",
      chest: "Badan",
      legs: "Kaki",
      boots: "Sepatu",
      accessory: "Aksesoris",
      none: "Tidak ada",
      activeSetBonus: "BONUS SET AKTIF",
      crit: "Kritis",
      block: "Blok",
      commands: "Perintah",
      turns: "giliran",
    };
  }

  return {
    weapon: "Weapon",
    offhand: "Offhand",
    head: "Head",
    chest: "Chest",
    legs: "Legs",
    boots: "Boots",
    accessory: "Accessory",
    none: "None",
    activeSetBonus: "SET BONUS ACTIVE",
    crit: "Crit",
    block: "Block",
    commands: "Commands",
    turns: "turns",
  };
}

// Adjust HP/Mana after equipment change
function adjustStatsAfterEquipChange(player, oldMaxHp, oldMaxMana) {
  // Get new equipment stats
  const equipStats = getEquipmentStats(player);
  const newMaxHp = player.stats.maxHp + (equipStats.hp || 0);
  const newMaxMana = player.stats.maxMana + (equipStats.mana || 0);

  // Calculate HP/Mana change
  const hpDiff = newMaxHp - oldMaxHp;
  const manaDiff = newMaxMana - oldMaxMana;

  // Adjust current HP/Mana
  if (hpDiff > 0) {
    // MaxHP increased - heal to full or add the difference
    player.stats.hp = Math.min(player.stats.hp + hpDiff, newMaxHp);
  } else if (hpDiff < 0) {
    // MaxHP decreased - cap current HP at new max
    player.stats.hp = Math.min(player.stats.hp, newMaxHp);
  }

  if (manaDiff > 0) {
    // MaxMana increased - restore to full or add the difference
    player.stats.mana = Math.min(player.stats.mana + manaDiff, newMaxMana);
  } else if (manaDiff < 0) {
    // MaxMana decreased - cap current mana at new max
    player.stats.mana = Math.min(player.stats.mana, newMaxMana);
  }
}

// ── Equip Item ───────────────────────────────────────────

function equipItem(player, itemData, lang) {
  const category = itemData.category;
  const labels = getEquipmentLabels(lang);

  // Get equipment stats BEFORE equipping
  const statsBefore = getEquipmentStats(player);
  const maxHpBefore = player.stats.maxHp + (statsBefore.hp || 0);
  const maxManaBefore = player.stats.maxMana + (statsBefore.mana || 0);

  // WEAPON
  if (category === "weapon") {
    // Check if two-handed
    if (itemData.twoHanded) {
      // Unequip offhand if equipped
      if (player.equipment.offhand.id) {
        addToInventory(player, player.equipment.offhand.id);
        player.equipment.offhand = { id: null, name: null, type: null, stats: {} };
      }
    }

    // Unequip current weapon if equipped
    if (player.equipment.weapon.id) {
      addToInventory(player, player.equipment.weapon.id);
    }

    // Equip new weapon
    player.equipment.weapon = {
      id: itemData.id,
      name: itemData.name,
      type: itemData.weaponType,
      twoHanded: itemData.twoHanded,
      stats: itemData.stats,
      rarity: itemData.rarity,
      passive: itemData.passive || null,
      skill: itemData.skill || null,
    };

    removeFromInventory(player, itemData.id);
    
    // Adjust HP/Mana after equipping
    adjustStatsAfterEquipChange(player, maxHpBefore, maxManaBefore);
    
    let message = getText(lang, "equip.equipped", { item: itemData.name });
    
    // Show passive if exists
    if (itemData.passive) {
      message += `\n\n${getText(lang, "equip.passive")} ${itemData.passive.emoji} ${itemData.passive.name}`;
    }
    
    // Show skill if exists
    if (itemData.skill) {
      message += `\n${getText(lang, "equip.weaponSkill")} ${itemData.skill.name}`;
      message += `\n   ${lang.code === "id" ? "Cooldown" : "Cooldown"}: ${itemData.skill.cooldown} ${labels.turns}`;
    }
    
    return message;
  }

  // SHIELD
  if (category === "shield") {
    // Check if weapon is two-handed
    if (player.equipment.weapon.twoHanded) {
      return getText(lang, "equip.twoHandedConflict", { weapon: player.equipment.weapon.name });
    }

    // Unequip current offhand if equipped
    if (player.equipment.offhand.id) {
      addToInventory(player, player.equipment.offhand.id);
    }

    // Equip shield
    player.equipment.offhand = {
      id: itemData.id,
      name: itemData.name,
      type: "shield",
      stats: itemData.stats,
      rarity: itemData.rarity,
    };

    removeFromInventory(player, itemData.id);
    
    // Adjust HP/Mana after equipping
    adjustStatsAfterEquipChange(player, maxHpBefore, maxManaBefore);
    
    return getText(lang, "equip.equipped", { item: itemData.name });
  }

  // ARMOR
  if (category === "armor") {
    const slot = itemData.armorSlot;
    if (!["head", "chest", "legs", "boots"].includes(slot)) {
      return `⚠️ *${lang.code === "id" ? "Slot armor tidak valid" : "Invalid armor slot"}: ${slot}*`;
    }

    // Unequip current armor in slot
    if (player.equipment.armor[slot].id) {
      addToInventory(player, player.equipment.armor[slot].id);
    }

    // Equip new armor
    player.equipment.armor[slot] = {
      id: itemData.id,
      name: itemData.name,
      armorSet: itemData.armorSet,
      stats: itemData.stats,
      rarity: itemData.rarity,
      setBonus: itemData.setBonus || null,
    };

    removeFromInventory(player, itemData.id);

    // Adjust HP/Mana after equipping
    adjustStatsAfterEquipChange(player, maxHpBefore, maxManaBefore);

    // Check for set bonus
    const setBonus = checkArmorSetBonus(player);
    let message = getText(lang, "equip.equipped", { item: itemData.name });

    if (setBonus && setBonus.passives) {
      message += `\n\n${getText(lang, "equip.setBonusActivated", { setName: formatSetName(itemData.armorSet) })}\n`;
      for (const passive of setBonus.passives) {
        message += `${passive.emoji} ${passive.name}\n`;
      }
    }

    return message;
  }

  // ACCESSORY
  if (category === "accessory") {
    // Unequip current accessory
    if (player.equipment.accessory.id) {
      addToInventory(player, player.equipment.accessory.id);
    }

    // Equip new accessory
    player.equipment.accessory = {
      id: itemData.id,
      name: itemData.name,
      stats: itemData.stats,
      rarity: itemData.rarity,
    };

    removeFromInventory(player, itemData.id);
    
    // Adjust HP/Mana after equipping
    adjustStatsAfterEquipChange(player, maxHpBefore, maxManaBefore);
    
    return getText(lang, "equip.equipped", { item: itemData.name });
  }

  return `⚠️ *${lang.code === "id" ? "Item ini tidak bisa dipasang" : "Cannot equip this item"}!*\n\n${lang.code === "id" ? "Kategori item" : "Item category"}: ${category}`;
}

// ── Unequip Item ─────────────────────────────────────────

function unequipItem(player, slot, lang) {
  slot = slot.toLowerCase();
  const slotDisplay = lang.code === "id" ? {
    weapon: "senjata",
    offhand: "offhand",
    head: "armor kepala",
    chest: "armor badan",
    legs: "armor kaki",
    boots: "armor sepatu",
    accessory: "aksesoris",
  } : {
    weapon: "weapon",
    offhand: "offhand",
    head: "head armor",
    chest: "chest armor",
    legs: "legs armor",
    boots: "boots armor",
    accessory: "accessory",
  };

  // Get equipment stats BEFORE unequipping
  const statsBefore = getEquipmentStats(player);
  const maxHpBefore = player.stats.maxHp + (statsBefore.hp || 0);
  const maxManaBefore = player.stats.maxMana + (statsBefore.mana || 0);

  // WEAPON
  if (slot === "weapon") {
    if (!player.equipment.weapon.id) {
      return getText(lang, "equip.noItemEquipped", { slot: slotDisplay.weapon });
    }

    addToInventory(player, player.equipment.weapon.id);
    const weaponName = player.equipment.weapon.name;
    player.equipment.weapon = { id: null, name: null, type: null, twoHanded: false, stats: {} };
    
    // Adjust HP/Mana after unequipping
    adjustStatsAfterEquipChange(player, maxHpBefore, maxManaBefore);
    
    return getText(lang, "equip.unequipped", { item: weaponName });
  }

  // OFFHAND (shield)
  if (slot === "offhand" || slot === "shield") {
    if (!player.equipment.offhand.id) {
      return getText(lang, "equip.noItemEquipped", { slot: slotDisplay.offhand });
    }

    addToInventory(player, player.equipment.offhand.id);
    const offhandName = player.equipment.offhand.name;
    player.equipment.offhand = { id: null, name: null, type: null, stats: {} };
    
    // Adjust HP/Mana after unequipping
    adjustStatsAfterEquipChange(player, maxHpBefore, maxManaBefore);
    
    return getText(lang, "equip.unequipped", { item: offhandName });
  }

  // ARMOR
  if (["head", "chest", "legs", "boots"].includes(slot)) {
    if (!player.equipment.armor[slot].id) {
      return getText(lang, "equip.noItemEquipped", { slot: slotDisplay[slot] });
    }

    addToInventory(player, player.equipment.armor[slot].id);
    const armorName = player.equipment.armor[slot].name;
    player.equipment.armor[slot] = { id: null, name: null, stats: {} };

    // Adjust HP/Mana after unequipping
    adjustStatsAfterEquipChange(player, maxHpBefore, maxManaBefore);

    let message = getText(lang, "equip.unequipped", { item: armorName });

    // Check if set bonus was lost
    const setBonus = checkArmorSetBonus(player);
    if (!setBonus) {
      message += `\n\n${getText(lang, "equip.setBonusDeactivated")}`;
    }

    return message;
  }

  // ACCESSORY
  if (slot === "accessory" || slot === "ring" || slot === "amulet") {
    if (!player.equipment.accessory.id) {
      return getText(lang, "equip.noItemEquipped", { slot: slotDisplay.accessory });
    }

    addToInventory(player, player.equipment.accessory.id);
    const accessoryName = player.equipment.accessory.name;
    player.equipment.accessory = { id: null, name: null, stats: {} };
    
    // Adjust HP/Mana after unequipping
    adjustStatsAfterEquipChange(player, maxHpBefore, maxManaBefore);
    
    return getText(lang, "equip.unequipped", { item: accessoryName });
  }
  return getText(lang, "equip.invalidSlot", { slot });
}

// ── View Equipment ───────────────────────────────────────

function viewEquipment(player, lang) {
  const labels = getEquipmentLabels(lang);
  let message = `${getText(lang, "equip.equipmentTitle", { name: player.name })}\n\n`;

  // Weapon
  if (player.equipment.weapon.id) {
    message += `🗡️ *${labels.weapon}:* ${player.equipment.weapon.name}\n`;
    if (player.equipment.weapon.passive) {
      message += `   ${player.equipment.weapon.passive.emoji} ${player.equipment.weapon.passive.name}\n`;
    }
    if (player.equipment.weapon.skill) {
      message += `   ⚡ ${player.equipment.weapon.skill.name}\n`;
    }
  } else {
    message += `🗡️ *${labels.weapon}:* ${labels.none}\n`;
  }

  // Offhand
  if (player.equipment.offhand.id) {
    message += `🛡️ *${labels.offhand}:* ${player.equipment.offhand.name}\n`;
  } else {
    message += `🛡️ *${labels.offhand}:* ${labels.none}\n`;
  }

  message += `\n`;

  // Armor
  const armorSlots = [
    { slot: "head", emoji: "🪖", label: labels.head },
    { slot: "chest", emoji: "🦺", label: labels.chest },
    { slot: "legs", emoji: "👖", label: labels.legs },
    { slot: "boots", emoji: "🥾", label: labels.boots },
  ];

  for (const { slot, emoji, label } of armorSlots) {
    if (player.equipment.armor[slot].id) {
      message += `${emoji} *${label}:* ${player.equipment.armor[slot].name}\n`;
    } else {
      message += `${emoji} *${label}:* ${labels.none}\n`;
    }
  }

  // Check set bonus
  const setBonus = checkArmorSetBonus(player);
  if (setBonus && setBonus.passives) {
    const setName = player.equipment.armor.head.armorSet;
    message += `\n✨ *${labels.activeSetBonus}!*\n`;
    message += `${formatSetName(setName)} Set (4/4)\n`;
    for (const passive of setBonus.passives) {
      message += `${passive.emoji} ${passive.name}\n`;
    }
  }

  message += `\n`;

  // Accessory
  if (player.equipment.accessory.id) {
    message += `💍 *${labels.accessory}:* ${player.equipment.accessory.name}\n`;
  } else {
    message += `💍 *${labels.accessory}:* ${labels.none}\n`;
  }

  // Equipment stats
  const equipStats = getEquipmentStats(player);
  message += `\n${getText(lang, "equip.equipmentStats")}\n`;
  if (equipStats.attack > 0) message += `⚔️ ${getText(lang, "common.attack")}: +${equipStats.attack}\n`;
  if (equipStats.defense > 0) message += `🛡️ ${getText(lang, "common.defense")}: +${equipStats.defense}\n`;
  if (equipStats.hp > 0) message += `❤️ ${getText(lang, "common.hp")}: +${equipStats.hp}\n`;
  if (equipStats.mana > 0) message += `💧 ${getText(lang, "common.mana")}: +${equipStats.mana}\n`;
  if (equipStats.agility > 0) message += `⚡ ${getText(lang, "common.agility")}: +${equipStats.agility}\n`;
  if (equipStats.luck > 0) message += `🍀 ${getText(lang, "common.luck")}: +${equipStats.luck}\n`;
  if (equipStats.critChance > 0) message += `🎯 ${labels.crit}: +${equipStats.critChance}%\n`;
  if (equipStats.blockChance > 0) message += `🛡️ ${labels.block}: +${equipStats.blockChance}%\n`;

  message += `\n💡 *${labels.commands}:*\n`;
  message += `• !equip <item_name>\n`;
  message += `• !unequip <slot>`;

  return message;
}

// ── Metadata ─────────────────────────────────────────────

export const info = {
  name: "Equip",
  menu: ["equip", "unequip", "equipment"],
  case: ["equip", "unequip", "equipment"],
  description: "Equip or unequip weapons, armor, shields, and accessories.",
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
  const { command, q, lenwy, normalizedSender, LenwyText } = leni;

  // Block bot
  const botJid = lenwy.user?.id?.split(":")[0] + "@s.whatsapp.net";
  if (normalizedSender === botJid) return;

  const players = loadPlayers();
  const player = players[normalizedSender];
  const lang = player ? getLanguage(getPlayerLanguage(player)) : getLanguage("id");

  if (!player) {
    return LenwyText(
      `⚠️ *${getText(lang, "common.notRegistered")}*\n\n` +
      getText(lang, "common.registerFirst")
    );
  }

  // Initialize equipment if not exists
  if (!player.equipment) {
    player.equipment = {
      weapon: { id: null, name: null, type: null, twoHanded: false, stats: {} },
      offhand: { id: null, name: null, type: null, stats: {} },
      armor: {
        head: { id: null, name: null, stats: {} },
        chest: { id: null, name: null, stats: {} },
        legs: { id: null, name: null, stats: {} },
        boots: { id: null, name: null, stats: {} },
      },
      accessory: { id: null, name: null, stats: {} },
    };
  }

  // ════════════════════════════════════════
  // COMMAND: !equipment
  // ════════════════════════════════════════
  if (command === "equipment") {
    return LenwyText(viewEquipment(player, lang));
  }

  // ════════════════════════════════════════
  // COMMAND: !equip <item_name>
  // ════════════════════════════════════════
  if (command === "equip") {
    if (!q.trim()) {
      return LenwyText(getText(lang, "equip.usage"));
    }

    // Normalize item name
    const itemName = q.trim().toLowerCase().replace(/\s+/g, "_");
    const itemData = getItemById(itemName);

    if (!itemData) {
      return LenwyText(getText(lang, "item.notFound", { item: q }));
    }

    // Check if player has item
    if (!hasItemInInventory(player, itemData.id)) {
      return LenwyText(getText(lang, "equip.notInInventory", { item: itemData.name }));
    }

    // Check if item is equippable
    const equippableCategories = ["weapon", "shield", "armor", "accessory"];
    if (!equippableCategories.includes(itemData.category)) {
      return LenwyText(getText(lang, "equip.cannotEquip", { item: itemData.name }));
    }

    // Equip item
    const result = equipItem(player, itemData, lang);
    players[normalizedSender] = player;
    savePlayers(players);

    return LenwyText(result);
  }

  // ════════════════════════════════════════
  // COMMAND: !unequip <slot>
  // ════════════════════════════════════════
  if (command === "unequip") {
    if (!q.trim()) {
      return LenwyText(getText(lang, "equip.unequipUsage"));
    }

    const result = unequipItem(player, q.trim(), lang);
    players[normalizedSender] = player;
    savePlayers(players);

    return LenwyText(result);
  }
}
