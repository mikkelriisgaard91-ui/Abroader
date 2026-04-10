import type { CountryGuide } from "./types";

export type GuideCity = CountryGuide["cities"][number];

/** Only skip when the label is purely vague — do not block strings that also name a place. */
function isUnmatchableVagueLocation(hay: string): boolean {
  const t = hay.replace(/\s+/g, " ").trim();
  if (/^(remote|see listing)$/i.test(t)) return true;
  if (/^fully remote$/i.test(t)) return true;
  if (/^multiple locations?$/i.test(t)) return true;
  if (/^(worldwide|distributed|anywhere|global)$/i.test(t)) return true;
  return false;
}

function normalizeHaystack(locationLabel: string): string {
  return locationLabel.trim().toLowerCase();
}

function tokenize(hay: string): string[] {
  return hay
    .split(/[,·|/]+/)
    .map((t) => t.trim())
    .filter(Boolean);
}

/** Longer country names first so "United Arab Emirates" wins over "United States". */
function guidesSortedByCountryLength(guides: readonly CountryGuide[]): CountryGuide[] {
  return [...guides].sort((a, b) => b.country.length - a.country.length);
}

function hayIncludesCountry(hay: string, country: string): boolean {
  const c = country.toLowerCase();
  if (c.length >= 4) return hay.includes(c);
  return new RegExp(`\\b${escapeRegExp(c)}\\b`, "i").test(hay);
}

function escapeRegExp(s: string): string {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function hayIncludesCapitalOrCity(hay: string, name: string): boolean {
  const n = name.toLowerCase();
  if (n.length < 3) return false;
  return hay.includes(n);
}

/**
 * Map a Teamtailor-style location string to a country guide when possible.
 */
export function findCountryGuideForLocationHint(
  locationLabel: string,
  guides: readonly CountryGuide[]
): CountryGuide | undefined {
  const raw = locationLabel.trim();
  if (!raw) return undefined;

  const hay = normalizeHaystack(raw);
  if (isUnmatchableVagueLocation(hay)) return undefined;

  const sorted = guidesSortedByCountryLength(guides);

  for (const g of sorted) {
    if (hayIncludesCountry(hay, g.country)) return g;
  }

  const capFirst = [...sorted].sort((a, b) => b.capital.length - a.capital.length);
  for (const g of capFirst) {
    if (hayIncludesCapitalOrCity(hay, g.capital)) return g;
  }

  for (const g of sorted) {
    for (const city of g.cities) {
      if (hayIncludesCapitalOrCity(hay, city.name)) return g;
    }
  }

  const tokens = tokenize(hay);
  for (const g of sorted) {
    const c = g.country.toLowerCase();
    if (tokens.some((t) => t === c)) return g;
  }

  const abbrevSlugs: [RegExp, string][] = [
    [/\buk\b/i, "uk"],
    [/\buae\b/i, "united-arab-emirates"],
    [/\busa\b/i, "united-states"],
  ];
  for (const [re, slug] of abbrevSlugs) {
    if (re.test(hay)) {
      const g = guides.find((x) => x.slug === slug);
      if (g) return g;
    }
  }

  return undefined;
}

/**
 * When `locationLabel` names a city in the guide’s `cities` list, return that city row (longest name wins on overlap).
 */
export function findMatchedCityInGuide(locationLabel: string, guide: CountryGuide): GuideCity | undefined {
  const raw = locationLabel.trim();
  if (!raw) return undefined;
  const hay = normalizeHaystack(raw);
  const cities = [...guide.cities].sort((a, b) => b.name.length - a.name.length);
  for (const city of cities) {
    if (hayIncludesCapitalOrCity(hay, city.name)) return city;
  }
  return undefined;
}

/**
 * Peers on the same continent with the same cost-of-living band; closest monthly budget first.
 * If none, falls back to same continent ordered by closest `avgMonthlyCost`.
 */
export function getPeerGuidesForComparison(
  guide: CountryGuide,
  guides: readonly CountryGuide[],
  max = 2
): CountryGuide[] {
  const others = guides.filter((g) => g.slug !== guide.slug);

  let peers = others.filter(
    (g) => g.continent === guide.continent && g.costOfLiving === guide.costOfLiving
  );

  if (peers.length === 0) {
    peers = others.filter((g) => g.continent === guide.continent);
  }

  peers.sort((a, b) => {
    const da = Math.abs(a.avgMonthlyCost - guide.avgMonthlyCost);
    const db = Math.abs(b.avgMonthlyCost - guide.avgMonthlyCost);
    if (da !== db) return da - db;
    return a.country.localeCompare(b.country);
  });

  return peers.slice(0, max);
}
