/*
  RPG Command: party
  Base : Lenwy SCM — RPG Extension

  Party management commands:
  - party create
  - party invite @user
  - party accept
  - party decline
  - party leave
  - party kick @user
  - party (show info)
*/

import {
  createParty,
  getPlayerParty,
  inviteToParty,
  acceptPartyInvite,
  declinePartyInvite,
  leaveParty,
  kickFromParty,
  getPartyInfo,
} from "../../database/rpg/partySystem.js";
import fs from "fs";
import path from "path";
import { getLanguage, getText, getPlayerLanguage } from "../../database/rpg/languages.js";

const playersPath = path.join(process.cwd(), "WhatsApp", "database", "rpg", "players.json");

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

export async function handlePartyCommand(lenwy, m, args, context) {
  const { normalizedSender, replyJid } = context;
  const playerJid = normalizedSender;
  const subCommand = args[0]?.toLowerCase();

  // No subcommand - show party info
  if (!subCommand) {
    const result = getPartyInfo(playerJid);
    return await lenwy.sendMessage(replyJid, { text: result.message });
  }

  // Subcommands
  switch (subCommand) {
    case "create":
      return await handlePartyCreate(lenwy, replyJid, playerJid);

    case "invite":
      return await handlePartyInvite(lenwy, m, playerJid);

    case "accept":
      return await handlePartyAccept(lenwy, replyJid, playerJid);

    case "decline":
      return await handlePartyDecline(lenwy, replyJid, playerJid);

    case "leave":
      return await handlePartyLeave(lenwy, replyJid, playerJid);

    case "kick":
      return await handlePartyKick(lenwy, m, playerJid);

    case "info":
      const result = getPartyInfo(playerJid);
      return await lenwy.sendMessage(replyJid, { text: result.message });

    default:
      const prefix = globalThis.noprefix ? "" : "!";
      const players = loadPlayers();
      const player = players[playerJid];
      const lang = player ? getLanguage(getPlayerLanguage(player)) : getLanguage("en");
      
      return await lenwy.sendMessage(replyJid, {
        text: getText(lang, "party.unknownCommand", { prefix })
      });
  }
}

async function handlePartyCreate(lenwy, replyJid, playerJid) {
  const result = createParty(playerJid);
  return await lenwy.sendMessage(replyJid, { text: result.message });
}

async function handlePartyInvite(lenwy, m, playerJid) {
  const replyJid = m.key.remoteJid;
  const players = loadPlayers();
  const player = players[playerJid];
  const lang = player ? getLanguage(getPlayerLanguage(player)) : getLanguage("en");

  // Get mentioned user
  const mentioned = m.message?.extendedTextMessage?.contextInfo?.mentionedJid?.[0];
  if (!mentioned) {
    return await lenwy.sendMessage(replyJid, {
      text: getText(lang, "party.mentionToInvite"),
    });
  }

  const result = inviteToParty(playerJid, mentioned);

  // If successful, notify the invited player
  if (result.success) {
    const party = getPlayerParty(playerJid);
    if (party) {
      const invitee = players[mentioned];
      const inviteeLang = invitee ? getLanguage(getPlayerLanguage(invitee)) : getLanguage("en");
      
      // Send notification to invited player
      await lenwy.sendMessage(mentioned, {
        text: getText(inviteeLang, "party.inviteReceived", { count: party.members.length })
      });
    }
  }

  return await lenwy.sendMessage(replyJid, { text: result.message });
}

async function handlePartyAccept(lenwy, replyJid, playerJid) {
  const result = acceptPartyInvite(playerJid);

  // If successful, notify the party
  if (result.success) {
    const party = getPlayerParty(playerJid);
    if (party) {
      const players = loadPlayers();
      // Notify all party members
      for (const memberJid of party.members) {
        if (memberJid !== playerJid) {
          const member = players[memberJid];
          const memberLang = member ? getLanguage(getPlayerLanguage(member)) : getLanguage("en");
          
          await lenwy.sendMessage(memberJid, {
            text: getText(memberLang, "party.memberJoined", { count: party.members.length }),
          });
        }
      }
    }
  }

  return await lenwy.sendMessage(replyJid, { text: result.message });
}

async function handlePartyDecline(lenwy, replyJid, playerJid) {
  const result = declinePartyInvite(playerJid);
  return await lenwy.sendMessage(replyJid, { text: result.message });
}

async function handlePartyLeave(lenwy, replyJid, playerJid) {
  const party = getPlayerParty(playerJid);
  const result = leaveParty(playerJid);
  const players = loadPlayers();

  // If successful and party disbanded, notify all members
  if (result.success && result.disbanded && party) {
    for (const memberJid of party.members) {
      if (memberJid !== playerJid) {
        const member = players[memberJid];
        const memberLang = member ? getLanguage(getPlayerLanguage(member)) : getLanguage("en");
        
        await lenwy.sendMessage(memberJid, {
          text: getText(memberLang, "party.disbanded"),
        });
      }
    }
  }
  // If successful but not disbanded, notify remaining members
  else if (result.success && !result.disbanded && party) {
    for (const memberJid of party.members) {
      if (memberJid !== playerJid) {
        const member = players[memberJid];
        const memberLang = member ? getLanguage(getPlayerLanguage(member)) : getLanguage("en");
        
        await lenwy.sendMessage(memberJid, {
          text: getText(memberLang, "party.memberLeft", { count: party.members.length }),
        });
      }
    }
  }

  return await lenwy.sendMessage(replyJid, { text: result.message });
}

async function handlePartyKick(lenwy, m, playerJid) {
  const replyJid = m.key.remoteJid;
  const players = loadPlayers();
  const player = players[playerJid];
  const lang = player ? getLanguage(getPlayerLanguage(player)) : getLanguage("en");

  // Get mentioned user
  const mentioned = m.message?.extendedTextMessage?.contextInfo?.mentionedJid?.[0];
  if (!mentioned) {
    return await lenwy.sendMessage(replyJid, {
      text: getText(lang, "party.mentionToKick"),
    });
  }

  const party = getPlayerParty(playerJid);
  const result = kickFromParty(playerJid, mentioned);

  // If successful, notify the kicked player and remaining members
  if (result.success) {
    const kickedPlayer = players[mentioned];
    const kickedLang = kickedPlayer ? getLanguage(getPlayerLanguage(kickedPlayer)) : getLanguage("en");
    
    // Notify kicked player
    await lenwy.sendMessage(mentioned, {
      text: getText(kickedLang, "party.youWereKicked"),
    });

    // Notify remaining party members
    if (party) {
      for (const memberJid of party.members) {
        if (memberJid !== playerJid && memberJid !== mentioned) {
          const member = players[memberJid];
          const memberLang = member ? getLanguage(getPlayerLanguage(member)) : getLanguage("en");
          
          await lenwy.sendMessage(memberJid, {
            text: getText(memberLang, "party.memberKicked", { count: party.members.length }),
          });
        }
      }
    }
  }

  return await lenwy.sendMessage(replyJid, { text: result.message });
}

export default {
  handlePartyCommand,
};
