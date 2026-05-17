export const info = {
  name: "Start",
  case: ["start"],
  description: "Halaman utama bot",
  hidden: false,
  owner: false,
  group: false,
  private: false,
};

const QUOTES = [
  "Kekuatan sejati bukan soal menang, tapi soal bangkit.",
  "Setiap perjalanan dimulai dari satu langkah.",
  "Jadilah cahaya di tengah kegelapan.",
  "Yang kuat bukan yang tak pernah jatuh, tapi yang selalu bangkit.",
  "Dunia ini milik mereka yang berani bermimpi.",
];

export default async function handler(leni) {
  const { ctx, isOwner } = leni;
  const name  = ctx.from.first_name || "User";
  const quote = QUOTES[Math.floor(Math.random() * QUOTES.length)];

  const caption = `<blockquote>✦ <b>LENWY SCM</b> ✦

👋 Halo, <b>${name}</b>

💬 <i>"${quote}"</i>

📡 Status    : <code>Online</code>
🛠 Dev       : <code>Shannyiee</code>
🌠 Owner     : <code>Lenwyy</code>
👑 Role      : <code>${isOwner ? "Owner" : "User"}</code></blockquote>`;

  await ctx.replyWithPhoto(
    { url: "https://files.catbox.moe/ytb13z.jpg" },
    {
      caption,
      parse_mode: "HTML",
      reply_parameters: {
        message_id: ctx.message.message_id,
        quote:      ctx.message.text,
      },
      reply_markup: {
        inline_keyboard: [
          [
            { text: "📋 Menu",    callback_data: "menu"   },
            { text: "⚡ Ping",    callback_data: "ping"   },
          ],
          [
            { text: "⚔️ RPG",     callback_data: "rpg"    },
            { text: "👤 Profile", callback_data: "myinfo" },
          ],
          [
            { text: "🧑🏻‍💻 Admin",  url: "https://t.me/Shannyiee"       },
            { text: "💬 Support", url: "https://trakteer.id/ihsanny" },
          ],
        ],
      },
    }
  );
}
