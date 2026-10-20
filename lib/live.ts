// Datos "en vivo" (solo servidor): combina lo cargado a mano con lo que publica el canal de YouTube
// y con la planilla de "Ahora mismo". Se refresca solo cada REVALIDATE segundos (ISR de Next).
// Si YouTube o la planilla no responden, la web sigue mostrando los datos fijos de lib/data.ts.
import { episodes as staticEpisodes, now as staticNow, stages as staticStages, stats as staticStats, type Episode, type Stage } from "./data";

export const REVALIDATE = 60 * 60 * 6; // 6 horas
const CHANNEL_ID = "UCfpySnODU-mLN7lYD5d0tGA";
// Feed de solo videos largos (sin shorts): playlist "UULF" + id del canal sin el "UC"
const FEED = `https://www.youtube.com/feeds/videos.xml?playlist_id=UULF${CHANNEL_ID.slice(2)}`;
const CHANNEL_PAGE = "https://www.youtube.com/@SANTIBENIMOTOVIAJERO/videos";
const HEADERS = { "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/126 Safari/537.36", "Accept-Language": "es-419,es;q=0.9" };

export type Now = { place: string; detail: string; date: string; photo: string };
export type Live = { episodes: Record<string, Episode>; stages: Stage[]; stats: { value: string; label: string }[]; subs: string; now: Now; latest: Episode; top: Episode[]; allIds: string[] };

async function text(url: string, revalidate = REVALIDATE) {
  try { const r = await fetch(url, { headers: HEADERS, next: { revalidate } }); return r.ok ? await r.text() : ""; } catch { return ""; }
}
const decode = (s: string) => s.replace(/&amp;/g, "&").replace(/&quot;/g, "\"").replace(/&#39;/g, "'").replace(/&lt;/g, "<").replace(/&gt;/g, ">");

// Misma limpieza que se usó para generar lib/episodes.ts
const CUT = /🚨|Gracias por apoyarme|SEGUIME|✅ Si te gusta|👉 No olvides|¡Sumate a la comunidad|¡Súmate a la aventura|Si sos un apasionado|Si alguna vez soñaste|Dejame tu consejo|💬|Es de gran importancia|¿Es este el final de la aventura|Si te gusta el contenido|PINZA DEL CASCO|Podes contribuir/;
function cleanDesc(d: string) {
  const timestamps: [string, string][] = []; const lines: string[] = [];
  for (let l of d.split(CUT)[0].split("\n")) {
    l = l.trim(); const t = l.match(/^(\d{1,2}:\d{2}(?::\d{2})?)\s*[-–]?\s*(?:✅|🛑)?\s*(.+)$/);
    if (t) { if (t[2].trim().length > 1) timestamps.push([t[1], t[2].replace(/^[-–\s]+/, "").trim()]); continue; }
    if (!l || l === "." || /^CAPITULO|^EQUIPE MI HONDA|^¡Bienvenidos al Cap|^En este video vas a ver|^En este video verás|^EN ESTE VIDEO:?$|^⏱️|^Marcas de tiempo|^https?:/i.test(l)) continue;
    lines.push(l);
  }
  return { summary: lines.join("\n\n").replace(/\.\.\.+/g, "…").trim(), timestamps };
}
const cleanTitle = (t: string) => t.split("[]").map(x => x.trim()).join(" · ").replace(/\s*\|\s*USHUAIA a ALASKA en 110cc.*$/i, "").replace(/\s*\|\s*Ushuaia - Alaska.*$/i, "").replace(/\s*\|\s*(Travesía por Chile\s*\|\s*)?Cap\.?\s*\d+\s*$/i, "").replace(/\s*-\s*Cap\.?\s*\d+$/i, "").trim();
const capOf = (t: string) => t.match(/cap(?:itulo)?\.?\s*(\d+(?:\.\d)?)/i)?.[1] ?? null;
const fmtDur = (s: number) => { const h = Math.floor(s / 3600), m = Math.floor(s % 3600 / 60), x = String(s % 60).padStart(2, "0"); return h ? `${h}:${String(m).padStart(2, "0")}:${x}` : `${m}:${x}`; };

type FeedItem = { id: string; title: string; date: string; desc: string; views: number };
async function getFeed(): Promise<FeedItem[]> {
  const xml = await text(FEED);
  return [...xml.matchAll(/<entry>([\s\S]*?)<\/entry>/g)].map(([, e]) => ({
    id: e.match(/<yt:videoId>([^<]+)/)?.[1] ?? "",
    title: decode(e.match(/<title>([^<]*)/)?.[1] ?? ""),
    date: (e.match(/<published>([^<]+)/)?.[1] ?? "").slice(0, 10),
    desc: decode(e.match(/<media:description>([\s\S]*?)<\/media:description>/)?.[1] ?? ""),
    views: +(e.match(/<media:statistics views="(\d+)"/)?.[1] ?? 0),
  })).filter(x => x.id);
}
// Duración de un video nuevo (el feed no la trae). Se pide a la API interna del reproductor:
// responde un JSON chico, a diferencia de la página del video (más de 1 MB).
async function duration(id: string) {
  try {
    const r = await fetch("https://www.youtube.com/youtubei/v1/player?prettyPrint=false", { method: "POST", headers: { ...HEADERS, "Content-Type": "application/json" }, next: { revalidate: REVALIDATE },
      body: JSON.stringify({ videoId: id, context: { client: { clientName: "WEB", clientVersion: "2.20261014.01.00", hl: "es-419" } } }) });
    const s = (await r.json())?.videoDetails?.lengthSeconds; return s ? fmtDur(+s) : "";
  } catch { return ""; }
}
// "69.7 k suscriptores" → "69,7 K"
async function getSubs() {
  const h = await text(CHANNEL_PAGE); const m = h.match(/"content":"([\d.,]+)\s*(k|mil|M|m)?\s*suscriptores"/i);
  if (!m) return "";
  const u = m[2] ?? ""; const unit = u === "M" ? " M" : u ? " K" : ""; // "k" o "mil" = miles; "M" = millones
  return m[1].replace(".", ",") + unit;
}
// Planilla de Google publicada como CSV, con filas "campo,valor": lugar, detalle, fecha, foto
async function getNow(): Promise<Now> {
  const url = process.env.NOW_SHEET_URL; if (!url) return staticNow;
  const csv = await text(url, 60 * 30); if (!csv) return staticNow; // la planilla se relee cada 30 min
  const row: Record<string, string> = {};
  for (const line of csv.split(/\r?\n/)) {
    const cells = [...line.matchAll(/("([^"]|"")*"|[^,]*)(,|$)/g)].map(m => m[1].replace(/^"|"$/g, "").replace(/""/g, "\"").trim()).filter((_, i, a) => i < a.length - 1);
    if (cells.length >= 2 && cells[0]) row[cells[0].toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "")] = cells[1];
  }
  return { place: row.lugar || staticNow.place, detail: row.detalle || row["en que ando"] || staticNow.detail, date: row.fecha || row.actualizado || staticNow.date, photo: row.foto || staticNow.photo };
}

export async function getLive(): Promise<Live> {
  const [feed, subs, now] = await Promise.all([getFeed(), getSubs(), getNow()]);
  const eps: Record<string, Episode> = { ...staticEpisodes };
  const known = new Set(staticStages.flatMap(s => s.episodes));
  let maxCap = Math.max(...Object.values(eps).map(e => Math.floor(+(e.cap ?? 0))));
  const fresh: string[] = [];
  // Del más viejo al más nuevo, así los capítulos sin número quedan correlativos
  for (const f of [...feed].reverse()) {
    if (eps[f.id]) { if (f.views) eps[f.id] = { ...eps[f.id], views: f.views }; continue; }
    if (f.date < "2025-10-01") continue; // solo videos de la serie, no los viejos
    const { summary, timestamps } = cleanDesc(f.desc);
    const cap = capOf(f.title) ?? String(maxCap + 1); maxCap = Math.max(maxCap, Math.floor(+cap));
    eps[f.id] = { id: f.id, cap, title: cleanTitle(f.title), date: f.date, views: f.views, duration: await duration(f.id), summary: summary || "Nuevo capítulo del viaje de Ushuaia a Alaska.", timestamps };
    if (!known.has(f.id)) fresh.push(f.id);
  }
  // Los capítulos nuevos se suman a la última etapa (la que está en curso)
  const stages = staticStages.map((s, i) => i === staticStages.length - 1 ? { ...s, episodes: [...s.episodes, ...fresh] } : s);
  const allIds = stages.flatMap(s => s.episodes);
  const caps = Math.max(...allIds.map(id => Math.floor(+(eps[id].cap ?? 0))));
  const stats = staticStats.map(s => /suscriptores/.test(s.label) && subs ? { ...s, value: subs } : /capítulos/.test(s.label) ? { ...s, value: String(caps) } : s);
  const latest = allIds.map(id => eps[id]).sort((a, b) => b.date.localeCompare(a.date))[0];
  const top = allIds.map(id => eps[id]).sort((a, b) => b.views - a.views).slice(0, 12);
  return { episodes: eps, stages, stats, subs: subs || staticStats[0].value, now, latest, top, allIds };
}
