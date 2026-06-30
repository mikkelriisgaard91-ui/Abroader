import type { Transition, Variants } from "framer-motion";

export const defaultTransition: Transition = {
  duration: 0.5,
  ease: [0.22, 1, 0.36, 1],
};

export const viewportOnce = {
  once: true,
  margin: "-80px" as const,
};

export const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: viewportOnce,
  transition: defaultTransition,
};

export const fadeIn = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: viewportOnce,
  transition: defaultTransition,
};

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: defaultTransition,
  },
};

export const cardHover = {
  whileHover: { y: -4, transition: { duration: 0.2 } },
};

export const floatAnimation = (delay = 0, duration = 6) => ({
  animate: {
    y: [0, -8, 0],
    transition: {
      duration,
      repeat: Infinity,
      ease: "easeInOut" as const,
      delay,
    },
  },
});

export function fadeUpWithDelay(delay = 0) {
  return {
    ...fadeUp,
    transition: { ...defaultTransition, delay },
  };
}
