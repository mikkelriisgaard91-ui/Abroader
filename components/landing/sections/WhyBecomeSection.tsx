"use client";

import { motion } from "framer-motion";
import { Briefcase, Globe, Heart, TrendingUp } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import BentoCard from "@/components/landing/ui/BentoCard";
import SectionHeader from "@/components/landing/ui/SectionHeader";
import { whyBecomeContent } from "@/config/abroaderLanding";
import { staggerContainer } from "@/lib/motion/presets";

const iconMap: Record<string, LucideIcon> = {
  briefcase: Briefcase,
  globe: Globe,
  heart: Heart,
  trendingUp: TrendingUp,
};

export default function WhyBecomeSection() {
  return (
    <section className="landing-section bg-white" aria-labelledby="why-heading">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          headline={whyBecomeContent.headline}
          subtext={whyBecomeContent.subtext}
          id="why-heading"
        />
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="bento-grid"
        >
          {whyBecomeContent.cards.map((card) => {
            const Icon = iconMap[card.icon];
            return (
              <BentoCard key={card.title}>
                <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center mb-5">
                  <Icon className="w-6 h-6 text-accent" strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-bold text-ink mb-2 tracking-tight">
                  {card.title}
                </h3>
                <p className="text-sm text-ink-muted leading-relaxed">
                  {card.description}
                </p>
              </BentoCard>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
