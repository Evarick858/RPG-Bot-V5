export const info = {
  name: "Ping",
  case: ["ping", "p"],
  description: "Cek latency bot",
  hidden: false,
  owner: false,
  group: false,
  private: false,
};

const formatUptime = (seconds) => {
  const d = Math.floor(seconds / 86400);
  const h = Math.floor((seconds % 86400) / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = Math.floor(seconds % 60);
  return d > 0 ? `${d}d ${h}h ${m}m` : `${h}h ${m}m ${s}s`;
};

const getStatus = (ping) => {
  if (ping <= 100) return { icon: "🟢", label: "Excellent" };
  if (ping <= 300) return { icon: "🟡", label: "Good"      };
  if (ping <= 600) return { icon: "🟠", label: "Moderate"  };
  return               { icon: "🔴", label: "Poor"      };
};

export default async function handler(leni) {
  const { ctx } = leni;

  const before = Date.now();
  const msg    = await ctx.reply("⏳ <i>Measuring latency...</i>", { parse_mode: "HTML" });
  const ping   = Date.now() - before;

  const { icon, label } = getStatus(ping);
  const uptime          = formatUptime(process.uptime());
  const mem             = process.memoryUsage();
  const memUsed         = (mem.heapUsed / 1024 / 1024).toFixed(1);
  const memTotal        = (mem.heapTotal / 1024 / 1024).toFixed(1);
  const time            = new Date().toLocaleString("id-ID", { timeZone: "Asia/Jakarta" });

  const text = `<blockquote>🏓 <b>PONG!</b>

${icon} <b>${label}</b>

⚡ Latency   : <code>${ping} ms</code>
🛠 Runtime   : <code>Node.js ${process.version}</code>
⏱ Uptime    : <code>${uptime}</code>
💾 Memory   : <code>${memUsed} / ${memTotal} MB</code>
🕐 Time      : <code>${time}</code>

${ping <= 100 ? "🚀 Bot dalam kondisi prima!" : ping <= 300 ? "✅ Bot berjalan normal." : ping <= 600 ? "⚠️ Koneksi sedikit lambat." : "❌ Koneksi sangat lambat!"}</blockquote>`;

  await ctx.telegram.editMessageText(
    ctx.chat.id,
    msg.message_id,
    null,
    text,
    { parse_mode: "HTML" }
  );
}
