/**
 * Reads Tripaneer CSV + lib/retreats/catalog.ts; prints new RetreatListing objects (UTF-8) to stdout.
 * Do not redirect with PowerShell `>` (can corrupt encoding). Use:
 *   node scripts/merge-tripaneer-martial-catalog.mjs
 * or spawn this script from Node and write the buffer as UTF-8.
 */
import crypto from "node:crypto";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const catalogPath = path.join(root, "lib", "retreats", "catalog.ts");
const csvPath =
  process.env.CSV_PATH ||
  path.join(process.env.USERPROFILE || "", "Downloads", "tripaneer_martial_arts_affiliate_links.csv");

const catalogSrc = fs.readFileSync(catalogPath, "utf8");

/** Paths like `org/listing-slug` already used on Tripaneer, BookYogaRetreats, or BookSurfCamps */
const usedPaths = new Set();
const urlRe =
  /https:\/\/www\.(?:tripaneer|bookyogaretreats|booksurfcamps)\.com\/([^?\s"']+)/g;
let m;
while ((m = urlRe.exec(catalogSrc)) !== null) {
  usedPaths.add(m[1].replace(/\/$/, ""));
}

function parseCsvLine(line) {
  const out = [];
  let cur = "";
  let inQ = false;
  for (let i = 0; i < line.length; i++) {
    const c = line[i];
    if (c === '"') {
      inQ = !inQ;
      continue;
    }
    if (!inQ && c === ",") {
      out.push(cur);
      cur = "";
      continue;
    }
    cur += c;
  }
  out.push(cur);
  return out;
}

function titleToCatalogTitle(raw) {
  const lower = raw.trim().toLowerCase();
  return lower.charAt(0).toUpperCase() + lower.slice(1);
}

function slugToOrganizer(slug) {
  const s = slug.replace(/-$/, "").replace(/_/g, "-");
  return s
    .split("-")
    .filter(Boolean)
    .map((w) => {
      const u = w.toUpperCase();
      if (["MMA", "BJJ", "USA", "UK", "VIP"].includes(u)) return u;
      if (u === "JP") return "JP";
      if (u === "QI") return "Qi";
      if (u === "TCM") return "TCM";
      return w.charAt(0).toUpperCase() + w.slice(1).toLowerCase();
    })
    .join(" ");
}

/** Tripaneer organizer slug when title/URL omits country (runs before keyword rules). */
const ORG_REGION = {
  "kungfu-xinglin": { regionSlug: "china", country: "China", location: "China" },
  "yu-kung-fu-martial-arts-academy": { regionSlug: "china", country: "China", location: "Shandong, China" },
  "combat-360x-mma-and-muay-thai-camp": {
    regionSlug: "mexico-baja",
    country: "Mexico",
    location: "La Paz, Baja California Sur",
  },
  "612-training-center": { regionSlug: "mexico-baja", country: "Mexico", location: "La Paz, Baja California Sur" },
  "mexican-boxing-studio": { regionSlug: "switzerland", country: "Switzerland", location: "Lugano, Switzerland" },
  "rip-roll-camp": { regionSlug: "morocco", country: "Morocco", location: "Anza, Morocco" },
  "matnwave": { regionSlug: "morocco", country: "Morocco", location: "Anza, Morocco" },
  "iron-curtain-sports-ltd": { regionSlug: "kyrgyzstan", country: "Kyrgyzstan", location: "Issyk-Kul region" },
};

function regionInfo(title, urlPath) {
  const org = urlPath.split("/")[0];
  const byOrg = ORG_REGION[org];
  if (byOrg) {
    const { regionSlug, country, location, loc } = byOrg;
    return { regionSlug, country, location: location ?? loc ?? country };
  }

  const text = `${title} ${urlPath}`.toLowerCase().normalize("NFD").replace(/\p{M}/gu, "");

  const rules = [
    { test: () => text.includes("issyk kul"), slug: "kyrgyzstan", country: "Kyrgyzstan", loc: "Issyk-Kul region" },
    {
      test: () =>
        text.includes("baja california") ||
        (/\bla paz\b/.test(text) && (text.includes("mexico") || text.includes("baja") || text.includes("california sur"))),
      slug: "mexico-baja",
      country: "Mexico",
      loc: "Baja California Sur",
    },
    { test: () => text.includes("orinda") && text.includes("california"), slug: "usa-california", country: "USA", loc: "Orinda, California" },
    { test: () => text.includes("east coast of england") || (text.includes("england") && text.includes("uk")), slug: "uk", country: "United Kingdom", loc: "England" },
    { test: () => text.includes("zanzibar") || text.includes("tanzania"), slug: "tanzania", country: "Tanzania", loc: "Zanzibar / Tanzania" },
    { test: () => text.includes("siem reap") || text.includes("phnom penh") || text.includes("angkor") || text.includes("krong siem reap"), slug: "cambodia", country: "Cambodia", loc: "Cambodia" },
    { test: () => text.includes("canary island") || text.includes("la palma spain"), slug: "la-palma", country: "Spain", loc: "La Palma, Canary Islands" },
    { test: () => text.includes("adeje") || text.includes("tenerife"), slug: "adeje-tenerife", country: "Spain", loc: "Tenerife, Spain" },
    { test: () => text.includes("heidelberg") || text.includes("germany"), slug: "germany", country: "Germany", loc: "Germany" },
    { test: () => text.includes("israel") || text.includes("adumim") || text.includes("judea"), slug: "israel", country: "Israel", loc: "Israel" },
    { test: () => text.includes("lugano") || text.includes("switzerland"), slug: "switzerland", country: "Switzerland", loc: "Switzerland" },
    { test: () => text.includes("cyprus"), slug: "cyprus", country: "Cyprus", loc: "Cyprus" },
    { test: () => text.includes("grottaglie") || text.includes("puglia") || (text.includes("italy") && !text.includes("thailand")), slug: "italy", country: "Italy", loc: "Italy" },
    { test: () => text.includes("corfu") || text.includes("corinth") || text.includes("peloponnese") || text.includes("zakynthos") || text.includes("arillas"), slug: "greece", country: "Greece", loc: "Greece" },
    { test: () => text.includes("florianopolis") || text.includes("sao paulo") || text.includes("santa catarina") || text.includes("rio de") || text.includes("brazil") || text.includes("bresil") || text.includes("brésil"), slug: "brazil", country: "Brazil", loc: "Brazil" },
    { test: () => text.includes("costa rica") || text.includes("ubita"), slug: "costa-rica", country: "Costa Rica", loc: "Costa Rica" },
    { test: () => text.includes("morocco") || text.includes("marrakech") || text.includes("anza morocco") || /\banza\b/.test(text) && text.includes("morocco"), slug: "morocco", country: "Morocco", loc: "Morocco" },
    { test: () => text.includes("bali") || text.includes("badung") || text.includes("canggu") || (text.includes("indonesia") && text.includes("bali")), slug: "bali", country: "Indonesia", loc: "Bali, Indonesia" },
    { test: () => text.includes("china") || text.includes("jiangxi") || text.includes("shandong") || text.includes("henan") || text.includes("zhengzhou") || text.includes("weihai") || text.includes("anhui") || text.includes("sikong") || text.includes("linyi") || text.includes("yangshuo") || text.includes("xinyi") || text.includes("maling") || text.includes("tengzhou") || text.includes("zaozhuang") || text.includes("tianmeng") || text.includes("shaolin") || text.includes("kung fu") && text.includes("china"), slug: "china", country: "China", loc: "China" },
    { test: () => text.includes("thailand") || text.includes("phuket") || text.includes("pattaya") || text.includes("krabi") || text.includes("ao nang") || text.includes("chiang mai") || text.includes("bangkok") || text.includes("koh tao") || text.includes("phetchabun") || text.includes("phitsanulok") || text.includes("phitsanoluk") || text.includes("paksong") || text.includes("phang nga") || text.includes("sa kaeo") || text.includes("khok kloi") || text.includes("mae hong son") || text.includes("pai ") || text.includes("pai,") || text.endsWith("pai"), slug: "thailand", country: "Thailand", loc: "Thailand" },
    { test: () => text.includes("spain") && !text.includes("thailand"), slug: "spain", country: "Spain", loc: "Spain" },
  ];

  for (const r of rules) {
    if (r.test()) return { regionSlug: r.slug, country: r.country, location: r.loc };
  }
  return { regionSlug: "international", country: "Various", location: "See listing on Tripaneer" };
}

const csv = fs.readFileSync(csvPath, "utf8");
const lines = csv.split(/\r?\n/).filter((l) => l.trim());
const seenCsv = new Set();
const idCounts = new Map();

const blocks = [];

for (let i = 1; i < lines.length; i++) {
  const cols = parseCsvLine(lines[i]);
  if (cols.length < 4) continue;
  const titleRaw = cols[1];
  const affUrl = cols[3];
  if (!affUrl || !affUrl.includes("tripaneer.com")) continue;

  let pathPart;
  try {
    const u = new URL(affUrl);
    pathPart = u.pathname.replace(/^\/+/, "").replace(/\/$/, "");
  } catch {
    continue;
  }

  if (usedPaths.has(pathPart) || seenCsv.has(pathPart)) continue;
  seenCsv.add(pathPart);

  const segments = pathPart.split("/");
  if (segments.length < 2) continue;
  const orgSlug = segments[0];
  const listingSlug = segments[1];
  const organizer = slugToOrganizer(orgSlug);
  const title = titleToCatalogTitle(titleRaw);
  const { regionSlug, country, location } = regionInfo(titleRaw, pathPart);

  const id = `tp-${crypto.createHash("sha256").update(pathPart).digest("hex").slice(0, 14)}`;
  if (idCounts.has(id)) throw new Error(`Duplicate id for path ${pathPart}`);
  idCounts.set(id, true);

  blocks.push(`  {
    id: ${JSON.stringify(id)},
    category: "martial-arts",
    retreatTypes: ["martial-arts"],
    regionSlug: ${JSON.stringify(regionSlug)},
    country: ${JSON.stringify(country)},
    title: ${JSON.stringify(title)},
    organizer: ${JSON.stringify(organizer)},
    location: ${JSON.stringify(location)},
    coverImage: "/retreats/bookyoga-placeholder.jpg",
    coverImageAlt: ${JSON.stringify(`Martial arts training - ${organizer}`)},
    href: \`https://www.tripaneer.com/${pathPart}?\${tripaneerAid}\`,
    partner: "tripaneer",
    bullets: [
      ${JSON.stringify(`${organizer} - confirm program on Tripaneer`)},
      ${JSON.stringify(`${country} - see listing for venue and dates`)},
      "Book via Tripaneer (affiliate link)",
    ],
    priceNote: "Confirm pricing on Tripaneer.",
  }`);
}

process.stdout.write(blocks.join(",\n"));
process.stdout.write("\n");
process.stderr.write(`Generated ${blocks.length} new listings (CSV rows minus header; paths already in catalog or duplicate CSV rows were skipped).\n`);
