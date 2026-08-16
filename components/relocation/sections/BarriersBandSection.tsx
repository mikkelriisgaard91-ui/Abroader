"use client";

import { motion } from "framer-motion";
import { threeBarriers } from "@/config/portugalLanding";
import { staggerContainer, staggerItem } from "@/lib/motion/presets";

export default function BarriersBandSection() {
  return (
    <section className="bg-white border-b border-border" aria-label="De tre ting Abroader hjælper med">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="max-w-6xl mx-auto px-6 py-8 sm:py-10 grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-border"
      >
        {threeBarriers.map((barrier) => (
          <motion.div
            key={barrier.id}
            variants={staggerItem}
            className="flex items-center gap-3 py-4 sm:py-0 sm:px-6 first:sm:pl-0 last:sm:pr-0"
          >
            <span className="text-2xl shrink-0" aria-hidden="true">
              {barrier.emoji}
            </span>
            <div>
              <p className="text-sm font-bold text-ink leading-tight">{barrier.title}</p>
              <p className="text-xs text-ink-muted leading-snug">{barrier.short}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
