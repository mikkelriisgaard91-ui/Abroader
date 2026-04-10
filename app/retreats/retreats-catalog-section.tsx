"use client";

import Image from "next/image";
import { useCallback, useEffect, useMemo, useState, useTransition } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import {
  retreatCatalog,
  filterRetreatCatalog,
  REGION_LABELS,
  RETREAT_TYPE_LABELS,
  RETREAT_CATEGORY_LABELS,
  getDistinctRegionSlugs,
  type RetreatCategory,
  type RetreatTypeFacet,
} from "@/lib/retreats/catalog";

const MAX_PRICE_OPTIONS: { value: number | null; label: string }[] = [
  { value: null, label: "Any price" },
  { value: 500, label: "Up to €500" },
  { value: 750, label: "Up to €750" },
  { value: 1000, label: "Up to €1,000" },
  { value: 1500, label: "Up to €1,500" },
];

function parseCategory(raw: string | null): RetreatCategory | "all" {
  if (raw === "yoga" || raw === "surf" || raw === "martial-arts" || raw === "motorcycle-trips") return raw;
  return "all";
}

function parseTypeFacet(raw: string | null): RetreatTypeFacet | "all" {
  if (
    raw === "surf-camp" ||
    raw === "surf-yoga" ||
    raw === "kitesurf" ||
    raw === "yoga-retreat" ||
    raw === "martial-arts" ||
    raw === "motorcycle-tour"
  )
    return raw;
  return "all";
}

function parseRegion(raw: string | null, allowed: string[]): string | "all" {
  if (raw && raw !== "all" && allowed.includes(raw)) return raw;
  return "all";
}

function parseMaxPrice(raw: string | null): number | null {
  if (!raw) return null;
  const n = Number.parseInt(raw, 10);
  if (Number.isFinite(n) && n > 0) return n;
  return null;
}

const selectClass =
  "w-full min-w-0 rounded-2xl border border-[rgba(36,99,116,0.15)] bg-white px-3 py-2.5 text-sm font-medium text-[#2a3d42] shadow-sm outline-none ring-[rgba(36,99,116,0.12)] focus:border-[rgba(36,99,116,0.35)] focus:ring-2 md:min-w-[11rem]";

const sectionBg =
  "scroll-mt-24 relative z-10 -mt-[4.5rem] border-b border-[rgba(36,99,116,0.1)] bg-gradient-to-b from-[#fafafa] via-[#e8f4f7]/55 to-[#f2efe9] px-4 pb-20 pt-8 shadow-[0_-12px_40px_-16px_rgba(36,99,116,0.08)] sm:-mt-20 sm:px-6 md:px-10 md:pt-10 lg:-mt-24 lg:px-12 lg:pb-28 lg:pt-12";

type RetreatFiltersState = {
  category: RetreatCategory | "all";
  typeFacet: RetreatTypeFacet | "all";
  regionSlug: string | "all";
  maxPriceEur: number | null;
};

function filtersFromParams(
  p: URLSearchParams,
  regionSlugs: string[],
): RetreatFiltersState {
  return {
    category: parseCategory(p.get("category")),
    typeFacet: parseTypeFacet(p.get("type")),
    regionSlug: parseRegion(p.get("region"), regionSlugs),
    maxPriceEur: parseMaxPrice(p.get("maxPrice")),
  };
}

function paramsFromFilters(f: RetreatFiltersState): URLSearchParams {
  const p = new URLSearchParams();
  if (f.category !== "all") p.set("category", f.category);
  if (f.typeFacet !== "all") p.set("type", f.typeFacet);
  if (f.regionSlug !== "all") p.set("region", f.regionSlug);
  if (f.maxPriceEur != null) p.set("maxPrice", String(f.maxPriceEur));
  return p;
}

const RESET_FILTERS: RetreatFiltersState = {
  category: "all",
  typeFacet: "all",
  regionSlug: "all",
  maxPriceEur: null,
};

export type RetreatsCatalogSectionProps = {
  /** When set (category landing), category filter defaults and URL sync to `?category=`. */
  presetCategory?: RetreatCategory | null;
};

export function RetreatsCatalogSection({ presetCategory }: RetreatsCatalogSectionProps = {}) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [, startTransition] = useTransition();

  const regionSlugs = useMemo(() => getDistinctRegionSlugs(retreatCatalog), []);

  const urlFilters = useMemo(() => {
    const base = filtersFromParams(searchParams, regionSlugs);
    if (presetCategory && base.category === "all" && !searchParams.get("category")) {
      return { ...base, category: presetCategory };
    }
    return base;
  }, [searchParams, regionSlugs, presetCategory]);

  /** Applied immediately on change so the grid does not wait for `router.replace`. */
  const [optimisticFilters, setOptimisticFilters] = useState<RetreatFiltersState | null>(null);

  useEffect(() => {
    setOptimisticFilters(null);
  }, [searchParams]);

  useEffect(() => {
    if (!presetCategory) return;
    if (searchParams.get("category")) return;
    const p = new URLSearchParams(searchParams.toString());
    p.set("category", presetCategory);
    setOptimisticFilters(filtersFromParams(p, regionSlugs));
    startTransition(() => {
      router.replace(`${pathname}?${p.toString()}`, { scroll: false });
    });
  }, [presetCategory, pathname, router, searchParams, regionSlugs, startTransition]);

  const filters = optimisticFilters ?? urlFilters;

  const filtered = useMemo(
    () =>
      filterRetreatCatalog(retreatCatalog, {
        category: filters.category,
        typeFacet: filters.typeFacet,
        regionSlug: filters.regionSlug,
        maxPriceEur: filters.maxPriceEur,
      }),
    [filters],
  );

  const setParams = useCallback(
    (updates: Record<string, string | null>) => {
      const base = optimisticFilters ?? urlFilters;
      const p = paramsFromFilters(base);
      for (const [key, val] of Object.entries(updates)) {
        if (val === null || val === "" || val === "all") {
          p.delete(key);
        } else {
          p.set(key, val);
        }
      }
      setOptimisticFilters(filtersFromParams(p, regionSlugs));
      const q = p.toString();
      startTransition(() => {
        router.replace(q ? `${pathname}?${q}` : pathname, { scroll: false });
      });
    },
    [optimisticFilters, urlFilters, regionSlugs, router, pathname, startTransition],
  );

  const resetFilters = useCallback(() => {
    if (presetCategory) {
      const p = new URLSearchParams();
      p.set("category", presetCategory);
      setOptimisticFilters(filtersFromParams(p, regionSlugs));
      startTransition(() => {
        router.replace(`${pathname}?${p.toString()}`, { scroll: false });
      });
    } else {
      setOptimisticFilters(RESET_FILTERS);
      startTransition(() => {
        router.replace(pathname, { scroll: false });
      });
    }
  }, [presetCategory, router, pathname, regionSlugs, startTransition]);

  return (
    <section id="browse-retreats" className={sectionBg}>
      <div className="mx-auto max-w-[1200px]">
        <div className="mb-8 rounded-[1.75rem] border border-[rgba(36,99,116,0.12)] bg-white/95 p-5 shadow-[0_8px_32px_-12px_rgba(36,99,116,0.12)] backdrop-blur-sm sm:p-6 md:mb-10 md:p-8">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.12em] text-[#246374] sm:mb-5 sm:text-base">
            Category
          </p>
          <div className="flex flex-wrap gap-3 sm:gap-4" role="radiogroup" aria-label="Retreat category">
            {(["all", "surf", "yoga", "martial-arts", "motorcycle-trips"] as const).map((cat) => {
              const active = filters.category === cat;
              const label = cat === "all" ? "All" : RETREAT_CATEGORY_LABELS[cat];
              return (
                <button
                  key={cat}
                  type="button"
                  role="radio"
                  aria-checked={active}
                  onClick={() => {
                    if (presetCategory && cat === "all") {
                      startTransition(() => {
                        router.push("/retreats");
                      });
                      return;
                    }
                    setParams({ category: cat === "all" ? null : cat });
                  }}
                  className={`min-h-[3.25rem] rounded-full px-7 py-3 text-base font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#246374] sm:min-h-[3.5rem] sm:px-9 sm:py-3.5 sm:text-lg ${
                    active
                      ? "bg-[#fcba36] text-[#2a1f0a] shadow-[0_6px_20px_rgba(252,186,54,0.4)]"
                      : "border-2 border-[rgba(36,99,116,0.2)] bg-white text-[#246374] hover:border-[rgba(36,99,116,0.35)] hover:bg-[#e8f4f7]"
                  }`}
                >
                  {label}
                </button>
              );
            })}
          </div>
        </div>

        <div className="mb-10 flex flex-col gap-4 rounded-3xl border border-[rgba(36,99,116,0.1)] bg-white/95 p-4 shadow-[0_16px_48px_-24px_rgba(36,99,116,0.12)] backdrop-blur-sm md:flex-row md:flex-wrap md:items-end md:gap-6 md:p-6">
          <label className="block min-w-[140px] flex-1 md:max-w-[220px]">
            <span className="mb-1.5 block text-xs font-medium uppercase tracking-wide text-[#5a6c70]">Trip type</span>
            <select
              className={selectClass}
              value={filters.typeFacet}
              onChange={(e) => {
                const v = e.target.value;
                setParams({ type: v === "all" ? null : v });
              }}
              aria-label="Filter by trip type"
            >
              <option value="all">All types</option>
              {(Object.keys(RETREAT_TYPE_LABELS) as RetreatTypeFacet[]).map((k) => (
                <option key={k} value={k}>
                  {RETREAT_TYPE_LABELS[k]}
                </option>
              ))}
            </select>
          </label>

          <label className="block min-w-[160px] flex-1 md:max-w-[260px]">
            <span className="mb-1.5 block text-xs font-medium uppercase tracking-wide text-[#5a6c70]">Location</span>
            <select
              className={selectClass}
              value={filters.regionSlug}
              onChange={(e) => {
                const v = e.target.value;
                setParams({ region: v === "all" ? null : v });
              }}
              aria-label="Filter by region"
            >
              <option value="all">All regions</option>
              {regionSlugs.map((slug) => (
                <option key={slug} value={slug}>
                  {REGION_LABELS[slug] ?? slug}
                </option>
              ))}
            </select>
          </label>

          <label className="block min-w-[140px] flex-1 md:max-w-[200px]">
            <span className="mb-1.5 block text-xs font-medium uppercase tracking-wide text-[#5a6c70]">Max price</span>
            <select
              className={selectClass}
              value={filters.maxPriceEur == null ? "" : String(filters.maxPriceEur)}
              onChange={(e) => {
                const v = e.target.value;
                setParams({ maxPrice: v === "" ? null : v });
              }}
              aria-label="Filter by maximum price in euros"
            >
              {MAX_PRICE_OPTIONS.map((o) => (
                <option key={o.label} value={o.value == null ? "" : String(o.value)}>
                  {o.label}
                </option>
              ))}
            </select>
          </label>

          <button
            type="button"
            onClick={resetFilters}
            className="rounded-2xl border border-[rgba(36,99,116,0.2)] bg-white px-4 py-2.5 text-sm font-semibold text-[#246374] transition-colors hover:bg-[#e8f4f7] md:ml-auto"
          >
            Reset filters
          </button>
        </div>

        <p className="mb-6 text-sm text-[#4a5c60]">
          Showing <strong className="font-semibold text-[#1a2e33]">{filtered.length}</strong> of {retreatCatalog.length}{" "}
          retreats
        </p>

        {filtered.length === 0 ? (
          <div className="rounded-3xl border border-[rgba(36,99,116,0.1)] bg-white px-6 py-12 text-center shadow-sm">
            <p className="mb-4 text-lg text-[#1a2e33]">No retreats match these filters.</p>
            <p className="mb-6 text-sm text-[#4a5c60]">
              Try widening the price range, switching region, or choosing &ldquo;All types&rdquo;.
            </p>
            <button
              type="button"
              onClick={resetFilters}
              className="rounded-full border border-[rgba(36,99,116,0.2)] bg-white px-6 py-2.5 text-sm font-semibold text-[#246374] transition-colors hover:bg-[#e8f4f7]"
            >
              Clear filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {filtered.map((p) => (
              <article
                key={p.id}
                className="flex h-full flex-col overflow-hidden rounded-3xl border border-[rgba(36,99,116,0.1)] bg-white shadow-[0_16px_48px_-22px_rgba(36,99,116,0.12)]"
              >
                <div className="relative aspect-[16/10] w-full shrink-0 bg-[#e8f4f7]">
                  <Image
                    src={p.coverImage}
                    alt={p.coverImageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-1 flex-col p-8">
                  {p.badge ? (
                    <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-[#246374]">{p.badge}</p>
                  ) : null}
                  <h3 className="font-rj-headline text-xl font-semibold leading-snug text-[#1a2e33] md:text-2xl">{p.title}</h3>
                  <p className="mt-1 text-sm font-medium text-[#246374]">{p.organizer}</p>
                  <p className="mt-1 text-sm text-[#5a6c70]">{p.location}</p>
                  <ul className="mt-6 flex flex-1 flex-col gap-3 text-sm leading-relaxed text-[#4a5c60]">
                    {p.bullets.map((line) => (
                      <li key={line} className="flex gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#fcba36]" aria-hidden />
                        <span>{line}</span>
                      </li>
                    ))}
                  </ul>
                  {p.priceNote ? (
                    <p className="mt-6 border-t border-[rgba(36,99,116,0.08)] pt-4 text-xs leading-relaxed text-[#5a6c70]">
                      {p.priceNote}
                    </p>
                  ) : null}
                  <a
                    href={p.href}
                    target="_blank"
                    rel="noopener noreferrer sponsored"
                    className="mt-6 inline-flex w-full items-center justify-center rounded-full border border-[rgba(36,99,116,0.2)] bg-[#e8f4f7]/80 px-6 py-3.5 text-center text-sm font-semibold text-[#246374] transition-colors hover:border-[rgba(36,99,116,0.35)] hover:bg-[#e8f4f7]"
                  >
                    {p.partner === "bookyogaretreats"
                      ? "View on BookYogaRetreats"
                      : p.partner === "tripaneer"
                        ? "View on Tripaneer"
                        : "View on BookSurfCamps"}
                  </a>
                </div>
              </article>
            ))}
          </div>
        )}

        <p className="mx-auto mt-12 max-w-3xl text-center text-xs leading-relaxed text-[#5a6c70]">
          Abroader may earn a commission when you book through these links. Listings without a &ldquo;from&rdquo; price
          still appear when you set a max price. Always confirm current pricing on BookSurfCamps, BookYogaRetreats, or
          Tripaneer before you pay.
        </p>
      </div>
    </section>
  );
}

/** Static shell for Suspense while `useSearchParams` hydrates. */
export function RetreatsCatalogSectionFallback() {
  return (
    <section id="browse-retreats" className={sectionBg}>
      <div className="mx-auto max-w-[1200px] animate-pulse">
        <div className="mb-10 h-32 rounded-[1.75rem] bg-white/95 shadow-sm sm:h-36" />
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="h-96 rounded-3xl bg-white/80" />
          <div className="h-96 rounded-3xl bg-white/80" />
        </div>
      </div>
    </section>
  );
}
