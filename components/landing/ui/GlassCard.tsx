"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { cardHover } from "@/lib/motion/presets";

export default function GlassCard({
  children,
  className = "",
  hover = true,
}: {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}) {
  const classes = `glass-panel p-6 lg:p-8 transition-shadow duration-300 ${
    hover ? "hover:shadow-card-hover" : ""
  } ${className}`;

  if (!hover) {
    return <div className={classes}>{children}</div>;
  }

  return (
    <motion.div {...cardHover} className={classes}>
      {children}
    </motion.div>
  );
}
