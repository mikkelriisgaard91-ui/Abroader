"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import AuroraBackground from "@/components/landing/ui/AuroraBackground";
import { GrainOverlay } from "@/components/landing/ui/GrainOverlay";
import PremiumButton from "@/components/landing/ui/PremiumButton";
import { CTA_LINK, finalCtaContent, threeBarriers } from "@/config/portugalLanding";
import { fadeUpWithDelay } from "@/lib/motion/presets";

export default function PortugalFinalCtaSection() {
  return (
    <section id="ansoeg" className="relative py-20 sm:py-28 lg:py-32 overflow-hidden scroll-mt-[72px]" aria-labelledby="final-cta-heading">
      <div className="absolute inset-0 bg-ink" />
      <AuroraBackground variant="dark" />
      <GrainOverlay id="portugal-cta-noise" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.h2
          {...fadeUpWithDelay(0)}
          id="final-cta-heading"
          className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-base mb-5 sm:mb-6 leading-tight"
        >
          {finalCtaContent.heading}
        </motion.h2>
        <motion.div {...fadeUpWithDelay(0.08)} className="mb-8 sm:mb-10 max-w-2xl mx-auto">
          {finalCtaContent.bodyLines.map((line) => (
            <p key={line} className="text-base sm:text-lg text-base/70 leading-relaxed">
              {line}
            </p>
          ))}
        </motion.div>

        <motion.div {...fadeUpWithDelay(0.16)} className="flex flex-col items-center gap-3 mb-12 sm:mb-16">
          <PremiumButton href={CTA_LINK} className="text-base px-10 py-4">
            {finalCtaContent.primaryCta}
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </PremiumButton>
          <p className="text-sm text-base/60">{finalCtaContent.supporting}</p>
        </motion.div>

        <motion.div
          {...fadeUpWithDelay(0.22)}
          className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 text-left"
        >
          {threeBarriers.map((barrier) => (
            <div
              key={barrier.id}
              className="flex items-center gap-3 rounded-2xl border border-base/15 bg-base/5 backdrop-blur-sm px-4 py-3 sm:px-5 sm:py-4"
            >
              <span className="text-xl sm:text-2xl shrink-0" aria-hidden="true">
                {barrier.emoji}
              </span>
              <div>
                <p className="text-sm font-bold text-base leading-tight">{barrier.title}</p>
                <p className="text-xs text-base/60 leading-snug">{barrier.short}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
