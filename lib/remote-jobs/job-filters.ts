import type { BrowseJobDto } from "@/lib/remote-jobs/browse-data";

export type LocationRegionFilter =
  | "all"
  | "worldwide"
  | "americas"
  | "europe"
  | "asia-pacific"
  | "africa"
  | "middle-east";

export type RoleFilter =
  | "all"
  | "engineering"
  | "marketing"
  | "design"
  | "sales"
  | "customer-success"
  | "finance-ops"
  | "hr"
  | "product-strategy"
  | "data"
  | "content"
  | "legal"
  | "healthcare";

export type TypeFilter = "all" | "full-time" | "part-time" | "freelance" | "internship" | "volunteer";

export type SalaryFilter =
  | "all"
  | "under-30k"
  | "30-60"
  | "60-100"
  | "100-150"
  | "150plus"
  | "not-specified";

/** When the listing was published (client-side filter uses local “today”). */
export type PostedFilter = "all" | "today" | "7d" | "14d" | "30d";

const MS_PER_DAY = 86_400_000;

export function jobMatchesPostedAt(
  job: BrowseJobDto,
  filter: PostedFilter,
  nowMs: number = Date.now()
): boolean {
  if (filter === "all") return true;
  const posted = job.postedAtMs;
  if (typeof posted !== "number" || !Number.isFinite(posted) || posted <= 0) return false;

  switch (filter) {
    case "today": {
      const d = new Date(nowMs);
      const startLocalDay = new Date(d.getFullYear(), d.getMonth(), d.getDate()).getTime();
      return posted >= startLocalDay;
    }
    case "7d":
      return posted >= nowMs - 7 * MS_PER_DAY;
    case "14d":
      return posted >= nowMs - 14 * MS_PER_DAY;
    case "30d":
      return posted >= nowMs - 30 * MS_PER_DAY;
    default:
      return true;
  }
}

export const LOCATION_KEYWORDS: Record<Exclude<LocationRegionFilter, "all" | "worldwide">, string[]> = {
  americas: [
    "usa",
    "united states",
    "canada",
    "mexico",
    "brazil",
    "latin america",
    "south america",
    "north america",
  ],
  europe: [
    "uk",
    "united kingdom",
    "germany",
    "france",
    "spain",
    "portugal",
    "netherlands",
    "europe",
    " eu",
    "remote eu",
  ],
  "asia-pacific": [
    "asia",
    "japan",
    "australia",
    "singapore",
    "india",
    "china",
    "pacific",
    "apac",
  ],
  africa: ["africa", "nigeria", "kenya", "south africa"],
  "middle-east": ["uae", "dubai", "middle east", "israel"],
};

export const ROLE_KEYWORDS: Record<Exclude<RoleFilter, "all">, string[]> = {
  engineering: [
    "engineer",
    "developer",
    " dev",
    "software",
    "frontend",
    "front-end",
    "backend",
    "back-end",
    "fullstack",
    "full-stack",
    "devops",
    "cloud",
    "mobile",
    "ios",
    "android",
    " qa",
    "quality assurance",
    "security",
    "data engineer",
    "sre",
    "site reliability",
  ],
  marketing: [
    "marketing",
    "growth",
    "seo",
    "sem",
    "paid",
    "social media",
    "brand",
    "campaign",
    "demand gen",
  ],
  design: [
    "design",
    "designer",
    " ux",
    " ui",
    "creative",
    "art director",
    "motion",
    "graphic",
  ],
  sales: [
    "sales",
    "account executive",
    "bdr",
    "sdr",
    "business development",
    "partnerships",
  ],
  "customer-success": [
    "customer success",
    "support",
    "account manager",
    " cx",
    "helpdesk",
    "onboarding",
  ],
  "finance-ops": [
    "finance",
    "accounting",
    "operations",
    "cfo",
    "controller",
    "analyst",
    "payroll",
  ],
  hr: ["hr", "recruiter", "recruiting", "talent", "people ops", "hrbp"],
  "product-strategy": [
    "product manager",
    "product management",
    "product owner",
    "product strategy",
    "program manager",
    "head of product",
    "vp product",
    "director of product",
    "chief product",
    "strategy",
    "coo",
    "chief of staff",
  ],
  data: [
    "data analyst",
    "data scientist",
    "analytics",
    " bi",
    "business intelligence",
    "sql",
  ],
  content: [
    "content",
    "writer",
    "copywriter",
    "editor",
    "journalist",
    "blogger",
    "technical writer",
  ],
  legal: ["legal", "lawyer", "compliance", "counsel", "paralegal", "privacy"],
  healthcare: [
    "nurse",
    "doctor",
    "medical",
    "health",
    "clinical",
    "therapist",
    "pharmacist",
  ],
};

export function locationText(job: BrowseJobDto): string {
  return (job.locationRestrictions ?? []).join(" ").toLowerCase();
}

export function isWorldwideJob(job: BrowseJobDto): boolean {
  const arr = job.locationRestrictions ?? [];
  if (arr.length === 0) return true;
  return arr.some((x) => x.toLowerCase().includes("worldwide"));
}

export function jobMatchesLocationRegion(job: BrowseJobDto, region: LocationRegionFilter): boolean {
  if (region === "all") return true;
  if (region === "worldwide") return isWorldwideJob(job);
  const loc = locationText(job);
  if (isWorldwideJob(job)) return false;
  const keywords = LOCATION_KEYWORDS[region];
  return keywords.some((kw) => loc.includes(kw.trim()));
}

export function jobMatchesRole(job: BrowseJobDto, role: RoleFilter): boolean {
  if (role === "all") return true;
  const t = job.title.toLowerCase();
  const keywords = ROLE_KEYWORDS[role];
  return keywords.some((kw) => t.includes(kw.trim()));
}

export function jobMatchesEmploymentType(job: BrowseJobDto, typeKey: TypeFilter): boolean {
  if (typeKey === "all") return true;
  const e = job.employmentType.toLowerCase();
  switch (typeKey) {
    case "full-time":
      return (
        e.includes("full-time") ||
        e.includes("full time") ||
        (e.includes("full") && !e.includes("part"))
      );
    case "part-time":
      return e.includes("part-time") || e.includes("part time") || /\bpart\b/.test(e);
    case "freelance":
      return e.includes("freelance") || e.includes("contract") || e.includes("consultant");
    case "internship":
      return e.includes("intern") || e.includes("internship");
    case "volunteer":
      return e.includes("volunteer");
    default:
      return true;
  }
}

/** Parse min/max USD (annual) from salary strings; overlap used against filter buckets. */
export function parseSalaryUsd(raw: string): { min: number; max: number } | null {
  const s = raw.replace(/,/g, "").toLowerCase();
  const values: number[] = [];
  const reK = /(\d+(?:\.\d+)?)\s*k\b/gi;
  let m: RegExpExecArray | null;
  while ((m = reK.exec(s)) !== null) {
    values.push(parseFloat(m[1]) * 1000);
  }
  const reD = /\$?\s*(\d{4,})\b/g;
  while ((m = reD.exec(s)) !== null) {
    values.push(parseFloat(m[1]));
  }
  if (values.length === 0) return null;
  return { min: Math.min(...values), max: Math.max(...values) };
}

export function salaryIsNotSpecified(job: BrowseJobDto): boolean {
  const raw = job.salary?.trim();
  if (!raw) return true;
  return parseSalaryUsd(raw) === null;
}

export function jobMatchesSalaryFilter(job: BrowseJobDto, filter: SalaryFilter): boolean {
  if (filter === "all") return true;
  if (filter === "not-specified") return salaryIsNotSpecified(job);
  const raw = job.salary?.trim();
  if (!raw) return false;
  const range = parseSalaryUsd(raw);
  if (!range) return false;
  const overlaps = (lo: number, hi: number) => range.max >= lo && range.min <= hi;
  switch (filter) {
    case "under-30k":
      return overlaps(0, 29_999);
    case "30-60":
      return overlaps(30_000, 60_000);
    case "60-100":
      return overlaps(60_000, 100_000);
    case "100-150":
      return overlaps(100_000, 150_000);
    case "150plus":
      return range.min >= 150_000;
    default:
      return true;
  }
}

function jobTextForSeniority(job: BrowseJobDto): string {
  const title = job.title.toLowerCase();
  const desc = (job.descriptionPlain ?? "").toLowerCase().slice(0, 800);
  return `${title} ${desc}`;
}

function matchesEntrySignals(text: string): boolean {
  return (
    /\bjunior\b/.test(text) ||
    /\bintern(ship)?\b/.test(text) ||
    /\bgraduate\b/.test(text) ||
    /\bentry-level\b/.test(text) ||
    /\bentry level\b/.test(text) ||
    (/\bentry\b/.test(text) && !/\bentry\s+to\b/.test(text)) ||
    (/\bassociate\b/.test(text) && !/\bassociate\s+(director|partner|vp|principal)\b/.test(text))
  );
}

function matchesSeniorSignals(text: string): boolean {
  return /\b(senior|sr\.|staff|principal|lead\b|director|head of|chief|vp\b|vice president|architect)\b/.test(
    text
  );
}

function matchesMidSignals(text: string): boolean {
  return /\b(mid-level|mid level|intermediate)\b/.test(text) || /\bii\b/.test(text);
}

export type QuestionnaireSeniority = "entry" | "mid" | "senior";

export function jobMatchesSeniority(job: BrowseJobDto, level: QuestionnaireSeniority): boolean {
  const t = jobTextForSeniority(job);
  switch (level) {
    case "entry":
      /** Prefer junior/intern signals; otherwise exclude only clearly senior-titled roles. */
      return matchesEntrySignals(t) || !matchesSeniorSignals(t);
    case "senior":
      /** Prefer senior/lead signals; otherwise include roles that are not clearly entry-level. */
      return matchesSeniorSignals(t) || !matchesEntrySignals(t);
    case "mid":
      return matchesMidSignals(t) || (!matchesEntrySignals(t) && !matchesSeniorSignals(t));
    default:
      return true;
  }
}

/** EUR/month expectation → overlap with parsed USD annual salary (approx FX). */
export type QuestionnaireSalaryExpectation =
  | "not-important"
  | "under-2000"
  | "2000-4000"
  | "4000-plus";

const EUR_TO_USD = 1.08;

export function jobMatchesQuestionnaireSalary(
  job: BrowseJobDto,
  expectation: QuestionnaireSalaryExpectation
): boolean {
  if (expectation === "not-important") return true;
  const raw = job.salary?.trim();
  /** Most boards omit salary; excluding those yields almost no matches. Keep unknown/unparseable. */
  if (!raw) return true;
  const range = parseSalaryUsd(raw);
  if (!range) return true;

  const overlaps = (lo: number, hi: number) => range.max >= lo && range.min <= hi;

  const eurMonthlyToUsdAnnualLow = (eurMo: number) => eurMo * 12 * EUR_TO_USD;
  const eurMonthlyToUsdAnnualHigh = (eurMo: number) => eurMo * 12 * EUR_TO_USD;

  switch (expectation) {
    case "under-2000":
      return overlaps(0, Math.floor(eurMonthlyToUsdAnnualHigh(2000)) - 1);
    case "2000-4000":
      return overlaps(Math.floor(eurMonthlyToUsdAnnualLow(2000)), Math.ceil(eurMonthlyToUsdAnnualHigh(4000)));
    case "4000-plus":
      return overlaps(Math.ceil(eurMonthlyToUsdAnnualLow(4000)), 10_000_000);
    default:
      return true;
  }
}
