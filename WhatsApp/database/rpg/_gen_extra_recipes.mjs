import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const bootDefs = [
  ["hide", "Hide", [["leather", 2], ["cloth", 2]], ["leather"]],
  ["padded", "Padded", [["leather", 3], ["cloth", 3]], ["cloth"]],
  ["fur", "Fur", [["leather", 3], ["rabbit_hide", 2]], ["rabbit_hide"]],
  ["linen", "Linen", [["cloth", 4], ["spider_silk", 2]], ["spider_silk"]],
  ["wool", "Wool", [["cloth", 5], ["leather", 1]], ["cloth"]],
  ["bronze", "Bronze", [["iron_bar", 2], ["leather", 2]], ["iron_bar"]],
  ["copper", "Copper", [["iron_bar", 2], ["beetle_shell", 3]], ["beetle_shell"]],
  [
    "studded_leather",
    "Studded Leather",
    [["leather", 4], ["iron_bar", 2]],
    ["leather"],
  ],
  [
    "hardened_leather",
    "Hardened Leather",
    [["leather", 5], ["iron_bar", 3], ["stone_shell", 2]],
    ["stone_shell"],
  ],
  [
    "apprentice_robes",
    "Apprentice Robes",
    [["cloth", 5], ["spirit_essence", 1]],
    ["spirit_essence"],
  ],
  ["chainmail", "Chainmail", [["iron_bar", 4], ["leather", 2]], ["iron_bar"]],
  [
    "scale_mail",
    "Scale Mail",
    [["iron_bar", 5], ["snake_skin", 3]],
    ["snake_skin"],
  ],
  [
    "reinforced_leather",
    "Reinforced Leather",
    [["leather", 6], ["iron_bar", 2]],
    ["leather"],
  ],
  [
    "battle_leather",
    "Battle Leather",
    [["leather", 6], ["wolf_pelt", 1], ["iron_bar", 2]],
    ["wolf_pelt"],
  ],
  [
    "silk_robes",
    "Silk Robes",
    [["cloth", 6], ["spider_silk", 3]],
    ["spider_silk"],
  ],
  [
    "mystic_cloth",
    "Mystic Cloth",
    [["cloth", 5], ["bat_wing", 3]],
    ["bat_wing"],
  ],
  ["plate_mail", "Plate Mail", [["iron_bar", 6], ["leather", 2]], ["iron_bar"]],
  [
    "knight_armor",
    "Knight Armor",
    [["iron_bar", 7], ["gold_bar", 1], ["leather", 2]],
    ["gold_bar"],
  ],
  [
    "hunter_gear",
    "Hunter Gear",
    [["oak_plank", 3], ["leather", 5]],
    ["oak_plank"],
  ],
  [
    "scholar_robes",
    "Scholar Robes",
    [["cloth", 6], ["moon_shell", 1]],
    ["moon_shell"],
  ],
];

function slotRecipe(slot, key, label, mats, disc) {
  const id = `craft_${key}_${slot}_recipe`;
  const matsJson = mats
    .map(([i, q]) => `      { "itemId": "${i}", "quantity": ${q} }`)
    .join(",\n");
  const discJson = disc.map((d) => `"${d}"`).join(", ");
  const resultId = `${key}_${slot}`;
  const pieceName =
    slot === "head"
      ? `${label} Helmet`
      : slot === "chest"
        ? `${label} Chestplate`
        : `${label} Leggings`;
  return `  "${id}": {
    "id": "${id}",
    "name": "${pieceName}",
    "category": "armor",
    "result": { "itemId": "${resultId}", "quantity": 1 },
    "materials": [
${matsJson}
    ],
    "discoveryMaterials": [${discJson}],
    "description": "Craft ${pieceName.toLowerCase()}"
  }`;
}

const woodToPlank = [
  ["oak_wood", 12],
  ["pine_wood", 12],
  ["birch_wood", 10],
  ["mahogany", 10],
  ["ebony_wood", 8],
  ["ironwood", 8],
  ["dragonwood", 6],
  ["ghostwood", 6],
  ["world_tree_branch", 5],
  ["eternal_oak", 4],
];
const plankQty = [1, 1, 1, 1, 2, 2, 3, 3, 4, 5];

const oreRec = [
  ["gather_dirt_clump_recycle_recipe", "Dirt to Cloth", "material", "cloth", 2, [["dirt_clump", 30]], ["dirt_clump"], "Press dirt into rough cloth"],
  ["gather_broken_stone_recycle_recipe", "Stone Scraps to Cloth", "material", "cloth", 1, [["broken_stone", 14], ["spider_silk", 1]], ["broken_stone"], "Salvage stone scraps"],
  ["gather_coal_iron_smelt_recipe", "Smelt Iron (Coal)", "material", "iron_bar", 1, [["coal", 4], ["iron_ore", 2]], ["coal"], "Smelt iron with coal"],
  ["gather_stone_iron_recipe", "Crush Stone to Iron", "material", "iron_bar", 1, [["stone", 16]], ["stone"], "Refine crushed stone"],
  ["gather_iron_ore_bar_recipe", "Smelt Iron Ore", "material", "iron_bar", 1, [["iron_ore", 4]], ["iron_ore"], "Smelt raw iron ore"],
  ["gather_copper_ore_bar_recipe", "Smelt Copper Ore", "material", "iron_bar", 1, [["copper_ore", 5]], ["copper_ore"], "Refine copper into usable metal"],
  ["gather_silver_ore_bar_recipe", "Refine Silver Ore", "material", "iron_bar", 2, [["silver_ore", 3]], ["silver_ore"], "Refine silver ore"],
  ["gather_gold_ore_bar_recipe", "Smelt Gold Ore", "material", "gold_bar", 1, [["gold_ore", 3]], ["gold_ore"], "Smelt gold ore"],
  ["gather_mithril_ore_bar_recipe", "Refine Mithril Ore", "material", "gold_bar", 1, [["mithril_ore", 2], ["iron_bar", 2]], ["mithril_ore"], "Refine mithril"],
  ["gather_obsidian_bar_recipe", "Shape Obsidian", "material", "iron_bar", 3, [["obsidian", 2]], ["obsidian"], "Work obsidian into bars"],
  ["gather_dragon_stone_bar_recipe", "Infuse Dragon Stone", "material", "gold_bar", 2, [["dragon_stone", 2], ["iron_bar", 1]], ["dragon_stone"], "Channel dragon stone"],
  ["gather_void_crystal_bar_recipe", "Channel Void Crystal", "material", "gold_bar", 2, [["void_crystal", 1], ["spirit_essence", 2]], ["void_crystal"], "Stabilize void crystal"],
];

const fishRec = [
  ["fish_old_boot_recycle_recipe", "Salvage Old Boots", "material", "cloth", 2, [["old_boot", 8], ["cloth", 1]], ["old_boot"], "Salvage old boots"],
  ["fish_torn_net_recipe", "Repair Torn Net", "material", "cloth", 2, [["torn_net", 5], ["spider_silk", 1]], ["torn_net"], "Scrap nets into cloth"],
  ["fish_soggy_scroll_recipe", "Dry Soggy Scroll", "consumable", "wildberry_jam", 1, [["soggy_scroll", 2], ["wild_herb", 3], ["honey", 1]], ["soggy_scroll"], "Recover usable pulp"],
  ["fish_small_carp_jerky_recipe", "Carp Jerky", "consumable", "hunters_jerky", 3, [["small_carp", 3], ["honey", 1]], ["small_carp"], "Smoke small carp"],
  ["fish_river_trout_jerky_recipe", "Trout Jerky", "consumable", "hunters_jerky", 4, [["river_trout", 2], ["honey", 1]], ["river_trout"], "Smoke river trout"],
  ["fish_mudfish_broth_recipe", "Mudfish Broth", "consumable", "minor_vitals_potion", 1, [["mudfish", 3], ["honey", 1]], ["mudfish"], "Boil mudfish broth"],
  ["fish_silver_bass_meal_recipe", "Bass Meal", "consumable", "minor_vitals_potion", 2, [["silver_bass", 2], ["pine_nut", 2]], ["silver_bass"], "Cook silver bass"],
  ["fish_swamp_eel_mana_recipe", "Eel Mana Broth", "consumable", "great_mana_draught", 1, [["swamp_eel", 2], ["spirit_essence", 1]], ["swamp_eel"], "Distill swamp eel"],
  ["fish_spotted_pike_tonic_recipe", "Pike Tonic", "consumable", "mana_shard_tonic", 2, [["spotted_pike", 2], ["water_crystal", 1]], ["spotted_pike"], "Render pike oil tonic"],
  ["fish_golden_carp_mega_recipe", "Golden Carp Elixir", "consumable", "mega_potion", 1, [["golden_carp", 1], ["honey", 3]], ["golden_carp"], "Brew golden carp elixir"],
  ["fish_shadow_eel_recipe", "Shadow Eel Essence", "material", "spirit_essence", 2, [["shadow_eel", 2], ["shadow_essence", 1]], ["shadow_eel"], "Extract shadow essence"],
  ["fish_crystal_trout_tonic_recipe", "Crystal Trout Tonic", "consumable", "mana_shard_tonic", 3, [["crystal_trout", 2], ["water_essence", 1]], ["crystal_trout"], "Crystal trout distillation"],
  ["fish_ancient_catfish_feast_recipe", "Catfish Feast", "consumable", "great_mana_draught", 2, [["ancient_catfish", 1], ["honey", 2], ["deer_meat", 1]], ["ancient_catfish"], "Cook ancient catfish feast"],
  ["fish_void_fish_draught_recipe", "Void Fish Draught", "consumable", "great_mana_draught", 2, [["void_fish", 1], ["night_essence", 1]], ["void_fish"], "Stabilize void fish"],
  ["fish_dragon_koi_gold_recipe", "Dragon Koi Offering", "material", "gold_bar", 2, [["dragon_koi", 1], ["dragon_stone", 1]], ["dragon_koi"], "Offer dragon koi"],
  ["fish_phantom_eel_recipe", "Phantom Eel Phial", "consumable", "sting_balm", 2, [["phantom_eel", 1], ["ectoplasm", 2]], ["phantom_eel"], "Bottle phantom eel oil"],
];

const herbRec = [
  ["herb_wild_herb_jam_recipe", "Wild Herb Jam", "consumable", "wildberry_jam", 2, [["wild_herb", 5], ["honey", 1]], ["wild_herb"], "Cook wild herbs"],
  ["herb_wild_mushroom_jam_recipe", "Mushroom Preserve", "consumable", "wildberry_jam", 2, [["wild_mushroom", 4], ["wheat_grain", 3]], ["wild_mushroom"], "Preserve mushrooms"],
  ["herb_healing_herb_vitals_recipe", "Healing Herb Vitals", "consumable", "minor_vitals_potion", 2, [["healing_herb", 3], ["honey", 2]], ["healing_herb"], "Brew healing herb tonic"],
  ["herb_poison_mushroom_cracker_recipe", "Poison Mushroom Crackers", "consumable", "cobra_cracker", 2, [["poison_mushroom", 3], ["spider_venom", 1]], ["poison_mushroom"], "Coat crackers in toxin"],
  ["herb_swamp_root_balm_recipe", "Swamp Root Balm", "consumable", "sting_balm", 2, [["swamp_root", 2], ["honey", 2]], ["swamp_root"], "Mix swamp balm"],
  ["herb_moonflower_mana_recipe", "Moonflower Draught", "consumable", "mana_shard_tonic", 3, [["moonflower", 1], ["spirit_essence", 1]], ["moonflower"], "Distill moonflower"],
  ["herb_dragon_herb_ember_recipe", "Dragon Herb Ember", "consumable", "ember_jar", 2, [["dragon_herb", 2], ["fire_gland", 1]], ["dragon_herb"], "Infuse ember jars"],
  ["herb_phoenix_petal_health_recipe", "Phoenix Petal Health", "consumable", "health_potion", 4, [["phoenix_petal", 1], ["honey", 2]], ["phoenix_petal"], "Brew phoenix tincture"],
  ["herb_shadow_root_mist_recipe", "Shadow Root Mist", "consumable", "mist_charm", 2, [["shadow_root", 2], ["bat_wing", 2]], ["shadow_root"], "Bind shadow mist charm"],
  ["herb_elixir_flower_mana_recipe", "Elixir Flower Draught", "consumable", "great_mana_draught", 2, [["elixir_flower", 1], ["spirit_essence", 2]], ["elixir_flower"], "Brew elixir flower draught"],
  ["herb_soul_herb_mega_recipe", "Soul Herb Tincture", "consumable", "mega_potion", 1, [["soul_herb", 1], ["honey", 5], ["pixie_dust", 1]], ["soul_herb"], "Brew soul herb tincture"],
  ["herb_field_antidote_recipe", "Field Antidote", "consumable", "antidote", 3, [["healing_herb", 2], ["poison_mushroom", 2], ["wild_herb", 3]], ["poison_mushroom"], "Mix a crude antidote from herbs"],
];

function recipeObj(id, name, cat, resultId, qty, mats, disc, desc) {
  const matsJson = mats
    .map(([i, q]) => `      { "itemId": "${i}", "quantity": ${q} }`)
    .join(",\n");
  const discJson = disc.map((d) => `"${d}"`).join(", ");
  return `  "${id}": {
    "id": "${id}",
    "name": "${name}",
    "category": "${cat}",
    "result": { "itemId": "${resultId}", "quantity": ${qty} },
    "materials": [
${matsJson}
    ],
    "discoveryMaterials": [${discJson}],
    "description": "${desc}"
  }`;
}

const chunks = [];

for (let i = 0; i < woodToPlank.length; i++) {
  const w = woodToPlank[i][0];
  const q = woodToPlank[i][1];
  const p = plankQty[i];
  const id = `gather_${w}_plank_recipe`;
  chunks.push(
    recipeObj(
      id,
      `Saw Plank (${w.replace(/_/g, " ")})`,
      "material",
      "oak_plank",
      p,
      [[w, q]],
      [w],
      `Saw ${w} into planks`,
    ),
  );
}
for (const o of oreRec) {
  chunks.push(recipeObj(o[0], o[1], o[2], o[3], o[4], o[5], o[6], o[7]));
}
for (const f of fishRec) {
  chunks.push(recipeObj(f[0], f[1], f[2], f[3], f[4], f[5], f[6], f[7]));
}
for (const h of herbRec) {
  chunks.push(recipeObj(h[0], h[1], h[2], h[3], h[4], h[5], h[6], h[7]));
}

const slots = [
  ["head", "head"],
  ["chest", "chest"],
  ["legs", "legs"],
];
for (const [slot, sl] of slots) {
  for (const [key, label, mats, disc] of bootDefs) {
    chunks.push(slotRecipe(slot, key, label, mats, disc));
  }
}

const shields = [
  ["craft_wooden_shield_recipe", "Wooden Shield", "wooden_shield", [["oak_plank", 2], ["leather", 1]], ["oak_plank"], "Assemble wooden shield"],
  ["craft_iron_buckler_recipe", "Iron Buckler", "iron_buckler", [["iron_bar", 2], ["oak_plank", 1]], ["iron_bar"], "Forge iron buckler"],
  ["craft_leather_shield_recipe", "Leather Shield", "leather_shield", [["leather", 5], ["oak_plank", 1]], ["leather"], "Bind leather shield"],
  ["craft_steel_shield_recipe", "Steel Shield", "steel_shield", [["iron_bar", 6], ["leather", 2]], ["iron_bar"], "Forge steel shield"],
  ["craft_knights_shield_recipe", "Knight's Shield", "knights_shield", [["iron_bar", 7], ["gold_bar", 1], ["leather", 2]], ["gold_bar"], "Forge knight shield"],
  ["craft_tower_shield_recipe", "Tower Shield", "tower_shield", [["iron_bar", 9], ["oak_plank", 2], ["leather", 3]], ["iron_bar"], "Forge tower shield"],
  ["craft_dragonscale_shield_recipe", "Dragonscale Shield", "dragonscale_shield", [["iron_bar", 8], ["serpent_scale", 4], ["drake_scale", 2]], ["drake_scale"], "Forge dragonscale shield"],
  ["craft_phoenix_shield_recipe", "Phoenix Shield", "phoenix_shield", [["iron_bar", 6], ["fire_gland", 2], ["leather", 4]], ["fire_gland"], "Forge phoenix shield"],
  ["craft_mirror_shield_recipe", "Mirror Shield", "mirror_shield", [["iron_bar", 6], ["moon_shell", 2], ["prism_shard", 1]], ["prism_shard"], "Forge mirror shield"],
  ["craft_aegis_shield_recipe", "Aegis Shield", "aegis_shield", [["gold_bar", 5], ["iron_bar", 12], ["sky_crystal", 1]], ["sky_crystal"], "Forge aegis shield"],
  ["craft_guardian_shield_recipe", "Guardian Shield", "guardian_shield", [["gold_bar", 4], ["iron_bar", 14], ["guardian_stone", 1]], ["guardian_stone"], "Forge guardian shield"],
  ["craft_celestial_shield_recipe", "Celestial Shield", "celestial_shield", [["gold_bar", 6], ["iron_bar", 8], ["light_essence", 2]], ["light_essence"], "Forge celestial shield"],
  ["craft_shield_of_the_ancients_recipe", "Shield of the Ancients", "shield_of_the_ancients", [["gold_bar", 16], ["titan_stone", 5], ["ancient_gem", 2]], ["ancient_gem"], "Forge ancient shield"],
  ["craft_bulwark_of_eternity_recipe", "Bulwark of Eternity", "bulwark_of_eternity", [["gold_bar", 20], ["titan_stone", 6], ["crystal_heart", 1]], ["crystal_heart"], "Forge bulwark of eternity"],
  ["craft_void_barrier_recipe", "Void Barrier", "void_barrier", [["gold_bar", 12], ["void_crystal", 1], ["shadow_essence", 4]], ["void_crystal"], "Forge void barrier"],
];
for (const s of shields) {
  const mats = s[3].map(([i, q]) => [i, q]);
  const matsJson = mats
    .map(([i, q]) => `      { "itemId": "${i}", "quantity": ${q} }`)
    .join(",\n");
  const disc = s[4].map((d) => `"${d}"`).join(", ");
  chunks.push(`  "${s[0]}": {
    "id": "${s[0]}",
    "name": "${s[1]}",
    "category": "shield",
    "result": { "itemId": "${s[2]}", "quantity": 1 },
    "materials": [
${matsJson}
    ],
    "discoveryMaterials": [${disc}],
    "description": "${s[5]}"
  }`);
}

const out = ",\n" + chunks.join(",\n") + "\n";
fs.writeFileSync(path.join(__dirname, "_extra_recipes_fragment.txt"), out, "utf8");
console.log("Wrote fragment, recipes:", chunks.length);
