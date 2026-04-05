"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { TestimonialsSection } from "./testimonials-section";

/** Glass panel matching Luminescent reference */
const glassPanel =
  "rounded-xl border border-[rgba(141,209,224,0.1)] bg-[rgba(0,58,71,0.4)] backdrop-blur-[12px]";

/** Teamtailor careersite — speak with a recruiter / book a meeting (same as hero + bottom CTA). */
const RECRUITER_CONTACT_URL =
  "https://abroader-1746694588.teamtailor.com/jobs/7441089-speak-with-a-recruiter-about-your-next-job-abroad";

type FeaturedJob = {
  id: string;
  title: string;
  locationLabel: string;
  employmentTypeLabel: string;
  applyUrl: string;
  pictureUrl: string | null;
};

type FeaturedApiResponse = {
  ok: boolean;
  jobs: FeaturedJob[];
};

/** Always read `TEAMTAILOR_API_TOKEN` at request time and avoid caching a stale empty list. */
export const dynamic = "force-dynamic";

type RemoteJobListing = {
  /** Stable id for `/remote-jobs/job/[id]` (aggregated feed only). */
  id: string;
  title: string;
  companyName: string;
  employmentType: string;
  locationRestrictions: string[];
  applicationLink: string;
  salary?: string;
  /** Board that provided the listing (Himalayas, Remotive, Remote OK, Jobicy). */
  source?: string;
  descriptionPlain?: string;
};

type LocationRegionFilter =
  | "all"
  | "worldwide"
  | "americas"
  | "europe"
  | "asia-pacific"
  | "africa"
  | "middle-east";

type RoleFilter =
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

type TypeFilter = "all" | "full-time" | "part-time" | "freelance" | "internship" | "volunteer";

type SalaryFilter =
  | "all"
  | "under-30k"
  | "30-60"
  | "60-100"
  | "100-150"
  | "150plus"
  | "not-specified";

const LOCATION_KEYWORDS: Record<Exclude<LocationRegionFilter, "all" | "worldwide">, string[]> = {
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

const ROLE_KEYWORDS: Record<Exclude<RoleFilter, "all">, string[]> = {
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

function locationText(job: RemoteJobListing): string {
  return (job.locationRestrictions ?? []).join(" ").toLowerCase();
}

function isWorldwideJob(job: RemoteJobListing): boolean {
  const arr = job.locationRestrictions ?? [];
  if (arr.length === 0) return true;
  return arr.some((x) => x.toLowerCase().includes("worldwide"));
}

function jobMatchesLocationRegion(job: RemoteJobListing, region: LocationRegionFilter): boolean {
  if (region === "all") return true;
  if (region === "worldwide") return isWorldwideJob(job);
  const loc = locationText(job);
  if (isWorldwideJob(job)) return false;
  const keywords = LOCATION_KEYWORDS[region];
  return keywords.some((kw) => loc.includes(kw.trim()));
}

function jobMatchesRole(job: RemoteJobListing, role: RoleFilter): boolean {
  if (role === "all") return true;
  const t = job.title.toLowerCase();
  const keywords = ROLE_KEYWORDS[role];
  return keywords.some((kw) => t.includes(kw.trim()));
}

function jobMatchesEmploymentType(job: RemoteJobListing, typeKey: TypeFilter): boolean {
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
      return (
        e.includes("freelance") ||
        e.includes("contract") ||
        e.includes("consultant")
      );
    case "internship":
      return e.includes("intern") || e.includes("internship");
    case "volunteer":
      return e.includes("volunteer");
    default:
      return true;
  }
}

/** Parse min/max USD from salary strings; overlap used against filter buckets. */
function parseSalaryUsd(raw: string): { min: number; max: number } | null {
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

function salaryIsNotSpecified(job: RemoteJobListing): boolean {
  const raw = job.salary?.trim();
  if (!raw) return true;
  return parseSalaryUsd(raw) === null;
}

function jobMatchesSalaryFilter(job: RemoteJobListing, filter: SalaryFilter): boolean {
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

type BrowseApiResponse = {
  jobs: RemoteJobListing[];
  error?: string | null;
};

/** Max job rows shown before "View more" (current search + filters). */
const INITIAL_VISIBLE_REMOTE_JOBS = 14;

const PLACEHOLDER_FEATURED: Omit<FeaturedJob, "id">[] = [
  {
    title: "Recruitment Consultant",
    locationLabel: "Remote · EMEA",
    employmentTypeLabel: "Full time",
    applyUrl: RECRUITER_CONTACT_URL,
    pictureUrl: null,
  },
  {
    title: "Refer a Candidate",
    locationLabel: "Global",
    employmentTypeLabel: "Partnership",
    applyUrl: RECRUITER_CONTACT_URL,
    pictureUrl: null,
  },
];

function scrollToJobs() {
  document.getElementById("jobs")?.scrollIntoView({ behavior: "smooth" });
}

function featuredBadge(index: number, employmentTypeLabel: string): string {
  const upper = employmentTypeLabel.toUpperCase();
  if (index === 0) return upper || "FEATURED";
  if (index === 1) return upper || "HAND-PICKED";
  return upper || "PRIORITY";
}

function jobRowEmoji(title: string): string {
  const t = title.toLowerCase();
  if (t.includes("design") || t.includes("ux") || t.includes("ui")) return "🎨";
  if (
    t.includes("engineer") ||
    t.includes("developer") ||
    t.includes("dev") ||
    t.includes("software")
  )
    return "⌨️";
  if (t.includes("market") || t.includes("sales") || t.includes("growth")) return "📈";
  if (t.includes("data") || t.includes("analyst")) return "📊";
  if (t.includes("support") || t.includes("customer")) return "🎧";
  return "💼";
}

function usePrefersReducedMotion(): boolean {
  const [reduced, setReduced] = useState(() =>
    typeof window !== "undefined" ? window.matchMedia("(prefers-reduced-motion: reduce)").matches : false
  );
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = () => setReduced(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);
  return reduced;
}

function useCountUp(
  target: number,
  active: boolean,
  prefersReducedMotion: boolean,
  opts: { durationMs?: number; delayMs?: number } = {}
) {
  const { durationMs = 1300, delayMs = 0 } = opts;
  const [animated, setAnimated] = useState(0);

  useEffect(() => {
    if (prefersReducedMotion) return;
    if (!active) return;
    let cancelled = false;
    let rafId = 0;
    const timeoutId = window.setTimeout(() => {
      const start = performance.now();
      const tick = (now: number) => {
        if (cancelled) return;
        const elapsed = now - start;
        const t = Math.min(1, elapsed / durationMs);
        const eased = 1 - (1 - t) ** 3;
        setAnimated(Math.round(eased * target));
        if (t < 1) rafId = requestAnimationFrame(tick);
      };
      rafId = requestAnimationFrame(tick);
    }, delayMs);
    return () => {
      cancelled = true;
      clearTimeout(timeoutId);
      cancelAnimationFrame(rafId);
    };
  }, [active, target, durationMs, delayMs, prefersReducedMotion]);

  return prefersReducedMotion ? target : animated;
}

function IconBriefcase({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2M4 9a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V9Z"
      />
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 13h16" />
    </svg>
  );
}

function IconGlobe({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
      <circle cx="12" cy="12" r="9" />
      <path strokeLinecap="round" d="M3 12h18" />
      <path
        strokeLinecap="round"
        d="M12 3c2.5 3.5 4 6.2 4 9s-1.5 5.5-4 9c-2.5-3.5-4-6.2-4-9s1.5-5.5 4-9Z"
      />
    </svg>
  );
}

function IconBuilding({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 21V8l4-4h8l4 4v13" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 21v-6h6v6" />
      <path strokeLinecap="round" d="M9 10h.01M12 10h.01M15 10h.01" />
    </svg>
  );
}

function RemoteJobsStatsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) setInView(true);
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const jobs = useCountUp(500, inView, prefersReducedMotion, { delayMs: 0 });
  const countries = useCountUp(40, inView, prefersReducedMotion, { delayMs: 140 });
  const companies = useCountUp(100, inView, prefersReducedMotion, { delayMs: 280 });

  const items = [
    {
      value: jobs,
      label: "Remote Jobs",
      Icon: IconBriefcase,
      accent: "from-rj-primary/20 via-transparent to-rj-secondary/10",
      ringHover: "hover:shadow-[0_0_0_1px_rgba(253,187,55,0.35),0_24px_48px_-12px_rgba(0,0,0,0.55)]",
    },
    {
      value: countries,
      label: "Countries",
      Icon: IconGlobe,
      accent: "from-rj-secondary/25 via-transparent to-rj-primary/10",
      ringHover: "hover:shadow-[0_0_0_1px_rgba(141,209,224,0.35),0_24px_48px_-12px_rgba(0,0,0,0.55)]",
    },
    {
      value: companies,
      label: "Companies",
      Icon: IconBuilding,
      accent: "from-rj-primary/15 via-transparent to-rj-secondary/15",
      ringHover: "hover:shadow-[0_0_0_1px_rgba(253,187,55,0.28),0_24px_48px_-12px_rgba(0,0,0,0.55)]",
    },
  ] as const;

  return (
    <section
      ref={sectionRef}
      className="relative border-y border-white/10 bg-gradient-to-b from-rj-surface-low via-rj-bg/95 to-rj-surface-low py-14 backdrop-blur-md"
      aria-label="Platform statistics"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(253,187,55,0.08),transparent)]"
        aria-hidden
      />
      <div className="relative mx-auto grid max-w-6xl grid-cols-1 gap-5 px-6 sm:grid-cols-3 sm:gap-6">
        {items.map((item, i) => (
          <div
            key={item.label}
            className={`group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-gradient-to-br ${item.accent} p-6 shadow-[0_4px_24px_rgba(0,0,0,0.35)] ring-1 ring-white/[0.06] transition-all duration-500 ease-out hover:-translate-y-1.5 ${item.ringHover} motion-reduce:transform-none motion-reduce:transition-none`}
            style={{ transitionDelay: `${i * 40}ms` }}
          >
            <div
              className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-rj-primary/10 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
              aria-hidden
            />
            <div className="relative flex flex-col items-center text-center sm:items-start sm:text-left">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-rj-elevated/90 text-rj-secondary shadow-inner ring-1 ring-white/10 transition-all duration-300 group-hover:scale-110 group-hover:text-rj-primary motion-reduce:group-hover:scale-100">
                <item.Icon className="h-6 w-6" />
              </div>
              <div className="font-rj-headline text-4xl font-extrabold tabular-nums tracking-tight text-rj-primary md:text-[2.75rem]">
                {item.value}
                <span className="align-super text-2xl md:text-3xl">+</span>
              </div>
              <div className="mt-2 text-sm font-semibold tracking-wide text-rj-fg/90">{item.label}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function RemoteJobsPage() {
  const [featuredJobs, setFeaturedJobs] = useState<FeaturedJob[]>([]);
  const [featuredLoading, setFeaturedLoading] = useState(true);
  const [featuredShowPlaceholders, setFeaturedShowPlaceholders] = useState(false);

  const [remoteJobs, setRemoteJobs] = useState<RemoteJobListing[]>([]);
  const [remoteJobsLoading, setRemoteJobsLoading] = useState(true);
  const [remoteJobsError, setRemoteJobsError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [locationFilter, setLocationFilter] = useState<LocationRegionFilter>("all");
  const [roleFilter, setRoleFilter] = useState<RoleFilter>("all");
  const [typeFilter, setTypeFilter] = useState<TypeFilter>("all");
  const [salaryFilter, setSalaryFilter] = useState<SalaryFilter>("all");
  const [showAllFilteredJobs, setShowAllFilteredJobs] = useState(false);

  useEffect(() => {
    setShowAllFilteredJobs(false);
  }, [searchQuery, locationFilter, roleFilter, typeFilter, salaryFilter]);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      setFeaturedLoading(true);
      try {
        const res = await fetch("/api/remote-jobs/featured", { cache: "no-store" });
        const data = (await res.json()) as FeaturedApiResponse;
        if (cancelled) return;
        if (data.ok && Array.isArray(data.jobs) && data.jobs.length > 0) {
          setFeaturedJobs(data.jobs);
          setFeaturedShowPlaceholders(false);
        } else {
          setFeaturedJobs([]);
          setFeaturedShowPlaceholders(true);
        }
      } catch {
        if (!cancelled) {
          setFeaturedJobs([]);
          setFeaturedShowPlaceholders(true);
        }
      } finally {
        if (!cancelled) setFeaturedLoading(false);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      setRemoteJobsLoading(true);
      setRemoteJobsError(null);
      try {
        const res = await fetch("/api/remote-jobs/browse", {
          cache: "no-store",
        });
        if (!res.ok) {
          throw new Error(`Could not load listings (${res.status}).`);
        }
        const data = (await res.json()) as BrowseApiResponse;
        if (data.error && (!data.jobs || data.jobs.length === 0)) {
          throw new Error(data.error);
        }
        if (cancelled) return;
        setRemoteJobs(Array.isArray(data.jobs) ? data.jobs : []);
      } catch (e) {
        if (!cancelled) {
          setRemoteJobs([]);
          setRemoteJobsError(
            e instanceof Error ? e.message : "Something went wrong loading remote listings."
          );
        }
      } finally {
        if (!cancelled) setRemoteJobsLoading(false);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  const clearFilters = () => {
    setLocationFilter("all");
    setRoleFilter("all");
    setTypeFilter("all");
    setSalaryFilter("all");
    setSearchQuery("");
  };

  const hasActiveFilters =
    locationFilter !== "all" ||
    roleFilter !== "all" ||
    typeFilter !== "all" ||
    salaryFilter !== "all";

  const filteredRemoteJobs = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return remoteJobs.filter((job) => {
      if (q) {
        const loc = (job.locationRestrictions ?? []).join(" ").toLowerCase();
        const src = (job.source ?? "").toLowerCase();
        const hay = `${job.title} ${job.companyName} ${loc} ${src}`.toLowerCase();
        if (!hay.includes(q)) return false;
      }
      if (!jobMatchesLocationRegion(job, locationFilter)) return false;
      if (!jobMatchesRole(job, roleFilter)) return false;
      if (!jobMatchesEmploymentType(job, typeFilter)) return false;
      if (!jobMatchesSalaryFilter(job, salaryFilter)) return false;
      return true;
    });
  }, [remoteJobs, searchQuery, locationFilter, roleFilter, typeFilter, salaryFilter]);

  const visibleRemoteJobs = useMemo(() => {
    if (showAllFilteredJobs || filteredRemoteJobs.length <= INITIAL_VISIBLE_REMOTE_JOBS) {
      return filteredRemoteJobs;
    }
    return filteredRemoteJobs.slice(0, INITIAL_VISIBLE_REMOTE_JOBS);
  }, [filteredRemoteJobs, showAllFilteredJobs]);

  const displayFeatured =
    featuredShowPlaceholders || (!featuredLoading && featuredJobs.length === 0)
      ? PLACEHOLDER_FEATURED.map((p, i) => ({ ...p, id: `placeholder-${i}` }))
      : featuredJobs;

  const filterSelectClass =
    "w-full rounded-lg border-0 bg-rj-elevated px-3 py-2.5 text-sm text-rj-fg shadow-sm ring-1 ring-white/5 focus:outline-none focus:ring-2 focus:ring-rj-primary/40";

  return (
    <main className="w-full min-h-full overflow-x-hidden bg-rj-bg font-rj-body text-rj-on-bg">
      {/* Hero */}
      <section className="relative flex min-h-[min(716px,88vh)] flex-col items-center justify-center overflow-hidden px-6 text-center bg-[radial-gradient(circle_at_center,#003f4d_0%,#00161d_70%)]">
        <div
          className="pointer-events-none absolute -left-24 -top-24 h-96 w-96 rounded-full bg-rj-secondary/10 blur-[100px]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-rj-primary/10 blur-[100px]"
          aria-hidden
        />

        <div className="relative z-10 max-w-4xl">
          <span className="font-rj-accent mb-4 block -rotate-2 transform text-lg text-rj-secondary">
            Remote-first careers worldwide
          </span>
          <h1 className="font-rj-headline mb-8 text-4xl font-extrabold leading-tight tracking-tight text-rj-fg md:text-6xl lg:text-7xl">
            Find Your Perfect Remote Job{" "}
            <span className="text-rj-primary">Abroad</span>
          </h1>
          <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-rj-muted md:text-xl">
            Join thousands of professionals working remotely from anywhere in the world.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={RECRUITER_CONTACT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-xl bg-rj-primary px-8 py-4 text-lg font-bold text-rj-on-primary shadow-[0_0_20px_rgba(253,187,55,0.2)] transition-all hover:shadow-[0_0_30px_rgba(253,187,55,0.3)] active:scale-95"
            >
              Speak to a Recruiter
            </a>
            <button
              type="button"
              onClick={scrollToJobs}
              className={`inline-flex items-center justify-center rounded-xl border border-rj-secondary/20 px-8 py-4 text-lg font-bold text-rj-fg transition-all hover:bg-rj-surface-high active:scale-95 ${glassPanel}`}
            >
              Browse Jobs
            </button>
          </div>
        </div>
      </section>

      <RemoteJobsStatsSection />

      {/* Featured */}
      <section className="bg-rj-surface-low px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col items-end justify-between gap-6 md:flex-row">
            <div>
              <h2 className="font-rj-headline mb-4 text-3xl font-bold text-rj-fg md:text-4xl">
                Featured Opportunities
              </h2>
              <p className="text-lg text-rj-muted">Hand-picked roles from our recruitment team</p>
            </div>
            <span className="font-rj-accent hidden text-sm text-rj-secondary md:block">
              Highly recommended →
            </span>
          </div>

          {featuredLoading ? (
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  className="overflow-hidden rounded-xl ring-1 ring-white/5"
                >
                  <div className="aspect-video animate-pulse bg-rj-elevated/50" />
                  <div className="space-y-3 border-t border-white/5 bg-[rgba(0,58,71,0.35)] p-6 backdrop-blur-[12px]">
                    <div className="h-3 w-24 animate-pulse rounded bg-rj-elevated/60" />
                    <div className="h-7 w-[85%] animate-pulse rounded bg-rj-elevated/50" />
                    <div className="h-4 w-40 animate-pulse rounded bg-rj-elevated/40" />
                    <div className="flex justify-between pt-2">
                      <div className="h-7 w-20 animate-pulse rounded-full bg-rj-elevated/40" />
                      <div className="h-4 w-24 animate-pulse rounded bg-rj-elevated/30" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {displayFeatured.map((job, index) => {
                const emphasized = index === 1 && displayFeatured.length >= 2;
                return (
                  <article
                    key={job.id}
                    className={`group relative flex flex-col overflow-hidden rounded-xl p-0 transition-all duration-300 hover:-translate-y-2 motion-reduce:hover:translate-y-0 ${glassPanel} ${
                      emphasized
                        ? "z-10 border-rj-primary/25 shadow-2xl md:scale-[1.04] motion-reduce:md:scale-100"
                        : ""
                    }`}
                  >
                    <div className="relative aspect-video w-full shrink-0 overflow-hidden bg-gradient-to-br from-rj-elevated to-rj-surface-high">
                      {job.pictureUrl ? (
                        // Dynamic Teamtailor URLs; plain img avoids optimizer domain config churn
                        // eslint-disable-next-line @next/next/no-img-element -- external job media
                        <img
                          src={job.pictureUrl}
                          alt=""
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03] motion-reduce:group-hover:scale-100"
                        />
                      ) : (
                        <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-rj-elevated/80 to-rj-surface-high text-4xl text-rj-secondary/60">
                          ✦
                        </div>
                      )}
                      <div
                        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[rgba(0,22,29,0.75)] via-transparent to-transparent opacity-90"
                        aria-hidden
                      />
                    </div>
                    <div className="flex flex-1 flex-col p-6 md:p-8">
                      <span className="mb-2 text-xs font-bold uppercase tracking-widest text-rj-primary">
                        {featuredBadge(index, job.employmentTypeLabel)}
                      </span>
                      <h3 className="font-rj-headline mb-2 text-2xl font-bold text-rj-fg">{job.title}</h3>
                      <p className="mb-1 text-sm font-semibold text-rj-fg/90">Abroader</p>
                      <p className="mb-6 text-sm text-rj-muted">📍 {job.locationLabel}</p>
                      <div className="mt-auto flex flex-wrap items-center justify-between gap-3">
                        <div className="flex flex-wrap gap-2">
                          <span className="rounded-full border border-rj-secondary/20 bg-rj-secondary/10 px-3 py-1 text-xs text-rj-secondary">
                            {job.employmentTypeLabel}
                          </span>
                        </div>
                        <a
                          href={job.applyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 font-bold text-rj-primary transition-transform group-hover:translate-x-1"
                        >
                          Apply Now
                          <span aria-hidden className="inline-block transition-transform group-hover:translate-x-1">
                            →
                          </span>
                        </a>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* Browse */}
      <section id="jobs" className="bg-rj-bg px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12">
            <h2 className="font-rj-headline mb-2 text-3xl font-bold text-rj-fg md:text-4xl">
              Remote Jobs Worldwide
            </h2>
            <p className="text-lg text-rj-muted">Opportunities from top remote job boards</p>
          </div>

          <div className="mb-6 max-w-2xl">
            <input
              type="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by title, company or location..."
              aria-label="Search remote jobs"
              className="w-full rounded-xl border border-white/10 bg-rj-elevated/80 px-4 py-3.5 text-rj-fg placeholder:text-rj-muted/70 focus:border-rj-primary/50 focus:outline-none focus:ring-2 focus:ring-rj-primary/25"
            />
          </div>

          <div
            className={`${glassPanel} z-10 mb-10 space-y-5 p-5 md:p-6 lg:sticky lg:top-24`}
          >
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h3 className="font-rj-headline text-lg font-bold text-rj-fg">Filters</h3>
              {hasActiveFilters ? (
                <button
                  type="button"
                  onClick={clearFilters}
                  className="text-xs font-semibold text-rj-secondary hover:underline"
                >
                  Clear all
                </button>
              ) : null}
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
              <div>
                <label
                  htmlFor="rj-filter-location"
                  className="mb-2 block text-xs font-bold uppercase tracking-wider text-rj-muted"
                >
                  Location
                </label>
                <select
                  id="rj-filter-location"
                  className={filterSelectClass}
                  value={locationFilter}
                  onChange={(e) => setLocationFilter(e.target.value as LocationRegionFilter)}
                  aria-label="Filter by location region"
                >
                  <option value="all">All Locations</option>
                  <option value="worldwide">Worldwide</option>
                  <option value="americas">Americas</option>
                  <option value="europe">Europe</option>
                  <option value="asia-pacific">Asia Pacific</option>
                  <option value="africa">Africa</option>
                  <option value="middle-east">Middle East</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="rj-filter-role"
                  className="mb-2 block text-xs font-bold uppercase tracking-wider text-rj-muted"
                >
                  Job role
                </label>
                <select
                  id="rj-filter-role"
                  className={filterSelectClass}
                  value={roleFilter}
                  onChange={(e) => setRoleFilter(e.target.value as RoleFilter)}
                  aria-label="Filter by job role"
                >
                  <option value="all">All Roles</option>
                  <option value="engineering">Engineering &amp; Tech</option>
                  <option value="marketing">Marketing &amp; Growth</option>
                  <option value="design">Design &amp; Creative</option>
                  <option value="sales">Sales &amp; Business Dev</option>
                  <option value="customer-success">Customer Success</option>
                  <option value="finance-ops">Finance &amp; Operations</option>
                  <option value="hr">HR &amp; Recruiting</option>
                  <option value="product-strategy">Product &amp; Strategy</option>
                  <option value="data">Data &amp; Analytics</option>
                  <option value="content">Content &amp; Writing</option>
                  <option value="legal">Legal &amp; Compliance</option>
                  <option value="healthcare">Healthcare</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="rj-filter-type"
                  className="mb-2 block text-xs font-bold uppercase tracking-wider text-rj-muted"
                >
                  Type
                </label>
                <select
                  id="rj-filter-type"
                  className={filterSelectClass}
                  value={typeFilter}
                  onChange={(e) => setTypeFilter(e.target.value as TypeFilter)}
                  aria-label="Filter by employment type"
                >
                  <option value="all">All Types</option>
                  <option value="full-time">Full-time</option>
                  <option value="part-time">Part-time</option>
                  <option value="freelance">Freelance / Contract</option>
                  <option value="internship">Internship</option>
                  <option value="volunteer">Volunteer</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="rj-filter-salary"
                  className="mb-2 block text-xs font-bold uppercase tracking-wider text-rj-muted"
                >
                  Salary
                </label>
                <select
                  id="rj-filter-salary"
                  className={filterSelectClass}
                  value={salaryFilter}
                  onChange={(e) => setSalaryFilter(e.target.value as SalaryFilter)}
                  aria-label="Filter by salary range"
                >
                  <option value="all">All Salaries</option>
                  <option value="under-30k">Under $30k</option>
                  <option value="30-60">$30k – $60k</option>
                  <option value="60-100">$60k – $100k</option>
                  <option value="100-150">$100k – $150k</option>
                  <option value="150plus">$150k+</option>
                  <option value="not-specified">Not specified</option>
                </select>
              </div>
            </div>
          </div>

          <div className="min-w-0 space-y-4">
              {!remoteJobsLoading && !remoteJobsError && filteredRemoteJobs.length > 0 ? (
                <p className="text-sm text-rj-muted">
                  {filteredRemoteJobs.length <= INITIAL_VISIBLE_REMOTE_JOBS || showAllFilteredJobs
                    ? `Showing ${filteredRemoteJobs.length} remote job${
                        filteredRemoteJobs.length === 1 ? "" : "s"
                      }`
                    : `Showing ${INITIAL_VISIBLE_REMOTE_JOBS} of ${filteredRemoteJobs.length} remote jobs`}
                </p>
              ) : null}

              {remoteJobsLoading ? (
                <div className="space-y-4">
                  {[0, 1, 2].map((i) => (
                    <div
                      key={i}
                      className="flex animate-pulse gap-4 rounded-xl bg-rj-elevated/40 p-6 ring-1 ring-white/5"
                    >
                      <div className="h-14 w-14 shrink-0 rounded-lg bg-rj-elevated" />
                      <div className="flex-1 space-y-2 pt-1">
                        <div className="h-4 w-[55%] rounded bg-rj-elevated" />
                        <div className="h-3 w-[35%] rounded bg-rj-elevated/70" />
                      </div>
                    </div>
                  ))}
                </div>
              ) : remoteJobsError ? (
                <div className={`${glassPanel} p-8 text-center`} role="alert">
                  <p className="leading-relaxed text-rj-fg">
                    {remoteJobsError} Please try again later, or{" "}
                    <a
                      href={RECRUITER_CONTACT_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold text-rj-secondary underline"
                    >
                      speak to a recruiter
                    </a>
                    .
                  </p>
                </div>
              ) : filteredRemoteJobs.length === 0 ? (
                <p className="text-center text-rj-muted">
                  {remoteJobs.length === 0
                    ? "No listings loaded right now. Check back soon."
                    : searchQuery.trim() !== "" ||
                        locationFilter !== "all" ||
                        roleFilter !== "all" ||
                        typeFilter !== "all" ||
                        salaryFilter !== "all"
                      ? "No jobs match your search or filters."
                      : "No jobs match your search. Try different keywords."}
                </p>
              ) : (
                <>
                  {visibleRemoteJobs.map((job) => (
                    <Link
                      key={job.id}
                      href={`/remote-jobs/job/${job.id}?source=${encodeURIComponent(job.source ?? "")}`}
                      className={`group flex flex-col gap-4 rounded-xl p-6 text-left no-underline transition-colors hover:bg-rj-surface-high/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rj-primary/40 md:flex-row md:items-center md:gap-6 ${glassPanel}`}
                    >
                      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-rj-elevated text-2xl ring-1 ring-white/10">
                        {jobRowEmoji(job.title)}
                      </div>
                      <div className="min-w-0 flex-1">
                        <h3 className="font-rj-headline text-xl font-bold text-rj-fg">{job.title}</h3>
                        <p className="text-sm text-rj-muted">
                          {job.companyName} · 📍{" "}
                          {(job.locationRestrictions ?? []).join(", ") || "Location flexible"}
                        </p>
                      </div>
                      <div className="flex flex-col gap-2 md:items-end">
                        {job.salary ? (
                          <span className="font-bold text-rj-fg whitespace-nowrap">{job.salary}</span>
                        ) : (
                          <span className="text-sm text-rj-muted">Compensation varies</span>
                        )}
                        <div className="flex flex-wrap gap-2">
                          {job.source ? (
                            <span className="rounded border border-rj-secondary/15 bg-rj-secondary/10 px-2 py-0.5 text-xs text-rj-secondary">
                              {job.source}
                            </span>
                          ) : null}
                          <span className="rounded border border-rj-secondary/15 bg-rj-secondary/10 px-2 py-0.5 text-xs text-rj-secondary">
                            {job.employmentType}
                          </span>
                        </div>
                        <span className="inline-flex items-center gap-1 font-bold text-rj-primary transition-transform group-hover:translate-x-0.5">
                          View job
                          <span aria-hidden>→</span>
                        </span>
                      </div>
                    </Link>
                  ))}

                  {filteredRemoteJobs.length > INITIAL_VISIBLE_REMOTE_JOBS ? (
                    <div className="flex justify-center pt-6">
                      {!showAllFilteredJobs ? (
                        <button
                          type="button"
                          className="inline-flex items-center gap-2 font-bold text-rj-primary hover:underline"
                          onClick={() => setShowAllFilteredJobs(true)}
                        >
                          View more jobs ({filteredRemoteJobs.length - INITIAL_VISIBLE_REMOTE_JOBS}{" "}
                          more)
                          <span aria-hidden className="text-xl leading-none">
                            ⌄
                          </span>
                        </button>
                      ) : (
                        <button
                          type="button"
                          className="inline-flex items-center gap-2 font-bold text-rj-primary hover:underline"
                          onClick={() => setShowAllFilteredJobs(false)}
                        >
                          Show fewer
                        </button>
                      )}
                    </div>
                  ) : null}
                </>
              )}
          </div>
        </div>
      </section>

      <TestimonialsSection />

      {/* CTA */}
      <section className="border-t border-rj-primary/25 bg-gradient-to-b from-rj-bright/40 to-rj-surface-high px-6 py-16 text-center">
        <h2 className="font-rj-headline mb-3 text-3xl font-bold text-rj-primary md:text-4xl">
          Ready to work from anywhere?
        </h2>
        <p className="mx-auto mb-8 max-w-xl text-lg text-rj-on-bg/95">
          Speak to one of our recruiters today and take the first step.
        </p>
        <a
          href={RECRUITER_CONTACT_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-xl bg-rj-primary px-8 py-4 text-lg font-bold text-rj-on-primary shadow-lg transition hover:brightness-105 active:scale-95"
        >
          Get in Touch
        </a>
      </section>
    </main>
  );
}
