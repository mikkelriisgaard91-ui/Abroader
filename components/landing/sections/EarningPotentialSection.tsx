"use client";

import { motion } from "framer-motion";
import EarningTierCard from "@/components/landing/ui/EarningTierCard";
import SectionHeader from "@/components/landing/ui/SectionHeader";
import { earningPotentialContent } from "@/config/abroaderLanding";
import { fadeUpWithDelay } from "@/lib/motion/presets";

export default function EarningPotentialSection() {
  return (
    <section className="landing-section bg-about-bg" aria-labelledby="earnings-heading">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          headline={earningPotentialContent.headline}
          subtext={earningPotentialContent.subtext}
          id="earnings-heading"
        />

        <motion.p
          {...fadeUpWithDelay(0.05)}
          className="text-ink-muted text-center max-w-2xl mx-auto mb-10"
        >
          {earningPotentialContent.bridgeText}
        </motion.p>

        <div className="grid md:grid-cols-3 gap-5 lg:gap-6 items-stretch">
          {earningPotentialContent.tiers.map((tier, i) => (
            <motion.div key={tier.title} {...fadeUpWithDelay(i * 0.1)} className="h-full">
              <EarningTierCard tier={tier} />
            </motion.div>
          ))}
        </div>

        <motion.p
          {...fadeUpWithDelay(0.35)}
          className="text-center text-sm text-ink-subtle mt-10 max-w-lg mx-auto"
        >
          {earningPotentialContent.disclaimer}
        </motion.p>
      </div>
    </section>
  );
}
