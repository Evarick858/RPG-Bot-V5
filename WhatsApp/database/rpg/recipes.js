/*
  RPG Crafting Recipes Database
  Base : Lenwy SCM — RPG Extension

  Recipe discovery system:
  - Players discover recipes by having required materials in their bag
  - Use !study command at locations with shops to discover new recipes
  - Every result itemId, material, and discovery material MUST exist in items.js
*/

import { gatheringRecipes } from "./gatheringRecipes.js";

export const recipes = {
  // ═══════════════════════════════════════════════════════
  // WEAPONS
  // ═══════════════════════════════════════════════════════

  "iron_sword_recipe": {
    "id": "iron_sword_recipe",
    "name": "Iron Sword",
    "category": "weapon",
    "result": {
      "itemId": "iron_sword",
      "quantity": 1
    },
    "materials": [
      { "itemId": "iron_bar", "quantity": 3 },
      { "itemId": "oak_plank", "quantity": 1 }
    ],
    "discoveryMaterials": ["iron_bar"],
    "description": "Craft a sturdy iron sword"
  },

  "steel_sword_recipe": {
    "id": "steel_sword_recipe",
    "name": "Steel Sword",
    "category": "weapon",
    "result": {
      "itemId": "steel_sword",
      "quantity": 1
    },
    "materials": [
      { "itemId": "iron_bar", "quantity": 5 },
      { "itemId": "gold_bar", "quantity": 2 },
      { "itemId": "leather", "quantity": 1 }
    ],
    "discoveryMaterials": ["gold_bar"],
    "description": "Craft a refined steel sword"
  },

  "drake_blade_recipe": {
    "id": "drake_blade_recipe",
    "name": "Drake Blade",
    "category": "weapon",
    "result": {
      "itemId": "flamebrand_sword",
      "quantity": 1
    },
    "materials": [
      { "itemId": "drake_scale", "quantity": 5 },
      { "itemId": "fire_gland", "quantity": 3 },
      { "itemId": "iron_bar", "quantity": 10 },
      { "itemId": "dragon_tooth", "quantity": 2 }
    ],
    "discoveryMaterials": ["drake_scale", "fire_gland"],
    "description": "Forge a flaming blade from drake materials"
  },

  "crystal_heart_sword_recipe": {
    "id": "crystal_heart_sword_recipe",
    "name": "Crystal Heart Sword",
    "category": "weapon",
    "result": {
      "itemId": "dragonslayer_sword",
      "quantity": 1
    },
    "materials": [
      { "itemId": "crystal_heart", "quantity": 1 },
      { "itemId": "dragon_gem", "quantity": 3 },
      { "itemId": "titan_stone", "quantity": 5 },
      { "itemId": "gold_bar", "quantity": 20 }
    ],
    "discoveryMaterials": ["crystal_heart"],
    "description": "Forge the legendary dragonslayer sword"
  },

  "hunters_bow_recipe": {
    "id": "hunters_bow_recipe",
    "name": "Hunter's Bow",
    "category": "weapon",
    "result": {
      "itemId": "hunters_bow",
      "quantity": 1
    },
    "materials": [
      { "itemId": "oak_plank", "quantity": 4 },
      { "itemId": "spider_silk", "quantity": 3 },
      { "itemId": "leather", "quantity": 2 }
    ],
    "discoveryMaterials": ["spider_silk"],
    "description": "Craft a reliable hunting bow"
  },

  "venomfang_dagger_recipe": {
    "id": "venomfang_dagger_recipe",
    "name": "Venomfang Dagger",
    "category": "weapon",
    "result": {
      "itemId": "venomfang_dagger",
      "quantity": 1
    },
    "materials": [
      { "itemId": "scorpion_venom", "quantity": 5 },
      { "itemId": "serpent_venom", "quantity": 3 },
      { "itemId": "iron_bar", "quantity": 4 },
      { "itemId": "scorpion_stinger", "quantity": 2 }
    ],
    "discoveryMaterials": ["scorpion_venom", "serpent_venom"],
    "description": "Craft a deadly poisoned dagger"
  },

  "arcane_staff_recipe": {
    "id": "arcane_staff_recipe",
    "name": "Arcane Staff",
    "category": "weapon",
    "result": {
      "itemId": "arcane_staff",
      "quantity": 1
    },
    "materials": [
      { "itemId": "elemental_essence", "quantity": 5 },
      { "itemId": "cloud_essence", "quantity": 3 },
      { "itemId": "ancient_wood", "quantity": 2 },
      { "itemId": "sky_crystal", "quantity": 4 }
    ],
    "discoveryMaterials": ["elemental_essence", "cloud_essence"],
    "description": "Craft a powerful magical staff"
  },

  // ═══════════════════════════════════════════════════════
  // CONSUMABLES
  // ═══════════════════════════════════════════════════════

  "mega_potion_recipe": {
    "id": "mega_potion_recipe",
    "name": "Mega Potion",
    "category": "consumable",
    "result": {
      "itemId": "mega_potion",
      "quantity": 3
    },
    "materials": [
      { "itemId": "honey", "quantity": 5 },
      { "itemId": "butterfly_wing", "quantity": 3 },
      { "itemId": "fresh_fish", "quantity": 2 }
    ],
    "discoveryMaterials": ["honey", "butterfly_wing"],
    "description": "Brew powerful healing potions"
  },

  "elixir_recipe": {
    "id": "elixir_recipe",
    "name": "Elixir",
    "category": "consumable",
    "result": {
      "itemId": "elixir",
      "quantity": 1
    },
    "materials": [
      { "itemId": "elemental_essence", "quantity": 3 },
      { "itemId": "spirit_essence", "quantity": 2 },
      { "itemId": "honey", "quantity": 10 },
      { "itemId": "mystic_fur", "quantity": 5 }
    ],
    "discoveryMaterials": ["elemental_essence", "spirit_essence"],
    "description": "Brew a full restoration elixir"
  },

  "poison_bomb_recipe": {
    "id": "poison_bomb_recipe",
    "name": "Poison Bomb",
    "category": "consumable",
    "result": {
      "itemId": "poison_bomb",
      "quantity": 5
    },
    "materials": [
      { "itemId": "scorpion_venom", "quantity": 3 },
      { "itemId": "slug_slime", "quantity": 5 },
      { "itemId": "frog_skin", "quantity": 2 }
    ],
    "discoveryMaterials": ["scorpion_venom", "slug_slime"],
    "description": "Create poisonous bombs"
  },

  "fire_flask_recipe": {
    "id": "fire_flask_recipe",
    "name": "Fire Flask",
    "category": "consumable",
    "result": {
      "itemId": "fire_flask",
      "quantity": 5
    },
    "materials": [
      { "itemId": "fire_gland", "quantity": 2 },
      { "itemId": "desert_pearl", "quantity": 1 },
      { "itemId": "cloth", "quantity": 3 }
    ],
    "discoveryMaterials": ["fire_gland"],
    "description": "Create burning flasks"
  },

  "regen_herb_recipe": {
    "id": "regen_herb_recipe",
    "name": "Regen Herb",
    "category": "consumable",
    "result": {
      "itemId": "regen_herb",
      "quantity": 3
    },
    "materials": [
      { "itemId": "prayer_beads", "quantity": 1 },
      { "itemId": "mystic_fur", "quantity": 2 },
      { "itemId": "spirit_orb", "quantity": 1 }
    ],
    "discoveryMaterials": ["prayer_beads", "mystic_fur"],
    "description": "Create regeneration herbs"
  },

  "health_potion_recipe": {
    "id": "health_potion_recipe",
    "name": "Health Potion",
    "category": "consumable",
    "result": {
      "itemId": "health_potion",
      "quantity": 2
    },
    "materials": [
      { "itemId": "honey", "quantity": 2 },
      { "itemId": "butterfly_wing", "quantity": 2 },
      { "itemId": "fresh_fish", "quantity": 1 }
    ],
    "discoveryMaterials": ["honey", "fresh_fish"],
    "description": "Brew simple healing potions from gathered ingredients"
  },

  "mana_potion_recipe": {
    "id": "mana_potion_recipe",
    "name": "Mana Potion",
    "category": "consumable",
    "result": {
      "itemId": "mana_potion",
      "quantity": 3
    },
    "materials": [
      { "itemId": "bat_wing", "quantity": 5 },
      { "itemId": "snake_skin", "quantity": 3 },
      { "itemId": "butterfly_wing", "quantity": 4 }
    ],
    "discoveryMaterials": ["bat_wing", "snake_skin"],
    "description": "Brew potions that restore mana"
  },

  "antidote_recipe": {
    "id": "antidote_recipe",
    "name": "Antidote",
    "category": "consumable",
    "result": {
      "itemId": "antidote",
      "quantity": 5
    },
    "materials": [
      { "itemId": "frog_leg", "quantity": 3 },
      { "itemId": "lizard_tail", "quantity": 4 },
      { "itemId": "snake_skin", "quantity": 2 }
    ],
    "discoveryMaterials": ["frog_leg", "lizard_tail"],
    "description": "Create antidotes to cure poison"
  },

  // ═══════════════════════════════════════════════════════
  // TOOLS
  // ═══════════════════════════════════════════════════════

  "basic_rod_recipe": {
    "id": "basic_rod_recipe",
    "name": "Basic Rod",
    "category": "tool",
    "result": {
      "itemId": "basic_rod",
      "quantity": 1
    },
    "materials": [
      { "itemId": "oak_plank", "quantity": 2 },
      { "itemId": "spider_silk", "quantity": 4 }
    ],
    "discoveryMaterials": ["oak_plank", "spider_silk"],
    "description": "Craft a simple fishing rod from wood and silk"
  },

  "iron_rod_recipe": {
    "id": "iron_rod_recipe",
    "name": "Iron Fishing Rod",
    "category": "tool",
    "result": {
      "itemId": "iron_rod",
      "quantity": 1
    },
    "materials": [
      { "itemId": "iron_bar", "quantity": 3 },
      { "itemId": "spider_silk", "quantity": 5 },
      { "itemId": "oak_plank", "quantity": 2 }
    ],
    "discoveryMaterials": ["spider_silk"],
    "description": "Craft a better fishing rod"
  },

  "gathering_basket_recipe": {
    "id": "gathering_basket_recipe",
    "name": "Gathering Basket",
    "category": "tool",
    "result": {
      "itemId": "gathering_basket",
      "quantity": 1
    },
    "materials": [
      { "itemId": "oak_plank", "quantity": 5 },
      { "itemId": "cloth", "quantity": 3 },
      { "itemId": "leather", "quantity": 2 }
    ],
    "discoveryMaterials": ["cloth"],
    "description": "Craft a gathering basket"
  },

  // ═══════════════════════════════════════════════════════
  // MATERIALS (Processing)
  // ═══════════════════════════════════════════════════════

  "iron_bar_recipe": {
    "id": "iron_bar_recipe",
    "name": "Iron Bar",
    "category": "material",
    "result": {
      "itemId": "iron_bar",
      "quantity": 1
    },
    "materials": [
      { "itemId": "stone_shell", "quantity": 3 },
      { "itemId": "beetle_shell", "quantity": 2 }
    ],
    "discoveryMaterials": ["stone_shell"],
    "description": "Smelt iron from ore"
  },

  "gold_bar_recipe": {
    "id": "gold_bar_recipe",
    "name": "Gold Bar",
    "category": "material",
    "result": {
      "itemId": "gold_bar",
      "quantity": 1
    },
    "materials": [
      { "itemId": "desert_pearl", "quantity": 2 },
      { "itemId": "ancient_gem", "quantity": 1 }
    ],
    "discoveryMaterials": ["desert_pearl", "ancient_gem"],
    "description": "Refine gold from gems"
  },

  "oak_plank_recipe": {
    "id": "oak_plank_recipe",
    "name": "Oak Plank",
    "category": "material",
    "result": {
      "itemId": "oak_plank",
      "quantity": 4
    },
    "materials": [
      { "itemId": "giant_acorn", "quantity": 5 },
      { "itemId": "ancient_wood", "quantity": 1 }
    ],
    "discoveryMaterials": ["giant_acorn", "ancient_wood"],
    "description": "Process wood into planks"
  },

  "leather_recipe": {
    "id": "leather_recipe",
    "name": "Leather",
    "category": "material",
    "result": {
      "itemId": "leather",
      "quantity": 2
    },
    "materials": [
      { "itemId": "deer_hide", "quantity": 3 },
      { "itemId": "rabbit_fur", "quantity": 5 },
      { "itemId": "wolf_fang", "quantity": 1 }
    ],
    "discoveryMaterials": ["deer_hide"],
    "description": "Tan hides into leather"
  },

  "cloth_recipe": {
    "id": "cloth_recipe",
    "name": "Cloth",
    "category": "material",
    "result": {
      "itemId": "cloth",
      "quantity": 3
    },
    "materials": [
      { "itemId": "spider_silk", "quantity": 10 },
      { "itemId": "butterfly_wing", "quantity": 5 }
    ],
    "discoveryMaterials": ["spider_silk"],
    "description": "Weave silk into cloth"
  },

  // ═══════════════════════════════════════════════════════
  // UTILITY
  // ═══════════════════════════════════════════════════════

  "town_portal_recipe": {
    "id": "town_portal_recipe",
    "name": "Town Portal",
    "category": "utility",
    "result": {
      "itemId": "town_portal",
      "quantity": 3
    },
    "materials": [
      { "itemId": "sky_crystal", "quantity": 1 },
      { "itemId": "cloud_essence", "quantity": 2 },
      { "itemId": "spirit_orb", "quantity": 1 }
    ],
    "discoveryMaterials": ["sky_crystal", "cloud_essence"],
    "description": "Create teleportation scrolls"
  },

  "bag_expansion_recipe": {
    "id": "bag_expansion_recipe",
    "name": "Bag Expansion",
    "category": "utility",
    "result": {
      "itemId": "bag_expansion",
      "quantity": 1
    },
    "materials": [
      { "itemId": "leather", "quantity": 10 },
      { "itemId": "cloth", "quantity": 15 },
      { "itemId": "iron_bar", "quantity": 5 },
      { "itemId": "ancient_relic", "quantity": 1 }
    ],
    "discoveryMaterials": ["ancient_relic"],
    "description": "Craft a bag expansion"
  },

  // ═══════════════════════════════════════════════════════
  // BATCH: 20 craftable weapons (items.js)
  // ═══════════════════════════════════════════════════════

  "craft_bronze_sword_recipe": {
    "id": "craft_bronze_sword_recipe",
    "name": "Bronze Sword",
    "category": "weapon",
    "result": { "itemId": "bronze_sword", "quantity": 1 },
    "materials": [
      { "itemId": "iron_bar", "quantity": 2 },
      { "itemId": "leather", "quantity": 2 }
    ],
    "discoveryMaterials": ["iron_bar"],
    "description": "Forge a bronze sword"
  },
  "craft_longbow_recipe": {
    "id": "craft_longbow_recipe",
    "name": "Longbow",
    "category": "weapon",
    "result": { "itemId": "longbow", "quantity": 1 },
    "materials": [
      { "itemId": "oak_plank", "quantity": 3 },
      { "itemId": "spider_silk", "quantity": 3 }
    ],
    "discoveryMaterials": ["oak_plank"],
    "description": "String a sturdy longbow"
  },
  "craft_steel_dagger_recipe": {
    "id": "craft_steel_dagger_recipe",
    "name": "Steel Dagger",
    "category": "weapon",
    "result": { "itemId": "steel_dagger", "quantity": 1 },
    "materials": [
      { "itemId": "iron_bar", "quantity": 3 },
      { "itemId": "snake_skin", "quantity": 2 }
    ],
    "discoveryMaterials": ["snake_skin"],
    "description": "Craft a steel dagger"
  },
  "craft_mage_staff_recipe": {
    "id": "craft_mage_staff_recipe",
    "name": "Mage Staff",
    "category": "weapon",
    "result": { "itemId": "mage_staff", "quantity": 1 },
    "materials": [
      { "itemId": "oak_plank", "quantity": 3 },
      { "itemId": "spirit_essence", "quantity": 2 }
    ],
    "discoveryMaterials": ["spirit_essence"],
    "description": "Carve a mage staff"
  },
  "craft_war_axe_recipe": {
    "id": "craft_war_axe_recipe",
    "name": "War Axe",
    "category": "weapon",
    "result": { "itemId": "war_axe", "quantity": 1 },
    "materials": [
      { "itemId": "iron_bar", "quantity": 5 },
      { "itemId": "oak_plank", "quantity": 2 }
    ],
    "discoveryMaterials": ["iron_bar"],
    "description": "Forge a war axe"
  },
  "craft_silver_sword_recipe": {
    "id": "craft_silver_sword_recipe",
    "name": "Silver Sword",
    "category": "weapon",
    "result": { "itemId": "silver_sword", "quantity": 1 },
    "materials": [
      { "itemId": "iron_bar", "quantity": 4 },
      { "itemId": "gold_bar", "quantity": 1 }
    ],
    "discoveryMaterials": ["gold_bar"],
    "description": "Forge a silver sword"
  },
  "craft_rogue_blade_recipe": {
    "id": "craft_rogue_blade_recipe",
    "name": "Rogue Blade",
    "category": "weapon",
    "result": { "itemId": "rogue_blade", "quantity": 1 },
    "materials": [
      { "itemId": "iron_bar", "quantity": 4 },
      { "itemId": "leather", "quantity": 3 }
    ],
    "discoveryMaterials": ["leather"],
    "description": "Forge a rogue blade"
  },
  "craft_elven_bow_recipe": {
    "id": "craft_elven_bow_recipe",
    "name": "Elven Bow",
    "category": "weapon",
    "result": { "itemId": "elven_bow", "quantity": 1 },
    "materials": [
      { "itemId": "oak_plank", "quantity": 4 },
      { "itemId": "spider_silk", "quantity": 4 }
    ],
    "discoveryMaterials": ["spider_silk"],
    "description": "Craft an elven bow"
  },
  "craft_crystal_wand_recipe": {
    "id": "craft_crystal_wand_recipe",
    "name": "Crystal Wand",
    "category": "weapon",
    "result": { "itemId": "crystal_wand", "quantity": 1 },
    "materials": [
      { "itemId": "iron_bar", "quantity": 3 },
      { "itemId": "water_crystal", "quantity": 2 }
    ],
    "discoveryMaterials": ["water_crystal"],
    "description": "Bind a crystal wand"
  },
  "craft_berserker_axe_recipe": {
    "id": "craft_berserker_axe_recipe",
    "name": "Berserker Axe",
    "category": "weapon",
    "result": { "itemId": "berserker_axe", "quantity": 1 },
    "materials": [
      { "itemId": "iron_bar", "quantity": 7 },
      { "itemId": "leather", "quantity": 2 }
    ],
    "discoveryMaterials": ["iron_bar"],
    "description": "Forge a berserker axe"
  },
  "craft_knight_sword_recipe": {
    "id": "craft_knight_sword_recipe",
    "name": "Knight Sword",
    "category": "weapon",
    "result": { "itemId": "knight_sword", "quantity": 1 },
    "materials": [
      { "itemId": "iron_bar", "quantity": 6 },
      { "itemId": "leather", "quantity": 2 },
      { "itemId": "gold_bar", "quantity": 1 }
    ],
    "discoveryMaterials": ["gold_bar"],
    "description": "Forge a knight sword"
  },
  "craft_shadow_blade_unc_recipe": {
    "id": "craft_shadow_blade_unc_recipe",
    "name": "Shadow Blade",
    "category": "weapon",
    "result": { "itemId": "shadow_blade_unc", "quantity": 1 },
    "materials": [
      { "itemId": "iron_bar", "quantity": 5 },
      { "itemId": "shadow_essence", "quantity": 2 }
    ],
    "discoveryMaterials": ["shadow_essence"],
    "description": "Forge a shadow-touched blade"
  },
  "craft_ranger_bow_recipe": {
    "id": "craft_ranger_bow_recipe",
    "name": "Ranger Bow",
    "category": "weapon",
    "result": { "itemId": "ranger_bow", "quantity": 1 },
    "materials": [
      { "itemId": "oak_plank", "quantity": 5 },
      { "itemId": "spider_silk", "quantity": 4 }
    ],
    "discoveryMaterials": ["oak_plank"],
    "description": "Craft a ranger bow"
  },
  "craft_enchanted_staff_recipe": {
    "id": "craft_enchanted_staff_recipe",
    "name": "Enchanted Staff",
    "category": "weapon",
    "result": { "itemId": "enchanted_staff", "quantity": 1 },
    "materials": [
      { "itemId": "iron_bar", "quantity": 4 },
      { "itemId": "spirit_essence", "quantity": 3 },
      { "itemId": "moon_shell", "quantity": 1 }
    ],
    "discoveryMaterials": ["moon_shell"],
    "description": "Craft an enchanted staff"
  },
  "craft_double_axe_recipe": {
    "id": "craft_double_axe_recipe",
    "name": "Double Axe",
    "category": "weapon",
    "result": { "itemId": "double_axe", "quantity": 1 },
    "materials": [
      { "itemId": "iron_bar", "quantity": 8 },
      { "itemId": "oak_plank", "quantity": 2 }
    ],
    "discoveryMaterials": ["iron_bar"],
    "description": "Forge a double axe"
  },
  "craft_falchion_recipe": {
    "id": "craft_falchion_recipe",
    "name": "Falchion",
    "category": "weapon",
    "result": { "itemId": "falchion", "quantity": 1 },
    "materials": [
      { "itemId": "iron_bar", "quantity": 5 },
      { "itemId": "leather", "quantity": 3 }
    ],
    "discoveryMaterials": ["iron_bar"],
    "description": "Forge a falchion"
  },
  "craft_poison_dagger_unc_recipe": {
    "id": "craft_poison_dagger_unc_recipe",
    "name": "Poison Dagger",
    "category": "weapon",
    "result": { "itemId": "poison_dagger_unc", "quantity": 1 },
    "materials": [
      { "itemId": "iron_bar", "quantity": 3 },
      { "itemId": "spider_venom", "quantity": 3 }
    ],
    "discoveryMaterials": ["spider_venom"],
    "description": "Forge a poisoned dagger"
  },
  "craft_recurve_bow_recipe": {
    "id": "craft_recurve_bow_recipe",
    "name": "Recurve Bow",
    "category": "weapon",
    "result": { "itemId": "recurve_bow", "quantity": 1 },
    "materials": [
      { "itemId": "oak_plank", "quantity": 4 },
      { "itemId": "snake_skin", "quantity": 3 }
    ],
    "discoveryMaterials": ["snake_skin"],
    "description": "Craft a recurve bow"
  },
  "craft_runic_staff_recipe": {
    "id": "craft_runic_staff_recipe",
    "name": "Runic Staff",
    "category": "weapon",
    "result": { "itemId": "runic_staff", "quantity": 1 },
    "materials": [
      { "itemId": "iron_bar", "quantity": 5 },
      { "itemId": "moon_shell", "quantity": 2 },
      { "itemId": "spirit_essence", "quantity": 2 }
    ],
    "discoveryMaterials": ["moon_shell"],
    "description": "Carve a runic staff"
  },
  "craft_viking_axe_recipe": {
    "id": "craft_viking_axe_recipe",
    "name": "Viking Axe",
    "category": "weapon",
    "result": { "itemId": "viking_axe", "quantity": 1 },
    "materials": [
      { "itemId": "iron_bar", "quantity": 6 },
      { "itemId": "wolf_pelt", "quantity": 1 },
      { "itemId": "leather", "quantity": 2 }
    ],
    "discoveryMaterials": ["wolf_pelt"],
    "description": "Forge a viking axe"
  },

  // ═══════════════════════════════════════════════════════
  // BATCH: 20 craftable boots (armorSlot boots)
  // ═══════════════════════════════════════════════════════

  "craft_hide_boots_recipe": {
    "id": "craft_hide_boots_recipe",
    "name": "Hide Boots",
    "category": "armor",
    "result": { "itemId": "hide_boots", "quantity": 1 },
    "materials": [
      { "itemId": "leather", "quantity": 2 },
      { "itemId": "cloth", "quantity": 2 }
    ],
    "discoveryMaterials": ["leather"],
    "description": "Sew hide boots"
  },
  "craft_padded_boots_recipe": {
    "id": "craft_padded_boots_recipe",
    "name": "Padded Boots",
    "category": "armor",
    "result": { "itemId": "padded_boots", "quantity": 1 },
    "materials": [
      { "itemId": "leather", "quantity": 3 },
      { "itemId": "cloth", "quantity": 3 }
    ],
    "discoveryMaterials": ["cloth"],
    "description": "Sew padded boots"
  },
  "craft_fur_boots_recipe": {
    "id": "craft_fur_boots_recipe",
    "name": "Fur Boots",
    "category": "armor",
    "result": { "itemId": "fur_boots", "quantity": 1 },
    "materials": [
      { "itemId": "leather", "quantity": 3 },
      { "itemId": "rabbit_hide", "quantity": 2 }
    ],
    "discoveryMaterials": ["rabbit_hide"],
    "description": "Line boots with fur"
  },
  "craft_linen_boots_recipe": {
    "id": "craft_linen_boots_recipe",
    "name": "Linen Boots",
    "category": "armor",
    "result": { "itemId": "linen_boots", "quantity": 1 },
    "materials": [
      { "itemId": "cloth", "quantity": 4 },
      { "itemId": "spider_silk", "quantity": 2 }
    ],
    "discoveryMaterials": ["spider_silk"],
    "description": "Weave linen boots"
  },
  "craft_wool_boots_recipe": {
    "id": "craft_wool_boots_recipe",
    "name": "Wool Boots",
    "category": "armor",
    "result": { "itemId": "wool_boots", "quantity": 1 },
    "materials": [
      { "itemId": "cloth", "quantity": 5 },
      { "itemId": "leather", "quantity": 1 }
    ],
    "discoveryMaterials": ["cloth"],
    "description": "Knit wool boots"
  },
  "craft_bronze_boots_recipe": {
    "id": "craft_bronze_boots_recipe",
    "name": "Bronze Boots",
    "category": "armor",
    "result": { "itemId": "bronze_boots", "quantity": 1 },
    "materials": [
      { "itemId": "iron_bar", "quantity": 2 },
      { "itemId": "leather", "quantity": 2 }
    ],
    "discoveryMaterials": ["iron_bar"],
    "description": "Rivet bronze boots"
  },
  "craft_copper_boots_recipe": {
    "id": "craft_copper_boots_recipe",
    "name": "Copper Boots",
    "category": "armor",
    "result": { "itemId": "copper_boots", "quantity": 1 },
    "materials": [
      { "itemId": "iron_bar", "quantity": 2 },
      { "itemId": "beetle_shell", "quantity": 3 }
    ],
    "discoveryMaterials": ["beetle_shell"],
    "description": "Shape copper boots"
  },
  "craft_studded_leather_boots_recipe": {
    "id": "craft_studded_leather_boots_recipe",
    "name": "Studded Leather Boots",
    "category": "armor",
    "result": { "itemId": "studded_leather_boots", "quantity": 1 },
    "materials": [
      { "itemId": "leather", "quantity": 4 },
      { "itemId": "iron_bar", "quantity": 2 }
    ],
    "discoveryMaterials": ["leather"],
    "description": "Stud leather boots"
  },
  "craft_hardened_leather_boots_recipe": {
    "id": "craft_hardened_leather_boots_recipe",
    "name": "Hardened Leather Boots",
    "category": "armor",
    "result": { "itemId": "hardened_leather_boots", "quantity": 1 },
    "materials": [
      { "itemId": "leather", "quantity": 5 },
      { "itemId": "iron_bar", "quantity": 3 },
      { "itemId": "stone_shell", "quantity": 2 }
    ],
    "discoveryMaterials": ["stone_shell"],
    "description": "Harden leather boots"
  },
  "craft_apprentice_robes_boots_recipe": {
    "id": "craft_apprentice_robes_boots_recipe",
    "name": "Apprentice Robes Boots",
    "category": "armor",
    "result": { "itemId": "apprentice_robes_boots", "quantity": 1 },
    "materials": [
      { "itemId": "cloth", "quantity": 5 },
      { "itemId": "spirit_essence", "quantity": 1 }
    ],
    "discoveryMaterials": ["spirit_essence"],
    "description": "Stitch apprentice boots"
  },
  "craft_chainmail_boots_recipe": {
    "id": "craft_chainmail_boots_recipe",
    "name": "Chainmail Boots",
    "category": "armor",
    "result": { "itemId": "chainmail_boots", "quantity": 1 },
    "materials": [
      { "itemId": "iron_bar", "quantity": 4 },
      { "itemId": "leather", "quantity": 2 }
    ],
    "discoveryMaterials": ["iron_bar"],
    "description": "Forge chainmail boots"
  },
  "craft_scale_mail_boots_recipe": {
    "id": "craft_scale_mail_boots_recipe",
    "name": "Scale Mail Boots",
    "category": "armor",
    "result": { "itemId": "scale_mail_boots", "quantity": 1 },
    "materials": [
      { "itemId": "iron_bar", "quantity": 5 },
      { "itemId": "snake_skin", "quantity": 3 }
    ],
    "discoveryMaterials": ["snake_skin"],
    "description": "Forge scale mail boots"
  },
  "craft_reinforced_leather_boots_recipe": {
    "id": "craft_reinforced_leather_boots_recipe",
    "name": "Reinforced Leather Boots",
    "category": "armor",
    "result": { "itemId": "reinforced_leather_boots", "quantity": 1 },
    "materials": [
      { "itemId": "leather", "quantity": 6 },
      { "itemId": "iron_bar", "quantity": 2 }
    ],
    "discoveryMaterials": ["leather"],
    "description": "Reinforce leather boots"
  },
  "craft_battle_leather_boots_recipe": {
    "id": "craft_battle_leather_boots_recipe",
    "name": "Battle Leather Boots",
    "category": "armor",
    "result": { "itemId": "battle_leather_boots", "quantity": 1 },
    "materials": [
      { "itemId": "leather", "quantity": 6 },
      { "itemId": "wolf_pelt", "quantity": 1 },
      { "itemId": "iron_bar", "quantity": 2 }
    ],
    "discoveryMaterials": ["wolf_pelt"],
    "description": "Craft battle leather boots"
  },
  "craft_silk_robes_boots_recipe": {
    "id": "craft_silk_robes_boots_recipe",
    "name": "Silk Robes Boots",
    "category": "armor",
    "result": { "itemId": "silk_robes_boots", "quantity": 1 },
    "materials": [
      { "itemId": "cloth", "quantity": 6 },
      { "itemId": "spider_silk", "quantity": 3 }
    ],
    "discoveryMaterials": ["spider_silk"],
    "description": "Weave silk boots"
  },
  "craft_mystic_cloth_boots_recipe": {
    "id": "craft_mystic_cloth_boots_recipe",
    "name": "Mystic Cloth Boots",
    "category": "armor",
    "result": { "itemId": "mystic_cloth_boots", "quantity": 1 },
    "materials": [
      { "itemId": "cloth", "quantity": 5 },
      { "itemId": "bat_wing", "quantity": 3 }
    ],
    "discoveryMaterials": ["bat_wing"],
    "description": "Stitch mystic cloth boots"
  },
  "craft_plate_mail_boots_recipe": {
    "id": "craft_plate_mail_boots_recipe",
    "name": "Plate Mail Boots",
    "category": "armor",
    "result": { "itemId": "plate_mail_boots", "quantity": 1 },
    "materials": [
      { "itemId": "iron_bar", "quantity": 6 },
      { "itemId": "leather", "quantity": 2 }
    ],
    "discoveryMaterials": ["iron_bar"],
    "description": "Forge plate mail boots"
  },
  "craft_knight_armor_boots_recipe": {
    "id": "craft_knight_armor_boots_recipe",
    "name": "Knight Armor Boots",
    "category": "armor",
    "result": { "itemId": "knight_armor_boots", "quantity": 1 },
    "materials": [
      { "itemId": "iron_bar", "quantity": 7 },
      { "itemId": "gold_bar", "quantity": 1 },
      { "itemId": "leather", "quantity": 2 }
    ],
    "discoveryMaterials": ["gold_bar"],
    "description": "Forge knight armor boots"
  },
  "craft_hunter_gear_boots_recipe": {
    "id": "craft_hunter_gear_boots_recipe",
    "name": "Hunter Gear Boots",
    "category": "armor",
    "result": { "itemId": "hunter_gear_boots", "quantity": 1 },
    "materials": [
      { "itemId": "oak_plank", "quantity": 3 },
      { "itemId": "leather", "quantity": 5 }
    ],
    "discoveryMaterials": ["oak_plank"],
    "description": "Craft hunter gear boots"
  },
  "craft_scholar_robes_boots_recipe": {
    "id": "craft_scholar_robes_boots_recipe",
    "name": "Scholar Robes Boots",
    "category": "armor",
    "result": { "itemId": "scholar_robes_boots", "quantity": 1 },
    "materials": [
      { "itemId": "cloth", "quantity": 6 },
      { "itemId": "moon_shell", "quantity": 1 }
    ],
    "discoveryMaterials": ["moon_shell"],
    "description": "Tailor scholar boots"
  },

  // ═══════════════════════════════════════════════════════
  // BATCH: Hunt / PvP prep (consumables + utility)
  // ═══════════════════════════════════════════════════════

  "craft_smoke_grenade_recipe": {
    "id": "craft_smoke_grenade_recipe",
    "name": "Smoke Grenade",
    "category": "consumable",
    "result": { "itemId": "smoke_grenade", "quantity": 3 },
    "materials": [
      { "itemId": "slug_slime", "quantity": 4 },
      { "itemId": "cloth", "quantity": 2 }
    ],
    "discoveryMaterials": ["slug_slime"],
    "description": "Mix smoke grenades"
  },
  "craft_stun_grenade_recipe": {
    "id": "craft_stun_grenade_recipe",
    "name": "Stun Grenade",
    "category": "consumable",
    "result": { "itemId": "stun_grenade", "quantity": 2 },
    "materials": [
      { "itemId": "beetle_shell", "quantity": 3 },
      { "itemId": "iron_bar", "quantity": 1 }
    ],
    "discoveryMaterials": ["beetle_shell"],
    "description": "Assemble stun grenades"
  },
  "craft_escape_rope_recipe": {
    "id": "craft_escape_rope_recipe",
    "name": "Escape Rope",
    "category": "utility",
    "result": { "itemId": "escape_rope", "quantity": 2 },
    "materials": [
      { "itemId": "spider_silk", "quantity": 8 },
      { "itemId": "cloth", "quantity": 2 }
    ],
    "discoveryMaterials": ["spider_silk"],
    "description": "Braid escape ropes"
  },
  "craft_dungeon_portal_scroll_recipe": {
    "id": "craft_dungeon_portal_scroll_recipe",
    "name": "Dungeon Portal Scroll",
    "category": "utility",
    "result": { "itemId": "dungeon_portal_scroll", "quantity": 1 },
    "materials": [
      { "itemId": "spirit_orb", "quantity": 1 },
      { "itemId": "cloth", "quantity": 4 },
      { "itemId": "cloud_essence", "quantity": 1 }
    ],
    "discoveryMaterials": ["spirit_orb"],
    "description": "Ink a dungeon portal scroll"
  },
  "craft_location_stone_recipe": {
    "id": "craft_location_stone_recipe",
    "name": "Location Stone",
    "category": "utility",
    "result": { "itemId": "location_stone", "quantity": 1 },
    "materials": [
      { "itemId": "stone_shell", "quantity": 4 },
      { "itemId": "iron_bar", "quantity": 3 },
      { "itemId": "spirit_essence", "quantity": 2 }
    ],
    "discoveryMaterials": ["stone_shell"],
    "description": "Carve a location stone"
  },
  "craft_minor_vitals_potion_recipe": {
    "id": "craft_minor_vitals_potion_recipe",
    "name": "Minor Vitals Potion",
    "category": "consumable",
    "result": { "itemId": "minor_vitals_potion", "quantity": 2 },
    "materials": [
      { "itemId": "honey", "quantity": 3 },
      { "itemId": "butterfly_wing", "quantity": 2 },
      { "itemId": "tiny_fish", "quantity": 2 }
    ],
    "discoveryMaterials": ["honey"],
    "description": "Brew minor vitals potions"
  },
  "craft_great_mana_draught_recipe": {
    "id": "craft_great_mana_draught_recipe",
    "name": "Great Mana Draught",
    "category": "consumable",
    "result": { "itemId": "great_mana_draught", "quantity": 2 },
    "materials": [
      { "itemId": "spirit_essence", "quantity": 3 },
      { "itemId": "bat_wing", "quantity": 3 },
      { "itemId": "water_crystal", "quantity": 1 }
    ],
    "discoveryMaterials": ["water_crystal"],
    "description": "Distill mana draughts"
  },
  "craft_wildberry_jam_recipe": {
    "id": "craft_wildberry_jam_recipe",
    "name": "Wildberry Jam",
    "category": "consumable",
    "result": { "itemId": "wildberry_jam", "quantity": 3 },
    "materials": [
      { "itemId": "honey", "quantity": 2 },
      { "itemId": "wheat_grain", "quantity": 8 },
      { "itemId": "duck_feather", "quantity": 2 }
    ],
    "discoveryMaterials": ["wheat_grain"],
    "description": "Cook wildberry jam"
  },
  "craft_sting_balm_recipe": {
    "id": "craft_sting_balm_recipe",
    "name": "Sting Balm",
    "category": "consumable",
    "result": { "itemId": "sting_balm", "quantity": 2 },
    "materials": [
      { "itemId": "frog_skin", "quantity": 2 },
      { "itemId": "honey", "quantity": 2 },
      { "itemId": "cloth", "quantity": 1 }
    ],
    "discoveryMaterials": ["frog_skin"],
    "description": "Mix sting balm"
  },
  "craft_cobra_cracker_recipe": {
    "id": "craft_cobra_cracker_recipe",
    "name": "Cobra Cracker",
    "category": "consumable",
    "result": { "itemId": "cobra_cracker", "quantity": 3 },
    "materials": [
      { "itemId": "spider_venom", "quantity": 2 },
      { "itemId": "beetle_shell", "quantity": 2 }
    ],
    "discoveryMaterials": ["spider_venom"],
    "description": "Seal cobra crackers"
  },
  "craft_ember_jar_recipe": {
    "id": "craft_ember_jar_recipe",
    "name": "Ember Jar",
    "category": "consumable",
    "result": { "itemId": "ember_jar", "quantity": 3 },
    "materials": [
      { "itemId": "fire_gland", "quantity": 2 },
      { "itemId": "beetle_shell", "quantity": 3 }
    ],
    "discoveryMaterials": ["fire_gland"],
    "description": "Bottle ember jars"
  },
  "craft_mist_charm_recipe": {
    "id": "craft_mist_charm_recipe",
    "name": "Mist Charm",
    "category": "consumable",
    "result": { "itemId": "mist_charm", "quantity": 2 },
    "materials": [
      { "itemId": "mist_essence", "quantity": 1 },
      { "itemId": "spider_silk", "quantity": 3 },
      { "itemId": "butterfly_wing", "quantity": 2 }
    ],
    "discoveryMaterials": ["mist_essence"],
    "description": "Weave mist charms"
  },
  "craft_second_wind_tonic_recipe": {
    "id": "craft_second_wind_tonic_recipe",
    "name": "Second Wind Tonic",
    "category": "consumable",
    "result": { "itemId": "second_wind_tonic", "quantity": 2 },
    "materials": [
      { "itemId": "honey", "quantity": 3 },
      { "itemId": "pine_nut", "quantity": 5 },
      { "itemId": "salmon_meat", "quantity": 1 }
    ],
    "discoveryMaterials": ["pine_nut"],
    "description": "Brew second wind tonics"
  },
  "craft_hunters_jerky_recipe": {
    "id": "craft_hunters_jerky_recipe",
    "name": "Hunter's Jerky",
    "category": "consumable",
    "result": { "itemId": "hunters_jerky", "quantity": 4 },
    "materials": [
      { "itemId": "deer_meat", "quantity": 2 },
      { "itemId": "salt_crystal", "quantity": 1 }
    ],
    "discoveryMaterials": ["deer_meat"],
    "description": "Smoke hunter's jerky"
  },
  "craft_mana_shard_tonic_recipe": {
    "id": "craft_mana_shard_tonic_recipe",
    "name": "Mana Shard Tonic",
    "category": "consumable",
    "result": { "itemId": "mana_shard_tonic", "quantity": 3 },
    "materials": [
      { "itemId": "pixie_dust", "quantity": 1 },
      { "itemId": "water_essence", "quantity": 1 },
      { "itemId": "honey", "quantity": 1 }
    ],
    "discoveryMaterials": ["pixie_dust"],
    "description": "Brew mana shard tonics"
  },
  "craft_fortifying_draught_recipe": {
    "id": "craft_fortifying_draught_recipe",
    "name": "Fortifying Draught",
    "category": "consumable",
    "result": { "itemId": "fortifying_draught", "quantity": 2 },
    "materials": [
      { "itemId": "honey", "quantity": 4 },
      { "itemId": "spirit_essence", "quantity": 2 },
      { "itemId": "deer_meat", "quantity": 2 }
    ],
    "discoveryMaterials": ["deer_meat"],
    "description": "Brew fortifying draughts"
  },
  "craft_pet_treat_basic_batch_recipe": {
    "id": "craft_pet_treat_basic_batch_recipe",
    "name": "Basic Pet Treat Batch",
    "category": "consumable",
    "result": { "itemId": "pet_treat_basic", "quantity": 5 },
    "materials": [
      { "itemId": "wheat_grain", "quantity": 10 },
      { "itemId": "tiny_fish", "quantity": 4 },
      { "itemId": "honey", "quantity": 2 }
    ],
    "discoveryMaterials": ["wheat_grain"],
    "description": "Bake basic pet treats"
  },
  "craft_pet_treat_premium_batch_recipe": {
    "id": "craft_pet_treat_premium_batch_recipe",
    "name": "Premium Pet Treat Batch",
    "category": "consumable",
    "result": { "itemId": "pet_treat_premium", "quantity": 4 },
    "materials": [
      { "itemId": "salmon_meat", "quantity": 3 },
      { "itemId": "honey", "quantity": 4 },
      { "itemId": "spirit_essence", "quantity": 2 }
    ],
    "discoveryMaterials": ["salmon_meat"],
    "description": "Prepare premium pet treats"
  },
  "craft_pet_elixir_batch_recipe": {
    "id": "craft_pet_elixir_batch_recipe",
    "name": "Pet Growth Elixir Batch",
    "category": "consumable",
    "result": { "itemId": "pet_elixir", "quantity": 2 },
    "materials": [
      { "itemId": "night_essence", "quantity": 1 },
      { "itemId": "spirit_essence", "quantity": 4 },
      { "itemId": "pixie_dust", "quantity": 2 }
    ],
    "discoveryMaterials": ["night_essence"],
    "description": "Distill pet growth elixirs"
  },
  "craft_pet_bond_crystal_batch_recipe": {
    "id": "craft_pet_bond_crystal_batch_recipe",
    "name": "Bond Crystal Batch",
    "category": "consumable",
    "result": { "itemId": "pet_bond_crystal", "quantity": 1 },
    "materials": [
      { "itemId": "ancient_gem", "quantity": 1 },
      { "itemId": "desert_pearl", "quantity": 2 },
      { "itemId": "spirit_orb", "quantity": 1 },
      { "itemId": "honey", "quantity": 20 }
    ],
    "discoveryMaterials": ["ancient_gem"],
    "description": "Grow bond crystals for pets"
  },

  ...gatheringRecipes
};

// ── Helper Functions ──────────────────────────────────────

/**
 * Get recipe by ID
 * @param {string} recipeId
 * @returns {object|null}
 */
export function getRecipeById(recipeId) {
  return recipes[recipeId] || null;
}

/**
 * Get all recipes by category
 * @param {string} category
 * @returns {array}
 */
export function getRecipesByCategory(category) {
  return Object.values(recipes).filter(r => r.category === category);
}

/**
 * Check if player has materials for a recipe
 * @param {object} recipe
 * @param {object} playerBag - { itemId: quantity }
 * @returns {boolean}
 */
export function hasRequiredMaterials(recipe, playerBag) {
  for (const material of recipe.materials) {
    const playerAmount = playerBag[material.itemId] || 0;
    if (playerAmount < material.quantity) {
      return false;
    }
  }
  return true;
}

/**
 * Check if player can discover a recipe based on their inventory
 * @param {object} recipe
 * @param {object} playerBag - { itemId: quantity }
 * @returns {boolean}
 */
export function canDiscoverRecipe(recipe, playerBag) {
  for (const materialId of recipe.discoveryMaterials) {
    if (playerBag[materialId] && playerBag[materialId] > 0) {
      return true;
    }
  }
  return false;
}

/**
 * Get all discoverable recipes based on player's inventory
 * @param {object} playerBag - { itemId: quantity }
 * @param {array} knownRecipes - Array of recipe IDs player already knows
 * @returns {array} Array of recipe objects
 */
export function getDiscoverableRecipes(playerBag, knownRecipes = []) {
  const discoverable = [];

  for (const recipe of Object.values(recipes)) {
    if (knownRecipes.includes(recipe.id)) continue;
    if (canDiscoverRecipe(recipe, playerBag)) {
      discoverable.push(recipe);
    }
  }

  return discoverable;
}

/**
 * Get all craftable recipes based on player's inventory and known recipes
 * @param {object} playerBag - { itemId: quantity }
 * @param {array} knownRecipes - Array of recipe IDs player knows
 * @returns {array} Array of recipe objects
 */
export function getCraftableRecipes(playerBag, knownRecipes = []) {
  const craftable = [];

  for (const recipeId of knownRecipes) {
    const recipe = recipes[recipeId];
    if (!recipe) continue;
    if (hasRequiredMaterials(recipe, playerBag)) {
      craftable.push(recipe);
    }
  }

  return craftable;
}

export default {
  recipes,
  getRecipeById,
  getRecipesByCategory,
  hasRequiredMaterials,
  canDiscoverRecipe,
  getDiscoverableRecipes,
  getCraftableRecipes
};
