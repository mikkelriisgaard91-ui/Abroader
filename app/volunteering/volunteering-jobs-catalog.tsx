"use client";

import { useMemo } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { FeaturedJobCard } from "@/components/FeaturedJobCard";
import { VolunteerOpportunityCard } from "@/components/VolunteerOpportunityCard";
import type { TeamtailorFeaturedResult } from "@/lib/remote-jobs/teamtailor-featured";
import type { LocationRegionFilter } from "@/lib/remote-jobs/job-filters";
import { featuredJobMatchesLocationRegion } from "@/lib/volunteering/volunteer-filters";
import { STATIC_VOLUNTEER_LISTINGS, staticListingToFilterProbe } from "@/lib/volunteering/static-volunteer-listings";
import { parseVolunteerLocationParam } from "@/lib/volunteering/volunteer-url-params";

const filterSelectLight =
  "w-full rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-800 shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-400/40";

const TOKEN_MISSING = "TEAMTAILOR_API_TOKEN is not configured.";

export function VolunteeringJobsCatalog({
  result,
  recruiterPrimaryCtaClass,
  recruiterContactUrl,
  cardVariant = "default",
}: {
  result: TeamtailorFeaturedResult;
  recruiterPrimaryCtaClass: string;
  recruiterContactUrl: string;
  /** Matches Brook Hills / light volunteering page styling when set to `light`. */
  cardVariant?: "default" | "light";
}) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const locationFilter = parseVolunteerLocationParam(searchParams.get("location") ?? undefined);

  const filteredStatic = useMemo(() => {
    return STATIC_VOLUNTEER_LISTINGS.filter((listing) => {
      const probe = staticListingToFilterProbe(listing);
      return featuredJobMatchesLocationRegion(probe, locationFilter);
    });
  }, [locationFilter]);

  const filteredJobs = useMemo(() => {
    if (!result.ok) return [];
    return result.jobs.filter((job) => featuredJobMatchesLocationRegion(job, locationFilter));
  }, [result, locationFilter]);

  const teamtailorTotal = result.ok ? result.jobs.length : 0;
  const catalogueTotal = STATIC_VOLUNTEER_LISTINGS.length + teamtailorTotal;
  const totalFiltered = filteredStatic.length + filteredJobs.length;

  function setLocationFilter(next: LocationRegionFilter) {
    const p = new URLSearchParams(searchParams.toString());
    p.delete("kind");
    if (next === "all") p.delete("location");
    else p.set("location", next);
    const qs = p.toString();
    router.replace(qs ? `/volunteering?${qs}` : "/volunteering", { scroll: false });
  }

  const hasActiveFilters = locationFilter !== "all";

  const tokenMissing = !result.ok && result.error === TOKEN_MISSING;

  return (
    <section
      id="volunteer-jobs"
      className="scroll-mt-20 border-b border-slate-100 bg-white px-6 py-20 md:px-12 lg:px-20"
    >
      <div className="mx-auto max-w-[1400px]">
        <div className="mb-10 max-w-3xl">
          <h2 className="font-rj-headline mb-3 text-4xl font-extrabold text-slate-900">Volunteer opportunities</h2>
          <p className="text-lg text-slate-600">
            Featured placements and live roles from our volunteering department. Filter by region to narrow the list.
          </p>
        </div>

        {tokenMissing ? (
          <p className="mb-8 rounded-xl border border-amber-200/80 bg-amber-50/80 px-4 py-3 text-sm text-slate-700">
            Configure <code className="rounded border border-slate-200 bg-white px-1.5 py-0.5 text-xs text-slate-800">TEAMTAILOR_API_TOKEN</code>{" "}
            to load additional listings from Teamtailor. Curated roles below are always shown.
          </p>
        ) : null}

        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-end sm:justify-between">
          <div className="w-full max-w-md">
            <div>
              <label
                htmlFor="vol-filter-location"
                className="mb-2 block text-xs font-bold uppercase tracking-wider text-slate-500"
              >
                Location
              </label>
              <select
                id="vol-filter-location"
                className={filterSelectLight}
                value={locationFilter}
                onChange={(e) => setLocationFilter(e.target.value as LocationRegionFilter)}
                aria-label="Filter by location region"
              >
                <option value="all">All regions</option>
                <option value="worldwide">Worldwide / remote</option>
                <option value="americas">Americas</option>
                <option value="europe">Europe</option>
                <option value="asia-pacific">Asia Pacific</option>
                <option value="africa">Africa</option>
                <option value="middle-east">Middle East</option>
              </select>
            </div>
          </div>
          {hasActiveFilters ? (
            <button
              type="button"
              className="shrink-0 rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-600 shadow-sm transition-colors hover:border-slate-400 hover:text-slate-900"
              onClick={() => router.replace("/volunteering", { scroll: false })}
            >
              Clear filters
            </button>
          ) : null}
        </div>

        {totalFiltered === 0 ? (
          <p className="rounded-2xl border border-slate-200 bg-slate-50/80 px-6 py-10 text-center text-slate-600">
            No roles match your filters. Try a broader region, or clear filters to see everything.
          </p>
        ) : (
          <>
            <p className="mb-6 text-sm text-slate-500" aria-live="polite">
              Showing {totalFiltered} of {catalogueTotal} {catalogueTotal === 1 ? "role" : "roles"}
            </p>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {filteredStatic.map((listing) => (
                <VolunteerOpportunityCard key={listing.id} listing={listing} variant={cardVariant} />
              ))}
              {filteredJobs.map((job) => (
                <FeaturedJobCard key={job.id} job={job} variant={cardVariant} />
              ))}
            </div>
            <div className="mt-12 flex justify-center">
              <a
                href={recruiterContactUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={recruiterPrimaryCtaClass}
              >
                Speak to a Recruiter
              </a>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
