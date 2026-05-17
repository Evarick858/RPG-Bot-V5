/*
  RPG Bounty System
  Base : Lenwy SCM — RPG Extension

  Players can place bounties on other players
  Bounty hunters can claim rewards by killing bountied players
*/

import fs from "fs";
import path from "path";

const bountyPath = path.join(process.cwd(), "WhatsApp", "database", "rpg", "bounties.json");

// ── Initialize Bounty File ───────────────────────────────

function initBountyFile() {
  if (!fs.existsSync(bountyPath)) {
    const dir = path.dirname(bountyPath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    fs.writeFileSync(bountyPath, JSON.stringify({}, null, 2));
  }
}

// ── Bounty Functions ─────────────────────────────────────

/**
 * Load all bounties
 */
export function loadBounties() {
  initBountyFile();
  try {
    return JSON.parse(fs.readFileSync(bountyPath, "utf8"));
  } catch {
    return {};
  }
}

/**
 * Save bounties
 */
export function saveBounties(bounties) {
  initBountyFile();
  fs.writeFileSync(bountyPath, JSON.stringify(bounties, null, 2));
}

/**
 * Place a bounty on a player
 */
export function placeBounty(targetJid, targetName, placerJid, placerName, amount) {
  const bounties = loadBounties();
  
  if (!bounties[targetJid]) {
    bounties[targetJid] = {
      targetJid: targetJid,
      targetName: targetName,
      totalBounty: 0,
      bounties: []
    };
  }
  
  // Add bounty
  bounties[targetJid].bounties.push({
    placerJid: placerJid,
    placerName: placerName,
    amount: amount,
    timestamp: new Date().toISOString()
  });
  
  bounties[targetJid].totalBounty += amount;
  
  saveBounties(bounties);
  return bounties[targetJid].totalBounty;
}

/**
 * Get bounty on a player
 */
export function getBounty(targetJid) {
  const bounties = loadBounties();
  return bounties[targetJid] || null;
}

/**
 * Get all active bounties
 */
export function getAllBounties() {
  const bounties = loadBounties();
  return Object.values(bounties).sort((a, b) => b.totalBounty - a.totalBounty);
}

/**
 * Claim bounty (when target is killed)
 */
export function claimBounty(targetJid, killerJid) {
  const bounties = loadBounties();
  const bounty = bounties[targetJid];
  
  if (!bounty) return 0;
  
  const totalBounty = bounty.totalBounty;
  
  // Remove bounty
  delete bounties[targetJid];
  saveBounties(bounties);
  
  return totalBounty;
}

/**
 * Check if player has bounty
 */
export function hasBounty(targetJid) {
  const bounty = getBounty(targetJid);
  return bounty && bounty.totalBounty > 0;
}

/**
 * Get bounty count
 */
export function getBountyCount() {
  const bounties = loadBounties();
  return Object.keys(bounties).length;
}

export default {
  loadBounties,
  saveBounties,
  placeBounty,
  getBounty,
  getAllBounties,
  claimBounty,
  hasBounty,
  getBountyCount
};
