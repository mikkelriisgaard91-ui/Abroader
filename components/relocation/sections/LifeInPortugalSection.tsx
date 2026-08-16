"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Waves, Sun, Users, Dumbbell, Utensils, Compass } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { lifeInPortugalContent, sectionImages } from "@/config/portugalLanding";
import { fadeUp, fadeUpWithDelay, staggerContainer, staggerItem } from "@/lib/motion/presets";

const iconMap: Record<string, LucideIcon> = {
  waves: Waves,
  sun: Sun,
  users: Users,
  dumbbell: Dumbbell,
  utensils: Utensils,
  compass: Compass,
};

export default function LifeInPortugalSection() {
  return (
    <section className="landing-section bg-about-bg" aria-labelledby="life-heading">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-12 lg:mb-16">
          <motion.div
            {...fadeUpWithDelay(0)}
            className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-photo order-2 lg:order-1"
          >
            <Image
              src={sectionImages.cliffHouse.src}
              alt={sectionImages.cliffHouse.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 560px"
              className="object-cover"
            />
          </motion.div>

          <div className="order-1 lg:order-2">
            <motion.p
              {...fadeUp}
              className="text-xs font-bold uppercase tracking-[0.2em] text-teal-deep mb-4"
            >
              {lifeInPortugalContent.heading}
            </motion.p>
            <motion.h2
              {...fadeUpWithDelay(0.06)}
              id="life-heading"
              className="section-heading mb-6 max-w-lg"
            >
              {lifeInPortugalContent.headline}
            </motion.h2>
            <div className="space-y-4 max-w-lg">
              {lifeInPortugalContent.paragraphs.map((paragraph, i) => (
                <motion.p
                  key={paragraph.slice(0, 24)}
                  {...fadeUpWithDelay(0.12 + i * 0.06)}
                  className="text-[1rem] text-ink-muted leading-relaxed"
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>
          </div>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 lg:gap-4"
        >
          {lifeInPortugalContent.highlights.map((highlight) => {
            const Icon = iconMap[highlight.icon];
            return (
              <motion.div
                key={highlight.label}
                variants={staggerItem}
                className="flex flex-col items-center text-center gap-3 rounded-2xl bg-white border border-border p-4 lg:p-5"
              >
                <div className="w-11 h-11 rounded-2xl bg-accent/10 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-accent" strokeWidth={1.5} aria-hidden="true" />
                </div>
                <p className="text-xs sm:text-sm font-semibold text-ink leading-snug">{highlight.label}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
