import { db, getMonsters } from "../../database/db.js";

export const info = {
  name: "Battle",
  case: ["battle", "hunt", "fight"],
  description: "Lawan monster & dapatkan reward",
  hidden: false, owner: false, group: false, private: false,
};

export default async function handler(leni) {
  const { ctx, LenwyText, backButton } = leni;
  const id   = String(ctx.from.id);
  const user = db.getUser(id, ctx.from.first_name);

  if (user.hp <= 0) {
    return LenwyText(
      `<blockquote>💀 <b>HP kamu habis!</b>\n\nGunakan Heal untuk memulihkan HP.</blockquote>`,
      backButton("rpg")
    );
  }

  const MONSTERS = getMonsters();
  const pool     = MONSTERS.filter((m) => m.exp <= user.level * 30 + 30);
  const monster  = pool[Math.floor(Math.random() * pool.length)];

  let playerHp  = user.hp;
  let monsterHp = monster.hp;
  const log     = [];
  let turn      = 0;

  while (playerHp > 0 && monsterHp > 0 && turn < 20) {
    const playerDmg  = Math.max(1, user.atk - monster.def + Math.floor(Math.random() * 5));
    monsterHp       -= playerDmg;
    log.push(`⚔️ Kamu <code>-${playerDmg} HP</code>`);
    if (monsterHp <= 0) break;

    const monsterDmg = Math.max(1, monster.atk - user.def + Math.floor(Math.random() * 3));
    playerHp        -= monsterDmg;
    log.push(`${monster.emoji} ${monster.name} <code>-${monsterDmg} HP</code>`);
    turn++;
  }

  const win = monsterHp <= 0;
  db.setHp(id, Math.max(0, playerHp));

  let text = `<blockquote>⚔️ <b>BATTLE</b>\n\nVS ${monster.emoji} <b>${monster.name}</b>\n\n${log.slice(-6).join("\n")}\n\n`;

  if (win) {
    db.addMoney(id, monster.money);
    const expResult = db.addExp(id, monster.exp);
    const updated   = db.getUser(id);
    text += `✅ <b>Menang!</b>\n💰 <code>+${monster.money}</code>\n✨ <code>+${monster.exp} EXP</code>\n❤️ HP <code>${updated.hp}/${updated.maxHp}</code>`;
    if (expResult?.levelUp) text += `\n\n🎉 <b>LEVEL UP! → Level ${updated.level}</b>`;
  } else {
    text += `💀 <b>Kalah!</b>\n❤️ HP <code>${Math.max(0, playerHp)}/${user.maxHp}</code>`;
  }

  text += `</blockquote>`;
  await LenwyText(text, backButton("rpg"));
}
