/**
 * Downloads Nomadico Wix images for each coliving destination into public/coliving/{id}/.
 * Run from `abroader/`: node scripts/download-all-coliving-images.mjs
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");

/**
 * Syncs all non-Tarifa coliving hero/gallery assets.
 * Tarifa keeps legacy filenames via `download-tarifa-partner-images.mjs`.
 */
const DESTINATIONS = [
  { id: "bansko", url: "https://www.nomadico.io/bansko-coliving" },
  { id: "madeira", url: "https://www.nomadico.io/madeira-coliving" },
  { id: "taghazout", url: "https://www.nomadico.io/taghazout-coliving" },
  { id: "cape-town", url: "https://www.nomadico.io/cape-town-coliving" },
  { id: "puerto-escondido", url: "https://www.nomadico.io/puerto-escondido-coliving" },
  { id: "medellin", url: "https://www.nomadico.io/medellin-coliving" },
  { id: "florianopolis", url: "https://www.nomadico.io/florianopolis-coliving" },
];

function wixFillUrl(uri) {
  const base = `https://static.wixstatic.com/media/${uri}`;
  return `${base}/v1/fill/w_1920,h_1440,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/${uri}`;
}

function extractOrderedUris(html) {
  const re = /&quot;uri&quot;:&quot;(d04e79_[^&]+?)&quot;/g;
  const seen = new Set();
  const ordered = [];
  let m;
  while ((m = re.exec(html))) {
    if (!seen.has(m[1])) {
      seen.add(m[1]);
      ordered.push(m[1]);
    }
  }
  return ordered;
}

async function downloadDestination({ id, url }) {
  const outDir = path.join(root, "public", "coliving", id);
  fs.mkdirSync(outDir, { recursive: true });

  process.stderr.write(`\n=== ${id} ← ${url}\n`);
  const res = await fetch(url, { headers: { "User-Agent": "AbroaderAssetSync/1.0" } });
  if (!res.ok) throw new Error(`${id}: HTTP ${res.status}`);
  const html = Buffer.from(await res.arrayBuffer()).toString("utf8");
  const uris = extractOrderedUris(html);
  if (uris.length === 0) {
    process.stderr.write(`  WARNING: no d04e79_ images found\n`);
    return { id, manifest: [] };
  }

  const manifest = [];
  for (let i = 0; i < uris.length; i++) {
    const uri = uris[i];
    const extMatch = uri.match(/\.(jpe?g|png|webp)$/i);
    const ext = extMatch ? extMatch[1].toLowerCase().replace("jpeg", "jpeg") : "jpg";
    const short = uri.replace(/^d04e79_/, "").replace(/~mv2\.(jpe?g|png|webp)$/i, "");
    const filename = `${id}-${String(i + 1).padStart(2, "0")}-${short.slice(0, 12)}.${ext}`;
    const dest = path.join(outDir, filename);
    const imgUrl = wixFillUrl(uri);
    const ir = await fetch(imgUrl, { headers: { "User-Agent": "AbroaderAssetSync/1.0" } });
    if (!ir.ok) {
      process.stderr.write(`  FAIL ${ir.status} ${filename}\n`);
      continue;
    }
    const buf = Buffer.from(await ir.arrayBuffer());
    fs.writeFileSync(dest, buf);
    manifest.push({ uri, filename, bytes: buf.length });
    process.stderr.write(`  OK ${filename} (${buf.length})\n`);
  }

  fs.writeFileSync(path.join(outDir, "manifest.json"), JSON.stringify({ id, url, manifest }, null, 2), "utf8");
  return { id, manifest };
}

const results = [];
for (const d of DESTINATIONS) {
  try {
    results.push(await downloadDestination(d));
  } catch (e) {
    process.stderr.write(`ERROR ${d.id}: ${e.message}\n`);
    results.push({ id: d.id, error: String(e) });
  }
}

console.log(JSON.stringify(results.map((r) => ({ id: r.id, count: r.manifest?.length ?? 0 })), null, 2));
