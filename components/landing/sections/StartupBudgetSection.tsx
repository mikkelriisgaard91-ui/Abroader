"use client";

import { motion } from "framer-motion";
import { Gift, Rocket, Share2 } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import GlassCard from "@/components/landing/ui/GlassCard";
import SectionHeader from "@/components/landing/ui/SectionHeader";
import { startupBudgetContent } from "@/config/abroaderLanding";
import { fadeUpWithDelay } from "@/lib/motion/presets";

const iconMap: Record<string, LucideIcon> = {
  gift: Gift,
  share2: Share2,
  rocket: Rocket,
};

export default function StartupBudgetSection() {
  return (
    <section className="landing-section bg-white" aria-labelledby="budget-heading">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader headline={startupBudgetContent.headline} id="budget-heading" />

        <div className="grid md:grid-cols-3 gap-5 lg:gap-6">
          {startupBudgetContent.cards.map((card, i) => {
            const Icon = iconMap[card.icon];
            return (
              <motion.div key={card.title} {...fadeUpWithDelay(i * 0.1)}>
                <GlassCard className="h-full border border-accent/10">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-accent/15 to-amber/10 flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6 text-accent" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl font-bold text-ink mb-3 tracking-tight">
                    {card.title}
                  </h3>
                  <p className="text-sm text-ink-muted leading-relaxed">
                    {card.description}
                  </p>
                </GlassCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
