"use client";

import { motion, useMotionValue, useTransform, useReducedMotion } from "framer-motion";
import {
  Globe,
  Laptop,
  MapPin,
  Plane,
  TrendingUp,
  Wifi,
} from "lucide-react";
import FloatingElement from "@/components/landing/ui/FloatingElement";

function GlobeRoutes() {
  return (
    <svg
      viewBox="0 0 360 360"
      className="w-full h-full"
      aria-hidden="true"
    >
      <circle
        cx="180"
        cy="180"
        r="130"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        className="text-border"
      />
      <circle
        cx="180"
        cy="180"
        r="130"
        fill="url(#globeFill)"
        className="opacity-40"
      />
      <ellipse
        cx="180"
        cy="180"
        rx="130"
        ry="42"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.75"
        className="text-ink/10"
      />
      <ellipse
        cx="180"
        cy="180"
        rx="42"
        ry="130"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.75"
        className="text-ink/10"
      />
      <path
        d="M70 140 Q120 90 180 110 T290 130"
        fill="none"
        stroke="#7ec8d4"
        strokeWidth="2"
        strokeLinecap="round"
        strokeDasharray="6 8"
        opacity="0.7"
      />
      <path
        d="M100 220 Q170 180 240 200 T310 170"
        fill="none"
        stroke="#fdbb37"
        strokeWidth="2"
        strokeLinecap="round"
        strokeDasharray="6 8"
        opacity="0.6"
      />
      <circle cx="110" cy="140" r="5" fill="#7ec8d4" />
      <circle cx="290" cy="130" r="5" fill="#7ec8d4" />
      <circle cx="100" cy="220" r="4" fill="#fdbb37" />
      <circle cx="310" cy="170" r="4" fill="#fdbb37" />
      <defs>
        <radialGradient id="globeFill">
          <stop offset="0%" stopColor="rgba(126, 200, 212, 0.08)" />
          <stop offset="100%" stopColor="rgba(245, 166, 35, 0.02)" />
        </radialGradient>
      </defs>
    </svg>
  );
}

function ThemeCard({
  icon: Icon,
  title,
  subtitle,
  detail,
  accent = false,
}: {
  icon: typeof Globe;
  title: string;
  subtitle: string;
  detail?: string;
  accent?: boolean;
}) {
  return (
    <div
      className={`glass-panel-strong p-4 shadow-glass min-w-[148px] max-w-[180px] ${
        accent ? "glow-ring" : ""
      }`}
    >
      <div
        className={`w-9 h-9 rounded-xl flex items-center justify-center mb-3 ${
          accent ? "bg-accent text-white" : "bg-accent/10"
        }`}
      >
        <Icon
          className={`w-4 h-4 ${accent ? "text-white" : "text-accent"}`}
          strokeWidth={1.75}
        />
      </div>
      <p className="text-[10px] font-bold uppercase tracking-wider text-ink-subtle mb-1">
        {title}
      </p>
      <p className="text-sm font-bold text-ink leading-snug">{subtitle}</p>
      {detail && (
        <p className="text-[11px] text-ink-muted mt-1 leading-relaxed">{detail}</p>
      )}
    </div>
  );
}

export default function HeroIllustration() {
  const reducedMotion = useReducedMotion();
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useTransform(mouseY, [-200, 200], [3, -3]);
  const rotateY = useTransform(mouseX, [-200, 200], [-3, 3]);

  return (
    <motion.div
      className="relative w-full max-w-lg mx-auto lg:max-w-none aspect-square lg:aspect-[4/3] lg:min-h-[480px]"
      onMouseMove={
        reducedMotion
          ? undefined
          : (e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              mouseX.set(e.clientX - rect.left - rect.width / 2);
              mouseY.set(e.clientY - rect.top - rect.height / 2);
            }
      }
      style={reducedMotion ? undefined : { rotateX, rotateY, transformPerspective: 1200 }}
    >
      <div className="absolute inset-[12%] flex items-center justify-center opacity-90">
        <GlobeRoutes />
      </div>

      <FloatingElement delay={0} className="absolute top-[4%] left-[2%] z-20">
        <ThemeCard
          icon={Laptop}
          title="Remote living"
          subtitle="Work from anywhere"
          detail="Beach · city · mountains"
        />
      </FloatingElement>

      <FloatingElement delay={0.6} duration={7} className="absolute top-[6%] right-[0%] z-20">
        <ThemeCard
          icon={TrendingUp}
          title="Financial freedom"
          subtitle="No income ceiling"
          detail="€3,500+ per placement"
          accent
        />
      </FloatingElement>

      <FloatingElement delay={1.1} className="absolute bottom-[18%] left-[0%] z-20">
        <ThemeCard
          icon={Plane}
          title="Travel & freedom"
          subtitle="Help people move abroad"
          detail="Change lives worldwide"
        />
      </FloatingElement>

      <FloatingElement delay={1.6} duration={8} className="absolute bottom-[8%] right-[2%] z-20">
        <ThemeCard
          icon={Globe}
          title="Your business"
          subtitle="Your schedule, your rules"
          detail="Build on your terms"
        />
      </FloatingElement>

      <FloatingElement delay={0.3} duration={5.5} className="absolute top-[42%] left-[8%] z-10">
        <div className="glass-panel px-3 py-2 flex items-center gap-2 shadow-glass">
          <Wifi className="w-3.5 h-3.5 text-accent" />
          <span className="text-[11px] font-semibold text-ink">Remote · Online</span>
        </div>
      </FloatingElement>

      <FloatingElement delay={0.9} duration={6.5} className="absolute top-[38%] right-[10%] z-10">
        <div className="glass-panel px-3 py-2 flex items-center gap-2 shadow-glass">
          <MapPin className="w-3.5 h-3.5 text-accent" />
          <span className="text-[11px] font-semibold text-ink">Lisbon → Dubai</span>
        </div>
      </FloatingElement>

      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full bg-accent/10 blur-3xl"
        aria-hidden="true"
      />
    </motion.div>
  );
}
