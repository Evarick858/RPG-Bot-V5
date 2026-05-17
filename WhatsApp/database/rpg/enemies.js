const enemies = {
  "calm_lake_minnow": {
    "id": "calm_lake_minnow",
    "name": "🐟 Rippling Sprite",
    "location": [
      "calm_lake"
    ],
    "tier": 1,
    "stats": {
      "hp": 18,
      "mana": 20,
      "attack": 5,
      "defense": 3,
      "agility": 14
    },
    "drops": [
      {
        "item": "tiny_fish",
        "chance": 90,
        "min": 1,
        "max": 3
      }
    ],
    "xp": 3,
    "gold": {
      "min": 1,
      "max": 2
    },
    "skills": [
      {
        "id": "quick_dodge",
        "name": "Quick Dodge",
        "description": "Dodge attacks",
        "manaCost": 8,
        "cooldown": 9,
        "effects": [
          {
            "type": "evasion_buff",
            "value": 20,
            "duration": 4
          }
        ]
      }
    ],
    "passive": {
      "id": "swift_strikes",
      "name": "Swift Strikes",
      "emoji": "⚡",
      "effect": "agility_boost",
      "value": 3
    }
  },
  "calm_lake_duck": {
    "id": "calm_lake_duck",
    "name": "🦆 Marsh Watcher",
    "location": [
      "calm_lake"
    ],
    "tier": 1,
    "stats": {
      "hp": 22,
      "mana": 25,
      "attack": 7,
      "defense": 4,
      "agility": 12
    },
    "drops": [
      {
        "item": "duck_feather",
        "chance": 80,
        "min": 1,
        "max": 2
      }
    ],
    "xp": 5,
    "gold": {
      "min": 1,
      "max": 3
    },
    "skills": [
      {
        "id": "peck",
        "name": "Peck",
        "description": "Quick peck",
        "manaCost": 10,
        "cooldown": 9,
        "damageType": "physical",
        "baseDamage": 5,
        "effects": [
          {
            "type": "slow",
            "value": 2,
            "duration": 4
          }
        ]
      }
    ],
    "passive": {
      "id": "nimble",
      "name": "Nimble",
      "emoji": "💨",
      "effect": "dodge_boost",
      "value": 10
    }
  },
  "calm_lake_otter": {
    "id": "calm_lake_otter",
    "name": "🦦 Slickpaw",
    "location": [
      "calm_lake"
    ],
    "tier": 1,
    "stats": {
      "hp": 25,
      "mana": 30,
      "attack": 8,
      "defense": 5,
      "agility": 13
    },
    "drops": [
      {
        "item": "otter_fur",
        "chance": 70,
        "min": 1,
        "max": 1
      }
    ],
    "xp": 7,
    "gold": {
      "min": 2,
      "max": 4
    },
    "skills": [
      {
        "id": "bite",
        "name": "Bite",
        "description": "Sharp bite",
        "manaCost": 12,
        "cooldown": 9,
        "damageType": "physical",
        "baseDamage": 8,
        "effects": [
          {
            "type": "bleed",
            "value": 2,
            "duration": 4
          }
        ]
      }
    ],
    "passive": {
      "id": "nimble",
      "name": "Nimble",
      "emoji": "💨",
      "effect": "dodge_boost",
      "value": 12
    }
  },
  "willow_grove_sparrow": {
    "id": "willow_grove_sparrow",
    "name": "🐦 Thornwing",
    "location": [
      "willow_grove"
    ],
    "tier": 1,
    "stats": {
      "hp": 18,
      "mana": 25,
      "attack": 6,
      "defense": 3,
      "agility": 17
    },
    "drops": [
      {
        "item": "small_feather",
        "chance": 85,
        "min": 1,
        "max": 3
      }
    ],
    "xp": 4,
    "gold": {
      "min": 1,
      "max": 2
    },
    "skills": [
      {
        "id": "flutter",
        "name": "Flutter",
        "description": "Evasive move",
        "manaCost": 10,
        "cooldown": 9,
        "effects": [
          {
            "type": "evasion_buff",
            "value": 25,
            "duration": 4
          }
        ]
      }
    ],
    "passive": {
      "id": "swift_strikes",
      "name": "Swift Strikes",
      "emoji": "⚡",
      "effect": "agility_boost",
      "value": 5
    }
  },
  "willow_grove_mouse": {
    "id": "willow_grove_mouse",
    "name": "🐭 Bramblescurry",
    "location": [
      "willow_grove"
    ],
    "tier": 1,
    "stats": {
      "hp": 20,
      "mana": 20,
      "attack": 7,
      "defense": 3,
      "agility": 15
    },
    "drops": [
      {
        "item": "mouse_tail",
        "chance": 75,
        "min": 1,
        "max": 1
      }
    ],
    "xp": 4,
    "gold": {
      "min": 1,
      "max": 2
    },
    "skills": [
      {
        "id": "nibble",
        "name": "Nibble",
        "description": "Quick bite",
        "manaCost": 8,
        "cooldown": 9,
        "damageType": "physical",
        "baseDamage": 4,
        "effects": [
          {
            "type": "slow",
            "value": 2,
            "duration": 4
          }
        ]
      }
    ],
    "passive": {
      "id": "nimble",
      "name": "Nimble",
      "emoji": "💨",
      "effect": "dodge_boost",
      "value": 12
    }
  },
  "willow_grove_caterpillar": {
    "id": "willow_grove_caterpillar",
    "name": "🕷️ Silkweave Spiderling",
    "location": [
      "willow_grove"
    ],
    "tier": 1,
    "stats": {
      "hp": 18,
      "mana": 15,
      "attack": 5,
      "defense": 4,
      "agility": 10
    },
    "drops": [
      {
        "item": "silk_thread",
        "chance": 80,
        "min": 1,
        "max": 2
      }
    ],
    "xp": 3,
    "gold": {
      "min": 1,
      "max": 1
    },
    "skills": [
      {
        "id": "silk_spray",
        "name": "Silk Spray",
        "description": "Slows enemy",
        "manaCost": 10,
        "cooldown": 9,
        "effects": [
          {
            "type": "slow",
            "value": 3,
            "duration": 4
          }
        ]
      }
    ],
    "passive": {
      "id": "iron_skin",
      "name": "Iron Skin",
      "emoji": "🛡️",
      "effect": "defense_boost",
      "value": 3
    }
  },
  "wheat_field_mouse": {
    "id": "wheat_field_mouse",
    "name": "🐭 Grain Gnawer",
    "location": [
      "wheat_field"
    ],
    "tier": 1,
    "stats": {
      "hp": 20,
      "mana": 22,
      "attack": 7,
      "defense": 4,
      "agility": 14
    },
    "drops": [
      {
        "item": "wheat_grain",
        "chance": 85,
        "min": 2,
        "max": 4
      }
    ],
    "xp": 4,
    "gold": {
      "min": 1,
      "max": 2
    },
    "skills": [
      {
        "id": "quick_dodge",
        "name": "Quick Dodge",
        "description": "Dodge attacks",
        "manaCost": 10,
        "cooldown": 9,
        "effects": [
          {
            "type": "evasion_buff",
            "value": 20,
            "duration": 4
          }
        ]
      }
    ],
    "passive": {
      "id": "nimble",
      "name": "Nimble",
      "emoji": "💨",
      "effect": "dodge_boost",
      "value": 10
    }
  },
  "wheat_field_crow": {
    "id": "wheat_field_crow",
    "name": "🐦‍⬛ Duskfeather",
    "location": [
      "wheat_field"
    ],
    "tier": 1,
    "stats": {
      "hp": 22,
      "mana": 28,
      "attack": 8,
      "defense": 4,
      "agility": 13
    },
    "drops": [
      {
        "item": "black_feather",
        "chance": 75,
        "min": 1,
        "max": 2
      }
    ],
    "xp": 6,
    "gold": {
      "min": 1,
      "max": 3
    },
    "skills": [
      {
        "id": "peck",
        "name": "Peck",
        "description": "Sharp peck",
        "manaCost": 12,
        "cooldown": 9,
        "damageType": "physical",
        "baseDamage": 6,
        "effects": [
          {
            "type": "bleed",
            "value": 2,
            "duration": 4
          }
        ]
      }
    ],
    "passive": {
      "id": "swift_strikes",
      "name": "Swift Strikes",
      "emoji": "⚡",
      "effect": "agility_boost",
      "value": 4
    }
  },
  "wheat_field_grasshopper": {
    "id": "wheat_field_grasshopper",
    "name": "🦗 Springblade",
    "location": [
      "wheat_field"
    ],
    "tier": 1,
    "stats": {
      "hp": 18,
      "mana": 20,
      "attack": 6,
      "defense": 3,
      "agility": 18
    },
    "drops": [
      {
        "item": "grasshopper_leg",
        "chance": 70,
        "min": 1,
        "max": 2
      }
    ],
    "xp": 3,
    "gold": {
      "min": 1,
      "max": 2
    },
    "skills": [
      {
        "id": "leap",
        "name": "Leap",
        "description": "Jump away",
        "manaCost": 8,
        "cooldown": 9,
        "effects": [
          {
            "type": "evasion_buff",
            "value": 30,
            "duration": 4
          }
        ]
      }
    ],
    "passive": {
      "id": "nimble",
      "name": "Nimble",
      "emoji": "💨",
      "effect": "dodge_boost",
      "value": 15
    }
  },
  "apple_orchard_bee": {
    "id": "apple_orchard_bee",
    "name": "🐝 Blossomsting",
    "location": [
      "apple_orchard"
    ],
    "tier": 1,
    "stats": {
      "hp": 20,
      "mana": 25,
      "attack": 8,
      "defense": 3,
      "agility": 18
    },
    "drops": [
      {
        "item": "honey",
        "chance": 80,
        "min": 1,
        "max": 2
      }
    ],
    "xp": 5,
    "gold": {
      "min": 1,
      "max": 3
    },
    "skills": [
      {
        "id": "sting",
        "name": "Sting",
        "description": "Poisonous sting",
        "manaCost": 12,
        "cooldown": 9,
        "damageType": "physical",
        "baseDamage": 5,
        "effects": [
          {
            "type": "poison",
            "value": 3,
            "duration": 4
          }
        ]
      }
    ],
    "passive": {
      "id": "poison_touch",
      "name": "Poison Touch",
      "emoji": "☠️",
      "effect": "poison_on_hit",
      "value": 2,
      "chance": 25,
      "duration": 4
    }
  },
  "apple_orchard_worm": {
    "id": "apple_orchard_worm",
    "name": "🪱 Rootbored Grub",
    "location": [
      "apple_orchard"
    ],
    "tier": 1,
    "stats": {
      "hp": 18,
      "mana": 15,
      "attack": 6,
      "defense": 3,
      "agility": 8
    },
    "drops": [
      {
        "item": "worm_segment",
        "chance": 90,
        "min": 1,
        "max": 3
      }
    ],
    "xp": 2,
    "gold": {
      "min": 1,
      "max": 1
    },
    "skills": [
      {
        "id": "burrow",
        "name": "Burrow",
        "description": "Hides underground",
        "manaCost": 8,
        "cooldown": 9,
        "effects": [
          {
            "type": "evasion_buff",
            "value": 15,
            "duration": 4
          }
        ]
      }
    ],
    "passive": {
      "id": "regeneration",
      "name": "Regeneration",
      "emoji": "💚",
      "effect": "regen",
      "value": 2
    }
  },
  "apple_orchard_bird": {
    "id": "apple_orchard_bird",
    "name": "🐦 Pippin Watcher",
    "location": [
      "apple_orchard"
    ],
    "tier": 1,
    "stats": {
      "hp": 21,
      "mana": 26,
      "attack": 7,
      "defense": 3,
      "agility": 15
    },
    "drops": [
      {
        "item": "bird_feather",
        "chance": 75,
        "min": 1,
        "max": 2
      }
    ],
    "xp": 5,
    "gold": {
      "min": 1,
      "max": 3
    },
    "skills": [
      {
        "id": "peck",
        "name": "Peck",
        "description": "Quick peck",
        "manaCost": 10,
        "cooldown": 9,
        "damageType": "physical",
        "baseDamage": 5,
        "effects": [
          {
            "type": "slow",
            "value": 2,
            "duration": 4
          }
        ]
      }
    ],
    "passive": {
      "id": "swift_strikes",
      "name": "Swift Strikes",
      "emoji": "⚡",
      "effect": "agility_boost",
      "value": 4
    }
  },
  "country_road_bandit": {
    "id": "country_road_bandit",
    "name": "🗡️ Dustpath Cutthroat",
    "location": [
      "country_road"
    ],
    "tier": 1,
    "stats": {
      "hp": 30,
      "mana": 28,
      "attack": 6,
      "defense": 4,
      "agility": 7
    },
    "drops": [
      {
        "item": "stolen_coin",
        "chance": 70,
        "min": 2,
        "max": 5
      }
    ],
    "xp": 10,
    "gold": {
      "min": 5,
      "max": 10
    },
    "skills": [
      {
        "id": "dirty_trick",
        "name": "Dirty Trick",
        "description": "Blinds enemy",
        "manaCost": 12,
        "cooldown": 9,
        "effects": [
          {
            "type": "blind",
            "value": 40,
            "duration": 4
          }
        ]
      }
    ],
    "passive": {
      "id": "power_surge",
      "name": "Power Surge",
      "emoji": "💪",
      "effect": "attack_boost",
      "value": 4
    }
  },
  "country_road_stray_dog": {
    "id": "country_road_stray_dog",
    "name": "🐕 Feral Wanderer",
    "location": [
      "country_road"
    ],
    "tier": 1,
    "stats": {
      "hp": 24,
      "mana": 26,
      "attack": 5,
      "defense": 3,
      "agility": 11
    },
    "drops": [
      {
        "item": "dog_fur",
        "chance": 65,
        "min": 1,
        "max": 1
      }
    ],
    "xp": 7,
    "gold": {
      "min": 2,
      "max": 4
    },
    "skills": [
      {
        "id": "bite",
        "name": "Bite",
        "description": "Vicious bite",
        "manaCost": 12,
        "cooldown": 9,
        "damageType": "physical",
        "baseDamage": 8,
        "effects": [
          {
            "type": "bleed",
            "value": 3,
            "duration": 4
          }
        ]
      }
    ],
    "passive": {
      "id": "enrage",
      "name": "Enrage",
      "emoji": "😡",
      "effect": "enrage",
      "value": 8,
      "threshold": 30
    }
  },
  "country_road_snake": {
    "id": "country_road_snake",
    "name": "🐍 Dustcoil Viper",
    "location": [
      "country_road"
    ],
    "tier": 1,
    "stats": {
      "hp": 18,
      "mana": 30,
      "attack": 4,
      "defense": 2,
      "agility": 12
    },
    "drops": [
      {
        "item": "snake_skin",
        "chance": 70,
        "min": 1,
        "max": 1
      }
    ],
    "xp": 6,
    "gold": {
      "min": 2,
      "max": 3
    },
    "skills": [
      {
        "id": "poison_bite",
        "name": "Poison Bite",
        "description": "Venomous bite",
        "manaCost": 14,
        "cooldown": 9,
        "damageType": "physical",
        "baseDamage": 6,
        "effects": [
          {
            "type": "poison",
            "value": 4,
            "duration": 4
          }
        ]
      }
    ],
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
  "pebble_beach_crab": {
    "id": "pebble_beach_crab",
    "name": "🦀 Tidestone Clutcher",
    "location": [
      "pebble_beach"
    ],
    "tier": 1,
    "stats": {
      "hp": 24,
      "mana": 25,
      "attack": 8,
      "defense": 7,
      "agility": 7
    },
    "drops": [
      {
        "item": "crab_shell",
        "chance": 75,
        "min": 1,
        "max": 1
      }
    ],
    "xp": 6,
    "gold": {
      "min": 2,
      "max": 3
    },
    "skills": [
      {
        "id": "pinch",
        "name": "Pinch",
        "description": "Claw attack",
        "manaCost": 10,
        "cooldown": 9,
        "damageType": "physical",
        "baseDamage": 7,
        "effects": [
          {
            "type": "slow",
            "value": 3,
            "duration": 4
          }
        ]
      }
    ],
    "passive": {
      "id": "iron_skin",
      "name": "Iron Skin",
      "emoji": "🛡️",
      "effect": "defense_boost",
      "value": 5
    }
  },
  "pebble_beach_minnow": {
    "id": "pebble_beach_minnow",
    "name": "🐟 Shallowdart",
    "location": [
      "pebble_beach"
    ],
    "tier": 1,
    "stats": {
      "hp": 18,
      "mana": 20,
      "attack": 6,
      "defense": 3,
      "agility": 16
    },
    "drops": [
      {
        "item": "small_fish",
        "chance": 85,
        "min": 1,
        "max": 3
      }
    ],
    "xp": 3,
    "gold": {
      "min": 1,
      "max": 2
    },
    "skills": [
      {
        "id": "dart",
        "name": "Dart",
        "description": "Quick escape",
        "manaCost": 8,
        "cooldown": 9,
        "effects": [
          {
            "type": "evasion_buff",
            "value": 25,
            "duration": 4
          }
        ]
      }
    ],
    "passive": {
      "id": "nimble",
      "name": "Nimble",
      "emoji": "💨",
      "effect": "dodge_boost",
      "value": 12
    }
  },
  "pebble_beach_gull": {
    "id": "pebble_beach_gull",
    "name": "🕊️ Saltwind Raider",
    "location": [
      "pebble_beach"
    ],
    "tier": 1,
    "stats": {
      "hp": 16,
      "mana": 28,
      "attack": 4,
      "defense": 2,
      "agility": 13
    },
    "drops": [
      {
        "item": "gull_feather",
        "chance": 75,
        "min": 1,
        "max": 2
      }
    ],
    "xp": 5,
    "gold": {
      "min": 1,
      "max": 3
    },
    "skills": [
      {
        "id": "dive_peck",
        "name": "Dive Peck",
        "description": "Diving attack",
        "manaCost": 12,
        "cooldown": 9,
        "damageType": "physical",
        "baseDamage": 7,
        "effects": [
          {
            "type": "stun",
            "value": 1,
            "duration": 4
          }
        ]
      }
    ],
    "passive": {
      "id": "swift_strikes",
      "name": "Swift Strikes",
      "emoji": "⚡",
      "effect": "agility_boost",
      "value": 4
    }
  },
  "stone_bridge_toad": {
    "id": "stone_bridge_toad",
    "name": "🐸 Mosschin Lurker",
    "location": [
      "stone_bridge"
    ],
    "tier": 1,
    "stats": {
      "hp": 20,
      "mana": 28,
      "attack": 7,
      "defense": 4,
      "agility": 12
    },
    "drops": [
      {
        "item": "toad_skin",
        "chance": 75,
        "min": 1,
        "max": 1
      }
    ],
    "xp": 5,
    "gold": {
      "min": 1,
      "max": 2
    },
    "skills": [
      {
        "id": "tongue_lash",
        "name": "Tongue Lash",
        "description": "Sticky tongue",
        "manaCost": 10,
        "cooldown": 9,
        "damageType": "physical",
        "baseDamage": 5,
        "effects": [
          {
            "type": "slow",
            "value": 4,
            "duration": 4
          }
        ]
      }
    ],
    "passive": {
      "id": "nimble",
      "name": "Nimble",
      "emoji": "💨",
      "effect": "dodge_boost",
      "value": 10
    }
  },
  "stone_bridge_spider": {
    "id": "stone_bridge_spider",
    "name": "🕷️ Archweaver",
    "location": [
      "stone_bridge"
    ],
    "tier": 1,
    "stats": {
      "hp": 19,
      "mana": 26,
      "attack": 7,
      "defense": 4,
      "agility": 13
    },
    "drops": [
      {
        "item": "spider_silk",
        "chance": 80,
        "min": 1,
        "max": 2
      }
    ],
    "xp": 5,
    "gold": {
      "min": 1,
      "max": 3
    },
    "skills": [
      {
        "id": "web_shot",
        "name": "Web Shot",
        "description": "Sticky web",
        "manaCost": 12,
        "cooldown": 9,
        "effects": [
          {
            "type": "slow",
            "value": 5,
            "duration": 4
          }
        ]
      }
    ],
    "passive": {
      "id": "poison_touch",
      "name": "Poison Touch",
      "emoji": "☠️",
      "effect": "poison_on_hit",
      "value": 2,
      "chance": 25,
      "duration": 4
    }
  },
  "stone_bridge_rat": {
    "id": "stone_bridge_rat",
    "name": "🐀 Stonecrevice Skulker",
    "location": [
      "stone_bridge"
    ],
    "tier": 1,
    "stats": {
      "hp": 22,
      "mana": 24,
      "attack": 8,
      "defense": 4,
      "agility": 13
    },
    "drops": [
      {
        "item": "rat_tail",
        "chance": 70,
        "min": 1,
        "max": 2
      }
    ],
    "xp": 6,
    "gold": {
      "min": 1,
      "max": 3
    },
    "skills": [
      {
        "id": "bite",
        "name": "Bite",
        "description": "Disease bite",
        "manaCost": 10,
        "cooldown": 9,
        "damageType": "physical",
        "baseDamage": 6,
        "effects": [
          {
            "type": "poison",
            "value": 2,
            "duration": 4
          }
        ]
      }
    ],
    "passive": {
      "id": "swift_strikes",
      "name": "Swift Strikes",
      "emoji": "⚡",
      "effect": "agility_boost",
      "value": 4
    }
  },
  "clover_field_rabbit": {
    "id": "clover_field_rabbit",
    "name": "🐰 Meadowfoot Dart",
    "location": [
      "clover_field"
    ],
    "tier": 1,
    "stats": {
      "hp": 22,
      "mana": 22,
      "attack": 7,
      "defense": 4,
      "agility": 15
    },
    "drops": [
      {
        "item": "rabbit_fur",
        "chance": 80,
        "min": 1,
        "max": 2
      }
    ],
    "xp": 5,
    "gold": {
      "min": 1,
      "max": 3
    },
    "skills": [
      {
        "id": "hop_away",
        "name": "Hop Away",
        "description": "Quick escape",
        "manaCost": 10,
        "cooldown": 9,
        "effects": [
          {
            "type": "evasion_buff",
            "value": 30,
            "duration": 4
          }
        ]
      }
    ],
    "passive": {
      "id": "nimble",
      "name": "Nimble",
      "emoji": "💨",
      "effect": "dodge_boost",
      "value": 12
    }
  },
  "clover_field_beetle": {
    "id": "clover_field_beetle",
    "name": "🪲 Fungusbacked Beetle",
    "location": [
      "clover_field"
    ],
    "tier": 1,
    "stats": {
      "hp": 20,
      "mana": 20,
      "attack": 5,
      "defense": 6,
      "agility": 8
    },
    "drops": [
      {
        "item": "beetle_shell",
        "chance": 75,
        "min": 1,
        "max": 1
      }
    ],
    "xp": 4,
    "gold": {
      "min": 1,
      "max": 2
    },
    "skills": [
      {
        "id": "shell_defense",
        "name": "Shell Defense",
        "description": "Hardens shell",
        "manaCost": 10,
        "cooldown": 9,
        "effects": [
          {
            "type": "buff_def",
            "value": 6,
            "duration": 4
          }
        ]
      }
    ],
    "passive": {
      "id": "iron_skin",
      "name": "Iron Skin",
      "emoji": "🛡️",
      "effect": "defense_boost",
      "value": 4
    }
  },
  "clover_field_butterfly": {
    "id": "clover_field_butterfly",
    "name": "🦋 Driftveil Moth",
    "location": [
      "clover_field"
    ],
    "tier": 1,
    "stats": {
      "hp": 17,
      "mana": 25,
      "attack": 5,
      "defense": 2,
      "agility": 20
    },
    "drops": [
      {
        "item": "butterfly_wing",
        "chance": 70,
        "min": 1,
        "max": 1
      }
    ],
    "xp": 3,
    "gold": {
      "min": 1,
      "max": 2
    },
    "skills": [
      {
        "id": "flutter",
        "name": "Flutter",
        "description": "Graceful dodge",
        "manaCost": 8,
        "cooldown": 9,
        "effects": [
          {
            "type": "evasion_buff",
            "value": 35,
            "duration": 4
          }
        ]
      }
    ],
    "passive": {
      "id": "nimble",
      "name": "Nimble",
      "emoji": "💨",
      "effect": "dodge_boost",
      "value": 15
    }
  },
  "rushing_river_salmon": {
    "id": "rushing_river_salmon",
    "name": "🐟 Torrentfin",
    "location": [
      "rushing_river"
    ],
    "tier": 1,
    "stats": {
      "hp": 56,
      "mana": 64,
      "attack": 12,
      "defense": 8,
      "agility": 28
    },
    "drops": [
      {
        "item": "salmon_meat",
        "chance": 80,
        "min": 1,
        "max": 2
      }
    ],
    "xp": 10,
    "gold": {
      "min": 3,
      "max": 5
    },
    "skills": [
      {
        "id": "tail_slap",
        "name": "Tail Slap",
        "description": "Powerful tail",
        "manaCost": 14,
        "cooldown": 9,
        "damageType": "physical",
        "baseDamage": 10,
        "effects": [
          {
            "type": "stun",
            "value": 1,
            "duration": 4
          }
        ]
      }
    ],
    "passive": {
      "id": "swift_strikes",
      "name": "Swift Strikes",
      "emoji": "⚡",
      "effect": "agility_boost",
      "value": 5
    }
  },
  "rushing_river_otter": {
    "id": "rushing_river_otter",
    "name": "🦦 Rushpaw",
    "location": [
      "rushing_river"
    ],
    "tier": 1,
    "stats": {
      "hp": 64,
      "mana": 70,
      "attack": 16,
      "defense": 10,
      "agility": 30
    },
    "drops": [
      {
        "item": "otter_pelt",
        "chance": 70,
        "min": 1,
        "max": 1
      }
    ],
    "xp": 12,
    "gold": {
      "min": 4,
      "max": 6
    },
    "skills": [
      {
        "id": "bite",
        "name": "Bite",
        "description": "Sharp bite",
        "manaCost": 16,
        "cooldown": 9,
        "damageType": "physical",
        "baseDamage": 12,
        "effects": [
          {
            "type": "bleed",
            "value": 4,
            "duration": 4
          }
        ]
      }
    ],
    "passive": {
      "id": "nimble",
      "name": "Nimble",
      "emoji": "💨",
      "effect": "dodge_boost",
      "value": 14
    }
  },
  "rushing_river_heron": {
    "id": "rushing_river_heron",
    "name": "🦩 Spearwing",
    "location": [
      "rushing_river"
    ],
    "tier": 1,
    "stats": {
      "hp": 52,
      "mana": 68,
      "attack": 14,
      "defense": 6,
      "agility": 26
    },
    "drops": [
      {
        "item": "heron_feather",
        "chance": 75,
        "min": 1,
        "max": 2
      }
    ],
    "xp": 11,
    "gold": {
      "min": 3,
      "max": 5
    },
    "skills": [
      {
        "id": "spear_beak",
        "name": "Spear Beak",
        "description": "Piercing strike",
        "manaCost": 15,
        "cooldown": 9,
        "damageType": "physical",
        "baseDamage": 11,
        "effects": [
          {
            "type": "bleed",
            "value": 3,
            "duration": 4
          }
        ]
      }
    ],
    "passive": {
      "id": "critical_strike",
      "name": "Critical Strike",
      "emoji": "💥",
      "effect": "crit_chance",
      "value": 15
    }
  },
  "pine_forest_squirrel": {
    "id": "pine_forest_squirrel",
    "name": "🐿️ Pinecone Raider",
    "location": [
      "pine_forest"
    ],
    "tier": 1,
    "stats": {
      "hp": 44,
      "mana": 64,
      "attack": 10,
      "defense": 6,
      "agility": 32
    },
    "drops": [
      {
        "item": "pine_nut",
        "chance": 85,
        "min": 2,
        "max": 4
      }
    ],
    "xp": 8,
    "gold": {
      "min": 2,
      "max": 4
    },
    "skills": [
      {
        "id": "quick_dodge",
        "name": "Quick Dodge",
        "description": "Evasive move",
        "manaCost": 12,
        "cooldown": 9,
        "effects": [
          {
            "type": "evasion_buff",
            "value": 30,
            "duration": 4
          }
        ]
      }
    ],
    "passive": {
      "id": "nimble",
      "name": "Nimble",
      "emoji": "💨",
      "effect": "dodge_boost",
      "value": 14
    }
  },
  "pine_forest_owl": {
    "id": "pine_forest_owl",
    "name": "🦉 Mistgaze Sentinel",
    "location": [
      "pine_forest"
    ],
    "tier": 1,
    "stats": {
      "hp": 60,
      "mana": 72,
      "attack": 18,
      "defense": 8,
      "agility": 28
    },
    "drops": [
      {
        "item": "owl_feather",
        "chance": 70,
        "min": 1,
        "max": 2
      }
    ],
    "xp": 13,
    "gold": {
      "min": 4,
      "max": 7
    },
    "skills": [
      {
        "id": "talon_strike",
        "name": "Talon Strike",
        "description": "Sharp claws",
        "manaCost": 16,
        "cooldown": 9,
        "damageType": "physical",
        "baseDamage": 14,
        "effects": [
          {
            "type": "bleed",
            "value": 5,
            "duration": 4
          }
        ]
      }
    ],
    "passive": {
      "id": "critical_strike",
      "name": "Critical Strike",
      "emoji": "💥",
      "effect": "crit_chance",
      "value": 18
    }
  },
  "pine_forest_porcupine": {
    "id": "pine_forest_porcupine",
    "name": "🦔 Quillthorn",
    "location": [
      "pine_forest"
    ],
    "tier": 1,
    "stats": {
      "hp": 56,
      "mana": 60,
      "attack": 12,
      "defense": 16,
      "agility": 16
    },
    "drops": [
      {
        "item": "porcupine_quill",
        "chance": 80,
        "min": 2,
        "max": 4
      }
    ],
    "xp": 11,
    "gold": {
      "min": 3,
      "max": 5
    },
    "skills": [
      {
        "id": "quill_shot",
        "name": "Quill Shot",
        "description": "Shoots quills",
        "manaCost": 14,
        "cooldown": 9,
        "damageType": "physical",
        "baseDamage": 10,
        "effects": [
          {
            "type": "bleed",
            "value": 4,
            "duration": 4
          }
        ]
      }
    ],
    "passive": {
      "id": "iron_skin",
      "name": "Iron Skin",
      "emoji": "🛡️",
      "effect": "defense_boost",
      "value": 6
    }
  },
  "oak_woodland_boar": {
    "id": "oak_woodland_boar",
    "name": "🐗 Thornhide Charger",
    "location": [
      "oak_woodland"
    ],
    "tier": 1,
    "stats": {
      "hp": 80,
      "mana": 64,
      "attack": 20,
      "defense": 14,
      "agility": 18
    },
    "drops": [
      {
        "item": "boar_hide",
        "chance": 75,
        "min": 1,
        "max": 2
      }
    ],
    "xp": 15,
    "gold": {
      "min": 5,
      "max": 8
    },
    "skills": [
      {
        "id": "charge",
        "name": "Charge",
        "description": "Rushing attack",
        "manaCost": 18,
        "cooldown": 9,
        "damageType": "physical",
        "baseDamage": 16,
        "effects": [
          {
            "type": "stun",
            "value": 1,
            "duration": 4
          }
        ]
      }
    ],
    "passive": {
      "id": "enrage",
      "name": "Enrage",
      "emoji": "😡",
      "effect": "enrage",
      "value": 12,
      "threshold": 30
    }
  },
  "oak_woodland_badger": {
    "id": "oak_woodland_badger",
    "name": "🦡 Ironpelt Digger",
    "location": [
      "oak_woodland"
    ],
    "tier": 1,
    "stats": {
      "hp": 70,
      "mana": 68,
      "attack": 18,
      "defense": 16,
      "agility": 20
    },
    "drops": [
      {
        "item": "badger_fur",
        "chance": 70,
        "min": 1,
        "max": 1
      }
    ],
    "xp": 14,
    "gold": {
      "min": 4,
      "max": 7
    },
    "skills": [
      {
        "id": "claw_swipe",
        "name": "Claw Swipe",
        "description": "Vicious claws",
        "manaCost": 16,
        "cooldown": 9,
        "damageType": "physical",
        "baseDamage": 14,
        "effects": [
          {
            "type": "bleed",
            "value": 5,
            "duration": 4
          }
        ]
      }
    ],
    "passive": {
      "id": "iron_skin",
      "name": "Iron Skin",
      "emoji": "🛡️",
      "effect": "defense_boost",
      "value": 6
    }
  },
  "oak_woodland_hawk": {
    "id": "oak_woodland_hawk",
    "name": "🦅 Stormtalon Hunter",
    "location": [
      "oak_woodland"
    ],
    "tier": 1,
    "stats": {
      "hp": 56,
      "mana": 72,
      "attack": 22,
      "defense": 8,
      "agility": 34
    },
    "drops": [
      {
        "item": "hawk_feather",
        "chance": 70,
        "min": 1,
        "max": 2
      }
    ],
    "xp": 13,
    "gold": {
      "min": 4,
      "max": 6
    },
    "skills": [
      {
        "id": "dive_attack",
        "name": "Dive Attack",
        "description": "Aerial strike",
        "manaCost": 18,
        "cooldown": 9,
        "damageType": "physical",
        "baseDamage": 16,
        "effects": [
          {
            "type": "stun",
            "value": 1,
            "duration": 4
          }
        ]
      }
    ],
    "passive": {
      "id": "critical_strike",
      "name": "Critical Strike",
      "emoji": "💥",
      "effect": "crit_chance",
      "value": 20
    }
  },
  "hunters_trail_deer": {
    "id": "hunters_trail_deer",
    "name": "🦌 Antler Stalker",
    "location": [
      "hunters_trail"
    ],
    "tier": 1,
    "stats": {
      "hp": 76,
      "mana": 68,
      "attack": 16,
      "defense": 12,
      "agility": 30
    },
    "drops": [
      {
        "item": "deer_meat",
        "chance": 80,
        "min": 1,
        "max": 2
      }
    ],
    "xp": 14,
    "gold": {
      "min": 4,
      "max": 7
    },
    "skills": [
      {
        "id": "antler_bash",
        "name": "Antler Bash",
        "description": "Headbutt attack",
        "manaCost": 16,
        "cooldown": 9,
        "damageType": "physical",
        "baseDamage": 13,
        "effects": [
          {
            "type": "stun",
            "value": 1,
            "duration": 4
          }
        ]
      }
    ],
    "passive": {
      "id": "nimble",
      "name": "Nimble",
      "emoji": "💨",
      "effect": "dodge_boost",
      "value": 14
    }
  },
  "hunters_trail_wolf": {
    "id": "hunters_trail_wolf",
    "name": "🐺 Packfang",
    "location": [
      "hunters_trail"
    ],
    "tier": 1,
    "stats": {
      "hp": 72,
      "mana": 72,
      "attack": 22,
      "defense": 12,
      "agility": 28
    },
    "drops": [
      {
        "item": "wolf_pelt",
        "chance": 70,
        "min": 1,
        "max": 1
      }
    ],
    "xp": 16,
    "gold": {
      "min": 5,
      "max": 8
    },
    "skills": [
      {
        "id": "pack_bite",
        "name": "Pack Bite",
        "description": "Coordinated bite",
        "manaCost": 18,
        "cooldown": 9,
        "damageType": "physical",
        "baseDamage": 16,
        "effects": [
          {
            "type": "bleed",
            "value": 6,
            "duration": 4
          }
        ]
      }
    ],
    "passive": {
      "id": "enrage",
      "name": "Enrage",
      "emoji": "😡",
      "effect": "enrage",
      "value": 12,
      "threshold": 30
    }
  },
  "hunters_trail_lynx": {
    "id": "hunters_trail_lynx",
    "name": "🐈 Shadowstep Lynx",
    "location": [
      "hunters_trail"
    ],
    "tier": 1,
    "stats": {
      "hp": 64,
      "mana": 76,
      "attack": 24,
      "defense": 10,
      "agility": 36
    },
    "drops": [
      {
        "item": "lynx_fur",
        "chance": 65,
        "min": 1,
        "max": 1
      }
    ],
    "xp": 17,
    "gold": {
      "min": 5,
      "max": 9
    },
    "skills": [
      {
        "id": "pounce",
        "name": "Pounce",
        "description": "Ambush attack",
        "manaCost": 20,
        "cooldown": 9,
        "damageType": "physical",
        "baseDamage": 18,
        "effects": [
          {
            "type": "bleed",
            "value": 6,
            "duration": 4
          }
        ]
      }
    ],
    "passive": {
      "id": "critical_strike",
      "name": "Critical Strike",
      "emoji": "💥",
      "effect": "crit_chance",
      "value": 22
    }
  },
  "bramble_thicket_fox": {
    "id": "bramble_thicket_fox",
    "name": "🦊 Thornpelt Trickster",
    "location": [
      "bramble_thicket"
    ],
    "tier": 1,
    "stats": {
      "hp": 60,
      "mana": 72,
      "attack": 18,
      "defense": 10,
      "agility": 32
    },
    "drops": [
      {
        "item": "fox_fur",
        "chance": 75,
        "min": 1,
        "max": 1
      }
    ],
    "xp": 13,
    "gold": {
      "min": 4,
      "max": 6
    },
    "skills": [
      {
        "id": "cunning_bite",
        "name": "Cunning Bite",
        "description": "Clever attack",
        "manaCost": 16,
        "cooldown": 9,
        "damageType": "physical",
        "baseDamage": 14,
        "effects": [
          {
            "type": "bleed",
            "value": 5,
            "duration": 4
          }
        ]
      }
    ],
    "passive": {
      "id": "nimble",
      "name": "Nimble",
      "emoji": "💨",
      "effect": "dodge_boost",
      "value": 15
    }
  },
  "bramble_thicket_rabbit": {
    "id": "bramble_thicket_rabbit",
    "name": "🐰 Briar Kicker",
    "location": [
      "bramble_thicket"
    ],
    "tier": 1,
    "stats": {
      "hp": 48,
      "mana": 64,
      "attack": 12,
      "defense": 8,
      "agility": 34
    },
    "drops": [
      {
        "item": "rabbit_hide",
        "chance": 80,
        "min": 1,
        "max": 2
      }
    ],
    "xp": 10,
    "gold": {
      "min": 3,
      "max": 5
    },
    "skills": [
      {
        "id": "kick",
        "name": "Kick",
        "description": "Powerful kick",
        "manaCost": 14,
        "cooldown": 9,
        "damageType": "physical",
        "baseDamage": 10,
        "effects": [
          {
            "type": "slow",
            "value": 4,
            "duration": 4
          }
        ]
      }
    ],
    "passive": {
      "id": "nimble",
      "name": "Nimble",
      "emoji": "💨",
      "effect": "dodge_boost",
      "value": 16
    }
  },
  "bramble_thicket_snake": {
    "id": "bramble_thicket_snake",
    "name": "🐍 Coilsap Adder",
    "location": [
      "bramble_thicket"
    ],
    "tier": 1,
    "stats": {
      "hp": 52,
      "mana": 68,
      "attack": 16,
      "defense": 8,
      "agility": 28
    },
    "drops": [
      {
        "item": "snake_fang",
        "chance": 70,
        "min": 1,
        "max": 1
      }
    ],
    "xp": 12,
    "gold": {
      "min": 3,
      "max": 6
    },
    "skills": [
      {
        "id": "venom_strike",
        "name": "Venom Strike",
        "description": "Poisonous bite",
        "manaCost": 16,
        "cooldown": 9,
        "damageType": "physical",
        "baseDamage": 12,
        "effects": [
          {
            "type": "poison",
            "value": 6,
            "duration": 4
          }
        ]
      }
    ],
    "passive": {
      "id": "poison_touch",
      "name": "Poison Touch",
      "emoji": "☠️",
      "effect": "poison_on_hit",
      "value": 4,
      "chance": 35,
      "duration": 4
    }
  },
  "mossy_cave_bat": {
    "id": "mossy_cave_bat",
    "name": "🦇 Echoveil Bat",
    "location": [
      "mossy_cave"
    ],
    "tier": 1,
    "stats": {
      "hp": 48,
      "mana": 68,
      "attack": 16,
      "defense": 6,
      "agility": 36
    },
    "drops": [
      {
        "item": "bat_wing",
        "chance": 75,
        "min": 1,
        "max": 2
      }
    ],
    "xp": 11,
    "gold": {
      "min": 3,
      "max": 5
    },
    "skills": [
      {
        "id": "screech",
        "name": "Screech",
        "description": "Sonic attack",
        "manaCost": 16,
        "cooldown": 9,
        "damageType": "magical",
        "baseDamage": 12,
        "effects": [
          {
            "type": "blind",
            "value": 50,
            "duration": 4
          }
        ]
      }
    ],
    "passive": {
      "id": "vampiric",
      "name": "Vampiric",
      "emoji": "🧛",
      "effect": "lifesteal",
      "value": 15
    }
  },
  "mossy_cave_spider": {
    "id": "mossy_cave_spider",
    "name": "🕷️ Vaultfang",
    "location": [
      "mossy_cave"
    ],
    "tier": 1,
    "stats": {
      "hp": 44,
      "mana": 64,
      "attack": 14,
      "defense": 8,
      "agility": 30
    },
    "drops": [
      {
        "item": "spider_venom",
        "chance": 70,
        "min": 1,
        "max": 1
      }
    ],
    "xp": 12,
    "gold": {
      "min": 3,
      "max": 6
    },
    "skills": [
      {
        "id": "poison_bite",
        "name": "Poison Bite",
        "description": "Venomous bite",
        "manaCost": 16,
        "cooldown": 9,
        "damageType": "physical",
        "baseDamage": 11,
        "effects": [
          {
            "type": "poison",
            "value": 6,
            "duration": 4
          }
        ]
      }
    ],
    "passive": {
      "id": "poison_touch",
      "name": "Poison Touch",
      "emoji": "☠️",
      "effect": "poison_on_hit",
      "value": 4,
      "chance": 35,
      "duration": 4
    }
  },
  "mossy_cave_rat": {
    "id": "mossy_cave_rat",
    "name": "🐀 Gloomcrawler",
    "location": [
      "mossy_cave"
    ],
    "tier": 1,
    "stats": {
      "hp": 56,
      "mana": 60,
      "attack": 14,
      "defense": 10,
      "agility": 26
    },
    "drops": [
      {
        "item": "rat_fur",
        "chance": 75,
        "min": 1,
        "max": 2
      }
    ],
    "xp": 10,
    "gold": {
      "min": 3,
      "max": 5
    },
    "skills": [
      {
        "id": "disease_bite",
        "name": "Disease Bite",
        "description": "Infectious bite",
        "manaCost": 14,
        "cooldown": 9,
        "damageType": "physical",
        "baseDamage": 10,
        "effects": [
          {
            "type": "poison",
            "value": 5,
            "duration": 4
          }
        ]
      }
    ],
    "passive": {
      "id": "swift_strikes",
      "name": "Swift Strikes",
      "emoji": "⚡",
      "effect": "agility_boost",
      "value": 5
    }
  },
  "muddy_swamp_frog": {
    "id": "muddy_swamp_frog",
    "name": "🐸 Bogcroaker",
    "location": [
      "muddy_swamp"
    ],
    "tier": 1,
    "stats": {
      "hp": 52,
      "mana": 68,
      "attack": 12,
      "defense": 8,
      "agility": 28
    },
    "drops": [
      {
        "item": "frog_leg",
        "chance": 80,
        "min": 1,
        "max": 2
      }
    ],
    "xp": 10,
    "gold": {
      "min": 3,
      "max": 5
    },
    "skills": [
      {
        "id": "tongue_grab",
        "name": "Tongue Grab",
        "description": "Sticky tongue",
        "manaCost": 14,
        "cooldown": 9,
        "effects": [
          {
            "type": "slow",
            "value": 6,
            "duration": 4
          }
        ]
      }
    ],
    "passive": {
      "id": "nimble",
      "name": "Nimble",
      "emoji": "💨",
      "effect": "dodge_boost",
      "value": 13
    }
  },
  "muddy_swamp_snake": {
    "id": "muddy_swamp_snake",
    "name": "🐍 Mirewreath Serpent",
    "location": [
      "muddy_swamp"
    ],
    "tier": 1,
    "stats": {
      "hp": 60,
      "mana": 72,
      "attack": 18,
      "defense": 10,
      "agility": 26
    },
    "drops": [
      {
        "item": "swamp_venom",
        "chance": 70,
        "min": 1,
        "max": 1
      }
    ],
    "xp": 13,
    "gold": {
      "min": 4,
      "max": 6
    },
    "skills": [
      {
        "id": "constrict",
        "name": "Constrict",
        "description": "Squeezes enemy",
        "manaCost": 16,
        "cooldown": 9,
        "damageType": "physical",
        "baseDamage": 13,
        "effects": [
          {
            "type": "slow",
            "value": 7,
            "duration": 4
          }
        ]
      }
    ],
    "passive": {
      "id": "poison_touch",
      "name": "Poison Touch",
      "emoji": "☠️",
      "effect": "poison_on_hit",
      "value": 5,
      "chance": 35,
      "duration": 4
    }
  },
  "muddy_swamp_mosquito": {
    "id": "muddy_swamp_mosquito",
    "name": "🦟 Blightpiercer",
    "location": [
      "muddy_swamp"
    ],
    "tier": 1,
    "stats": {
      "hp": 36,
      "mana": 64,
      "attack": 14,
      "defense": 4,
      "agility": 38
    },
    "drops": [
      {
        "item": "mosquito_proboscis",
        "chance": 65,
        "min": 1,
        "max": 1
      }
    ],
    "xp": 11,
    "gold": {
      "min": 3,
      "max": 5
    },
    "skills": [
      {
        "id": "blood_drain",
        "name": "Blood Drain",
        "description": "Drains health",
        "manaCost": 16,
        "cooldown": 9,
        "effects": [
          {
            "type": "drain",
            "value": 12,
            "duration": 1
          }
        ]
      }
    ],
    "passive": {
      "id": "vampiric",
      "name": "Vampiric",
      "emoji": "🧛",
      "effect": "lifesteal",
      "value": 20
    }
  },
  "abandoned_farm_rat": {
    "id": "abandoned_farm_rat",
    "name": "🐀 Rubbleborn Rat",
    "location": [
      "abandoned_farm"
    ],
    "tier": 1,
    "stats": {
      "hp": 52,
      "mana": 64,
      "attack": 14,
      "defense": 8,
      "agility": 28
    },
    "drops": [
      {
        "item": "rat_tail",
        "chance": 75,
        "min": 1,
        "max": 2
      }
    ],
    "xp": 10,
    "gold": {
      "min": 3,
      "max": 5
    },
    "skills": [
      {
        "id": "swarm_bite",
        "name": "Swarm Bite",
        "description": "Group attack",
        "manaCost": 14,
        "cooldown": 9,
        "damageType": "physical",
        "baseDamage": 11,
        "effects": [
          {
            "type": "bleed",
            "value": 4,
            "duration": 4
          }
        ]
      }
    ],
    "passive": {
      "id": "swift_strikes",
      "name": "Swift Strikes",
      "emoji": "⚡",
      "effect": "agility_boost",
      "value": 5
    }
  },
  "abandoned_farm_wild_cat": {
    "id": "abandoned_farm_wild_cat",
    "name": "🐈 Ruinstreak Felon",
    "location": [
      "abandoned_farm"
    ],
    "tier": 1,
    "stats": {
      "hp": 64,
      "mana": 72,
      "attack": 20,
      "defense": 10,
      "agility": 34
    },
    "drops": [
      {
        "item": "cat_fur",
        "chance": 70,
        "min": 1,
        "max": 1
      }
    ],
    "xp": 14,
    "gold": {
      "min": 4,
      "max": 7
    },
    "skills": [
      {
        "id": "claw_slash",
        "name": "Claw Slash",
        "description": "Sharp claws",
        "manaCost": 16,
        "cooldown": 9,
        "damageType": "physical",
        "baseDamage": 15,
        "effects": [
          {
            "type": "bleed",
            "value": 5,
            "duration": 4
          }
        ]
      }
    ],
    "passive": {
      "id": "critical_strike",
      "name": "Critical Strike",
      "emoji": "💥",
      "effect": "crit_chance",
      "value": 20
    }
  },
  "abandoned_farm_crow": {
    "id": "abandoned_farm_crow",
    "name": "🐦‍⬛ Ashen Harbinger",
    "location": [
      "abandoned_farm"
    ],
    "tier": 1,
    "stats": {
      "hp": 44,
      "mana": 68,
      "attack": 12,
      "defense": 6,
      "agility": 30
    },
    "drops": [
      {
        "item": "crow_feather",
        "chance": 75,
        "min": 1,
        "max": 2
      }
    ],
    "xp": 9,
    "gold": {
      "min": 2,
      "max": 5
    },
    "skills": [
      {
        "id": "dive_peck",
        "name": "Dive Peck",
        "description": "Aerial attack",
        "manaCost": 14,
        "cooldown": 9,
        "damageType": "physical",
        "baseDamage": 10,
        "effects": [
          {
            "type": "blind",
            "value": 40,
            "duration": 4
          }
        ]
      }
    ],
    "passive": {
      "id": "nimble",
      "name": "Nimble",
      "emoji": "💨",
      "effect": "dodge_boost",
      "value": 14
    }
  },
  "silver_lake_water_nymph": {
    "id": "silver_lake_water_nymph",
    "name": "🧜 Lacewing Nymph",
    "location": [
      "silver_lake"
    ],
    "tier": 3,
    "stats": {
      "hp": 560,
      "mana": 640,
      "attack": 170,
      "defense": 88,
      "agility": 152
    },
    "drops": [
      {
        "item": "water_crystal",
        "chance": 70,
        "min": 1,
        "max": 2
      }
    ],
    "xp": 160,
    "gold": {
      "min": 18,
      "max": 30
    },
    "skills": [
      {
        "id": "water_blast",
        "name": "Water Blast",
        "description": "Pressurized water attack",
        "manaCost": 24,
        "cooldown": 9,
        "damageType": "magical",
        "baseDamage": 24,
        "effects": [
          {
            "type": "slow",
            "value": 10,
            "duration": 4
          }
        ]
      },
      {
        "id": "healing_waters",
        "name": "Healing Waters",
        "description": "Restores health",
        "manaCost": 28,
        "cooldown": 9,
        "effects": [
          {
            "type": "heal",
            "value": 30,
            "duration": 1
          }
        ]
      }
    ],
    "passive": {
      "id": "regeneration",
      "name": "Regeneration",
      "emoji": "💚",
      "effect": "regen",
      "value": 10
    }
  },
  "silver_lake_giant_fish": {
    "id": "silver_lake_giant_fish",
    "name": "🐟 Deepscale Leviathan",
    "location": [
      "silver_lake"
    ],
    "tier": 3,
    "stats": {
      "hp": 656,
      "mana": 440,
      "attack": 152,
      "defense": 104,
      "agility": 128
    },
    "drops": [
      {
        "item": "giant_fish_meat",
        "chance": 80,
        "min": 2,
        "max": 4
      }
    ],
    "xp": 168,
    "gold": {
      "min": 20,
      "max": 32
    },
    "skills": [
      {
        "id": "tail_slam",
        "name": "Tail Slam",
        "description": "Powerful tail strike",
        "manaCost": 26,
        "cooldown": 9,
        "damageType": "physical",
        "baseDamage": 28,
        "effects": [
          {
            "type": "stun",
            "value": 1,
            "duration": 4
          }
        ]
      },
      {
        "id": "water_shield",
        "name": "Water Shield",
        "description": "Defensive barrier",
        "manaCost": 22,
        "cooldown": 9,
        "effects": [
          {
            "type": "buff_def",
            "value": 12,
            "duration": 4
          }
        ]
      }
    ],
    "passive": {
      "id": "iron_skin",
      "name": "Iron Skin",
      "emoji": "🛡️",
      "effect": "defense_boost",
      "value": 10
    }
  },
  "silver_lake_lake_serpent": {
    "id": "silver_lake_lake_serpent",
    "name": "🐍 Mirrorcoil Hydra",
    "location": [
      "silver_lake"
    ],
    "tier": 3,
    "stats": {
      "hp": 624,
      "mana": 560,
      "attack": 168,
      "defense": 80,
      "agility": 144
    },
    "drops": [
      {
        "item": "serpent_scale",
        "chance": 65,
        "min": 1,
        "max": 2
      }
    ],
    "xp": 176,
    "gold": {
      "min": 22,
      "max": 35
    },
    "skills": [
      {
        "id": "venom_bite",
        "name": "Venom Bite",
        "description": "Highly poisonous bite",
        "manaCost": 28,
        "cooldown": 9,
        "damageType": "physical",
        "baseDamage": 26,
        "effects": [
          {
            "type": "poison",
            "value": 12,
            "duration": 4
          }
        ]
      },
      {
        "id": "constrict",
        "name": "Constrict",
        "description": "Squeezes enemy",
        "manaCost": 26,
        "cooldown": 9,
        "effects": [
          {
            "type": "slow",
            "value": 12,
            "duration": 4
          }
        ]
      }
    ],
    "passive": {
      "id": "poison_touch",
      "name": "Poison Touch",
      "emoji": "☠️",
      "effect": "poison_on_hit",
      "value": 8,
      "chance": 40,
      "duration": 4
    }
  },
  "moonlit_shore_moon_crab": {
    "id": "moonlit_shore_moon_crab",
    "name": "🦀 Lunarshell Titan",
    "location": [
      "moonlit_shore"
    ],
    "tier": 3,
    "stats": {
      "hp": 704,
      "mana": 480,
      "attack": 160,
      "defense": 160,
      "agility": 80
    },
    "drops": [
      {
        "item": "moon_shell",
        "chance": 75,
        "min": 1,
        "max": 2
      }
    ],
    "xp": 192,
    "gold": {
      "min": 25,
      "max": 40
    },
    "skills": [
      {
        "id": "lunar_pinch",
        "name": "Lunar Pinch",
        "description": "Crushing claw attack",
        "manaCost": 28,
        "cooldown": 9,
        "damageType": "physical",
        "baseDamage": 30,
        "effects": [
          {
            "type": "debuff_def",
            "value": 10,
            "duration": 4
          }
        ]
      },
      {
        "id": "moonlight_armor",
        "name": "Moonlight Armor",
        "description": "Hardens shell",
        "manaCost": 26,
        "cooldown": 9,
        "effects": [
          {
            "type": "buff_def",
            "value": 18,
            "duration": 4
          }
        ]
      }
    ],
    "passive": {
      "id": "stone_skin",
      "name": "Stone Skin",
      "emoji": "🪨",
      "effect": "defense_boost",
      "value": 15
    }
  },
  "moonlit_shore_night_stalker": {
    "id": "moonlit_shore_night_stalker",
    "name": "🌙 Umbral Prowler",
    "location": [
      "moonlit_shore"
    ],
    "tier": 3,
    "stats": {
      "hp": 600,
      "mana": 600,
      "attack": 184,
      "defense": 96,
      "agility": 160
    },
    "drops": [
      {
        "item": "night_essence",
        "chance": 65,
        "min": 1,
        "max": 2
      }
    ],
    "xp": 200,
    "gold": {
      "min": 28,
      "max": 45
    },
    "skills": [
      {
        "id": "shadow_strike",
        "name": "Shadow Strike",
        "description": "Strike from darkness",
        "manaCost": 30,
        "cooldown": 9,
        "damageType": "physical",
        "baseDamage": 32,
        "effects": [
          {
            "type": "blind",
            "value": 70,
            "duration": 4
          }
        ]
      },
      {
        "id": "night_cloak",
        "name": "Night Cloak",
        "description": "Becomes invisible",
        "manaCost": 28,
        "cooldown": 9,
        "effects": [
          {
            "type": "evasion_buff",
            "value": 60,
            "duration": 4
          }
        ]
      }
    ],
    "passive": {
      "id": "critical_strike",
      "name": "Critical Strike",
      "emoji": "💥",
      "effect": "crit_chance",
      "value": 28
    }
  },
  "moonlit_shore_tide_elemental": {
    "id": "moonlit_shore_tide_elemental",
    "name": "🌊 Tidecaller",
    "location": [
      "moonlit_shore"
    ],
    "tier": 3,
    "stats": {
      "hp": 640,
      "mana": 720,
      "attack": 152,
      "defense": 112,
      "agility": 136
    },
    "drops": [
      {
        "item": "tide_essence",
        "chance": 60,
        "min": 1,
        "max": 1
      }
    ],
    "xp": 208,
    "gold": {
      "min": 30,
      "max": 48
    },
    "skills": [
      {
        "id": "tidal_wave",
        "name": "Tidal Wave",
        "description": "Massive water attack",
        "manaCost": 32,
        "cooldown": 9,
        "damageType": "magical",
        "baseDamage": 35,
        "effects": [
          {
            "type": "stun",
            "value": 2,
            "duration": 4
          }
        ]
      },
      {
        "id": "water_form",
        "name": "Water Form",
        "description": "Becomes fluid",
        "manaCost": 28,
        "cooldown": 9,
        "effects": [
          {
            "type": "evasion_buff",
            "value": 55,
            "duration": 4
          }
        ]
      }
    ],
    "passive": {
      "id": "regeneration",
      "name": "Regeneration",
      "emoji": "💚",
      "effect": "regen",
      "value": 12
    }
  },
  "enchanted_grove_pixie": {
    "id": "enchanted_grove_pixie",
    "name": "🧚 Glimmerwisp",
    "location": [
      "enchanted_grove"
    ],
    "tier": 4,
    "stats": {
      "hp": 1400,
      "mana": 1600,
      "attack": 388,
      "defense": 208,
      "agility": 400
    },
    "drops": [
      {
        "item": "pixie_dust",
        "chance": 80,
        "min": 2,
        "max": 5
      }
    ],
    "xp": 400,
    "gold": {
      "min": 25,
      "max": 40
    },
    "skills": [
      {
        "id": "fairy_bolt",
        "name": "Fairy Bolt",
        "description": "Magical projectile",
        "manaCost": 28,
        "cooldown": 9,
        "damageType": "magical",
        "baseDamage": 28,
        "effects": [
          {
            "type": "slow",
            "value": 12,
            "duration": 4
          }
        ]
      },
      {
        "id": "enchant",
        "name": "Enchant",
        "description": "Confuses enemy",
        "manaCost": 30,
        "cooldown": 9,
        "effects": [
          {
            "type": "blind",
            "value": 75,
            "duration": 4
          }
        ]
      }
    ],
    "passive": {
      "id": "nimble",
      "name": "Nimble",
      "emoji": "💨",
      "effect": "dodge_boost",
      "value": 25
    }
  },
  "enchanted_grove_sprite": {
    "id": "enchanted_grove_sprite",
    "name": "✨ Faeblossom Spirit",
    "location": [
      "enchanted_grove"
    ],
    "tier": 4,
    "stats": {
      "hp": 1456,
      "mana": 1520,
      "attack": 320,
      "defense": 250,
      "agility": 352
    },
    "drops": [
      {
        "item": "sprite_wing",
        "chance": 70,
        "min": 1,
        "max": 2
      }
    ],
    "xp": 416,
    "gold": {
      "min": 28,
      "max": 42
    },
    "skills": [
      {
        "id": "nature_magic",
        "name": "Nature Magic",
        "description": "Elemental attack",
        "manaCost": 30,
        "cooldown": 9,
        "damageType": "magical",
        "baseDamage": 30,
        "effects": [
          {
            "type": "poison",
            "value": 10,
            "duration": 4
          }
        ]
      },
      {
        "id": "blink",
        "name": "Blink",
        "description": "Teleports away",
        "manaCost": 26,
        "cooldown": 9,
        "effects": [
          {
            "type": "evasion_buff",
            "value": 50,
            "duration": 4
          }
        ]
      }
    ],
    "passive": {
      "id": "magic_affinity",
      "name": "Magic Affinity",
      "emoji": "🔮",
      "effect": "magic_boost",
      "value": 15
    }
  },
  "enchanted_grove_treant": {
    "id": "enchanted_grove_treant",
    "name": "🌳 Verdant Ancient",
    "location": [
      "enchanted_grove"
    ],
    "tier": 4,
    "stats": {
      "hp": 1760,
      "mana": 1120,
      "attack": 352,
      "defense": 320,
      "agility": 128
    },
    "drops": [
      {
        "item": "ancient_wood",
        "chance": 75,
        "min": 2,
        "max": 4
      }
    ],
    "xp": 440,
    "gold": {
      "min": 30,
      "max": 45
    },
    "skills": [
      {
        "id": "root_slam",
        "name": "Root Slam",
        "description": "Crushing root attack",
        "manaCost": 32,
        "cooldown": 9,
        "damageType": "physical",
        "baseDamage": 35,
        "effects": [
          {
            "type": "stun",
            "value": 2,
            "duration": 4
          }
        ]
      },
      {
        "id": "bark_armor",
        "name": "Bark Armor",
        "description": "Hardens bark",
        "manaCost": 28,
        "cooldown": 9,
        "effects": [
          {
            "type": "buff_def",
            "value": 20,
            "duration": 4
          }
        ]
      }
    ],
    "passive": {
      "id": "regeneration",
      "name": "Regeneration",
      "emoji": "💚",
      "effect": "regen",
      "value": 15
    }
  },
  "mystic_waterfall_water_elemental": {
    "id": "mystic_waterfall_water_elemental",
    "name": "💧 Cascadeborn",
    "location": [
      "mystic_waterfall"
    ],
    "tier": 4,
    "stats": {
      "hp": 1440,
      "mana": 1600,
      "attack": 336,
      "defense": 240,
      "agility": 288
    },
    "drops": [
      {
        "item": "water_essence",
        "chance": 70,
        "min": 1,
        "max": 2
      }
    ],
    "xp": 416,
    "gold": {
      "min": 28,
      "max": 42
    },
    "skills": [
      {
        "id": "hydro_blast",
        "name": "Hydro Blast",
        "description": "Powerful water jet",
        "manaCost": 30,
        "cooldown": 9,
        "damageType": "magical",
        "baseDamage": 32,
        "effects": [
          {
            "type": "slow",
            "value": 15,
            "duration": 4
          }
        ]
      },
      {
        "id": "water_shield",
        "name": "Water Shield",
        "description": "Protective barrier",
        "manaCost": 28,
        "cooldown": 9,
        "effects": [
          {
            "type": "buff_def",
            "value": 18,
            "duration": 4
          }
        ]
      }
    ],
    "passive": {
      "id": "regeneration",
      "name": "Regeneration",
      "emoji": "💚",
      "effect": "regen",
      "value": 12
    }
  },
  "mystic_waterfall_river_guardian": {
    "id": "mystic_waterfall_river_guardian",
    "name": "🛡️ Torrent Warden",
    "location": [
      "mystic_waterfall"
    ],
    "tier": 4,
    "stats": {
      "hp": 1680,
      "mana": 1280,
      "attack": 384,
      "defense": 352,
      "agility": 192
    },
    "drops": [
      {
        "item": "guardian_stone",
        "chance": 60,
        "min": 1,
        "max": 1
      }
    ],
    "xp": 464,
    "gold": {
      "min": 32,
      "max": 48
    },
    "skills": [
      {
        "id": "guardian_strike",
        "name": "Guardian Strike",
        "description": "Protective attack",
        "manaCost": 32,
        "cooldown": 9,
        "damageType": "physical",
        "baseDamage": 36,
        "effects": [
          {
            "type": "debuff_atk",
            "value": 15,
            "duration": 4
          }
        ]
      },
      {
        "id": "fortify",
        "name": "Fortify",
        "description": "Increases defense",
        "manaCost": 30,
        "cooldown": 9,
        "effects": [
          {
            "type": "buff_def",
            "value": 22,
            "duration": 4
          }
        ]
      }
    ],
    "passive": {
      "id": "stone_skin",
      "name": "Stone Skin",
      "emoji": "🪨",
      "effect": "defense_boost",
      "value": 18
    }
  },
  "mystic_waterfall_mist_spirit": {
    "id": "mystic_waterfall_mist_spirit",
    "name": "🌫️ Veilveil Phantom",
    "location": [
      "mystic_waterfall"
    ],
    "tier": 4,
    "stats": {
      "hp": 1620,
      "mana": 1760,
      "attack": 396,
      "defense": 192,
      "agility": 368
    },
    "drops": [
      {
        "item": "mist_essence",
        "chance": 65,
        "min": 1,
        "max": 2
      }
    ],
    "xp": 432,
    "gold": {
      "min": 30,
      "max": 45
    },
    "skills": [
      {
        "id": "mist_veil",
        "name": "Mist Veil",
        "description": "Obscures vision",
        "manaCost": 28,
        "cooldown": 9,
        "effects": [
          {
            "type": "blind",
            "value": 80,
            "duration": 4
          }
        ]
      },
      {
        "id": "phase_shift",
        "name": "Phase Shift",
        "description": "Becomes intangible",
        "manaCost": 32,
        "cooldown": 9,
        "effects": [
          {
            "type": "evasion_buff",
            "value": 65,
            "duration": 4
          }
        ]
      }
    ],
    "passive": {
      "id": "ethereal",
      "name": "Ethereal",
      "emoji": "✨",
      "effect": "dodge_boost",
      "value": 30
    }
  },
  "hidden_grotto_stone_guardian": {
    "id": "hidden_grotto_stone_guardian",
    "name": "🗿 Runestone Sentinel",
    "location": [
      "hidden_grotto"
    ],
    "tier": 4,
    "stats": {
      "hp": 1920,
      "mana": 1120,
      "attack": 416,
      "defense": 400,
      "agility": 128
    },
    "drops": [
      {
        "item": "guardian_core",
        "chance": 50,
        "min": 1,
        "max": 1
      }
    ],
    "xp": 520,
    "gold": {
      "min": 40,
      "max": 60
    },
    "skills": [
      {
        "id": "stone_fist",
        "name": "Stone Fist",
        "description": "Devastating punch",
        "manaCost": 35,
        "cooldown": 9,
        "damageType": "physical",
        "baseDamage": 42,
        "effects": [
          {
            "type": "stun",
            "value": 3,
            "duration": 4
          }
        ]
      },
      {
        "id": "petrify",
        "name": "Petrify",
        "description": "Turns enemy to stone",
        "manaCost": 38,
        "cooldown": 9,
        "effects": [
          {
            "type": "slow",
            "value": 20,
            "duration": 4
          }
        ]
      }
    ],
    "passive": {
      "id": "stone_skin",
      "name": "Stone Skin",
      "emoji": "🪨",
      "effect": "defense_boost",
      "value": 20
    }
  },
  "hidden_grotto_treasure_mimic": {
    "id": "hidden_grotto_treasure_mimic",
    "name": "📦 Deceit Chest",
    "location": [
      "hidden_grotto"
    ],
    "tier": 4,
    "stats": {
      "hp": 1520,
      "mana": 1360,
      "attack": 448,
      "defense": 288,
      "agility": 240
    },
    "drops": [
      {
        "item": "mimic_tooth",
        "chance": 70,
        "min": 1,
        "max": 2
      }
    ],
    "xp": 496,
    "gold": {
      "min": 50,
      "max": 80
    },
    "skills": [
      {
        "id": "surprise_bite",
        "name": "Surprise Bite",
        "description": "Ambush attack",
        "manaCost": 32,
        "cooldown": 9,
        "damageType": "physical",
        "baseDamage": 40,
        "effects": [
          {
            "type": "bleed",
            "value": 15,
            "duration": 4
          }
        ]
      },
      {
        "id": "treasure_lure",
        "name": "Treasure Lure",
        "description": "Confuses enemy",
        "manaCost": 30,
        "cooldown": 9,
        "effects": [
          {
            "type": "blind",
            "value": 75,
            "duration": 4
          }
        ]
      }
    ],
    "passive": {
      "id": "ambush",
      "name": "Ambush",
      "emoji": "🎯",
      "effect": "crit_chance",
      "value": 35
    }
  },
  "hidden_grotto_cave_troll": {
    "id": "hidden_grotto_cave_troll",
    "name": "🧌 Grotto Brute",
    "location": [
      "hidden_grotto"
    ],
    "tier": 4,
    "stats": {
      "hp": 1840,
      "mana": 1040,
      "attack": 480,
      "defense": 320,
      "agility": 160
    },
    "drops": [
      {
        "item": "troll_bone",
        "chance": 65,
        "min": 1,
        "max": 2
      }
    ],
    "xp": 544,
    "gold": {
      "min": 45,
      "max": 70
    },
    "skills": [
      {
        "id": "club_smash",
        "name": "Club Smash",
        "description": "Brutal club attack",
        "manaCost": 35,
        "cooldown": 9,
        "damageType": "physical",
        "baseDamage": 45,
        "effects": [
          {
            "type": "debuff_def",
            "value": 18,
            "duration": 4
          }
        ]
      },
      {
        "id": "roar",
        "name": "Roar",
        "description": "Terrifying roar",
        "manaCost": 30,
        "cooldown": 9,
        "effects": [
          {
            "type": "debuff_atk",
            "value": 15,
            "duration": 4
          }
        ]
      }
    ],
    "passive": {
      "id": "berserker",
      "name": "Berserker",
      "emoji": "💢",
      "effect": "attack_boost",
      "value": 18
    }
  },
  "crystal_forest_crystal_wolf": {
    "id": "crystal_forest_crystal_wolf",
    "name": "🐺 Shardmaw Wolf",
    "location": [
      "crystal_forest"
    ],
    "tier": 4,
    "stats": {
      "hp": 1408,
      "mana": 1200,
      "attack": 384,
      "defense": 256,
      "agility": 320
    },
    "drops": [
      {
        "item": "crystal_fang",
        "chance": 75,
        "min": 1,
        "max": 2
      }
    ],
    "xp": 440,
    "gold": {
      "min": 30,
      "max": 45
    },
    "skills": [
      {
        "id": "crystal_bite",
        "name": "Crystal Bite",
        "description": "Shattering bite",
        "manaCost": 30,
        "cooldown": 9,
        "damageType": "physical",
        "baseDamage": 34,
        "effects": [
          {
            "type": "bleed",
            "value": 12,
            "duration": 4
          }
        ]
      },
      {
        "id": "pack_howl",
        "name": "Pack Howl",
        "description": "Rallies strength",
        "manaCost": 28,
        "cooldown": 9,
        "effects": [
          {
            "type": "buff_atk",
            "value": 18,
            "duration": 4
          }
        ]
      }
    ],
    "passive": {
      "id": "enrage",
      "name": "Enrage",
      "emoji": "😡",
      "effect": "enrage",
      "value": 20,
      "threshold": 30
    }
  },
  "crystal_forest_glass_spider": {
    "id": "crystal_forest_glass_spider",
    "name": "🕷️ Prismweave Stalker",
    "location": [
      "crystal_forest"
    ],
    "tier": 4,
    "stats": {
      "hp": 1200,
      "mana": 1280,
      "attack": 352,
      "defense": 224,
      "agility": 352
    },
    "drops": [
      {
        "item": "glass_silk",
        "chance": 80,
        "min": 2,
        "max": 4
      }
    ],
    "xp": 416,
    "gold": {
      "min": 28,
      "max": 42
    },
    "skills": [
      {
        "id": "web_trap",
        "name": "Web Trap",
        "description": "Immobilizes enemy",
        "manaCost": 28,
        "cooldown": 9,
        "effects": [
          {
            "type": "slow",
            "value": 18,
            "duration": 4
          }
        ]
      },
      {
        "id": "venom_spit",
        "name": "Venom Spit",
        "description": "Poisonous projectile",
        "manaCost": 30,
        "cooldown": 9,
        "damageType": "magical",
        "baseDamage": 28,
        "effects": [
          {
            "type": "poison",
            "value": 12,
            "duration": 4
          }
        ]
      }
    ],
    "passive": {
      "id": "poison_touch",
      "name": "Poison Touch",
      "emoji": "☠️",
      "effect": "poison_on_hit",
      "value": 10,
      "chance": 45,
      "duration": 4
    }
  },
  "crystal_forest_prism_elemental": {
    "id": "crystal_forest_prism_elemental",
    "name": "💎 Refractborn",
    "location": [
      "crystal_forest"
    ],
    "tier": 4,
    "stats": {
      "hp": 1360,
      "mana": 1600,
      "attack": 368,
      "defense": 288,
      "agility": 272
    },
    "drops": [
      {
        "item": "prism_shard",
        "chance": 65,
        "min": 1,
        "max": 2
      }
    ],
    "xp": 464,
    "gold": {
      "min": 32,
      "max": 48
    },
    "skills": [
      {
        "id": "light_beam",
        "name": "Light Beam",
        "description": "Focused light ray",
        "manaCost": 32,
        "cooldown": 9,
        "damageType": "magical",
        "baseDamage": 36,
        "effects": [
          {
            "type": "blind",
            "value": 80,
            "duration": 4
          }
        ]
      },
      {
        "id": "refraction",
        "name": "Refraction",
        "description": "Bends light",
        "manaCost": 30,
        "cooldown": 9,
        "effects": [
          {
            "type": "evasion_buff",
            "value": 55,
            "duration": 4
          }
        ]
      }
    ],
    "passive": {
      "id": "magic_affinity",
      "name": "Magic Affinity",
      "emoji": "🔮",
      "effect": "magic_boost",
      "value": 18
    }
  },
  "prism_valley_light_elemental": {
    "id": "prism_valley_light_elemental",
    "name": "☀️ Solarburst",
    "location": [
      "prism_valley"
    ],
    "tier": 4,
    "stats": {
      "hp": 1280,
      "mana": 1760,
      "attack": 416,
      "defense": 240,
      "agility": 336
    },
    "drops": [
      {
        "item": "light_essence",
        "chance": 70,
        "min": 1,
        "max": 2
      }
    ],
    "xp": 480,
    "gold": {
      "min": 35,
      "max": 55
    },
    "skills": [
      {
        "id": "solar_flare",
        "name": "Solar Flare",
        "description": "Blinding explosion",
        "manaCost": 35,
        "cooldown": 9,
        "damageType": "magical",
        "baseDamage": 40,
        "effects": [
          {
            "type": "blind",
            "value": 90,
            "duration": 4
          }
        ]
      },
      {
        "id": "radiance",
        "name": "Radiance",
        "description": "Empowers with light",
        "manaCost": 32,
        "cooldown": 9,
        "effects": [
          {
            "type": "buff_atk",
            "value": 20,
            "duration": 4
          }
        ]
      }
    ],
    "passive": {
      "id": "magic_affinity",
      "name": "Magic Affinity",
      "emoji": "🔮",
      "effect": "magic_boost",
      "value": 20
    }
  },
  "prism_valley_rainbow_serpent": {
    "id": "prism_valley_rainbow_serpent",
    "name": "🌈 Spectrascale",
    "location": [
      "prism_valley"
    ],
    "tier": 4,
    "stats": {
      "hp": 1520,
      "mana": 1520,
      "attack": 448,
      "defense": 272,
      "agility": 304
    },
    "drops": [
      {
        "item": "rainbow_scale",
        "chance": 60,
        "min": 1,
        "max": 1
      }
    ],
    "xp": 520,
    "gold": {
      "min": 40,
      "max": 60
    },
    "skills": [
      {
        "id": "prismatic_breath",
        "name": "Prismatic Breath",
        "description": "Multi-colored blast",
        "manaCost": 38,
        "cooldown": 9,
        "damageType": "magical",
        "baseDamage": 42,
        "effects": [
          {
            "type": "debuff_def",
            "value": 18,
            "duration": 4
          }
        ]
      },
      {
        "id": "color_shift",
        "name": "Color Shift",
        "description": "Changes form",
        "manaCost": 34,
        "cooldown": 9,
        "effects": [
          {
            "type": "evasion_buff",
            "value": 60,
            "duration": 4
          }
        ]
      }
    ],
    "passive": {
      "id": "regeneration",
      "name": "Regeneration",
      "emoji": "💚",
      "effect": "regen",
      "value": 15
    }
  },
  "prism_valley_refraction_beast": {
    "id": "prism_valley_refraction_beast",
    "name": "✨ Illusionweald Beast",
    "location": [
      "prism_valley"
    ],
    "tier": 4,
    "stats": {
      "hp": 1440,
      "mana": 1600,
      "attack": 400,
      "defense": 256,
      "agility": 368
    },
    "drops": [
      {
        "item": "refraction_crystal",
        "chance": 55,
        "min": 1,
        "max": 1
      }
    ],
    "xp": 496,
    "gold": {
      "min": 38,
      "max": 58
    },
    "skills": [
      {
        "id": "mirror_strike",
        "name": "Mirror Strike",
        "description": "Reflected attack",
        "manaCost": 36,
        "cooldown": 9,
        "damageType": "physical",
        "baseDamage": 38,
        "effects": [
          {
            "type": "blind",
            "value": 85,
            "duration": 4
          }
        ]
      },
      {
        "id": "illusion",
        "name": "Illusion",
        "description": "Creates copies",
        "manaCost": 34,
        "cooldown": 9,
        "effects": [
          {
            "type": "evasion_buff",
            "value": 70,
            "duration": 4
          }
        ]
      }
    ],
    "passive": {
      "id": "ethereal",
      "name": "Ethereal",
      "emoji": "✨",
      "effect": "dodge_boost",
      "value": 35
    }
  },
  "whispering_canyon_wind_spirit": {
    "id": "whispering_canyon_wind_spirit",
    "name": "💨 Galewing Wraith",
    "location": [
      "whispering_canyon"
    ],
    "tier": 4,
    "stats": {
      "hp": 1456,
      "mana": 1680,
      "attack": 336,
      "defense": 192,
      "agility": 416
    },
    "drops": [
      {
        "item": "wind_essence",
        "chance": 75,
        "min": 1,
        "max": 2
      }
    ],
    "xp": 432,
    "gold": {
      "min": 30,
      "max": 45
    },
    "skills": [
      {
        "id": "gale_force",
        "name": "Gale Force",
        "description": "Powerful wind blast",
        "manaCost": 30,
        "cooldown": 9,
        "damageType": "magical",
        "baseDamage": 32,
        "effects": [
          {
            "type": "slow",
            "value": 15,
            "duration": 4
          }
        ]
      },
      {
        "id": "wind_form",
        "name": "Wind Form",
        "description": "Becomes air",
        "manaCost": 28,
        "cooldown": 9,
        "effects": [
          {
            "type": "evasion_buff",
            "value": 65,
            "duration": 4
          }
        ]
      }
    ],
    "passive": {
      "id": "nimble",
      "name": "Nimble",
      "emoji": "💨",
      "effect": "dodge_boost",
      "value": 30
    }
  },
  "whispering_canyon_air_elemental": {
    "id": "whispering_canyon_air_elemental",
    "name": "🌪️ Vortexborn",
    "location": [
      "whispering_canyon"
    ],
    "tier": 4,
    "stats": {
      "hp": 1622,
      "mana": 1760,
      "attack": 368,
      "defense": 224,
      "agility": 384
    },
    "drops": [
      {
        "item": "air_essence",
        "chance": 70,
        "min": 1,
        "max": 2
      }
    ],
    "xp": 448,
    "gold": {
      "min": 32,
      "max": 48
    },
    "skills": [
      {
        "id": "tornado",
        "name": "Tornado",
        "description": "Spinning vortex",
        "manaCost": 34,
        "cooldown": 9,
        "damageType": "magical",
        "baseDamage": 36,
        "effects": [
          {
            "type": "stun",
            "value": 2,
            "duration": 4
          }
        ]
      },
      {
        "id": "air_shield",
        "name": "Air Shield",
        "description": "Wind barrier",
        "manaCost": 30,
        "cooldown": 9,
        "effects": [
          {
            "type": "buff_def",
            "value": 18,
            "duration": 4
          }
        ]
      }
    ],
    "passive": {
      "id": "swift_strikes",
      "name": "Swift Strikes",
      "emoji": "⚡",
      "effect": "agility_boost",
      "value": 15
    }
  },
  "whispering_canyon_canyon_harpy": {
    "id": "whispering_canyon_canyon_harpy",
    "name": "🦅 Screechclaw Harpy",
    "location": [
      "whispering_canyon"
    ],
    "tier": 4,
    "stats": {
      "hp": 1706,
      "mana": 1440,
      "attack": 400,
      "defense": 208,
      "agility": 368
    },
    "drops": [
      {
        "item": "harpy_feather",
        "chance": 75,
        "min": 2,
        "max": 4
      }
    ],
    "xp": 464,
    "gold": {
      "min": 34,
      "max": 50
    },
    "skills": [
      {
        "id": "screech",
        "name": "Screech",
        "description": "Ear-piercing scream",
        "manaCost": 32,
        "cooldown": 9,
        "damageType": "magical",
        "baseDamage": 34,
        "effects": [
          {
            "type": "debuff_atk",
            "value": 15,
            "duration": 4
          }
        ]
      },
      {
        "id": "dive_bomb",
        "name": "Dive Bomb",
        "description": "Aerial assault",
        "manaCost": 30,
        "cooldown": 9,
        "damageType": "physical",
        "baseDamage": 32,
        "effects": [
          {
            "type": "stun",
            "value": 1,
            "duration": 4
          }
        ]
      }
    ],
    "passive": {
      "id": "critical_strike",
      "name": "Critical Strike",
      "emoji": "💥",
      "effect": "crit_chance",
      "value": 25
    }
  },
  "echo_caves_echo_bat": {
    "id": "echo_caves_echo_bat",
    "name": "🦇 Resonance Bat",
    "location": [
      "echo_caves"
    ],
    "tier": 4,
    "stats": {
      "hp": 1200,
      "mana": 1520,
      "attack": 384,
      "defense": 176,
      "agility": 432
    },
    "drops": [
      {
        "item": "echo_wing",
        "chance": 80,
        "min": 2,
        "max": 4
      }
    ],
    "xp": 464,
    "gold": {
      "min": 35,
      "max": 52
    },
    "skills": [
      {
        "id": "sonic_pulse",
        "name": "Sonic Pulse",
        "description": "Sound wave attack",
        "manaCost": 32,
        "cooldown": 9,
        "damageType": "magical",
        "baseDamage": 36,
        "effects": [
          {
            "type": "blind",
            "value": 85,
            "duration": 4
          }
        ]
      },
      {
        "id": "echolocation",
        "name": "Echolocation",
        "description": "Perfect awareness",
        "manaCost": 28,
        "cooldown": 9,
        "effects": [
          {
            "type": "buff_atk",
            "value": 18,
            "duration": 4
          }
        ]
      }
    ],
    "passive": {
      "id": "vampiric",
      "name": "Vampiric",
      "emoji": "🧛",
      "effect": "lifesteal",
      "value": 30
    }
  },
  "echo_caves_sonic_beast": {
    "id": "echo_caves_sonic_beast",
    "name": "🔊 Shatterroar",
    "location": [
      "echo_caves"
    ],
    "tier": 4,
    "stats": {
      "hp": 1472,
      "mana": 1600,
      "attack": 432,
      "defense": 256,
      "agility": 320
    },
    "drops": [
      {
        "item": "sonic_crystal",
        "chance": 65,
        "min": 1,
        "max": 2
      }
    ],
    "xp": 512,
    "gold": {
      "min": 40,
      "max": 62
    },
    "skills": [
      {
        "id": "sonic_boom",
        "name": "Sonic Boom",
        "description": "Explosive sound",
        "manaCost": 36,
        "cooldown": 9,
        "damageType": "magical",
        "baseDamage": 42,
        "effects": [
          {
            "type": "stun",
            "value": 3,
            "duration": 4
          }
        ]
      },
      {
        "id": "resonance",
        "name": "Resonance",
        "description": "Amplifies power",
        "manaCost": 34,
        "cooldown": 9,
        "effects": [
          {
            "type": "buff_atk",
            "value": 22,
            "duration": 4
          }
        ]
      }
    ],
    "passive": {
      "id": "power_surge",
      "name": "Power Surge",
      "emoji": "💪",
      "effect": "attack_boost",
      "value": 18
    }
  },
  "echo_caves_sound_elemental": {
    "id": "echo_caves_sound_elemental",
    "name": "🎵 Harmonic Wraith",
    "location": [
      "echo_caves"
    ],
    "tier": 4,
    "stats": {
      "hp": 1360,
      "mana": 1840,
      "attack": 400,
      "defense": 224,
      "agility": 352
    },
    "drops": [
      {
        "item": "sound_essence",
        "chance": 60,
        "min": 1,
        "max": 1
      }
    ],
    "xp": 528,
    "gold": {
      "min": 42,
      "max": 65
    },
    "skills": [
      {
        "id": "harmonic_blast",
        "name": "Harmonic Blast",
        "description": "Resonating attack",
        "manaCost": 38,
        "cooldown": 9,
        "damageType": "magical",
        "baseDamage": 44,
        "effects": [
          {
            "type": "debuff_def",
            "value": 20,
            "duration": 4
          }
        ]
      },
      {
        "id": "silence",
        "name": "Silence",
        "description": "Mutes enemy abilities",
        "manaCost": 36,
        "cooldown": 9,
        "effects": [
          {
            "type": "debuff_atk",
            "value": 18,
            "duration": 4
          }
        ]
      }
    ],
    "passive": {
      "id": "magic_affinity",
      "name": "Magic Affinity",
      "emoji": "🔮",
      "effect": "magic_boost",
      "value": 22
    }
  },
  "bamboo_forest_panda": {
    "id": "bamboo_forest_panda",
    "name": "🐼 Jadeclaw Guardian",
    "location": [
      "bamboo_forest"
    ],
    "tier": 2,
    "stats": {
      "hp": 672,
      "mana": 160,
      "attack": 134,
      "defense": 112,
      "agility": 90
    },
    "drops": [
      {
        "item": "bamboo_shoot",
        "chance": 80,
        "min": 2,
        "max": 4
      }
    ],
    "xp": 50,
    "gold": {
      "min": 8,
      "max": 15
    },
    "skills": [
      {
        "id": "heavy_slam",
        "name": "Heavy Slam",
        "description": "Powerful slam attack",
        "manaCost": 18,
        "cooldown": 9,
        "damageType": "physical",
        "baseDamage": 18,
        "effects": [
          {
            "type": "stun",
            "value": 1,
            "duration": 4
          }
        ]
      },
      {
        "id": "bamboo_shield",
        "name": "Bamboo Shield",
        "description": "Increases defense",
        "manaCost": 15,
        "cooldown": 9,
        "effects": [
          {
            "type": "buff_def",
            "value": 10,
            "duration": 4
          }
        ]
      }
    ],
    "passive": {
      "id": "iron_skin",
      "name": "Iron Skin",
      "emoji": "🛡️",
      "effect": "defense_boost",
      "value": 8
    }
  },
  "bamboo_forest_ninja": {
    "id": "bamboo_forest_ninja",
    "name": "🥷 Shadeblade Monk",
    "location": [
      "bamboo_forest"
    ],
    "tier": 2,
    "stats": {
      "hp": 560,
      "mana": 200,
      "attack": 168,
      "defense": 90,
      "agility": 202
    },
    "drops": [
      {
        "item": "ninja_star",
        "chance": 70,
        "min": 1,
        "max": 3
      }
    ],
    "xp": 60,
    "gold": {
      "min": 12,
      "max": 20
    },
    "skills": [
      {
        "id": "shadow_strike",
        "name": "Shadow Strike",
        "description": "Strike from shadows",
        "manaCost": 20,
        "cooldown": 9,
        "damageType": "physical",
        "baseDamage": 22,
        "effects": [
          {
            "type": "blind",
            "value": 60,
            "duration": 4
          }
        ]
      },
      {
        "id": "smoke_bomb",
        "name": "Smoke Bomb",
        "description": "Increases evasion",
        "manaCost": 18,
        "cooldown": 9,
        "effects": [
          {
            "type": "evasion_buff",
            "value": 40,
            "duration": 4
          }
        ]
      }
    ],
    "passive": {
      "id": "nimble",
      "name": "Nimble",
      "emoji": "💨",
      "effect": "dodge_boost",
      "value": 20
    }
  },
  "bamboo_forest_bamboo_spirit": {
    "id": "bamboo_forest_bamboo_spirit",
    "name": "🎋 Verdant Wanderer",
    "location": [
      "bamboo_forest"
    ],
    "tier": 2,
    "stats": {
      "hp": 616,
      "mana": 240,
      "attack": 146,
      "defense": 100,
      "agility": 134
    },
    "drops": [
      {
        "item": "spirit_essence",
        "chance": 65,
        "min": 1,
        "max": 2
      }
    ],
    "xp": 56,
    "gold": {
      "min": 10,
      "max": 18
    },
    "skills": [
      {
        "id": "nature_wrath",
        "name": "Nature's Wrath",
        "description": "Magical nature attack",
        "manaCost": 22,
        "cooldown": 9,
        "damageType": "magical",
        "baseDamage": 20,
        "effects": [
          {
            "type": "poison",
            "value": 6,
            "duration": 4
          }
        ]
      },
      {
        "id": "root_bind",
        "name": "Root Bind",
        "description": "Slows enemy",
        "manaCost": 18,
        "cooldown": 9,
        "effects": [
          {
            "type": "slow",
            "value": 8,
            "duration": 4
          }
        ]
      }
    ],
    "passive": {
      "id": "regeneration",
      "name": "Regeneration",
      "emoji": "💚",
      "effect": "regen",
      "value": 8
    }
  },
  "twilight_meadow_twilight_wolf": {
    "id": "twilight_meadow_twilight_wolf",
    "name": "🐺 Duskmane",
    "location": [
      "twilight_meadow"
    ],
    "tier": 2,
    "stats": {
      "hp": 650,
      "mana": 180,
      "attack": 156,
      "defense": 100,
      "agility": 168
    },
    "drops": [
      {
        "item": "twilight_fur",
        "chance": 75,
        "min": 1,
        "max": 2
      }
    ],
    "xp": 54,
    "gold": {
      "min": 9,
      "max": 16
    },
    "skills": [
      {
        "id": "howl",
        "name": "Howl",
        "description": "Weakens enemy",
        "manaCost": 18,
        "cooldown": 9,
        "effects": [
          {
            "type": "debuff_atk",
            "value": 8,
            "duration": 4
          }
        ]
      },
      {
        "id": "pack_tactics",
        "name": "Pack Tactics",
        "description": "Increases attack",
        "manaCost": 20,
        "cooldown": 9,
        "effects": [
          {
            "type": "buff_atk",
            "value": 10,
            "duration": 4
          }
        ]
      }
    ],
    "passive": {
      "id": "enrage",
      "name": "Enrage",
      "emoji": "😡",
      "effect": "enrage",
      "value": 15,
      "threshold": 30
    }
  },
  "twilight_meadow_dusk_bat": {
    "id": "twilight_meadow_dusk_bat",
    "name": "🦇 Darkveil Fiend",
    "location": [
      "twilight_meadow"
    ],
    "tier": 2,
    "stats": {
      "hp": 504,
      "mana": 200,
      "attack": 134,
      "defense": 68,
      "agility": 224
    },
    "drops": [
      {
        "item": "dusk_wing",
        "chance": 70,
        "min": 1,
        "max": 2
      }
    ],
    "xp": 48,
    "gold": {
      "min": 7,
      "max": 14
    },
    "skills": [
      {
        "id": "sonic_screech",
        "name": "Sonic Screech",
        "description": "Stuns enemy",
        "manaCost": 20,
        "cooldown": 9,
        "damageType": "magical",
        "baseDamage": 16,
        "effects": [
          {
            "type": "stun",
            "value": 1,
            "duration": 4
          }
        ]
      },
      {
        "id": "life_drain",
        "name": "Life Drain",
        "description": "Drains health",
        "manaCost": 22,
        "cooldown": 9,
        "effects": [
          {
            "type": "drain",
            "value": 20,
            "duration": 1
          }
        ]
      }
    ],
    "passive": {
      "id": "vampiric",
      "name": "Vampiric",
      "emoji": "🧛",
      "effect": "lifesteal",
      "value": 25
    }
  },
  "twilight_meadow_shadow_deer": {
    "id": "twilight_meadow_shadow_deer",
    "name": "🦌 Nightgrazer",
    "location": [
      "twilight_meadow"
    ],
    "tier": 2,
    "stats": {
      "hp": 582,
      "mana": 220,
      "attack": 124,
      "defense": 90,
      "agility": 180
    },
    "drops": [
      {
        "item": "shadow_antler",
        "chance": 65,
        "min": 1,
        "max": 1
      }
    ],
    "xp": 52,
    "gold": {
      "min": 8,
      "max": 15
    },
    "skills": [
      {
        "id": "shadow_dash",
        "name": "Shadow Dash",
        "description": "Quick evasive dash",
        "manaCost": 18,
        "cooldown": 9,
        "effects": [
          {
            "type": "evasion_buff",
            "value": 35,
            "duration": 4
          }
        ]
      },
      {
        "id": "antler_strike",
        "name": "Antler Strike",
        "description": "Piercing attack",
        "manaCost": 20,
        "cooldown": 9,
        "damageType": "physical",
        "baseDamage": 18,
        "effects": [
          {
            "type": "bleed",
            "value": 7,
            "duration": 4
          }
        ]
      }
    ],
    "passive": {
      "id": "nimble",
      "name": "Nimble",
      "emoji": "💨",
      "effect": "dodge_boost",
      "value": 18
    }
  },
  "shadow_woods_shadow_beast": {
    "id": "shadow_woods_shadow_beast",
    "name": "👹 Darkmantle Fiend",
    "location": [
      "shadow_woods"
    ],
    "tier": 3,
    "stats": {
      "hp": 640,
      "mana": 480,
      "attack": 144,
      "defense": 96,
      "agility": 112
    },
    "drops": [
      {
        "item": "shadow_essence",
        "chance": 70,
        "min": 1,
        "max": 2
      }
    ],
    "xp": 160,
    "gold": {
      "min": 15,
      "max": 25
    },
    "skills": [
      {
        "id": "shadow_claw",
        "name": "Shadow Claw",
        "description": "Dark energy attack",
        "manaCost": 25,
        "cooldown": 9,
        "damageType": "magical",
        "baseDamage": 25,
        "effects": [
          {
            "type": "debuff_def",
            "value": 10,
            "duration": 4
          }
        ]
      },
      {
        "id": "darkness",
        "name": "Darkness",
        "description": "Blinds enemy",
        "manaCost": 22,
        "cooldown": 9,
        "effects": [
          {
            "type": "blind",
            "value": 70,
            "duration": 4
          }
        ]
      }
    ],
    "passive": {
      "id": "shadow_form",
      "name": "Shadow Form",
      "emoji": "🌑",
      "effect": "dodge_boost",
      "value": 25
    }
  },
  "shadow_woods_dark_elf": {
    "id": "shadow_woods_dark_elf",
    "name": "🧝 Shadowmark Ranger",
    "location": [
      "shadow_woods"
    ],
    "tier": 3,
    "stats": {
      "hp": 600,
      "mana": 560,
      "attack": 160,
      "defense": 80,
      "agility": 144
    },
    "drops": [
      {
        "item": "dark_arrow",
        "chance": 75,
        "min": 2,
        "max": 5
      }
    ],
    "xp": 168,
    "gold": {
      "min": 18,
      "max": 28
    },
    "skills": [
      {
        "id": "poison_arrow",
        "name": "Poison Arrow",
        "description": "Poisoned shot",
        "manaCost": 24,
        "cooldown": 9,
        "damageType": "physical",
        "baseDamage": 22,
        "effects": [
          {
            "type": "poison",
            "value": 8,
            "duration": 4
          }
        ]
      },
      {
        "id": "shadow_step",
        "name": "Shadow Step",
        "description": "Teleport dodge",
        "manaCost": 20,
        "cooldown": 9,
        "effects": [
          {
            "type": "evasion_buff",
            "value": 45,
            "duration": 4
          }
        ]
      }
    ],
    "passive": {
      "id": "critical_strike",
      "name": "Critical Strike",
      "emoji": "💥",
      "effect": "crit_chance",
      "value": 20
    }
  },
  "shadow_woods_wraith": {
    "id": "shadow_woods_wraith",
    "name": "👻 Shroudborn Specter",
    "location": [
      "shadow_woods"
    ],
    "tier": 3,
    "stats": {
      "hp": 560,
      "mana": 640,
      "attack": 160,
      "defense": 76,
      "agility": 128
    },
    "drops": [
      {
        "item": "wraith_cloth",
        "chance": 65,
        "min": 1,
        "max": 1
      }
    ],
    "xp": 152,
    "gold": {
      "min": 16,
      "max": 26
    },
    "skills": [
      {
        "id": "soul_drain",
        "name": "Soul Drain",
        "description": "Drains life and mana",
        "manaCost": 28,
        "cooldown": 9,
        "effects": [
          {
            "type": "drain",
            "value": 25,
            "duration": 1
          }
        ]
      },
      {
        "id": "spectral_form",
        "name": "Spectral Form",
        "description": "Becomes intangible",
        "manaCost": 25,
        "cooldown": 9,
        "effects": [
          {
            "type": "evasion_buff",
            "value": 50,
            "duration": 4
          }
        ]
      }
    ],
    "passive": {
      "id": "vampiric",
      "name": "Vampiric",
      "emoji": "🧛",
      "effect": "lifesteal",
      "value": 30
    }
  },
  "haunted_hollow_ghost": {
    "id": "haunted_hollow_ghost",
    "name": "👻 Hollow Revenant",
    "location": [
      "haunted_hollow"
    ],
    "tier": 3,
    "stats": {
      "hp": 666,
      "mana": 600,
      "attack": 170,
      "defense": 72,
      "agility": 160
    },
    "drops": [
      {
        "item": "ectoplasm",
        "chance": 80,
        "min": 2,
        "max": 4
      }
    ],
    "xp": 180,
    "gold": {
      "min": 20,
      "max": 30
    },
    "skills": [
      {
        "id": "haunt",
        "name": "Haunt",
        "description": "Terrifies enemy",
        "manaCost": 26,
        "cooldown": 9,
        "effects": [
          {
            "type": "debuff_atk",
            "value": 12,
            "duration": 4
          }
        ]
      },
      {
        "id": "phase_through",
        "name": "Phase Through",
        "description": "Dodges attacks",
        "manaCost": 22,
        "cooldown": 9,
        "effects": [
          {
            "type": "evasion_buff",
            "value": 55,
            "duration": 4
          }
        ]
      }
    ],
    "passive": {
      "id": "ethereal",
      "name": "Ethereal",
      "emoji": "✨",
      "effect": "dodge_boost",
      "value": 30
    }
  },
  "haunted_hollow_poltergeist": {
    "id": "haunted_hollow_poltergeist",
    "name": "😈 Chaos Poltergeist",
    "location": [
      "haunted_hollow"
    ],
    "tier": 3,
    "stats": {
      "hp": 576,
      "mana": 680,
      "attack": 152,
      "defense": 72,
      "agility": 144
    },
    "drops": [
      {
        "item": "cursed_object",
        "chance": 70,
        "min": 1,
        "max": 2
      }
    ],
    "xp": 192,
    "gold": {
      "min": 22,
      "max": 35
    },
    "skills": [
      {
        "id": "telekinesis",
        "name": "Telekinesis",
        "description": "Throws objects",
        "manaCost": 28,
        "cooldown": 9,
        "damageType": "magical",
        "baseDamage": 26,
        "effects": [
          {
            "type": "stun",
            "value": 1,
            "duration": 4
          }
        ]
      },
      {
        "id": "chaos",
        "name": "Chaos",
        "description": "Confuses enemy",
        "manaCost": 24,
        "cooldown": 9,
        "effects": [
          {
            "type": "blind",
            "value": 75,
            "duration": 4
          }
        ]
      }
    ],
    "passive": {
      "id": "chaos_aura",
      "name": "Chaos Aura",
      "emoji": "🌀",
      "effect": "reflect",
      "value": 25
    }
  },
  "haunted_hollow_banshee": {
    "id": "haunted_hollow_banshee",
    "name": "💀 Wailborn Banshee",
    "location": [
      "haunted_hollow"
    ],
    "tier": 3,
    "stats": {
      "hp": 696,
      "mana": 720,
      "attack": 168,
      "defense": 76,
      "agility": 136
    },
    "drops": [
      {
        "item": "banshee_veil",
        "chance": 60,
        "min": 1,
        "max": 1
      }
    ],
    "xp": 200,
    "gold": {
      "min": 25,
      "max": 38
    },
    "skills": [
      {
        "id": "death_wail",
        "name": "Death Wail",
        "description": "Devastating scream",
        "manaCost": 30,
        "cooldown": 9,
        "damageType": "magical",
        "baseDamage": 30,
        "effects": [
          {
            "type": "debuff_def",
            "value": 15,
            "duration": 4
          }
        ]
      },
      {
        "id": "curse",
        "name": "Curse",
        "description": "Weakens all stats",
        "manaCost": 28,
        "cooldown": 9,
        "effects": [
          {
            "type": "debuff_atk",
            "value": 10,
            "duration": 4
          }
        ]
      }
    ],
    "passive": {
      "id": "death_touch",
      "name": "Death Touch",
      "emoji": "☠️",
      "effect": "poison_on_hit",
      "value": 10,
      "chance": 40,
      "duration": 4
    }
  },
  "iron_mine_rock_golem": {
    "id": "iron_mine_rock_golem",
    "name": "🗿 Ironvein Colossus",
    "location": [
      "iron_mine"
    ],
    "tier": 3,
    "stats": {
      "hp": 800,
      "mana": 400,
      "attack": 160,
      "defense": 144,
      "agility": 48
    },
    "drops": [
      {
        "item": "iron_ore",
        "chance": 85,
        "min": 3,
        "max": 6
      }
    ],
    "xp": 168,
    "gold": {
      "min": 18,
      "max": 28
    },
    "skills": [
      {
        "id": "earthquake",
        "name": "Earthquake",
        "description": "Ground slam",
        "manaCost": 28,
        "cooldown": 9,
        "damageType": "physical",
        "baseDamage": 28,
        "effects": [
          {
            "type": "stun",
            "value": 2,
            "duration": 4
          }
        ]
      },
      {
        "id": "stone_armor",
        "name": "Stone Armor",
        "description": "Hardens skin",
        "manaCost": 24,
        "cooldown": 9,
        "effects": [
          {
            "type": "buff_def",
            "value": 15,
            "duration": 4
          }
        ]
      }
    ],
    "passive": {
      "id": "stone_skin",
      "name": "Stone Skin",
      "emoji": "🪨",
      "effect": "defense_boost",
      "value": 15
    }
  },
  "iron_mine_ore_thief": {
    "id": "iron_mine_ore_thief",
    "name": "🥷 Delver Rogue",
    "location": [
      "iron_mine"
    ],
    "tier": 3,
    "stats": {
      "hp": 560,
      "mana": 520,
      "attack": 144,
      "defense": 80,
      "agility": 152
    },
    "drops": [
      {
        "item": "stolen_ore",
        "chance": 80,
        "min": 2,
        "max": 4
      }
    ],
    "xp": 160,
    "gold": {
      "min": 20,
      "max": 32
    },
    "skills": [
      {
        "id": "backstab",
        "name": "Backstab",
        "description": "Critical strike",
        "manaCost": 26,
        "cooldown": 9,
        "damageType": "physical",
        "baseDamage": 32,
        "effects": [
          {
            "type": "bleed",
            "value": 10,
            "duration": 4
          }
        ]
      },
      {
        "id": "smoke_bomb",
        "name": "Smoke Bomb",
        "description": "Escape move",
        "manaCost": 22,
        "cooldown": 9,
        "effects": [
          {
            "type": "evasion_buff",
            "value": 50,
            "duration": 4
          }
        ]
      }
    ],
    "passive": {
      "id": "critical_strike",
      "name": "Critical Strike",
      "emoji": "💥",
      "effect": "crit_chance",
      "value": 25
    }
  },
  "iron_mine_tunnel_rat": {
    "id": "iron_mine_tunnel_rat",
    "name": "🐀 Shaftskulker",
    "location": [
      "iron_mine"
    ],
    "tier": 3,
    "stats": {
      "hp": 564,
      "mana": 440,
      "attack": 144,
      "defense": 76,
      "agility": 176
    },
    "drops": [
      {
        "item": "rat_tooth",
        "chance": 75,
        "min": 2,
        "max": 5
      }
    ],
    "xp": 140,
    "gold": {
      "min": 15,
      "max": 24
    },
    "skills": [
      {
        "id": "disease_bite",
        "name": "Disease Bite",
        "description": "Infectious bite",
        "manaCost": 20,
        "cooldown": 9,
        "damageType": "physical",
        "baseDamage": 18,
        "effects": [
          {
            "type": "poison",
            "value": 9,
            "duration": 4
          }
        ]
      },
      {
        "id": "swarm",
        "name": "Swarm",
        "description": "Call reinforcements",
        "manaCost": 24,
        "cooldown": 9,
        "effects": [
          {
            "type": "buff_atk",
            "value": 12,
            "duration": 4
          }
        ]
      }
    ],
    "passive": {
      "id": "poison_touch",
      "name": "Poison Touch",
      "emoji": "☠️",
      "effect": "poison_on_hit",
      "value": 5,
      "chance": 35,
      "duration": 4
    }
  },
  "copper_canyon_bandit_chief": {
    "id": "copper_canyon_bandit_chief",
    "name": "👑 Coppercrown Warlord",
    "location": [
      "copper_canyon"
    ],
    "tier": 3,
    "stats": {
      "hp": 680,
      "mana": 480,
      "attack": 176,
      "defense": 112,
      "agility": 120
    },
    "drops": [
      {
        "item": "bandit_crown",
        "chance": 50,
        "min": 1,
        "max": 1
      }
    ],
    "xp": 192,
    "gold": {
      "min": 30,
      "max": 50
    },
    "skills": [
      {
        "id": "commanding_strike",
        "name": "Commanding Strike",
        "description": "Powerful slash",
        "manaCost": 28,
        "cooldown": 9,
        "damageType": "physical",
        "baseDamage": 30,
        "effects": [
          {
            "type": "debuff_def",
            "value": 12,
            "duration": 4
          }
        ]
      },
      {
        "id": "rally",
        "name": "Rally",
        "description": "Boosts power",
        "manaCost": 25,
        "cooldown": 9,
        "effects": [
          {
            "type": "buff_atk",
            "value": 15,
            "duration": 4
          }
        ]
      }
    ],
    "passive": {
      "id": "warlord",
      "name": "Warlord",
      "emoji": "⚔️",
      "effect": "attack_boost",
      "value": 12
    }
  },
  "copper_canyon_canyon_wolf": {
    "id": "copper_canyon_canyon_wolf",
    "name": "🐺 Gorge Fang",
    "location": [
      "copper_canyon"
    ],
    "tier": 3,
    "stats": {
      "hp": 600,
      "mana": 440,
      "attack": 152,
      "defense": 88,
      "agility": 136
    },
    "drops": [
      {
        "item": "wolf_pelt",
        "chance": 75,
        "min": 1,
        "max": 2
      }
    ],
    "xp": 168,
    "gold": {
      "min": 18,
      "max": 28
    },
    "skills": [
      {
        "id": "pack_hunt",
        "name": "Pack Hunt",
        "description": "Coordinated attack",
        "manaCost": 26,
        "cooldown": 9,
        "damageType": "physical",
        "baseDamage": 26,
        "effects": [
          {
            "type": "bleed",
            "value": 9,
            "duration": 4
          }
        ]
      },
      {
        "id": "howl",
        "name": "Howl",
        "description": "Intimidates enemy",
        "manaCost": 22,
        "cooldown": 9,
        "effects": [
          {
            "type": "debuff_atk",
            "value": 10,
            "duration": 4
          }
        ]
      }
    ],
    "passive": {
      "id": "enrage",
      "name": "Enrage",
      "emoji": "😡",
      "effect": "enrage",
      "value": 18,
      "threshold": 30
    }
  },
  "copper_canyon_rock_lizard": {
    "id": "copper_canyon_rock_lizard",
    "name": "🦎 Cliffskin Stalker",
    "location": [
      "copper_canyon"
    ],
    "tier": 3,
    "stats": {
      "hp": 696,
      "mana": 400,
      "attack": 160,
      "defense": 120,
      "agility": 96
    },
    "drops": [
      {
        "item": "lizard_scale",
        "chance": 80,
        "min": 2,
        "max": 4
      }
    ],
    "xp": 152,
    "gold": {
      "min": 16,
      "max": 26
    },
    "skills": [
      {
        "id": "tail_whip",
        "name": "Tail Whip",
        "description": "Sweeping attack",
        "manaCost": 24,
        "cooldown": 9,
        "damageType": "physical",
        "baseDamage": 22,
        "effects": [
          {
            "type": "slow",
            "value": 10,
            "duration": 4
          }
        ]
      },
      {
        "id": "camouflage",
        "name": "Camouflage",
        "description": "Blends in",
        "manaCost": 20,
        "cooldown": 9,
        "effects": [
          {
            "type": "evasion_buff",
            "value": 40,
            "duration": 4
          }
        ]
      }
    ],
    "passive": {
      "id": "iron_skin",
      "name": "Iron Skin",
      "emoji": "🛡️",
      "effect": "defense_boost",
      "value": 10
    }
  },
  "bandit_hideout_bandit_leader": {
    "id": "bandit_hideout_bandit_leader",
    "name": "👹 Ironbrand Marauder",
    "location": [
      "bandit_hideout"
    ],
    "tier": 3,
    "stats": {
      "hp": 760,
      "mana": 520,
      "attack": 192,
      "defense": 128,
      "agility": 128
    },
    "drops": [
      {
        "item": "legendary_sword",
        "chance": 40,
        "min": 1,
        "max": 1
      }
    ],
    "xp": 220,
    "gold": {
      "min": 40,
      "max": 65
    },
    "skills": [
      {
        "id": "dual_strike",
        "name": "Dual Strike",
        "description": "Two-weapon attack",
        "manaCost": 30,
        "cooldown": 9,
        "damageType": "physical",
        "baseDamage": 35,
        "effects": [
          {
            "type": "bleed",
            "value": 12,
            "duration": 4
          }
        ]
      },
      {
        "id": "battle_cry",
        "name": "Battle Cry",
        "description": "Empowers self",
        "manaCost": 28,
        "cooldown": 9,
        "effects": [
          {
            "type": "buff_atk",
            "value": 18,
            "duration": 4
          }
        ]
      }
    ],
    "passive": {
      "id": "berserker",
      "name": "Berserker",
      "emoji": "💢",
      "effect": "attack_boost",
      "value": 15
    }
  },
  "bandit_hideout_rogue": {
    "id": "bandit_hideout_rogue",
    "name": "🗡️ Voidstep Duelist",
    "location": [
      "bandit_hideout"
    ],
    "tier": 3,
    "stats": {
      "hp": 624,
      "mana": 560,
      "attack": 168,
      "defense": 96,
      "agility": 168
    },
    "drops": [
      {
        "item": "rogue_dagger",
        "chance": 65,
        "min": 1,
        "max": 2
      }
    ],
    "xp": 200,
    "gold": {
      "min": 35,
      "max": 55
    },
    "skills": [
      {
        "id": "poison_blade",
        "name": "Poison Blade",
        "description": "Venomous strike",
        "manaCost": 28,
        "cooldown": 9,
        "damageType": "physical",
        "baseDamage": 28,
        "effects": [
          {
            "type": "poison",
            "value": 11,
            "duration": 4
          }
        ]
      },
      {
        "id": "vanish",
        "name": "Vanish",
        "description": "Disappears",
        "manaCost": 26,
        "cooldown": 9,
        "effects": [
          {
            "type": "evasion_buff",
            "value": 60,
            "duration": 4
          }
        ]
      }
    ],
    "passive": {
      "id": "critical_strike",
      "name": "Critical Strike",
      "emoji": "💥",
      "effect": "crit_chance",
      "value": 30
    }
  },
  "bandit_hideout_assassin": {
    "id": "bandit_hideout_assassin",
    "name": "🥷 Phantom Blade",
    "location": [
      "bandit_hideout"
    ],
    "tier": 3,
    "stats": {
      "hp": 576,
      "mana": 600,
      "attack": 208,
      "defense": 80,
      "agility": 192
    },
    "drops": [
      {
        "item": "assassin_blade",
        "chance": 55,
        "min": 1,
        "max": 1
      }
    ],
    "xp": 208,
    "gold": {
      "min": 38,
      "max": 60
    },
    "skills": [
      {
        "id": "death_strike",
        "name": "Death Strike",
        "description": "Lethal blow",
        "manaCost": 32,
        "cooldown": 9,
        "damageType": "physical",
        "baseDamage": 40,
        "effects": [
          {
            "type": "bleed",
            "value": 15,
            "duration": 4
          }
        ]
      },
      {
        "id": "shadow_cloak",
        "name": "Shadow Cloak",
        "description": "Becomes invisible",
        "manaCost": 30,
        "cooldown": 9,
        "effects": [
          {
            "type": "evasion_buff",
            "value": 70,
            "duration": 4
          }
        ]
      }
    ],
    "passive": {
      "id": "deadly_precision",
      "name": "Deadly Precision",
      "emoji": "🎯",
      "effect": "crit_chance",
      "value": 35
    }
  },
  "green_meadow_rabbit": {
    "id": "green_meadow_rabbit",
    "name": "🐰 Meadow Scamper",
    "location": [
      "green_meadow"
    ],
    "tier": 1,
    "stats": {
      "hp": 20,
      "mana": 20,
      "attack": 3,
      "defense": 2,
      "agility": 8
    },
    "skills": [
      {
        "id": "quick_hop",
        "name": "Quick Hop",
        "description": "Dodge incoming attacks with agility",
        "manaCost": 8,
        "cooldown": 3,
        "effects": [
          {
            "type": "evasion_buff",
            "value": 25,
            "duration": 4
          }
        ]
      },
      {
        "id": "scratch",
        "name": "Scratch",
        "description": "Quick scratching attack that causes bleeding",
        "manaCost": 10,
        "cooldown": 4,
        "damageType": "physical",
        "baseDamage": 5,
        "effects": [
          {
            "type": "bleed",
            "value": 3,
            "duration": 4
          }
        ]
      }
    ],
    "drops": [
      {
        "item": "rabbit_fur",
        "chance": 80,
        "min": 1,
        "max": 2
      }
    ],
    "xp": 5,
    "gold": {
      "min": 1,
      "max": 3
    },
    "passive": {
      "id": "swift_strikes",
      "name": "Swift Strikes",
      "emoji": "⚡",
      "effect": "agility_boost",
      "value": 5
    }
  },
  "green_meadow_fox": {
    "id": "green_meadow_fox",
    "name": "🦊 Cunning Rustler",
    "location": [
      "green_meadow"
    ],
    "tier": 1,
    "stats": {
      "hp": 25,
      "mana": 25,
      "attack": 5,
      "defense": 3,
      "agility": 10
    },
    "skills": [
      {
        "id": "cunning_bite",
        "name": "Cunning Bite",
        "description": "A vicious bite that causes bleeding",
        "manaCost": 12,
        "cooldown": 3,
        "damageType": "physical",
        "baseDamage": 8,
        "effects": [
          {
            "type": "bleed",
            "value": 4,
            "duration": 4
          }
        ]
      },
      {
        "id": "fox_agility",
        "name": "Fox Agility",
        "description": "Increases evasion with fox-like reflexes",
        "manaCost": 10,
        "cooldown": 4,
        "effects": [
          {
            "type": "evasion_buff",
            "value": 30,
            "duration": 4
          }
        ]
      }
    ],
    "drops": [
      {
        "item": "fox_tail",
        "chance": 70,
        "min": 1,
        "max": 1
      }
    ],
    "xp": 8,
    "gold": {
      "min": 2,
      "max": 4
    },
    "passive": {
      "id": "nimble",
      "name": "Nimble",
      "emoji": "💨",
      "effect": "dodge_boost",
      "value": 15
    }
  },
  "green_meadow_wild_chicken": {
    "id": "green_meadow_wild_chicken",
    "name": "🐔 Featherfrenzied Hen",
    "location": [
      "green_meadow"
    ],
    "tier": 1,
    "stats": {
      "hp": 15,
      "mana": 20,
      "attack": 2,
      "defense": 1,
      "agility": 12
    },
    "skills": [
      {
        "id": "peck",
        "name": "Peck",
        "description": "Rapid pecking attack",
        "manaCost": 8,
        "cooldown": 3,
        "damageType": "physical",
        "baseDamage": 6,
        "effects": [
          {
            "type": "slow",
            "value": 3,
            "duration": 4
          }
        ]
      },
      {
        "id": "flutter",
        "name": "Flutter",
        "description": "Flutters around to avoid attacks",
        "manaCost": 10,
        "cooldown": 4,
        "effects": [
          {
            "type": "evasion_buff",
            "value": 20,
            "duration": 4
          }
        ]
      }
    ],
    "drops": [
      {
        "item": "chicken_feather",
        "chance": 90,
        "min": 1,
        "max": 3
      }
    ],
    "xp": 4,
    "gold": {
      "min": 1,
      "max": 2
    },
    "passive": {
      "id": "swift_strikes",
      "name": "Swift Strikes",
      "emoji": "⚡",
      "effect": "agility_boost",
      "value": 5
    }
  },
  "peaceful_forest_squirrel": {
    "id": "peaceful_forest_squirrel",
    "name": "🐿️ Leafdart Scurrier",
    "location": [
      "peaceful_forest"
    ],
    "tier": 1,
    "stats": {
      "hp": 18,
      "mana": 30,
      "attack": 3,
      "defense": 2,
      "agility": 15
    },
    "drops": [
      {
        "item": "acorn",
        "chance": 85,
        "min": 2,
        "max": 4
      }
    ],
    "xp": 5,
    "gold": {
      "min": 1,
      "max": 3
    },
    "skills": [
      {
        "id": "swift_strike",
        "name": "Swift Strike",
        "description": "Fast attack that slows enemy",
        "manaCost": 12,
        "cooldown": 9,
        "damageType": "physical",
        "baseDamage": 7,
        "effects": [
          {
            "type": "slow",
            "value": 5,
            "duration": 4
          }
        ]
      },
      {
        "id": "evasion",
        "name": "Evasion",
        "description": "Increases dodge chance",
        "manaCost": 10,
        "cooldown": 9,
        "effects": [
          {
            "type": "evasion_buff",
            "value": 30,
            "duration": 4
          }
        ]
      }
    ],
    "passive": {
      "id": "nimble",
      "name": "Nimble",
      "emoji": "💨",
      "effect": "dodge_boost",
      "value": 15
    }
  },
  "peaceful_forest_deer": {
    "id": "peaceful_forest_deer",
    "name": "🦌 Grazing Stag",
    "location": [
      "peaceful_forest"
    ],
    "tier": 1,
    "stats": {
      "hp": 30,
      "mana": 30,
      "attack": 4,
      "defense": 3,
      "agility": 9
    },
    "drops": [
      {
        "item": "deer_hide",
        "chance": 75,
        "min": 1,
        "max": 2
      }
    ],
    "xp": 10,
    "gold": {
      "min": 3,
      "max": 5
    },
    "skills": [
      {
        "id": "shell_defense",
        "name": "Shell Defense",
        "description": "Increases defense",
        "manaCost": 10,
        "cooldown": 9,
        "effects": [
          {
            "type": "buff_def",
            "value": 8,
            "duration": 4
          }
        ]
      },
      {
        "id": "counter_strike",
        "name": "Counter Strike",
        "description": "Reflects damage",
        "manaCost": 12,
        "cooldown": 9,
        "effects": [
          {
            "type": "reflect",
            "value": 30,
            "duration": 4
          }
        ]
      }
    ],
    "passive": {
      "id": "iron_skin",
      "name": "Iron Skin",
      "emoji": "🛡️",
      "effect": "defense_boost",
      "value": 5
    }
  },
  "peaceful_forest_small_wolf": {
    "id": "peaceful_forest_small_wolf",
    "name": "🐺 Pup Ravager",
    "location": [
      "peaceful_forest"
    ],
    "tier": 1,
    "stats": {
      "hp": 56,
      "mana": 60,
      "attack": 12,
      "defense": 8,
      "agility": 22
    },
    "drops": [
      {
        "item": "wolf_fang",
        "chance": 65,
        "min": 1,
        "max": 1
      }
    ],
    "xp": 9,
    "gold": {
      "min": 2,
      "max": 4
    },
    "skills": [
      {
        "id": "power_strike",
        "name": "Power Strike",
        "description": "Powerful attack",
        "manaCost": 15,
        "cooldown": 9,
        "damageType": "physical",
        "baseDamage": 12,
        "effects": [
          {
            "type": "debuff_def",
            "value": 5,
            "duration": 4
          }
        ]
      },
      {
        "id": "rage",
        "name": "Rage",
        "description": "Increases attack power",
        "manaCost": 12,
        "cooldown": 9,
        "effects": [
          {
            "type": "buff_atk",
            "value": 8,
            "duration": 4
          }
        ]
      }
    ],
    "passive": {
      "id": "enrage",
      "name": "Enrage",
      "emoji": "😡",
      "effect": "enrage",
      "value": 10,
      "threshold": 30
    }
  },
  "riverside_path_frog": {
    "id": "riverside_path_frog",
    "name": "🐸 Pondleap Toad",
    "location": [
      "riverside_path"
    ],
    "tier": 1,
    "stats": {
      "hp": 19,
      "mana": 30,
      "attack": 6,
      "defense": 3,
      "agility": 16
    },
    "drops": [
      {
        "item": "frog_leg",
        "chance": 80,
        "min": 1,
        "max": 2
      }
    ],
    "xp": 4,
    "gold": {
      "min": 1,
      "max": 2
    },
    "skills": [
      {
        "id": "quick_dodge",
        "name": "Quick Dodge",
        "description": "Dodge incoming attacks",
        "manaCost": 10,
        "cooldown": 9,
        "effects": [
          {
            "type": "evasion_buff",
            "value": 25,
            "duration": 4
          }
        ]
      },
      {
        "id": "scratch",
        "name": "Scratch",
        "description": "Quick scratching attack",
        "manaCost": 12,
        "cooldown": 9,
        "damageType": "physical",
        "baseDamage": 5,
        "effects": [
          {
            "type": "bleed",
            "value": 3,
            "duration": 4
          }
        ]
      }
    ],
    "passive": {
      "id": "nimble",
      "name": "Nimble",
      "emoji": "💨",
      "effect": "dodge_boost",
      "value": 15
    }
  },
  "riverside_path_crab": {
    "id": "riverside_path_crab",
    "name": "🦀 Cliffclaw Pincer",
    "location": [
      "riverside_path"
    ],
    "tier": 1,
    "stats": {
      "hp": 25,
      "mana": 30,
      "attack": 8,
      "defense": 7,
      "agility": 6
    },
    "drops": [
      {
        "item": "crab_shell",
        "chance": 75,
        "min": 1,
        "max": 1
      }
    ],
    "xp": 7,
    "gold": {
      "min": 2,
      "max": 3
    },
    "skills": [
      {
        "id": "shell_defense",
        "name": "Shell Defense",
        "description": "Increases defense",
        "manaCost": 10,
        "cooldown": 9,
        "effects": [
          {
            "type": "buff_def",
            "value": 8,
            "duration": 4
          }
        ]
      },
      {
        "id": "counter_strike",
        "name": "Counter Strike",
        "description": "Reflects damage",
        "manaCost": 12,
        "cooldown": 9,
        "effects": [
          {
            "type": "reflect",
            "value": 30,
            "duration": 4
          }
        ]
      }
    ],
    "passive": {
      "id": "iron_skin",
      "name": "Iron Skin",
      "emoji": "🛡️",
      "effect": "defense_boost",
      "value": 5
    }
  },
  "riverside_path_small_fish": {
    "id": "riverside_path_small_fish",
    "name": "🐟 Shimmerscale Pike",
    "location": [
      "riverside_path"
    ],
    "tier": 1,
    "stats": {
      "hp": 18,
      "mana": 30,
      "attack": 6,
      "defense": 3,
      "agility": 17
    },
    "drops": [
      {
        "item": "fish_scale",
        "chance": 90,
        "min": 2,
        "max": 5
      }
    ],
    "xp": 3,
    "gold": {
      "min": 1,
      "max": 2
    },
    "skills": [
      {
        "id": "swift_strike",
        "name": "Swift Strike",
        "description": "Fast attack that slows enemy",
        "manaCost": 12,
        "cooldown": 9,
        "damageType": "physical",
        "baseDamage": 7,
        "effects": [
          {
            "type": "slow",
            "value": 5,
            "duration": 4
          }
        ]
      },
      {
        "id": "evasion",
        "name": "Evasion",
        "description": "Increases dodge chance",
        "manaCost": 10,
        "cooldown": 9,
        "effects": [
          {
            "type": "evasion_buff",
            "value": 30,
            "duration": 4
          }
        ]
      }
    ],
    "passive": {
      "id": "swift_strikes",
      "name": "Swift Strikes",
      "emoji": "⚡",
      "effect": "agility_boost",
      "value": 5
    }
  },
  "sunny_hills_bandit": {
    "id": "sunny_hills_bandit",
    "name": "🗡️ Sunhill Brigand",
    "location": [
      "sunny_hills"
    ],
    "tier": 1,
    "stats": {
      "hp": 35,
      "mana": 30,
      "attack": 7,
      "defense": 5,
      "agility": 8
    },
    "drops": [
      {
        "item": "rusty_dagger",
        "chance": 60,
        "min": 1,
        "max": 1
      }
    ],
    "xp": 12,
    "gold": {
      "min": 5,
      "max": 10
    },
    "skills": [
      {
        "id": "dirty_trick",
        "name": "Dirty Trick",
        "description": "Blinds and confuses",
        "manaCost": 12,
        "cooldown": 9,
        "effects": [
          {
            "type": "blind",
            "value": 50,
            "duration": 4
          }
        ]
      },
      {
        "id": "steal",
        "name": "Steal",
        "description": "Drains health",
        "manaCost": 15,
        "cooldown": 9,
        "effects": [
          {
            "type": "drain",
            "value": 15,
            "duration": 1
          }
        ]
      }
    ],
    "passive": {
      "id": "power_surge",
      "name": "Power Surge",
      "emoji": "💪",
      "effect": "attack_boost",
      "value": 5
    }
  },
  "sunny_hills_thief": {
    "id": "sunny_hills_thief",
    "name": "🥷 Pilfering Shade",
    "location": [
      "sunny_hills"
    ],
    "tier": 1,
    "stats": {
      "hp": 28,
      "mana": 30,
      "attack": 6,
      "defense": 3,
      "agility": 13
    },
    "drops": [
      {
        "item": "stolen_coin",
        "chance": 85,
        "min": 3,
        "max": 8
      }
    ],
    "xp": 10,
    "gold": {
      "min": 8,
      "max": 15
    },
    "skills": [
      {
        "id": "dirty_trick",
        "name": "Dirty Trick",
        "description": "Blinds and confuses",
        "manaCost": 12,
        "cooldown": 9,
        "effects": [
          {
            "type": "blind",
            "value": 50,
            "duration": 4
          }
        ]
      },
      {
        "id": "steal",
        "name": "Steal",
        "description": "Drains health",
        "manaCost": 15,
        "cooldown": 9,
        "effects": [
          {
            "type": "drain",
            "value": 15,
            "duration": 1
          }
        ]
      }
    ],
    "passive": {
      "id": "nimble",
      "name": "Nimble",
      "emoji": "💨",
      "effect": "dodge_boost",
      "value": 15
    }
  },
  "sunny_hills_rat": {
    "id": "sunny_hills_rat",
    "name": "🐀 Hilldweller Rat",
    "location": [
      "sunny_hills"
    ],
    "tier": 1,
    "stats": {
      "hp": 16,
      "mana": 30,
      "attack": 4,
      "defense": 2,
      "agility": 11
    },
    "drops": [
      {
        "item": "rat_tail",
        "chance": 70,
        "min": 1,
        "max": 2
      }
    ],
    "xp": 5,
    "gold": {
      "min": 1,
      "max": 3
    },
    "skills": [
      {
        "id": "quick_dodge",
        "name": "Quick Dodge",
        "description": "Dodge incoming attacks",
        "manaCost": 10,
        "cooldown": 9,
        "effects": [
          {
            "type": "evasion_buff",
            "value": 25,
            "duration": 4
          }
        ]
      },
      {
        "id": "scratch",
        "name": "Scratch",
        "description": "Quick scratching attack",
        "manaCost": 12,
        "cooldown": 9,
        "damageType": "physical",
        "baseDamage": 5,
        "effects": [
          {
            "type": "bleed",
            "value": 3,
            "duration": 4
          }
        ]
      }
    ],
    "passive": {
      "id": "swift_strikes",
      "name": "Swift Strikes",
      "emoji": "⚡",
      "effect": "agility_boost",
      "value": 5
    }
  },
  "flower_garden_bee": {
    "id": "flower_garden_bee",
    "name": "🐝 Pollensting",
    "location": [
      "flower_garden"
    ],
    "tier": 1,
    "stats": {
      "hp": 16,
      "mana": 30,
      "attack": 5,
      "defense": 2,
      "agility": 18
    },
    "drops": [
      {
        "item": "honey",
        "chance": 80,
        "min": 1,
        "max": 2
      }
    ],
    "xp": 6,
    "gold": {
      "min": 2,
      "max": 4
    },
    "skills": [
      {
        "id": "poison_bite",
        "name": "Poison Bite",
        "description": "Venomous bite that poisons",
        "manaCost": 15,
        "cooldown": 9,
        "damageType": "physical",
        "baseDamage": 6,
        "effects": [
          {
            "type": "poison",
            "value": 5,
            "duration": 4
          }
        ]
      },
      {
        "id": "toxic_spit",
        "name": "Toxic Spit",
        "description": "Spits poison",
        "manaCost": 12,
        "cooldown": 9,
        "damageType": "magical",
        "baseDamage": 5,
        "effects": [
          {
            "type": "poison",
            "value": 4,
            "duration": 4
          }
        ]
      }
    ],
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
  "flower_garden_butterfly": {
    "id": "flower_garden_butterfly",
    "name": "🦋 Gossamer Moth",
    "location": [
      "flower_garden"
    ],
    "tier": 1,
    "stats": {
      "hp": 17,
      "mana": 30,
      "attack": 5,
      "defense": 2,
      "agility": 21
    },
    "drops": [
      {
        "item": "butterfly_wing",
        "chance": 75,
        "min": 1,
        "max": 1
      }
    ],
    "xp": 3,
    "gold": {
      "min": 1,
      "max": 2
    },
    "skills": [
      {
        "id": "swift_strike",
        "name": "Swift Strike",
        "description": "Fast attack that slows enemy",
        "manaCost": 12,
        "cooldown": 9,
        "damageType": "physical",
        "baseDamage": 7,
        "effects": [
          {
            "type": "slow",
            "value": 5,
            "duration": 4
          }
        ]
      },
      {
        "id": "evasion",
        "name": "Evasion",
        "description": "Increases dodge chance",
        "manaCost": 10,
        "cooldown": 9,
        "effects": [
          {
            "type": "evasion_buff",
            "value": 30,
            "duration": 4
          }
        ]
      }
    ],
    "passive": {
      "id": "nimble",
      "name": "Nimble",
      "emoji": "💨",
      "effect": "dodge_boost",
      "value": 15
    }
  },
  "flower_garden_ladybug": {
    "id": "flower_garden_ladybug",
    "name": "🐞 Scarletshell",
    "location": [
      "flower_garden"
    ],
    "tier": 1,
    "stats": {
      "hp": 16,
      "mana": 30,
      "attack": 5,
      "defense": 3,
      "agility": 10
    },
    "drops": [
      {
        "item": "ladybug_shell",
        "chance": 70,
        "min": 1,
        "max": 1
      }
    ],
    "xp": 4,
    "gold": {
      "min": 1,
      "max": 2
    },
    "skills": [
      {
        "id": "shell_defense",
        "name": "Shell Defense",
        "description": "Increases defense",
        "manaCost": 10,
        "cooldown": 9,
        "effects": [
          {
            "type": "buff_def",
            "value": 8,
            "duration": 4
          }
        ]
      },
      {
        "id": "counter_strike",
        "name": "Counter Strike",
        "description": "Reflects damage",
        "manaCost": 12,
        "cooldown": 9,
        "effects": [
          {
            "type": "reflect",
            "value": 30,
            "duration": 4
          }
        ]
      }
    ],
    "passive": {
      "id": "iron_skin",
      "name": "Iron Skin",
      "emoji": "🛡️",
      "effect": "defense_boost",
      "value": 5
    }
  },
  "old_bridge_goblin": {
    "id": "old_bridge_goblin",
    "name": "👺 Bridgeguard Gremlin",
    "location": [
      "old_bridge"
    ],
    "tier": 1,
    "stats": {
      "hp": 80,
      "mana": 60,
      "attack": 16,
      "defense": 10,
      "agility": 18
    },
    "drops": [
      {
        "item": "goblin_ear",
        "chance": 70,
        "min": 1,
        "max": 1
      }
    ],
    "xp": 15,
    "gold": {
      "min": 5,
      "max": 12
    },
    "skills": [
      {
        "id": "dirty_trick",
        "name": "Dirty Trick",
        "description": "Blinds and confuses",
        "manaCost": 12,
        "cooldown": 9,
        "effects": [
          {
            "type": "blind",
            "value": 50,
            "duration": 4
          }
        ]
      },
      {
        "id": "steal",
        "name": "Steal",
        "description": "Drains health",
        "manaCost": 15,
        "cooldown": 9,
        "effects": [
          {
            "type": "drain",
            "value": 15,
            "duration": 1
          }
        ]
      }
    ],
    "passive": {
      "id": "power_surge",
      "name": "Power Surge",
      "emoji": "💪",
      "effect": "attack_boost",
      "value": 5
    }
  },
  "old_bridge_troll": {
    "id": "old_bridge_troll",
    "name": "🧌 Stonehide Troll",
    "location": [
      "old_bridge"
    ],
    "tier": 1,
    "stats": {
      "hp": 100,
      "mana": 60,
      "attack": 20,
      "defense": 16,
      "agility": 10
    },
    "drops": [
      {
        "item": "troll_hide",
        "chance": 65,
        "min": 1,
        "max": 1
      }
    ],
    "xp": 18,
    "gold": {
      "min": 8,
      "max": 15
    },
    "skills": [
      {
        "id": "heavy_slam",
        "name": "Heavy Slam",
        "description": "Powerful slam attack",
        "manaCost": 18,
        "cooldown": 9,
        "damageType": "physical",
        "baseDamage": 15,
        "effects": [
          {
            "type": "stun",
            "value": 1,
            "duration": 4
          }
        ]
      },
      {
        "id": "intimidate",
        "name": "Intimidate",
        "description": "Weakens enemy attack",
        "manaCost": 12,
        "cooldown": 9,
        "effects": [
          {
            "type": "debuff_atk",
            "value": 6,
            "duration": 4
          }
        ]
      }
    ],
    "passive": {
      "id": "regeneration",
      "name": "Regeneration",
      "emoji": "💚",
      "effect": "regen",
      "value": 5
    }
  },
  "old_bridge_bat": {
    "id": "old_bridge_bat",
    "name": "🦇 Nightshriek Bat",
    "location": [
      "old_bridge"
    ],
    "tier": 1,
    "stats": {
      "hp": 40,
      "mana": 60,
      "attack": 10,
      "defense": 4,
      "agility": 34
    },
    "drops": [
      {
        "item": "bat_wing",
        "chance": 75,
        "min": 1,
        "max": 2
      }
    ],
    "xp": 8,
    "gold": {
      "min": 2,
      "max": 5
    },
    "skills": [
      {
        "id": "dive_attack",
        "name": "Dive Attack",
        "description": "Diving strike from above",
        "manaCost": 14,
        "cooldown": 9,
        "damageType": "physical",
        "baseDamage": 10,
        "effects": [
          {
            "type": "stun",
            "value": 1,
            "duration": 4
          }
        ]
      },
      {
        "id": "wing_gust",
        "name": "Wing Gust",
        "description": "Blinds enemy with wind",
        "manaCost": 12,
        "cooldown": 9,
        "effects": [
          {
            "type": "blind",
            "value": 50,
            "duration": 4
          }
        ]
      }
    ],
    "passive": {
      "id": "vampiric",
      "name": "Vampiric",
      "emoji": "🧛",
      "effect": "lifesteal",
      "value": 20
    }
  },
  "sandy_beach_crab": {
    "id": "sandy_beach_crab",
    "name": "🦀 Sandhusk Pincer",
    "location": [
      "sandy_beach"
    ],
    "tier": 1,
    "stats": {
      "hp": 24,
      "mana": 30,
      "attack": 6,
      "defense": 7,
      "agility": 6
    },
    "drops": [
      {
        "item": "crab_claw",
        "chance": 80,
        "min": 1,
        "max": 2
      }
    ],
    "xp": 8,
    "gold": {
      "min": 2,
      "max": 4
    },
    "skills": [
      {
        "id": "shell_defense",
        "name": "Shell Defense",
        "description": "Increases defense",
        "manaCost": 10,
        "cooldown": 9,
        "effects": [
          {
            "type": "buff_def",
            "value": 8,
            "duration": 4
          }
        ]
      },
      {
        "id": "counter_strike",
        "name": "Counter Strike",
        "description": "Reflects damage",
        "manaCost": 12,
        "cooldown": 9,
        "effects": [
          {
            "type": "reflect",
            "value": 30,
            "duration": 4
          }
        ]
      }
    ],
    "passive": {
      "id": "stone_skin",
      "name": "Stone Skin",
      "emoji": "🪨",
      "effect": "defense_boost",
      "value": 8
    }
  },
  "sandy_beach_seagull": {
    "id": "sandy_beach_seagull",
    "name": "🕊️ Seawind Marauder",
    "location": [
      "sandy_beach"
    ],
    "tier": 1,
    "stats": {
      "hp": 18,
      "mana": 30,
      "attack": 4,
      "defense": 2,
      "agility": 15
    },
    "drops": [
      {
        "item": "seagull_feather",
        "chance": 75,
        "min": 1,
        "max": 3
      }
    ],
    "xp": 6,
    "gold": {
      "min": 1,
      "max": 3
    },
    "skills": [
      {
        "id": "dive_attack",
        "name": "Dive Attack",
        "description": "Diving strike from above",
        "manaCost": 14,
        "cooldown": 9,
        "damageType": "physical",
        "baseDamage": 10,
        "effects": [
          {
            "type": "stun",
            "value": 1,
            "duration": 4
          }
        ]
      },
      {
        "id": "wing_gust",
        "name": "Wing Gust",
        "description": "Blinds enemy with wind",
        "manaCost": 12,
        "cooldown": 9,
        "effects": [
          {
            "type": "blind",
            "value": 50,
            "duration": 4
          }
        ]
      }
    ],
    "passive": {
      "id": "nimble",
      "name": "Nimble",
      "emoji": "💨",
      "effect": "dodge_boost",
      "value": 15
    }
  },
  "sandy_beach_starfish": {
    "id": "sandy_beach_starfish",
    "name": "⭐ Tidespawn",
    "location": [
      "sandy_beach"
    ],
    "tier": 1,
    "stats": {
      "hp": 18,
      "mana": 30,
      "attack": 6,
      "defense": 4,
      "agility": 3
    },
    "drops": [
      {
        "item": "starfish_arm",
        "chance": 70,
        "min": 1,
        "max": 1
      }
    ],
    "xp": 5,
    "gold": {
      "min": 1,
      "max": 2
    },
    "skills": [
      {
        "id": "shell_defense",
        "name": "Shell Defense",
        "description": "Increases defense",
        "manaCost": 10,
        "cooldown": 9,
        "effects": [
          {
            "type": "buff_def",
            "value": 8,
            "duration": 4
          }
        ]
      },
      {
        "id": "counter_strike",
        "name": "Counter Strike",
        "description": "Reflects damage",
        "manaCost": 12,
        "cooldown": 9,
        "effects": [
          {
            "type": "reflect",
            "value": 30,
            "duration": 4
          }
        ]
      }
    ],
    "passive": {
      "id": "regeneration",
      "name": "Regeneration",
      "emoji": "💚",
      "effect": "regen",
      "value": 5
    }
  },
  "shallow_pond_turtle": {
    "id": "shallow_pond_turtle",
    "name": "🐢 Shellplate Elder",
    "location": [
      "shallow_pond"
    ],
    "tier": 1,
    "stats": {
      "hp": 30,
      "mana": 30,
      "attack": 3,
      "defense": 10,
      "agility": 4
    },
    "drops": [
      {
        "item": "turtle_shell",
        "chance": 65,
        "min": 1,
        "max": 1
      }
    ],
    "xp": 9,
    "gold": {
      "min": 2,
      "max": 4
    },
    "skills": [
      {
        "id": "shell_defense",
        "name": "Shell Defense",
        "description": "Increases defense",
        "manaCost": 10,
        "cooldown": 9,
        "effects": [
          {
            "type": "buff_def",
            "value": 8,
            "duration": 4
          }
        ]
      },
      {
        "id": "counter_strike",
        "name": "Counter Strike",
        "description": "Reflects damage",
        "manaCost": 12,
        "cooldown": 9,
        "effects": [
          {
            "type": "reflect",
            "value": 30,
            "duration": 4
          }
        ]
      }
    ],
    "passive": {
      "id": "stone_skin",
      "name": "Stone Skin",
      "emoji": "🪨",
      "effect": "defense_boost",
      "value": 8
    }
  },
  "shallow_pond_fish": {
    "id": "shallow_pond_fish",
    "name": "🐠 Dapplefin",
    "location": [
      "shallow_pond"
    ],
    "tier": 1,
    "stats": {
      "hp": 18,
      "mana": 30,
      "attack": 6,
      "defense": 3,
      "agility": 14
    },
    "drops": [
      {
        "item": "fresh_fish",
        "chance": 85,
        "min": 1,
        "max": 2
      }
    ],
    "xp": 4,
    "gold": {
      "min": 1,
      "max": 3
    },
    "skills": [
      {
        "id": "swift_strike",
        "name": "Swift Strike",
        "description": "Fast attack that slows enemy",
        "manaCost": 12,
        "cooldown": 9,
        "damageType": "physical",
        "baseDamage": 7,
        "effects": [
          {
            "type": "slow",
            "value": 5,
            "duration": 4
          }
        ]
      },
      {
        "id": "evasion",
        "name": "Evasion",
        "description": "Increases dodge chance",
        "manaCost": 10,
        "cooldown": 9,
        "effects": [
          {
            "type": "evasion_buff",
            "value": 30,
            "duration": 4
          }
        ]
      }
    ],
    "passive": {
      "id": "swift_strikes",
      "name": "Swift Strikes",
      "emoji": "⚡",
      "effect": "agility_boost",
      "value": 5
    }
  },
  "shallow_pond_frog": {
    "id": "shallow_pond_frog",
    "name": "🐸 Murkjaw",
    "location": [
      "shallow_pond"
    ],
    "tier": 1,
    "stats": {
      "hp": 18,
      "mana": 30,
      "attack": 6,
      "defense": 3,
      "agility": 13
    },
    "drops": [
      {
        "item": "frog_skin",
        "chance": 75,
        "min": 1,
        "max": 1
      }
    ],
    "xp": 5,
    "gold": {
      "min": 1,
      "max": 2
    },
    "skills": [
      {
        "id": "poison_bite",
        "name": "Poison Bite",
        "description": "Venomous bite that poisons",
        "manaCost": 15,
        "cooldown": 9,
        "damageType": "physical",
        "baseDamage": 6,
        "effects": [
          {
            "type": "poison",
            "value": 5,
            "duration": 4
          }
        ]
      },
      {
        "id": "toxic_spit",
        "name": "Toxic Spit",
        "description": "Spits poison",
        "manaCost": 12,
        "cooldown": 9,
        "damageType": "magical",
        "baseDamage": 5,
        "effects": [
          {
            "type": "poison",
            "value": 4,
            "duration": 4
          }
        ]
      }
    ],
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
  "misty_grove_owl": {
    "id": "misty_grove_owl",
    "name": "🦉 Mistgaze Sentinel",
    "location": [
      "misty_grove"
    ],
    "tier": 1,
    "stats": {
      "hp": 64,
      "mana": 60,
      "attack": 14,
      "defense": 8,
      "agility": 24
    },
    "drops": [
      {
        "item": "owl_feather",
        "chance": 70,
        "min": 1,
        "max": 2
      }
    ],
    "xp": 12,
    "gold": {
      "min": 3,
      "max": 6
    },
    "skills": [
      {
        "id": "dive_attack",
        "name": "Dive Attack",
        "description": "Diving strike from above",
        "manaCost": 14,
        "cooldown": 9,
        "damageType": "physical",
        "baseDamage": 10,
        "effects": [
          {
            "type": "stun",
            "value": 1,
            "duration": 4
          }
        ]
      },
      {
        "id": "wing_gust",
        "name": "Wing Gust",
        "description": "Blinds enemy with wind",
        "manaCost": 12,
        "cooldown": 9,
        "effects": [
          {
            "type": "blind",
            "value": 50,
            "duration": 4
          }
        ]
      }
    ],
    "passive": {
      "id": "nimble",
      "name": "Nimble",
      "emoji": "💨",
      "effect": "dodge_boost",
      "value": 15
    }
  },
  "misty_grove_raccoon": {
    "id": "misty_grove_raccoon",
    "name": "🦝 Shadowmask Scavenger",
    "location": [
      "misty_grove"
    ],
    "tier": 1,
    "stats": {
      "hp": 28,
      "mana": 30,
      "attack": 6,
      "defense": 4,
      "agility": 11
    },
    "drops": [
      {
        "item": "raccoon_fur",
        "chance": 75,
        "min": 1,
        "max": 1
      }
    ],
    "xp": 10,
    "gold": {
      "min": 4,
      "max": 8
    },
    "skills": [
      {
        "id": "swift_strike",
        "name": "Swift Strike",
        "description": "Fast attack that slows enemy",
        "manaCost": 12,
        "cooldown": 9,
        "damageType": "physical",
        "baseDamage": 7,
        "effects": [
          {
            "type": "slow",
            "value": 5,
            "duration": 4
          }
        ]
      },
      {
        "id": "evasion",
        "name": "Evasion",
        "description": "Increases dodge chance",
        "manaCost": 10,
        "cooldown": 9,
        "effects": [
          {
            "type": "evasion_buff",
            "value": 30,
            "duration": 4
          }
        ]
      }
    ],
    "passive": {
      "id": "lucky_strike",
      "name": "Lucky Strike",
      "emoji": "🍀",
      "effect": "luck_boost",
      "value": 5
    }
  },
  "misty_grove_snake": {
    "id": "misty_grove_snake",
    "name": "🐍 Fen Adder",
    "location": [
      "misty_grove"
    ],
    "tier": 1,
    "stats": {
      "hp": 48,
      "mana": 60,
      "attack": 14,
      "defense": 6,
      "agility": 26
    },
    "drops": [
      {
        "item": "snake_skin",
        "chance": 70,
        "min": 1,
        "max": 1
      }
    ],
    "xp": 11,
    "gold": {
      "min": 3,
      "max": 6
    },
    "skills": [
      {
        "id": "poison_bite",
        "name": "Poison Bite",
        "description": "Venomous bite that poisons",
        "manaCost": 15,
        "cooldown": 9,
        "damageType": "physical",
        "baseDamage": 6,
        "effects": [
          {
            "type": "poison",
            "value": 5,
            "duration": 4
          }
        ]
      },
      {
        "id": "toxic_spit",
        "name": "Toxic Spit",
        "description": "Spits poison",
        "manaCost": 12,
        "cooldown": 9,
        "damageType": "magical",
        "baseDamage": 5,
        "effects": [
          {
            "type": "poison",
            "value": 4,
            "duration": 4
          }
        ]
      }
    ],
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
  "mushroom_patch_slug": {
    "id": "mushroom_patch_slug",
    "name": "🐌 Mycelia Oozer",
    "location": [
      "mushroom_patch"
    ],
    "tier": 1,
    "stats": {
      "hp": 40,
      "mana": 60,
      "attack": 6,
      "defense": 4,
      "agility": 6
    },
    "drops": [
      {
        "item": "slug_slime",
        "chance": 85,
        "min": 1,
        "max": 3
      }
    ],
    "xp": 7,
    "gold": {
      "min": 2,
      "max": 4
    },
    "skills": [
      {
        "id": "poison_bite",
        "name": "Poison Bite",
        "description": "Venomous bite that poisons",
        "manaCost": 15,
        "cooldown": 9,
        "damageType": "physical",
        "baseDamage": 6,
        "effects": [
          {
            "type": "poison",
            "value": 5,
            "duration": 4
          }
        ]
      },
      {
        "id": "toxic_spit",
        "name": "Toxic Spit",
        "description": "Spits poison",
        "manaCost": 12,
        "cooldown": 9,
        "damageType": "magical",
        "baseDamage": 5,
        "effects": [
          {
            "type": "poison",
            "value": 4,
            "duration": 4
          }
        ]
      }
    ],
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
  "mushroom_patch_snail": {
    "id": "mushroom_patch_snail",
    "name": "🐚 Sporecoil Shell",
    "location": [
      "mushroom_patch"
    ],
    "tier": 1,
    "stats": {
      "hp": 50,
      "mana": 60,
      "attack": 4,
      "defense": 16,
      "agility": 4
    },
    "drops": [
      {
        "item": "snail_shell",
        "chance": 75,
        "min": 1,
        "max": 1
      }
    ],
    "xp": 8,
    "gold": {
      "min": 2,
      "max": 5
    },
    "skills": [
      {
        "id": "shell_defense",
        "name": "Shell Defense",
        "description": "Increases defense",
        "manaCost": 10,
        "cooldown": 9,
        "effects": [
          {
            "type": "buff_def",
            "value": 8,
            "duration": 4
          }
        ]
      },
      {
        "id": "counter_strike",
        "name": "Counter Strike",
        "description": "Reflects damage",
        "manaCost": 12,
        "cooldown": 9,
        "effects": [
          {
            "type": "reflect",
            "value": 30,
            "duration": 4
          }
        ]
      }
    ],
    "passive": {
      "id": "stone_skin",
      "name": "Stone Skin",
      "emoji": "🪨",
      "effect": "defense_boost",
      "value": 8
    }
  },
  "mushroom_patch_beetle": {
    "id": "mushroom_patch_beetle",
    "name": "🪲 Fungusbacked Beetle",
    "location": [
      "mushroom_patch"
    ],
    "tier": 1,
    "stats": {
      "hp": 44,
      "mana": 60,
      "attack": 10,
      "defense": 12,
      "agility": 14
    },
    "drops": [
      {
        "item": "beetle_shell",
        "chance": 70,
        "min": 1,
        "max": 1
      }
    ],
    "xp": 9,
    "gold": {
      "min": 2,
      "max": 4
    },
    "skills": [
      {
        "id": "shell_defense",
        "name": "Shell Defense",
        "description": "Increases defense",
        "manaCost": 10,
        "cooldown": 9,
        "effects": [
          {
            "type": "buff_def",
            "value": 8,
            "duration": 4
          }
        ]
      },
      {
        "id": "counter_strike",
        "name": "Counter Strike",
        "description": "Reflects damage",
        "manaCost": 12,
        "cooldown": 9,
        "effects": [
          {
            "type": "reflect",
            "value": 30,
            "duration": 4
          }
        ]
      }
    ],
    "passive": {
      "id": "iron_skin",
      "name": "Iron Skin",
      "emoji": "🛡️",
      "effect": "defense_boost",
      "value": 5
    }
  },
  "berry_thicket_bear_cub": {
    "id": "berry_thicket_bear_cub",
    "name": "🐻 Brambleclaw Cub",
    "location": [
      "berry_thicket"
    ],
    "tier": 1,
    "stats": {
      "hp": 90,
      "mana": 60,
      "attack": 18,
      "defense": 12,
      "agility": 14
    },
    "drops": [
      {
        "item": "bear_claw",
        "chance": 65,
        "min": 1,
        "max": 1
      }
    ],
    "xp": 16,
    "gold": {
      "min": 5,
      "max": 10
    },
    "skills": [
      {
        "id": "heavy_slam",
        "name": "Heavy Slam",
        "description": "Powerful slam attack",
        "manaCost": 18,
        "cooldown": 9,
        "damageType": "physical",
        "baseDamage": 15,
        "effects": [
          {
            "type": "stun",
            "value": 1,
            "duration": 4
          }
        ]
      },
      {
        "id": "intimidate",
        "name": "Intimidate",
        "description": "Weakens enemy attack",
        "manaCost": 12,
        "cooldown": 9,
        "effects": [
          {
            "type": "debuff_atk",
            "value": 6,
            "duration": 4
          }
        ]
      }
    ],
    "passive": {
      "id": "enrage",
      "name": "Enrage",
      "emoji": "😡",
      "effect": "enrage",
      "value": 10,
      "threshold": 30
    }
  },
  "berry_thicket_boar": {
    "id": "berry_thicket_boar",
    "name": "🐗 Thornhide Charger",
    "location": [
      "berry_thicket"
    ],
    "tier": 1,
    "stats": {
      "hp": 80,
      "mana": 60,
      "attack": 16,
      "defense": 10,
      "agility": 12
    },
    "drops": [
      {
        "item": "boar_tusk",
        "chance": 70,
        "min": 1,
        "max": 1
      }
    ],
    "xp": 14,
    "gold": {
      "min": 4,
      "max": 8
    },
    "skills": [
      {
        "id": "power_strike",
        "name": "Power Strike",
        "description": "Powerful attack",
        "manaCost": 15,
        "cooldown": 9,
        "damageType": "physical",
        "baseDamage": 12,
        "effects": [
          {
            "type": "debuff_def",
            "value": 5,
            "duration": 4
          }
        ]
      },
      {
        "id": "rage",
        "name": "Rage",
        "description": "Increases attack power",
        "manaCost": 12,
        "cooldown": 9,
        "effects": [
          {
            "type": "buff_atk",
            "value": 8,
            "duration": 4
          }
        ]
      }
    ],
    "passive": {
      "id": "berserker_rage",
      "name": "Berserker Rage",
      "emoji": "💢",
      "effect": "berserker_rage",
      "value": 15,
      "defensePenalty": 5,
      "threshold": 20
    }
  },
  "berry_thicket_hedgehog": {
    "id": "berry_thicket_hedgehog",
    "name": "🦔 Spineback Wanderer",
    "location": [
      "berry_thicket"
    ],
    "tier": 1,
    "stats": {
      "hp": 52,
      "mana": 60,
      "attack": 10,
      "defense": 14,
      "agility": 16
    },
    "drops": [
      {
        "item": "hedgehog_spine",
        "chance": 75,
        "min": 2,
        "max": 4
      }
    ],
    "xp": 10,
    "gold": {
      "min": 3,
      "max": 6
    },
    "skills": [
      {
        "id": "shell_defense",
        "name": "Shell Defense",
        "description": "Increases defense",
        "manaCost": 10,
        "cooldown": 9,
        "effects": [
          {
            "type": "buff_def",
            "value": 8,
            "duration": 4
          }
        ]
      },
      {
        "id": "counter_strike",
        "name": "Counter Strike",
        "description": "Reflects damage",
        "manaCost": 12,
        "cooldown": 9,
        "effects": [
          {
            "type": "reflect",
            "value": 30,
            "duration": 4
          }
        ]
      }
    ],
    "passive": {
      "id": "thorns",
      "name": "Thorns",
      "emoji": "🌵",
      "effect": "thorns",
      "value": 5
    }
  },
  "rocky_path_lizard": {
    "id": "rocky_path_lizard",
    "name": "🦎 Scalecragger",
    "location": [
      "rocky_path"
    ],
    "tier": 1,
    "stats": {
      "hp": 56,
      "mana": 60,
      "attack": 12,
      "defense": 8,
      "agility": 24
    },
    "drops": [
      {
        "item": "lizard_tail",
        "chance": 80,
        "min": 1,
        "max": 1
      }
    ],
    "xp": 11,
    "gold": {
      "min": 3,
      "max": 6
    },
    "skills": [
      {
        "id": "swift_strike",
        "name": "Swift Strike",
        "description": "Fast attack that slows enemy",
        "manaCost": 12,
        "cooldown": 9,
        "damageType": "physical",
        "baseDamage": 7,
        "effects": [
          {
            "type": "slow",
            "value": 5,
            "duration": 4
          }
        ]
      },
      {
        "id": "evasion",
        "name": "Evasion",
        "description": "Increases dodge chance",
        "manaCost": 10,
        "cooldown": 9,
        "effects": [
          {
            "type": "evasion_buff",
            "value": 30,
            "duration": 4
          }
        ]
      }
    ],
    "passive": {
      "id": "swift_strikes",
      "name": "Swift Strikes",
      "emoji": "⚡",
      "effect": "agility_boost",
      "value": 5
    }
  },
  "rocky_path_scorpion": {
    "id": "rocky_path_scorpion",
    "name": "🦂 Venomtail Reaper",
    "location": [
      "rocky_path"
    ],
    "tier": 1,
    "stats": {
      "hp": 60,
      "mana": 60,
      "attack": 16,
      "defense": 10,
      "agility": 20
    },
    "drops": [
      {
        "item": "scorpion_stinger",
        "chance": 70,
        "min": 1,
        "max": 1
      }
    ],
    "xp": 13,
    "gold": {
      "min": 4,
      "max": 7
    },
    "skills": [
      {
        "id": "poison_bite",
        "name": "Poison Bite",
        "description": "Venomous bite that poisons",
        "manaCost": 15,
        "cooldown": 9,
        "damageType": "physical",
        "baseDamage": 6,
        "effects": [
          {
            "type": "poison",
            "value": 5,
            "duration": 4
          }
        ]
      },
      {
        "id": "toxic_spit",
        "name": "Toxic Spit",
        "description": "Spits poison",
        "manaCost": 12,
        "cooldown": 9,
        "damageType": "magical",
        "baseDamage": 5,
        "effects": [
          {
            "type": "poison",
            "value": 4,
            "duration": 4
          }
        ]
      }
    ],
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
  "rocky_path_stone_crab": {
    "id": "rocky_path_stone_crab",
    "name": "🪨 Boulderback Crusher",
    "location": [
      "rocky_path"
    ],
    "tier": 1,
    "stats": {
      "hp": 70,
      "mana": 60,
      "attack": 14,
      "defense": 18,
      "agility": 10
    },
    "drops": [
      {
        "item": "stone_shell",
        "chance": 65,
        "min": 1,
        "max": 1
      }
    ],
    "xp": 12,
    "gold": {
      "min": 3,
      "max": 6
    },
    "skills": [
      {
        "id": "shell_defense",
        "name": "Shell Defense",
        "description": "Increases defense",
        "manaCost": 10,
        "cooldown": 9,
        "effects": [
          {
            "type": "buff_def",
            "value": 8,
            "duration": 4
          }
        ]
      },
      {
        "id": "counter_strike",
        "name": "Counter Strike",
        "description": "Reflects damage",
        "manaCost": 12,
        "cooldown": 9,
        "effects": [
          {
            "type": "reflect",
            "value": 30,
            "duration": 4
          }
        ]
      }
    ],
    "passive": {
      "id": "stone_skin",
      "name": "Stone Skin",
      "emoji": "🪨",
      "effect": "defense_boost",
      "value": 8
    }
  },
  "windy_cliff_hawk": {
    "id": "windy_cliff_hawk",
    "name": "🦅 Stormtalon Hunter",
    "location": [
      "windy_cliff"
    ],
    "tier": 1,
    "stats": {
      "hp": 228,
      "mana": 120,
      "attack": 60,
      "defense": 32,
      "agility": 76
    },
    "drops": [
      {
        "item": "hawk_talon",
        "chance": 70,
        "min": 1,
        "max": 1
      }
    ],
    "xp": 50,
    "gold": {
      "min": 9,
      "max": 18
    },
    "skills": [
      {
        "id": "dive_attack",
        "name": "Dive Attack",
        "description": "Diving strike from above",
        "manaCost": 14,
        "cooldown": 9,
        "damageType": "physical",
        "baseDamage": 10,
        "effects": [
          {
            "type": "stun",
            "value": 1,
            "duration": 4
          }
        ]
      },
      {
        "id": "wing_gust",
        "name": "Wing Gust",
        "description": "Blinds enemy with wind",
        "manaCost": 12,
        "cooldown": 9,
        "effects": [
          {
            "type": "blind",
            "value": 50,
            "duration": 4
          }
        ]
      }
    ],
    "passive": {
      "id": "critical_eye",
      "name": "Critical Eye",
      "emoji": "🎯",
      "effect": "crit_boost",
      "value": 10
    }
  },
  "windy_cliff_eagle": {
    "id": "windy_cliff_eagle",
    "name": "🦅 Galefeather Eagle",
    "location": [
      "windy_cliff"
    ],
    "tier": 1,
    "stats": {
      "hp": 252,
      "mana": 120,
      "attack": 68,
      "defense": 36,
      "agility": 80
    },
    "drops": [
      {
        "item": "eagle_feather",
        "chance": 65,
        "min": 1,
        "max": 2
      }
    ],
    "xp": 56,
    "gold": {
      "min": 11,
      "max": 21
    },
    "skills": [
      {
        "id": "dive_attack",
        "name": "Dive Attack",
        "description": "Diving strike from above",
        "manaCost": 14,
        "cooldown": 9,
        "damageType": "physical",
        "baseDamage": 10,
        "effects": [
          {
            "type": "stun",
            "value": 1,
            "duration": 4
          }
        ]
      },
      {
        "id": "wing_gust",
        "name": "Wing Gust",
        "description": "Blinds enemy with wind",
        "manaCost": 12,
        "cooldown": 9,
        "effects": [
          {
            "type": "blind",
            "value": 50,
            "duration": 4
          }
        ]
      }
    ],
    "passive": {
      "id": "critical_eye",
      "name": "Critical Eye",
      "emoji": "🎯",
      "effect": "crit_boost",
      "value": 10
    }
  },
  "windy_cliff_vulture": {
    "id": "windy_cliff_vulture",
    "name": "🦅 Dreadwing Scavenger",
    "location": [
      "windy_cliff"
    ],
    "tier": 1,
    "stats": {
      "hp": 216,
      "mana": 120,
      "attack": 56,
      "defense": 24,
      "agility": 68
    },
    "drops": [
      {
        "item": "vulture_beak",
        "chance": 70,
        "min": 1,
        "max": 1
      }
    ],
    "xp": 48,
    "gold": {
      "min": 8,
      "max": 15
    },
    "skills": [
      {
        "id": "dive_attack",
        "name": "Dive Attack",
        "description": "Diving strike from above",
        "manaCost": 14,
        "cooldown": 9,
        "damageType": "physical",
        "baseDamage": 10,
        "effects": [
          {
            "type": "stun",
            "value": 1,
            "duration": 4
          }
        ]
      },
      {
        "id": "wing_gust",
        "name": "Wing Gust",
        "description": "Blinds enemy with wind",
        "manaCost": 12,
        "cooldown": 9,
        "effects": [
          {
            "type": "blind",
            "value": 50,
            "duration": 4
          }
        ]
      }
    ],
    "passive": {
      "id": "vampiric",
      "name": "Vampiric",
      "emoji": "🧛",
      "effect": "lifesteal",
      "value": 20
    }
  },
  "ancient_oak_woodpecker": {
    "id": "ancient_oak_woodpecker",
    "name": "🐦 Ironbeak Driller",
    "location": [
      "ancient_oak"
    ],
    "tier": 1,
    "stats": {
      "hp": 192,
      "mana": 120,
      "attack": 48,
      "defense": 24,
      "agility": 64
    },
    "drops": [
      {
        "item": "hardwood_beak",
        "chance": 75,
        "min": 1,
        "max": 1
      }
    ],
    "xp": 42,
    "gold": {
      "min": 6,
      "max": 12
    },
    "skills": [
      {
        "id": "dive_attack",
        "name": "Dive Attack",
        "description": "Diving strike from above",
        "manaCost": 14,
        "cooldown": 9,
        "damageType": "physical",
        "baseDamage": 10,
        "effects": [
          {
            "type": "stun",
            "value": 1,
            "duration": 4
          }
        ]
      },
      {
        "id": "wing_gust",
        "name": "Wing Gust",
        "description": "Blinds enemy with wind",
        "manaCost": 12,
        "cooldown": 9,
        "effects": [
          {
            "type": "blind",
            "value": 50,
            "duration": 4
          }
        ]
      }
    ],
    "passive": {
      "id": "power_surge",
      "name": "Power Surge",
      "emoji": "💪",
      "effect": "attack_boost",
      "value": 5
    }
  },
  "ancient_oak_squirrel": {
    "id": "ancient_oak_squirrel",
    "name": "🐿️ Acorncap Colossus",
    "location": [
      "ancient_oak"
    ],
    "tier": 1,
    "stats": {
      "hp": 212,
      "mana": 120,
      "attack": 44,
      "defense": 32,
      "agility": 72
    },
    "drops": [
      {
        "item": "giant_acorn",
        "chance": 80,
        "min": 1,
        "max": 2
      }
    ],
    "xp": 44,
    "gold": {
      "min": 8,
      "max": 14
    },
    "skills": [
      {
        "id": "swift_strike",
        "name": "Swift Strike",
        "description": "Fast attack that slows enemy",
        "manaCost": 12,
        "cooldown": 9,
        "damageType": "physical",
        "baseDamage": 7,
        "effects": [
          {
            "type": "slow",
            "value": 5,
            "duration": 4
          }
        ]
      },
      {
        "id": "evasion",
        "name": "Evasion",
        "description": "Increases dodge chance",
        "manaCost": 10,
        "cooldown": 9,
        "effects": [
          {
            "type": "evasion_buff",
            "value": 30,
            "duration": 4
          }
        ]
      }
    ],
    "passive": {
      "id": "nimble",
      "name": "Nimble",
      "emoji": "💨",
      "effect": "dodge_boost",
      "value": 15
    }
  },
  "ancient_oak_tree_spirit": {
    "id": "ancient_oak_tree_spirit",
    "name": "🌳 Rootbound Warden",
    "location": [
      "ancient_oak"
    ],
    "tier": 1,
    "stats": {
      "hp": 300,
      "mana": 120,
      "attack": 60,
      "defense": 48,
      "agility": 28
    },
    "drops": [
      {
        "item": "spirit_essence",
        "chance": 60,
        "min": 1,
        "max": 1
      }
    ],
    "xp": 62,
    "gold": {
      "min": 12,
      "max": 23
    },
    "skills": [
      {
        "id": "mana_drain",
        "name": "Mana Drain",
        "description": "Drains enemy mana",
        "manaCost": 10,
        "cooldown": 9,
        "effects": [
          {
            "type": "manaburn",
            "value": 25,
            "duration": 1
          }
        ]
      },
      {
        "id": "curse",
        "name": "Curse",
        "description": "Reduces healing",
        "manaCost": 12,
        "cooldown": 9,
        "effects": [
          {
            "type": "curse",
            "value": 50,
            "duration": 4
          }
        ]
      }
    ],
    "passive": {
      "id": "regeneration",
      "name": "Regeneration",
      "emoji": "💚",
      "effect": "regen",
      "value": 5
    }
  },
  "hidden_cave_bat": {
    "id": "hidden_cave_bat",
    "name": "🦇 Echoveil Bat",
    "location": [
      "hidden_cave"
    ],
    "tier": 1,
    "stats": {
      "hp": 204,
      "mana": 120,
      "attack": 56,
      "defense": 24,
      "agility": 76
    },
    "drops": [
      {
        "item": "bat_fang",
        "chance": 75,
        "min": 1,
        "max": 1
      }
    ],
    "xp": 48,
    "gold": {
      "min": 8,
      "max": 15
    },
    "skills": [
      {
        "id": "dive_attack",
        "name": "Dive Attack",
        "description": "Diving strike from above",
        "manaCost": 14,
        "cooldown": 9,
        "damageType": "physical",
        "baseDamage": 10,
        "effects": [
          {
            "type": "stun",
            "value": 1,
            "duration": 4
          }
        ]
      },
      {
        "id": "wing_gust",
        "name": "Wing Gust",
        "description": "Blinds enemy with wind",
        "manaCost": 12,
        "cooldown": 9,
        "effects": [
          {
            "type": "blind",
            "value": 50,
            "duration": 4
          }
        ]
      }
    ],
    "passive": {
      "id": "vampiric",
      "name": "Vampiric",
      "emoji": "🧛",
      "effect": "lifesteal",
      "value": 20
    }
  },
  "hidden_cave_spider": {
    "id": "hidden_cave_spider",
    "name": "🕷️ Vaultfang",
    "location": [
      "hidden_cave"
    ],
    "tier": 1,
    "stats": {
      "hp": 228,
      "mana": 120,
      "attack": 60,
      "defense": 32,
      "agility": 56
    },
    "drops": [
      {
        "item": "spider_silk",
        "chance": 70,
        "min": 1,
        "max": 2
      }
    ],
    "xp": 50,
    "gold": {
      "min": 9,
      "max": 17
    },
    "skills": [
      {
        "id": "poison_bite",
        "name": "Poison Bite",
        "description": "Venomous bite that poisons",
        "manaCost": 15,
        "cooldown": 9,
        "damageType": "physical",
        "baseDamage": 6,
        "effects": [
          {
            "type": "poison",
            "value": 5,
            "duration": 4
          }
        ]
      },
      {
        "id": "toxic_spit",
        "name": "Toxic Spit",
        "description": "Spits poison",
        "manaCost": 12,
        "cooldown": 9,
        "damageType": "magical",
        "baseDamage": 5,
        "effects": [
          {
            "type": "poison",
            "value": 4,
            "duration": 4
          }
        ]
      }
    ],
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
  "hidden_cave_cave_rat": {
    "id": "hidden_cave_cave_rat",
    "name": "🐀 Gloomcrawler",
    "location": [
      "hidden_cave"
    ],
    "tier": 1,
    "stats": {
      "hp": 180,
      "mana": 120,
      "attack": 48,
      "defense": 24,
      "agility": 52
    },
    "drops": [
      {
        "item": "rat_tooth",
        "chance": 75,
        "min": 1,
        "max": 2
      }
    ],
    "xp": 40,
    "gold": {
      "min": 6,
      "max": 12
    },
    "skills": [
      {
        "id": "power_strike",
        "name": "Power Strike",
        "description": "Powerful attack",
        "manaCost": 15,
        "cooldown": 9,
        "damageType": "physical",
        "baseDamage": 12,
        "effects": [
          {
            "type": "debuff_def",
            "value": 5,
            "duration": 4
          }
        ]
      },
      {
        "id": "rage",
        "name": "Rage",
        "description": "Increases attack power",
        "manaCost": 12,
        "cooldown": 9,
        "effects": [
          {
            "type": "buff_atk",
            "value": 8,
            "duration": 4
          }
        ]
      }
    ],
    "passive": {
      "id": "enrage",
      "name": "Enrage",
      "emoji": "😡",
      "effect": "enrage",
      "value": 10,
      "threshold": 30
    }
  },
  "forgotten_shrine_spirit": {
    "id": "forgotten_shrine_spirit",
    "name": "👻 Veiled Ancestor",
    "location": [
      "forgotten_shrine"
    ],
    "tier": 1,
    "stats": {
      "hp": 240,
      "mana": 120,
      "attack": 56,
      "defense": 36,
      "agility": 48
    },
    "drops": [
      {
        "item": "spirit_orb",
        "chance": 65,
        "min": 1,
        "max": 1
      }
    ],
    "xp": 54,
    "gold": {
      "min": 11,
      "max": 20
    },
    "skills": [
      {
        "id": "mana_drain",
        "name": "Mana Drain",
        "description": "Drains enemy mana",
        "manaCost": 10,
        "cooldown": 9,
        "effects": [
          {
            "type": "manaburn",
            "value": 25,
            "duration": 1
          }
        ]
      },
      {
        "id": "curse",
        "name": "Curse",
        "description": "Reduces healing",
        "manaCost": 12,
        "cooldown": 9,
        "effects": [
          {
            "type": "curse",
            "value": 50,
            "duration": 4
          }
        ]
      }
    ],
    "passive": {
      "id": "arcane_mind",
      "name": "Arcane Mind",
      "emoji": "💧",
      "effect": "mana_regen",
      "value": 6
    }
  },
  "forgotten_shrine_fox": {
    "id": "forgotten_shrine_fox",
    "name": "🦊 Foxfire Wanderer",
    "location": [
      "forgotten_shrine"
    ],
    "tier": 1,
    "stats": {
      "hp": 216,
      "mana": 120,
      "attack": 60,
      "defense": 32,
      "agility": 68
    },
    "drops": [
      {
        "item": "mystic_fur",
        "chance": 70,
        "min": 1,
        "max": 1
      }
    ],
    "xp": 50,
    "gold": {
      "min": 9,
      "max": 18
    },
    "skills": [
      {
        "id": "mana_drain",
        "name": "Mana Drain",
        "description": "Drains enemy mana",
        "manaCost": 10,
        "cooldown": 9,
        "effects": [
          {
            "type": "manaburn",
            "value": 25,
            "duration": 1
          }
        ]
      },
      {
        "id": "curse",
        "name": "Curse",
        "description": "Reduces healing",
        "manaCost": 12,
        "cooldown": 9,
        "effects": [
          {
            "type": "curse",
            "value": 50,
            "duration": 4
          }
        ]
      }
    ],
    "passive": {
      "id": "nimble",
      "name": "Nimble",
      "emoji": "💨",
      "effect": "dodge_boost",
      "value": 15
    }
  },
  "forgotten_shrine_monk": {
    "id": "forgotten_shrine_monk",
    "name": "🧘 Fallen Ascetic",
    "location": [
      "forgotten_shrine"
    ],
    "tier": 1,
    "stats": {
      "hp": 272,
      "mana": 120,
      "attack": 68,
      "defense": 44,
      "agility": 44
    },
    "drops": [
      {
        "item": "prayer_beads",
        "chance": 60,
        "min": 1,
        "max": 1
      }
    ],
    "xp": 58,
    "gold": {
      "min": 12,
      "max": 23
    },
    "skills": [
      {
        "id": "dirty_trick",
        "name": "Dirty Trick",
        "description": "Blinds and confuses",
        "manaCost": 12,
        "cooldown": 9,
        "effects": [
          {
            "type": "blind",
            "value": 50,
            "duration": 4
          }
        ]
      },
      {
        "id": "steal",
        "name": "Steal",
        "description": "Drains health",
        "manaCost": 15,
        "cooldown": 9,
        "effects": [
          {
            "type": "drain",
            "value": 15,
            "duration": 1
          }
        ]
      }
    ],
    "passive": {
      "id": "iron_will",
      "name": "Iron Will",
      "emoji": "🛡️",
      "effect": "defense_boost_low_hp",
      "value": 8,
      "threshold": 25
    }
  },
  "frozen_peaks_yeti": {
    "id": "frozen_peaks_yeti",
    "name": "❄️ Glacial Behemoth",
    "location": [
      "frozen_peaks"
    ],
    "tier": 2,
    "stats": {
      "hp": 680,
      "mana": 400,
      "attack": 128,
      "defense": 80,
      "agility": 72
    },
    "skills": [
      {
        "id": "frost_strike",
        "name": "Frost Strike",
        "description": "Freezing attack",
        "manaCost": 20,
        "cooldown": 9,
        "damageType": "magical",
        "baseDamage": 19,
        "effects": [
          {
            "type": "freeze",
            "value": 1,
            "duration": 4
          }
        ]
      },
      {
        "id": "power_up",
        "name": "Power Up",
        "description": "Increases own power",
        "manaCost": 15,
        "cooldown": 9,
        "effects": [
          {
            "type": "buff_atk",
            "value": 10,
            "duration": 4
          }
        ]
      }
    ],
    "passive": {
      "id": "stone_skin",
      "name": "Stone Skin",
      "emoji": "🪨",
      "effect": "defense_boost",
      "value": 8
    },
    "drops": [
      {
        "item": "yeti_fur",
        "chance": 70,
        "min": 1,
        "max": 2
      },
      {
        "item": "ice_crystal",
        "chance": 40,
        "min": 1,
        "max": 1
      }
    ],
    "xp": 140,
    "gold": {
      "min": 15,
      "max": 25
    }
  },
  "frozen_peaks_ice_elemental": {
    "id": "frozen_peaks_ice_elemental",
    "name": "🧊 Frostborn",
    "location": [
      "frozen_peaks"
    ],
    "tier": 2,
    "stats": {
      "hp": 560,
      "mana": 400,
      "attack": 144,
      "defense": 64,
      "agility": 80
    },
    "skills": [
      {
        "id": "frost_strike",
        "name": "Frost Strike",
        "description": "Freezing attack",
        "manaCost": 20,
        "cooldown": 9,
        "damageType": "magical",
        "baseDamage": 21,
        "effects": [
          {
            "type": "freeze",
            "value": 1,
            "duration": 4
          }
        ]
      },
      {
        "id": "magic_blast",
        "name": "Magic Blast",
        "description": "Magical energy blast",
        "manaCost": 22,
        "cooldown": 9,
        "damageType": "magical",
        "baseDamage": 21,
        "effects": [
          {
            "type": "manaburn",
            "value": 20,
            "duration": 1
          }
        ]
      }
    ],
    "passive": {
      "id": "mana_spring",
      "name": "Mana Spring",
      "emoji": "💧",
      "effect": "mana_regen",
      "value": 10
    },
    "drops": [
      {
        "item": "elemental_essence",
        "chance": 70,
        "min": 1,
        "max": 2
      },
      {
        "item": "frozen_heart",
        "chance": 40,
        "min": 1,
        "max": 1
      }
    ],
    "xp": 152,
    "gold": {
      "min": 18,
      "max": 28
    }
  },
  "frozen_peaks_frost_giant": {
    "id": "frozen_peaks_frost_giant",
    "name": "🗿 Rimestone Giant",
    "location": [
      "frozen_peaks"
    ],
    "tier": 2,
    "stats": {
      "hp": 800,
      "mana": 400,
      "attack": 160,
      "defense": 96,
      "agility": 96
    },
    "skills": [
      {
        "id": "heavy_strike",
        "name": "Heavy Strike",
        "description": "Powerful physical attack",
        "manaCost": 20,
        "cooldown": 9,
        "damageType": "physical",
        "baseDamage": 24,
        "effects": [
          {
            "type": "stun",
            "value": 1,
            "duration": 4
          }
        ]
      },
      {
        "id": "weaken",
        "name": "Weaken",
        "description": "Weakens enemy",
        "manaCost": 15,
        "cooldown": 9,
        "effects": [
          {
            "type": "debuff_def",
            "value": 8,
            "duration": 4
          }
        ]
      }
    ],
    "passive": {
      "id": "enrage",
      "name": "Enrage",
      "emoji": "😡",
      "effect": "enrage",
      "value": 12,
      "threshold": 30
    },
    "drops": [
      {
        "item": "giant_bone",
        "chance": 70,
        "min": 1,
        "max": 2
      },
      {
        "item": "frost_axe",
        "chance": 40,
        "min": 1,
        "max": 1
      }
    ],
    "xp": 168,
    "gold": {
      "min": 20,
      "max": 35
    }
  },
  "scorched_dunes_sand_worm": {
    "id": "scorched_dunes_sand_worm",
    "name": "🪱 Dunecoil Devourer",
    "location": [
      "scorched_dunes"
    ],
    "tier": 2,
    "stats": {
      "hp": 720,
      "mana": 400,
      "attack": 136,
      "defense": 72,
      "agility": 80
    },
    "skills": [
      {
        "id": "heavy_strike",
        "name": "Heavy Strike",
        "description": "Powerful physical attack",
        "manaCost": 20,
        "cooldown": 9,
        "damageType": "physical",
        "baseDamage": 20,
        "effects": [
          {
            "type": "stun",
            "value": 1,
            "duration": 4
          }
        ]
      },
      {
        "id": "weaken",
        "name": "Weaken",
        "description": "Weakens enemy",
        "manaCost": 15,
        "cooldown": 9,
        "effects": [
          {
            "type": "debuff_def",
            "value": 8,
            "duration": 4
          }
        ]
      }
    ],
    "passive": {
      "id": "fast_regeneration",
      "name": "Fast Regeneration",
      "emoji": "💚",
      "effect": "regen",
      "value": 10
    },
    "drops": [
      {
        "item": "worm_scale",
        "chance": 70,
        "min": 1,
        "max": 2
      },
      {
        "item": "desert_pearl",
        "chance": 40,
        "min": 1,
        "max": 1
      }
    ],
    "xp": 144,
    "gold": {
      "min": 16,
      "max": 26
    }
  },
  "scorched_dunes_fire_scorpion": {
    "id": "scorched_dunes_fire_scorpion",
    "name": "🦂 Emberstinger",
    "location": [
      "scorched_dunes"
    ],
    "tier": 2,
    "stats": {
      "hp": 600,
      "mana": 400,
      "attack": 152,
      "defense": 88,
      "agility": 88
    },
    "skills": [
      {
        "id": "venom_strike",
        "name": "Venom Strike",
        "description": "Poisonous attack",
        "manaCost": 18,
        "cooldown": 9,
        "damageType": "physical",
        "baseDamage": 22,
        "effects": [
          {
            "type": "poison",
            "value": 7,
            "duration": 4
          }
        ]
      },
      {
        "id": "flame_strike",
        "name": "Flame Strike",
        "description": "Burning attack",
        "manaCost": 20,
        "cooldown": 9,
        "damageType": "magical",
        "baseDamage": 22,
        "effects": [
          {
            "type": "burn",
            "value": 8,
            "duration": 4
          }
        ]
      }
    ],
    "passive": {
      "id": "burning_aura",
      "name": "Burning Aura",
      "emoji": "🔥",
      "effect": "burn_on_hit",
      "value": 6,
      "chance": 25,
      "duration": 4
    },
    "drops": [
      {
        "item": "scorpion_venom",
        "chance": 70,
        "min": 1,
        "max": 2
      },
      {
        "item": "fire_gland",
        "chance": 40,
        "min": 1,
        "max": 1
      }
    ],
    "xp": 156,
    "gold": {
      "min": 17,
      "max": 29
    }
  },
  "scorched_dunes_desert_drake": {
    "id": "scorched_dunes_desert_drake",
    "name": "🐉 Sandscorch Drake",
    "location": [
      "scorched_dunes"
    ],
    "tier": 2,
    "stats": {
      "hp": 760,
      "mana": 400,
      "attack": 168,
      "defense": 80,
      "agility": 96
    },
    "skills": [
      {
        "id": "flame_strike",
        "name": "Flame Strike",
        "description": "Burning attack",
        "manaCost": 20,
        "cooldown": 9,
        "damageType": "magical",
        "baseDamage": 25,
        "effects": [
          {
            "type": "burn",
            "value": 8,
            "duration": 4
          }
        ]
      },
      {
        "id": "power_up",
        "name": "Power Up",
        "description": "Increases own power",
        "manaCost": 15,
        "cooldown": 9,
        "effects": [
          {
            "type": "buff_atk",
            "value": 10,
            "duration": 4
          }
        ]
      }
    ],
    "passive": {
      "id": "critical_eye",
      "name": "Critical Eye",
      "emoji": "🎯",
      "effect": "crit_boost",
      "value": 15
    },
    "drops": [
      {
        "item": "drake_scale",
        "chance": 70,
        "min": 1,
        "max": 2
      },
      {
        "item": "dragon_tooth",
        "chance": 40,
        "min": 1,
        "max": 1
      }
    ],
    "xp": 176,
    "gold": {
      "min": 22,
      "max": 38
    }
  },
  "crystal_cavern_crystal_golem": {
    "id": "crystal_cavern_crystal_golem",
    "name": "💎 Gemvault Golem",
    "location": [
      "crystal_cavern"
    ],
    "tier": 2,
    "stats": {
      "hp": 880,
      "mana": 400,
      "attack": 120,
      "defense": 120,
      "agility": 72
    },
    "skills": [
      {
        "id": "heavy_strike",
        "name": "Heavy Strike",
        "description": "Powerful physical attack",
        "manaCost": 20,
        "cooldown": 9,
        "damageType": "physical",
        "baseDamage": 18,
        "effects": [
          {
            "type": "stun",
            "value": 1,
            "duration": 4
          }
        ]
      },
      {
        "id": "power_up",
        "name": "Power Up",
        "description": "Increases own power",
        "manaCost": 15,
        "cooldown": 9,
        "effects": [
          {
            "type": "buff_atk",
            "value": 10,
            "duration": 4
          }
        ]
      }
    ],
    "passive": {
      "id": "stone_skin",
      "name": "Stone Skin",
      "emoji": "🪨",
      "effect": "defense_boost",
      "value": 8
    },
    "drops": [
      {
        "item": "crystal_shard",
        "chance": 70,
        "min": 1,
        "max": 2
      },
      {
        "item": "golem_core",
        "chance": 40,
        "min": 1,
        "max": 1
      }
    ],
    "xp": 160,
    "gold": {
      "min": 18,
      "max": 30
    }
  },
  "crystal_cavern_gem_spider": {
    "id": "crystal_cavern_gem_spider",
    "name": "🕷️ Facetweaver",
    "location": [
      "crystal_cavern"
    ],
    "tier": 2,
    "stats": {
      "hp": 560,
      "mana": 400,
      "attack": 144,
      "defense": 72,
      "agility": 80
    },
    "skills": [
      {
        "id": "venom_strike",
        "name": "Venom Strike",
        "description": "Poisonous attack",
        "manaCost": 18,
        "cooldown": 9,
        "damageType": "physical",
        "baseDamage": 21,
        "effects": [
          {
            "type": "poison",
            "value": 7,
            "duration": 4
          }
        ]
      },
      {
        "id": "weaken",
        "name": "Weaken",
        "description": "Weakens enemy",
        "manaCost": 15,
        "cooldown": 9,
        "effects": [
          {
            "type": "debuff_def",
            "value": 8,
            "duration": 4
          }
        ]
      }
    ],
    "passive": {
      "id": "poison_touch",
      "name": "Poison Touch",
      "emoji": "☠️",
      "effect": "poison_on_hit",
      "value": 5,
      "chance": 30,
      "duration": 4
    },
    "drops": [
      {
        "item": "spider_gem",
        "chance": 70,
        "min": 1,
        "max": 2
      },
      {
        "item": "silk_thread",
        "chance": 40,
        "min": 1,
        "max": 1
      }
    ],
    "xp": 148,
    "gold": {
      "min": 16,
      "max": 27
    }
  },
  "crystal_cavern_prism_wraith": {
    "id": "crystal_cavern_prism_wraith",
    "name": "👻 Crystalshade Wraith",
    "location": [
      "crystal_cavern"
    ],
    "tier": 2,
    "stats": {
      "hp": 640,
      "mana": 400,
      "attack": 160,
      "defense": 56,
      "agility": 96
    },
    "skills": [
      {
        "id": "magic_blast",
        "name": "Magic Blast",
        "description": "Magical energy blast",
        "manaCost": 22,
        "cooldown": 9,
        "damageType": "magical",
        "baseDamage": 24,
        "effects": [
          {
            "type": "manaburn",
            "value": 20,
            "duration": 1
          }
        ]
      },
      {
        "id": "weaken",
        "name": "Weaken",
        "description": "Weakens enemy",
        "manaCost": 15,
        "cooldown": 9,
        "effects": [
          {
            "type": "debuff_def",
            "value": 8,
            "duration": 4
          }
        ]
      }
    ],
    "passive": {
      "id": "vampiric",
      "name": "Vampiric",
      "emoji": "🧛",
      "effect": "lifesteal",
      "value": 20
    },
    "drops": [
      {
        "item": "wraith_essence",
        "chance": 70,
        "min": 1,
        "max": 2
      },
      {
        "item": "prism_crystal",
        "chance": 40,
        "min": 1,
        "max": 1
      }
    ],
    "xp": 164,
    "gold": {
      "min": 19,
      "max": 32
    }
  },
  "volcanic_ridge_lava_hound": {
    "id": "volcanic_ridge_lava_hound",
    "name": "🐕 Cinderbound Hound",
    "location": [
      "volcanic_ridge"
    ],
    "tier": 2,
    "stats": {
      "hp": 704,
      "mana": 400,
      "attack": 152,
      "defense": 80,
      "agility": 88
    },
    "skills": [
      {
        "id": "flame_strike",
        "name": "Flame Strike",
        "description": "Burning attack",
        "manaCost": 20,
        "cooldown": 9,
        "damageType": "magical",
        "baseDamage": 22,
        "effects": [
          {
            "type": "burn",
            "value": 8,
            "duration": 4
          }
        ]
      },
      {
        "id": "heavy_strike",
        "name": "Heavy Strike",
        "description": "Powerful physical attack",
        "manaCost": 20,
        "cooldown": 9,
        "damageType": "physical",
        "baseDamage": 22,
        "effects": [
          {
            "type": "stun",
            "value": 1,
            "duration": 4
          }
        ]
      }
    ],
    "passive": {
      "id": "burning_aura",
      "name": "Burning Aura",
      "emoji": "🔥",
      "effect": "burn_on_hit",
      "value": 6,
      "chance": 25,
      "duration": 4
    },
    "drops": [
      {
        "item": "lava_fang",
        "chance": 70,
        "min": 1,
        "max": 2
      },
      {
        "item": "molten_core",
        "chance": 40,
        "min": 1,
        "max": 1
      }
    ],
    "xp": 152,
    "gold": {
      "min": 17,
      "max": 28
    }
  },
  "volcanic_ridge_magma_elemental": {
    "id": "volcanic_ridge_magma_elemental",
    "name": "🔥 Moldborn",
    "location": [
      "volcanic_ridge"
    ],
    "tier": 2,
    "stats": {
      "hp": 600,
      "mana": 400,
      "attack": 168,
      "defense": 64,
      "agility": 96
    },
    "skills": [
      {
        "id": "flame_strike",
        "name": "Flame Strike",
        "description": "Burning attack",
        "manaCost": 20,
        "cooldown": 9,
        "damageType": "magical",
        "baseDamage": 25,
        "effects": [
          {
            "type": "burn",
            "value": 8,
            "duration": 4
          }
        ]
      },
      {
        "id": "magic_blast",
        "name": "Magic Blast",
        "description": "Magical energy blast",
        "manaCost": 22,
        "cooldown": 9,
        "damageType": "magical",
        "baseDamage": 25,
        "effects": [
          {
            "type": "manaburn",
            "value": 20,
            "duration": 1
          }
        ]
      }
    ],
    "passive": {
      "id": "fast_regeneration",
      "name": "Fast Regeneration",
      "emoji": "💚",
      "effect": "regen",
      "value": 10
    },
    "drops": [
      {
        "item": "magma_essence",
        "chance": 70,
        "min": 1,
        "max": 2
      },
      {
        "item": "fire_stone",
        "chance": 40,
        "min": 1,
        "max": 1
      }
    ],
    "xp": 160,
    "gold": {
      "min": 18,
      "max": 30
    }
  },
  "volcanic_ridge_fire_drake": {
    "id": "volcanic_ridge_fire_drake",
    "name": "🐲 Ashwing Drake",
    "location": [
      "volcanic_ridge"
    ],
    "tier": 2,
    "stats": {
      "hp": 800,
      "mana": 400,
      "attack": 176,
      "defense": 88,
      "agility": 104
    },
    "skills": [
      {
        "id": "flame_strike",
        "name": "Flame Strike",
        "description": "Burning attack",
        "manaCost": 20,
        "cooldown": 9,
        "damageType": "magical",
        "baseDamage": 26,
        "effects": [
          {
            "type": "burn",
            "value": 8,
            "duration": 4
          }
        ]
      },
      {
        "id": "power_up",
        "name": "Power Up",
        "description": "Increases own power",
        "manaCost": 15,
        "cooldown": 9,
        "effects": [
          {
            "type": "buff_atk",
            "value": 10,
            "duration": 4
          }
        ]
      }
    ],
    "passive": {
      "id": "enrage",
      "name": "Enrage",
      "emoji": "😡",
      "effect": "enrage",
      "value": 12,
      "threshold": 30
    },
    "drops": [
      {
        "item": "fire_scale",
        "chance": 70,
        "min": 1,
        "max": 2
      },
      {
        "item": "drake_heart",
        "chance": 40,
        "min": 1,
        "max": 1
      }
    ],
    "xp": 180,
    "gold": {
      "min": 23,
      "max": 40
    }
  },
  "sandstorm_valley_sand_guardian": {
    "id": "sandstorm_valley_sand_guardian",
    "name": "🗿 Duneshard Sentinel",
    "location": [
      "sandstorm_valley"
    ],
    "tier": 2,
    "stats": {
      "hp": 760,
      "mana": 400,
      "attack": 136,
      "defense": 104,
      "agility": 80
    },
    "skills": [
      {
        "id": "heavy_strike",
        "name": "Heavy Strike",
        "description": "Powerful physical attack",
        "manaCost": 20,
        "cooldown": 9,
        "damageType": "physical",
        "baseDamage": 20,
        "effects": [
          {
            "type": "stun",
            "value": 1,
            "duration": 4
          }
        ]
      },
      {
        "id": "power_up",
        "name": "Power Up",
        "description": "Increases own power",
        "manaCost": 15,
        "cooldown": 9,
        "effects": [
          {
            "type": "buff_atk",
            "value": 10,
            "duration": 4
          }
        ]
      }
    ],
    "passive": {
      "id": "stone_skin",
      "name": "Stone Skin",
      "emoji": "🪨",
      "effect": "defense_boost",
      "value": 8
    },
    "drops": [
      {
        "item": "guardian_stone",
        "chance": 70,
        "min": 1,
        "max": 2
      },
      {
        "item": "ancient_relic",
        "chance": 40,
        "min": 1,
        "max": 1
      }
    ],
    "xp": 156,
    "gold": {
      "min": 18,
      "max": 29
    }
  },
  "sandstorm_valley_dust_devil": {
    "id": "sandstorm_valley_dust_devil",
    "name": "🌪️ Gritwhirl Djinn",
    "location": [
      "sandstorm_valley"
    ],
    "tier": 2,
    "stats": {
      "hp": 560,
      "mana": 400,
      "attack": 160,
      "defense": 56,
      "agility": 96
    },
    "skills": [
      {
        "id": "magic_blast",
        "name": "Magic Blast",
        "description": "Magical energy blast",
        "manaCost": 22,
        "cooldown": 9,
        "damageType": "magical",
        "baseDamage": 24,
        "effects": [
          {
            "type": "manaburn",
            "value": 20,
            "duration": 1
          }
        ]
      },
      {
        "id": "weaken",
        "name": "Weaken",
        "description": "Weakens enemy",
        "manaCost": 15,
        "cooldown": 9,
        "effects": [
          {
            "type": "debuff_def",
            "value": 8,
            "duration": 4
          }
        ]
      }
    ],
    "passive": {
      "id": "critical_eye",
      "name": "Critical Eye",
      "emoji": "🎯",
      "effect": "crit_boost",
      "value": 15
    },
    "drops": [
      {
        "item": "wind_essence",
        "chance": 70,
        "min": 1,
        "max": 2
      },
      {
        "item": "dust_core",
        "chance": 40,
        "min": 1,
        "max": 1
      }
    ],
    "xp": 148,
    "gold": {
      "min": 16,
      "max": 27
    }
  },
  "sandstorm_valley_mummy": {
    "id": "sandstorm_valley_mummy",
    "name": "🧟 Cursed Wrapping",
    "location": [
      "sandstorm_valley"
    ],
    "tier": 2,
    "stats": {
      "hp": 680,
      "mana": 400,
      "attack": 128,
      "defense": 88,
      "agility": 72
    },
    "skills": [
      {
        "id": "venom_strike",
        "name": "Venom Strike",
        "description": "Poisonous attack",
        "manaCost": 18,
        "cooldown": 9,
        "damageType": "physical",
        "baseDamage": 19,
        "effects": [
          {
            "type": "poison",
            "value": 7,
            "duration": 4
          }
        ]
      },
      {
        "id": "weaken",
        "name": "Weaken",
        "description": "Weakens enemy",
        "manaCost": 15,
        "cooldown": 9,
        "effects": [
          {
            "type": "debuff_def",
            "value": 8,
            "duration": 4
          }
        ]
      }
    ],
    "passive": {
      "id": "fast_regeneration",
      "name": "Fast Regeneration",
      "emoji": "💚",
      "effect": "regen",
      "value": 10
    },
    "drops": [
      {
        "item": "ancient_bandage",
        "chance": 70,
        "min": 1,
        "max": 2
      },
      {
        "item": "cursed_amulet",
        "chance": 40,
        "min": 1,
        "max": 1
      }
    ],
    "xp": 152,
    "gold": {
      "min": 17,
      "max": 28
    }
  },
  "sky_gardens_sky_serpent": {
    "id": "sky_gardens_sky_serpent",
    "name": "🐍 Zephyr Coil",
    "location": [
      "sky_gardens"
    ],
    "tier": 2,
    "stats": {
      "hp": 1840,
      "mana": 800,
      "attack": 384,
      "defense": 192,
      "agility": 224
    },
    "skills": [
      {
        "id": "venom_strike",
        "name": "Venom Strike",
        "description": "Poisonous attack",
        "manaCost": 18,
        "cooldown": 9,
        "damageType": "physical",
        "baseDamage": 28,
        "effects": [
          {
            "type": "poison",
            "value": 7,
            "duration": 4
          }
        ]
      },
      {
        "id": "magic_blast",
        "name": "Magic Blast",
        "description": "Magical energy blast",
        "manaCost": 22,
        "cooldown": 9,
        "damageType": "magical",
        "baseDamage": 28,
        "effects": [
          {
            "type": "manaburn",
            "value": 20,
            "duration": 1
          }
        ]
      }
    ],
    "passive": {
      "id": "poison_touch",
      "name": "Poison Touch",
      "emoji": "☠️",
      "effect": "poison_on_hit",
      "value": 5,
      "chance": 30,
      "duration": 4
    },
    "drops": [
      {
        "item": "sky_scale",
        "chance": 70,
        "min": 1,
        "max": 2
      },
      {
        "item": "serpent_venom",
        "chance": 40,
        "min": 1,
        "max": 1
      }
    ],
    "xp": 416,
    "gold": {
      "min": 28,
      "max": 45
    }
  },
  "sky_gardens_cloud_elemental": {
    "id": "sky_gardens_cloud_elemental",
    "name": "☁️ Nimbus Entity",
    "location": [
      "sky_gardens"
    ],
    "tier": 2,
    "stats": {
      "hp": 1600,
      "mana": 800,
      "attack": 416,
      "defense": 160,
      "agility": 240
    },
    "skills": [
      {
        "id": "magic_blast",
        "name": "Magic Blast",
        "description": "Magical energy blast",
        "manaCost": 22,
        "cooldown": 9,
        "damageType": "magical",
        "baseDamage": 31,
        "effects": [
          {
            "type": "manaburn",
            "value": 20,
            "duration": 1
          }
        ]
      },
      {
        "id": "frost_strike",
        "name": "Frost Strike",
        "description": "Freezing attack",
        "manaCost": 20,
        "cooldown": 9,
        "damageType": "magical",
        "baseDamage": 31,
        "effects": [
          {
            "type": "freeze",
            "value": 1,
            "duration": 4
          }
        ]
      }
    ],
    "passive": {
      "id": "mana_spring",
      "name": "Mana Spring",
      "emoji": "💧",
      "effect": "mana_regen",
      "value": 10
    },
    "drops": [
      {
        "item": "cloud_essence",
        "chance": 70,
        "min": 1,
        "max": 2
      },
      {
        "item": "sky_crystal",
        "chance": 40,
        "min": 1,
        "max": 1
      }
    ],
    "xp": 440,
    "gold": {
      "min": 30,
      "max": 48
    }
  },
  "sky_gardens_wind_spirit": {
    "id": "sky_gardens_wind_spirit",
    "name": "💨 Galewing Wraith",
    "location": [
      "sky_gardens"
    ],
    "tier": 2,
    "stats": {
      "hp": 1760,
      "mana": 800,
      "attack": 400,
      "defense": 176,
      "agility": 240
    },
    "skills": [
      {
        "id": "magic_blast",
        "name": "Magic Blast",
        "description": "Magical energy blast",
        "manaCost": 22,
        "cooldown": 9,
        "damageType": "magical",
        "baseDamage": 30,
        "effects": [
          {
            "type": "manaburn",
            "value": 20,
            "duration": 1
          }
        ]
      },
      {
        "id": "power_up",
        "name": "Power Up",
        "description": "Increases own power",
        "manaCost": 15,
        "cooldown": 9,
        "effects": [
          {
            "type": "buff_atk",
            "value": 10,
            "duration": 4
          }
        ]
      }
    ],
    "passive": {
      "id": "critical_eye",
      "name": "Critical Eye",
      "emoji": "🎯",
      "effect": "crit_boost",
      "value": 15
    },
    "drops": [
      {
        "item": "wind_core",
        "chance": 70,
        "min": 1,
        "max": 2
      },
      {
        "item": "spirit_feather",
        "chance": 40,
        "min": 1,
        "max": 1
      }
    ],
    "xp": 432,
    "gold": {
      "min": 29,
      "max": 47
    }
  },
  "deep_mines_rock_titan": {
    "id": "deep_mines_rock_titan",
    "name": "🪨 Boulderborn Titan",
    "location": [
      "deep_mines"
    ],
    "tier": 2,
    "stats": {
      "hp": 2240,
      "mana": 800,
      "attack": 352,
      "defense": 288,
      "agility": 208
    },
    "skills": [
      {
        "id": "heavy_strike",
        "name": "Heavy Strike",
        "description": "Powerful physical attack",
        "manaCost": 20,
        "cooldown": 9,
        "damageType": "physical",
        "baseDamage": 26,
        "effects": [
          {
            "type": "stun",
            "value": 1,
            "duration": 4
          }
        ]
      },
      {
        "id": "power_up",
        "name": "Power Up",
        "description": "Increases own power",
        "manaCost": 15,
        "cooldown": 9,
        "effects": [
          {
            "type": "buff_atk",
            "value": 10,
            "duration": 4
          }
        ]
      }
    ],
    "passive": {
      "id": "stone_skin",
      "name": "Stone Skin",
      "emoji": "🪨",
      "effect": "defense_boost",
      "value": 8
    },
    "drops": [
      {
        "item": "titan_stone",
        "chance": 70,
        "min": 1,
        "max": 2
      },
      {
        "item": "ore_chunk",
        "chance": 40,
        "min": 1,
        "max": 1
      }
    ],
    "xp": 464,
    "gold": {
      "min": 32,
      "max": 52
    }
  },
  "deep_mines_cave_horror": {
    "id": "deep_mines_cave_horror",
    "name": "👹 Deepvein Terror",
    "location": [
      "deep_mines"
    ],
    "tier": 2,
    "stats": {
      "hp": 1920,
      "mana": 800,
      "attack": 416,
      "defense": 208,
      "agility": 240
    },
    "skills": [
      {
        "id": "heavy_strike",
        "name": "Heavy Strike",
        "description": "Powerful physical attack",
        "manaCost": 20,
        "cooldown": 9,
        "damageType": "physical",
        "baseDamage": 31,
        "effects": [
          {
            "type": "stun",
            "value": 1,
            "duration": 4
          }
        ]
      },
      {
        "id": "weaken",
        "name": "Weaken",
        "description": "Weakens enemy",
        "manaCost": 15,
        "cooldown": 9,
        "effects": [
          {
            "type": "debuff_def",
            "value": 8,
            "duration": 4
          }
        ]
      }
    ],
    "passive": {
      "id": "vampiric",
      "name": "Vampiric",
      "emoji": "🧛",
      "effect": "lifesteal",
      "value": 20
    },
    "drops": [
      {
        "item": "horror_claw",
        "chance": 70,
        "min": 1,
        "max": 2
      },
      {
        "item": "dark_essence",
        "chance": 40,
        "min": 1,
        "max": 1
      }
    ],
    "xp": 448,
    "gold": {
      "min": 30,
      "max": 50
    }
  },
  "deep_mines_shadow_miner": {
    "id": "deep_mines_shadow_miner",
    "name": "⛏️ Obsidian Delver",
    "location": [
      "deep_mines"
    ],
    "tier": 2,
    "stats": {
      "hp": 1680,
      "mana": 800,
      "attack": 384,
      "defense": 224,
      "agility": 224
    },
    "skills": [
      {
        "id": "heavy_strike",
        "name": "Heavy Strike",
        "description": "Powerful physical attack",
        "manaCost": 20,
        "cooldown": 9,
        "damageType": "physical",
        "baseDamage": 28,
        "effects": [
          {
            "type": "stun",
            "value": 1,
            "duration": 4
          }
        ]
      },
      {
        "id": "venom_strike",
        "name": "Venom Strike",
        "description": "Poisonous attack",
        "manaCost": 18,
        "cooldown": 9,
        "damageType": "physical",
        "baseDamage": 28,
        "effects": [
          {
            "type": "poison",
            "value": 7,
            "duration": 4
          }
        ]
      }
    ],
    "passive": {
      "id": "thorns",
      "name": "Thorns",
      "emoji": "🌵",
      "effect": "thorns",
      "value": 7
    },
    "drops": [
      {
        "item": "cursed_pickaxe",
        "chance": 70,
        "min": 1,
        "max": 2
      },
      {
        "item": "shadow_ore",
        "chance": 40,
        "min": 1,
        "max": 1
      }
    ],
    "xp": 424,
    "gold": {
      "min": 28,
      "max": 46
    }
  },
  "thunder_peaks_storm_elemental": {
    "id": "thunder_peaks_storm_elemental",
    "name": "⚡ Tempestborn",
    "location": [
      "thunder_peaks"
    ],
    "tier": 2,
    "stats": {
      "hp": 1760,
      "mana": 800,
      "attack": 448,
      "defense": 176,
      "agility": 256
    },
    "skills": [
      {
        "id": "magic_blast",
        "name": "Magic Blast",
        "description": "Magical energy blast",
        "manaCost": 22,
        "cooldown": 9,
        "damageType": "magical",
        "baseDamage": 33,
        "effects": [
          {
            "type": "manaburn",
            "value": 20,
            "duration": 1
          }
        ]
      },
      {
        "id": "weaken",
        "name": "Weaken",
        "description": "Weakens enemy",
        "manaCost": 15,
        "cooldown": 9,
        "effects": [
          {
            "type": "debuff_def",
            "value": 8,
            "duration": 4
          }
        ]
      }
    ],
    "passive": {
      "id": "mana_spring",
      "name": "Mana Spring",
      "emoji": "💧",
      "effect": "mana_regen",
      "value": 10
    },
    "drops": [
      {
        "item": "storm_essence",
        "chance": 70,
        "min": 1,
        "max": 2
      },
      {
        "item": "lightning_shard",
        "chance": 40,
        "min": 1,
        "max": 1
      }
    ],
    "xp": 456,
    "gold": {
      "min": 31,
      "max": 50
    }
  },
  "thunder_peaks_lightning_dragon": {
    "id": "thunder_peaks_lightning_dragon",
    "name": "🐉 Stormshriek Dragon",
    "location": [
      "thunder_peaks"
    ],
    "tier": 2,
    "stats": {
      "hp": 2160,
      "mana": 800,
      "attack": 480,
      "defense": 224,
      "agility": 288
    },
    "skills": [
      {
        "id": "magic_blast",
        "name": "Magic Blast",
        "description": "Magical energy blast",
        "manaCost": 22,
        "cooldown": 9,
        "damageType": "magical",
        "baseDamage": 36,
        "effects": [
          {
            "type": "manaburn",
            "value": 20,
            "duration": 1
          }
        ]
      },
      {
        "id": "power_up",
        "name": "Power Up",
        "description": "Increases own power",
        "manaCost": 15,
        "cooldown": 9,
        "effects": [
          {
            "type": "buff_atk",
            "value": 10,
            "duration": 4
          }
        ]
      }
    ],
    "passive": {
      "id": "enrage",
      "name": "Enrage",
      "emoji": "😡",
      "effect": "enrage",
      "value": 12,
      "threshold": 30
    },
    "drops": [
      {
        "item": "dragon_scale",
        "chance": 70,
        "min": 1,
        "max": 2
      },
      {
        "item": "thunder_heart",
        "chance": 40,
        "min": 1,
        "max": 1
      }
    ],
    "xp": 496,
    "gold": {
      "min": 35,
      "max": 58
    }
  },
  "thunder_peaks_thunder_bird": {
    "id": "thunder_peaks_thunder_bird",
    "name": "🦅 Thunderclap Raptor",
    "location": [
      "thunder_peaks"
    ],
    "tier": 2,
    "stats": {
      "hp": 1840,
      "mana": 800,
      "attack": 432,
      "defense": 192,
      "agility": 256
    },
    "skills": [
      {
        "id": "magic_blast",
        "name": "Magic Blast",
        "description": "Magical energy blast",
        "manaCost": 22,
        "cooldown": 9,
        "damageType": "magical",
        "baseDamage": 32,
        "effects": [
          {
            "type": "manaburn",
            "value": 20,
            "duration": 1
          }
        ]
      },
      {
        "id": "heavy_strike",
        "name": "Heavy Strike",
        "description": "Powerful physical attack",
        "manaCost": 20,
        "cooldown": 9,
        "damageType": "physical",
        "baseDamage": 32,
        "effects": [
          {
            "type": "stun",
            "value": 1,
            "duration": 4
          }
        ]
      }
    ],
    "passive": {
      "id": "critical_eye",
      "name": "Critical Eye",
      "emoji": "🎯",
      "effect": "crit_boost",
      "value": 15
    },
    "drops": [
      {
        "item": "thunder_feather",
        "chance": 70,
        "min": 1,
        "max": 2
      },
      {
        "item": "storm_talon",
        "chance": 40,
        "min": 1,
        "max": 1
      }
    ],
    "xp": 440,
    "gold": {
      "min": 30,
      "max": 48
    }
  },
  "ancient_ruins_stone_sentinel": {
    "id": "ancient_ruins_stone_sentinel",
    "name": "🗿 Pharaoh's Colossus",
    "location": [
      "ancient_ruins"
    ],
    "tier": 2,
    "stats": {
      "hp": 2080,
      "mana": 800,
      "attack": 368,
      "defense": 256,
      "agility": 208
    },
    "skills": [
      {
        "id": "heavy_strike",
        "name": "Heavy Strike",
        "description": "Powerful physical attack",
        "manaCost": 20,
        "cooldown": 9,
        "damageType": "physical",
        "baseDamage": 27,
        "effects": [
          {
            "type": "stun",
            "value": 1,
            "duration": 4
          }
        ]
      },
      {
        "id": "power_up",
        "name": "Power Up",
        "description": "Increases own power",
        "manaCost": 15,
        "cooldown": 9,
        "effects": [
          {
            "type": "buff_atk",
            "value": 10,
            "duration": 4
          }
        ]
      }
    ],
    "passive": {
      "id": "stone_skin",
      "name": "Stone Skin",
      "emoji": "🪨",
      "effect": "defense_boost",
      "value": 8
    },
    "drops": [
      {
        "item": "ancient_stone",
        "chance": 70,
        "min": 1,
        "max": 2
      },
      {
        "item": "sentinel_core",
        "chance": 40,
        "min": 1,
        "max": 1
      }
    ],
    "xp": 448,
    "gold": {
      "min": 30,
      "max": 49
    }
  },
  "ancient_ruins_cursed_pharaoh": {
    "id": "ancient_ruins_cursed_pharaoh",
    "name": "👑 Withered Sovereign",
    "location": [
      "ancient_ruins"
    ],
    "tier": 2,
    "stats": {
      "hp": 1920,
      "mana": 800,
      "attack": 416,
      "defense": 208,
      "agility": 240
    },
    "skills": [
      {
        "id": "magic_blast",
        "name": "Magic Blast",
        "description": "Magical energy blast",
        "manaCost": 22,
        "cooldown": 9,
        "damageType": "magical",
        "baseDamage": 31,
        "effects": [
          {
            "type": "manaburn",
            "value": 20,
            "duration": 1
          }
        ]
      },
      {
        "id": "weaken",
        "name": "Weaken",
        "description": "Weakens enemy",
        "manaCost": 15,
        "cooldown": 9,
        "effects": [
          {
            "type": "debuff_def",
            "value": 8,
            "duration": 4
          }
        ]
      }
    ],
    "passive": {
      "id": "fast_regeneration",
      "name": "Fast Regeneration",
      "emoji": "💚",
      "effect": "regen",
      "value": 10
    },
    "drops": [
      {
        "item": "pharaoh_crown",
        "chance": 70,
        "min": 1,
        "max": 2
      },
      {
        "item": "cursed_gold",
        "chance": 40,
        "min": 1,
        "max": 1
      }
    ],
    "xp": 472,
    "gold": {
      "min": 33,
      "max": 54
    }
  },
  "ancient_ruins_sand_colossus": {
    "id": "ancient_ruins_sand_colossus",
    "name": "🗿 Sandborn Titan",
    "location": [
      "ancient_ruins"
    ],
    "tier": 2,
    "stats": {
      "hp": 2320,
      "mana": 800,
      "attack": 384,
      "defense": 272,
      "agility": 224
    },
    "skills": [
      {
        "id": "heavy_strike",
        "name": "Heavy Strike",
        "description": "Powerful physical attack",
        "manaCost": 20,
        "cooldown": 9,
        "damageType": "physical",
        "baseDamage": 28,
        "effects": [
          {
            "type": "stun",
            "value": 1,
            "duration": 4
          }
        ]
      },
      {
        "id": "power_up",
        "name": "Power Up",
        "description": "Increases own power",
        "manaCost": 15,
        "cooldown": 9,
        "effects": [
          {
            "type": "buff_atk",
            "value": 10,
            "duration": 4
          }
        ]
      }
    ],
    "passive": {
      "id": "adaptive",
      "name": "Adaptive",
      "emoji": "🔄",
      "effect": "adaptive",
      "value": 3,
      "interval": 3
    },
    "drops": [
      {
        "item": "colossus_fragment",
        "chance": 70,
        "min": 1,
        "max": 2
      },
      {
        "item": "ancient_gem",
        "chance": 40,
        "min": 1,
        "max": 1
      }
    ],
    "xp": 488,
    "gold": {
      "min": 34,
      "max": 56
    }
  },
  "magma_chamber_fire_demon": {
    "id": "magma_chamber_fire_demon",
    "name": "😈 Infernal Fiend",
    "location": [
      "magma_chamber"
    ],
    "tier": 2,
    "stats": {
      "hp": 2000,
      "mana": 800,
      "attack": 448,
      "defense": 192,
      "agility": 256
    },
    "skills": [
      {
        "id": "flame_strike",
        "name": "Flame Strike",
        "description": "Burning attack",
        "manaCost": 20,
        "cooldown": 9,
        "damageType": "magical",
        "baseDamage": 33,
        "effects": [
          {
            "type": "burn",
            "value": 8,
            "duration": 4
          }
        ]
      },
      {
        "id": "magic_blast",
        "name": "Magic Blast",
        "description": "Magical energy blast",
        "manaCost": 22,
        "cooldown": 9,
        "damageType": "magical",
        "baseDamage": 33,
        "effects": [
          {
            "type": "manaburn",
            "value": 20,
            "duration": 1
          }
        ]
      }
    ],
    "passive": {
      "id": "burning_aura",
      "name": "Burning Aura",
      "emoji": "🔥",
      "effect": "burn_on_hit",
      "value": 6,
      "chance": 25,
      "duration": 4
    },
    "drops": [
      {
        "item": "demon_horn",
        "chance": 70,
        "min": 1,
        "max": 2
      },
      {
        "item": "infernal_core",
        "chance": 40,
        "min": 1,
        "max": 1
      }
    ],
    "xp": 464,
    "gold": {
      "min": 32,
      "max": 52
    }
  },
  "magma_chamber_lava_titan": {
    "id": "magma_chamber_lava_titan",
    "name": "🔥 Magmaborn Giant",
    "location": [
      "magma_chamber"
    ],
    "tier": 2,
    "stats": {
      "hp": 2400,
      "mana": 800,
      "attack": 416,
      "defense": 256,
      "agility": 240
    },
    "skills": [
      {
        "id": "flame_strike",
        "name": "Flame Strike",
        "description": "Burning attack",
        "manaCost": 20,
        "cooldown": 9,
        "damageType": "magical",
        "baseDamage": 31,
        "effects": [
          {
            "type": "burn",
            "value": 8,
            "duration": 4
          }
        ]
      },
      {
        "id": "heavy_strike",
        "name": "Heavy Strike",
        "description": "Powerful physical attack",
        "manaCost": 20,
        "cooldown": 9,
        "damageType": "physical",
        "baseDamage": 31,
        "effects": [
          {
            "type": "stun",
            "value": 1,
            "duration": 4
          }
        ]
      }
    ],
    "passive": {
      "id": "enrage",
      "name": "Enrage",
      "emoji": "😡",
      "effect": "enrage",
      "value": 12,
      "threshold": 30
    },
    "drops": [
      {
        "item": "titan_heart",
        "chance": 70,
        "min": 1,
        "max": 2
      },
      {
        "item": "lava_crystal",
        "chance": 40,
        "min": 1,
        "max": 1
      }
    ],
    "xp": 504,
    "gold": {
      "min": 36,
      "max": 60
    }
  },
  "magma_chamber_inferno_beast": {
    "id": "magma_chamber_inferno_beast",
    "name": "🐺 Blazehowl",
    "location": [
      "magma_chamber"
    ],
    "tier": 2,
    "stats": {
      "hp": 2080,
      "mana": 800,
      "attack": 464,
      "defense": 208,
      "agility": 272
    },
    "skills": [
      {
        "id": "flame_strike",
        "name": "Flame Strike",
        "description": "Burning attack",
        "manaCost": 20,
        "cooldown": 9,
        "damageType": "magical",
        "baseDamage": 34,
        "effects": [
          {
            "type": "burn",
            "value": 8,
            "duration": 4
          }
        ]
      },
      {
        "id": "power_up",
        "name": "Power Up",
        "description": "Increases own power",
        "manaCost": 15,
        "cooldown": 9,
        "effects": [
          {
            "type": "buff_atk",
            "value": 10,
            "duration": 4
          }
        ]
      }
    ],
    "passive": {
      "id": "fast_regeneration",
      "name": "Fast Regeneration",
      "emoji": "💚",
      "effect": "regen",
      "value": 10
    },
    "drops": [
      {
        "item": "inferno_fang",
        "chance": 70,
        "min": 1,
        "max": 2
      },
      {
        "item": "flame_essence",
        "chance": 40,
        "min": 1,
        "max": 1
      }
    ],
    "xp": 480,
    "gold": {
      "min": 33,
      "max": 55
    }
  },
  "spirit_realm_death_knight": {
    "id": "spirit_realm_death_knight",
    "name": "💀 Soulforged Revenant",
    "location": [
      "spirit_realm"
    ],
    "tier": 2,
    "stats": {
      "hp": 5760,
      "mana": 1600,
      "attack": 1120,
      "defense": 640,
      "agility": 672
    },
    "skills": [
      {
        "id": "heavy_strike",
        "name": "Heavy Strike",
        "description": "Powerful physical attack",
        "manaCost": 20,
        "cooldown": 9,
        "damageType": "physical",
        "baseDamage": 42,
        "effects": [
          {
            "type": "stun",
            "value": 1,
            "duration": 4
          }
        ]
      },
      {
        "id": "weaken",
        "name": "Weaken",
        "description": "Weakens enemy",
        "manaCost": 15,
        "cooldown": 9,
        "effects": [
          {
            "type": "debuff_def",
            "value": 8,
            "duration": 4
          }
        ]
      }
    ],
    "passive": {
      "id": "vampiric",
      "name": "Vampiric",
      "emoji": "🧛",
      "effect": "lifesteal",
      "value": 20
    },
    "drops": [
      {
        "item": "death_blade",
        "chance": 70,
        "min": 1,
        "max": 2
      },
      {
        "item": "cursed_armor",
        "chance": 40,
        "min": 1,
        "max": 1
      }
    ],
    "xp": 1360,
    "gold": {
      "min": 50,
      "max": 80
    }
  },
  "spirit_realm_phantom_lord": {
    "id": "spirit_realm_phantom_lord",
    "name": "👻 Voidlord Specter",
    "location": [
      "spirit_realm"
    ],
    "tier": 2,
    "stats": {
      "hp": 5120,
      "mana": 1600,
      "attack": 1216,
      "defense": 512,
      "agility": 704
    },
    "skills": [
      {
        "id": "magic_blast",
        "name": "Magic Blast",
        "description": "Magical energy blast",
        "manaCost": 22,
        "cooldown": 9,
        "damageType": "magical",
        "baseDamage": 45,
        "effects": [
          {
            "type": "manaburn",
            "value": 20,
            "duration": 1
          }
        ]
      },
      {
        "id": "weaken",
        "name": "Weaken",
        "description": "Weakens enemy",
        "manaCost": 15,
        "cooldown": 9,
        "effects": [
          {
            "type": "debuff_def",
            "value": 8,
            "duration": 4
          }
        ]
      }
    ],
    "passive": {
      "id": "mana_spring",
      "name": "Mana Spring",
      "emoji": "💧",
      "effect": "mana_regen",
      "value": 10
    },
    "drops": [
      {
        "item": "phantom_essence",
        "chance": 70,
        "min": 1,
        "max": 2
      },
      {
        "item": "soul_gem",
        "chance": 40,
        "min": 1,
        "max": 1
      }
    ],
    "xp": 1408,
    "gold": {
      "min": 52,
      "max": 85
    }
  },
  "spirit_realm_soul_reaper": {
    "id": "spirit_realm_soul_reaper",
    "name": "💀 Pale Harvester",
    "location": [
      "spirit_realm"
    ],
    "tier": 2,
    "stats": {
      "hp": 5440,
      "mana": 1600,
      "attack": 1280,
      "defense": 576,
      "agility": 768
    },
    "skills": [
      {
        "id": "magic_blast",
        "name": "Magic Blast",
        "description": "Magical energy blast",
        "manaCost": 22,
        "cooldown": 9,
        "damageType": "magical",
        "baseDamage": 48,
        "effects": [
          {
            "type": "manaburn",
            "value": 20,
            "duration": 1
          }
        ]
      },
      {
        "id": "heavy_strike",
        "name": "Heavy Strike",
        "description": "Powerful physical attack",
        "manaCost": 20,
        "cooldown": 9,
        "damageType": "physical",
        "baseDamage": 48,
        "effects": [
          {
            "type": "stun",
            "value": 1,
            "duration": 4
          }
        ]
      }
    ],
    "passive": {
      "id": "enrage",
      "name": "Enrage",
      "emoji": "😡",
      "effect": "enrage",
      "value": 12,
      "threshold": 30
    },
    "drops": [
      {
        "item": "reaper_scythe",
        "chance": 70,
        "min": 1,
        "max": 2
      },
      {
        "item": "soul_crystal",
        "chance": 40,
        "min": 1,
        "max": 1
      }
    ],
    "xp": 1472,
    "gold": {
      "min": 55,
      "max": 90
    }
  },
  "crystal_labyrinth_minotaur": {
    "id": "crystal_labyrinth_minotaur",
    "name": "🐂 Labyrinth Colossus",
    "location": [
      "crystal_labyrinth"
    ],
    "tier": 2,
    "stats": {
      "hp": 6080,
      "mana": 1600,
      "attack": 1152,
      "defense": 704,
      "agility": 672
    },
    "skills": [
      {
        "id": "heavy_strike",
        "name": "Heavy Strike",
        "description": "Powerful physical attack",
        "manaCost": 20,
        "cooldown": 9,
        "damageType": "physical",
        "baseDamage": 43,
        "effects": [
          {
            "type": "stun",
            "value": 1,
            "duration": 4
          }
        ]
      },
      {
        "id": "power_up",
        "name": "Power Up",
        "description": "Increases own power",
        "manaCost": 15,
        "cooldown": 9,
        "effects": [
          {
            "type": "buff_atk",
            "value": 10,
            "duration": 4
          }
        ]
      }
    ],
    "passive": {
      "id": "enrage",
      "name": "Enrage",
      "emoji": "😡",
      "effect": "enrage",
      "value": 12,
      "threshold": 30
    },
    "drops": [
      {
        "item": "minotaur_horn",
        "chance": 70,
        "min": 1,
        "max": 2
      },
      {
        "item": "labyrinth_key",
        "chance": 40,
        "min": 1,
        "max": 1
      }
    ],
    "xp": 1392,
    "gold": {
      "min": 51,
      "max": 82
    }
  },
  "crystal_labyrinth_crystal_dragon": {
    "id": "crystal_labyrinth_crystal_dragon",
    "name": "🐉 Prismshard Dragon",
    "location": [
      "crystal_labyrinth"
    ],
    "tier": 2,
    "stats": {
      "hp": 6400,
      "mana": 1600,
      "attack": 1216,
      "defense": 640,
      "agility": 704
    },
    "skills": [
      {
        "id": "magic_blast",
        "name": "Magic Blast",
        "description": "Magical energy blast",
        "manaCost": 22,
        "cooldown": 9,
        "damageType": "magical",
        "baseDamage": 45,
        "effects": [
          {
            "type": "manaburn",
            "value": 20,
            "duration": 1
          }
        ]
      },
      {
        "id": "power_up",
        "name": "Power Up",
        "description": "Increases own power",
        "manaCost": 15,
        "cooldown": 9,
        "effects": [
          {
            "type": "buff_atk",
            "value": 10,
            "duration": 4
          }
        ]
      }
    ],
    "passive": {
      "id": "adaptive",
      "name": "Adaptive",
      "emoji": "🔄",
      "effect": "adaptive",
      "value": 3,
      "interval": 3
    },
    "drops": [
      {
        "item": "crystal_heart",
        "chance": 70,
        "min": 1,
        "max": 2
      },
      {
        "item": "dragon_gem",
        "chance": 40,
        "min": 1,
        "max": 1
      }
    ],
    "xp": 1520,
    "gold": {
      "min": 58,
      "max": 95
    }
  },
  "crystal_labyrinth_maze_guardian": {
    "id": "crystal_labyrinth_maze_guardian",
    "name": "🗿 Archstone Warden",
    "location": [
      "crystal_labyrinth"
    ],
    "tier": 2,
    "stats": {
      "hp": 5920,
      "mana": 1600,
      "attack": 1088,
      "defense": 768,
      "agility": 640
    },
    "skills": [
      {
        "id": "heavy_strike",
        "name": "Heavy Strike",
        "description": "Powerful physical attack",
        "manaCost": 20,
        "cooldown": 9,
        "damageType": "physical",
        "baseDamage": 40,
        "effects": [
          {
            "type": "stun",
            "value": 1,
            "duration": 4
          }
        ]
      },
      {
        "id": "power_up",
        "name": "Power Up",
        "description": "Increases own power",
        "manaCost": 15,
        "cooldown": 9,
        "effects": [
          {
            "type": "buff_atk",
            "value": 10,
            "duration": 4
          }
        ]
      }
    ],
    "passive": {
      "id": "stone_skin",
      "name": "Stone Skin",
      "emoji": "🪨",
      "effect": "defense_boost",
      "value": 8
    },
    "drops": [
      {
        "item": "guardian_core",
        "chance": 70,
        "min": 1,
        "max": 2
      },
      {
        "item": "maze_crystal",
        "chance": 40,
        "min": 1,
        "max": 1
      }
    ],
    "xp": 1440,
    "gold": {
      "min": 54,
      "max": 88
    }
  },
  "celestial_bridge_fallen_angel": {
    "id": "celestial_bridge_fallen_angel",
    "name": "😇 Shattered Seraph",
    "location": [
      "celestial_bridge"
    ],
    "tier": 2,
    "stats": {
      "hp": 5600,
      "mana": 1600,
      "attack": 1280,
      "defense": 576,
      "agility": 768
    },
    "skills": [
      {
        "id": "magic_blast",
        "name": "Magic Blast",
        "description": "Magical energy blast",
        "manaCost": 22,
        "cooldown": 9,
        "damageType": "magical",
        "baseDamage": 48,
        "effects": [
          {
            "type": "manaburn",
            "value": 20,
            "duration": 1
          }
        ]
      },
      {
        "id": "weaken",
        "name": "Weaken",
        "description": "Weakens enemy",
        "manaCost": 15,
        "cooldown": 9,
        "effects": [
          {
            "type": "debuff_def",
            "value": 8,
            "duration": 4
          }
        ]
      }
    ],
    "passive": {
      "id": "critical_eye",
      "name": "Critical Eye",
      "emoji": "🎯",
      "effect": "crit_boost",
      "value": 15
    },
    "drops": [
      {
        "item": "angel_wing",
        "chance": 70,
        "min": 1,
        "max": 2
      },
      {
        "item": "holy_relic",
        "chance": 40,
        "min": 1,
        "max": 1
      }
    ],
    "xp": 1456,
    "gold": {
      "min": 55,
      "max": 89
    }
  },
  "celestial_bridge_celestial_guardian": {
    "id": "celestial_bridge_celestial_guardian",
    "name": "🛡️ Starplate Warden",
    "location": [
      "celestial_bridge"
    ],
    "tier": 2,
    "stats": {
      "hp": 6240,
      "mana": 1600,
      "attack": 1120,
      "defense": 736,
      "agility": 672
    },
    "skills": [
      {
        "id": "heavy_strike",
        "name": "Heavy Strike",
        "description": "Powerful physical attack",
        "manaCost": 20,
        "cooldown": 9,
        "damageType": "physical",
        "baseDamage": 42,
        "effects": [
          {
            "type": "stun",
            "value": 1,
            "duration": 4
          }
        ]
      },
      {
        "id": "power_up",
        "name": "Power Up",
        "description": "Increases own power",
        "manaCost": 15,
        "cooldown": 9,
        "effects": [
          {
            "type": "buff_atk",
            "value": 10,
            "duration": 4
          }
        ]
      }
    ],
    "passive": {
      "id": "fast_regeneration",
      "name": "Fast Regeneration",
      "emoji": "💚",
      "effect": "regen",
      "value": 10
    },
    "drops": [
      {
        "item": "celestial_armor",
        "chance": 70,
        "min": 1,
        "max": 2
      },
      {
        "item": "divine_essence",
        "chance": 40,
        "min": 1,
        "max": 1
      }
    ],
    "xp": 1488,
    "gold": {
      "min": 56,
      "max": 92
    }
  },
  "celestial_bridge_void_walker": {
    "id": "celestial_bridge_void_walker",
    "name": "🌀 Rift Strider",
    "location": [
      "celestial_bridge"
    ],
    "tier": 2,
    "stats": {
      "hp": 5760,
      "mana": 1600,
      "attack": 1248,
      "defense": 608,
      "agility": 736
    },
    "skills": [
      {
        "id": "magic_blast",
        "name": "Magic Blast",
        "description": "Magical energy blast",
        "manaCost": 22,
        "cooldown": 9,
        "damageType": "magical",
        "baseDamage": 46,
        "effects": [
          {
            "type": "manaburn",
            "value": 20,
            "duration": 1
          }
        ]
      },
      {
        "id": "weaken",
        "name": "Weaken",
        "description": "Weakens enemy",
        "manaCost": 15,
        "cooldown": 9,
        "effects": [
          {
            "type": "debuff_def",
            "value": 8,
            "duration": 4
          }
        ]
      }
    ],
    "passive": {
      "id": "vampiric",
      "name": "Vampiric",
      "emoji": "🧛",
      "effect": "lifesteal",
      "value": 20
    },
    "drops": [
      {
        "item": "void_essence",
        "chance": 70,
        "min": 1,
        "max": 2
      },
      {
        "item": "walker_cloak",
        "chance": 40,
        "min": 1,
        "max": 1
      }
    ],
    "xp": 1424,
    "gold": {
      "min": 53,
      "max": 86
    }
  },
  "void_gate_void_horror": {
    "id": "void_gate_void_horror",
    "name": "👾 Abyss Wretch",
    "location": [
      "void_gate"
    ],
    "tier": 2,
    "stats": {
      "hp": 5920,
      "mana": 1600,
      "attack": 1312,
      "defense": 544,
      "agility": 768
    },
    "skills": [
      {
        "id": "magic_blast",
        "name": "Magic Blast",
        "description": "Magical energy blast",
        "manaCost": 22,
        "cooldown": 9,
        "damageType": "magical",
        "baseDamage": 49,
        "effects": [
          {
            "type": "manaburn",
            "value": 20,
            "duration": 1
          }
        ]
      },
      {
        "id": "weaken",
        "name": "Weaken",
        "description": "Weakens enemy",
        "manaCost": 15,
        "cooldown": 9,
        "effects": [
          {
            "type": "debuff_def",
            "value": 8,
            "duration": 4
          }
        ]
      }
    ],
    "passive": {
      "id": "adaptive",
      "name": "Adaptive",
      "emoji": "🔄",
      "effect": "adaptive",
      "value": 3,
      "interval": 3
    },
    "drops": [
      {
        "item": "horror_tentacle",
        "chance": 70,
        "min": 1,
        "max": 2
      },
      {
        "item": "void_crystal",
        "chance": 40,
        "min": 1,
        "max": 1
      }
    ],
    "xp": 1504,
    "gold": {
      "min": 57,
      "max": 93
    }
  },
  "void_gate_eldritch_beast": {
    "id": "void_gate_eldritch_beast",
    "name": "🦑 Tentacle Abomination",
    "location": [
      "void_gate"
    ],
    "tier": 2,
    "stats": {
      "hp": 6400,
      "mana": 1600,
      "attack": 1280,
      "defense": 640,
      "agility": 768
    },
    "skills": [
      {
        "id": "heavy_strike",
        "name": "Heavy Strike",
        "description": "Powerful physical attack",
        "manaCost": 20,
        "cooldown": 9,
        "damageType": "physical",
        "baseDamage": 48,
        "effects": [
          {
            "type": "stun",
            "value": 1,
            "duration": 4
          }
        ]
      },
      {
        "id": "magic_blast",
        "name": "Magic Blast",
        "description": "Magical energy blast",
        "manaCost": 22,
        "cooldown": 9,
        "damageType": "magical",
        "baseDamage": 48,
        "effects": [
          {
            "type": "manaburn",
            "value": 20,
            "duration": 1
          }
        ]
      }
    ],
    "passive": {
      "id": "enrage",
      "name": "Enrage",
      "emoji": "😡",
      "effect": "enrage",
      "value": 12,
      "threshold": 30
    },
    "drops": [
      {
        "item": "eldritch_eye",
        "chance": 70,
        "min": 1,
        "max": 2
      },
      {
        "item": "chaos_shard",
        "chance": 40,
        "min": 1,
        "max": 1
      }
    ],
    "xp": 1536,
    "gold": {
      "min": 59,
      "max": 96
    }
  },
  "void_gate_chaos_spawn": {
    "id": "void_gate_chaos_spawn",
    "name": "👹 Rift Spawn",
    "location": [
      "void_gate"
    ],
    "tier": 2,
    "stats": {
      "hp": 6080,
      "mana": 1600,
      "attack": 1216,
      "defense": 608,
      "agility": 704
    },
    "skills": [
      {
        "id": "magic_blast",
        "name": "Magic Blast",
        "description": "Magical energy blast",
        "manaCost": 22,
        "cooldown": 9,
        "damageType": "magical",
        "baseDamage": 45,
        "effects": [
          {
            "type": "manaburn",
            "value": 20,
            "duration": 1
          }
        ]
      },
      {
        "id": "power_up",
        "name": "Power Up",
        "description": "Increases own power",
        "manaCost": 15,
        "cooldown": 9,
        "effects": [
          {
            "type": "buff_atk",
            "value": 10,
            "duration": 4
          }
        ]
      }
    ],
    "passive": {
      "id": "fast_regeneration",
      "name": "Fast Regeneration",
      "emoji": "💚",
      "effect": "regen",
      "value": 10
    },
    "drops": [
      {
        "item": "chaos_essence",
        "chance": 70,
        "min": 1,
        "max": 2
      },
      {
        "item": "spawn_core",
        "chance": 40,
        "min": 1,
        "max": 1
      }
    ],
    "xp": 1472,
    "gold": {
      "min": 55,
      "max": 90
    }
  },
  "astral_plane_astral_dragon": {
    "id": "astral_plane_astral_dragon",
    "name": "✨ Celestial Wyrm",
    "location": [
      "astral_plane"
    ],
    "tier": 2,
    "stats": {
      "hp": 6720,
      "mana": 1600,
      "attack": 1344,
      "defense": 704,
      "agility": 800
    },
    "skills": [
      {
        "id": "magic_blast",
        "name": "Magic Blast",
        "description": "Magical energy blast",
        "manaCost": 22,
        "cooldown": 9,
        "damageType": "magical",
        "baseDamage": 50,
        "effects": [
          {
            "type": "manaburn",
            "value": 20,
            "duration": 1
          }
        ]
      },
      {
        "id": "power_up",
        "name": "Power Up",
        "description": "Increases own power",
        "manaCost": 15,
        "cooldown": 9,
        "effects": [
          {
            "type": "buff_atk",
            "value": 10,
            "duration": 4
          }
        ]
      }
    ],
    "passive": {
      "id": "mana_spring",
      "name": "Mana Spring",
      "emoji": "💧",
      "effect": "mana_regen",
      "value": 10
    },
    "drops": [
      {
        "item": "astral_scale",
        "chance": 70,
        "min": 1,
        "max": 2
      },
      {
        "item": "cosmic_heart",
        "chance": 40,
        "min": 1,
        "max": 1
      }
    ],
    "xp": 1600,
    "gold": {
      "min": 62,
      "max": 100
    }
  },
  "astral_plane_reality_warper": {
    "id": "astral_plane_reality_warper",
    "name": "🌀 Nexus Bender",
    "location": [
      "astral_plane"
    ],
    "tier": 2,
    "stats": {
      "hp": 6240,
      "mana": 1600,
      "attack": 1408,
      "defense": 576,
      "agility": 832
    },
    "skills": [
      {
        "id": "magic_blast",
        "name": "Magic Blast",
        "description": "Magical energy blast",
        "manaCost": 22,
        "cooldown": 9,
        "damageType": "magical",
        "baseDamage": 52,
        "effects": [
          {
            "type": "manaburn",
            "value": 20,
            "duration": 1
          }
        ]
      },
      {
        "id": "weaken",
        "name": "Weaken",
        "description": "Weakens enemy",
        "manaCost": 15,
        "cooldown": 9,
        "effects": [
          {
            "type": "debuff_def",
            "value": 8,
            "duration": 4
          }
        ]
      }
    ],
    "passive": {
      "id": "adaptive",
      "name": "Adaptive",
      "emoji": "🔄",
      "effect": "adaptive",
      "value": 3,
      "interval": 3
    },
    "drops": [
      {
        "item": "reality_shard",
        "chance": 70,
        "min": 1,
        "max": 2
      },
      {
        "item": "warper_essence",
        "chance": 40,
        "min": 1,
        "max": 1
      }
    ],
    "xp": 1568,
    "gold": {
      "min": 60,
      "max": 98
    }
  },
  "astral_plane_cosmic_entity": {
    "id": "astral_plane_cosmic_entity",
    "name": "🌌 Void Sovereign",
    "location": [
      "astral_plane"
    ],
    "tier": 2,
    "stats": {
      "hp": 6560,
      "mana": 1600,
      "attack": 1376,
      "defense": 672,
      "agility": 800
    },
    "skills": [
      {
        "id": "magic_blast",
        "name": "Magic Blast",
        "description": "Magical energy blast",
        "manaCost": 22,
        "cooldown": 9,
        "damageType": "magical",
        "baseDamage": 51,
        "effects": [
          {
            "type": "manaburn",
            "value": 20,
            "duration": 1
          }
        ]
      },
      {
        "id": "heavy_strike",
        "name": "Heavy Strike",
        "description": "Powerful physical attack",
        "manaCost": 20,
        "cooldown": 9,
        "damageType": "physical",
        "baseDamage": 51,
        "effects": [
          {
            "type": "stun",
            "value": 1,
            "duration": 4
          }
        ]
      }
    ],
    "passive": {
      "id": "critical_eye",
      "name": "Critical Eye",
      "emoji": "🎯",
      "effect": "crit_boost",
      "value": 15
    },
    "drops": [
      {
        "item": "cosmic_core",
        "chance": 70,
        "min": 1,
        "max": 2
      },
      {
        "item": "entity_fragment",
        "chance": 40,
        "min": 1,
        "max": 1
      }
    ],
    "xp": 1632,
    "gold": {
      "min": 63,
      "max": 102
    }
  },
  "abyssal_trench_kraken": {
    "id": "abyssal_trench_kraken",
    "name": "🦑 Deep Terror",
    "location": [
      "abyssal_trench"
    ],
    "tier": 2,
    "stats": {
      "hp": 7040,
      "mana": 1600,
      "attack": 1440,
      "defense": 736,
      "agility": 864
    },
    "skills": [
      {
        "id": "heavy_strike",
        "name": "Heavy Strike",
        "description": "Powerful physical attack",
        "manaCost": 20,
        "cooldown": 9,
        "damageType": "physical",
        "baseDamage": 54,
        "effects": [
          {
            "type": "stun",
            "value": 1,
            "duration": 4
          }
        ]
      },
      {
        "id": "weaken",
        "name": "Weaken",
        "description": "Weakens enemy",
        "manaCost": 15,
        "cooldown": 9,
        "effects": [
          {
            "type": "debuff_def",
            "value": 8,
            "duration": 4
          }
        ]
      }
    ],
    "passive": {
      "id": "enrage",
      "name": "Enrage",
      "emoji": "😡",
      "effect": "enrage",
      "value": 12,
      "threshold": 30
    },
    "drops": [
      {
        "item": "kraken_tentacle",
        "chance": 70,
        "min": 1,
        "max": 2
      },
      {
        "item": "deep_pearl",
        "chance": 40,
        "min": 1,
        "max": 1
      }
    ],
    "xp": 1680,
    "gold": {
      "min": 65,
      "max": 105
    }
  },
  "abyssal_trench_leviathan": {
    "id": "abyssal_trench_leviathan",
    "name": "🐋 Ancient Leviathan",
    "location": [
      "abyssal_trench"
    ],
    "tier": 2,
    "stats": {
      "hp": 7680,
      "mana": 1600,
      "attack": 1344,
      "defense": 832,
      "agility": 800
    },
    "skills": [
      {
        "id": "heavy_strike",
        "name": "Heavy Strike",
        "description": "Powerful physical attack",
        "manaCost": 20,
        "cooldown": 9,
        "damageType": "physical",
        "baseDamage": 50,
        "effects": [
          {
            "type": "stun",
            "value": 1,
            "duration": 4
          }
        ]
      },
      {
        "id": "power_up",
        "name": "Power Up",
        "description": "Increases own power",
        "manaCost": 15,
        "cooldown": 9,
        "effects": [
          {
            "type": "buff_atk",
            "value": 10,
            "duration": 4
          }
        ]
      }
    ],
    "passive": {
      "id": "fast_regeneration",
      "name": "Fast Regeneration",
      "emoji": "💚",
      "effect": "regen",
      "value": 10
    },
    "drops": [
      {
        "item": "leviathan_scale",
        "chance": 70,
        "min": 1,
        "max": 2
      },
      {
        "item": "ocean_heart",
        "chance": 40,
        "min": 1,
        "max": 1
      }
    ],
    "xp": 1728,
    "gold": {
      "min": 68,
      "max": 110
    }
  },
  "abyssal_trench_deep_one": {
    "id": "abyssal_trench_deep_one",
    "name": "🐙 Abyss Dweller",
    "location": [
      "abyssal_trench"
    ],
    "tier": 2,
    "stats": {
      "hp": 6400,
      "mana": 1600,
      "attack": 1472,
      "defense": 640,
      "agility": 864
    },
    "skills": [
      {
        "id": "magic_blast",
        "name": "Magic Blast",
        "description": "Magical energy blast",
        "manaCost": 22,
        "cooldown": 9,
        "damageType": "magical",
        "baseDamage": 55,
        "effects": [
          {
            "type": "manaburn",
            "value": 20,
            "duration": 1
          }
        ]
      },
      {
        "id": "weaken",
        "name": "Weaken",
        "description": "Weakens enemy",
        "manaCost": 15,
        "cooldown": 9,
        "effects": [
          {
            "type": "debuff_def",
            "value": 8,
            "duration": 4
          }
        ]
      }
    ],
    "passive": {
      "id": "vampiric",
      "name": "Vampiric",
      "emoji": "🧛",
      "effect": "lifesteal",
      "value": 20
    },
    "drops": [
      {
        "item": "deep_essence",
        "chance": 70,
        "min": 1,
        "max": 2
      },
      {
        "item": "abyssal_gem",
        "chance": 40,
        "min": 1,
        "max": 1
      }
    ],
    "xp": 1648,
    "gold": {
      "min": 64,
      "max": 103
    }
  },
  "cursed_graveyard_lich": {
    "id": "cursed_graveyard_lich",
    "name": "💀 Undying Lich",
    "location": [
      "cursed_graveyard"
    ],
    "tier": 2,
    "stats": {
      "hp": 6080,
      "mana": 1600,
      "attack": 1536,
      "defense": 608,
      "agility": 896
    },
    "skills": [
      {
        "id": "magic_blast",
        "name": "Magic Blast",
        "description": "Magical energy blast",
        "manaCost": 22,
        "cooldown": 9,
        "damageType": "magical",
        "baseDamage": 57,
        "effects": [
          {
            "type": "manaburn",
            "value": 20,
            "duration": 1
          }
        ]
      },
      {
        "id": "weaken",
        "name": "Weaken",
        "description": "Weakens enemy",
        "manaCost": 15,
        "cooldown": 9,
        "effects": [
          {
            "type": "debuff_def",
            "value": 8,
            "duration": 4
          }
        ]
      }
    ],
    "passive": {
      "id": "mana_spring",
      "name": "Mana Spring",
      "emoji": "💧",
      "effect": "mana_regen",
      "value": 10
    },
    "drops": [
      {
        "item": "lich_phylactery",
        "chance": 70,
        "min": 1,
        "max": 2
      },
      {
        "item": "death_essence",
        "chance": 40,
        "min": 1,
        "max": 1
      }
    ],
    "xp": 1696,
    "gold": {
      "min": 66,
      "max": 106
    }
  },
  "cursed_graveyard_death_lord": {
    "id": "cursed_graveyard_death_lord",
    "name": "👑 Grave Sovereign",
    "location": [
      "cursed_graveyard"
    ],
    "tier": 2,
    "stats": {
      "hp": 6720,
      "mana": 1600,
      "attack": 1408,
      "defense": 768,
      "agility": 832
    },
    "skills": [
      {
        "id": "heavy_strike",
        "name": "Heavy Strike",
        "description": "Powerful physical attack",
        "manaCost": 20,
        "cooldown": 9,
        "damageType": "physical",
        "baseDamage": 52,
        "effects": [
          {
            "type": "stun",
            "value": 1,
            "duration": 4
          }
        ]
      },
      {
        "id": "power_up",
        "name": "Power Up",
        "description": "Increases own power",
        "manaCost": 15,
        "cooldown": 9,
        "effects": [
          {
            "type": "buff_atk",
            "value": 10,
            "duration": 4
          }
        ]
      }
    ],
    "passive": {
      "id": "vampiric",
      "name": "Vampiric",
      "emoji": "🧛",
      "effect": "lifesteal",
      "value": 20
    },
    "drops": [
      {
        "item": "death_crown",
        "chance": 70,
        "min": 1,
        "max": 2
      },
      {
        "item": "cursed_blade",
        "chance": 40,
        "min": 1,
        "max": 1
      }
    ],
    "xp": 1712,
    "gold": {
      "min": 67,
      "max": 108
    }
  },
  "cursed_graveyard_bone_dragon": {
    "id": "cursed_graveyard_bone_dragon",
    "name": "🐉 Ossified Wyrm",
    "location": [
      "cursed_graveyard"
    ],
    "tier": 2,
    "stats": {
      "hp": 7360,
      "mana": 1600,
      "attack": 1472,
      "defense": 704,
      "agility": 864
    },
    "skills": [
      {
        "id": "magic_blast",
        "name": "Magic Blast",
        "description": "Magical energy blast",
        "manaCost": 22,
        "cooldown": 9,
        "damageType": "magical",
        "baseDamage": 55,
        "effects": [
          {
            "type": "manaburn",
            "value": 20,
            "duration": 1
          }
        ]
      },
      {
        "id": "heavy_strike",
        "name": "Heavy Strike",
        "description": "Powerful physical attack",
        "manaCost": 20,
        "cooldown": 9,
        "damageType": "physical",
        "baseDamage": 55,
        "effects": [
          {
            "type": "stun",
            "value": 1,
            "duration": 4
          }
        ]
      }
    ],
    "passive": {
      "id": "enrage",
      "name": "Enrage",
      "emoji": "😡",
      "effect": "enrage",
      "value": 12,
      "threshold": 30
    },
    "drops": [
      {
        "item": "bone_scale",
        "chance": 70,
        "min": 1,
        "max": 2
      },
      {
        "item": "undead_heart",
        "chance": 40,
        "min": 1,
        "max": 1
      }
    ],
    "xp": 1760,
    "gold": {
      "min": 70,
      "max": 112
    }
  },
  "demon_fortress_demon_lord": {
    "id": "demon_fortress_demon_lord",
    "name": "😈 Hellbound Overlord",
    "location": [
      "demon_fortress"
    ],
    "tier": 2,
    "stats": {
      "hp": 8000,
      "mana": 1600,
      "attack": 1600,
      "defense": 800,
      "agility": 960
    },
    "skills": [
      {
        "id": "flame_strike",
        "name": "Flame Strike",
        "description": "Burning attack",
        "manaCost": 20,
        "cooldown": 9,
        "damageType": "magical",
        "baseDamage": 60,
        "effects": [
          {
            "type": "burn",
            "value": 8,
            "duration": 4
          }
        ]
      },
      {
        "id": "magic_blast",
        "name": "Magic Blast",
        "description": "Magical energy blast",
        "manaCost": 22,
        "cooldown": 9,
        "damageType": "magical",
        "baseDamage": 60,
        "effects": [
          {
            "type": "manaburn",
            "value": 20,
            "duration": 1
          }
        ]
      }
    ],
    "passive": {
      "id": "adaptive",
      "name": "Adaptive",
      "emoji": "🔄",
      "effect": "adaptive",
      "value": 3,
      "interval": 3
    },
    "drops": [
      {
        "item": "demon_crown",
        "chance": 70,
        "min": 1,
        "max": 2
      },
      {
        "item": "infernal_core",
        "chance": 40,
        "min": 1,
        "max": 1
      }
    ],
    "xp": 1840,
    "gold": {
      "min": 75,
      "max": 120
    }
  },
  "demon_fortress_hell_knight": {
    "id": "demon_fortress_hell_knight",
    "name": "⚔️ Infernal Champion",
    "location": [
      "demon_fortress"
    ],
    "tier": 2,
    "stats": {
      "hp": 7040,
      "mana": 1600,
      "attack": 1536,
      "defense": 896,
      "agility": 896
    },
    "skills": [
      {
        "id": "heavy_strike",
        "name": "Heavy Strike",
        "description": "Powerful physical attack",
        "manaCost": 20,
        "cooldown": 9,
        "damageType": "physical",
        "baseDamage": 57,
        "effects": [
          {
            "type": "stun",
            "value": 1,
            "duration": 4
          }
        ]
      },
      {
        "id": "flame_strike",
        "name": "Flame Strike",
        "description": "Burning attack",
        "manaCost": 20,
        "cooldown": 9,
        "damageType": "magical",
        "baseDamage": 57,
        "effects": [
          {
            "type": "burn",
            "value": 8,
            "duration": 4
          }
        ]
      }
    ],
    "passive": {
      "id": "enrage",
      "name": "Enrage",
      "emoji": "😡",
      "effect": "enrage",
      "value": 12,
      "threshold": 30
    },
    "drops": [
      {
        "item": "hell_armor",
        "chance": 70,
        "min": 1,
        "max": 2
      },
      {
        "item": "demon_blade",
        "chance": 40,
        "min": 1,
        "max": 1
      }
    ],
    "xp": 1792,
    "gold": {
      "min": 72,
      "max": 115
    }
  },
  "demon_fortress_infernal_dragon": {
    "id": "demon_fortress_infernal_dragon",
    "name": "🐲 Demonscale Dragon",
    "location": [
      "demon_fortress"
    ],
    "tier": 2,
    "stats": {
      "hp": 7680,
      "mana": 1600,
      "attack": 1664,
      "defense": 768,
      "agility": 992
    },
    "skills": [
      {
        "id": "flame_strike",
        "name": "Flame Strike",
        "description": "Burning attack",
        "manaCost": 20,
        "cooldown": 9,
        "damageType": "magical",
        "baseDamage": 62,
        "effects": [
          {
            "type": "burn",
            "value": 8,
            "duration": 4
          }
        ]
      },
      {
        "id": "power_up",
        "name": "Power Up",
        "description": "Increases own power",
        "manaCost": 15,
        "cooldown": 9,
        "effects": [
          {
            "type": "buff_atk",
            "value": 10,
            "duration": 4
          }
        ]
      }
    ],
    "passive": {
      "id": "burning_aura",
      "name": "Burning Aura",
      "emoji": "🔥",
      "effect": "burn_on_hit",
      "value": 6,
      "chance": 25,
      "duration": 4
    },
    "drops": [
      {
        "item": "infernal_scale",
        "chance": 70,
        "min": 1,
        "max": 2
      },
      {
        "item": "dragon_soul",
        "chance": 40,
        "min": 1,
        "max": 1
      }
    ],
    "xp": 1888,
    "gold": {
      "min": 78,
      "max": 125
    }
  },
  "world_tree_peak_treant_king": {
    "id": "world_tree_peak_treant_king",
    "name": "🌳 World Tree Elder",
    "location": [
      "world_tree_peak"
    ],
    "tier": 2,
    "stats": {
      "hp": 8320,
      "mana": 1600,
      "attack": 1472,
      "defense": 960,
      "agility": 864
    },
    "skills": [
      {
        "id": "heavy_strike",
        "name": "Heavy Strike",
        "description": "Powerful physical attack",
        "manaCost": 20,
        "cooldown": 9,
        "damageType": "physical",
        "baseDamage": 55,
        "effects": [
          {
            "type": "stun",
            "value": 1,
            "duration": 4
          }
        ]
      },
      {
        "id": "power_up",
        "name": "Power Up",
        "description": "Increases own power",
        "manaCost": 15,
        "cooldown": 9,
        "effects": [
          {
            "type": "buff_atk",
            "value": 10,
            "duration": 4
          }
        ]
      }
    ],
    "passive": {
      "id": "fast_regeneration",
      "name": "Fast Regeneration",
      "emoji": "💚",
      "effect": "regen",
      "value": 10
    },
    "drops": [
      {
        "item": "ancient_wood",
        "chance": 70,
        "min": 1,
        "max": 2
      },
      {
        "item": "nature_crown",
        "chance": 40,
        "min": 1,
        "max": 1
      }
    ],
    "xp": 1808,
    "gold": {
      "min": 73,
      "max": 118
    }
  },
  "world_tree_peak_nature_guardian": {
    "id": "world_tree_peak_nature_guardian",
    "name": "🍃 Grove Sovereign",
    "location": [
      "world_tree_peak"
    ],
    "tier": 2,
    "stats": {
      "hp": 7360,
      "mana": 1600,
      "attack": 1504,
      "defense": 832,
      "agility": 896
    },
    "skills": [
      {
        "id": "magic_blast",
        "name": "Magic Blast",
        "description": "Magical energy blast",
        "manaCost": 22,
        "cooldown": 9,
        "damageType": "magical",
        "baseDamage": 56,
        "effects": [
          {
            "type": "manaburn",
            "value": 20,
            "duration": 1
          }
        ]
      },
      {
        "id": "power_up",
        "name": "Power Up",
        "description": "Increases own power",
        "manaCost": 15,
        "cooldown": 9,
        "effects": [
          {
            "type": "buff_atk",
            "value": 10,
            "duration": 4
          }
        ]
      }
    ],
    "passive": {
      "id": "adaptive",
      "name": "Adaptive",
      "emoji": "🔄",
      "effect": "adaptive",
      "value": 3,
      "interval": 3
    },
    "drops": [
      {
        "item": "guardian_seed",
        "chance": 70,
        "min": 1,
        "max": 2
      },
      {
        "item": "life_essence",
        "chance": 40,
        "min": 1,
        "max": 1
      }
    ],
    "xp": 1824,
    "gold": {
      "min": 74,
      "max": 119
    }
  },
  "world_tree_peak_forest_dragon": {
    "id": "world_tree_peak_forest_dragon",
    "name": "🐉 Verdant Wyrm",
    "location": [
      "world_tree_peak"
    ],
    "tier": 2,
    "stats": {
      "hp": 7840,
      "mana": 1600,
      "attack": 1568,
      "defense": 864,
      "agility": 928
    },
    "skills": [
      {
        "id": "magic_blast",
        "name": "Magic Blast",
        "description": "Magical energy blast",
        "manaCost": 22,
        "cooldown": 9,
        "damageType": "magical",
        "baseDamage": 58,
        "effects": [
          {
            "type": "manaburn",
            "value": 20,
            "duration": 1
          }
        ]
      },
      {
        "id": "heavy_strike",
        "name": "Heavy Strike",
        "description": "Powerful physical attack",
        "manaCost": 20,
        "cooldown": 9,
        "damageType": "physical",
        "baseDamage": 58,
        "effects": [
          {
            "type": "stun",
            "value": 1,
            "duration": 4
          }
        ]
      }
    ],
    "passive": {
      "id": "critical_eye",
      "name": "Critical Eye",
      "emoji": "🎯",
      "effect": "crit_boost",
      "value": 15
    },
    "drops": [
      {
        "item": "forest_scale",
        "chance": 70,
        "min": 1,
        "max": 2
      },
      {
        "item": "world_heart",
        "chance": 40,
        "min": 1,
        "max": 1
      }
    ],
    "xp": 1920,
    "gold": {
      "min": 80,
      "max": 128
    }
  }
};

Object.values(enemies).forEach((enemy) => {
  if (!enemy?.stats) return;

  Object.keys(enemy.stats).forEach((statKey) => {
    if (typeof enemy.stats[statKey] === "number") {
      enemy.stats[statKey] *= 2;
    }
  });
});

// ── Helper Functions ──────────────────────────────────────

/**
 * Get an enemy by its ID
 * @param {string} enemyId - The enemy ID
 * @returns {object|null} The enemy object or null if not found
 */
export function getEnemyById(enemyId) {
  return enemies[enemyId] || null;
}

/**
 * Get a random enemy from a specific location
 * @param {string} locationId - The location ID
 * @returns {object|null} A random enemy object or null if no enemies at location
 */
export function getRandomEnemy(locationId) {
  // Get all enemies for this location
  const locationEnemies = Object.values(enemies).filter(
    (enemy) => enemy.location && enemy.location.includes(locationId)
  );

  if (locationEnemies.length === 0) return null;

  // Pick random enemy
  const randomIndex = Math.floor(Math.random() * locationEnemies.length);
  return locationEnemies[randomIndex];
}

// ── Exports ───────────────────────────────────────────────

export default enemies;
