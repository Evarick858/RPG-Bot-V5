/*
  RPG Session Manager
  Centralized session storage for all minigames
  
  This ensures all modules access the SAME session Maps,
  preventing module scope issues with hot-reloading.
*/

// Singleton session Maps
export const fishingSessions = new Map();
export const miningSessions = new Map();
export const choppingSessions = new Map();
export const foragingSessions = new Map();
export const combatSessions = new Map();
export const storySessions = new Map(); // Story encounter sessions
export const pvpChallenges = new Map(); // PVP challenge requests
export const campSessions = new Map(); // Camp/Inn resting sessions
export const searchingSessions = new Map(); // Pet taming and searching sessions
export const tradeSessions = new Map(); // Trade offer sessions

// Debug helper
export function debugSessions() {
  console.log(`[SESSION MANAGER] Active sessions:`);
  console.log(`  Fishing: ${fishingSessions.size}`);
  console.log(`  Mining: ${miningSessions.size}`);
  console.log(`  Chopping: ${choppingSessions.size}`);
  console.log(`  Foraging: ${foragingSessions.size}`);
  console.log(`  Combat: ${combatSessions.size}`);
  console.log(`  Story: ${storySessions.size}`);
  console.log(`  PVP Challenges: ${pvpChallenges.size}`);
  console.log(`  Camp/Inn: ${campSessions.size}`);
  console.log(`  Searching: ${searchingSessions.size}`);
  console.log(`  Trade Offers: ${tradeSessions.size}`);
}

export default {
  fishingSessions,
  miningSessions,
  choppingSessions,
  foragingSessions,
  combatSessions,
  storySessions,
  pvpChallenges,
  campSessions,
  searchingSessions,
  tradeSessions,
  debugSessions,
};
