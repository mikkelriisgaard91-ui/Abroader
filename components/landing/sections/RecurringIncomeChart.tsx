"use client";

import FloatingElement from "@/components/landing/ui/FloatingElement";
import { longTermIncomeContent } from "@/config/abroaderLanding";

export default function RecurringIncomeChart() {
  const points = "0,120 60,110 120,95 180,75 240,55 300,35 360,20";
  const areaPoints = `0,120 ${points} 360,120`;

  return (
    <div className="relative w-full aspect-[4/3] max-w-md mx-auto lg:max-w-none">
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-accent/5 to-amber/5 border border-border/40" />

      <svg
        viewBox="0 0 360 140"
        className="absolute inset-4 w-[calc(100%-2rem)] h-[calc(100%-2rem)]"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="rgba(232, 90, 47, 0.3)" />
            <stop offset="100%" stopColor="rgba(232, 90, 47, 0)" />
          </linearGradient>
        </defs>
        <polygon points={areaPoints} fill="url(#chartGradient)" />
        <polyline
          points={points}
          fill="none"
          stroke="#e85a2f"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {[0, 60, 120, 180, 240, 300, 360].map((x) => (
          <line
            key={x}
            x1={x}
            y1="120"
            x2={x}
            y2="125"
            stroke="rgba(26,26,24,0.1)"
            strokeWidth="1"
          />
        ))}
      </svg>

      {longTermIncomeContent.chartMetrics.map((metric, i) => (
        <FloatingElement
          key={metric.label}
          delay={i * 0.5}
          className={`absolute z-10 ${
            i === 0 ? "bottom-[20%] left-[8%]" : i === 1 ? "top-[30%] right-[15%]" : "top-[12%] left-[45%]"
          }`}
        >
          <div className="glass-panel-strong px-3 py-2 shadow-glass">
            <p className="text-[10px] font-semibold uppercase tracking-wider text-ink-subtle">
              {metric.label}
            </p>
            <p className="text-sm font-bold text-accent">{metric.value}</p>
          </div>
        </FloatingElement>
      ))}

      <div className="absolute bottom-6 left-6 right-6 flex justify-between text-[10px] text-ink-subtle font-medium">
        <span>Year 1</span>
        <span>Year 2</span>
        <span>Year 3</span>
      </div>
    </div>
  );
}
