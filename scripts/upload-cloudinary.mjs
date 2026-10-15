// Sube las fotos de public/images/viaje a Cloudinary con public_id "santi-beni/vNN".
// Opción A (recomendada): upload preset sin firma → en .env.local:
//   NEXT_PUBLIC_CLOUDINARY_CLOUD=fvpnawrb  y  CLOUDINARY_UPLOAD_PRESET=santibeni
// Opción B: CLOUDINARY_URL=cloudinary://API_KEY:API_SECRET@CLOUD_NAME (subida firmada)
// Uso: node scripts/upload-cloudinary.mjs [--src carpeta]   (por defecto public/images/viaje)
import { createHash } from "node:crypto";
import { readFileSync, readdirSync, existsSync } from "node:fs";
const env = existsSync(".env.local") ? Object.fromEntries(readFileSync(".env.local", "utf8").split(/\r?\n/).filter(l => /^\w+=/.test(l)).map(l => [l.slice(0, l.indexOf("=")), l.slice(l.indexOf("=") + 1).trim()])) : {};
const get = k => process.env[k] || env[k] || "";
const signed = get("CLOUDINARY_URL").match(/^cloudinary:\/\/(\w+):([\w-]+)@([\w-]+)/);
const cloud = signed ? signed[3] : get("NEXT_PUBLIC_CLOUDINARY_CLOUD") || get("CLOUDINARY_CLOUD");
const preset = get("CLOUDINARY_UPLOAD_PRESET");
if (!cloud || (!signed && !preset)) { console.error("Faltan datos: NEXT_PUBLIC_CLOUDINARY_CLOUD + CLOUDINARY_UPLOAD_PRESET, o CLOUDINARY_URL"); process.exit(1); }
const dir = process.argv.includes("--src") ? process.argv[process.argv.indexOf("--src") + 1] : "public/images/viaje";
const files = readdirSync(dir).filter(f => /^v\d+\.jpg$/.test(f)).sort();
let ok = 0;
for (const f of files) {
  const public_id = `santi-beni/${f.replace(".jpg", "")}`; const fd = new FormData();
  fd.append("file", new Blob([readFileSync(`${dir}/${f}`)]), f); fd.append("public_id", public_id);
  if (signed) {
    const [, key, secret] = signed; const timestamp = Math.floor(Date.now() / 1000);
    fd.append("timestamp", String(timestamp)); fd.append("api_key", key);
    fd.append("signature", createHash("sha1").update(`public_id=${public_id}&timestamp=${timestamp}${secret}`).digest("hex"));
  } else fd.append("upload_preset", preset);
  const r = await fetch(`https://api.cloudinary.com/v1_1/${cloud}/image/upload`, { method: "POST", body: fd }); const j = await r.json();
  if (r.ok || /already exists/i.test(j.error?.message ?? "")) { ok++; process.stdout.write("."); } else console.log(`\n✗ ${f}: ${j.error?.message}`);
}
console.log(`\n${ok}/${files.length} fotos en Cloudinary (${cloud}).`);
