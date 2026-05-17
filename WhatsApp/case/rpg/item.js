/*
  RPG Command : item
  Base : Lenwy SCM — RPG Extension

  Use items outside of combat
  - Skill books: Learn new skills
  - Healing potions: Restore HP/Mana
  - Utility items: Town portals, bag expansions, etc.
  
  Usage: !item <item_name>
  Example: !item skill_book_fireball
*/

import fs from "fs";
import path from "path";
import { items, getItemByName } from "../../database/rpg/items.js";
import { getSkillById } from "../../database/rpg/skills.js";
import { getEquipmentStats } from "../../database/rpg/equipmentHelper.js";
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
  const updated = {
    _comment: data._comment,
    _template: data._template,
    ...players,
  };
  fs.writeFileSync(playersPath, JSON.stringify(updated, null, 2), "utf8");
}

// ── Metadata ─────────────────────────────────────────────

export const info = {
  name: "Use Item",
  menu: ["item"],
  case: ["item", "use"],
  description: "Use items outside of combat (skill books, potions, etc.).",
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
  const { lenwy, normalizedSender, LenwyText, args } = leni;

  // Block bot
  const botJid = lenwy.user?.id?.split(":")[0] + "@s.whatsapp.net";
  if (normalizedSender === botJid) return;

  const players = loadPlayers();
  const player = players[normalizedSender];
  const lang = player ? getLanguage(getPlayerLanguage(player)) : getLanguage("id");

  if (!player) {
    return LenwyText(
      `⚠️ *${getText(lang, "common.notRegistered")}*\n\n` +
      getText(lang, "common.registerFirst")
    );
  }

  if (args.length === 0) {
    const usableItems = player.inventory
      .filter((i) => {
        const itemData = getItemByName(i.id);
        return itemData && itemData.usableOutside;
      })
      .map((i) => {
        const itemData = getItemByName(i.id);
        return `• ${itemData?.name || i.id} x${i.qty}`;
      })
      .join("\n") || getText(lang, "item.none");

    return LenwyText(
      `${getText(lang, "item.title")}\n\n` +
      `${getText(lang, "item.usage")}\n\n` +
      `${getText(lang, "item.usableItems")}\n${usableItems}\n\n` +
      `${getText(lang, "item.tip")}`
    );
  }

  const itemName = args.join("_").toLowerCase();
  const itemData = getItemByName(itemName);

  if (!itemData) {
    return LenwyText(getText(lang, "item.notFound", { item: itemName }));
  }

  const invItem = player.inventory.find((i) => i.id === itemData.id);
  if (!invItem || invItem.qty <= 0) {
    return LenwyText(getText(lang, "item.notInInventory", { item: itemData.name, itemId: itemData.id }));
  }

  if (!itemData.usableOutside) {
    return LenwyText(getText(lang, "item.combatOnly", { item: itemData.name, itemId: itemData.id }));
  }

  if (itemData.category === "skill_book") {
    const skillId = itemData.skillId;
    const skillData = getSkillById(skillId);

    if (!skillData) {
      return LenwyText(
        lang.code === "id"
          ? `⚠️ *Error: Skill "${skillId}" tidak ditemukan di database.*\n\nIni mungkin bug. Hubungi owner.`
          : `⚠️ *Error: Skill "${skillId}" not found in database.*\n\nThis might be a bug. Please contact the owner.`
      );
    }

    const requiredClasses = itemData.requiredClass || [];
    if (!requiredClasses.includes("all") && !requiredClasses.includes(player.class)) {
      const classNames = requiredClasses.map((c) => c.charAt(0).toUpperCase() + c.slice(1)).join(", ");
      return LenwyText(
        getText(lang, "item.classRequired", {
          item: itemData.name,
          classes: classNames,
          playerClass: player.class.charAt(0).toUpperCase() + player.class.slice(1),
        })
      );
    }

    const requiredLevel = itemData.requiredLevel || 1;
    if (player.level < requiredLevel) {
      return LenwyText(
        getText(lang, "item.levelRequired", {
          item: itemData.name,
          level: requiredLevel,
          playerLevel: player.level,
        })
      );
    }

    const learnedSkills = player.learnedSkills || [];
    if (learnedSkills.includes(skillId)) {
      return LenwyText(getText(lang, "item.alreadyLearned", { skill: skillData.name }));
    }

    if (!player.learnedSkills) player.learnedSkills = [];
    player.learnedSkills.push(skillId);

    invItem.qty--;
    if (invItem.qty <= 0) {
      player.inventory = player.inventory.filter((i) => i.id !== itemData.id);
    }

    player.lastActive = new Date().toISOString();
    players[normalizedSender] = player;
    savePlayers(players);

    return LenwyText(
      `${getText(lang, "item.skillLearned")}\n\n` +
      `${skillData.emoji} *${skillData.name}*\n` +
      `${skillData.rarity} | ${skillData.category}\n\n` +
      `📖 ${skillData.description}\n\n` +
      `💧 ${lang.code === "id" ? "Biaya Mana" : "Mana Cost"}: ${skillData.manaCost}\n` +
      `⏱️ Cooldown: ${skillData.cooldown} ${lang.code === "id" ? "giliran" : "turns"}\n` +
      `💥 ${lang.code === "id" ? "Tipe Damage" : "Damage Type"}: ${skillData.damageType}\n\n` +
      `✅ ${lang.code === "id" ? "Skill ditambahkan ke skill yang sudah dipelajari!" : "Skill added to your learned skills!"}\n\n` +
      `*${lang.code === "id" ? "Langkah berikutnya" : "Next steps"}:*\n` +
      `• *!myskills* - ${lang.code === "id" ? "Lihat semua skill" : "View all your skills"}\n` +
      `• *!equipskill ${skillId} <slot>* - ${lang.code === "id" ? "Pasang ke slot 1/2/3" : "Equip to slot 1/2/3"}\n` +
      `• ${lang.code === "id" ? "Gunakan *skill <slot>* saat combat untuk mengaktifkan!" : "Use *skill <slot>* in combat to activate!"}`
    );
  }

  if (itemData.effect === "heal") {
    const healed = Math.min(itemData.value, player.stats.maxHp - player.stats.hp);

    if (healed === 0) {
      return LenwyText(getText(lang, "item.hpFull", { current: player.stats.hp, max: player.stats.maxHp }));
    }

    player.stats.hp += healed;

    invItem.qty--;
    if (invItem.qty <= 0) {
      player.inventory = player.inventory.filter((i) => i.id !== itemData.id);
    }

    player.lastActive = new Date().toISOString();
    players[normalizedSender] = player;
    savePlayers(players);

    return LenwyText(
      getText(lang, "item.healed", {
        item: itemData.name,
        amount: healed,
        current: player.stats.hp,
        max: player.stats.maxHp,
      })
    );
  }

  if (itemData.effect === "mana_restore") {
    const restored = Math.min(itemData.value, player.stats.maxMana - player.stats.mana);

    if (restored === 0) {
      return LenwyText(getText(lang, "item.manaFull", { current: player.stats.mana, max: player.stats.maxMana }));
    }

    player.stats.mana += restored;

    invItem.qty--;
    if (invItem.qty <= 0) {
      player.inventory = player.inventory.filter((i) => i.id !== itemData.id);
    }

    player.lastActive = new Date().toISOString();
    players[normalizedSender] = player;
    savePlayers(players);

    return LenwyText(
      getText(lang, "item.manaRestored", {
        item: itemData.name,
        amount: restored,
        current: player.stats.mana,
        max: player.stats.maxMana,
      })
    );
  }

  if (itemData.effect === "full_restore") {
    const equipStats = getEquipmentStats(player);
    const actualMaxHp = player.stats.maxHp + (equipStats.hp || 0);
    const actualMaxMana = player.stats.maxMana + (equipStats.mana || 0);

    player.stats.hp = actualMaxHp;
    player.stats.mana = actualMaxMana;

    invItem.qty--;
    if (invItem.qty <= 0) {
      player.inventory = player.inventory.filter((i) => i.id !== itemData.id);
    }

    player.lastActive = new Date().toISOString();
    players[normalizedSender] = player;
    savePlayers(players);

    return LenwyText(
      getText(lang, "item.fullRestore", {
        item: itemData.name,
        hp: player.stats.hp,
        maxHp: actualMaxHp,
        mana: player.stats.mana,
        maxMana: actualMaxMana,
      })
    );
  }

  if (itemData.effect === "teleport") {
    const destination = itemData.value;
    const locationName = destination.split("_").map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");

    if (player.currentLocation === destination) {
      return LenwyText(getText(lang, "item.alreadyAtLocation", { location: locationName }));
    }

    player.currentLocation = destination;

    invItem.qty--;
    if (invItem.qty <= 0) {
      player.inventory = player.inventory.filter((i) => i.id !== itemData.id);
    }

    player.lastActive = new Date().toISOString();
    players[normalizedSender] = player;
    savePlayers(players);

    return LenwyText(getText(lang, "item.teleported", { item: itemData.name }));
  }

  if (itemData.effect === "dungeon_teleport") {
    const dungeonEntrances = [
      "forgotten_crypt_entrance",
      "volcanic_rift_gate",
      "frozen_abyss_portal"
    ];

    const randomDungeon = dungeonEntrances[Math.floor(Math.random() * dungeonEntrances.length)];

    const dungeonNames = lang.code === "id"
      ? {
          "forgotten_crypt_entrance": "🏚️ Pintu Masuk Forgotten Crypt (Mudah)",
          "volcanic_rift_gate": "🌋 Gerbang Volcanic Rift (Normal)",
          "frozen_abyss_portal": "❄️ Portal Frozen Abyss (Sulit)"
        }
      : {
          "forgotten_crypt_entrance": "🏚️ Forgotten Crypt Entrance (Easy)",
          "volcanic_rift_gate": "🌋 Volcanic Rift Gate (Normal)",
          "frozen_abyss_portal": "❄️ Frozen Abyss Portal (Hard)"
        };

    if (player.currentLocation === randomDungeon) {
      return LenwyText(
        lang.code === "id"
          ? `⚠️ *Portalnya berputar... tapi kamu sudah di sini!*\n\nKamu sudah berada di ${dungeonNames[randomDungeon]}`
          : `⚠️ *The portal swirls... but you're already here!*\n\nYou are already at ${dungeonNames[randomDungeon]}`
      );
    }

    player.currentLocation = randomDungeon;

    invItem.qty--;
    if (invItem.qty <= 0) {
      player.inventory = player.inventory.filter((i) => i.id !== itemData.id);
    }

    player.lastActive = new Date().toISOString();
    players[normalizedSender] = player;
    savePlayers(players);

    return LenwyText(
      lang.code === "id"
        ? `🌀 *${itemData.name}*\n\n*Ada portal berputar terbuka di hadapanmu!*\n\n✨ Teleport ke:\n${dungeonNames[randomDungeon]}\n\n💡 *Siap berpetualang?*\n• *!party create* - Buat party\n• *!dungeon* - Lihat info dungeon\n• *!dungeon start* - Masuk dungeon!`
        : `🌀 *${itemData.name}*\n\n*A swirling portal opens before you!*\n\n✨ Teleported to:\n${dungeonNames[randomDungeon]}\n\n💡 *Ready for adventure?*\n• *!party create* - Create a party\n• *!dungeon* - View dungeon info\n• *!dungeon start* - Enter the dungeon!`
    );
  }

  if (itemData.effect === "expand_inventory") {
    invItem.qty--;
    if (invItem.qty <= 0) {
      player.inventory = player.inventory.filter((i) => i.id !== itemData.id);
    }

    player.lastActive = new Date().toISOString();
    players[normalizedSender] = player;
    savePlayers(players);

    return LenwyText(getText(lang, "item.inventoryExpanded", { item: itemData.name, amount: itemData.value }));
  }

  return LenwyText(getText(lang, "item.combatOnly", { item: itemData.name, itemId: itemData.id }));
}
