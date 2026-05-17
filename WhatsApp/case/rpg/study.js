/*
  !study Command
  Base : Lenwy SCM — RPG Extension

  Two modes:
  1. !study - Discover new crafting recipes based on materials in your bag
  2. !study <skill_name> - Learn skills from skill books in your inventory
*/

import fs from "fs";
import path from "path";
import { getSkillById } from "../../database/rpg/skills.js";
import { items } from "../../database/rpg/items.js";
import { getDiscoverableRecipes } from "../../database/rpg/recipes.js";
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
  const updated = {
    _comment: data._comment,
    _template: data._template,
    ...players,
  };
  fs.writeFileSync(playersPath, JSON.stringify(updated, null, 2), "utf8");
}

function recipePluralSuffix(lang, n) {
  return lang.code === "en" && n !== 1 ? "s" : "";
}

export const info = {
  name: "Study",
  menu: ["study"],
  case: ["study", "learn"],
  description: "Discover recipes or learn skills from skill books",
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
  const { lenwy, normalizedSender, LenwyText, q } = leni;
  const sender = normalizedSender;

  const botJid = lenwy.user?.id?.split(":")[0] + "@s.whatsapp.net";
  if (sender === botJid) return;

  const players = loadPlayers();
  const player = players[sender];

  if (!player) {
    const langU = getLanguage("id");
    return LenwyText(getText(langU, "studyCmd.notRegistered"));
  }

  const lang = getLanguage(getPlayerLanguage(player));

  if (!q.trim()) {
    if (!player.knownRecipes) {
      player.knownRecipes = [];
    }

    const playerBag = {};
    for (const item of player.inventory || []) {
      playerBag[item.id] = item.qty;
    }

    const discoverable = getDiscoverableRecipes(playerBag, player.knownRecipes);

    if (discoverable.length > 0) {
      const newRecipes = [];
      for (const recipe of discoverable) {
        player.knownRecipes.push(recipe.id);
        newRecipes.push(recipe);
      }

      players[sender] = player;
      savePlayers(players);

      const byCategory = {};
      for (const recipe of newRecipes) {
        if (!byCategory[recipe.category]) {
          byCategory[recipe.category] = [];
        }
        byCategory[recipe.category].push(recipe);
      }

      let message = getText(lang, "studyCmd.recipesDiscoveredTitle");
      message += getText(lang, "studyCmd.recipesDiscoveredCount", {
        n: String(newRecipes.length),
        suffix: recipePluralSuffix(lang, newRecipes.length),
      });

      for (const [category, recipeList] of Object.entries(byCategory)) {
        message += getText(lang, "studyCmd.categoryHeader", {
          category: category.toUpperCase(),
        });

        for (const recipe of recipeList) {
          const resultItem = items[recipe.result.itemId];
          message += getText(lang, "studyCmd.recipeLineOk", {
            name: resultItem?.name || recipe.result.itemId,
          });
        }
        message += "\n";
      }

      message += getText(lang, "studyCmd.nextStepsTitle");
      message += getText(lang, "studyCmd.nextStepsBullets");

      return LenwyText(message);
    }

    const skillBooks = (player.inventory || []).filter((item) => item.id.startsWith("skill_book_"));

    if (skillBooks.length === 0) {
      const recipeCount = player.knownRecipes ? player.knownRecipes.length : 0;

      let message = getText(lang, "studyCmd.studyMenuTitle");

      if (recipeCount > 0) {
        message += getText(lang, "studyCmd.haveRecipesKnown", {
          n: String(recipeCount),
          suffix: recipePluralSuffix(lang, recipeCount),
        });
        message += getText(lang, "studyCmd.noNewRecipesSkill");
        message += getText(lang, "studyCmd.noBooksIntro");
        message += getText(lang, "studyCmd.hintsWithRecipes");
      } else {
        message += getText(lang, "studyCmd.noRecipesNoBooksHeader");
        message += getText(lang, "studyCmd.howDiscoverBullets");
        message += getText(lang, "studyCmd.learnSkillsBullets");
      }

      return LenwyText(message);
    }

    const bookList = skillBooks
      .map((item) => {
        const skillName = item.id.replace("skill_book_", "");
        return `📖 *${skillName}* (x${item.qty})`;
      })
      .join("\n");

    return LenwyText(getText(lang, "studyCmd.booksTitle") + bookList + getText(lang, "studyCmd.booksUsage"));
  }

  const skillInput = q.trim().toLowerCase().replace(/\s+/g, "_");
  const bookId = `skill_book_${skillInput}`;

  const invItem = (player.inventory || []).find((i) => i.id === bookId);
  if (!invItem || invItem.qty <= 0) {
    return LenwyText(getText(lang, "studyCmd.noSkillBookInv", { skill: skillInput }));
  }

  const itemData = items[bookId];

  if (!itemData) {
    return LenwyText(getText(lang, "studyCmd.bookDbMissing", { id: bookId }));
  }

  const skillId = itemData.skillId;
  const skillData = getSkillById(skillId);

  if (!skillData) {
    return LenwyText(getText(lang, "studyCmd.skillDbMissing", { id: skillId }));
  }

  const requiredClasses = itemData.requiredClass || [];
  if (!requiredClasses.includes("all") && !requiredClasses.includes(player.class)) {
    const classNames = requiredClasses.map((c) => c.charAt(0).toUpperCase() + c.slice(1)).join(", ");
    return LenwyText(
      getText(lang, "studyCmd.classReqFail", {
        bookName: itemData.name,
        needed: classNames,
        yours: player.class.charAt(0).toUpperCase() + player.class.slice(1),
      }),
    );
  }

  const requiredLevel = itemData.requiredLevel || 1;
  if (player.level < requiredLevel) {
    return LenwyText(
      getText(lang, "studyCmd.levelReqFail", {
        bookName: itemData.name,
        needed: String(requiredLevel),
        yours: String(player.level),
      }),
    );
  }

  const learnedSkills = player.learnedSkills || [];
  if (learnedSkills.includes(skillId)) {
    return LenwyText(getText(lang, "studyCmd.alreadyKnown", { skill: skillData.name }));
  }

  if (!player.learnedSkills) player.learnedSkills = [];
  player.learnedSkills.push(skillId);

  invItem.qty--;
  if (invItem.qty <= 0) {
    player.inventory = player.inventory.filter((i) => i.id !== bookId);
  }

  player.lastActive = new Date().toISOString();
  players[sender] = player;
  savePlayers(players);

  let effectDesc = getText(lang, "studyCmd.effectNone");
  if (skillData.effect) {
    const durPart = skillData.duration
      ? getText(lang, "studyCmd.effectTurnSuffix", { n: String(skillData.duration) })
      : "";
    effectDesc = `${skillData.effect}${skillData.value ? ` (${skillData.value})` : ""}${durPart}`;
  }

  let dmgLine = "";
  if (skillData.damage) {
    dmgLine = getText(lang, "studyCmd.dmgLineTpl", { dmg: String(skillData.damage) });
  }
  let valDamageLine = "";
  if (skillData.value && skillData.effect === "damage") {
    valDamageLine = getText(lang, "studyCmd.valDamageLineTpl", { val: String(skillData.value) });
  }

  const body =
    getText(lang, "studyCmd.learnedTitle") +
    getText(lang, "studyCmd.learnedBody", {
      emoji: skillData.emoji || "📖",
      name: skillData.name,
      rarity: skillData.rarity || "Common",
      category: skillData.category || "Active",
      description: skillData.description || "",
      mana: String(skillData.manaCost),
      cd: String(skillData.cooldown),
      dmgType: skillData.damageType || "none",
      dmgLine,
      valDamageLine,
      effectDesc,
    }) +
    getText(lang, "studyCmd.equipHintFooter", { skillId });

  return LenwyText(body);
}
