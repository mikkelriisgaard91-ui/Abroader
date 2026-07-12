"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/motion/presets";

export default function SectionHeader({
  headline,
  subtext,
  align = "center",
  id,
  level = "h2",
}: {
  headline: string;
  subtext?: string;
  align?: "center" | "left";
  id?: string;
  level?: "h1" | "h2";
}) {
  const Heading = level;

  return (
    <motion.header
      {...fadeUp}
      className={`mb-10 sm:mb-14 lg:mb-16 max-w-3xl ${
        align === "center" ? "mx-auto text-center" : "text-left"
      }`}
    >
      <Heading id={id} className="section-heading mb-4">
        {headline}
      </Heading>
      {subtext && <p className="section-subtext">{subtext}</p>}
    </motion.header>
  );
}
