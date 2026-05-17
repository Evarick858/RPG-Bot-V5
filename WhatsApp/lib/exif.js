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
import { tmpdir } from "os";
import Crypto from "crypto";
import ff from "fluent-ffmpeg";
import webp from "node-webpmux";
import path from "path";

export async function imageToWebp(media) {
  const tmpFileOut = path.join(
    tmpdir(),
    `${Crypto.randomBytes(6).readUIntLE(0, 6).toString(36)}.webp`,
  );
  const tmpFileIn = path.join(
    tmpdir(),
    `${Crypto.randomBytes(6).readUIntLE(0, 6).toString(36)}.jpg`,
  );

  fs.writeFileSync(tmpFileIn, media);

  await new Promise((resolve, reject) => {
    ff(tmpFileIn)
      .on("error", reject)
      .on("end", () => resolve(true))
      .addOutputOptions([
        "-vcodec",
        "libwebp",
        "-vf",
        "scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15,pad=320:320:-1:-1:color=white@0.0,split[a][b];[a]palettegen=reserve_transparent=on:transparency_color=ffffff[p];[b][p]paletteuse",
      ])
      .toFormat("webp")
      .save(tmpFileOut);
  });

  const buff = fs.readFileSync(tmpFileOut);
  fs.unlinkSync(tmpFileOut);
  fs.unlinkSync(tmpFileIn);

  return buff;
}

export async function videoToWebp(media) {
  const tmpFileOut = path.join(
    tmpdir(),
    `${Crypto.randomBytes(6).readUIntLE(0, 6).toString(36)}.webp`,
  );
  const tmpFileIn = path.join(
    tmpdir(),
    `${Crypto.randomBytes(6).readUIntLE(0, 6).toString(36)}.mp4`,
  );

  fs.writeFileSync(tmpFileIn, media);

  await new Promise((resolve, reject) => {
    ff(tmpFileIn)
      .on("error", reject)
      .on("end", () => resolve(true))
      .addOutputOptions([
        "-vcodec",
        "libwebp",
        "-vf",
        "scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15,pad=320:320:-1:-1:color=white@0.0,split[a][b];[a]palettegen=reserve_transparent=on:transparency_color=ffffff[p];[b][p]paletteuse",
        "-loop",
        "0",
        "-ss",
        "00:00:00",
        "-t",
        "00:00:05",
        "-preset",
        "default",
        "-an",
        "-vsync",
        "0",
      ])
      .toFormat("webp")
      .save(tmpFileOut);
  });

  const buff = fs.readFileSync(tmpFileOut);
  fs.unlinkSync(tmpFileOut);
  fs.unlinkSync(tmpFileIn);

  return buff;
}

export async function writeExif(media, metadata = {}) {
  let wMedia;
  if (/webp/.test(media.mimetype)) {
    wMedia = media.data;
  } else if (/image/.test(media.mimetype)) {
    wMedia = await imageToWebp(media.data);
  } else if (/video/.test(media.mimetype)) {
    wMedia = await videoToWebp(media.data);
  } else {
    throw new Error("Media type not supported!");
  }

  const tmpFileIn = path.join(
    tmpdir(),
    `${Crypto.randomBytes(6).readUIntLE(0, 6).toString(36)}.webp`,
  );
  const tmpFileOut = path.join(
    tmpdir(),
    `${Crypto.randomBytes(6).readUIntLE(0, 6).toString(36)}.webp`,
  );

  fs.writeFileSync(tmpFileIn, wMedia);

  const img = new webp.Image();
  const json = {
    "sticker-pack-id": `https://lenwy.vercel.app`,
    "sticker-pack-name": metadata.packname || "Evarick Bot",
    "sticker-pack-publisher": metadata.author || "Evarick",
    emojis: metadata.categories ? metadata.categories : [""],
  };

  const exifAttr = Buffer.from([
    0x49, 0x49, 0x2a, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57,
    0x07, 0x00, 0x00, 0x00, 0x00, 0x00, 0x16, 0x00, 0x00, 0x00,
  ]);

  const jsonBuff = Buffer.from(JSON.stringify(json), "utf-8");
  const exif = Buffer.concat([exifAttr, jsonBuff]);
  exif.writeUIntLE(jsonBuff.length, 14, 4);

  await img.load(tmpFileIn);
  if (fs.existsSync(tmpFileIn)) fs.unlinkSync(tmpFileIn);

  img.exif = exif;
  await img.save(tmpFileOut);

  return tmpFileOut;
}

export async function writeExifImg(media, metadata) {
  return await writeExif({ data: media, mimetype: "image" }, metadata);
}

export async function writeExifVid(media, metadata) {
  return await writeExif({ data: media, mimetype: "video" }, metadata);
}
