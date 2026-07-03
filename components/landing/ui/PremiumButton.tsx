"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import type { ReactNode } from "react";

type PremiumButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  external?: boolean;
};

export default function PremiumButton({
  href,
  children,
  variant = "primary",
  className = "",
  external = false,
}: PremiumButtonProps) {
  const baseClass =
    variant === "primary"
      ? "btn-primary btn-ripple"
      : variant === "secondary"
        ? "inline-flex items-center justify-center gap-2 min-h-11 font-semibold text-base px-7 py-3 rounded-full border border-base/20 bg-base/10 text-base backdrop-blur-sm transition-all duration-300 hover:bg-base/20 btn-ripple"
        : "btn-ghost btn-ripple";

  const classes = `${baseClass} ${className}`;

  if (external || href.startsWith("http")) {
    return (
      <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        whileTap={{ scale: 0.98 }}
        className={classes}
      >
        {children}
      </motion.a>
    );
  }

  if (href.startsWith("#")) {
    return (
      <motion.a href={href} whileTap={{ scale: 0.98 }} className={classes}>
        {children}
      </motion.a>
    );
  }

  return (
    <motion.div whileTap={{ scale: 0.98 }} className="inline-flex">
      <Link href={href} className={classes}>
        {children}
      </Link>
    </motion.div>
  );
}
