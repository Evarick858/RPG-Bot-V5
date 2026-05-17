/*
  RPG Quest System
  Base : Lenwy SCM — RPG Extension

  Quest types: daily, weekly, monthly
  Auto-resets based on time period
*/

// ── Quest Definitions ────────────────────────────────────

export const dailyQuests = [
  {
    id: "daily_hunt_5",
    name: "Monster Slayer",
    description: "Defeat 5 monsters",
    type: "combat",
    target: 5,
    rewards: {
      gold: 100,
      exp: 50,
      items: [{ id: "health_potion", qty: 2 }]
    }
  },
  {
    id: "daily_gather_10",
    name: "Resource Gatherer",
    description: "Gather 10 resources (fish/mine/chop/forage)",
    type: "gathering",
    target: 10,
    rewards: {
      gold: 80,
      exp: 40,
      items: [{ id: "mana_potion", qty: 2 }]
    }
  },
  {
    id: "daily_gold_500",
    name: "Wealthy Adventurer",
    description: "Earn 500 gold",
    type: "gold_earned",
    target: 500,
    rewards: {
      gold: 150,
      exp: 60,
      items: [{ id: "elixir", qty: 1 }]
    }
  },
  {
    id: "daily_travel_3",
    name: "Explorer",
    description: "Travel to 3 different locations",
    type: "travel",
    target: 3,
    rewards: {
      gold: 120,
      exp: 50,
      items: [{ id: "teleport_scroll", qty: 1 }]
    }
  },
  {
    id: "daily_craft_5",
    name: "Master Crafter",
    description: "Craft 5 items",
    type: "crafting",
    target: 5,
    rewards: {
      gold: 100,
      exp: 70,
      items: [{ id: "iron_ore", qty: 5 }]
    }
  }
];

export const weeklyQuests = [
  {
    id: "weekly_hunt_30",
    name: "Monster Exterminator",
    description: "Defeat 30 monsters",
    type: "combat",
    target: 30,
    rewards: {
      gold: 500,
      exp: 300,
      items: [
        { id: "health_potion", qty: 10 },
        { id: "mana_potion", qty: 10 }
      ]
    }
  },
  {
    id: "weekly_pvp_5",
    name: "Arena Champion",
    description: "Win 5 PVP battles",
    type: "pvp_wins",
    target: 5,
    rewards: {
      gold: 800,
      exp: 400,
      items: [{ id: "legendary_chest", qty: 1 }]
    }
  },
  {
    id: "weekly_gather_50",
    name: "Resource Master",
    description: "Gather 50 resources",
    type: "gathering",
    target: 50,
    rewards: {
      gold: 400,
      exp: 250,
      items: [{ id: "elixir", qty: 3 }]
    }
  },
  {
    id: "weekly_gold_5000",
    name: "Treasure Hunter",
    description: "Earn 5000 gold",
    type: "gold_earned",
    target: 5000,
    rewards: {
      gold: 1000,
      exp: 500,
      items: [{ id: "gold_pouch", qty: 1 }]
    }
  },
  {
    id: "weekly_pet_level_5",
    name: "Pet Trainer",
    description: "Level up pets 5 times",
    type: "pet_levels",
    target: 5,
    rewards: {
      gold: 600,
      exp: 350,
      items: [{ id: "pet_food", qty: 10 }]
    }
  }
];

export const monthlyQuests = [
  {
    id: "monthly_hunt_200",
    name: "Legendary Hunter",
    description: "Defeat 200 monsters",
    type: "combat",
    target: 200,
    rewards: {
      gold: 3000,
      exp: 2000,
      items: [
        { id: "legendary_chest", qty: 2 },
        { id: "elixir", qty: 10 }
      ]
    }
  },
  {
    id: "monthly_pvp_20",
    name: "PVP Master",
    description: "Win 20 PVP battles",
    type: "pvp_wins",
    target: 20,
    rewards: {
      gold: 5000,
      exp: 3000,
      items: [
        { id: "mythic_chest", qty: 1 },
        { id: "legendary_chest", qty: 3 }
      ]
    }
  },
  {
    id: "monthly_gather_300",
    name: "Grand Gatherer",
    description: "Gather 300 resources",
    type: "gathering",
    target: 300,
    rewards: {
      gold: 2500,
      exp: 1500,
      items: [{ id: "elixir", qty: 15 }]
    }
  },
  {
    id: "monthly_gold_50000",
    name: "Millionaire",
    description: "Earn 50000 gold",
    type: "gold_earned",
    target: 50000,
    rewards: {
      gold: 10000,
      exp: 5000,
      items: [{ id: "treasure_chest", qty: 5 }]
    }
  },
  {
    id: "monthly_craft_50",
    name: "Grandmaster Crafter",
    description: "Craft 50 items",
    type: "crafting",
    target: 50,
    rewards: {
      gold: 3500,
      exp: 2500,
      items: [
        { id: "crafting_kit", qty: 1 },
        { id: "rare_materials", qty: 10 }
      ]
    }
  },
  {
    id: "monthly_complete_all",
    name: "Quest Master",
    description: "Complete all daily and weekly quests this month",
    type: "quest_completion",
    target: 1,
    rewards: {
      gold: 15000,
      exp: 10000,
      items: [
        { id: "mythic_chest", qty: 2 },
        { id: "title_quest_master", qty: 1 }
      ]
    }
  }
];

// ── Quest Helper Functions ───────────────────────────────

/**
 * Get quest by ID
 */
export function getQuestById(questId) {
  const allQuests = [...dailyQuests, ...weeklyQuests, ...monthlyQuests];
  return allQuests.find(q => q.id === questId);
}

/**
 * Get quests by type
 */
export function getQuestsByType(type) {
  switch (type) {
    case "daily":
      return dailyQuests;
    case "weekly":
      return weeklyQuests;
    case "monthly":
      return monthlyQuests;
    default:
      return [];
  }
}

/**
 * Check if quest period has reset
 */
export function shouldResetQuests(lastReset, period) {
  if (!lastReset) return true;
  
  const now = new Date();
  const last = new Date(lastReset);
  
  switch (period) {
    case "daily":
      // Reset at midnight
      return now.toDateString() !== last.toDateString();
    
    case "weekly":
      // Reset on Monday
      const daysSinceMonday = (now.getDay() + 6) % 7;
      const thisMonday = new Date(now);
      thisMonday.setDate(now.getDate() - daysSinceMonday);
      thisMonday.setHours(0, 0, 0, 0);
      return last < thisMonday;
    
    case "monthly":
      // Reset on 1st of month
      return now.getMonth() !== last.getMonth() || now.getFullYear() !== last.getFullYear();
    
    default:
      return false;
  }
}

/**
 * Initialize player quest data
 */
export function initPlayerQuests() {
  return {
    daily: {
      lastReset: new Date().toISOString(),
      quests: dailyQuests.map(q => ({
        id: q.id,
        progress: 0,
        completed: false,
        claimed: false
      }))
    },
    weekly: {
      lastReset: new Date().toISOString(),
      quests: weeklyQuests.map(q => ({
        id: q.id,
        progress: 0,
        completed: false,
        claimed: false
      }))
    },
    monthly: {
      lastReset: new Date().toISOString(),
      quests: monthlyQuests.map(q => ({
        id: q.id,
        progress: 0,
        completed: false,
        claimed: false
      }))
    }
  };
}

/**
 * Reset quests for a period
 */
export function resetQuestsForPeriod(playerQuests, period) {
  const questList = getQuestsByType(period);
  
  playerQuests[period] = {
    lastReset: new Date().toISOString(),
    quests: questList.map(q => ({
      id: q.id,
      progress: 0,
      completed: false,
      claimed: false
    }))
  };
}

/**
 * Update quest progress
 */
export function updateQuestProgress(playerQuests, questType, amount = 1) {
  const periods = ["daily", "weekly", "monthly"];
  
  for (const period of periods) {
    if (!playerQuests[period]) continue;
    
    // Check if needs reset
    if (shouldResetQuests(playerQuests[period].lastReset, period)) {
      resetQuestsForPeriod(playerQuests, period);
    }
    
    // Update matching quests
    for (const quest of playerQuests[period].quests) {
      if (quest.completed) continue;
      
      const questDef = getQuestById(quest.id);
      if (!questDef || questDef.type !== questType) continue;
      
      quest.progress = Math.min(quest.progress + amount, questDef.target);
      
      if (quest.progress >= questDef.target) {
        quest.completed = true;
      }
    }
  }
}

export default {
  dailyQuests,
  weeklyQuests,
  monthlyQuests,
  getQuestById,
  getQuestsByType,
  shouldResetQuests,
  initPlayerQuests,
  resetQuestsForPeriod,
  updateQuestProgress
};
