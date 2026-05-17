/*
  Equipment Helper Functions
  Base : Lenwy SCM — RPG Extension

  Functions to calculate equipment bonuses for combat
*/

// Get all equipment stats
export function getEquipmentStats(player) {
  if (!player.equipment) return {};

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
  if (player.equipment.weapon?.stats) {
    for (const [stat, value] of Object.entries(player.equipment.weapon.stats)) {
      if (stats.hasOwnProperty(stat)) stats[stat] += value;
    }
  }

  // Offhand stats
  if (player.equipment.offhand?.stats) {
    for (const [stat, value] of Object.entries(player.equipment.offhand.stats)) {
      if (stats.hasOwnProperty(stat)) stats[stat] += value;
    }
  }

  // Armor stats
  const armorSlots = ["head", "chest", "legs", "boots"];
  for (const slot of armorSlots) {
    if (player.equipment.armor?.[slot]?.stats) {
      for (const [stat, value] of Object.entries(player.equipment.armor[slot].stats)) {
        if (stats.hasOwnProperty(stat)) stats[stat] += value;
      }
    }
  }

  // Accessory stats
  if (player.equipment.accessory?.stats) {
    for (const [stat, value] of Object.entries(player.equipment.accessory.stats)) {
      if (stats.hasOwnProperty(stat)) stats[stat] += value;
    }
  }

  return stats;
}

// Get weapon passive (if equipped and has passive)
export function getWeaponPassive(player) {
  if (!player.equipment?.weapon?.passive) return null;
  return player.equipment.weapon.passive;
}

// Get weapon skill (if equipped and has skill)
export function getWeaponSkill(player) {
  if (!player.equipment?.weapon?.skill) return null;
  return player.equipment.weapon.skill;
}

// Check if armor set is complete and get set bonus
export function getArmorSetBonus(player) {
  if (!player.equipment?.armor) return null;

  const armorSlots = ["head", "chest", "legs", "boots"];
  const equippedArmor = armorSlots.map((slot) => player.equipment.armor[slot]);

  // Check if all slots are equipped
  if (equippedArmor.some((piece) => !piece?.id)) {
    return null;
  }

  // Check if all pieces belong to same set
  const setName = equippedArmor[0].armorSet;
  if (!setName) return null;

  const allSameSet = equippedArmor.every((piece) => piece.armorSet === setName);
  if (!allSameSet) return null;

  // Get set bonus
  const setBonus = equippedArmor[0].setBonus;
  if (!setBonus || !setBonus.passives) return null;

  return {
    setName: setName,
    passives: setBonus.passives,
  };
}

// Get all active passives (class passive + weapon passive + armor set passives)
export function getAllPassives(player) {
  const passives = [];

  // Class passive
  if (player.passive) {
    passives.push(player.passive);
  }

  // Weapon passive
  const weaponPassive = getWeaponPassive(player);
  if (weaponPassive) {
    passives.push(weaponPassive);
  }

  // Armor set passives
  const setBonus = getArmorSetBonus(player);
  if (setBonus) {
    passives.push(...setBonus.passives);
  }

  return passives;
}

// Apply equipment stats to player stats (for combat initialization)
export function applyEquipmentToStats(player) {
  const equipStats = getEquipmentStats(player);

  // Create a copy of player with equipment bonuses applied
  const enhancedPlayer = { ...player };

  // Apply stat bonuses
  enhancedPlayer.attack = (player.stats.attack || 0) + (equipStats.attack || 0);
  enhancedPlayer.defense = (player.stats.defense || 0) + (equipStats.defense || 0);
  enhancedPlayer.maxHp = (player.stats.maxHp || player.stats.hp || 0) + (equipStats.hp || 0);
  enhancedPlayer.hp = Math.min(player.stats.hp, enhancedPlayer.maxHp);
  enhancedPlayer.maxMana = (player.stats.maxMana || player.stats.mana || 0) + (equipStats.mana || 0);
  enhancedPlayer.mana = Math.min(player.stats.mana, enhancedPlayer.maxMana);
  enhancedPlayer.agility = (player.stats.agility || 0) + (equipStats.agility || 0);
  enhancedPlayer.luck = (player.stats.luck || 0) + (equipStats.luck || 0);

  // Store equipment bonuses for display
  enhancedPlayer._equipmentBonus = equipStats;

  return enhancedPlayer;
}

export default {
  getEquipmentStats,
  getWeaponPassive,
  getWeaponSkill,
  getArmorSetBonus,
  getAllPassives,
  applyEquipmentToStats,
};
