"use client";

import { useMemo, useState } from "react";
import type { TeamtailorJob } from "@/lib/teamtailor";import { LocaleProvider } from "@/lib/i18n/LocaleProvider";
import JobCard from "@/components/JobCard";

const ALL_FILTER = "__all__";
const REMOTE_FILTER = "remote";
const ONSITE_FILTER = "onsite";

type WorkArrangementFilter = typeof ALL_FILTER | typeof REMOTE_FILTER | typeof ONSITE_FILTER;

function matchesWorkArrangement(job: TeamtailorJob, filter: WorkArrangementFilter): boolean {
  if (filter === ALL_FILTER) return true;
  if (filter === REMOTE_FILTER) return job.workMode === "remote" || job.workMode === "hybrid";
  return job.workMode === "onsite" || job.workMode === "hybrid";
}

function FilterRow({
  label,
  options,
  active,
  onChange,
}: {
  label: string;
  options: { value: string; label: string }[];
  active: string;
  onChange: (value: string) => void;
}) {
  return (
    <div className="flex flex-wrap gap-2">
      <span className="text-xs font-semibold uppercase tracking-widest text-ink-subtle self-center mr-2">
        {label}
      </span>
      {options.map((option) => (
        <button
          key={option.value}
          type="button"
          onClick={() => onChange(option.value)}
          className={`filter-tab ${active === option.value ? "filter-tab-active" : ""}`}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}

function EmptyFilterState() {
  return (
    <div className="col-span-full flex flex-col items-center justify-center py-20 text-center">
      <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-4 bg-accent/10">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden>
          <circle cx="11" cy="11" r="7" stroke="#7ec8d4" strokeWidth="1.5" />
          <path d="M16.5 16.5L21 21" stroke="#7ec8d4" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </div>
      <p className="font-semibold text-lg text-ink">No roles match your filters</p>
      <p className="text-sm mt-2 max-w-sm text-ink-subtle">
        Try a different category or work arrangement, or get in touch with a recruiter below.
      </p>
      <a href="#get-in-touch-with-recruiter" className="btn-primary mt-6 text-sm px-6 py-3">
        Get in touch with a recruiter
      </a>
    </div>
  );
}

function AvailableJobsContent({ jobs }: { jobs: TeamtailorJob[] }) {
  const [activeWorkArrangement, setActiveWorkArrangement] = useState<WorkArrangementFilter>(
    ALL_FILTER
  );
  const [activeCategory, setActiveCategory] = useState(ALL_FILTER);

  const categories = useMemo(
    () => [ALL_FILTER, ...Array.from(new Set(jobs.map((j) => j.category))).sort()],
    [jobs]
  );

  const workArrangementOptions = [
    { value: ALL_FILTER, label: "All" },
    { value: REMOTE_FILTER, label: "Remote" },
    { value: ONSITE_FILTER, label: "Onsite" },
  ];

  const categoryOptions = categories.map((cat) => ({
    value: cat,
    label: cat === ALL_FILTER ? "All" : cat,
  }));

  const filtered = useMemo(() => {
    return jobs.filter((job) => {
      const workMatch = matchesWorkArrangement(job, activeWorkArrangement);
      const categoryMatch = activeCategory === ALL_FILTER || job.category === activeCategory;
      return workMatch && categoryMatch;
    });
  }, [jobs, activeWorkArrangement, activeCategory]);

  return (
    <section id="available-jobs" className="pt-24 pb-16 bg-base scroll-mt-[72px]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-8 space-y-4">
          <p className="text-sm font-medium text-ink-muted">
            Available jobs
            {jobs.length > 0 && (
              <span className="text-ink-subtle"> · {jobs.length} open roles</span>
            )}
          </p>

          {jobs.length > 0 && (
            <>
              <FilterRow
                label="Work arrangement"
                options={workArrangementOptions}
                active={activeWorkArrangement}
                onChange={(value) => setActiveWorkArrangement(value as WorkArrangementFilter)}
              />
              {categories.length > 1 && (
                <FilterRow
                  label="Category"
                  options={categoryOptions}
                  active={activeCategory}
                  onChange={setActiveCategory}
                />
              )}
            </>
          )}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.length === 0 ? (
            <EmptyFilterState />
          ) : (
            filtered.map((job, i) => <JobCard key={job.id} job={job} index={i} />)
          )}
        </div>
      </div>
    </section>
  );
}

export default function AvailableJobs({ jobs }: { jobs: TeamtailorJob[] }) {
  return (
    <LocaleProvider>
      <AvailableJobsContent jobs={jobs} />
    </LocaleProvider>
  );
}
