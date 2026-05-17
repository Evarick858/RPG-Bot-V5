const locations = {

  // Add these 3 dungeon entrance locations to locations.js

  // ═══════════════════════════════════════════════════════════
  // DUNGEON ENTRANCES
  // ═══════════════════════════════════════════════════════════

  "forgotten_crypt_entrance": {
    "id": "forgotten_crypt_entrance",
    "name": "Forgotten Crypt Entrance",
    "emoji": "🏚️⚔️",
    "description": "A crumbling entrance to an ancient crypt. Dark energy emanates from within. Recommended Level: 10+",
    "safe": true,
    "minLevel": 10,
    "connectedTo": [
      "haunted_hollow",
      "shadow_woods"
    ],
    "actions": [
      "dungeon"
    ],
    "enemies": []
  },

  "volcanic_rift_gate": {
    "id": "volcanic_rift_gate",
    "name": "Volcanic Rift Gate",
    "emoji": "🌋⚔️",
    "description": "A massive gate carved into volcanic rock. Heat waves distort the air. Recommended Level: 20+",
    "safe": true,
    "minLevel": 20,
    "connectedTo": [
      "magma_chamber",
      "volcanic_ridge",
      "scorched_dunes"
    ],
    "actions": [
      "dungeon"
    ],
    "enemies": []
  },

  "frozen_abyss_portal": {
    "id": "frozen_abyss_portal",
    "name": "Frozen Abyss Portal",
    "emoji": "❄️⚔️",
    "description": "A shimmering portal of ice leading to the frozen depths. Frost covers everything nearby. Recommended Level: 30+",
    "safe": true,
    "minLevel": 30,
    "connectedTo": [
      "frozen_peaks",
      "crystal_cavern"
    ],
    "actions": [
      "dungeon"
    ],
    "enemies": []
  },

    // ═══════════════════════════════════════════════════════════
  // NEW BEGINNER ZONES (Level 1-2) - 20 Locations
  // ═══════════════════════════════════════════════════════════

  // ── Safe Zones (4 new) ──
  "lakeside_inn": {
    "id": "lakeside_inn",
    "name": "Lakeside Inn",
    "emoji": "🏨",
    "description": "A cozy inn by the lake. Travelers rest here and share stories over warm meals.",
    "safe": true,
    "minLevel": 1,
    "connectedTo": ["calm_lake", "willow_grove", "stone_bridge"],
    "actions": ["shop"],
    "enemies": []
  },
  "farmers_market": {
    "id": "farmers_market",
    "name": "Farmer's Market",
    "emoji": "🌽",
    "description": "A bustling market where farmers sell fresh produce and basic supplies.",
    "safe": true,
    "minLevel": 1,
    "connectedTo": ["wheat_field", "apple_orchard", "country_road"],
    "actions": ["shop", "forage"],
    "enemies": []
  },
  "riverside_camp": {
    "id": "riverside_camp",
    "name": "Riverside Camp",
    "emoji": "⛺",
    "description": "A small campsite by the river. Fishermen sell their catch and basic gear.",
    "safe": true,
    "minLevel": 2,
    "connectedTo": ["rushing_river", "pebble_beach", "willow_grove", "riverside_path"],
    "actions": ["shop", "fish"],
    "enemies": []
  },
  "woodland_outpost": {
    "id": "woodland_outpost",
    "name": "Woodland Outpost",
    "emoji": "🏕️",
    "description": "A ranger outpost in the woods. Rangers offer supplies and advice to travelers.",
    "safe": true,
    "minLevel": 2,
    "connectedTo": ["pine_forest", "oak_woodland", "hunters_trail"],
    "actions": ["shop"],
    "enemies": []
  },

  // ── Combat Zones Level 1 (8 locations) ──
  "calm_lake": {
    "id": "calm_lake",
    "name": "Calm Lake",
    "emoji": "🏞️",
    "description": "A peaceful lake with crystal clear water. Small fish swim near the surface.",
    "safe": false,
    "minLevel": 1,
    "connectedTo": ["lakeside_inn", "pebble_beach"],
    "actions": ["fish", "forage"],
    "enemies": ["calm_lake_minnow", "calm_lake_duck", "calm_lake_otter"]
  },
  "willow_grove": {
    "id": "willow_grove",
    "name": "Willow Grove",
    "emoji": "🌿",
    "description": "Graceful willow trees sway in the breeze. Small creatures hide among the branches.",
    "safe": false,
    "minLevel": 1,
    "connectedTo": ["lakeside_inn", "riverside_camp", "stone_bridge"],
    "actions": ["hunt", "chop", "forage"],
    "enemies": ["willow_grove_sparrow", "willow_grove_mouse", "willow_grove_caterpillar"]
  },
  "wheat_field": {
    "id": "wheat_field",
    "name": "Wheat Field",
    "emoji": "🌾",
    "description": "Golden wheat sways in the wind. Field mice and birds search for grain.",
    "safe": false,
    "minLevel": 1,
    "connectedTo": ["farmers_market", "country_road", "abandoned_farm"],
    "actions": ["hunt", "forage"],
    "enemies": ["wheat_field_mouse", "wheat_field_crow", "wheat_field_grasshopper"]
  },
  "apple_orchard": {
    "id": "apple_orchard",
    "name": "Apple Orchard",
    "emoji": "🍎",
    "description": "Rows of apple trees heavy with fruit. Insects and small animals feast here.",
    "safe": false,
    "minLevel": 1,
    "connectedTo": ["farmers_market", "country_road"],
    "actions": ["hunt", "forage"],
    "enemies": ["apple_orchard_bee", "apple_orchard_worm", "apple_orchard_bird"]
  },
  "country_road": {
    "id": "country_road",
    "name": "Country Road",
    "emoji": "🛤️",
    "description": "A dirt road connecting farms. Occasionally bandits target lone travelers.",
    "safe": false,
    "minLevel": 1,
    "connectedTo": ["farmers_market", "wheat_field", "apple_orchard", "stone_bridge"],
    "actions": ["hunt", "forage"],
    "enemies": ["country_road_bandit", "country_road_stray_dog", "country_road_snake"]
  },
  "pebble_beach": {
    "id": "pebble_beach",
    "name": "Pebble Beach",
    "emoji": "🪨",
    "description": "A small beach covered in smooth pebbles. Crabs and small fish are abundant.",
    "safe": false,
    "minLevel": 1,
    "connectedTo": ["calm_lake", "riverside_camp"],
    "actions": ["hunt", "fish", "forage"],
    "enemies": ["pebble_beach_crab", "pebble_beach_minnow", "pebble_beach_gull"]
  },
  "stone_bridge": {
    "id": "stone_bridge",
    "name": "Stone Bridge",
    "emoji": "🌉",
    "description": "An old stone bridge over a stream. Moss grows on the ancient stones.",
    "safe": false,
    "minLevel": 1,
    "connectedTo": ["lakeside_inn", "willow_grove", "country_road", "rushing_river"],
    "actions": ["hunt", "fish"],
    "enemies": ["stone_bridge_toad", "stone_bridge_spider", "stone_bridge_rat"]
  },
  "clover_field": {
    "id": "clover_field",
    "name": "Clover Field",
    "emoji": "🍀",
    "description": "A field of clover where rabbits and insects thrive. Lucky four-leaf clovers grow here.",
    "safe": false,
    "minLevel": 1,
    "connectedTo": ["green_meadow"],
    "actions": ["hunt", "forage"],
    "enemies": ["clover_field_rabbit", "clover_field_beetle", "clover_field_butterfly"]
  },

  // ── Combat Zones Level 2 (8 locations) ──
  "rushing_river": {
    "id": "rushing_river",
    "name": "Rushing River",
    "emoji": "🌊",
    "description": "Fast-flowing water with rocks jutting out. Larger fish swim in the current.",
    "safe": false,
    "minLevel": 2,
    "connectedTo": ["riverside_camp", "stone_bridge", "pine_forest"],
    "actions": ["hunt", "fish"],
    "enemies": ["rushing_river_salmon", "rushing_river_otter", "rushing_river_heron"]
  },
  "pine_forest": {
    "id": "pine_forest",
    "name": "Pine Forest",
    "emoji": "🌲",
    "description": "Tall pine trees create a shaded canopy. Squirrels and birds nest in the branches.",
    "safe": false,
    "minLevel": 2,
    "connectedTo": ["woodland_outpost", "rushing_river", "oak_woodland"],
    "actions": ["hunt", "chop", "forage"],
    "enemies": ["pine_forest_squirrel", "pine_forest_owl", "pine_forest_porcupine"]
  },
  "oak_woodland": {
    "id": "oak_woodland",
    "name": "Oak Woodland",
    "emoji": "🌳",
    "description": "Ancient oak trees dominate this woodland. Acorns litter the forest floor.",
    "safe": false,
    "minLevel": 2,
    "connectedTo": ["woodland_outpost", "pine_forest", "hunters_trail"],
    "actions": ["hunt", "chop", "forage"],
    "enemies": ["oak_woodland_boar", "oak_woodland_badger", "oak_woodland_hawk"]
  },
  "hunters_trail": {
    "id": "hunters_trail",
    "name": "Hunter's Trail",
    "emoji": "🥾",
    "description": "A narrow trail used by hunters. Deer tracks are visible in the mud.",
    "safe": false,
    "minLevel": 2,
    "connectedTo": ["woodland_outpost", "oak_woodland", "bramble_thicket"],
    "actions": ["hunt", "forage"],
    "enemies": ["hunters_trail_deer", "hunters_trail_wolf", "hunters_trail_lynx"]
  },
  "bramble_thicket": {
    "id": "bramble_thicket",
    "name": "Bramble Thicket",
    "emoji": "🌿",
    "description": "Dense thorny bushes make passage difficult. Berries and small animals hide within.",
    "safe": false,
    "minLevel": 2,
    "connectedTo": ["hunters_trail", "mossy_cave"],
    "actions": ["hunt", "forage"],
    "enemies": ["bramble_thicket_fox", "bramble_thicket_rabbit", "bramble_thicket_snake"]
  },
  "mossy_cave": {
    "id": "mossy_cave",
    "name": "Mossy Cave",
    "emoji": "🕳️",
    "description": "A small cave entrance covered in moss. Bats and small creatures dwell inside.",
    "safe": false,
    "minLevel": 2,
    "connectedTo": ["bramble_thicket"],
    "actions": ["hunt", "mine"],
    "enemies": ["mossy_cave_bat", "mossy_cave_spider", "mossy_cave_rat"]
  },
  "muddy_swamp": {
    "id": "muddy_swamp",
    "name": "Muddy Swamp",
    "emoji": "🐸",
    "description": "A murky swamp with thick mud. Frogs croak and insects buzz constantly.",
    "safe": false,
    "minLevel": 2,
    "connectedTo": ["shallow_pond"],
    "actions": ["hunt", "fish", "forage"],
    "enemies": ["muddy_swamp_frog", "muddy_swamp_snake", "muddy_swamp_mosquito"]
  },
  "abandoned_farm": {
    "id": "abandoned_farm",
    "name": "Abandoned Farm",
    "emoji": "🏚️",
    "description": "An old farm overtaken by nature. Wild animals have made it their home.",
    "safe": false,
    "minLevel": 2,
    "connectedTo": ["wheat_field"],
    "actions": ["hunt", "forage"],
    "enemies": ["abandoned_farm_rat", "abandoned_farm_wild_cat", "abandoned_farm_crow"]
  },

  "starter_village": {
    "id": "starter_village",
    "name": "Starter Village",
    "emoji": "🏘️",
    "description": "A peaceful settlement where adventurers begin their journey. Merchants offer basic supplies.",
    "safe": true,
    "minLevel": 1,
    "connectedTo": [
      "green_meadow",
      "peaceful_forest",
      "riverside_path"
    ],
    "actions": [
      "shop"
    ],
    "enemies": []
  },
  "trading_post": {
    "id": "trading_post",
    "name": "Trading Post",
    "emoji": "🏪",
    "description": "A busy marketplace where travelers trade goods and share stories.",
    "safe": true,
    "minLevel": 1,
    "connectedTo": [
      "sunny_hills",
      "flower_garden",
      "old_bridge"
    ],
    "actions": [
      "shop",
      "forage"
    ],
    "enemies": []
  },
  "fishing_village": {
    "id": "fishing_village",
    "name": "Fishing Village",
    "emoji": "🎣",
    "description": "A quiet coastal village. Fishermen sell their daily catch here.",
    "safe": true,
    "minLevel": 1,
    "connectedTo": [
      "sandy_beach",
      "shallow_pond",
      "misty_grove"
    ],
    "actions": [
      "shop",
      "fish"
    ],
    "enemies": []
  },
  "green_meadow": {
    "id": "green_meadow",
    "name": "Green Meadow",
    "emoji": "🌾",
    "description": "A grassy field where small critters roam. Perfect for beginners.",
    "safe": false,
    "minLevel": 1,
    "connectedTo": [
      "starter_village",
      "peaceful_forest",
      "clover_field"
    ],
    "actions": [
      "hunt",
      "forage"
    ],
    "enemies": [
      "green_meadow_rabbit",
      "green_meadow_fox",
      "green_meadow_wild_chicken"
    ]
  },
  "peaceful_forest": {
    "id": "peaceful_forest",
    "name": "Peaceful Forest",
    "emoji": "🌲",
    "description": "A calm woodland with gentle creatures and plenty of resources.",
    "safe": false,
    "minLevel": 1,
    "connectedTo": [
      "starter_village",
      "green_meadow",
      "sunny_hills"
    ],
    "actions": [
      "hunt",
      "chop",
      "forage"
    ],
    "enemies": [
      "peaceful_forest_squirrel",
      "peaceful_forest_deer",
      "peaceful_forest_small_wolf"
    ]
  },
  "riverside_path": {
    "id": "riverside_path",
    "name": "Riverside Path",
    "emoji": "🌊",
    "description": "A scenic trail along the river where fish jump and birds sing.",
    "safe": false,
    "minLevel": 1,
    "connectedTo": [
      "starter_village",
      "shallow_pond",
      "riverside_camp"
    ],
    "actions": [
      "hunt",
      "fish",
      "forage"
    ],
    "enemies": [
      "riverside_path_frog",
      "riverside_path_crab",
      "riverside_path_small_fish"
    ]
  },
  "sunny_hills": {
    "id": "sunny_hills",
    "name": "Sunny Hills",
    "emoji": "⛰️",
    "description": "Rolling hills under bright sunshine. A few bandits hide among the rocks.",
    "safe": false,
    "minLevel": 1,
    "connectedTo": [
      "trading_post",
      "peaceful_forest",
      "flower_garden"
    ],
    "actions": [
      "hunt",
      "mine",
      "forage"
    ],
    "enemies": [
      "sunny_hills_bandit",
      "sunny_hills_thief",
      "sunny_hills_rat"
    ]
  },
  "flower_garden": {
    "id": "flower_garden",
    "name": "Flower Garden",
    "emoji": "🌸",
    "description": "A beautiful garden full of colorful flowers and buzzing insects.",
    "safe": false,
    "minLevel": 1,
    "connectedTo": [
      "trading_post",
      "sunny_hills",
      "old_bridge"
    ],
    "actions": [
      "hunt",
      "forage"
    ],
    "enemies": [
      "flower_garden_bee",
      "flower_garden_butterfly",
      "flower_garden_ladybug"
    ]
  },
  "old_bridge": {
    "id": "old_bridge",
    "name": "Old Bridge",
    "emoji": "🌉",
    "description": "An ancient stone bridge where goblins sometimes gather.",
    "safe": false,
    "minLevel": 2,
    "connectedTo": [
      "trading_post",
      "flower_garden",
      "misty_grove"
    ],
    "actions": [
      "hunt",
      "fish"
    ],
    "enemies": [
      "old_bridge_goblin",
      "old_bridge_troll",
      "old_bridge_bat"
    ]
  },
  "sandy_beach": {
    "id": "sandy_beach",
    "name": "Sandy Beach",
    "emoji": "🏖️",
    "description": "A warm beach with gentle waves. Crabs scuttle across the sand.",
    "safe": false,
    "minLevel": 1,
    "connectedTo": [
      "fishing_village",
      "shallow_pond",
      "mystic_waterfall"
    ],
    "actions": [
      "hunt",
      "fish",
      "forage"
    ],
    "enemies": [
      "sandy_beach_crab",
      "sandy_beach_seagull",
      "sandy_beach_starfish"
    ]
  },
  "shallow_pond": {
    "id": "shallow_pond",
    "name": "Shallow Pond",
    "emoji": "💧",
    "description": "A clear pond teeming with small aquatic life.",
    "safe": false,
    "minLevel": 1,
    "connectedTo": [
      "fishing_village",
      "sandy_beach",
      "riverside_path",
      "misty_grove",
      "muddy_swamp"
    ],
    "actions": [
      "hunt",
      "fish",
      "forage"
    ],
    "enemies": [
      "shallow_pond_turtle",
      "shallow_pond_fish",
      "shallow_pond_frog"
    ]
  },
  "misty_grove": {
    "id": "misty_grove",
    "name": "Misty Grove",
    "emoji": "🌫️",
    "description": "A foggy grove where visibility is low but danger is minimal.",
    "safe": false,
    "minLevel": 2,
    "connectedTo": [
      "fishing_village",
      "old_bridge",
      "shallow_pond",
      "mushroom_patch"
    ],
    "actions": [
      "hunt",
      "chop",
      "forage"
    ],
    "enemies": [
      "misty_grove_owl",
      "misty_grove_raccoon",
      "misty_grove_snake"
    ]
  },
  "mushroom_patch": {
    "id": "mushroom_patch",
    "name": "Mushroom Patch",
    "emoji": "🍄",
    "description": "A damp area covered in mushrooms. Small creatures feed here.",
    "safe": false,
    "minLevel": 2,
    "connectedTo": [
      "misty_grove",
      "berry_thicket"
    ],
    "actions": [
      "hunt",
      "forage"
    ],
    "enemies": [
      "mushroom_patch_slug",
      "mushroom_patch_snail",
      "mushroom_patch_beetle"
    ]
  },
  "berry_thicket": {
    "id": "berry_thicket",
    "name": "Berry Thicket",
    "emoji": "🫐",
    "description": "Dense bushes heavy with berries. Animals come here to feed.",
    "safe": false,
    "minLevel": 2,
    "connectedTo": [
      "mushroom_patch",
      "rocky_path"
    ],
    "actions": [
      "hunt",
      "forage"
    ],
    "enemies": [
      "berry_thicket_bear_cub",
      "berry_thicket_boar",
      "berry_thicket_hedgehog"
    ]
  },
  "rocky_path": {
    "id": "rocky_path",
    "name": "Rocky Path",
    "emoji": "🪨",
    "description": "A rough trail with loose stones. Small lizards sun themselves on the rocks.",
    "safe": false,
    "minLevel": 2,
    "connectedTo": [
      "berry_thicket",
      "windy_cliff"
    ],
    "actions": [
      "hunt",
      "mine",
      "forage"
    ],
    "enemies": [
      "rocky_path_lizard",
      "rocky_path_scorpion",
      "rocky_path_stone_crab"
    ]
  },
  "windy_cliff": {
    "id": "windy_cliff",
    "name": "Windy Cliff",
    "emoji": "🌬️",
    "description": "A breezy clifftop with a stunning view. Birds nest in the rocks.",
    "safe": false,
    "minLevel": 3,
    "connectedTo": [
      "rocky_path",
      "ancient_oak",
      "whispering_canyon"
    ],
    "actions": [
      "hunt",
      "mine"
    ],
    "enemies": [
      "windy_cliff_hawk",
      "windy_cliff_eagle",
      "windy_cliff_vulture"
    ]
  },
  "ancient_oak": {
    "id": "ancient_oak",
    "name": "Ancient Oak",
    "emoji": "🌳",
    "description": "A massive old tree surrounded by smaller woodland creatures.",
    "safe": false,
    "minLevel": 3,
    "connectedTo": [
      "windy_cliff",
      "hidden_cave",
      "forgotten_shrine"
    ],
    "actions": [
      "hunt",
      "chop",
      "forage"
    ],
    "enemies": [
      "ancient_oak_woodpecker",
      "ancient_oak_squirrel",
      "ancient_oak_tree_spirit"
    ]
  },
  "hidden_cave": {
    "id": "hidden_cave",
    "name": "Hidden Cave",
    "emoji": "🕳️",
    "description": "A mysterious cave entrance. Strange sounds echo from within...",
    "safe": false,
    "minLevel": 3,
    "connectedTo": [
      "ancient_oak"
    ],
    "actions": [
      "hunt",
      "mine"
    ],
    "enemies": [
      "hidden_cave_bat",
      "hidden_cave_spider",
      "hidden_cave_cave_rat"
    ]
  },
  "forgotten_shrine": {
    "id": "forgotten_shrine",
    "name": "Forgotten Shrine",
    "emoji": "⛩️",
    "description": "An old shrine at the edge of explored lands. What lies beyond?",
    "safe": false,
    "minLevel": 3,
    "connectedTo": [
      "ancient_oak",
      "bamboo_forest",
      "twilight_meadow"
    ],
    "actions": [
      "hunt",
      "forage"
    ],
    "enemies": [
      "forgotten_shrine_spirit",
      "forgotten_shrine_fox",
      "forgotten_shrine_monk"
    ]
  },
  "bamboo_forest": {
    "id": "bamboo_forest",
    "name": "Bamboo Forest",
    "emoji": "🎋",
    "description": "Tall bamboo stalks sway in the wind. Pandas and martial artists train here.",
    "safe": false,
    "minLevel": 3,
    "connectedTo": [
      "forgotten_shrine",
      "twilight_meadow",
      "jade_temple"
    ],
    "actions": [
      "hunt",
      "chop",
      "forage"
    ],
    "enemies": [
      "bamboo_forest_panda",
      "bamboo_forest_ninja",
      "bamboo_forest_bamboo_spirit"
    ]
  },
  "jade_temple": {
    "id": "jade_temple",
    "name": "Jade Temple",
    "emoji": "🏯",
    "description": "A serene temple made of jade. Monks offer rest and supplies to travelers.",
    "safe": true,
    "minLevel": 3,
    "connectedTo": [
      "bamboo_forest",
      "twilight_meadow",
      "iron_mine",
      "shadow_woods"
    ],
    "actions": [
      "shop"
    ],
    "enemies": []
  },
  "twilight_meadow": {
    "id": "twilight_meadow",
    "name": "Twilight Meadow",
    "emoji": "🌅",
    "description": "A meadow caught between day and night. Strange creatures emerge at dusk.",
    "safe": false,
    "minLevel": 3,
    "connectedTo": [
      "forgotten_shrine",
      "bamboo_forest",
      "jade_temple",
      "shadow_woods"
    ],
    "actions": [
      "hunt",
      "forage"
    ],
    "enemies": [
      "twilight_meadow_twilight_wolf",
      "twilight_meadow_dusk_bat",
      "twilight_meadow_shadow_deer"
    ]
  },
  "shadow_woods": {
    "id": "shadow_woods",
    "name": "Shadow Woods",
    "emoji": "🌑",
    "description": "A dark forest where shadows move on their own. Dangerous but rich in resources.",
    "safe": false,
    "minLevel": 4,
    "connectedTo": [
      "jade_temple",
      "twilight_meadow",
      "haunted_hollow",
      "iron_mine",
            "forgotten_crypt_entrance"
    ],
    "actions": [
      "hunt",
      "chop",
      "forage"
    ],
    "enemies": [
      "shadow_woods_shadow_beast",
      "shadow_woods_dark_elf",
      "shadow_woods_wraith"
    ]
  },
  "haunted_hollow": {
    "id": "haunted_hollow",
    "name": "Haunted Hollow",
    "emoji": "👻",
    "description": "A hollow filled with restless spirits. Ghostly whispers echo through the air.",
    "safe": false,
    "minLevel": 4,
    "connectedTo": [
      "shadow_woods",
            "forgotten_crypt_entrance"
    ],
    "actions": [
      "hunt",
      "forage"
    ],
    "enemies": [
      "haunted_hollow_ghost",
      "haunted_hollow_poltergeist",
      "haunted_hollow_banshee"
    ]
  },
  "iron_mine": {
    "id": "iron_mine",
    "name": "Iron Mine",
    "emoji": "⚒️",
    "description": "An active mining operation. Miners extract valuable ores from deep tunnels.",
    "safe": false,
    "minLevel": 4,
    "connectedTo": [
      "jade_temple",
      "shadow_woods",
      "copper_canyon",
      "miners_rest"
    ],
    "actions": [
      "hunt",
      "mine"
    ],
    "enemies": [
      "iron_mine_rock_golem",
      "iron_mine_ore_thief",
      "iron_mine_tunnel_rat"
    ]
  },
  "miners_rest": {
    "id": "miners_rest",
    "name": "Miner's Rest",
    "emoji": "🏕️",
    "description": "A small camp where miners rest and trade their findings. Basic supplies available.",
    "safe": true,
    "minLevel": 4,
    "connectedTo": [
      "iron_mine",
      "copper_canyon",
      "silver_lake"
    ],
    "actions": [
      "shop"
    ],
    "enemies": []
  },
  "copper_canyon": {
    "id": "copper_canyon",
    "name": "Copper Canyon",
    "emoji": "🏜️",
    "description": "A deep canyon with copper-rich walls. Bandits and wild beasts roam here.",
    "safe": false,
    "minLevel": 4,
    "connectedTo": [
      "iron_mine",
      "miners_rest",
      "silver_lake",
      "bandit_hideout"
    ],
    "actions": [
      "hunt",
      "mine",
      "forage"
    ],
    "enemies": [
      "copper_canyon_bandit_chief",
      "copper_canyon_canyon_wolf",
      "copper_canyon_rock_lizard"
    ]
  },
  "bandit_hideout": {
    "id": "bandit_hideout",
    "name": "Bandit Hideout",
    "emoji": "🏴‍☠️",
    "description": "A hidden camp where bandits store their stolen goods. Heavily guarded.",
    "safe": false,
    "minLevel": 4,
    "connectedTo": [
      "copper_canyon"
    ],
    "actions": [
      "hunt"
    ],
    "enemies": [
      "bandit_hideout_bandit_leader",
      "bandit_hideout_rogue",
      "bandit_hideout_assassin"
    ]
  },
  "silver_lake": {
    "id": "silver_lake",
    "name": "Silver Lake",
    "emoji": "🌊",
    "description": "A pristine lake that shimmers like silver under moonlight. Rare fish swim here.",
    "safe": false,
    "minLevel": 4,
    "connectedTo": [
      "miners_rest",
      "copper_canyon",
      "moonlit_shore",
      "enchanted_grove"
    ],
    "actions": [
      "hunt",
      "fish",
      "forage"
    ],
    "enemies": [
      "silver_lake_water_nymph",
      "silver_lake_giant_fish",
      "silver_lake_lake_serpent"
    ]
  },
  "moonlit_shore": {
    "id": "moonlit_shore",
    "name": "Moonlit Shore",
    "emoji": "🌙",
    "description": "A beach that glows under the moon. Mysterious creatures emerge at night.",
    "safe": false,
    "minLevel": 4,
    "connectedTo": [
      "silver_lake"
    ],
    "actions": [
      "hunt",
      "fish",
      "forage"
    ],
    "enemies": [
      "moonlit_shore_moon_crab",
      "moonlit_shore_night_stalker",
      "moonlit_shore_tide_elemental"
    ]
  },
  "enchanted_grove": {
    "id": "enchanted_grove",
    "name": "Enchanted Grove",
    "emoji": "✨",
    "description": "A magical grove where fairies and sprites dwell. Everything sparkles with magic.",
    "safe": false,
    "minLevel": 5,
    "connectedTo": [
      "silver_lake",
      "fairy_village",
      "mystic_waterfall"
    ],
    "actions": [
      "hunt",
      "chop",
      "forage"
    ],
    "enemies": [
      "enchanted_grove_pixie",
      "enchanted_grove_sprite",
      "enchanted_grove_treant"
    ]
  },
  "fairy_village": {
    "id": "fairy_village",
    "name": "Fairy Village",
    "emoji": "🧚",
    "description": "A tiny village inhabited by fairies. They offer magical items and rare goods.",
    "safe": true,
    "minLevel": 5,
    "connectedTo": [
      "enchanted_grove",
      "mystic_waterfall",
      "crystal_forest"
    ],
    "actions": [
      "shop",
      "forage"
    ],
    "enemies": []
  },
  "mystic_waterfall": {
    "id": "mystic_waterfall",
    "name": "Mystic Waterfall",
    "emoji": "💦",
    "description": "A towering waterfall with magical properties. Legends speak of treasures behind it.",
    "safe": false,
    "minLevel": 5,
    "connectedTo": [
      "enchanted_grove",
      "fairy_village",
      "crystal_forest",
      "hidden_grotto",
      "sandy_beach"
    ],
    "actions": [
      "hunt",
      "fish",
      "forage"
    ],
    "enemies": [
      "mystic_waterfall_water_elemental",
      "mystic_waterfall_river_guardian",
      "mystic_waterfall_mist_spirit"
    ]
  },
  "hidden_grotto": {
    "id": "hidden_grotto",
    "name": "Hidden Grotto",
    "emoji": "🗿",
    "description": "A secret cave behind the waterfall. Ancient treasures and guardians within.",
    "safe": false,
    "minLevel": 5,
    "connectedTo": [
      "mystic_waterfall"
    ],
    "actions": [
      "hunt",
      "mine"
    ],
    "enemies": [
      "hidden_grotto_stone_guardian",
      "hidden_grotto_treasure_mimic",
      "hidden_grotto_cave_troll"
    ]
  },
  "crystal_forest": {
    "id": "crystal_forest",
    "name": "Crystal Forest",
    "emoji": "💠",
    "description": "Trees made of crystal grow here. Beautiful but deadly crystal creatures lurk.",
    "safe": false,
    "minLevel": 5,
    "connectedTo": [
      "fairy_village",
      "mystic_waterfall",
      "prism_valley"
    ],
    "actions": [
      "hunt",
      "chop",
      "mine"
    ],
    "enemies": [
      "crystal_forest_crystal_wolf",
      "crystal_forest_glass_spider",
      "crystal_forest_prism_elemental"
    ]
  },
  "prism_valley": {
    "id": "prism_valley",
    "name": "Prism Valley",
    "emoji": "🌈",
    "description": "A valley where light refracts into endless rainbows. Disorienting and dangerous.",
    "safe": false,
    "minLevel": 5,
    "connectedTo": [
      "crystal_forest"
    ],
    "actions": [
      "hunt",
      "mine"
    ],
    "enemies": [
      "prism_valley_light_elemental",
      "prism_valley_rainbow_serpent",
      "prism_valley_refraction_beast"
    ]
  },
  "whispering_canyon": {
    "id": "whispering_canyon",
    "name": "Whispering Canyon",
    "emoji": "🌬️",
    "description": "Wind howls through this canyon, creating eerie whispers. Wind spirits dwell here.",
    "safe": false,
    "minLevel": 5,
    "connectedTo": [
      "windy_cliff",
      "echo_caves",
      "thunder_peaks"
    ],
    "actions": [
      "hunt",
      "mine"
    ],
    "enemies": [
      "whispering_canyon_wind_spirit",
      "whispering_canyon_air_elemental",
      "whispering_canyon_canyon_harpy"
    ]
  },
  "echo_caves": {
    "id": "echo_caves",
    "name": "Echo Caves",
    "emoji": "🔊",
    "description": "Every sound echoes endlessly in these caves. Sonic creatures use this to their advantage.",
    "safe": false,
    "minLevel": 5,
    "connectedTo": [
      "whispering_canyon",
      "mountain_outpost"
    ],
    "actions": [
      "hunt",
      "mine"
    ],
    "enemies": [
      "echo_caves_echo_bat",
      "echo_caves_sonic_beast",
      "echo_caves_sound_elemental"
    ]
  },
  "mountain_outpost": {
    "id": "mountain_outpost",
    "name": "Mountain Outpost",
    "emoji": "🏔️",
    "description": "A fortified outpost built into the mountainside. Veteran adventurers rest here.",
    "safe": true,
    "minLevel": 4,
    "connectedTo": [
      "frozen_peaks",
      "crystal_cavern",
      "volcanic_ridge",
      "echo_caves"
    ],
    "actions": [
      "shop"
    ],
    "enemies": []
  },
  "desert_oasis": {
    "id": "desert_oasis",
    "name": "Desert Oasis",
    "emoji": "🏜️",
    "description": "A lush oasis in the scorching desert. Merchants sell rare desert goods.",
    "safe": true,
    "minLevel": 4,
    "connectedTo": [
      "scorched_dunes",
      "sandstorm_valley",
      "ancient_ruins"
    ],
    "actions": [
      "shop",
      "fish"
    ],
    "enemies": []
  },
  "floating_sanctuary": {
    "id": "floating_sanctuary",
    "name": "Floating Sanctuary",
    "emoji": "☁️",
    "description": "A magical sanctuary floating among the clouds. Peaceful and serene.",
    "safe": true,
    "minLevel": 5,
    "connectedTo": [
      "sky_gardens",
      "thunder_peaks",
      "celestial_bridge"
    ],
    "actions": [
      "shop",
      "forage"
    ],
    "enemies": []
  },
  "underground_city": {
    "id": "underground_city",
    "name": "Underground City",
    "emoji": "🏛️",
    "description": "An ancient underground civilization. Glowing crystals light the streets.",
    "safe": true,
    "minLevel": 5,
    "connectedTo": [
      "deep_mines",
      "crystal_labyrinth",
      "magma_chamber",
      "abyssal_trench"
    ],
    "actions": [
      "shop",
      "mine"
    ],
    "enemies": []
  },
  "mystic_temple": {
    "id": "mystic_temple",
    "name": "Mystic Temple",
    "emoji": "🛕",
    "description": "A sacred temple radiating powerful magic. Monks offer guidance.",
    "safe": true,
    "minLevel": 6,
    "connectedTo": [
      "spirit_realm",
      "void_gate",
      "astral_plane",
      "crystal_labyrinth"
    ],
    "actions": [
      "shop"
    ],
    "enemies": []
  },
  "frozen_peaks": {
    "id": "frozen_peaks",
    "name": "Frozen Peaks",
    "emoji": "❄️",
    "description": "Icy mountain peaks where blizzards rage. Frost giants roam here.",
    "safe": false,
    "minLevel": 4,
    "connectedTo": [
      "mountain_outpost",
      "crystal_cavern",
      "frozen_abyss_portal"
    ],
    "actions": [
      "hunt",
      "mine"
    ],
    "enemies": [
      "frozen_peaks_yeti",
      "frozen_peaks_ice_elemental",
      "frozen_peaks_frost_giant"
    ]
  },
  "scorched_dunes": {
    "id": "scorched_dunes",
    "name": "Scorched Dunes",
    "emoji": "🔥",
    "description": "Endless dunes under a merciless sun. Fire creatures lurk beneath the sand.",
    "safe": false,
    "minLevel": 4,
    "connectedTo": [
      "desert_oasis",
      "sandstorm_valley",
      "volcanic_rift_gate",
      "volcanic_ridge"
    ],
    "actions": [
      "hunt",
      "mine"
    ],
    "enemies": [
      "scorched_dunes_sand_worm",
      "scorched_dunes_fire_scorpion",
      "scorched_dunes_desert_drake"
    ]
  },
  "crystal_cavern": {
    "id": "crystal_cavern",
    "name": "Crystal Cavern",
    "emoji": "💎",
    "description": "A cavern filled with glowing crystals. Crystal golems guard the treasures.",
    "safe": false,
    "minLevel": 4,
    "connectedTo": [
      "mountain_outpost",
      "frozen_peaks",
      "deep_mines",
      "frozen_abyss_portal"
    ],
    "actions": [
      "hunt",
      "mine"
    ],
    "enemies": [
      "crystal_cavern_crystal_golem",
      "crystal_cavern_gem_spider",
      "crystal_cavern_prism_wraith"
    ]
  },
  "volcanic_ridge": {
    "id": "volcanic_ridge",
    "name": "Volcanic Ridge",
    "emoji": "🌋",
    "description": "A ridge overlooking active volcanoes. Lava flows and fire beasts.",
    "safe": false,
    "minLevel": 4,
    "connectedTo": [
      "mountain_outpost",
      "magma_chamber",
      "scorched_dunes",
      "volcanic_rift_gate"
    ],
    "actions": [
      "hunt",
      "mine"
    ],
    "enemies": [
      "volcanic_ridge_lava_hound",
      "volcanic_ridge_magma_elemental",
      "volcanic_ridge_fire_drake"
    ]
  },
  "sandstorm_valley": {
    "id": "sandstorm_valley",
    "name": "Sandstorm Valley",
    "emoji": "🌪️",
    "description": "Constant sandstorms reduce visibility. Ancient guardians protect secrets.",
    "safe": false,
    "minLevel": 4,
    "connectedTo": [
      "desert_oasis",
      "scorched_dunes",
      "ancient_ruins"
    ],
    "actions": [
      "hunt",
      "forage"
    ],
    "enemies": [
      "sandstorm_valley_sand_guardian",
      "sandstorm_valley_dust_devil",
      "sandstorm_valley_mummy"
    ]
  },
  "sky_gardens": {
    "id": "sky_gardens",
    "name": "Sky Gardens",
    "emoji": "🌸",
    "description": "Floating gardens in the sky. Beautiful but deadly plant creatures.",
    "safe": false,
    "minLevel": 5,
    "connectedTo": [
      "floating_sanctuary",
      "thunder_peaks",
      "world_tree_peak"
    ],
    "actions": [
      "hunt",
      "forage"
    ],
    "enemies": [
      "sky_gardens_sky_serpent",
      "sky_gardens_cloud_elemental",
      "sky_gardens_wind_spirit"
    ]
  },
  "deep_mines": {
    "id": "deep_mines",
    "name": "Deep Mines",
    "emoji": "⛏️",
    "description": "Abandoned mines that go impossibly deep. Strange creatures dwell below.",
    "safe": false,
    "minLevel": 5,
    "connectedTo": [
      "underground_city",
      "crystal_cavern",
      "crystal_labyrinth"
    ],
    "actions": [
      "hunt",
      "mine"
    ],
    "enemies": [
      "deep_mines_rock_titan",
      "deep_mines_cave_horror",
      "deep_mines_shadow_miner"
    ]
  },
  "thunder_peaks": {
    "id": "thunder_peaks",
    "name": "Thunder Peaks",
    "emoji": "⚡",
    "description": "Mountain peaks constantly struck by lightning. Storm elementals thrive here.",
    "safe": false,
    "minLevel": 5,
    "connectedTo": [
      "floating_sanctuary",
      "sky_gardens",
      "celestial_bridge",
      "whispering_canyon"
    ],
    "actions": [
      "hunt",
      "mine"
    ],
    "enemies": [
      "thunder_peaks_storm_elemental",
      "thunder_peaks_lightning_dragon",
      "thunder_peaks_thunder_bird"
    ]
  },
  "ancient_ruins": {
    "id": "ancient_ruins",
    "name": "Ancient Ruins",
    "emoji": "🏺",
    "description": "Crumbling ruins of a lost civilization. Cursed guardians still patrol.",
    "safe": false,
    "minLevel": 5,
    "connectedTo": [
      "desert_oasis",
      "sandstorm_valley"
    ],
    "actions": [
      "hunt",
      "forage"
    ],
    "enemies": [
      "ancient_ruins_stone_sentinel",
      "ancient_ruins_cursed_pharaoh",
      "ancient_ruins_sand_colossus"
    ]
  },
  "magma_chamber": {
    "id": "magma_chamber",
    "name": "Magma Chamber",
    "emoji": "🔥",
    "description": "A massive chamber filled with molten lava. Fire demons spawn here.",
    "safe": false,
    "minLevel": 5,
    "connectedTo": [
      "underground_city",
      "volcanic_ridge",
      "volcanic_rift_gate",
      "demon_fortress"
    ],
    "actions": [
      "hunt",
      "mine"
    ],
    "enemies": [
      "magma_chamber_fire_demon",
      "magma_chamber_lava_titan",
      "magma_chamber_inferno_beast"
    ]
  },
  "spirit_realm": {
    "id": "spirit_realm",
    "name": "Spirit Realm",
    "emoji": "👻",
    "description": "A realm between life and death. Powerful spirits guard the boundary.",
    "safe": false,
    "minLevel": 6,
    "connectedTo": [
      "mystic_temple",
      "void_gate",
      "cursed_graveyard"
    ],
    "actions": [
      "hunt"
    ],
    "enemies": [
      "spirit_realm_death_knight",
      "spirit_realm_phantom_lord",
      "spirit_realm_soul_reaper"
    ]
  },
  "crystal_labyrinth": {
    "id": "crystal_labyrinth",
    "name": "Crystal Labyrinth",
    "emoji": "🔮",
    "description": "An ever-shifting maze of crystal walls. Easy to get lost forever.",
    "safe": false,
    "minLevel": 6,
    "connectedTo": [
      "underground_city",
      "deep_mines",
      "mystic_temple"
    ],
    "actions": [
      "hunt",
      "mine"
    ],
    "enemies": [
      "crystal_labyrinth_minotaur",
      "crystal_labyrinth_crystal_dragon",
      "crystal_labyrinth_maze_guardian"
    ]
  },
  "celestial_bridge": {
    "id": "celestial_bridge",
    "name": "Celestial Bridge",
    "emoji": "🌉",
    "description": "A bridge connecting earth to the heavens. Angels and demons clash here.",
    "safe": false,
    "minLevel": 6,
    "connectedTo": [
      "floating_sanctuary",
      "thunder_peaks",
      "astral_plane"
    ],
    "actions": [
      "hunt"
    ],
    "enemies": [
      "celestial_bridge_fallen_angel",
      "celestial_bridge_celestial_guardian",
      "celestial_bridge_void_walker"
    ]
  },
  "void_gate": {
    "id": "void_gate",
    "name": "Void Gate",
    "emoji": "🌀",
    "description": "A portal to the void. Eldritch horrors emerge from the darkness.",
    "safe": false,
    "minLevel": 6,
    "connectedTo": [
      "mystic_temple",
      "spirit_realm",
      "astral_plane"
    ],
    "actions": [
      "hunt"
    ],
    "enemies": [
      "void_gate_void_horror",
      "void_gate_eldritch_beast",
      "void_gate_chaos_spawn"
    ]
  },
  "astral_plane": {
    "id": "astral_plane",
    "name": "Astral Plane",
    "emoji": "✨",
    "description": "A dimension of pure magic. Reality bends and breaks here.",
    "safe": false,
    "minLevel": 6,
    "connectedTo": [
      "mystic_temple",
      "celestial_bridge",
      "void_gate"
    ],
    "actions": [
      "hunt"
    ],
    "enemies": [
      "astral_plane_astral_dragon",
      "astral_plane_reality_warper",
      "astral_plane_cosmic_entity"
    ]
  },
  "abyssal_trench": {
    "id": "abyssal_trench",
    "name": "Abyssal Trench",
    "emoji": "🌊",
    "description": "The deepest part of the ocean. Ancient sea monsters dwell in darkness.",
    "safe": false,
    "minLevel": 6,
    "connectedTo": [
      "underground_city"
    ],
    "actions": [
      "hunt",
      "fish"
    ],
    "enemies": [
      "abyssal_trench_kraken",
      "abyssal_trench_leviathan",
      "abyssal_trench_deep_one"
    ]
  },
  "cursed_graveyard": {
    "id": "cursed_graveyard",
    "name": "Cursed Graveyard",
    "emoji": "⚰️",
    "description": "An ancient graveyard where the dead refuse to rest. Necromancers lurk.",
    "safe": false,
    "minLevel": 6,
    "connectedTo": [
      "spirit_realm"
    ],
    "actions": [
      "hunt"
    ],
    "enemies": [
      "cursed_graveyard_lich",
      "cursed_graveyard_death_lord",
      "cursed_graveyard_bone_dragon"
    ]
  },
  "demon_fortress": {
    "id": "demon_fortress",
    "name": "Demon Fortress",
    "emoji": "🏰",
    "description": "A fortress ruled by demon lords. The ultimate challenge.",
    "safe": false,
    "minLevel": 6,
    "connectedTo": [
      "magma_chamber"
    ],
    "actions": [
      "hunt"
    ],
    "enemies": [
      "demon_fortress_demon_lord",
      "demon_fortress_hell_knight",
      "demon_fortress_infernal_dragon"
    ]
  },
  "world_tree_peak": {
    "id": "world_tree_peak",
    "name": "World Tree Peak",
    "emoji": "🌳",
    "description": "The peak of the legendary World Tree. Ancient guardians protect it.",
    "safe": false,
    "minLevel": 6,
    "connectedTo": [
      "sky_gardens"
    ],
    "actions": [
      "hunt",
      "chop"
    ],
    "enemies": [
      "world_tree_peak_treant_king",
      "world_tree_peak_nature_guardian",
      "world_tree_peak_forest_dragon"
    ]
  }
};

// ── Helper Functions ──────────────────────────────────────

/**
 * Get a location by its ID
 * @param {string} locationId - The location ID
 * @returns {object|null} The location object or null if not found
 */
function getLocationById(locationId) {
  return locations[locationId] || null;
}

/**
 * Check if a player can perform an action at a location
 * @param {string} locationId - The location ID
 * @param {string} action - The action to check (hunt, mine, chop, fish, forage, shop)
 * @returns {boolean} True if the action is available at this location
 */
function canDoAction(locationId, action) {
  const location = locations[locationId];
  if (!location) return false;
  return location.actions.includes(action);
}

/**
 * Check if two locations are directly connected
 * @param {string} fromId - Starting location ID
 * @param {string} toId - Destination location ID
 * @returns {boolean} True if locations are connected
 */
function areConnected(fromId, toId) {
  const fromLoc = locations[fromId];
  if (!fromLoc) return false;
  return fromLoc.connectedTo.includes(toId);
}

/**
 * Get all locations reachable from a given location
 * @param {string} locationId - The location ID
 * @returns {array} Array of location objects that are directly connected
 */
function getReachableLocations(locationId) {
  const location = locations[locationId];
  if (!location) return [];
  
  return location.connectedTo
    .map((id) => locations[id])
    .filter((loc) => loc !== undefined);
}

// ── Exports ───────────────────────────────────────────────

export default locations;
export { getLocationById, canDoAction, areConnected, getReachableLocations };
