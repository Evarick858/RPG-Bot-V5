/*
  RPG Command : trade
  Base : Lenwy SCM — RPG Extension

  Trade items, gold, or pets with another player (two-way exchange, requires accept)
  
  Usage:
  - trade <player> <offer_type> <offer_amount> for <request_type> <request_amount>
  
  Examples:
  - trade evarick iron_sword 1 for gold 500
  - trade evarick gold 1000 for dragon_egg 1
  - trade evarick pet wolf for pet dragon
  - trade evarick health_potion 10 for mana_potion 10
*/

import fs from "fs";
import path from "path";
import { getItemByName } from "../../database/rpg/items.js";
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

// Parse trade offer/request
function parseTradeItem(args, startIndex) {
  // Check if it's gold
  if (args[startIndex] === "gold") {
    const amount = parseInt(args[startIndex + 1]);
    if (isNaN(amount) || amount <= 0) return null;
    return {
      type: "gold",
      amount: amount,
      display: `${amount} gold`,
    };
  }

  // Check if it's pet
  if (args[startIndex] === "pet") {
    const petName = args.slice(startIndex + 1).join("_").toLowerCase();
    if (!petName) return null;
    return {
      type: "pet",
      name: petName,
      display: `pet ${petName}`,
    };
  }

  // Otherwise it's an item
  // Find the amount (last number before "for" or end)
  let endIndex = startIndex + 1;
  while (endIndex < args.length && args[endIndex] !== "for") {
    endIndex++;
  }
  
  const amount = parseInt(args[endIndex - 1]);
  if (isNaN(amount) || amount <= 0) return null;

  const itemName = args.slice(startIndex, endIndex - 1).join("_").toLowerCase();
  const itemData = getItemByName(itemName);
  
  if (!itemData) return null;

  return {
    type: "item",
    id: itemData.id,
    name: itemData.name,
    amount: amount,
    display: `${amount}x ${itemData.name}`,
  };
}

// ── Command export ───────────────────────────────────────

export const info = {
  name: "Trade",
  menu: ["trade"],
  case: ["trade"],
  description: "Trade items, gold, or pets with another player.",
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
  const trader = players[normalizedSender];
  const lang = trader ? getLanguage(getPlayerLanguage(trader)) : getLanguage("id");

  if (!trader) {
    return LenwyText(getText(lang, "trade.notRegistered"));
  }

  // Parse command: trade <player> <offer> for <request>
  if (args.length < 5 || !args.includes("for")) {
    return LenwyText(getText(lang, "trade.usage"));
  }

  // Get target player
  let targetJid = null;
  let targetName = args[0];

  // Check for mention
  if (m.message?.extendedTextMessage?.contextInfo?.mentionedJid?.length > 0) {
    targetJid = m.message.extendedTextMessage.contextInfo.mentionedJid[0];
  } else {
    // Search by name
    const found = Object.entries(players).find(([jid, p]) => 
      p.name.toLowerCase() === targetName.toLowerCase()
    );
    if (found) {
      targetJid = found[0];
    }
  }

  if (!targetJid) {
    return LenwyText(getText(lang, "trade.playerNotFound", { name: targetName }));
  }

  const partner = players[targetJid];
  if (!partner) {
    return LenwyText(getText(lang, "trade.partnerNotRegistered"));
  }

  // Can't trade with yourself
  if (targetJid === normalizedSender) {
    return LenwyText(getText(lang, "trade.cantTradeSelf"));
  }

  // Find "for" keyword
  const forIndex = args.indexOf("for");
  
  // Parse offer (what trader gives)
  const offer = parseTradeItem(args, 1);
  if (!offer) {
    return LenwyText(getText(lang, "trade.invalidOffer"));
  }

  // Parse request (what trader wants)
  const request = parseTradeItem(args, forIndex + 1);
  if (!request) {
    return LenwyText(getText(lang, "trade.invalidRequest"));
  }

  // Validate trader has what they're offering
  if (offer.type === "gold") {
    if (trader.gold < offer.amount) {
      return LenwyText(
        getText(lang, "trade.notEnoughGoldOffer", { have: trader.gold, need: offer.amount })
      );
    }
  } else if (offer.type === "pet") {
    const pet = trader.pets.find((p) => p.name.toLowerCase() === offer.name);
    if (!pet) {
      return LenwyText(
        getText(lang, "trade.noPetOffer", {
          name: offer.name,
          list: trader.pets.map((p) => p.name).join(", ") || getText(lang, "give.petsNone"),
        })
      );
    }
    if (trader.equippedPet === pet.name) {
      return LenwyText(getText(lang, "trade.cantTradeEquippedPet"));
    }
    offer.petData = pet; // Store for later
  } else if (offer.type === "item") {
    const item = trader.inventory.find((i) => i.id === offer.id);
    if (!item || item.qty < offer.amount) {
      return LenwyText(
        getText(lang, "trade.notEnoughItemsOffer", {
          have: item?.qty || 0,
          item: offer.name,
          need: offer.amount,
        })
      );
    }
    if (trader.equippedWeapon === offer.id || trader.equippedArmor === offer.id) {
      return LenwyText(getText(lang, "trade.cantTradeEquippedItem"));
    }
  }

  // Validate partner has what trader is requesting
  if (request.type === "gold") {
    if (partner.gold < request.amount) {
      return LenwyText(
        getText(lang, "trade.partnerNotEnoughGold", {
          name: partner.name,
          have: partner.gold,
          need: request.amount,
        })
      );
    }
  } else if (request.type === "pet") {
    const pet = partner.pets.find((p) => p.name.toLowerCase() === request.name);
    if (!pet) {
      return LenwyText(getText(lang, "trade.partnerNoPet", { name: partner.name, pet: request.name }));
    }
    if (partner.equippedPet === pet.name) {
      return LenwyText(getText(lang, "trade.partnerPetEquipped", { name: partner.name }));
    }
    request.petData = pet; // Store for later
  } else if (request.type === "item") {
    const item = partner.inventory.find((i) => i.id === request.id);
    if (!item || item.qty < request.amount) {
      return LenwyText(
        getText(lang, "trade.partnerNotEnoughItems", {
          name: partner.name,
          have: item?.qty || 0,
          item: request.name,
          need: request.amount,
        })
      );
    }
    if (partner.equippedWeapon === request.id || partner.equippedArmor === request.id) {
      return LenwyText(getText(lang, "trade.partnerItemEquipped", { name: partner.name }));
    }
  }

  // Create trade session
  const tradeId = `${normalizedSender}_${targetJid}_${Date.now()}`;
  tradeSessions.set(targetJid, {
    tradeId: tradeId,
    traderJid: normalizedSender,
    traderName: trader.name,
    partnerJid: targetJid,
    partnerName: partner.name,
    offer: offer,
    request: request,
    timestamp: Date.now(),
    replyJid: replyJid,
  });

  // Set timeout to auto-decline after 60 seconds
  setTimeout(() => {
    if (tradeSessions.has(targetJid)) {
      const trade = tradeSessions.get(targetJid);
      if (trade.tradeId === tradeId) {
        tradeSessions.delete(targetJid);
        const pl = loadPlayers();
        const traderPlayer = pl[trade.traderJid];
        const langExp = traderPlayer ? getLanguage(getPlayerLanguage(traderPlayer)) : getLanguage("id");
        lenwy.sendMessage(replyJid, {
          text: getText(langExp, "trade.expired", { name: partner.name }),
        });
      }
    }
  }, 60000);

  // Notify trader
  await LenwyText(
    getText(lang, "trade.offerSent", {
      offer: offer.display,
      want: request.display,
      partner: partner.name,
    })
  );

  const langPartner = getLanguage(getPlayerLanguage(partner));

  // Notify partner
  try {
    await lenwy.sendMessage(replyJid, {
      text: getText(langPartner, "trade.offerReceived", {
        trader: trader.name,
        partner: partner.name,
        offer: offer.display,
        want: request.display,
        mention: targetJid.split("@")[0],
      }),
      mentions: [targetJid],
    });
  } catch (err) {
    console.log("[TRADE] Could not notify partner:", err.message);
  }
}
