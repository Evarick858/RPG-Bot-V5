/*
  RPG Command : claim
  Base : Lenwy SCM — RPG Extension

  Claim quest rewards

  Usage:
  - claim daily
  - claim weekly
  - claim monthly
*/

import fs from "fs";
import path from "path";
import {
  getQuestById,
  shouldResetQuests,
  resetQuestsForPeriod,
  initPlayerQuests,
} from "../../database/rpg/quests.js";
import { getQuestGoldBonus, addReputation, reputationChanges } from "../../database/rpg/reputation.js";
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

function savePlayers(players) {
  const raw = fs.readFileSync(playersPath, "utf8");
  const data = JSON.parse(raw);
  const updated = { _comment: data._comment, _template: data._template, ...players };
  fs.writeFileSync(playersPath, JSON.stringify(updated, null, 2), "utf8");
}

function addToInventory(player, itemId, qty = 1) {
  if (!player.inventory) player.inventory = [];
  const existing = player.inventory.find((i) => i.id === itemId);
  if (existing) existing.qty += qty;
  else player.inventory.push({ id: itemId, qty });
}

function periodDisplay(lang, period) {
  const key =
    period === "daily"
      ? "claim.periodDaily"
      : period === "weekly"
        ? "claim.periodWeekly"
        : "claim.periodMonthly";
  return getText(lang, key);
}

export const info = {
  name: "Claim",
  menu: ["claim"],
  case: ["claim"],
  description: "Claim quest rewards.",
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
  const { normalizedSender, LenwyText, lenwy } = leni;

  const botJid = lenwy.user?.id?.split(":")[0] + "@s.whatsapp.net";
  if (normalizedSender === botJid) return;

  const players = loadPlayers();
  const player = players[normalizedSender];

  if (!player) {
    const lang = getLanguage("id");
    return LenwyText(getText(lang, "gold.notRegistered"));
  }

  const lang = getLanguage(getPlayerLanguage(player));

  if (!player.quests) {
    player.quests = initPlayerQuests();
    players[normalizedSender] = player;
    savePlayers(players);
  }

  const period = leni.args[0]?.toLowerCase();

  if (!period || !["daily", "weekly", "monthly"].includes(period)) {
    return LenwyText(getText(lang, "claim.invalidPeriod"));
  }

  const periodData = player.quests[period];
  if (!periodData) {
    return LenwyText(getText(lang, "claim.noQuestData"));
  }

  if (shouldResetQuests(periodData.lastReset, period)) {
    resetQuestsForPeriod(player.quests, period);
    players[normalizedSender] = player;
    savePlayers(players);
    const pLabel = periodDisplay(lang, period);
    return LenwyText(
      getText(lang, "claim.questsResetTitle") +
        "\n\n" +
        getText(lang, "claim.questsResetBody", { period: pLabel }) +
        "\n" +
        getText(lang, "claim.questsResetHint", { period }),
    );
  }

  const unclaimedQuests = periodData.quests.filter((q) => q.completed && !q.claimed);

  if (unclaimedQuests.length === 0) {
    return LenwyText(getText(lang, "claim.nothingToClaim"));
  }

  let totalGold = 0;
  let totalRepGoldBonus = 0;
  let totalExp = 0;
  const itemsReceived = [];

  for (const playerQuest of unclaimedQuests) {
    const questDef = getQuestById(playerQuest.id);
    if (!questDef) continue;

    playerQuest.claimed = true;

    const baseGold = questDef.rewards.gold || 0;
    const repBonus = getQuestGoldBonus(player.reputation || 0, baseGold);
    totalGold += baseGold + repBonus;
    totalRepGoldBonus += repBonus;
    totalExp += questDef.rewards.exp || 0;

    if (questDef.rewards.items) {
      for (const item of questDef.rewards.items) {
        addToInventory(player, item.id, item.qty);
        itemsReceived.push({ id: item.id, qty: item.qty });
      }
    }

    addReputation(player, reputationChanges.completeQuest, `Completed ${questDef.name}`);
  }

  player.gold = (player.gold || 0) + totalGold;
  player.exp = (player.exp || 0) + totalExp;

  let leveledUp = false;
  while (player.exp >= player.level * 100) {
    const expNeeded = player.level * 100;
    player.exp -= expNeeded;
    player.level++;
    leveledUp = true;
  }

  player.lastActive = new Date().toISOString();
  players[normalizedSender] = player;
  savePlayers(players);

  const pLabel = periodDisplay(lang, period);
  const sep = getText(lang, "claim.sectionRule");

  let message = `${getText(lang, "claim.title")}\n\n`;
  message += `${getText(lang, "claim.claimed", { count: unclaimedQuests.length, period: pLabel })}!\n\n`;
  message += sep;
  message += `${getText(lang, "claim.goldEarned", { gold: totalGold, total: player.gold })}\n`;

  if (totalRepGoldBonus > 0) {
    message += getText(lang, "claim.repBonusLine", { bonus: totalRepGoldBonus });
  }

  message += `${getText(lang, "claim.xpEarned", { xp: totalExp })} (${player.exp}/${player.level * 100})\n`;
  message += getText(lang, "claim.reputationGainLine", {
    amount: String(reputationChanges.completeQuest * unclaimedQuests.length),
  });

  if (leveledUp) {
    message += getText(lang, "claim.levelUp", { level: String(player.level) });
  }

  if (itemsReceived.length > 0) {
    message += `\n${getText(lang, "claim.itemsReceived")}\n`;
    for (const item of itemsReceived) {
      message += getText(lang, "claim.itemLine", { id: item.id, qty: String(item.qty) });
    }
  }

  message += `\n${sep}`;
  message += `${getText(lang, "claim.viewRemaining", { period })}`;

  return LenwyText(message);
}
