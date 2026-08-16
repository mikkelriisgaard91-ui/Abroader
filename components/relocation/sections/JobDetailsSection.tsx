"use client";

import { motion } from "framer-motion";
import { Building2, MapPin, CalendarClock, Home } from "lucide-react";
import SectionHeader from "@/components/landing/ui/SectionHeader";
import { jobDetailContent } from "@/config/portugalLanding";
import { fadeUp, fadeUpWithDelay } from "@/lib/motion/presets";

const WORK_MODEL_ICONS = [Home, Building2];

export default function JobDetailsSection() {
  const { compensation, workModel } = jobDetailContent;

  return (
    <section id="jobbet" className="landing-section bg-white scroll-mt-[72px]" aria-labelledby="job-heading">
      <div className="max-w-4xl mx-auto px-6">
        <SectionHeader headline={jobDetailContent.heading} id="job-heading" align="left" />

        <motion.div {...fadeUp} className="grid sm:grid-cols-2 gap-4 mb-10">
          <div className="flex items-start gap-3 rounded-2xl border border-border bg-base p-5">
            <Building2 className="w-5 h-5 text-accent shrink-0 mt-0.5" aria-hidden="true" />
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-ink-muted mb-1">Position</p>
              <p className="text-sm font-semibold text-ink">{jobDetailContent.position}</p>
            </div>
          </div>
          <div className="flex items-start gap-3 rounded-2xl border border-border bg-base p-5">
            <MapPin className="w-5 h-5 text-accent shrink-0 mt-0.5" aria-hidden="true" />
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-ink-muted mb-1">Lokation</p>
              <p className="text-sm font-semibold text-ink">{jobDetailContent.location}</p>
            </div>
          </div>
          <div className="sm:col-span-2 flex items-start gap-3 rounded-2xl border border-border bg-base p-5">
            <CalendarClock className="w-5 h-5 text-accent shrink-0 mt-0.5" aria-hidden="true" />
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-ink-muted mb-1">
                {jobDetailContent.startDate.heading}
              </p>
              <p className="text-sm font-semibold text-ink">{jobDetailContent.startDate.body}</p>
            </div>
          </div>
        </motion.div>

        <motion.div {...fadeUpWithDelay(0.03)} className="rounded-3xl border border-border bg-about-bg p-6 sm:p-8 mb-10">
          <h3 className="text-lg font-bold text-ink mb-1 tracking-tight">{workModel.heading}</h3>
          <p className="text-sm text-ink-muted leading-relaxed mb-6 max-w-2xl">{workModel.intro}</p>
          <div className="grid sm:grid-cols-2 gap-4">
            {workModel.options.map((option, i) => {
              const Icon = WORK_MODEL_ICONS[i];
              return (
                <div key={option.title} className="rounded-2xl bg-white border border-border p-5">
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-teal-deep bg-accent/15 rounded-full px-3 py-1 mb-3">
                    <Icon className="w-3.5 h-3.5" aria-hidden="true" />
                    {option.badge}
                  </span>
                  <p className="text-sm font-bold text-ink mb-1.5">{option.title}</p>
                  <p className="text-sm text-ink-muted leading-relaxed">{option.description}</p>
                </div>
              );
            })}
          </div>
        </motion.div>

        <motion.p {...fadeUpWithDelay(0.05)} className="text-sm text-ink-muted leading-relaxed mb-12 max-w-2xl">
          {jobDetailContent.employerNote}
        </motion.p>

        <motion.div {...fadeUpWithDelay(0.1)} className="rounded-3xl border border-border bg-about-bg p-6 sm:p-8">
          <h3 className="text-xl font-bold text-ink mb-2 tracking-tight">{compensation.heading}</h3>
          <p className="text-sm text-ink-muted leading-relaxed mb-5 max-w-2xl">{compensation.intro}</p>
          <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-2">
            {compensation.generalItems.map((item) => (
              <li key={item} className="text-sm text-ink flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
