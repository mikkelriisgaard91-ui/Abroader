"use client";

import { motion } from "framer-motion";
import { Database, Megaphone, Share2, UserSearch, Users } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import GlassCard from "@/components/landing/ui/GlassCard";
import SectionHeader from "@/components/landing/ui/SectionHeader";
import { candidateSourcesContent } from "@/config/abroaderLanding";
import { fadeUpWithDelay } from "@/lib/motion/presets";

const iconMap: Record<string, LucideIcon> = {
  users: Users,
  share2: Share2,
  megaphone: Megaphone,
  linkedin: UserSearch,
  database: Database,
};

export default function CandidateSourcesSection() {
  return (
    <section className="landing-section bg-about-bg" aria-labelledby="sources-heading">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          headline={candidateSourcesContent.headline}
          subtext={candidateSourcesContent.subtext}
          id="sources-heading"
        />

        <div className="grid sm:grid-cols-2 gap-5 lg:gap-6">
          {candidateSourcesContent.cards.map((card, i) => {
            const Icon = iconMap[card.icon];
            return (
              <motion.div key={card.title} {...fadeUpWithDelay(i * 0.08)}>
                <GlassCard className="flex gap-5 items-start">
                  <div className="w-14 h-14 rounded-2xl bg-white/80 border border-border/50 flex items-center justify-center shrink-0 shadow-sm">
                    <Icon className="w-6 h-6 text-accent" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-ink mb-2 tracking-tight">
                      {card.title}
                    </h3>
                    <p className="text-sm text-ink-muted leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                </GlassCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
