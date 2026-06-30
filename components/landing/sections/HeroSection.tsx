"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import AuroraBackground from "@/components/landing/ui/AuroraBackground";
import { GrainOverlay } from "@/components/landing/ui/GrainOverlay";
import PremiumButton from "@/components/landing/ui/PremiumButton";
import HeroIllustration from "@/components/landing/sections/HeroIllustration";
import { heroContent, landingCtas } from "@/config/abroaderLanding";
import { fadeUpWithDelay } from "@/lib/motion/presets";

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden pt-[72px] scroll-mt-[72px]">
      <AuroraBackground />
      <div className="hero-blob" aria-hidden="true" />
      <GrainOverlay id="hero-noise" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-16 lg:py-24 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <motion.p
              {...fadeUpWithDelay(0)}
              className="text-xs font-bold uppercase tracking-[0.2em] text-accent mb-6"
            >
              A flexible way to earn
            </motion.p>
            <motion.h1
              {...fadeUpWithDelay(0.08)}
              className="hero-headline mb-6"
            >
              {heroContent.headline}
            </motion.h1>
            <motion.p
              {...fadeUpWithDelay(0.16)}
              className="text-lg lg:text-xl font-semibold text-ink leading-relaxed mb-10 max-w-xl"
            >
              {heroContent.subheadline}
            </motion.p>
            <motion.div
              {...fadeUpWithDelay(0.24)}
              className="flex flex-col sm:flex-row gap-4"
            >
              <PremiumButton href={landingCtas.apply} className="text-base px-8 py-4">
                {heroContent.primaryCta}
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </PremiumButton>
              <PremiumButton href={landingCtas.howItWorks} variant="ghost" className="text-base px-8 py-4">
                {heroContent.secondaryCta}
              </PremiumButton>
            </motion.div>
          </div>

          <motion.div {...fadeUpWithDelay(0.2)}>
            <HeroIllustration />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
