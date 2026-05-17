/*
  RPG Command : declinetrade
  Base : Lenwy SCM — RPG Extension

  Decline a pending trade offer
*/

import fs from "fs";
import path from "path";
import { getLanguage, getText, getPlayerLanguage } from "../../database/rpg/languages.js";
import { tradeSessions } from "../../database/rpg/sessionManager.js";

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

// ── Command export ───────────────────────────────────────

export const info = {
  name: "DeclineTrade",
  menu: ["declinetrade"],
  case: ["declinetrade"],
  description: "Decline a pending trade offer.",
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

  // Check if there's a pending trade
  const trade = tradeSessions.get(normalizedSender);
  if (!trade) {
    const lang = getLanguage("id");
    return LenwyText(getText(lang, "declineTrade.noTrade"));
  }

  const decliner = players[normalizedSender];
  const trader = players[trade.traderJid];
  const langDecl = decliner ? getLanguage(getPlayerLanguage(decliner)) : getLanguage("id");
  const langTrader = trader ? getLanguage(getPlayerLanguage(trader)) : getLanguage("id");

  // Remove trade session
  tradeSessions.delete(normalizedSender);

  // Notify both players
  await LenwyText(getText(langDecl, "declineTrade.declinedYou", { name: trade.traderName }));

  // Notify trader in their DM
  try {
    await lenwy.sendMessage(trade.traderJid, {
      text: getText(langTrader, "declineTrade.declinedTrader", {
        partner: trade.partnerName,
        offer: trade.offer.display,
        want: trade.request.display,
      }),
    });
  } catch (err) {
    console.log("[DECLINETRADE] Could not notify trader:", err.message);
  }
}
