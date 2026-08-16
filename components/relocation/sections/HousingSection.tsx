"use client";

import { motion } from "framer-motion";
import { Home, Building2, Waves } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import SectionHeader from "@/components/landing/ui/SectionHeader";
import { housingContent } from "@/config/portugalLanding";
import { fadeUpWithDelay, staggerContainer, staggerItem } from "@/lib/motion/presets";

const OPTION_ICONS: Record<string, LucideIcon> = {
  vaerelse: Home,
  lejlighed: Building2,
};

export default function HousingSection() {
  return (
    <section id="boligen" className="landing-section bg-about-bg scroll-mt-[72px]" aria-labelledby="housing-heading">
      <div className="max-w-4xl mx-auto px-6">
        <SectionHeader headline={housingContent.heading} subtext={housingContent.intro} id="housing-heading" />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid sm:grid-cols-2 gap-6 mb-10"
        >
          {housingContent.options.map((option) => {
            const Icon = OPTION_ICONS[option.id];
            return (
              <motion.div
                key={option.id}
                variants={staggerItem}
                className="rounded-2xl bg-white border border-border p-6 sm:p-7"
              >
                <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center mb-5">
                  <Icon className="w-6 h-6 text-accent" strokeWidth={1.5} aria-hidden="true" />
                </div>
                <h3 className="text-lg font-bold text-ink mb-1.5 tracking-tight">{option.title}</h3>
                <p className="text-base font-bold text-teal-deep mb-3">{option.priceRange}</p>
                <p className="text-sm text-ink-muted leading-relaxed">{option.description}</p>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          {...fadeUpWithDelay(0.1)}
          className="rounded-2xl bg-white border border-border p-6 sm:p-7 flex items-start gap-4 mb-6"
        >
          <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center shrink-0">
            <Waves className="w-6 h-6 text-accent" strokeWidth={1.5} aria-hidden="true" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-ink mb-1 tracking-tight">{housingContent.areaHeading}</h3>
            <p className="text-sm font-semibold text-ink mb-2">{housingContent.areaSubheading}</p>
            <p className="text-sm text-ink-muted leading-relaxed">{housingContent.areaBody}</p>
          </div>
        </motion.div>

        <motion.p {...fadeUpWithDelay(0.15)} className="text-xs text-ink-subtle leading-relaxed max-w-2xl">
          {housingContent.note}
        </motion.p>
      </div>
    </section>
  );
}
