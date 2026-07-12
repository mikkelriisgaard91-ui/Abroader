"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import PremiumButton from "@/components/landing/ui/PremiumButton";
import { OUR_PROCESS_PATH, processTeaserContent } from "@/config/companyLanding";
import { fadeUp, fadeUpWithDelay } from "@/lib/motion/presets";

export default function ProcessTeaserSection() {
  return (
    <section
      id="process"
      className="landing-section bg-about-bg scroll-mt-[72px]"
      aria-labelledby="process-teaser-heading"
    >
      <div className="max-w-3xl mx-auto px-6 text-center">
        <motion.p
          {...fadeUp}
          className="text-xs font-bold uppercase tracking-[0.2em] text-accent mb-4"
        >
          {processTeaserContent.eyebrow}
        </motion.p>
        <motion.h2
          {...fadeUpWithDelay(0.05)}
          id="process-teaser-heading"
          className="section-heading mb-4"
        >
          {processTeaserContent.headline}
        </motion.h2>
        <motion.p {...fadeUpWithDelay(0.1)} className="section-subtext mb-8">
          {processTeaserContent.subtext}
        </motion.p>
        <motion.div {...fadeUpWithDelay(0.15)} className="flex justify-center">
          <PremiumButton href={OUR_PROCESS_PATH} variant="ghost" className="text-base px-8 py-4">
            {processTeaserContent.cta}
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </PremiumButton>
        </motion.div>
      </div>
    </section>
  );
}
