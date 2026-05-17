/*
  RPG Reputation System
  Base : Lenwy SCM — RPG Extension

  Reputation affects gameplay:
  - Good: +10% quest gold rewards
  - Evil: Lose 50% gold and 5 items when killed in ambush
  
  Reputation ranges:
  - Saint: 1000+
  - Hero: 500-999
  - Good: 100-499
  - Neutral: -99 to 99
  - Rogue: -100 to -499
  - Villain: -500 to -999
  - Demon: -1000 or less
*/

// ── Reputation Tiers ─────────────────────────────────────

export const reputationTiers = {
  saint: { min: 1000, name: "Saint", emoji: "😇", color: "gold" },
  hero: { min: 500, name: "Hero", emoji: "🦸", color: "blue" },
  good: { min: 100, name: "Good", emoji: "😊", color: "green" },
  neutral: { min: -99, name: "Neutral", emoji: "😐", color: "gray" },
  rogue: { min: -500, name: "Rogue", emoji: "😈", color: "orange" },
  villain: { min: -1000, name: "Villain", emoji: "👿", color: "red" },
  demon: { min: -Infinity, name: "Demon", emoji: "💀", color: "black" }
};

// ── Reputation Functions ─────────────────────────────────

/**
 * Get reputation tier from reputation points
 */
export function getReputationTier(reputation) {
  if (reputation >= 1000) return reputationTiers.saint;
  if (reputation >= 500) return reputationTiers.hero;
  if (reputation >= 100) return reputationTiers.good;
  if (reputation >= -99) return reputationTiers.neutral;
  if (reputation >= -500) return reputationTiers.rogue;
  if (reputation >= -1000) return reputationTiers.villain;
  return reputationTiers.demon;
}

/**
 * Check if player is good (reputation >= 100)
 */
export function isGoodReputation(reputation) {
  return reputation >= 100;
}

/**
 * Check if player is evil (reputation <= -100)
 */
export function isEvilReputation(reputation) {
  return reputation <= -100;
}

/**
 * Calculate quest gold bonus for good players
 */
export function getQuestGoldBonus(reputation, baseGold) {
  if (isGoodReputation(reputation)) {
    return Math.floor(baseGold * 0.10); // 10% bonus
  }
  return 0;
}

/**
 * Add reputation points
 */
export function addReputation(player, amount, reason = "") {
  if (!player.reputation) {
    player.reputation = 0;
  }
  
  player.reputation += amount;
  
  // Track reputation history
  if (!player.reputationHistory) {
    player.reputationHistory = [];
  }
  
  player.reputationHistory.push({
    amount: amount,
    reason: reason,
    timestamp: new Date().toISOString(),
    newTotal: player.reputation
  });
  
  // Keep only last 50 entries
  if (player.reputationHistory.length > 50) {
    player.reputationHistory = player.reputationHistory.slice(-50);
  }
}

/**
 * Reputation changes for actions
 */
export const reputationChanges = {
  // Good actions
  completeQuest: 5,
  helpPlayer: 10,
  giveGift: 3,
  
  // Evil actions
  placeBounty: -20,
  killBountiedPlayer: -10,
  ambushPlayer: -15,
  
  // Neutral
  winPvP: 0,
  losePvP: 0
};

export default {
  reputationTiers,
  getReputationTier,
  isGoodReputation,
  isEvilReputation,
  getQuestGoldBonus,
  addReputation,
  reputationChanges
};
