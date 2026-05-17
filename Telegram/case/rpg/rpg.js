import { db } from "../../database/db.js";

export const info = {
  name: "RPG",
  case: ["rpg"],
  description: "Menu utama RPG",
  hidden: false, owner: false, group: false, private: false,
};

const makeBar = (current, max, len = 8) => {
  const filled = Math.round((current / max) * len);
  return "▰".repeat(Math.max(0, filled)) + "▱".repeat(Math.max(0, len - filled));
};

const getRank = (level) => {
  if (level >= 50) return { rank: "Legendary", icon: "👑" };
  if (level >= 30) return { rank: "Master",    icon: "💎" };
  if (level >= 20) return { rank: "Expert",    icon: "🔥" };
  if (level >= 10) return { rank: "Warrior",   icon: "⚔️" };
  if (level >= 5)  return { rank: "Soldier",   icon: "🛡" };
  return                   { rank: "Novice",   icon: "🌱" };
};

const rpgKeyboard = {
  inline_keyboard: [
    [
      { text: "👤 Profile",     callback_data: "rpg_profile" },
      { text: "⚔️ Battle",      callback_data: "rpg_battle"  },
    ],
    [
      { text: "🎁 Daily",       callback_data: "rpg_daily"   },
      { text: "❤️ Heal",        callback_data: "rpg_heal"    },
    ],
    [
      { text: "🏪 Shop",        callback_data: "rpg_shop"    },
      { text: "🎒 Inventory",   callback_data: "rpg_inv"     },
    ],
    [
      { text: "🏆 Leaderboard", callback_data: "rpg_top"     },
    ],
  ],
};

const buildCaption = (user) => {
  const hpBar      = makeBar(user.hp, user.maxHp);
  const expBar     = makeBar(user.exp, user.expNeeded);
  const { rank, icon } = getRank(user.level);
  const hpPercent  = Math.round((user.hp / user.maxHp) * 100);
  const expPercent = Math.round((user.exp / user.expNeeded) * 100);

  return `<blockquote>🗡 <b>LENWY RPG</b> 🗡

${icon} <b>${user.name}</b>
✦ <b>${rank}</b> — Level <code>${user.level}</code>

💰 <code>${user.money.toLocaleString()} Gold</code>
⚔️ ATK <code>${user.atk}</code>  🛡 DEF <code>${user.def}</code>

❤️ HP  ${hpBar} <code>${hpPercent}%</code>
✨ EXP ${expBar} <code>${expPercent}%</code></blockquote>`;
};

export const buildRpgMenu = async (ctx, editMode = false) => {
  const id      = String(ctx.from.id);
  const user    = db.getUser(id, ctx.from.first_name);
  const caption = buildCaption(user);

  if (editMode) {
    await ctx.editMessageCaption(caption, {
      parse_mode:   "HTML",
      reply_markup: rpgKeyboard,
    });
    return;
  }

  await ctx.replyWithPhoto(
    { url: "https://files.catbox.moe/os0c3a.jpeg" },
    { caption, parse_mode: "HTML", reply_markup: rpgKeyboard }
  );
};

export default async function handler(leni) {
  const { ctx } = leni;
  await buildRpgMenu(ctx, false);
}
