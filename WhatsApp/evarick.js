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

// [ ===== Import File ===== ]
import "./eva.js";
import "./database/Menu/EvarickMenu.js";

// [ ===== Import RPG Session Handlers ===== ]
import { handleReel } from "./case/rpg/fishing.js";
import { handleHit } from "./case/rpg/mining.js";
import { handleChop } from "./case/rpg/chopping.js";
import { handleForageAnswer } from "./case/rpg/foraging.js";
import { handleCombatInput } from "./case/rpg/hunt.js";
import { handlePvPInput } from "./case/rpg/pvpCombat.js";
import { handleStoryChoice } from "./case/rpg/storyHandler.js";
import { handleTamingInput } from "./case/rpg/searching.js";
import { handlePartyCommand } from "./case/rpg/party.js";
import { handleDungeonCommand } from "./case/rpg/dungeon.js";
import { handleDungeonCombatInput } from "./database/rpg/dungeonCombat.js";

// [ ===== Import Centralized Session Manager ===== ]
import {
  fishingSessions,
  miningSessions,
  choppingSessions,
  foragingSessions,
  combatSessions,
  storySessions,
  searchingSessions,
} from "./database/rpg/sessionManager.js";
import { dungeonSessions } from "./case/rpg/dungeon.js";

// [ ===== Import Pustaka ===== ]
import fs from "fs";
import mime from "mime-types";
import { jidNormalizedUser } from "@whiskeysockets/baileys";
import path from "path";
import chalk from "chalk";
import { fileURLToPath } from "url";
import { dirname } from "path";

// Track Messages
const processedMessages = new Set();
const groupMetadataCache = new Map();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// Read Json File
function readJSONSync(pathFile) {
  try {
    return JSON.parse(fs.readFileSync(pathFile, "utf8"));
  } catch {
    return [];
  }
}

const pluginStatePath = path.join(
  process.cwd(),
  "WhatsApp",
  "database",
  "system",
  "plugins.json",
);

if (!fs.existsSync(pluginStatePath)) {
  fs.mkdirSync(path.dirname(pluginStatePath), { recursive: true });
  fs.writeFileSync(
    pluginStatePath,
    JSON.stringify({ disable: [], maintenance: [] }, null, 2),
  );
}

function readPluginState() {
  try {
    return JSON.parse(fs.readFileSync(pluginStatePath));
  } catch {
    return { disable: [], maintenance: [] };
  }
}

fs.watchFile(pluginStatePath, { interval: 1000 }, async () => {
  console.log(chalk.yellow.bold("[+] Plugins.json Berubah, Reloading State"));

  try {
    await loadPlugins();
    console.log(
      chalk.green.bold(`[+] Reload Selesai (${commands.size} Commands)`),
    );
  } catch (err) {
    console.error(chalk.red("❌ Gagal reload plugins.json:"), err);
  }
});

const caseDir = path.join(__dirname, "case");

let plugins = [];
let commands = new Map();
let categories = new Map();

async function loadPlugins() {
  plugins = [];
  commands.clear();
  categories.clear();

  const state = readPluginState();
  const disableList = state.disable || [];
  const maintenanceList = state.maintenance || [];

  const folders = fs.readdirSync(caseDir);

  for (let folder of folders) {
    const folderPath = path.join(caseDir, folder);
    if (!fs.statSync(folderPath).isDirectory()) continue;

    categories.set(folder.toLowerCase(), []);

    const files = fs.readdirSync(folderPath);

    for (let file of files) {
      if (!file.endsWith(".js")) continue;

      const module = await import(
        `./case/${folder}/${file}?update=${Date.now()}`
      );

      const plugin = module.default;
      const info = module.info;

      if (!plugin || !info) continue;

      const mainCommand = info.menu?.[0]?.toLowerCase();

      if (mainCommand) {
        info.enabled = !disableList.includes(mainCommand);
        info.maintenance = maintenanceList.includes(mainCommand);
      } else {
        info.enabled = true;
        info.maintenance = false;
      }

      plugins.push(plugin);

      for (let cmd of info.case) {
        commands.set(cmd.toLowerCase(), {
          execute: plugin,
          info,
          category: folder.toLowerCase(),
        });
      }

      categories.get(folder.toLowerCase()).push(info);
    }
  }
}

await loadPlugins();
globalThis.commands = commands;

let reloadTimeout;

function watchPlugins() {
  fs.watch(caseDir, { recursive: true }, (eventType, filename) => {
    if (!filename || !filename.endsWith(".js")) return;

    clearTimeout(reloadTimeout);

    reloadTimeout = setTimeout(async () => {
      console.log(chalk.yellow.bold(`[+] Reloading Plugins`));

      try {
        await loadPlugins();
        console.log(
          chalk.green.bold(`[+] Reload Selesai (${commands.size} Commands)`),
        );
      } catch (err) {
        console.error(chalk.red("❌ Gagal reload:"), err);
      }
    }, 500);
  });
}

watchPlugins();

// Export Handler
export default async (lenwy, m, meta) => {
  const { body, mediaType, sender: originalSender, pushname } = meta;
  const msg = m.messages[0];
  if (!msg.message) return;

  const replyJid = msg.key.remoteJid;

  let authJid = originalSender;

  const key = msg.key;
  if (key.participantAlt) {
    authJid = key.participantAlt;
  } else if (key.remoteJidAlt) {
    authJid = key.remoteJidAlt;
  }

  const sender = authJid;
  let normalizedSender = jidNormalizedUser(sender);
  
  // Additional normalization for @lid (channel JIDs) -> convert to @s.whatsapp.net
  if (normalizedSender && normalizedSender.includes("@lid")) {
    normalizedSender = normalizedSender.split("@")[0].split(":")[0] + "@s.whatsapp.net";
  }

  const senderJid = sender
    ? sender.split(":")[0].split("@")[0] // Ambil Nomor Saja
    : null;

  // console.log(chalk.yellow(`[DEBUG JID] Sender Original: ${originalSender}`));
  // console.log(chalk.yellow(`[DEBUG JID] Sender Auth (PN): ${sender}`));
  // console.log(chalk.green(`[DEBUG JID] Sender Normal: ${normalizedSender}`));

  if (msg.key.fromMe) return;

  // Anti Double
  if (processedMessages.has(msg.key.id)) return;
  processedMessages.add(msg.key.id);
  setTimeout(() => processedMessages.delete(msg.key.id), 30000);

  const pplu = fs.readFileSync(globalThis.MenuImage);
  const len = {
    key: {
      participant: `0@s.whatsapp.net`,
      remoteJid: replyJid,
    },
    message: {
      contactMessage: {
        displayName: `${pushname}`,
        vcard: `BEGIN:VCARD\nVERSION:3.0\nN:XL;Evarick,;;;\nFN: Evarick V1.0\nitem1.TEL;waid=${sender.split("@")[0]}:+${sender.split("@")[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,
        jpegThumbnail: pplu,
        thumbnail: pplu,
        sendEphemeral: true,
      },
    },
  };

  // Custom Reply
  const lenwyreply = (teks) => {
    const shouldQuote = isGroup ? { quoted: len } : {};
    return lenwy.sendMessage(replyJid, { text: teks }, shouldQuote);
  };

  // Gambar Menu
  const MenuImage = fs.readFileSync(globalThis.MenuImage);

  // Deteksi Grup & Admin
  const isGroup = replyJid.endsWith("@g.us");

  // Bot Admin
  let isAdmin = false;
  let isBotAdmin = false;

  const GROUP_CACHE_TTL = 10 * 1000; // 10 Detik

  if (isGroup) {
    let metadataData = groupMetadataCache.get(replyJid);

    if (!metadataData || Date.now() - metadataData.time > GROUP_CACHE_TTL) {
      try {
        const metadata = await lenwy.groupMetadata(replyJid);
        groupMetadataCache.set(replyJid, { data: metadata, time: Date.now() });
        metadataData = groupMetadataCache.get(replyJid);
      } catch (e) {
        console.error("Gagal mengambil metadata grup:", e);
      }
    }

    const metadata = metadataData?.data;

    if (metadata) {
      const participants = metadata.participants;

      // Deteksi Format JID
      const isLidGroup = participants.some((p) => p.id.endsWith("@lid"));

      const normalizeJid = (jid) => {
        if (!jid) return "";
        return jid.split(":")[0].split("@")[0] + "@s.whatsapp.net";
      };

      let botJidForSearch;

      if (isLidGroup) {
        const rawLid = lenwy.user?.lid ?? lenwy.user?.id;
        botJidForSearch = rawLid.split(":")[0].split("@")[0] + "@lid";
      } else {
        botJidForSearch = normalizeJid(lenwy.user.id);
      }

      const senderJidClean = msg.key.participant ?? "";
      const userParticipant = participants.find((p) => p.id === senderJidClean);

      if (userParticipant) {
        isAdmin =
          userParticipant.admin === "admin" ||
          userParticipant.admin === "superadmin";
      }

      const botParticipant = participants.find((p) => p.id === botJidForSearch);

      isBotAdmin =
        botParticipant?.admin === "admin" ||
        botParticipant?.admin === "superadmin" ||
        false;

      // console.log("[BOT SEARCH JID]", botJidForSearch);
      // console.log("[BOT PARTICIPANT]", botParticipant);
      // console.log("[IS BOT ADMIN]", isBotAdmin);
    }
  }

  // Premium
  const premiumPath = path.join(
    process.cwd(),
    "WhatsApp",
    "database",
    "premium.json",
  );
  const premiumUsers = readJSONSync(premiumPath);
  const isPremium = premiumUsers.includes(normalizedSender);

  // Creator
  const CreatorPath = path.join(
    process.cwd(),
    "WhatsApp",
    "database",
    "creator.json",
  );
  const isCreatorArray = readJSONSync(CreatorPath);
  const isEvarick = isCreatorArray.includes(normalizedSender);

  // Delete Message
  async function deleteMessage(msgKey, tag = "DELETE") {
    if (!msgKey) return;
    try {
      await lenwy.sendMessage(replyJid, {
        delete: {
          remoteJid: replyJid,
          fromMe: msgKey.fromMe ?? true,
          id: msgKey.id,
          participant: msgKey.participant || undefined,
        },
      });
      console.log(chalk.red.bold(`[${tag}]`), `Pesan Dihapus (${msgKey.id})`);
    } catch (err) {
      console.error(`[${tag}] Gagal hapus pesan:`, err);
    }
  }

  let usedPrefix = null;
  for (const pre of globalThis.prefix) {
    if (body.startsWith(pre)) {
      usedPrefix = pre;
      break;
    }
  }

  // ── RPG Session Interceptor ──────────────────────────────
  // Handles no-prefix RPG inputs when player has an active session
  // Must run BEFORE the prefix filter so "reel", "attack" etc. work
  const bodyLower = body.trim().toLowerCase();
  const botJidCheck = lenwy.user?.id?.split(":")[0] + "@s.whatsapp.net";

  if (normalizedSender !== botJidCheck) {
    // Fishing: handle "reel" input
    if (bodyLower === "reel" && fishingSessions.has(normalizedSender)) {
      await handleReel(lenwy, replyJid, normalizedSender);
      return;
    }

    // Mining: handle "hit" input
    if (bodyLower === "hit" && miningSessions.has(normalizedSender)) {
      await handleHit(lenwy, replyJid, normalizedSender);
      return;
    }

    // Chopping: handle "swing" mid-session input
    if (bodyLower === "swing" && choppingSessions.has(normalizedSender)) {
      await handleChop(lenwy, replyJid, normalizedSender);
      return;
    }

    // Foraging: handle pattern answer input
    if (foragingSessions.has(normalizedSender)) {
      const s = foragingSessions.get(normalizedSender);
      
      // Allow answers during both "showing" and "answering" phases
      // (player might answer before the 4-second timeout)
      if (s.phase === "showing" || s.phase === "answering") {
        // Check if this looks like an answer (contains forage keywords)
        const forageKeywords = ["leaf", "shroom", "flower", "root", "berry"];
        const hasForageKeyword = forageKeywords.some(kw => bodyLower.includes(kw));
        
        if (hasForageKeyword) {
          // Cancel the hide timeout if still in "showing" phase
          if (s.phase === "showing" && s.hideTimeout) {
            clearTimeout(s.hideTimeout);
            s.phase = "answering"; // Move to answering phase immediately
          }
          
          await handleForageAnswer(lenwy, replyJid, normalizedSender, body.trim().toLowerCase());
          return;
        }
      }
    }

    // Combat: handle attack/defend/skill/item/run/status
    const combatCommands = ["attack", "defend", "skill", "item", "run", "status"];
    const firstWord = bodyLower.split(" ")[0];
    
    // Remove prefix if present for combat commands
    const firstWordClean = firstWord.startsWith("!") || firstWord.startsWith(".") || 
                           firstWord.startsWith("#") || firstWord.startsWith("/") 
                           ? firstWord.slice(1) 
                           : firstWord;
    
    // Check for dungeon combat first
    let inDungeonCombat = false;
    for (const [partyId, session] of dungeonSessions.entries()) {
      if (session.party && session.party.members.includes(normalizedSender) && session.combat) {
        inDungeonCombat = true;
        if (combatCommands.includes(firstWordClean)) {
          const cleanBody = body.trim();
          const bodyToSend = cleanBody.startsWith("!") || cleanBody.startsWith(".") || 
                             cleanBody.startsWith("#") || cleanBody.startsWith("/")
                             ? cleanBody.slice(1)
                             : cleanBody;
          await handleDungeonCombatInput(lenwy, replyJid, normalizedSender, bodyToSend);
          return;
        }
      }
    }
    
    if (combatSessions.has(normalizedSender)) {
      console.log(`[COMBAT DEBUG] Player in combat. Body: "${body}", FirstWord: "${firstWordClean}", IsCommand: ${combatCommands.includes(firstWordClean)}`);
      
      // Check if it's a PVP session
      const session = combatSessions.get(normalizedSender);
      if (session && session.mode === "pvp") {
        // PVP combat - use PVP handler
        if (combatCommands.includes(firstWordClean)) {
          const cleanBody = body.trim();
          const bodyToSend = cleanBody.startsWith("!") || cleanBody.startsWith(".") || 
                             cleanBody.startsWith("#") || cleanBody.startsWith("/")
                             ? cleanBody.slice(1)
                             : cleanBody;
          await handlePvPInput(lenwy, replyJid, normalizedSender, bodyToSend);
          return;
        }
      }
    }
    
    if (combatSessions.has(normalizedSender) && combatCommands.includes(firstWordClean)) {
      // Remove prefix from body if present
      const cleanBody = body.trim();
      const bodyToSend = cleanBody.startsWith("!") || cleanBody.startsWith(".") || 
                         cleanBody.startsWith("#") || cleanBody.startsWith("/")
                         ? cleanBody.slice(1)
                         : cleanBody;
      await handleCombatInput(lenwy, replyJid, normalizedSender, bodyToSend);
      return;
    }

    // Story Encounters: handle take/run/fight/leave/talk/help/ignore
    const storyChoices = ["take", "run", "fight", "leave", "talk", "help", "ignore"];
    if (storySessions.has(normalizedSender) && storyChoices.includes(bodyLower)) {
      await handleStoryChoice(lenwy, replyJid, normalizedSender, bodyLower);
      return;
    }

    // Pet Taming: handle emoji sequences
    if (searchingSessions.has(normalizedSender)) {
      const handled = await handleTamingInput(lenwy, replyJid, normalizedSender, body.trim());
      if (handled) return;
    }
  }
  // ── End RPG Session Interceptor ──────────────────────────

  if (!usedPrefix && !globalThis.noprefix) return;

  const args = usedPrefix
    ? body.slice(usedPrefix.length).trim().split(" ")
    : body.trim().split(" ");

  const command = args.shift().toLowerCase();
  const q = args.join(" ");

  // Helper
  const LenwyText = (text) => {
    // For better iPhone compatibility, only quote if in a group
    const shouldQuote = isGroup ? { quoted: len } : {};
    return lenwy.sendMessage(replyJid, { text }, shouldQuote);
  };

  const LenwyWait = () => lenwyreply(globalThis.mess.wait);

  // Send Video
  const LenwyVideo = (url, caption = "") => {
    const shouldQuote = isGroup ? { quoted: len } : {};
    return lenwy.sendMessage(replyJid, { video: { url }, caption }, shouldQuote);
  };

  // Send Image
  const LenwyImage = (url, caption = "") => {
    const shouldQuote = isGroup ? { quoted: len } : {};
    return lenwy.sendMessage(replyJid, { image: { url }, caption }, shouldQuote);
  };

  // Send Audio
  const LenwyAudio = (url, ptt = false) => {
    const shouldQuote = isGroup ? { quoted: len } : {};
    return lenwy.sendMessage(
      replyJid,
      { audio: { url }, mimetype: "audio/mpeg", ptt },
      shouldQuote,
    );
  };

  // Send File
  const LenwyFile = (buffer, fileName, mime) => {
    const shouldQuote = isGroup ? { quoted: len } : {};
    return lenwy.sendMessage(
      replyJid,
      { document: buffer, fileName, mimetype: mime },
      shouldQuote,
    );
  };

  // Label Menu
  function getLabel(info) {
    if (info.owner) return "Owner";
    if (info.premium) return "Premium";
    if (info.admin) return "Admin";
    if (info.botAdmin) return "BotAdmin";
    if (info.group) return "Group";
    if (info.private) return "Private";
    return "Public";
  }

  const labelPriority = {
    Public: 0,
    Owner: 1,
    Premium: 2,
    Admin: 3,
    BotAdmin: 4,
    Group: 5,
    Private: 6,
  };

  // ════════════════════════════════════════
  // RPG MENU - Shows all RPG commands
  // ════════════════════════════════════════
  if (command === "menu" || command === "help" || command === "commands") {
    const menuText = `
🎮 *RPG COMMAND MENU*

========================
📋 *BASIC*
• register <name> - Start your adventure
• profile - View your character
• addstat - View/allocate stat points
• addstat <stat> <amount> - Add stat points
• language - Change bot language
• location - See where you are
• map - View the world map 🗺️
• travel <place> - Move to new location
• gold / g - Check your gold balance

========================
⚔️ *COMBAT*
• hunt - Fight enemies
• attack - Attack enemy
• defend - Raise your guard
• skill <1/2/3> - Use skill
• item <name> - Use item in battle
• run - Flee from battle
• status - View battle details

========================
⚔️ *PVP (Player vs Player)*
• challenge @player - Challenge to PVP
• challenge <name> - Challenge by name
• accept - Accept PVP challenge
• decline - Decline PVP challenge
• *Same location = instant attack!*

========================
🏰 *DUNGEON SYSTEM*
• party - View party info
• party create - Create a party
• party invite @user - Invite player
• party accept - Accept invite
• party decline - Decline invite
• party leave - Leave party
• party kick @user - Kick player
• dungeon - View dungeon info
• dungeon start - Enter dungeon (leader only)

========================
🎒 *INVENTORY*
• bag - View your inventory
• equip <item> - Equip weapon/armor
• unequip <slot> - Remove equipment
• equipment - View equipped items

========================
🏪 *SHOP*
• shop - Browse shop items
• buy <item> - Purchase item
• sell <item> - Sell item

========================
🌲 *GATHERING*
• fish - Catch fish
• mine - Mine ores
• chop - Chop wood
• forage - Gather herbs
• searching - Search for treasures & pets

========================
🐾 *PETS*
• pets - View your pet collection
• pets <number> - View pet details
• pets equip <number> - Equip a pet
• pets unequip - Unequip current pet
• pets pat <number> - Pat your pet
• petlevel <pet#> <item> - Level up pet
• petenhance <target#> <material#> - Enhance pet

========================
🏕️ *REST & RECOVERY*
• camp - Set up camp (wilderness only)
• inn - Rest at inn (towns only)
• leave - Leave camp/inn

========================
📜 *QUESTS*
• quests - View quest overview
• quests daily - View daily quests
• quests weekly - View weekly quests
• quests monthly - View monthly quests
• claim daily - Claim daily rewards
• claim weekly - Claim weekly rewards
• claim monthly - Claim monthly rewards

========================
🤝 *TRADING*
• give <player> <item> <amount> - Give items
• give <player> gold <amount> - Give gold
• give <player> pet <name> - Give pet
• trade <player> <offer> for <request> - Trade
• accepttrade - Accept trade offer
• declinetrade - Decline trade offer

========================
🎓 *SKILLS*
• study - View skill books
• study <skill> - Learn a skill
• myskills - View learned skills
• equipskill <skill> <slot> - Equip skill
• unequipskill <slot> - Unequip skill

========================
🔨 *CRAFTING*
• craft <item> - Craft an item
• recipes - View all recipes

========================
🎁 *SPECIAL*
• redeem <code> - Redeem reward codes

========================
💡 *TIP:* Type any command with ! prefix
Example: !hunt, !profile, !shop
`.trim();

    return await lenwy.sendMessage(
      replyJid,
      {
        image: MenuImage,
        caption: `${menuText}\n\n⚔️ *RPG Bot - Adventure Awaits!*`,
        mentions: [normalizedSender],
      },
      { quoted: len },
    );
  }

  // ════════════════════════════════════════
  // PARTY COMMAND HANDLER
  // ════════════════════════════════════════
  if (command === "party") {
    await handlePartyCommand(lenwy, msg, args, { normalizedSender, replyJid });
    return;
  }

  // ════════════════════════════════════════
  // DUNGEON COMMAND HANDLER
  // ════════════════════════════════════════
  if (command === "dungeon") {
    await handleDungeonCommand(lenwy, msg, args, { normalizedSender, replyJid });
    return;
  }

  if (!commands.has(command)) return;

  const pluginData = commands.get(command);
  const { execute, info } = pluginData;

  // Control
  if (info.enabled === false) return LenwyText(globalThis.mess.disable);

  if (info.maintenance === true && !isEvarick)
    return LenwyText(globalThis.mess.maintenance);

  if (!isGroup) {
    if (!isPremium && !isEvarick) {
      if (!info.allowPrivate) {
        return LenwyText(
          "⚠️ *Kamu Bukan User Premium!*\n\n" +
            "Fitur ini tidak tersedia di Private Chat.\n\n" +
            "Silakan upgrade ke Premium untuk akses penuh.",
        );
      }
    }
  }

  if (info.owner && !isEvarick) return LenwyText(globalThis.mess.creator);

  if (info.premium && !isPremium && !isEvarick)
    return LenwyText(globalThis.mess.premium);

  if (info.group && !isGroup) return LenwyText(globalThis.mess.group);

  if (info.private && isGroup) return LenwyText(globalThis.mess.private);

  if (info.admin && !isAdmin) return LenwyText(globalThis.mess.admin);

  if (info.botAdmin && !isBotAdmin) return LenwyText(globalThis.mess.botadmin);

  // ── Auto-end camping/inn when using other commands ───────
  // Import and use the camp helper to automatically end camping
  // when players use commands other than camp/inn/leave/accept/decline
  const { autoEndCamping } = await import("./database/rpg/campHelper.js");
  const campEnded = autoEndCamping(normalizedSender, command);
  
  if (campEnded) {
    // Notify player that camping ended
    await lenwy.sendMessage(replyJid, {
      text: `🏕️ *You left your camp/inn to ${command}*\n\nYour resting session has ended.`,
    });
  }
  // ─────────────────────────────────────────────────────────

  try {
    await execute({
      command,
      args,
      q,
      lenwy,
      m,
      msg,
      len,
      replyJid,
      senderJid,
      lenwyreply,
      LenwyText,
      LenwyWait,
      LenwyVideo,
      LenwyImage,
      LenwyAudio,
      LenwyFile,
      isGroup,
      isAdmin,
      isBotAdmin,
      isPremium,
      isEvarick,
      plugins,
      commands,
      normalizedSender,
      deleteMessage,
    });
  } catch (error) {
    console.error(chalk.red(`[COMMAND ERROR] ${command}:`), error);
    await LenwyText(`❌ *Error executing command:*\n\n${error.message}`);
  }
};
