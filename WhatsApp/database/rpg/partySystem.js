/*
  RPG Party System
  Base : Lenwy SCM — RPG Extension

  Party Features:
  - Max 5 players per party
  - Party leader controls dungeon start
  - Players can invite, accept, leave, kick
  - Party disbands when leader leaves or dungeon ends
*/

import fs from "fs";
import path from "path";
import { getLanguage, getText, getPlayerLanguage } from "./languages.js";

const playersPath = path.join(process.cwd(), "WhatsApp", "database", "rpg", "players.json");

// Active parties storage (in-memory)
// Structure: { partyId: { leader: jid, members: [jid1, jid2...], dungeon: null, created: timestamp } }
export const activeParties = new Map();

// Party invites storage (in-memory)
// Structure: { inviteeJid: { inviterJid, partyId, timestamp } }
export const partyInvites = new Map();

// ══════════════════════════════════════════════════════════
// HELPER FUNCTIONS
// ══════════════════════════════════════════════════════════

function loadPlayers() {
  try {
    const data = JSON.parse(fs.readFileSync(playersPath, "utf8"));
    const players = { ...data };
    delete players._comment;
    delete players._template;
    return players;
  } catch {
    return {};
  }
}

function savePlayers(players) {
  const raw = fs.readFileSync(playersPath, "utf8");
  const data = JSON.parse(raw);
  const updated = { _comment: data._comment, _template: data._template, ...players };
  fs.writeFileSync(playersPath, JSON.stringify(updated, null, 2), "utf8");
}

function generatePartyId() {
  return `party_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
}

// ══════════════════════════════════════════════════════════
// PARTY MANAGEMENT
// ══════════════════════════════════════════════════════════

/**
 * Create a new party
 * @param {string} leaderJid - Party leader's JID
 * @returns {object} { success: boolean, partyId?: string, message: string }
 */
export function createParty(leaderJid) {
  const players = loadPlayers();
  const player = players[leaderJid];
  const lang = player ? getLanguage(getPlayerLanguage(player)) : getLanguage("en");
  
  // Check if already in a party
  const existingParty = getPlayerParty(leaderJid);
  if (existingParty) {
    return { success: false, message: getText(lang, "party.alreadyInParty") };
  }

  const partyId = generatePartyId();
  const party = {
    id: partyId,
    leader: leaderJid,
    members: [leaderJid],
    dungeon: null,
    inDungeon: false,
    created: Date.now(),
  };

  activeParties.set(partyId, party);

  return {
    success: true,
    partyId,
    message: getText(lang, "party.created"),
  };
}

/**
 * Get party by ID
 * @param {string} partyId - Party ID
 * @returns {object|null} Party object or null
 */
export function getParty(partyId) {
  return activeParties.get(partyId) || null;
}

/**
 * Get player's current party
 * @param {string} playerJid - Player's JID
 * @returns {object|null} Party object or null
 */
export function getPlayerParty(playerJid) {
  for (const [partyId, party] of activeParties.entries()) {
    if (party.members.includes(playerJid)) {
      return party;
    }
  }
  return null;
}

/**
 * Invite player to party
 * @param {string} inviterJid - Inviter's JID
 * @param {string} inviteeJid - Invitee's JID
 * @returns {object} { success: boolean, message: string }
 */
export function inviteToParty(inviterJid, inviteeJid) {
  const players = loadPlayers();
  const inviter = players[inviterJid];
  const lang = inviter ? getLanguage(getPlayerLanguage(inviter)) : getLanguage("en");
  
  // Check if inviter is in a party
  const party = getPlayerParty(inviterJid);
  if (!party) {
    return { success: false, message: getText(lang, "party.noParty") };
  }

  // Check if inviter is the leader
  if (party.leader !== inviterJid) {
    return { success: false, message: getText(lang, "party.notLeader") };
  }

  // Check if party is full
  if (party.members.length >= 5) {
    return { success: false, message: getText(lang, "party.partyFull") };
  }

  // Check if party is in dungeon
  if (party.inDungeon) {
    return { success: false, message: getText(lang, "party.cannotInviteInDungeon") };
  }

  // Check if invitee is already in a party
  const inviteeParty = getPlayerParty(inviteeJid);
  if (inviteeParty) {
    return { success: false, message: getText(lang, "party.targetInParty") };
  }

  // Check if invitee already has a pending invite
  if (partyInvites.has(inviteeJid)) {
    return { success: false, message: getText(lang, "party.alreadyInvited") };
  }

  // Check if inviting self
  if (inviterJid === inviteeJid) {
    return { success: false, message: getText(lang, "party.cannotInviteSelf") };
  }

  // Create invite
  partyInvites.set(inviteeJid, {
    inviterJid,
    partyId: party.id,
    timestamp: Date.now(),
  });

  // Auto-expire invite after 2 minutes
  setTimeout(() => {
    if (partyInvites.has(inviteeJid)) {
      partyInvites.delete(inviteeJid);
    }
  }, 120000);
  
  const inviteeName = players[inviteeJid]?.name || inviteeJid.split("@")[0];

  return {
    success: true,
    message: getText(lang, "party.inviteSent", { name: inviteeName }),
  };
}

/**
 * Accept party invite
 * @param {string} playerJid - Player's JID
 * @returns {object} { success: boolean, message: string, partyId?: string }
 */
export function acceptPartyInvite(playerJid) {
  const players = loadPlayers();
  const player = players[playerJid];
  const lang = player ? getLanguage(getPlayerLanguage(player)) : getLanguage("en");
  
  // Check if player has a pending invite
  const invite = partyInvites.get(playerJid);
  if (!invite) {
    return { success: false, message: getText(lang, "party.noInvite") };
  }

  // Check if party still exists
  const party = getParty(invite.partyId);
  if (!party) {
    partyInvites.delete(playerJid);
    return { success: false, message: getText(lang, "party.inviteExpired") };
  }

  // Check if party is full
  if (party.members.length >= 5) {
    partyInvites.delete(playerJid);
    return { success: false, message: getText(lang, "party.partyFull") };
  }

  // Check if party is in dungeon
  if (party.inDungeon) {
    partyInvites.delete(playerJid);
    return { success: false, message: getText(lang, "party.partyAlreadyInDungeon") };
  }

  // Add player to party
  party.members.push(playerJid);
  partyInvites.delete(playerJid);

  return {
    success: true,
    partyId: party.id,
    message: getText(lang, "party.joined"),
  };
}

/**
 * Decline party invite
 * @param {string} playerJid - Player's JID
 * @returns {object} { success: boolean, message: string }
 */
export function declinePartyInvite(playerJid) {
  const players = loadPlayers();
  const player = players[playerJid];
  const lang = player ? getLanguage(getPlayerLanguage(player)) : getLanguage("en");
  
  const invite = partyInvites.get(playerJid);
  if (!invite) {
    return { success: false, message: getText(lang, "party.noInvite") };
  }

  partyInvites.delete(playerJid);
  return { success: true, message: getText(lang, "party.declined") };
}

/**
 * Leave party
 * @param {string} playerJid - Player's JID
 * @returns {object} { success: boolean, message: string, disbanded?: boolean }
 */
export function leaveParty(playerJid) {
  const players = loadPlayers();
  const player = players[playerJid];
  const lang = player ? getLanguage(getPlayerLanguage(player)) : getLanguage("en");
  
  const party = getPlayerParty(playerJid);
  if (!party) {
    return { success: false, message: getText(lang, "party.noParty") };
  }

  // Check if in dungeon
  if (party.inDungeon) {
    return { success: false, message: getText(lang, "party.cannotLeaveInDungeon") };
  }

  // If leader leaves, disband party
  if (party.leader === playerJid) {
    activeParties.delete(party.id);
    return {
      success: true,
      disbanded: true,
      message: getText(lang, "party.left"),
    };
  }

  // Remove player from party
  party.members = party.members.filter(jid => jid !== playerJid);

  return {
    success: true,
    disbanded: false,
    message: getText(lang, "party.left"),
  };
}

/**
 * Kick player from party
 * @param {string} leaderJid - Leader's JID
 * @param {string} targetJid - Target player's JID
 * @returns {object} { success: boolean, message: string }
 */
export function kickFromParty(leaderJid, targetJid) {
  const players = loadPlayers();
  const leader = players[leaderJid];
  const lang = leader ? getLanguage(getPlayerLanguage(leader)) : getLanguage("en");
  
  const party = getPlayerParty(leaderJid);
  if (!party) {
    return { success: false, message: getText(lang, "party.noParty") };
  }

  // Check if leader
  if (party.leader !== leaderJid) {
    return { success: false, message: getText(lang, "party.notLeader") };
  }

  // Check if in dungeon
  if (party.inDungeon) {
    return { success: false, message: getText(lang, "party.cannotKickInDungeon") };
  }

  // Check if target is in party
  if (!party.members.includes(targetJid)) {
    return { success: false, message: getText(lang, "party.notInYourParty") };
  }

  // Cannot kick self
  if (leaderJid === targetJid) {
    return { success: false, message: getText(lang, "party.cantKickSelf") };
  }

  // Remove player
  party.members = party.members.filter(jid => jid !== targetJid);

  return {
    success: true,
    message: getText(lang, "party.kicked"),
  };
}

/**
 * Get party info
 * @param {string} playerJid - Player's JID
 * @returns {object} { success: boolean, message: string, party?: object }
 */
export function getPartyInfo(playerJid) {
  const players = loadPlayers();
  const player = players[playerJid];
  const lang = player ? getLanguage(getPlayerLanguage(player)) : getLanguage("en");
  
  const party = getPlayerParty(playerJid);
  if (!party) {
    return { success: false, message: getText(lang, "party.noParty") };
  }

  const memberList = party.members.map((jid, index) => {
    const p = players[jid];
    const isLeader = jid === party.leader;
    const name = p?.name || jid.split("@")[0];
    const level = p?.level || 1;
    const icon = isLeader ? "👑" : "⚔️";
    return `${icon} ${name} (Lv.${level})`;
  }).join("\n");

  const status = party.inDungeon ? getText(lang, "party.inDungeon") : getText(lang, "party.notInDungeon");

  const message = 
    getText(lang, "party.title") + "\n\n" +
    `${status}\n` +
    getText(lang, "party.members", { count: party.members.length }) + ":\n" +
    `${memberList}\n\n` +
    getText(lang, "party.commands") + "\n" +
    getText(lang, "party.inviteCmd") + "\n" +
    getText(lang, "party.leaveCmd") + "\n" +
    getText(lang, "party.kickCmd") + "\n" +
    getText(lang, "party.dungeonStartCmd");

  return {
    success: true,
    party,
    message,
  };
}

/**
 * Disband party (force)
 * @param {string} partyId - Party ID
 */
export function disbandParty(partyId) {
  activeParties.delete(partyId);
}

/**
 * Clean up expired invites (call periodically)
 */
export function cleanupExpiredInvites() {
  const now = Date.now();
  const expireTime = 120000; // 2 minutes

  for (const [jid, invite] of partyInvites.entries()) {
    if (now - invite.timestamp > expireTime) {
      partyInvites.delete(jid);
    }
  }
}

// Auto-cleanup every minute
setInterval(cleanupExpiredInvites, 60000);

// ══════════════════════════════════════════════════════════
// EXPORTS
// ══════════════════════════════════════════════════════════

export default {
  createParty,
  getParty,
  getPlayerParty,
  inviteToParty,
  acceptPartyInvite,
  declinePartyInvite,
  leaveParty,
  kickFromParty,
  getPartyInfo,
  disbandParty,
  activeParties,
  partyInvites,
};
