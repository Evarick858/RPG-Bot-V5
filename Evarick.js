/*  

  Made By Lenwy
  Base : Lenwy
  WhatsApp : wa.me/6283829814737
  Telegram : t.me/ilenwy
  Youtube : @Lenwy

  Channel : https://whatsapp.com/channel/0029VaGdzBSGZNCmoTgN2K0u

  Copy Code?, Recode?, Rename?, Reupload?, Reseller? Taruh Credit Ya :D

  Mohon Untuk Tidak Menghapus Watermark Di Dalam Kode Ini

*/

import chalk from "chalk";
import figlet from "figlet";
import { promisify } from "util";

const terminalWidth = process.stdout.columns;
const maxWidth = Math.min(terminalWidth, 50);

// Konfigurasi Bot
const config = {
  whatsapp: true,
  telegram: false,
};

// Fungsi utama
(async () => {
  try {
    if (config.whatsapp) {
      console.log(chalk.green.bold("\n🎁  Menjalankan Evarick Bot WhatsApp"));
      const { default: startWhatsApp } = await import("./WhatsApp/index.js");
      startWhatsApp();
    } else {
      console.log(
        chalk.red.bold("\n❌  Bot WhatsApp Dinonaktifkan Di Evarick.js"),
      );
    }

    if (config.telegram) {
      console.log(chalk.green.bold("\n🎁  Menjalankan Evarick Bot Telegram"));
      const { default: startTelegram } = await import("./Telegram/index.js");
      startTelegram();
    } else {
      console.log(
        chalk.red.bold("\n❌  Bot Telegram Dinonaktifkan Di Evarick.js\n"),
      );
    }

    const asyncFiglet = promisify(figlet.text);
    const logo = await asyncFiglet("Evarick", {
      font: "ANSI Shadow",
      horizontalLayout: "default",
      verticalLayout: "default",
      width: maxWidth,
      whitespaceBreak: false,
    });

    console.log(chalk.blue.bold(logo));

    console.log(
      chalk.white.bold(`${chalk.green.bold("📃  Informasi :")}         
✉️  Script Evarick Bot
✉️  Author : Evarick
🎁  Base : Lenwy SCM

${chalk.green.bold("🎁  Evarick Bot :D")}\n`),
    );
  } catch (err) {
    console.error(
      chalk.red.bold("\n⚠️  Terjadi Kesalahan : " + err.message + "\n"),
    );
  }
})();
