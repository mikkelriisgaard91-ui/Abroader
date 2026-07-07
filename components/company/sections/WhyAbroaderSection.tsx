"use client";

import { motion } from "framer-motion";
import { Coins, Heart } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import SectionHeader from "@/components/landing/ui/SectionHeader";
import { whyAbroaderContent } from "@/config/companyLanding";
import { staggerContainer, staggerItem } from "@/lib/motion/presets";

const iconMap: Record<string, LucideIcon> = {
  coins: Coins,
  heart: Heart,
};

export default function WhyAbroaderSection() {
  return (
    <section
      id="why-abroader"
      className="landing-section bg-white scroll-mt-[72px]"
      aria-labelledby="why-abroader-heading"
    >
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          headline={whyAbroaderContent.headline}
          subtext={whyAbroaderContent.subtext}
          id="why-abroader-heading"
        />
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid md:grid-cols-2 gap-8"
        >
          {whyAbroaderContent.benefits.map((benefit) => {
            const Icon = iconMap[benefit.icon];
            return (
              <motion.div
                key={benefit.title}
                variants={staggerItem}
                className="p-6 sm:p-8 rounded-2xl bg-base border border-border"
              >
                <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center mb-5">
                  <Icon className="w-6 h-6 text-accent" strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-bold text-ink mb-3 tracking-tight">
                  {benefit.title}
                </h3>
                <p className="text-sm text-ink-muted leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
