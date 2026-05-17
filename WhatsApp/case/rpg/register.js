/*
  RPG Command : !register
  Base : Lenwy SCM — RPG Extension

  Flow:
  1. !register <name>     → bot shows class selection
  2. !class <classname>   → bot confirms and creates player data

  Player data is saved to players.json keyed by JID.
  Bot itself is excluded from registration.
*/

import fs from "fs";
import path from "path";
import { getClassById, getClassList } from "../../database/rpg/classes.js";
import { getLanguage, getText, getPlayerLanguage } from "../../database/rpg/languages.js";

const playersPath = path.join(process.cwd(), "WhatsApp", "database", "rpg", "players.json");

function cmdPrefix() {
  return globalThis.noprefix ? "" : "!";
}

function loadPlayers() {
  try {
    const raw = fs.readFileSync(playersPath, "utf8");
    const data = JSON.parse(raw);
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

function isRegistered(jid, players) {
  return !!players[jid];
}

function buildPlayer(jid, name, chosenClass) {
  const cls = getClassById(chosenClass);
  const now = new Date().toISOString();

  const skills = [
    { ...cls.starterSkill },
    {
      id: null,
      name: null,
      effect: null,
      value: 0,
      manaCost: 0,
      cooldown: 0,
      cooldownRemaining: 0,
      description: null,
    },
    {
      id: null,
      name: null,
      effect: null,
      value: 0,
      manaCost: 0,
      cooldown: 0,
      cooldownRemaining: 0,
      description: null,
    },
  ];

  return {
    jid,
    name,
    class: cls.id,
    registeredAt: now,
    lastActive: now,
    language: "id",

    title: "Newcomer",
    unlockedTitles: ["Newcomer"],

    level: 1,
    xp: 0,
    xpToNext: 100,
    gold: 50,
    statPoints: 0,
    skillPoints: 0,

    stats: {
      hp: cls.baseStats.hp,
      maxHp: cls.baseStats.maxHp,
      mana: cls.baseStats.mana,
      maxMana: cls.baseStats.maxMana,
      attack: cls.baseStats.attack,
      defense: cls.baseStats.defense,
      agility: cls.baseStats.agility,
      luck: cls.baseStats.luck,
      physicalAtk: cls.baseStats.physicalAtk,
      magicalAtk: cls.baseStats.magicalAtk,
      hybridAtk: cls.baseStats.hybridAtk,
      physicalDef: cls.baseStats.physicalDef,
      magicalDef: cls.baseStats.magicalDef,
      hybridDef: cls.baseStats.hybridDef,
    },

    skills,
    learnedSkills: [],
    passive: { ...cls.passive },

    equipment: {
      weapon: { id: null, name: null, type: null, twoHanded: false, stats: {} },
      offhand: { id: null, name: null, type: null, stats: {} },
      armor: {
        head: { id: null, name: null, stats: {} },
        chest: { id: null, name: null, stats: {} },
        legs: { id: null, name: null, stats: {} },
        boots: { id: null, name: null, stats: {} },
      },
      accessory: { id: null, name: null, stats: {} },
    },

    inventory: [],
    currentLocation: "starter_village",
    unlockedLocations: ["starter_village"],

    statusEffects: [],
    achievements: [],

    questLog: { active: [], completed: [] },

    stats_tracker: {
      totalKills: 0,
      totalDeaths: 0,
      totalGoldEarned: 0,
      totalDamageDealt: 0,
      totalDamageTaken: 0,
      huntCount: 0,
      mineCount: 0,
      chopCount: 0,
      fishCount: 0,
      bossesKilled: 0,
    },

    reputation: 0,
    dungeonRuns: 0,
    dungeonLastReset: null,
  };
}

const pendingRegistrations = new Map();
const PENDING_TTL = 2 * 60 * 1000;

const pendingClassChanges = new Map();
const CLASS_CHANGE_COST = 50000;
const CLASS_CHANGE_TTL = 1 * 60 * 1000;

/** UI language before a player exists (matches other RPG commands). */
function guestLang() {
  return getLanguage("id");
}

export const info = {
  name: "Register",
  menu: ["register"],
  case: ["register", "class", "yes", "no"],
  description: "Register yourself as an RPG player and choose your class.",
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
  const {
    command,
    q,
    lenwy,
    replyJid,
    normalizedSender,
    LenwyText,
  } = leni;

  const botJid = lenwy.user?.id?.split(":")[0] + "@s.whatsapp.net";
  if (normalizedSender === botJid) return;

  const players = loadPlayers();
  const playerJid = normalizedSender;
  const px = cmdPrefix();

  if (command === "register") {
    if (isRegistered(playerJid, players)) {
      const lang = getLanguage(getPlayerLanguage(players[playerJid]));
      const who = players[playerJid];
      return LenwyText(
        getText(lang, "registerCmd.alreadyRegistered", {
          name: who.name,
          cls: who.class,
          prefix: px,
        }),
      );
    }

    const g = guestLang();
    const name = q.trim();
    if (!name) {
      return LenwyText(getText(g, "registerCmd.welcomeUsage", { prefix: px }));
    }

    if (name.length < 3 || name.length > 16) {
      return LenwyText(getText(g, "registerCmd.nameLengthBad"));
    }

    if (!/^[a-zA-Z0-9_]+$/.test(name)) {
      return LenwyText(getText(g, "registerCmd.nameInvalidChars"));
    }

    const nameTaken = Object.values(players).some(
      (p) => p.name.toLowerCase() === name.toLowerCase(),
    );
    if (nameTaken) {
      return LenwyText(getText(g, "registerCmd.nameTaken", { name }));
    }

    pendingRegistrations.set(playerJid, {
      name,
      expiresAt: Date.now() + PENDING_TTL,
    });

    const classList = getClassList();
    let classBlock = ``;
    for (const cls of classList) {
      classBlock += `${cls.emoji} *${cls.name}*\n${cls.description}\n\n`;
    }

    return LenwyText(
      getText(g, "registerCmd.pickClass", { name, prefix: px, classBlock }),
    );
  }

  if (command === "class") {
    if (isRegistered(playerJid, players)) {
      const player = players[playerJid];
      const lang = getLanguage(getPlayerLanguage(player));
      const currentClass = player.class;
      const chosenId = q.trim().toLowerCase();

      if (!chosenId) {
        const opts = getClassList()
          .map((c) => c.id)
          .join(", ");
        return LenwyText(
          getText(lang, "registerCmd.currentClassBanner", { cls: currentClass }) +
            getText(lang, "registerCmd.classChangeHint", {
              prefix: px,
              options: opts,
            }),
        );
      }

      const chosenClass = getClassById(chosenId);
      if (!chosenClass) {
        const options = getClassList()
          .map((c) => c.id)
          .join(", ");
        return LenwyText(
          getText(lang, "registerCmd.invalidClassMsg", { id: chosenId, options }),
        );
      }

      if (chosenId === currentClass) {
        return LenwyText(
          getText(lang, "registerCmd.alreadySameClass", { cls: currentClass }),
        );
      }

      pendingClassChanges.set(playerJid, {
        newClass: chosenId,
        expiresAt: Date.now() + CLASS_CHANGE_TTL,
      });

      const cls = chosenClass;
      const locale = lang.code === "id" ? "id-ID" : "en-US";
      const fmtNum = (n) => Number(n).toLocaleString(locale);
      const costStr = fmtNum(CLASS_CHANGE_COST);
      const goldStr = fmtNum(player.gold);

      if (player.gold < CLASS_CHANGE_COST) {
        return LenwyText(
          getText(lang, "registerCmd.changeRequestTitle") +
            getText(lang, "registerCmd.changeInsufficient", {
              emoji: cls.emoji,
              name: cls.name,
              desc: cls.description,
              cost: costStr,
              gold: goldStr,
              shortage: fmtNum(CLASS_CHANGE_COST - player.gold),
            }),
        );
      }

      return LenwyText(
        getText(lang, "registerCmd.changeConfirmTitle") +
          getText(lang, "registerCmd.changeConfirmBody", {
            currentCls: currentClass,
            emoji: cls.emoji,
            newName: cls.name,
            desc: cls.description,
            cost: costStr,
            gold: goldStr,
            afterGold: fmtNum(player.gold - CLASS_CHANGE_COST),
            prefix: px,
          }),
      );
    }

    const g = guestLang();

    const pending = pendingRegistrations.get(playerJid);
    if (!pending) {
      return LenwyText(getText(g, "registerCmd.noPendingRegister", { prefix: px }));
    }

    if (Date.now() > pending.expiresAt) {
      pendingRegistrations.delete(playerJid);
      return LenwyText(getText(g, "registerCmd.registerExpired", { prefix: px }));
    }

    const chosenId = q.trim().toLowerCase();
    if (!chosenId) {
      const classList = getClassList();
      const options = classList.map((c) => `*${px}class ${c.id}*`).join(" | ");
      return LenwyText(getText(g, "registerCmd.specifyClass", { options }));
    }

    const chosenClass = getClassById(chosenId);
    if (!chosenClass) {
      const options = getClassList()
        .map((c) => c.id)
        .join(", ");
      return LenwyText(
        getText(g, "registerCmd.invalidClassMsg", { id: chosenId, options }),
      );
    }

    const newPlayer = buildPlayer(playerJid, pending.name, chosenId);
    players[playerJid] = newPlayer;
    savePlayers(players);
    pendingRegistrations.delete(playerJid);

    const cls = chosenClass;
    const s = newPlayer.stats;
    const LangReg = getLanguage(getPlayerLanguage(newPlayer));
    const welcomePath =
      LangReg.code === "id" ? "registerCmd.charWelcomeId" : "registerCmd.charWelcome";
    const locLbl =
      LangReg.code === "id"
        ? getText(LangReg, "registerCmd.locationStarterVillageId")
        : getText(LangReg, "registerCmd.locationStarterVillageEn");

    const sheet = getText(LangReg, welcomePath, {
      name: newPlayer.name,
      clsEmoji: cls.emoji,
      clsName: cls.name,
      clsDesc: cls.description,
      maxHp: String(s.maxHp),
      maxMana: String(s.maxMana),
      attack: String(s.attack),
      defense: String(s.defense),
      agility: String(s.agility),
      luck: String(s.luck),
      starterName: newPlayer.skills[0].name,
      starterDesc: newPlayer.skills[0].description,
      passiveName: newPlayer.passive.name,
      passiveDesc: newPlayer.passive.description,
      location: locLbl,
      startingGold: String(newPlayer.gold),
      prefix: px,
    });

    const characterMessage = await lenwy.sendMessage(replyJid, { text: sheet });

    if (characterMessage?.key) {
      newPlayer.registrationMessageKey = characterMessage.key;
      players[playerJid] = newPlayer;
      savePlayers(players);
    }

    await lenwy.sendMessage(replyJid, {
      text: getText(LangReg, "registerCmd.languageHint", { prefix: px }),
    });

    return;
  }

  if (command === "yes") {
    const lang = getLanguage(
      players[playerJid] ? getPlayerLanguage(players[playerJid]) : "id",
    );
    const pendingChange = pendingClassChanges.get(playerJid);

    if (!pendingChange) {
      return LenwyText(getText(lang, "registerCmd.noPendingChange"));
    }

    if (Date.now() > pendingChange.expiresAt) {
      pendingClassChanges.delete(playerJid);
      return LenwyText(getText(lang, "registerCmd.changeRequestExpired"));
    }

    const player = players[playerJid];
    const newClassId = pendingChange.newClass;
    const newClass = getClassById(newClassId);

    const locale = lang.code === "id" ? "id-ID" : "en-US";
    const fmtNum = (n) => Number(n).toLocaleString(locale);
    const costStr = fmtNum(CLASS_CHANGE_COST);
    const goldStr = fmtNum(player.gold);

    if (player.gold < CLASS_CHANGE_COST) {
      pendingClassChanges.delete(playerJid);
      return LenwyText(
        getText(lang, "registerCmd.yesInsufficientFunds", {
          cost: costStr,
          gold: goldStr,
        }),
      );
    }

    player.gold -= CLASS_CHANGE_COST;
    const oldClass = player.class;
    const returnedBooks = [];

    if (player.learnedSkills && player.learnedSkills.length > 0) {
      for (const skillId of player.learnedSkills) {
        const bookId = `skill_book_${skillId}`;
        const existingBook = player.inventory.find((item) => item.id === bookId);
        if (existingBook) {
          existingBook.qty += 1;
        } else {
          player.inventory.push({ id: bookId, qty: 1 });
        }
        returnedBooks.push(bookId);
      }
    }

    player.class = newClassId;
    const levelBonus = (player.level - 1) * 5;
    player.stats = {
      hp: newClass.baseStats.hp,
      maxHp: newClass.baseStats.maxHp + levelBonus,
      mana: newClass.baseStats.mana,
      maxMana: newClass.baseStats.maxMana + levelBonus,
      attack: newClass.baseStats.attack + levelBonus,
      defense: newClass.baseStats.defense + levelBonus,
      agility: newClass.baseStats.agility + levelBonus,
      luck: newClass.baseStats.luck + levelBonus,
      physicalAtk: newClass.baseStats.physicalAtk,
      magicalAtk: newClass.baseStats.magicalAtk,
      hybridAtk: newClass.baseStats.hybridAtk,
      physicalDef: newClass.baseStats.physicalDef,
      magicalDef: newClass.baseStats.magicalDef,
      hybridDef: newClass.baseStats.hybridDef,
    };

    player.skills = [
      { ...newClass.starterSkill },
      {
        id: null,
        name: null,
        effect: null,
        value: 0,
        manaCost: 0,
        cooldown: 0,
        cooldownRemaining: 0,
        description: null,
      },
      {
        id: null,
        name: null,
        effect: null,
        value: 0,
        manaCost: 0,
        cooldown: 0,
        cooldownRemaining: 0,
        description: null,
      },
    ];
    player.learnedSkills = [];
    player.passive = { ...newClass.passive };

    players[playerJid] = player;
    savePlayers(players);
    pendingClassChanges.delete(playerJid);

    let message =
      getText(lang, "registerCmd.classChangedOk") +
      getText(lang, "registerCmd.changeOldNew", {
        oldCls,
        emoji: newClass.emoji,
        newName: newClass.name,
        spent: fmtNum(CLASS_CHANGE_COST),
        remain: fmtNum(player.gold),
      });

    if (returnedBooks.length > 0) {
      message += getText(lang, "registerCmd.returnedBooksTitle");
      for (const bookId of returnedBooks) {
        const title = bookId.replace("skill_book_", "").replace(/_/g, " ");
        message += getText(lang, "registerCmd.returnedBookLine", { title });
      }
      message += `\n`;
    }

    message += getText(lang, "registerCmd.newStatsTitle");
    message += getText(lang, "registerCmd.statLineHp", { v: String(player.stats.maxHp) });
    message += getText(lang, "registerCmd.statLineMana", { v: String(player.stats.maxMana) });
    message += getText(lang, "registerCmd.statLineAtk", { v: String(player.stats.attack) });
    message += getText(lang, "registerCmd.statLineDef", { v: String(player.stats.defense) });
    message += getText(lang, "registerCmd.statLineAgi", { v: String(player.stats.agility) });
    message += getText(lang, "registerCmd.statLineLuck", { v: String(player.stats.luck) });
    message += getText(lang, "registerCmd.newStarterSkill", {
      name: player.skills[0].name,
      desc: player.skills[0].description,
    });
    message += getText(lang, "registerCmd.newPassive", {
      name: player.passive.name,
      desc: player.passive.description,
    });
    message += getText(lang, "registerCmd.profileFooterClassChange", { prefix: px });

    return LenwyText(message);
  }

  if (command === "no") {
    const lang = getLanguage(
      players[playerJid] ? getPlayerLanguage(players[playerJid]) : "id",
    );
    const pendingChange = pendingClassChanges.get(playerJid);
    if (!pendingChange) {
      return LenwyText(getText(lang, "registerCmd.noPendingChange"));
    }
    pendingClassChanges.delete(playerJid);
    return LenwyText(getText(lang, "registerCmd.changeCancelled"));
  }
}
