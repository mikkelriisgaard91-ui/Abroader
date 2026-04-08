/**
 * Rebuilds the Tripaneer martial-arts block in lib/retreats/catalog.ts:
 * keeps everything through the last hand-picked listing (La Palma Joa 14-day pro),
 * regenerates rows from CSV via gen-tripaneer-martial.mjs (UTF-8, no PowerShell redirect),
 * then appends the file tail from RETREAT_TYPE_LABELS onward.
 *
 * CSV path: %USERPROFILE%\Downloads\tripaneer_martial_arts_affiliate_links.csv
 * or set CSV_PATH.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { spawnSync } from "node:child_process";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const catalogPath = path.join(root, "lib", "retreats", "catalog.ts");

const tailMarker = "export const RETREAT_TYPE_LABELS: Record<RetreatTypeFacet, string> = {";
const prefixEndMarker = `    id: "la-palma-joa-muay-thai-14-pro",
    category: "martial-arts",
    retreatTypes: ["martial-arts"],
    regionSlug: "la-palma",
    country: "Spain",
    title: "14-day professional Muay Thai camp",
    organizer: "La Palma Joa",
    location: "La Palma, Canary Islands",
    coverImage: "/retreats/bookyoga-placeholder.jpg",
    coverImageAlt: "Professional Muay Thai training camp",
    href: \`https://www.tripaneer.com/la-palma-joa/14-day-professional-muay-thai-camp-in-la-palma-spain?\${tripaneerAid}\`,
    partner: "tripaneer",
    bullets: [
      "Two-week professional Muay Thai camp",
      "La Palma, Canary Islands",
      "Confirm level fit on Tripaneer",
    ],
    priceNote: "Confirm pricing on Tripaneer.",
  },
`;

const raw = fs.readFileSync(catalogPath, "utf8");
const norm = raw.replace(/\r\n/g, "\n");
const tailIdx = norm.lastIndexOf(tailMarker);
if (tailIdx < 0) throw new Error("tail marker not found");
const tail = norm.slice(tailIdx);

const prefixIdx = norm.indexOf(prefixEndMarker);
if (prefixIdx < 0) throw new Error("prefix end not found — update prefixEndMarker if the anchor listing changed");
const prefixEnd = prefixIdx + prefixEndMarker.length;
const prefix = norm.slice(0, prefixEnd);

const genRun = spawnSync(process.execPath, ["scripts/gen-tripaneer-martial.mjs"], {
  cwd: root,
  encoding: "buffer",
  maxBuffer: 64 * 1024 * 1024,
});
if (genRun.status !== 0) throw new Error("gen-tripaneer-martial failed");
const gen = genRun.stdout.toString("utf8").trimEnd();
const nListings = (gen.match(/^\s+id: "tp-/gm) ?? []).length;
const out = `${prefix}\n${gen}\n];\n\n${tail}`;
fs.writeFileSync(catalogPath, out, "utf8");
console.error(`Merged ${nListings} Tripaneer martial listings into catalog.ts`);
