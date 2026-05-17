/*
  RPG Story Encounters
  Base : Lenwy SCM — RPG Extension

  Random story encounters that trigger during travel (10% chance)
  Players can choose actions: take, run, fight, leave, talk, help, ignore
  Each choice has different outcomes (good, bad, or neutral)
  
  REPUTATION SYSTEM:
  - Good actions increase reputation (max: 100)
  - Evil actions decrease reputation (min: -100)
  - Reputation affects story outcomes and NPC reactions
  - Reputation titles: Saint (80+), Hero (50+), Neutral (0), Villain (-50), Demon (-80)
*/

// ══════════════════════════════════════════════════════════
// REPUTATION HELPER FUNCTIONS
// ══════════════════════════════════════════════════════════

/**
 * Get reputation title based on reputation value
 * @param {number} reputation 
 * @returns {object} { title, emoji, color }
 */
export function getReputationTitle(reputation) {
  if (reputation >= 80) return { title: "Saint", emoji: "😇", color: "✨" };
  if (reputation >= 50) return { title: "Hero", emoji: "🦸", color: "⭐" };
  if (reputation >= 20) return { title: "Good", emoji: "😊", color: "💚" };
  if (reputation >= -20) return { title: "Neutral", emoji: "😐", color: "⚪" };
  if (reputation >= -50) return { title: "Bad", emoji: "😠", color: "🔴" };
  if (reputation >= -80) return { title: "Villain", emoji: "😈", color: "💀" };
  return { title: "Demon", emoji: "👹", color: "🔥" };
}

/**
 * Format reputation bar
 * @param {number} reputation (-100 to 100)
 * @returns {string}
 */
export function formatReputationBar(reputation) {
  const normalized = Math.max(-100, Math.min(100, reputation));
  const position = Math.floor(((normalized + 100) / 200) * 10);
  
  let bar = "";
  for (let i = 0; i < 10; i++) {
    if (i === position) {
      bar += "◆";
    } else if (i < 5) {
      bar += "▬"; // Evil side
    } else {
      bar += "▬"; // Good side
    }
  }
  
  return `[${bar}]`;
}

// ══════════════════════════════════════════════════════════
// STORY ENCOUNTERS
// ══════════════════════════════════════════════════════════

export const storyEncounters = {
  
  // ═══════════════════════════════════════════════════════
  // MYSTERIOUS MERCHANT
  // ═══════════════════════════════════════════════════════
  mysterious_merchant: {
    id: "mysterious_merchant",
    title: "🎭 Mysterious Merchant",
    description:
      `A hooded figure emerges from the shadows, their cart filled with strange glowing items.\n\n` +
      `"Greetings, traveler! I have rare wares from distant lands. Perhaps you'd like to make a trade?"\n\n` +
      `The merchant's eyes gleam with an otherworldly light.`,
    
    emoji: "🎭",
    rarity: "uncommon",
    locations: ["all"], // Can appear anywhere
    
    choices: {
      talk: {
        label: "💬 Talk",
        outcomes: [
          {
            weight: 60,
            type: "good",
            text: `You chat with the merchant and learn valuable information about a hidden treasure nearby!`,
            rewards: { gold: 500, exp: 100 },
          },
          {
            weight: 30,
            type: "neutral",
            text: `The merchant shares interesting stories but offers nothing of value.`,
            rewards: { exp: 50 },
          },
          {
            weight: 10,
            type: "bad",
            text: `The merchant's stories bore you to tears. You waste precious time.`,
            rewards: {},
          },
        ],
      },
      
      take: {
        label: "🤲 Take Item",
        outcomes: [
          {
            weight: 40,
            type: "good",
            text: `The merchant offers you a mysterious potion as a gift!`,
            rewards: { items: [{ id: "elixir", qty: 1 }], exp: 50 },
          },
          {
            weight: 40,
            type: "neutral",
            text: `The merchant wants payment. You decline politely.`,
            rewards: {},
          },
          {
            weight: 20,
            type: "bad",
            text: `You try to take an item without paying. The merchant curses you!\n*You lose some gold.*`,
            rewards: { gold: -200 },
          },
        ],
      },
      
      leave: {
        label: "🚶 Leave",
        outcomes: [
          {
            weight: 100,
            type: "neutral",
            text: `You politely decline and continue on your journey.`,
            rewards: {},
          },
        ],
      },
      
      fight: {
        label: "⚔️ Fight",
        outcomes: [
          {
            weight: 30,
            type: "good",
            text: `The merchant was actually a bandit in disguise! You defeat them and claim their gold!`,
            rewards: { gold: 800, exp: 200 },
          },
          {
            weight: 70,
            type: "bad",
            text: `The merchant was innocent! You feel terrible and lose reputation.\n*Guards fine you for assault.*`,
            rewards: { gold: -500, exp: -50 },
          },
        ],
      },
    },
  },

  // ═══════════════════════════════════════════════════════
  // INJURED TRAVELER
  // ═══════════════════════════════════════════════════════
  injured_traveler: {
    id: "injured_traveler",
    title: "🤕 Injured Traveler",
    description:
      `You find a wounded traveler lying by the roadside, clutching their side.\n\n` +
      `"Please... help me... bandits... took everything..."\n\n` +
      `They look like they need immediate assistance.`,
    
    emoji: "🤕",
    rarity: "common",
    locations: ["all"],
    
    choices: {
      help: {
        label: "❤️ Help (Requires: 1x Health Potion)",
        requiredItems: [{ id: "health_potion", qty: 1 }],
        outcomes: [
          {
            weight: 70,
            type: "good",
            text: `You bandage their wounds and give them a potion. They thank you profusely and reward you!`,
            rewards: { gold: 300, exp: 150, items: [{ id: "health_potion", qty: 2 }], reputation: 15 },
          },
          {
            weight: 20,
            type: "neutral",
            text: `You help them, but they have nothing to offer in return. They thank you sincerely.`,
            rewards: { exp: 100, reputation: 10 },
          },
          {
            weight: 10,
            type: "bad",
            text: `It was a trap! The "injured" traveler was a thief. They steal some of your gold!`,
            rewards: { gold: -400, reputation: -5 },
          },
        ],
      },
      
      talk: {
        label: "💬 Talk",
        outcomes: [
          {
            weight: 50,
            type: "neutral",
            text: `You talk to them and learn about the bandit hideout nearby.`,
            rewards: { exp: 80, reputation: 2 },
          },
          {
            weight: 50,
            type: "bad",
            text: `While you're talking, they pass out from blood loss. You feel guilty.`,
            rewards: { exp: -30, reputation: -5 },
          },
        ],
      },
      
      ignore: {
        label: "👁️ Ignore",
        outcomes: [
          {
            weight: 60,
            type: "neutral",
            text: `You walk past, minding your own business.`,
            rewards: { reputation: -3 },
          },
          {
            weight: 40,
            type: "bad",
            text: `You ignore them and continue. Later, you hear they didn't survive. You feel terrible.`,
            rewards: { exp: -50, reputation: -10 },
          },
        ],
      },
      
      take: {
        label: "🤲 Search Them",
        outcomes: [
          {
            weight: 30,
            type: "good",
            text: `You find a valuable item they dropped. You take it and leave them a potion.`,
            rewards: { gold: 200, items: [{ id: "iron_bar", qty: 3 }], reputation: 5 },
          },
          {
            weight: 70,
            type: "bad",
            text: `You rob an injured person? That's low. Karma will remember this.`,
            rewards: { gold: 100, exp: -100, reputation: -20 },
          },
        ],
      },
    },
  },

  // ═══════════════════════════════════════════════════════
  // TREASURE CHEST
  // ═══════════════════════════════════════════════════════
  treasure_chest: {
    id: "treasure_chest",
    title: "📦 Mysterious Chest",
    description:
      `You spot an ornate chest sitting in the middle of the path.\n\n` +
      `It's unlocked and slightly ajar, revealing a faint golden glow from within.\n\n` +
      `This seems too good to be true...`,
    
    emoji: "📦",
    rarity: "rare",
    locations: ["all"],
    
    choices: {
      take: {
        label: "🤲 Open Chest",
        outcomes: [
          {
            weight: 40,
            type: "good",
            text: `Jackpot! The chest is filled with gold and rare items!`,
            rewards: { 
              gold: 1000, 
              exp: 200,
              items: [
                { id: "gold_bar", qty: 5 },
                { id: "mega_potion", qty: 3 },
              ],
            },
          },
          {
            weight: 30,
            type: "neutral",
            text: `The chest contains a modest amount of gold.`,
            rewards: { gold: 300 },
          },
          {
            weight: 30,
            type: "bad",
            text: `It's a trap! A poison dart shoots out and hits you!\n*You lose HP and gold.*`,
            rewards: { gold: -200, damage: 50 },
          },
        ],
      },
      
      leave: {
        label: "🚶 Leave It",
        outcomes: [
          {
            weight: 70,
            type: "neutral",
            text: `You wisely avoid the suspicious chest and continue on your way.`,
            rewards: { exp: 50 },
          },
          {
            weight: 30,
            type: "bad",
            text: `You leave the chest. Later, you hear someone else found a fortune inside. You regret your caution.`,
            rewards: {},
          },
        ],
      },
      
      fight: {
        label: "⚔️ Attack Chest",
        outcomes: [
          {
            weight: 50,
            type: "good",
            text: `You smash the chest open! It was a mimic monster! You defeat it and claim the loot!`,
            rewards: { 
              gold: 800, 
              exp: 300,
              items: [{ id: "leather", qty: 5 }],
            },
          },
          {
            weight: 50,
            type: "bad",
            text: `You destroy the chest and its contents. Nothing salvageable remains.`,
            rewards: { exp: 50 },
          },
        ],
      },
    },
  },

  // ═══════════════════════════════════════════════════════
  // LOST CHILD
  // ═══════════════════════════════════════════════════════
  lost_child: {
    id: "lost_child",
    title: "👶 Lost Child",
    description:
      `A small child sits crying by a tree.\n\n` +
      `"I can't find my way home... I'm scared..."\n\n` +
      `They look up at you with tearful eyes.`,
    
    emoji: "👶",
    rarity: "uncommon",
    locations: ["peaceful_forest", "green_meadow", "starter_village"],
    
    choices: {
      help: {
        label: "❤️ Help Find Home",
        outcomes: [
          {
            weight: 80,
            type: "good",
            text: `You escort the child home safely. Their grateful parents reward you generously!`,
            rewards: { gold: 600, exp: 200, reputation: 20 },
          },
          {
            weight: 20,
            type: "neutral",
            text: `You help them find their way. They thank you, but have no reward to offer.`,
            rewards: { exp: 150, reputation: 15 },
          },
        ],
      },
      
      talk: {
        label: "💬 Talk",
        outcomes: [
          {
            weight: 60,
            type: "neutral",
            text: `You comfort the child and give them directions. They seem reassured.`,
            rewards: { exp: 100, reputation: 5 },
          },
          {
            weight: 40,
            type: "bad",
            text: `Your directions were wrong. The child gets more lost. You feel awful.`,
            rewards: { exp: -50, reputation: -8 },
          },
        ],
      },
      
      ignore: {
        label: "👁️ Ignore",
        outcomes: [
          {
            weight: 100,
            type: "bad",
            text: `You ignore a crying child? That's heartless. You feel guilty for days.`,
            rewards: { exp: -100, reputation: -25 },
          },
        ],
      },
      
      take: {
        label: "🤲 Give Gold (Requires: 100 Gold)",
        requiredGold: 100,
        outcomes: [
          {
            weight: 100,
            type: "good",
            text: `You give the child some gold to help them get home safely. They smile through their tears.`,
            rewards: { exp: 150, gold: -100, reputation: 12 },
          },
        ],
      },
    },
  },

  // ═══════════════════════════════════════════════════════
  // BANDIT AMBUSH
  // ═══════════════════════════════════════════════════════
  bandit_ambush: {
    id: "bandit_ambush",
    title: "🗡️ Bandit Ambush",
    description:
      `Three bandits jump out from behind the rocks!\n\n` +
      `"Hand over your gold, or face the consequences!"\n\n` +
      `They brandish their weapons menacingly.`,
    
    emoji: "🗡️",
    rarity: "common",
    locations: ["dark_forest", "mountain_path", "desert_oasis", "shadow_valley"],
    
    choices: {
      fight: {
        label: "⚔️ Fight",
        outcomes: [
          {
            weight: 60,
            type: "good",
            text: `You defeat the bandits and claim their stolen loot!`,
            rewards: { gold: 700, exp: 250, items: [{ id: "iron_bar", qty: 3 }] },
          },
          {
            weight: 40,
            type: "bad",
            text: `You fight bravely but get injured in the process.`,
            rewards: { gold: 300, exp: 150, damage: 80 },
          },
        ],
      },
      
      run: {
        label: "🏃 Run",
        outcomes: [
          {
            weight: 70,
            type: "neutral",
            text: `You escape successfully! No harm done.`,
            rewards: { exp: 50 },
          },
          {
            weight: 30,
            type: "bad",
            text: `You try to run but they catch you! They take some of your gold.`,
            rewards: { gold: -300 },
          },
        ],
      },
      
      talk: {
        label: "💬 Negotiate",
        outcomes: [
          {
            weight: 40,
            type: "good",
            text: `You convince them you're not worth robbing. They let you go and even share some info about treasure nearby!`,
            rewards: { exp: 150 },
          },
          {
            weight: 40,
            type: "neutral",
            text: `You pay them a small amount to leave you alone.`,
            rewards: { gold: -200, exp: 50 },
          },
          {
            weight: 20,
            type: "bad",
            text: `Your negotiation fails. They take your gold anyway!`,
            rewards: { gold: -500 },
          },
        ],
      },
      
      take: {
        label: "🤲 Offer Gold",
        outcomes: [
          {
            weight: 100,
            type: "neutral",
            text: `You hand over some gold. They take it and leave you alone.`,
            rewards: { gold: -300 },
          },
        ],
      },
    },
  },

  // ═══════════════════════════════════════════════════════
  // ANCIENT SHRINE
  // ═══════════════════════════════════════════════════════
  ancient_shrine: {
    id: "ancient_shrine",
    title: "⛩️ Ancient Shrine",
    description:
      `You discover an ancient shrine covered in mysterious runes.\n\n` +
      `A stone altar sits in the center with a glowing orb.\n\n` +
      `You feel a strange energy emanating from it.`,
    
    emoji: "⛩️",
    rarity: "rare",
    locations: ["mystic_temple", "floating_sanctuary", "ancient_ruins"],
    
    choices: {
      take: {
        label: "🤲 Touch Orb",
        outcomes: [
          {
            weight: 40,
            type: "good",
            text: `The orb grants you a blessing! You feel stronger and wiser!`,
            rewards: { exp: 500, gold: 500 },
          },
          {
            weight: 40,
            type: "neutral",
            text: `The orb glows briefly but nothing happens.`,
            rewards: { exp: 100 },
          },
          {
            weight: 20,
            type: "bad",
            text: `The orb shocks you with dark energy! You feel weakened.`,
            rewards: { damage: 100, exp: -100 },
          },
        ],
      },
      
      talk: {
        label: "💬 Pray",
        outcomes: [
          {
            weight: 70,
            type: "good",
            text: `Your prayer is answered! You receive a divine blessing!`,
            rewards: { exp: 300, items: [{ id: "elixir", qty: 2 }] },
          },
          {
            weight: 30,
            type: "neutral",
            text: `You pray silently. You feel at peace.`,
            rewards: { exp: 150 },
          },
        ],
      },
      
      leave: {
        label: "🚶 Leave",
        outcomes: [
          {
            weight: 100,
            type: "neutral",
            text: `You respectfully leave the shrine undisturbed.`,
            rewards: { exp: 50 },
          },
        ],
      },
    },
  },

  // ═══════════════════════════════════════════════════════
  // WILD ANIMAL
  // ═══════════════════════════════════════════════════════
  wild_animal: {
    id: "wild_animal",
    title: "🐺 Wild Animal",
    description:
      `A large wolf blocks your path, growling menacingly.\n\n` +
      `Its eyes are locked on you, and it looks hungry.\n\n` +
      `What will you do?`,
    
    emoji: "🐺",
    rarity: "common",
    locations: ["peaceful_forest", "dark_forest", "mountain_path"],
    
    choices: {
      fight: {
        label: "⚔️ Fight",
        outcomes: [
          {
            weight: 60,
            type: "good",
            text: `You defeat the wolf and claim its pelt!`,
            rewards: { exp: 200, items: [{ id: "leather", qty: 5 }] },
          },
          {
            weight: 40,
            type: "bad",
            text: `You fight the wolf but get bitten badly.`,
            rewards: { exp: 100, damage: 60 },
          },
        ],
      },
      
      run: {
        label: "🏃 Run",
        outcomes: [
          {
            weight: 80,
            type: "neutral",
            text: `You run away successfully. The wolf doesn't chase you.`,
            rewards: { exp: 30 },
          },
          {
            weight: 20,
            type: "bad",
            text: `The wolf chases you! You escape but drop some items in the panic.`,
            rewards: { gold: -100 },
          },
        ],
      },
      
      talk: {
        label: "💬 Calm It",
        outcomes: [
          {
            weight: 50,
            type: "good",
            text: `You speak softly and the wolf calms down. It even follows you for a bit before leaving.`,
            rewards: { exp: 150 },
          },
          {
            weight: 50,
            type: "bad",
            text: `The wolf doesn't understand you and attacks!`,
            rewards: { damage: 50, exp: 50 },
          },
        ],
      },
      
      take: {
        label: "🤲 Feed It (Requires: 1x Fresh Fish)",
        requiredItems: [{ id: "fresh_fish", qty: 1 }],
        outcomes: [
          {
            weight: 80,
            type: "good",
            text: `You feed the wolf some fish. It becomes friendly and leads you to a hidden cache!`,
            rewards: { gold: 400, exp: 150 },
          },
          {
            weight: 20,
            type: "neutral",
            text: `You feed the wolf and it leaves peacefully.`,
            rewards: { exp: 100 },
          },
        ],
      },
    },
  },

  // ═══════════════════════════════════════════════════════
  // FORTUNE TELLER
  // ═══════════════════════════════════════════════════════
  fortune_teller: {
    id: "fortune_teller",
    title: "🔮 Fortune Teller",
    description:
      `An old woman sits at a small table with a crystal ball.\n\n` +
      `"Cross my palm with silver, and I shall reveal your future..."\n\n` +
      `Her eyes seem to see right through you.`,
    
    emoji: "🔮",
    rarity: "uncommon",
    locations: ["starter_village", "trading_post", "mystic_temple"],
    
    choices: {
      talk: {
        label: "💬 Ask Fortune",
        outcomes: [
          {
            weight: 50,
            type: "good",
            text: `She reveals a vision of great fortune! You feel lucky!\n*Bonus EXP for your next hunt!*`,
            rewards: { exp: 200, gold: -100 },
          },
          {
            weight: 30,
            type: "neutral",
            text: `She tells you vague predictions that could mean anything.`,
            rewards: { gold: -50, exp: 50 },
          },
          {
            weight: 20,
            type: "bad",
            text: `She predicts doom and gloom. You feel cursed.\n*You lose confidence.*`,
            rewards: { gold: -100, exp: -50 },
          },
        ],
      },
      
      leave: {
        label: "🚶 Leave",
        outcomes: [
          {
            weight: 100,
            type: "neutral",
            text: `You politely decline and walk away.`,
            rewards: {},
          },
        ],
      },
      
      take: {
        label: "🤲 Pay Generously (Requires: 300 Gold)",
        requiredGold: 300,
        outcomes: [
          {
            weight: 80,
            type: "good",
            text: `Impressed by your generosity, she gives you a magical charm!`,
            rewards: { gold: -300, items: [{ id: "elixir", qty: 1 }], exp: 150 },
          },
          {
            weight: 20,
            type: "neutral",
            text: `She takes your gold and gives you a generic fortune.`,
            rewards: { gold: -300, exp: 50 },
          },
        ],
      },
    },
  },
};

// ══════════════════════════════════════════════════════════
// HELPER FUNCTIONS
// ══════════════════════════════════════════════════════════

/**
 * Check if player has required items for a choice
 * @param {object} choice 
 * @param {object} playerBag - { itemId: quantity }
 * @returns {boolean}
 */
export function hasRequiredItems(choice, playerBag) {
  if (!choice.requiredItems) return true;
  
  for (const required of choice.requiredItems) {
    const playerAmount = playerBag[required.id] || 0;
    if (playerAmount < required.qty) {
      return false;
    }
  }
  return true;
}

/**
 * Check if player has required gold for a choice
 * @param {object} choice 
 * @param {number} playerGold 
 * @returns {boolean}
 */
export function hasRequiredGold(choice, playerGold) {
  if (!choice.requiredGold) return true;
  return playerGold >= choice.requiredGold;
}

/**
 * Check if player can make a choice
 * @param {object} choice 
 * @param {object} playerBag - { itemId: quantity }
 * @param {number} playerGold 
 * @returns {object} { canChoose: boolean, reason: string }
 */
export function canMakeChoice(choice, playerBag, playerGold) {
  // Check required items
  if (choice.requiredItems) {
    for (const required of choice.requiredItems) {
      const playerAmount = playerBag[required.id] || 0;
      if (playerAmount < required.qty) {
        return {
          canChoose: false,
          reason: `You need ${required.qty}x ${required.id} but only have ${playerAmount}.`
        };
      }
    }
  }
  
  // Check required gold
  if (choice.requiredGold) {
    if (playerGold < choice.requiredGold) {
      return {
        canChoose: false,
        reason: `You need ${choice.requiredGold} gold but only have ${playerGold}.`
      };
    }
  }
  
  return { canChoose: true, reason: null };
}

/**
 * Consume required items from player's bag
 * @param {object} choice 
 * @param {object} playerBag - { itemId: quantity }
 * @returns {object} Updated player bag
 */
export function consumeRequiredItems(choice, playerBag) {
  if (!choice.requiredItems) return playerBag;
  
  const updatedBag = { ...playerBag };
  
  for (const required of choice.requiredItems) {
    if (updatedBag[required.id]) {
      updatedBag[required.id] -= required.qty;
      if (updatedBag[required.id] <= 0) {
        delete updatedBag[required.id];
      }
    }
  }
  
  return updatedBag;
}

/**
 * Get a random story encounter for a location
 * @param {string} locationId 
 * @returns {object|null}
 */
export function getRandomEncounter(locationId) {
  // Filter encounters that can appear at this location
  const available = Object.values(storyEncounters).filter((encounter) => {
    return encounter.locations.includes("all") || encounter.locations.includes(locationId);
  });

  if (available.length === 0) return null;

  // Random selection
  const randomIndex = Math.floor(Math.random() * available.length);
  return available[randomIndex];
}

/**
 * Get encounter by ID
 * @param {string} encounterId 
 * @returns {object|null}
 */
export function getEncounterById(encounterId) {
  return storyEncounters[encounterId] || null;
}

/**
 * Process a choice and get outcome
 * @param {object} encounter 
 * @param {string} choiceKey 
 * @returns {object}
 */
export function processChoice(encounter, choiceKey) {
  const choice = encounter.choices[choiceKey];
  if (!choice) return null;

  // Calculate weighted random outcome
  const totalWeight = choice.outcomes.reduce((sum, o) => sum + o.weight, 0);
  let random = Math.random() * totalWeight;

  for (const outcome of choice.outcomes) {
    random -= outcome.weight;
    if (random <= 0) {
      return {
        choice: choice.label,
        ...outcome,
      };
    }
  }

  // Fallback to first outcome
  return {
    choice: choice.label,
    ...choice.outcomes[0],
  };
}

/**
 * Get available choices for an encounter with requirement checks
 * @param {object} encounter 
 * @param {object} playerBag - { itemId: quantity }
 * @param {number} playerGold 
 * @returns {array}
 */
export function getAvailableChoices(encounter, playerBag = {}, playerGold = 0) {
  return Object.keys(encounter.choices).map((key) => {
    const choice = encounter.choices[key];
    const canMake = canMakeChoice(choice, playerBag, playerGold);
    
    return {
      key,
      label: choice.label,
      canChoose: canMake.canChoose,
      reason: canMake.reason,
      requiredItems: choice.requiredItems || null,
      requiredGold: choice.requiredGold || null,
    };
  });
}

export default {
  storyEncounters,
  getRandomEncounter,
  getEncounterById,
  processChoice,
  getAvailableChoices,
  hasRequiredItems,
  hasRequiredGold,
  canMakeChoice,
  consumeRequiredItems,
};
