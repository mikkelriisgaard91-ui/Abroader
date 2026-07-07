"use client";

import { motion } from "framer-motion";
import { Calendar, Building2, Users, UserCheck } from "lucide-react";
import AuroraBackground from "@/components/landing/ui/AuroraBackground";
import { GrainOverlay } from "@/components/landing/ui/GrainOverlay";
import PremiumButton from "@/components/landing/ui/PremiumButton";
import { companyCtas, companyHeroContent } from "@/config/companyLanding";
import { fadeUpWithDelay } from "@/lib/motion/presets";

export default function CompanyHeroSection() {
  return (
    <section className="relative min-h-[90dvh] flex items-center overflow-hidden pt-[72px] scroll-mt-[72px]">
      <AuroraBackground />
      <div className="hero-blob" aria-hidden="true" />
      <GrainOverlay id="company-hero-noise" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-12 sm:py-16 lg:py-24 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <motion.p
              {...fadeUpWithDelay(0)}
              className="text-xs font-bold uppercase tracking-[0.2em] text-accent mb-4 sm:mb-6"
            >
              {companyHeroContent.eyebrow}
            </motion.p>
            <motion.h1
              {...fadeUpWithDelay(0.08)}
              className="hero-headline mb-5 sm:mb-6"
            >
              {companyHeroContent.headline}
            </motion.h1>
            <motion.p
              {...fadeUpWithDelay(0.16)}
              className="text-base sm:text-lg lg:text-xl font-semibold text-ink leading-relaxed mb-8 sm:mb-10 max-w-xl"
            >
              {companyHeroContent.subheadline}
            </motion.p>
            <motion.div
              {...fadeUpWithDelay(0.24)}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4"
            >
              <PremiumButton
                href={companyCtas.bookCall}
                external
                className="text-base px-8 py-4"
              >
                <Calendar className="w-4 h-4" aria-hidden="true" />
                {companyHeroContent.primaryCta}
              </PremiumButton>
              <PremiumButton
                href={companyCtas.exploreServices}
                variant="ghost"
                className="text-base px-8 py-4"
              >
                {companyHeroContent.secondaryCta}
              </PremiumButton>
            </motion.div>
          </div>

          <motion.div
            {...fadeUpWithDelay(0.2)}
            className="hidden lg:flex justify-center"
          >
            <div className="glass-panel p-10 w-full max-w-md">
              <div className="grid grid-cols-2 gap-6">
                <div className="flex flex-col items-center text-center gap-3 p-4 rounded-2xl bg-accent/10">
                  <div className="w-14 h-14 rounded-2xl bg-accent/20 flex items-center justify-center">
                    <Building2 className="w-7 h-7 text-accent" strokeWidth={1.5} />
                  </div>
                  <p className="text-sm font-semibold text-ink">Your company</p>
                </div>
                <div className="flex flex-col items-center text-center gap-3 p-4 rounded-2xl bg-teal/15">
                  <div className="w-14 h-14 rounded-2xl bg-teal/25 flex items-center justify-center">
                    <UserCheck className="w-7 h-7 text-teal-deep" strokeWidth={1.5} />
                  </div>
                  <p className="text-sm font-semibold text-ink">Vetted recruiter</p>
                </div>
                <div className="col-span-2 flex flex-col items-center text-center gap-3 p-4 rounded-2xl bg-base border border-border">
                  <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center">
                    <Users className="w-7 h-7 text-accent" strokeWidth={1.5} />
                  </div>
                  <p className="text-sm font-semibold text-ink">Qualified candidates</p>
                  <p className="text-xs text-ink-muted leading-relaxed">
                    Sourced, screened, and managed end-to-end
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
