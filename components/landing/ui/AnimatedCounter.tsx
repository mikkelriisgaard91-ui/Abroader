"use client";

import { motion, useInView, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

export default function AnimatedCounter({
  value,
  prefix = "",
  suffix = "",
  className = "",
}: {
  value: number;
  prefix?: string;
  suffix?: string;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const spring = useSpring(0, { duration: 1200, bounce: 0 });
  const display = useTransform(spring, (v) =>
    Math.round(v).toLocaleString("en-US")
  );

  useEffect(() => {
    if (inView) spring.set(value);
  }, [inView, spring, value]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      <motion.span>{display}</motion.span>
      {suffix}
    </span>
  );
}

export function AnimatedRange({
  min,
  max,
  prefix = "",
  suffix = "",
  className = "",
}: {
  min: number;
  max: number | null;
  prefix?: string;
  suffix?: string;
  className?: string;
}) {
  if (max === null) {
    return (
      <span className={className}>
        {prefix}
        <AnimatedCounter value={min} />
        {suffix}
      </span>
    );
  }

  return (
    <span className={className}>
      {prefix}
      <AnimatedCounter value={min} />
      {"–"}
      {prefix}
      <AnimatedCounter value={max} />
    </span>
  );
}
