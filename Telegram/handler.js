import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export const commands = new Map();

const formatUptime = (seconds) => {
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = Math.floor(seconds % 60);
  return `${h}h ${m}m ${s}s`;
};

const log = {
  info:  (msg) => console.log(`\x1b[36m[INFO]\x1b[0m  ${msg}`),
  ok:    (msg) => console.log(`\x1b[32m[OK]\x1b[0m    ${msg}`),
  warn:  (msg) => console.log(`\x1b[33m[WARN]\x1b[0m  ${msg}`),
  error: (msg) => console.log(`\x1b[31m[ERR]\x1b[0m   ${msg}`),
  msg:   (user, text) => console.log(`\x1b[35m[MSG]\x1b[0m   @${user} → ${text}`),
  cb:    (user, data) => console.log(`\x1b[34m[BTN]\x1b[0m   @${user} → ${data}`),
};

const QUOTES = [
  "Kekuatan sejati bukan soal menang, tapi soal bangkit.",
  "Setiap perjalanan dimulai dari satu langkah.",
  "Jadilah cahaya di tengah kegelapan.",
  "Yang kuat bukan yang tak pernah jatuh, tapi yang selalu bangkit.",
  "Dunia ini milik mereka yang berani bermimpi.",
];

const startKeyboard = {
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
};

const rpgSubMap = {
  rpg_profile: "profile",
  rpg_battle:  "battle",
  rpg_daily:   "daily",
  rpg_heal:    "heal",
  rpg_shop:    "shop",
  rpg_inv:     "inventory",
  rpg_top:     "leaderboard",
};

export async function loadCommands() {
  commands.clear();
  const caseDir    = path.join(__dirname, "case");
  const categories = fs.readdirSync(caseDir).filter((f) =>
    fs.statSync(path.join(caseDir, f)).isDirectory()
  );

  for (const cat of categories) {
    const files = fs
      .readdirSync(path.join(caseDir, cat))
      .filter((f) => f.endsWith(".js"));

    for (const file of files) {
      const filePath = path.join(caseDir, cat, file);
      try {
        const mod = await import(`${filePath}?t=${Date.now()}`);
        if (!mod.info || !mod.default) continue;
        for (const cmd of mod.info.case) {
          commands.set(cmd.toLowerCase(), {
            info:    mod.info,
            handler: mod.default,
            file:    `${cat}/${file}`,
          });
        }
        log.ok(`${cat}/${file}`);
      } catch (err) {
        log.error(`Failed to load ${cat}/${file} — ${err.message}`);
      }
    }
  }

  log.info(`Total commands: ${commands.size}`);
}

export function makeLeni(ctx, bot, cmd, q, mainKeyboard) {
  const isOwner   = globalThis.tgOwner.includes(String(ctx.from.id));
  const isGroup   = ["group", "supergroup"].includes(ctx.chat.type);
  const isPrivate = ctx.chat.type === "private";
  const isCallback = !!ctx.callbackQuery;

  const replyOrEdit = (text, extra = {}) => {
    if (isCallback) {
      return ctx.editMessageCaption(text, { parse_mode: "HTML", ...extra });
    }
    return ctx.reply(text, { parse_mode: "HTML", ...extra });
  };

  const backButton = (cb = "back_start") => ({
    reply_markup: {
      inline_keyboard: [[{ text: "🔙 Back", callback_data: cb }]],
    },
  });

  return {
    ctx, bot, q,
    command:    cmd,
    isOwner,    isGroup, isPrivate, isCallback,
    sender:     String(ctx.from.id),
    chatId:     ctx.chat.id,
    keyboard:   mainKeyboard,
    backButton,
    LenwyText:  (t, extra = {}) => replyOrEdit(t, extra),
    LenwyWait:  () => replyOrEdit(globalThis.tgMess.wait),
    LenwyImage: (url, caption = "") => ctx.replyWithPhoto(url, { caption, parse_mode: "HTML" }),
    LenwyVideo: (url, caption = "") => ctx.replyWithVideo(url, { caption, parse_mode: "HTML" }),
    LenwyAudio: (url) => ctx.replyWithAudio(url),
  };
}

export function handleMessage(bot, mainKeyboard) {

  bot.on("text", async (ctx) => {
    const text    = ctx.message?.text || "";
    const uname   = ctx.from.username || String(ctx.from.id);
    const isOwner = globalThis.tgOwner.includes(String(ctx.from.id));

    log.msg(uname, text);

    const buttonMap = {
      "📋 Menu": async () => {
        let menuText = "<b>📋 DAFTAR COMMAND</b>\n\n";
        const seen   = new Set();
        for (const [, { info }] of commands) {
          if (info.hidden || seen.has(info.name)) continue;
          seen.add(info.name);
          menuText += `/${info.case[0]} — ${info.description}\n`;
        }
        ctx.reply(menuText, { parse_mode: "HTML" });
      },
      "⚡ Ping": async () => {
        const found = commands.get("ping");
        if (found) await found.handler(makeLeni(ctx, bot, "ping", "", mainKeyboard));
      },
    };

    if (buttonMap[text]) return buttonMap[text]();
    if (!text.startsWith("/")) return;

    const [rawCmd, ...argArr] = text.slice(1).split(" ");
    const cmd   = rawCmd.toLowerCase().split("@")[0];
    const q     = argArr.join(" ").trim();
    const found = commands.get(cmd);

    if (!found) return;

    const { info, handler } = found;
    const leni = makeLeni(ctx, bot, cmd, q, mainKeyboard);

    if (info.owner   && !leni.isOwner)   return ctx.reply(globalThis.tgMess.owner);
    if (info.group   && !leni.isGroup)   return ctx.reply(globalThis.tgMess.group);
    if (info.private && !leni.isPrivate) return ctx.reply(globalThis.tgMess.private);

    try {
      await handler(leni);
    } catch (err) {
      log.error(`/${cmd} — ${err.message}`);
      ctx.reply(globalThis.tgMess.error);
    }
  });

  bot.on("callback_query", async (ctx) => {
    const data  = ctx.callbackQuery.data;
    const uname = ctx.from.username || String(ctx.from.id);

    await ctx.answerCbQuery();
    log.cb(uname, data);

    const isOwner = globalThis.tgOwner.includes(String(ctx.from.id));

    if (data === "menu") {
      let menuText = "<b>📋 DAFTAR COMMAND</b>\n\n";
      const seen = new Set();
      for (const [, { info }] of commands) {
        if (info.hidden || seen.has(info.name)) continue;
        seen.add(info.name);
        menuText += `/${info.case[0]} — ${info.description}\n`;
      }
      return ctx.editMessageCaption(menuText, {
        parse_mode:   "HTML",
        reply_markup: { inline_keyboard: [[{ text: "🔙 Back", callback_data: "back_start" }]] },
      });
    }

    if (data === "ping") {
      const found = commands.get("ping");
      if (found) await found.handler(makeLeni(ctx, bot, "ping", "", mainKeyboard));
      return;
    }

    if (data === "myinfo") {
      return ctx.editMessageCaption(
        `<blockquote>👤 <b>INFO KAMU</b>\n\n🪪 Nama   : <code>${ctx.from.first_name}</code>\n🆔 ID     : <code>${ctx.from.id}</code>\n👑 Role   : <code>${isOwner ? "Owner" : "User"}</code></blockquote>`,
        {
          parse_mode:   "HTML",
          reply_markup: { inline_keyboard: [[{ text: "🔙 Back", callback_data: "back_start" }]] },
        }
      );
    }

    if (data === "back_start") {
      const quote = QUOTES[Math.floor(Math.random() * QUOTES.length)];
      const name  = ctx.from.first_name || "User";
      return ctx.editMessageCaption(
        `<blockquote>✦ <b>LENWY SCM</b> ✦\n\n👋 Halo, <b>${name}</b>\n\n💬 <i>"${quote}"</i>\n\n📡 Status    : <code>Online</code>\n🛠 Dev       : <code>Shannyiee</code>\n🌠 Owner     : <code>Lenwyy</code>\n👑 Role      : <code>${isOwner ? "Owner" : "User"}</code></blockquote>`,
        { parse_mode: "HTML", reply_markup: startKeyboard }
      );
    }

    if (data === "rpg") {
      const { buildRpgMenu } = await import("./case/rpg/rpg.js");
      await buildRpgMenu(ctx, true);
      return;
    }

    if (rpgSubMap[data]) {
      const found = commands.get(rpgSubMap[data]);
      if (found) {
        const leni = makeLeni(ctx, bot, rpgSubMap[data], "", mainKeyboard);
        try {
          await found.handler(leni);
        } catch (err) {
          log.error(`callback:${data} — ${err.message}`);
        }
      }
      return;
    }

    const found = commands.get(data);
    if (found) {
      const leni = makeLeni(ctx, bot, data, "", mainKeyboard);
      try {
        await found.handler(leni);
      } catch (err) {
        log.error(`callback:${data} — ${err.message}`);
      }
    }
  });

  const caseDir = path.join(__dirname, "case");
  fs.watch(caseDir, { recursive: true }, async (event, filename) => {
    if (!filename?.endsWith(".js")) return;
    log.warn(`File changed: ${filename}`);
    await loadCommands();
    log.ok("Commands reloaded!");
  });
}
