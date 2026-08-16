"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import GlassCard from "@/components/landing/ui/GlassCard";
import SectionHeader from "@/components/landing/ui/SectionHeader";
import { packageSectionContent } from "@/config/portugalLanding";
import { staggerContainer, staggerItem } from "@/lib/motion/presets";

export default function PackageSection() {
  return (
    <section id="pakken" className="landing-section bg-about-bg scroll-mt-[72px]" aria-labelledby="package-heading">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          headline={packageSectionContent.heading}
          subtext={packageSectionContent.subtext}
          id="package-heading"
        />
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid md:grid-cols-3 gap-6 lg:gap-8"
        >
          {packageSectionContent.cards.map((card) => (
            <motion.div key={card.id} variants={staggerItem} className="flex">
              <GlassCard hover={false} className="flex flex-col w-full h-full">
                <span className="text-3xl mb-4" aria-hidden="true">
                  {card.emoji}
                </span>
                <h3 className="text-xl font-bold text-ink mb-1 tracking-tight">{card.title}</h3>
                <p className="text-sm font-semibold text-teal-deep mb-4">{card.tagline}</p>
                <p className="text-sm text-ink-muted leading-relaxed mb-5">{card.description}</p>
                <ul className="space-y-2.5 mt-auto pt-4 border-t border-border">
                  {card.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2 text-sm text-ink leading-snug">
                      <Check className="w-4 h-4 text-accent shrink-0 mt-0.5" aria-hidden="true" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
