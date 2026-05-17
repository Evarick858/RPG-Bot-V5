/**
 * Craft recipes: 20 armor sets × head/chest/legs + all shields from items.js.
 */

function slotRecipe(slot, key, _label, mats, disc, pieceLabel) {
  const id = `craft_${key}_${slot}_recipe`;
  return [
    id,
    {
      id,
      name: pieceLabel,
      category: "armor",
      result: { itemId: `${key}_${slot}`, quantity: 1 },
      materials: mats.map(([itemId, quantity]) => ({ itemId, quantity })),
      discoveryMaterials: disc,
      description: `Craft ${pieceLabel.toLowerCase()}`,
    },
  ];
}

const bootDefs = [
  ["hide", "Hide", [["leather", 2], ["cloth", 2]], ["leather"], "Hide Helmet", "Hide Chestplate", "Hide Leggings"],
  ["padded", "Padded", [["leather", 3], ["cloth", 3]], ["cloth"], "Padded Helmet", "Padded Chestplate", "Padded Leggings"],
  ["fur", "Fur", [["leather", 3], ["rabbit_hide", 2]], ["rabbit_hide"], "Fur Helmet", "Fur Chestplate", "Fur Leggings"],
  ["linen", "Linen", [["cloth", 4], ["spider_silk", 2]], ["spider_silk"], "Linen Helmet", "Linen Chestplate", "Linen Leggings"],
  ["wool", "Wool", [["cloth", 5], ["leather", 1]], ["cloth"], "Wool Helmet", "Wool Chestplate", "Wool Leggings"],
  ["bronze", "Bronze", [["iron_bar", 2], ["leather", 2]], ["iron_bar"], "Bronze Helmet", "Bronze Chestplate", "Bronze Leggings"],
  ["copper", "Copper", [["iron_bar", 2], ["beetle_shell", 3]], ["beetle_shell"], "Copper Helmet", "Copper Chestplate", "Copper Leggings"],
  ["studded_leather", "Studded Leather", [["leather", 4], ["iron_bar", 2]], ["leather"], "Studded Leather Helmet", "Studded Leather Chestplate", "Studded Leather Leggings"],
  ["hardened_leather", "Hardened Leather", [["leather", 5], ["iron_bar", 3], ["stone_shell", 2]], ["stone_shell"], "Hardened Leather Helmet", "Hardened Leather Chestplate", "Hardened Leather Leggings"],
  ["apprentice_robes", "Apprentice Robes", [["cloth", 5], ["spirit_essence", 1]], ["spirit_essence"], "Apprentice Robes Hood", "Apprentice Robes Robe", "Apprentice Robes Leggings"],
  ["chainmail", "Chainmail", [["iron_bar", 4], ["leather", 2]], ["iron_bar"], "Chainmail Helmet", "Chainmail Chestplate", "Chainmail Leggings"],
  ["scale_mail", "Scale Mail", [["iron_bar", 5], ["snake_skin", 3]], ["snake_skin"], "Scale Mail Helmet", "Scale Mail Chestplate", "Scale Mail Leggings"],
  ["reinforced_leather", "Reinforced Leather", [["leather", 6], ["iron_bar", 2]], ["leather"], "Reinforced Leather Helmet", "Reinforced Leather Chestplate", "Reinforced Leather Leggings"],
  ["battle_leather", "Battle Leather", [["leather", 6], ["wolf_pelt", 1], ["iron_bar", 2]], ["wolf_pelt"], "Battle Leather Helmet", "Battle Leather Chestplate", "Battle Leather Leggings"],
  ["silk_robes", "Silk Robes", [["cloth", 6], ["spider_silk", 3]], ["spider_silk"], "Silk Robes Hood", "Silk Robes Robe", "Silk Robes Leggings"],
  ["mystic_cloth", "Mystic Cloth", [["cloth", 5], ["bat_wing", 3]], ["bat_wing"], "Mystic Cloth Hood", "Mystic Cloth Robe", "Mystic Cloth Leggings"],
  ["plate_mail", "Plate Mail", [["iron_bar", 6], ["leather", 2]], ["iron_bar"], "Plate Mail Helmet", "Plate Mail Chestplate", "Plate Mail Leggings"],
  ["knight_armor", "Knight Armor", [["iron_bar", 7], ["gold_bar", 1], ["leather", 2]], ["gold_bar"], "Knight Armor Helmet", "Knight Armor Chestplate", "Knight Armor Leggings"],
  ["hunter_gear", "Hunter Gear", [["oak_plank", 3], ["leather", 5]], ["oak_plank"], "Hunter Gear Helmet", "Hunter Gear Chestplate", "Hunter Gear Leggings"],
  ["scholar_robes", "Scholar Robes", [["cloth", 6], ["moon_shell", 1]], ["moon_shell"], "Scholar Robes Hood", "Scholar Robes Robe", "Scholar Robes Leggings"],
];

export const armorShieldRecipes = {};

for (const [key, label, mats, disc, headN, chestN, legsN] of bootDefs) {
  const names = [headN, chestN, legsN];
  for (let s = 0; s < 3; s++) {
    const slot = ["head", "chest", "legs"][s];
    const [rid, robj] = slotRecipe(slot, key, label, mats, disc, names[s]);
    armorShieldRecipes[rid] = robj;
  }
}

function sh(id, name, resultId, mats, disc, desc) {
  armorShieldRecipes[id] = {
    id,
    name,
    category: "shield",
    result: { itemId: resultId, quantity: 1 },
    materials: mats.map(([itemId, quantity]) => ({ itemId, quantity })),
    discoveryMaterials: disc,
    description: desc,
  };
}

sh("craft_wooden_shield_recipe", "Wooden Shield", "wooden_shield", [["oak_plank", 2], ["leather", 1]], ["oak_plank"], "Assemble wooden shield");
sh("craft_iron_buckler_recipe", "Iron Buckler", "iron_buckler", [["iron_bar", 2], ["oak_plank", 1]], ["iron_bar"], "Forge iron buckler");
sh("craft_leather_shield_recipe", "Leather Shield", "leather_shield", [["leather", 5], ["oak_plank", 1]], ["leather"], "Bind leather shield");
sh("craft_steel_shield_recipe", "Steel Shield", "steel_shield", [["iron_bar", 6], ["leather", 2]], ["iron_bar"], "Forge steel shield");
sh("craft_knights_shield_recipe", "Knight's Shield", "knights_shield", [["iron_bar", 7], ["gold_bar", 1], ["leather", 2]], ["gold_bar"], "Forge knight shield");
sh("craft_tower_shield_recipe", "Tower Shield", "tower_shield", [["iron_bar", 9], ["oak_plank", 2], ["leather", 3]], ["iron_bar"], "Forge tower shield");
sh("craft_dragonscale_shield_recipe", "Dragonscale Shield", "dragonscale_shield", [["iron_bar", 8], ["serpent_scale", 4], ["drake_scale", 2]], ["drake_scale"], "Forge dragonscale shield");
sh("craft_phoenix_shield_recipe", "Phoenix Shield", "phoenix_shield", [["iron_bar", 6], ["fire_gland", 2], ["leather", 4]], ["fire_gland"], "Forge phoenix shield");
sh("craft_mirror_shield_recipe", "Mirror Shield", "mirror_shield", [["iron_bar", 6], ["moon_shell", 2], ["prism_shard", 1]], ["prism_shard"], "Forge mirror shield");
sh("craft_aegis_shield_recipe", "Aegis Shield", "aegis_shield", [["gold_bar", 5], ["iron_bar", 12], ["sky_crystal", 1]], ["sky_crystal"], "Forge aegis shield");
sh("craft_guardian_shield_recipe", "Guardian Shield", "guardian_shield", [["gold_bar", 4], ["iron_bar", 14], ["guardian_stone", 1]], ["guardian_stone"], "Forge guardian shield");
sh("craft_celestial_shield_recipe", "Celestial Shield", "celestial_shield", [["gold_bar", 6], ["iron_bar", 8], ["light_essence", 2]], ["light_essence"], "Forge celestial shield");
sh("craft_shield_of_the_ancients_recipe", "Shield of the Ancients", "shield_of_the_ancients", [["gold_bar", 16], ["titan_stone", 5], ["ancient_gem", 2]], ["ancient_gem"], "Forge ancient shield");
sh("craft_bulwark_of_eternity_recipe", "Bulwark of Eternity", "bulwark_of_eternity", [["gold_bar", 20], ["titan_stone", 6], ["crystal_heart", 1]], ["crystal_heart"], "Forge bulwark of eternity");
sh("craft_void_barrier_recipe", "Void Barrier", "void_barrier", [["gold_bar", 12], ["void_crystal", 1], ["shadow_essence", 4]], ["void_crystal"], "Forge void barrier");
