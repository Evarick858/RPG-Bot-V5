/*
  RPG Command : accepttrade
  Base : Lenwy SCM — RPG Extension

  Accept a pending trade offer
*/

import fs from "fs";
import path from "path";
import { getLanguage, getText, getPlayerLanguage } from "../../database/rpg/languages.js";
import { tradeSessions } from "../../database/rpg/sessionManager.js";

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

function addToInventory(player, itemId, qty = 1) {
  const existing = player.inventory.find((i) => i.id === itemId);
  if (existing) existing.qty += qty;
  else player.inventory.push({ id: itemId, qty });
}

function removeFromInventory(player, itemId, qty = 1) {
  const existing = player.inventory.find((i) => i.id === itemId);
  if (!existing || existing.qty < qty) return false;
  existing.qty -= qty;
  if (existing.qty <= 0) {
    player.inventory = player.inventory.filter((i) => i.id !== itemId);
  }
  return true;
}

// ── Command export ───────────────────────────────────────

export const info = {
  name: "AcceptTrade",
  menu: ["accepttrade"],
  case: ["accepttrade"],
  description: "Accept a pending trade offer.",
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
  const { lenwy, replyJid, normalizedSender, LenwyText } = leni;

  const botJid = lenwy.user?.id?.split(":")[0] + "@s.whatsapp.net";
  if (normalizedSender === botJid) return;

  const players = loadPlayers();
  const partner = players[normalizedSender];
  const langPartner = partner ? getLanguage(getPlayerLanguage(partner)) : getLanguage("id");

  if (!partner) {
    return LenwyText(getText(langPartner, "acceptTrade.notRegistered"));
  }

  // Check if there's a pending trade
  const trade = tradeSessions.get(normalizedSender);
  if (!trade) {
    return LenwyText(getText(langPartner, "acceptTrade.noTrade"));
  }

  // Get trader data
  const trader = players[trade.traderJid];
  if (!trader) {
    tradeSessions.delete(normalizedSender);
    return LenwyText(getText(langPartner, "acceptTrade.traderGone"));
  }

  const langTrader = getLanguage(getPlayerLanguage(trader));

  const offer = trade.offer;
  const request = trade.request;

  // Re-validate both sides still have what they're trading
  // Validate trader's offer
  if (offer.type === "gold") {
    if (trader.gold < offer.amount) {
      tradeSessions.delete(normalizedSender);
      return LenwyText(getText(langPartner, "acceptTrade.failGoldTrader", { name: trader.name }));
    }
  } else if (offer.type === "pet") {
    const pet = trader.pets.find((p) => p.name.toLowerCase() === offer.name);
    if (!pet) {
      tradeSessions.delete(normalizedSender);
      return LenwyText(getText(langPartner, "acceptTrade.failPetTrader", { name: trader.name, pet: offer.name }));
    }
    if (trader.equippedPet === pet.name) {
      tradeSessions.delete(normalizedSender);
      return LenwyText(getText(langPartner, "acceptTrade.failPetEquippedTrader", { name: trader.name }));
    }
    offer.petData = pet;
  } else if (offer.type === "item") {
    const item = trader.inventory.find((i) => i.id === offer.id);
    if (!item || item.qty < offer.amount) {
      tradeSessions.delete(normalizedSender);
      return LenwyText(
        getText(langPartner, "acceptTrade.failItemTrader", { name: trader.name, item: offer.name })
      );
    }
    if (trader.equippedWeapon === offer.id || trader.equippedArmor === offer.id) {
      tradeSessions.delete(normalizedSender);
      return LenwyText(getText(langPartner, "acceptTrade.failEquippedTrader", { name: trader.name }));
    }
  }

  // Validate partner's request
  if (request.type === "gold") {
    if (partner.gold < request.amount) {
      tradeSessions.delete(normalizedSender);
      return LenwyText(getText(langPartner, "acceptTrade.failGoldYou"));
    }
  } else if (request.type === "pet") {
    const pet = partner.pets.find((p) => p.name.toLowerCase() === request.name);
    if (!pet) {
      tradeSessions.delete(normalizedSender);
      return LenwyText(getText(langPartner, "acceptTrade.failPetYou", { pet: request.name }));
    }
    if (partner.equippedPet === pet.name) {
      tradeSessions.delete(normalizedSender);
      return LenwyText(getText(langPartner, "acceptTrade.failPetEquippedYou"));
    }
    request.petData = pet;
  } else if (request.type === "item") {
    const item = partner.inventory.find((i) => i.id === request.id);
    if (!item || item.qty < request.amount) {
      tradeSessions.delete(normalizedSender);
      return LenwyText(getText(langPartner, "acceptTrade.failItemYou", { item: request.name }));
    }
    if (partner.equippedWeapon === request.id || partner.equippedArmor === request.id) {
      tradeSessions.delete(normalizedSender);
      return LenwyText(getText(langPartner, "acceptTrade.failEquippedYou"));
    }
  }

  // Execute the trade
  // Transfer offer from trader to partner
  if (offer.type === "gold") {
    trader.gold -= offer.amount;
    partner.gold = (partner.gold || 0) + offer.amount;
  } else if (offer.type === "pet") {
    const petIndex = trader.pets.findIndex((p) => p.name === offer.petData.name);
    trader.pets.splice(petIndex, 1);
    partner.pets = partner.pets || [];
    partner.pets.push(offer.petData);
  } else if (offer.type === "item") {
    removeFromInventory(trader, offer.id, offer.amount);
    addToInventory(partner, offer.id, offer.amount);
  }

  // Transfer request from partner to trader
  if (request.type === "gold") {
    partner.gold -= request.amount;
    trader.gold = (trader.gold || 0) + request.amount;
  } else if (request.type === "pet") {
    const petIndex = partner.pets.findIndex((p) => p.name === request.petData.name);
    partner.pets.splice(petIndex, 1);
    trader.pets = trader.pets || [];
    trader.pets.push(request.petData);
  } else if (request.type === "item") {
    removeFromInventory(partner, request.id, request.amount);
    addToInventory(trader, request.id, request.amount);
  }

  // Update timestamps
  trader.lastActive = new Date().toISOString();
  partner.lastActive = new Date().toISOString();

  // Save
  players[trade.traderJid] = trader;
  players[normalizedSender] = partner;
  savePlayers(players);

  // Remove trade session
  tradeSessions.delete(normalizedSender);

  // Notify both players
  await LenwyText(
    getText(langPartner, "acceptTrade.completedYou", {
      name: trader.name,
      gave: request.display,
      got: offer.display,
    })
  );

  try {
    await lenwy.sendMessage(trade.traderJid, {
      text: getText(langTrader, "acceptTrade.completedTrader", {
        partner: partner.name,
        gave: offer.display,
        got: request.display,
      }),
    });
  } catch (err) {
    console.log("[ACCEPTTRADE] Could not notify trader:", err.message);
  }

  const langGroup = langPartner;

  // Announce in group
  try {
    await lenwy.sendMessage(trade.replyJid, {
      text: getText(langGroup, "acceptTrade.groupAnnounce", {
        a: trader.name,
        b: partner.name,
        giveA: offer.display,
        giveB: request.display,
      }),
    });
  } catch (err) {
    console.log("[ACCEPTTRADE] Could not announce in group:", err.message);
  }
}
