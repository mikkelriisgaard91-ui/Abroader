"use client";

import { useMemo, useState } from "react";
import { motion, type Transition } from "framer-motion";
import { ArrowUpRight, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { RecruiterConfig } from "@/config/recruiters";
import { getRecruiterForLocale } from "@/config/recruiters";
import {
  ALL_FILTER,
  DEFAULT_RECRUITER_FILTERS,
  filterRecruiters,
  getRecruiterFilterOptions,
  hasActiveRecruiterFilters,
  type RecruiterFilterState,
} from "@/lib/recruiterFilters";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.45, delay, ease: "easeOut" } as Transition,
});

function GrainOverlay() {
  return (
    <svg className="grain-overlay" aria-hidden="true">
      <filter id="home-noise">
        <feTurbulence
          type="fractalNoise"
          baseFrequency="0.65"
          numOctaves={3}
          stitchTiles="stitch"
        />
        <feColorMatrix type="saturate" values="0" />
      </filter>
      <rect width="100%" height="100%" filter="url(#home-noise)" />
    </svg>
  );
}

function FilterRow({
  label,
  value,
  options,
  onChange,
}: {
  label: string;
  value: string;
  options: string[];
  onChange: (value: string) => void;
}) {
  if (options.length === 0) return null;

  return (
    <div className="flex flex-wrap items-center gap-2">
      <span className="text-xs font-medium text-ink-subtle mr-1">{label}</span>
      <button
        type="button"
        onClick={() => onChange(ALL_FILTER)}
        className={`filter-tab ${value === ALL_FILTER ? "filter-tab-active" : ""}`}
      >
        All
      </button>
      {options.map((option) => (
        <button
          key={option}
          type="button"
          onClick={() => onChange(option)}
          className={`filter-tab ${value === option ? "filter-tab-active" : ""}`}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

function RecruiterCard({
  recruiter,
  index,
}: {
  recruiter: RecruiterConfig;
  index: number;
}) {
  const resolved = getRecruiterForLocale(recruiter, "en");

  return (
    <motion.div {...fadeUp(0.12 + index * 0.06)}>
      <Link
        href={`/${recruiter.slug}`}
        className="group flex items-start gap-5 sm:gap-6 p-5 sm:p-6 rounded-2xl border border-border/70 bg-white/70 backdrop-blur-sm transition-all duration-300 hover:bg-white hover:border-border-strong hover:shadow-card"
      >
        <div className="relative w-[72px] h-[88px] sm:w-20 sm:h-24 shrink-0 rounded-xl overflow-hidden bg-about-bg ring-1 ring-border/50">
          <Image
            src={recruiter.photoUrl}
            alt={recruiter.name}
            fill
            className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
            sizes="80px"
          />
        </div>

        <div className="flex-1 min-w-0 pt-0.5">
          <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-accent mb-1.5">
            {resolved.title}
          </p>
          <h2 className="text-lg sm:text-xl font-bold tracking-tight text-ink mb-1.5">
            {resolved.name}
          </h2>
          <p className="flex items-center gap-1 text-xs text-ink-subtle mb-2.5">
            <MapPin className="w-3 h-3 shrink-0" aria-hidden="true" />
            {resolved.location}
          </p>
          <p className="text-sm text-ink-muted leading-relaxed line-clamp-2">
            {resolved.shortBio}
          </p>
        </div>

        <span
          className="shrink-0 mt-1 flex items-center justify-center w-9 h-9 rounded-full border border-border/80 text-ink-subtle transition-all duration-300 group-hover:border-ink group-hover:text-ink group-hover:bg-base"
          aria-hidden="true"
        >
          <ArrowUpRight className="w-4 h-4" />
        </span>
      </Link>
    </motion.div>
  );
}

function EmptyFilterState({ onClear }: { onClear: () => void }) {
  return (
    <div className="col-span-full flex flex-col items-center justify-center py-16 text-center rounded-2xl border border-dashed border-border bg-white/50">
      <p className="font-semibold text-ink mb-2">No recruiters match your filters</p>
      <p className="text-sm text-ink-muted mb-5 max-w-sm">
        Try removing a filter or choosing a different role or language.
      </p>
      <button type="button" onClick={onClear} className="btn-ghost text-sm px-5 py-2.5">
        Clear all filters
      </button>
    </div>
  );
}

export default function ChooseYourRecruiter({ recruiters }: { recruiters: RecruiterConfig[] }) {
  const [filters, setFilters] = useState<RecruiterFilterState>(DEFAULT_RECRUITER_FILTERS);

  const filterOptions = useMemo(() => getRecruiterFilterOptions(recruiters), [recruiters]);
  const filteredRecruiters = useMemo(
    () => filterRecruiters(recruiters, filters),
    [recruiters, filters]
  );

  const clearFilters = () => setFilters(DEFAULT_RECRUITER_FILTERS);

  return (
    <>
      <div className="relative overflow-hidden">
        <GrainOverlay />
        <div className="hero-blob opacity-15" aria-hidden="true" />

        <div className="relative z-10 max-w-5xl mx-auto px-6 pt-16 pb-10 sm:pt-20 sm:pb-12">
          <motion.p
            {...fadeUp(0)}
            className="text-[11px] font-semibold uppercase tracking-[0.14em] mb-4 text-accent"
          >
            Abroader — International Recruitment
          </motion.p>

          <motion.h1
            {...fadeUp(0.08)}
            className="text-4xl sm:text-5xl font-bold leading-[1.08] mb-5 text-ink tracking-tight max-w-2xl"
          >
            Choose your recruiter.
          </motion.h1>

          <motion.p
            {...fadeUp(0.14)}
            className="text-base sm:text-lg leading-relaxed text-ink-muted max-w-xl"
          >
            Every Abroader recruiter runs their own practice — with their own network,
            specialisms, and regions. Pick who fits your goals and browse their open roles.
          </motion.p>
        </div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 pb-24">
        <motion.div {...fadeUp(0.2)} className="mb-8 space-y-3">
          <FilterRow
            label="Role"
            value={filters.role}
            options={filterOptions.roles}
            onChange={(role) => setFilters((prev) => ({ ...prev, role }))}
          />
          <FilterRow
            label="Language"
            value={filters.language}
            options={filterOptions.languages}
            onChange={(language) => setFilters((prev) => ({ ...prev, language }))}
          />
          {hasActiveRecruiterFilters(filters) && (
            <button
              type="button"
              onClick={clearFilters}
              className="text-xs font-medium text-accent hover:text-accent-hover transition-colors"
            >
              Clear filters
            </button>
          )}
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
          {filteredRecruiters.length === 0 ? (
            <EmptyFilterState onClear={clearFilters} />
          ) : (
            filteredRecruiters.map((recruiter, index) => (
              <RecruiterCard key={recruiter.slug} recruiter={recruiter} index={index} />
            ))
          )}
        </div>
      </div>
    </>
  );
}
