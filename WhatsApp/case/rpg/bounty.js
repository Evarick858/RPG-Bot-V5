/*
  RPG Command : bounty
  Base : Lenwy SCM — RPG Extension

  Bounty System:
  - Place bounties on players
  - View active bounties
  - Claim bounties by killing bountied players
  
  Usage:
  - bounty - View all active bounties
  - bounty @player <amount> - Place bounty
  - bounty <name> <amount> - Place bounty by name
*/

import fs from "fs";
import path from "path";
import { placeBounty, getAllBounties, getBounty } from "../../database/rpg/bountySystem.js";
import { addReputation, reputationChanges } from "../../database/rpg/reputation.js";
import { getLanguage, getText, getPlayerLanguage } from "../../database/rpg/languages.js";

const playersPath = path.join(process.cwd(), "WhatsApp", "database", "rpg", "players.json");

// ── Helpers ──────────────────────────────────────────────

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

// ── Command export ───────────────────────────────────────

export const info = {
  name: "Bounty",
  menu: ["bounty"],
  case: ["bounty"],
  description: "Place bounties on players or view wanted list.",
  hidden: false,
  owner: false,
  premium: false,
  group: false,
  private: false,
  admin: false,
  botAdmin: false,
  allowPrivate: true,
};

export default async function handler(leni) {
  const { lenwy, replyJid, normalizedSender, LenwyText, args, m } = leni;

  const botJid = lenwy.user?.id?.split(":")[0] + "@s.whatsapp.net";
  if (normalizedSender === botJid) return;

  const players = loadPlayers();
  const placer = players[normalizedSender];

  if (!placer) {
    const lang = getLanguage("en");
    return LenwyText(getText(lang, "common.notRegisteredFull"));
  }
  
  const lang = getLanguage(getPlayerLanguage(placer));

  // If no args, show all bounties
  if (args.length === 0) {
    const bounties = getAllBounties();
    
    if (bounties.length === 0) {
      return LenwyText(getText(lang, "bounty.title") + "\n\n" + getText(lang, "bounty.noBounties"));
    }
    
    let message = getText(lang, "bounty.title") + "\n\n";
    message += getText(lang, "bounty.activeBounties", { count: bounties.length }) + "\n\n";
    message += `========================\n\n`;
    
    for (let i = 0; i < Math.min(bounties.length, 10); i++) {
      const bounty = bounties[i];
      message += `${i + 1}. *${bounty.targetName}*\n`;
      message += getText(lang, "bounty.bountyAmount", { amount: bounty.totalBounty }) + "\n";
      message += getText(lang, "bounty.placedBy", { count: bounty.bounties.length }) + "\n\n";
    }
    
    if (bounties.length > 10) {
      message += getText(lang, "bounty.andMore", { count: bounties.length - 10 }) + "\n\n";
    }
    
    message += `========================\n\n`;
    message += getText(lang, "bounty.claimHint");
    
    return LenwyText(message);
  }

  // Parse command: bounty <player> <amount>
  if (args.length < 2) {
    return LenwyText(getText(lang, "bounty.usage"));
  }

  // Get target player
  let targetJid = null;
  let targetName = args[0];
  let amount = parseInt(args[args.length - 1]);

  // Check for mention
  if (m.message?.extendedTextMessage?.contextInfo?.mentionedJid?.length > 0) {
    targetJid = m.message.extendedTextMessage.contextInfo.mentionedJid[0];
    amount = parseInt(args[1]);
  } else {
    // Search by name
    targetName = args.slice(0, -1).join(" ");
    const found = Object.entries(players).find(([jid, p]) => 
      p.name.toLowerCase() === targetName.toLowerCase()
    );
    if (found) {
      targetJid = found[0];
    }
  }

  if (!targetJid) {
    return LenwyText(getText(lang, "bounty.playerNotFound", { name: targetName }));
  }

  const target = players[targetJid];
  if (!target) {
    return LenwyText(getText(lang, "bounty.notRegistered"));
  }

  // Can't bounty yourself
  if (targetJid === normalizedSender) {
    return LenwyText(getText(lang, "bounty.cantBountySelf"));
  }

  // Validate amount
  if (isNaN(amount) || amount < 100) {
    return LenwyText(getText(lang, "bounty.invalidAmount"));
  }

  // Check if placer has enough gold
  if (placer.gold < amount) {
    return LenwyText(getText(lang, "bounty.notEnoughGold", { have: placer.gold, need: amount }));
  }

  // Deduct gold
  placer.gold -= amount;
  
  // Add reputation penalty for placing bounty
  addReputation(placer, reputationChanges.placeBounty, "Placed bounty");
  
  placer.lastActive = new Date().toISOString();
  players[normalizedSender] = placer;
  savePlayers(players);

  // Place bounty
  const totalBounty = placeBounty(targetJid, target.name, normalizedSender, placer.name, amount);

  // Notify placer
  await LenwyText(getText(lang, "bounty.placed", {
    amount,
    target: target.name,
    total: totalBounty,
    gold: placer.gold,
    rep: reputationChanges.placeBounty
  }));

  // Notify target
  try {
    const targetLang = getLanguage(getPlayerLanguage(target));
    await lenwy.sendMessage(targetJid, {
      text: getText(targetLang, "bounty.alert", {
        placer: placer.name,
        amount,
        total: totalBounty
      })
    });
  } catch (err) {
    console.log("[BOUNTY] Could not notify target:", err.message);
  }
}
