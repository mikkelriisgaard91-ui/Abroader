"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/motion/presets";

export default function SectionHeader({
  headline,
  subtext,
  align = "center",
  id,
}: {
  headline: string;
  subtext?: string;
  align?: "center" | "left";
  id?: string;
}) {
  return (
    <motion.header
      {...fadeUp}
      className={`mb-10 sm:mb-14 lg:mb-16 max-w-3xl ${
        align === "center" ? "mx-auto text-center" : "text-left"
      }`}
    >
      <h2 id={id} className="section-heading mb-4">
        {headline}
      </h2>
      {subtext && <p className="section-subtext">{subtext}</p>}
    </motion.header>
  );
}
