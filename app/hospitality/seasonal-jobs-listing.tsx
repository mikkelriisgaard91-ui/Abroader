"use client";

import { FeaturedJobCard } from "@/components/FeaturedJobCard";
import type { TeamtailorFeaturedResult } from "@/lib/remote-jobs/teamtailor-featured";
import { RECRUITER_CONTACT_URL } from "./content";

export function SeasonalJobsListingSection({
  result,
  recruiterPrimaryCtaClass,
}: {
  result: TeamtailorFeaturedResult;
  recruiterPrimaryCtaClass: string;
}) {
  if (result.ok && result.jobs.length > 0) {
    return (
      <section
        id="seasonal-jobs"
        className="scroll-mt-20 border-b border-white/[0.06] bg-gradient-to-b from-rj-bg to-rj-band/40 px-6 py-20 md:px-12 lg:px-20"
      >
        <div className="mx-auto max-w-[1400px]">
          <div className="mb-10 max-w-3xl">
            <h2 className="font-rj-headline mb-3 text-4xl font-extrabold text-rj-fg">Open seasonal roles</h2>
            <p className="text-lg text-rj-muted">
              Live listings from our Teamtailor seasonal department. Apply directly or speak to a recruiter for a
              tailored match.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {result.jobs.map((job) => (
              <FeaturedJobCard key={job.id} job={job} />
            ))}
          </div>
          <div className="mt-12 flex justify-center">
            <a
              href={RECRUITER_CONTACT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={recruiterPrimaryCtaClass}
            >
              Speak to a Recruiter
            </a>
          </div>
        </div>
      </section>
    );
  }

  if (result.ok) {
    return (
      <section
        id="seasonal-jobs"
        className="scroll-mt-20 border-b border-white/[0.06] bg-gradient-to-b from-rj-bg to-rj-band/40 px-6 py-20 md:px-12 lg:px-20"
      >
        <div className="mx-auto max-w-[1400px]">
          <div className="mb-10 max-w-3xl">
            <h2 className="font-rj-headline mb-3 text-4xl font-extrabold text-rj-fg">Open seasonal roles</h2>
          </div>
          <p className="rounded-2xl border border-white/10 bg-rj-surface-high/40 px-6 py-10 text-center text-rj-muted backdrop-blur-sm">
            No open seasonal roles in Teamtailor right now. Check back soon or speak to a recruiter about upcoming
            positions.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section
      id="seasonal-jobs"
      className="scroll-mt-20 border-b border-white/[0.06] bg-gradient-to-b from-rj-bg to-rj-band/40 px-6 py-20 md:px-12 lg:px-20"
    >
      <div className="mx-auto max-w-[1400px]">
        <div className="mb-10 max-w-3xl">
          <h2 className="font-rj-headline mb-3 text-4xl font-extrabold text-rj-fg">Open seasonal roles</h2>
        </div>
        <p className="text-sm text-rj-muted" role="status">
          {result.error}
        </p>
      </div>
    </section>
  );
}
