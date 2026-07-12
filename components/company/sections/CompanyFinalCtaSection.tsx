"use client";

import { motion } from "framer-motion";
import { Calendar } from "lucide-react";
import AuroraBackground from "@/components/landing/ui/AuroraBackground";
import { GrainOverlay } from "@/components/landing/ui/GrainOverlay";
import PremiumButton from "@/components/landing/ui/PremiumButton";
import { companyCtas, companyFinalCtaContent } from "@/config/companyLanding";
import { fadeUpWithDelay } from "@/lib/motion/presets";

export default function CompanyFinalCtaSection({
  headline = companyFinalCtaContent.headline,
  supporting = companyFinalCtaContent.supporting,
  primaryCta = companyFinalCtaContent.primaryCta,
}: {
  headline?: string;
  supporting?: string;
  primaryCta?: string;
} = {}) {
  return (
    <section
      id="contact"
      className="relative py-20 sm:py-28 lg:py-36 overflow-hidden scroll-mt-[72px]"
      aria-labelledby="company-cta-heading"
    >
      <div className="absolute inset-0 bg-ink" />
      <AuroraBackground variant="dark" />
      <GrainOverlay id="company-cta-noise" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.h2
          {...fadeUpWithDelay(0)}
          id="company-cta-heading"
          className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-base mb-5 sm:mb-6 leading-tight"
        >
          {headline}
        </motion.h2>
        <motion.p
          {...fadeUpWithDelay(0.1)}
          className="text-base sm:text-lg text-base/65 leading-relaxed mb-8 sm:mb-12 max-w-2xl mx-auto"
        >
          {supporting}
        </motion.p>
        <motion.div
          {...fadeUpWithDelay(0.2)}
          className="flex justify-center"
        >
          <PremiumButton
            href={companyCtas.bookCall}
            external
            className="text-base px-10 py-4"
          >
            <Calendar className="w-4 h-4" aria-hidden="true" />
            {primaryCta}
          </PremiumButton>
        </motion.div>
      </div>
    </section>
  );
}
