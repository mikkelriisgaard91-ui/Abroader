"use client";

import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import type { BrowseJobDto } from "@/lib/remote-jobs/browse-data";
import { filterJobsByAnswers } from "@/lib/remote-jobs/ai-job-search-questionnaire";
import { decodeSegmentToAnswers } from "@/lib/remote-jobs/ai-search-criteria";
import type { FeaturedJobWithBrowseId } from "@/lib/remote-jobs/teamtailor-featured";

const RECRUITER_CONTACT_URL =
  "https://abroader-1746694588.teamtailor.com/jobs/7441089-speak-with-a-recruiter-about-your-next-job-abroad";

const RECRUITER_TITLE = "Speak with an international recruiter";
const RECRUITER_SUB =
  "Book a short call about your next remote role abroad — personalized guidance from our team.";

const glassPanel =
  "rounded-xl border border-rj-secondary/15 bg-rj-elevated/45 backdrop-blur-[12px]";

type DisplayItem =
  | { kind: "job"; job: BrowseJobDto }
  | { kind: "teamtailorFeatured"; featured: FeaturedJobWithBrowseId }
  | { kind: "fallbackRecruiter" };

/** Teamtailor featured slot: #3 when ≥2 board matches; #2 when one match; #1 when none. API provides fully-remote Teamtailor jobs. */
function buildDisplayList(
  matched: BrowseJobDto[],
  teamtailorFeatured: FeaturedJobWithBrowseId | null
): DisplayItem[] {
  const slot: DisplayItem = teamtailorFeatured
    ? { kind: "teamtailorFeatured", featured: teamtailorFeatured }
    : { kind: "fallbackRecruiter" };
  if (matched.length === 0) return [slot];
  if (matched.length < 2) {
    return [...matched.map((job) => ({ kind: "job" as const, job })), slot];
  }
  return [
    { kind: "job", job: matched[0] },
    { kind: "job", job: matched[1] },
    slot,
    ...matched.slice(2).map((job) => ({ kind: "job" as const, job })),
  ];
}

type BrowseApiResponse = {
  jobs: BrowseJobDto[];
  error?: string | null;
};

type FeaturedApiResponse =
  | { ok: true; jobs: FeaturedJobWithBrowseId[]; error: null }
  | { ok: false; error: string; jobs: unknown[] };

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

export default function AiSearchMatchesPage() {
  const params = useParams();
  const router = useRouter();
  const criteriaParam = params?.criteria;
  const criteria = typeof criteriaParam === "string" ? criteriaParam : "";

  const answers = useMemo(() => decodeSegmentToAnswers(criteria), [criteria]);

  const [jobs, setJobs] = useState<BrowseJobDto[]>([]);
  const [teamtailorFeatured, setTeamtailorFeatured] = useState<FeaturedJobWithBrowseId | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!answers) {
      setLoading(false);
      return;
    }

    let cancelled = false;
    (async () => {
      setLoading(true);
      setError(null);
      setTeamtailorFeatured(null);

      let featuredSlot: FeaturedJobWithBrowseId | null = null;
      try {
        const fr = await fetch("/api/remote-jobs/featured", { cache: "no-store" });
        const fj = (await fr.json()) as FeaturedApiResponse;
        if (fj.ok && Array.isArray(fj.jobs) && fj.jobs.length > 0) {
          featuredSlot = fj.jobs[0];
        }
      } catch {
        /* optional slot — browse still loads */
      }

      try {
        const browseRes = await fetch("/api/remote-jobs/browse-with-featured", { cache: "no-store" });
        if (!browseRes.ok) {
          throw new Error(`Could not load listings (${browseRes.status}).`);
        }
        const data = (await browseRes.json()) as BrowseApiResponse;
        if (data.error && (!data.jobs || data.jobs.length === 0)) {
          throw new Error(data.error);
        }
        if (cancelled) return;
        const list = Array.isArray(data.jobs) ? data.jobs : [];
        setJobs(filterJobsByAnswers(list, answers));
        setTeamtailorFeatured(featuredSlot);
      } catch (e) {
        if (!cancelled) {
          setJobs([]);
          setError(e instanceof Error ? e.message : "Something went wrong loading remote listings.");
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [answers]);

  if (!criteria || !answers) {
    return (
      <main className="relative min-h-[100dvh] w-full overflow-x-hidden bg-rj-bg px-6 py-16">
        <div className="mx-auto max-w-xl text-center">
          <h1 className="font-rj-headline mb-4 text-2xl font-bold text-rj-fg">Invalid search</h1>
          <p className="mb-8 text-rj-muted">We couldn&apos;t read your preferences. Start the questionnaire again.</p>
          <Link
            href="/remote-jobs/ai-search"
            className="inline-flex rounded-xl bg-rj-primary px-6 py-3 font-bold text-rj-on-primary"
          >
            Start over
          </Link>
        </div>
      </main>
    );
  }

  const matched = jobs;
  const displayItems = useMemo(
    () => buildDisplayList(matched, teamtailorFeatured),
    [matched, teamtailorFeatured]
  );

  return (
    <main className="relative min-h-[100dvh] w-full overflow-x-hidden bg-rj-bg px-6 py-12 md:py-16">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-64 bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(126,200,212,0.08),transparent_55%)]"
        aria-hidden
      />
      <div className="relative z-[1] mx-auto max-w-4xl">
        <div className="mb-8 flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="font-rj-accent text-sm text-rj-secondary">Your matches</p>
            <h1 className="font-rj-headline text-3xl font-bold text-rj-fg md:text-4xl">Remote roles for you</h1>
          </div>
          <div className="flex w-full flex-col gap-3 sm:w-auto sm:min-w-[220px] sm:items-end">
            <button
              type="button"
              onClick={() => router.push("/remote-jobs/ai-search")}
              className="inline-flex w-full items-center justify-center rounded-xl bg-rj-primary px-5 py-3.5 text-base font-bold text-rj-on-primary shadow-lg shadow-rj-primary/15 transition hover:brightness-105 active:scale-[0.99]"
            >
              Retake questionnaire
            </button>
            <Link
              href="/remote-jobs"
              className="text-center text-sm font-semibold text-rj-secondary underline-offset-4 hover:underline sm:text-right"
            >
              Browse all jobs
            </Link>
          </div>
        </div>

        {loading ? (
          <div className="space-y-4" aria-busy="true" aria-label="Loading jobs">
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
        ) : error ? (
          <div className={`${glassPanel} p-8 text-center`} role="alert">
            <p className="leading-relaxed text-rj-fg">
              {error} Please try again later, or{" "}
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
        ) : (
          <>
            <p className="mb-4 text-sm text-rj-muted">
              {matched.length === 0
                ? "No listings matched every filter — an international recruiter can still help you find a fit."
                : `${matched.length} remote job${matched.length === 1 ? "" : "s"} matched your answers`}
            </p>
            <div className="min-w-0 space-y-4">
              {displayItems.map((item) =>
                item.kind === "teamtailorFeatured" ? (
                  <Link
                    key={`tt-featured-${item.featured.browseId}`}
                    href={`/remote-jobs/job/${item.featured.browseId}?source=${encodeURIComponent("Teamtailor")}`}
                    className={`group flex flex-col gap-4 overflow-hidden rounded-xl border border-rj-primary/30 bg-gradient-to-br from-rj-primary/10 to-rj-elevated/40 p-0 text-left no-underline ring-1 ring-rj-primary/20 transition-colors hover:border-rj-primary/45 hover:from-rj-primary/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rj-primary/50 md:flex-row md:items-stretch md:gap-0 ${glassPanel}`}
                  >
                    <div className="relative aspect-[16/10] w-full shrink-0 overflow-hidden bg-rj-elevated md:aspect-auto md:h-auto md:w-44 md:min-w-[11rem]">
                      {item.featured.pictureUrl ? (
                        // eslint-disable-next-line @next/next/no-img-element -- external Teamtailor URLs
                        <img
                          src={item.featured.pictureUrl}
                          alt=""
                          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                        />
                      ) : (
                        <div className="flex h-full min-h-[120px] items-center justify-center bg-gradient-to-br from-rj-elevated to-rj-surface-high text-3xl text-rj-secondary/50">
                          🌍
                        </div>
                      )}
                    </div>
                    <div className="flex min-w-0 flex-1 flex-col justify-center gap-2 p-6 md:pl-2">
                      <span className="inline-block w-fit rounded-full border border-rj-primary/35 bg-rj-primary/15 px-2.5 py-0.5 text-xs font-bold uppercase tracking-wide text-rj-primary">
                        Teamtailor · Featured remote
                      </span>
                      <h2 className="font-rj-headline text-xl font-bold text-rj-fg">{item.featured.title}</h2>
                      <p className="text-sm text-rj-muted">
                        Abroader · 📍 {item.featured.locationLabel}
                      </p>
                      <div className="flex flex-wrap gap-2 pt-1">
                        <span className="rounded border border-rj-secondary/15 bg-rj-secondary/10 px-2 py-0.5 text-xs text-rj-secondary">
                          {item.featured.employmentTypeLabel}
                        </span>
                      </div>
                      <span className="inline-flex items-center gap-1 pt-1 font-bold text-rj-primary transition-transform group-hover:translate-x-0.5">
                        View job
                        <span aria-hidden>→</span>
                      </span>
                    </div>
                  </Link>
                ) : item.kind === "fallbackRecruiter" ? (
                  <a
                    key="abroader-international-recruiter-fallback"
                    href={RECRUITER_CONTACT_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group flex flex-col gap-4 rounded-xl border border-rj-primary/30 bg-gradient-to-br from-rj-primary/10 to-rj-elevated/40 p-6 text-left no-underline ring-1 ring-rj-primary/20 transition-colors hover:border-rj-primary/45 hover:from-rj-primary/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rj-primary/50 md:flex-row md:items-center md:gap-6 ${glassPanel}`}
                  >
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-rj-primary/20 text-2xl ring-1 ring-rj-primary/25">
                      🌍
                    </div>
                    <div className="min-w-0 flex-1">
                      <span className="mb-1 inline-block rounded-full border border-rj-primary/35 bg-rj-primary/15 px-2.5 py-0.5 text-xs font-bold uppercase tracking-wide text-rj-primary">
                        Abroader · International recruiter
                      </span>
                      <h2 className="font-rj-headline mt-2 text-xl font-bold text-rj-fg">{RECRUITER_TITLE}</h2>
                      <p className="mt-1 text-sm text-rj-muted">{RECRUITER_SUB}</p>
                    </div>
                    <div className="flex flex-col gap-2 md:items-end">
                      <span className="inline-flex items-center gap-1 font-bold text-rj-primary transition-transform group-hover:translate-x-0.5">
                        Book a call
                        <span aria-hidden>→</span>
                      </span>
                    </div>
                  </a>
                ) : (
                  <Link
                    key={item.job.id}
                    href={`/remote-jobs/job/${item.job.id}?source=${encodeURIComponent(item.job.source ?? "")}`}
                    className={`group flex flex-col gap-4 rounded-xl p-6 text-left no-underline transition-colors hover:bg-rj-surface-high/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rj-primary/40 md:flex-row md:items-center md:gap-6 ${glassPanel}`}
                  >
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-rj-elevated text-2xl ring-1 ring-white/10">
                      {jobRowEmoji(item.job.title)}
                    </div>
                    <div className="min-w-0 flex-1">
                      <h2 className="font-rj-headline text-xl font-bold text-rj-fg">{item.job.title}</h2>
                      <p className="text-sm text-rj-muted">
                        {item.job.companyName} · 📍{" "}
                        {(item.job.locationRestrictions ?? []).join(", ") || "Location flexible"}
                      </p>
                    </div>
                    <div className="flex flex-col gap-2 md:items-end">
                      {item.job.salary ? (
                        <span className="whitespace-nowrap font-bold text-rj-fg">{item.job.salary}</span>
                      ) : (
                        <span className="text-sm text-rj-muted">Compensation varies</span>
                      )}
                      <div className="flex flex-wrap gap-2">
                        {item.job.source ? (
                          <span className="rounded border border-rj-secondary/15 bg-rj-secondary/10 px-2 py-0.5 text-xs text-rj-secondary">
                            {item.job.source}
                          </span>
                        ) : null}
                        <span className="rounded border border-rj-secondary/15 bg-rj-secondary/10 px-2 py-0.5 text-xs text-rj-secondary">
                          {item.job.employmentType}
                        </span>
                      </div>
                      <span className="inline-flex items-center gap-1 font-bold text-rj-primary transition-transform group-hover:translate-x-0.5">
                        View job
                        <span aria-hidden>→</span>
                      </span>
                    </div>
                  </Link>
                )
              )}
            </div>
            {matched.length === 0 ? (
              <div className="mt-8 rounded-xl border border-white/10 bg-rj-elevated/30 p-6 text-center md:p-8">
                <p className="mb-4 text-rj-fg">
                  Adjust your answers to see more board listings — or use the button above to start over.
                </p>
                <button
                  type="button"
                  onClick={() => router.push("/remote-jobs/ai-search")}
                  className="inline-flex w-full max-w-md items-center justify-center rounded-xl border-2 border-rj-primary/50 bg-transparent px-6 py-3.5 text-base font-bold text-rj-primary transition hover:bg-rj-primary/10"
                >
                  Retake questionnaire
                </button>
              </div>
            ) : null}
          </>
        )}
      </div>
    </main>
  );
}
