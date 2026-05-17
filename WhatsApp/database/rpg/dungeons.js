/*
  RPG Dungeon System
  Base : Lenwy SCM — RPG Extension

  Dungeon Structure:
  - 20 floors per dungeon
  - Mini-bosses at floors 5, 10, 15
  - Final boss at floor 20
  - 1 enemy per floor (stronger than hunt enemies)
  - 20% HP/Mana heal after each floor
  - 2 runs per day (resets at midnight)
*/

import { getBossByTierAndFloor } from "./bosses.js";

export const dungeons = {

  forgotten_crypt: {
    id: "forgotten_crypt",
    name: "Forgotten Crypt",
    emoji: "🏚️",
    tier: "easy",
    difficulty: "Easy",
    recommendedLevel: 10,
    maxFloors: 20,
    description: "An ancient crypt filled with undead horrors. The restless dead guard forgotten treasures.",
    location: "forgotten_crypt_entrance",
    
    // Floor configuration: regular floors have enemies, boss floors reference bosses.js
    getFloorData(floor) {
      const bossFloors = [5, 10, 15, 20];
      if (bossFloors.includes(floor)) {
        return {
          floor,
          isBoss: true,
          boss: getBossByTierAndFloor("easy", floor),
          theme: this.getFloorTheme(floor),
        };
      }
      
      return {
        floor,
        isBoss: false,
        enemy: this.getFloorEnemy(floor),
        theme: this.getFloorTheme(floor),
      };
    },

    getFloorTheme(floor) {
      const themes = {
        1: "Crypt Entrance", 2: "Dusty Corridor", 3: "Burial Chamber", 4: "Bone Pit",
        5: "Guardian's Hall", 6: "Shadow Passage", 7: "Cursed Vault", 8: "Tomb of Sorrow",
        9: "Necromancer's Lab", 10: "Reaper's Domain", 11: "Catacombs", 12: "Hall of Bones",
        13: "Spectral Chamber", 14: "Death's Antechamber", 15: "Bone Lord's Throne",
        16: "Lich's Laboratory", 17: "Soul Prison", 18: "Throne Approach",
        19: "King's Antechamber", 20: "Lich King's Throne",
      };
      return themes[floor] || `Floor ${floor}`;
    },

    getFloorEnemy(floor) {
      // Enemy stats scale with floor
      const baseStats = {
        hp: 150 + (floor * 30),
        mana: 50 + (floor * 10),
        attack: 15 + (floor * 2),
        defense: 8 + (floor * 2),
        agility: 5 + floor,
        physicalAtk: 18 + (floor * 3),
        magicalAtk: 5 + (floor * 3),
        hybridAtk: 10 + (floor * 3),
        physicalDef: 10 + (floor * 2),
        magicalDef: 5 + (floor * 2),
        hybridDef: 7 + (floor * 2),
      };

      const enemyTypes = [
        { name: "Crypt Zombie", emoji: "🧟", type: "physical" },
        { name: "Skeleton Warrior", emoji: "💀⚔️", type: "physical" },
        { name: "Ghoul", emoji: "👹", type: "physical" },
        { name: "Crypt Wraith", emoji: "👻", type: "magical" },
        { name: "Shadow Fiend", emoji: "😈", type: "magical" },
        { name: "Cursed Knight", emoji: "⚔️👻", type: "hybrid" },
        { name: "Banshee", emoji: "👻💀", type: "magical" },
        { name: "Flesh Golem", emoji: "🧟‍♂️", type: "physical" },
      ];

      const enemy = enemyTypes[floor % enemyTypes.length];
      
      return {
        id: `crypt_enemy_f${floor}`,
        name: `${enemy.name}`,
        emoji: enemy.emoji,
        stats: baseStats,
        skills: this.getEnemySkills(enemy.type, floor),
        passive: this.getEnemyPassive(floor),
        drops: [],
        xp: 0,
        gold: { min: 0, max: 0 },
      };
    },

    getEnemySkills(type, floor) {
      const damage = 25 + (floor * 5);
      const manaCost = 15 + (floor * 3);
      
      if (type === "physical") {
        return [{
          id: "heavy_strike",
          name: "Heavy Strike",
          manaCost,
          cooldown: 8,
          damageType: "physical",
          baseDamage: damage,
          effect: "bleed",
          value: 5 + floor,
          duration: 3,
        }];
      } else if (type === "magical") {
        return [{
          id: "dark_bolt",
          name: "Dark Bolt",
          manaCost,
          cooldown: 8,
          damageType: "magical",
          baseDamage: damage,
          effect: "curse",
          value: 5 + floor,
          duration: 3,
        }];
      } else {
        return [{
          id: "shadow_strike",
          name: "Shadow Strike",
          manaCost,
          cooldown: 8,
          damageType: "hybrid",
          baseDamage: damage,
          effect: "slow",
          value: 3 + floor,
          duration: 3,
        }];
      }
    },

    getEnemyPassive(floor) {
      const passives = [
        { id: "regeneration", name: "Regeneration", emoji: "💚", effect: "regen", value: 5 + Math.floor(floor / 3) },
        { id: "iron_skin", name: "Iron Skin", emoji: "🛡️", effect: "defense_boost", value: 5 + Math.floor(floor / 3) },
        { id: "enrage", name: "Enrage", emoji: "😡", effect: "enrage", value: 8 + Math.floor(floor / 2), threshold: 30 },
        { id: "nimble", name: "Nimble", emoji: "💨", effect: "dodge_boost", value: 10 + Math.floor(floor / 2) },
      ];
      return passives[floor % passives.length];
    },
  },

  volcanic_rift: {
    id: "volcanic_rift",
    name: "Volcanic Rift",
    emoji: "🌋",
    tier: "normal",
    difficulty: "Normal",
    recommendedLevel: 20,
    maxFloors: 20,
    description: "A treacherous volcanic dungeon where fire and fury reign. Only the strongest survive the heat.",
    location: "volcanic_rift_gate",
    
    getFloorData(floor) {
      const bossFloors = [5, 10, 15, 20];
      if (bossFloors.includes(floor)) {
        return {
          floor,
          isBoss: true,
          boss: getBossByTierAndFloor("normal", floor),
          theme: this.getFloorTheme(floor),
        };
      }
      
      return {
        floor,
        isBoss: false,
        enemy: this.getFloorEnemy(floor),
        theme: this.getFloorTheme(floor),
      };
    },

    getFloorTheme(floor) {
      const themes = {
        1: "Scorched Entrance", 2: "Lava Stream", 3: "Burning Chamber", 4: "Ember Hall",
        5: "Golem's Forge", 6: "Molten Passage", 7: "Inferno Vault", 8: "Ash Tomb",
        9: "Forge of Pain", 10: "Warden's Sanctum", 11: "Deep Magma", 12: "Pyroclastic Flow",
        13: "Hellfire Chamber", 14: "Drake's Lair Approach", 15: "Drake's Lair",
        16: "Titan's Forge", 17: "Eternal Flame", 18: "Throne Approach",
        19: "Titan's Antechamber", 20: "Volcanic Titan's Throne",
      };
      return themes[floor] || `Floor ${floor}`;
    },

    getFloorEnemy(floor) {
      const baseStats = {
        hp: 300 + (floor * 40),
        mana: 120 + (floor * 15),
        attack: 30 + (floor * 3),
        defense: 15 + (floor * 2),
        agility: 18 + floor,
        physicalAtk: 28 + (floor * 4),
        magicalAtk: 35 + (floor * 4),
        hybridAtk: 31 + (floor * 4),
        physicalDef: 15 + (floor * 3),
        magicalDef: 20 + (floor * 3),
        hybridDef: 17 + (floor * 3),
      };

      const enemyTypes = [
        { name: "Fire Imp", emoji: "👹🔥", type: "magical" },
        { name: "Magma Elemental", emoji: "🔥💧", type: "magical" },
        { name: "Flame Hound", emoji: "🐕🔥", type: "physical" },
        { name: "Lava Serpent", emoji: "🐍🔥", type: "hybrid" },
        { name: "Fire Knight", emoji: "⚔️🔥", type: "physical" },
        { name: "Cinder Demon", emoji: "😈🔥", type: "magical" },
        { name: "Volcanic Giant", emoji: "👹🌋", type: "physical" },
        { name: "Flame Titan", emoji: "🔥👹", type: "hybrid" },
      ];

      const enemy = enemyTypes[floor % enemyTypes.length];
      
      return {
        id: `volcanic_enemy_f${floor}`,
        name: enemy.name,
        emoji: enemy.emoji,
        stats: baseStats,
        skills: this.getEnemySkills(enemy.type, floor),
        passive: this.getEnemyPassive(floor),
        drops: [],
        xp: 0,
        gold: { min: 0, max: 0 },
      };
    },

    getEnemySkills(type, floor) {
      const damage = 45 + (floor * 6);
      const manaCost = 30 + (floor * 4);
      
      if (type === "physical") {
        return [{
          id: "flame_strike",
          name: "Flame Strike",
          manaCost,
          cooldown: 8,
          damageType: "physical",
          baseDamage: damage,
          effect: "burn",
          value: 8 + floor,
          duration: 4,
        }];
      } else if (type === "magical") {
        return [{
          id: "lava_burst",
          name: "Lava Burst",
          manaCost,
          cooldown: 8,
          damageType: "magical",
          baseDamage: damage,
          effect: "burn",
          value: 10 + floor,
          duration: 4,
        }];
      } else {
        return [{
          id: "molten_strike",
          name: "Molten Strike",
          manaCost,
          cooldown: 8,
          damageType: "hybrid",
          baseDamage: damage,
          effect: "burn",
          value: 12 + floor,
          duration: 4,
        }];
      }
    },

    getEnemyPassive(floor) {
      const passives = [
        { id: "burning_aura", name: "Burning Aura", emoji: "🔥", effect: "burn_on_hit", value: 6 + Math.floor(floor / 2), chance: 30, duration: 4 },
        { id: "stone_skin", name: "Stone Skin", emoji: "🪨", effect: "defense_boost", value: 8 + Math.floor(floor / 2) },
        { id: "enrage", name: "Enrage", emoji: "😡", effect: "enrage", value: 12 + Math.floor(floor / 2), threshold: 30 },
        { id: "regeneration", name: "Regeneration", emoji: "💚", effect: "regen", value: 8 + Math.floor(floor / 2) },
      ];
      return passives[floor % passives.length];
    },
  },

  frozen_abyss: {
    id: "frozen_abyss",
    name: "Frozen Abyss",
    emoji: "❄️",
    tier: "hard",
    difficulty: "Hard",
    recommendedLevel: 30,
    maxFloors: 20,
    description: "An icy abyss where eternal winter reigns. The cold here can freeze even the bravest souls.",
    location: "frozen_abyss_portal",
    
    getFloorData(floor) {
      const bossFloors = [5, 10, 15, 20];
      if (bossFloors.includes(floor)) {
        return {
          floor,
          isBoss: true,
          boss: getBossByTierAndFloor("hard", floor),
          theme: this.getFloorTheme(floor),
        };
      }
      
      return {
        floor,
        isBoss: false,
        enemy: this.getFloorEnemy(floor),
        theme: this.getFloorTheme(floor),
      };
    },

    getFloorTheme(floor) {
      const themes = {
        1: "Frozen Entrance", 2: "Ice Corridor", 3: "Glacial Chamber", 4: "Frost Hall",
        5: "Sentinel's Domain", 6: "Blizzard Passage", 7: "Crystal Vault", 8: "Frozen Tomb",
        9: "Ice Prison", 10: "Wraith's Lair", 11: "Deep Freeze", 12: "Permafrost",
        13: "Eternal Ice", 14: "Colossus Approach", 15: "Colossus Chamber",
        16: "Emperor's Path", 17: "Absolute Zero", 18: "Throne Approach",
        19: "Emperor's Antechamber", 20: "Abyssal Emperor's Throne",
      };
      return themes[floor] || `Floor ${floor}`;
    },

    getFloorEnemy(floor) {
      const baseStats = {
        hp: 500 + (floor * 50),
        mana: 200 + (floor * 20),
        attack: 50 + (floor * 4),
        defense: 30 + (floor * 3),
        agility: 20 + (floor * 2),
        physicalAtk: 45 + (floor * 5),
        magicalAtk: 55 + (floor * 5),
        hybridAtk: 50 + (floor * 5),
        physicalDef: 30 + (floor * 4),
        magicalDef: 35 + (floor * 4),
        hybridDef: 32 + (floor * 4),
      };

      const enemyTypes = [
        { name: "Frost Wraith", emoji: "👻❄️", type: "magical" },
        { name: "Ice Golem", emoji: "🗿❄️", type: "physical" },
        { name: "Frozen Knight", emoji: "⚔️❄️", type: "physical" },
        { name: "Blizzard Elemental", emoji: "🌨️", type: "magical" },
        { name: "Frost Dragon", emoji: "🐉❄️", type: "hybrid" },
        { name: "Ice Demon", emoji: "😈❄️", type: "magical" },
        { name: "Glacial Titan", emoji: "👹❄️", type: "physical" },
        { name: "Frozen Colossus", emoji: "🧊👹", type: "hybrid" },
      ];

      const enemy = enemyTypes[floor % enemyTypes.length];
      
      return {
        id: `frozen_enemy_f${floor}`,
        name: enemy.name,
        emoji: enemy.emoji,
        stats: baseStats,
        skills: this.getEnemySkills(enemy.type, floor),
        passive: this.getEnemyPassive(floor),
        drops: [],
        xp: 0,
        gold: { min: 0, max: 0 },
      };
    },

    getEnemySkills(type, floor) {
      const damage = 70 + (floor * 8);
      const manaCost = 50 + (floor * 5);
      
      if (type === "physical") {
        return [{
          id: "ice_slam",
          name: "Ice Slam",
          manaCost,
          cooldown: 8,
          damageType: "physical",
          baseDamage: damage,
          effect: "freeze",
          value: 1,
          duration: 2,
        }];
      } else if (type === "magical") {
        return [{
          id: "blizzard",
          name: "Blizzard",
          manaCost,
          cooldown: 8,
          damageType: "magical",
          baseDamage: damage,
          effect: "slow",
          value: 10 + floor,
          duration: 4,
        }];
      } else {
        return [{
          id: "glacial_strike",
          name: "Glacial Strike",
          manaCost,
          cooldown: 8,
          damageType: "hybrid",
          baseDamage: damage,
          effect: "freeze",
          value: 1,
          duration: 2,
        }];
      }
    },

    getEnemyPassive(floor) {
      const passives = [
        { id: "freezing_touch", name: "Freezing Touch", emoji: "🧊", effect: "slow_on_hit", value: 8 + Math.floor(floor / 2), chance: 35, duration: 4 },
        { id: "stone_skin", name: "Stone Skin", emoji: "🪨", effect: "defense_boost", value: 10 + Math.floor(floor / 2) },
        { id: "nimble", name: "Nimble", emoji: "💨", effect: "dodge_boost", value: 15 + Math.floor(floor / 2) },
        { id: "fast_regeneration", name: "Fast Regeneration", emoji: "💚", effect: "regen", value: 12 + Math.floor(floor / 2) },
      ];
      return passives[floor % passives.length];
    },
  },

};

// Helper functions
export function getDungeonById(id) {
  return dungeons[id] || null;
}

export function getDungeonByLocation(location) {
  return Object.values(dungeons).find(d => d.location === location) || null;
}

export function getAllDungeons() {
  return Object.values(dungeons);
}

export default {
  dungeons,
  getDungeonById,
  getDungeonByLocation,
  getAllDungeons,
};
