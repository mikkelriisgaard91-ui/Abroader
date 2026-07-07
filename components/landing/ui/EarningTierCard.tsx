"use client";

import { motion } from "framer-motion";
import AnimatedCounter, { AnimatedRange } from "@/components/landing/ui/AnimatedCounter";
import { earningPotentialContent } from "@/config/abroaderLanding";
import { cardHover } from "@/lib/motion/presets";

type EarningTier = (typeof earningPotentialContent.tiers)[number];

export default function EarningTierCard({ tier }: { tier: EarningTier }) {
  const { highlighted } = tier;
  const tagline = "tagline" in tier ? tier.tagline : undefined;

  return (
    <motion.div
      {...(highlighted ? {} : cardHover)}
      className={`h-full rounded-3xl p-6 lg:p-8 transition-all duration-300 ${
        highlighted
          ? "bg-ink text-base glow-ring scale-[1.02] lg:scale-105 z-10 lg:-my-2"
          : "glass-panel hover:shadow-card-hover"
      }`}
    >
      <p
        className={`text-xs font-bold uppercase tracking-[0.15em] text-accent ${
          tagline ? "mb-2" : "mb-5"
        }`}
      >
        {tier.title}
      </p>
      {tagline && (
        <p className={`text-sm mb-5 ${highlighted ? "text-base/65" : "text-ink-muted"}`}>
          {tagline}
        </p>
      )}

      <div
        className={`rounded-2xl px-5 py-6 mb-6 text-center ${
          highlighted
            ? "bg-white/10 border border-white/15"
            : "bg-gradient-to-br from-accent/15 to-teal/10 border border-accent/10"
        }`}
      >
        <span
          className={`inline-block text-xs font-bold uppercase tracking-wider rounded-full px-3 py-1 mb-3 ${
            highlighted
              ? "text-base/70 bg-white/10"
              : "text-ink-muted bg-white/60"
          }`}
        >
          Up to
        </span>
        <p
          className={`text-4xl lg:text-5xl font-extrabold tracking-tight ${
            highlighted ? "text-accent" : "text-accent"
          }`}
        >
          <AnimatedCounter
            value={tier.commission.max}
            prefix={tier.commission.prefix}
          />
        </p>
        <p
          className={`text-sm mt-2 ${highlighted ? "text-base/55" : "text-ink-subtle"}`}
        >
          your commission
        </p>
      </div>

      <div className="text-center">
        <p
          className={`text-sm mb-1 ${highlighted ? "text-base/55" : "text-ink-subtle"}`}
        >
          Placement fee
        </p>
        <p
          className={`text-lg font-semibold tracking-tight ${
            highlighted ? "text-base/80" : "text-ink-muted"
          }`}
        >
          <AnimatedRange
            min={tier.placementFee.min}
            max={tier.placementFee.max}
            prefix={tier.placementFee.prefix}
            suffix={"suffix" in tier.placementFee ? tier.placementFee.suffix ?? "" : ""}
          />
        </p>
      </div>
    </motion.div>
  );
}
