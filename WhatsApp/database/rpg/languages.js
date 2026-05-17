/*
  RPG Language System
  Base : Lenwy SCM — RPG Extension

  Supported languages:
  - en (English)
  - id (Indonesian)
*/

export const languages = {
  en: {
    code: "en",
    name: "English",
    flag: "🇬🇧",
    
    // Common
    common: {
      level: "Level",
      gold: "Gold",
      hp: "HP",
      mana: "Mana",
      attack: "Attack",
      defense: "Defense",
      agility: "Agility",
      luck: "Luck",
      xp: "XP",
      class: "Class",
      location: "Location",
      inventory: "Inventory",
      equipment: "Equipment",
      skills: "Skills",
      quests: "Quests",
      party: "Party",
      yes: "Yes",
      no: "No",
      cancel: "Cancel",
      confirm: "Confirm",
      success: "Success",
      failed: "Failed",
      error: "Error",
      loading: "Loading",
      notRegistered: "You are not registered yet!",
      registerFirst: "Type *register <your name>* to start your adventure.",
      notRegisteredFull: "⚠️ *You are not registered yet!*\n\nType *register <your name>* to start.",
    },
    
    // Commands
    commands: {
      register: "register",
      profile: "profile",
      hunt: "hunt",
      location: "location",
      travel: "travel",
      shop: "shop",
      buy: "buy",
      sell: "sell",
      bag: "bag",
      equip: "equip",
      language: "language",
      addstat: "addstat",
    },
    
    // Register
    register: {
      alreadyRegistered: "⚠️ *You are already registered!*\n\nYour character: *{name}* ({class})\nUse *profile* to see your stats.",
      chooseClass: "🎮 *Choose Your Class*\n\n{classes}\n\nType *class <name>* to choose.\nExample: *class warrior*",
      classChosen: "✅ *Character Created!*\n\n👤 Name: *{name}*\n🎓 Class: *{class}*\n⭐ Level: 1\n💰 Gold: 50\n\nYour adventure begins! Type *profile* to see your stats.",
      invalidClass: "❌ *Invalid class!*\n\nAvailable classes: {classes}",
      needName: "⚠️ *Please provide a name!*\n\nUsage: *register <your name>*\nExample: *register John*",
    },
    
    // Profile
    profile: {
      title: "👤 *{name}*",
      stats: "📊 *Base Stats:*",
      equipment: "⚔️ *Equipment:*",
      commands: "💡 *Commands:*",
    },
    
    // Language
    language: {
      current: "🌍 *Current Language*\n\n{flag} *{name}*\n\nType *language <code>* to change.\nExample: *language id*",
      available: "🌍 *Available Languages*\n\n{languages}\n\nType *language <code>* to change.\nExample: *language en*",
      changed: "✅ *Language Changed!*\n\n{flag} *{name}*\n\nAll messages will now be in {name}.",
      invalid: "❌ *Invalid language code!*\n\nAvailable languages:\n{languages}",
    },
    
    // Hunt
    hunt: {
      notHere: "🚫 *You can't hunt here!*\n\nTravel to a location with monsters.\nType *location* to see where you are.",
      enemyAppears: "⚔️ *A wild {enemy} appears!*",
      victory: "🏆 *Victory!*\n\nYou defeated *{enemy}*!",
      defeat: "💀 *Defeat!*\n\nYou were defeated by *{enemy}*.",
      levelUp: "🎉 *LEVEL UP!* You are now Level {level}! (+3 stat points)",
    },
    
    // Location
    location: {
      title: "📍 *Current Location*",
      safeZone: "✅ Safe Zone",
      dangerZone: "⚠️ Dangerous Zone",
      actions: "⚡ *Available Actions:*",
      playersHere: "👥 *Players Here:* ({count})",
      connected: "🗺️ *Connected Locations:*",
      travelHint: "Type *travel <location name>* to move.",
    },
    
    // Shop
    shop: {
      title: "🏪 *Shop*",
      yourGold: "💰 Your gold: *{gold}g*",
      buySuccess: "✅ *Purchase Successful!*\n\nYou bought {qty}x {item} for {price}g.",
      buyFailed: "❌ *Purchase Failed!*\n\n{reason}",
      sellSuccess: "✅ *Sold Successfully!*\n\nYou sold {qty}x {item} for {price}g.",
      notEnoughGold: "Not enough gold! You need {need}g but only have {have}g.",
      outOfStock: "Item is out of stock!",
      notInInventory: "You don't have that item!",
      buyNoShop:
        `🚫 *There is no shop here.*\n\n` +
        `Travel to a location with a shop first.\n\n` +
        `Type *{prefix}shop* to see available locations.`,
      buyUsage:
        `⚠️ *Usage:* {prefix}buy <item name> [qty]\n` +
        `Example: *{prefix}buy health_potion*\n` +
        `Example: *{prefix}buy health_potion 3*\n\n` +
        `Type *{prefix}shop* to see available items.`,
      buyItemNotFound: `❓ *Item "{item}" not found.*\n\nType *{prefix}shop* to see available items.`,
      itemNotPurchasable: `⚠️ *{name}* cannot be purchased.`,
      itemNotInThisShop:
        `🚫 *{name}* is not available in this shop.\n\n` +
        `Different shops sell different items.\nType *{prefix}shop* to see what's available here.`,
      buyLowStock:
        `📦 *Not enough stock!*\n\n` +
        `{name}\n` +
        `Available: *{stock}*\n` +
        `You want: *{want}*\n\n` +
        `Shop restocks every 30 minutes.`,
      purchaseFailed: `⚠️ *Purchase failed:* {message}`,
      buyRemainingGold: `💰 Remaining gold: *{gold}g*\n`,
      buyStockRemaining: `📦 Stock remaining: *{stock}*\n\n`,
      buyAddedToInventory: `Item added to your 🎒 inventory!`,
    },
    
    // Combat
    combat: {
      attack: "attack",
      defend: "defend",
      skill: "skill",
      item: "item",
      run: "run",
      status: "status",
      yourTurn: "💡 *Your turn!*\nType: attack / defend / skill [1/2/3] / item / run",
      enemyTurn: "👾 *Enemy's turn!*",
      stunned: "💫 *Stunned!* Can't move this turn.",
      missed: "💨 *Miss!*",
      critical: "💥 *CRITICAL HIT!*",
      dodged: "⚡ *Dodged!*",
    },
    
    // Stats
    stats: {
      title: "📊 *STAT ALLOCATION*",
      available: "💎 Available Points: *{points}*",
      current: "*Current Stats:*",
      increases: "*Stat Increases:*",
      perPoint: "per point",
      success: "✅ *STAT INCREASED!*\n\n{emoji} *{stat}*\n{old} → {new} (+{increase})",
      notEnough: "❌ *Not enough stat points!*\n\nYou have: {have} points\nYou need: {need} points",
    },
    
    // Bag/Inventory
    bag: {
      title: "🎒 *YOUR INVENTORY*",
      empty: "Your inventory is empty!",
      gold: "💰 Gold: *{gold}g*",
      items: "📦 *Items:* ({count})",
      commands: "💡 *Commands:*",
      useItem: "• !item <name> - Use item",
      equipItem: "• !equip <name> - Equip item",
      sellItem: "• !sell <name> - Sell item",
    },
    
    // Quests
    quests: {
      title: "📜 *QUEST OVERVIEW*",
      daily: "📅 *Daily:* {completed}/{total} ready to claim",
      weekly: "📆 *Weekly:* {completed}/{total} ready to claim",
      monthly: "📊 *Monthly:* {completed}/{total} ready to claim",
      viewSpecific: "*View specific quests:*",
      claimRewards: "*Claim rewards:*",
      readyToClaim: "🎁 *{count} quest(s) ready to claim!*",
      allClaimed: "✅ *All quests claimed!*",
      keepGoing: "💪 *Keep going!*",
      progress: "📊 Progress: {claimed}/{total} claimed",
    },
    
    // Claim
    claim: {
      title: "🎁 *QUEST REWARDS CLAIMED!*",
      claimed: "Claimed {count} {period} quest(s)!",
      goldEarned: "💰 Gold: +{gold} (Total: {total})",
      xpEarned: "⭐ XP: +{xp}",
      itemsReceived: "🎁 *Items Received:*",
      viewRemaining: "Type *quests {period}* to view remaining quests.",
      nothingToClaim: "❌ *No quests ready to claim!*\n\nComplete quests first, then claim rewards.",
      invalidPeriod: "❌ *Invalid period!*\n\nUse: *claim daily*, *claim weekly*, or *claim monthly*",
      noQuestData: "⚠️ *No quest data found!*",
      questsResetTitle: "⚠️ *Quests have been reset!*",
      questsResetBody: "Your {period} quests have been reset for the new period.",
      questsResetHint: "Type *quests {period}* to view new quests.",
      periodDaily: "daily",
      periodWeekly: "weekly",
      periodMonthly: "monthly",
      repBonusLine: "   ✨ Good Reputation Bonus: +{bonus} gold\n",
      reputationGainLine: "😊 Reputation: +{amount}\n",
      levelUp: "\n🎉 *LEVEL UP!* You are now level {level}!\n",
      itemLine: "• {id} x{qty}\n",
      sectionRule: "========================\n\n",
    },
    
    // Travel
    travel: {
      currentLocation: "📍 *Current Location*",
      travelTo: "🚶 *Travelling to {location}...*",
      arrived: "📍 *You arrived at {location}*",
      discovered: "🗺️ *New location discovered!*",
      safeZone: "✅ Safe Zone",
      dangerZone: "⚠️ Dangerous Zone",
      actions: "⚡ *Available Actions:*",
      playersHere: "👥 *Players Here:* ({count})",
      connectedLocations: "🗺️ *Connected Locations:*",
      travelHint: "Type *travel <location>* to move.",
      cantTravel: "❌ *You can't travel there!*\n\n{reason}",
      notConnected: "That location is not connected to your current location.",
      levelTooLow: "You need to be Level {level} to travel there.",
      warning: "⚠️ *Warning: This area is dangerous for Level {playerLevel}! (Recommended: Lv.{minLevel})*",
    },
    
    // Sell
    sell: {
      noShop: "🚫 *There is no shop here.*\n\nTravel to a location with a shop first.",
      usage: "⚠️ *Usage:* sell <item name> [qty]\nExample: *sell rat_fur*\nExample: *sell rat_fur 5*\nExample: *sell all rat_fur*\n\nType *bag* to see your inventory.",
      itemNotFound: "❓ *Item \"{item}\" not found.*\n\nType *bag* to see your inventory.",
      cannotSell: "⚠️ *{item}* cannot be sold.",
      notInInventory: "⚠️ *You don't have {item} in your inventory.*\n\nType *bag* to see your items.",
      success: "💰 *Sold!*\n\n{item} x{qty}\n💰 Earned: *{earned}g*\n💰 Total gold: *{total}g*",
    },
    
    // Equip
    equip: {
      equipped: "⚔️ *Equipped {item}*",
      unequipped: "✅ *Unequipped {item}*",
      cannotEquip: "⚠️ *{item} cannot be equipped!*\n\nOnly weapons, shields, armor, and accessories can be equipped.",
      notInInventory: "⚠️ *You don't have {item} in your inventory!*\n\nType *bag* to see your items.",
      twoHandedConflict: "⚠️ *Cannot equip shield!*\n\nYour {weapon} is two-handed.\nUnequip your weapon first.",
      noItemEquipped: "⚠️ *No {slot} equipped!*",
      invalidSlot: "⚠️ *Invalid slot: {slot}*\n\nValid slots: weapon, offhand, head, chest, legs, boots, accessory",
      setBonusActivated: "✨ *SET BONUS ACTIVATED!*\n{setName} Set (4/4)",
      setBonusDeactivated: "⚠️ *Set bonus deactivated!*",
      equipmentTitle: "⚔️ *{name}'s Equipment*",
      equipmentStats: "📊 *Equipment Stats:*",
      passive: "✨ *Passive:*",
      weaponSkill: "⚡ *Weapon Skill:*",
      usage: "⚠️ *Please specify an item to equip!*\n\nUsage: *!equip <item_name>*\nExample: *!equip steel_sword*\n\nType *!bag* to see your inventory.",
      unequipUsage: "⚠️ *Please specify a slot to unequip!*\n\nUsage: *!unequip <slot>*\nExample: *!unequip weapon*\n\nValid slots:\n• weapon\n• offhand (or shield)\n• head, chest, legs, boots\n• accessory",
    },
    
    // Item
    item: {
      title: "🎒 *USE ITEM*",
      usage: "*Usage:* !item <item_name>\n*Example:* !item health_potion",
      usableItems: "*Your usable items:*",
      none: "None",
      tip: "💡 *Tip:* Type *!bag* to see all your items.",
      notFound: "⚠️ *Item \"{item}\" not found.*\n\nCheck your inventory with *!bag*",
      notInInventory: "⚠️ *You don't have {item} in your inventory.*\n\nBuy it from shops with *!buy {itemId}*",
      combatOnly: "⚠️ *{item} can only be used in combat!*\n\nUse it during a hunt with: *item {itemId}*",
      skillLearned: "✨ *SKILL LEARNED!*",
      classRequired: "⚠️ *Class Requirement Not Met!*\n\n{item} requires:\n📋 Class: {classes}\n\nYour class: {playerClass}",
      levelRequired: "⚠️ *Level Requirement Not Met!*\n\n{item} requires:\n⭐ Level: {level}\n\nYour level: {playerLevel}",
      alreadyLearned: "⚠️ *You already know {skill}!*\n\nYou can't learn the same skill twice.\nType *!myskills* to see your learned skills.",
      healed: "🧪 *{item}*\n\nRestored *{amount} HP*!\n\n❤️ HP: {current}/{max}",
      manaRestored: "💧 *{item}*\n\nRestored *{amount} mana*!\n\n💧 Mana: {current}/{max}",
      fullRestore: "✨ *{item}*\n\n*HP and Mana fully restored!*\n\n❤️ HP: {hp}/{maxHp}\n💧 Mana: {mana}/{maxMana}",
      hpFull: "⚠️ *Your HP is already full!*\n\n❤️ HP: {current}/{max}",
      manaFull: "⚠️ *Your mana is already full!*\n\n💧 Mana: {current}/{max}",
      teleported: "🌀 *{item}*\n\n*Teleported to Starter Village!*\n\nType *!location* to see where you are.",
      alreadyAtLocation: "⚠️ *You are already at {location}!*",
      inventoryExpanded: "🎒 *{item}*\n\n*Inventory expanded by {amount} slots!*\n\n💡 Note: Inventory expansion is currently unlimited.\nThis item has been consumed.",
    },
    
    // Pets
    pets: {
      title: "🐾 *Your Pet Collection*",
      noPets: "You don't have any pets yet!\n\nUse *searching* in dangerous locations to find pets!",
      collection: "🐾 *Your Pet Collection* ({count})",
      equipped: "✅ ",
      moodSummary: "   Mood: {mood}",
      moodDefault: "Content",
      commands: "📖 *Commands:*",
      viewDetails: "• *pets <number>* - View pet details",
      equipPet: "• *pets equip <number>* - Equip a pet",
      unequipPet: "• *pets unequip* - Unequip current pet",
      patPet: "• *pat* - Pat your equipped pet 💕",
      levelUpPet: "• *petlevel <number> <item>* - Level up pet",
      enhancePet: "• *petenhance <target> <material>* - Enhance pet",
      details: "🐾 *Pet Details*",
      yourPet: "📊 *Your Pet:*",
      level: "• Level: {level}/{maxLevel}",
      currentBonus: "• Current Bonus: +{bonus} {type}",
      maxBonus: "• Max Bonus (Lv.20): +{max} {type}",
      xp: "• XP: {xp}/{next}",
      xpMax: "• XP: MAX LEVEL ⭐",
      mood: "• Mood: {mood}",
      obtained: "• Obtained: {date}",
      status: "• Status: {status}",
      statusEquipped: "✅ Equipped",
      statusNotEquipped: "Not Equipped",
      levelUpCommands: "🔮 *Level Up:*",
      interaction: "💕 *Interaction:*",
      patCommand: "• *pat* - Pat your equipped pet (if this pet is equipped)",
      levelUpUseItem: "• *petlevel {index} <item>* - Use item",
      levelUpConsumePet: "• *petenhance {index} <pet#>* - Consume pet",
      passive: "✨ *Passive:*",
      invalidNumber: "❌ Invalid pet number! You have {count} pets.\nUse *pets* to see your collection.",
      petNotFound: "❌ Pet data not found!",
      alreadyEquipped: "✅ This pet is already equipped!",
      petEquipped: "✅ *Pet Equipped!*\n\n{emoji} {name} is now your companion!\n\n📊 *Bonus:* +{bonus} {type} (Level {level})",
      noPetEquipped: "❌ You don't have any pet equipped!",
      petUnequipped: "✅ *Pet Unequipped!*\n\n{emoji} {name} returns to your collection.\n\nYou no longer receive their stat bonus.",
      usage: "📖 *Pet Commands:*\n\n• *pets* - View all your pets\n• *pets <number>* - View pet details\n• *pets equip <number>* - Equip a pet\n• *pets unequip* - Unequip current pet\n• *pat* - Pat your equipped pet 💕\n\nExample: *pets equip 1*",
    },
    
    // My Skills
    myskills: {
      title: "⚔️ *MY SKILLS*",
      equippedSkills: "📋 *EQUIPPED SKILLS*",
      slot: "*Slot {slot}:*",
      empty: "❌ Empty",
      skillMeta: "   💧 {mana} mana | ⏱️ {cooldown} turn CD",
      skillDescription: "   📖 {description}",
      learnedSkills: "📚 *LEARNED SKILLS* ({count})",
      noSkills: "❌ *No skills learned yet.*\n\n💡 *Tip:* Buy skill books from shops and use them with *!item <skill_book_name>*",
      tip: "💡 *Tip:* Use *!equipskill <skill_name> <slot>* to equip a skill",
      commands: "*Commands:*",
      equipSkillCmd: "• *!equipskill <name> <slot>* - Equip skill",
      unequipSkillCmd: "• *!unequipskill <slot>* - Remove skill",
      shopCmd: "• *!shop* - Buy skill books",
    },
    
    // Craft
    craft: {
      title: "🔨 *Craftable Recipes*",
      needRegister: "❌ You need to register first! Use *!register* to start your adventure.",
      noRecipes: "📜 *Crafting Menu*\n\n❌ You haven't discovered any recipes yet!\n\n💡 *How to discover recipes:*\n1. Gather materials by hunting, mining, fishing, etc.\n2. Use *!study* to discover new recipes\n3. Come back here to craft!\n\n✨ The more materials you have, the more recipes you'll discover!",
      noMaterials: "📜 *Crafting Menu*\n\n❌ You don't have enough materials to craft anything right now!\n\n📚 You have {count} recipe(s) discovered.\n\n💡 *What to do:*\n• Use *!recipes* to see what materials you need\n• Gather more materials by hunting, mining, fishing, etc.\n• Use *!study* to discover more recipes\n\n🎯 Keep gathering and you'll be able to craft soon!",
      result: "• Result: {qty}x",
      materials: "• Materials:",
      command: "• Command: !craft {id}",
      tip: "\n💡 *Tip:* Use !craft <recipe_id> [quantity] to craft items",
      recipeNotFound: "❌ Recipe not found! Use *!craft* to see available recipes.",
      recipeNotDiscovered: "❌ You haven't discovered this recipe yet!\n\n💡 Use *!study* at a location with a shop to discover new recipes.",
      notEnoughMaterials: "❌ You don't have enough materials!\n\n*Missing:*\n{missing}",
      success: "✨ *Crafting Success!*\n\n🔨 You crafted: {item} x{qty}\n\n*Materials Used:*\n{materials}",
      fuseTip: "\n\n♻️ *Universal fusion* (any items → any item): `!craft fuse <item> [xqty] mat <id> <qty> ...`\n_No recipe needed. Total material value must reach the target._",
      fuseUsage:
        "♻️ *Universal fusion*\n\n*Usage*\n`!craft fuse <output> [xqty] mat <material> <qty> ...`\n\n• Word *mat* separates what you want vs what you spend.\n• Pairs after *mat* are `item_id` then quantity (repeat).\n• Quantities are *total* consumed for this command.\n• Each item has a *fusion value* (from sell/buy prices). Sum must be ≥ requirement.\n\n*Example*\n`!craft fuse health_potion mat honey 3 butterfly_wing 2`\n`!craft fuse iron_sword x2 mat oak_plank 8 iron_bar 6`",
      fuseBadMaterials:
        "❌ Invalid *mat* section. After `mat`, list pairs: `item_id` then `quantity` (must be an even number of tokens).",
      fuseBadTarget: "❌ Item not found: `{slug}`. Use an id from your bag / `items.js` (e.g. iron_sword).",
      fuseBadMaterialId: "❌ Unknown material id: `{id}`.",
      fuseCannotUseTarget: "❌ You can't use the same item you're crafting as a material.",
      fuseNotEnough: "❌ Not enough in inventory.\n{detail}",
      fuseLowValue:
        "❌ Materials are too cheap for this output.\n• Required fusion value: *{need}*\n• Your materials: *{offered}*\nUse rarer items, higher quantities, or a cheaper target.",
      fuseTooMany: "❌ Too much material in one command (max 999 total qty). Split into smaller crafts.",
      fuseSuccess:
        "✨ *Fusion done!*\n\n🔨 {item} x{qty}\n\n*Consumed:*\n{materials}\n\n_(value {offered} / need {need})_",
    },
    
    // Dungeon
    dungeon: {
      title: "🏰 *Dungeon System*",
      needRegister: "❌ You need to register first! Use *{prefix}register* to start your adventure.",
      dailyRuns: "📅 Daily Runs: {left}/2 remaining",
      currentLocation: "📍 Current Location: {location}",
      locationForgottenCrypt: "🏚️ Forgotten Crypt (Easy) - Lv.10+",
      locationVolcanicRift: "🌋 Volcanic Rift (Normal) - Lv.20+",
      locationFrozenAbyss: "❄️ Frozen Abyss (Hard) - Lv.30+",
      available: "✅ *Available Dungeon:*",
      features: "🎯 *Dungeon Features:*",
      feature1: "• 20 floors to conquer",
      feature2: "• Mini-bosses every 5 floors",
      feature3: "• Final boss at floor 20",
      feature4: "• Party size: 1-5 players",
      feature5: "• Rewards: Equipment, items, gold",
      feature6: "• 20% HP/Mana heal between floors",
      rules: "⚠️ *Rules:*",
      rule1: "• No rewards if you die or surrender",
      rule2: "• Only get rewards after killing final boss",
      rule3: "• Everyone gets the same loot",
      rule4: "• If you run, you leave the party",
      commands: "💡 *Commands:*",
      createParty: "• *party create* - Create a party",
      inviteParty: "• *party invite @user* - Invite players",
      startDungeon: "• *dungeon start* - Enter dungeon (leader only)",
      noDungeon: "❌ *No dungeon available here!*\n\nTravel to a dungeon entrance:\n• Forgotten Crypt Entrance (Easy)\n• Volcanic Rift Gate (Normal)\n• Frozen Abyss Portal (Hard)",
      noRunsLeft: "❌ You've used all your dungeon runs today! Resets at midnight.",
      notAtEntrance: "❌ You must be at a dungeon entrance to start!\n\nTravel to: Forgotten Crypt Entrance, Volcanic Rift Gate, or Frozen Abyss Portal",
      needParty: "❌ You need a party to enter the dungeon!\n\nCreate one with: *party create*\n\nYou can enter solo or invite up to 4 others.",
      notLeader: "❌ Only the party leader can start the dungeon!",
      alreadyInDungeon: "❌ Your party is already in a dungeon!",
      memberNoRuns: "❌ {name} has no dungeon runs left today!",
      unknownCommand: "❌ Unknown dungeon command!\n\n*Available commands:*\n• *{prefix}dungeon* - Show dungeon info\n• *{prefix}dungeon start* - Enter dungeon (leader only)\n• *{prefix}dungeon info* - Show dungeon details",
      movingToFloor: "🚪 *Moving to Floor {floor}...*",
      partyHealed: "💚 Party healed 20% HP/Mana",
      prepareForBattle: "⚔️ Prepare for battle!",
      noEnemyFound: "❌ Error: No enemy found for floor {floor}!",
      bossFloor: "⚠️ *BOSS FLOOR*",
      combatFloor: "⚔️ *Combat Floor*",
      partyHeader: "👥 *Party:*",
      playerTurn: "💡 *{name}'s turn!*",
      combatPrompt: "Type: attack / defend / skill [1/2/3] / item / run",
    },
    
    // Party
    party: {
      title: "👥 *PARTY INFO*",
      noParty: "❌ You're not in a party!\n\n💡 *Create a party:* party create",
      leader: "👑 Leader: {name}",
      members: "👥 Members: ({count}/5)",
      inDungeon: "🏰 Status: In dungeon",
      notInDungeon: "✅ Status: Available",
      commands: "💡 *Commands:*",
      createCmd: "• *party create* - Create a new party",
      inviteCmd: "• *party invite @user* - Invite a player",
      acceptCmd: "• *party accept* - Accept party invite",
      declineCmd: "• *party decline* - Decline party invite",
      leaveCmd: "• *party leave* - Leave current party",
      kickCmd: "• *party kick @user* - Kick a player (leader only)",
      created: "✅ *Party Created!*\n\nYou are now the party leader.\n\n💡 Invite players with: *party invite @user*",
      alreadyInParty: "❌ You're already in a party! Leave first with: *party leave*",
      inviteSent: "✅ *Invite Sent!*\n\n{name} has been invited to your party.",
      notLeader: "❌ Only the party leader can invite players!",
      targetInParty: "❌ That player is already in a party!",
      partyFull: "❌ Party is full! (Max 5 members)",
      alreadyInvited: "❌ That player is already invited!",
      cannotInviteInDungeon: "❌ Cannot invite players while in a dungeon!",
      cannotInviteSelf: "❌ You cannot invite yourself!",
      inviteReceived: "🎭 *Party Invite!*\n\nYou've been invited to join a party!\n\n👥 Party size: {count}/5\n\n💡 *Commands:*\n• *party accept* - Join the party\n• *party decline* - Decline invite\n\n⏰ Invite expires in 2 minutes",
      noInvite: "❌ You don't have a party invite!",
      inviteExpired: "❌ Your party invite has expired!",
      joined: "✅ *Joined Party!*\n\nYou are now a party member.",
      memberJoined: "✅ A new player joined the party! ({count}/5 members)",
      declined: "✅ You declined the party invite.",
      left: "✅ You left the party.",
      disbanded: "❌ The party leader left. The party has been disbanded.",
      memberLeft: "⚠️ A player left the party. ({count}/5 members remaining)",
      mentionToKick: "❌ Please mention a user to kick!\n\nExample: *party kick @user*",
      cantKickSelf: "❌ You can't kick yourself! Use *party leave* instead.",
      notInYourParty: "❌ That player is not in your party!",
      kicked: "✅ Player kicked from party.",
      partyAlreadyInDungeon: "❌ That party is already in a dungeon!",
      cannotLeaveInDungeon: "❌ Cannot leave party while in a dungeon! Use *run* to escape the dungeon first.",
      cannotKickInDungeon: "❌ Cannot kick players while in a dungeon!",
      youWereKicked: "❌ You have been kicked from the party.",
      memberKicked: "⚠️ A player was kicked from the party. ({count}/5 members remaining)",
      mentionToInvite: "❌ Please mention a user to invite!\n\nExample: *party invite @user*",
      dungeonStartCmd: "• *dungeon start* - Enter dungeon (leader only)",
      unknownCommand: "❌ Unknown party command!\n\n*Available commands:*\n• *{prefix}party* - Show party info\n• *{prefix}party create* - Create a new party\n• *{prefix}party invite @user* - Invite a player\n• *{prefix}party accept* - Accept party invite\n• *{prefix}party decline* - Decline party invite\n• *{prefix}party leave* - Leave current party\n• *{prefix}party kick @user* - Kick a player (leader only)",
    },
    
    // Bounty
    bounty: {
      title: "💀 *WANTED LIST*",
      noBounties: "No active bounties.\n\n========================\n\n*Place a bounty:*\n• bounty @player <amount>\n• bounty <name> <amount>\n\n*Example:*\nbounty evarick 1000",
      activeBounties: "{count} player(s) have active bounties!",
      bountyAmount: "   💰 Bounty: {amount} gold",
      placedBy: "   👥 Placed by: {count} player(s)",
      andMore: "... and {count} more",
      claimHint: "💡 *Kill a bountied player in PVP to claim the bounty!*",
      usage: "⚠️ *Invalid usage!*\n\n*Usage:*\n• bounty @player <amount>\n• bounty <name> <amount>\n\n*Example:*\nbounty evarick 1000",
      playerNotFound: "⚠️ *Player \"{name}\" not found!*\n\nMake sure the name is correct.",
      notRegistered: "⚠️ *That player is not registered!*",
      cantBountySelf: "⚠️ *You can't place a bounty on yourself!*",
      invalidAmount: "⚠️ *Invalid amount!*\n\nMinimum bounty is 100 gold.",
      notEnoughGold: "⚠️ *Not enough gold!*\n\nYou have: {have} gold\nBounty cost: {need} gold",
      placed: "💀 *BOUNTY PLACED!*\n\nYou placed a {amount} gold bounty on *{target}*!\n\nTotal bounty: {total} gold\nYour gold: {gold}\n\n⚠️ Reputation: {rep} (Evil action)\n\nAnyone who kills *{target}* in PVP will claim the bounty!",
      alert: "💀 *BOUNTY ALERT!*\n\n*{placer}* placed a {amount} gold bounty on you!\n\nTotal bounty on your head: {total} gold\n\n⚠️ *You are now a wanted player!*\nOther players can claim the bounty by defeating you in PVP.\n\nType *bounty* to see the wanted list.",
    },
    
    // Recipes
    recipes: {
      title: "📖 *Recipe Book*",
      empty: "❌ Your recipe book is empty!\n\n💡 *How to discover recipes:*\n1. Gather materials (defeat enemies, mine, chop, forage)\n2. Go to a location with a shop (🏘️ Starter Village, 🏪 Trading Post, etc.)\n3. Use *!study* to discover new recipes\n\n✨ The more materials you have, the more recipes you'll discover!",
      count: "📖 *Recipe Book* ({count} recipes)",
      noCategoryFound: "❌ No recipes found in category: {category}\n\n*Available categories:* weapon, armor, consumable, tool, material, utility",
      result: "• Result: {qty}x",
      materials: "• Materials:",
      craftCommand: "• Craft: !craft {id}",
      commands: "\n💡 *Commands:*",
      craftCmd: "• !craft - View craftable recipes",
      craftItemCmd: "• !craft <recipe_id> - Craft an item",
      studyCmd: "• !study - Discover new recipes",
      canCraft: "✅",
      cantCraft: "⏳",
    },

    // Gathering — English (parity with id)
    fishing: {
      cantFish: "🚫 *You can't fish here!*\n\nTravel to a fishing location first.\nType *location* to see where you are.",
      noRod: "🎣 *You don't have a working fishing rod!*\n\nBuy one at the shop in Starter Village.\nType *travel starter_village* then *shop*.",
      alreadyFishing: "⚠️ *You are already fishing!*\n\nType *reel* when the fish bites.",
      casting: "🎣 *{name} casts their {rod}...*\n\nWaiting for a bite... 🌊",
      fishBiting: "🐟 *A fish is biting!*\n\n",
      noFish: "⚠️ *No fish is biting right now.*\n\nType *fish* to cast your line.",
      fishEscaped: "🐟 *The fish got away!*\n\n[🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦]\n\nYou were too slow. Type *fish* to try again.",
      nothingCaught: "😔 *Nothing was caught.*\n\n",
      rodBroke: "💔 *Your {rod} broke!*\nBuy or craft a new one.",
      perfectTiming: "🎯 *PERFECT timing!*",
      goodTiming: "✅ *Good timing!*",
      okayTiming: "😐 *Okay timing.*",
      badTiming: "😬 *Bad timing...*",
      meterMovingRight: "⬅️ Moving right...",
      meterPastCenter: "➡️ Past center!",
      meterCenter: "🎯 CENTER — Reel NOW!",
      rodLabel: "Rod: {rod}",
      durabilityHeader: "🔧 Durability:\n{bar}",
      rodDurabilityFooter: "\n\n🔧 Rod Durability:\n{bar}",
      reelPrompt: "Type *reel* at the right moment!",
      centerTip: "⏱️ Center = best catch!",
      timingLine: "Timing: {timing}",
      fishAgain: "Type *fish* to try again.",
      castAgain: "Type *fish* to cast again.",
      sellValue: "💰 Sell value: {price} gold",
      addedInventory: "Added to your 🎒 inventory!",
      catchLine: "{color} *{rarity}* — {name}",
    },

    mining: {
      cantMine: "🚫 *You can't mine here!*\n\nTravel to a mining location first.\nType *location* to see where you are.",
      noPickaxe: "⛏️ *You don't have a working pickaxe!*\n\nBuy one at the shop in Starter Village or craft a new one.",
      alreadyMining: "⚠️ *You are already mining!*\n\nType *hit* to keep swinging.",
      miningInProgress: "⛏️ *Mining in progress!*\n\n",
      notMining: "⚠️ *You are not mining right now.*\n\nType *mine* to start.",
      noStamina: "😓 *Out of stamina! Wait 30s to recover.*",
      rockBroken: "💥 *Rock broken!*\n\n",
      pickaxeBroke: "💔 *Your {pickaxe} broke!*\n\nThe rock is still intact but you need a new pickaxe.\n\nBuy or craft a new one at the shop.",
      noRocks: "😔 *No rocks found here. Try a different location.*",
      rockHpLine: "{emoji} Rock HP:\n{bar}",
      staminaLine: "⚡ Stamina:\n{bar}",
      pickaxeLine: "🪛 Pickaxe: {name}",
      pickaxeDurabilityBlock: "🔧 Durability:\n{bar}\n\n",
      hitPrompt: "Type *hit* to swing your pickaxe!",
      mineAgain: "Type *mine* to mine again.",
      oreDescLine: "📖 {desc}",
      pickaxeBrokeReward: "\n\n💔 *Your {pickaxe} broke!*\nBuy or craft a new one.",
      pickaxeDurabilityReward: "\n\n🔧 Pickaxe Durability:\n{bar}",
    },

    chopping: {
      cantChop: "🚫 *You can't chop trees here!*\n\nTravel to a forest location first.\nType *location* to see where you are.",
      noAxe: "🪓 *You don't have a working axe!*\n\nBuy one at the shop in Starter Village or craft a new one.",
      alreadyChopping: "⚠️ *You are already chopping a tree!*\n\nType *swing* to swing your axe.",
      choppingTree: "🌲 *Chopping a tree!*\n\n",
      treeFell: "🪵 *TIMBER! Tree down!*",
      axeBroke: "💔 *Your {axe} broke!*\n\nThe tree still stands but you need a new axe.\n\nBuy or craft a new one at the shop.",
      noTrees: "😔 *No trees found here. Try a different location.*",
      perfectHit: "🎯 *PERFECT!*",
      goodHit: "✅ *Good hit!*",
      okayHit: "😐 *Okay hit.*",
      missHit: "💨 *Miss!*",
      notChopping: "⚠️ *You are not chopping right now.*\n\nType *chop* to start.",
      panelTitle: "🌲 *Chopping a tree!*\n\n",
      progressLine: "{emoji} Progress:\n{counter}\n\n",
      sweetSpotLegend: "🎯 = Sweet spot | 🪓 = Your axe\n\n",
      axeLine: "🪓 Axe: {name}\n",
      pickaxeDurabilityBlock: "🔧 Durability:\n{bar}\n\n",
      swingPrompt: "Type *swing* to chop!\n",
      swingHint: "Hit near 🎯 for max damage!",
      swingSuffix: "swings",
      treeFellSuccess: "🪵 *TIMBER! The tree fell!*\n\n",
      finalSwingNote: "(final swing)",
      chopAgain: "Type *chop* to find another tree.",
      axeBrokeReward: "\n\n💔 *Your {axe} broke!*\nBuy or craft a new one.",
      axeDurabilityFooter: "\n\n🔧 Axe Durability:\n{bar}",
    },

    foraging: {
      cantForage: "🚫 *You can't forage here!*\n\nTravel to a forest or swamp.\nType *location* to see where you are.",
      alreadyForaging: "⚠️ *You are already foraging!*\n\nType the pattern you see to continue.",
      searching: "🍃 *Searching the area...*",
      spotSomething: "You spot something! *Remember this pattern:*",
      fading: "Quick! Fading in 4 seconds...",
      whatDidYouSee: "🍃 *What did you see?*",
      typePattern: "Type the pattern in order!\nExample: *leaf shroom flower*",
      tooSlow: "⏰ *Too slow! The plant vanished.*",
      patternWas: "The pattern was:",
      perfect: "🎯 *PERFECT!* All 3 correct!",
      close: "❌ *Close!* 2/3 correct.",
      notEnough: "❌ *Not enough!* 1/3 correct.",
      wrong: "❌ *Wrong!* 0/3 correct.",
      nothingFound: "😔 *Nothing found!*",
      mustGetAll: "💡 *You need all 3 correct to find herbs!*",
      yourAnswer: "Your answer:",
      patternMasked: "[ ❓ ]  [ ❓ ]  [ ❓ ]\n\n",
      typePatternAgain: "Type the pattern in order!\nExample: *leaf shroom flower*",
      secondsToAnswer: "⏱️ You have 15 seconds!",
      tryForageAgain: "Type *!forage* to try again.",
      scorePerfectNoLoot: "🎯 *PERFECT!* All 3 correct!",
      scorePerfectLoot: "🎯 *PERFECT!* 3/3 correct!",
      patternWasEmojis: "Pattern was: {emojis}\n",
      yourAnswerLine: "Your answer: *{answer}*\n\n",
      forageAgain: "Type *forage* to search again.",
      memorizeIntro: "{searching}{spot}\n\n{display}\n\n{fading}\n\n{hint}",
    },

    searching: {
      cantSearch: "🚫 *You can't search here!*\n\nThis area is too safe. Go to a dangerous zone where you can hunt.\nType *location* to see where you are.",
      cantSearchHunt: "🚫 *You can't search here!*\n\nThis location is too safe. Travel to a dangerous area where you can hunt.\nType *location* to see where you are.",
      cooldown: "⏰ *Cooldown!*\n\nYou need to rest before searching again.\nTime left: {seconds}s",
      cooldownSecs: "⏰ *Cooldown!*\n\nYou need to rest before searching again.\nTime remaining: {seconds} seconds",
      searching: "🔍 Searching the area...",
      foundGold: "💰 *Gold found!*\n\nYou found {gold} gold while searching!\n\n💰 Total gold: {total}",
      foundDrop: "🎁 *Monster drop found!*\n\nYou found traces of {enemy}!\n\n📦 Got: {item} x{qty}\n\nType *bag* to check inventory!",
      storyEvent: "📖 *Story event triggered!*\n\n{emoji} Something interesting happens at {location}...\n\n✨ (Story events coming soon!)\n\nFor now you found 10 gold!\n💰 Total gold: {total}",
      nothing: "🍃 *Nothing here...*\n\nYou only find leaves and dust.",
      zonk: "🕸️ *Nothing!*\n\nJust spider webs and disappointment.",
      empty: "🪨 *Empty...*\n\nJust rocks and gravel.",
      wind: "💨 *Nothing!*\n\nThe wind mocks your efforts.",
      crickets: "🦗 *Crickets...*\n\nNot even crickets. Just silence.",
      petAppears: "✨ *{emoji} A wild {name} appears!*",
      tamingChallenge: "🎯 *TAMING CHALLENGE!*\nMemorize and repeat this order:",
      tamingAttempts: "You have *3 tries* and *15 seconds* per try!",
      tamingReply: "Reply with the correct emoji sequence to tame it!",
      tamingTimeout: "⏰ *Time's up!*\n\n{emoji} {name} ran away...\n\nSearch again to find another pet!",
      tamingSuccess: "🎉 *TAMED!*\n\n{emoji} You tamed {name}!\n\n✅ Added to your pet collection!\nType *pets* to view!\nType *pets equip <number>* to equip!",
      tamingFailed: "❌ *TAMING FAILED!*\n\n{emoji} {name} ran away...\n\nSearch again to find another pet!",
      wrongSequence: "❌ *Wrong sequence!*\n\nTries left: {attempts}\n\nCorrect order:\n{sequence}\n\nTry again! You have 15 seconds!",
      anim1: "🔍 Searching the area...",
      anim2: "🔍 Looking around carefully...",
      anim3: "🔍 Investigating the surroundings...",
      anim4: "🔍 Examining every corner...",
      anim5: "🔍 Almost found something...",
      foundGoldAlt: "💰 *Found Gold!*\n\nYou found {gold} gold while searching!\n\n💰 Total Gold: {total}",
      storyInLocation: "📖 *Story Event Triggered!*\n\n{emoji} Something interesting happens in {location}...\n\n✨ (Story events will be implemented soon!)\n\nFor now, you found 10 gold!\n💰 Total Gold: {total}",
      foundMonsterDrop: "🎁 *Found Monster Drop!*\n\nYou found traces of a {enemy}!\n\n📦 Obtained: {item} x{qty}\n\nType *bag* to check your inventory!",
      petTamingHeader: "✨ *A wild {emoji} {name} appears!*\n{rarityLine}\n\n🎯 *TAMING CHALLENGE!*\nMemorize and repeat this sequence:\n\n{sequence}\n\nYou have *3 attempts* and *15 seconds* per attempt!\nReply with the exact emoji sequence to tame it!\n\nAvailable emojis: {emojis}",
      petTamingRarity: "{emoji} Rarity: {name}",
      tamingSuccessAlt: "🎉 *TAMING SUCCESS!*\n\n{emoji} You successfully tamed the {name}!\n\n{info}\n\n✅ Added to your pet collection!\nType *pets* to view your pets!\nType *pets equip <number>* to equip it!",
    },

    pat: {
      noPetEquipped: "❌ *No pet equipped!*\n\nEquip a pet first with *pets equip <number>*",
      petDataMissing: "❌ Pet data not found!",
      frame1: "{emoji} *{name}*\n\n✋ Reaching out...",
      frame2: "{emoji} *{name}*\n\n✋ Pat...",
      frame3: "{emoji} *{name}*\n\n✋ Pat pat...",
      frame4: "{emoji} *{name}*\n\n✋ Pat pat pat...",
      frame5: "{emoji} *{name}*\n\n💕 {name} looks happy!",
      fbNoEdit: "{emoji} *Pat pat!*\n\n{name} looks very happy!\n\n{flavor}",
      finale1: "{emoji} *{name}*\n\n💕 {name} nuzzles your hand affectionately!\n\n✨ Mood: Happy",
      finale2: "{emoji} *{name}*\n\n💕 {name} purrs with contentment!\n\n✨ Your bond grows stronger!",
      finale3: "{emoji} *{name}*\n\n💕 {name} wags excitedly!\n\n💖 {name} loves you!",
      finale4: "{emoji} *{name}*\n\n💕 {name} looks at you with adoring eyes!\n\n✨ {flavor}",
      finale5: "{emoji} *{name}*\n\n💕 {name} makes a happy sound!\n\n🌟 You feel closer to {name}!",
      finale6: "{emoji} *{name}*\n\n💕 {name} leans into your touch!\n\n💖 {name} trusts you completely!",
    },

    petlevelCmd: {
      noPets: "🐾 You don't have any pets!",
      invalidPetNum: "❌ Invalid pet number! You have {count} pets.\nUse *pets* to see your collection.",
      petMissingMeta: "❌ Pet data not found!",
      alreadyMaxPet: "⭐ *{name} is already max level!*\n\nLevel {max} is the maximum.",
      invalidPetItem:
        "❌ *Invalid pet item!*\n\nValid items: pet_treat_basic, pet_treat_premium, pet_elixir, pet_bond_crystal",
      missingItemInv: "❌ You don't have *{item}* in your inventory!",
      itemUsedHeader: "{item} used on {emoji} *{petName}*!\n\n",
      xpGainLine: "✨ *+{xp} XP*\n\n",
      levelUpLine: "🎉 *LEVEL UP!* {from} → {to}\n",
      multiLevelLine: "⚡ *{n} levels gained!*\n",
      newStatsHeader: "📊 *New Stats:*\n",
      statBonusLine: "+{bonus} {type}\n\n",
      progressLine: "📈 Progress: {xp}/{need} XP to level {next}",
      maxReached: "⭐ *MAX LEVEL REACHED!*",
      needTwoPetsEnhance:
        "🐾 You need at least 2 pets to enhance!\n\nCatch more pets using *searching* command.",
      invalidTargetNum: "❌ Invalid target pet number! You have {count} pets.",
      invalidMaterialNum: "❌ Invalid material pet number! You have {count} pets.",
      enhanceSelf: "❌ You can't enhance a pet with itself!",
      equippedTarget: "⚠️ *{name} is currently equipped!*\n\nUnequip it first with *pets unequip*.",
      equippedMaterial: "⚠️ *{name} is currently equipped!*\n\nUnequip it first with *pets unequip*.",
      targetAlreadyMaxEnhance:
        "⭐ *{name} is already max level!*\n\nCannot enhance further.",
      enhanceTitle: "🔮 *Pet Enhancement*\n\n",
      consumedLine: "{emoji} {name} {rarityEmoji} consumed!\n",
      xpGainEnhanceLine: "✨ *+{xp} XP*{bonus}\n\n",
      sameRarityBonus: " (Same rarity bonus!)",
      levelUpEnhanceSection: "\n📊 *{emoji} {name} New Stats:*\n",
      statsOneLine: "📊 *{emoji} {name}*\nLevel {level} | +{bonus} {type}\n\n",
      petlevelUsage:
        `📖 *Pet Level Up*\n\n` +
        `Use items to level up your pets!\n\n` +
        `Usage: *petlevel <pet#> <item>*\n` +
        `Example: *petlevel 1 pet_treat_basic*\n\n` +
        `Available items:\n` +
        `• pet_treat_basic (50 XP)\n` +
        `• pet_treat_premium (150 XP)\n` +
        `• pet_elixir (500 XP)\n` +
        `• pet_bond_crystal (1000 XP)`,
      petenhanceUsage:
        `📖 *Pet Enhancement*\n\n` +
        `Consume one pet to enhance another!\n\n` +
        `Usage: *petenhance <target#> <material#>*\n` +
        `Example: *petenhance 1 3*\n\n` +
        `⚠️ *Warning:* Material pet will be consumed!\n\n` +
        `XP Gain:\n` +
        `• C: 50 XP (75 XP same rarity)\n` +
        `• U: 150 XP (225 XP same rarity)\n` +
        `• R: 400 XP (600 XP same rarity)\n` +
        `• SR: 1000 XP (1500 XP same rarity)\n` +
        `• SSR: 3000 XP (4500 XP same rarity)`,
    },

    gold: {
      notRegistered: "⚠️ *You are not registered yet!*\n\nType *!register <your name>* to start your adventure.",
      title: "💰 *{name}'s Gold*",
      balance: "💵 Balance: *{gold}* gold",
      tip: "💡 *Tip:* Use *!shop* to spend your gold!",
    },

    give: {
      notRegistered: "⚠️ *You are not registered yet!*\n\nType *register <your name>* to start.",
      usageTitle: "📦 *GIVE COMMAND*",
      usageLines: "*Usage:*\n• give <player> <item_name> <amount>\n• give <player> gold <amount>\n• give <player> pet <pet_name>",
      examples: "*Examples:*\n• give evarick health_potion 5\n• give evarick gold 100\n• give evarick pet wolf",
      playerNotFound: "⚠️ *Player \"{name}\" not found!*\n\nMake sure the name is correct.",
      targetNotRegistered: "⚠️ *That player is not registered!*",
      cantGiveSelf: "⚠️ *You can't give items to yourself!*",
      invalidAmount: "⚠️ *Invalid amount!*\n\nPlease specify a positive number.",
      notEnoughGold: "⚠️ *Not enough gold!*\n\nYou have: {have} gold\nTrying to give: {need} gold",
      goldSent: "💰 *GOLD SENT!*\n\nYou gave *{amount} gold* to *{target}*!\n\nYour gold: {remaining}",
      goldReceived: "💰 *GOLD RECEIVED!*\n\n*{sender}* gave you *{amount} gold*!\n\nYour gold: {remaining}",
      needPetName: "⚠️ *Please specify a pet name!*\n\nExample: give evarick pet wolf",
      noPetNamed: "⚠️ *You don't have a pet named \"{name}\"!*\n\nYour pets: {list}",
      petsNone: "None",
      cantGiveEquippedPet: "⚠️ *Cannot give equipped pet!*\n\nPlease unequip *{name}* first before giving it away.",
      petSent: "🐾 *PET SENT!*\n\nYou gave *{name}* ({type}) to *{target}*!\n\nLevel: {level}\nRemaining pets: {count}",
      petReceived: "🐾 *PET RECEIVED!*\n\n*{sender}* gave you a pet!\n\n*{name}* ({type})\nLevel: {level}\nHP: {hp}/{maxHp}\n\nTotal pets: {count}",
      itemNotFound: "⚠️ *Item \"{item}\" not found!*\n\nMake sure the item name is correct.",
      notEnoughItems: "⚠️ *Not enough items!*\n\nYou have: {have} {item}\nTrying to give: {need}",
      cantGiveEquippedWeapon: "⚠️ *Cannot give equipped weapon!*\n\nPlease unequip *{item}* first.",
      cantGiveEquippedArmor: "⚠️ *Cannot give equipped armor!*\n\nPlease unequip *{item}* first.",
      removeFailed: "⚠️ *Failed to remove item from inventory!*",
      itemSent: "📦 *ITEM SENT!*\n\nYou gave *{qty}x {item}* to *{target}*!\n\nRemaining: {remaining}",
      itemReceived: "📦 *ITEM RECEIVED!*\n\n*{sender}* gave you *{qty}x {item}*!\n\n{desc}",
    },

    trade: {
      notRegistered: "⚠️ *You are not registered yet!*\n\nType *register <your name>* to start.",
      usage: "🤝 *TRADE COMMAND*\n\n*Usage:*\ntrade <player> <offer> for <request>\n\n*Examples:*\n• trade evarick iron_sword 1 for gold 500\n• trade evarick gold 1000 for dragon_egg 1\n• trade evarick pet wolf for pet dragon\n• trade evarick health_potion 10 for mana_potion 10",
      playerNotFound: "⚠️ *Player \"{name}\" not found!*\n\nMake sure the name is correct.",
      partnerNotRegistered: "⚠️ *That player is not registered!*",
      cantTradeSelf: "⚠️ *You can't trade with yourself!*",
      invalidOffer: "⚠️ *Invalid offer format!*\n\nCheck your command syntax.",
      invalidRequest: "⚠️ *Invalid request format!*\n\nCheck your command syntax.",
      notEnoughGoldOffer: "⚠️ *Not enough gold!*\n\nYou have: {have} gold\nOffering: {need} gold",
      noPetOffer: "⚠️ *You don't have a pet named \"{name}\"!*\n\nYour pets: {list}",
      cantTradeEquippedPet: "⚠️ *Cannot trade equipped pet!*\n\nPlease unequip it first.",
      notEnoughItemsOffer: "⚠️ *Not enough items!*\n\nYou have: {have} {item}\nOffering: {need}",
      cantTradeEquippedItem: "⚠️ *Cannot trade equipped item!*\n\nPlease unequip it first.",
      partnerNotEnoughGold: "⚠️ *{name} doesn't have enough gold!*\n\nThey have: {have} gold\nYou're requesting: {need} gold",
      partnerNoPet: "⚠️ *{name} doesn't have a pet named \"{pet}\"!*",
      partnerPetEquipped: "⚠️ *{name}'s pet is equipped!*\n\nThey need to unequip it before trading.",
      partnerNotEnoughItems: "⚠️ *{name} doesn't have enough items!*\n\nThey have: {have} {item}\nYou're requesting: {need}",
      partnerItemEquipped: "⚠️ *{name}'s item is equipped!*\n\nThey need to unequip it before trading.",
      expired: "⏱️ *Trade Expired*\n\n*{name}* did not respond to the trade offer.",
      offerSent: "🤝 *TRADE OFFER SENT!*\n\nYou offered: *{offer}*\nRequesting: *{want}*\n\nWaiting for *{partner}* to respond...\n⏱️ Offer expires in 60 seconds.",
      offerReceived: "🤝 *TRADE OFFER!*\n\n*{trader}* wants to trade with *{partner}*!\n\n📤 They offer: *{offer}*\n📥 They want: *{want}*\n\n@{mention}, type:\n• *accepttrade* to accept\n• *declinetrade* to refuse\n\n⏱️ You have 60 seconds to respond.",
      groupSuccess: "🤝 *TRADE SUCCESSFUL!*\n\n*{a}* ↔️ *{b}*\n\n{a} gave: {giveA}\n{b} gave: {giveB}",
    },

    acceptTrade: {
      notRegistered: "⚠️ *You are not registered yet!*\n\nType *register <your name>* to start.",
      noTrade: "⚠️ *You have no pending trade offers!*",
      traderGone: "⚠️ *The trader is no longer available.*",
      failGoldTrader: "⚠️ *Trade failed!*\n\n{name} no longer has enough gold.",
      failPetTrader: "⚠️ *Trade failed!*\n\n{name} no longer has the pet \"{pet}\".",
      failPetEquippedTrader: "⚠️ *Trade failed!*\n\n{name}'s pet is now equipped.",
      failItemTrader: "⚠️ *Trade failed!*\n\n{name} no longer has enough {item}.",
      failEquippedTrader: "⚠️ *Trade failed!*\n\n{name}'s item is now equipped.",
      failGoldYou: "⚠️ *Trade failed!*\n\nYou no longer have enough gold.",
      failPetYou: "⚠️ *Trade failed!*\n\nYou no longer have the pet \"{pet}\".",
      failPetEquippedYou: "⚠️ *Trade failed!*\n\nYour pet is equipped. Please unequip it first.",
      failItemYou: "⚠️ *Trade failed!*\n\nYou no longer have enough {item}.",
      failEquippedYou: "⚠️ *Trade failed!*\n\nYour item is equipped. Please unequip it first.",
      completedYou: "✅ *TRADE COMPLETED!*\n\nYou traded with *{name}*!\n\n📤 You gave: *{gave}*\n📥 You received: *{got}*",
      completedTrader: "✅ *TRADE COMPLETED!*\n\n*{partner}* accepted your trade!\n\n📤 You gave: *{gave}*\n📥 You received: *{got}*",
      groupAnnounce: "🤝 *TRADE SUCCESSFUL!*\n\n*{a}* ↔️ *{b}*\n\n{a} gave: {giveA}\n{b} gave: {giveB}",
    },

    declineTrade: {
      noTrade: "⚠️ *You have no pending trade offers!*",
      declinedYou: "❌ *TRADE DECLINED*\n\nYou declined the trade offer from *{name}*.",
      declinedTrader: "❌ *TRADE DECLINED*\n\n*{partner}* declined your trade offer.\n\n📤 Your offer: {offer}\n📥 Your request: {want}",
    },

    pvpChallenge: {
      notRegistered: "⚠️ *You are not registered yet!*\n\nType *register <your name>* to start.",
      noChallenge: "⚠️ *You have no pending challenges!*",
      challengerGone: "⚠️ *The challenger is no longer available.*",
      challengerDefeated: "⚠️ *{name} is defeated and cannot fight!*",
      youDefeated: "⚠️ *You are defeated!*\n\nYou need to heal before accepting challenges.",
      youInCombat: "⚠️ *You are already in combat!*",
      challengerInCombat: "⚠️ *{name} is already in combat!*",
      acceptedYou: "⚔️ *CHALLENGE ACCEPTED!*\n\nYou accepted *{name}*'s challenge!\n\n💥 *PVP COMBAT STARTED!*\n\n📱 Check your DM with the bot for battle!",
      acceptedChallenger: "⚔️ *CHALLENGE ACCEPTED!*\n\n*{name}* accepted your challenge!\n\n💥 *PVP COMBAT STARTED!*\n\n📱 Check your DM with the bot for battle!",
      declinedYou: "🚫 *Challenge Declined*\n\nYou declined the challenge from *{name}*.",
      declinedChallenger: "🚫 *Challenge Declined*\n\n*{name}* declined your PVP challenge.",
    },

    challengeCmd: {
      alreadyInCombatFull: "⚔️ *You are already in combat!*\n\nFinish your current battle first.",
      needTarget: "⚠️ *Please specify a player to challenge!*\n\nUsage:\n• *challenge @player* (mention)\n• *challenge PlayerName*",
      targetNotRegistered: "⚠️ *That player is not registered!*",
      cantChallengeSelf: "⚠️ *You can't challenge yourself!*",
      targetInCombat: "⚠️ *{name} is already in combat!*\n\nWait for them to finish.",
      challengerDefeated: "⚠️ *You are defeated!*\n\nYou need to heal before challenging others.\nVisit a shop or use healing items.",
      targetDefeated: "⚠️ *{name} is defeated!*\n\nThey need to heal before accepting challenges.",
      ambushChallenger: "⚔️ *AMBUSH!*\n\nYou and *{target}* are in the same location!\n*{self}* launches a surprise attack!\n\n💥 *PVP COMBAT STARTED!*\n\n📱 Check your DM with the bot for battle!",
      ambushTarget: "⚔️ *AMBUSH ATTACK!*\n\n*{challenger}* ambushed you!\nYou're in the same location!\n\n💥 *PVP COMBAT STARTED!*\n\nCheck your messages for battle status!",
      protStarter: "🏘️ *Starter Village is a safe zone*\nNo ambush attacks allowed here.",
      protCamping: "🏕️ *Target is camping/resting*\nThey are protected from ambush attacks.",
      challengeExpired: "⏱️ *Challenge Expired*\n\n*{target}* did not respond to your challenge.",
      challengeSentProtected: "⚔️ *PVP Challenge Sent!*\n\nYou challenged *{target}* to PVP combat!\n\n{reason}\nWaiting for their response...\n\n⏱️ Challenge expires in 60 seconds.",
      challengeSentRemote: "⚔️ *PVP Challenge Sent!*\n\nYou challenged *{target}* to PVP combat!\n\nWaiting for their response...\n⏱️ Challenge expires in 60 seconds.",
      dmInvite: "⚔️ *PVP CHALLENGE!*\n\n*{challenger}* has challenged you to PVP combat!\n\nType:\n• *accept* to fight\n• *decline* to refuse\n\n⏱️ You have 60 seconds to respond.",
      dmInviteProtected: "⚔️ *PVP CHALLENGE!*\n\n*{challenger}* has challenged you to PVP combat!\n\n{reason}\n\nType:\n• *accept* to fight\n• *decline* to refuse\n\n⏱️ You have 60 seconds to respond.",
    },

    leaderboardCmd: {
      noPlayers: "❌ No players registered yet!",
      menuTitle: "🏆 *LEADERBOARD MENU*",
      menuChoose: "Choose a category to view:",
      lbLevelLine: "💪 *!lb level* - Highest Level Players",
      lbGoldLine: "💰 *!lb gold* - Richest Players",
      lbPowerLine: "⚔️ *!lb power* - Most Powerful Players",
      lbPvpLine: "🏅 *!lb pvp* - PvP Champions",
      lbMonstersLine: "🎯 *!lb monsters* - Monster Slayers",
      menuAliases: "*Aliases:* !leaderboard, !lb, !top, !rank",
      sep: "━━━━━━━━━━━━━━━━━━━━",
      catLevel: "💪 *LEVEL LEADERBOARD*",
      catGold: "💰 *WEALTH LEADERBOARD*",
      catPower: "⚔️ *COMBAT POWER LEADERBOARD*",
      catPvp: "🏅 *PVP LEADERBOARD*",
      catMonsters: "🎯 *MONSTER SLAYER LEADERBOARD*",
      rankLine: "{medal} *#{rank}* {name}{marker} - Lv.{level}",
      yourRankLine: "📍 *Your Rank: #{rank}* - Lv.{level}",
      totalPlayersLine: "Total Players: {count}",
    },

    reputationCmd: {
      playerNotFound: "⚠️ *Player \"{name}\" not found!*",
      targetNotRegistered: "⚠️ *Player is not registered!*",
      header: "*REPUTATION STATUS*",
      alignmentPrefix: "{color} Alignment: *{title}*",
      points: "📊 Points: {reputation}/100",
      spectrum: "👹 Evil ←→ Good 😇",
      currentEffectsTitle: "*CURRENT EFFECTS:*",
      goodBenefitsTitle: "✨ *Good Reputation Benefits:*",
      goodBenefitsBullets:
        "• NPCs trust you more\n• Better story outcomes\n• Merchants offer discounts\n• Guards ignore minor crimes",
      evilEffectsTitle: "🔥 *Evil Reputation Effects:*",
      evilBullets:
        "• NPCs fear you\n• Guards are hostile\n• Merchants charge more\n• Bounty hunters may appear",
      neutralTitle: "⚪ *Neutral Standing:*",
      neutralBullets:
        "• No special effects\n• Your actions shape your path",
      tiersTitle: "*REPUTATION TIERS:*",
      tierSaint: "😇 Saint: 80 to 100",
      tierHero: "🦸 Hero: 50 to 79",
      tierGood: "😊 Good: 20 to 49",
      tierNeutralTier: "😐 Neutral: -20 to 19",
      tierBad: "😠 Bad: -49 to -21",
      tierVillain: "😈 Villain: -79 to -50",
      tierDemon: "👹 Demon: -100 to -80",
      howToTitle: "*HOW TO CHANGE REPUTATION:*",
      gainTitle: "📈 *Gain Reputation (Good):*",
      gainBullets:
        "• Help injured travelers\n• Assist lost children\n• Give to those in need\n• Make honorable choices",
      loseTitle: "📉 *Lose Reputation (Evil):*",
      loseBullets:
        "• Rob the helpless\n• Ignore those in need\n• Attack innocent NPCs\n• Make selfish choices",
      tip: "💡 *Tip:* Your choices in story encounters affect your reputation!",
    },

    combatStatus: {
      notInCombat: "⚠️ *You are not in combat right now.*\n\nType *hunt* to start a battle!",
      title: "⚔️ *BATTLE STATUS* — Round {round}\n\n========================\n",
      shieldLine: "\n🛡️ Shield: {cur}/{max}",
      stunned: " 💫STUNNED({rounds})",
      silenced: " 🤐SILENCED",
      effectsLine: "\n✨ Effects: {list}",
      playerStatusLine: "\n⚠️ Status:{stunned}{silent}",
      equipLine: "\n⚔️ Equipment: {bonuses}",
      passivesLine: "\n💫 Passives: {names}",
      playerHeader: "👤 *{name}*\n",
      hpLineP: "❤️ HP: {bar} {hp}/{maxHp} ({pct}%){shield}",
      manaLineP: "\n💧 Mana: {mana}/{maxMana}{equipTxt}{passivesTxt}{pStatusComb}{pfx}",
      skillsHeader: "\n\n🎯 *Your Skills:*\n",
      skillEmptyRow: "\n[{i}] —",
      skillRowFmt: "\n[{i}] {name}{cdTxt}{manaStr}",
      dividerMid: "\n\n========================\n",
      enemyHeader: "{emoji} *{name}*{bossTag}\n",
      hpLineE: "❤️ HP: {bar} {hp}/{maxHp} ({pct}%){shield}{eStatusComb}{efx}\n\n",
      footer: "\n\n========================\n💡 *Commands:*\n⚔️ attack  🛡️ defend  💥 skill [1/2/3]\n🎒 item [name]  🏃 run  📊 status",
      cooldownWait: ` ⏳{n}`,
      cooldownReady: ` ✅`,
      manaCostTpl: ` ({cost}💧)`,
      bossTag: ` 👑BOSS`,
    },

    studyCmd: {
      notRegistered: "⚠️ *You are not registered yet!*\n\nType *!register <your name>* to start your adventure.",
      recipesDiscoveredTitle: "✨ *NEW RECIPES DISCOVERED!*\n\n",
      recipesDiscoveredCount: "📚 You discovered {n} new recipe{suffix}!\n\n",
      categoryHeader: "*{category}*\n",
      recipeLineOk: "✅ {name}\n",
      nextStepsTitle: "💡 *Next Steps:*",
      nextStepsBullets:
        "\n• Use *!recipes* to view all your recipes\n• Use *!craft* to see what you can craft\n• Use *!craft <recipe_id>* to craft items\n\n🎉 Keep gathering materials to discover more recipes!",
      studyMenuTitle: "📚 *Study Menu*\n\n",
      haveRecipesKnown: "✅ You have {n} recipe{suffix} discovered!\n",
      noNewRecipesSkill: "❌ No new recipes to discover right now.\n",
      noBooksIntro: "❌ No skill books in inventory.\n\n💡 *What to do:*\n",
      hintsWithRecipes:
        "• Use *!recipes* to see your discovered recipes\n" +
        "• Use *!craft* to craft items\n" +
        "• Gather different materials to discover more recipes\n" +
        "• Buy skill books from shops (*!shop*)\n\n🎯 Try hunting in different locations for new materials!",
      noRecipesNoBooksHeader: "❌ No new recipes to discover and no skill books!\n\n💡 *How to discover recipes:*\n",
      howDiscoverBullets:
        "1. Gather materials by:\n" +
        "   • Defeating enemies (!hunt)\n" +
        "   • Mining (!mining)\n" +
        "   • Chopping wood (!chopping)\n" +
        "   • Foraging (!foraging)\n" +
        "   • Fishing (!fishing)\n\n" +
        "2. Use *!study* to discover recipes\n" +
        "3. Use *!craft* to craft items\n\n💡 *How to learn skills:*\n",
      learnSkillsBullets:
        "• Buy skill books from shops (!shop)\n• Use *!study <skill_name>* to learn\n\n✨ Keep exploring and gathering!",
      booksTitle: "📚 *Available Skill Books*\n\n",
      booksUsage: "\n\n💡 Usage: *!study <skill_name>*\nExample: *!study power_strike*",
      noSkillBookInv: `❌ *You don't have the skill book for "{skill}"!*\n\n💡 Type *!study* to see your available skill books.\nOr buy it from a shop with *!shop*.`,
      bookDbMissing: `⚠️ *Error: Skill book "{id}" not found in database.*\n\nThis might be a bug. Please contact the owner.`,
      skillDbMissing: `⚠️ *Error: Skill "{id}" not found in database.*\n\nThis might be a bug. Please contact the owner.`,
      classReqFail: `⚠️ *Class Requirement Not Met!*\n\n📚 {bookName}\n📋 Required Class: {needed}\n\nYour class: {yours}`,
      levelReqFail: `⚠️ *Level Requirement Not Met!*\n\n📚 {bookName}\n⭐ Required Level: {needed}\n\nYour level: {yours}`,
      alreadyKnown: `⚠️ *You already know {skill}!*\n\nYou can't learn the same skill twice.\nType *!myskills* to see your learned skills.`,
      learnedTitle: "✨ *SKILL LEARNED!*\n\n",
      learnedBody:
        `{emoji} *{name}*\n` +
        `{rarity} | {category}\n\n` +
        `📖 {description}\n\n` +
        `💧 Mana Cost: {mana}\n⏱️ Cooldown: {cd} turns\n⚔️ Damage Type: {dmgType}` +
        `{dmgLine}{valDamageLine}` +
        `✨ Effect: {effectDesc}\n`,
      dmgLineTpl: `\n💥 Base Damage: {dmg}\n`,
      valDamageLineTpl: `💥 Damage: {val}\n`,
      effectNone: "None",
      effectTurnSuffix: ` for {n} turns`,
      equipHintFooter: `\n💡 Use *!equipskill {skillId}* to equip this skill!\nType *!myskills* to see all your learned skills.`,
    },

    redeemCmd: {
      notRegistered:
        "⚠️ *You are not registered yet!*\n\nType *{prefix}register <your name>* to start your adventure.",
      usage:
        "🎁 *Redeem Code*\n\nEnter a code to claim rewards!\n\nUsage: *{prefix}redeem <code>*\nExample: *{prefix}redeem WELCOME*\n\n💡 *Tip:* Codes are case-insensitive.",
      invalidCode: `❌ *Invalid Code!*\n\nThe code *{code}* does not exist.\n\nMake sure you typed it correctly.`,
      alreadyRedeemed:
        `⚠️ *Already Redeemed!*\n\nYou have already used the code *{code}*.\n\nEach code can only be used once per player.`,
      successTitle: `✅ *Code Redeemed Successfully!*\n\n`,
      successPackLabel: `🎁 *{description}*\n\n`,
      rewardGoldPlus: `💰 *+{amount} gold*`,
      rewardsHeaderItems: `🎁 *Rewards received:*\n\n`,
      itemLine: `• {qty}x {name}\n`,
      goldInline: `💰 *{amount} gold*\n`,
      petsHeader: `\n🐾 *Pets received:*\n\n`,
      petLineRarity: `{rEmoji} {pEmoji} {name} ({rarity})\n`,
      petLineFallback: `🐾 {name}\n`,
      evarickExtra:
        "⚔️ *You are now equipped with legendary gear!*\n🐾 *You received 5 amazing pets!*\n\n",
      footerBag: "\n\nType *{prefix}bag* to view your items!",
      footerPets: "Type *{prefix}pets* to view your pets!\n",
      footerGold: "\nType *{prefix}gold* to check your balance!",
    },

    innCmd: {
      notRegistered: "⚠️ *You are not registered yet!*\n\nType *{prefix}register <your name>* to start.",
      invalidLocation: `⚠️ *Invalid location!*`,
      noInnHere:
        `🏕️ *No inn here!*\n\nThis is a wilderness location. Use *{prefix}camp* instead.\nInns are only available in towns with shops.`,
      cannotRestCombat: `⚠️ *You cannot rest at an inn while in combat!*`,
      alreadyResting: `🏨 *You are already resting!*\n\nType *leave* to stop resting.`,
      notEnoughGold:
        `💰 *Not enough gold!*\n\nInn cost: {price} gold\nYour gold: {gold}\n\nYou need {needed} more gold.`,
      alreadyWellRested:
        `✅ *You are already well rested!*\n\n❤️ HP: {hp}/{maxHp}\n💧 Mana: {mana}/{maxMana}\n✨ Well Rested buff active\n\nNo need to rest at the inn right now.`,
      welcomeRest:
        `🏨 *Welcome to the Inn!*\n\n` +
        `💰 Paid: {price} gold\n` +
        `💰 Remaining: {remaining} gold\n\n` +
        `✨ *Fully Restored!*\n` +
        `❤️ HP: {hp}/{maxHp} (+{hpGain})\n` +
        `💧 Mana: {mana}/{maxMana} (+{manaGain})\n\n` +
        `🌟 *Well Rested Buff*\n` +
        `Regenerate 10% HP and Mana per turn\n` +
        `Duration: 10 turns in combat\n\n` +
        `🛡️ *Protected Status*\n` +
        `Enemies cannot ambush you while resting.\n` +
        `You can still accept/decline challenges.\n\n` +
        `Type *leave* to check out of the inn.`,
      leaveCheckout:
        `🏨 *Checked out of inn*\n\nYou feel refreshed and ready for adventure!\n\n✨ Well Rested buff active for next 10 combat turns.`,
      effectStoredDesc: "Regenerate 10% HP and Mana per turn in combat",
    },

    campCmd: {
      notRegistered:
        "⚠️ *You are not registered yet!*\n\nType *{prefix}register <your name>* to start.",
      invalidLocation: `⚠️ *Invalid location!*`,
      cantCampInTown:
        `🏘️ *Cannot camp here!*\n\n` +
        `This location has an inn. Use *{prefix}inn* instead.\nCamping is only available in wilderness locations.`,
      alreadyCamping: `🏕️ *You are already camping!*\n\nType *leave* to stop camping.`,
      cannotInCombat: `⚠️ *You cannot camp while in combat!*`,
      alreadyFull:
        `✅ *You are already at full health and mana!*\n\n` +
        `❤️ HP: {hp}/{maxHp}\n` +
        `💧 Mana: {mana}/{maxMana}\n\n` +
        `No need to camp right now.`,
      settingUpCamp:
        `🏕️ *Setting up camp...*\n\n` +
        `You find a safe spot to rest.\n` +
        `Regenerating 1% HP and Mana per second.\n\n` +
        `❤️ HP: {hp}/{maxHp}\n` +
        `💧 Mana: {mana}/{maxMana}\n\n` +
        `Type *leave* to stop camping.`,
      timeoutReached:
        `⏰ *Camp time limit reached!*\n\n` +
        `You've been camping for {mins} minutes.\n\n` +
        `❤️ HP: {hp}/{maxHp}\n` +
        `💧 Mana: {mana}/{maxMana}\n\n` +
        `Camp session ended automatically.\nType *{prefix}camp* again if you need more rest.`,
      fullyRestedBanner:
        `✅ *FULLY RESTED!*\n\n` +
        `❤️ HP: {hp}/{maxHp} ✅\n` +
        `💧 Mana: {mana}/{maxMana} ✅\n\n` +
        `⏱️ Time: {secs}s\n\n` +
        `You are fully healed and rested!\n` +
        `Type *leave* to end camping.`,
      regenBanner:
        `💚 Regenerating...\n\n` +
        `❤️ HP: {hp}/{maxHp} ({hpPct}%) +{hpGain}\n` +
        `💧 Mana: {mana}/{maxMana} ({manaPct}%) +{manaGain}\n\n` +
        `⏱️ Time: {secs}s\n\n` +
        `🛡️ *Protected Status*\n` +
        `Enemies cannot ambush you while camping.\n` +
        `You can still accept/decline challenges.\n\n` +
        `Type *leave* to stop camping.`,
      notCamping: `⚠️ *You are not camping!*`,
      leaveSummary:
        `🏕️ *Left camp*\n\n` +
        `You pack up your camp and continue your journey.\n\n` +
        `❤️ HP: {hp}/{maxHp}\n` +
        `💧 Mana: {mana}/{maxMana}\n\n` +
        `⏱️ Camped for: {secs}s`,
      animA: `🏕️ *CAMPING...*\n\n🔥 ▁▂▃▄▅▆▇■\n🌲🌲  🏕️  🌲🌲`,
      animB: `🏕️ *CAMPING...*\n\n🔥 ■▇▆▅▄▃▂▁\n🌲🌲  🏕️  🌲🌲`,
    },

    storyCmd: {
      noActiveEncounter: "⚠️ *No active story encounter.*\n\nTravel to trigger random encounters!",
      encounterNotFound: "⚠️ *Story encounter data not found.*",
      invalidChoice: "⚠️ *Invalid choice for this encounter.*\n\nValid choices: {choices}",
      notRegistered: "⚠️ *You are not registered!*",
      cannotChooseTitle: "⚠️ *Cannot make this choice!*\n\n",
      availableChoicesHeader: "\n\n*Available Choices:*\n",
      choiceLineOk: "\n{status} *{key}* - {label}",
      choiceLineReason: "\n   └ {reason}",
      chooseAgain: "\n\nChoose again with: *{prefix}story <choice>*",
      processError: "⚠️ *Error processing choice.*",
      repGainGood: "\n😇 +{n} reputation (good)",
      repGainEvil: "\n😈 {n} reputation (evil)",
      repTitleChanged: "\n\n{emoji} *Reputation title updated!*\n{oldTitle} → {newTitle}",
      goldGain: "\n💰 +{n} gold",
      goldLoss: "\n💸 {n} gold",
      expGain: "\n⭐ +{n} XP",
      expLoss: "\n📉 {n} XP",
      levelUp: "\n\n🎉 *LEVEL UP!* You are now level {level}! (+3 stat points)",
      damageHp: "\n💔 -{n} HP",
      knockedOut:
        "\n\n💀 *You were knocked out!*\n❤️ Revived at 50% HP\n💸 Lost 10% gold",
      itemGain: "\n🎁 +{qty}x {id}",
      outcomeDivider: "\n━━━━━━━━━━━━━━━━━━━━\n",
      outcomeBanner: "{emoji} *{typeLabel}*\n",
      rewardsHeader: "\n\n*Rewards:*",
      footerGold: "\n\n💰 Gold: {gold}g\n",
      footerExp: "⭐ XP: {exp}\n",
      footerHp: "❤️ HP: {hp}/{maxHp}\n",
      footerRepLine: "{emoji} Reputation: {title} ({value})\n",
      continueHint: "\nContinue with *{prefix}location*",
      outcomeTypeGood: "GOOD OUTCOME",
      outcomeTypeNeutral: "NEUTRAL OUTCOME",
      outcomeTypeBad: "BAD OUTCOME",
      outcomeTypeUnknown: "OUTCOME",
    },

    pvpCmd: {
      alreadyInCombat: "⚠️ *One of the players is already in combat!*",
      battleStartedGroup:
        `⚔️ *PVP BATTLE STARTED!*\n\n` +
        `{p1} vs {p2}\n\n{ambushLine}` +
        `📱 *Check your DM with the bot for battle updates!*\n\n` +
        `Send commands in DM to fight.`,
      ambushLineGroup: `💥 *AMBUSH!* Same location attack!\n\n`,
      battleStartedDm: `⚔️ *PVP BATTLE STARTED!*\n\nYou vs {opp}\n\n{ambushLine}`,
      ambushLineP1: `💥 *AMBUSH!* Same location attack!\n\n`,
      ambushLineP2: `💥 *AMBUSH!* You're under attack!\n\n`,
      divider: `========================`,
      roundTitle: `⚔️ *PVP ROUND {round}*\n\n`,
      youLine: `👤 *You ({name})*{st}\n`,
      oppNamed: `👤 *{name}*{st}\n`,
      hpBarLine: `❤️ {bar} {hp}/{maxHp}{sp}\n`,
      manaLine: `💧 Mana: {mana}/{maxMana}\n\n`,
      skillsBlock: `🎯 *Your skills:* {skills}\n\n`,
      skillEmptySlot: `[{i}] —`,
      weaponSlot: `  [4] {name}{cd}`,
      turnLine: `⏱️ *{turnLabel}* ({secs}s)\n\n`,
      turnYour: "YOUR TURN",
      turnOpponent: "{name}'s turn",
      commandsLine: `*Commands:* attack / defend / skill [1/2/3{four}] / item / run / status`,
      stunned: ` 💫STUNNED`,
      silenced: ` 🤐SILENCED`,
      notYourTurn: `⏱️ *Not your turn!*\n\nWait for {name} to act.`,
      noSkillSlot: `⚠️ *No skill in slot {slot}.*`,
      silencedCantSkill: `🤐 *You are silenced!* You can't use skills this turn.`,
      skillCooldown: `⏳ *{skill}* is on cooldown! ({n} turns left)`,
      notEnoughMana: `💧 *Not enough mana!* Need {need}, have {have}.`,
      unknownCommand:
        `⚠️ *Unknown command.*\n\nType: attack / defend / skill [1/2/3] / item / run / status`,
      itemUsage: `🎒 *Usage:* item <name>\nExample: *item health_potion*\n\nYour combat items:\n{list}`,
      itemNoneCombat: `None`,
      itemCannotUse: `⚠️ *Can't use that item in battle.*`,
      itemDontHave: `⚠️ *You don't have {item}.*`,
      cleanseRemoved: `✨ Removed {n} negative effect(s).`,
      logStunnedSkip: `💫 {name} is stunned and skips their turn!`,
      logDefendSp: `🛡️ {name} raises their guard! SP: {sp}`,
      logYouDodgeSkill: `💨 *You dodged {name}'s {skill}!*`,
      logUsesSkill: `{name} uses *{skill}*!`,
      logCrit: `💥 Critical hit!`,
      logShieldAbsorbYou: `🛡️ Shield absorbed {n} damage!`,
      logYouTake: `❤️ You take *{d}* damage! HP: {hp}/{maxHp}`,
      logShieldBlocksYou: `🛡️ All damage blocked by shield! HP: {hp}/{maxHp}`,
      logShieldBrokenYou: `💔 *SHIELD BREAK!* Your shield is broken!`,
      logShieldBreakTrigger: `💥 *SHIELD BREAK TRIGGERED!* 3x damage dealt!`,
      logShieldBreakTriggerShort: `💥 *SHIELD BREAK TRIGGERED!* 3x damage!`,
      logYouStunned1: `💫 You're stunned for 1 turn!`,
      logReflectYou: `🪞 You reflect {n} damage back!`,
      logYouDodgeAtk: `💨 *You dodged {name}'s attack!*`,
      logAttacks: `{name} attacks!`,
      logTargetDodgedYou: `💨 *{name} dodged your attack!*`,
      logYouAttack: `⚔️ *You attack {name}!*`,
      logCritHit: `💥 *Critical Hit!*`,
      logEnemyShieldAbsorb: `🛡️ Enemy shield absorbed {n} damage!`,
      logDealt: `💢 Dealt *{d}* damage! {name} HP: {hp}/{maxHp}`,
      logEnemyShieldBlock: `🛡️ All damage blocked by enemy shield! {name} HP: {hp}/{maxHp}`,
      logEnemyShieldBlockSkill: `🛡️ All damage blocked by enemy shield!`,
      logEnemyShieldBreak: `💔 *ENEMY SHIELD BREAK!*`,
      logTargetReflects: `🪞 {name} reflects {n} damage back!`,
      logYouGuard: `🛡️ *You raise your guard!* SP: {sp}/{maxSp}`,
      logYouStunnedTurn: `💫 *You're stunned!* Skipping your turn...`,
      logSkillName: `💥 *{skill}!*`,
      logTargetDodgeSkill: `💨 *{name} dodged!*`,
      logTargetStunned: `💫 {name} is stunned!`,
      logExecuteExtra: `💀 Execute deals {n} extra damage!`,
      logHpRemain: `{name} HP: {hp}/{maxHp}`,
      logFailEscape: `🏃 *Failed to escape!* {name} blocks your path and gets a free attack!`,
      finishingBlow: `\n\n⚔️ *Finishing blow!*`,
      youWereDefeated: `\n\n⚔️ *You were defeated!*`,
      defeatedByFx: `\n\n⚔️ *Defeated by status effects!*`,
      opponentDefeatedFx: `\n\n⚔️ *{name} was defeated by status effects!*`,
      victimStunnedItem: `💫 {name} is stunned for {n} turn(s)!`,
      victoryTitle: `🏆 *VICTORY!*\n\n`,
      victoryBody: `You defeated *{name}* in PVP!\n\n`,
      victoryGoldLine: `💰 Gold taken: +{gold}{extra}\n\n`,
      bountyClaimed: `\n💀 *Bounty claimed:* +{gold} gold`,
      itemsStolenHeader: `\n\n📦 *Items taken:*`,
      evilPenaltyNote: `\n⚠️ *Evil target penalty:* heavy gold/items taken`,
      victoryTotals: `💰 *Total gold gained:* {total}\n❤️ Your HP: {hp}/{maxHp}\n💧 Your mana: {mana}/{maxMana}`,
      defeatedTitle: `💀 *DEFEATED!*\n\n`,
      defeatedBody: `*{winner}* beat you in PVP!\n\n`,
      defeatedGoldLost: `💰 Gold lost: -{gold}{itemsLost}\n\n`,
      itemsLostHeader: `\n\n📦 *Items lost:*`,
      respawnHint: `You respawned at Starter Village with 1 HP.\nVisit the shop to recover.`,
      battleEnded: `⚔️ *PVP BATTLE OVER!*\n\n`,
      battleWinner: `🏆 *{winner}* beat *{loser}!*\n\n`,
      battleGoldStolen: `💰 {gold} gold taken{itemsNote}`,
      itemsStolenShort: `\n📦 {n} stack(s) of items`,
      escapedYou: `🏃 *You escaped!*\n\nYou fled the PVP fight.\n\nType *challenge* to fight again.`,
      escapedOther: `🏃 *{name} escaped!*\n\nYour opponent fled.\n\nType *challenge* to fight again.`,
      battleEndedEscaped: `⚔️ *PVP BATTLE OVER!*\n\n🏃 *{name}* escaped!`,
      turnTimeoutSelf: `⏱️ *TURN TIMEOUT!*\n\nYou took too long!\nTurn goes to {name}.\n\n`,
      turnTimeoutOther: `⏱️ *TURN TIMEOUT!*\n\n{name} took too long!\nYour turn now!\n\n`,
      itemLine: `• {id} x{qty}`,
      hpOnlyLine: `❤️ HP: {hp}/{maxHp}`,
      manaOnlyLine: `💧 Mana: {mana}/{maxMana}`,
      hpManaLine: `❤️ HP: {hp}/{maxHp} | 💧 Mana: {mana}/{maxMana}`,
      itemUsedBanner: `🎒 *{name}*`,
      finishingStrike: `\n\n⚔️ *Finishing strike!*`,
      finishingVictim: `\n\n⚔️ *You lost this round!*`,
      defeatedByStatusSelf: `\n\n⚔️ *Downed by status effects!*`,
      defeatedByStatusOther: `\n\n⚔️ *{name} went down from status effects!*`,
      groupBattleIntro: `⚔️ *PVP BATTLE!*\n\n`,
    },

    registerCmd: {
      alreadyRegistered:
        `⚠️ *You are already registered!*\n\n` +
        `Your character: *{name}* ({cls})\n` +
        `Use *{prefix}profile* to see your stats.`,
      welcomeUsage:
        `📜 *Welcome to the RPG World!*\n\n` +
        `To register, type:\n*{prefix}register <your name>*\n\n` +
        `Example: *{prefix}register Evarick*`,
      nameLengthBad: `⚠️ *Name must be between 3 and 16 characters.*`,
      nameInvalidChars:
        `⚠️ *Name can only contain letters, numbers, and underscores.*`,
      nameTaken: `⚠️ *The name "{name}" is already taken. Please choose another.*`,
      pickClass:
        `✅ *Name reserved: {name}*\n\n` +
        `Now choose your class by typing:\n*{prefix}class <classname>*\n\n` +
        `Available classes:\n\n{classBlock}` +
        `Example: *{prefix}class warrior*\n\n` +
        `⏳ You have 2 minutes to choose.`,
      currentClassBanner: `📋 *Your Current Class:* {cls}\n\n`,
      classChangeHint:
        `💡 Want to change your class?\nType *{prefix}class <new_class>* to see the cost.\n\n` +
        `Available classes: {options}`,
      invalidClassMsg: `⚠️ *"{id}" is not a valid class.*\n\nAvailable: {options}`,
      alreadySameClass: `⚠️ *You are already a {cls}!*`,
      changeRequestTitle: `💰 *Class Change Request*\n\n`,
      changeInsufficient:
        `{emoji} *New Class:* {name}\n` +
        `📖 {desc}\n\n` +
        `💵 *Cost:* {cost} gold\n` +
        `💰 *Your Gold:* {gold}\n\n` +
        `❌ *Insufficient funds!*\n` +
        `You need {shortage} more gold.`,
      changeConfirmTitle: `💰 *Class Change Confirmation*\n\n`,
      changeConfirmBody:
        `📋 *Current Class:* {currentCls}\n` +
        `{emoji} *New Class:* {newName}\n` +
        `📖 {desc}\n\n` +
        `⚠️ *Warning:*\n` +
        `• Cost: {cost} gold\n` +
        `• Your stats will be reset to {newName} base stats\n` +
        `• Your skills will be reset to {newName} starter skill\n` +
        `• Your learned skill books will be returned to inventory\n` +
        `• Your equipment will remain unchanged\n` +
        `• Your level and XP will remain unchanged\n\n` +
        `💰 *Your Gold:* {gold} gold\n` +
        `💰 *After Change:* {afterGold} gold\n\n` +
        `Type *{prefix}yes* to confirm or *{prefix}no* to cancel.\n` +
        `⏳ You have 1 minute to decide.`,
      noPendingRegister:
        `⚠️ *You haven't started registration yet.*\n\nType *{prefix}register <your name>* first.`,
      registerExpired:
        `⏰ *Registration expired.*\n\nPlease start again with *{prefix}register <your name>*.`,
      specifyClass: `⚠️ *Please specify a class.*\n\n{options}`,
      noPendingChange: `⚠️ *No pending class change.*`,
      changeRequestExpired: `⏰ *Class change request expired.*`,
      yesInsufficientFunds:
        `❌ *Insufficient funds!*\n\n` +
        `You need {cost} gold but only have {gold} gold.`,
      changeCancelled:
        `❌ *Class change cancelled.*\n\nYour class remains unchanged.`,
      classChangedOk: `✨ *CLASS CHANGED SUCCESSFULLY!*\n\n`,
      changeOldNew:
        `📋 *Old Class:* {oldCls}\n` +
        `{emoji} *New Class:* {newName}\n\n` +
        `💰 *Gold Spent:* {spent}\n` +
        `💰 *Remaining Gold:* {remain}\n\n`,
      returnedBooksTitle: `📚 *Skill Books Returned to Inventory:*\n`,
      returnedBookLine: `• {title}\n`,
      newStatsTitle: `📊 *Your New Stats:*\n`,
      statLineHp: `❤️ HP      : {v}\n`,
      statLineMana: `💧 Mana    : {v}\n`,
      statLineAtk: `⚔️ Attack  : {v}\n`,
      statLineDef: `🛡️ Defense : {v}\n`,
      statLineAgi: `💨 Agility : {v}\n`,
      statLineLuck: `🍀 Luck    : {v}\n\n`,
      newStarterSkill: `✨ *New Starter Skill:* {name}\n{desc}\n\n`,
      newPassive: `🔮 *New Passive:* {name}\n{desc}\n\n`,
      profileFooterClassChange: `Type *{prefix}profile* to see your full stats.`,
      charWelcome:
        `🎉 *Welcome to this world, {name}!*\n\n` +
        `{clsEmoji} *Class: {clsName}*\n` +
        `📖 {clsDesc}\n\n` +
        `📊 *Your Starting Stats:*\n` +
        `❤️ HP       : {maxHp}\n` +
        `💧 Mana     : {maxMana}\n` +
        `⚔️ Attack   : {attack}\n` +
        `🛡️ Defense  : {defense}\n` +
        `💨 Agility  : {agility}\n` +
        `🍀 Luck     : {luck}\n\n` +
        `✨ *Starter Skill:* {starterName}\n` +
        `{starterDesc}\n\n` +
        `🔮 *Passive:* {passiveName}\n` +
        `{passiveDesc}\n\n` +
        `📍 *Location:* {location}\n` +
        `💰 *Gold:* {startingGold}\n\n` +
        `Type *{prefix}profile* for full stats.\n` +
        `Type *{prefix}location* to see where you are.\n` +
        `Type *{prefix}hunt* to fight!`,
      charWelcomeId:
        `🎉 *Selamat datang di dunia ini, {name}!*\n\n` +
        `{clsEmoji} *Kelas: {clsName}*\n` +
        `📖 {clsDesc}\n\n` +
        `📊 *Stats Awal Kamu:*\n` +
        `❤️ HP      : {maxHp}\n` +
        `💧 Mana    : {maxMana}\n` +
        `⚔️ Serangan  : {attack}\n` +
        `🛡️ Pertahanan : {defense}\n` +
        `💨 Kelincahan : {agility}\n` +
        `🍀 Keberuntungan    : {luck}\n\n` +
        `✨ *Skill Awal:* {starterName}\n` +
        `{starterDesc}\n\n` +
        `🔮 *Pasif:* {passiveName}\n` +
        `{passiveDesc}\n\n` +
        `📍 *Lokasi:* {location}\n` +
        `💰 *Emas:* {startingGold}\n\n` +
        `Ketik *{prefix}profil* untuk melihat stats lengkap.\n` +
        `Ketik *{prefix}lokasi* untuk melihat posisi kamu.\n` +
        `Ketik *{prefix}hunt* untuk mulai bertarung!`,
      languageHint:
        `🌍 *Change Language / Ubah Bahasa*\n\n` +
        `This bot supports multiple languages!\n` +
        `Bot ini mendukung multi-bahasa!\n\n` +
        `🇬🇧 English\n🇮🇩 Indonesian\n\n` +
        `To change language — type:\n` +
        `Untuk mengganti bahasa — ketik:\n\n` +
        `*{prefix}language en* — English\n` +
        `*{prefix}language id* — Indonesian`,
      locationStarterVillageEn: "Starter Village",
      locationStarterVillageId: "Desa Pemula",
    },

    equipskillCmd: {
      notRegistered: "⚠️ *You are not registered yet!*\n\nType *!register <your name>* to start your adventure.",
      usage: "⚠️ *Usage:* !equipskill <skill_name> <slot>\n\n*Example:* !equipskill fireball 2\n\nSlots: 1, 2, or 3\nType *!myskills* to see your learned skills.",
      invalidSlot: "⚠️ *Invalid slot number!*\n\nSlot must be 1, 2, or 3.\n\n*Example:* !equipskill fireball 2",
      notLearned: "⚠️ *You haven't learned \"{skill}\" yet!*\n\nType *!myskills* to see your learned skills.\nBuy skill books from shops to learn new skills.",
      skillMissing: "⚠️ *Skill \"{skill}\" not found in database.*\n\nThis might be a bug. Please contact the owner.",
      alreadyEquipped: "⚠️ *{name} is already equipped in Slot {slot}!*\n\nUnequip it first with *!unequipskill {slot}*",
      success: "✅ *Skill Equipped!*\n\n{emoji} *{name}*\n📍 Equipped to *Slot {slot}*\n\n📖 {description}\n\n💧 Mana Cost: {mana}\n⏱️ Cooldown: {cd} turns\n\nUse *skill {slot}* in combat to activate!\nType *!myskills* to see all your skills.",
    },

    unequipskillCmd: {
      notRegistered: "⚠️ *You are not registered yet!*\n\nType *!register <your name>* to start your adventure.",
      usage: "⚠️ *Usage:* !unequipskill <slot>\n\n*Example:* !unequipskill 2\n\nSlots: 1, 2, or 3\nType *!myskills* to see your equipped skills.",
      invalidSlot: "⚠️ *Invalid slot number!*\n\nSlot must be 1, 2, or 3.\n\n*Example:* !unequipskill 2",
      emptySlot: "⚠️ *Slot {slot} is already empty!*\n\nType *!myskills* to see your equipped skills.",
      success: "✅ *Skill Unequipped!*\n\n*{name}* removed from Slot {slot}.\n\nThe skill is still in your learned skills.\nYou can re-equip it anytime with:\n*!equipskill {id} {slot}*\n\nType *!myskills* to see all your skills.",
    },
  },

  id: {
    code: "id",
    name: "Bahasa Indonesia",
    flag: "🇮🇩",
    
    // Common
    common: {
      level: "Level",
      gold: "Emas",
      hp: "HP",
      mana: "Mana",
      attack: "Serangan",
      defense: "Pertahanan",
      agility: "Kelincahan",
      luck: "Keberuntungan",
      xp: "XP",
      class: "Kelas",
      location: "Lokasi",
      inventory: "Inventori",
      equipment: "Perlengkapan",
      skills: "Skill",
      quests: "Quest",
      party: "Party",
      yes: "Ya",
      no: "Tidak",
      cancel: "Batal",
      confirm: "Konfirmasi",
      success: "Berhasil",
      failed: "Gagal",
      error: "Error",
      loading: "Memuat",
      notRegistered: "Kamu belum terdaftar!",
      registerFirst: "Ketik *register <nama kamu>* untuk memulai petualangan.",
      notRegisteredFull: "⚠️ *Kamu belum terdaftar!*\n\nKetik *register <nama kamu>* untuk memulai.",
    },
    
    // Commands
    commands: {
      register: "daftar",
      profile: "profil",
      hunt: "berburu",
      location: "lokasi",
      travel: "pergi",
      shop: "toko",
      buy: "beli",
      sell: "jual",
      bag: "tas",
      equip: "pasang",
      language: "bahasa",
      addstat: "tambahstat",
    },
    
    // Register
    register: {
      alreadyRegistered: "⚠️ *Kamu sudah terdaftar!*\n\nKarakter kamu: *{name}* ({class})\nGunakan *profil* untuk melihat stats.",
      chooseClass: "🎮 *Pilih Kelas Kamu*\n\n{classes}\n\nKetik *class <nama>* untuk memilih.\nContoh: *class warrior*",
      classChosen: "✅ *Karakter Dibuat!*\n\n👤 Nama: *{name}*\n🎓 Kelas: *{class}*\n⭐ Level: 1\n💰 Emas: 50\n\nPetualangan dimulai! Ketik *profil* untuk melihat stats.",
      invalidClass: "❌ *Kelas tidak valid!*\n\nKelas tersedia: {classes}",
      needName: "⚠️ *Mohon berikan nama!*\n\nPenggunaan: *register <nama kamu>*\nContoh: *register Budi*",
    },
    
    // Profile
    profile: {
      title: "👤 *{name}*",
      stats: "📊 *Stats Dasar:*",
      equipment: "⚔️ *Perlengkapan:*",
      commands: "💡 *Perintah:*",
    },
    
    // Language
    language: {
      current: "🌍 *Bahasa Saat Ini*\n\n{flag} *{name}*\n\nKetik *bahasa <kode>* untuk mengubah.\nContoh: *bahasa id*",
      available: "🌍 *Bahasa Tersedia*\n\n{languages}\n\nKetik *bahasa <kode>* untuk mengubah.\nContoh: *bahasa en*",
      changed: "✅ *Bahasa Diubah!*\n\n{flag} *{name}*\n\nSemua pesan sekarang dalam bahasa {name}.",
      invalid: "❌ *Kode bahasa tidak valid!*\n\nBahasa tersedia:\n{languages}",
    },
    
    // Hunt
    hunt: {
      notHere: "🚫 *Kamu tidak bisa berburu di sini!*\n\nPergi ke lokasi dengan monster.\nKetik *lokasi* untuk melihat posisi kamu.",
      enemyAppears: "⚔️ *{enemy} liar muncul!*",
      victory: "🏆 *Kemenangan!*\n\nKamu mengalahkan *{enemy}*!",
      defeat: "💀 *Kekalahan!*\n\nKamu dikalahkan oleh *{enemy}*.",
      levelUp: "🎉 *NAIK LEVEL!* Kamu sekarang Level {level}! (+3 poin stat)",
    },
    
    // Location
    location: {
      title: "📍 *Lokasi Saat Ini*",
      safeZone: "✅ Zona Aman",
      dangerZone: "⚠️ Zona Berbahaya",
      actions: "⚡ *Aksi Tersedia:*",
      playersHere: "👥 *Pemain Di Sini:* ({count})",
      connected: "🗺️ *Lokasi Terhubung:*",
      travelHint: "Ketik *pergi <nama lokasi>* untuk berpindah.",
    },
    
    // Shop
    shop: {
      title: "🏪 *Toko*",
      yourGold: "💰 Emas kamu: *{gold}g*",
      buySuccess: "✅ *Pembelian Berhasil!*\n\nKamu membeli {qty}x {item} seharga {price}g.",
      buyFailed: "❌ *Pembelian Gagal!*\n\n{reason}",
      sellSuccess: "✅ *Penjualan Berhasil!*\n\nKamu menjual {qty}x {item} seharga {price}g.",
      notEnoughGold: "Emas tidak cukup! Kamu butuh {need}g tapi hanya punya {have}g.",
      outOfStock: "Item habis!",
      notInInventory: "Kamu tidak punya item itu!",
      buyNoShop:
        `🚫 *Tidak ada toko di sini.*\n\n` +
        `Pergi ke lokasi yang punya toko dulu.\n\n` +
        `Ketik *{prefix}shop* untuk lihat lokasi.`,
      buyUsage:
        `⚠️ *Cara pakai:* {prefix}buy <nama item> [jumlah]\n` +
        `Contoh: *{prefix}buy health_potion*\n` +
        `Contoh: *{prefix}buy health_potion 3*\n\n` +
        `Ketik *{prefix}shop* untuk lihat item.`,
      buyItemNotFound: `❓ *Item "{item}" tidak ditemukan.*\n\nKetik *{prefix}shop* untuk lihat item.`,
      itemNotPurchasable: `⚠️ *{name}* tidak bisa dibeli.`,
      itemNotInThisShop:
        `🚫 *{name}* tidak dijual di toko ini.\n\n` +
        `Tiap toko menjual beda barang.\nKetik *{prefix}shop* untuk yang tersedia di sini.`,
      buyLowStock:
        `📦 *Stok tidak cukup!*\n\n` +
        `{name}\n` +
        `Tersedia: *{stock}*\n` +
        `Kamu minta: *{want}*\n\n` +
        `Toko restock tiap 30 menit.`,
      purchaseFailed: `⚠️ *Pembelian gagal:* {message}`,
      buyRemainingGold: `💰 Emas sisa: *{gold}g*\n`,
      buyStockRemaining: `📦 Stok tersisa: *{stock}*\n\n`,
      buyAddedToInventory: `Item masuk ke 🎒 inventori!`,
    },
    
    // Combat
    combat: {
      attack: "serang",
      defend: "bertahan",
      skill: "skill",
      item: "item",
      run: "lari",
      status: "status",
      yourTurn: "💡 *Giliran kamu!*\nKetik: serang / bertahan / skill [1/2/3] / item / lari",
      enemyTurn: "👾 *Giliran musuh!*",
      stunned: "💫 *Terpukau!* Tidak bisa bergerak giliran ini.",
      missed: "💨 *Meleset!*",
      critical: "💥 *SERANGAN KRITIS!*",
      dodged: "⚡ *Menghindar!*",
    },
    
    // Stats
    stats: {
      title: "📊 *ALOKASI STAT*",
      available: "💎 Poin Tersedia: *{points}*",
      current: "*Stats Saat Ini:*",
      increases: "*Peningkatan Stat:*",
      perPoint: "per poin",
      success: "✅ *STAT DITINGKATKAN!*\n\n{emoji} *{stat}*\n{old} → {new} (+{increase})",
      notEnough: "❌ *Poin stat tidak cukup!*\n\nKamu punya: {have} poin\nKamu butuh: {need} poin",
    },
    
    // Bag/Inventory
    bag: {
      title: "🎒 *INVENTORI KAMU*",
      empty: "Inventori kamu kosong!",
      gold: "💰 Emas: *{gold}g*",
      items: "📦 *Item:* ({count})",
      commands: "💡 *Perintah:*",
      useItem: "• !item <nama> - Gunakan item",
      equipItem: "• !equip <nama> - Pasang item",
      sellItem: "• !sell <nama> - Jual item",
    },
    
    // Quests
    quests: {
      title: "📜 *RINGKASAN QUEST*",
      daily: "📅 *Harian:* {completed}/{total} siap diklaim",
      weekly: "📆 *Mingguan:* {completed}/{total} siap diklaim",
      monthly: "📊 *Bulanan:* {completed}/{total} siap diklaim",
      viewSpecific: "*Lihat quest spesifik:*",
      claimRewards: "*Klaim hadiah:*",
      readyToClaim: "🎁 *{count} quest siap diklaim!*",
      allClaimed: "✅ *Semua quest sudah diklaim!*",
      keepGoing: "💪 *Terus semangat!*",
      progress: "📊 Progress: {claimed}/{total} diklaim",
    },
    
    // Claim
    claim: {
      title: "🎁 *HADIAH QUEST DIKLAIM!*",
      claimed: "Diklaim {count} quest {period}!",
      goldEarned: "💰 Emas: +{gold} (Total: {total})",
      xpEarned: "⭐ XP: +{xp}",
      itemsReceived: "🎁 *Item Diterima:*",
      viewRemaining: "Ketik *quests {period}* untuk melihat quest tersisa.",
      nothingToClaim: "❌ *Tidak ada quest yang siap diklaim!*\n\nSelesaikan quest dulu, baru klaim hadiah.",
      invalidPeriod: "❌ *Periode tidak valid!*\n\nGunakan: *claim daily*, *claim weekly*, atau *claim monthly*",
      noQuestData: "⚠️ *Data quest tidak ditemukan!*",
      questsResetTitle: "⚠️ *Quest sudah direset!*",
      questsResetBody: "Quest {period} kamu sudah direset untuk periode baru.",
      questsResetHint: "Ketik *quests {period}* untuk melihat quest baru.",
      periodDaily: "harian",
      periodWeekly: "mingguan",
      periodMonthly: "bulanan",
      repBonusLine: "   ✨ Bonus reputasi baik: +{bonus} emas\n",
      reputationGainLine: "😊 Reputasi: +{amount}\n",
      levelUp: "\n🎉 *NAIK LEVEL!* Kamu sekarang level {level}!\n",
      itemLine: "• {id} x{qty}\n",
      sectionRule: "========================\n\n",
    },
    
    // Travel
    travel: {
      currentLocation: "📍 *Lokasi Saat Ini*",
      travelTo: "🚶 *Bepergian ke {location}...*",
      arrived: "📍 *Kamu tiba di {location}*",
      discovered: "🗺️ *Lokasi baru ditemukan!*",
      safeZone: "✅ Zona Aman",
      dangerZone: "⚠️ Zona Berbahaya",
      actions: "⚡ *Aksi Tersedia:*",
      playersHere: "👥 *Pemain Di Sini:* ({count})",
      connectedLocations: "🗺️ *Lokasi Terhubung:*",
      travelHint: "Ketik *travel <lokasi>* untuk berpindah.",
      cantTravel: "❌ *Kamu tidak bisa pergi ke sana!*\n\n{reason}",
      notConnected: "Lokasi itu tidak terhubung dengan lokasi kamu saat ini.",
      levelTooLow: "Kamu harus Level {level} untuk pergi ke sana.",
      warning: "⚠️ *Peringatan: Area ini berbahaya untuk Level {playerLevel}! (Rekomendasi: Lv.{minLevel})*",
    },
    
    // Sell
    sell: {
      noShop: "🚫 *Tidak ada toko di sini.*\n\nPergi ke lokasi dengan toko terlebih dahulu.",
      usage: "⚠️ *Penggunaan:* jual <nama item> [jumlah]\nContoh: *jual rat_fur*\nContoh: *jual rat_fur 5*\nContoh: *jual semua rat_fur*\n\nKetik *tas* untuk melihat inventori.",
      itemNotFound: "❓ *Item \"{item}\" tidak ditemukan.*\n\nKetik *tas* untuk melihat inventori.",
      cannotSell: "⚠️ *{item}* tidak bisa dijual.",
      notInInventory: "⚠️ *Kamu tidak punya {item} di inventori.*\n\nKetik *tas* untuk melihat item kamu.",
      success: "💰 *Terjual!*\n\n{item} x{qty}\n💰 Dapat: *{earned}g*\n💰 Total emas: *{total}g*",
    },
    
    // Equip
    equip: {
      equipped: "⚔️ *Memasang {item}*",
      unequipped: "✅ *Melepas {item}*",
      cannotEquip: "⚠️ *{item} tidak bisa dipasang!*\n\nHanya senjata, perisai, armor, dan aksesoris yang bisa dipasang.",
      notInInventory: "⚠️ *Kamu tidak punya {item} di inventori!*\n\nKetik *tas* untuk melihat item kamu.",
      twoHandedConflict: "⚠️ *Tidak bisa memasang perisai!*\n\n{weapon} kamu menggunakan dua tangan.\nLepas senjata kamu terlebih dahulu.",
      noItemEquipped: "⚠️ *Tidak ada {slot} yang dipasang!*",
      invalidSlot: "⚠️ *Slot tidak valid: {slot}*\n\nSlot yang valid: weapon, offhand, head, chest, legs, boots, accessory",
      setBonusActivated: "✨ *BONUS SET AKTIF!*\n{setName} Set (4/4)",
      setBonusDeactivated: "⚠️ *Bonus set dinonaktifkan!*",
      equipmentTitle: "⚔️ *Perlengkapan {name}*",
      equipmentStats: "📊 *Stats Perlengkapan:*",
      passive: "✨ *Pasif:*",
      weaponSkill: "⚡ *Skill Senjata:*",
      usage: "⚠️ *Mohon tentukan item yang akan dipasang!*\n\nPenggunaan: *!equip <nama_item>*\nContoh: *!equip steel_sword*\n\nKetik *!tas* untuk melihat inventori.",
      unequipUsage: "⚠️ *Mohon tentukan slot yang akan dilepas!*\n\nPenggunaan: *!unequip <slot>*\nContoh: *!unequip weapon*\n\nSlot yang valid:\n• weapon\n• offhand (atau shield)\n• head, chest, legs, boots\n• accessory",
    },
    
    // Item
    item: {
      title: "🎒 *GUNAKAN ITEM*",
      usage: "*Penggunaan:* !item <nama_item>\n*Contoh:* !item health_potion",
      usableItems: "*Item yang bisa digunakan:*",
      none: "Tidak ada",
      tip: "💡 *Tip:* Ketik *!tas* untuk melihat semua item.",
      notFound: "⚠️ *Item \"{item}\" tidak ditemukan.*\n\nCek inventori dengan *!tas*",
      notInInventory: "⚠️ *Kamu tidak punya {item} di inventori.*\n\nBeli dari toko dengan *!buy {itemId}*",
      combatOnly: "⚠️ *{item} hanya bisa digunakan dalam pertarungan!*\n\nGunakan saat berburu dengan: *item {itemId}*",
      skillLearned: "✨ *SKILL DIPELAJARI!*",
      classRequired: "⚠️ *Persyaratan Kelas Tidak Terpenuhi!*\n\n{item} membutuhkan:\n📋 Kelas: {classes}\n\nKelas kamu: {playerClass}",
      levelRequired: "⚠️ *Persyaratan Level Tidak Terpenuhi!*\n\n{item} membutuhkan:\n⭐ Level: {level}\n\nLevel kamu: {playerLevel}",
      alreadyLearned: "⚠️ *Kamu sudah mempelajari {skill}!*\n\nKamu tidak bisa mempelajari skill yang sama dua kali.\nKetik *!myskills* untuk melihat skill yang sudah dipelajari.",
      healed: "🧪 *{item}*\n\nMemulihkan *{amount} HP*!\n\n❤️ HP: {current}/{max}",
      manaRestored: "💧 *{item}*\n\nMemulihkan *{amount} mana*!\n\n💧 Mana: {current}/{max}",
      fullRestore: "✨ *{item}*\n\n*HP dan Mana sepenuhnya dipulihkan!*\n\n❤️ HP: {hp}/{maxHp}\n💧 Mana: {mana}/{maxMana}",
      hpFull: "⚠️ *HP kamu sudah penuh!*\n\n❤️ HP: {current}/{max}",
      manaFull: "⚠️ *Mana kamu sudah penuh!*\n\n💧 Mana: {current}/{max}",
      teleported: "🌀 *{item}*\n\n*Teleportasi ke Desa Pemula!*\n\nKetik *!lokasi* untuk melihat posisi kamu.",
      alreadyAtLocation: "⚠️ *Kamu sudah berada di {location}!*",
      inventoryExpanded: "🎒 *{item}*\n\n*Inventori diperluas {amount} slot!*\n\n💡 Catatan: Perluasan inventori saat ini tidak terbatas.\nItem ini telah digunakan.",
    },
    
    // Pets
    pets: {
      title: "🐾 *Koleksi Pet Kamu*",
      noPets: "Kamu belum punya pet!\n\nGunakan *searching* di lokasi berbahaya untuk menemukan pet!",
      collection: "🐾 *Koleksi Pet Kamu* ({count})",
      equipped: "✅ ",
      moodSummary: "   Mood: {mood}",
      moodDefault: "Tenang",
      commands: "📖 *Perintah:*",
      viewDetails: "• *pets <nomor>* - Lihat detail pet",
      equipPet: "• *pets equip <nomor>* - Pasang pet",
      unequipPet: "• *pets unequip* - Lepas pet",
      patPet: "• *pat* - Elus pet yang dipasang 💕",
      levelUpPet: "• *petlevel <nomor> <item>* - Naikkan level pet",
      enhancePet: "• *petenhance <target> <material>* - Tingkatkan pet",
      details: "🐾 *Detail Pet*",
      yourPet: "📊 *Pet Kamu:*",
      level: "• Level: {level}/{maxLevel}",
      currentBonus: "• Bonus Saat Ini: +{bonus} {type}",
      maxBonus: "• Bonus Maks (Lv.20): +{max} {type}",
      xp: "• XP: {xp}/{next}",
      xpMax: "• XP: MAX LEVEL ⭐",
      mood: "• Mood: {mood}",
      obtained: "• Diperoleh: {date}",
      status: "• Status: {status}",
      statusEquipped: "✅ Dipasang",
      statusNotEquipped: "Tidak Dipasang",
      levelUpCommands: "🔮 *Naikkan Level:*",
      interaction: "💕 *Interaksi:*",
      patCommand: "• *pat* - Elus pet yang dipasang (jika pet ini dipasang)",
      levelUpUseItem: "• *petlevel {index} <item>* - Gunakan item",
      levelUpConsumePet: "• *petenhance {index} <pet#>* - Korbankan pet",
      passive: "✨ *Pasif:*",
      invalidNumber: "❌ Nomor pet tidak valid! Kamu punya {count} pet.\nGunakan *pets* untuk melihat koleksi.",
      petNotFound: "❌ Data pet tidak ditemukan!",
      alreadyEquipped: "✅ Pet ini sudah dipasang!",
      petEquipped: "✅ *Pet Dipasang!*\n\n{emoji} {name} sekarang jadi teman kamu!\n\n📊 *Bonus:* +{bonus} {type} (Level {level})",
      noPetEquipped: "❌ Kamu tidak punya pet yang dipasang!",
      petUnequipped: "✅ *Pet Dilepas!*\n\n{emoji} {name} kembali ke koleksi kamu.\n\nKamu tidak lagi menerima bonus stat mereka.",
      usage: "📖 *Perintah Pet:*\n\n• *pets* - Lihat semua pet kamu\n• *pets <nomor>* - Lihat detail pet\n• *pets equip <nomor>* - Pasang pet\n• *pets unequip* - Lepas pet\n• *pat* - Elus pet yang dipasang 💕\n\nContoh: *pets equip 1*",
    },
    
    // My Skills
    myskills: {
      title: "⚔️ *SKILL SAYA*",
      equippedSkills: "📋 *SKILL YANG DIPASANG*",
      slot: "*Slot {slot}:*",
      empty: "❌ Kosong",
      skillMeta: "   💧 {mana} mana | ⏱️ CD {cooldown} giliran",
      skillDescription: "   📖 {description}",
      learnedSkills: "📚 *SKILL YANG DIPELAJARI* ({count})",
      noSkills: "❌ *Belum ada skill yang dipelajari.*\n\n💡 *Tip:* Beli buku skill dari toko dan gunakan dengan *!item <nama_buku_skill>*",
      tip: "💡 *Tip:* Gunakan *!equipskill <nama_skill> <slot>* untuk memasang skill",
      commands: "*Perintah:*",
      equipSkillCmd: "• *!equipskill <nama> <slot>* - Pasang skill",
      unequipSkillCmd: "• *!unequipskill <slot>* - Lepas skill",
      shopCmd: "• *!shop* - Beli buku skill",
    },
    
    // Craft
    craft: {
      title: "🔨 *Resep yang Bisa Dibuat*",
      needRegister: "❌ Kamu harus daftar dulu! Gunakan *!register* untuk memulai petualangan.",
      noRecipes: "📜 *Menu Crafting*\n\n❌ Kamu belum menemukan resep apapun!\n\n💡 *Cara menemukan resep:*\n1. Kumpulkan bahan dengan berburu, menambang, memancing, dll.\n2. Gunakan *!study* untuk menemukan resep baru\n3. Kembali ke sini untuk membuat!\n\n✨ Semakin banyak bahan yang kamu punya, semakin banyak resep yang akan kamu temukan!",
      noMaterials: "📜 *Menu Crafting*\n\n❌ Kamu tidak punya cukup bahan untuk membuat apapun saat ini!\n\n📚 Kamu punya {count} resep yang sudah ditemukan.\n\n💡 *Yang harus dilakukan:*\n• Gunakan *!recipes* untuk melihat bahan yang dibutuhkan\n• Kumpulkan lebih banyak bahan dengan berburu, menambang, memancing, dll.\n• Gunakan *!study* untuk menemukan lebih banyak resep\n\n🎯 Terus kumpulkan dan kamu akan bisa membuat segera!",
      result: "• Hasil: {qty}x",
      materials: "• Bahan:",
      command: "• Perintah: !craft {id}",
      tip: "\n💡 *Tip:* Gunakan !craft <id_resep> [jumlah] untuk membuat item",
      recipeNotFound: "❌ Resep tidak ditemukan! Gunakan *!craft* untuk melihat resep yang tersedia.",
      recipeNotDiscovered: "❌ Kamu belum menemukan resep ini!\n\n💡 Gunakan *!study* di lokasi dengan toko untuk menemukan resep baru.",
      notEnoughMaterials: "❌ Kamu tidak punya cukup bahan!\n\n*Kurang:*\n{missing}",
      success: "✨ *Crafting Berhasil!*\n\n🔨 Kamu membuat: {item} x{qty}\n\n*Bahan yang Digunakan:*\n{materials}",
      fuseTip:
        "\n\n♻️ *Fusion universal* (bahan apa pun → item apa pun): `!craft fuse <item> [xjumlah] mat <id> <jumlah> ...`\n_Tanpa resep. Total nilai bahan harus cukup._",
      fuseUsage:
        "♻️ *Fusion universal*\n\n*Cara pakai*\n`!craft fuse <hasil> [xjumlah] mat <bahan> <jumlah> ...`\n\n• Kata *mat* memisahkan item tujuan vs bahan yang dihabiskan.\n• Setelah *mat*: pasangan `id_item` lalu `jumlah` (ulang).\n• Jumlah = *total* yang dikonsumsi untuk perintah ini.\n• Tiap item punya *nilai fusion* (dari harga jual/beli). Jumlah harus ≥ syarat.\n\n*Contoh*\n`!craft fuse health_potion mat honey 3 butterfly_wing 2`\n`!craft fuse iron_sword x2 mat oak_plank 8 iron_bar 6`",
      fuseBadMaterials:
        "❌ Bagian *mat* salah. Setelah `mat`, tulis pasangan: `id_item` lalu `jumlah` (jumlah token harus genap).",
      fuseBadTarget: "❌ Item tidak dikenal: `{slug}`. Pakai id item (mis. iron_sword).",
      fuseBadMaterialId: "❌ Bahan tidak dikenal: `{id}`.",
      fuseCannotUseTarget: "❌ Tidak boleh memakai item yang sama dengan hasil craft sebagai bahan.",
      fuseNotEnough: "❌ Stok di tas tidak cukup.\n{detail}",
      fuseLowValue:
        "❌ Nilai bahan terlalu kecil untuk hasil ini.\n• Butuh nilai fusion: *{need}*\n• Bahanmu: *{offered}*\nPakai item lebih langka, tambah jumlah, atau pilih target lebih murah.",
      fuseTooMany: "❌ Terlalu banyak bahan sekaligus (maks 999 total qty). Bagi jadi beberapa craft.",
      fuseSuccess:
        "✨ *Fusion selesai!*\n\n🔨 {item} x{qty}\n\n*Dipakai:*\n{materials}\n\n_(nilai {offered} / butuh {need})_",
    },
    
    // Dungeon
    dungeon: {
      title: "🏰 *Sistem Dungeon*",
      needRegister: "❌ Kamu harus daftar dulu! Gunakan *{prefix}register* untuk memulai petualangan.",
      dailyRuns: "📅 Run Harian: {left}/2 tersisa",
      currentLocation: "📍 Lokasi Saat Ini: {location}",
      locationForgottenCrypt: "🏚️ Forgotten Crypt (Mudah) - Lv.10+",
      locationVolcanicRift: "🌋 Volcanic Rift (Normal) - Lv.20+",
      locationFrozenAbyss: "❄️ Frozen Abyss (Sulit) - Lv.30+",
      available: "✅ *Dungeon Tersedia:*",
      features: "🎯 *Fitur Dungeon:*",
      feature1: "• 20 lantai untuk ditaklukkan",
      feature2: "• Mini-boss setiap 5 lantai",
      feature3: "• Boss akhir di lantai 20",
      feature4: "• Ukuran party: 1-5 pemain",
      feature5: "• Hadiah: Perlengkapan, item, emas",
      feature6: "• Heal 20% HP/Mana antar lantai",
      rules: "⚠️ *Aturan:*",
      rule1: "• Tidak ada hadiah jika kamu mati atau menyerah",
      rule2: "• Hanya dapat hadiah setelah membunuh boss akhir",
      rule3: "• Semua orang dapat loot yang sama",
      rule4: "• Jika kamu lari, kamu keluar dari party",
      commands: "💡 *Perintah:*",
      createParty: "• *party create* - Buat party",
      inviteParty: "• *party invite @user* - Undang pemain",
      startDungeon: "• *dungeon start* - Masuk dungeon (hanya leader)",
      noDungeon: "❌ *Tidak ada dungeon di sini!*\n\nPergi ke pintu masuk dungeon:\n• Forgotten Crypt Entrance (Mudah)\n• Volcanic Rift Gate (Normal)\n• Frozen Abyss Portal (Sulit)",
      noRunsLeft: "❌ Kamu sudah menggunakan semua run dungeon hari ini! Reset tengah malam.",
      notAtEntrance: "❌ Kamu harus berada di pintu masuk dungeon untuk memulai!\n\nPergi ke: Forgotten Crypt Entrance, Volcanic Rift Gate, atau Frozen Abyss Portal",
      needParty: "❌ Kamu butuh party untuk masuk dungeon!\n\nBuat dengan: *party create*\n\nKamu bisa masuk solo atau undang hingga 4 orang lain.",
      notLeader: "❌ Hanya leader party yang bisa memulai dungeon!",
      alreadyInDungeon: "❌ Party kamu sudah di dalam dungeon!",
      memberNoRuns: "❌ {name} tidak punya run dungeon tersisa hari ini!",
      unknownCommand: "❌ Perintah dungeon tidak dikenal!\n\n*Perintah tersedia:*\n• *{prefix}dungeon* - Tampilkan info dungeon\n• *{prefix}dungeon start* - Masuk dungeon (hanya leader)\n• *{prefix}dungeon info* - Tampilkan detail dungeon",
      movingToFloor: "🚪 *Naik ke Lantai {floor}...*",
      partyHealed: "💚 Party dipulihkan 20% HP/Mana",
      prepareForBattle: "⚔️ Bersiap untuk bertarung!",
      noEnemyFound: "❌ Error: Tidak ada musuh di lantai {floor}!",
      bossFloor: "⚠️ *LANTAI BOSS*",
      combatFloor: "⚔️ *Lantai Pertarungan*",
      partyHeader: "👥 *Party:*",
      playerTurn: "💡 *Giliran {name}!*",
      combatPrompt: "Ketik: attack / defend / skill [1/2/3] / item / run",
    },
    
    // Party
    party: {
      title: "👥 *INFO PARTY*",
      noParty: "❌ Kamu tidak dalam party!\n\n💡 *Buat party:* party create",
      leader: "👑 Leader: {name}",
      members: "👥 Anggota: ({count}/5)",
      inDungeon: "🏰 Status: Di dalam dungeon",
      notInDungeon: "✅ Status: Tersedia",
      commands: "💡 *Perintah:*",
      createCmd: "• *party create* - Buat party baru",
      inviteCmd: "• *party invite @user* - Undang pemain",
      acceptCmd: "• *party accept* - Terima undangan party",
      declineCmd: "• *party decline* - Tolak undangan party",
      leaveCmd: "• *party leave* - Keluar dari party",
      kickCmd: "• *party kick @user* - Keluarkan pemain (hanya leader)",
      created: "✅ *Party Dibuat!*\n\nKamu sekarang jadi leader party.\n\n💡 Undang pemain dengan: *party invite @user*",
      alreadyInParty: "❌ Kamu sudah dalam party! Keluar dulu dengan: *party leave*",
      inviteSent: "✅ *Undangan Dikirim!*\n\n{name} telah diundang ke party kamu.",
      notLeader: "❌ Hanya leader party yang bisa mengundang pemain!",
      targetInParty: "❌ Pemain itu sudah dalam party!",
      partyFull: "❌ Party penuh! (Maksimal 5 anggota)",
      alreadyInvited: "❌ Pemain itu sudah diundang!",
      cannotInviteInDungeon: "❌ Tidak bisa mengundang pemain saat berada di dungeon!",
      cannotInviteSelf: "❌ Kamu tidak bisa mengundang diri sendiri!",
      inviteReceived: "🎭 *Undangan Party!*\n\nKamu diundang untuk bergabung dengan party!\n\n👥 Ukuran party: {count}/5\n\n💡 *Perintah:*\n• *party accept* - Bergabung dengan party\n• *party decline* - Tolak undangan\n\n⏰ Undangan kadaluarsa dalam 2 menit",
      noInvite: "❌ Kamu tidak punya undangan party!",
      inviteExpired: "❌ Undangan party kamu sudah kadaluarsa!",
      joined: "✅ *Bergabung dengan Party!*\n\nKamu sekarang anggota party.",
      memberJoined: "✅ Pemain baru bergabung dengan party! ({count}/5 anggota)",
      declined: "✅ Kamu menolak undangan party.",
      left: "✅ Kamu keluar dari party.",
      disbanded: "❌ Leader party keluar. Party telah dibubarkan.",
      memberLeft: "⚠️ Seorang pemain keluar dari party. ({count}/5 anggota tersisa)",
      mentionToKick: "❌ Mohon mention user untuk dikeluarkan!\n\nContoh: *party kick @user*",
      cantKickSelf: "❌ Kamu tidak bisa mengeluarkan diri sendiri! Gunakan *party leave* sebagai gantinya.",
      notInYourParty: "❌ Pemain itu tidak dalam party kamu!",
      kicked: "✅ Pemain dikeluarkan dari party.",
      partyAlreadyInDungeon: "❌ Party itu sudah berada di dalam dungeon!",
      cannotLeaveInDungeon: "❌ Tidak bisa keluar party saat berada di dungeon! Gunakan *run* untuk kabur dari dungeon dulu.",
      cannotKickInDungeon: "❌ Tidak bisa mengeluarkan pemain saat berada di dungeon!",
      youWereKicked: "❌ Kamu telah dikeluarkan dari party.",
      memberKicked: "⚠️ Seorang pemain dikeluarkan dari party. ({count}/5 anggota tersisa)",
      mentionToInvite: "❌ Mohon mention user untuk diundang!\n\nContoh: *party invite @user*",
      dungeonStartCmd: "• *dungeon start* - Masuk dungeon (hanya leader)",
      unknownCommand: "❌ Perintah party tidak dikenal!\n\n*Perintah tersedia:*\n• *{prefix}party* - Tampilkan info party\n• *{prefix}party create* - Buat party baru\n• *{prefix}party invite @user* - Undang pemain\n• *{prefix}party accept* - Terima undangan party\n• *{prefix}party decline* - Tolak undangan party\n• *{prefix}party leave* - Keluar dari party\n• *{prefix}party kick @user* - Keluarkan pemain (hanya leader)",
    },
    
    // Bounty
    bounty: {
      title: "💀 *DAFTAR BURONAN*",
      noBounties: "Tidak ada bounty aktif.\n\n========================\n\n*Pasang bounty:*\n• bounty @player <jumlah>\n• bounty <nama> <jumlah>\n\n*Contoh:*\nbounty evarick 1000",
      activeBounties: "{count} pemain memiliki bounty aktif!",
      bountyAmount: "   💰 Bounty: {amount} emas",
      placedBy: "   👥 Dipasang oleh: {count} pemain",
      andMore: "... dan {count} lagi",
      claimHint: "💡 *Bunuh pemain yang dibounty di PVP untuk mengklaim bounty!*",
      usage: "⚠️ *Penggunaan tidak valid!*\n\n*Penggunaan:*\n• bounty @player <jumlah>\n• bounty <nama> <jumlah>\n\n*Contoh:*\nbounty evarick 1000",
      playerNotFound: "⚠️ *Pemain \"{name}\" tidak ditemukan!*\n\nPastikan namanya benar.",
      notRegistered: "⚠️ *Pemain itu belum terdaftar!*",
      cantBountySelf: "⚠️ *Kamu tidak bisa memasang bounty pada diri sendiri!*",
      invalidAmount: "⚠️ *Jumlah tidak valid!*\n\nBounty minimum adalah 100 emas.",
      notEnoughGold: "⚠️ *Emas tidak cukup!*\n\nKamu punya: {have} emas\nBiaya bounty: {need} emas",
      placed: "💀 *BOUNTY DIPASANG!*\n\nKamu memasang bounty {amount} emas pada *{target}*!\n\nTotal bounty: {total} emas\nEmas kamu: {gold}\n\n⚠️ Reputasi: {rep} (Tindakan jahat)\n\nSiapa saja yang membunuh *{target}* di PVP akan mengklaim bounty!",
      alert: "💀 *PERINGATAN BOUNTY!*\n\n*{placer}* memasang bounty {amount} emas pada kamu!\n\nTotal bounty di kepala kamu: {total} emas\n\n⚠️ *Kamu sekarang pemain buronan!*\nPemain lain bisa mengklaim bounty dengan mengalahkan kamu di PVP.\n\nKetik *bounty* untuk melihat daftar buronan.",
    },
    
    // Recipes
    recipes: {
      title: "📖 *Buku Resep*",
      empty: "❌ Buku resep kamu kosong!\n\n💡 *Cara menemukan resep:*\n1. Kumpulkan bahan (kalahkan musuh, menambang, menebang, mencari)\n2. Pergi ke lokasi dengan toko (🏘️ Desa Pemula, 🏪 Pos Perdagangan, dll.)\n3. Gunakan *!study* untuk menemukan resep baru\n\n✨ Semakin banyak bahan yang kamu punya, semakin banyak resep yang akan kamu temukan!",
      count: "📖 *Buku Resep* ({count} resep)",
      noCategoryFound: "❌ Tidak ada resep ditemukan di kategori: {category}\n\n*Kategori tersedia:* weapon, armor, consumable, tool, material, utility",
      result: "• Hasil: {qty}x",
      materials: "• Bahan:",
      craftCommand: "• Craft: !craft {id}",
      commands: "\n💡 *Perintah:*",
      craftCmd: "• !craft - Lihat resep yang bisa dibuat",
      craftItemCmd: "• !craft <id_resep> - Buat item",
      studyCmd: "• !study - Temukan resep baru",
      canCraft: "✅",
      cantCraft: "⏳",
    },
    
    // Gathering Commands
    fishing: {
      cantFish: "🚫 *Kamu tidak bisa memancing di sini!*\n\nPergi ke lokasi memancing terlebih dahulu.\nKetik *lokasi* untuk melihat posisi kamu.",
      noRod: "🎣 *Kamu tidak punya alat pancing yang berfungsi!*\n\nBeli di toko di Desa Pemula.\nKetik *travel starter_village* lalu *shop*.",
      alreadyFishing: "⚠️ *Kamu sudah sedang memancing!*\n\nKetik *reel* saat ikan menggigit.",
      casting: "🎣 *{name} melempar {rod}...*\n\nMenunggu gigitan... 🌊",
      fishBiting: "🐟 *Ikan menggigit!*\n\n",
      noFish: "⚠️ *Tidak ada ikan yang menggigit saat ini.*\n\nKetik *fish* untuk melempar pancingmu.",
      fishEscaped: "🐟 *Ikan kabur!*\n\n[🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦]\n\nKamu terlalu lambat. Ketik *fish* untuk mencoba lagi.",
      nothingCaught: "😔 *Tidak ada yang tertangkap.*\n\n",
      rodBroke: "💔 *{rod} kamu patah!*\nBeli atau buat yang baru.",
      perfectTiming: "🎯 *Waktu SEMPURNA!*",
      goodTiming: "✅ *Waktu bagus!*",
      okayTiming: "😐 *Waktu lumayan.*",
      badTiming: "😬 *Waktu buruk...*",
      meterMovingRight: "⬅️ Bergerak ke kanan...",
      meterPastCenter: "➡️ Lewat tengah!",
      meterCenter: "🎯 TENGAH — Reel SEKARANG!",
      rodLabel: "Pancing: {rod}",
      durabilityHeader: "🔧 Daya tahan:\n{bar}",
      rodDurabilityFooter: "\n\n🔧 Daya tahan pancing:\n{bar}",
      reelPrompt: "Ketik *reel* di momen yang tepat!",
      centerTip: "⏱️ Tengah = tangkapan terbaik!",
      timingLine: "Waktu: {timing}",
      fishAgain: "Ketik *fish* untuk coba lagi.",
      castAgain: "Ketik *fish* untuk melempar lagi.",
      sellValue: "💰 Harga jual: {price} emas",
      addedInventory: "Ditambahkan ke inventori 🎒 kamu!",
      catchLine: "{color} *{rarity}* — {name}",
    },
    
    mining: {
      cantMine: "🚫 *Kamu tidak bisa menambang di sini!*\n\nPergi ke lokasi pertambangan terlebih dahulu.\nKetik *lokasi* untuk melihat posisi kamu.",
      noPickaxe: "⛏️ *Kamu tidak punya beliung yang berfungsi!*\n\nBeli di toko di Desa Pemula atau buat yang baru.",
      alreadyMining: "⚠️ *Kamu sudah sedang menambang!*\n\nKetik *hit* untuk terus memukul.",
      miningInProgress: "⛏️ *Menambang sedang berlangsung!*\n\n",
      notMining: "⚠️ *Kamu tidak sedang menambang saat ini.*\n\nKetik *mine* untuk mulai.",
      noStamina: "😓 *Kehabisan stamina! Tunggu 30 detik untuk pulih.*",
      rockBroken: "💥 *Batu pecah!*\n\n",
      pickaxeBroke: "💔 *{pickaxe} kamu patah!*\n\nBatu masih utuh tapi kamu butuh beliung baru.\n\nBeli atau buat yang baru di toko.",
      noRocks: "😔 *Tidak ada batu ditemukan di sini. Coba lokasi lain.*",
      rockHpLine: "{emoji} HP batu:\n{bar}",
      staminaLine: "⚡ Stamina:\n{bar}",
      pickaxeLine: "🪛 Beliung: {name}",
      pickaxeDurabilityBlock: "🔧 Daya tahan:\n{bar}\n\n",
      hitPrompt: "Ketik *hit* untuk memukul dengan beliung!",
      mineAgain: "Ketik *mine* untuk menambang lagi.",
      oreDescLine: "📖 {desc}",
      pickaxeBrokeReward: "\n\n💔 *{pickaxe} kamu patah!*\nBeli atau buat yang baru.",
      pickaxeDurabilityReward: "\n\n🔧 Daya tahan beliung:\n{bar}",
    },
    
    chopping: {
      cantChop: "🚫 *Kamu tidak bisa menebang pohon di sini!*\n\nPergi ke lokasi hutan terlebih dahulu.\nKetik *lokasi* untuk melihat posisi kamu.",
      noAxe: "🪓 *Kamu tidak punya kapak yang berfungsi!*\n\nBeli di toko di Desa Pemula atau buat yang baru.",
      alreadyChopping: "⚠️ *Kamu sudah sedang menebang pohon!*\n\nKetik *swing* untuk mengayunkan kapakmu.",
      choppingTree: "🌲 *Menebang pohon!*\n\n",
      treeFell: "🪵 *TIMBER! Pohon tumbang!*",
      axeBroke: "💔 *{axe} kamu patah!*\n\nPohon masih berdiri tapi kamu butuh kapak baru.\n\nBeli atau buat yang baru di toko.",
      noTrees: "😔 *Tidak ada pohon ditemukan di sini. Coba lokasi lain.*",
      perfectHit: "🎯 *SEMPURNA!*",
      goodHit: "✅ *Pukulan bagus!*",
      okayHit: "😐 *Pukulan lumayan.*",
      missHit: "💨 *Meleset!*",
      notChopping: "⚠️ *Kamu sedang tidak menebang.*\n\nKetik *chop* untuk mulai.",
      panelTitle: "🌲 *Menebang pohon!*\n\n",
      progressLine: "{emoji} Progres:\n{counter}\n\n",
      sweetSpotLegend: "🎯 = Titik tepat | 🪓 = Kapakmu\n\n",
      axeLine: "🪓 Kapak: {name}\n",
      pickaxeDurabilityBlock: "🔧 Daya tahan:\n{bar}\n\n",
      swingPrompt: "Ketik *swing* untuk menebang!\n",
      swingHint: "Pukul dekat 🎯 untuk damage maksimal!",
      swingSuffix: "ayunan",
      treeFellSuccess: "🪵 *TIMBER! Pohonnya tumbang!*\n\n",
      finalSwingNote: "(ayunan terakhir)",
      chopAgain: "Ketik *chop* untuk mencari pohon lain.",
      axeBrokeReward: "\n\n💔 *{axe} kamu patah!*\nBeli atau buat yang baru.",
      axeDurabilityFooter: "\n\n🔧 Daya tahan kapak:\n{bar}",
    },
    
    foraging: {
      cantForage: "🚫 *Kamu tidak bisa mencari di sini!*\n\nPergi ke lokasi hutan atau rawa.\nKetik *lokasi* untuk melihat posisi kamu.",
      alreadyForaging: "⚠️ *Kamu sudah sedang mencari!*\n\nKetik pola yang kamu lihat untuk melanjutkan.",
      searching: "🍃 *Mencari di area...*",
      spotSomething: "Kamu menemukan sesuatu! *Hafalkan pola ini:*",
      fading: "Cepat! Memudar dalam 4 detik...",
      whatDidYouSee: "🍃 *Apa yang kamu lihat?*",
      typePattern: "Ketik pola secara berurutan!\nContoh: *leaf shroom flower*",
      tooSlow: "⏰ *Terlalu lambat! Tanaman menghilang.*",
      patternWas: "Polanya adalah:",
      perfect: "🎯 *SEMPURNA!* Semua 3 benar!",
      close: "❌ *Hampir!* 2/3 benar.",
      notEnough: "❌ *Tidak cukup!* 1/3 benar.",
      wrong: "❌ *Salah!* 0/3 benar.",
      nothingFound: "😔 *Tidak ada yang ditemukan!*",
      mustGetAll: "💡 *Kamu harus benar semua 3 untuk menemukan herba!*",
      yourAnswer: "Jawabanmu:",
      patternMasked: "[ ❓ ]  [ ❓ ]  [ ❓ ]\n\n",
      typePatternAgain: "Ketik pola secara berurutan!\nContoh: *leaf shroom flower*",
      secondsToAnswer: "⏱️ Kamu punya 15 detik!",
      tryForageAgain: "Ketik *!forage* untuk coba lagi.",
      scorePerfectNoLoot: "🎯 *SEMPURNA!* Semua 3 benar!",
      scorePerfectLoot: "🎯 *SEMPURNA!* 3/3 benar!",
      patternWasEmojis: "Polanya: {emojis}\n",
      yourAnswerLine: "Jawabanmu: *{answer}*\n\n",
      forageAgain: "Ketik *forage* untuk mencari lagi.",
      memorizeIntro: "{searching}{spot}\n\n{display}\n\n{fading}\n\n{hint}",
    },
    
    searching: {
      cantSearch: "🚫 *Kamu tidak bisa mencari di sini!*\n\nLokasi ini terlalu aman. Pergi ke area berbahaya di mana kamu bisa berburu.\nKetik *lokasi* untuk melihat posisi kamu.",
      cantSearchHunt:
        "🚫 *Kamu tidak bisa mencari di sini!*\n\nLokasi ini terlalu aman. Pergi ke area berbahaya di mana kamu bisa berburu.\nKetik *lokasi* untuk melihat posisi kamu.",
      cooldown: "⏰ *Cooldown!*\n\nKamu perlu istirahat sebelum mencari lagi.\nWaktu tersisa: {seconds} detik",
      cooldownSecs:
        "⏰ *Cooldown!*\n\nKamu perlu istirahat sebelum mencari lagi.\nSisa waktu: {seconds} detik",
      searching: "🔍 Mencari di area...",
      foundGold: "💰 *Menemukan Emas!*\n\nKamu menemukan {gold} emas saat mencari!\n\n💰 Total Emas: {total}",
      foundDrop: "🎁 *Menemukan Drop Monster!*\n\nKamu menemukan jejak {enemy}!\n\n📦 Didapat: {item} x{qty}\n\nKetik *tas* untuk cek inventori!",
      storyEvent: "📖 *Event Cerita Terpicu!*\n\n{emoji} Sesuatu yang menarik terjadi di {location}...\n\n✨ (Event cerita akan segera diimplementasikan!)\n\nUntuk saat ini, kamu menemukan 10 emas!\n💰 Total Emas: {total}",
      nothing: "🍃 *Tidak ada di sini...*\n\nKamu tidak menemukan apa-apa selain daun dan debu.",
      zonk: "🕸️ *Zonk!*\n\nHanya sarang laba-laba dan kekecewaan.",
      empty: "🪨 *Kosong...*\n\nHanya batu dan kerikil.",
      wind: "💨 *Tidak ada!*\n\nAngin mengejek usahamu.",
      crickets: "🦗 *Jangkrik...*\n\nBahkan jangkrik pun tidak ada. Hanya keheningan.",
      petAppears: "✨ *{emoji} {name} liar muncul!*",
      tamingChallenge: "🎯 *TANTANGAN MENJINAKKAN!*\nHafalkan dan ulangi urutan ini:",
      tamingAttempts: "Kamu punya *3 percobaan* dan *15 detik* per percobaan!",
      tamingReply: "Balas dengan urutan emoji yang tepat untuk menjinakkannya!",
      tamingTimeout: "⏰ *Waktu habis!*\n\n{emoji} {name} kabur...\n\nCoba cari lagi untuk menemukan pet lain!",
      tamingSuccess: "🎉 *BERHASIL MENJINAKKAN!*\n\n{emoji} Kamu berhasil menjinakkan {name}!\n\n✅ Ditambahkan ke koleksi pet kamu!\nKetik *pets* untuk melihat pet kamu!\nKetik *pets equip <nomor>* untuk memasangnya!",
      tamingFailed: "❌ *GAGAL MENJINAKKAN!*\n\n{emoji} {name} kabur...\n\nCoba cari lagi untuk menemukan pet lain!",
      wrongSequence: "❌ *Urutan salah!*\n\nPercobaan tersisa: {attempts}\n\nUrutan yang benar adalah:\n{sequence}\n\nCoba lagi! Kamu punya 15 detik!",
      anim1: "🔍 Mencari di area...",
      anim2: "🔍 Memeriksa sekeliling dengan hati-hati...",
      anim3: "🔍 Menginvestigasi lingkungan...",
      anim4: "🔍 Memeriksa setiap sudut...",
      anim5: "🔍 Hampir menemukan sesuatu...",
      foundGoldAlt:
        "💰 *Menemukan emas!*\n\nKamu menemukan {gold} emas saat mencari!\n\n💰 Total emas: {total}",
      storyInLocation:
        "📖 *Event Cerita Terpicu!*\n\n{emoji} Sesuatu yang menarik terjadi di {location}...\n\n✨ (Event cerita akan segera diimplementasikan!)\n\nUntuk sekarang, kamu menemukan 10 emas!\n💰 Total emas: {total}",
      foundMonsterDrop:
        "🎁 *Drop monster ditemukan!*\n\nKamu menemukan jejak {enemy}!\n\n📦 Didapat: {item} x{qty}\n\nKetik *bag* untuk cek inventori!",
      petTamingHeader:
        "✨ *{emoji} {name} liar muncul!*\n{rarityLine}\n\n🎯 *TANTANGAN MENJINAKKAN!*\nHafalkan dan ulangi urutan ini:\n\n{sequence}\n\nKamu punya *3 percobaan* dan *15 detik* per percobaan!\nBalas dengan urutan emoji yang tepat untuk menjinakkannya!\n\nEmoji tersedia: {emojis}",
      petTamingRarity: "{emoji} Kelangkaan: {name}",
      tamingSuccessAlt:
        "🎉 *BERHASIL MENJINAKKAN!*\n\n{emoji} Kamu berhasil menjinakkan {name}!\n\n{info}\n\n✅ Ditambahkan ke koleksi pet kamu!\nKetik *pets* untuk melihat pet kamu!\nKetik *pets equip <nomor>* untuk memasangnya!",
    },

    pat: {
      noPetEquipped: "❌ *Belum ada pet dipasang!*\n\nPasang dulu dengan *pets equip <nomor>*",
      petDataMissing: "❌ Data pet tidak ditemukan!",
      frame1: "{emoji} *{name}*\n\n✋ Mengulurkan tangan...",
      frame2: "{emoji} *{name}*\n\n✋ Tepuk...",
      frame3: "{emoji} *{name}*\n\n✋ Tepuk tepuk...",
      frame4: "{emoji} *{name}*\n\n✋ Tepuk tepuk tepuk...",
      frame5: "{emoji} *{name}*\n\n💕 {name} terlihat senang!",
      fbNoEdit: "{emoji} *Tepuk tepuk!*\n\n{name} terlihat sangat senang!\n\n{flavor}",
      finale1:
        "{emoji} *{name}*\n\n💕 {name} menggosok tangmu dengan mesra!\n\n✨ Suasana hati: Senang",
      finale2:
        "{emoji} *{name}*\n\n💕 {name} mendengkur puas!\n\n✨ Ikatan kalian semakin kuat!",
      finale3:
        "{emoji} *{name}*\n\n💕 {name} menggelengkan ekor dengan gembira!\n\n💖 {name} menyayangimu!",
      finale4:
        "{emoji} *{name}*\n\n💕 {name} menatapmu dengan penuh kasih!\n\n✨ {flavor}",
      finale5:
        "{emoji} *{name}*\n\n💕 {name} mengeluarkan suara gembira!\n\n🌟 Kamu merasa lebih dekat dengan {name}!",
      finale6:
        "{emoji} *{name}*\n\n💕 {name} menyandar pada sentuhanmu!\n\n💖 {name} percaya padamu sepenuhnya!",
    },

    petlevelCmd: {
      noPets: "🐾 Kamu belum punya pet!",
      invalidPetNum:
        "❌ Nomor pet tidak valid! Kamu punya {count} pet.\nPakai *pets* untuk melihat koleksimu.",
      petMissingMeta: "❌ Data pet tidak ditemukan!",
      alreadyMaxPet: "⭐ *{name} sudah level maksimal!*\n\nLevel {max} adalah batas tertinggi.",
      invalidPetItem:
        "❌ *Item pet tidak valid!*\n\nItem yang valid: pet_treat_basic, pet_treat_premium, pet_elixir, pet_bond_crystal",
      missingItemInv: "❌ Kamu tidak punya *{item}* di inventori!",
      itemUsedHeader: "{item} dipakai untuk {emoji} *{petName}*!\n\n",
      xpGainLine: "✨ *+{xp} XP*\n\n",
      levelUpLine: "🎉 *LEVEL UP!* {from} → {to}\n",
      multiLevelLine: "⚡ *Naik {n} level sekaligus!*\n",
      newStatsHeader: "📊 *Stat baru:*\n",
      statBonusLine: "+{bonus} {type}\n\n",
      progressLine: "📈 Progres: {xp}/{need} XP menuju level {next}",
      maxReached: "⭐ *LEVEL MAKSIMUM!*",
      needTwoPetsEnhance:
        "🐾 Kamu perlu minimal 2 pet untuk enhance!\n\nTangkap lebih banyak pet pakai perintah *searching*.",
      invalidTargetNum: "❌ Nomor pet target tidak valid! Kamu punya {count} pet.",
      invalidMaterialNum: "❌ Nomor pet bahan tidak valid! Kamu punya {count} pet.",
      enhanceSelf: "❌ Tidak bisa enhance pet dengan dirinya sendiri!",
      equippedTarget:
        "⚠️ *{name} sedang dipasang!*\n\nLepas dulu dengan *pets unequip*.",
      equippedMaterial:
        "⚠️ *{name} sedang dipasang!*\n\nLepas dulu dengan *pets unequip*.",
      targetAlreadyMaxEnhance:
        "⭐ *{name} sudah level maksimal!*\n\nTidak bisa di-enhance lagi.",
      enhanceTitle: "🔮 *Enhance Pet*\n\n",
      consumedLine: "{emoji} {name} {rarityEmoji} dikonsumsi!\n",
      xpGainEnhanceLine: "✨ *+{xp} XP*{bonus}\n\n",
      sameRarityBonus: " (bonus kelangkaan sama!)",
      levelUpEnhanceSection: "\n📊 *{emoji} {name} Stat baru:*\n",
      statsOneLine: "📊 *{emoji} {name}*\nLevel {level} | +{bonus} {type}\n\n",
      petlevelUsage:
        `📖 *Naik Level Pet*\n\n` +
        `Gunakan item untuk menaikkan level pet!\n\n` +
        `Cara pakai: *petlevel <nomor_pet> <item>*\n` +
        `Contoh: *petlevel 1 pet_treat_basic*\n\n` +
        `Item yang tersedia:\n` +
        `• pet_treat_basic (50 XP)\n` +
        `• pet_treat_premium (150 XP)\n` +
        `• pet_elixir (500 XP)\n` +
        `• pet_bond_crystal (1000 XP)`,
      petenhanceUsage:
        `📖 *Enhance Pet*\n\n` +
        `Konsumsikan satu pet untuk memperkuat pet lain!\n\n` +
        `Cara pakai: *petenhance <target#> <bahan#>*\n` +
        `Contoh: *petenhance 1 3*\n\n` +
        `⚠️ *Peringatan:* Pet bahan akan hilang!\n\n` +
        `XP yang didapat:\n` +
        `• C: 50 XP (75 XP kelangkaan sama)\n` +
        `• U: 150 XP (225 XP kelangkaan sama)\n` +
        `• R: 400 XP (600 XP kelangkaan sama)\n` +
        `• SR: 1000 XP (1500 XP kelangkaan sama)\n` +
        `• SSR: 3000 XP (4500 XP kelangkaan sama)`,
    },

    gold: {
      notRegistered: "⚠️ *Kamu belum terdaftar!*\n\nKetik *!register <nama kamu>* untuk memulai petualangan.",
      title: "💰 *Emas {name}*",
      balance: "💵 Saldo: *{gold}* emas",
      tip: "💡 *Tip:* Gunakan *!shop* untuk membelanjakan emasmu!",
    },

    give: {
      notRegistered: "⚠️ *Kamu belum terdaftar!*\n\nKetik *register <nama kamu>* untuk memulai.",
      usageTitle: "📦 *PERINTAH GIVE*",
      usageLines: "*Penggunaan:*\n• give <pemain> <nama_item> <jumlah>\n• give <pemain> gold <jumlah>\n• give <pemain> pet <nama_pet>",
      examples: "*Contoh:*\n• give evarick health_potion 5\n• give evarick gold 100\n• give evarick pet wolf",
      playerNotFound: "⚠️ *Pemain \"{name}\" tidak ditemukan!*\n\nPastikan namanya benar.",
      targetNotRegistered: "⚠️ *Pemain itu belum terdaftar!*",
      cantGiveSelf: "⚠️ *Kamu tidak bisa memberi item ke diri sendiri!*",
      invalidAmount: "⚠️ *Jumlah tidak valid!*\n\nMasukkan angka positif.",
      notEnoughGold: "⚠️ *Emas tidak cukup!*\n\nKamu punya: {have} emas\nIngin memberi: {need} emas",
      goldSent: "💰 *EMAS TERKIRIM!*\n\nKamu memberi *{amount} emas* ke *{target}*!\n\nEmas kamu: {remaining}",
      goldReceived: "💰 *EMAS DITERIMA!*\n\n*{sender}* memberimu *{amount} emas*!\n\nEmas kamu: {remaining}",
      needPetName: "⚠️ *Mohon sebutkan nama pet!*\n\nContoh: give evarick pet wolf",
      noPetNamed: "⚠️ *Kamu tidak punya pet bernama \"{name}\"!*\n\nPet kamu: {list}",
      petsNone: "Tidak ada",
      cantGiveEquippedPet: "⚠️ *Tidak bisa memberi pet yang sedang dipasang!*\n\nLepas dulu *{name}* sebelum diberikan.",
      petSent: "🐾 *PET TERKIRIM!*\n\nKamu memberi *{name}* ({type}) ke *{target}*!\n\nLevel: {level}\nSisa pet: {count}",
      petReceived: "🐾 *PET DITERIMA!*\n\n*{sender}* memberimu pet!\n\n*{name}* ({type})\nLevel: {level}\nHP: {hp}/{maxHp}\n\nTotal pet: {count}",
      itemNotFound: "⚠️ *Item \"{item}\" tidak ditemukan!*\n\nPastikan nama item benar.",
      notEnoughItems: "⚠️ *Item tidak cukup!*\n\nKamu punya: {have} {item}\nIngin memberi: {need}",
      cantGiveEquippedWeapon: "⚠️ *Tidak bisa memberi senjata yang dipasang!*\n\nLepas dulu *{item}*.",
      cantGiveEquippedArmor: "⚠️ *Tidak bisa memberi armor yang dipasang!*\n\nLepas dulu *{item}*.",
      removeFailed: "⚠️ *Gagal menghapus item dari inventori!*",
      itemSent: "📦 *ITEM TERKIRIM!*\n\nKamu memberi *{qty}x {item}* ke *{target}*!\n\nSisa: {remaining}",
      itemReceived: "📦 *ITEM DITERIMA!*\n\n*{sender}* memberimu *{qty}x {item}*!\n\n{desc}",
    },

    trade: {
      notRegistered: "⚠️ *Kamu belum terdaftar!*\n\nKetik *register <nama kamu>* untuk memulai.",
      usage: "🤝 *PERINTAH TRADE*\n\n*Penggunaan:*\ntrade <pemain> <tawaran> for <permintaan>\n\n*Contoh:*\n• trade evarick iron_sword 1 for gold 500\n• trade evarick gold 1000 for dragon_egg 1\n• trade evarick pet wolf for pet dragon\n• trade evarick health_potion 10 for mana_potion 10",
      playerNotFound: "⚠️ *Pemain \"{name}\" tidak ditemukan!*\n\nPastikan namanya benar.",
      partnerNotRegistered: "⚠️ *Pemain itu belum terdaftar!*",
      cantTradeSelf: "⚠️ *Kamu tidak bisa trade dengan diri sendiri!*",
      invalidOffer: "⚠️ *Format tawaran tidak valid!*\n\nPeriksa lagi perintahmu.",
      invalidRequest: "⚠️ *Format permintaan tidak valid!*\n\nPeriksa lagi perintahmu.",
      notEnoughGoldOffer: "⚠️ *Emas tidak cukup!*\n\nKamu punya: {have} emas\nMenawarkan: {need} emas",
      noPetOffer: "⚠️ *Kamu tidak punya pet bernama \"{name}\"!*\n\nPet kamu: {list}",
      cantTradeEquippedPet: "⚠️ *Tidak bisa trade pet yang sedang dipasang!*\n\nLepas dulu.",
      notEnoughItemsOffer: "⚠️ *Item tidak cukup!*\n\nKamu punya: {have} {item}\nMenawarkan: {need}",
      cantTradeEquippedItem: "⚠️ *Tidak bisa trade item yang dipasang!*\n\nLepas dulu.",
      partnerNotEnoughGold: "⚠️ *{name} tidak punya cukup emas!*\n\nMereka punya: {have} emas\nKamu minta: {need} emas",
      partnerNoPet: "⚠️ *{name} tidak punya pet bernama \"{pet}\"!*",
      partnerPetEquipped: "⚠️ *Pet {name} sedang dipasang!*\n\nMereka harus melepasnya dulu.",
      partnerNotEnoughItems: "⚠️ *{name} tidak punya cukup item!*\n\nMereka punya: {have} {item}\nKamu minta: {need}",
      partnerItemEquipped: "⚠️ *Item {name} sedang dipasang!*\n\nMereka harus melepasnya dulu.",
      expired: "⏱️ *Trade Kedaluwarsa*\n\n*{name}* tidak merespons tawaran trade.",
      offerSent: "🤝 *TAWRAN TRADE TERKIRIM!*\n\nKamu menawarkan: *{offer}*\nMeminta: *{want}*\n\nMenunggu *{partner}*...\n⏱️ Kedaluwarsa dalam 60 detik.",
      offerReceived: "🤝 *TAWRAN TRADE!*\n\n*{trader}* ingin trade dengan *{partner}*!\n\n📤 Mereka tawarkan: *{offer}*\n📥 Mereka mau: *{want}*\n\n@{mention}, ketik:\n• *accepttrade* untuk terima\n• *declinetrade* untuk tolak\n\n⏱️ Kamu punya 60 detik.",
      groupSuccess: "🤝 *TRADE BERHASIL!*\n\n*{a}* ↔️ *{b}*\n\n{a} memberi: {giveA}\n{b} memberi: {giveB}",
    },

    acceptTrade: {
      notRegistered: "⚠️ *Kamu belum terdaftar!*\n\nKetik *register <nama kamu>* untuk memulai.",
      noTrade: "⚠️ *Tidak ada tawaran trade!*",
      traderGone: "⚠️ *Trader tidak lagi tersedia.*",
      failGoldTrader: "⚠️ *Trade gagal!*\n\n{name} tidak lagi punya cukup emas.",
      failPetTrader: "⚠️ *Trade gagal!*\n\n{name} tidak lagi punya pet \"{pet}\".",
      failPetEquippedTrader: "⚠️ *Trade gagal!*\n\nPet {name} sekarang dipasang.",
      failItemTrader: "⚠️ *Trade gagal!*\n\n{name} tidak lagi punya cukup {item}.",
      failEquippedTrader: "⚠️ *Trade gagal!*\n\nItem {name} sekarang dipasang.",
      failGoldYou: "⚠️ *Trade gagal!*\n\nKamu tidak lagi punya cukup emas.",
      failPetYou: "⚠️ *Trade gagal!*\n\nKamu tidak lagi punya pet \"{pet}\".",
      failPetEquippedYou: "⚠️ *Trade gagal!*\n\nPet kamu sedang dipasang. Lepas dulu.",
      failItemYou: "⚠️ *Trade gagal!*\n\nKamu tidak lagi punya cukup {item}.",
      failEquippedYou: "⚠️ *Trade gagal!*\n\nItem kamu sedang dipasang. Lepas dulu.",
      completedYou: "✅ *TRADE SELESAI!*\n\nKamu trade dengan *{name}*!\n\n📤 Kamu beri: *{gave}*\n📥 Kamu terima: *{got}*",
      completedTrader: "✅ *TRADE SELESAI!*\n\n*{partner}* menerima trade-mu!\n\n📤 Kamu beri: *{gave}*\n📥 Kamu terima: *{got}*",
      groupAnnounce: "🤝 *TRADE BERHASIL!*\n\n*{a}* ↔️ *{b}*\n\n{a} memberi: {giveA}\n{b} memberi: {giveB}",
    },

    declineTrade: {
      noTrade: "⚠️ *Tidak ada tawaran trade!*",
      declinedYou: "❌ *TRADE DITOLAK*\n\nKamu menolak tawaran dari *{name}*.",
      declinedTrader: "❌ *TRADE DITOLAK*\n\n*{partner}* menolak tawaran trade-mu.\n\n📤 Tawaranmu: {offer}\n📥 Permintaanmu: {want}",
    },

    pvpChallenge: {
      notRegistered: "⚠️ *Kamu belum terdaftar!*\n\nKetik *register <nama kamu>* untuk memulai.",
      noChallenge: "⚠️ *Tidak ada tantangan menunggu!*",
      challengerGone: "⚠️ *Penantang tidak lagi tersedia.*",
      challengerDefeated: "⚠️ *{name} kalah dan tidak bisa bertarung!*",
      youDefeated: "⚠️ *Kamu kalah!*\n\nPulihkan HP dulu sebelum terima tantangan.",
      youInCombat: "⚠️ *Kamu sedang bertarung!*",
      challengerInCombat: "⚠️ *{name} sedang bertarung!*",
      acceptedYou: "⚔️ *TANTANGAN DITERIMA!*\n\nKamu menerima tantangan *{name}*!\n\n💥 *PVP DIMULAI!*\n\n📱 Cek DM dengan bot untuk pertarungan!",
      acceptedChallenger: "⚔️ *TANTANGAN DITERIMA!*\n\n*{name}* menerima tantanganmu!\n\n💥 *PVP DIMULAI!*\n\n📱 Cek DM dengan bot untuk pertarungan!",
      declinedYou: "🚫 *Tantangan Ditolak*\n\nKamu menolak tantangan dari *{name}*.",
      declinedChallenger: "🚫 *Tantangan Ditolak*\n\n*{name}* menolak tantangan PVP-mu.",
    },

    challengeCmd: {
      alreadyInCombatFull: "⚔️ *Kamu sedang dalam pertarungan!*\n\nSelesaikan dulu duelmu.",
      needTarget:
        "⚠️ *Sebutkan pemain yang ingin ditantang!*\n\nCara pakai:\n• *challenge @pemain* (mention)\n• *challenge NamaPemain*",
      targetNotRegistered: "⚠️ *Pemain itu belum terdaftar!*",
      cantChallengeSelf: "⚠️ *Kamu tidak bisa menantang diri sendiri!*",
      targetInCombat: "⚠️ *{name} sedang bertarung!*\n\nTunggu mereka selesai.",
      challengerDefeated:
        "⚠️ *Kamu dalam kondisi kalah!*\n\nPulihkan HP dulu sebelum menantang.\nKunjungi toko atau pakai item penyembuh.",
      targetDefeated: "⚠️ *{name} dalam kondisi kalah!*\n\nMereka harus pulih sebelum bisa menerima tantangan.",
      ambushChallenger:
        "⚔️ *SERANGAN MENDADAK!*\n\nKamu dan *{target}* di lokasi yang sama!\n*{self}* melancarkan serangan kejutan!\n\n💥 *PVP DIMULAI!*\n\n📱 Cek DM dengan bot untuk pertarungan!",
      ambushTarget:
        "⚔️ *DISERANG MENDADAK!*\n\n*{challenger}* menyergapmu!\nKalian di lokasi yang sama!\n\n💥 *PVP DIMULAI!*\n\nCek pesanmu untuk status pertarungan!",
      protStarter: "🏘️ *Desa Pemula adalah zona aman*\nTidak ada serangan mendadak di sini.",
      protCamping: "🏕️ *Lawan sedang berkemah/istirahat*\nMereka terlindungi dari serangan mendadak.",
      challengeExpired: "⏱️ *Tantangan kedaluwarsa*\n\n*{target}* tidak menjawab tantanganmu.",
      challengeSentProtected:
        "⚔️ *Tantangan PVP terkirim!*\n\nKamu menantang *{target}*!\n\n{reason}\nMenunggu jawaban mereka...\n\n⏱️ Tantangan berlaku 60 detik.",
      challengeSentRemote:
        "⚔️ *Tantangan PVP terkirim!*\n\nKamu menantang *{target}*!\n\nMenunggu jawaban mereka...\n⏱️ Tantangan berlaku 60 detik.",
      dmInvite:
        "⚔️ *TANTANGAN PVP!*\n\n*{challenger}* menantangmu!\n\nKetik:\n• *accept* untuk bertarung\n• *decline* untuk tolak\n\n⏱️ Kamu punya 60 detik untuk menjawab.",
      dmInviteProtected:
        "⚔️ *TANTANGAN PVP!*\n\n*{challenger}* menantangmu!\n\n{reason}\n\nKetik:\n• *accept* untuk bertarung\n• *decline* untuk tolak\n\n⏱️ Kamu punya 60 detik untuk menjawab.",
    },

    leaderboardCmd: {
      noPlayers: "❌ Belum ada pemain terdaftar!",
      menuTitle: "🏆 *MENU LEADERBOARD*",
      menuChoose: "Pilih kategori:",
      lbLevelLine: "💪 *!lb level* - Pemain level tertinggi",
      lbGoldLine: "💰 *!lb gold* - Pemain terkaya",
      lbPowerLine: "⚔️ *!lb power* - Kekuat tempur tertinggi",
      lbPvpLine: "🏅 *!lb pvp* - Juara PVP",
      lbMonstersLine: "🎯 *!lb monsters* - Pemburu monster",
      menuAliases: "*Alias:* !leaderboard, !lb, !top, !rank",
      sep: "━━━━━━━━━━━━━━━━━━━━",
      catLevel: "💪 *LEADERBOARD LEVEL*",
      catGold: "💰 *LEADERBOARD KAYA*",
      catPower: "⚔️ *LEADERBOARD POWER TEMPUR*",
      catPvp: "🏅 *LEADERBOARD PVP*",
      catMonsters: "🎯 *LEADERBOARD PEMBURU MONSTER*",
      rankLine: "{medal} *#{rank}* {name}{marker} - Lv.{level}",
      yourRankLine: "📍 *Peringkatmu: #{rank}* - Lv.{level}",
      totalPlayersLine: "Total pemain: {count}",
    },

    reputationCmd: {
      playerNotFound: "⚠️ *Pemain \"{name}\" tidak ditemukan!*",
      targetNotRegistered: "⚠️ *Pemain belum terdaftar!*",
      header: "*STATUS REPUTASI*",
      alignmentPrefix: "{color} Jalan moral: *{title}*",
      points: "📊 Poin: {reputation}/100",
      spectrum: "👹 Jahat ←→ Baik 😇",
      currentEffectsTitle: "*EFEK SAAT INI:*",
      goodBenefitsTitle: "✨ *Keuntungan reputasi baik:*",
      goodBenefitsBullets:
        "• NPC lebih percaya\n• Cerita dengan hasil lebih baik\n• Pedagang kasih diskon\n• Penjaga abaikan pelanggaran kecil",
      evilEffectsTitle: "🔥 *Efek reputasi jahat:*",
      evilBullets:
        "• NPC takut padamu\n• Penjaga bermusuhan\n• Pedagang lebih mahal\n• Pemburu hadiah bisa muncul",
      neutralTitle: "⚪ *Netral:*",
      neutralBullets: "• Tanpa efek khusus\n• Tindakanmu membentuk jalanmu",
      tiersTitle: "*TINGKAT REPUTASI:*",
      tierSaint: "😇 Suci: 80–100",
      tierHero: "🦸 Pahlawan: 50–79",
      tierGood: "😊 Baik: 20–49",
      tierNeutralTier: "😐 Netral: -20–19",
      tierBad: "😠 Buruk: -49 sampai -21",
      tierVillain: "😈 Penjahat: -79 sampai -50",
      tierDemon: "👹 Iblis: -100 sampai -80",
      howToTitle: "*CARA MENGUBAH REPUTASI:*",
      gainTitle: "📈 *Menambah (baik):*",
      gainBullets:
        "• Tolong traveler terluka\n• Bantu anak hilang\n• Beri kepada yang membutuhkan\n• Pilih yang terhormat",
      loseTitle: "📉 *Menurunkan (jahat):*",
      loseBullets:
        "• Merampok yang lemah\n• Abaikan yang membutuhkan\n• Serang NPC tak bersalah\n• Pilih egois",
      tip: "💡 *Tips:* Pilihan di event cerita memengaruhi reputasimu!",
    },

    combatStatus: {
      notInCombat: "⚠️ *Kamu tidak sedang bertempur sekarang.*\n\nKetik *hunt* untuk mulai duel!",
      title: "⚔️ *STATUS PERTEMPURAN* — Giliran {round}\n\n========================\n",
      shieldLine: "\n🛡️ Shield: {cur}/{max}",
      stunned: " 💫STUN({rounds})",
      silenced: " 🤐SILENCE",
      effectsLine: "\n✨ Efek: {list}",
      playerStatusLine: "\n⚠️ Status:{stunned}{silent}",
      equipLine: "\n⚔️ Perlengkapan: {bonuses}",
      passivesLine: "\n💫 Pasif: {names}",
      playerHeader: "👤 *{name}*\n",
      hpLineP: "❤️ HP: {bar} {hp}/{maxHp} ({pct}%){shield}",
      manaLineP: "\n💧 Mana: {mana}/{maxMana}{equipTxt}{passivesTxt}{pStatusComb}{pfx}",
      skillsHeader: "\n\n🎯 *Skill kamu:*\n",
      skillEmptyRow: "\n[{i}] —",
      skillRowFmt: "\n[{i}] {name}{cdTxt}{manaStr}",
      dividerMid: "\n\n========================\n",
      enemyHeader: "{emoji} *{name}*{bossTag}\n",
      hpLineE: "❤️ HP: {bar} {hp}/{maxHp} ({pct}%){shield}{eStatusComb}{efx}\n\n",
      footer:
        "\n\n========================\n💡 *Perintah:*\n⚔️ attack  🛡️ defend  💥 skill [1/2/3]\n🎒 item [nama]  🏃 run  📊 status",
      cooldownWait: ` ⏳{n}`,
      cooldownReady: ` ✅`,
      manaCostTpl: ` ({cost}💧)`,
      bossTag: ` 👑BOSS`,
    },

    studyCmd: {
      notRegistered:
        "⚠️ *Kamu belum terdaftar!*\n\nKetik *!register <nama kamu>* untuk memulai.",
      recipesDiscoveredTitle: "✨ *RESEP BARU DITEMUKAN!*\n\n",
      recipesDiscoveredCount: "📚 Kamu menemukan {n} resep baru!\n\n",
      categoryHeader: "*{category}*\n",
      recipeLineOk: "✅ {name}\n",
      nextStepsTitle: "💡 *Langkah lanjutan:*",
      nextStepsBullets:
        "\n• *!recipes* untuk melihat semua resep\n• *!craft* untuk lihat apa yang bisa dibuat\n• *!craft <recipe_id>* untuk crafting\n\n🎉 Kumpulkan material lagi untuk resep baru!",
      studyMenuTitle: "📚 *Menu Belajar*\n\n",
      haveRecipesKnown: "✅ Kamu sudah punya {n} resep yang ditemukan!\n",
      noNewRecipesSkill: "❌ Belum ada resep baru untuk ditemukan.\n",
      noBooksIntro: "❌ Tidak ada skill book di inventori.\n\n💡 *Yang bisa dilakukan:*\n",
      hintsWithRecipes:
        "• *!recipes* untuk resep yang sudah ada\n• *!craft* untuk crafting\n• Kumpulkan material berbeda\n• Beli skill book di *!shop*\n\n🎯 Coba berburu di lokasi lain!",
      noRecipesNoBooksHeader: "❌ Belum ada resep baru dan tidak ada skill book!\n\n💡 *Cara menemukan resep:*\n",
      howDiscoverBullets:
        "1. Kumpulkan material dari:\n" +
        "   • Mengalahkan monster (!hunt)\n" +
        "   • Menambang (!mining)\n" +
        "   • Menebang (!chopping)\n" +
        "   • Foraging (!foraging)\n" +
        "   • Memancing (!fishing)\n\n" +
        "2. *!study* untuk menemukan resep\n" +
        "3. *!craft* untuk membuat barang\n\n💡 *Cara belajar skill:*\n",
      learnSkillsBullets:
        "• Beli skill book di toko (!shop)\n• Pakai *!study <nama_skill>*\n\n✨ Terus jelajah dan mengumpulkan!",
      booksTitle: "📚 *Skill book tersedia*\n\n",
      booksUsage: "\n\n💡 Cara pakai: *!study <nama_skill>*\nContoh: *!study power_strike*",
      noSkillBookInv:
        `❌ *Kamu tidak punya skill book untuk "{skill}"!*\n\n💡 Ketik *!study* untuk daftar skill bookmu.\nAtau beli di *!shop*.`,
      bookDbMissing: `⚠️ *Error: Skill book "{id}" tidak ada di database.*\n\nIni mungkin bug. Hubungi pemilik.`,
      skillDbMissing: `⚠️ *Error: Skill "{id}" tidak ada di database.*\n\nIni mungkin bug. Hubungi pemilik.`,
      classReqFail: `⚠️ *Kelas tidak memenuhi syarat!*\n\n📚 {bookName}\n📋 Kelas diperlukan: {needed}\n\nKelas kamu: {yours}`,
      levelReqFail: `⚠️ *Level tidak memenuhi syarat!*\n\n📚 {bookName}\n⭐ Level diperlukan: {needed}\n\nLevel kamu: {yours}`,
      alreadyKnown: `⚠️ *Kamu sudah menguasai {skill}!*\n\nTidak bisa belajar skill yang sama dua kali.\nKetik *!myskills* untuk daftar skill.`,
      learnedTitle: "✨ *SKILL DIAPELAJARI!*\n\n",
      learnedBody:
        `{emoji} *{name}*\n` +
        `{rarity} | {category}\n\n` +
        `📖 {description}\n\n` +
        `💧 Biaya Mana: {mana}\n⏱️ Cooldown: {cd} giliran\n⚔️ Tipe damage: {dmgType}` +
        `{dmgLine}{valDamageLine}` +
        `✨ Efek: {effectDesc}\n`,
      dmgLineTpl: `\n💥 Damage dasar: {dmg}\n`,
      valDamageLineTpl: `💥 Damage: {val}\n`,
      effectNone: "Tidak ada",
      effectTurnSuffix: ` selama {n} giliran`,
      equipHintFooter: `\n💡 *!equipskill {skillId}* untuk memasang skill!\n*!myskills* untuk semua skill.`,
    },

    redeemCmd: {
      notRegistered:
        "⚠️ *Kamu belum terdaftar!*\n\nKetik *{prefix}register <nama kamu>* untuk mulai.",
      usage:
        "🎁 *Kode Redeem*\n\nMasukkan kode untuk klaim hadiah!\n\nCara: *{prefix}redeem <kode>*\nContoh: *{prefix}redeem WELCOME*\n\n💡 *Tips:* Huruf besar/kecil tidak masalah.",
      invalidCode:
        `❌ *Kode tidak valid!*\n\nKode *{code}* tidak ada.\n\nPastikan kamu mengetiknya benar.`,
      alreadyRedeemed:
        `⚠️ *Sudah dipakai!*\n\nKamu sudah memakai kode *{code}*.\n\nSetiap pemain hanya bisa memakai kode satu kali.`,
      successTitle: `✅ *Kode berhasil ditukarkan!*\n\n`,
      successPackLabel: `🎁 *{description}*\n\n`,
      rewardGoldPlus: `💰 *+{amount} emas*`,
      rewardsHeaderItems: `🎁 *Hadiah diterima:*\n\n`,
      itemLine: `• {qty}x {name}\n`,
      goldInline: `💰 *{amount} emas*\n`,
      petsHeader: `\n🐾 *Pet yang diterima:*\n\n`,
      petLineRarity: `{rEmoji} {pEmoji} {name} ({rarity})\n`,
      petLineFallback: `🐾 {name}\n`,
      evarickExtra:
        "⚔️ *Perlengkapan legenda siap digunakan!*\n🐾 *Kamu dapat 5 pet keren!*\n\n",
      footerBag: "\n\nKetik *{prefix}bag* untuk lihat tas!",
      footerPets: "Ketik *{prefix}pets* untuk lihat pet!\n",
      footerGold: "\nKetik *{prefix}gold* untuk cek emas!",
    },

    innCmd: {
      notRegistered:
        "⚠️ *Kamu belum terdaftar!*\n\nKetik *{prefix}register <nama kamu>* untuk mulai.",
      invalidLocation: `⚠️ *Lokasi tidak valid!*`,
      noInnHere:
        `🏕️ *Tidak ada penginapan di sini!*\n\nIni area liar. Pakai perintah *{prefix}camp*.\nPenginapan hanya di kota yang punya toko.`,
      cannotRestCombat: `⚠️ *Tidak bisa istirahat di penginapan saat bertempur!*`,
      alreadyResting: `🏨 *Sedang istirahat!*\n\nKetik *leave* untuk selesai istirahat.`,
      notEnoughGold:
        `💰 *Emas tidak cukup!*\n\nBiaya: {price} emas\nEmas kamu: {gold}\n\nMasih kurang {needed} emas.`,
      alreadyWellRested:
        `✅ *Sudah segar sepenuhnya!*\n\n❤️ HP: {hp}/{maxHp}\n💧 Mana: {mana}/{maxMana}\n✨ Buff Well Rested masih aktif\n\nBelum perlu menginap lagi.`,
      welcomeRest:
        `🏨 *Selamat datang di penginapan!*\n\n` +
        `💰 Bayar: {price} emas\n` +
        `💰 Sisa: {remaining} emas\n\n` +
        `✨ *HP & Mana penuh!*\n` +
        `❤️ HP: {hp}/{maxHp} (+{hpGain})\n` +
        `💧 Mana: {mana}/{maxMana} (+{manaGain})\n\n` +
        `🌟 *Buff Well Rested*\n` +
        `Regen 10% HP & Mana tiap giliran\n` +
        `Durasi: 10 giliran dalam combat\n\n` +
        `🛡️ *Status terlindung*\n` +
        `Musuh tidak bisa mendadak menyergap saat istirahat.\n` +
        `Masih bisa terima/tolak tantangan.\n\n` +
        `Ketik *leave* untuk checkout.`,
      leaveCheckout:
        `🏨 *Checkout penginapan*\n\nSiap bertualang lagi!\n\n✨ Buff Well Rested untuk 10 giliran combat berikutnya.`,
      effectStoredDesc: "Regenerasi 10% HP dan Mana tiap giliran dalam combat",
    },

    campCmd: {
      notRegistered:
        "⚠️ *Kamu belum terdaftar!*\n\nKetik *{prefix}register <nama kamu>* untuk mulai.",
      invalidLocation: `⚠️ *Lokasi tidak valid!*`,
      cantCampInTown:
        `🏘️ *Tidak bisa berkemah di sini!*\n\n` +
        `Lokasi ini punya penginapan. Pakai *{prefix}inn*.\nBerkemah hanya untuk area liar.`,
      alreadyCamping: `🏕️ *Kamu sudah sedang berkemah!*\n\nKetik *leave* untuk berhenti.`,
      cannotInCombat: `⚠️ *Tidak bisa berkemah saat bertempur!*`,
      alreadyFull:
        `✅ *HP dan mana sudah penuh!*\n\n` +
        `❤️ HP: {hp}/{maxHp}\n` +
        `💧 Mana: {mana}/{maxMana}\n\n` +
        `Belum perlu berkemah.`,
      settingUpCamp:
        `🏕️ *Menyiapkan perkemahan...*\n\n` +
        `Kamu menemukan tempat aman untuk beristirahat.\n` +
        `Regenerasi 1% HP dan Mana tiap detik.\n\n` +
        `❤️ HP: {hp}/{maxHp}\n` +
        `💧 Mana: {mana}/{maxMana}\n\n` +
        `Ketik *leave* untuk menghentikan berkemah.`,
      timeoutReached:
        `⏰ *Waktu berkemah habis!*\n\n` +
        `Sudah lebih dari {mins} menit.\n\n` +
        `❤️ HP: {hp}/{maxHp}\n` +
        `💧 Mana: {mana}/{maxMana}\n\n` +
        `Sesi perkemahan berhenti otomatis.\nKetik *{prefix}camp* lagi jika butuh istirahat.`,
      fullyRestedBanner:
        `✅ *SEPENUHNYA ISTIRAHAT!*\n\n` +
        `❤️ HP: {hp}/{maxHp} ✅\n` +
        `💧 Mana: {mana}/{maxMana} ✅\n\n` +
        `⏱️ Waktu: {secs}s\n\n` +
        `HP dan mana sudah pulih sepenuhnya!\n` +
        `Ketik *leave* untuk keluar.`,
      regenBanner:
        `💚 Memulihkan...\n\n` +
        `❤️ HP: {hp}/{maxHp} ({hpPct}%) +{hpGain}\n` +
        `💧 Mana: {mana}/{maxMana} ({manaPct}%) +{manaGain}\n\n` +
        `⏱️ Waktu: {secs}s\n\n` +
        `🛡️ *Status terlindung*\n` +
        `Musuh tidak bisa menyergap saat berkemah.\n` +
        `Kamu bisa terima/tolak tantangan.\n\n` +
        `Ketik *leave* untuk berhenti berkemah.`,
      notCamping: `⚠️ *Kamu sedang tidak berkemah!*`,
      leaveSummary:
        `🏕️ *Meninggalkan perkemahan*\n\n` +
        `Kamu kemas perkemahan dan lanjut petualangan.\n\n` +
        `❤️ HP: {hp}/{maxHp}\n` +
        `💧 Mana: {mana}/{maxMana}\n\n` +
        `⏱️ Berkemah: {secs}s`,
      animA: `🏕️ *BERKEMAH...*\n\n🔥 ▁▂▃▄▅▆▇■\n🌲🌲  🏕️  🌲🌲`,
      animB: `🏕️ *BERKEMAH...*\n\n🔥 ■▇▆▅▄▃▂▁\n🌲🌲  🏕️  🌲🌲`,
    },

    storyCmd: {
      noActiveEncounter: "⚠️ *Tidak ada cerita aktif.*\n\nBerjalan-jalan untuk memicu pertemuan acak!",
      encounterNotFound: "⚠️ *Data pertemuan cerita tidak ada.*",
      invalidChoice: "⚠️ *Pilihan tidak valid.*\n\nPilihan valid: {choices}",
      notRegistered: "⚠️ *Kamu belum terdaftar!*",
      cannotChooseTitle: "⚠️ *Tidak bisa ambil pilihan ini!*\n\n",
      availableChoicesHeader: "\n\n*Pilihan yang ada:*\n",
      choiceLineOk: "\n{status} *{key}* - {label}",
      choiceLineReason: "\n   └ {reason}",
      chooseAgain: "\n\nPilih lagi dengan: *{prefix}story <pilihan>*",
      processError: "⚠️ *Gagal memroses pilihan.*",
      repGainGood: "\n😇 +{n} reputasi (baik)",
      repGainEvil: "\n😈 {n} reputasi (jahat)",
      repTitleChanged: "\n\n{emoji} *Judul reputasi berubah!*\n{oldTitle} → {newTitle}",
      goldGain: "\n💰 +{n} emas",
      goldLoss: "\n💸 {n} emas",
      expGain: "\n⭐ +{n} XP",
      expLoss: "\n📉 {n} XP",
      levelUp: "\n\n🎉 *NAIK LEVEL!* Sekarang level {level}! (+3 poin stat)",
      damageHp: "\n💔 -{n} HP",
      knockedOut:
        "\n\n💀 *Kamu pingsan!*\n❤️ Bangun lagi dengan 50% HP\n💸 Kehilangan 10% emas",
      itemGain: "\n🎁 +{qty}x {id}",
      outcomeDivider: "\n━━━━━━━━━━━━━━━━━━━━\n",
      outcomeBanner: "{emoji} *{typeLabel}*\n",
      rewardsHeader: "\n\n*Hadiah:*",
      footerGold: "\n\n💰 Emas: {gold}g\n",
      footerExp: "⭐ XP: {exp}\n",
      footerHp: "❤️ HP: {hp}/{maxHp}\n",
      footerRepLine: "{emoji} Reputasi: {title} ({value})\n",
      continueHint: "\nLanjut dengan *{prefix}location*",
      outcomeTypeGood: "HASIL BAIK",
      outcomeTypeNeutral: "HASIL NETRAL",
      outcomeTypeBad: "HASIL BURUK",
      outcomeTypeUnknown: "HASIL",
    },

    pvpCmd: {
      alreadyInCombat: "⚠️ *Salah satu pemain sudah dalam combat!*",
      battleStartedGroup:
        `⚔️ *PVP DIMULAI!*\n\n` +
        `{p1} vs {p2}\n\n{ambushLine}` +
        `📱 *Cek DM ke bot untuk update pertarungan!*\n\n` +
        `Kirim perintah via DM.`,
      ambushLineGroup: `💥 *SERANGAN MENDADAK!* Lokasi sama!\n\n`,
      battleStartedDm: `⚔️ *PVP DIMULAI!*\n\nKamu vs {opp}\n\n{ambushLine}`,
      ambushLineP1: `💥 *SERANGAN MENDADAK!* Lokasi sama!\n\n`,
      ambushLineP2: `💥 *SERANGAN MENDADAK!* Kamu diserang!\n\n`,
      divider: `========================`,
      roundTitle: `⚔️ *RONDE PVP {round}*\n\n`,
      youLine: `👤 *Kamu ({name})*{st}\n`,
      oppNamed: `👤 *{name}*{st}\n`,
      hpBarLine: `❤️ {bar} {hp}/{maxHp}{sp}\n`,
      manaLine: `💧 Mana: {mana}/{maxMana}\n\n`,
      skillsBlock: `🎯 *Skill kamu:* {skills}\n\n`,
      skillEmptySlot: `[{i}] —`,
      weaponSlot: `  [4] {name}{cd}`,
      turnLine: `⏱️ *{turnLabel}* ({secs}s)\n\n`,
      turnYour: "GILIRAN KAMU",
      turnOpponent: "Giliran {name}",
      commandsLine: `*Perintah:* attack / defend / skill [1/2/3{four}] / item / run / status`,
      stunned: ` 💫STUN`,
      silenced: ` 🤐DIAM`,
      notYourTurn: `⏱️ *Belum giliranmu!*\n\nTunggu {name} bertindak.`,
      noSkillSlot: `⚠️ *Tidak ada skill di slot {slot}.*`,
      silencedCantSkill: `🤐 *Kamu diam!* Tidak bisa pakai skill giliran ini.`,
      skillCooldown: `⏳ *{skill}* cooldown! (sisa {n} giliran)`,
      notEnoughMana: `💧 *Mana kurang!* Butuh {need}, punya {have}.`,
      unknownCommand:
        `⚠️ *Perintah tidak dikenal.*\n\nKetik: attack / defend / skill [1/2/3] / item / run / status`,
      itemUsage:
        `🎒 *Cara pakai:* item <nama>\nContoh: *item health_potion*\n\nItem untuk combat:\n{list}`,
      itemNoneCombat: `Tidak ada`,
      itemCannotUse: `⚠️ *Tidak bisa pakai item itu di battle.*`,
      itemDontHave: `⚠️ *Kamu tidak punya {item}.*`,
      cleanseRemoved: `✨ Menghapus {n} efek negatif.`,
      logStunnedSkip: `💫 {name} stun dan lewati giliran!`,
      logDefendSp: `🛡️ {name} bertahan! SP: {sp}`,
      logYouDodgeSkill: `💨 *Kamu hindari {skill} milik {name}!*`,
      logUsesSkill: `{name} memakai *{skill}*!`,
      logCrit: `💥 Serangan kritikal!`,
      logShieldAbsorbYou: `🛡️ Perisai serap {n} damage!`,
      logYouTake: `❌ Kamu kena *{d}* damage! HP: {hp}/{maxHp}`,
      logShieldBlocksYou: `🛡️ Semua damage ditahan perisai! HP: {hp}/{maxHp}`,
      logShieldBrokenYou: `💔 *PERISAI PECAH!* Perisaimu habis!`,
      logShieldBreakTrigger: `💥 *PECahan PERISAI!* Damage 3x!`,
      logShieldBreakTriggerShort: `💥 *PECahan PERISAI!* Damage 3x!`,
      logYouStunned1: `💫 Kamu stun 1 giliran!`,
      logReflectYou: `🪞 Kamu memantulkan {n} damage!`,
      logYouDodgeAtk: `💨 *Kamu hindari serangan {name}!*`,
      logAttacks: `{name} menyerang!`,
      logTargetDodgedYou: `💨 *{name} menghindar dari seranganmu!*`,
      logYouAttack: `⚔️ *Kamu menyerang {name}!*`,
      logCritHit: `💥 *Kritis!*`,
      logEnemyShieldAbsorb: `🛡️ Perisai lawan serap {n} damage!`,
      logDealt: `💢 Memberi *{d}* damage! {name} HP: {hp}/{maxHp}`,
      logEnemyShieldBlock: `🛡️ Semua damage ditahan perisai lawan! {name} HP: {hp}/{maxHp}`,
      logEnemyShieldBlockSkill: `🛡️ Semua damage ditahan perisai lawan!`,
      logEnemyShieldBreak: `💔 *PERISAI LAWAN PECAH!*`,
      logTargetReflects: `🪞 {name} memantulkan {n} damage!`,
      logYouGuard: `🛡️ *Kamu bertahan!* SP: {sp}/{maxSp}`,
      logYouStunnedTurn: `💫 *Kamu stun!* Giliran dilewati...`,
      logSkillName: `💥 *{skill}!*`,
      logTargetDodgeSkill: `💨 *{name} menghindar!*`,
      logTargetStunned: `💫 {name} stun!`,
      logExecuteExtra: `💀 Eksekusi +{n} damage!`,
      logHpRemain: `{name} HP: {hp}/{maxHp}`,
      logFailEscape: `🏃 *Gagal kabur!* {name} menghalangi dan dapat serangan gratis!`,
      finishingBlow: `\n\n⚔️ *Serangan pamungkas!*`,
      youWereDefeated: `\n\n⚔️ *Kamu kalah!*`,
      defeatedByFx: `\n\n⚔️ *Kalah karena efek status!*`,
      opponentDefeatedFx: `\n\n⚔️ *{name} kalah karena efek status!*`,
      victimStunnedItem: `💫 {name} stun selama {n} giliran!`,
      victoryTitle: `🏆 *MENANG!*\n\n`,
      victoryBody: `Kamu mengalahkan *{name}* di PVP!\n\n`,
      victoryGoldLine: `💰 Emas dirampas: +{gold}{extra}\n\n`,
      bountyClaimed: `\n💀 *Buruan diklaim:* +{gold} emas`,
      itemsStolenHeader: `\n\n📦 *Item dirampas:*`,
      evilPenaltyNote: `\n⚠️ *Musuh jahat:* rampasan emas/item lebih besar`,
      victoryTotals:
        `💰 *Total emas didapat:* {total}\n❤️ HP kamu: {hp}/{maxHp}\n💧 Mana kamu: {mana}/{maxMana}`,
      defeatedTitle: `💀 *KALAH!*\n\n`,
      defeatedBody: `*{winner}* mengalahkanmu di PVP!\n\n`,
      defeatedGoldLost: `💰 Kehilangan emas: -{gold}{itemsLost}\n\n`,
      itemsLostHeader: `\n\n📦 *Item hilang:*`,
      respawnHint: `Kamu muncul lagi di Starter Village dengan 1 HP.\nKe toko untuk pulih.`,
      battleEnded: `⚔️ *PVP SELESAI!*\n\n`,
      battleWinner: `🏆 *{winner}* mengalahkan *{loser}!*\n\n`,
      battleGoldStolen: `💰 {gold} emas dirampas{itemsNote}`,
      itemsStolenShort: `\n📦 {n} tumpukan item`,
      escapedYou:
        `🏃 *Berhasil kabur!*\n\nKamu lari dari PVP.\n\nKetik *challenge* untuk bertarung lagi.`,
      escapedOther:
        `🏃 *{name} kabur!*\n\nLawan melarikan diri.\n\nKetik *challenge* untuk bertarung lagi.`,
      battleEndedEscaped: `⚔️ *PVP SELESAI!*\n\n🏃 *{name}* kabur!`,
      turnTimeoutSelf: `⏱️ *GILIRAN HANGUS!*\n\nKamu terlalu lama!\nGiliran ke {name}.\n\n`,
      turnTimeoutOther:
        `⏱️ *GILIRAN HANGUS!*\n\n{name} terlalu lama!\nSekarang giliranmu!\n\n`,
      itemLine: `• {id} x{qty}`,
      hpOnlyLine: `❤️ HP: {hp}/{maxHp}`,
      manaOnlyLine: `💧 Mana: {mana}/{maxMana}`,
      hpManaLine: `❤️ HP: {hp}/{maxHp} | 💧 Mana: {mana}/{maxMana}`,
      itemUsedBanner: `🎒 *{name}*`,
      finishingStrike: `\n\n⚔️ *Serangan penutup!*`,
      finishingVictim: `\n\n⚔️ *Kamu kalah duel ini!*`,
      defeatedByStatusSelf: `\n\n⚔️ *Kalah karena efek status!*`,
      defeatedByStatusOther: `\n\n⚔️ *{name} tumbang karena efek status!*`,
      groupBattleIntro: `⚔️ *PVP!*\n\n`,
    },

    registerCmd: {
      alreadyRegistered:
        `⚠️ *Kamu sudah terdaftar!*\n\n` +
        `Karakter: *{name}* ({cls})\n` +
        `Pakai *{prefix}profil* untuk lihat stats.`,
      welcomeUsage:
        `📜 *Selamat datang di dunia RPG!*\n\nDaftar dengan:\n*{prefix}register <nama kamu>*\n\nContoh: *{prefix}register Evarick*`,
      nameLengthBad: `⚠️ *Nama harus 3–16 karakter.*`,
      nameInvalidChars: `⚠️ *Nama hanya boleh huruf, angka, dan garis bawah (_).*`,
      nameTaken: `⚠️ *Nama "{name}" sudah dipakai. Pilih nama lain.*`,
      pickClass:
        `✅ *Nama dicadangkan: {name}*\n\n` +
        `Pilih kelas dengan mengetik:\n*{prefix}class <nama_kelas>*\n\n` +
        `Kelas tersedia:\n\n{classBlock}` +
        `Contoh: *{prefix}class warrior*\n\n` +
        `⏳ Waktu pilih kelas 2 menit.`,
      currentClassBanner: `📋 *Kelas sekarang:* {cls}\n\n`,
      classChangeHint:
        `💡 Mau ganti kelas?\nKetik *{prefix}class <kelas_baru>* untuk lihat biaya.\n\n` +
        `Kelas: {options}`,
      invalidClassMsg: `⚠️ *"{id}" bukan kelas valid.*\n\nTersedia: {options}`,
      alreadySameClass: `⚠️ *Kamu sudah menjadi {cls}!*`,
      changeRequestTitle: `💰 *Permintaan ganti kelas*\n\n`,
      changeInsufficient:
        `{emoji} *Kelas baru:* {name}\n` +
        `📖 {desc}\n\n` +
        `💵 *Biaya:* {cost} emas\n` +
        `💰 *Emas kamu:* {gold}\n\n` +
        `❌ *Emas tidak cukup!*\n` +
        `Butuh tambahan {shortage} emas.`,
      changeConfirmTitle: `💰 *Konfirmasi ganti kelas*\n\n`,
      changeConfirmBody:
        `📋 *Kelas sekarang:* {currentCls}\n` +
        `{emoji} *Kelas baru:* {newName}\n` +
        `📖 {desc}\n\n` +
        `⚠️ *Perhatian:*\n` +
        `• Biaya: {cost} emas\n` +
        `• Stats diset ke dasar kelas {newName}\n` +
        `• Skill diset ulang ke skill awal {newName}\n` +
        `• Buku skill yang sudah dipelajari dikembalikan ke tas\n` +
        `• Perlengkapan tidak berubah\n` +
        `• Level & XP tidak berubah\n\n` +
        `💰 *Emas kamu:* {gold} emas\n` +
        `💰 *Setelah ganti:* {afterGold} emas\n\n` +
        `Ketik *{prefix}yes* untuk konfirmasi atau *{prefix}no* untuk batal.\n` +
        `⏳ Waktu 1 menit.`,
      noPendingRegister:
        `⚠️ *Belum mulai registrasi.*\n\nKetik *{prefix}register <nama kamu>* dulu.`,
      registerExpired:
        `⏰ *Registrasi kadaluarsa.*\n\nUlangi dengan *{prefix}register <nama kamu>*.`,
      specifyClass: `⚠️ *Sebutkan kelas.*\n\n{options}`,
      noPendingChange: `⚠️ *Tidak ada permintaan ganti kelas yang menunggu.*`,
      changeRequestExpired: `⏰ *Permintaan ganti kelas kadaluarsa.*`,
      yesInsufficientFunds:
        `❌ *Emas tidak cukup!*\n\n` +
        `Butuh {cost} emas, emas kamu {gold}.`,
      changeCancelled: `❌ *Ganti kelas dibatalkan.*\n\nKelas tetap sama.`,
      classChangedOk: `✨ *KELAS BERHASIL DIGANTI!*\n\n`,
      changeOldNew:
        `📋 *Kelas lama:* {oldCls}\n` +
        `{emoji} *Kelas baru:* {newName}\n\n` +
        `💰 *Emas dibayar:* {spent}\n` +
        `💰 *Emas tersisa:* {remain}\n\n`,
      returnedBooksTitle: `📚 *Buku skill dikembalikan ke tas:*\n`,
      returnedBookLine: `• {title}\n`,
      newStatsTitle: `📊 *Stats baru:*\n`,
      statLineHp: `❤️ HP      : {v}\n`,
      statLineMana: `💧 Mana    : {v}\n`,
      statLineAtk: `⚔️ Serangan : {v}\n`,
      statLineDef: `🛡️ Pertahanan: {v}\n`,
      statLineAgi: `💨 Kelincahan: {v}\n`,
      statLineLuck: `🍀 Keberuntungan: {v}\n\n`,
      newStarterSkill: `✨ *Skill awal baru:* {name}\n{desc}\n\n`,
      newPassive: `🔮 *Pasif baru:* {name}\n{desc}\n\n`,
      profileFooterClassChange: `Ketik *{prefix}profil* untuk stats lengkap.`,
      charWelcome:
        `🎉 *Welcome to this world, {name}!*\n\n` +
        `{clsEmoji} *Class: {clsName}*\n` +
        `📖 {clsDesc}\n\n` +
        `📊 *Your Starting Stats:*\n` +
        `❤️ HP       : {maxHp}\n` +
        `💧 Mana     : {maxMana}\n` +
        `⚔️ Attack   : {attack}\n` +
        `🛡️ Defense  : {defense}\n` +
        `💨 Agility  : {agility}\n` +
        `🍀 Luck     : {luck}\n\n` +
        `✨ *Starter Skill:* {starterName}\n` +
        `{starterDesc}\n\n` +
        `🔮 *Passive:* {passiveName}\n` +
        `{passiveDesc}\n\n` +
        `📍 *Location:* {location}\n` +
        `💰 *Gold:* {startingGold}\n\n` +
        `Type *{prefix}profile* for full stats.\n` +
        `Type *{prefix}location* to see where you are.\n` +
        `Type *{prefix}hunt* to fight!`,
      charWelcomeId:
        `🎉 *Selamat datang di dunia ini, {name}!*\n\n` +
        `{clsEmoji} *Kelas: {clsName}*\n` +
        `📖 {clsDesc}\n\n` +
        `📊 *Stats Awal Kamu:*\n` +
        `❤️ HP      : {maxHp}\n` +
        `💧 Mana    : {maxMana}\n` +
        `⚔️ Serangan  : {attack}\n` +
        `🛡️ Pertahanan : {defense}\n` +
        `💨 Kelincahan : {agility}\n` +
        `🍀 Keberuntungan    : {luck}\n\n` +
        `✨ *Skill Awal:* {starterName}\n` +
        `{starterDesc}\n\n` +
        `🔮 *Pasif:* {passiveName}\n` +
        `{passiveDesc}\n\n` +
        `📍 *Lokasi:* {location}\n` +
        `💰 *Emas:* {startingGold}\n\n` +
        `Ketik *{prefix}profil* untuk melihat stats lengkap.\n` +
        `Ketik *{prefix}lokasi* untuk melihat posisi kamu.\n` +
        `Ketik *{prefix}hunt* untuk mulai bertarung!`,
      languageHint:
        `🌍 *Ubah Bahasa / Change Language*\n\n` +
        `Bot ini mendukung multi-bahasa!\n` +
        `This bot supports multiple languages!\n\n` +
        `🇮🇩 Bahasa Indonesia\n🇬🇧 English\n\n` +
        `Untuk mengganti bahasa — ketik:\n` +
        `To change language — type:\n\n` +
        `*{prefix}language id* — Indonesian\n` +
        `*{prefix}language en* — English`,
      locationStarterVillageEn: "Starter Village",
      locationStarterVillageId: "Desa Pemula",
    },

    equipskillCmd: {
      notRegistered: "⚠️ *Kamu belum terdaftar!*\n\nKetik *!register <nama kamu>* untuk memulai.",
      usage: "⚠️ *Penggunaan:* !equipskill <nama_skill> <slot>\n\n*Contoh:* !equipskill fireball 2\n\nSlot: 1, 2, atau 3\nKetik *!myskills* untuk skill yang sudah dipelajari.",
      invalidSlot: "⚠️ *Nomor slot tidak valid!*\n\nSlot harus 1, 2, atau 3.\n\n*Contoh:* !equipskill fireball 2",
      notLearned: "⚠️ *Kamu belum mempelajari \"{skill}\"!*\n\nKetik *!myskills* untuk daftar skill.\nBeli buku skill di toko.",
      skillMissing: "⚠️ *Skill \"{skill}\" tidak ada di database.*\n\nMungkin bug. Hubungi pemilik bot.",
      alreadyEquipped: "⚠️ *{name} sudah dipasang di Slot {slot}!*\n\nLepas dulu dengan *!unequipskill {slot}*",
      success: "✅ *Skill Dipasang!*\n\n{emoji} *{name}*\n📍 Dipasang di *Slot {slot}*\n\n📖 {description}\n\n💧 Biaya Mana: {mana}\n⏱️ Cooldown: {cd} giliran\n\nGunakan *skill {slot}* saat combat!\nKetik *!myskills* untuk semua skill.",
    },

    unequipskillCmd: {
      notRegistered: "⚠️ *Kamu belum terdaftar!*\n\nKetik *!register <nama kamu>* untuk memulai.",
      usage: "⚠️ *Penggunaan:* !unequipskill <slot>\n\n*Contoh:* !unequipskill 2\n\nSlot: 1, 2, atau 3\nKetik *!myskills* untuk skill yang dipasang.",
      invalidSlot: "⚠️ *Nomor slot tidak valid!*\n\nSlot harus 1, 2, atau 3.\n\n*Contoh:* !unequipskill 2",
      emptySlot: "⚠️ *Slot {slot} sudah kosong!*\n\nKetik *!myskills* untuk skill yang dipasang.",
      success: "✅ *Skill Dilepas!*\n\n*{name}* dilepas dari Slot {slot}.\n\nSkill masih ada di yang sudah dipelajari.\nPasang lagi dengan:\n*!equipskill {id} {slot}*\n\nKetik *!myskills* untuk semua skill.",
    },
  },
};

// Get language by code
export function getLanguage(code = "en") {
  return languages[code] || languages.en;
}

// Get text with replacements
export function getText(lang, path, replacements = {}) {
  const keys = path.split(".");
  let text = lang;
  
  for (const key of keys) {
    text = text[key];
    if (!text) return path; // Return path if not found
  }
  
  // Replace placeholders
  for (const [key, value] of Object.entries(replacements)) {
    text = text.replace(new RegExp(`{${key}}`, "g"), value);
  }
  
  return text;
}

// Get player language
export function getPlayerLanguage(player) {
  return player?.language || "en";
}

export default languages;
