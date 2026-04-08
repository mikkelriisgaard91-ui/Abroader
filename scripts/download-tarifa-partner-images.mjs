/**
 * Downloads high-res assets from Nomadico Wix static URLs (partner-approved use).
 *
 * 1) Fetches https://www.nomadico.io/tarifa-coliving into nomadico-tarifa.html (temporary)
 * 2) Parses image URIs and saves to public/coliving/tarifa/
 *
 * Run from `abroader/`: node scripts/download-tarifa-partner-images.mjs
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const htmlPath = path.join(root, "nomadico-tarifa.html");
const PAGE_URL = "https://www.nomadico.io/tarifa-coliving";
const outDir = path.join(root, "public", "coliving", "tarifa");

function wixFillUrl(uri) {
  const base = `https://static.wixstatic.com/media/${uri}`;
  // Request large fill; Wix caps to source dimensions
  return `${base}/v1/fill/w_1920,h_1440,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/${uri}`;
}

function extractOrderedGalleryUris(html, galleryId) {
  const idx = html.indexOf(galleryId);
  if (idx === -1) return [];
  const chunk = html.slice(idx, idx + 120000);
  const re = /&quot;uri&quot;:&quot;(d04e79_[^&]+?)&quot;/g;
  const seen = new Set();
  const ordered = [];
  let m;
  while ((m = re.exec(chunk))) {
    if (!seen.has(m[1])) {
      seen.add(m[1]);
      ordered.push(m[1]);
    }
  }
  return ordered;
}

if (!fs.existsSync(htmlPath)) {
  process.stderr.write(`Fetching ${PAGE_URL}...\n`);
  const r = await fetch(PAGE_URL, { headers: { "User-Agent": "AbroaderAssetSync/1.0" } });
  if (!r.ok) throw new Error(`HTTP ${r.status}`);
  fs.writeFileSync(htmlPath, Buffer.from(await r.arrayBuffer()));
}

const html = fs.readFileSync(htmlPath, "utf8");

/** First on-page slideshow (rooftop / beach strip) */
const gallery1 = extractOrderedGalleryUris(html, 'comp-mh62wvmd5');
/** Second slideshow (workspace section) */
const gallery2 = extractOrderedGalleryUris(html, 'comp-mh62wvmt11');

const allUris = [...gallery1, ...gallery2];
const uniqueExtra = new Set(allUris);
const reAll = /&quot;uri&quot;:&quot;(d04e79_[^&]+?)&quot;/g;
let mm;
while ((mm = reAll.exec(html))) {
  uniqueExtra.add(mm[1]);
}

// Prefer gallery order, then any remaining d04e79 assets from page
const orderedDownload = [...allUris];
for (const u of uniqueExtra) {
  if (!orderedDownload.includes(u)) orderedDownload.push(u);
}

fs.mkdirSync(outDir, { recursive: true });

const manifest = [];

for (let i = 0; i < orderedDownload.length; i++) {
  const uri = orderedDownload[i];
  const ext = uri.includes(".jpeg") ? "jpeg" : uri.split(".").pop() || "jpg";
  const short = uri.replace(/^d04e79_/, "").replace(/~mv2\.(jpe?g|png|webp)$/i, "");
  const filename = `tarifa-${String(i + 1).padStart(2, "0")}-${short.slice(0, 12)}.${ext}`;
  const dest = path.join(outDir, filename);
  const url = wixFillUrl(uri);

  process.stderr.write(`Fetching ${filename}...\n`);
  const res = await fetch(url, { headers: { "User-Agent": "AbroaderAssetSync/1.0" } });
  if (!res.ok) {
    process.stderr.write(`  FAIL ${res.status} ${url}\n`);
    continue;
  }
  const buf = Buffer.from(await res.arrayBuffer());
  fs.writeFileSync(dest, buf);
  manifest.push({ uri, filename, bytes: buf.length });
  process.stderr.write(`  OK ${buf.length} bytes\n`);
}

fs.writeFileSync(
  path.join(outDir, "manifest.json"),
  JSON.stringify({ gallery1, gallery2, manifest }, null, 2),
  "utf8",
);

try {
  fs.unlinkSync(htmlPath);
} catch {
  /* keep file if cleanup fails */
}

console.log(JSON.stringify(manifest.map((m) => m.filename), null, 2));
