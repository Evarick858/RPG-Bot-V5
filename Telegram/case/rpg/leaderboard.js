import { db } from "../../database/db.js";

export const info = {
  name: "Leaderboard",
  case: ["leaderboard", "top", "rank"],
  description: "Ranking pemain teratas",
  hidden: false, owner: false, group: false, private: false,
};

export default async function handler(leni) {
  const { LenwyText, backButton } = leni;
  const top    = db.leaderboard(10);
  const medals = ["🥇", "🥈", "🥉"];

  let text = `<blockquote>🏆 <b>LEADERBOARD</b>\n\n`;
  top.forEach((user, i) => {
    const medal = medals[i] || `${i + 1}.`;
    text += `${medal} <b>${user.name}</b>\n   Lv.<code>${user.level}</code> ⚔️<code>${user.atk}</code> 🛡<code>${user.def}</code> 💰<code>${user.money.toLocaleString()}</code>\n\n`;
  });
  if (!top.length) text += `<i>Belum ada pemain.</i>`;
  text += `</blockquote>`;

  await LenwyText(text, backButton("rpg"));
}
