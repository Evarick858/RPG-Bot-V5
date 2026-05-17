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

import fs from "fs";
import {
  imageToWebp,
  videoToWebp,
  writeExifImg,
  writeExifVid,
} from "./exif.js";

export default function attachSticker(lenwy) {
  lenwy.sendImageAsSticker = async (jid, path, quoted, options = {}) => {
    let buff = Buffer.isBuffer(path)
      ? path
      : fs.existsSync(path)
        ? fs.readFileSync(path)
        : Buffer.alloc(0);

    let buffer;

    if (options.packname || options.author) {
      buffer = await writeExifImg(buff, options);
    } else {
      buffer = await imageToWebp(buff);
    }

    await lenwy.sendMessage(
      jid,
      { sticker: { url: buffer }, ...options },
      { quoted },
    );

    return buffer;
  };

  lenwy.sendVideoAsSticker = async (jid, path, quoted, options = {}) => {
    let buff = Buffer.isBuffer(path)
      ? path
      : fs.existsSync(path)
        ? fs.readFileSync(path)
        : Buffer.alloc(0);

    let buffer;

    if (options.packname || options.author) {
      buffer = await writeExifVid(buff, options);
    } else {
      buffer = await videoToWebp(buff);
    }

    await lenwy.sendMessage(
      jid,
      { sticker: { url: buffer }, ...options },
      { quoted },
    );

    return buffer;
  };
}
