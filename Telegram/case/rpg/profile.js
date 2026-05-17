import { db } from "../../database/db.js";

export const info = {
  name: "Profile",
  case: ["profile", "stats", "me"],
  description: "Lihat profil karakter kamu",
  hidden: false, owner: false, group: false, private: false,
};

const makeBar = (current, max, len = 10) => {
  const filled = Math.round((current / max) * len);
  return "■".repeat(Math.max(0, filled)) + "□".repeat(Math.max(0, len - filled));
};

export default async function handler(leni) {
  const { ctx, LenwyText, backButton } = leni;
  const user = db.getUser(String(ctx.from.id), ctx.from.first_name);

  const hpBar  = makeBar(user.hp, user.maxHp);
  const expBar = makeBar(user.exp, user.expNeeded);

  const text = `<blockquote>👤 <b>${user.name}</b>

🏅 Level    : <code>${user.level}</code>
⚔️ ATK      : <code>${user.atk}</code>
🛡 DEF      : <code>${user.def}</code>
💰 Money    : <code>${user.money.toLocaleString()}</code>

❤️ HP   ${hpBar} <code>${user.hp}/${user.maxHp}</code>
✨ EXP  ${expBar} <code>${user.exp}/${user.expNeeded}</code>

🎒 Inventory  : <code>${user.inventory.length} item</code></blockquote>`;

  await LenwyText(text, backButton("rpg"));
}
