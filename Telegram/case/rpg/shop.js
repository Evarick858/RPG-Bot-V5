import { db, getItems } from "../../database/db.js";

export const info = {
  name: "Shop",
  case: ["shop", "buy", "toko"],
  description: "Beli item di toko",
  hidden: false, owner: false, group: false, private: false,
};

export default async function handler(leni) {
  const { ctx, q, LenwyText, backButton } = leni;
  const id         = String(ctx.from.id);
  const user       = db.getUser(id, ctx.from.first_name);
  const SHOP_ITEMS = getItems();

  if (!q) {
    let text = `<blockquote>🏪 <b>TOKO</b>\n\n💰 Saldo: <code>${user.money.toLocaleString()}</code>\n\n`;
    SHOP_ITEMS.forEach((item, i) => {
      text += `${i + 1}. ${item.emoji} <b>${item.name}</b>\n   ${item.desc} — <code>${item.price} gold</code>\n\n`;
    });
    text += `Beli dengan <code>/buy [nama item]</code></blockquote>`;
    return LenwyText(text, backButton("rpg"));
  }

  const item = SHOP_ITEMS.find((i) => i.name.toLowerCase().includes(q.toLowerCase()));
  if (!item) return LenwyText(`<blockquote>❌ Item <b>${q}</b> tidak ditemukan.</blockquote>`, backButton("rpg"));
  if (user.money < item.price) return LenwyText(
    `<blockquote>❌ <b>Uang tidak cukup!</b>\n\n💰 Saldo: <code>${user.money}</code>\nHarga: <code>${item.price}</code></blockquote>`,
    backButton("rpg")
  );

  db.addMoney(id, -item.price);

  if (item.effect.hp) {
    const updated = db.getUser(id);
    db.setHp(id, Math.min(updated.maxHp, updated.hp + item.effect.hp));
    return LenwyText(`<blockquote>✅ ${item.emoji} <b>${item.name}</b> digunakan!\n❤️ HP <code>+${item.effect.hp}</code></blockquote>`, backButton("rpg"));
  }
  if (item.effect.atk) { const u = db.getUser(id); u.atk += item.effect.atk; db.saveUser(u); }
  if (item.effect.def) { const u = db.getUser(id); u.def += item.effect.def; db.saveUser(u); }
  if (item.effect.exp) db.addExp(id, item.effect.exp);

  await LenwyText(
    `<blockquote>✅ ${item.emoji} <b>${item.name}</b> berhasil dibeli!\n💰 Sisa: <code>${db.getUser(id).money.toLocaleString()}</code></blockquote>`,
    backButton("rpg")
  );
}
