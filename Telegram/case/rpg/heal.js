import { db } from "../../database/db.js";

export const info = {
  name: "Heal",
  case: ["heal", "rest"],
  description: "Pulihkan HP (bayar 100 gold)",
  hidden: false, owner: false, group: false, private: false,
};

export default async function handler(leni) {
  const { ctx, LenwyText, backButton } = leni;
  const id   = String(ctx.from.id);
  const user = db.getUser(id, ctx.from.first_name);
  const cost = 100;

  if (user.hp >= user.maxHp)
    return LenwyText(`<blockquote>❤️ <b>HP kamu sudah penuh!</b></blockquote>`, backButton("rpg"));

  if (user.money < cost)
    return LenwyText(
      `<blockquote>❌ <b>Uang tidak cukup!</b>\nButuh <code>${cost} gold</code> untuk heal.</blockquote>`,
      backButton("rpg")
    );

  db.addMoney(id, -cost);
  db.setHp(id, user.maxHp);

  await LenwyText(
    `<blockquote>✅ <b>HP pulih penuh!</b>\n\n❤️ <code>${user.maxHp}/${user.maxHp}</code>\n💰 <code>-${cost} gold</code></blockquote>`,
    backButton("rpg")
  );
}
