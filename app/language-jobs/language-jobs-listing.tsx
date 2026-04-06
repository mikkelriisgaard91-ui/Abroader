"use client";

import { useEffect, useMemo, useState } from "react";
import type { LanguageJobTabId, LanguageJobsUiTabId } from "@/lib/remote-jobs/language-job-tabs";
import {
  LANGUAGE_JOB_TAB_LABELS,
  LANGUAGE_JOB_TAB_ORDER,
  LANGUAGE_JOBS_UI_TAB_LABELS,
  LANGUAGE_JOBS_UI_TAB_ORDER,
} from "@/lib/remote-jobs/language-job-tabs";
import type { FeaturedJobDto, TeamtailorFeaturedResult } from "@/lib/remote-jobs/teamtailor-featured";
import { RECRUITER_CONTACT_URL } from "./content";

const glassCard =
  "rounded-2xl border border-white/10 bg-rj-elevated/45 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.25)]";

function LanguageJobCard({ job }: { job: FeaturedJobDto }) {
  return (
    <article
      className={`${glassCard} group relative flex flex-col overflow-hidden transition-all hover:border-rj-secondary/25 hover:shadow-[0_12px_40px_rgba(0,0,0,0.35)]`}
    >
      <div className="relative h-48 w-full shrink-0 overflow-hidden bg-gradient-to-br from-rj-elevated to-rj-surface-high">
        {job.pictureUrl ? (
          // eslint-disable-next-line @next/next/no-img-element -- Teamtailor careersite URLs
          <img
            src={job.pictureUrl}
            alt=""
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03] motion-reduce:group-hover:scale-100"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-4xl text-rj-secondary/50">✦</div>
        )}
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[rgba(0,22,29,0.72)] via-transparent to-transparent opacity-90"
          aria-hidden
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-rj-headline mb-2 text-lg font-bold leading-snug text-rj-fg md:text-xl">{job.title}</h3>
        <p className="mb-3 text-sm text-rj-muted">📍 {job.locationLabel}</p>
        <span className="mb-4 inline-flex w-fit rounded-full border border-rj-secondary/20 bg-rj-secondary/10 px-3 py-1 text-xs text-rj-secondary">
          {job.employmentTypeLabel}
        </span>
        <div className="mt-auto">
          <a
            href={job.applyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sm font-bold text-rj-primary transition-transform group-hover:translate-x-0.5"
          >
            Apply now
            <span aria-hidden className="inline-block transition-transform group-hover:translate-x-0.5">
              →
            </span>
          </a>
        </div>
      </div>
    </article>
  );
}

const filterBtnBase =
  "rounded-full border px-4 py-2 text-sm font-semibold transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rj-secondary sm:px-5 sm:py-2.5 sm:text-base";

function mergeAllLanguageDepartmentJobs(
  languageResults: Record<LanguageJobTabId, TeamtailorFeaturedResult>
): TeamtailorFeaturedResult {
  const seen = new Set<string>();
  const jobs: FeaturedJobDto[] = [];
  for (const tab of LANGUAGE_JOB_TAB_ORDER) {
    const r = languageResults[tab];
    if (r.ok) {
      for (const j of r.jobs) {
        if (!seen.has(j.id)) {
          seen.add(j.id);
          jobs.push(j);
        }
      }
    }
  }
  const anyOk = LANGUAGE_JOB_TAB_ORDER.some((t) => languageResults[t].ok);
  if (anyOk) {
    return { ok: true, jobs, error: null };
  }
  const firstErr = LANGUAGE_JOB_TAB_ORDER.map((t) => languageResults[t]).find((r) => !r.ok);
  return { ok: false, jobs: [], error: firstErr?.error ?? "Unknown error" };
}

function renderPanel(
  tab: LanguageJobsUiTabId,
  result: TeamtailorFeaturedResult,
  label: string,
  recruiterPrimaryCtaClass: string
) {
  if (result.ok && result.jobs.length > 0) {
    return (
      <>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {result.jobs.map((job) => (
            <LanguageJobCard key={job.id} job={job} />
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
      </>
    );
  }

  if (result.ok) {
    const emptyCopy =
      tab === "all"
        ? "No open roles across our language departments in Teamtailor right now. Check back soon or speak to a recruiter about upcoming positions."
        : `No open ${label} speaking roles in Teamtailor right now. Check back soon or speak to a recruiter about upcoming positions.`;
    return (
      <p className="rounded-2xl border border-white/10 bg-rj-surface-high/40 px-6 py-10 text-center text-rj-muted backdrop-blur-sm">
        {emptyCopy}
      </p>
    );
  }

  return (
    <p className="text-sm text-rj-muted" role="status">
      {result.error}
    </p>
  );
}

export function LanguageJobsListingSection({
  languageResults,
  recruiterPrimaryCtaClass,
  initialTab = "all",
}: {
  languageResults: Record<LanguageJobTabId, TeamtailorFeaturedResult>;
  recruiterPrimaryCtaClass: string;
  initialTab?: LanguageJobsUiTabId;
}) {
  const [lang, setLang] = useState<LanguageJobsUiTabId>(initialTab);

  useEffect(() => {
    setLang(initialTab);
  }, [initialTab]);

  const activeClass = "border-rj-primary bg-rj-primary/15 text-rj-fg shadow-[0_4px_20px_rgba(253,187,55,0.12)]";
  const idleClass =
    "border-white/15 bg-rj-surface-high/40 text-rj-muted hover:border-rj-secondary/35 hover:text-rj-fg";

  const result = useMemo(() => {
    if (lang === "all") {
      return mergeAllLanguageDepartmentJobs(languageResults);
    }
    return languageResults[lang];
  }, [lang, languageResults]);

  const label = lang === "all" ? "All Jobs" : LANGUAGE_JOB_TAB_LABELS[lang];

  return (
    <section
      id="language-jobs"
      className="scroll-mt-20 border-b border-white/[0.06] bg-gradient-to-b from-rj-bg to-rj-band/40 px-6 py-20 md:px-12 lg:px-20"
    >
      <div className="mx-auto max-w-[1400px]">
        <div className="mb-10 max-w-3xl">
          <h2 className="font-rj-headline mb-3 text-4xl font-extrabold text-rj-fg">All Language Jobs</h2>
          <p className="text-lg text-rj-muted">
            Each language matches a Teamtailor department (e.g. &quot;Danish Speaking Jobs&quot;). Pick a tab to see
            live openings.
          </p>
        </div>

        <div className="mb-10 flex flex-wrap gap-2 sm:gap-3" role="tablist" aria-label="Filter jobs by language">
          {LANGUAGE_JOBS_UI_TAB_ORDER.map((tabId) => (
            <button
              key={tabId}
              type="button"
              role="tab"
              aria-selected={lang === tabId}
              aria-controls="language-jobs-panel"
              id={`tab-${tabId}`}
              className={`${filterBtnBase} ${lang === tabId ? activeClass : idleClass}`}
              onClick={() => setLang(tabId)}
            >
              {LANGUAGE_JOBS_UI_TAB_LABELS[tabId]}
            </button>
          ))}
        </div>

        <div id="language-jobs-panel" role="tabpanel" aria-labelledby={`tab-${lang}`}>
          {renderPanel(lang, result, label, recruiterPrimaryCtaClass)}
        </div>
      </div>
    </section>
  );
}
