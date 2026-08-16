"use client";

import { motion } from "framer-motion";
import { PlaneTakeoff, Home, ClipboardList, Users } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import SectionHeader from "@/components/landing/ui/SectionHeader";
import { relocationSupportContent } from "@/config/portugalLanding";
import { fadeUpWithDelay, staggerContainer, staggerItem } from "@/lib/motion/presets";

const POINT_ICONS: LucideIcon[] = [PlaneTakeoff, Home, ClipboardList, Users];

export default function RelocationSupportSection() {
  return (
    <section className="landing-section bg-white" aria-labelledby="relocation-heading">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeader headline={relocationSupportContent.heading} id="relocation-heading" />

        <motion.div
          {...fadeUpWithDelay(0)}
          className="rounded-2xl bg-about-bg border border-border p-6 sm:p-8 mb-10 max-w-3xl mx-auto"
        >
          <p className="text-sm sm:text-[1rem] text-ink leading-relaxed">{relocationSupportContent.intro}</p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid sm:grid-cols-2 gap-6"
        >
          {relocationSupportContent.points.map((point, i) => {
            const Icon = POINT_ICONS[i];
            return (
              <motion.div key={point.title} variants={staggerItem} className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-2xl bg-accent/10 flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5 text-accent" strokeWidth={1.5} aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-ink mb-1">{point.title}</h3>
                  <p className="text-sm text-ink-muted leading-relaxed">{point.description}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
