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

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 lg:gap-5">
          {commissionContent.cards.map((card, i) => (
            <motion.div
              key={card.rate}
              {...fadeUpWithDelay(i * 0.08)}
              className={`relative rounded-3xl p-6 lg:p-7 transition-all duration-300 ${
                card.highlighted
                  ? "bg-ink text-base glow-ring scale-[1.02] lg:scale-105 z-10 lg:-my-2"
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

        <motion.div {...fadeUpWithDelay(0.4)} className="mt-12 flex justify-center">
          <div className="text-center glass-panel inline-flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 px-6 py-4">
            <span className="font-bold text-ink">{commissionContent.stackNote}</span>
            <span className="text-ink-muted text-sm">
              {commissionContent.stackDescription}
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
