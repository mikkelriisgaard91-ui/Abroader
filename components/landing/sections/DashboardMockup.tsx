"use client";

import { motion } from "framer-motion";
import {
  Briefcase,
  Building2,
  BookOpen,
  Coins,
  Globe,
  Heart,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { aboutRoleContent } from "@/config/abroaderLanding";
import { fadeUpWithDelay, staggerContainer, staggerItem } from "@/lib/motion/presets";

const iconMap: Record<string, LucideIcon> = {
  globe: Globe,
  briefcase: Briefcase,
  building: Building2,
  bookOpen: BookOpen,
  heart: Heart,
  coins: Coins,
};

export default function DashboardMockup() {
  return (
    <div className="w-full">
      <motion.div
        {...fadeUpWithDelay(0.1)}
        className="glass-panel-strong p-6 lg:p-8 shadow-glass border border-white/70"
      >
        <div className="flex items-center gap-3 mb-6 pb-5 border-b border-border/50">
          <div className="w-10 h-10 rounded-2xl bg-accent flex items-center justify-center">
            <Briefcase className="w-5 h-5 text-white" strokeWidth={1.75} />
          </div>
          <div>
            <p className="text-sm font-bold text-ink">{aboutRoleContent.toolkitHeading}</p>
          </div>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="grid sm:grid-cols-2 gap-4"
        >
          {aboutRoleContent.toolkitItems.map((item) => {
            const Icon = iconMap[item.icon];
            return (
              <motion.div
                key={item.title}
                variants={staggerItem}
                className="flex gap-3 p-4 rounded-2xl bg-white/60 border border-border/40"
              >
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                  <Icon className="w-4 h-4 text-accent" strokeWidth={1.75} />
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-bold text-ink mb-1">{item.title}</p>
                  <p className="text-xs text-ink-muted leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </div>
  );
}
