/*
  RPG Command : redeem
  Base : Lenwy SCM — RPG Extension

  Redeem special codes for rewards (gold, items, etc.)
  
  Usage: !redeem <code>
  Example: !redeem EVARICK
*/

import fs from "fs";
import path from "path";
import { getLanguage, getText, getPlayerLanguage } from "../../database/rpg/languages.js";

const playersPath = path.join(process.cwd(), "WhatsApp", "database", "rpg", "players.json");
const redeemedCodesPath = path.join(process.cwd(), "WhatsApp", "database", "rpg", "redeemed_codes.json");

// ── Redeem Codes Database ────────────────────────────────
// Add more codes here as needed
const REDEEM_CODES = {
  "BOSS": {
    code: "BOSS",
    reward: {
      type: "items",
      items: [
        // Gold
        { id: "gold", amount: 5000 },

        // Gathering Tools
        { id: "basic_pickaxe", qty: 1 }, // Mining tool
        { id: "basic_axe", qty: 1 }, // Chopping tool
        { id: "basic_rod", qty: 1 }, // Fishing tool

        // Rare Skill Books (one for each class)
        { id: "skill_book_whirlwind", qty: 1 }, // Warrior - Rare
        { id: "skill_book_thunder_shock", qty: 1 }, // Mage - Rare
        { id: "skill_book_ambush", qty: 1 }, // Rogue - Rare
        { id: "skill_book_mana_drain", qty: 1 }, // Mage/Support - Rare
      ],
      pets: [
        // One SR (Epic) pet
        { id: "crystal_dragon", name: "Crystal Dragon" }, // SR - Super Rare (Epic)
      ],
    },
    description: "Boss Starter Pack",
    oneTimeUse: true,
  },
  "EVARICK": {
    code: "EVARICK",
    reward: {
      type: "items",
      items: [
        // Gold
        { id: "gold", amount: 999999 },

        // Best Gathering Tools
        { id: "diamond_pickaxe", qty: 1 }, // Best mining tool
        { id: "diamond_axe", qty: 1 }, // Best chopping tool
        { id: "crystal_rod", qty: 1 }, // Best fishing tool
        { id: "gathering_basket", qty: 1 }, // Best foraging tool

        // Legendary Weapon (Excalibur - best sword)
        { id: "excalibur", qty: 1 },

        // Godslayer Armor Set (Legendary - full set)
        { id: "godslayer_head", qty: 1 },
        { id: "godslayer_chest", qty: 1 },
        { id: "godslayer_legs", qty: 1 },
        { id: "godslayer_boots", qty: 1 },

        // All Skill Books (18 total)
        // Common
        { id: "skill_book_power_strike", qty: 1 },
        { id: "skill_book_quick_slash", qty: 1 },
        { id: "skill_book_magic_missile", qty: 1 },
        { id: "skill_book_minor_heal", qty: 1 },
        { id: "skill_book_taunt", qty: 1 },
        // Uncommon
        { id: "skill_book_poison_blade", qty: 1 },
        { id: "skill_book_battle_cry", qty: 1 },
        { id: "skill_book_ice_lance", qty: 1 },
        { id: "skill_book_smoke_bomb", qty: 1 },
        // Rare
        { id: "skill_book_whirlwind", qty: 1 },
        { id: "skill_book_thunder_shock", qty: 1 },
        { id: "skill_book_ambush", qty: 1 },
        { id: "skill_book_mana_drain", qty: 1 },
        // Super Rare
        { id: "skill_book_blade_storm", qty: 1 },
        { id: "skill_book_meteor", qty: 1 },
        { id: "skill_book_death_mark", qty: 1 },
        // Ultra Rare
        { id: "skill_book_divine_shield", qty: 1 },
        { id: "skill_book_void_rift", qty: 1 },

        // Consumables (3 of each)
        { id: "health_potion", qty: 3 },
        { id: "mega_potion", qty: 3 },
        { id: "mana_potion", qty: 3 },
        { id: "elixir", qty: 3 },
        { id: "antidote", qty: 3 },

        // Utility Items (3 of each)
        { id: "town_portal", qty: 3 },
        { id: "location_stone", qty: 3 },
        { id: "bag_expansion", qty: 3 },
        { id: "skill_reset_tome", qty: 3 },

        // Combat Items (3 of each)
        { id: "poison_bomb", qty: 3 },
        { id: "fire_flask", qty: 3 },
        { id: "smoke_grenade", qty: 3 },
        { id: "stun_grenade", qty: 3 },
        { id: "escape_rope", qty: 3 },

        // Pet Items (for leveling)
        { id: "pet_treat_basic", qty: 10 },
        { id: "pet_treat_premium", qty: 5 },
        { id: "pet_elixir", qty: 3 },
        { id: "pet_bond_crystal", qty: 2 },
      ],
      pets: [
        // One pet from each rarity tier
        { id: "shadow_cat", name: "Shadow Cat" }, // C - Common
        { id: "ember_fox", name: "Ember Fox" }, // U - Uncommon
        { id: "frost_bear", name: "Frost Bear" }, // R - Rare
        { id: "crystal_dragon", name: "Crystal Dragon" }, // SR - Super Rare
        { id: "phoenix", name: "Phoenix" }, // SSR - Super Super Rare
      ],
    },
    description: "Founder's Ultimate Pack",
    oneTimeUse: true, // Each player can only use once
  },
  "WELCOME": {
    code: "WELCOME",
    reward: {
      type: "gold",
      amount: 1000,
    },
    description: "Welcome Gift",
    oneTimeUse: true,
  },
  "STARTER": {
    code: "STARTER",
    reward: {
      type: "gold",
      amount: 500,
    },
    description: "Starter Pack",
    oneTimeUse: true,
  },
  "LUCKY": {
    code: "LUCKY",
    reward: {
      type: "items",
      items: [
        { id: "health_potion", qty: 10 },
        { id: "mana_potion", qty: 10 },
      ],
    },
    description: "Lucky Draw",
    oneTimeUse: true,
  },
  "MYBAD": {
    code: "MYBAD",
    reward: {
      type: "items",
      items: [
        // Gold
        { id: "gold", amount: 10000 },

        // Basic Gathering Tools
        { id: "basic_pickaxe", qty: 1 }, // Basic mining tool
        { id: "basic_axe", qty: 1 }, // Basic chopping tool
        { id: "basic_rod", qty: 1 }, // Basic fishing tool

        // One Common Mage Skill Book
        { id: "skill_book_magic_missile", qty: 1 },
      ],
    },
    description: "Apology Gift Pack",
    oneTimeUse: true,
  },
};

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
  const updated = {
    _comment: data._comment,
    _template: data._template,
    ...players,
  };
  fs.writeFileSync(playersPath, JSON.stringify(updated, null, 2), "utf8");
}

function loadRedeemedCodes() {
  try {
    if (!fs.existsSync(redeemedCodesPath)) {
      fs.writeFileSync(redeemedCodesPath, JSON.stringify({}, null, 2));
      return {};
    }
    return JSON.parse(fs.readFileSync(redeemedCodesPath, "utf8"));
  } catch {
    return {};
  }
}

function saveRedeemedCodes(data) {
  fs.writeFileSync(redeemedCodesPath, JSON.stringify(data, null, 2), "utf8");
}

function hasRedeemedCode(playerJid, code) {
  const redeemed = loadRedeemedCodes();
  if (!redeemed[playerJid]) return false;
  return redeemed[playerJid].includes(code);
}

function markCodeAsRedeemed(playerJid, code) {
  const redeemed = loadRedeemedCodes();
  if (!redeemed[playerJid]) {
    redeemed[playerJid] = [];
  }
  redeemed[playerJid].push(code);
  saveRedeemedCodes(redeemed);
}

function addToInventory(player, itemId, qty = 1) {
  const existing = player.inventory.find((i) => i.id === itemId);
  if (existing) {
    existing.qty += qty;
  } else {
    player.inventory.push({ id: itemId, qty });
  }
}

// ── Metadata ─────────────────────────────────────────────

export const info = {
  name: "Redeem",
  menu: ["redeem"],
  case: ["redeem"],
  description: "Redeem special codes for rewards.",
  hidden: false,
  owner: false,
  premium: false,
  group: false,
  private: false,
  admin: false,
  botAdmin: false,
  allowPrivate: true,
};

// ── Handler ──────────────────────────────────────────────

export default async function handler(leni) {
  const { q, normalizedSender, LenwyText, lenwy } = leni;

  const botJid = lenwy.user?.id?.split(":")[0] + "@s.whatsapp.net";
  if (normalizedSender === botJid) return;

  const prefix = globalThis.noprefix ? "" : "!";
  const players = loadPlayers();
  const player = players[normalizedSender];

  if (!player) {
    const langU = getLanguage("id");
    return LenwyText(getText(langU, "redeemCmd.notRegistered", { prefix }));
  }

  const lang = getLanguage(getPlayerLanguage(player));

  if (!player.inventory) player.inventory = [];

  if (!q.trim()) {
    return LenwyText(getText(lang, "redeemCmd.usage", { prefix }));
  }

  const code = q.trim().toUpperCase();
  if (!REDEEM_CODES[code]) {
    return LenwyText(getText(lang, "redeemCmd.invalidCode", { code }));
  }

  const codeData = REDEEM_CODES[code];

  if (codeData.oneTimeUse && hasRedeemedCode(normalizedSender, code)) {
    return LenwyText(getText(lang, "redeemCmd.alreadyRedeemed", { code }));
  }

  let rewardText = "";

  if (codeData.reward.type === "gold") {
    player.gold = (player.gold || 0) + codeData.reward.amount;
    const formattedAmount = codeData.reward.amount.toLocaleString(lang.code === "id" ? "id-ID" : "en-US");
    rewardText = getText(lang, "redeemCmd.rewardGoldPlus", { amount: formattedAmount });
  } else if (codeData.reward.type === "items") {
    rewardText = getText(lang, "redeemCmd.rewardsHeaderItems");

    for (const item of codeData.reward.items) {
      if (item.id === "gold") {
        player.gold = (player.gold || 0) + item.amount;
        const formattedAmount = item.amount.toLocaleString(lang.code === "id" ? "id-ID" : "en-US");
        rewardText += getText(lang, "redeemCmd.goldInline", { amount: formattedAmount });
      } else {
        addToInventory(player, item.id, item.qty);
        const label = item.id.replace(/_/g, " ");
        rewardText += getText(lang, "redeemCmd.itemLine", { qty: String(item.qty), name: label });
      }
    }

    if (codeData.reward.pets && codeData.reward.pets.length > 0) {
      if (!player.pets) player.pets = [];
      if (player.equippedPet === undefined) player.equippedPet = null;

      rewardText += getText(lang, "redeemCmd.petsHeader");

      for (const petReward of codeData.reward.pets) {
        player.pets.push({
          id: petReward.id,
          name: petReward.name,
          level: 1,
          xp: 0,
          xpToNext: 100,
          obtainedAt: new Date().toISOString(),
          mood: "Happy",
        });

        const { getPetById, rarityConfig } = await import("../../database/rpg/pets.js");
        const petInfo = getPetById(petReward.id);
        if (petInfo) {
          const rarityInfo = rarityConfig[petInfo.rarity];
          rewardText += getText(lang, "redeemCmd.petLineRarity", {
            rEmoji: rarityInfo.emoji,
            pEmoji: petInfo.emoji,
            name: petReward.name,
            rarity: rarityInfo.name,
          });
        } else {
          rewardText += getText(lang, "redeemCmd.petLineFallback", { name: petReward.name });
        }
      }
    }
  }

  if (codeData.oneTimeUse) {
    markCodeAsRedeemed(normalizedSender, code);
  }

  player.lastActive = new Date().toISOString();
  players[normalizedSender] = player;
  savePlayers(players);

  let footer =
    getText(lang, "redeemCmd.footerBag", { prefix }) +
    (codeData.reward.pets ? getText(lang, "redeemCmd.footerPets", { prefix }) : "") +
    getText(lang, "redeemCmd.footerGold", { prefix });

  const evarick =
    code === "EVARICK" ? getText(lang, "redeemCmd.evarickExtra") : "";

  const body =
    getText(lang, "redeemCmd.successTitle") +
    getText(lang, "redeemCmd.successPackLabel", { description: codeData.description }) +
    `${rewardText}\n\n${evarick}${footer}`;

  return LenwyText(body);
}
