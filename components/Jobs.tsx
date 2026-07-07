"use client";

import { useState, useMemo, useEffect } from "react";
import { motion } from "framer-motion";
import type { TeamtailorJob } from "@/lib/teamtailor";
import { useLocale } from "@/lib/i18n/LocaleProvider";
import JobCard from "@/components/JobCard";

const JOBS_POLL_INTERVAL_MS = Number(process.env.NEXT_PUBLIC_JOBS_POLL_INTERVAL_MS ?? 60_000);
const ALL_FILTER = "__all__";

type JobsApiResponse =
  | { ok: true; jobs: TeamtailorJob[] }
  | { ok: false; error: string; jobs: TeamtailorJob[] };

function EmptyState() {
  const { t } = useLocale();

  return (
    <div className="col-span-full flex flex-col items-center justify-center py-20 text-center">
      <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-4 bg-accent/10">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden>
          <circle cx="11" cy="11" r="7" stroke="#7ec8d4" strokeWidth="1.5" />
          <path d="M16.5 16.5L21 21" stroke="#7ec8d4" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </div>
      <p className="font-semibold text-lg text-ink">{t.jobs.emptyTitle}</p>
      <p className="text-sm mt-2 max-w-sm text-ink-subtle">{t.jobs.emptyBody}</p>
      <a href="#contact" className="btn-primary mt-6 text-sm px-6 py-3">
        {t.jobs.getInTouch}
      </a>
    </div>
  );
}

export default function Jobs({
  jobs: initialJobs,
  recruiterSlug,
}: {
  jobs: TeamtailorJob[];
  recruiterSlug: string;
}) {
  const { t } = useLocale();
  const [remoteJobs, setRemoteJobs] = useState<TeamtailorJob[] | null>(null);
  const jobs = remoteJobs ?? initialJobs;

  useEffect(() => {
    if (JOBS_POLL_INTERVAL_MS <= 0) return;

    let cancelled = false;

    async function refreshJobs() {
      try {
        const res = await fetch(`/api/jobs?slug=${encodeURIComponent(recruiterSlug)}`, {
          cache: "no-store",
        });
        if (!res.ok || cancelled) return;

        const data = (await res.json()) as JobsApiResponse;
        if (data.ok && !cancelled) {
          setRemoteJobs(data.jobs);
        }
      } catch {
        // Keep showing the last successful list if a poll fails.
      }
    }

    const intervalId = window.setInterval(refreshJobs, JOBS_POLL_INTERVAL_MS);
    return () => {
      cancelled = true;
      window.clearInterval(intervalId);
    };
  }, [recruiterSlug]);

  const allLabel = t.jobs.all;

  const categories = useMemo(
    () => [ALL_FILTER, ...Array.from(new Set(jobs.map((j) => j.category)))],
    [jobs]
  );
  const locations = useMemo(
    () => [ALL_FILTER, ...Array.from(new Set(jobs.map((j) => j.location)))],
    [jobs]
  );

  const [activeCategory, setActiveCategory] = useState(ALL_FILTER);
  const [activeLocation, setActiveLocation] = useState(ALL_FILTER);

  const filtered = useMemo(() => {
    return jobs.filter((job) => {
      const categoryMatch = activeCategory === ALL_FILTER || job.category === activeCategory;
      const locationMatch = activeLocation === ALL_FILTER || job.location === activeLocation;
      return categoryMatch && locationMatch;
    });
  }, [jobs, activeCategory, activeLocation]);

  return (
    <section id="jobs" className="pt-10 pb-24 lg:pt-12 bg-base scroll-mt-[72px]">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mb-12"
        >
          <h2 className="section-heading mb-3">{t.jobs.heading}</h2>
          <p className="section-subtext">{t.jobs.subtext}</p>
        </motion.div>

        {jobs.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="space-y-4 mb-10"
          >
            {categories.length > 2 && (
              <div className="flex flex-wrap gap-2">
                <span className="text-xs font-semibold uppercase tracking-widest text-ink-subtle self-center mr-2">
                  {t.jobs.category}
                </span>
                {categories.map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setActiveCategory(cat)}
                    className={`filter-tab ${activeCategory === cat ? "filter-tab-active" : ""}`}
                  >
                    {cat === ALL_FILTER ? allLabel : cat}
                  </button>
                ))}
              </div>
            )}

            {locations.length > 2 && (
              <div className="flex flex-wrap gap-2">
                <span className="text-xs font-semibold uppercase tracking-widest text-ink-subtle self-center mr-2">
                  {t.jobs.location}
                </span>
                {locations.map((loc) => (
                  <button
                    key={loc}
                    type="button"
                    onClick={() => setActiveLocation(loc)}
                    className={`filter-tab ${activeLocation === loc ? "filter-tab-active" : ""}`}
                  >
                    {loc === ALL_FILTER ? allLabel : loc}
                  </button>
                ))}
              </div>
            )}
          </motion.div>
        )}

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.length === 0 ? (
            <EmptyState />
          ) : (
            filtered.map((job, i) => <JobCard key={job.id} job={job} index={i} />)
          )}
        </div>
      </div>
    </section>
  );
}
