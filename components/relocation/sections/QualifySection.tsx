"use client";

import { motion } from "framer-motion";
import SectionHeader from "@/components/landing/ui/SectionHeader";
import { qualifyContent } from "@/config/portugalLanding";
import { fadeUp, staggerContainer, staggerItem } from "@/lib/motion/presets";

export default function QualifySection() {
  return (
    <section className="landing-section bg-white" aria-labelledby="qualify-heading">
      <div className="max-w-4xl mx-auto px-6">
        <SectionHeader headline={qualifyContent.heading} id="qualify-heading" />
        <motion.ul
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid sm:grid-cols-2 gap-4"
        >
          {qualifyContent.items.map((item) => (
            <motion.li
              key={item.text}
              variants={staggerItem}
              className="flex items-center gap-4 rounded-2xl border border-border bg-base px-5 py-5"
            >
              <span
                className="flex items-center justify-center w-12 h-12 rounded-2xl bg-accent/10 text-2xl shrink-0"
                aria-hidden="true"
              >
                {item.emoji}
              </span>
              <span className="text-[1rem] font-medium text-ink leading-snug">{item.text}</span>
            </motion.li>
          ))}
        </motion.ul>
        <motion.p {...fadeUp} className="mt-8 text-center">
          <span className="inline-block text-sm sm:text-[1rem] font-bold text-teal-deep bg-accent/15 rounded-full px-4 py-2">
            {qualifyContent.note}
          </span>
        </motion.p>
      </div>
    </section>
  );
}
