"use client";

import { motion } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";
import AuroraBackground from "@/components/landing/ui/AuroraBackground";
import { GrainOverlay } from "@/components/landing/ui/GrainOverlay";
import PremiumButton from "@/components/landing/ui/PremiumButton";
import { finalCtaContent, landingCtas } from "@/config/abroaderLanding";
import { fadeUpWithDelay } from "@/lib/motion/presets";

export default function FinalCtaSection() {
  return (
    <section
      id="apply"
      className="relative py-28 lg:py-36 overflow-hidden scroll-mt-[72px]"
      aria-labelledby="cta-heading"
    >
      <div className="absolute inset-0 bg-ink" />
      <AuroraBackground variant="dark" />
      <GrainOverlay id="cta-noise" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.h2
          {...fadeUpWithDelay(0)}
          id="cta-heading"
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-base mb-6 leading-tight"
        >
          {finalCtaContent.headline}
        </motion.h2>
        <motion.p
          {...fadeUpWithDelay(0.1)}
          className="text-lg text-base/65 leading-relaxed mb-12 max-w-2xl mx-auto"
        >
          {finalCtaContent.supporting}
        </motion.p>
        <motion.div
          {...fadeUpWithDelay(0.2)}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <PremiumButton href={landingCtas.apply} className="text-base px-10 py-4">
            {finalCtaContent.primaryCta}
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </PremiumButton>
          <PremiumButton
            href={landingCtas.bookCall}
            variant="secondary"
            className="text-base px-10 py-4"
          >
            <Calendar className="w-4 h-4" aria-hidden="true" />
            {finalCtaContent.secondaryCta}
          </PremiumButton>
        </motion.div>
      </div>

      <span id="contact" className="absolute bottom-0 scroll-mt-[72px]" aria-hidden="true" />
    </section>
  );
}
