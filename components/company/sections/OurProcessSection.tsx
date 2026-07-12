"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ClipboardList,
  FileSignature,
  Handshake,
  ListChecks,
  PhoneCall,
  Search,
  ShieldCheck,
  UserCheck,
  Users,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import SectionHeader from "@/components/landing/ui/SectionHeader";
import { ourProcessContent, type ProcessPhaseIcon } from "@/config/companyLanding";
import { fadeUp, fadeUpWithDelay, staggerContainer, staggerItem } from "@/lib/motion/presets";

const phaseIconMap: Record<ProcessPhaseIcon, LucideIcon> = {
  clipboardList: ClipboardList,
  search: Search,
  phoneCall: PhoneCall,
  listChecks: ListChecks,
  users: Users,
  handshake: Handshake,
  fileSignature: FileSignature,
  shieldCheck: ShieldCheck,
};

const contactIconMap: Record<string, LucideIcon> = {
  userCheck: UserCheck,
  users: Users,
};

export default function OurProcessSection() {
  const { pointOfContact, phases, feedbackLoop, dataProtection } = ourProcessContent;

  return (
    <section
      id="process"
      className="landing-section bg-white scroll-mt-[72px]"
      aria-labelledby="process-heading"
    >
      <div className="max-w-6xl mx-auto px-6">
        <motion.p
          {...fadeUp}
          className="text-xs font-bold uppercase tracking-[0.2em] text-accent mb-4 text-center"
        >
          {ourProcessContent.eyebrow}
        </motion.p>
        <SectionHeader
          headline={ourProcessContent.headline}
          subtext={ourProcessContent.subtext}
          id="process-heading"
          level="h1"
        />

        {/* Point of contact */}
        <motion.h3
          {...fadeUp}
          className="text-lg sm:text-xl font-bold text-ink text-center mb-6"
        >
          {pointOfContact.headline}
        </motion.h3>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="glass-panel p-8 lg:p-10 grid sm:grid-cols-2 gap-8 lg:gap-10 mb-16 lg:mb-24"
        >
          {pointOfContact.columns.map((column, i) => {
            const Icon = contactIconMap[column.icon];
            return (
              <motion.div
                key={column.tag}
                variants={staggerItem}
                className={
                  i === 1 ? "sm:border-l sm:border-border sm:pl-8 lg:pl-10" : undefined
                }
              >
                <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-accent" strokeWidth={1.5} aria-hidden="true" />
                </div>
                <span className="text-xs font-semibold uppercase tracking-widest text-accent">
                  {column.tag}
                </span>
                <h4 className="text-lg font-bold text-ink mt-1 mb-2 tracking-tight">
                  {column.title}
                </h4>
                <p className="text-sm text-ink-muted leading-relaxed">{column.description}</p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Phases */}
        <motion.p
          {...fadeUp}
          className="text-xs font-bold uppercase tracking-[0.2em] text-accent mb-4"
        >
          {ourProcessContent.phasesEyebrow}
        </motion.p>
        <SectionHeader
          headline={ourProcessContent.phasesHeadline}
          subtext={ourProcessContent.phasesSubtext}
          align="left"
          id="phases-heading"
        />

        <div className="flex flex-col">
          {phases.map((phase, i) => {
            const Icon = phaseIconMap[phase.icon];
            const isLast = i === phases.length - 1;

            return (
              <motion.div
                key={phase.number}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: Math.min(i * 0.05, 0.3) }}
                className="relative flex gap-4 sm:gap-6"
              >
                <div className="flex flex-col items-center shrink-0">
                  <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center">
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-accent" strokeWidth={1.5} aria-hidden="true" />
                    <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-accent text-white text-[10px] font-bold flex items-center justify-center">
                      {i + 1}
                    </span>
                  </div>
                  {!isLast && (
                    <div className="w-px flex-1 min-h-6 my-1 bg-border" aria-hidden="true" />
                  )}
                </div>

                <div className={`flex-1 min-w-0 ${isLast ? "pb-0" : "pb-10"}`}>
                  <span className="text-xs font-semibold uppercase tracking-widest text-accent">
                    Phase {i + 1}
                  </span>
                  <h4 className="text-lg sm:text-xl font-bold text-ink mt-0.5 mb-3 tracking-tight">
                    {phase.name}
                  </h4>

                  <div className="pb-2">
                    <p className="text-sm text-ink-muted leading-relaxed mb-4">{phase.summary}</p>
                    {phase.whatHappens.length > 0 && (
                      <ul className="space-y-2 mb-4">
                        {phase.whatHappens.map((item) => (
                          <li
                            key={item}
                            className="text-sm text-ink-muted leading-relaxed pl-4 border-l-2 border-border"
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    )}
                    {phase.customise && (
                      <span className="inline-block text-xs font-medium text-accent bg-accent/10 px-3 py-1.5 rounded-full">
                        Customised: {phase.customise}
                      </span>
                    )}
                    {phase.offRamp && (
                      <div className="mt-2 border-l-2 border-accent bg-accent/10 rounded-r-lg px-4 py-3">
                        <span className="block text-xs font-bold uppercase tracking-wider text-accent-hover mb-1">
                          Not progressed
                        </span>
                        <p className="text-sm text-ink leading-relaxed">{phase.offRamp}</p>
                      </div>
                    )}
                    {phase.note && (
                      <p className="text-sm text-ink-muted leading-relaxed">
                        {phase.note.prefix}
                        <a
                          href={phase.note.linkHref}
                          className="font-semibold text-ink underline decoration-accent/40 underline-offset-2 hover:decoration-accent"
                        >
                          {phase.note.linkLabel}
                        </a>
                        .
                      </p>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Feedback loop reassurance */}
        <motion.div
          {...fadeUpWithDelay(0.1)}
          className="mt-16 lg:mt-20 rounded-2xl bg-accent/10 border border-accent/20 p-8 lg:p-10"
        >
          <h3 className="text-xl font-bold text-ink mb-3 tracking-tight">
            {feedbackLoop.headline}
          </h3>
          <p className="text-sm text-ink-muted leading-relaxed max-w-3xl">
            {feedbackLoop.body}
          </p>
        </motion.div>

        {/* Data protection */}
        <motion.div {...fadeUpWithDelay(0.15)} className="mt-10 lg:mt-12">
          <h3 className="text-base font-bold text-ink mb-2 tracking-tight">
            {dataProtection.headline}
          </h3>
          <p className="text-sm text-ink-muted leading-relaxed max-w-3xl">
            {dataProtection.body}{" "}
            <Link href={dataProtection.linkHref} className="legal-link">
              {dataProtection.linkLabel}
            </Link>
            .
          </p>
        </motion.div>
      </div>
    </section>
  );
}
