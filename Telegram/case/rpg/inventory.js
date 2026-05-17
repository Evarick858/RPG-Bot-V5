import { db } from "../../database/db.js";

export const info = {
  name: "Inventory",
  case: ["inventory", "inv", "bag"],
  description: "Lihat item yang kamu punya",
  hidden: false, owner: false, group: false, private: false,
};

export default async function handler(leni) {
  const { ctx, LenwyText, backButton } = leni;
  const user = db.getUser(String(ctx.from.id), ctx.from.first_name);

  if (!user.inventory.length)
    return LenwyText(`<blockquote>🎒 <b>Inventory kosong!</b></blockquote>`, backButton("rpg"));

  let text = `<blockquote>🎒 <b>INVENTORY</b>\n\n`;
  user.inventory.forEach((item) => {
    text += `${item.emoji || "📦"} <b>${item.name}</b> x<code>${item.qty}</code>\n`;
  });
  text += `</blockquote>`;

  await LenwyText(text, backButton("rpg"));
}
