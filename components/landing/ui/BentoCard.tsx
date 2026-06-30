"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { cardHover, staggerItem } from "@/lib/motion/presets";

export default function BentoCard({
  children,
  className = "",
  span = 1,
}: {
  children: ReactNode;
  className?: string;
  span?: 1 | 2;
}) {
  return (
    <motion.div
      variants={staggerItem}
      {...cardHover}
      className={`glass-panel p-6 lg:p-8 transition-shadow duration-300 hover:shadow-card-hover ${
        span === 2 ? "sm:col-span-2" : ""
      } ${className}`}
    >
      {children}
    </motion.div>
  );
}
