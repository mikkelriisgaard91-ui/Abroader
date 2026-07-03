"use client";

import { motion } from "framer-motion";
import GlassCard from "@/components/landing/ui/GlassCard";
import { AnimatedRange } from "@/components/landing/ui/AnimatedCounter";
import SectionHeader from "@/components/landing/ui/SectionHeader";
import { earningPotentialContent } from "@/config/abroaderLanding";
import { fadeUpWithDelay } from "@/lib/motion/presets";

export default function EarningPotentialSection() {
  return (
    <section className="landing-section bg-white" aria-labelledby="earnings-heading">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader headline={earningPotentialContent.headline} id="earnings-heading" />

        <div className="grid md:grid-cols-3 gap-5 lg:gap-6">
          {earningPotentialContent.tiers.map((tier, i) => (
            <motion.div key={tier.title} {...fadeUpWithDelay(i * 0.1)}>
              <GlassCard className="h-full text-center">
                <p className="text-xs font-bold uppercase tracking-[0.15em] text-accent mb-4">
                  {tier.title}
                </p>
                <div className="space-y-6">
                  <div>
                    <p className="text-sm text-ink-subtle mb-1">Placement fee</p>
                    <p className="text-2xl lg:text-3xl font-extrabold text-ink tracking-tight">
                      <AnimatedRange
                        min={tier.placementFee.min}
                        max={tier.placementFee.max}
                        prefix={tier.placementFee.prefix}
                        suffix={"suffix" in tier.placementFee ? tier.placementFee.suffix : ""}
                      />
                    </p>
                  </div>
                  <div className="h-px bg-border" />
                  <div>
                    <p className="text-sm text-ink-subtle mb-1">Your commission</p>
                    <p className="text-2xl lg:text-3xl font-extrabold text-accent tracking-tight">
                      <AnimatedRange
                        min={tier.commission.min}
                        max={tier.commission.max}
                        prefix={tier.commission.prefix}
                        suffix={"suffix" in tier.commission ? tier.commission.suffix : ""}
                      />
                    </p>
                  </div>
                </div>
              </GlassCard>
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
