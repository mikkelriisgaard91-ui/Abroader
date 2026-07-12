"use client";

import { motion } from "framer-motion";
import SectionHeader from "@/components/landing/ui/SectionHeader";
import { commissionContent } from "@/config/abroaderLanding";
import { fadeUpWithDelay } from "@/lib/motion/presets";

export default function CommissionSection() {
  return (
    <section
      id="commission"
      className="landing-section bg-about-bg"
      aria-labelledby="commission-heading"
    >
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          headline={commissionContent.headline}
          subtext={commissionContent.subtext}
          id="commission-heading"
        />

        <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
          {commissionContent.cards.map((card, i) => (
            <motion.div
              key={card.title}
              {...fadeUpWithDelay(i * 0.08)}
              className={`relative rounded-3xl p-6 lg:p-7 transition-all duration-300 ${
                card.highlighted
                  ? "bg-ink text-base glow-ring z-10"
                  : "glass-panel hover:shadow-card-hover"
              }`}
            >
              <p
                className={`text-4xl lg:text-5xl font-extrabold tracking-tight mb-3 ${
                  card.highlighted ? "text-accent" : "text-accent"
                }`}
              >
                {card.rate}
              </p>
              <h3
                className={`font-bold text-base mb-2 ${
                  card.highlighted ? "text-base" : "text-ink"
                }`}
              >
                {card.title}
              </h3>
              <p
                className={`text-sm leading-relaxed ${
                  card.highlighted ? "text-base/65" : "text-ink-muted"
                }`}
              >
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div {...fadeUpWithDelay(0.4)} className="mt-12 mx-auto max-w-2xl text-center">
          <div className="glass-panel px-6 py-5">
            <p className="font-bold text-ink mb-2">{commissionContent.stackNote}</p>
            <p className="text-ink-muted text-sm leading-relaxed">
              {commissionContent.stackDescription}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
