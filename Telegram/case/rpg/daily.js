import { db, getRewards } from "../../database/db.js";

export const info = {
  name: "Daily",
  case: ["daily", "reward"],
  description: "Klaim reward harian",
  hidden: false, owner: false, group: false, private: false,
};

export default async function handler(leni) {
  const { ctx, LenwyText, backButton } = leni;
  const id   = String(ctx.from.id);
  const user = db.getUser(id, ctx.from.first_name);

  if (!db.canDaily(id)) {
    const next = new Date(user.daily + 24 * 60 * 60 * 1000);
    const diff = next - Date.now();
    const h    = Math.floor(diff / 3600000);
    const m    = Math.floor((diff % 3600000) / 60000);
    return LenwyText(
      `<blockquote>⏳ <b>Daily sudah diklaim!</b>\n\nCoba lagi dalam <code>${h}h ${m}m</code></blockquote>`,
      backButton("rpg")
    );
  }

  const rewards  = getRewards();
  const reward   = rewards[Math.floor(Math.random() * rewards.length)];
  db.addMoney(id, reward.money);
  const expResult = db.addExp(id, reward.exp);
  db.setDaily(id);

  let text = `<blockquote>🎁 <b>DAILY REWARD</b>\n\n💰 Money   : <code>+${reward.money}</code>\n✨ EXP     : <code>+${reward.exp}</code>`;
  if (expResult?.levelUp) {
    const updated = db.getUser(id);
    text += `\n\n🎉 <b>LEVEL UP!</b> Sekarang level <code>${updated.level}</code>!`;
  }
  text += `</blockquote>`;

  await LenwyText(text, backButton("rpg"));
}
