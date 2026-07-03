"use client";

import { motion } from "framer-motion";
import { MapPin, ArrowRight } from "lucide-react";
import type { TeamtailorJob } from "@/lib/teamtailor";
import { useLocale } from "@/lib/i18n/LocaleProvider";

export default function JobCard({ job, index }: { job: TeamtailorJob; index: number }) {
  const { t } = useLocale();

  return (
    <motion.a
      href={job.applyUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.07, ease: "easeOut" }}
      whileHover={{ y: -2 }}
      className="group block bg-white rounded-2xl p-6 cursor-pointer border border-border shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)] transition-shadow duration-300 no-underline"
    >
      <div className="flex items-start justify-between gap-4 mb-4">
        <div className="flex-1 min-w-0">
          <h3 className="font-bold text-lg leading-snug text-ink group-hover:text-accent transition-colors line-clamp-2">
            {job.title}
          </h3>
          <p className="text-sm mt-1 font-medium text-ink-muted">{job.company}</p>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mb-4">
        <span className="inline-flex items-center gap-1 text-xs font-medium px-2.5 py-1 rounded-full bg-ink/5 text-ink">
          <MapPin size={11} strokeWidth={1.5} />
          {job.location}
        </span>
        <span className="inline-flex items-center text-xs font-medium px-2.5 py-1 rounded-full bg-amber/15 text-amber">
          {job.employmentType}
        </span>
      </div>

      <p className="text-sm leading-relaxed line-clamp-2 mb-5 text-ink-muted">
        {job.description}
      </p>

      <div className="flex items-center justify-between">
        <div className="flex flex-wrap gap-1.5">
          {job.tags.slice(0, 2).map((tag) => (
            <span
              key={tag}
              className="text-xs px-2 py-0.5 rounded-full bg-accent/10 text-accent"
            >
              {tag}
            </span>
          ))}
        </div>
        <span className="text-sm font-semibold flex items-center gap-1 text-accent group-hover:gap-2 transition-all">
          {t.jobs.applyNow}
          <ArrowRight size={14} strokeWidth={1.5} />
        </span>
      </div>
    </motion.a>
  );
}
