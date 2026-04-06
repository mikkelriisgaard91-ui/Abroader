/**
 * Downloads a representative city image per guide (Wikipedia REST API lead image).
 * Run: node scripts/fetch-city-hero-images.mjs
 * Optional: pass guide slugs to fetch only those (e.g. guyana paraguay suriname venezuela).
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");
const OUT_ROOT = path.join(ROOT, "public", "images", "guide-cities");
const MANIFEST_PATH = path.join(ROOT, "lib", "guides", "city-hero-manifest.json");

const USER_AGENT = "AbroaderCityImages/1.0 (https://abroader.vercel.app; educational thumbnails)";
const DELAY_MS = 400;

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const GUIDE_CITIES = [
  ["albania", "Albania", ["Tirana", "Durrës", "Vlorë"]],
  ["armenia", "Armenia", ["Yerevan", "Gyumri", "Dilijan"]],
  ["austria", "Austria", ["Vienna", "Graz", "Salzburg"]],
  ["belgium", "Belgium", ["Brussels", "Antwerp", "Ghent"]],
  ["bosnia", "Bosnia and Herzegovina", ["Sarajevo", "Mostar", "Banja Luka"]],
  ["bulgaria", "Bulgaria", ["Sofia", "Plovdiv", "Varna"]],
  ["croatia", "Croatia", ["Zagreb", "Split", "Dubrovnik"]],
  ["cyprus", "Cyprus", ["Limassol", "Nicosia", "Paphos"]],
  ["czechia", "Czech Republic", ["Prague", "Brno", "České Budějovice"]],
  ["denmark", "Denmark", ["Copenhagen", "Aarhus", "Odense"]],
  ["estonia", "Estonia", ["Tallinn", "Tartu", "Pärnu"]],
  ["finland", "Finland", ["Helsinki", "Tampere", "Turku"]],
  ["france", "France", ["Paris", "Lyon", "Toulouse"]],
  ["georgia", "Georgia", ["Tbilisi", "Batumi", "Kutaisi"]],
  ["germany", "Germany", ["Berlin", "Munich", "Hamburg"]],
  ["greece", "Greece", ["Athens", "Thessaloniki", "Heraklion (Crete)"]],
  ["hungary", "Hungary", ["Budapest", "Debrecen", "Szeged"]],
  ["iceland", "Iceland", ["Reykjavík", "Akureyri", "Keflavík area"]],
  ["indonesia", "Indonesia", ["Jakarta", "Ubud", "Canggu"]],
  ["ireland", "Ireland", ["Dublin", "Cork", "Galway"]],
  ["italy", "Italy", ["Milan", "Rome", "Turin"]],
  ["japan", "Japan", ["Tokyo", "Osaka", "Fukuoka"]],
  ["kosovo", "Kosovo", ["Pristina", "Prizren", "Peja"]],
  ["latvia", "Latvia", ["Riga", "Liepāja", "Daugavpils"]],
  ["lithuania", "Lithuania", ["Vilnius", "Kaunas", "Klaipėda"]],
  ["luxembourg", "Luxembourg", ["Luxembourg City", "Esch-sur-Alzette", "Differdange"]],
  ["malta", "Malta", ["Sliema / St Julian's", "Valletta", "Gozo"]],
  ["malaysia", "Malaysia", ["Kuala Lumpur", "Penang", "Johor Bahru"]],
  ["moldova", "Moldova", ["Chișinău", "Bălți", "Tiraspol (Transnistria)"]],
  ["montenegro", "Montenegro", ["Kotor", "Podgorica", "Budva"]],
  ["netherlands", "Netherlands", ["Amsterdam", "Rotterdam", "The Hague"]],
  ["north-macedonia", "North Macedonia", ["Skopje", "Ohrid", "Bitola"]],
  ["norway", "Norway", ["Oslo", "Bergen", "Trondheim"]],
  ["poland", "Poland", ["Warsaw", "Kraków", "Wrocław"]],
  ["portugal", "Portugal", ["Lisbon", "Porto", "Faro / Algarve"]],
  ["romania", "Romania", ["Bucharest", "Cluj-Napoca", "Brașov"]],
  ["serbia", "Serbia", ["Belgrade", "Novi Sad", "Niš"]],
  ["slovakia", "Slovakia", ["Bratislava", "Košice", "Žilina"]],
  ["slovenia", "Slovenia", ["Ljubljana", "Maribor", "Koper"]],
  ["spain", "Spain", ["Barcelona", "Madrid", "Valencia"]],
  ["sweden", "Sweden", ["Stockholm", "Gothenburg", "Malmö"]],
  ["switzerland", "Switzerland", ["Zurich", "Geneva", "Basel"]],
  ["taiwan", "Taiwan", ["Taipei", "Kaohsiung", "Taichung"]],
  ["thailand", "Thailand", ["Bangkok", "Chiang Mai", "Phuket"]],
  ["turkey", "Turkey", ["Istanbul", "Antalya", "İzmir"]],
  ["uk", "United Kingdom", ["London", "Manchester", "Bristol"]],
  ["ukraine", "Ukraine", ["Lviv", "Kyiv", "Odesa"]],
  ["scotland", "United Kingdom", ["Edinburgh", "Glasgow", "Aberdeen"]],
  ["argentina", "Argentina", ["Buenos Aires", "Córdoba", "Mendoza"]],
  ["bolivia", "Bolivia", ["La Paz", "Santa Cruz", "Cochabamba"]],
  ["brazil", "Brazil", ["São Paulo", "Rio de Janeiro", "Florianópolis"]],
  ["chile", "Chile", ["Santiago", "Valparaíso", "Puerto Varas"]],
  ["colombia", "Colombia", ["Medellín", "Bogotá", "Cartagena"]],
  ["ecuador", "Ecuador", ["Quito", "Cuenca", "Guayaquil"]],
  ["peru", "Peru", ["Lima", "Cusco", "Arequipa"]],
  ["philippines", "Philippines", ["Manila", "Cebu", "Siargao"]],
  ["uruguay", "Uruguay", ["Montevideo", "Punta del Este", "Colonia"]],
  ["guyana", "Guyana", ["Georgetown", "Linden", "New Amsterdam"]],
  ["paraguay", "Paraguay", ["Asunción", "Ciudad del Este", "Encarnación"]],
  ["suriname", "Suriname", ["Paramaribo", "Nieuw Nickerie", "Lelydorp"]],
  ["venezuela", "Venezuela", ["Caracas", "Valencia", "Mérida"]],
  ["vietnam", "Vietnam", ["Ho Chi Minh City", "Hanoi", "Da Nang"]],
  ["belize", "Belize", ["Belize City", "San Ignacio", "Placencia"]],
  ["canada", "Canada", ["Toronto", "Vancouver", "Montréal"]],
  ["costa-rica", "Costa Rica", ["San José", "Tamarindo", "Puerto Viejo"]],
  ["el-salvador", "El Salvador", ["San Salvador", "Santa Ana", "Suchitoto"]],
  ["guatemala", "Guatemala", ["Guatemala City", "Antigua Guatemala", "Panajachel"]],
  ["honduras", "Honduras", ["Tegucigalpa", "San Pedro Sula", "Roatán"]],
  ["mexico", "Mexico", ["Mexico City", "Guadalajara", "Playa del Carmen"]],
  ["nicaragua", "Nicaragua", ["Managua", "Granada", "San Juan del Sur"]],
  ["panama", "Panama", ["Panama City", "Boquete", "Bocas del Toro"]],
  ["united-states", "United States", ["Austin", "New York", "Denver"]],
  ["antigua-and-barbuda", "Antigua and Barbuda", ["St. John's", "English Harbour", "Jolly Harbour"]],
  ["bahamas", "The Bahamas", ["Nassau", "Freeport", "George Town (Exuma)"]],
  ["barbados", "Barbados", ["Bridgetown", "Holetown", "Oistins"]],
  ["cuba", "Cuba", ["Havana", "Varadero", "Santiago de Cuba"]],
  ["dominica", "Dominica", ["Roseau", "Portsmouth", "Calibishie"]],
  ["dominican-republic", "Dominican Republic", ["Santo Domingo", "Punta Cana", "Puerto Plata"]],
  ["grenada", "Grenada", ["St. George's", "Grand Anse", "Carriacou"]],
  ["haiti", "Haiti", ["Port-au-Prince", "Cap-Haïtien", "Jacmel"]],
  ["jamaica", "Jamaica", ["Kingston", "Montego Bay", "Negril"]],
  ["saint-kitts-and-nevis", "Saint Kitts and Nevis", ["Basseterre", "Frigate Bay", "Charlestown"]],
  ["saint-lucia", "Saint Lucia", ["Castries", "Rodney Bay", "Soufrière"]],
  [
    "saint-vincent-and-the-grenadines",
    "Saint Vincent and the Grenadines",
    ["Kingstown", "Bequia", "Union Island"],
  ],
  ["trinidad-and-tobago", "Trinidad and Tobago", ["Port of Spain", "San Fernando", "Scarborough"]],
  ["cambodia", "Cambodia", ["Phnom Penh", "Siem Reap", "Kampot"]],
  ["china", "China", ["Shanghai", "Beijing", "Shenzhen"]],
  ["india", "India", ["Bengaluru", "Mumbai", "Goa"]],
  ["laos", "Laos", ["Vientiane", "Luang Prabang", "Vang Vieng"]],
  ["mongolia", "Mongolia", ["Ulaanbaatar", "Erdenet", "Darkhan"]],
  ["nepal", "Nepal", ["Kathmandu", "Pokhara", "Bhaktapur"]],
  ["singapore", "Singapore", ["Central / CBD", "Orchard", "East Coast"]],
  ["south-korea", "South Korea", ["Seoul", "Busan", "Jeju"]],
  ["sri-lanka", "Sri Lanka", ["Colombo", "Kandy", "Weligama"]],
  ["united-arab-emirates", "United Arab Emirates", ["Dubai", "Abu Dhabi", "Sharjah"]],
];

const WIKI_TITLE = {
  "portugal|Faro / Algarve": "Faro",
  "iceland|Keflavík area": "Keflavík",
  "malta|Sliema / St Julian's": "Sliema",
  "malta|Gozo": "Gozo",
  "moldova|Tiraspol (Transnistria)": "Tiraspol",
  "greece|Heraklion (Crete)": "Heraklion",
  "luxembourg|Luxembourg City": "Luxembourg",
  "bolivia|Santa Cruz": "Santa Cruz de la Sierra",
  "uruguay|Colonia": "Colonia del Sacramento",
  "guyana|New Amsterdam": "New Amsterdam, Guyana",
  "venezuela|Valencia": "Valencia, Venezuela",
  "venezuela|Mérida": "Merida, Venezuela",
  "costa-rica|Puerto Viejo": "Puerto Viejo de Talamanca",
  "honduras|Roatán": "Roatan",
  "united-states|New York": "New York City",
  "panama|Bocas del Toro": "Bocas del Toro Archipelago",
  "antigua-and-barbuda|St. John's": "St. John's, Antigua and Barbuda",
  "bahamas|George Town (Exuma)": "George Town, Bahamas",
  "grenada|Grand Anse": "Grand Anse, Grenada",
  "saint-kitts-and-nevis|Charlestown": "Charlestown, Nevis",
  "saint-lucia|Rodney Bay": "Rodney Bay",
  "saint-vincent-and-the-grenadines|Bequia": "Port Elizabeth, Bequia",
  "trinidad-and-tobago|Scarborough": "Scarborough, Tobago",
  "malaysia|Penang": "George Town, Penang",
  "philippines|Siargao": "Siargao",
  "singapore|Central / CBD": "Central Area, Singapore",
  "singapore|Orchard": "Orchard Road",
  "singapore|East Coast": "East Coast, Singapore",
  "south-korea|Jeju": "Jeju Island",
  "india|Goa": "Goa",
  "sri-lanka|Weligama": "Weligama",
  "mongolia|Darkhan": "Darkhan (city)",
  "singapore|East Coast": "East Coast Park",
};

function slugifyFilePart(s) {
  return (
    s
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-zA-Z0-9]+/g, "-")
      .replace(/^-|-$/g, "")
      .toLowerCase()
      .slice(0, 96) || "city"
  );
}

function extFromUrl(u) {
  try {
    const p = new URL(u).pathname;
    const e = path.extname(p).toLowerCase();
    if (e === ".jpeg" || e === ".jpg") return ".jpg";
    if (e === ".png" || e === ".webp") return e;
  } catch {
    /* ignore */
  }
  return ".jpg";
}

async function wikiSummary(title) {
  const url = `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(title)}`;
  const res = await fetch(url, { headers: { "User-Agent": USER_AGENT } });
  if (res.status === 404) return null;
  if (!res.ok) throw new Error(`Wiki ${res.status} ${title}`);
  return res.json();
}

function pickImageUrl(data) {
  if (!data) return null;
  const u = data.originalimage?.source || data.thumbnail?.source;
  if (!u) return null;
  if (/\.svg(\?|$)/i.test(u)) {
    const t = data.thumbnail?.source;
    if (t && !/\.svg/i.test(t)) return t;
    return null;
  }
  return u;
}

async function downloadImage(url, destPath) {
  const res = await fetch(url, { headers: { "User-Agent": USER_AGENT } });
  if (!res.ok) throw new Error(`Image ${res.status}`);
  const buf = Buffer.from(await res.arrayBuffer());
  if (buf.length < 500) throw new Error("too small");
  fs.writeFileSync(destPath, buf);
}

async function findImageUrl(slug, country, city) {
  const key = `${slug}|${city}`;
  const titles = [];
  if (WIKI_TITLE[key]) titles.push(WIKI_TITLE[key]);
  titles.push(city);
  titles.push(city.split("/")[0].trim());
  titles.push(`${city.split("(")[0].split("/")[0].trim()}, ${country}`);

  const tried = new Set();
  for (const t of titles) {
    if (!t || tried.has(t)) continue;
    tried.add(t);
    await sleep(DELAY_MS);
    const data = await wikiSummary(t);
    const url = pickImageUrl(data);
    if (url) return url;
  }
  return null;
}

async function main() {
  let manifest = {};
  if (fs.existsSync(MANIFEST_PATH)) {
    try {
      manifest = JSON.parse(fs.readFileSync(MANIFEST_PATH, "utf8"));
    } catch {
      manifest = {};
    }
  }
  let ok = 0;
  let fail = 0;

  const slugFilter = new Set(process.argv.slice(2).filter(Boolean));

  for (const [slug, country, cities] of GUIDE_CITIES) {
    if (slugFilter.size > 0 && !slugFilter.has(slug)) continue;
    fs.mkdirSync(path.join(OUT_ROOT, slug), { recursive: true });

    for (const city of cities) {
      const manifestKey = `${slug}::${city}`;
      const fileBase = slugifyFilePart(city);

      try {
        const imgUrl = await findImageUrl(slug, country, city);
        if (!imgUrl) {
          console.warn("No image URL:", manifestKey);
          fail++;
          continue;
        }
        const ext = extFromUrl(imgUrl);
        const relPath = `/images/guide-cities/${slug}/${fileBase}${ext}`;
        const absPath = path.join(ROOT, "public", relPath.slice(1));
        await sleep(200);
        await downloadImage(imgUrl, absPath);
        manifest[manifestKey] = relPath;
        ok++;
        console.log("OK", relPath);
      } catch (e) {
        console.warn("FAIL", manifestKey, e.message);
        fail++;
      }
    }
  }

  fs.writeFileSync(MANIFEST_PATH, JSON.stringify(manifest, null, 2), "utf8");
  console.log("\nDone. Success:", ok, "Failed:", fail);
  if (slugFilter.size > 0) console.log("Filtered slugs:", [...slugFilter].join(", "));
  console.log("Wrote", MANIFEST_PATH);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
