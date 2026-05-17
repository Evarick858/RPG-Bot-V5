import "./len.js";
import { Telegraf } from "telegraf";
import { loadCommands, handleMessage } from "./handler.js";

export default async function startTelegram() {
  const bot = new Telegraf(globalThis.tgToken);

  await loadCommands();

  const mainKeyboard = {
    keyboard: [
      [{ text: "📋 Menu" }, { text: "⚡ Ping" }],
    ],
    resize_keyboard: true,
    persistent: true,
  };

  handleMessage(bot, mainKeyboard);

  process.once("SIGINT",  () => bot.stop("SIGINT"));
  process.once("SIGTERM", () => bot.stop("SIGTERM"));

  bot.launch({
    allowedUpdates: ["message", "callback_query"],
  }).catch((err) => console.error("❌ Bot error:", err.message));

  console.log("☘️ Telegram Bot Connected!");
}