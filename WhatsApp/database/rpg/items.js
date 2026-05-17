

  // ... (rest of rare armor continues below)

  /*
  RPG Item Database
  Base : Lenwy SCM — RPG Extension

  Item categories:
  - consumable : usable items (potions, grenades, etc.)
  - tool       : gathering tools (fishing rod, axe, pickaxe)
  - utility    : teleport items, bag expansions, etc.
  - material   : crafting materials and enemy drops
  - quest      : quest-related items
  - weapon     : equippable weapons
  - armor      : equippable armor
  - accessory  : equippable accessories

  Shop categories (5 items each):
  - consumables   : Health/Mana potions
  - battle_items  : Combat consumables
  - tools         : Gathering tools
  - utility       : Teleports and special items
  - materials     : Basic crafting materials
*/

export const items = {
  // ═══════════════════════════════════════════════════════
  // ARMOR - EPIC SETS (10 sets x 4 pieces = 40 items)
  // WITH POWERFUL SET BONUSES (1 strong passive per set)
  // ═══════════════════════════════════════════════════════
  // ═══════════════════════════════════════════════════════
  // NEW BEGINNER ZONE MATERIALS (Level 1-2)
  // ═══════════════════════════════════════════════════════

  "tiny_fish": { "id": "tiny_fish", "name": "🐟 Tiny Fish", "category": "material", "description": "Very small fish.", "buyPrice": 0, "sellPrice": 1 },
  "duck_feather": { "id": "duck_feather", "name": "🦆 Duck Feather", "category": "material", "description": "Soft duck feather.", "buyPrice": 0, "sellPrice": 2 },
  "otter_fur": { "id": "otter_fur", "name": "🦦 Otter Fur", "category": "material", "description": "Waterproof otter fur.", "buyPrice": 0, "sellPrice": 3 },
  "small_feather": { "id": "small_feather", "name": "🪶 Small Feather", "category": "material", "description": "Tiny bird feather.", "buyPrice": 0, "sellPrice": 1 },
  "mouse_tail": { "id": "mouse_tail", "name": "🐭 Mouse Tail", "category": "material", "description": "Small mouse tail.", "buyPrice": 0, "sellPrice": 1 },
  "silk_thread": { "id": "silk_thread", "name": "🧵 Silk Thread", "category": "material", "description": "Fine silk thread.", "buyPrice": 0, "sellPrice": 2 },
  "wheat_grain": { "id": "wheat_grain", "name": "🌾 Wheat Grain", "category": "material", "description": "Golden wheat grain.", "buyPrice": 0, "sellPrice": 1 },
  "black_feather": { "id": "black_feather", "name": "🪶 Black Feather", "category": "material", "description": "Dark crow feather.", "buyPrice": 0, "sellPrice": 2 },
  "grasshopper_leg": { "id": "grasshopper_leg", "name": "🦗 Grasshopper Leg", "category": "material", "description": "Jumping leg.", "buyPrice": 0, "sellPrice": 1 },
  "worm_segment": { "id": "worm_segment", "name": "🪱 Worm Segment", "category": "material", "description": "Worm piece.", "buyPrice": 0, "sellPrice": 1 },
  "bird_feather": { "id": "bird_feather", "name": "🐦 Bird Feather", "category": "material", "description": "Common bird feather.", "buyPrice": 0, "sellPrice": 1 },
  "dog_fur": { "id": "dog_fur", "name": "🐕 Dog Fur", "category": "material", "description": "Rough dog fur.", "buyPrice": 0, "sellPrice": 2 },
  "snake_skin": { "id": "snake_skin", "name": "🐍 Snake Skin", "category": "material", "description": "Shed snake skin.", "buyPrice": 0, "sellPrice": 3 },
  "crab_claw": { "id": "crab_claw", "name": "🦀 Crab Claw", "category": "material", "description": "Sharp crab claw.", "buyPrice": 0, "sellPrice": 2 },
  "small_fish": { "id": "small_fish", "name": "🐟 Small Fish", "category": "material", "description": "Common small fish.", "buyPrice": 0, "sellPrice": 2 },
  "gull_feather": { "id": "gull_feather", "name": "🕊️ Gull Feather", "category": "material", "description": "White gull feather.", "buyPrice": 0, "sellPrice": 2 },
  "toad_skin": { "id": "toad_skin", "name": "🐸 Toad Skin", "category": "material", "description": "Bumpy toad skin.", "buyPrice": 0, "sellPrice": 2 },
  "spider_silk": { "id": "spider_silk", "name": "🕷️ Spider Silk", "category": "material", "description": "Strong spider silk.", "buyPrice": 0, "sellPrice": 3 },
  "beetle_shell": { "id": "beetle_shell", "name": "🪲 Beetle Shell", "category": "material", "description": "Hard beetle shell.", "buyPrice": 0, "sellPrice": 2 },
  "salmon_meat": { "id": "salmon_meat", "name": "🐟 Salmon Meat", "category": "material", "description": "Fresh salmon meat.", "buyPrice": 0, "sellPrice": 5 },
  "otter_pelt": { "id": "otter_pelt", "name": "🦦 Otter Pelt", "category": "material", "description": "Quality otter pelt.", "buyPrice": 0, "sellPrice": 6 },
  "heron_feather": { "id": "heron_feather", "name": "🦩 Heron Feather", "category": "material", "description": "Long heron feather.", "buyPrice": 0, "sellPrice": 4 },
  "pine_nut": { "id": "pine_nut", "name": "🌰 Pine Nut", "category": "material", "description": "Edible pine nut.", "buyPrice": 0, "sellPrice": 2 },
  "owl_feather": { "id": "owl_feather", "name": "🦉 Owl Feather", "category": "material", "description": "Silent owl feather.", "buyPrice": 0, "sellPrice": 5 },
  "porcupine_quill": { "id": "porcupine_quill", "name": "🦔 Porcupine Quill", "category": "material", "description": "Sharp quill.", "buyPrice": 0, "sellPrice": 4 },
  "boar_hide": { "id": "boar_hide", "name": "🐗 Boar Hide", "category": "material", "description": "Tough boar hide.", "buyPrice": 0, "sellPrice": 7 },
  "badger_fur": { "id": "badger_fur", "name": "🦡 Badger Fur", "category": "material", "description": "Thick badger fur.", "buyPrice": 0, "sellPrice": 6 },
  "hawk_feather": { "id": "hawk_feather", "name": "🦅 Hawk Feather", "category": "material", "description": "Sharp hawk feather.", "buyPrice": 0, "sellPrice": 5 },
  "deer_meat": { "id": "deer_meat", "name": "🦌 Deer Meat", "category": "material", "description": "Tender deer meat.", "buyPrice": 0, "sellPrice": 6 },
  "wolf_pelt": { "id": "wolf_pelt", "name": "🐺 Wolf Pelt", "category": "material", "description": "Warm wolf pelt.", "buyPrice": 0, "sellPrice": 7 },
  "lynx_fur": { "id": "lynx_fur", "name": "🐈 Lynx Fur", "category": "material", "description": "Rare lynx fur.", "buyPrice": 0, "sellPrice": 8 },
  "fox_fur": { "id": "fox_fur", "name": "🦊 Fox Fur", "category": "material", "description": "Soft fox fur.", "buyPrice": 0, "sellPrice": 5 },
  "rabbit_hide": { "id": "rabbit_hide", "name": "🐰 Rabbit Hide", "category": "material", "description": "Soft rabbit hide.", "buyPrice": 0, "sellPrice": 4 },
  "snake_fang": { "id": "snake_fang", "name": "🐍 Snake Fang", "category": "material", "description": "Venomous fang.", "buyPrice": 0, "sellPrice": 5 },
  "bat_wing": { "id": "bat_wing", "name": "🦇 Bat Wing", "category": "material", "description": "Leathery bat wing.", "buyPrice": 0, "sellPrice": 4 },
  "spider_venom": { "id": "spider_venom", "name": "🕷️ Spider Venom", "category": "material", "description": "Toxic spider venom.", "buyPrice": 0, "sellPrice": 6 },
  "rat_fur": { "id": "rat_fur", "name": "🐀 Rat Fur", "category": "material", "description": "Dirty rat fur.", "buyPrice": 0, "sellPrice": 2 },
  "swamp_venom": { "id": "swamp_venom", "name": "🐍 Swamp Venom", "category": "material", "description": "Potent swamp venom.", "buyPrice": 0, "sellPrice": 6 },
  "mosquito_proboscis": { "id": "mosquito_proboscis", "name": "🦟 Mosquito Proboscis", "category": "material", "description": "Needle-like proboscis.", "buyPrice": 0, "sellPrice": 4 },
  "cat_fur": { "id": "cat_fur", "name": "🐈 Cat Fur", "category": "material", "description": "Soft cat fur.", "buyPrice": 0, "sellPrice": 5 },
  "crow_feather": { "id": "crow_feather", "name": "🐦‍⬛ Crow Feather", "category": "material", "description": "Black crow feather.", "buyPrice": 0, "sellPrice": 3 },

  // ═══════════════════════════════════════════════════════
  // NEW INTERMEDIATE ZONE MATERIALS (Level 3-5)
  // ═══════════════════════════════════════════════════════

  "bamboo_shoot": { "id": "bamboo_shoot", "name": "🎋 Bamboo Shoot", "category": "material", "description": "Fresh bamboo shoot.", "buyPrice": 0, "sellPrice": 8 },
  "ninja_star": { "id": "ninja_star", "name": "⭐ Ninja Star", "category": "material", "description": "Sharp throwing star.", "buyPrice": 0, "sellPrice": 12 },
  "spirit_essence": { "id": "spirit_essence", "name": "✨ Spirit Essence", "category": "material", "description": "Mystical spirit energy.", "buyPrice": 0, "sellPrice": 10 },
  "twilight_fur": { "id": "twilight_fur", "name": "🌅 Twilight Fur", "category": "material", "description": "Fur from twilight wolf.", "buyPrice": 0, "sellPrice": 10 },
  "dusk_wing": { "id": "dusk_wing", "name": "🦇 Dusk Wing", "category": "material", "description": "Wing from dusk bat.", "buyPrice": 0, "sellPrice": 9 },
  "shadow_antler": { "id": "shadow_antler", "name": "🦌 Shadow Antler", "category": "material", "description": "Dark shadow antler.", "buyPrice": 0, "sellPrice": 10 },
  "shadow_essence": { "id": "shadow_essence", "name": "🌑 Shadow Essence", "category": "material", "description": "Pure shadow energy.", "buyPrice": 0, "sellPrice": 15 },
  "dark_arrow": { "id": "dark_arrow", "name": "🏹 Dark Arrow", "category": "material", "description": "Enchanted dark arrow.", "buyPrice": 0, "sellPrice": 12 },
  "wraith_cloth": { "id": "wraith_cloth", "name": "👻 Wraith Cloth", "category": "material", "description": "Ethereal wraith cloth.", "buyPrice": 0, "sellPrice": 13 },
  "ectoplasm": { "id": "ectoplasm", "name": "👻 Ectoplasm", "category": "material", "description": "Ghostly ectoplasm.", "buyPrice": 0, "sellPrice": 18 },
  "cursed_object": { "id": "cursed_object", "name": "📿 Cursed Object", "category": "material", "description": "Cursed artifact.", "buyPrice": 0, "sellPrice": 20 },
  "banshee_veil": { "id": "banshee_veil", "name": "💀 Banshee Veil", "category": "material", "description": "Veil of the banshee.", "buyPrice": 0, "sellPrice": 22 },
  "iron_ore": { "id": "iron_ore", "name": "⛏️ Iron Ore", "category": "material", "description": "Raw iron ore.", "buyPrice": 0, "sellPrice": 15 },
  "stolen_ore": { "id": "stolen_ore", "name": "💎 Stolen Ore", "category": "material", "description": "Stolen precious ore.", "buyPrice": 0, "sellPrice": 18 },
  "rat_tooth": { "id": "rat_tooth", "name": "🦷 Rat Tooth", "category": "material", "description": "Sharp rat tooth.", "buyPrice": 0, "sellPrice": 8 },
  "bandit_crown": { "id": "bandit_crown", "name": "👑 Bandit Crown", "category": "material", "description": "Stolen crown.", "buyPrice": 0, "sellPrice": 35 },
  "lizard_scale": { "id": "lizard_scale", "name": "🦎 Lizard Scale", "category": "material", "description": "Tough lizard scale.", "buyPrice": 0, "sellPrice": 12 },
  "legendary_sword": { "id": "legendary_sword", "name": "⚔️ Legendary Sword", "category": "material", "description": "Rare legendary weapon.", "buyPrice": 0, "sellPrice": 50 },
  "rogue_dagger": { "id": "rogue_dagger", "name": "🗡️ Rogue Dagger", "category": "material", "description": "Assassin's dagger.", "buyPrice": 0, "sellPrice": 28 },
  "assassin_blade": { "id": "assassin_blade", "name": "🔪 Assassin Blade", "category": "material", "description": "Deadly assassin blade.", "buyPrice": 0, "sellPrice": 32 },
  "water_crystal": { "id": "water_crystal", "name": "💧 Water Crystal", "category": "material", "description": "Pure water crystal.", "buyPrice": 0, "sellPrice": 15 },
  "giant_fish_meat": { "id": "giant_fish_meat", "name": "🐟 Giant Fish Meat", "category": "material", "description": "Huge fish meat.", "buyPrice": 0, "sellPrice": 18 },
  "serpent_scale": { "id": "serpent_scale", "name": "🐍 Serpent Scale", "category": "material", "description": "Large serpent scale.", "buyPrice": 0, "sellPrice": 16 },
  "moon_shell": { "id": "moon_shell", "name": "🌙 Moon Shell", "category": "material", "description": "Glowing moon shell.", "buyPrice": 0, "sellPrice": 20 },
  "night_essence": { "id": "night_essence", "name": "🌙 Night Essence", "category": "material", "description": "Essence of night.", "buyPrice": 0, "sellPrice": 22 },
  "tide_essence": { "id": "tide_essence", "name": "🌊 Tide Essence", "category": "material", "description": "Essence of tides.", "buyPrice": 0, "sellPrice": 24 },
  "pixie_dust": { "id": "pixie_dust", "name": "✨ Pixie Dust", "category": "material", "description": "Magical pixie dust.", "buyPrice": 0, "sellPrice": 22 },
  "sprite_wing": { "id": "sprite_wing", "name": "🧚 Sprite Wing", "category": "material", "description": "Delicate sprite wing.", "buyPrice": 0, "sellPrice": 24 },
  "ancient_wood": { "id": "ancient_wood", "name": "🌳 Ancient Wood", "category": "material", "description": "Very old wood.", "buyPrice": 0, "sellPrice": 26 },
  "water_essence": { "id": "water_essence", "name": "💧 Water Essence", "category": "material", "description": "Pure water essence.", "buyPrice": 0, "sellPrice": 24 },
  "guardian_stone": { "id": "guardian_stone", "name": "🗿 Guardian Stone", "category": "material", "description": "Protective stone.", "buyPrice": 0, "sellPrice": 28 },
  "mist_essence": { "id": "mist_essence", "name": "🌫️ Mist Essence", "category": "material", "description": "Essence of mist.", "buyPrice": 0, "sellPrice": 26 },
  "guardian_core": { "id": "guardian_core", "name": "💎 Guardian Core", "category": "material", "description": "Core of guardian.", "buyPrice": 0, "sellPrice": 40 },
  "mimic_tooth": { "id": "mimic_tooth", "name": "🦷 Mimic Tooth", "category": "material", "description": "Sharp mimic tooth.", "buyPrice": 0, "sellPrice": 35 },
  "troll_bone": { "id": "troll_bone", "name": "🦴 Troll Bone", "category": "material", "description": "Massive troll bone.", "buyPrice": 0, "sellPrice": 38 },
  "crystal_fang": { "id": "crystal_fang", "name": "💎 Crystal Fang", "category": "material", "description": "Crystalline fang.", "buyPrice": 0, "sellPrice": 26 },
  "glass_silk": { "id": "glass_silk", "name": "🕷️ Glass Silk", "category": "material", "description": "Transparent silk.", "buyPrice": 0, "sellPrice": 28 },
  "prism_shard": { "id": "prism_shard", "name": "🌈 Prism Shard", "category": "material", "description": "Rainbow prism shard.", "buyPrice": 0, "sellPrice": 30 },
  "light_essence": { "id": "light_essence", "name": "☀️ Light Essence", "category": "material", "description": "Pure light essence.", "buyPrice": 0, "sellPrice": 32 },
  "rainbow_scale": { "id": "rainbow_scale", "name": "🌈 Rainbow Scale", "category": "material", "description": "Colorful scale.", "buyPrice": 0, "sellPrice": 35 },
  "refraction_crystal": { "id": "refraction_crystal", "name": "💎 Refraction Crystal", "category": "material", "description": "Light-bending crystal.", "buyPrice": 0, "sellPrice": 38 },
  "wind_essence": { "id": "wind_essence", "name": "💨 Wind Essence", "category": "material", "description": "Essence of wind.", "buyPrice": 0, "sellPrice": 26 },
  "air_essence": { "id": "air_essence", "name": "🌪️ Air Essence", "category": "material", "description": "Essence of air.", "buyPrice": 0, "sellPrice": 28 },
  "harpy_feather": { "id": "harpy_feather", "name": "🦅 Harpy Feather", "category": "material", "description": "Large harpy feather.", "buyPrice": 0, "sellPrice": 30 },
  "echo_wing": { "id": "echo_wing", "name": "🦇 Echo Wing", "category": "material", "description": "Sonic bat wing.", "buyPrice": 0, "sellPrice": 32 },
  "sonic_crystal": { "id": "sonic_crystal", "name": "🔊 Sonic Crystal", "category": "material", "description": "Sound-amplifying crystal.", "buyPrice": 0, "sellPrice": 36 },
  "sound_essence": { "id": "sound_essence", "name": "🎵 Sound Essence", "category": "material", "description": "Essence of sound.", "buyPrice": 0, "sellPrice": 38 },

  "infernal_plate_head": {
    "id": "infernal_plate_head",
    "name": "🪖 Infernal Plate Helmet",
    "category": "armor",
    "armorSlot": "head",
    "armorSet": "infernal_plate",
    "rarity": "epic",
    "description": "Helmet piece of the Infernal Plate set.",
    "buyPrice": 720,
    "sellPrice": 360,
    "stats": {
      "defense": 29,
      "hp": 100,
      "physicalDef": 22,
      "magicalDef": 15,
      "attack": 8
    },
    "setBonus": {
      "requiredPieces": 4,
      "passives": [
        {
          "id": "burning_aura",
          "name": "Burning Aura",
          "emoji": "🔥",
          "effect": "burn_on_hit",
          "value": 6,
          "chance": 25,
          "duration": 5
        }
      ]
    }
  },

  "infernal_plate_chest": {
    "id": "infernal_plate_chest",
    "name": "🦺 Infernal Plate Chestplate",
    "category": "armor",
    "armorSlot": "chest",
    "armorSet": "infernal_plate",
    "rarity": "epic",
    "description": "Chestplate piece of the Infernal Plate set.",
    "buyPrice": 1320,
    "sellPrice": 660,
    "stats": {
      "defense": 53,
      "hp": 185,
      "physicalDef": 40,
      "magicalDef": 27,
      "attack": 14
    },
    "setBonus": {
      "requiredPieces": 4,
      "passives": [
        {
          "id": "burning_aura",
          "name": "Burning Aura",
          "emoji": "🔥",
          "effect": "burn_on_hit",
          "value": 6,
          "chance": 25,
          "duration": 5
        }
      ]
    }
  },

  "infernal_plate_legs": {
    "id": "infernal_plate_legs",
    "name": "👖 Infernal Plate Leggings",
    "category": "armor",
    "armorSlot": "legs",
    "armorSet": "infernal_plate",
    "rarity": "epic",
    "description": "Leggings piece of the Infernal Plate set.",
    "buyPrice": 1020,
    "sellPrice": 510,
    "stats": {
      "defense": 42,
      "hp": 148,
      "physicalDef": 32,
      "magicalDef": 22,
      "attack": 11
    },
    "setBonus": {
      "requiredPieces": 4,
      "passives": [
        {
          "id": "burning_aura",
          "name": "Burning Aura",
          "emoji": "🔥",
          "effect": "burn_on_hit",
          "value": 6,
          "chance": 25,
          "duration": 5
        }
      ]
    }
  },

  "infernal_plate_boots": {
    "id": "infernal_plate_boots",
    "name": "🥾 Infernal Plate Boots",
    "category": "armor",
    "armorSlot": "boots",
    "armorSet": "infernal_plate",
    "rarity": "epic",
    "description": "Boots piece of the Infernal Plate set.",
    "buyPrice": 820,
    "sellPrice": 410,
    "stats": {
      "defense": 32,
      "hp": 120,
      "physicalDef": 24,
      "magicalDef": 17,
      "attack": 9
    },
    "setBonus": {
      "requiredPieces": 4,
      "passives": [
        {
          "id": "burning_aura",
          "name": "Burning Aura",
          "emoji": "🔥",
          "effect": "burn_on_hit",
          "value": 6,
          "chance": 25,
          "duration": 5
        }
      ]
    }
  },

  "glacial_armor_head": {
    "id": "glacial_armor_head",
    "name": "🪖 Glacial Armor Helmet",
    "category": "armor",
    "armorSlot": "head",
    "armorSet": "glacial_armor",
    "rarity": "epic",
    "description": "Helmet piece of the Glacial Armor set.",
    "buyPrice": 730,
    "sellPrice": 365,
    "stats": {
      "defense": 30,
      "hp": 98,
      "physicalDef": 23,
      "magicalDef": 14,
      "attack": 7
    },
    "setBonus": {
      "requiredPieces": 4,
      "passives": [
        {
          "id": "frost_aura",
          "name": "Frost Aura",
          "emoji": "❄️",
          "effect": "freeze_on_hit",
          "value": 1,
          "chance": 20,
          "duration": 2
        }
      ]
    }
  },

  "glacial_armor_chest": {
    "id": "glacial_armor_chest",
    "name": "🦺 Glacial Armor Chestplate",
    "category": "armor",
    "armorSlot": "chest",
    "armorSet": "glacial_armor",
    "rarity": "epic",
    "description": "Chestplate piece of the Glacial Armor set.",
    "buyPrice": 1330,
    "sellPrice": 665,
    "stats": {
      "defense": 54,
      "hp": 183,
      "physicalDef": 41,
      "magicalDef": 26,
      "attack": 13
    },
    "setBonus": {
      "requiredPieces": 4,
      "passives": [
        {
          "id": "frost_aura",
          "name": "Frost Aura",
          "emoji": "❄️",
          "effect": "freeze_on_hit",
          "value": 1,
          "chance": 20,
          "duration": 2
        }
      ]
    }
  },

  "glacial_armor_legs": {
    "id": "glacial_armor_legs",
    "name": "👖 Glacial Armor Leggings",
    "category": "armor",
    "armorSlot": "legs",
    "armorSet": "glacial_armor",
    "rarity": "epic",
    "description": "Leggings piece of the Glacial Armor set.",
    "buyPrice": 1030,
    "sellPrice": 515,
    "stats": {
      "defense": 43,
      "hp": 146,
      "physicalDef": 33,
      "magicalDef": 21,
      "attack": 10
    },
    "setBonus": {
      "requiredPieces": 4,
      "passives": [
        {
          "id": "frost_aura",
          "name": "Frost Aura",
          "emoji": "❄️",
          "effect": "freeze_on_hit",
          "value": 1,
          "chance": 20,
          "duration": 2
        }
      ]
    }
  },

  "glacial_armor_boots": {
    "id": "glacial_armor_boots",
    "name": "🥾 Glacial Armor Boots",
    "category": "armor",
    "armorSlot": "boots",
    "armorSet": "glacial_armor",
    "rarity": "epic",
    "description": "Boots piece of the Glacial Armor set.",
    "buyPrice": 830,
    "sellPrice": 415,
    "stats": {
      "defense": 33,
      "hp": 118,
      "physicalDef": 25,
      "magicalDef": 16,
      "attack": 8
    },
    "setBonus": {
      "requiredPieces": 4,
      "passives": [
        {
          "id": "frost_aura",
          "name": "Frost Aura",
          "emoji": "❄️",
          "effect": "freeze_on_hit",
          "value": 1,
          "chance": 20,
          "duration": 2
        }
      ]
    }
  },

  "storm_guard_head": {
    "id": "storm_guard_head",
    "name": "🪖 Storm Guard Helmet",
    "category": "armor",
    "armorSlot": "head",
    "armorSet": "storm_guard",
    "rarity": "epic",
    "description": "Helmet piece of the Storm Guard set.",
    "buyPrice": 710,
    "sellPrice": 355,
    "stats": {
      "defense": 28,
      "hp": 102,
      "physicalDef": 21,
      "magicalDef": 16,
      "attack": 9
    },
    "setBonus": {
      "requiredPieces": 4,
      "passives": [
        {
          "id": "shock_wave",
          "name": "Shock Wave",
          "emoji": "⚡",
          "effect": "stun_on_hit",
          "value": 1,
          "chance": 20,
          "duration": 2
        }
      ]
    }
  },

  "storm_guard_chest": {
    "id": "storm_guard_chest",
    "name": "🦺 Storm Guard Chestplate",
    "category": "armor",
    "armorSlot": "chest",
    "armorSet": "storm_guard",
    "rarity": "epic",
    "description": "Chestplate piece of the Storm Guard set.",
    "buyPrice": 1310,
    "sellPrice": 655,
    "stats": {
      "defense": 52,
      "hp": 187,
      "physicalDef": 39,
      "magicalDef": 28,
      "attack": 15
    },
    "setBonus": {
      "requiredPieces": 4,
      "passives": [
        {
          "id": "shock_wave",
          "name": "Shock Wave",
          "emoji": "⚡",
          "effect": "stun_on_hit",
          "value": 1,
          "chance": 20,
          "duration": 2
        }
      ]
    }
  },

  "storm_guard_legs": {
    "id": "storm_guard_legs",
    "name": "👖 Storm Guard Leggings",
    "category": "armor",
    "armorSlot": "legs",
    "armorSet": "storm_guard",
    "rarity": "epic",
    "description": "Leggings piece of the Storm Guard set.",
    "buyPrice": 1010,
    "sellPrice": 505,
    "stats": {
      "defense": 41,
      "hp": 150,
      "physicalDef": 31,
      "magicalDef": 23,
      "attack": 12
    },
    "setBonus": {
      "requiredPieces": 4,
      "passives": [
        {
          "id": "shock_wave",
          "name": "Shock Wave",
          "emoji": "⚡",
          "effect": "stun_on_hit",
          "value": 1,
          "chance": 20,
          "duration": 2
        }
      ]
    }
  },

  "storm_guard_boots": {
    "id": "storm_guard_boots",
    "name": "🥾 Storm Guard Boots",
    "category": "armor",
    "armorSlot": "boots",
    "armorSet": "storm_guard",
    "rarity": "epic",
    "description": "Boots piece of the Storm Guard set.",
    "buyPrice": 810,
    "sellPrice": 405,
    "stats": {
      "defense": 31,
      "hp": 122,
      "physicalDef": 23,
      "magicalDef": 18,
      "attack": 10
    },
    "setBonus": {
      "requiredPieces": 4,
      "passives": [
        {
          "id": "shock_wave",
          "name": "Shock Wave",
          "emoji": "⚡",
          "effect": "stun_on_hit",
          "value": 1,
          "chance": 20,
          "duration": 2
        }
      ]
    }
  },

  "abyssal_plate_head": {
    "id": "abyssal_plate_head",
    "name": "🪖 Abyssal Plate Helmet",
    "category": "armor",
    "armorSlot": "head",
    "armorSet": "abyssal_plate",
    "rarity": "epic",
    "description": "Helmet piece of the Abyssal Plate set.",
    "buyPrice": 740,
    "sellPrice": 370,
    "stats": {
      "defense": 31,
      "hp": 99,
      "physicalDef": 24,
      "magicalDef": 15,
      "attack": 10
    },
    "setBonus": {
      "requiredPieces": 4,
      "passives": [
        {
          "id": "void_touch",
          "name": "Void Touch",
          "emoji": "🌀",
          "effect": "debuff_def",
          "value": 8
        }
      ]
    }
  },

  "abyssal_plate_chest": {
    "id": "abyssal_plate_chest",
    "name": "🦺 Abyssal Plate Chestplate",
    "category": "armor",
    "armorSlot": "chest",
    "armorSet": "abyssal_plate",
    "rarity": "epic",
    "description": "Chestplate piece of the Abyssal Plate set.",
    "buyPrice": 1340,
    "sellPrice": 670,
    "stats": {
      "defense": 55,
      "hp": 184,
      "physicalDef": 42,
      "magicalDef": 27,
      "attack": 16
    },
    "setBonus": {
      "requiredPieces": 4,
      "passives": [
        {
          "id": "void_touch",
          "name": "Void Touch",
          "emoji": "🌀",
          "effect": "debuff_def",
          "value": 8
        }
      ]
    }
  },

  "abyssal_plate_legs": {
    "id": "abyssal_plate_legs",
    "name": "👖 Abyssal Plate Leggings",
    "category": "armor",
    "armorSlot": "legs",
    "armorSet": "abyssal_plate",
    "rarity": "epic",
    "description": "Leggings piece of the Abyssal Plate set.",
    "buyPrice": 1040,
    "sellPrice": 520,
    "stats": {
      "defense": 44,
      "hp": 147,
      "physicalDef": 34,
      "magicalDef": 22,
      "attack": 13
    },
    "setBonus": {
      "requiredPieces": 4,
      "passives": [
        {
          "id": "void_touch",
          "name": "Void Touch",
          "emoji": "🌀",
          "effect": "debuff_def",
          "value": 8
        }
      ]
    }
  },

  "abyssal_plate_boots": {
    "id": "abyssal_plate_boots",
    "name": "🥾 Abyssal Plate Boots",
    "category": "armor",
    "armorSlot": "boots",
    "armorSet": "abyssal_plate",
    "rarity": "epic",
    "description": "Boots piece of the Abyssal Plate set.",
    "buyPrice": 840,
    "sellPrice": 420,
    "stats": {
      "defense": 34,
      "hp": 119,
      "physicalDef": 26,
      "magicalDef": 17,
      "attack": 11
    },
    "setBonus": {
      "requiredPieces": 4,
      "passives": [
        {
          "id": "void_touch",
          "name": "Void Touch",
          "emoji": "🌀",
          "effect": "debuff_def",
          "value": 8
        }
      ]
    }
  },

  "celestial_guard_head": {
    "id": "celestial_guard_head",
    "name": "🪖 Celestial Guard Helmet",
    "category": "armor",
    "armorSlot": "head",
    "armorSet": "celestial_guard",
    "rarity": "epic",
    "description": "Helmet piece of the Celestial Guard set.",
    "buyPrice": 725,
    "sellPrice": 362,
    "stats": {
      "defense": 29,
      "hp": 101,
      "physicalDef": 22,
      "magicalDef": 17,
      "attack": 8
    },
    "setBonus": {
      "requiredPieces": 4,
      "passives": [
        {
          "id": "holy_power",
          "name": "Holy Power",
          "emoji": "✨",
          "effect": "holy_damage_boost",
          "value": 15
        }
      ]
    }
  },

  "celestial_guard_chest": {
    "id": "celestial_guard_chest",
    "name": "🦺 Celestial Guard Chestplate",
    "category": "armor",
    "armorSlot": "chest",
    "armorSet": "celestial_guard",
    "rarity": "epic",
    "description": "Chestplate piece of the Celestial Guard set.",
    "buyPrice": 1325,
    "sellPrice": 662,
    "stats": {
      "defense": 53,
      "hp": 186,
      "physicalDef": 40,
      "magicalDef": 29,
      "attack": 14
    },
    "setBonus": {
      "requiredPieces": 4,
      "passives": [
        {
          "id": "holy_power",
          "name": "Holy Power",
          "emoji": "✨",
          "effect": "holy_damage_boost",
          "value": 15
        }
      ]
    }
  },

  "celestial_guard_legs": {
    "id": "celestial_guard_legs",
    "name": "👖 Celestial Guard Leggings",
    "category": "armor",
    "armorSlot": "legs",
    "armorSet": "celestial_guard",
    "rarity": "epic",
    "description": "Leggings piece of the Celestial Guard set.",
    "buyPrice": 1025,
    "sellPrice": 512,
    "stats": {
      "defense": 42,
      "hp": 149,
      "physicalDef": 32,
      "magicalDef": 24,
      "attack": 11
    },
    "setBonus": {
      "requiredPieces": 4,
      "passives": [
        {
          "id": "holy_power",
          "name": "Holy Power",
          "emoji": "✨",
          "effect": "holy_damage_boost",
          "value": 15
        }
      ]
    }
  },

  "celestial_guard_boots": {
    "id": "celestial_guard_boots",
    "name": "🥾 Celestial Guard Boots",
    "category": "armor",
    "armorSlot": "boots",
    "armorSet": "celestial_guard",
    "rarity": "epic",
    "description": "Boots piece of the Celestial Guard set.",
    "buyPrice": 825,
    "sellPrice": 412,
    "stats": {
      "defense": 32,
      "hp": 121,
      "physicalDef": 24,
      "magicalDef": 19,
      "attack": 9
    },
    "setBonus": {
      "requiredPieces": 4,
      "passives": [
        {
          "id": "holy_power",
          "name": "Holy Power",
          "emoji": "✨",
          "effect": "holy_damage_boost",
          "value": 15
        }
      ]
    }
  },

  "shadow_master_head": {
    "id": "shadow_master_head",
    "name": "🪖 Shadow Master Helmet",
    "category": "armor",
    "armorSlot": "head",
    "armorSet": "shadow_master",
    "rarity": "epic",
    "description": "Helmet piece of the Shadow Master set.",
    "buyPrice": 700,
    "sellPrice": 350,
    "stats": {
      "defense": 27,
      "hp": 103,
      "physicalDef": 20,
      "magicalDef": 14,
      "attack": 9,
      "agility": 8
    },
    "setBonus": {
      "requiredPieces": 4,
      "passives": [
        {
          "id": "shadow_step",
          "name": "Shadow Step",
          "emoji": "👤",
          "effect": "dodge_boost",
          "value": 20
        }
      ]
    }
  },

  "shadow_master_chest": {
    "id": "shadow_master_chest",
    "name": "🦺 Shadow Master Chestplate",
    "category": "armor",
    "armorSlot": "chest",
    "armorSet": "shadow_master",
    "rarity": "epic",
    "description": "Chestplate piece of the Shadow Master set.",
    "buyPrice": 1300,
    "sellPrice": 650,
    "stats": {
      "defense": 51,
      "hp": 188,
      "physicalDef": 38,
      "magicalDef": 26,
      "attack": 15,
      "agility": 14
    },
    "setBonus": {
      "requiredPieces": 4,
      "passives": [
        {
          "id": "shadow_step",
          "name": "Shadow Step",
          "emoji": "👤",
          "effect": "dodge_boost",
          "value": 20
        }
      ]
    }
  },

  "shadow_master_legs": {
    "id": "shadow_master_legs",
    "name": "👖 Shadow Master Leggings",
    "category": "armor",
    "armorSlot": "legs",
    "armorSet": "shadow_master",
    "rarity": "epic",
    "description": "Leggings piece of the Shadow Master set.",
    "buyPrice": 1000,
    "sellPrice": 500,
    "stats": {
      "defense": 40,
      "hp": 151,
      "physicalDef": 30,
      "magicalDef": 21,
      "attack": 12,
      "agility": 11
    },
    "setBonus": {
      "requiredPieces": 4,
      "passives": [
        {
          "id": "shadow_step",
          "name": "Shadow Step",
          "emoji": "👤",
          "effect": "dodge_boost",
          "value": 20
        }
      ]
    }
  },

  "shadow_master_boots": {
    "id": "shadow_master_boots",
    "name": "🥾 Shadow Master Boots",
    "category": "armor",
    "armorSlot": "boots",
    "armorSet": "shadow_master",
    "rarity": "epic",
    "description": "Boots piece of the Shadow Master set.",
    "buyPrice": 800,
    "sellPrice": 400,
    "stats": {
      "defense": 30,
      "hp": 123,
      "physicalDef": 22,
      "magicalDef": 16,
      "attack": 10,
      "agility": 9
    },
    "setBonus": {
      "requiredPieces": 4,
      "passives": [
        {
          "id": "shadow_step",
          "name": "Shadow Step",
          "emoji": "👤",
          "effect": "dodge_boost",
          "value": 20
        }
      ]
    }
  },

  "archmage_vestments_head": {
    "id": "archmage_vestments_head",
    "name": "🪖 Archmage Vestments Helmet",
    "category": "armor",
    "armorSlot": "head",
    "armorSet": "archmage_vestments",
    "rarity": "epic",
    "description": "Helmet piece of the Archmage Vestments set.",
    "buyPrice": 690,
    "sellPrice": 345,
    "stats": {
      "defense": 26,
      "hp": 105,
      "physicalDef": 19,
      "magicalDef": 18,
      "attack": 7,
      "mana": 50
    },
    "setBonus": {
      "requiredPieces": 4,
      "passives": [
        {
          "id": "mana_efficiency",
          "name": "Mana Efficiency",
          "emoji": "💎",
          "effect": "mana_cost_reduction",
          "value": 20
        }
      ]
    }
  },

  "archmage_vestments_chest": {
    "id": "archmage_vestments_chest",
    "name": "🦺 Archmage Vestments Chestplate",
    "category": "armor",
    "armorSlot": "chest",
    "armorSet": "archmage_vestments",
    "rarity": "epic",
    "description": "Chestplate piece of the Archmage Vestments set.",
    "buyPrice": 1290,
    "sellPrice": 645,
    "stats": {
      "defense": 50,
      "hp": 190,
      "physicalDef": 37,
      "magicalDef": 30,
      "attack": 13,
      "mana": 85
    },
    "setBonus": {
      "requiredPieces": 4,
      "passives": [
        {
          "id": "mana_efficiency",
          "name": "Mana Efficiency",
          "emoji": "💎",
          "effect": "mana_cost_reduction",
          "value": 20
        }
      ]
    }
  },

  "archmage_vestments_legs": {
    "id": "archmage_vestments_legs",
    "name": "👖 Archmage Vestments Leggings",
    "category": "armor",
    "armorSlot": "legs",
    "armorSet": "archmage_vestments",
    "rarity": "epic",
    "description": "Leggings piece of the Archmage Vestments set.",
    "buyPrice": 990,
    "sellPrice": 495,
    "stats": {
      "defense": 39,
      "hp": 153,
      "physicalDef": 29,
      "magicalDef": 25,
      "attack": 10,
      "mana": 68
    },
    "setBonus": {
      "requiredPieces": 4,
      "passives": [
        {
          "id": "mana_efficiency",
          "name": "Mana Efficiency",
          "emoji": "💎",
          "effect": "mana_cost_reduction",
          "value": 20
        }
      ]
    }
  },

  "archmage_vestments_boots": {
    "id": "archmage_vestments_boots",
    "name": "🥾 Archmage Vestments Boots",
    "category": "armor",
    "armorSlot": "boots",
    "armorSet": "archmage_vestments",
    "rarity": "epic",
    "description": "Boots piece of the Archmage Vestments set.",
    "buyPrice": 790,
    "sellPrice": 395,
    "stats": {
      "defense": 29,
      "hp": 125,
      "physicalDef": 21,
      "magicalDef": 20,
      "attack": 8,
      "mana": 50
    },
    "setBonus": {
      "requiredPieces": 4,
      "passives": [
        {
          "id": "mana_efficiency",
          "name": "Mana Efficiency",
          "emoji": "💎",
          "effect": "mana_cost_reduction",
          "value": 20
        }
      ]
    }
  },

  "dragon_lord_head": {
    "id": "dragon_lord_head",
    "name": "🪖 Dragon Lord Helmet",
    "category": "armor",
    "armorSlot": "head",
    "armorSet": "dragon_lord",
    "rarity": "epic",
    "description": "Helmet piece of the Dragon Lord set.",
    "buyPrice": 750,
    "sellPrice": 375,
    "stats": {
      "defense": 32,
      "hp": 97,
      "physicalDef": 25,
      "magicalDef": 16,
      "attack": 11
    },
    "setBonus": {
      "requiredPieces": 4,
      "passives": [
        {
          "id": "dragon_scales",
          "name": "Dragon Scales",
          "emoji": "🐉",
          "effect": "damage_reduction",
          "value": 5
        }
      ]
    }
  },

  "dragon_lord_chest": {
    "id": "dragon_lord_chest",
    "name": "🦺 Dragon Lord Chestplate",
    "category": "armor",
    "armorSlot": "chest",
    "armorSet": "dragon_lord",
    "rarity": "epic",
    "description": "Chestplate piece of the Dragon Lord set.",
    "buyPrice": 1350,
    "sellPrice": 675,
    "stats": {
      "defense": 56,
      "hp": 182,
      "physicalDef": 43,
      "magicalDef": 28,
      "attack": 17
    },
    "setBonus": {
      "requiredPieces": 4,
      "passives": [
        {
          "id": "dragon_scales",
          "name": "Dragon Scales",
          "emoji": "🐉",
          "effect": "damage_reduction",
          "value": 5
        }
      ]
    }
  },

  "dragon_lord_legs": {
    "id": "dragon_lord_legs",
    "name": "👖 Dragon Lord Leggings",
    "category": "armor",
    "armorSlot": "legs",
    "armorSet": "dragon_lord",
    "rarity": "epic",
    "description": "Leggings piece of the Dragon Lord set.",
    "buyPrice": 1050,
    "sellPrice": 525,
    "stats": {
      "defense": 45,
      "hp": 145,
      "physicalDef": 35,
      "magicalDef": 23,
      "attack": 14
    },
    "setBonus": {
      "requiredPieces": 4,
      "passives": [
        {
          "id": "dragon_scales",
          "name": "Dragon Scales",
          "emoji": "🐉",
          "effect": "damage_reduction",
          "value": 5
        }
      ]
    }
  },

  "dragon_lord_boots": {
    "id": "dragon_lord_boots",
    "name": "🥾 Dragon Lord Boots",
    "category": "armor",
    "armorSlot": "boots",
    "armorSet": "dragon_lord",
    "rarity": "epic",
    "description": "Boots piece of the Dragon Lord set.",
    "buyPrice": 850,
    "sellPrice": 425,
    "stats": {
      "defense": 35,
      "hp": 117,
      "physicalDef": 27,
      "magicalDef": 18,
      "attack": 12
    },
    "setBonus": {
      "requiredPieces": 4,
      "passives": [
        {
          "id": "dragon_scales",
          "name": "Dragon Scales",
          "emoji": "🐉",
          "effect": "damage_reduction",
          "value": 5
        }
      ]
    }
  },

  "berserker_mail_head": {
    "id": "berserker_mail_head",
    "name": "🪖 Berserker Mail Helmet",
    "category": "armor",
    "armorSlot": "head",
    "armorSet": "berserker_mail",
    "rarity": "epic",
    "description": "Helmet piece of the Berserker Mail set.",
    "buyPrice": 735,
    "sellPrice": 367,
    "stats": {
      "defense": 30,
      "hp": 100,
      "physicalDef": 23,
      "magicalDef": 15,
      "attack": 12
    },
    "setBonus": {
      "requiredPieces": 4,
      "passives": [
        {
          "id": "enrage",
          "name": "Enrage",
          "emoji": "😡",
          "effect": "enrage",
          "value": 12,
          "threshold": 30
        }
      ]
    }
  },

  "berserker_mail_chest": {
    "id": "berserker_mail_chest",
    "name": "🦺 Berserker Mail Chestplate",
    "category": "armor",
    "armorSlot": "chest",
    "armorSet": "berserker_mail",
    "rarity": "epic",
    "description": "Chestplate piece of the Berserker Mail set.",
    "buyPrice": 1335,
    "sellPrice": 667,
    "stats": {
      "defense": 54,
      "hp": 185,
      "physicalDef": 41,
      "magicalDef": 27,
      "attack": 18
    },
    "setBonus": {
      "requiredPieces": 4,
      "passives": [
        {
          "id": "enrage",
          "name": "Enrage",
          "emoji": "😡",
          "effect": "enrage",
          "value": 12,
          "threshold": 30
        }
      ]
    }
  },

  "berserker_mail_legs": {
    "id": "berserker_mail_legs",
    "name": "👖 Berserker Mail Leggings",
    "category": "armor",
    "armorSlot": "legs",
    "armorSet": "berserker_mail",
    "rarity": "epic",
    "description": "Leggings piece of the Berserker Mail set.",
    "buyPrice": 1035,
    "sellPrice": 517,
    "stats": {
      "defense": 43,
      "hp": 148,
      "physicalDef": 33,
      "magicalDef": 22,
      "attack": 15
    },
    "setBonus": {
      "requiredPieces": 4,
      "passives": [
        {
          "id": "enrage",
          "name": "Enrage",
          "emoji": "😡",
          "effect": "enrage",
          "value": 12,
          "threshold": 30
        }
      ]
    }
  },

  "berserker_mail_boots": {
    "id": "berserker_mail_boots",
    "name": "🥾 Berserker Mail Boots",
    "category": "armor",
    "armorSlot": "boots",
    "armorSet": "berserker_mail",
    "rarity": "epic",
    "description": "Boots piece of the Berserker Mail set.",
    "buyPrice": 835,
    "sellPrice": 417,
    "stats": {
      "defense": 33,
      "hp": 120,
      "physicalDef": 25,
      "magicalDef": 17,
      "attack": 13
    },
    "setBonus": {
      "requiredPieces": 4,
      "passives": [
        {
          "id": "enrage",
          "name": "Enrage",
          "emoji": "😡",
          "effect": "enrage",
          "value": 12,
          "threshold": 30
        }
      ]
    }
  },

  "nature_sovereign_head": {
    "id": "nature_sovereign_head",
    "name": "🪖 Nature Sovereign Helmet",
    "category": "armor",
    "armorSlot": "head",
    "armorSet": "nature_sovereign",
    "rarity": "epic",
    "description": "Helmet piece of the Nature Sovereign set.",
    "buyPrice": 715,
    "sellPrice": 357,
    "stats": {
      "defense": 28,
      "hp": 102,
      "physicalDef": 21,
      "magicalDef": 16,
      "attack": 8
    },
    "setBonus": {
      "requiredPieces": 4,
      "passives": [
        {
          "id": "regeneration",
          "name": "Regeneration",
          "emoji": "💚",
          "effect": "regen",
          "value": 8
        }
      ]
    }
  },

  "nature_sovereign_chest": {
    "id": "nature_sovereign_chest",
    "name": "🦺 Nature Sovereign Chestplate",
    "category": "armor",
    "armorSlot": "chest",
    "armorSet": "nature_sovereign",
    "rarity": "epic",
    "description": "Chestplate piece of the Nature Sovereign set.",
    "buyPrice": 1315,
    "sellPrice": 657,
    "stats": {
      "defense": 52,
      "hp": 187,
      "physicalDef": 39,
      "magicalDef": 28,
      "attack": 14
    },
    "setBonus": {
      "requiredPieces": 4,
      "passives": [
        {
          "id": "regeneration",
          "name": "Regeneration",
          "emoji": "💚",
          "effect": "regen",
          "value": 8
        }
      ]
    }
  },

  "nature_sovereign_legs": {
    "id": "nature_sovereign_legs",
    "name": "👖 Nature Sovereign Leggings",
    "category": "armor",
    "armorSlot": "legs",
    "armorSet": "nature_sovereign",
    "rarity": "epic",
    "description": "Leggings piece of the Nature Sovereign set.",
    "buyPrice": 1015,
    "sellPrice": 507,
    "stats": {
      "defense": 41,
      "hp": 150,
      "physicalDef": 31,
      "magicalDef": 23,
      "attack": 11
    },
    "setBonus": {
      "requiredPieces": 4,
      "passives": [
        {
          "id": "regeneration",
          "name": "Regeneration",
          "emoji": "💚",
          "effect": "regen",
          "value": 8
        }
      ]
    }
  },

  "nature_sovereign_boots": {
    "id": "nature_sovereign_boots",
    "name": "🥾 Nature Sovereign Boots",
    "category": "armor",
    "armorSlot": "boots",
    "armorSet": "nature_sovereign",
    "rarity": "epic",
    "description": "Boots piece of the Nature Sovereign set.",
    "buyPrice": 815,
    "sellPrice": 407,
    "stats": {
      "defense": 31,
      "hp": 122,
      "physicalDef": 23,
      "magicalDef": 18,
      "attack": 9
    },
    "setBonus": {
      "requiredPieces": 4,
      "passives": [
        {
          "id": "regeneration",
          "name": "Regeneration",
          "emoji": "💚",
          "effect": "regen",
          "value": 8
        }
      ]
    }
  },





  // ═══════════════════════════════════════════════════════
  // ARMOR - LEGENDARY SETS (10 sets x 4 pieces = 40 items)
  // WITH POWERFUL SET BONUSES (2 PASSIVES per set)
  // Cannot be bought - must be obtained through quests/drops
  // ═══════════════════════════════════════════════════════

  "godslayer_plate_head": {
    "id": "godslayer_plate_head",
    "name": "🪖 Godslayer Plate Helmet",
    "category": "armor",
    "armorSlot": "head",
    "armorSet": "godslayer_plate",
    "rarity": "legendary",
    "description": "Helmet piece of the Godslayer Plate set. ⚔️",
    "buyPrice": 0,
    "sellPrice": 2250,
    "stats": {
      "defense": 45,
      "hp": 145,
      "physicalDef": 34,
      "magicalDef": 26,
      "attack": 16,
      "agility": 8
    },
    "setBonus": {
      "requiredPieces": 4,
      "passives": [
        {
          "id": "divine_fury",
          "name": "Divine Fury",
          "emoji": "⚡",
          "effect": "damage_boost",
          "value": 25
        },
        {
          "id": "immortal_will",
          "name": "Immortal Will",
          "emoji": "💪",
          "effect": "damage_reduction",
          "value": 15
        }
      ]
    }
  },

  "godslayer_plate_chest": {
    "id": "godslayer_plate_chest",
    "name": "🦺 Godslayer Plate Chestplate",
    "category": "armor",
    "armorSlot": "chest",
    "armorSet": "godslayer_plate",
    "rarity": "legendary",
    "description": "Chestplate piece of the Godslayer Plate set. ⚔️",
    "buyPrice": 0,
    "sellPrice": 3900,
    "stats": {
      "defense": 78,
      "hp": 260,
      "physicalDef": 58,
      "magicalDef": 45,
      "attack": 26,
      "agility": 13
    },
    "setBonus": {
      "requiredPieces": 4,
      "passives": [
        {
          "id": "divine_fury",
          "name": "Divine Fury",
          "emoji": "⚡",
          "effect": "damage_boost",
          "value": 25
        },
        {
          "id": "immortal_will",
          "name": "Immortal Will",
          "emoji": "💪",
          "effect": "damage_reduction",
          "value": 15
        }
      ]
    }
  },

  "godslayer_plate_legs": {
    "id": "godslayer_plate_legs",
    "name": "👖 Godslayer Plate Leggings",
    "category": "armor",
    "armorSlot": "legs",
    "armorSet": "godslayer_plate",
    "rarity": "legendary",
    "description": "Leggings piece of the Godslayer Plate set. ⚔️",
    "buyPrice": 0,
    "sellPrice": 3100,
    "stats": {
      "defense": 62,
      "hp": 208,
      "physicalDef": 47,
      "magicalDef": 36,
      "attack": 21,
      "agility": 11
    },
    "setBonus": {
      "requiredPieces": 4,
      "passives": [
        {
          "id": "divine_fury",
          "name": "Divine Fury",
          "emoji": "⚡",
          "effect": "damage_boost",
          "value": 25
        },
        {
          "id": "immortal_will",
          "name": "Immortal Will",
          "emoji": "💪",
          "effect": "damage_reduction",
          "value": 15
        }
      ]
    }
  },

  "godslayer_plate_boots": {
    "id": "godslayer_plate_boots",
    "name": "🥾 Godslayer Plate Boots",
    "category": "armor",
    "armorSlot": "boots",
    "armorSet": "godslayer_plate",
    "rarity": "legendary",
    "description": "Boots piece of the Godslayer Plate set. ⚔️",
    "buyPrice": 0,
    "sellPrice": 2400,
    "stats": {
      "defense": 48,
      "hp": 160,
      "physicalDef": 36,
      "magicalDef": 28,
      "attack": 18,
      "agility": 9
    },
    "setBonus": {
      "requiredPieces": 4,
      "passives": [
        {
          "id": "divine_fury",
          "name": "Divine Fury",
          "emoji": "⚡",
          "effect": "damage_boost",
          "value": 25
        },
        {
          "id": "immortal_will",
          "name": "Immortal Will",
          "emoji": "💪",
          "effect": "damage_reduction",
          "value": 15
        }
      ]
    }
  },

  "eternal_dragonscale_head": {
    "id": "eternal_dragonscale_head",
    "name": "🪖 Eternal Dragonscale Helmet",
    "category": "armor",
    "armorSlot": "head",
    "armorSet": "eternal_dragonscale",
    "rarity": "legendary",
    "description": "Helmet piece of the Eternal Dragonscale set. 🐲",
    "buyPrice": 0,
    "sellPrice": 2350,
    "stats": {
      "defense": 47,
      "hp": 150,
      "physicalDef": 35,
      "magicalDef": 27,
      "attack": 17,
      "agility": 9
    },
    "setBonus": {
      "requiredPieces": 4,
      "passives": [
        {
          "id": "dragon_heart",
          "name": "Dragon Heart",
          "emoji": "❤️",
          "effect": "regen",
          "value": 15
        },
        {
          "id": "scale_armor",
          "name": "Scale Armor",
          "emoji": "🛡️",
          "effect": "defense_boost",
          "value": 20
        }
      ]
    }
  },

  "eternal_dragonscale_chest": {
    "id": "eternal_dragonscale_chest",
    "name": "🦺 Eternal Dragonscale Chestplate",
    "category": "armor",
    "armorSlot": "chest",
    "armorSet": "eternal_dragonscale",
    "rarity": "legendary",
    "description": "Chestplate piece of the Eternal Dragonscale set. 🐲",
    "buyPrice": 0,
    "sellPrice": 3750,
    "stats": {
      "defense": 75,
      "hp": 255,
      "physicalDef": 56,
      "magicalDef": 43,
      "attack": 25,
      "agility": 12
    },
    "setBonus": {
      "requiredPieces": 4,
      "passives": [
        {
          "id": "dragon_heart",
          "name": "Dragon Heart",
          "emoji": "❤️",
          "effect": "regen",
          "value": 15
        },
        {
          "id": "scale_armor",
          "name": "Scale Armor",
          "emoji": "🛡️",
          "effect": "defense_boost",
          "value": 20
        }
      ]
    }
  },

  "eternal_dragonscale_legs": {
    "id": "eternal_dragonscale_legs",
    "name": "👖 Eternal Dragonscale Leggings",
    "category": "armor",
    "armorSlot": "legs",
    "armorSet": "eternal_dragonscale",
    "rarity": "legendary",
    "description": "Leggings piece of the Eternal Dragonscale set. 🐲",
    "buyPrice": 0,
    "sellPrice": 3000,
    "stats": {
      "defense": 60,
      "hp": 204,
      "physicalDef": 45,
      "magicalDef": 35,
      "attack": 20,
      "agility": 10
    },
    "setBonus": {
      "requiredPieces": 4,
      "passives": [
        {
          "id": "dragon_heart",
          "name": "Dragon Heart",
          "emoji": "❤️",
          "effect": "regen",
          "value": 15
        },
        {
          "id": "scale_armor",
          "name": "Scale Armor",
          "emoji": "🛡️",
          "effect": "defense_boost",
          "value": 20
        }
      ]
    }
  },

  "eternal_dragonscale_boots": {
    "id": "eternal_dragonscale_boots",
    "name": "🥾 Eternal Dragonscale Boots",
    "category": "armor",
    "armorSlot": "boots",
    "armorSet": "eternal_dragonscale",
    "rarity": "legendary",
    "description": "Boots piece of the Eternal Dragonscale set. 🐲",
    "buyPrice": 0,
    "sellPrice": 2300,
    "stats": {
      "defense": 46,
      "hp": 156,
      "physicalDef": 35,
      "magicalDef": 27,
      "attack": 17,
      "agility": 8
    },
    "setBonus": {
      "requiredPieces": 4,
      "passives": [
        {
          "id": "dragon_heart",
          "name": "Dragon Heart",
          "emoji": "❤️",
          "effect": "regen",
          "value": 15
        },
        {
          "id": "scale_armor",
          "name": "Scale Armor",
          "emoji": "🛡️",
          "effect": "defense_boost",
          "value": 20
        }
      ]
    }
  },

  "void_emperor_head": {
    "id": "void_emperor_head",
    "name": "🪖 Void Emperor Helmet",
    "category": "armor",
    "armorSlot": "head",
    "armorSet": "void_emperor",
    "rarity": "legendary",
    "description": "Helmet piece of the Void Emperor set. 🌌",
    "buyPrice": 0,
    "sellPrice": 2150,
    "stats": {
      "defense": 43,
      "hp": 142,
      "physicalDef": 32,
      "magicalDef": 28,
      "attack": 15,
      "agility": 11
    },
    "setBonus": {
      "requiredPieces": 4,
      "passives": [
        {
          "id": "void_mastery",
          "name": "Void Mastery",
          "emoji": "🌀",
          "effect": "debuff_all",
          "value": 10
        },
        {
          "id": "shadow_form",
          "name": "Shadow Form",
          "emoji": "👻",
          "effect": "dodge_boost",
          "value": 25
        }
      ]
    }
  },

  "void_emperor_chest": {
    "id": "void_emperor_chest",
    "name": "🦺 Void Emperor Chestplate",
    "category": "armor",
    "armorSlot": "chest",
    "armorSet": "void_emperor",
    "rarity": "legendary",
    "description": "Chestplate piece of the Void Emperor set. 🌌",
    "buyPrice": 0,
    "sellPrice": 3600,
    "stats": {
      "defense": 72,
      "hp": 248,
      "physicalDef": 54,
      "magicalDef": 47,
      "attack": 24,
      "agility": 13
    },
    "setBonus": {
      "requiredPieces": 4,
      "passives": [
        {
          "id": "void_mastery",
          "name": "Void Mastery",
          "emoji": "🌀",
          "effect": "debuff_all",
          "value": 10
        },
        {
          "id": "shadow_form",
          "name": "Shadow Form",
          "emoji": "👻",
          "effect": "dodge_boost",
          "value": 25
        }
      ]
    }
  },

  "void_emperor_legs": {
    "id": "void_emperor_legs",
    "name": "👖 Void Emperor Leggings",
    "category": "armor",
    "armorSlot": "legs",
    "armorSet": "void_emperor",
    "rarity": "legendary",
    "description": "Leggings piece of the Void Emperor set. 🌌",
    "buyPrice": 0,
    "sellPrice": 2900,
    "stats": {
      "defense": 58,
      "hp": 198,
      "physicalDef": 43,
      "magicalDef": 38,
      "attack": 19,
      "agility": 12
    },
    "setBonus": {
      "requiredPieces": 4,
      "passives": [
        {
          "id": "void_mastery",
          "name": "Void Mastery",
          "emoji": "🌀",
          "effect": "debuff_all",
          "value": 10
        },
        {
          "id": "shadow_form",
          "name": "Shadow Form",
          "emoji": "👻",
          "effect": "dodge_boost",
          "value": 25
        }
      ]
    }
  },

  "void_emperor_boots": {
    "id": "void_emperor_boots",
    "name": "🥾 Void Emperor Boots",
    "category": "armor",
    "armorSlot": "boots",
    "armorSet": "void_emperor",
    "rarity": "legendary",
    "description": "Boots piece of the Void Emperor set. 🌌",
    "buyPrice": 0,
    "sellPrice": 2200,
    "stats": {
      "defense": 44,
      "hp": 152,
      "physicalDef": 33,
      "magicalDef": 29,
      "attack": 16,
      "agility": 10
    },
    "setBonus": {
      "requiredPieces": 4,
      "passives": [
        {
          "id": "void_mastery",
          "name": "Void Mastery",
          "emoji": "🌀",
          "effect": "debuff_all",
          "value": 10
        },
        {
          "id": "shadow_form",
          "name": "Shadow Form",
          "emoji": "👻",
          "effect": "dodge_boost",
          "value": 25
        }
      ]
    }
  },

  "phoenix_ascendant_head": {
    "id": "phoenix_ascendant_head",
    "name": "🪖 Phoenix Ascendant Helmet",
    "category": "armor",
    "armorSlot": "head",
    "armorSet": "phoenix_ascendant",
    "rarity": "legendary",
    "description": "Helmet piece of the Phoenix Ascendant set. 🔥",
    "buyPrice": 0,
    "sellPrice": 2200,
    "stats": {
      "defense": 44,
      "hp": 148,
      "physicalDef": 33,
      "magicalDef": 25,
      "attack": 18,
      "agility": 10
    },
    "setBonus": {
      "requiredPieces": 4,
      "passives": [
        {
          "id": "phoenix_rebirth",
          "name": "Phoenix Rebirth",
          "emoji": "🦅",
          "effect": "revive_on_death",
          "value": 50,
          "chance": 100
        },
        {
          "id": "eternal_flame",
          "name": "Eternal Flame",
          "emoji": "🔥",
          "effect": "burn_aura",
          "value": 10,
          "chance": 30
        }
      ]
    }
  },

  "phoenix_ascendant_chest": {
    "id": "phoenix_ascendant_chest",
    "name": "🦺 Phoenix Ascendant Chestplate",
    "category": "armor",
    "armorSlot": "chest",
    "armorSet": "phoenix_ascendant",
    "rarity": "legendary",
    "description": "Chestplate piece of the Phoenix Ascendant set. 🔥",
    "buyPrice": 0,
    "sellPrice": 3800,
    "stats": {
      "defense": 76,
      "hp": 258,
      "physicalDef": 57,
      "magicalDef": 44,
      "attack": 26,
      "agility": 13
    },
    "setBonus": {
      "requiredPieces": 4,
      "passives": [
        {
          "id": "phoenix_rebirth",
          "name": "Phoenix Rebirth",
          "emoji": "🦅",
          "effect": "revive_on_death",
          "value": 50,
          "chance": 100
        },
        {
          "id": "eternal_flame",
          "name": "Eternal Flame",
          "emoji": "🔥",
          "effect": "burn_aura",
          "value": 10,
          "chance": 30
        }
      ]
    }
  },

  "phoenix_ascendant_legs": {
    "id": "phoenix_ascendant_legs",
    "name": "👖 Phoenix Ascendant Leggings",
    "category": "armor",
    "armorSlot": "legs",
    "armorSet": "phoenix_ascendant",
    "rarity": "legendary",
    "description": "Leggings piece of the Phoenix Ascendant set. 🔥",
    "buyPrice": 0,
    "sellPrice": 3050,
    "stats": {
      "defense": 61,
      "hp": 206,
      "physicalDef": 46,
      "magicalDef": 35,
      "attack": 22,
      "agility": 11
    },
    "setBonus": {
      "requiredPieces": 4,
      "passives": [
        {
          "id": "phoenix_rebirth",
          "name": "Phoenix Rebirth",
          "emoji": "🦅",
          "effect": "revive_on_death",
          "value": 50,
          "chance": 100
        },
        {
          "id": "eternal_flame",
          "name": "Eternal Flame",
          "emoji": "🔥",
          "effect": "burn_aura",
          "value": 10,
          "chance": 30
        }
      ]
    }
  },

  "phoenix_ascendant_boots": {
    "id": "phoenix_ascendant_boots",
    "name": "🥾 Phoenix Ascendant Boots",
    "category": "armor",
    "armorSlot": "boots",
    "armorSet": "phoenix_ascendant",
    "rarity": "legendary",
    "description": "Boots piece of the Phoenix Ascendant set. 🔥",
    "buyPrice": 0,
    "sellPrice": 2350,
    "stats": {
      "defense": 47,
      "hp": 158,
      "physicalDef": 36,
      "magicalDef": 27,
      "attack": 19,
      "agility": 9
    },
    "setBonus": {
      "requiredPieces": 4,
      "passives": [
        {
          "id": "phoenix_rebirth",
          "name": "Phoenix Rebirth",
          "emoji": "🦅",
          "effect": "revive_on_death",
          "value": 50,
          "chance": 100
        },
        {
          "id": "eternal_flame",
          "name": "Eternal Flame",
          "emoji": "🔥",
          "effect": "burn_aura",
          "value": 10,
          "chance": 30
        }
      ]
    }
  },

  "celestial_sovereign_head": {
    "id": "celestial_sovereign_head",
    "name": "🪖 Celestial Sovereign Helmet",
    "category": "armor",
    "armorSlot": "head",
    "armorSet": "celestial_sovereign",
    "rarity": "legendary",
    "description": "Helmet piece of the Celestial Sovereign set. ✨",
    "buyPrice": 0,
    "sellPrice": 2300,
    "stats": {
      "defense": 46,
      "hp": 146,
      "physicalDef": 34,
      "magicalDef": 29,
      "attack": 16,
      "agility": 8
    },
    "setBonus": {
      "requiredPieces": 4,
      "passives": [
        {
          "id": "holy_blessing",
          "name": "Holy Blessing",
          "emoji": "🙏",
          "effect": "heal_on_hit",
          "value": 8,
          "chance": 25
        },
        {
          "id": "divine_protection",
          "name": "Divine Protection",
          "emoji": "✝️",
          "effect": "damage_reduction",
          "value": 12
        }
      ]
    }
  },

  "celestial_sovereign_chest": {
    "id": "celestial_sovereign_chest",
    "name": "🦺 Celestial Sovereign Chestplate",
    "category": "armor",
    "armorSlot": "chest",
    "armorSet": "celestial_sovereign",
    "rarity": "legendary",
    "description": "Chestplate piece of the Celestial Sovereign set. ✨",
    "buyPrice": 0,
    "sellPrice": 3700,
    "stats": {
      "defense": 74,
      "hp": 252,
      "physicalDef": 55,
      "magicalDef": 48,
      "attack": 25,
      "agility": 12
    },
    "setBonus": {
      "requiredPieces": 4,
      "passives": [
        {
          "id": "holy_blessing",
          "name": "Holy Blessing",
          "emoji": "🙏",
          "effect": "heal_on_hit",
          "value": 8,
          "chance": 25
        },
        {
          "id": "divine_protection",
          "name": "Divine Protection",
          "emoji": "✝️",
          "effect": "damage_reduction",
          "value": 12
        }
      ]
    }
  },

  "celestial_sovereign_legs": {
    "id": "celestial_sovereign_legs",
    "name": "👖 Celestial Sovereign Leggings",
    "category": "armor",
    "armorSlot": "legs",
    "armorSet": "celestial_sovereign",
    "rarity": "legendary",
    "description": "Leggings piece of the Celestial Sovereign set. ✨",
    "buyPrice": 0,
    "sellPrice": 2950,
    "stats": {
      "defense": 59,
      "hp": 202,
      "physicalDef": 44,
      "magicalDef": 39,
      "attack": 20,
      "agility": 10
    },
    "setBonus": {
      "requiredPieces": 4,
      "passives": [
        {
          "id": "holy_blessing",
          "name": "Holy Blessing",
          "emoji": "🙏",
          "effect": "heal_on_hit",
          "value": 8,
          "chance": 25
        },
        {
          "id": "divine_protection",
          "name": "Divine Protection",
          "emoji": "✝️",
          "effect": "damage_reduction",
          "value": 12
        }
      ]
    }
  },

  "celestial_sovereign_boots": {
    "id": "celestial_sovereign_boots",
    "name": "🥾 Celestial Sovereign Boots",
    "category": "armor",
    "armorSlot": "boots",
    "armorSet": "celestial_sovereign",
    "rarity": "legendary",
    "description": "Boots piece of the Celestial Sovereign set. ✨",
    "buyPrice": 0,
    "sellPrice": 2250,
    "stats": {
      "defense": 45,
      "hp": 154,
      "physicalDef": 34,
      "magicalDef": 30,
      "attack": 17,
      "agility": 8
    },
    "setBonus": {
      "requiredPieces": 4,
      "passives": [
        {
          "id": "holy_blessing",
          "name": "Holy Blessing",
          "emoji": "🙏",
          "effect": "heal_on_hit",
          "value": 8,
          "chance": 25
        },
        {
          "id": "divine_protection",
          "name": "Divine Protection",
          "emoji": "✝️",
          "effect": "damage_reduction",
          "value": 12
        }
      ]
    }
  },

  "abyssal_tyrant_head": {
    "id": "abyssal_tyrant_head",
    "name": "🪖 Abyssal Tyrant Helmet",
    "category": "armor",
    "armorSlot": "head",
    "armorSet": "abyssal_tyrant",
    "rarity": "legendary",
    "description": "Helmet piece of the Abyssal Tyrant set. 💀",
    "buyPrice": 0,
    "sellPrice": 2100,
    "stats": {
      "defense": 42,
      "hp": 140,
      "physicalDef": 31,
      "magicalDef": 24,
      "attack": 17,
      "agility": 7
    },
    "setBonus": {
      "requiredPieces": 4,
      "passives": [
        {
          "id": "life_drain",
          "name": "Life Drain",
          "emoji": "🩸",
          "effect": "lifesteal",
          "value": 15
        },
        {
          "id": "death_aura",
          "name": "Death Aura",
          "emoji": "☠️",
          "effect": "poison_aura",
          "value": 8,
          "chance": 30
        }
      ]
    }
  },

  "abyssal_tyrant_chest": {
    "id": "abyssal_tyrant_chest",
    "name": "🦺 Abyssal Tyrant Chestplate",
    "category": "armor",
    "armorSlot": "chest",
    "armorSet": "abyssal_tyrant",
    "rarity": "legendary",
    "description": "Chestplate piece of the Abyssal Tyrant set. 💀",
    "buyPrice": 0,
    "sellPrice": 3500,
    "stats": {
      "defense": 70,
      "hp": 245,
      "physicalDef": 52,
      "magicalDef": 42,
      "attack": 26,
      "agility": 11
    },
    "setBonus": {
      "requiredPieces": 4,
      "passives": [
        {
          "id": "life_drain",
          "name": "Life Drain",
          "emoji": "🩸",
          "effect": "lifesteal",
          "value": 15
        },
        {
          "id": "death_aura",
          "name": "Death Aura",
          "emoji": "☠️",
          "effect": "poison_aura",
          "value": 8,
          "chance": 30
        }
      ]
    }
  },

  "abyssal_tyrant_legs": {
    "id": "abyssal_tyrant_legs",
    "name": "👖 Abyssal Tyrant Leggings",
    "category": "armor",
    "armorSlot": "legs",
    "armorSet": "abyssal_tyrant",
    "rarity": "legendary",
    "description": "Leggings piece of the Abyssal Tyrant set. 💀",
    "buyPrice": 0,
    "sellPrice": 2800,
    "stats": {
      "defense": 56,
      "hp": 196,
      "physicalDef": 42,
      "magicalDef": 34,
      "attack": 22,
      "agility": 9
    },
    "setBonus": {
      "requiredPieces": 4,
      "passives": [
        {
          "id": "life_drain",
          "name": "Life Drain",
          "emoji": "🩸",
          "effect": "lifesteal",
          "value": 15
        },
        {
          "id": "death_aura",
          "name": "Death Aura",
          "emoji": "☠️",
          "effect": "poison_aura",
          "value": 8,
          "chance": 30
        }
      ]
    }
  },

  "abyssal_tyrant_boots": {
    "id": "abyssal_tyrant_boots",
    "name": "🥾 Abyssal Tyrant Boots",
    "category": "armor",
    "armorSlot": "boots",
    "armorSet": "abyssal_tyrant",
    "rarity": "legendary",
    "description": "Boots piece of the Abyssal Tyrant set. 💀",
    "buyPrice": 0,
    "sellPrice": 2150,
    "stats": {
      "defense": 43,
      "hp": 150,
      "physicalDef": 32,
      "magicalDef": 26,
      "attack": 18,
      "agility": 7
    },
    "setBonus": {
      "requiredPieces": 4,
      "passives": [
        {
          "id": "life_drain",
          "name": "Life Drain",
          "emoji": "🩸",
          "effect": "lifesteal",
          "value": 15
        },
        {
          "id": "death_aura",
          "name": "Death Aura",
          "emoji": "☠️",
          "effect": "poison_aura",
          "value": 8,
          "chance": 30
        }
      ]
    }
  },

  "titans_wrath_head": {
    "id": "titans_wrath_head",
    "name": "🪖 Titan's Wrath Helmet",
    "category": "armor",
    "armorSlot": "head",
    "armorSet": "titans_wrath",
    "rarity": "legendary",
    "description": "Helmet piece of the Titan's Wrath set. ⚡",
    "buyPrice": 0,
    "sellPrice": 2400,
    "stats": {
      "defense": 48,
      "hp": 152,
      "physicalDef": 36,
      "magicalDef": 26,
      "attack": 19,
      "agility": 8
    },
    "setBonus": {
      "requiredPieces": 4,
      "passives": [
        {
          "id": "titan_strength",
          "name": "Titan Strength",
          "emoji": "💥",
          "effect": "attack_boost",
          "value": 30
        },
        {
          "id": "unbreakable",
          "name": "Unbreakable",
          "emoji": "🗿",
          "effect": "thick_hide",
          "value": 10
        }
      ]
    }
  },

  "titans_wrath_chest": {
    "id": "titans_wrath_chest",
    "name": "🦺 Titan's Wrath Chestplate",
    "category": "armor",
    "armorSlot": "chest",
    "armorSet": "titans_wrath",
    "rarity": "legendary",
    "description": "Chestplate piece of the Titan's Wrath set. ⚡",
    "buyPrice": 0,
    "sellPrice": 3900,
    "stats": {
      "defense": 78,
      "hp": 260,
      "physicalDef": 58,
      "magicalDef": 45,
      "attack": 26,
      "agility": 12
    },
    "setBonus": {
      "requiredPieces": 4,
      "passives": [
        {
          "id": "titan_strength",
          "name": "Titan Strength",
          "emoji": "💥",
          "effect": "attack_boost",
          "value": 30
        },
        {
          "id": "unbreakable",
          "name": "Unbreakable",
          "emoji": "🗿",
          "effect": "thick_hide",
          "value": 10
        }
      ]
    }
  },

  "titans_wrath_legs": {
    "id": "titans_wrath_legs",
    "name": "👖 Titan's Wrath Leggings",
    "category": "armor",
    "armorSlot": "legs",
    "armorSet": "titans_wrath",
    "rarity": "legendary",
    "description": "Leggings piece of the Titan's Wrath set. ⚡",
    "buyPrice": 0,
    "sellPrice": 3100,
    "stats": {
      "defense": 62,
      "hp": 208,
      "physicalDef": 47,
      "magicalDef": 36,
      "attack": 23,
      "agility": 10
    },
    "setBonus": {
      "requiredPieces": 4,
      "passives": [
        {
          "id": "titan_strength",
          "name": "Titan Strength",
          "emoji": "💥",
          "effect": "attack_boost",
          "value": 30
        },
        {
          "id": "unbreakable",
          "name": "Unbreakable",
          "emoji": "🗿",
          "effect": "thick_hide",
          "value": 10
        }
      ]
    }
  },

  "titans_wrath_boots": {
    "id": "titans_wrath_boots",
    "name": "🥾 Titan's Wrath Boots",
    "category": "armor",
    "armorSlot": "boots",
    "armorSet": "titans_wrath",
    "rarity": "legendary",
    "description": "Boots piece of the Titan's Wrath set. ⚡",
    "buyPrice": 0,
    "sellPrice": 2450,
    "stats": {
      "defense": 49,
      "hp": 162,
      "physicalDef": 37,
      "magicalDef": 28,
      "attack": 20,
      "agility": 8
    },
    "setBonus": {
      "requiredPieces": 4,
      "passives": [
        {
          "id": "titan_strength",
          "name": "Titan Strength",
          "emoji": "💥",
          "effect": "attack_boost",
          "value": 30
        },
        {
          "id": "unbreakable",
          "name": "Unbreakable",
          "emoji": "🗿",
          "effect": "thick_hide",
          "value": 10
        }
      ]
    }
  },

  "arcane_infinity_head": {
    "id": "arcane_infinity_head",
    "name": "🪖 Arcane Infinity Helmet",
    "category": "armor",
    "armorSlot": "head",
    "armorSet": "arcane_infinity",
    "rarity": "legendary",
    "description": "Helmet piece of the Arcane Infinity set. 🔮",
    "buyPrice": 0,
    "sellPrice": 2100,
    "stats": {
      "defense": 42,
      "hp": 143,
      "physicalDef": 31,
      "magicalDef": 30,
      "attack": 14,
      "agility": 9
    },
    "setBonus": {
      "requiredPieces": 4,
      "passives": [
        {
          "id": "infinite_mana",
          "name": "Infinite Mana",
          "emoji": "♾️",
          "effect": "mana_regen",
          "value": 20
        },
        {
          "id": "spell_mastery",
          "name": "Spell Mastery",
          "emoji": "📖",
          "effect": "magic_damage_boost",
          "value": 35
        }
      ]
    }
  },

  "arcane_infinity_chest": {
    "id": "arcane_infinity_chest",
    "name": "🦺 Arcane Infinity Chestplate",
    "category": "armor",
    "armorSlot": "chest",
    "armorSet": "arcane_infinity",
    "rarity": "legendary",
    "description": "Chestplate piece of the Arcane Infinity set. 🔮",
    "buyPrice": 0,
    "sellPrice": 3550,
    "stats": {
      "defense": 71,
      "hp": 250,
      "physicalDef": 53,
      "magicalDef": 50,
      "attack": 22,
      "agility": 13
    },
    "setBonus": {
      "requiredPieces": 4,
      "passives": [
        {
          "id": "infinite_mana",
          "name": "Infinite Mana",
          "emoji": "♾️",
          "effect": "mana_regen",
          "value": 20
        },
        {
          "id": "spell_mastery",
          "name": "Spell Mastery",
          "emoji": "📖",
          "effect": "magic_damage_boost",
          "value": 35
        }
      ]
    }
  },

  "arcane_infinity_legs": {
    "id": "arcane_infinity_legs",
    "name": "👖 Arcane Infinity Leggings",
    "category": "armor",
    "armorSlot": "legs",
    "armorSet": "arcane_infinity",
    "rarity": "legendary",
    "description": "Leggings piece of the Arcane Infinity set. 🔮",
    "buyPrice": 0,
    "sellPrice": 2850,
    "stats": {
      "defense": 57,
      "hp": 200,
      "physicalDef": 42,
      "magicalDef": 40,
      "attack": 18,
      "agility": 11
    },
    "setBonus": {
      "requiredPieces": 4,
      "passives": [
        {
          "id": "infinite_mana",
          "name": "Infinite Mana",
          "emoji": "♾️",
          "effect": "mana_regen",
          "value": 20
        },
        {
          "id": "spell_mastery",
          "name": "Spell Mastery",
          "emoji": "📖",
          "effect": "magic_damage_boost",
          "value": 35
        }
      ]
    }
  },

  "arcane_infinity_boots": {
    "id": "arcane_infinity_boots",
    "name": "🥾 Arcane Infinity Boots",
    "category": "armor",
    "armorSlot": "boots",
    "armorSet": "arcane_infinity",
    "rarity": "legendary",
    "description": "Boots piece of the Arcane Infinity set. 🔮",
    "buyPrice": 0,
    "sellPrice": 2200,
    "stats": {
      "defense": 44,
      "hp": 153,
      "physicalDef": 33,
      "magicalDef": 31,
      "attack": 15,
      "agility": 9
    },
    "setBonus": {
      "requiredPieces": 4,
      "passives": [
        {
          "id": "infinite_mana",
          "name": "Infinite Mana",
          "emoji": "♾️",
          "effect": "mana_regen",
          "value": 20
        },
        {
          "id": "spell_mastery",
          "name": "Spell Mastery",
          "emoji": "📖",
          "effect": "magic_damage_boost",
          "value": 35
        }
      ]
    }
  },

  "demon_king_regalia_head": {
    "id": "demon_king_regalia_head",
    "name": "🪖 Demon King's Regalia Helmet",
    "category": "armor",
    "armorSlot": "head",
    "armorSet": "demon_king_regalia",
    "rarity": "legendary",
    "description": "Helmet piece of the Demon King's Regalia set. 😈",
    "buyPrice": 0,
    "sellPrice": 2300,
    "stats": {
      "defense": 46,
      "hp": 147,
      "physicalDef": 35,
      "magicalDef": 27,
      "attack": 18,
      "agility": 10
    },
    "setBonus": {
      "requiredPieces": 4,
      "passives": [
        {
          "id": "demonic_power",
          "name": "Demonic Power",
          "emoji": "👿",
          "effect": "damage_boost",
          "value": 20
        },
        {
          "id": "soul_harvest",
          "name": "Soul Harvest",
          "emoji": "👻",
          "effect": "lifesteal",
          "value": 12
        }
      ]
    }
  },

  "demon_king_regalia_chest": {
    "id": "demon_king_regalia_chest",
    "name": "🦺 Demon King's Regalia Chestplate",
    "category": "armor",
    "armorSlot": "chest",
    "armorSet": "demon_king_regalia",
    "rarity": "legendary",
    "description": "Chestplate piece of the Demon King's Regalia set. 😈",
    "buyPrice": 0,
    "sellPrice": 3750,
    "stats": {
      "defense": 75,
      "hp": 256,
      "physicalDef": 56,
      "magicalDef": 46,
      "attack": 25,
      "agility": 13
    },
    "setBonus": {
      "requiredPieces": 4,
      "passives": [
        {
          "id": "demonic_power",
          "name": "Demonic Power",
          "emoji": "👿",
          "effect": "damage_boost",
          "value": 20
        },
        {
          "id": "soul_harvest",
          "name": "Soul Harvest",
          "emoji": "👻",
          "effect": "lifesteal",
          "value": 12
        }
      ]
    }
  },

  "demon_king_regalia_legs": {
    "id": "demon_king_regalia_legs",
    "name": "👖 Demon King's Regalia Leggings",
    "category": "armor",
    "armorSlot": "legs",
    "armorSet": "demon_king_regalia",
    "rarity": "legendary",
    "description": "Leggings piece of the Demon King's Regalia set. 😈",
    "buyPrice": 0,
    "sellPrice": 3000,
    "stats": {
      "defense": 60,
      "hp": 205,
      "physicalDef": 45,
      "magicalDef": 37,
      "attack": 21,
      "agility": 11
    },
    "setBonus": {
      "requiredPieces": 4,
      "passives": [
        {
          "id": "demonic_power",
          "name": "Demonic Power",
          "emoji": "👿",
          "effect": "damage_boost",
          "value": 20
        },
        {
          "id": "soul_harvest",
          "name": "Soul Harvest",
          "emoji": "👻",
          "effect": "lifesteal",
          "value": 12
        }
      ]
    }
  },

  "demon_king_regalia_boots": {
    "id": "demon_king_regalia_boots",
    "name": "🥾 Demon King's Regalia Boots",
    "category": "armor",
    "armorSlot": "boots",
    "armorSet": "demon_king_regalia",
    "rarity": "legendary",
    "description": "Boots piece of the Demon King's Regalia set. 😈",
    "buyPrice": 0,
    "sellPrice": 2350,
    "stats": {
      "defense": 47,
      "hp": 157,
      "physicalDef": 36,
      "magicalDef": 28,
      "attack": 19,
      "agility": 9
    },
    "setBonus": {
      "requiredPieces": 4,
      "passives": [
        {
          "id": "demonic_power",
          "name": "Demonic Power",
          "emoji": "👿",
          "effect": "damage_boost",
          "value": 20
        },
        {
          "id": "soul_harvest",
          "name": "Soul Harvest",
          "emoji": "👻",
          "effect": "lifesteal",
          "value": 12
        }
      ]
    }
  },

  "primordial_essence_head": {
    "id": "primordial_essence_head",
    "name": "🪖 Primordial Essence Helmet",
    "category": "armor",
    "armorSlot": "head",
    "armorSet": "primordial_essence",
    "rarity": "legendary",
    "description": "Helmet piece of the Primordial Essence set. 🌟",
    "buyPrice": 0,
    "sellPrice": 2250,
    "stats": {
      "defense": 45,
      "hp": 144,
      "physicalDef": 34,
      "magicalDef": 28,
      "attack": 17,
      "agility": 9
    },
    "setBonus": {
      "requiredPieces": 4,
      "passives": [
        {
          "id": "primordial_force",
          "name": "Primordial Force",
          "emoji": "💫",
          "effect": "all_stats_boost",
          "value": 15
        },
        {
          "id": "essence_shield",
          "name": "Essence Shield",
          "emoji": "🛡️",
          "effect": "damage_reduction",
          "value": 10
        }
      ]
    }
  },

  "primordial_essence_chest": {
    "id": "primordial_essence_chest",
    "name": "🦺 Primordial Essence Chestplate",
    "category": "armor",
    "armorSlot": "chest",
    "armorSet": "primordial_essence",
    "rarity": "legendary",
    "description": "Chestplate piece of the Primordial Essence set. 🌟",
    "buyPrice": 0,
    "sellPrice": 3650,
    "stats": {
      "defense": 73,
      "hp": 253,
      "physicalDef": 55,
      "magicalDef": 47,
      "attack": 24,
      "agility": 12
    },
    "setBonus": {
      "requiredPieces": 4,
      "passives": [
        {
          "id": "primordial_force",
          "name": "Primordial Force",
          "emoji": "💫",
          "effect": "all_stats_boost",
          "value": 15
        },
        {
          "id": "essence_shield",
          "name": "Essence Shield",
          "emoji": "🛡️",
          "effect": "damage_reduction",
          "value": 10
        }
      ]
    }
  },

  "primordial_essence_legs": {
    "id": "primordial_essence_legs",
    "name": "👖 Primordial Essence Leggings",
    "category": "armor",
    "armorSlot": "legs",
    "armorSet": "primordial_essence",
    "rarity": "legendary",
    "description": "Leggings piece of the Primordial Essence set. 🌟",
    "buyPrice": 0,
    "sellPrice": 2900,
    "stats": {
      "defense": 58,
      "hp": 203,
      "physicalDef": 44,
      "magicalDef": 38,
      "attack": 20,
      "agility": 10
    },
    "setBonus": {
      "requiredPieces": 4,
      "passives": [
        {
          "id": "primordial_force",
          "name": "Primordial Force",
          "emoji": "💫",
          "effect": "all_stats_boost",
          "value": 15
        },
        {
          "id": "essence_shield",
          "name": "Essence Shield",
          "emoji": "🛡️",
          "effect": "damage_reduction",
          "value": 10
        }
      ]
    }
  },

  "primordial_essence_boots": {
    "id": "primordial_essence_boots",
    "name": "🥾 Primordial Essence Boots",
    "category": "armor",
    "armorSlot": "boots",
    "armorSet": "primordial_essence",
    "rarity": "legendary",
    "description": "Boots piece of the Primordial Essence set. 🌟",
    "buyPrice": 0,
    "sellPrice": 2300,
    "stats": {
      "defense": 46,
      "hp": 155,
      "physicalDef": 35,
      "magicalDef": 29,
      "attack": 18,
      "agility": 8
    },
    "setBonus": {
      "requiredPieces": 4,
      "passives": [
        {
          "id": "primordial_force",
          "name": "Primordial Force",
          "emoji": "💫",
          "effect": "all_stats_boost",
          "value": 15
        },
        {
          "id": "essence_shield",
          "name": "Essence Shield",
          "emoji": "🛡️",
          "effect": "damage_reduction",
          "value": 10
        }
      ]
    }
  },




  // ═══════════════════════════════════════════════════════
  // ARMOR - RARE SETS (10 sets x 4 pieces = 40 items)
  // WITH SET BONUSES (1 passive per set)
  // ═══════════════════════════════════════════════════════

  "crimson_plate_head": {
    "id": "crimson_plate_head",
    "name": "🪖 Crimson Plate Helmet",
    "category": "armor",
    "armorSlot": "head",
    "armorSet": "crimson_plate",
    "rarity": "rare",
    "description": "Head piece of the Crimson Plate set.",
    "buyPrice": 260,
    "sellPrice": 130,
    "stats": {
      "defense": 20,
      "hp": 65,
      "physicalDef": 15,
      "magicalDef": 11,
      "attack": 4
    },
    "setBonus": {
      "requiredPieces": 4,
      "passives": [
        {
          "id": "iron_skin",
          "name": "Iron Skin",
          "emoji": "🛡️",
          "effect": "defense_boost",
          "value": 5
        }
      ]
    }
  },

  "crimson_plate_chest": {
    "id": "crimson_plate_chest",
    "name": "🦺 Crimson Plate Chestplate",
    "category": "armor",
    "armorSlot": "chest",
    "armorSet": "crimson_plate",
    "rarity": "rare",
    "description": "Chest piece of the Crimson Plate set.",
    "buyPrice": 460,
    "sellPrice": 230,
    "stats": {
      "defense": 37,
      "hp": 120,
      "physicalDef": 27,
      "magicalDef": 20,
      "attack": 7
    },
    "setBonus": {
      "requiredPieces": 4,
      "passives": [
        {
          "id": "iron_skin",
          "name": "Iron Skin",
          "emoji": "🛡️",
          "effect": "defense_boost",
          "value": 5
        }
      ]
    }
  },

  "crimson_plate_legs": {
    "id": "crimson_plate_legs",
    "name": "👖 Crimson Plate Leggings",
    "category": "armor",
    "armorSlot": "legs",
    "armorSet": "crimson_plate",
    "rarity": "rare",
    "description": "Legs piece of the Crimson Plate set.",
    "buyPrice": 360,
    "sellPrice": 180,
    "stats": {
      "defense": 29,
      "hp": 96,
      "physicalDef": 21,
      "magicalDef": 16,
      "attack": 5
    },
    "setBonus": {
      "requiredPieces": 4,
      "passives": [
        {
          "id": "iron_skin",
          "name": "Iron Skin",
          "emoji": "🛡️",
          "effect": "defense_boost",
          "value": 5
        }
      ]
    }
  },

  "crimson_plate_boots": {
    "id": "crimson_plate_boots",
    "name": "🥾 Crimson Plate Boots",
    "category": "armor",
    "armorSlot": "boots",
    "armorSet": "crimson_plate",
    "rarity": "rare",
    "description": "Boots piece of the Crimson Plate set.",
    "buyPrice": 280,
    "sellPrice": 140,
    "stats": {
      "defense": 22,
      "hp": 78,
      "physicalDef": 16,
      "magicalDef": 12,
      "attack": 4
    },
    "setBonus": {
      "requiredPieces": 4,
      "passives": [
        {
          "id": "iron_skin",
          "name": "Iron Skin",
          "emoji": "🛡️",
          "effect": "defense_boost",
          "value": 5
        }
      ]
    }
  },

  "obsidian_armor_head": {
    "id": "obsidian_armor_head",
    "name": "🪖 Obsidian Armor Helmet",
    "category": "armor",
    "armorSlot": "head",
    "armorSet": "obsidian_armor",
    "rarity": "rare",
    "description": "Head piece of the Obsidian Armor set.",
    "buyPrice": 270,
    "sellPrice": 135,
    "stats": {
      "defense": 21,
      "hp": 63,
      "physicalDef": 16,
      "magicalDef": 10,
      "attack": 3
    },
    "setBonus": {
      "requiredPieces": 4,
      "passives": [
        {
          "id": "stone_skin",
          "name": "Stone Skin",
          "emoji": "🪨",
          "effect": "defense_boost",
          "value": 6
        }
      ]
    }
  },

  "obsidian_armor_chest": {
    "id": "obsidian_armor_chest",
    "name": "🦺 Obsidian Armor Chestplate",
    "category": "armor",
    "armorSlot": "chest",
    "armorSet": "obsidian_armor",
    "rarity": "rare",
    "description": "Chest piece of the Obsidian Armor set.",
    "buyPrice": 470,
    "sellPrice": 235,
    "stats": {
      "defense": 38,
      "hp": 118,
      "physicalDef": 28,
      "magicalDef": 19,
      "attack": 6
    },
    "setBonus": {
      "requiredPieces": 4,
      "passives": [
        {
          "id": "stone_skin",
          "name": "Stone Skin",
          "emoji": "🪨",
          "effect": "defense_boost",
          "value": 6
        }
      ]
    }
  },

  "obsidian_armor_legs": {
    "id": "obsidian_armor_legs",
    "name": "👖 Obsidian Armor Leggings",
    "category": "armor",
    "armorSlot": "legs",
    "armorSet": "obsidian_armor",
    "rarity": "rare",
    "description": "Legs piece of the Obsidian Armor set.",
    "buyPrice": 370,
    "sellPrice": 185,
    "stats": {
      "defense": 30,
      "hp": 94,
      "physicalDef": 22,
      "magicalDef": 15,
      "attack": 5
    },
    "setBonus": {
      "requiredPieces": 4,
      "passives": [
        {
          "id": "stone_skin",
          "name": "Stone Skin",
          "emoji": "🪨",
          "effect": "defense_boost",
          "value": 6
        }
      ]
    }
  },

  "obsidian_armor_boots": {
    "id": "obsidian_armor_boots",
    "name": "🥾 Obsidian Armor Boots",
    "category": "armor",
    "armorSlot": "boots",
    "armorSet": "obsidian_armor",
    "rarity": "rare",
    "description": "Boots piece of the Obsidian Armor set.",
    "buyPrice": 290,
    "sellPrice": 145,
    "stats": {
      "defense": 23,
      "hp": 76,
      "physicalDef": 17,
      "magicalDef": 11,
      "attack": 3
    },
    "setBonus": {
      "requiredPieces": 4,
      "passives": [
        {
          "id": "stone_skin",
          "name": "Stone Skin",
          "emoji": "🪨",
          "effect": "defense_boost",
          "value": 6
        }
      ]
    }
  },

  "demon_hide_head": {
    "id": "demon_hide_head",
    "name": "🪖 Demon Hide Helmet",
    "category": "armor",
    "armorSlot": "head",
    "armorSet": "demon_hide",
    "rarity": "rare",
    "description": "Head piece of the Demon Hide set.",
    "buyPrice": 255,
    "sellPrice": 127,
    "stats": {
      "defense": 19,
      "hp": 67,
      "physicalDef": 14,
      "magicalDef": 12,
      "attack": 5,
      "agility": 3
    },
    "setBonus": {
      "requiredPieces": 4,
      "passives": [
        {
          "id": "vampiric",
          "name": "Vampiric",
          "emoji": "🧛",
          "effect": "lifesteal",
          "value": 10
        }
      ]
    }
  },

  "demon_hide_chest": {
    "id": "demon_hide_chest",
    "name": "🦺 Demon Hide Chestplate",
    "category": "armor",
    "armorSlot": "chest",
    "armorSet": "demon_hide",
    "rarity": "rare",
    "description": "Chest piece of the Demon Hide set.",
    "buyPrice": 455,
    "sellPrice": 227,
    "stats": {
      "defense": 36,
      "hp": 122,
      "physicalDef": 26,
      "magicalDef": 21,
      "attack": 8,
      "agility": 5
    },
    "setBonus": {
      "requiredPieces": 4,
      "passives": [
        {
          "id": "vampiric",
          "name": "Vampiric",
          "emoji": "🧛",
          "effect": "lifesteal",
          "value": 10
        }
      ]
    }
  },

  "demon_hide_legs": {
    "id": "demon_hide_legs",
    "name": "👖 Demon Hide Leggings",
    "category": "armor",
    "armorSlot": "legs",
    "armorSet": "demon_hide",
    "rarity": "rare",
    "description": "Legs piece of the Demon Hide set.",
    "buyPrice": 355,
    "sellPrice": 177,
    "stats": {
      "defense": 28,
      "hp": 98,
      "physicalDef": 20,
      "magicalDef": 17,
      "attack": 6,
      "agility": 4
    },
    "setBonus": {
      "requiredPieces": 4,
      "passives": [
        {
          "id": "vampiric",
          "name": "Vampiric",
          "emoji": "🧛",
          "effect": "lifesteal",
          "value": 10
        }
      ]
    }
  },

  "demon_hide_boots": {
    "id": "demon_hide_boots",
    "name": "🥾 Demon Hide Boots",
    "category": "armor",
    "armorSlot": "boots",
    "armorSet": "demon_hide",
    "rarity": "rare",
    "description": "Boots piece of the Demon Hide set.",
    "buyPrice": 275,
    "sellPrice": 137,
    "stats": {
      "defense": 21,
      "hp": 80,
      "physicalDef": 15,
      "magicalDef": 13,
      "attack": 5,
      "agility": 3
    },
    "setBonus": {
      "requiredPieces": 4,
      "passives": [
        {
          "id": "vampiric",
          "name": "Vampiric",
          "emoji": "🧛",
          "effect": "lifesteal",
          "value": 10
        }
      ]
    }
  },

  "frost_guard_head": {
    "id": "frost_guard_head",
    "name": "🪖 Frost Guard Helmet",
    "category": "armor",
    "armorSlot": "head",
    "armorSet": "frost_guard",
    "rarity": "rare",
    "description": "Head piece of the Frost Guard set.",
    "buyPrice": 265,
    "sellPrice": 132,
    "stats": {
      "defense": 20,
      "hp": 64,
      "physicalDef": 15,
      "magicalDef": 13,
      "attack": 4
    },
    "setBonus": {
      "requiredPieces": 4,
      "passives": [
        {
          "id": "frost_aura",
          "name": "Frost Aura",
          "emoji": "❄️",
          "effect": "slow_on_hit",
          "value": 3,
          "chance": 20,
          "duration": 3
        }
      ]
    }
  },

  "frost_guard_chest": {
    "id": "frost_guard_chest",
    "name": "🦺 Frost Guard Chestplate",
    "category": "armor",
    "armorSlot": "chest",
    "armorSet": "frost_guard",
    "rarity": "rare",
    "description": "Chest piece of the Frost Guard set.",
    "buyPrice": 465,
    "sellPrice": 232,
    "stats": {
      "defense": 37,
      "hp": 119,
      "physicalDef": 27,
      "magicalDef": 22,
      "attack": 7
    },
    "setBonus": {
      "requiredPieces": 4,
      "passives": [
        {
          "id": "frost_aura",
          "name": "Frost Aura",
          "emoji": "❄️",
          "effect": "slow_on_hit",
          "value": 3,
          "chance": 20,
          "duration": 3
        }
      ]
    }
  },

  "frost_guard_legs": {
    "id": "frost_guard_legs",
    "name": "👖 Frost Guard Leggings",
    "category": "armor",
    "armorSlot": "legs",
    "armorSet": "frost_guard",
    "rarity": "rare",
    "description": "Legs piece of the Frost Guard set.",
    "buyPrice": 365,
    "sellPrice": 182,
    "stats": {
      "defense": 29,
      "hp": 95,
      "physicalDef": 21,
      "magicalDef": 18,
      "attack": 5
    },
    "setBonus": {
      "requiredPieces": 4,
      "passives": [
        {
          "id": "frost_aura",
          "name": "Frost Aura",
          "emoji": "❄️",
          "effect": "slow_on_hit",
          "value": 3,
          "chance": 20,
          "duration": 3
        }
      ]
    }
  },

  "frost_guard_boots": {
    "id": "frost_guard_boots",
    "name": "🥾 Frost Guard Boots",
    "category": "armor",
    "armorSlot": "boots",
    "armorSet": "frost_guard",
    "rarity": "rare",
    "description": "Boots piece of the Frost Guard set.",
    "buyPrice": 285,
    "sellPrice": 142,
    "stats": {
      "defense": 22,
      "hp": 77,
      "physicalDef": 16,
      "magicalDef": 14,
      "attack": 4
    },
    "setBonus": {
      "requiredPieces": 4,
      "passives": [
        {
          "id": "frost_aura",
          "name": "Frost Aura",
          "emoji": "❄️",
          "effect": "slow_on_hit",
          "value": 3,
          "chance": 20,
          "duration": 3
        }
      ]
    }
  },

  "shadow_walker_head": {
    "id": "shadow_walker_head",
    "name": "🪖 Shadow Walker Helmet",
    "category": "armor",
    "armorSlot": "head",
    "armorSet": "shadow_walker",
    "rarity": "rare",
    "description": "Head piece of the Shadow Walker set.",
    "buyPrice": 250,
    "sellPrice": 125,
    "stats": {
      "defense": 18,
      "hp": 68,
      "physicalDef": 13,
      "magicalDef": 11,
      "attack": 5,
      "agility": 5
    },
    "setBonus": {
      "requiredPieces": 4,
      "passives": [
        {
          "id": "nimble",
          "name": "Nimble",
          "emoji": "💨",
          "effect": "dodge_boost",
          "value": 15
        }
      ]
    }
  },

  "shadow_walker_chest": {
    "id": "shadow_walker_chest",
    "name": "🦺 Shadow Walker Chestplate",
    "category": "armor",
    "armorSlot": "chest",
    "armorSet": "shadow_walker",
    "rarity": "rare",
    "description": "Chest piece of the Shadow Walker set.",
    "buyPrice": 450,
    "sellPrice": 225,
    "stats": {
      "defense": 35,
      "hp": 123,
      "physicalDef": 25,
      "magicalDef": 20,
      "attack": 8,
      "agility": 8
    },
    "setBonus": {
      "requiredPieces": 4,
      "passives": [
        {
          "id": "nimble",
          "name": "Nimble",
          "emoji": "💨",
          "effect": "dodge_boost",
          "value": 15
        }
      ]
    }
  },

  "shadow_walker_legs": {
    "id": "shadow_walker_legs",
    "name": "👖 Shadow Walker Leggings",
    "category": "armor",
    "armorSlot": "legs",
    "armorSet": "shadow_walker",
    "rarity": "rare",
    "description": "Legs piece of the Shadow Walker set.",
    "buyPrice": 350,
    "sellPrice": 175,
    "stats": {
      "defense": 27,
      "hp": 99,
      "physicalDef": 19,
      "magicalDef": 16,
      "attack": 6,
      "agility": 6
    },
    "setBonus": {
      "requiredPieces": 4,
      "passives": [
        {
          "id": "nimble",
          "name": "Nimble",
          "emoji": "💨",
          "effect": "dodge_boost",
          "value": 15
        }
      ]
    }
  },

  "shadow_walker_boots": {
    "id": "shadow_walker_boots",
    "name": "🥾 Shadow Walker Boots",
    "category": "armor",
    "armorSlot": "boots",
    "armorSet": "shadow_walker",
    "rarity": "rare",
    "description": "Boots piece of the Shadow Walker set.",
    "buyPrice": 270,
    "sellPrice": 135,
    "stats": {
      "defense": 20,
      "hp": 81,
      "physicalDef": 14,
      "magicalDef": 12,
      "attack": 5,
      "agility": 5
    },
    "setBonus": {
      "requiredPieces": 4,
      "passives": [
        {
          "id": "nimble",
          "name": "Nimble",
          "emoji": "💨",
          "effect": "dodge_boost",
          "value": 15
        }
      ]
    }
  },

  "arcane_vestments_head": {
    "id": "arcane_vestments_head",
    "name": "🪖 Arcane Vestments Helmet",
    "category": "armor",
    "armorSlot": "head",
    "armorSet": "arcane_vestments",
    "rarity": "rare",
    "description": "Head piece of the Arcane Vestments set.",
    "buyPrice": 245,
    "sellPrice": 122,
    "stats": {
      "defense": 17,
      "hp": 70,
      "physicalDef": 12,
      "magicalDef": 14,
      "attack": 3,
      "mana": 35
    },
    "setBonus": {
      "requiredPieces": 4,
      "passives": [
        {
          "id": "arcane_mind",
          "name": "Arcane Mind",
          "emoji": "💧",
          "effect": "mana_regen",
          "value": 6
        }
      ]
    }
  },

  "arcane_vestments_chest": {
    "id": "arcane_vestments_chest",
    "name": "🦺 Arcane Vestments Chestplate",
    "category": "armor",
    "armorSlot": "chest",
    "armorSet": "arcane_vestments",
    "rarity": "rare",
    "description": "Chest piece of the Arcane Vestments set.",
    "buyPrice": 445,
    "sellPrice": 222,
    "stats": {
      "defense": 34,
      "hp": 125,
      "physicalDef": 24,
      "magicalDef": 24,
      "attack": 6,
      "mana": 60
    },
    "setBonus": {
      "requiredPieces": 4,
      "passives": [
        {
          "id": "arcane_mind",
          "name": "Arcane Mind",
          "emoji": "💧",
          "effect": "mana_regen",
          "value": 6
        }
      ]
    }
  },

  "arcane_vestments_legs": {
    "id": "arcane_vestments_legs",
    "name": "👖 Arcane Vestments Leggings",
    "category": "armor",
    "armorSlot": "legs",
    "armorSet": "arcane_vestments",
    "rarity": "rare",
    "description": "Legs piece of the Arcane Vestments set.",
    "buyPrice": 345,
    "sellPrice": 172,
    "stats": {
      "defense": 26,
      "hp": 101,
      "physicalDef": 18,
      "magicalDef": 19,
      "attack": 4,
      "mana": 48
    },
    "setBonus": {
      "requiredPieces": 4,
      "passives": [
        {
          "id": "arcane_mind",
          "name": "Arcane Mind",
          "emoji": "💧",
          "effect": "mana_regen",
          "value": 6
        }
      ]
    }
  },

  "arcane_vestments_boots": {
    "id": "arcane_vestments_boots",
    "name": "🥾 Arcane Vestments Boots",
    "category": "armor",
    "armorSlot": "boots",
    "armorSet": "arcane_vestments",
    "rarity": "rare",
    "description": "Boots piece of the Arcane Vestments set.",
    "buyPrice": 265,
    "sellPrice": 132,
    "stats": {
      "defense": 19,
      "hp": 83,
      "physicalDef": 13,
      "magicalDef": 15,
      "attack": 3,
      "mana": 35
    },
    "setBonus": {
      "requiredPieces": 4,
      "passives": [
        {
          "id": "arcane_mind",
          "name": "Arcane Mind",
          "emoji": "💧",
          "effect": "mana_regen",
          "value": 6
        }
      ]
    }
  },

  "thunder_mail_head": {
    "id": "thunder_mail_head",
    "name": "🪖 Thunder Mail Helmet",
    "category": "armor",
    "armorSlot": "head",
    "armorSet": "thunder_mail",
    "rarity": "rare",
    "description": "Head piece of the Thunder Mail set.",
    "buyPrice": 275,
    "sellPrice": 137,
    "stats": {
      "defense": 21,
      "hp": 62,
      "physicalDef": 16,
      "magicalDef": 11,
      "attack": 5
    },
    "setBonus": {
      "requiredPieces": 4,
      "passives": [
        {
          "id": "shock_wave",
          "name": "Shock Wave",
          "emoji": "⚡",
          "effect": "stun_on_hit",
          "value": 1,
          "chance": 15,
          "duration": 1
        }
      ]
    }
  },

  "thunder_mail_chest": {
    "id": "thunder_mail_chest",
    "name": "🦺 Thunder Mail Chestplate",
    "category": "armor",
    "armorSlot": "chest",
    "armorSet": "thunder_mail",
    "rarity": "rare",
    "description": "Chest piece of the Thunder Mail set.",
    "buyPrice": 475,
    "sellPrice": 237,
    "stats": {
      "defense": 38,
      "hp": 117,
      "physicalDef": 28,
      "magicalDef": 20,
      "attack": 8
    },
    "setBonus": {
      "requiredPieces": 4,
      "passives": [
        {
          "id": "shock_wave",
          "name": "Shock Wave",
          "emoji": "⚡",
          "effect": "stun_on_hit",
          "value": 1,
          "chance": 15,
          "duration": 1
        }
      ]
    }
  },

  "thunder_mail_legs": {
    "id": "thunder_mail_legs",
    "name": "👖 Thunder Mail Leggings",
    "category": "armor",
    "armorSlot": "legs",
    "armorSet": "thunder_mail",
    "rarity": "rare",
    "description": "Legs piece of the Thunder Mail set.",
    "buyPrice": 375,
    "sellPrice": 187,
    "stats": {
      "defense": 30,
      "hp": 93,
      "physicalDef": 22,
      "magicalDef": 16,
      "attack": 6
    },
    "setBonus": {
      "requiredPieces": 4,
      "passives": [
        {
          "id": "shock_wave",
          "name": "Shock Wave",
          "emoji": "⚡",
          "effect": "stun_on_hit",
          "value": 1,
          "chance": 15,
          "duration": 1
        }
      ]
    }
  },

  "thunder_mail_boots": {
    "id": "thunder_mail_boots",
    "name": "🥾 Thunder Mail Boots",
    "category": "armor",
    "armorSlot": "boots",
    "armorSet": "thunder_mail",
    "rarity": "rare",
    "description": "Boots piece of the Thunder Mail set.",
    "buyPrice": 295,
    "sellPrice": 147,
    "stats": {
      "defense": 23,
      "hp": 75,
      "physicalDef": 17,
      "magicalDef": 12,
      "attack": 5
    },
    "setBonus": {
      "requiredPieces": 4,
      "passives": [
        {
          "id": "shock_wave",
          "name": "Shock Wave",
          "emoji": "⚡",
          "effect": "stun_on_hit",
          "value": 1,
          "chance": 15,
          "duration": 1
        }
      ]
    }
  },

  "nature_guard_head": {
    "id": "nature_guard_head",
    "name": "🪖 Nature Guard Helmet",
    "category": "armor",
    "armorSlot": "head",
    "armorSet": "nature_guard",
    "rarity": "rare",
    "description": "Head piece of the Nature Guard set.",
    "buyPrice": 258,
    "sellPrice": 129,
    "stats": {
      "defense": 19,
      "hp": 66,
      "physicalDef": 14,
      "magicalDef": 12,
      "attack": 4
    },
    "setBonus": {
      "requiredPieces": 4,
      "passives": [
        {
          "id": "regeneration",
          "name": "Regeneration",
          "emoji": "💚",
          "effect": "regen",
          "value": 4
        }
      ]
    }
  },

  "nature_guard_chest": {
    "id": "nature_guard_chest",
    "name": "🦺 Nature Guard Chestplate",
    "category": "armor",
    "armorSlot": "chest",
    "armorSet": "nature_guard",
    "rarity": "rare",
    "description": "Chest piece of the Nature Guard set.",
    "buyPrice": 458,
    "sellPrice": 229,
    "stats": {
      "defense": 36,
      "hp": 121,
      "physicalDef": 26,
      "magicalDef": 21,
      "attack": 7
    },
    "setBonus": {
      "requiredPieces": 4,
      "passives": [
        {
          "id": "regeneration",
          "name": "Regeneration",
          "emoji": "💚",
          "effect": "regen",
          "value": 4
        }
      ]
    }
  },

  "nature_guard_legs": {
    "id": "nature_guard_legs",
    "name": "👖 Nature Guard Leggings",
    "category": "armor",
    "armorSlot": "legs",
    "armorSet": "nature_guard",
    "rarity": "rare",
    "description": "Legs piece of the Nature Guard set.",
    "buyPrice": 358,
    "sellPrice": 179,
    "stats": {
      "defense": 28,
      "hp": 97,
      "physicalDef": 20,
      "magicalDef": 17,
      "attack": 5
    },
    "setBonus": {
      "requiredPieces": 4,
      "passives": [
        {
          "id": "regeneration",
          "name": "Regeneration",
          "emoji": "💚",
          "effect": "regen",
          "value": 4
        }
      ]
    }
  },

  "nature_guard_boots": {
    "id": "nature_guard_boots",
    "name": "🥾 Nature Guard Boots",
    "category": "armor",
    "armorSlot": "boots",
    "armorSet": "nature_guard",
    "rarity": "rare",
    "description": "Boots piece of the Nature Guard set.",
    "buyPrice": 278,
    "sellPrice": 139,
    "stats": {
      "defense": 21,
      "hp": 79,
      "physicalDef": 15,
      "magicalDef": 13,
      "attack": 4
    },
    "setBonus": {
      "requiredPieces": 4,
      "passives": [
        {
          "id": "regeneration",
          "name": "Regeneration",
          "emoji": "💚",
          "effect": "regen",
          "value": 4
        }
      ]
    }
  },

  "phoenix_mail_head": {
    "id": "phoenix_mail_head",
    "name": "🪖 Phoenix Mail Helmet",
    "category": "armor",
    "armorSlot": "head",
    "armorSet": "phoenix_mail",
    "rarity": "rare",
    "description": "Head piece of the Phoenix Mail set.",
    "buyPrice": 268,
    "sellPrice": 134,
    "stats": {
      "defense": 20,
      "hp": 65,
      "physicalDef": 15,
      "magicalDef": 13,
      "attack": 5
    },
    "setBonus": {
      "requiredPieces": 4,
      "passives": [
        {
          "id": "burning_aura",
          "name": "Burning Aura",
          "emoji": "🔥",
          "effect": "burn_on_hit",
          "value": 4,
          "chance": 20,
          "duration": 4
        }
      ]
    }
  },

  "phoenix_mail_chest": {
    "id": "phoenix_mail_chest",
    "name": "🦺 Phoenix Mail Chestplate",
    "category": "armor",
    "armorSlot": "chest",
    "armorSet": "phoenix_mail",
    "rarity": "rare",
    "description": "Chest piece of the Phoenix Mail set.",
    "buyPrice": 468,
    "sellPrice": 234,
    "stats": {
      "defense": 37,
      "hp": 120,
      "physicalDef": 27,
      "magicalDef": 22,
      "attack": 8
    },
    "setBonus": {
      "requiredPieces": 4,
      "passives": [
        {
          "id": "burning_aura",
          "name": "Burning Aura",
          "emoji": "🔥",
          "effect": "burn_on_hit",
          "value": 4,
          "chance": 20,
          "duration": 4
        }
      ]
    }
  },

  "phoenix_mail_legs": {
    "id": "phoenix_mail_legs",
    "name": "👖 Phoenix Mail Leggings",
    "category": "armor",
    "armorSlot": "legs",
    "armorSet": "phoenix_mail",
    "rarity": "rare",
    "description": "Legs piece of the Phoenix Mail set.",
    "buyPrice": 368,
    "sellPrice": 184,
    "stats": {
      "defense": 29,
      "hp": 96,
      "physicalDef": 21,
      "magicalDef": 18,
      "attack": 6
    },
    "setBonus": {
      "requiredPieces": 4,
      "passives": [
        {
          "id": "burning_aura",
          "name": "Burning Aura",
          "emoji": "🔥",
          "effect": "burn_on_hit",
          "value": 4,
          "chance": 20,
          "duration": 4
        }
      ]
    }
  },

  "phoenix_mail_boots": {
    "id": "phoenix_mail_boots",
    "name": "🥾 Phoenix Mail Boots",
    "category": "armor",
    "armorSlot": "boots",
    "armorSet": "phoenix_mail",
    "rarity": "rare",
    "description": "Boots piece of the Phoenix Mail set.",
    "buyPrice": 288,
    "sellPrice": 144,
    "stats": {
      "defense": 22,
      "hp": 78,
      "physicalDef": 16,
      "magicalDef": 14,
      "attack": 5
    },
    "setBonus": {
      "requiredPieces": 4,
      "passives": [
        {
          "id": "burning_aura",
          "name": "Burning Aura",
          "emoji": "🔥",
          "effect": "burn_on_hit",
          "value": 4,
          "chance": 20,
          "duration": 4
        }
      ]
    }
  },

  "void_plate_head": {
    "id": "void_plate_head",
    "name": "🪖 Void Plate Helmet",
    "category": "armor",
    "armorSlot": "head",
    "armorSet": "void_plate",
    "rarity": "rare",
    "description": "Head piece of the Void Plate set.",
    "buyPrice": 280,
    "sellPrice": 140,
    "stats": {
      "defense": 22,
      "hp": 61,
      "physicalDef": 17,
      "magicalDef": 10,
      "attack": 6
    },
    "setBonus": {
      "requiredPieces": 4,
      "passives": [
        {
          "id": "void_touch",
          "name": "Void Touch",
          "emoji": "🌀",
          "effect": "debuff_def",
          "value": 5
        }
      ]
    }
  },

  "void_plate_chest": {
    "id": "void_plate_chest",
    "name": "🦺 Void Plate Chestplate",
    "category": "armor",
    "armorSlot": "chest",
    "armorSet": "void_plate",
    "rarity": "rare",
    "description": "Chest piece of the Void Plate set.",
    "buyPrice": 480,
    "sellPrice": 240,
    "stats": {
      "defense": 39,
      "hp": 116,
      "physicalDef": 29,
      "magicalDef": 19,
      "attack": 9
    },
    "setBonus": {
      "requiredPieces": 4,
      "passives": [
        {
          "id": "void_touch",
          "name": "Void Touch",
          "emoji": "🌀",
          "effect": "debuff_def",
          "value": 5
        }
      ]
    }
  },

  "void_plate_legs": {
    "id": "void_plate_legs",
    "name": "👖 Void Plate Leggings",
    "category": "armor",
    "armorSlot": "legs",
    "armorSet": "void_plate",
    "rarity": "rare",
    "description": "Legs piece of the Void Plate set.",
    "buyPrice": 380,
    "sellPrice": 190,
    "stats": {
      "defense": 31,
      "hp": 92,
      "physicalDef": 23,
      "magicalDef": 15,
      "attack": 7
    },
    "setBonus": {
      "requiredPieces": 4,
      "passives": [
        {
          "id": "void_touch",
          "name": "Void Touch",
          "emoji": "🌀",
          "effect": "debuff_def",
          "value": 5
        }
      ]
    }
  },

  "void_plate_boots": {
    "id": "void_plate_boots",
    "name": "🥾 Void Plate Boots",
    "category": "armor",
    "armorSlot": "boots",
    "armorSet": "void_plate",
    "rarity": "rare",
    "description": "Boots piece of the Void Plate set.",
    "buyPrice": 300,
    "sellPrice": 150,
    "stats": {
      "defense": 24,
      "hp": 74,
      "physicalDef": 18,
      "magicalDef": 11,
      "attack": 6
    },
    "setBonus": {
      "requiredPieces": 4,
      "passives": [
        {
          "id": "void_touch",
          "name": "Void Touch",
          "emoji": "🌀",
          "effect": "debuff_def",
          "value": 5
        }
      ]
    }
  },


  "genesis_blade": {
    "id": "genesis_blade",
    "name": "⚔️ Genesis Blade",
    "category": "weapon",
    "rarity": "legendary",
    "weaponType": "sword",
    "description": "The first sword ever created. Unmatched power.",
    "twoHanded": false,
    "buyPrice": 0,
    "sellPrice": 8000,
    "stats": {
      "attack": 85,
      "critChance": 22,
      "defense": 20,
      "agility": 10,
      "hp": 60,
      "magicalAtk": 15
    },
    "passive": {
      "id": "regeneration",
      "name": "Regeneration",
      "emoji": "💚",
      "effect": "regen",
      "value": 10
    },
    "skill": {
      "id": "genesis_strike",
      "name": "Genesis Strike",
      "description": "Unleash the power of creation",
      "manaCost": 40,
      "cooldown": 9,
      "damageType": "physical",
      "baseDamage": 100,
      "effects": [
        {
          "type": "buff_atk",
          "value": 20,
          "duration": 5
        }
      ]
    }
  },

  "omega_bow": {
    "id": "omega_bow",
    "name": "🏹 Omega Bow",
    "category": "weapon",
    "rarity": "legendary",
    "weaponType": "bow",
    "description": "The final bow. Ends all battles.",
    "twoHanded": true,
    "buyPrice": 0,
    "sellPrice": 8500,
    "stats": {
      "attack": 80,
      "critChance": 32,
      "agility": 25,
      "mana": 40,
      "luck": 12
    },
    "passive": {
      "id": "critical_eye",
      "name": "Critical Eye",
      "emoji": "🎯",
      "effect": "crit_boost",
      "value": 15
    },
    "skill": {
      "id": "omega_shot",
      "name": "Omega Shot",
      "description": "Fire the ultimate arrow",
      "manaCost": 45,
      "cooldown": 9,
      "damageType": "physical",
      "baseDamage": 110,
      "effects": [
        {
          "type": "instant_kill",
          "value": 10,
          "duration": 1
        }
      ]
    }
  },

  "alpha_dagger": {
    "id": "alpha_dagger",
    "name": "🗡️ Alpha Dagger",
    "category": "weapon",
    "rarity": "legendary",
    "weaponType": "dagger",
    "description": "The beginning and the end.",
    "twoHanded": false,
    "buyPrice": 0,
    "sellPrice": 7800,
    "stats": {
      "attack": 75,
      "critChance": 45,
      "agility": 30,
      "luck": 10
    },
    "passive": {
      "id": "vampiric",
      "name": "Vampiric",
      "emoji": "🧛",
      "effect": "lifesteal",
      "value": 30
    },
    "skill": {
      "id": "alpha_strike",
      "name": "Alpha Strike",
      "description": "Strike with absolute precision",
      "manaCost": 50,
      "cooldown": 9,
      "damageType": "physical",
      "baseDamage": 120,
      "effects": [
        {
          "type": "bleed",
          "value": 15,
          "duration": 6
        }
      ]
    }
  },

  "universe_staff": {
    "id": "universe_staff",
    "name": "🪄 Universe Staff",
    "category": "weapon",
    "rarity": "legendary",
    "weaponType": "staff",
    "description": "Contains the power of the universe.",
    "twoHanded": true,
    "buyPrice": 0,
    "sellPrice": 9000,
    "stats": {
      "attack": 70,
      "critChance": undefined,
      "defense": 18,
      "hp": 50,
      "magicalAtk": 60,
      "mana": 150
    },
    "passive": {
      "id": "mana_spring",
      "name": "Mana Spring",
      "emoji": "💧",
      "effect": "mana_regen",
      "value": 15
    },
    "skill": {
      "id": "cosmic_blast",
      "name": "Cosmic Blast",
      "description": "Unleash universal energy",
      "manaCost": 60,
      "cooldown": 9,
      "damageType": "magical",
      "baseDamage": 130,
      "effects": [
        {
          "type": "debuff_def",
          "value": 20,
          "duration": 5
        }
      ]
    }
  },

  "big_bang_axe": {
    "id": "big_bang_axe",
    "name": "🪓 Big Bang Axe",
    "category": "weapon",
    "rarity": "legendary",
    "weaponType": "axe",
    "description": "The force that created everything.",
    "twoHanded": true,
    "buyPrice": 0,
    "sellPrice": 10000,
    "stats": {
      "attack": 120,
      "critChance": 28,
      "defense": 25,
      "hp": 90
    },
    "passive": {
      "id": "berserker_rage",
      "name": "Berserker Rage",
      "emoji": "💢",
      "effect": "berserker_rage",
      "value": 20,
      "threshold": 15,
      "defensePenalty": 5
    },
    "skill": {
      "id": "big_bang",
      "name": "Big Bang",
      "description": "Create an explosion of pure energy",
      "manaCost": 70,
      "cooldown": 9,
      "damageType": "physical",
      "baseDamage": 150,
      "effects": [
        {
          "type": "stun",
          "value": 2,
          "duration": 3
        }
      ]
    }
  },

  "infinity_edge": {
    "id": "infinity_edge",
    "name": "⚔️ Infinity Edge",
    "category": "weapon",
    "rarity": "legendary",
    "weaponType": "sword",
    "description": "Cuts through infinity itself.",
    "twoHanded": false,
    "buyPrice": 0,
    "sellPrice": 8200,
    "stats": {
      "attack": 88,
      "critChance": 25,
      "defense": 22,
      "agility": 12,
      "hp": 55,
      "magicalAtk": 12
    },
    "passive": {
      "id": "infinite_power",
      "name": "Infinite Power",
      "emoji": "♾️",
      "effect": "attack_boost",
      "value": 15
    },
    "skill": {
      "id": "infinity_slash",
      "name": "Infinity Slash",
      "description": "Slash through dimensions",
      "manaCost": 42,
      "cooldown": 9,
      "damageType": "physical",
      "baseDamage": 105,
      "effects": [
        {
          "type": "armor_break",
          "value": 50,
          "duration": 4
        }
      ]
    }
  },

  "void_fang": {
    "id": "void_fang",
    "name": "🗡️ Void Fang",
    "category": "weapon",
    "rarity": "legendary",
    "weaponType": "dagger",
    "description": "Devours all it touches.",
    "twoHanded": false,
    "buyPrice": 0,
    "sellPrice": 8100,
    "stats": {
      "attack": 78,
      "critChance": 42,
      "agility": 28
    },
    "passive": {
      "id": "void_touch",
      "name": "Void Touch",
      "emoji": "🌀",
      "effect": "true_damage",
      "value": 20
    },
    "skill": {
      "id": "void_rip",
      "name": "Void Rip",
      "description": "Tear through reality",
      "manaCost": 48,
      "cooldown": 9,
      "damageType": "physical",
      "baseDamage": 115,
      "effects": [
        {
          "type": "silence",
          "value": 1,
          "duration": 4
        }
      ]
    }
  },

  "eternity_bow": {
    "id": "eternity_bow",
    "name": "🏹 Eternity Bow",
    "category": "weapon",
    "rarity": "legendary",
    "weaponType": "bow",
    "description": "Exists outside of time.",
    "twoHanded": true,
    "buyPrice": 0,
    "sellPrice": 8400,
    "stats": {
      "attack": 82,
      "critChance": 30,
      "agility": 24,
      "mana": 35,
      "luck": 11
    },
    "passive": {
      "id": "time_stop",
      "name": "Time Stop",
      "emoji": "⏰",
      "effect": "slow_on_hit",
      "value": 10,
      "chance": 40,
      "duration": 5
    },
    "skill": {
      "id": "eternity_arrow",
      "name": "Eternity Arrow",
      "description": "Arrow that transcends time",
      "manaCost": 46,
      "cooldown": 9,
      "damageType": "magical",
      "baseDamage": 108,
      "effects": [
        {
          "type": "freeze",
          "value": 1,
          "duration": 3
        }
      ]
    }
  },

  "omnipotent_staff": {
    "id": "omnipotent_staff",
    "name": "🪄 Omnipotent Staff",
    "category": "weapon",
    "rarity": "legendary",
    "weaponType": "staff",
    "description": "All-powerful magic.",
    "twoHanded": true,
    "buyPrice": 0,
    "sellPrice": 9500,
    "stats": {
      "attack": 75,
      "critChance": undefined,
      "defense": 20,
      "hp": 55,
      "magicalAtk": 65,
      "mana": 200
    },
    "passive": {
      "id": "omnipotence",
      "name": "Omnipotence",
      "emoji": "✨",
      "effect": "mana_cost_reduction",
      "value": 30
    },
    "skill": {
      "id": "divine_judgment",
      "name": "Divine Judgment",
      "description": "Judge all with divine power",
      "manaCost": 65,
      "cooldown": 9,
      "damageType": "magical",
      "baseDamage": 140,
      "effects": [
        {
          "type": "holy_damage",
          "value": 30,
          "duration": 1
        }
      ]
    }
  },

  "extinction_axe": {
    "id": "extinction_axe",
    "name": "🪓 Extinction Axe",
    "category": "weapon",
    "rarity": "legendary",
    "weaponType": "axe",
    "description": "Ends all life.",
    "twoHanded": true,
    "buyPrice": 0,
    "sellPrice": 9800,
    "stats": {
      "attack": 115,
      "critChance": 26,
      "defense": 23,
      "hp": 85
    },
    "passive": {
      "id": "extinction",
      "name": "Extinction",
      "emoji": "💀",
      "effect": "execute_low_hp",
      "value": 25
    },
    "skill": {
      "id": "extinction_wave",
      "name": "Extinction Wave",
      "description": "Wave of pure destruction",
      "manaCost": 68,
      "cooldown": 9,
      "damageType": "physical",
      "baseDamage": 145,
      "effects": [
        {
          "type": "aoe_damage",
          "value": 50,
          "duration": 1
        }
      ]
    }
  },

  "absolute_zero": {
    "id": "absolute_zero",
    "name": "⚔️ Absolute Zero",
    "category": "weapon",
    "rarity": "legendary",
    "weaponType": "sword",
    "description": "Freezes time and space.",
    "twoHanded": true,
    "buyPrice": 0,
    "sellPrice": 8300,
    "stats": {
      "attack": 90,
      "critChance": 24,
      "defense": 18,
      "hp": 50,
      "magicalAtk": 20
    },
    "passive": {
      "id": "frost_aura",
      "name": "Frost Aura",
      "emoji": "❄️",
      "effect": "freeze_on_hit",
      "value": 1,
      "chance": 30,
      "duration": 2
    },
    "skill": {
      "id": "absolute_freeze",
      "name": "Absolute Freeze",
      "description": "Freeze everything",
      "manaCost": 55,
      "cooldown": 9,
      "damageType": "magical",
      "baseDamage": 125,
      "effects": [
        {
          "type": "freeze",
          "value": 2,
          "duration": 4
        }
      ]
    }
  },

  "singularity_blade": {
    "id": "singularity_blade",
    "name": "🗡️ Singularity Blade",
    "category": "weapon",
    "rarity": "legendary",
    "weaponType": "dagger",
    "description": "Collapses into a black hole.",
    "twoHanded": false,
    "buyPrice": 0,
    "sellPrice": 8600,
    "stats": {
      "attack": 80,
      "critChance": 40,
      "agility": 32,
      "luck": 8
    },
    "passive": {
      "id": "gravity_well",
      "name": "Gravity Well",
      "emoji": "🌑",
      "effect": "pull_enemies",
      "value": 100
    },
    "skill": {
      "id": "black_hole",
      "name": "Black Hole",
      "description": "Create a singularity",
      "manaCost": 52,
      "cooldown": 9,
      "damageType": "magical",
      "baseDamage": 118,
      "effects": [
        {
          "type": "pull",
          "value": 100,
          "duration": 3
        }
      ]
    }
  },

  "transcendent_bow": {
    "id": "transcendent_bow",
    "name": "🏹 Transcendent Bow",
    "category": "weapon",
    "rarity": "legendary",
    "weaponType": "bow",
    "description": "Beyond mortal comprehension.",
    "twoHanded": true,
    "buyPrice": 0,
    "sellPrice": 8700,
    "stats": {
      "attack": 84,
      "critChance": 33,
      "agility": 26,
      "mana": 38,
      "luck": 13
    },
    "passive": {
      "id": "transcendence",
      "name": "Transcendence",
      "emoji": "🌟",
      "effect": "dodge_boost",
      "value": 20
    },
    "skill": {
      "id": "transcendent_shot",
      "name": "Transcendent Shot",
      "description": "Arrow that transcends reality",
      "manaCost": 49,
      "cooldown": 9,
      "damageType": "magical",
      "baseDamage": 112,
      "effects": [
        {
          "type": "pierce",
          "value": 100,
          "duration": 1
        }
      ]
    }
  },

  "creation_staff": {
    "id": "creation_staff",
    "name": "🪄 Creation Staff",
    "category": "weapon",
    "rarity": "legendary",
    "weaponType": "staff",
    "description": "Creates anything from nothing.",
    "twoHanded": true,
    "buyPrice": 0,
    "sellPrice": 10000,
    "stats": {
      "attack": 78,
      "critChance": undefined,
      "defense": 22,
      "hp": 60,
      "magicalAtk": 70,
      "mana": 250
    },
    "passive": {
      "id": "creation",
      "name": "Creation",
      "emoji": "🌈",
      "effect": "summon_ally",
      "value": 1
    },
    "skill": {
      "id": "genesis_wave",
      "name": "Genesis Wave",
      "description": "Create life from magic",
      "manaCost": 75,
      "cooldown": 9,
      "damageType": "magical",
      "baseDamage": 135,
      "effects": [
        {
          "type": "heal",
          "value": 50,
          "duration": 1
        }
      ]
    }
  },

  "annihilation_axe": {
    "id": "annihilation_axe",
    "name": "🪓 Annihilation Axe",
    "category": "weapon",
    "rarity": "legendary",
    "weaponType": "axe",
    "description": "Complete destruction.",
    "twoHanded": true,
    "buyPrice": 0,
    "sellPrice": 10500,
    "stats": {
      "attack": 125,
      "critChance": 30,
      "defense": 28,
      "hp": 95
    },
    "passive": {
      "id": "annihilation",
      "name": "Annihilation",
      "emoji": "💥",
      "effect": "damage_boost",
      "value": 25
    },
    "skill": {
      "id": "annihilate",
      "name": "Annihilate",
      "description": "Destroy everything",
      "manaCost": 80,
      "cooldown": 9,
      "damageType": "physical",
      "baseDamage": 160,
      "effects": [
        {
          "type": "armor_break",
          "value": 100,
          "duration": 5
        }
      ]
    }
  },

  "immortal_blade": {
    "id": "immortal_blade",
    "name": "⚔️ Immortal Blade",
    "category": "weapon",
    "rarity": "legendary",
    "weaponType": "sword",
    "description": "Grants eternal life to wielder.",
    "twoHanded": false,
    "buyPrice": 0,
    "sellPrice": 9200,
    "stats": {
      "attack": 95,
      "critChance": 27,
      "defense": 25,
      "agility": 15,
      "hp": 70,
      "magicalAtk": 18
    },
    "passive": {
      "id": "immortality",
      "name": "Immortality",
      "emoji": "♾️",
      "effect": "revive_on_death",
      "value": 50
    },
    "skill": {
      "id": "immortal_strike",
      "name": "Immortal Strike",
      "description": "Strike with eternal power",
      "manaCost": 58,
      "cooldown": 9,
      "damageType": "physical",
      "baseDamage": 128,
      "effects": [
        {
          "type": "buff_def",
          "value": 25,
          "duration": 5
        }
      ]
    }
  },

  "phantom_king_dagger": {
    "id": "phantom_king_dagger",
    "name": "🗡️ Phantom King Dagger",
    "category": "weapon",
    "rarity": "legendary",
    "weaponType": "dagger",
    "description": "Rules over all shadows.",
    "twoHanded": false,
    "buyPrice": 0,
    "sellPrice": 8900,
    "stats": {
      "attack": 82,
      "critChance": 48,
      "agility": 35,
      "luck": 9
    },
    "passive": {
      "id": "shadow_king",
      "name": "Shadow King",
      "emoji": "👑",
      "effect": "invisibility",
      "value": 20
    },
    "skill": {
      "id": "phantom_strike",
      "name": "Phantom Strike",
      "description": "Strike from the void",
      "manaCost": 54,
      "cooldown": 9,
      "damageType": "physical",
      "baseDamage": 122,
      "effects": [
        {
          "type": "blind",
          "value": 100,
          "duration": 4
        }
      ]
    }
  },

  "celestial_emperor_bow": {
    "id": "celestial_emperor_bow",
    "name": "🏹 Celestial Emperor Bow",
    "category": "weapon",
    "rarity": "legendary",
    "weaponType": "bow",
    "description": "Commands the heavens.",
    "twoHanded": true,
    "buyPrice": 0,
    "sellPrice": 9100,
    "stats": {
      "attack": 86,
      "critChance": 35,
      "agility": 27,
      "mana": 42,
      "luck": 14
    },
    "passive": {
      "id": "celestial_power",
      "name": "Celestial Power",
      "emoji": "☀️",
      "effect": "holy_damage_boost",
      "value": 30
    },
    "skill": {
      "id": "heaven_arrow",
      "name": "Heaven Arrow",
      "description": "Arrow blessed by heaven",
      "manaCost": 51,
      "cooldown": 9,
      "damageType": "magical",
      "baseDamage": 116,
      "effects": [
        {
          "type": "holy_damage",
          "value": 40,
          "duration": 1
        }
      ]
    }
  },

  "primeval_staff": {
    "id": "primeval_staff",
    "name": "🪄 Primeval Staff",
    "category": "weapon",
    "rarity": "legendary",
    "weaponType": "staff",
    "description": "Older than existence.",
    "twoHanded": true,
    "buyPrice": 0,
    "sellPrice": 11000,
    "stats": {
      "attack": 82,
      "critChance": undefined,
      "defense": 24,
      "hp": 65,
      "magicalAtk": 75,
      "mana": 300
    },
    "passive": {
      "id": "primeval_power",
      "name": "Primeval Power",
      "emoji": "🌌",
      "effect": "spell_power_boost",
      "value": 40
    },
    "skill": {
      "id": "primeval_blast",
      "name": "Primeval Blast",
      "description": "Ancient destructive magic",
      "manaCost": 85,
      "cooldown": 9,
      "damageType": "magical",
      "baseDamage": 155,
      "effects": [
        {
          "type": "debuff_all",
          "value": 15,
          "duration": 5
        }
      ]
    }
  },

  "cataclysm_axe": {
    "id": "cataclysm_axe",
    "name": "🪓 Cataclysm Axe",
    "category": "weapon",
    "rarity": "legendary",
    "weaponType": "axe",
    "description": "The ultimate catastrophe.",
    "twoHanded": true,
    "buyPrice": 0,
    "sellPrice": 12000,
    "stats": {
      "attack": 130,
      "critChance": 32,
      "defense": 30,
      "hp": 100
    },
    "passive": {
      "id": "cataclysm",
      "name": "Cataclysm",
      "emoji": "🌋",
      "effect": "earthquake_on_hit",
      "value": 30,
      "chance": 25,
      "duration": 3
    },
    "skill": {
      "id": "world_shatter",
      "name": "World Shatter",
      "description": "Shatter the world itself",
      "manaCost": 90,
      "cooldown": 9,
      "damageType": "physical",
      "baseDamage": 180,
      "effects": [
        {
          "type": "stun",
          "value": 3,
          "duration": 4
        }
      ]
    }
  },


  "godslayer_blade": {
    "id": "godslayer_blade",
    "name": "⚔️ Godslayer Blade",
    "category": "weapon",
    "rarity": "epic",
    "weaponType": "sword",
    "description": "A blade that can kill gods.",
    "twoHanded": true,
    "buyPrice": 1550,
    "sellPrice": 775,
    "stats": {
      "attack": 45,
      "critChance": 15,
      "defense": 10,
      "hp": 35,
      "magicalAtk": 8
    },
    "passive": {
      "id": "critical_eye",
      "name": "Critical Eye",
      "emoji": "🎯",
      "effect": "crit_boost",
      "value": 10
    }
  },

  "infinity_bow": {
    "id": "infinity_bow",
    "name": "🏹 Infinity Bow",
    "category": "weapon",
    "rarity": "epic",
    "weaponType": "bow",
    "description": "Never runs out of arrows.",
    "twoHanded": true,
    "buyPrice": 1600,
    "sellPrice": 800,
    "stats": {
      "attack": 43,
      "critChance": 20,
      "agility": 15,
      "luck": 5
    },
    "passive": {
      "id": "lucky_strike",
      "name": "Lucky Strike",
      "emoji": "🍀",
      "effect": "luck_boost",
      "value": 5
    }
  },

  "phantom_edge": {
    "id": "phantom_edge",
    "name": "🗡️ Phantom Edge",
    "category": "weapon",
    "rarity": "epic",
    "weaponType": "dagger",
    "description": "Phases through armor.",
    "twoHanded": false,
    "buyPrice": 1450,
    "sellPrice": 725,
    "stats": {
      "attack": 35,
      "critChance": 25,
      "agility": 18
    },
    "passive": {
      "id": "shadow_step",
      "name": "Shadow Step",
      "emoji": "👤",
      "effect": "agility_to_dodge",
      "value": 1
    }
  },

  "cosmic_staff": {
    "id": "cosmic_staff",
    "name": "🪄 Cosmic Staff",
    "category": "weapon",
    "rarity": "epic",
    "weaponType": "staff",
    "description": "Harnesses cosmic power.",
    "twoHanded": true,
    "buyPrice": 1650,
    "sellPrice": 825,
    "stats": {
      "attack": 38,
      "critChance": undefined,
      "defense": 8,
      "magicalAtk": 32,
      "mana": 55
    },
    "passive": {
      "id": "mana_efficiency",
      "name": "Mana Efficiency",
      "emoji": "💎",
      "effect": "mana_cost_reduction",
      "value": 20
    }
  },

  "apocalypse_axe": {
    "id": "apocalypse_axe",
    "name": "🪓 Apocalypse Axe",
    "category": "weapon",
    "rarity": "epic",
    "weaponType": "axe",
    "description": "Brings the end of days.",
    "twoHanded": true,
    "buyPrice": 1700,
    "sellPrice": 850,
    "stats": {
      "attack": 52,
      "critChance": 16,
      "defense": 10,
      "hp": 45
    },
    "passive": {
      "id": "enrage",
      "name": "Enrage",
      "emoji": "😡",
      "effect": "enrage",
      "value": 10,
      "threshold": 30
    }
  },

  "eternal_sword": {
    "id": "eternal_sword",
    "name": "⚔️ Eternal Sword",
    "category": "weapon",
    "rarity": "epic",
    "weaponType": "sword",
    "description": "Never dulls or breaks.",
    "twoHanded": false,
    "buyPrice": 1520,
    "sellPrice": 760,
    "stats": {
      "attack": 42,
      "critChance": 14,
      "defense": 12,
      "hp": 30
    },
    "passive": {
      "id": "regeneration",
      "name": "Regeneration",
      "emoji": "💚",
      "effect": "regen",
      "value": 8
    }
  },

  "reaper_blade": {
    "id": "reaper_blade",
    "name": "🗡️ Reaper Blade",
    "category": "weapon",
    "rarity": "epic",
    "weaponType": "dagger",
    "description": "Harvests souls instantly.",
    "twoHanded": false,
    "buyPrice": 1480,
    "sellPrice": 740,
    "stats": {
      "attack": 36,
      "critChance": 24,
      "agility": 16
    },
    "passive": {
      "id": "vampiric",
      "name": "Vampiric",
      "emoji": "🧛",
      "effect": "lifesteal",
      "value": 25
    }
  },

  "divine_bow": {
    "id": "divine_bow",
    "name": "🏹 Divine Bow",
    "category": "weapon",
    "rarity": "epic",
    "weaponType": "bow",
    "description": "Blessed by all gods.",
    "twoHanded": true,
    "buyPrice": 1580,
    "sellPrice": 790,
    "stats": {
      "attack": 44,
      "critChance": 19,
      "agility": 14,
      "magicalAtk": 6
    },
    "passive": {
      "id": "holy_power",
      "name": "Holy Power",
      "emoji": "✨",
      "effect": "attack_boost",
      "value": 12
    }
  },

  "primordial_staff": {
    "id": "primordial_staff",
    "name": "🪄 Primordial Staff",
    "category": "weapon",
    "rarity": "epic",
    "weaponType": "staff",
    "description": "From the dawn of time.",
    "twoHanded": true,
    "buyPrice": 1680,
    "sellPrice": 840,
    "stats": {
      "attack": 40,
      "critChance": undefined,
      "defense": 7,
      "magicalAtk": 35,
      "mana": 60
    },
    "passive": {
      "id": "arcane_mastery",
      "name": "Arcane Mastery",
      "emoji": "🔮",
      "effect": "magic_damage_boost",
      "value": 15
    }
  },

  "chaos_reaver": {
    "id": "chaos_reaver",
    "name": "🪓 Chaos Reaver",
    "category": "weapon",
    "rarity": "epic",
    "weaponType": "axe",
    "description": "Embodies pure chaos.",
    "twoHanded": true,
    "buyPrice": 1670,
    "sellPrice": 835,
    "stats": {
      "attack": 50,
      "critChance": 17,
      "hp": 42
    },
    "passive": {
      "id": "chaos_strike",
      "name": "Chaos Strike",
      "emoji": "💥",
      "effect": "random_damage_boost",
      "value": 30
    }
  },

  "heaven_piercer": {
    "id": "heaven_piercer",
    "name": "⚔️ Heaven Piercer",
    "category": "weapon",
    "rarity": "epic",
    "weaponType": "sword",
    "description": "Can pierce the heavens.",
    "twoHanded": true,
    "buyPrice": 1590,
    "sellPrice": 795,
    "stats": {
      "attack": 46,
      "critChance": 16,
      "defense": 11,
      "agility": 6,
      "hp": 32
    },
    "passive": {
      "id": "armor_break",
      "name": "Armor Break",
      "emoji": "🔨",
      "effect": "ignore_defense",
      "value": 30
    }
  },

  "assassin_king_blade": {
    "id": "assassin_king_blade",
    "name": "🗡️ Assassin King Blade",
    "category": "weapon",
    "rarity": "epic",
    "weaponType": "dagger",
    "description": "The ultimate assassin weapon.",
    "twoHanded": false,
    "buyPrice": 1500,
    "sellPrice": 750,
    "stats": {
      "attack": 37,
      "critChance": 26,
      "agility": 20
    },
    "passive": {
      "id": "backstab",
      "name": "Backstab",
      "emoji": "🗡️",
      "effect": "crit_damage_boost",
      "value": 50
    }
  },

  "galaxy_bow": {
    "id": "galaxy_bow",
    "name": "🏹 Galaxy Bow",
    "category": "weapon",
    "rarity": "epic",
    "weaponType": "bow",
    "description": "Shoots stars as arrows.",
    "twoHanded": true,
    "buyPrice": 1620,
    "sellPrice": 810,
    "stats": {
      "attack": 42,
      "critChance": 21,
      "agility": 16,
      "luck": 6
    },
    "passive": {
      "id": "star_power",
      "name": "Star Power",
      "emoji": "⭐",
      "effect": "multi_shot",
      "value": 2
    }
  },

  "reality_staff": {
    "id": "reality_staff",
    "name": "🪄 Reality Staff",
    "category": "weapon",
    "rarity": "epic",
    "weaponType": "staff",
    "description": "Bends reality itself.",
    "twoHanded": true,
    "buyPrice": 1660,
    "sellPrice": 830,
    "stats": {
      "attack": 39,
      "critChance": undefined,
      "defense": 9,
      "magicalAtk": 33,
      "mana": 58
    },
    "passive": {
      "id": "reality_warp",
      "name": "Reality Warp",
      "emoji": "🌀",
      "effect": "spell_reflect",
      "value": 20
    }
  },

  "ragnarok_axe": {
    "id": "ragnarok_axe",
    "name": "🪓 Ragnarok Axe",
    "category": "weapon",
    "rarity": "epic",
    "weaponType": "axe",
    "description": "Brings the twilight of gods.",
    "twoHanded": true,
    "buyPrice": 1690,
    "sellPrice": 845,
    "stats": {
      "attack": 51,
      "critChance": 18,
      "defense": 12,
      "hp": 48
    },
    "passive": {
      "id": "berserker_rage",
      "name": "Berserker Rage",
      "emoji": "💢",
      "effect": "berserker_rage",
      "value": 15,
      "threshold": 20,
      "defensePenalty": 5
    }
  },

  "soul_calibur": {
    "id": "soul_calibur",
    "name": "⚔️ Soul Calibur",
    "category": "weapon",
    "rarity": "epic",
    "weaponType": "sword",
    "description": "The spirit sword.",
    "twoHanded": false,
    "buyPrice": 1570,
    "sellPrice": 785,
    "stats": {
      "attack": 44,
      "critChance": 17,
      "defense": 9,
      "agility": 7,
      "magicalAtk": 7
    },
    "passive": {
      "id": "soul_power",
      "name": "Soul Power",
      "emoji": "👻",
      "effect": "damage_boost_per_kill",
      "value": 2
    }
  },

  "oblivion_dagger": {
    "id": "oblivion_dagger",
    "name": "🗡️ Oblivion Dagger",
    "category": "weapon",
    "rarity": "epic",
    "weaponType": "dagger",
    "description": "Erases existence.",
    "twoHanded": false,
    "buyPrice": 1460,
    "sellPrice": 730,
    "stats": {
      "attack": 34,
      "critChance": 23,
      "agility": 17
    },
    "passive": {
      "id": "void_strike",
      "name": "Void Strike",
      "emoji": "🌑",
      "effect": "true_damage",
      "value": 15
    }
  },

  "supernova_bow": {
    "id": "supernova_bow",
    "name": "🏹 Supernova Bow",
    "category": "weapon",
    "rarity": "epic",
    "weaponType": "bow",
    "description": "Explosive star power.",
    "twoHanded": true,
    "buyPrice": 1640,
    "sellPrice": 820,
    "stats": {
      "attack": 45,
      "critChance": 22,
      "agility": 13,
      "magicalAtk": 8
    },
    "passive": {
      "id": "explosion",
      "name": "Explosion",
      "emoji": "💥",
      "effect": "aoe_damage",
      "value": 20
    }
  },

  "dimension_staff": {
    "id": "dimension_staff",
    "name": "🪄 Dimension Staff",
    "category": "weapon",
    "rarity": "epic",
    "weaponType": "staff",
    "description": "Opens dimensional rifts.",
    "twoHanded": true,
    "buyPrice": 1675,
    "sellPrice": 837,
    "stats": {
      "attack": 41,
      "critChance": undefined,
      "magicalAtk": 34,
      "mana": 62
    },
    "passive": {
      "id": "dimension_shift",
      "name": "Dimension Shift",
      "emoji": "🌌",
      "effect": "teleport_dodge",
      "value": 15
    }
  },

  "armageddon_cleaver": {
    "id": "armageddon_cleaver",
    "name": "🪓 Armageddon Cleaver",
    "category": "weapon",
    "rarity": "epic",
    "weaponType": "axe",
    "description": "The final weapon.",
    "twoHanded": true,
    "buyPrice": 1710,
    "sellPrice": 855,
    "stats": {
      "attack": 53,
      "critChance": 19,
      "defense": 11,
      "hp": 50
    },
    "passive": {
      "id": "world_ender",
      "name": "World Ender",
      "emoji": "💀",
      "effect": "execute_low_hp",
      "value": 20
    }
  },


  "mithril_sword": {
    "id": "mithril_sword",
    "name": "⚔️ Mithril Sword",
    "category": "weapon",
    "rarity": "rare",
    "weaponType": "sword",
    "description": "Forged from legendary mithril.",
    "twoHanded": false,
    "buyPrice": 485,
    "sellPrice": 242,
    "stats": {
      "attack": 26,
      "critChance": 10,
      "defense": 3,
      "magicalAtk": 3
    },
    "passive": {
      "id": "power_surge",
      "name": "Power Surge",
      "emoji": "💪",
      "effect": "attack_boost",
      "value": 5
    }
  },

  "phoenix_bow": {
    "id": "phoenix_bow",
    "name": "🏹 Phoenix Bow",
    "category": "weapon",
    "rarity": "rare",
    "weaponType": "bow",
    "description": "Burns enemies with phoenix fire.",
    "twoHanded": true,
    "buyPrice": 520,
    "sellPrice": 260,
    "stats": {
      "attack": 29,
      "critChance": 13,
      "agility": 7
    },
    "passive": {
      "id": "burning_aura",
      "name": "Burning Aura",
      "emoji": "🔥",
      "effect": "burn_on_hit",
      "value": 4,
      "chance": 20,
      "duration": 4
    }
  },

  "serpent_fang": {
    "id": "serpent_fang",
    "name": "🗡️ Serpent Fang",
    "category": "weapon",
    "rarity": "rare",
    "weaponType": "dagger",
    "description": "A dagger shaped like a serpent.",
    "twoHanded": false,
    "buyPrice": 470,
    "sellPrice": 235,
    "stats": {
      "attack": 22,
      "critChance": 17,
      "agility": 8
    },
    "passive": {
      "id": "poison_touch",
      "name": "Poison Touch",
      "emoji": "☠️",
      "effect": "poison_on_hit",
      "value": 3,
      "chance": 25,
      "duration": 4
    }
  },

  "storm_staff": {
    "id": "storm_staff",
    "name": "🪄 Storm Staff",
    "category": "weapon",
    "rarity": "rare",
    "weaponType": "staff",
    "description": "Commands the power of storms.",
    "twoHanded": true,
    "buyPrice": 510,
    "sellPrice": 255,
    "stats": {
      "attack": 24,
      "critChance": undefined,
      "defense": 4,
      "magicalAtk": 16,
      "mana": 38
    },
    "passive": {
      "id": "arcane_mind",
      "name": "Arcane Mind",
      "emoji": "💧",
      "effect": "mana_regen",
      "value": 5
    }
  },

  "demon_cleaver": {
    "id": "demon_cleaver",
    "name": "🪓 Demon Cleaver",
    "category": "weapon",
    "rarity": "rare",
    "weaponType": "axe",
    "description": "Forged in hellfire.",
    "twoHanded": true,
    "buyPrice": 550,
    "sellPrice": 275,
    "stats": {
      "attack": 38,
      "critChance": 11,
      "hp": 28
    },
    "passive": {
      "id": "mighty_blow",
      "name": "Mighty Blow",
      "emoji": "💥",
      "effect": "attack_boost",
      "value": 7
    }
  },

  "holy_blade": {
    "id": "holy_blade",
    "name": "⚔️ Holy Blade",
    "category": "weapon",
    "rarity": "rare",
    "weaponType": "sword",
    "description": "Blessed by divine light.",
    "twoHanded": false,
    "buyPrice": 495,
    "sellPrice": 247,
    "stats": {
      "attack": 27,
      "critChance": 9,
      "defense": 4,
      "magicalAtk": 4
    },
    "passive": {
      "id": "regeneration",
      "name": "Regeneration",
      "emoji": "💚",
      "effect": "regen",
      "value": 3
    }
  },

  "nightshade_dagger": {
    "id": "nightshade_dagger",
    "name": "🗡️ Nightshade Dagger",
    "category": "weapon",
    "rarity": "rare",
    "weaponType": "dagger",
    "description": "Deadly poison flows through it.",
    "twoHanded": false,
    "buyPrice": 480,
    "sellPrice": 240,
    "stats": {
      "attack": 23,
      "critChance": 18,
      "agility": 9
    },
    "passive": {
      "id": "poison_touch",
      "name": "Poison Touch",
      "emoji": "☠️",
      "effect": "poison_on_hit",
      "value": 4,
      "chance": 30,
      "duration": 5
    }
  },

  "dragon_bow": {
    "id": "dragon_bow",
    "name": "🏹 Dragon Bow",
    "category": "weapon",
    "rarity": "rare",
    "weaponType": "bow",
    "description": "Crafted from dragon sinew.",
    "twoHanded": true,
    "buyPrice": 530,
    "sellPrice": 265,
    "stats": {
      "attack": 31,
      "critChance": 14,
      "agility": 8
    },
    "passive": {
      "id": "swift_strikes",
      "name": "Swift Strikes",
      "emoji": "⚡",
      "effect": "agility_boost",
      "value": 6
    }
  },

  "frost_staff": {
    "id": "frost_staff",
    "name": "🪄 Frost Staff",
    "category": "weapon",
    "rarity": "rare",
    "weaponType": "staff",
    "description": "Freezes enemies solid.",
    "twoHanded": true,
    "buyPrice": 515,
    "sellPrice": 257,
    "stats": {
      "attack": 25,
      "critChance": undefined,
      "magicalAtk": 17,
      "mana": 40
    },
    "passive": {
      "id": "frost_aura",
      "name": "Frost Aura",
      "emoji": "❄️",
      "effect": "slow_on_hit",
      "value": 5,
      "chance": 25,
      "duration": 4
    }
  },

  "thunder_axe": {
    "id": "thunder_axe",
    "name": "🪓 Thunder Axe",
    "category": "weapon",
    "rarity": "rare",
    "weaponType": "axe",
    "description": "Strikes with lightning.",
    "twoHanded": true,
    "buyPrice": 540,
    "sellPrice": 270,
    "stats": {
      "attack": 36,
      "critChance": 12,
      "hp": 26,
      "magicalAtk": 5
    },
    "passive": {
      "id": "shock_wave",
      "name": "Shock Wave",
      "emoji": "⚡",
      "effect": "stun_on_crit",
      "value": 1,
      "chance": 15,
      "duration": 1
    }
  },

  "cursed_blade": {
    "id": "cursed_blade",
    "name": "⚔️ Cursed Blade",
    "category": "weapon",
    "rarity": "rare",
    "weaponType": "sword",
    "description": "Powerful but cursed.",
    "twoHanded": false,
    "buyPrice": 500,
    "sellPrice": 250,
    "stats": {
      "attack": 30,
      "critChance": 11,
      "magicalAtk": 6
    },
    "passive": {
      "id": "vampiric",
      "name": "Vampiric",
      "emoji": "🧛",
      "effect": "lifesteal",
      "value": 15
    }
  },

  "soul_reaper": {
    "id": "soul_reaper",
    "name": "🗡️ Soul Reaper",
    "category": "weapon",
    "rarity": "rare",
    "weaponType": "dagger",
    "description": "Steals the souls of enemies.",
    "twoHanded": false,
    "buyPrice": 490,
    "sellPrice": 245,
    "stats": {
      "attack": 24,
      "critChance": 19,
      "agility": 7
    },
    "passive": {
      "id": "soul_drain",
      "name": "Soul Drain",
      "emoji": "👻",
      "effect": "drain",
      "value": 10
    }
  },

  "celestial_bow": {
    "id": "celestial_bow",
    "name": "🏹 Celestial Bow",
    "category": "weapon",
    "rarity": "rare",
    "weaponType": "bow",
    "description": "Shoots arrows of pure light.",
    "twoHanded": true,
    "buyPrice": 525,
    "sellPrice": 262,
    "stats": {
      "attack": 30,
      "critChance": 15,
      "agility": 9,
      "magicalAtk": 4
    },
    "passive": {
      "id": "critical_eye",
      "name": "Critical Eye",
      "emoji": "🎯",
      "effect": "crit_boost",
      "value": 8
    }
  },

  "void_scepter": {
    "id": "void_scepter",
    "name": "🪄 Void Scepter",
    "category": "weapon",
    "rarity": "rare",
    "weaponType": "staff",
    "description": "Channels void energy.",
    "twoHanded": true,
    "buyPrice": 535,
    "sellPrice": 267,
    "stats": {
      "attack": 26,
      "critChance": undefined,
      "defense": 5,
      "magicalAtk": 19,
      "mana": 42
    },
    "passive": {
      "id": "void_touch",
      "name": "Void Touch",
      "emoji": "🌀",
      "effect": "debuff_def",
      "value": 5
    }
  },

  "reaper_scythe_weapon": {
    "id": "reaper_scythe_weapon",
    "name": "🪓 Reaper Scythe",
    "category": "weapon",
    "rarity": "rare",
    "weaponType": "axe",
    "description": "Death's own weapon.",
    "twoHanded": true,
    "buyPrice": 545,
    "sellPrice": 272,
    "stats": {
      "attack": 37,
      "critChance": 13,
      "hp": 30
    },
    "passive": {
      "id": "death_mark",
      "name": "Death Mark",
      "emoji": "💀",
      "effect": "bleed_on_hit",
      "value": 5,
      "chance": 30,
      "duration": 5
    }
  },

  "crystal_sword": {
    "id": "crystal_sword",
    "name": "⚔️ Crystal Sword",
    "category": "weapon",
    "rarity": "rare",
    "weaponType": "sword",
    "description": "Made from pure crystal.",
    "twoHanded": false,
    "buyPrice": 505,
    "sellPrice": 252,
    "stats": {
      "attack": 28,
      "critChance": 12,
      "defense": 3,
      "agility": 3
    },
    "passive": {
      "id": "crystal_power",
      "name": "Crystal Power",
      "emoji": "💎",
      "effect": "attack_boost",
      "value": 6
    }
  },

  "viper_strike": {
    "id": "viper_strike",
    "name": "🗡️ Viper Strike",
    "category": "weapon",
    "rarity": "rare",
    "weaponType": "dagger",
    "description": "Fast as a striking viper.",
    "twoHanded": false,
    "buyPrice": 475,
    "sellPrice": 237,
    "stats": {
      "attack": 21,
      "critChance": 20,
      "agility": 10
    },
    "passive": {
      "id": "swift_strikes",
      "name": "Swift Strikes",
      "emoji": "⚡",
      "effect": "agility_boost",
      "value": 7
    }
  },

  "moonbow": {
    "id": "moonbow",
    "name": "🏹 Moonbow",
    "category": "weapon",
    "rarity": "rare",
    "weaponType": "bow",
    "description": "Blessed by the moon.",
    "twoHanded": true,
    "buyPrice": 518,
    "sellPrice": 259,
    "stats": {
      "attack": 28,
      "critChance": 16,
      "agility": 8
    },
    "passive": {
      "id": "moon_blessing",
      "name": "Moon Blessing",
      "emoji": "🌙",
      "effect": "evasion_boost",
      "value": 10
    }
  },

  "inferno_staff": {
    "id": "inferno_staff",
    "name": "🪄 Inferno Staff",
    "category": "weapon",
    "rarity": "rare",
    "weaponType": "staff",
    "description": "Burns with eternal flames.",
    "twoHanded": true,
    "buyPrice": 522,
    "sellPrice": 261,
    "stats": {
      "attack": 27,
      "critChance": undefined,
      "magicalAtk": 18,
      "mana": 39
    },
    "passive": {
      "id": "burning_aura",
      "name": "Burning Aura",
      "emoji": "🔥",
      "effect": "burn_on_hit",
      "value": 5,
      "chance": 25,
      "duration": 4
    }
  },

  "giant_slayer": {
    "id": "giant_slayer",
    "name": "🪓 Giant Slayer",
    "category": "weapon",
    "rarity": "rare",
    "weaponType": "axe",
    "description": "Designed to fell giants.",
    "twoHanded": true,
    "buyPrice": 560,
    "sellPrice": 280,
    "stats": {
      "attack": 40,
      "critChance": 10,
      "hp": 32
    },
    "passive": {
      "id": "giant_killer",
      "name": "Giant Killer",
      "emoji": "⚔️",
      "effect": "damage_vs_boss",
      "value": 20
    }
  },


  "iron_sword": {
    "id": "iron_sword",
    "name": "⚔️ Iron Sword",
    "category": "weapon",
    "rarity": "uncommon",
    "weaponType": "sword",
    "description": "A solid iron blade.",
    "twoHanded": false,
    "buyPrice": 155,
    "sellPrice": 77,
    "stats": {
      "attack": 16,
      "critChance": 6,
      "defense": 2
    }
  },

  "longbow": {
    "id": "longbow",
    "name": "🏹 Longbow",
    "category": "weapon",
    "rarity": "uncommon",
    "weaponType": "bow",
    "description": "A tall bow with great range.",
    "twoHanded": true,
    "buyPrice": 175,
    "sellPrice": 87,
    "stats": {
      "attack": 17,
      "critChance": 11,
      "agility": 4
    }
  },

  "steel_dagger": {
    "id": "steel_dagger",
    "name": "🗡️ Steel Dagger",
    "category": "weapon",
    "rarity": "uncommon",
    "weaponType": "dagger",
    "description": "A razor-sharp steel blade.",
    "twoHanded": false,
    "buyPrice": 145,
    "sellPrice": 72,
    "stats": {
      "attack": 13,
      "critChance": 14,
      "agility": 5
    }
  },

  "mage_staff": {
    "id": "mage_staff",
    "name": "🪄 Mage Staff",
    "category": "weapon",
    "rarity": "uncommon",
    "weaponType": "staff",
    "description": "A staff for trained mages.",
    "twoHanded": true,
    "buyPrice": 165,
    "sellPrice": 82,
    "stats": {
      "attack": 14,
      "critChance": undefined,
      "defense": 3,
      "magicalAtk": 11,
      "mana": 22
    }
  },

  "war_axe": {
    "id": "war_axe",
    "name": "🪓 War Axe",
    "category": "weapon",
    "rarity": "uncommon",
    "weaponType": "axe",
    "description": "A brutal weapon of war.",
    "twoHanded": true,
    "buyPrice": 190,
    "sellPrice": 95,
    "stats": {
      "attack": 21,
      "critChance": 7,
      "hp": 18
    }
  },

  "silver_sword": {
    "id": "silver_sword",
    "name": "⚔️ Silver Sword",
    "category": "weapon",
    "rarity": "uncommon",
    "weaponType": "sword",
    "description": "Effective against undead.",
    "twoHanded": false,
    "buyPrice": 170,
    "sellPrice": 85,
    "stats": {
      "attack": 17,
      "critChance": 8,
      "defense": 3
    }
  },

  "rogue_blade": {
    "id": "rogue_blade",
    "name": "🗡️ Rogue Blade",
    "category": "weapon",
    "rarity": "uncommon",
    "weaponType": "dagger",
    "description": "A blade favored by thieves.",
    "twoHanded": false,
    "buyPrice": 150,
    "sellPrice": 75,
    "stats": {
      "attack": 14,
      "critChance": 13,
      "agility": 6
    }
  },

  "elven_bow": {
    "id": "elven_bow",
    "name": "🏹 Elven Bow",
    "category": "weapon",
    "rarity": "uncommon",
    "weaponType": "bow",
    "description": "Crafted by elven artisans.",
    "twoHanded": true,
    "buyPrice": 185,
    "sellPrice": 92,
    "stats": {
      "attack": 19,
      "critChance": 12,
      "agility": 5
    }
  },

  "crystal_wand": {
    "id": "crystal_wand",
    "name": "🪄 Crystal Wand",
    "category": "weapon",
    "rarity": "uncommon",
    "weaponType": "staff",
    "description": "A wand with a crystal core.",
    "twoHanded": false,
    "buyPrice": 160,
    "sellPrice": 80,
    "stats": {
      "attack": 15,
      "critChance": undefined,
      "magicalAtk": 12,
      "mana": 24
    }
  },

  "berserker_axe": {
    "id": "berserker_axe",
    "name": "🪓 Berserker Axe",
    "category": "weapon",
    "rarity": "uncommon",
    "weaponType": "axe",
    "description": "An axe that fuels rage.",
    "twoHanded": true,
    "buyPrice": 195,
    "sellPrice": 97,
    "stats": {
      "attack": 22,
      "critChance": 8,
      "hp": 20
    }
  },

  "knight_sword": {
    "id": "knight_sword",
    "name": "⚔️ Knight Sword",
    "category": "weapon",
    "rarity": "uncommon",
    "weaponType": "sword",
    "description": "A noble knight's weapon.",
    "twoHanded": false,
    "buyPrice": 180,
    "sellPrice": 90,
    "stats": {
      "attack": 18,
      "critChance": 7,
      "defense": 4
    }
  },

  "shadow_blade_unc": {
    "id": "shadow_blade_unc",
    "name": "🗡️ Shadow Blade",
    "category": "weapon",
    "rarity": "uncommon",
    "weaponType": "dagger",
    "description": "Strikes from the shadows.",
    "twoHanded": false,
    "buyPrice": 158,
    "sellPrice": 79,
    "stats": {
      "attack": 15,
      "critChance": 15,
      "agility": 6
    }
  },

  "ranger_bow": {
    "id": "ranger_bow",
    "name": "🏹 Ranger Bow",
    "category": "weapon",
    "rarity": "uncommon",
    "weaponType": "bow",
    "description": "A bow for skilled rangers.",
    "twoHanded": true,
    "buyPrice": 172,
    "sellPrice": 86,
    "stats": {
      "attack": 18,
      "critChance": 10,
      "agility": 5
    }
  },

  "enchanted_staff": {
    "id": "enchanted_staff",
    "name": "🪄 Enchanted Staff",
    "category": "weapon",
    "rarity": "uncommon",
    "weaponType": "staff",
    "description": "Permanently enchanted with magic.",
    "twoHanded": true,
    "buyPrice": 178,
    "sellPrice": 89,
    "stats": {
      "attack": 16,
      "critChance": undefined,
      "defense": 2,
      "magicalAtk": 13,
      "mana": 25
    }
  },

  "double_axe": {
    "id": "double_axe",
    "name": "🪓 Double Axe",
    "category": "weapon",
    "rarity": "uncommon",
    "weaponType": "axe",
    "description": "An axe with two blades.",
    "twoHanded": true,
    "buyPrice": 188,
    "sellPrice": 94,
    "stats": {
      "attack": 20,
      "critChance": 9,
      "hp": 16
    }
  },

  "falchion": {
    "id": "falchion",
    "name": "⚔️ Falchion",
    "category": "weapon",
    "rarity": "uncommon",
    "weaponType": "sword",
    "description": "A single-edged sword.",
    "twoHanded": false,
    "buyPrice": 168,
    "sellPrice": 84,
    "stats": {
      "attack": 17,
      "critChance": 9,
      "defense": 2
    }
  },

  "poison_dagger_unc": {
    "id": "poison_dagger_unc",
    "name": "🗡️ Poison Dagger",
    "category": "weapon",
    "rarity": "uncommon",
    "weaponType": "dagger",
    "description": "Coated with weak poison.",
    "twoHanded": false,
    "buyPrice": 142,
    "sellPrice": 71,
    "stats": {
      "attack": 12,
      "critChance": 12,
      "agility": 5
    }
  },

  "recurve_bow": {
    "id": "recurve_bow",
    "name": "🏹 Recurve Bow",
    "category": "weapon",
    "rarity": "uncommon",
    "weaponType": "bow",
    "description": "A bow with curved limbs.",
    "twoHanded": true,
    "buyPrice": 162,
    "sellPrice": 81,
    "stats": {
      "attack": 16,
      "critChance": 11,
      "agility": 4
    }
  },

  "runic_staff": {
    "id": "runic_staff",
    "name": "🪄 Runic Staff",
    "category": "weapon",
    "rarity": "uncommon",
    "weaponType": "staff",
    "description": "Inscribed with ancient runes.",
    "twoHanded": true,
    "buyPrice": 175,
    "sellPrice": 87,
    "stats": {
      "attack": 15,
      "critChance": undefined,
      "magicalAtk": 14,
      "mana": 23
    }
  },

  "viking_axe": {
    "id": "viking_axe",
    "name": "🪓 Viking Axe",
    "category": "weapon",
    "rarity": "uncommon",
    "weaponType": "axe",
    "description": "A fearsome Norse weapon.",
    "twoHanded": true,
    "buyPrice": 182,
    "sellPrice": 91,
    "stats": {
      "attack": 19,
      "critChance": 6,
      "hp": 17
    }
  },


  "bronze_sword": {
    "id": "bronze_sword",
    "name": "⚔️ Bronze Sword",
    "category": "weapon",
    "rarity": "common",
    "weaponType": "sword",
    "description": "An ancient bronze blade, still sharp.",
    "twoHanded": false,
    "buyPrice": 55,
    "sellPrice": 27,
    "stats": {
      "attack": 9,
      "critChance": 3
    }
  },

  "short_bow": {
    "id": "short_bow",
    "name": "🏹 Short Bow",
    "category": "weapon",
    "rarity": "common",
    "weaponType": "bow",
    "description": "A compact bow for beginners.",
    "twoHanded": true,
    "buyPrice": 58,
    "sellPrice": 29,
    "stats": {
      "attack": 8,
      "critChance": 6,
      "agility": 2
    }
  },

  "copper_dagger": {
    "id": "copper_dagger",
    "name": "🗡️ Copper Dagger",
    "category": "weapon",
    "rarity": "common",
    "weaponType": "dagger",
    "description": "A lightweight copper blade.",
    "twoHanded": false,
    "buyPrice": 48,
    "sellPrice": 24,
    "stats": {
      "attack": 7,
      "critChance": 7,
      "agility": 3
    }
  },

  "oak_staff": {
    "id": "oak_staff",
    "name": "🪄 Oak Staff",
    "category": "weapon",
    "rarity": "common",
    "weaponType": "staff",
    "description": "A staff carved from ancient oak.",
    "twoHanded": true,
    "buyPrice": 52,
    "sellPrice": 26,
    "stats": {
      "attack": 6,
      "critChance": undefined,
      "magicalAtk": 4,
      "mana": 12
    }
  },

  "hand_axe": {
    "id": "hand_axe",
    "name": "🪓 Hand Axe",
    "category": "weapon",
    "rarity": "common",
    "weaponType": "axe",
    "description": "A small but deadly throwing axe.",
    "twoHanded": false,
    "buyPrice": 62,
    "sellPrice": 31,
    "stats": {
      "attack": 11,
      "critChance": 4
    }
  },

  "training_sword": {
    "id": "training_sword",
    "name": "⚔️ Training Sword",
    "category": "weapon",
    "rarity": "common",
    "weaponType": "sword",
    "description": "A blunt sword used for practice.",
    "twoHanded": false,
    "buyPrice": 45,
    "sellPrice": 22,
    "stats": {
      "attack": 6,
      "critChance": 2
    }
  },

  "hunting_knife": {
    "id": "hunting_knife",
    "name": "🗡️ Hunting Knife",
    "category": "weapon",
    "rarity": "common",
    "weaponType": "dagger",
    "description": "A versatile knife for hunting.",
    "twoHanded": false,
    "buyPrice": 50,
    "sellPrice": 25,
    "stats": {
      "attack": 7,
      "critChance": 8,
      "agility": 2
    }
  },

  "sling": {
    "id": "sling",
    "name": "🏹 Sling",
    "category": "weapon",
    "rarity": "common",
    "weaponType": "bow",
    "description": "A simple leather sling.",
    "twoHanded": false,
    "buyPrice": 54,
    "sellPrice": 27,
    "stats": {
      "attack": 9,
      "critChance": 5,
      "agility": 3
    }
  },

  "branch_staff": {
    "id": "branch_staff",
    "name": "🪄 Branch Staff",
    "category": "weapon",
    "rarity": "common",
    "weaponType": "staff",
    "description": "A sturdy tree branch.",
    "twoHanded": true,
    "buyPrice": 48,
    "sellPrice": 24,
    "stats": {
      "attack": 5,
      "critChance": undefined,
      "magicalAtk": 3,
      "mana": 8
    }
  },

  "lumber_axe": {
    "id": "lumber_axe",
    "name": "🪓 Lumber Axe",
    "category": "weapon",
    "rarity": "common",
    "weaponType": "axe",
    "description": "An axe meant for chopping wood.",
    "twoHanded": true,
    "buyPrice": 60,
    "sellPrice": 30,
    "stats": {
      "attack": 10,
      "critChance": 3
    }
  },

  "militia_sword": {
    "id": "militia_sword",
    "name": "⚔️ Militia Sword",
    "category": "weapon",
    "rarity": "common",
    "weaponType": "sword",
    "description": "Standard issue for town guards.",
    "twoHanded": false,
    "buyPrice": 53,
    "sellPrice": 26,
    "stats": {
      "attack": 8,
      "critChance": 4
    }
  },

  "bone_dagger": {
    "id": "bone_dagger",
    "name": "🗡️ Bone Dagger",
    "category": "weapon",
    "rarity": "common",
    "weaponType": "dagger",
    "description": "A dagger carved from monster bone.",
    "twoHanded": false,
    "buyPrice": 47,
    "sellPrice": 23,
    "stats": {
      "attack": 6,
      "critChance": 9,
      "agility": 3
    }
  },

  "crossbow": {
    "id": "crossbow",
    "name": "🏹 Crossbow",
    "category": "weapon",
    "rarity": "common",
    "weaponType": "bow",
    "description": "A mechanical bow with high power.",
    "twoHanded": true,
    "buyPrice": 64,
    "sellPrice": 32,
    "stats": {
      "attack": 11,
      "critChance": 4
    }
  },

  "willow_wand": {
    "id": "willow_wand",
    "name": "🪄 Willow Wand",
    "category": "weapon",
    "rarity": "common",
    "weaponType": "staff",
    "description": "A flexible willow wand.",
    "twoHanded": false,
    "buyPrice": 56,
    "sellPrice": 28,
    "stats": {
      "attack": 7,
      "critChance": undefined,
      "magicalAtk": 5,
      "mana": 10
    }
  },

  "cleaver": {
    "id": "cleaver",
    "name": "🪓 Cleaver",
    "category": "weapon",
    "rarity": "common",
    "weaponType": "axe",
    "description": "A heavy butcher's cleaver.",
    "twoHanded": false,
    "buyPrice": 66,
    "sellPrice": 33,
    "stats": {
      "attack": 12,
      "critChance": 2
    }
  },

  "scimitar": {
    "id": "scimitar",
    "name": "⚔️ Scimitar",
    "category": "weapon",
    "rarity": "common",
    "weaponType": "sword",
    "description": "A curved blade from the desert.",
    "twoHanded": false,
    "buyPrice": 57,
    "sellPrice": 28,
    "stats": {
      "attack": 9,
      "critChance": 5
    }
  },

  "throwing_knife": {
    "id": "throwing_knife",
    "name": "🗡️ Throwing Knife",
    "category": "weapon",
    "rarity": "common",
    "weaponType": "dagger",
    "description": "Balanced for throwing.",
    "twoHanded": false,
    "buyPrice": 46,
    "sellPrice": 23,
    "stats": {
      "attack": 5,
      "critChance": 10,
      "agility": 4
    }
  },

  "composite_bow": {
    "id": "composite_bow",
    "name": "🏹 Composite Bow",
    "category": "weapon",
    "rarity": "common",
    "weaponType": "bow",
    "description": "A bow made from multiple materials.",
    "twoHanded": true,
    "buyPrice": 61,
    "sellPrice": 30,
    "stats": {
      "attack": 10,
      "critChance": 7,
      "agility": 2
    }
  },

  "apprentice_wand": {
    "id": "apprentice_wand",
    "name": "🪄 Apprentice Wand",
    "category": "weapon",
    "rarity": "common",
    "weaponType": "staff",
    "description": "A wand for magic students.",
    "twoHanded": false,
    "buyPrice": 59,
    "sellPrice": 29,
    "stats": {
      "attack": 8,
      "critChance": undefined,
      "magicalAtk": 6,
      "mana": 11
    }
  },

  "woodcutter_axe": {
    "id": "woodcutter_axe",
    "name": "🪓 Woodcutter Axe",
    "category": "weapon",
    "rarity": "common",
    "weaponType": "axe",
    "description": "A well-balanced woodcutter's tool.",
    "twoHanded": true,
    "buyPrice": 63,
    "sellPrice": 31,
    "stats": {
      "attack": 11,
      "critChance": 3
    }
  },

  // ═══════════════════════════════════════════════════════
  // ARMOR - RARE SETS (10 sets x 4 pieces = 40 items)
  // WITH SET BONUSES (1 passive per set)
  // ═══════════════════════════════════════════════════════

  "crimson_plate_head": {
    "id": "crimson_plate_head",
    "name": "🪖 Crimson Plate Helmet",
    "category": "armor",
    "armorSlot": "head",
    "armorSet": "crimson_plate",
    "rarity": "rare",
    "description": "Head piece of the Crimson Plate set.",
    "buyPrice": 260,
    "sellPrice": 130,
    "stats": {
      "defense": 20,
      "hp": 65,
      "physicalDef": 15,
      "magicalDef": 11,
      "attack": 4
    },
    "setBonus": {
      "requiredPieces": 4,
      "passives": [
        {
          "id": "iron_skin",
          "name": "Iron Skin",
          "emoji": "🛡️",
          "effect": "defense_boost",
          "value": 5
        }
      ]
    }
  },

  "health_potion": {
    "id": "health_potion",
    "name": "🧪 Health Potion",
    "category": "consumable",
    "shopCategory": "consumables",
    "description": "Restores 80 HP instantly.",
    "buyPrice": 30,
    "sellPrice": 15,
    "consumable": true,
    "usableInBattle": true,
    "usableOutside": true,
    "target": "self",
    "effect": "heal",
    "value": 80,
    "battleMessage": "You drink a Health Potion and restore *80 HP*!"
  },
  "mega_potion": {
    "id": "mega_potion",
    "name": "🧪 Mega Potion",
    "category": "consumable",
    "shopCategory": "consumables",
    "description": "Restores 200 HP instantly.",
    "buyPrice": 80,
    "sellPrice": 40,
    "consumable": true,
    "usableInBattle": true,
    "usableOutside": true,
    "target": "self",
    "effect": "heal",
    "value": 200,
    "battleMessage": "You chug a Mega Potion and restore *200 HP*!"
  },
  "mana_potion": {
    "id": "mana_potion",
    "name": "💧 Mana Potion",
    "category": "consumable",
    "shopCategory": "consumables",
    "description": "Restores 60 mana instantly.",
    "buyPrice": 35,
    "sellPrice": 18,
    "consumable": true,
    "usableInBattle": true,
    "usableOutside": true,
    "target": "self",
    "effect": "mana_restore",
    "value": 60,
    "battleMessage": "You drink a Mana Potion and restore *60 mana*!"
  },
  "elixir": {
    "id": "elixir",
    "name": "✨ Elixir",
    "category": "consumable",
    "shopCategory": "consumables",
    "description": "Fully restores HP and mana. Very rare.",
    "buyPrice": 500,
    "sellPrice": 250,
    "consumable": true,
    "usableInBattle": true,
    "usableOutside": true,
    "target": "self",
    "effect": "full_restore",
    "value": 0,
    "battleMessage": "You drink the Elixir — *HP and Mana fully restored*!"
  },
  "antidote": {
    "id": "antidote",
    "name": "🩹 Antidote",
    "category": "consumable",
    "shopCategory": "consumables",
    "description": "Removes all negative status effects.",
    "buyPrice": 40,
    "sellPrice": 20,
    "consumable": true,
    "usableInBattle": true,
    "usableOutside": true,
    "target": "self",
    "effect": "cleanse",
    "value": 0,
    "battleMessage": "You use an Antidote — *all negative effects removed*!"
  },
  "dungeon_portal_scroll": {
    "id": "dungeon_portal_scroll",
    "name": "🌀 Dungeon Portal Scroll",
    "category": "utility",
    "shopCategory": "utility",
    "description": "Teleports you to a random dungeon entrance. Single use.",
    "buyPrice": 250,
    "sellPrice": 125,
    "consumable": true,
    "usableInBattle": false,
    "usableOutside": true,
    "target": "self",
    "effect": "dungeon_teleport",
    "value": 0,
    "battleMessage": null
  },
  "poison_bomb": {
    "id": "poison_bomb",
    "name": "💣 Poison Bomb",
    "category": "consumable",
    "shopCategory": "battle_items",
    "description": "Poisons enemy for 10 damage/turn for 5 turns.",
    "buyPrice": 50,
    "sellPrice": 25,
    "consumable": true,
    "usableInBattle": true,
    "usableOutside": false,
    "target": "enemy",
    "effect": "poison",
    "value": 10,
    "duration": 5,
    "battleMessage": "You hurl a Poison Bomb — *poisoned for 10 damage/turn*!"
  },
  "fire_flask": {
    "id": "fire_flask",
    "name": "🔥 Fire Flask",
    "category": "consumable",
    "shopCategory": "battle_items",
    "description": "Burns enemy for 12 damage/turn for 5 turns.",
    "buyPrice": 55,
    "sellPrice": 28,
    "consumable": true,
    "usableInBattle": true,
    "usableOutside": false,
    "target": "enemy",
    "effect": "burn",
    "value": 12,
    "duration": 5,
    "battleMessage": "You smash a Fire Flask — *burning for 12 damage/turn*!"
  },
  "smoke_grenade": {
    "id": "smoke_grenade",
    "name": "💨 Smoke Grenade",
    "category": "consumable",
    "shopCategory": "battle_items",
    "description": "Increases evasion by 35% for 5 turns.",
    "buyPrice": 45,
    "sellPrice": 22,
    "consumable": true,
    "usableInBattle": true,
    "usableOutside": false,
    "target": "self",
    "effect": "evasion_buff",
    "value": 35,
    "duration": 5,
    "battleMessage": "You throw a Smoke Grenade — *evasion +35%*!"
  },
  "stun_grenade": {
    "id": "stun_grenade",
    "name": "⚡ Stun Grenade",
    "category": "consumable",
    "shopCategory": "battle_items",
    "description": "Stuns enemy for 1 turn. Doesn't work on bosses.",
    "buyPrice": 60,
    "sellPrice": 30,
    "consumable": true,
    "usableInBattle": true,
    "usableOutside": false,
    "target": "enemy",
    "effect": "stun",
    "value": 1,
    "duration": 1,
    "battleMessage": "You throw a Stun Grenade — *stunned for 1 turn*!"
  },
  "regen_herb": {
    "id": "regen_herb",
    "name": "🌿 Regen Herb",
    "category": "consumable",
    "shopCategory": "battle_items",
    "description": "Regenerates 15 HP/turn for 5 turns.",
    "buyPrice": 45,
    "sellPrice": 22,
    "consumable": true,
    "usableInBattle": true,
    "usableOutside": false,
    "target": "self",
    "effect": "regen",
    "value": 15,
    "duration": 5,
    "battleMessage": "You chew a Regen Herb — *regenerating 15 HP/turn*!"
  },

  "minor_vitals_potion": {
    "id": "minor_vitals_potion",
    "name": "🧪 Minor Vitals Potion",
    "category": "consumable",
    "shopCategory": "consumables",
    "description": "Craftable tonic that restores a modest amount of HP. Works in and out of battle.",
    "buyPrice": 24,
    "sellPrice": 12,
    "consumable": true,
    "usableInBattle": true,
    "usableOutside": true,
    "target": "self",
    "effect": "heal",
    "value": 55,
    "battleMessage": "You drink a Minor Vitals Potion and restore *55 HP*!"
  },
  "great_mana_draught": {
    "id": "great_mana_draught",
    "name": "💧 Great Mana Draught",
    "category": "consumable",
    "shopCategory": "consumables",
    "description": "Concentrated mana tonic for long hunts or ranked PvP.",
    "buyPrice": 55,
    "sellPrice": 28,
    "consumable": true,
    "usableInBattle": true,
    "usableOutside": true,
    "target": "self",
    "effect": "mana_restore",
    "value": 95,
    "battleMessage": "You drink a Great Mana Draught and restore *95 mana*!"
  },
  "wildberry_jam": {
    "id": "wildberry_jam",
    "name": "🫐 Wildberry Jam",
    "category": "consumable",
    "shopCategory": "consumables",
    "description": "Field ration; restores HP. Safe to use anywhere.",
    "buyPrice": 18,
    "sellPrice": 9,
    "consumable": true,
    "usableInBattle": true,
    "usableOutside": true,
    "target": "self",
    "effect": "heal",
    "value": 38,
    "battleMessage": "You eat Wildberry Jam and restore *38 HP*!"
  },
  "sting_balm": {
    "id": "sting_balm",
    "name": "🩹 Sting Balm",
    "category": "consumable",
    "shopCategory": "consumables",
    "description": "Rub-on salve that cleanses poisons and burns from venomous foes.",
    "buyPrice": 35,
    "sellPrice": 17,
    "consumable": true,
    "usableInBattle": true,
    "usableOutside": true,
    "target": "self",
    "effect": "cleanse",
    "value": 0,
    "battleMessage": "You apply Sting Balm — *negative effects cleansed*!"
  },
  "cobra_cracker": {
    "id": "cobra_cracker",
    "name": "☠️ Cobra Cracker",
    "category": "consumable",
    "shopCategory": "battle_items",
    "description": "Throwable pouch that poisons foes (hunt & PvP).",
    "buyPrice": 48,
    "sellPrice": 24,
    "consumable": true,
    "usableInBattle": true,
    "usableOutside": false,
    "target": "enemy",
    "effect": "poison",
    "value": 8,
    "duration": 4,
    "battleMessage": "You toss a Cobra Cracker — *poison 8/turn for 4 turns*!"
  },
  "ember_jar": {
    "id": "ember_jar",
    "name": "🔥 Ember Jar",
    "category": "consumable",
    "shopCategory": "battle_items",
    "description": "Shatters on impact, igniting the target.",
    "buyPrice": 52,
    "sellPrice": 26,
    "consumable": true,
    "usableInBattle": true,
    "usableOutside": false,
    "target": "enemy",
    "effect": "burn",
    "value": 9,
    "duration": 4,
    "battleMessage": "You smash an Ember Jar — *burn 9/turn for 4 turns*!"
  },
  "mist_charm": {
    "id": "mist_charm",
    "name": "💨 Mist Charm",
    "category": "consumable",
    "shopCategory": "battle_items",
    "description": "Shrouds you in mist, sharply raising evasion.",
    "buyPrice": 46,
    "sellPrice": 23,
    "consumable": true,
    "usableInBattle": true,
    "usableOutside": false,
    "target": "self",
    "effect": "evasion_buff",
    "value": 28,
    "duration": 4,
    "battleMessage": "You break a Mist Charm — *evasion +28% for 4 turns*!"
  },
  "second_wind_tonic": {
    "id": "second_wind_tonic",
    "name": "🌿 Second Wind Tonic",
    "category": "consumable",
    "shopCategory": "battle_items",
    "description": "Slow HP regeneration during tough fights.",
    "buyPrice": 44,
    "sellPrice": 22,
    "consumable": true,
    "usableInBattle": true,
    "usableOutside": false,
    "target": "self",
    "effect": "regen",
    "value": 12,
    "duration": 4,
    "battleMessage": "You drink Second Wind Tonic — *regenerating 12 HP/turn*!"
  },
  "hunters_jerky": {
    "id": "hunters_jerky",
    "name": "🥩 Hunter's Jerky",
    "category": "consumable",
    "shopCategory": "consumables",
    "description": "Dried meat for the road; restores HP in or out of combat.",
    "buyPrice": 16,
    "sellPrice": 8,
    "consumable": true,
    "usableInBattle": true,
    "usableOutside": true,
    "target": "self",
    "effect": "heal",
    "value": 28,
    "battleMessage": "You chew Hunter's Jerky and restore *28 HP*!"
  },
  "mana_shard_tonic": {
    "id": "mana_shard_tonic",
    "name": "🔷 Mana Shard Tonic",
    "category": "consumable",
    "shopCategory": "consumables",
    "description": "Quick sip of mana; usable during duels or exploration.",
    "buyPrice": 28,
    "sellPrice": 14,
    "consumable": true,
    "usableInBattle": true,
    "usableOutside": true,
    "target": "self",
    "effect": "mana_restore",
    "value": 40,
    "battleMessage": "You drink Mana Shard Tonic and restore *40 mana*!"
  },
  "fortifying_draught": {
    "id": "fortifying_draught",
    "name": "🛡️ Fortifying Draught",
    "category": "consumable",
    "shopCategory": "battle_items",
    "description": "Steady regeneration for extended brawls.",
    "buyPrice": 42,
    "sellPrice": 21,
    "consumable": true,
    "usableInBattle": true,
    "usableOutside": false,
    "target": "self",
    "effect": "regen",
    "value": 8,
    "duration": 5,
    "battleMessage": "You drink a Fortifying Draught — *regenerating 8 HP/turn*!"
  },

  "basic_rod": {
    "id": "basic_rod",
    "name": "🎣 Basic Rod",
    "category": "tool",
    "shopCategory": "tools",
    "description": "A simple fishing rod. Required for fishing.",
    "buyPrice": 50,
    "sellPrice": 25,
    "consumable": false,
    "usableInBattle": false,
    "usableOutside": false
  },
  "iron_rod": {
    "id": "iron_rod",
    "name": "🎣 Iron Rod",
    "category": "tool",
    "shopCategory": "tools",
    "description": "Better fishing rod. Increases rare fish chance.",
    "buyPrice": 200,
    "sellPrice": 100,
    "consumable": false,
    "usableInBattle": false,
    "usableOutside": false
  },
  "basic_axe": {
    "id": "basic_axe",
    "name": "🪓 Basic Axe",
    "category": "tool",
    "shopCategory": "tools",
    "description": "A simple axe. Required for chopping wood.",
    "buyPrice": 50,
    "sellPrice": 25,
    "consumable": false,
    "usableInBattle": false,
    "usableOutside": false
  },
  "basic_pickaxe": {
    "id": "basic_pickaxe",
    "name": "⛏️ Basic Pickaxe",
    "category": "tool",
    "shopCategory": "tools",
    "description": "A simple pickaxe. Required for mining.",
    "buyPrice": 50,
    "sellPrice": 25,
    "consumable": false,
    "usableInBattle": false,
    "usableOutside": false
  },
  "iron_pickaxe": {
    "id": "iron_pickaxe",
    "name": "⛏️ Iron Pickaxe",
    "category": "tool",
    "shopCategory": "tools",
    "description": "Sturdy pickaxe. Required for mining.",
    "buyPrice": 75,
    "sellPrice": 38,
    "consumable": false,
    "usableInBattle": false,
    "usableOutside": false
  },
  "gathering_basket": {
    "id": "gathering_basket",
    "name": "🧺 Gathering Basket",
    "category": "tool",
    "shopCategory": "tools",
    "description": "Increases foraging yield by 20%.",
    "buyPrice": 100,
    "sellPrice": 50,
    "consumable": false,
    "usableInBattle": false,
    "usableOutside": false
  },
  "town_portal": {
    "id": "town_portal",
    "name": "🌀 Town Portal",
    "category": "utility",
    "shopCategory": "utility",
    "description": "Teleports to Starter Village instantly.",
    "buyPrice": 100,
    "sellPrice": 50,
    "consumable": true,
    "usableInBattle": false,
    "usableOutside": true,
    "target": "self",
    "effect": "teleport",
    "value": "starter_village"
  },
  "location_stone": {
    "id": "location_stone",
    "name": "🪨 Location Stone",
    "category": "utility",
    "shopCategory": "utility",
    "description": "Teleports to any unlocked location.",
    "buyPrice": 200,
    "sellPrice": 100,
    "consumable": true,
    "usableInBattle": false,
    "usableOutside": true,
    "target": "self",
    "effect": "teleport_any",
    "value": null
  },
  "escape_rope": {
    "id": "escape_rope",
    "name": "🪢 Escape Rope",
    "category": "utility",
    "shopCategory": "utility",
    "description": "Instantly escapes battle. Doesn't work on bosses.",
    "buyPrice": 80,
    "sellPrice": 40,
    "consumable": true,
    "usableInBattle": true,
    "usableOutside": false,
    "target": "self",
    "effect": "escape",
    "value": 0,
    "battleMessage": "You use an Escape Rope and *flee instantly*!"
  },
  "bag_expansion": {
    "id": "bag_expansion",
    "name": "🎒 Bag Expansion",
    "category": "utility",
    "shopCategory": "utility",
    "description": "Increases inventory capacity by 10 slots.",
    "buyPrice": 500,
    "sellPrice": 250,
    "consumable": true,
    "usableInBattle": false,
    "usableOutside": true,
    "target": "self",
    "effect": "expand_inventory",
    "value": 10
  },
  "skill_reset_tome": {
    "id": "skill_reset_tome",
    "name": "📖 Skill Reset Tome",
    "category": "utility",
    "shopCategory": "utility",
    "description": "Resets all skill points for reallocation.",
    "buyPrice": 1000,
    "sellPrice": 500,
    "consumable": true,
    "usableInBattle": false,
    "usableOutside": true,
    "target": "self",
    "effect": "reset_skills",
    "value": 0
  },
  "iron_bar": {
    "id": "iron_bar",
    "name": "🔩 Iron Bar",
    "category": "material",
    "shopCategory": "materials",
    "description": "Smelted iron. Used in crafting.",
    "buyPrice": 25,
    "sellPrice": 12,
    "consumable": false,
    "usableInBattle": false,
    "usableOutside": false
  },
  "gold_bar": {
    "id": "gold_bar",
    "name": "🟡 Gold Bar",
    "category": "material",
    "shopCategory": "materials",
    "description": "Refined gold. Used in rare crafting.",
    "buyPrice": 100,
    "sellPrice": 50,
    "consumable": false,
    "usableInBattle": false,
    "usableOutside": false
  },
  "oak_plank": {
    "id": "oak_plank",
    "name": "🪵 Oak Plank",
    "category": "material",
    "shopCategory": "materials",
    "description": "Processed oak wood. Used in crafting.",
    "buyPrice": 15,
    "sellPrice": 7,
    "consumable": false,
    "usableInBattle": false,
    "usableOutside": false
  },
  "leather": {
    "id": "leather",
    "name": "🦌 Leather",
    "category": "material",
    "shopCategory": "materials",
    "description": "Tanned leather. Used for armor crafting.",
    "buyPrice": 20,
    "sellPrice": 10,
    "consumable": false,
    "usableInBattle": false,
    "usableOutside": false
  },
  "cloth": {
    "id": "cloth",
    "name": "🧵 Cloth",
    "category": "material",
    "shopCategory": "materials",
    "description": "Woven cloth. Used for light armor.",
    "buyPrice": 10,
    "sellPrice": 5,
    "consumable": false,
    "usableInBattle": false,
    "usableOutside": false
  },
  "deer_hide": {
    "id": "deer_hide",
    "name": "🦌 Deer Hide",
    "category": "material",
    "description": "Soft deer hide.",
    "buyPrice": 0,
    "sellPrice": 6,
    "consumable": false
  },
  "acorn": {
    "id": "acorn",
    "name": "🌰 Acorn",
    "category": "material",
    "description": "A small acorn.",
    "buyPrice": 0,
    "sellPrice": 1,
    "consumable": false
  },
  "crab_shell": {
    "id": "crab_shell",
    "name": "🦀 Crab Shell",
    "category": "material",
    "description": "Hard crab shell.",
    "buyPrice": 0,
    "sellPrice": 4,
    "consumable": false
  },
  "fresh_fish": {
    "id": "fresh_fish",
    "name": "🐟 Fresh Fish",
    "category": "material",
    "description": "Freshly caught fish.",
    "buyPrice": 0,
    "sellPrice": 5,
    "consumable": false
  },
  "frog_skin": {
    "id": "frog_skin",
    "name": "🐸 Frog Skin",
    "category": "material",
    "description": "Slippery frog skin.",
    "buyPrice": 0,
    "sellPrice": 3,
    "consumable": false
  },
  "rabbit_fur": {
    "id": "rabbit_fur",
    "name": "🐰 Rabbit Fur",
    "category": "material",
    "description": "Soft rabbit fur.",
    "buyPrice": 0,
    "sellPrice": 3,
    "consumable": false
  },
  "fox_tail": {
    "id": "fox_tail",
    "name": "🦊 Fox Tail",
    "category": "material",
    "description": "Bushy fox tail.",
    "buyPrice": 0,
    "sellPrice": 5,
    "consumable": false
  },
  "wolf_fang": {
    "id": "wolf_fang",
    "name": "🐺 Wolf Fang",
    "category": "material",
    "description": "Sharp wolf fang.",
    "buyPrice": 0,
    "sellPrice": 8,
    "consumable": false
  },
  "yeti_fur": {
    "id": "yeti_fur",
    "name": "❄️ Yeti Fur",
    "category": "material",
    "description": "Thick yeti fur.",
    "buyPrice": 0,
    "sellPrice": 25,
    "consumable": false
  },
  "ice_crystal": {
    "id": "ice_crystal",
    "name": "🧊 Ice Crystal",
    "category": "material",
    "description": "Frozen crystal.",
    "buyPrice": 0,
    "sellPrice": 30,
    "consumable": false
  },
  "elemental_essence": {
    "id": "elemental_essence",
    "name": "✨ Elemental Essence",
    "category": "material",
    "description": "Pure elemental energy.",
    "buyPrice": 0,
    "sellPrice": 35,
    "consumable": false
  },
  "frozen_heart": {
    "id": "frozen_heart",
    "name": "💙 Frozen Heart",
    "category": "material",
    "description": "Heart of ice.",
    "buyPrice": 0,
    "sellPrice": 40,
    "consumable": false
  },
  "giant_bone": {
    "id": "giant_bone",
    "name": "🦴 Giant Bone",
    "category": "material",
    "description": "Massive bone.",
    "buyPrice": 0,
    "sellPrice": 28,
    "consumable": false
  },
  "frost_axe": {
    "id": "frost_axe",
    "name": "🪓 Frost Axe",
    "category": "material",
    "description": "Frozen weapon.",
    "buyPrice": 0,
    "sellPrice": 50,
    "consumable": false
  },
  "worm_scale": {
    "id": "worm_scale",
    "name": "🪱 Worm Scale",
    "category": "material",
    "description": "Tough worm scale.",
    "buyPrice": 0,
    "sellPrice": 26,
    "consumable": false
  },
  "desert_pearl": {
    "id": "desert_pearl",
    "name": "🏜️ Desert Pearl",
    "category": "material",
    "description": "Rare desert gem.",
    "buyPrice": 0,
    "sellPrice": 45,
    "consumable": false
  },
  "scorpion_venom": {
    "id": "scorpion_venom",
    "name": "🦂 Scorpion Venom",
    "category": "material",
    "description": "Deadly venom.",
    "buyPrice": 0,
    "sellPrice": 32,
    "consumable": false
  },
  "fire_gland": {
    "id": "fire_gland",
    "name": "🔥 Fire Gland",
    "category": "material",
    "description": "Produces fire.",
    "buyPrice": 0,
    "sellPrice": 38,
    "consumable": false
  },
  "drake_scale": {
    "id": "drake_scale",
    "name": "🐉 Drake Scale",
    "category": "material",
    "description": "Dragon-like scale.",
    "buyPrice": 0,
    "sellPrice": 42,
    "consumable": false
  },
  "dragon_tooth": {
    "id": "dragon_tooth",
    "name": "🦷 Dragon Tooth",
    "category": "material",
    "description": "Sharp dragon tooth.",
    "buyPrice": 0,
    "sellPrice": 48,
    "consumable": false
  },
  "sky_scale": {
    "id": "sky_scale",
    "name": "☁️ Sky Scale",
    "category": "material",
    "description": "Ethereal scale.",
    "buyPrice": 0,
    "sellPrice": 55,
    "consumable": false
  },
  "serpent_venom": {
    "id": "serpent_venom",
    "name": "🐍 Serpent Venom",
    "category": "material",
    "description": "Potent venom.",
    "buyPrice": 0,
    "sellPrice": 58,
    "consumable": false
  },
  "cloud_essence": {
    "id": "cloud_essence",
    "name": "☁️ Cloud Essence",
    "category": "material",
    "description": "Essence of clouds.",
    "buyPrice": 0,
    "sellPrice": 60,
    "consumable": false
  },
  "sky_crystal": {
    "id": "sky_crystal",
    "name": "💎 Sky Crystal",
    "category": "material",
    "description": "Crystal from sky.",
    "buyPrice": 0,
    "sellPrice": 62,
    "consumable": false
  },
  "titan_stone": {
    "id": "titan_stone",
    "name": "🪨 Titan Stone",
    "category": "material",
    "description": "Incredibly hard stone.",
    "buyPrice": 0,
    "sellPrice": 65,
    "consumable": false
  },
  "horror_claw": {
    "id": "horror_claw",
    "name": "👹 Horror Claw",
    "category": "material",
    "description": "Terrifying claw.",
    "buyPrice": 0,
    "sellPrice": 58,
    "consumable": false
  },
  "storm_essence": {
    "id": "storm_essence",
    "name": "⚡ Storm Essence",
    "category": "material",
    "description": "Essence of storms.",
    "buyPrice": 0,
    "sellPrice": 63,
    "consumable": false
  },
  "lightning_shard": {
    "id": "lightning_shard",
    "name": "⚡ Lightning Shard",
    "category": "material",
    "description": "Solidified lightning.",
    "buyPrice": 0,
    "sellPrice": 68,
    "consumable": false
  },
  "thunder_heart": {
    "id": "thunder_heart",
    "name": "💛 Thunder Heart",
    "category": "material",
    "description": "Heart of thunder.",
    "buyPrice": 0,
    "sellPrice": 72,
    "consumable": false
  },
  "death_blade": {
    "id": "death_blade",
    "name": "💀 Death Blade",
    "category": "material",
    "description": "Blade of death.",
    "buyPrice": 0,
    "sellPrice": 85,
    "consumable": false
  },
  "cursed_armor": {
    "id": "cursed_armor",
    "name": "🛡️ Cursed Armor",
    "category": "material",
    "description": "Armor piece.",
    "buyPrice": 0,
    "sellPrice": 88,
    "consumable": false
  },
  "phantom_essence": {
    "id": "phantom_essence",
    "name": "👻 Phantom Essence",
    "category": "material",
    "description": "Ghostly essence.",
    "buyPrice": 0,
    "sellPrice": 90,
    "consumable": false
  },
  "soul_gem": {
    "id": "soul_gem",
    "name": "💎 Soul Gem",
    "category": "material",
    "description": "Contains souls.",
    "buyPrice": 0,
    "sellPrice": 95,
    "consumable": false
  },
  "reaper_scythe": {
    "id": "reaper_scythe",
    "name": "💀 Reaper Scythe",
    "category": "material",
    "description": "Death's weapon.",
    "buyPrice": 0,
    "sellPrice": 100,
    "consumable": false
  },
  "soul_crystal": {
    "id": "soul_crystal",
    "name": "💎 Soul Crystal",
    "category": "material",
    "description": "Crystallized soul.",
    "buyPrice": 0,
    "sellPrice": 98,
    "consumable": false
  },
  "crystal_heart": {
    "id": "crystal_heart",
    "name": "💎 Crystal Heart",
    "category": "material",
    "description": "Dragon's heart.",
    "buyPrice": 0,
    "sellPrice": 105,
    "consumable": false
  },
  "dragon_gem": {
    "id": "dragon_gem",
    "name": "💎 Dragon Gem",
    "category": "material",
    "description": "Priceless gem.",
    "buyPrice": 0,
    "sellPrice": 110,
    "consumable": false
  },
  "void_essence": {
    "id": "void_essence",
    "name": "🌀 Void Essence",
    "category": "material",
    "description": "Essence of void.",
    "buyPrice": 0,
    "sellPrice": 102,
    "consumable": false
  },
  "chaos_shard": {
    "id": "chaos_shard",
    "name": "💥 Chaos Shard",
    "category": "material",
    "description": "Pure chaos.",
    "buyPrice": 0,
    "sellPrice": 108,
    "consumable": false
  },
  "cosmic_core": {
    "id": "cosmic_core",
    "name": "🌌 Cosmic Core",
    "category": "material",
    "description": "Core of cosmos.",
    "buyPrice": 0,
    "sellPrice": 115,
    "consumable": false
  },
  "entity_fragment": {
    "id": "entity_fragment",
    "name": "✨ Entity Fragment",
    "category": "material",
    "description": "Fragment of entity.",
    "buyPrice": 0,
    "sellPrice": 112,
    "consumable": false
  },
  
  // Additional enemy drops
  "chicken_feather": {
    "id": "chicken_feather",
    "name": "🪶 Chicken Feather",
    "category": "material",
    "description": "Soft chicken feather.",
    "buyPrice": 0,
    "sellPrice": 2,
    "consumable": false
  },
  "frog_leg": {
    "id": "frog_leg",
    "name": "🦵 Frog Leg",
    "category": "material",
    "description": "Edible frog leg.",
    "buyPrice": 0,
    "sellPrice": 4,
    "consumable": false
  },
  "fish_scale": {
    "id": "fish_scale",
    "name": "🐟 Fish Scale",
    "category": "material",
    "description": "Shiny fish scale.",
    "buyPrice": 0,
    "sellPrice": 2,
    "consumable": false
  },
  "rusty_dagger": {
    "id": "rusty_dagger",
    "name": "🗡️ Rusty Dagger",
    "category": "material",
    "description": "Old rusty dagger.",
    "buyPrice": 0,
    "sellPrice": 8,
    "consumable": false
  },
  "stolen_coin": {
    "id": "stolen_coin",
    "name": "🪙 Stolen Coin",
    "category": "material",
    "description": "A stolen coin.",
    "buyPrice": 0,
    "sellPrice": 1,
    "consumable": false
  },
  "rat_tail": {
    "id": "rat_tail",
    "name": "🐀 Rat Tail",
    "category": "material",
    "description": "Disgusting rat tail.",
    "buyPrice": 0,
    "sellPrice": 2,
    "consumable": false
  },
  "honey": {
    "id": "honey",
    "name": "🍯 Honey",
    "category": "material",
    "description": "Sweet honey.",
    "buyPrice": 0,
    "sellPrice": 10,
    "consumable": false
  },
  "butterfly_wing": {
    "id": "butterfly_wing",
    "name": "🦋 Butterfly Wing",
    "category": "material",
    "description": "Delicate butterfly wing.",
    "buyPrice": 0,
    "sellPrice": 5,
    "consumable": false
  },
  "ladybug_shell": {
    "id": "ladybug_shell",
    "name": "🐞 Ladybug Shell",
    "category": "material",
    "description": "Red ladybug shell.",
    "buyPrice": 0,
    "sellPrice": 3,
    "consumable": false
  },
  "goblin_ear": {
    "id": "goblin_ear",
    "name": "👂 Goblin Ear",
    "category": "material",
    "description": "Pointy goblin ear.",
    "buyPrice": 0,
    "sellPrice": 7,
    "consumable": false
  },
  "troll_hide": {
    "id": "troll_hide",
    "name": "🧌 Troll Hide",
    "category": "material",
    "description": "Tough troll hide.",
    "buyPrice": 0,
    "sellPrice": 12,
    "consumable": false
  },
  "bat_wing": {
    "id": "bat_wing",
    "name": "🦇 Bat Wing",
    "category": "material",
    "description": "Leathery bat wing.",
    "buyPrice": 0,
    "sellPrice": 6,
    "consumable": false
  },
  "crab_claw": {
    "id": "crab_claw",
    "name": "🦀 Crab Claw",
    "category": "material",
    "description": "Sharp crab claw.",
    "buyPrice": 0,
    "sellPrice": 5,
    "consumable": false
  },
  "seagull_feather": {
    "id": "seagull_feather",
    "name": "🪶 Seagull Feather",
    "category": "material",
    "description": "White seagull feather.",
    "buyPrice": 0,
    "sellPrice": 3,
    "consumable": false
  },
  "starfish_arm": {
    "id": "starfish_arm",
    "name": "⭐ Starfish Arm",
    "category": "material",
    "description": "Starfish arm.",
    "buyPrice": 0,
    "sellPrice": 4,
    "consumable": false
  },
  "turtle_shell": {
    "id": "turtle_shell",
    "name": "🐢 Turtle Shell",
    "category": "material",
    "description": "Hard turtle shell.",
    "buyPrice": 0,
    "sellPrice": 8,
    "consumable": false
  },
  "owl_feather": {
    "id": "owl_feather",
    "name": "🦉 Owl Feather",
    "category": "material",
    "description": "Soft owl feather.",
    "buyPrice": 0,
    "sellPrice": 6,
    "consumable": false
  },
  "raccoon_fur": {
    "id": "raccoon_fur",
    "name": "🦝 Raccoon Fur",
    "category": "material",
    "description": "Striped raccoon fur.",
    "buyPrice": 0,
    "sellPrice": 5,
    "consumable": false
  },
  "snake_skin": {
    "id": "snake_skin",
    "name": "🐍 Snake Skin",
    "category": "material",
    "description": "Shed snake skin.",
    "buyPrice": 0,
    "sellPrice": 7,
    "consumable": false
  },
  "slug_slime": {
    "id": "slug_slime",
    "name": "🐌 Slug Slime",
    "category": "material",
    "description": "Sticky slug slime.",
    "buyPrice": 0,
    "sellPrice": 2,
    "consumable": false
  },
  "snail_shell": {
    "id": "snail_shell",
    "name": "🐌 Snail Shell",
    "category": "material",
    "description": "Spiral snail shell.",
    "buyPrice": 0,
    "sellPrice": 3,
    "consumable": false
  },
  "beetle_shell": {
    "id": "beetle_shell",
    "name": "🪲 Beetle Shell",
    "category": "material",
    "description": "Hard beetle shell.",
    "buyPrice": 0,
    "sellPrice": 4,
    "consumable": false
  },
  "bear_claw": {
    "id": "bear_claw",
    "name": "🐻 Bear Claw",
    "category": "material",
    "description": "Sharp bear claw.",
    "buyPrice": 0,
    "sellPrice": 10,
    "consumable": false
  },
  "boar_tusk": {
    "id": "boar_tusk",
    "name": "🐗 Boar Tusk",
    "category": "material",
    "description": "Curved boar tusk.",
    "buyPrice": 0,
    "sellPrice": 9,
    "consumable": false
  },
  "hedgehog_spine": {
    "id": "hedgehog_spine",
    "name": "🦔 Hedgehog Spine",
    "category": "material",
    "description": "Sharp hedgehog spine.",
    "buyPrice": 0,
    "sellPrice": 4,
    "consumable": false
  },
  "lizard_tail": {
    "id": "lizard_tail",
    "name": "🦎 Lizard Tail",
    "category": "material",
    "description": "Detached lizard tail.",
    "buyPrice": 0,
    "sellPrice": 3,
    "consumable": false
  },
  "scorpion_stinger": {
    "id": "scorpion_stinger",
    "name": "🦂 Scorpion Stinger",
    "category": "material",
    "description": "Venomous stinger.",
    "buyPrice": 0,
    "sellPrice": 8,
    "consumable": false
  },
  "stone_shell": {
    "id": "stone_shell",
    "name": "🪨 Stone Shell",
    "category": "material",
    "description": "Rock-hard shell.",
    "buyPrice": 0,
    "sellPrice": 7,
    "consumable": false
  },
  "hawk_talon": {
    "id": "hawk_talon",
    "name": "🦅 Hawk Talon",
    "category": "material",
    "description": "Sharp hawk talon.",
    "buyPrice": 0,
    "sellPrice": 9,
    "consumable": false
  },
  "eagle_feather": {
    "id": "eagle_feather",
    "name": "🦅 Eagle Feather",
    "category": "material",
    "description": "Majestic eagle feather.",
    "buyPrice": 0,
    "sellPrice": 12,
    "consumable": false
  },
  "vulture_beak": {
    "id": "vulture_beak",
    "name": "🦅 Vulture Beak",
    "category": "material",
    "description": "Curved vulture beak.",
    "buyPrice": 0,
    "sellPrice": 8,
    "consumable": false
  },
  "hardwood_beak": {
    "id": "hardwood_beak",
    "name": "🦜 Hardwood Beak",
    "category": "material",
    "description": "Strong woodpecker beak.",
    "buyPrice": 0,
    "sellPrice": 6,
    "consumable": false
  },
  "giant_acorn": {
    "id": "giant_acorn",
    "name": "🌰 Giant Acorn",
    "category": "material",
    "description": "Unusually large acorn.",
    "buyPrice": 0,
    "sellPrice": 5,
    "consumable": false
  },
  "spirit_essence": {
    "id": "spirit_essence",
    "name": "👻 Spirit Essence",
    "category": "material",
    "description": "Ethereal spirit essence.",
    "buyPrice": 0,
    "sellPrice": 15,
    "consumable": false
  },
  "bat_fang": {
    "id": "bat_fang",
    "name": "🦇 Bat Fang",
    "category": "material",
    "description": "Tiny bat fang.",
    "buyPrice": 0,
    "sellPrice": 5,
    "consumable": false
  },
  "spider_silk": {
    "id": "spider_silk",
    "name": "🕷️ Spider Silk",
    "category": "material",
    "description": "Strong spider silk.",
    "buyPrice": 0,
    "sellPrice": 8,
    "consumable": false
  },
  "rat_tooth": {
    "id": "rat_tooth",
    "name": "🦷 Rat Tooth",
    "category": "material",
    "description": "Sharp rat tooth.",
    "buyPrice": 0,
    "sellPrice": 2,
    "consumable": false
  },
  "spirit_orb": {
    "id": "spirit_orb",
    "name": "🔮 Spirit Orb",
    "category": "material",
    "description": "Glowing spirit orb.",
    "buyPrice": 0,
    "sellPrice": 18,
    "consumable": false
  },
  "mystic_fur": {
    "id": "mystic_fur",
    "name": "✨ Mystic Fur",
    "category": "material",
    "description": "Magical fur.",
    "buyPrice": 0,
    "sellPrice": 14,
    "consumable": false
  },
  "prayer_beads": {
    "id": "prayer_beads",
    "name": "📿 Prayer Beads",
    "category": "material",
    "description": "Sacred prayer beads.",
    "buyPrice": 0,
    "sellPrice": 20,
    "consumable": false
  },
  
  "abyssal_gem": {
    "id": "abyssal_gem",
    "name": "💎 Abyssal Gem",
    "category": "material",
    "description": "Abyssal Gem material.",
    "buyPrice": 0,
    "sellPrice": 22,
    "consumable": false
  },
  "ancient_bandage": {
    "id": "ancient_bandage",
    "name": "💎 Ancient Bandage",
    "category": "material",
    "description": "Ancient Bandage material.",
    "buyPrice": 0,
    "sellPrice": 34,
    "consumable": false
  },
  "ancient_gem": {
    "id": "ancient_gem",
    "name": "💎 Ancient Gem",
    "category": "material",
    "description": "Ancient Gem material.",
    "buyPrice": 0,
    "sellPrice": 26,
    "consumable": false
  },
  "ancient_relic": {
    "id": "ancient_relic",
    "name": "💎 Ancient Relic",
    "category": "material",
    "description": "Ancient Relic material.",
    "buyPrice": 0,
    "sellPrice": 50,
    "consumable": false
  },
  "ancient_stone": {
    "id": "ancient_stone",
    "name": "💎 Ancient Stone",
    "category": "material",
    "description": "Ancient Stone material.",
    "buyPrice": 0,
    "sellPrice": 30,
    "consumable": false
  },
  "ancient_wood": {
    "id": "ancient_wood",
    "name": "💎 Ancient Wood",
    "category": "material",
    "description": "Ancient Wood material.",
    "buyPrice": 0,
    "sellPrice": 51,
    "consumable": false
  },
  "angel_wing": {
    "id": "angel_wing",
    "name": "💎 Angel Wing",
    "category": "material",
    "description": "Angel Wing material.",
    "buyPrice": 0,
    "sellPrice": 24,
    "consumable": false
  },
  "astral_scale": {
    "id": "astral_scale",
    "name": "💎 Astral Scale",
    "category": "material",
    "description": "Astral Scale material.",
    "buyPrice": 0,
    "sellPrice": 29,
    "consumable": false
  },
  "bone_scale": {
    "id": "bone_scale",
    "name": "💎 Bone Scale",
    "category": "material",
    "description": "Bone Scale material.",
    "buyPrice": 0,
    "sellPrice": 68,
    "consumable": false
  },
  "celestial_armor": {
    "id": "celestial_armor",
    "name": "💎 Celestial Armor",
    "category": "material",
    "description": "Celestial Armor material.",
    "buyPrice": 0,
    "sellPrice": 42,
    "consumable": false
  },
  "chaos_essence": {
    "id": "chaos_essence",
    "name": "💎 Chaos Essence",
    "category": "material",
    "description": "Chaos Essence material.",
    "buyPrice": 0,
    "sellPrice": 38,
    "consumable": false
  },
  "colossus_fragment": {
    "id": "colossus_fragment",
    "name": "💎 Colossus Fragment",
    "category": "material",
    "description": "Colossus Fragment material.",
    "buyPrice": 0,
    "sellPrice": 53,
    "consumable": false
  },
  "cosmic_heart": {
    "id": "cosmic_heart",
    "name": "💎 Cosmic Heart",
    "category": "material",
    "description": "Cosmic Heart material.",
    "buyPrice": 0,
    "sellPrice": 33,
    "consumable": false
  },
  "crystal_shard": {
    "id": "crystal_shard",
    "name": "💎 Crystal Shard",
    "category": "material",
    "description": "Crystal Shard material.",
    "buyPrice": 0,
    "sellPrice": 66,
    "consumable": false
  },
  "cursed_amulet": {
    "id": "cursed_amulet",
    "name": "💎 Cursed Amulet",
    "category": "material",
    "description": "Cursed Amulet material.",
    "buyPrice": 0,
    "sellPrice": 23,
    "consumable": false
  },
  "cursed_blade": {
    "id": "cursed_blade",
    "name": "💎 Cursed Blade",
    "category": "material",
    "description": "Cursed Blade material.",
    "buyPrice": 0,
    "sellPrice": 35,
    "consumable": false
  },
  "cursed_gold": {
    "id": "cursed_gold",
    "name": "💎 Cursed Gold",
    "category": "material",
    "description": "Cursed Gold material.",
    "buyPrice": 0,
    "sellPrice": 22,
    "consumable": false
  },
  "cursed_pickaxe": {
    "id": "cursed_pickaxe",
    "name": "💎 Cursed Pickaxe",
    "category": "material",
    "description": "Cursed Pickaxe material.",
    "buyPrice": 0,
    "sellPrice": 49,
    "consumable": false
  },
  "dark_essence": {
    "id": "dark_essence",
    "name": "💎 Dark Essence",
    "category": "material",
    "description": "Dark Essence material.",
    "buyPrice": 0,
    "sellPrice": 57,
    "consumable": false
  },
  "death_crown": {
    "id": "death_crown",
    "name": "💎 Death Crown",
    "category": "material",
    "description": "Death Crown material.",
    "buyPrice": 0,
    "sellPrice": 39,
    "consumable": false
  },
  "death_essence": {
    "id": "death_essence",
    "name": "💎 Death Essence",
    "category": "material",
    "description": "Death Essence material.",
    "buyPrice": 0,
    "sellPrice": 58,
    "consumable": false
  },
  "deep_essence": {
    "id": "deep_essence",
    "name": "💎 Deep Essence",
    "category": "material",
    "description": "Deep Essence material.",
    "buyPrice": 0,
    "sellPrice": 20,
    "consumable": false
  },
  "deep_pearl": {
    "id": "deep_pearl",
    "name": "💎 Deep Pearl",
    "category": "material",
    "description": "Deep Pearl material.",
    "buyPrice": 0,
    "sellPrice": 22,
    "consumable": false
  },
  "demon_blade": {
    "id": "demon_blade",
    "name": "💎 Demon Blade",
    "category": "material",
    "description": "Demon Blade material.",
    "buyPrice": 0,
    "sellPrice": 67,
    "consumable": false
  },
  "demon_crown": {
    "id": "demon_crown",
    "name": "💎 Demon Crown",
    "category": "material",
    "description": "Demon Crown material.",
    "buyPrice": 0,
    "sellPrice": 58,
    "consumable": false
  },
  "demon_horn": {
    "id": "demon_horn",
    "name": "💎 Demon Horn",
    "category": "material",
    "description": "Demon Horn material.",
    "buyPrice": 0,
    "sellPrice": 57,
    "consumable": false
  },
  "divine_essence": {
    "id": "divine_essence",
    "name": "💎 Divine Essence",
    "category": "material",
    "description": "Divine Essence material.",
    "buyPrice": 0,
    "sellPrice": 22,
    "consumable": false
  },
  "dragon_soul": {
    "id": "dragon_soul",
    "name": "💎 Dragon Soul",
    "category": "material",
    "description": "Dragon Soul material.",
    "buyPrice": 0,
    "sellPrice": 22,
    "consumable": false
  },
  "drake_heart": {
    "id": "drake_heart",
    "name": "💎 Drake Heart",
    "category": "material",
    "description": "Drake Heart material.",
    "buyPrice": 0,
    "sellPrice": 29,
    "consumable": false
  },
  "dust_core": {
    "id": "dust_core",
    "name": "💎 Dust Core",
    "category": "material",
    "description": "Dust Core material.",
    "buyPrice": 0,
    "sellPrice": 43,
    "consumable": false
  },
  "eldritch_eye": {
    "id": "eldritch_eye",
    "name": "💎 Eldritch Eye",
    "category": "material",
    "description": "Eldritch Eye material.",
    "buyPrice": 0,
    "sellPrice": 20,
    "consumable": false
  },
  "fire_scale": {
    "id": "fire_scale",
    "name": "💎 Fire Scale",
    "category": "material",
    "description": "Fire Scale material.",
    "buyPrice": 0,
    "sellPrice": 41,
    "consumable": false
  },
  "fire_stone": {
    "id": "fire_stone",
    "name": "💎 Fire Stone",
    "category": "material",
    "description": "Fire Stone material.",
    "buyPrice": 0,
    "sellPrice": 44,
    "consumable": false
  },
  "flame_essence": {
    "id": "flame_essence",
    "name": "💎 Flame Essence",
    "category": "material",
    "description": "Flame Essence material.",
    "buyPrice": 0,
    "sellPrice": 61,
    "consumable": false
  },
  "forest_scale": {
    "id": "forest_scale",
    "name": "💎 Forest Scale",
    "category": "material",
    "description": "Forest Scale material.",
    "buyPrice": 0,
    "sellPrice": 30,
    "consumable": false
  },
  "golem_core": {
    "id": "golem_core",
    "name": "💎 Golem Core",
    "category": "material",
    "description": "Golem Core material.",
    "buyPrice": 0,
    "sellPrice": 55,
    "consumable": false
  },
  "guardian_core": {
    "id": "guardian_core",
    "name": "💎 Guardian Core",
    "category": "material",
    "description": "Guardian Core material.",
    "buyPrice": 0,
    "sellPrice": 39,
    "consumable": false
  },
  "guardian_seed": {
    "id": "guardian_seed",
    "name": "💎 Guardian Seed",
    "category": "material",
    "description": "Guardian Seed material.",
    "buyPrice": 0,
    "sellPrice": 51,
    "consumable": false
  },
  "guardian_stone": {
    "id": "guardian_stone",
    "name": "💎 Guardian Stone",
    "category": "material",
    "description": "Guardian Stone material.",
    "buyPrice": 0,
    "sellPrice": 58,
    "consumable": false
  },
  "hell_armor": {
    "id": "hell_armor",
    "name": "💎 Hell Armor",
    "category": "material",
    "description": "Hell Armor material.",
    "buyPrice": 0,
    "sellPrice": 27,
    "consumable": false
  },
  "holy_relic": {
    "id": "holy_relic",
    "name": "💎 Holy Relic",
    "category": "material",
    "description": "Holy Relic material.",
    "buyPrice": 0,
    "sellPrice": 20,
    "consumable": false
  },
  "horror_tentacle": {
    "id": "horror_tentacle",
    "name": "💎 Horror Tentacle",
    "category": "material",
    "description": "Horror Tentacle material.",
    "buyPrice": 0,
    "sellPrice": 63,
    "consumable": false
  },
  "infernal_core": {
    "id": "infernal_core",
    "name": "💎 Infernal Core",
    "category": "material",
    "description": "Infernal Core material.",
    "buyPrice": 0,
    "sellPrice": 44,
    "consumable": false
  },
  "infernal_scale": {
    "id": "infernal_scale",
    "name": "💎 Infernal Scale",
    "category": "material",
    "description": "Infernal Scale material.",
    "buyPrice": 0,
    "sellPrice": 28,
    "consumable": false
  },
  "inferno_fang": {
    "id": "inferno_fang",
    "name": "💎 Inferno Fang",
    "category": "material",
    "description": "Inferno Fang material.",
    "buyPrice": 0,
    "sellPrice": 65,
    "consumable": false
  },
  "kraken_tentacle": {
    "id": "kraken_tentacle",
    "name": "💎 Kraken Tentacle",
    "category": "material",
    "description": "Kraken Tentacle material.",
    "buyPrice": 0,
    "sellPrice": 63,
    "consumable": false
  },
  "labyrinth_key": {
    "id": "labyrinth_key",
    "name": "💎 Labyrinth Key",
    "category": "material",
    "description": "Labyrinth Key material.",
    "buyPrice": 0,
    "sellPrice": 45,
    "consumable": false
  },
  "lava_crystal": {
    "id": "lava_crystal",
    "name": "💎 Lava Crystal",
    "category": "material",
    "description": "Lava Crystal material.",
    "buyPrice": 0,
    "sellPrice": 32,
    "consumable": false
  },
  "lava_fang": {
    "id": "lava_fang",
    "name": "💎 Lava Fang",
    "category": "material",
    "description": "Lava Fang material.",
    "buyPrice": 0,
    "sellPrice": 42,
    "consumable": false
  },
  "leviathan_scale": {
    "id": "leviathan_scale",
    "name": "💎 Leviathan Scale",
    "category": "material",
    "description": "Leviathan Scale material.",
    "buyPrice": 0,
    "sellPrice": 35,
    "consumable": false
  },
  "lich_phylactery": {
    "id": "lich_phylactery",
    "name": "💎 Lich Phylactery",
    "category": "material",
    "description": "Lich Phylactery material.",
    "buyPrice": 0,
    "sellPrice": 61,
    "consumable": false
  },
  "life_essence": {
    "id": "life_essence",
    "name": "💎 Life Essence",
    "category": "material",
    "description": "Life Essence material.",
    "buyPrice": 0,
    "sellPrice": 58,
    "consumable": false
  },
  "magma_essence": {
    "id": "magma_essence",
    "name": "💎 Magma Essence",
    "category": "material",
    "description": "Magma Essence material.",
    "buyPrice": 0,
    "sellPrice": 20,
    "consumable": false
  },
  "maze_crystal": {
    "id": "maze_crystal",
    "name": "💎 Maze Crystal",
    "category": "material",
    "description": "Maze Crystal material.",
    "buyPrice": 0,
    "sellPrice": 42,
    "consumable": false
  },
  "minotaur_horn": {
    "id": "minotaur_horn",
    "name": "💎 Minotaur Horn",
    "category": "material",
    "description": "Minotaur Horn material.",
    "buyPrice": 0,
    "sellPrice": 34,
    "consumable": false
  },
  "molten_core": {
    "id": "molten_core",
    "name": "💎 Molten Core",
    "category": "material",
    "description": "Molten Core material.",
    "buyPrice": 0,
    "sellPrice": 56,
    "consumable": false
  },
  "nature_crown": {
    "id": "nature_crown",
    "name": "💎 Nature Crown",
    "category": "material",
    "description": "Nature Crown material.",
    "buyPrice": 0,
    "sellPrice": 39,
    "consumable": false
  },
  "ocean_heart": {
    "id": "ocean_heart",
    "name": "💎 Ocean Heart",
    "category": "material",
    "description": "Ocean Heart material.",
    "buyPrice": 0,
    "sellPrice": 40,
    "consumable": false
  },
  "ore_chunk": {
    "id": "ore_chunk",
    "name": "💎 Ore Chunk",
    "category": "material",
    "description": "Ore Chunk material.",
    "buyPrice": 0,
    "sellPrice": 30,
    "consumable": false
  },
  "pharaoh_crown": {
    "id": "pharaoh_crown",
    "name": "💎 Pharaoh Crown",
    "category": "material",
    "description": "Pharaoh Crown material.",
    "buyPrice": 0,
    "sellPrice": 20,
    "consumable": false
  },
  "prism_crystal": {
    "id": "prism_crystal",
    "name": "💎 Prism Crystal",
    "category": "material",
    "description": "Prism Crystal material.",
    "buyPrice": 0,
    "sellPrice": 65,
    "consumable": false
  },
  "reality_shard": {
    "id": "reality_shard",
    "name": "💎 Reality Shard",
    "category": "material",
    "description": "Reality Shard material.",
    "buyPrice": 0,
    "sellPrice": 59,
    "consumable": false
  },
  "sentinel_core": {
    "id": "sentinel_core",
    "name": "💎 Sentinel Core",
    "category": "material",
    "description": "Sentinel Core material.",
    "buyPrice": 0,
    "sellPrice": 65,
    "consumable": false
  },
  "shadow_ore": {
    "id": "shadow_ore",
    "name": "💎 Shadow Ore",
    "category": "material",
    "description": "Shadow Ore material.",
    "buyPrice": 0,
    "sellPrice": 69,
    "consumable": false
  },
  "silk_thread": {
    "id": "silk_thread",
    "name": "💎 Silk Thread",
    "category": "material",
    "description": "Silk Thread material.",
    "buyPrice": 0,
    "sellPrice": 40,
    "consumable": false
  },
  "spawn_core": {
    "id": "spawn_core",
    "name": "💎 Spawn Core",
    "category": "material",
    "description": "Spawn Core material.",
    "buyPrice": 0,
    "sellPrice": 37,
    "consumable": false
  },
  "spider_gem": {
    "id": "spider_gem",
    "name": "💎 Spider Gem",
    "category": "material",
    "description": "Spider Gem material.",
    "buyPrice": 0,
    "sellPrice": 56,
    "consumable": false
  },
  "spirit_feather": {
    "id": "spirit_feather",
    "name": "💎 Spirit Feather",
    "category": "material",
    "description": "Spirit Feather material.",
    "buyPrice": 0,
    "sellPrice": 52,
    "consumable": false
  },
  "storm_talon": {
    "id": "storm_talon",
    "name": "💎 Storm Talon",
    "category": "material",
    "description": "Storm Talon material.",
    "buyPrice": 0,
    "sellPrice": 62,
    "consumable": false
  },
  "thunder_feather": {
    "id": "thunder_feather",
    "name": "💎 Thunder Feather",
    "category": "material",
    "description": "Thunder Feather material.",
    "buyPrice": 0,
    "sellPrice": 34,
    "consumable": false
  },
  "titan_heart": {
    "id": "titan_heart",
    "name": "💎 Titan Heart",
    "category": "material",
    "description": "Titan Heart material.",
    "buyPrice": 0,
    "sellPrice": 27,
    "consumable": false
  },
  "undead_heart": {
    "id": "undead_heart",
    "name": "💎 Undead Heart",
    "category": "material",
    "description": "Undead Heart material.",
    "buyPrice": 0,
    "sellPrice": 37,
    "consumable": false
  },
  "void_crystal": {
    "id": "void_crystal",
    "name": "💎 Void Crystal",
    "category": "material",
    "description": "Void Crystal material.",
    "buyPrice": 0,
    "sellPrice": 60,
    "consumable": false
  },
  "walker_cloak": {
    "id": "walker_cloak",
    "name": "💎 Walker Cloak",
    "category": "material",
    "description": "Walker Cloak material.",
    "buyPrice": 0,
    "sellPrice": 58,
    "consumable": false
  },
  "warper_essence": {
    "id": "warper_essence",
    "name": "💎 Warper Essence",
    "category": "material",
    "description": "Warper Essence material.",
    "buyPrice": 0,
    "sellPrice": 49,
    "consumable": false
  },
  "wind_core": {
    "id": "wind_core",
    "name": "💎 Wind Core",
    "category": "material",
    "description": "Wind Core material.",
    "buyPrice": 0,
    "sellPrice": 26,
    "consumable": false
  },
  "wind_essence": {
    "id": "wind_essence",
    "name": "💎 Wind Essence",
    "category": "material",
    "description": "Wind Essence material.",
    "buyPrice": 0,
    "sellPrice": 65,
    "consumable": false
  },
  "world_heart": {
    "id": "world_heart",
    "name": "💎 World Heart",
    "category": "material",
    "description": "World Heart material.",
    "buyPrice": 0,
    "sellPrice": 22,
    "consumable": false
  },
  "wraith_essence": {
    "id": "wraith_essence",
    "name": "💎 Wraith Essence",
    "category": "material",
    "description": "Wraith Essence material.",
    "buyPrice": 0,
    "sellPrice": 62,
    "consumable": false
  },

  "ancient_key": {
    "id": "ancient_key",
    "name": "🗝️ Ancient Key",
    "category": "quest",
    "description": "Mysterious old key.",
    "buyPrice": 0,
    "sellPrice": 0,
    "consumable": false
  },
  "sealed_letter": {
    "id": "sealed_letter",
    "name": "📜 Sealed Letter",
    "category": "quest",
    "description": "Sealed letter.",
    "buyPrice": 0,
    "sellPrice": 0,
    "consumable": false
  },
  "rare_gem": {
    "id": "rare_gem",
    "name": "💎 Rare Gem",
    "category": "quest",
    "description": "Brilliantly cut gem.",
    "buyPrice": 0,
    "sellPrice": 200,
    "consumable": false
  },

  // ═══════════════════════════════════════════════════════
  // WEAPONS (25 total)
  // ═══════════════════════════════════════════════════════

  "rusty_sword": {
      "id": "rusty_sword",
      "name": "⚔️ Rusty Sword",
      "category": "weapon",
      "rarity": "common",
      "weaponType": "sword",
      "description": "An old, worn sword. Better than nothing.",
      "twoHanded": false,
      "buyPrice": 50,
      "sellPrice": 25,
      "stats": {
          "attack": 8,
          "critChance": 2
      }
  },

  "wooden_bow": {
      "id": "wooden_bow",
      "name": "🏹 Wooden Bow",
      "category": "weapon",
      "rarity": "common",
      "weaponType": "bow",
      "description": "A simple bow made from oak wood.",
      "twoHanded": true,
      "buyPrice": 60,
      "sellPrice": 30,
      "stats": {
          "attack": 10,
          "critChance": 5,
          "agility": 2
      }
  },

  "iron_dagger": {
      "id": "iron_dagger",
      "name": "🗡️ Iron Dagger",
      "category": "weapon",
      "rarity": "common",
      "weaponType": "dagger",
      "description": "A sharp iron dagger. Fast and deadly.",
      "twoHanded": false,
      "buyPrice": 45,
      "sellPrice": 22,
      "stats": {
          "attack": 6,
          "critChance": 8,
          "agility": 3
      }
  },

  "wooden_staff": {
      "id": "wooden_staff",
      "name": "🪄 Wooden Staff",
      "category": "weapon",
      "rarity": "common",
      "weaponType": "staff",
      "description": "A basic staff for channeling magic.",
      "twoHanded": true,
      "buyPrice": 55,
      "sellPrice": 27,
      "stats": {
          "attack": 7,
          "magicalAtk": 5,
          "mana": 10
      }
  },

  "stone_axe": {
      "id": "stone_axe",
      "name": "🪓 Stone Axe",
      "category": "weapon",
      "rarity": "common",
      "weaponType": "axe",
      "description": "A heavy stone axe. Slow but powerful.",
      "twoHanded": true,
      "buyPrice": 65,
      "sellPrice": 32,
      "stats": {
          "attack": 12,
          "critChance": 3
      }
  },

  "steel_sword": {
      "id": "steel_sword",
      "name": "⚔️ Steel Sword",
      "category": "weapon",
      "rarity": "uncommon",
      "weaponType": "sword",
      "description": "A well-crafted steel blade. Reliable and sharp.",
      "twoHanded": false,
      "buyPrice": 150,
      "sellPrice": 75,
      "stats": {
          "attack": 15,
          "critChance": 5,
          "defense": 2
      }
  },

  "hunters_bow": {
      "id": "hunters_bow",
      "name": "🏹 Hunter's Bow",
      "category": "weapon",
      "rarity": "uncommon",
      "weaponType": "bow",
      "description": "A bow favored by experienced hunters.",
      "twoHanded": true,
      "buyPrice": 180,
      "sellPrice": 90,
      "stats": {
          "attack": 18,
          "critChance": 10,
          "agility": 4
      }
  },

  "assassins_blade": {
      "id": "assassins_blade",
      "name": "🗡️ Assassin's Blade",
      "category": "weapon",
      "rarity": "uncommon",
      "weaponType": "dagger",
      "description": "A blade designed for swift, lethal strikes.",
      "twoHanded": false,
      "buyPrice": 140,
      "sellPrice": 70,
      "stats": {
          "attack": 12,
          "critChance": 15,
          "agility": 5
      }
  },

  "apprentice_staff": {
      "id": "apprentice_staff",
      "name": "🪄 Apprentice Staff",
      "category": "weapon",
      "rarity": "uncommon",
      "weaponType": "staff",
      "description": "A staff imbued with minor magical properties.",
      "twoHanded": true,
      "buyPrice": 170,
      "sellPrice": 85,
      "stats": {
          "attack": 13,
          "magicalAtk": 10,
          "mana": 20,
          "defense": 3
      }
  },

  "battle_axe": {
      "id": "battle_axe",
      "name": "🪓 Battle Axe",
      "category": "weapon",
      "rarity": "uncommon",
      "weaponType": "axe",
      "description": "A fearsome axe used in countless battles.",
      "twoHanded": true,
      "buyPrice": 200,
      "sellPrice": 100,
      "stats": {
          "attack": 22,
          "critChance": 6,
          "hp": 15
      }
  },

  "flamebrand_sword": {
      "id": "flamebrand_sword",
      "name": "⚔️ Flamebrand Sword",
      "category": "weapon",
      "rarity": "rare",
      "weaponType": "sword",
      "description": "A sword wreathed in eternal flames.",
      "twoHanded": false,
      "buyPrice": 500,
      "sellPrice": 250,
      "stats": {
          "attack": 25,
          "critChance": 8,
          "magicalAtk": 5
      },
      "passive": {
          "id": "burning_aura",
          "name": "Burning Aura",
          "emoji": "🔥",
          "effect": "burn_on_hit",
          "value": 5,
          "chance": 25,
          "duration": 4
      }
  },

  "windcaller_bow": {
      "id": "windcaller_bow",
      "name": "🏹 Windcaller Bow",
      "category": "weapon",
      "rarity": "rare",
      "weaponType": "bow",
      "description": "A bow that harnesses the power of wind.",
      "twoHanded": true,
      "buyPrice": 550,
      "sellPrice": 275,
      "stats": {
          "attack": 28,
          "critChance": 12,
          "agility": 8
      },
      "passive": {
          "id": "swift_strikes",
          "name": "Swift Strikes",
          "emoji": "⚡",
          "effect": "agility_boost",
          "value": 5
      }
  },

  "venomfang_dagger": {
      "id": "venomfang_dagger",
      "name": "🗡️ Venomfang Dagger",
      "category": "weapon",
      "rarity": "rare",
      "weaponType": "dagger",
      "description": "A dagger coated with deadly poison.",
      "twoHanded": false,
      "buyPrice": 480,
      "sellPrice": 240,
      "stats": {
          "attack": 20,
          "critChance": 18,
          "agility": 7
      },
      "passive": {
          "id": "poison_touch",
          "name": "Poison Touch",
          "emoji": "☠️",
          "effect": "poison_on_hit",
          "value": 3,
          "chance": 30,
          "duration": 4
      }
  },

  "arcane_staff": {
      "id": "arcane_staff",
      "name": "🪄 Arcane Staff",
      "category": "weapon",
      "rarity": "rare",
      "weaponType": "staff",
      "description": "A staff pulsing with arcane energy.",
      "twoHanded": true,
      "buyPrice": 520,
      "sellPrice": 260,
      "stats": {
          "attack": 22,
          "magicalAtk": 18,
          "mana": 35,
          "defense": 5
      },
      "passive": {
          "id": "arcane_mind",
          "name": "Arcane Mind",
          "emoji": "💧",
          "effect": "mana_regen",
          "value": 6
      }
  },

  "executioners_axe": {
      "id": "executioners_axe",
      "name": "🪓 Executioner's Axe",
      "category": "weapon",
      "rarity": "rare",
      "weaponType": "axe",
      "description": "A massive axe that cleaves through armor.",
      "twoHanded": true,
      "buyPrice": 600,
      "sellPrice": 300,
      "stats": {
          "attack": 35,
          "critChance": 10,
          "hp": 25
      },
      "passive": {
          "id": "mighty_blow",
          "name": "Mighty Blow",
          "emoji": "💥",
          "effect": "attack_boost",
          "value": 8
      }
  },

  "dragonslayer_sword": {
      "id": "dragonslayer_sword",
      "name": "⚔️ Dragonslayer Sword",
      "category": "weapon",
      "rarity": "epic",
      "weaponType": "sword",
      "description": "A legendary blade forged to slay dragons.",
      "twoHanded": true,
      "buyPrice": 1500,
      "sellPrice": 750,
      "stats": {
          "attack": 40,
          "critChance": 12,
          "magicalAtk": 10,
          "hp": 30
      },
      "passive": {
          "id": "critical_eye",
          "name": "Critical Eye",
          "emoji": "🎯",
          "effect": "crit_boost",
          "value": 10
      }
  },

  "starfall_bow": {
      "id": "starfall_bow",
      "name": "🏹 Starfall Bow",
      "category": "weapon",
      "rarity": "epic",
      "weaponType": "bow",
      "description": "A celestial bow that shoots arrows of starlight.",
      "twoHanded": true,
      "buyPrice": 1600,
      "sellPrice": 800,
      "stats": {
          "attack": 42,
          "critChance": 18,
          "agility": 12,
          "luck": 5
      },
      "passive": {
          "id": "lucky_strike",
          "name": "Lucky Strike",
          "emoji": "🍀",
          "effect": "luck_boost",
          "value": 5
      }
  },

  "shadowstrike_dagger": {
      "id": "shadowstrike_dagger",
      "name": "🗡️ Shadowstrike Dagger",
      "category": "weapon",
      "rarity": "epic",
      "weaponType": "dagger",
      "description": "A dagger that strikes from the shadows.",
      "twoHanded": false,
      "buyPrice": 1400,
      "sellPrice": 700,
      "stats": {
          "attack": 32,
          "critChance": 25,
          "agility": 15
      },
      "passive": {
          "id": "shadow_step",
          "name": "Shadow Step",
          "emoji": "👤",
          "effect": "agility_to_dodge",
          "value": 1
      }
  },

  "void_staff": {
      "id": "void_staff",
      "name": "🪄 Void Staff",
      "category": "weapon",
      "rarity": "epic",
      "weaponType": "staff",
      "description": "A staff that channels the power of the void.",
      "twoHanded": true,
      "buyPrice": 1550,
      "sellPrice": 775,
      "stats": {
          "attack": 35,
          "magicalAtk": 30,
          "mana": 50,
          "defense": 8
      },
      "passive": {
          "id": "mana_efficiency",
          "name": "Mana Efficiency",
          "emoji": "💎",
          "effect": "mana_cost_reduction",
          "value": 20
      }
  },

  "titans_wrath": {
      "id": "titans_wrath",
      "name": "🪓 Titan's Wrath",
      "category": "weapon",
      "rarity": "epic",
      "weaponType": "axe",
      "description": "An axe wielded by ancient titans.",
      "twoHanded": true,
      "buyPrice": 1700,
      "sellPrice": 850,
      "stats": {
          "attack": 50,
          "critChance": 15,
          "hp": 40,
          "defense": 10
      },
      "passive": {
          "id": "enrage",
          "name": "Enrage",
          "emoji": "😡",
          "effect": "enrage",
          "value": 10,
          "threshold": 30
      }
  },

  "excalibur": {
      "id": "excalibur",
      "name": "⚔️ Excalibur",
      "category": "weapon",
      "rarity": "legendary",
      "weaponType": "sword",
      "description": "The legendary sword of kings. Radiates holy light.",
      "twoHanded": false,
      "buyPrice": 0,
      "sellPrice": 5000,
      "stats": {
          "attack": 70,
          "critChance": 20,
          "magicalAtk": 20,
          "hp": 50,
          "defense": 15,
          "agility": 10
      },
      "passive": {
          "id": "regeneration",
          "name": "Regeneration",
          "emoji": "💚",
          "effect": "regen",
          "value": 5
      },
      "skill": {
          "id": "holy_strike",
          "name": "Holy Strike",
          "description": "Unleash divine judgment on your enemy",
          "manaCost": 25,
          "cooldown": 9,
          "damageType": "magical",
          "baseDamage": 50,
          "effects": [
              {
                  "type": "buff_atk",
                  "value": 15,
                  "duration": 4
              }
          ]
      }
  },

  "moonlight_bow": {
      "id": "moonlight_bow",
      "name": "🏹 Moonlight Bow",
      "category": "weapon",
      "rarity": "legendary",
      "weaponType": "bow",
      "description": "A bow blessed by the moon goddess. Never misses.",
      "twoHanded": true,
      "buyPrice": 0,
      "sellPrice": 5200,
      "stats": {
          "attack": 75,
          "critChance": 30,
          "agility": 20,
          "luck": 10,
          "mana": 30
      },
      "passive": {
          "id": "critical_eye",
          "name": "Critical Eye",
          "emoji": "🎯",
          "effect": "crit_boost",
          "value": 10
      },
      "skill": {
          "id": "moonlight_arrow",
          "name": "Moonlight Arrow",
          "description": "Fire an arrow of pure moonlight",
          "manaCost": 30,
          "cooldown": 9,
          "damageType": "magical",
          "baseDamage": 60,
          "effects": [
              {
                  "type": "blind",
                  "value": 50,
                  "duration": 4
              }
          ]
      }
  },

  "deaths_whisper": {
      "id": "deaths_whisper",
      "name": "🗡️ Death's Whisper",
      "category": "weapon",
      "rarity": "legendary",
      "weaponType": "dagger",
      "description": "A dagger forged from the essence of death itself.",
      "twoHanded": false,
      "buyPrice": 0,
      "sellPrice": 4800,
      "stats": {
          "attack": 60,
          "critChance": 40,
          "agility": 25,
          "luck": 8
      },
      "passive": {
          "id": "vampiric",
          "name": "Vampiric",
          "emoji": "🧛",
          "effect": "lifesteal",
          "value": 20
      },
      "skill": {
          "id": "assassinate",
          "name": "Assassinate",
          "description": "Strike from the shadows with lethal precision",
          "manaCost": 35,
          "cooldown": 9,
          "damageType": "physical",
          "baseDamage": 80,
          "effects": [
              {
                  "type": "bleed",
                  "value": 10,
                  "duration": 5
              }
          ]
      }
  },

  "staff_of_eternity": {
      "id": "staff_of_eternity",
      "name": "🪄 Staff of Eternity",
      "category": "weapon",
      "rarity": "legendary",
      "weaponType": "staff",
      "description": "A staff that contains infinite magical power.",
      "twoHanded": true,
      "buyPrice": 0,
      "sellPrice": 5500,
      "stats": {
          "attack": 65,
          "magicalAtk": 50,
          "mana": 100,
          "defense": 15,
          "hp": 40
      },
      "passive": {
          "id": "mana_spring",
          "name": "Mana Spring",
          "emoji": "💧",
          "effect": "mana_regen",
          "value": 10
      },
      "skill": {
          "id": "arcane_explosion",
          "name": "Arcane Explosion",
          "description": "Unleash a devastating explosion of pure magic",
          "manaCost": 40,
          "cooldown": 9,
          "damageType": "magical",
          "baseDamage": 70,
          "effects": [
              {
                  "type": "debuff_def",
                  "value": 10,
                  "duration": 4
              }
          ]
      }
  },

  "worldbreaker": {
      "id": "worldbreaker",
      "name": "🪓 Worldbreaker",
      "category": "weapon",
      "rarity": "legendary",
      "weaponType": "axe",
      "description": "An axe capable of splitting mountains. Unmatched power.",
      "twoHanded": true,
      "buyPrice": 0,
      "sellPrice": 6000,
      "stats": {
          "attack": 100,
          "critChance": 25,
          "hp": 80,
          "defense": 20
      },
      "passive": {
          "id": "berserker_rage",
          "name": "Berserker Rage",
          "emoji": "💢",
          "effect": "berserker_rage",
          "value": 15,
          "defensePenalty": 5,
          "threshold": 20
      },
      "skill": {
          "id": "earthquake",
          "name": "Earthquake",
          "description": "Slam the ground with devastating force",
          "manaCost": 45,
          "cooldown": 9,
          "damageType": "physical",
          "baseDamage": 90,
          "effects": [
              {
                  "type": "stun",
                  "value": 1,
                  "duration": 2
              }
          ]
      }
  },



  // ═══════════════════════════════════════════════════════
  // ARMOR - COMMON SETS (10 sets x 4 pieces = 40 items)
  // ═══════════════════════════════════════════════════════

  "hide_head": {
    "id": "hide_head",
    "name": "🪖 Hide Helmet",
    "category": "armor",
    "armorSlot": "head",
    "armorSet": "hide",
    "rarity": "common",
    "description": "Head piece of the Hide set.",
    "buyPrice": 28,
    "sellPrice": 14,
    "stats": {
      "defense": 6,
      "hp": 22,
      "agility": 1
    },
    "setBonus": null
  },

  "hide_chest": {
    "id": "hide_chest",
    "name": "🦺 Hide Chestplate",
    "category": "armor",
    "armorSlot": "chest",
    "armorSet": "hide",
    "rarity": "common",
    "description": "Chest piece of the Hide set.",
    "buyPrice": 48,
    "sellPrice": 24,
    "stats": {
      "defense": 11,
      "hp": 40,
      "agility": 2
    },
    "setBonus": null
  },

  "hide_legs": {
    "id": "hide_legs",
    "name": "👖 Hide Leggings",
    "category": "armor",
    "armorSlot": "legs",
    "armorSet": "hide",
    "rarity": "common",
    "description": "Legs piece of the Hide set.",
    "buyPrice": 38,
    "sellPrice": 19,
    "stats": {
      "defense": 9,
      "hp": 32,
      "agility": 2
    },
    "setBonus": null
  },

  "hide_boots": {
    "id": "hide_boots",
    "name": "🥾 Hide Boots",
    "category": "armor",
    "armorSlot": "boots",
    "armorSet": "hide",
    "rarity": "common",
    "description": "Boots piece of the Hide set.",
    "buyPrice": 33,
    "sellPrice": 16,
    "stats": {
      "defense": 7,
      "hp": 25,
      "agility": 1
    },
    "setBonus": null
  },

  "padded_head": {
    "id": "padded_head",
    "name": "🪖 Padded Helmet",
    "category": "armor",
    "armorSlot": "head",
    "armorSet": "padded",
    "rarity": "common",
    "description": "Head piece of the Padded set.",
    "buyPrice": 30,
    "sellPrice": 15,
    "stats": {
      "defense": 5,
      "hp": 24,
      "agility": 2
    },
    "setBonus": null
  },

  "padded_chest": {
    "id": "padded_chest",
    "name": "🦺 Padded Chestplate",
    "category": "armor",
    "armorSlot": "chest",
    "armorSet": "padded",
    "rarity": "common",
    "description": "Chest piece of the Padded set.",
    "buyPrice": 50,
    "sellPrice": 25,
    "stats": {
      "defense": 10,
      "hp": 42,
      "agility": 3
    },
    "setBonus": null
  },

  "padded_legs": {
    "id": "padded_legs",
    "name": "👖 Padded Leggings",
    "category": "armor",
    "armorSlot": "legs",
    "armorSet": "padded",
    "rarity": "common",
    "description": "Legs piece of the Padded set.",
    "buyPrice": 40,
    "sellPrice": 20,
    "stats": {
      "defense": 8,
      "hp": 34,
      "agility": 3
    },
    "setBonus": null
  },

  "padded_boots": {
    "id": "padded_boots",
    "name": "🥾 Padded Boots",
    "category": "armor",
    "armorSlot": "boots",
    "armorSet": "padded",
    "rarity": "common",
    "description": "Boots piece of the Padded set.",
    "buyPrice": 35,
    "sellPrice": 17,
    "stats": {
      "defense": 6,
      "hp": 26,
      "agility": 2
    },
    "setBonus": null
  },

  "fur_head": {
    "id": "fur_head",
    "name": "🪖 Fur Helmet",
    "category": "armor",
    "armorSlot": "head",
    "armorSet": "fur",
    "rarity": "common",
    "description": "Head piece of the Fur set.",
    "buyPrice": 32,
    "sellPrice": 16,
    "stats": {
      "defense": 6,
      "hp": 20,
      "agility": 3
    },
    "setBonus": null
  },

  "fur_chest": {
    "id": "fur_chest",
    "name": "🦺 Fur Chestplate",
    "category": "armor",
    "armorSlot": "chest",
    "armorSet": "fur",
    "rarity": "common",
    "description": "Chest piece of the Fur set.",
    "buyPrice": 52,
    "sellPrice": 26,
    "stats": {
      "defense": 11,
      "hp": 38,
      "agility": 4
    },
    "setBonus": null
  },

  "fur_legs": {
    "id": "fur_legs",
    "name": "👖 Fur Leggings",
    "category": "armor",
    "armorSlot": "legs",
    "armorSet": "fur",
    "rarity": "common",
    "description": "Legs piece of the Fur set.",
    "buyPrice": 42,
    "sellPrice": 21,
    "stats": {
      "defense": 9,
      "hp": 30,
      "agility": 4
    },
    "setBonus": null
  },

  "fur_boots": {
    "id": "fur_boots",
    "name": "🥾 Fur Boots",
    "category": "armor",
    "armorSlot": "boots",
    "armorSet": "fur",
    "rarity": "common",
    "description": "Boots piece of the Fur set.",
    "buyPrice": 37,
    "sellPrice": 18,
    "stats": {
      "defense": 7,
      "hp": 23,
      "agility": 3
    },
    "setBonus": null
  },

  "linen_head": {
    "id": "linen_head",
    "name": "🪖 Linen Helmet",
    "category": "armor",
    "armorSlot": "head",
    "armorSet": "linen",
    "rarity": "common",
    "description": "Head piece of the Linen set.",
    "buyPrice": 26,
    "sellPrice": 13,
    "stats": {
      "defense": 4,
      "hp": 26,
      "mana": 8
    },
    "setBonus": null
  },

  "linen_chest": {
    "id": "linen_chest",
    "name": "🦺 Linen Chestplate",
    "category": "armor",
    "armorSlot": "chest",
    "armorSet": "linen",
    "rarity": "common",
    "description": "Chest piece of the Linen set.",
    "buyPrice": 46,
    "sellPrice": 23,
    "stats": {
      "defense": 9,
      "hp": 44,
      "mana": 12
    },
    "setBonus": null
  },

  "linen_legs": {
    "id": "linen_legs",
    "name": "👖 Linen Leggings",
    "category": "armor",
    "armorSlot": "legs",
    "armorSet": "linen",
    "rarity": "common",
    "description": "Legs piece of the Linen set.",
    "buyPrice": 36,
    "sellPrice": 18,
    "stats": {
      "defense": 7,
      "hp": 36,
      "mana": 10
    },
    "setBonus": null
  },

  "linen_boots": {
    "id": "linen_boots",
    "name": "🥾 Linen Boots",
    "category": "armor",
    "armorSlot": "boots",
    "armorSet": "linen",
    "rarity": "common",
    "description": "Boots piece of the Linen set.",
    "buyPrice": 31,
    "sellPrice": 15,
    "stats": {
      "defense": 5,
      "hp": 28,
      "mana": 8
    },
    "setBonus": null
  },

  "wool_head": {
    "id": "wool_head",
    "name": "🪖 Wool Helmet",
    "category": "armor",
    "armorSlot": "head",
    "armorSet": "wool",
    "rarity": "common",
    "description": "Head piece of the Wool set.",
    "buyPrice": 29,
    "sellPrice": 14,
    "stats": {
      "defense": 5,
      "hp": 23,
      "mana": 10
    },
    "setBonus": null
  },

  "wool_chest": {
    "id": "wool_chest",
    "name": "🦺 Wool Chestplate",
    "category": "armor",
    "armorSlot": "chest",
    "armorSet": "wool",
    "rarity": "common",
    "description": "Chest piece of the Wool set.",
    "buyPrice": 49,
    "sellPrice": 24,
    "stats": {
      "defense": 10,
      "hp": 41,
      "mana": 15
    },
    "setBonus": null
  },

  "wool_legs": {
    "id": "wool_legs",
    "name": "👖 Wool Leggings",
    "category": "armor",
    "armorSlot": "legs",
    "armorSet": "wool",
    "rarity": "common",
    "description": "Legs piece of the Wool set.",
    "buyPrice": 39,
    "sellPrice": 19,
    "stats": {
      "defense": 8,
      "hp": 33,
      "mana": 12
    },
    "setBonus": null
  },

  "wool_boots": {
    "id": "wool_boots",
    "name": "🥾 Wool Boots",
    "category": "armor",
    "armorSlot": "boots",
    "armorSet": "wool",
    "rarity": "common",
    "description": "Boots piece of the Wool set.",
    "buyPrice": 34,
    "sellPrice": 17,
    "stats": {
      "defense": 6,
      "hp": 25,
      "mana": 10
    },
    "setBonus": null
  },

  "bronze_head": {
    "id": "bronze_head",
    "name": "🪖 Bronze Helmet",
    "category": "armor",
    "armorSlot": "head",
    "armorSet": "bronze",
    "rarity": "common",
    "description": "Head piece of the Bronze set.",
    "buyPrice": 34,
    "sellPrice": 17,
    "stats": {
      "defense": 7,
      "hp": 21
    },
    "setBonus": null
  },

  "bronze_chest": {
    "id": "bronze_chest",
    "name": "🦺 Bronze Chestplate",
    "category": "armor",
    "armorSlot": "chest",
    "armorSet": "bronze",
    "rarity": "common",
    "description": "Chest piece of the Bronze set.",
    "buyPrice": 54,
    "sellPrice": 27,
    "stats": {
      "defense": 12,
      "hp": 39
    },
    "setBonus": null
  },

  "bronze_legs": {
    "id": "bronze_legs",
    "name": "👖 Bronze Leggings",
    "category": "armor",
    "armorSlot": "legs",
    "armorSet": "bronze",
    "rarity": "common",
    "description": "Legs piece of the Bronze set.",
    "buyPrice": 44,
    "sellPrice": 22,
    "stats": {
      "defense": 10,
      "hp": 31
    },
    "setBonus": null
  },

  "bronze_boots": {
    "id": "bronze_boots",
    "name": "🥾 Bronze Boots",
    "category": "armor",
    "armorSlot": "boots",
    "armorSet": "bronze",
    "rarity": "common",
    "description": "Boots piece of the Bronze set.",
    "buyPrice": 39,
    "sellPrice": 19,
    "stats": {
      "defense": 8,
      "hp": 24
    },
    "setBonus": null
  },

  "copper_head": {
    "id": "copper_head",
    "name": "🪖 Copper Helmet",
    "category": "armor",
    "armorSlot": "head",
    "armorSet": "copper",
    "rarity": "common",
    "description": "Head piece of the Copper set.",
    "buyPrice": 30,
    "sellPrice": 15,
    "stats": {
      "defense": 6,
      "hp": 22,
      "agility": 1
    },
    "setBonus": null
  },

  "copper_chest": {
    "id": "copper_chest",
    "name": "🦺 Copper Chestplate",
    "category": "armor",
    "armorSlot": "chest",
    "armorSet": "copper",
    "rarity": "common",
    "description": "Chest piece of the Copper set.",
    "buyPrice": 50,
    "sellPrice": 25,
    "stats": {
      "defense": 11,
      "hp": 40,
      "agility": 1
    },
    "setBonus": null
  },

  "copper_legs": {
    "id": "copper_legs",
    "name": "👖 Copper Leggings",
    "category": "armor",
    "armorSlot": "legs",
    "armorSet": "copper",
    "rarity": "common",
    "description": "Legs piece of the Copper set.",
    "buyPrice": 40,
    "sellPrice": 20,
    "stats": {
      "defense": 9,
      "hp": 32,
      "agility": 1
    },
    "setBonus": null
  },

  "copper_boots": {
    "id": "copper_boots",
    "name": "🥾 Copper Boots",
    "category": "armor",
    "armorSlot": "boots",
    "armorSet": "copper",
    "rarity": "common",
    "description": "Boots piece of the Copper set.",
    "buyPrice": 35,
    "sellPrice": 17,
    "stats": {
      "defense": 7,
      "hp": 25,
      "agility": 1
    },
    "setBonus": null
  },

  "studded_leather_head": {
    "id": "studded_leather_head",
    "name": "🪖 Studded Leather Helmet",
    "category": "armor",
    "armorSlot": "head",
    "armorSet": "studded_leather",
    "rarity": "common",
    "description": "Head piece of the Studded Leather set.",
    "buyPrice": 31,
    "sellPrice": 15,
    "stats": {
      "defense": 6,
      "hp": 23,
      "agility": 2
    },
    "setBonus": null
  },

  "studded_leather_chest": {
    "id": "studded_leather_chest",
    "name": "🦺 Studded Leather Chestplate",
    "category": "armor",
    "armorSlot": "chest",
    "armorSet": "studded_leather",
    "rarity": "common",
    "description": "Chest piece of the Studded Leather set.",
    "buyPrice": 51,
    "sellPrice": 25,
    "stats": {
      "defense": 11,
      "hp": 41,
      "agility": 3
    },
    "setBonus": null
  },

  "studded_leather_legs": {
    "id": "studded_leather_legs",
    "name": "👖 Studded Leather Leggings",
    "category": "armor",
    "armorSlot": "legs",
    "armorSet": "studded_leather",
    "rarity": "common",
    "description": "Legs piece of the Studded Leather set.",
    "buyPrice": 41,
    "sellPrice": 20,
    "stats": {
      "defense": 9,
      "hp": 33,
      "agility": 3
    },
    "setBonus": null
  },

  "studded_leather_boots": {
    "id": "studded_leather_boots",
    "name": "🥾 Studded Leather Boots",
    "category": "armor",
    "armorSlot": "boots",
    "armorSet": "studded_leather",
    "rarity": "common",
    "description": "Boots piece of the Studded Leather set.",
    "buyPrice": 36,
    "sellPrice": 18,
    "stats": {
      "defense": 7,
      "hp": 26,
      "agility": 2
    },
    "setBonus": null
  },

  "hardened_leather_head": {
    "id": "hardened_leather_head",
    "name": "🪖 Hardened Leather Helmet",
    "category": "armor",
    "armorSlot": "head",
    "armorSet": "hardened_leather",
    "rarity": "common",
    "description": "Head piece of the Hardened Leather set.",
    "buyPrice": 33,
    "sellPrice": 16,
    "stats": {
      "defense": 7,
      "hp": 22,
      "agility": 1
    },
    "setBonus": null
  },

  "hardened_leather_chest": {
    "id": "hardened_leather_chest",
    "name": "🦺 Hardened Leather Chestplate",
    "category": "armor",
    "armorSlot": "chest",
    "armorSet": "hardened_leather",
    "rarity": "common",
    "description": "Chest piece of the Hardened Leather set.",
    "buyPrice": 53,
    "sellPrice": 26,
    "stats": {
      "defense": 12,
      "hp": 40,
      "agility": 2
    },
    "setBonus": null
  },

  "hardened_leather_legs": {
    "id": "hardened_leather_legs",
    "name": "👖 Hardened Leather Leggings",
    "category": "armor",
    "armorSlot": "legs",
    "armorSet": "hardened_leather",
    "rarity": "common",
    "description": "Legs piece of the Hardened Leather set.",
    "buyPrice": 43,
    "sellPrice": 21,
    "stats": {
      "defense": 10,
      "hp": 32,
      "agility": 2
    },
    "setBonus": null
  },

  "hardened_leather_boots": {
    "id": "hardened_leather_boots",
    "name": "🥾 Hardened Leather Boots",
    "category": "armor",
    "armorSlot": "boots",
    "armorSet": "hardened_leather",
    "rarity": "common",
    "description": "Boots piece of the Hardened Leather set.",
    "buyPrice": 38,
    "sellPrice": 19,
    "stats": {
      "defense": 8,
      "hp": 25,
      "agility": 1
    },
    "setBonus": null
  },

  "apprentice_robes_head": {
    "id": "apprentice_robes_head",
    "name": "🪖 Apprentice Robes Helmet",
    "category": "armor",
    "armorSlot": "head",
    "armorSet": "apprentice_robes",
    "rarity": "common",
    "description": "Head piece of the Apprentice Robes set.",
    "buyPrice": 27,
    "sellPrice": 13,
    "stats": {
      "defense": 4,
      "hp": 25,
      "mana": 12
    },
    "setBonus": null
  },

  "apprentice_robes_chest": {
    "id": "apprentice_robes_chest",
    "name": "🦺 Apprentice Robes Chestplate",
    "category": "armor",
    "armorSlot": "chest",
    "armorSet": "apprentice_robes",
    "rarity": "common",
    "description": "Chest piece of the Apprentice Robes set.",
    "buyPrice": 47,
    "sellPrice": 23,
    "stats": {
      "defense": 9,
      "hp": 43,
      "mana": 18
    },
    "setBonus": null
  },

  "apprentice_robes_legs": {
    "id": "apprentice_robes_legs",
    "name": "👖 Apprentice Robes Leggings",
    "category": "armor",
    "armorSlot": "legs",
    "armorSet": "apprentice_robes",
    "rarity": "common",
    "description": "Legs piece of the Apprentice Robes set.",
    "buyPrice": 37,
    "sellPrice": 18,
    "stats": {
      "defense": 7,
      "hp": 35,
      "mana": 15
    },
    "setBonus": null
  },

  "apprentice_robes_boots": {
    "id": "apprentice_robes_boots",
    "name": "🥾 Apprentice Robes Boots",
    "category": "armor",
    "armorSlot": "boots",
    "armorSet": "apprentice_robes",
    "rarity": "common",
    "description": "Boots piece of the Apprentice Robes set.",
    "buyPrice": 32,
    "sellPrice": 16,
    "stats": {
      "defense": 5,
      "hp": 27,
      "mana": 12
    },
    "setBonus": null
  },


  // ═══════════════════════════════════════════════════════
  // ARMOR - UNCOMMON SETS (10 sets x 4 pieces = 40 items)
  // ═══════════════════════════════════════════════════════

  "chainmail_head": {
    "id": "chainmail_head",
    "name": "🪖 Chainmail Helmet",
    "category": "armor",
    "armorSlot": "head",
    "armorSet": "chainmail",
    "rarity": "uncommon",
    "description": "Head piece of the Chainmail set.",
    "buyPrice": 90,
    "sellPrice": 45,
    "stats": {
      "defense": 12,
      "hp": 40
    },
    "setBonus": null
  },

  "chainmail_chest": {
    "id": "chainmail_chest",
    "name": "🦺 Chainmail Chestplate",
    "category": "armor",
    "armorSlot": "chest",
    "armorSet": "chainmail",
    "rarity": "uncommon",
    "description": "Chest piece of the Chainmail set.",
    "buyPrice": 160,
    "sellPrice": 80,
    "stats": {
      "defense": 20,
      "hp": 70
    },
    "setBonus": null
  },

  "chainmail_legs": {
    "id": "chainmail_legs",
    "name": "👖 Chainmail Leggings",
    "category": "armor",
    "armorSlot": "legs",
    "armorSet": "chainmail",
    "rarity": "uncommon",
    "description": "Legs piece of the Chainmail set.",
    "buyPrice": 130,
    "sellPrice": 65,
    "stats": {
      "defense": 16,
      "hp": 56
    },
    "setBonus": null
  },

  "chainmail_boots": {
    "id": "chainmail_boots",
    "name": "🥾 Chainmail Boots",
    "category": "armor",
    "armorSlot": "boots",
    "armorSet": "chainmail",
    "rarity": "uncommon",
    "description": "Boots piece of the Chainmail set.",
    "buyPrice": 110,
    "sellPrice": 55,
    "stats": {
      "defense": 14,
      "hp": 48
    },
    "setBonus": null
  },

  "scale_mail_head": {
    "id": "scale_mail_head",
    "name": "🪖 Scale Mail Helmet",
    "category": "armor",
    "armorSlot": "head",
    "armorSet": "scale_mail",
    "rarity": "uncommon",
    "description": "Head piece of the Scale Mail set.",
    "buyPrice": 95,
    "sellPrice": 47,
    "stats": {
      "defense": 13,
      "hp": 38
    },
    "setBonus": null
  },

  "scale_mail_chest": {
    "id": "scale_mail_chest",
    "name": "🦺 Scale Mail Chestplate",
    "category": "armor",
    "armorSlot": "chest",
    "armorSet": "scale_mail",
    "rarity": "uncommon",
    "description": "Chest piece of the Scale Mail set.",
    "buyPrice": 165,
    "sellPrice": 82,
    "stats": {
      "defense": 21,
      "hp": 68
    },
    "setBonus": null
  },

  "scale_mail_legs": {
    "id": "scale_mail_legs",
    "name": "👖 Scale Mail Leggings",
    "category": "armor",
    "armorSlot": "legs",
    "armorSet": "scale_mail",
    "rarity": "uncommon",
    "description": "Legs piece of the Scale Mail set.",
    "buyPrice": 135,
    "sellPrice": 67,
    "stats": {
      "defense": 17,
      "hp": 54
    },
    "setBonus": null
  },

  "scale_mail_boots": {
    "id": "scale_mail_boots",
    "name": "🥾 Scale Mail Boots",
    "category": "armor",
    "armorSlot": "boots",
    "armorSet": "scale_mail",
    "rarity": "uncommon",
    "description": "Boots piece of the Scale Mail set.",
    "buyPrice": 115,
    "sellPrice": 57,
    "stats": {
      "defense": 15,
      "hp": 46
    },
    "setBonus": null
  },

  "reinforced_leather_head": {
    "id": "reinforced_leather_head",
    "name": "🪖 Reinforced Leather Helmet",
    "category": "armor",
    "armorSlot": "head",
    "armorSet": "reinforced_leather",
    "rarity": "uncommon",
    "description": "Head piece of the Reinforced Leather set.",
    "buyPrice": 85,
    "sellPrice": 42,
    "stats": {
      "defense": 11,
      "hp": 42,
      "agility": 4
    },
    "setBonus": null
  },

  "reinforced_leather_chest": {
    "id": "reinforced_leather_chest",
    "name": "🦺 Reinforced Leather Chestplate",
    "category": "armor",
    "armorSlot": "chest",
    "armorSet": "reinforced_leather",
    "rarity": "uncommon",
    "description": "Chest piece of the Reinforced Leather set.",
    "buyPrice": 155,
    "sellPrice": 77,
    "stats": {
      "defense": 19,
      "hp": 72,
      "agility": 6
    },
    "setBonus": null
  },

  "reinforced_leather_legs": {
    "id": "reinforced_leather_legs",
    "name": "👖 Reinforced Leather Leggings",
    "category": "armor",
    "armorSlot": "legs",
    "armorSet": "reinforced_leather",
    "rarity": "uncommon",
    "description": "Legs piece of the Reinforced Leather set.",
    "buyPrice": 125,
    "sellPrice": 62,
    "stats": {
      "defense": 15,
      "hp": 58,
      "agility": 5
    },
    "setBonus": null
  },

  "reinforced_leather_boots": {
    "id": "reinforced_leather_boots",
    "name": "🥾 Reinforced Leather Boots",
    "category": "armor",
    "armorSlot": "boots",
    "armorSet": "reinforced_leather",
    "rarity": "uncommon",
    "description": "Boots piece of the Reinforced Leather set.",
    "buyPrice": 105,
    "sellPrice": 52,
    "stats": {
      "defense": 13,
      "hp": 50,
      "agility": 4
    },
    "setBonus": null
  },

  "battle_leather_head": {
    "id": "battle_leather_head",
    "name": "🪖 Battle Leather Helmet",
    "category": "armor",
    "armorSlot": "head",
    "armorSet": "battle_leather",
    "rarity": "uncommon",
    "description": "Head piece of the Battle Leather set.",
    "buyPrice": 92,
    "sellPrice": 46,
    "stats": {
      "defense": 12,
      "hp": 41,
      "agility": 5
    },
    "setBonus": null
  },

  "battle_leather_chest": {
    "id": "battle_leather_chest",
    "name": "🦺 Battle Leather Chestplate",
    "category": "armor",
    "armorSlot": "chest",
    "armorSet": "battle_leather",
    "rarity": "uncommon",
    "description": "Chest piece of the Battle Leather set.",
    "buyPrice": 162,
    "sellPrice": 81,
    "stats": {
      "defense": 20,
      "hp": 71,
      "agility": 7
    },
    "setBonus": null
  },

  "battle_leather_legs": {
    "id": "battle_leather_legs",
    "name": "👖 Battle Leather Leggings",
    "category": "armor",
    "armorSlot": "legs",
    "armorSet": "battle_leather",
    "rarity": "uncommon",
    "description": "Legs piece of the Battle Leather set.",
    "buyPrice": 132,
    "sellPrice": 66,
    "stats": {
      "defense": 16,
      "hp": 57,
      "agility": 6
    },
    "setBonus": null
  },

  "battle_leather_boots": {
    "id": "battle_leather_boots",
    "name": "🥾 Battle Leather Boots",
    "category": "armor",
    "armorSlot": "boots",
    "armorSet": "battle_leather",
    "rarity": "uncommon",
    "description": "Boots piece of the Battle Leather set.",
    "buyPrice": 112,
    "sellPrice": 56,
    "stats": {
      "defense": 14,
      "hp": 49,
      "agility": 5
    },
    "setBonus": null
  },

  "silk_robes_head": {
    "id": "silk_robes_head",
    "name": "🪖 Silk Robes Helmet",
    "category": "armor",
    "armorSlot": "head",
    "armorSet": "silk_robes",
    "rarity": "uncommon",
    "description": "Head piece of the Silk Robes set.",
    "buyPrice": 88,
    "sellPrice": 44,
    "stats": {
      "defense": 10,
      "hp": 44,
      "mana": 25
    },
    "setBonus": null
  },

  "silk_robes_chest": {
    "id": "silk_robes_chest",
    "name": "🦺 Silk Robes Chestplate",
    "category": "armor",
    "armorSlot": "chest",
    "armorSet": "silk_robes",
    "rarity": "uncommon",
    "description": "Chest piece of the Silk Robes set.",
    "buyPrice": 158,
    "sellPrice": 79,
    "stats": {
      "defense": 18,
      "hp": 74,
      "mana": 40
    },
    "setBonus": null
  },

  "silk_robes_legs": {
    "id": "silk_robes_legs",
    "name": "👖 Silk Robes Leggings",
    "category": "armor",
    "armorSlot": "legs",
    "armorSet": "silk_robes",
    "rarity": "uncommon",
    "description": "Legs piece of the Silk Robes set.",
    "buyPrice": 128,
    "sellPrice": 64,
    "stats": {
      "defense": 14,
      "hp": 60,
      "mana": 32
    },
    "setBonus": null
  },

  "silk_robes_boots": {
    "id": "silk_robes_boots",
    "name": "🥾 Silk Robes Boots",
    "category": "armor",
    "armorSlot": "boots",
    "armorSet": "silk_robes",
    "rarity": "uncommon",
    "description": "Boots piece of the Silk Robes set.",
    "buyPrice": 108,
    "sellPrice": 54,
    "stats": {
      "defense": 12,
      "hp": 52,
      "mana": 25
    },
    "setBonus": null
  },

  "mystic_cloth_head": {
    "id": "mystic_cloth_head",
    "name": "🪖 Mystic Cloth Helmet",
    "category": "armor",
    "armorSlot": "head",
    "armorSet": "mystic_cloth",
    "rarity": "uncommon",
    "description": "Head piece of the Mystic Cloth set.",
    "buyPrice": 90,
    "sellPrice": 45,
    "stats": {
      "defense": 11,
      "hp": 43,
      "mana": 28
    },
    "setBonus": null
  },

  "mystic_cloth_chest": {
    "id": "mystic_cloth_chest",
    "name": "🦺 Mystic Cloth Chestplate",
    "category": "armor",
    "armorSlot": "chest",
    "armorSet": "mystic_cloth",
    "rarity": "uncommon",
    "description": "Chest piece of the Mystic Cloth set.",
    "buyPrice": 160,
    "sellPrice": 80,
    "stats": {
      "defense": 19,
      "hp": 73,
      "mana": 45
    },
    "setBonus": null
  },

  "mystic_cloth_legs": {
    "id": "mystic_cloth_legs",
    "name": "👖 Mystic Cloth Leggings",
    "category": "armor",
    "armorSlot": "legs",
    "armorSet": "mystic_cloth",
    "rarity": "uncommon",
    "description": "Legs piece of the Mystic Cloth set.",
    "buyPrice": 130,
    "sellPrice": 65,
    "stats": {
      "defense": 15,
      "hp": 59,
      "mana": 35
    },
    "setBonus": null
  },

  "mystic_cloth_boots": {
    "id": "mystic_cloth_boots",
    "name": "🥾 Mystic Cloth Boots",
    "category": "armor",
    "armorSlot": "boots",
    "armorSet": "mystic_cloth",
    "rarity": "uncommon",
    "description": "Boots piece of the Mystic Cloth set.",
    "buyPrice": 110,
    "sellPrice": 55,
    "stats": {
      "defense": 13,
      "hp": 51,
      "mana": 28
    },
    "setBonus": null
  },

  "plate_mail_head": {
    "id": "plate_mail_head",
    "name": "🪖 Plate Mail Helmet",
    "category": "armor",
    "armorSlot": "head",
    "armorSet": "plate_mail",
    "rarity": "uncommon",
    "description": "Head piece of the Plate Mail set.",
    "buyPrice": 100,
    "sellPrice": 50,
    "stats": {
      "defense": 14,
      "hp": 39
    },
    "setBonus": null
  },

  "plate_mail_chest": {
    "id": "plate_mail_chest",
    "name": "🦺 Plate Mail Chestplate",
    "category": "armor",
    "armorSlot": "chest",
    "armorSet": "plate_mail",
    "rarity": "uncommon",
    "description": "Chest piece of the Plate Mail set.",
    "buyPrice": 170,
    "sellPrice": 85,
    "stats": {
      "defense": 22,
      "hp": 69
    },
    "setBonus": null
  },

  "plate_mail_legs": {
    "id": "plate_mail_legs",
    "name": "👖 Plate Mail Leggings",
    "category": "armor",
    "armorSlot": "legs",
    "armorSet": "plate_mail",
    "rarity": "uncommon",
    "description": "Legs piece of the Plate Mail set.",
    "buyPrice": 140,
    "sellPrice": 70,
    "stats": {
      "defense": 18,
      "hp": 55
    },
    "setBonus": null
  },

  "plate_mail_boots": {
    "id": "plate_mail_boots",
    "name": "🥾 Plate Mail Boots",
    "category": "armor",
    "armorSlot": "boots",
    "armorSet": "plate_mail",
    "rarity": "uncommon",
    "description": "Boots piece of the Plate Mail set.",
    "buyPrice": 120,
    "sellPrice": 60,
    "stats": {
      "defense": 16,
      "hp": 47
    },
    "setBonus": null
  },

  "knight_armor_head": {
    "id": "knight_armor_head",
    "name": "🪖 Knight Armor Helmet",
    "category": "armor",
    "armorSlot": "head",
    "armorSet": "knight_armor",
    "rarity": "uncommon",
    "description": "Head piece of the Knight Armor set.",
    "buyPrice": 95,
    "sellPrice": 47,
    "stats": {
      "defense": 2,
      "hp": 40
    },
    "setBonus": null
  },

  "knight_armor_chest": {
    "id": "knight_armor_chest",
    "name": "🦺 Knight Armor Chestplate",
    "category": "armor",
    "armorSlot": "chest",
    "armorSet": "knight_armor",
    "rarity": "uncommon",
    "description": "Chest piece of the Knight Armor set.",
    "buyPrice": 165,
    "sellPrice": 82,
    "stats": {
      "defense": 3,
      "hp": 70
    },
    "setBonus": null
  },

  "knight_armor_legs": {
    "id": "knight_armor_legs",
    "name": "👖 Knight Armor Leggings",
    "category": "armor",
    "armorSlot": "legs",
    "armorSet": "knight_armor",
    "rarity": "uncommon",
    "description": "Legs piece of the Knight Armor set.",
    "buyPrice": 135,
    "sellPrice": 67,
    "stats": {
      "defense": 3,
      "hp": 56
    },
    "setBonus": null
  },

  "knight_armor_boots": {
    "id": "knight_armor_boots",
    "name": "🥾 Knight Armor Boots",
    "category": "armor",
    "armorSlot": "boots",
    "armorSet": "knight_armor",
    "rarity": "uncommon",
    "description": "Boots piece of the Knight Armor set.",
    "buyPrice": 115,
    "sellPrice": 57,
    "stats": {
      "defense": 2,
      "hp": 48
    },
    "setBonus": null
  },

  "hunter_gear_head": {
    "id": "hunter_gear_head",
    "name": "🪖 Hunter Gear Helmet",
    "category": "armor",
    "armorSlot": "head",
    "armorSet": "hunter_gear",
    "rarity": "uncommon",
    "description": "Head piece of the Hunter Gear set.",
    "buyPrice": 87,
    "sellPrice": 43,
    "stats": {
      "defense": 11,
      "hp": 43,
      "agility": 6
    },
    "setBonus": null
  },

  "hunter_gear_chest": {
    "id": "hunter_gear_chest",
    "name": "🦺 Hunter Gear Chestplate",
    "category": "armor",
    "armorSlot": "chest",
    "armorSet": "hunter_gear",
    "rarity": "uncommon",
    "description": "Chest piece of the Hunter Gear set.",
    "buyPrice": 157,
    "sellPrice": 78,
    "stats": {
      "defense": 19,
      "hp": 73,
      "agility": 8
    },
    "setBonus": null
  },

  "hunter_gear_legs": {
    "id": "hunter_gear_legs",
    "name": "👖 Hunter Gear Leggings",
    "category": "armor",
    "armorSlot": "legs",
    "armorSet": "hunter_gear",
    "rarity": "uncommon",
    "description": "Legs piece of the Hunter Gear set.",
    "buyPrice": 127,
    "sellPrice": 63,
    "stats": {
      "defense": 15,
      "hp": 59,
      "agility": 7
    },
    "setBonus": null
  },

  "hunter_gear_boots": {
    "id": "hunter_gear_boots",
    "name": "🥾 Hunter Gear Boots",
    "category": "armor",
    "armorSlot": "boots",
    "armorSet": "hunter_gear",
    "rarity": "uncommon",
    "description": "Boots piece of the Hunter Gear set.",
    "buyPrice": 107,
    "sellPrice": 53,
    "stats": {
      "defense": 13,
      "hp": 51,
      "agility": 6
    },
    "setBonus": null
  },

  "scholar_robes_head": {
    "id": "scholar_robes_head",
    "name": "🪖 Scholar Robes Helmet",
    "category": "armor",
    "armorSlot": "head",
    "armorSet": "scholar_robes",
    "rarity": "uncommon",
    "description": "Head piece of the Scholar Robes set.",
    "buyPrice": 85,
    "sellPrice": 42,
    "stats": {
      "defense": 10,
      "hp": 45,
      "mana": 30
    },
    "setBonus": null
  },

  "scholar_robes_chest": {
    "id": "scholar_robes_chest",
    "name": "🦺 Scholar Robes Chestplate",
    "category": "armor",
    "armorSlot": "chest",
    "armorSet": "scholar_robes",
    "rarity": "uncommon",
    "description": "Chest piece of the Scholar Robes set.",
    "buyPrice": 155,
    "sellPrice": 77,
    "stats": {
      "defense": 18,
      "hp": 75,
      "mana": 48
    },
    "setBonus": null
  },

  "scholar_robes_legs": {
    "id": "scholar_robes_legs",
    "name": "👖 Scholar Robes Leggings",
    "category": "armor",
    "armorSlot": "legs",
    "armorSet": "scholar_robes",
    "rarity": "uncommon",
    "description": "Legs piece of the Scholar Robes set.",
    "buyPrice": 125,
    "sellPrice": 62,
    "stats": {
      "defense": 14,
      "hp": 61,
      "mana": 38
    },
    "setBonus": null
  },

  "scholar_robes_boots": {
    "id": "scholar_robes_boots",
    "name": "🥾 Scholar Robes Boots",
    "category": "armor",
    "armorSlot": "boots",
    "armorSet": "scholar_robes",
    "rarity": "uncommon",
    "description": "Boots piece of the Scholar Robes set.",
    "buyPrice": 105,
    "sellPrice": 52,
    "stats": {
      "defense": 12,
      "hp": 53,
      "mana": 30
    },
    "setBonus": null
  },


  // ═══════════════════════════════════════════════════════
  // SHIELDS (15 total)
  // ═══════════════════════════════════════════════════════

  "wooden_shield": {
      "id": "wooden_shield",
      "name": "🛡️ Wooden Shield",
      "category": "shield",
      "rarity": "common",
      "description": "A basic wooden shield. Provides minimal protection.",
      "buyPrice": 40,
      "sellPrice": 20,
      "stats": {
          "defense": 5,
          "hp": 20,
          "blockChance": 5
      }
  },

  "iron_buckler": {
      "id": "iron_buckler",
      "name": "🛡️ Iron Buckler",
      "category": "shield",
      "rarity": "common",
      "description": "A small iron shield. Light and maneuverable.",
      "buyPrice": 50,
      "sellPrice": 25,
      "stats": {
          "defense": 6,
          "hp": 15,
          "blockChance": 8,
          "agility": 2
      }
  },

  "leather_shield": {
      "id": "leather_shield",
      "name": "🛡️ Leather Shield",
      "category": "shield",
      "rarity": "common",
      "description": "A shield reinforced with leather straps.",
      "buyPrice": 45,
      "sellPrice": 22,
      "stats": {
          "defense": 7,
          "hp": 25,
          "blockChance": 6
      }
  },

  "steel_shield": {
      "id": "steel_shield",
      "name": "🛡️ Steel Shield",
      "category": "shield",
      "rarity": "uncommon",
      "description": "A sturdy steel shield. Reliable defense.",
      "buyPrice": 120,
      "sellPrice": 60,
      "stats": {
          "defense": 12,
          "hp": 40,
          "blockChance": 10,
          "physicalDef": 5
      }
  },

  "knights_shield": {
      "id": "knights_shield",
      "name": "🛡️ Knight's Shield",
      "category": "shield",
      "rarity": "uncommon",
      "description": "A shield bearing a noble crest.",
      "buyPrice": 150,
      "sellPrice": 75,
      "stats": {
          "defense": 15,
          "hp": 50,
          "blockChance": 12,
          "physicalDef": 8
      }
  },

  "tower_shield": {
      "id": "tower_shield",
      "name": "🛡️ Tower Shield",
      "category": "shield",
      "rarity": "uncommon",
      "description": "A massive shield that covers the entire body.",
      "buyPrice": 180,
      "sellPrice": 90,
      "stats": {
          "defense": 18,
          "hp": 60,
          "blockChance": 15,
          "agility": -3
      }
  },

  "dragonscale_shield": {
      "id": "dragonscale_shield",
      "name": "🛡️ Dragonscale Shield",
      "category": "shield",
      "rarity": "rare",
      "description": "A shield crafted from dragon scales. Nearly impenetrable.",
      "buyPrice": 450,
      "sellPrice": 225,
      "stats": {
          "defense": 22,
          "hp": 70,
          "blockChance": 18,
          "physicalDef": 12,
          "magicalDef": 8
      }
  },

  "phoenix_shield": {
      "id": "phoenix_shield",
      "name": "🛡️ Phoenix Shield",
      "category": "shield",
      "rarity": "rare",
      "description": "A shield blessed by the phoenix. Grants vitality.",
      "buyPrice": 480,
      "sellPrice": 240,
      "stats": {
          "defense": 20,
          "hp": 80,
          "blockChance": 16,
          "physicalDef": 10,
          "magicalDef": 5
      }
  },

  "mirror_shield": {
      "id": "mirror_shield",
      "name": "🛡️ Mirror Shield",
      "category": "shield",
      "rarity": "rare",
      "description": "A polished shield that reflects magic.",
      "buyPrice": 500,
      "sellPrice": 250,
      "stats": {
          "defense": 18,
          "hp": 65,
          "blockChance": 20,
          "physicalDef": 8,
          "magicalDef": 15
      }
  },

  "aegis_shield": {
      "id": "aegis_shield",
      "name": "🛡️ Aegis Shield",
      "category": "shield",
      "rarity": "epic",
      "description": "The legendary shield of heroes. Unbreakable defense.",
      "buyPrice": 1200,
      "sellPrice": 600,
      "stats": {
          "defense": 30,
          "hp": 100,
          "blockChance": 25,
          "physicalDef": 18,
          "magicalDef": 12
      }
  },

  "guardian_shield": {
      "id": "guardian_shield",
      "name": "🛡️ Guardian Shield",
      "category": "shield",
      "rarity": "epic",
      "description": "A shield that protects its wielder from all harm.",
      "buyPrice": 1300,
      "sellPrice": 650,
      "stats": {
          "defense": 28,
          "hp": 120,
          "blockChance": 22,
          "physicalDef": 15,
          "magicalDef": 15
      }
  },

  "celestial_shield": {
      "id": "celestial_shield",
      "name": "🛡️ Celestial Shield",
      "category": "shield",
      "rarity": "epic",
      "description": "A shield blessed by celestial beings.",
      "buyPrice": 1400,
      "sellPrice": 700,
      "stats": {
          "defense": 26,
          "hp": 110,
          "blockChance": 28,
          "physicalDef": 12,
          "magicalDef": 18
      }
  },

  "shield_of_the_ancients": {
      "id": "shield_of_the_ancients",
      "name": "🛡️ Shield of the Ancients",
      "category": "shield",
      "rarity": "legendary",
      "description": "An ancient shield forged by the first civilization. Absolute protection.",
      "buyPrice": 0,
      "sellPrice": 4000,
      "stats": {
          "defense": 45,
          "hp": 150,
          "blockChance": 35,
          "physicalDef": 25,
          "magicalDef": 20,
          "attack": 10
      }
  },

  "bulwark_of_eternity": {
      "id": "bulwark_of_eternity",
      "name": "🛡️ Bulwark of Eternity",
      "category": "shield",
      "rarity": "legendary",
      "description": "A shield that has withstood the test of time. Eternal defense.",
      "buyPrice": 0,
      "sellPrice": 4500,
      "stats": {
          "defense": 50,
          "hp": 180,
          "blockChance": 40,
          "physicalDef": 30,
          "magicalDef": 25
      }
  },

  "void_barrier": {
      "id": "void_barrier",
      "name": "🛡️ Void Barrier",
      "category": "shield",
      "rarity": "legendary",
      "description": "A shield that absorbs all damage into the void.",
      "buyPrice": 0,
      "sellPrice": 5000,
      "stats": {
          "defense": 40,
          "hp": 140,
          "blockChance": 45,
          "physicalDef": 22,
          "magicalDef": 30,
          "mana": 50
      }
  },


  // ═══════════════════════════════════════════════════════
  // ACCESSORIES (15 total)
  // ═══════════════════════════════════════════════════════

  "copper_ring": {
      "id": "copper_ring",
      "name": "💍 Copper Ring",
      "category": "accessory",
      "rarity": "common",
      "description": "A simple copper ring. Provides minor benefits.",
      "buyPrice": 30,
      "sellPrice": 15,
      "stats": {
          "hp": 10,
          "attack": 2,
          "defense": 1
      }
  },

  "wooden_talisman": {
      "id": "wooden_talisman",
      "name": "🪬 Wooden Talisman",
      "category": "accessory",
      "rarity": "common",
      "description": "A carved wooden charm.",
      "buyPrice": 35,
      "sellPrice": 17,
      "stats": {
          "hp": 15,
          "mana": 5,
          "luck": 1
      }
  },

  "leather_amulet": {
      "id": "leather_amulet",
      "name": "📿 Leather Amulet",
      "category": "accessory",
      "rarity": "common",
      "description": "An amulet made from leather cord.",
      "buyPrice": 40,
      "sellPrice": 20,
      "stats": {
          "defense": 3,
          "agility": 2,
          "hp": 12
      }
  },

  "silver_ring": {
      "id": "silver_ring",
      "name": "💍 Silver Ring",
      "category": "accessory",
      "rarity": "uncommon",
      "description": "A polished silver ring with minor enchantments.",
      "buyPrice": 100,
      "sellPrice": 50,
      "stats": {
          "hp": 25,
          "attack": 5,
          "defense": 3,
          "mana": 10
      }
  },

  "jade_talisman": {
      "id": "jade_talisman",
      "name": "🪬 Jade Talisman",
      "category": "accessory",
      "rarity": "uncommon",
      "description": "A talisman carved from precious jade.",
      "buyPrice": 120,
      "sellPrice": 60,
      "stats": {
          "hp": 30,
          "mana": 20,
          "luck": 3,
          "agility": 2
      }
  },

  "iron_amulet": {
      "id": "iron_amulet",
      "name": "📿 Iron Amulet",
      "category": "accessory",
      "rarity": "uncommon",
      "description": "A sturdy iron amulet.",
      "buyPrice": 110,
      "sellPrice": 55,
      "stats": {
          "defense": 8,
          "hp": 35,
          "physicalDef": 5
      }
  },

  "gold_ring": {
      "id": "gold_ring",
      "name": "💍 Gold Ring",
      "category": "accessory",
      "rarity": "rare",
      "description": "A magnificent gold ring with powerful enchantments.",
      "buyPrice": 400,
      "sellPrice": 200,
      "stats": {
          "hp": 50,
          "attack": 10,
          "defense": 8,
          "mana": 25,
          "luck": 5
      }
  },

  "crystal_talisman": {
      "id": "crystal_talisman",
      "name": "🪬 Crystal Talisman",
      "category": "accessory",
      "rarity": "rare",
      "description": "A talisman made from pure crystal.",
      "buyPrice": 450,
      "sellPrice": 225,
      "stats": {
          "hp": 45,
          "mana": 40,
          "magicalAtk": 8,
          "magicalDef": 10,
          "luck": 4
      }
  },

  "dragon_amulet": {
      "id": "dragon_amulet",
      "name": "📿 Dragon Amulet",
      "category": "accessory",
      "rarity": "rare",
      "description": "An amulet bearing a dragon's crest.",
      "buyPrice": 480,
      "sellPrice": 240,
      "stats": {
          "defense": 12,
          "hp": 60,
          "attack": 8,
          "physicalDef": 10,
          "critChance": 5
      }
  },

  "platinum_ring": {
      "id": "platinum_ring",
      "name": "💍 Platinum Ring",
      "category": "accessory",
      "rarity": "epic",
      "description": "A rare platinum ring radiating power.",
      "buyPrice": 1000,
      "sellPrice": 500,
      "stats": {
          "hp": 80,
          "attack": 15,
          "defense": 12,
          "mana": 40,
          "luck": 8,
          "critChance": 8
      }
  },

  "phoenix_talisman": {
      "id": "phoenix_talisman",
      "name": "🪬 Phoenix Talisman",
      "category": "accessory",
      "rarity": "epic",
      "description": "A talisman blessed by the phoenix.",
      "buyPrice": 1100,
      "sellPrice": 550,
      "stats": {
          "hp": 100,
          "mana": 60,
          "magicalAtk": 15,
          "magicalDef": 15,
          "defense": 10
      }
  },

  "titans_amulet": {
      "id": "titans_amulet",
      "name": "📿 Titan's Amulet",
      "category": "accessory",
      "rarity": "epic",
      "description": "An amulet worn by ancient titans.",
      "buyPrice": 1200,
      "sellPrice": 600,
      "stats": {
          "defense": 18,
          "hp": 120,
          "attack": 12,
          "physicalDef": 18,
          "agility": 5
      }
  },

  "ring_of_eternity": {
      "id": "ring_of_eternity",
      "name": "💍 Ring of Eternity",
      "category": "accessory",
      "rarity": "legendary",
      "description": "A ring that transcends time itself. Grants immense power.",
      "buyPrice": 0,
      "sellPrice": 3000,
      "stats": {
          "hp": 150,
          "mana": 80,
          "attack": 25,
          "defense": 20,
          "luck": 15,
          "critChance": 15,
          "agility": 10
      }
  },

  "celestial_talisman": {
      "id": "celestial_talisman",
      "name": "🪬 Celestial Talisman",
      "category": "accessory",
      "rarity": "legendary",
      "description": "A talisman from the heavens. Divine protection.",
      "buyPrice": 0,
      "sellPrice": 3500,
      "stats": {
          "hp": 180,
          "mana": 100,
          "magicalAtk": 30,
          "magicalDef": 25,
          "physicalDef": 15,
          "defense": 18
      }
  },

  "void_amulet": {
      "id": "void_amulet",
      "name": "📿 Void Amulet",
      "category": "accessory",
      "rarity": "legendary",
      "description": "An amulet containing the essence of the void.",
      "buyPrice": 0,
      "sellPrice": 4000,
      "stats": {
          "hp": 200,
          "mana": 120,
          "attack": 30,
          "defense": 25,
          "magicalAtk": 25,
          "physicalDef": 20,
          "magicalDef": 20,
          "luck": 12
      }
  },


  // ═══════════════════════════════════════════════════════
  // ARMOR SETS (15 sets = 60 pieces)
  // ═══════════════════════════════════════════════════════

  "leather_head": {
      "id": "leather_head",
      "name": "🪖 Leather Head",
      "category": "armor",
      "armorSlot": "head",
      "armorSet": "leather",
      "rarity": "common",
      "description": "Head piece of the Leather set.",
      "buyPrice": 30,
      "sellPrice": 15,
      "stats": {
          "defense": 5,
          "hp": 21,
          "agility": 2
      },
      "setBonus": null
  },

  "leather_chest": {
      "id": "leather_chest",
      "name": "🦺 Leather Chest",
      "category": "armor",
      "armorSlot": "chest",
      "armorSet": "leather",
      "rarity": "common",
      "description": "Chest piece of the Leather set.",
      "buyPrice": 50,
      "sellPrice": 25,
      "stats": {
          "defense": 10,
          "hp": 39,
          "agility": 3
      },
      "setBonus": null
  },

  "leather_legs": {
      "id": "leather_legs",
      "name": "👖 Leather Legs",
      "category": "armor",
      "armorSlot": "legs",
      "armorSet": "leather",
      "rarity": "common",
      "description": "Legs piece of the Leather set.",
      "buyPrice": 40,
      "sellPrice": 20,
      "stats": {
          "defense": 8,
          "hp": 30,
          "agility": 3
      },
      "setBonus": null
  },

  "leather_boots": {
      "id": "leather_boots",
      "name": "🥾 Leather Boots",
      "category": "armor",
      "armorSlot": "boots",
      "armorSet": "leather",
      "rarity": "common",
      "description": "Boots piece of the Leather set.",
      "buyPrice": 35,
      "sellPrice": 17.5,
      "stats": {
          "defense": 6,
          "hp": 24,
          "agility": 2
      },
      "setBonus": null
  },

  "cloth_head": {
      "id": "cloth_head",
      "name": "🪖 Cloth Head",
      "category": "armor",
      "armorSlot": "head",
      "armorSet": "cloth",
      "rarity": "common",
      "description": "Head piece of the Cloth set.",
      "buyPrice": 30,
      "sellPrice": 15,
      "stats": {
          "defense": 3,
          "hp": 17,
          "mana": 10,
          "magicalDef": 3
      },
      "setBonus": null
  },

  "cloth_chest": {
      "id": "cloth_chest",
      "name": "🦺 Cloth Chest",
      "category": "armor",
      "armorSlot": "chest",
      "armorSet": "cloth",
      "rarity": "common",
      "description": "Chest piece of the Cloth set.",
      "buyPrice": 50,
      "sellPrice": 25,
      "stats": {
          "defense": 6,
          "hp": 32,
          "mana": 19,
          "magicalDef": 6
      },
      "setBonus": null
  },

  "cloth_legs": {
      "id": "cloth_legs",
      "name": "👖 Cloth Legs",
      "category": "armor",
      "armorSlot": "legs",
      "armorSet": "cloth",
      "rarity": "common",
      "description": "Legs piece of the Cloth set.",
      "buyPrice": 40,
      "sellPrice": 20,
      "stats": {
          "defense": 5,
          "hp": 25,
          "mana": 15,
          "magicalDef": 5
      },
      "setBonus": null
  },

  "cloth_boots": {
      "id": "cloth_boots",
      "name": "🥾 Cloth Boots",
      "category": "armor",
      "armorSlot": "boots",
      "armorSet": "cloth",
      "rarity": "common",
      "description": "Boots piece of the Cloth set.",
      "buyPrice": 35,
      "sellPrice": 17.5,
      "stats": {
          "defense": 4,
          "hp": 20,
          "mana": 12,
          "magicalDef": 4
      },
      "setBonus": null
  },

  "iron_head": {
      "id": "iron_head",
      "name": "🪖 Iron Head",
      "category": "armor",
      "armorSlot": "head",
      "armorSet": "iron",
      "rarity": "common",
      "description": "Head piece of the Iron set.",
      "buyPrice": 30,
      "sellPrice": 15,
      "stats": {
          "defense": 8,
          "hp": 28,
          "physicalDef": 5
      },
      "setBonus": null
  },

  "iron_chest": {
      "id": "iron_chest",
      "name": "🦺 Iron Chest",
      "category": "armor",
      "armorSlot": "chest",
      "armorSet": "iron",
      "rarity": "common",
      "description": "Chest piece of the Iron set.",
      "buyPrice": 50,
      "sellPrice": 25,
      "stats": {
          "defense": 15,
          "hp": 52,
          "physicalDef": 10
      },
      "setBonus": null
  },

  "iron_legs": {
      "id": "iron_legs",
      "name": "👖 Iron Legs",
      "category": "armor",
      "armorSlot": "legs",
      "armorSet": "iron",
      "rarity": "common",
      "description": "Legs piece of the Iron set.",
      "buyPrice": 40,
      "sellPrice": 20,
      "stats": {
          "defense": 12,
          "hp": 40,
          "physicalDef": 8
      },
      "setBonus": null
  },

  "iron_boots": {
      "id": "iron_boots",
      "name": "🥾 Iron Boots",
      "category": "armor",
      "armorSlot": "boots",
      "armorSet": "iron",
      "rarity": "common",
      "description": "Boots piece of the Iron set.",
      "buyPrice": 35,
      "sellPrice": 17.5,
      "stats": {
          "defense": 9,
          "hp": 32,
          "physicalDef": 6
      },
      "setBonus": null
  },

  "steel_head": {
      "id": "steel_head",
      "name": "🪖 Steel Head",
      "category": "armor",
      "armorSlot": "head",
      "armorSet": "steel",
      "rarity": "uncommon",
      "description": "Head piece of the Steel set.",
      "buyPrice": 80,
      "sellPrice": 40,
      "stats": {
          "defense": 12,
          "hp": 42,
          "physicalDef": 8,
          "agility": 1
      },
      "setBonus": null
  },

  "steel_chest": {
      "id": "steel_chest",
      "name": "🦺 Steel Chest",
      "category": "armor",
      "armorSlot": "chest",
      "armorSet": "steel",
      "rarity": "uncommon",
      "description": "Chest piece of the Steel set.",
      "buyPrice": 140,
      "sellPrice": 70,
      "stats": {
          "defense": 23,
          "hp": 78,
          "physicalDef": 15,
          "agility": 2
      },
      "setBonus": null
  },

  "steel_legs": {
      "id": "steel_legs",
      "name": "👖 Steel Legs",
      "category": "armor",
      "armorSlot": "legs",
      "armorSet": "steel",
      "rarity": "uncommon",
      "description": "Legs piece of the Steel set.",
      "buyPrice": 110,
      "sellPrice": 55,
      "stats": {
          "defense": 18,
          "hp": 60,
          "physicalDef": 12,
          "agility": 2
      },
      "setBonus": null
  },

  "steel_boots": {
      "id": "steel_boots",
      "name": "🥾 Steel Boots",
      "category": "armor",
      "armorSlot": "boots",
      "armorSet": "steel",
      "rarity": "uncommon",
      "description": "Boots piece of the Steel set.",
      "buyPrice": 90,
      "sellPrice": 45,
      "stats": {
          "defense": 14,
          "hp": 48,
          "physicalDef": 9,
          "agility": 1
      },
      "setBonus": null
  },

  "mage_robes_head": {
      "id": "mage_robes_head",
      "name": "🪖 Mage Robes Head",
      "category": "armor",
      "armorSlot": "head",
      "armorSet": "mage_robes",
      "rarity": "uncommon",
      "description": "Head piece of the Mage Robes set.",
      "buyPrice": 80,
      "sellPrice": 40,
      "stats": {
          "defense": 7,
          "hp": 35,
          "mana": 24,
          "magicalDef": 10,
          "magicalAtk": 5
      },
      "setBonus": null
  },

  "mage_robes_chest": {
      "id": "mage_robes_chest",
      "name": "🦺 Mage Robes Chest",
      "category": "armor",
      "armorSlot": "chest",
      "armorSet": "mage_robes",
      "rarity": "uncommon",
      "description": "Chest piece of the Mage Robes set.",
      "buyPrice": 140,
      "sellPrice": 70,
      "stats": {
          "defense": 13,
          "hp": 65,
          "mana": 45,
          "magicalDef": 19,
          "magicalAtk": 10
      },
      "setBonus": null
  },

  "mage_robes_legs": {
      "id": "mage_robes_legs",
      "name": "👖 Mage Robes Legs",
      "category": "armor",
      "armorSlot": "legs",
      "armorSet": "mage_robes",
      "rarity": "uncommon",
      "description": "Legs piece of the Mage Robes set.",
      "buyPrice": 110,
      "sellPrice": 55,
      "stats": {
          "defense": 10,
          "hp": 50,
          "mana": 35,
          "magicalDef": 15,
          "magicalAtk": 8
      },
      "setBonus": null
  },

  "mage_robes_boots": {
      "id": "mage_robes_boots",
      "name": "🥾 Mage Robes Boots",
      "category": "armor",
      "armorSlot": "boots",
      "armorSet": "mage_robes",
      "rarity": "uncommon",
      "description": "Boots piece of the Mage Robes set.",
      "buyPrice": 90,
      "sellPrice": 45,
      "stats": {
          "defense": 8,
          "hp": 40,
          "mana": 28,
          "magicalDef": 12,
          "magicalAtk": 6
      },
      "setBonus": null
  },

  "ranger_head": {
      "id": "ranger_head",
      "name": "🪖 Ranger Head",
      "category": "armor",
      "armorSlot": "head",
      "armorSet": "ranger",
      "rarity": "uncommon",
      "description": "Head piece of the Ranger set.",
      "buyPrice": 80,
      "sellPrice": 40,
      "stats": {
          "defense": 9,
          "hp": 38,
          "agility": 5,
          "critChance": 3,
          "physicalDef": 5
      },
      "setBonus": null
  },

  "ranger_chest": {
      "id": "ranger_chest",
      "name": "🦺 Ranger Chest",
      "category": "armor",
      "armorSlot": "chest",
      "armorSet": "ranger",
      "rarity": "uncommon",
      "description": "Chest piece of the Ranger set.",
      "buyPrice": 140,
      "sellPrice": 70,
      "stats": {
          "defense": 18,
          "hp": 71,
          "agility": 10,
          "critChance": 6,
          "physicalDef": 10
      },
      "setBonus": null
  },

  "ranger_legs": {
      "id": "ranger_legs",
      "name": "👖 Ranger Legs",
      "category": "armor",
      "armorSlot": "legs",
      "armorSet": "ranger",
      "rarity": "uncommon",
      "description": "Legs piece of the Ranger set.",
      "buyPrice": 110,
      "sellPrice": 55,
      "stats": {
          "defense": 14,
          "hp": 55,
          "agility": 8,
          "critChance": 5,
          "physicalDef": 8
      },
      "setBonus": null
  },

  "ranger_boots": {
      "id": "ranger_boots",
      "name": "🥾 Ranger Boots",
      "category": "armor",
      "armorSlot": "boots",
      "armorSet": "ranger",
      "rarity": "uncommon",
      "description": "Boots piece of the Ranger set.",
      "buyPrice": 90,
      "sellPrice": 45,
      "stats": {
          "defense": 11,
          "hp": 44,
          "agility": 6,
          "critChance": 4,
          "physicalDef": 6
      },
      "setBonus": null
  },

  "dragon_scale_head": {
      "id": "dragon_scale_head",
      "name": "🪖 Dragon Scale Head",
      "category": "armor",
      "armorSlot": "head",
      "armorSet": "dragon_scale",
      "rarity": "rare",
      "description": "Head piece of the Dragon Scale set.",
      "buyPrice": 250,
      "sellPrice": 125,
      "stats": {
          "defense": 19,
          "hp": 62,
          "physicalDef": 14,
          "magicalDef": 10,
          "attack": 3
      },
      "setBonus": {
          "requiredPieces": 4,
          "passives": [
              {
                  "id": "iron_skin",
                  "name": "Iron Skin",
                  "emoji": "🛡️",
                  "effect": "defense_boost",
                  "value": 5
              }
          ]
      }
  },

  "dragon_scale_chest": {
      "id": "dragon_scale_chest",
      "name": "🦺 Dragon Scale Chest",
      "category": "armor",
      "armorSlot": "chest",
      "armorSet": "dragon_scale",
      "rarity": "rare",
      "description": "Chest piece of the Dragon Scale set.",
      "buyPrice": 450,
      "sellPrice": 225,
      "stats": {
          "defense": 36,
          "hp": 117,
          "physicalDef": 26,
          "magicalDef": 19,
          "attack": 6
      },
      "setBonus": {
          "requiredPieces": 4,
          "passives": [
              {
                  "id": "iron_skin",
                  "name": "Iron Skin",
                  "emoji": "🛡️",
                  "effect": "defense_boost",
                  "value": 5
              }
          ]
      }
  },

  "dragon_scale_legs": {
      "id": "dragon_scale_legs",
      "name": "👖 Dragon Scale Legs",
      "category": "armor",
      "armorSlot": "legs",
      "armorSet": "dragon_scale",
      "rarity": "rare",
      "description": "Legs piece of the Dragon Scale set.",
      "buyPrice": 350,
      "sellPrice": 175,
      "stats": {
          "defense": 28,
          "hp": 90,
          "physicalDef": 20,
          "magicalDef": 15,
          "attack": 5
      },
      "setBonus": {
          "requiredPieces": 4,
          "passives": [
              {
                  "id": "iron_skin",
                  "name": "Iron Skin",
                  "emoji": "🛡️",
                  "effect": "defense_boost",
                  "value": 5
              }
          ]
      }
  },

  "dragon_scale_boots": {
      "id": "dragon_scale_boots",
      "name": "🥾 Dragon Scale Boots",
      "category": "armor",
      "armorSlot": "boots",
      "armorSet": "dragon_scale",
      "rarity": "rare",
      "description": "Boots piece of the Dragon Scale set.",
      "buyPrice": 280,
      "sellPrice": 140,
      "stats": {
          "defense": 22,
          "hp": 72,
          "physicalDef": 16,
          "magicalDef": 12,
          "attack": 4
      },
      "setBonus": {
          "requiredPieces": 4,
          "passives": [
              {
                  "id": "iron_skin",
                  "name": "Iron Skin",
                  "emoji": "🛡️",
                  "effect": "defense_boost",
                  "value": 5
              }
          ]
      }
  },

  "shadow_head": {
      "id": "shadow_head",
      "name": "🪖 Shadow Head",
      "category": "armor",
      "armorSlot": "head",
      "armorSet": "shadow",
      "rarity": "rare",
      "description": "Head piece of the Shadow set.",
      "buyPrice": 250,
      "sellPrice": 125,
      "stats": {
          "defense": 15,
          "hp": 52,
          "agility": 10,
          "critChance": 7,
          "physicalDef": 8
      },
      "setBonus": {
          "requiredPieces": 4,
          "passives": [
              {
                  "id": "nimble",
                  "name": "Nimble",
                  "emoji": "💨",
                  "effect": "dodge_boost",
                  "value": 15
              }
          ]
      }
  },

  "shadow_chest": {
      "id": "shadow_chest",
      "name": "🦺 Shadow Chest",
      "category": "armor",
      "armorSlot": "chest",
      "armorSet": "shadow",
      "rarity": "rare",
      "description": "Chest piece of the Shadow set.",
      "buyPrice": 450,
      "sellPrice": 225,
      "stats": {
          "defense": 28,
          "hp": 97,
          "agility": 19,
          "critChance": 13,
          "physicalDef": 15
      },
      "setBonus": {
          "requiredPieces": 4,
          "passives": [
              {
                  "id": "nimble",
                  "name": "Nimble",
                  "emoji": "💨",
                  "effect": "dodge_boost",
                  "value": 15
              }
          ]
      }
  },

  "shadow_legs": {
      "id": "shadow_legs",
      "name": "👖 Shadow Legs",
      "category": "armor",
      "armorSlot": "legs",
      "armorSet": "shadow",
      "rarity": "rare",
      "description": "Legs piece of the Shadow set.",
      "buyPrice": 350,
      "sellPrice": 175,
      "stats": {
          "defense": 22,
          "hp": 75,
          "agility": 15,
          "critChance": 10,
          "physicalDef": 12
      },
      "setBonus": {
          "requiredPieces": 4,
          "passives": [
              {
                  "id": "nimble",
                  "name": "Nimble",
                  "emoji": "💨",
                  "effect": "dodge_boost",
                  "value": 15
              }
          ]
      }
  },

  "shadow_boots": {
      "id": "shadow_boots",
      "name": "🥾 Shadow Boots",
      "category": "armor",
      "armorSlot": "boots",
      "armorSet": "shadow",
      "rarity": "rare",
      "description": "Boots piece of the Shadow set.",
      "buyPrice": 280,
      "sellPrice": 140,
      "stats": {
          "defense": 17,
          "hp": 60,
          "agility": 12,
          "critChance": 8,
          "physicalDef": 9
      },
      "setBonus": {
          "requiredPieces": 4,
          "passives": [
              {
                  "id": "nimble",
                  "name": "Nimble",
                  "emoji": "💨",
                  "effect": "dodge_boost",
                  "value": 15
              }
          ]
      }
  },

  "arcane_head": {
      "id": "arcane_head",
      "name": "🪖 Arcane Head",
      "category": "armor",
      "armorSlot": "head",
      "armorSet": "arcane",
      "rarity": "rare",
      "description": "Head piece of the Arcane set.",
      "buyPrice": 250,
      "sellPrice": 125,
      "stats": {
          "defense": 12,
          "hp": 56,
          "mana": 42,
          "magicalDef": 17,
          "magicalAtk": 12
      },
      "setBonus": {
          "requiredPieces": 4,
          "passives": [
              {
                  "id": "arcane_mind",
                  "name": "Arcane Mind",
                  "emoji": "💧",
                  "effect": "mana_regen",
                  "value": 6
              }
          ]
      }
  },

  "arcane_chest": {
      "id": "arcane_chest",
      "name": "🦺 Arcane Chest",
      "category": "armor",
      "armorSlot": "chest",
      "armorSet": "arcane",
      "rarity": "rare",
      "description": "Chest piece of the Arcane set.",
      "buyPrice": 450,
      "sellPrice": 225,
      "stats": {
          "defense": 23,
          "hp": 104,
          "mana": 78,
          "magicalDef": 32,
          "magicalAtk": 23
      },
      "setBonus": {
          "requiredPieces": 4,
          "passives": [
              {
                  "id": "arcane_mind",
                  "name": "Arcane Mind",
                  "emoji": "💧",
                  "effect": "mana_regen",
                  "value": 6
              }
          ]
      }
  },

  "arcane_legs": {
      "id": "arcane_legs",
      "name": "👖 Arcane Legs",
      "category": "armor",
      "armorSlot": "legs",
      "armorSet": "arcane",
      "rarity": "rare",
      "description": "Legs piece of the Arcane set.",
      "buyPrice": 350,
      "sellPrice": 175,
      "stats": {
          "defense": 18,
          "hp": 80,
          "mana": 60,
          "magicalDef": 25,
          "magicalAtk": 18
      },
      "setBonus": {
          "requiredPieces": 4,
          "passives": [
              {
                  "id": "arcane_mind",
                  "name": "Arcane Mind",
                  "emoji": "💧",
                  "effect": "mana_regen",
                  "value": 6
              }
          ]
      }
  },

  "arcane_boots": {
      "id": "arcane_boots",
      "name": "🥾 Arcane Boots",
      "category": "armor",
      "armorSlot": "boots",
      "armorSet": "arcane",
      "rarity": "rare",
      "description": "Boots piece of the Arcane set.",
      "buyPrice": 280,
      "sellPrice": 140,
      "stats": {
          "defense": 14,
          "hp": 64,
          "mana": 48,
          "magicalDef": 20,
          "magicalAtk": 14
      },
      "setBonus": {
          "requiredPieces": 4,
          "passives": [
              {
                  "id": "arcane_mind",
                  "name": "Arcane Mind",
                  "emoji": "💧",
                  "effect": "mana_regen",
                  "value": 6
              }
          ]
      }
  },

  "titan_head": {
      "id": "titan_head",
      "name": "🪖 Titan Head",
      "category": "armor",
      "armorSlot": "head",
      "armorSet": "titan",
      "rarity": "epic",
      "description": "Head piece of the Titan set.",
      "buyPrice": 700,
      "sellPrice": 350,
      "stats": {
          "defense": 28,
          "hp": 98,
          "physicalDef": 21,
          "magicalDef": 14,
          "attack": 7
      },
      "setBonus": {
          "requiredPieces": 4,
          "passives": [
              {
                  "id": "stone_skin",
                  "name": "Stone Skin",
                  "emoji": "🪨",
                  "effect": "defense_boost",
                  "value": 8
              }
          ]
      }
  },

  "titan_chest": {
      "id": "titan_chest",
      "name": "🦺 Titan Chest",
      "category": "armor",
      "armorSlot": "chest",
      "armorSet": "titan",
      "rarity": "epic",
      "description": "Chest piece of the Titan set.",
      "buyPrice": 1300,
      "sellPrice": 650,
      "stats": {
          "defense": 52,
          "hp": 182,
          "physicalDef": 39,
          "magicalDef": 26,
          "attack": 13
      },
      "setBonus": {
          "requiredPieces": 4,
          "passives": [
              {
                  "id": "stone_skin",
                  "name": "Stone Skin",
                  "emoji": "🪨",
                  "effect": "defense_boost",
                  "value": 8
              }
          ]
      }
  },

  "titan_legs": {
      "id": "titan_legs",
      "name": "👖 Titan Legs",
      "category": "armor",
      "armorSlot": "legs",
      "armorSet": "titan",
      "rarity": "epic",
      "description": "Legs piece of the Titan set.",
      "buyPrice": 1000,
      "sellPrice": 500,
      "stats": {
          "defense": 40,
          "hp": 140,
          "physicalDef": 30,
          "magicalDef": 20,
          "attack": 10
      },
      "setBonus": {
          "requiredPieces": 4,
          "passives": [
              {
                  "id": "stone_skin",
                  "name": "Stone Skin",
                  "emoji": "🪨",
                  "effect": "defense_boost",
                  "value": 8
              }
          ]
      }
  },

  "titan_boots": {
      "id": "titan_boots",
      "name": "🥾 Titan Boots",
      "category": "armor",
      "armorSlot": "boots",
      "armorSet": "titan",
      "rarity": "epic",
      "description": "Boots piece of the Titan set.",
      "buyPrice": 800,
      "sellPrice": 400,
      "stats": {
          "defense": 32,
          "hp": 112,
          "physicalDef": 24,
          "magicalDef": 16,
          "attack": 8
      },
      "setBonus": {
          "requiredPieces": 4,
          "passives": [
              {
                  "id": "stone_skin",
                  "name": "Stone Skin",
                  "emoji": "🪨",
                  "effect": "defense_boost",
                  "value": 8
              }
          ]
      }
  },

  "phantom_head": {
      "id": "phantom_head",
      "name": "🪖 Phantom Head",
      "category": "armor",
      "armorSlot": "head",
      "armorSet": "phantom",
      "rarity": "epic",
      "description": "Head piece of the Phantom set.",
      "buyPrice": 700,
      "sellPrice": 350,
      "stats": {
          "defense": 22,
          "hp": 84,
          "agility": 17,
          "critChance": 12,
          "physicalDef": 12,
          "luck": 5
      },
      "setBonus": {
          "requiredPieces": 4,
          "passives": [
              {
                  "id": "critical_eye",
                  "name": "Critical Eye",
                  "emoji": "🎯",
                  "effect": "crit_boost",
                  "value": 10
              }
          ]
      }
  },

  "phantom_chest": {
      "id": "phantom_chest",
      "name": "🦺 Phantom Chest",
      "category": "armor",
      "armorSlot": "chest",
      "armorSet": "phantom",
      "rarity": "epic",
      "description": "Chest piece of the Phantom set.",
      "buyPrice": 1300,
      "sellPrice": 650,
      "stats": {
          "defense": 41,
          "hp": 156,
          "agility": 32,
          "critChance": 23,
          "physicalDef": 23,
          "luck": 10
      },
      "setBonus": {
          "requiredPieces": 4,
          "passives": [
              {
                  "id": "critical_eye",
                  "name": "Critical Eye",
                  "emoji": "🎯",
                  "effect": "crit_boost",
                  "value": 10
              }
          ]
      }
  },

  "phantom_legs": {
      "id": "phantom_legs",
      "name": "👖 Phantom Legs",
      "category": "armor",
      "armorSlot": "legs",
      "armorSet": "phantom",
      "rarity": "epic",
      "description": "Legs piece of the Phantom set.",
      "buyPrice": 1000,
      "sellPrice": 500,
      "stats": {
          "defense": 32,
          "hp": 120,
          "agility": 25,
          "critChance": 18,
          "physicalDef": 18,
          "luck": 8
      },
      "setBonus": {
          "requiredPieces": 4,
          "passives": [
              {
                  "id": "critical_eye",
                  "name": "Critical Eye",
                  "emoji": "🎯",
                  "effect": "crit_boost",
                  "value": 10
              }
          ]
      }
  },

  "phantom_boots": {
      "id": "phantom_boots",
      "name": "🥾 Phantom Boots",
      "category": "armor",
      "armorSlot": "boots",
      "armorSet": "phantom",
      "rarity": "epic",
      "description": "Boots piece of the Phantom set.",
      "buyPrice": 800,
      "sellPrice": 400,
      "stats": {
          "defense": 25,
          "hp": 96,
          "agility": 20,
          "critChance": 14,
          "physicalDef": 14,
          "luck": 6
      },
      "setBonus": {
          "requiredPieces": 4,
          "passives": [
              {
                  "id": "critical_eye",
                  "name": "Critical Eye",
                  "emoji": "🎯",
                  "effect": "crit_boost",
                  "value": 10
              }
          ]
      }
  },

  "celestial_robes_head": {
      "id": "celestial_robes_head",
      "name": "🪖 Celestial Robes Head",
      "category": "armor",
      "armorSlot": "head",
      "armorSet": "celestial_robes",
      "rarity": "epic",
      "description": "Head piece of the Celestial Robes set.",
      "buyPrice": 700,
      "sellPrice": 350,
      "stats": {
          "defense": 10,
          "hp": 91,
          "mana": 70,
          "magicalDef": 24,
          "magicalAtk": 21
      },
      "setBonus": {
          "requiredPieces": 4,
          "passives": [
              {
                  "id": "mana_spring",
                  "name": "Mana Spring",
                  "emoji": "💧",
                  "effect": "mana_regen",
                  "value": 10
              }
          ]
      }
  },

  "celestial_robes_chest": {
      "id": "celestial_robes_chest",
      "name": "🦺 Celestial Robes Chest",
      "category": "armor",
      "armorSlot": "chest",
      "armorSet": "celestial_robes",
      "rarity": "epic",
      "description": "Chest piece of the Celestial Robes set.",
      "buyPrice": 1300,
      "sellPrice": 650,
      "stats": {
          "defense": 19,
          "hp": 169,
          "mana": 130,
          "magicalDef": 45,
          "magicalAtk": 39
      },
      "setBonus": {
          "requiredPieces": 4,
          "passives": [
              {
                  "id": "mana_spring",
                  "name": "Mana Spring",
                  "emoji": "💧",
                  "effect": "mana_regen",
                  "value": 10
              }
          ]
      }
  },

  "celestial_robes_legs": {
      "id": "celestial_robes_legs",
      "name": "👖 Celestial Robes Legs",
      "category": "armor",
      "armorSlot": "legs",
      "armorSet": "celestial_robes",
      "rarity": "epic",
      "description": "Legs piece of the Celestial Robes set.",
      "buyPrice": 1000,
      "sellPrice": 500,
      "stats": {
          "defense": 15,
          "hp": 130,
          "mana": 100,
          "magicalDef": 35,
          "magicalAtk": 30
      },
      "setBonus": {
          "requiredPieces": 4,
          "passives": [
              {
                  "id": "mana_spring",
                  "name": "Mana Spring",
                  "emoji": "💧",
                  "effect": "mana_regen",
                  "value": 10
              }
          ]
      }
  },

  "celestial_robes_boots": {
      "id": "celestial_robes_boots",
      "name": "🥾 Celestial Robes Boots",
      "category": "armor",
      "armorSlot": "boots",
      "armorSet": "celestial_robes",
      "rarity": "epic",
      "description": "Boots piece of the Celestial Robes set.",
      "buyPrice": 800,
      "sellPrice": 400,
      "stats": {
          "defense": 12,
          "hp": 104,
          "mana": 80,
          "magicalDef": 28,
          "magicalAtk": 24
      },
      "setBonus": {
          "requiredPieces": 4,
          "passives": [
              {
                  "id": "mana_spring",
                  "name": "Mana Spring",
                  "emoji": "💧",
                  "effect": "mana_regen",
                  "value": 10
              }
          ]
      }
  },

  "godslayer_head": {
      "id": "godslayer_head",
      "name": "🪖 Godslayer Head",
      "category": "armor",
      "armorSlot": "head",
      "armorSet": "godslayer",
      "rarity": "legendary",
      "description": "Head piece of the Godslayer set.",
      "buyPrice": 0,
      "sellPrice": 0,
      "stats": {
          "defense": 42,
          "hp": 140,
          "physicalDef": 31,
          "magicalDef": 24,
          "attack": 14,
          "agility": 7
      },
      "setBonus": {
          "requiredPieces": 4,
          "passives": [
              {
                  "id": "regeneration",
                  "name": "Regeneration",
                  "emoji": "💚",
                  "effect": "regen",
                  "value": 5
              },
              {
                  "id": "thick_hide",
                  "name": "Thick Hide",
                  "emoji": "🦏",
                  "effect": "damage_reduction",
                  "value": 3
              }
          ]
      }
  },

  "godslayer_chest": {
      "id": "godslayer_chest",
      "name": "🦺 Godslayer Chest",
      "category": "armor",
      "armorSlot": "chest",
      "armorSet": "godslayer",
      "rarity": "legendary",
      "description": "Chest piece of the Godslayer set.",
      "buyPrice": 0,
      "sellPrice": 0,
      "stats": {
          "defense": 78,
          "hp": 260,
          "physicalDef": 58,
          "magicalDef": 45,
          "attack": 26,
          "agility": 13
      },
      "setBonus": {
          "requiredPieces": 4,
          "passives": [
              {
                  "id": "regeneration",
                  "name": "Regeneration",
                  "emoji": "💚",
                  "effect": "regen",
                  "value": 5
              },
              {
                  "id": "thick_hide",
                  "name": "Thick Hide",
                  "emoji": "🦏",
                  "effect": "damage_reduction",
                  "value": 3
              }
          ]
      }
  },

  "godslayer_legs": {
      "id": "godslayer_legs",
      "name": "👖 Godslayer Legs",
      "category": "armor",
      "armorSlot": "legs",
      "armorSet": "godslayer",
      "rarity": "legendary",
      "description": "Legs piece of the Godslayer set.",
      "buyPrice": 0,
      "sellPrice": 0,
      "stats": {
          "defense": 60,
          "hp": 200,
          "physicalDef": 45,
          "magicalDef": 35,
          "attack": 20,
          "agility": 10
      },
      "setBonus": {
          "requiredPieces": 4,
          "passives": [
              {
                  "id": "regeneration",
                  "name": "Regeneration",
                  "emoji": "💚",
                  "effect": "regen",
                  "value": 5
              },
              {
                  "id": "thick_hide",
                  "name": "Thick Hide",
                  "emoji": "🦏",
                  "effect": "damage_reduction",
                  "value": 3
              }
          ]
      }
  },

  "godslayer_boots": {
      "id": "godslayer_boots",
      "name": "🥾 Godslayer Boots",
      "category": "armor",
      "armorSlot": "boots",
      "armorSet": "godslayer",
      "rarity": "legendary",
      "description": "Boots piece of the Godslayer set.",
      "buyPrice": 0,
      "sellPrice": 0,
      "stats": {
          "defense": 48,
          "hp": 160,
          "physicalDef": 36,
          "magicalDef": 28,
          "attack": 16,
          "agility": 8
      },
      "setBonus": {
          "requiredPieces": 4,
          "passives": [
              {
                  "id": "regeneration",
                  "name": "Regeneration",
                  "emoji": "💚",
                  "effect": "regen",
                  "value": 5
              },
              {
                  "id": "thick_hide",
                  "name": "Thick Hide",
                  "emoji": "🦏",
                  "effect": "damage_reduction",
                  "value": 3
              }
          ]
      }
  },

  "void_walker_head": {
      "id": "void_walker_head",
      "name": "🪖 Void Walker Head",
      "category": "armor",
      "armorSlot": "head",
      "armorSet": "void_walker",
      "rarity": "legendary",
      "description": "Head piece of the Void Walker set.",
      "buyPrice": 0,
      "sellPrice": 0,
      "stats": {
          "defense": 35,
          "hp": 125,
          "agility": 24,
          "critChance": 21,
          "physicalDef": 21,
          "magicalDef": 21,
          "luck": 10
      },
      "setBonus": {
          "requiredPieces": 4,
          "passives": [
              {
                  "id": "vampiric",
                  "name": "Vampiric",
                  "emoji": "🧛",
                  "effect": "lifesteal",
                  "value": 20
              },
              {
                  "id": "shadow_step",
                  "name": "Shadow Step",
                  "emoji": "👤",
                  "effect": "agility_to_dodge",
                  "value": 1
              }
          ]
      }
  },

  "void_walker_chest": {
      "id": "void_walker_chest",
      "name": "🦺 Void Walker Chest",
      "category": "armor",
      "armorSlot": "chest",
      "armorSet": "void_walker",
      "rarity": "legendary",
      "description": "Chest piece of the Void Walker set.",
      "buyPrice": 0,
      "sellPrice": 0,
      "stats": {
          "defense": 65,
          "hp": 234,
          "agility": 45,
          "critChance": 39,
          "physicalDef": 39,
          "magicalDef": 39,
          "luck": 19
      },
      "setBonus": {
          "requiredPieces": 4,
          "passives": [
              {
                  "id": "vampiric",
                  "name": "Vampiric",
                  "emoji": "🧛",
                  "effect": "lifesteal",
                  "value": 20
              },
              {
                  "id": "shadow_step",
                  "name": "Shadow Step",
                  "emoji": "👤",
                  "effect": "agility_to_dodge",
                  "value": 1
              }
          ]
      }
  },

  "void_walker_legs": {
      "id": "void_walker_legs",
      "name": "👖 Void Walker Legs",
      "category": "armor",
      "armorSlot": "legs",
      "armorSet": "void_walker",
      "rarity": "legendary",
      "description": "Legs piece of the Void Walker set.",
      "buyPrice": 0,
      "sellPrice": 0,
      "stats": {
          "defense": 50,
          "hp": 180,
          "agility": 35,
          "critChance": 30,
          "physicalDef": 30,
          "magicalDef": 30,
          "luck": 15
      },
      "setBonus": {
          "requiredPieces": 4,
          "passives": [
              {
                  "id": "vampiric",
                  "name": "Vampiric",
                  "emoji": "🧛",
                  "effect": "lifesteal",
                  "value": 20
              },
              {
                  "id": "shadow_step",
                  "name": "Shadow Step",
                  "emoji": "👤",
                  "effect": "agility_to_dodge",
                  "value": 1
              }
          ]
      }
  },

  "void_walker_boots": {
      "id": "void_walker_boots",
      "name": "🥾 Void Walker Boots",
      "category": "armor",
      "armorSlot": "boots",
      "armorSet": "void_walker",
      "rarity": "legendary",
      "description": "Boots piece of the Void Walker set.",
      "buyPrice": 0,
      "sellPrice": 0,
      "stats": {
          "defense": 40,
          "hp": 144,
          "agility": 28,
          "critChance": 24,
          "physicalDef": 24,
          "magicalDef": 24,
          "luck": 12
      },
      "setBonus": {
          "requiredPieces": 4,
          "passives": [
              {
                  "id": "vampiric",
                  "name": "Vampiric",
                  "emoji": "🧛",
                  "effect": "lifesteal",
                  "value": 20
              },
              {
                  "id": "shadow_step",
                  "name": "Shadow Step",
                  "emoji": "👤",
                  "effect": "agility_to_dodge",
                  "value": 1
              }
          ]
      }
  },

  "eternal_sage_head": {
      "id": "eternal_sage_head",
      "name": "🪖 Eternal Sage Head",
      "category": "armor",
      "armorSlot": "head",
      "armorSet": "eternal_sage",
      "rarity": "legendary",
      "description": "Head piece of the Eternal Sage set.",
      "buyPrice": 0,
      "sellPrice": 0,
      "stats": {
          "defense": 31,
          "hp": 133,
          "mana": 105,
          "magicalDef": 35,
          "magicalAtk": 35,
          "physicalDef": 17
      },
      "setBonus": {
          "requiredPieces": 4,
          "passives": [
              {
                  "id": "mana_efficiency",
                  "name": "Mana Efficiency",
                  "emoji": "💎",
                  "effect": "mana_cost_reduction",
                  "value": 20
              },
              {
                  "id": "magic_resistance",
                  "name": "Magic Resistance",
                  "emoji": "✨",
                  "effect": "magical_def_boost",
                  "value": 10
              }
          ]
      }
  },

  "eternal_sage_chest": {
      "id": "eternal_sage_chest",
      "name": "🦺 Eternal Sage Chest",
      "category": "armor",
      "armorSlot": "chest",
      "armorSet": "eternal_sage",
      "rarity": "legendary",
      "description": "Chest piece of the Eternal Sage set.",
      "buyPrice": 0,
      "sellPrice": 0,
      "stats": {
          "defense": 58,
          "hp": 247,
          "mana": 195,
          "magicalDef": 65,
          "magicalAtk": 65,
          "physicalDef": 32
      },
      "setBonus": {
          "requiredPieces": 4,
          "passives": [
              {
                  "id": "mana_efficiency",
                  "name": "Mana Efficiency",
                  "emoji": "💎",
                  "effect": "mana_cost_reduction",
                  "value": 20
              },
              {
                  "id": "magic_resistance",
                  "name": "Magic Resistance",
                  "emoji": "✨",
                  "effect": "magical_def_boost",
                  "value": 10
              }
          ]
      }
  },

  "eternal_sage_legs": {
      "id": "eternal_sage_legs",
      "name": "👖 Eternal Sage Legs",
      "category": "armor",
      "armorSlot": "legs",
      "armorSet": "eternal_sage",
      "rarity": "legendary",
      "description": "Legs piece of the Eternal Sage set.",
      "buyPrice": 0,
      "sellPrice": 0,
      "stats": {
          "defense": 45,
          "hp": 190,
          "mana": 150,
          "magicalDef": 50,
          "magicalAtk": 50,
          "physicalDef": 25
      },
      "setBonus": {
          "requiredPieces": 4,
          "passives": [
              {
                  "id": "mana_efficiency",
                  "name": "Mana Efficiency",
                  "emoji": "💎",
                  "effect": "mana_cost_reduction",
                  "value": 20
              },
              {
                  "id": "magic_resistance",
                  "name": "Magic Resistance",
                  "emoji": "✨",
                  "effect": "magical_def_boost",
                  "value": 10
              }
          ]
      }
  },

  "eternal_sage_boots": {
      "id": "eternal_sage_boots",
      "name": "🥾 Eternal Sage Boots",
      "category": "armor",
      "armorSlot": "boots",
      "armorSet": "eternal_sage",
      "rarity": "legendary",
      "description": "Boots piece of the Eternal Sage set.",
      "buyPrice": 0,
      "sellPrice": 0,
      "stats": {
          "defense": 36,
          "hp": 152,
          "mana": 120,
          "magicalDef": 40,
          "magicalAtk": 40,
          "physicalDef": 20
      },
      "setBonus": {
          "requiredPieces": 4,
          "passives": [
              {
                  "id": "mana_efficiency",
                  "name": "Mana Efficiency",
                  "emoji": "💎",
                  "effect": "mana_cost_reduction",
                  "value": 20
              },
              {
                  "id": "magic_resistance",
                  "name": "Magic Resistance",
                  "emoji": "✨",
                  "effect": "magical_def_boost",
                  "value": 10
              }
          ]
      }
  },

  // ═══════════════════════════════════════════════════════
  // SKILL BOOKS
  // ═══════════════════════════════════════════════════════

  // Common Skill Books
  "skill_book_power_strike": {
    "id": "skill_book_power_strike",
    "name": "📚 Skill Book: Power Strike",
    "category": "skill_book",
    "description": "Teaches the Power Strike skill. A focused strike dealing 25 physical damage. (Warrior only, Level 3+)",
    "buyPrice": 500,
    "sellPrice": 250,
    "consumable": true,
    "usableInBattle": false,
    "usableOutside": true,
    "skillId": "power_strike",
    "requiredClass": ["warrior"],
    "requiredLevel": 3
  },

  "skill_book_quick_slash": {
    "id": "skill_book_quick_slash",
    "name": "📚 Skill Book: Quick Slash",
    "category": "skill_book",
    "description": "Teaches the Quick Slash skill. A fast slash dealing 18 physical damage. (Rogue only, Level 3+)",
    "buyPrice": 500,
    "sellPrice": 250,
    "consumable": true,
    "usableInBattle": false,
    "usableOutside": true,
    "skillId": "quick_slash",
    "requiredClass": ["rogue"],
    "requiredLevel": 3
  },

  "skill_book_magic_missile": {
    "id": "skill_book_magic_missile",
    "name": "📚 Skill Book: Magic Missile",
    "category": "skill_book",
    "description": "Teaches the Magic Missile skill. Fires a bolt of pure magic dealing 22 magical damage. (Mage only, Level 3+)",
    "buyPrice": 500,
    "sellPrice": 250,
    "consumable": true,
    "usableInBattle": false,
    "usableOutside": true,
    "skillId": "magic_missile",
    "requiredClass": ["mage"],
    "requiredLevel": 3
  },

  "skill_book_minor_heal": {
    "id": "skill_book_minor_heal",
    "name": "📚 Skill Book: Minor Heal",
    "category": "skill_book",
    "description": "Teaches the Minor Heal skill. Restores 20 HP. (All classes, Level 2+)",
    "buyPrice": 400,
    "sellPrice": 200,
    "consumable": true,
    "usableInBattle": false,
    "usableOutside": true,
    "skillId": "minor_heal",
    "requiredClass": ["all"],
    "requiredLevel": 2
  },

  "skill_book_taunt": {
    "id": "skill_book_taunt",
    "name": "📚 Skill Book: Taunt",
    "category": "skill_book",
    "description": "Teaches the Taunt skill. Forces enemy to target you for 2 rounds. (Warrior only, Level 4+)",
    "buyPrice": 600,
    "sellPrice": 300,
    "consumable": true,
    "usableInBattle": false,
    "usableOutside": true,
    "skillId": "taunt",
    "requiredClass": ["warrior"],
    "requiredLevel": 4
  },

  // Uncommon Skill Books
  "skill_book_poison_blade": {
    "id": "skill_book_poison_blade",
    "name": "📚 Skill Book: Poison Blade",
    "category": "skill_book",
    "description": "Teaches the Poison Blade skill. Deals 10 hybrid damage + 7 poison/turn for 4 turns. (Rogue only, Level 6+)",
    "buyPrice": 1200,
    "sellPrice": 600,
    "consumable": true,
    "usableInBattle": false,
    "usableOutside": true,
    "skillId": "poison_blade",
    "requiredClass": ["rogue"],
    "requiredLevel": 6
  },

  "skill_book_battle_cry": {
    "id": "skill_book_battle_cry",
    "name": "📚 Skill Book: Battle Cry",
    "category": "skill_book",
    "description": "Teaches the Battle Cry skill. Increases attack by 10 for 3 rounds. (Warrior only, Level 6+)",
    "buyPrice": 1200,
    "sellPrice": 600,
    "consumable": true,
    "usableInBattle": false,
    "usableOutside": true,
    "skillId": "battle_cry",
    "requiredClass": ["warrior"],
    "requiredLevel": 6
  },

  "skill_book_ice_lance": {
    "id": "skill_book_ice_lance",
    "name": "📚 Skill Book: Ice Lance",
    "category": "skill_book",
    "description": "Teaches the Ice Lance skill. Deals 28 magical damage and slows enemy. (Mage only, Level 6+)",
    "buyPrice": 1200,
    "sellPrice": 600,
    "consumable": true,
    "usableInBattle": false,
    "usableOutside": true,
    "skillId": "ice_lance",
    "requiredClass": ["mage"],
    "requiredLevel": 6
  },

  "skill_book_smoke_bomb": {
    "id": "skill_book_smoke_bomb",
    "name": "📚 Skill Book: Smoke Bomb",
    "category": "skill_book",
    "description": "Teaches the Smoke Bomb skill. Increases evasion by 30% for 2 rounds. (Rogue only, Level 7+)",
    "buyPrice": 1500,
    "sellPrice": 750,
    "consumable": true,
    "usableInBattle": false,
    "usableOutside": true,
    "skillId": "smoke_bomb",
    "requiredClass": ["rogue"],
    "requiredLevel": 7
  },

  // Rare Skill Books
  "skill_book_whirlwind": {
    "id": "skill_book_whirlwind",
    "name": "📚 Skill Book: Whirlwind",
    "category": "skill_book",
    "description": "Teaches the Whirlwind skill. Deals 45 physical damage in a sweeping blow. (Warrior only, Level 10+)",
    "buyPrice": 3000,
    "sellPrice": 1500,
    "consumable": true,
    "usableInBattle": false,
    "usableOutside": true,
    "skillId": "whirlwind",
    "requiredClass": ["warrior"],
    "requiredLevel": 10
  },

  "skill_book_thunder_shock": {
    "id": "skill_book_thunder_shock",
    "name": "📚 Skill Book: Thunder Shock",
    "category": "skill_book",
    "description": "Teaches the Thunder Shock skill. Deals 38 magical damage and stuns for 1 turn. (Mage only, Level 10+)",
    "buyPrice": 3000,
    "sellPrice": 1500,
    "consumable": true,
    "usableInBattle": false,
    "usableOutside": true,
    "skillId": "thunder_shock",
    "requiredClass": ["mage"],
    "requiredLevel": 10
  },

  "skill_book_ambush": {
    "id": "skill_book_ambush",
    "name": "📚 Skill Book: Ambush",
    "category": "skill_book",
    "description": "Teaches the Ambush skill. Deals 30 physical damage + 10 bleed/turn for 4 turns. (Rogue only, Level 10+)",
    "buyPrice": 3000,
    "sellPrice": 1500,
    "consumable": true,
    "usableInBattle": false,
    "usableOutside": true,
    "skillId": "ambush",
    "requiredClass": ["rogue"],
    "requiredLevel": 10
  },

  "skill_book_mana_drain": {
    "id": "skill_book_mana_drain",
    "name": "📚 Skill Book: Mana Drain",
    "category": "skill_book",
    "description": "Teaches the Mana Drain skill. Drains 40 mana and deals 15 magical damage. (Mage/Rogue, Level 9+)",
    "buyPrice": 2500,
    "sellPrice": 1250,
    "consumable": true,
    "usableInBattle": false,
    "usableOutside": true,
    "skillId": "mana_drain",
    "requiredClass": ["mage", "rogue"],
    "requiredLevel": 9
  },

  // Super Rare Skill Books
  "skill_book_blade_storm": {
    "id": "skill_book_blade_storm",
    "name": "📚 Skill Book: Blade Storm",
    "category": "skill_book",
    "description": "Teaches the Blade Storm skill. Unleashes 70 hybrid damage. (Warrior/Rogue, Level 15+)",
    "buyPrice": 8000,
    "sellPrice": 4000,
    "consumable": true,
    "usableInBattle": false,
    "usableOutside": true,
    "skillId": "blade_storm",
    "requiredClass": ["warrior", "rogue"],
    "requiredLevel": 15
  },

  "skill_book_meteor": {
    "id": "skill_book_meteor",
    "name": "📚 Skill Book: Meteor",
    "category": "skill_book",
    "description": "Teaches the Meteor skill. Deals 60 magical damage + 15 burn/turn for 3 turns. (Mage only, Level 15+)",
    "buyPrice": 8000,
    "sellPrice": 4000,
    "consumable": true,
    "usableInBattle": false,
    "usableOutside": true,
    "skillId": "meteor",
    "requiredClass": ["mage"],
    "requiredLevel": 15
  },

  "skill_book_death_mark": {
    "id": "skill_book_death_mark",
    "name": "📚 Skill Book: Death Mark",
    "category": "skill_book",
    "description": "Teaches the Death Mark skill. Execute: deals 50% max HP if enemy HP < 20%. (Rogue only, Level 14+)",
    "buyPrice": 10000,
    "sellPrice": 5000,
    "consumable": true,
    "usableInBattle": false,
    "usableOutside": true,
    "skillId": "death_mark",
    "requiredClass": ["rogue"],
    "requiredLevel": 14
  },

  // Ultra Rare Skill Books
  "skill_book_divine_shield": {
    "id": "skill_book_divine_shield",
    "name": "📚 Skill Book: Divine Shield",
    "category": "skill_book",
    "description": "Teaches the Divine Shield skill. Absorbs ALL damage for 1 round. (Warrior only, Level 20+)",
    "buyPrice": 20000,
    "sellPrice": 10000,
    "consumable": true,
    "usableInBattle": false,
    "usableOutside": true,
    "skillId": "divine_shield",
    "requiredClass": ["warrior"],
    "requiredLevel": 20
  },

  "skill_book_void_rift": {
    "id": "skill_book_void_rift",
    "name": "📚 Skill Book: Void Rift",
    "category": "skill_book",
    "description": "Teaches the Void Rift skill. Deals 80 magical damage and silences for 3 turns. (Mage only, Level 20+)",
    "buyPrice": 20000,
    "sellPrice": 10000,
    "consumable": true,
    "usableInBattle": false,
    "usableOutside": true,
    "skillId": "void_rift",
    "requiredClass": ["mage"],
    "requiredLevel": 20
  },

  // ═══════════════════════════════════════════════════════
  // PET ITEMS (5 total) - For future pet leveling system
  // ═══════════════════════════════════════════════════════

  "pet_treat_basic": {
    "id": "pet_treat_basic",
    "name": "🍖 Basic Pet Treat",
    "category": "consumable",
    "shopCategory": "pet_items",
    "description": "A simple treat that pets love. Grants 50 pet XP.",
    "buyPrice": 100,
    "sellPrice": 50,
    "consumable": true,
    "usableInBattle": false,
    "usableOutside": true,
    "target": "pet",
    "effect": "pet_xp",
    "value": 50
  },

  "pet_treat_premium": {
    "id": "pet_treat_premium",
    "name": "🥩 Premium Pet Treat",
    "category": "consumable",
    "shopCategory": "pet_items",
    "description": "A high-quality treat for discerning pets. Grants 150 pet XP.",
    "buyPrice": 300,
    "sellPrice": 150,
    "consumable": true,
    "usableInBattle": false,
    "usableOutside": true,
    "target": "pet",
    "effect": "pet_xp",
    "value": 150
  },

  "pet_elixir": {
    "id": "pet_elixir",
    "name": "🧪 Pet Growth Elixir",
    "category": "consumable",
    "shopCategory": "pet_items",
    "description": "A magical elixir that accelerates pet growth. Grants 500 pet XP.",
    "buyPrice": 1000,
    "sellPrice": 500,
    "consumable": true,
    "usableInBattle": false,
    "usableOutside": true,
    "target": "pet",
    "effect": "pet_xp",
    "value": 500
  },

  "pet_bond_crystal": {
    "id": "pet_bond_crystal",
    "name": "💎 Bond Crystal",
    "category": "consumable",
    "shopCategory": "pet_items",
    "description": "Strengthens the bond with your pet. Grants 1000 pet XP.",
    "buyPrice": 2500,
    "sellPrice": 1250,
    "consumable": true,
    "usableInBattle": false,
    "usableOutside": true,
    "target": "pet",
    "effect": "pet_xp",
    "value": 1000
  },

  "pet_skill_scroll": {
    "id": "pet_skill_scroll",
    "name": "📜 Pet Skill Scroll",
    "category": "consumable",
    "shopCategory": "pet_items",
    "description": "Teaches your pet a new trick. (Future feature)",
    "buyPrice": 5000,
    "sellPrice": 2500,
    "consumable": true,
    "usableInBattle": false,
    "usableOutside": true,
    "target": "pet",
    "effect": "pet_skill",
    "value": 0
  }

};

// ── Negative effects that antidote removes ───────────────

export const negativeEffects = new Set([
  "poison", "burn", "bleed",
  "stun", "silence", "slow", "freeze",
  "blind", "curse",
  "debuff_atk", "debuff_def",
]);

// ── Helpers ──────────────────────────────────────────────

export function getItemById(id) {
  return items[id] || null;
}

export function getItemByName(name) {
  const normalized = name.trim().toLowerCase().replace(/\s+/g, "_");
  return items[normalized] || null;
}

export function getCombatItems() {
  return Object.values(items).filter((i) => i.usableInBattle);
}

export function getShopItems() {
  return Object.values(items).filter((i) => i.buyPrice > 0);
}

export function getShopItemsByCategory(category) {
  return Object.values(items).filter((i) => i.shopCategory === category && i.buyPrice > 0);
}

export function getAllCategories() {
  return ["consumables", "battle_items", "tools", "utility", "materials"];
}

export default items;
