/*
  RPG Command : give
  Base : Lenwy SCM — RPG Extension

  Give items, gold, or pets to another player (one-way, instant transfer)
  
  Usage:
  - give <player> <item_name> <amount>
  - give <player> gold <amount>
  - give <player> pet <pet_name>
*/

import fs from "fs";
import path from "path";
import { getItemByName } from "../../database/rpg/items.js";
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
  name: "Give",
  menu: ["give"],
  case: ["give"],
  description: "Give items, gold, or pets to another player.",
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
  const giver = players[normalizedSender];
  const langGiver = giver ? getLanguage(getPlayerLanguage(giver)) : getLanguage("id");

  if (!giver) {
    return LenwyText(getText(langGiver, "give.notRegistered"));
  }

  // Parse command: give <player> <item/gold/pet> <amount>
  if (args.length < 3) {
    return LenwyText(
      `${getText(langGiver, "give.usageTitle")}\n\n` +
        `${getText(langGiver, "give.usageLines")}\n\n` +
        `${getText(langGiver, "give.examples")}`
    );
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
    return LenwyText(getText(langGiver, "give.playerNotFound", { name: targetName }));
  }

  const receiver = players[targetJid];
  if (!receiver) {
    return LenwyText(getText(langGiver, "give.targetNotRegistered"));
  }

  const langReceiver = getLanguage(getPlayerLanguage(receiver));

  // Can't give to yourself
  if (targetJid === normalizedSender) {
    return LenwyText(getText(langGiver, "give.cantGiveSelf"));
  }

  const itemType = args[1].toLowerCase();
  
  // ── GIVE GOLD ────────────────────────────────────────────
  if (itemType === "gold") {
    const amount = parseInt(args[2]);
    
    if (isNaN(amount) || amount <= 0) {
      return LenwyText(getText(langGiver, "give.invalidAmount"));
    }

    if (giver.gold < amount) {
      return LenwyText(
        getText(langGiver, "give.notEnoughGold", { have: giver.gold, need: amount })
      );
    }

    // Transfer gold
    giver.gold -= amount;
    receiver.gold = (receiver.gold || 0) + amount;
    
    giver.lastActive = new Date().toISOString();
    receiver.lastActive = new Date().toISOString();
    
    players[normalizedSender] = giver;
    players[targetJid] = receiver;
    savePlayers(players);

    // Notify both players
    await LenwyText(
      getText(langGiver, "give.goldSent", {
        amount,
        target: receiver.name,
        remaining: giver.gold,
      })
    );

    try {
      await lenwy.sendMessage(targetJid, {
        text: getText(langReceiver, "give.goldReceived", {
          sender: giver.name,
          amount,
          remaining: receiver.gold,
        }),
      });
    } catch (err) {
      console.log("[GIVE] Could not notify receiver:", err.message);
    }

    return;
  }

  // ── GIVE PET ─────────────────────────────────────────────
  if (itemType === "pet") {
    const petName = args.slice(2).join("_").toLowerCase();
    
    if (!petName) {
      return LenwyText(getText(langGiver, "give.needPetName"));
    }

    // Find pet in giver's collection
    const petIndex = giver.pets.findIndex((p) => p.name.toLowerCase() === petName);
    
    if (petIndex === -1) {
      return LenwyText(
        getText(langGiver, "give.noPetNamed", {
          name: petName,
          list: giver.pets.map((p) => p.name).join(", ") || getText(langGiver, "give.petsNone"),
        })
      );
    }

    const pet = giver.pets[petIndex];

    // Check if pet is equipped
    if (giver.equippedPet === pet.name) {
      return LenwyText(getText(langGiver, "give.cantGiveEquippedPet", { name: pet.name }));
    }

    // Transfer pet
    giver.pets.splice(petIndex, 1);
    receiver.pets = receiver.pets || [];
    receiver.pets.push(pet);

    giver.lastActive = new Date().toISOString();
    receiver.lastActive = new Date().toISOString();
    
    players[normalizedSender] = giver;
    players[targetJid] = receiver;
    savePlayers(players);

    // Notify both players
    await LenwyText(
      getText(langGiver, "give.petSent", {
        name: pet.name,
        type: pet.type,
        target: receiver.name,
        level: pet.level,
        count: giver.pets.length,
      })
    );

    try {
      await lenwy.sendMessage(targetJid, {
        text: getText(langReceiver, "give.petReceived", {
          sender: giver.name,
          name: pet.name,
          type: pet.type,
          level: pet.level,
          hp: pet.hp,
          maxHp: pet.maxHp,
          count: receiver.pets.length,
        }),
      });
    } catch (err) {
      console.log("[GIVE] Could not notify receiver:", err.message);
    }

    return;
  }

  // ── GIVE ITEM ────────────────────────────────────────────
  const itemName = args.slice(1, -1).join("_").toLowerCase();
  const amount = parseInt(args[args.length - 1]);

  if (isNaN(amount) || amount <= 0) {
    return LenwyText(getText(langGiver, "give.invalidAmount"));
  }

  const itemData = getItemByName(itemName);
  if (!itemData) {
    return LenwyText(getText(langGiver, "give.itemNotFound", { item: itemName }));
  }

  // Check if giver has the item
  const giverItem = giver.inventory.find((i) => i.id === itemData.id);
  if (!giverItem || giverItem.qty < amount) {
    return LenwyText(
      getText(langGiver, "give.notEnoughItems", {
        have: giverItem?.qty || 0,
        item: itemData.name,
        need: amount,
      })
    );
  }

  // Check if item is equipped
  if (itemData.category === "weapon" && giver.equippedWeapon === itemData.id) {
    return LenwyText(getText(langGiver, "give.cantGiveEquippedWeapon", { item: itemData.name }));
  }

  if (itemData.category === "armor" && giver.equippedArmor === itemData.id) {
    return LenwyText(getText(langGiver, "give.cantGiveEquippedArmor", { item: itemData.name }));
  }

  // Transfer item
  if (!removeFromInventory(giver, itemData.id, amount)) {
    return LenwyText(getText(langGiver, "give.removeFailed"));
  }

  addToInventory(receiver, itemData.id, amount);

  giver.lastActive = new Date().toISOString();
  receiver.lastActive = new Date().toISOString();
  
  players[normalizedSender] = giver;
  players[targetJid] = receiver;
  savePlayers(players);

  // Notify both players
  await LenwyText(
    getText(langGiver, "give.itemSent", {
      qty: amount,
      item: itemData.name,
      target: receiver.name,
      remaining: giver.inventory.find((i) => i.id === itemData.id)?.qty || 0,
    })
  );

  try {
    await lenwy.sendMessage(targetJid, {
      text: getText(langReceiver, "give.itemReceived", {
        sender: giver.name,
        qty: amount,
        item: itemData.name,
        desc: itemData.description || "",
      }),
    });
  } catch (err) {
    console.log("[GIVE] Could not notify receiver:", err.message);
  }
}
