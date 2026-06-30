"use client";

import FloatingElement from "@/components/landing/ui/FloatingElement";
import { longTermIncomeContent } from "@/config/abroaderLanding";

const CHART_BASELINE_Y = 120;
const CHART_TOP_Y = 20;
const CHART_MAX_AMOUNT = 45000;

function amountToY(amount: number): number {
  const range = CHART_BASELINE_Y - CHART_TOP_Y;
  return CHART_BASELINE_Y - (amount / CHART_MAX_AMOUNT) * range;
}

function buildChartPoints(): string {
  const metrics = longTermIncomeContent.chartMetrics;
  const year1Y = amountToY(metrics[0].amount);
  const year2Y = amountToY(metrics[1].amount);
  const year3Y = amountToY(metrics[2].amount);

  return [
    `0,${CHART_BASELINE_Y}`,
    `60,${Math.round(year1Y)}`,
    `120,${Math.round((year1Y + year2Y) / 2)}`,
    `180,${Math.round(year2Y)}`,
    `270,${Math.round((year2Y + year3Y) / 2)}`,
    `360,${Math.round(year3Y)}`,
  ].join(" ");
}

export default function RecurringIncomeChart() {
  const points = buildChartPoints();
  const areaPoints = `0,${CHART_BASELINE_Y} ${points} 360,${CHART_BASELINE_Y}`;

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
            <stop offset="0%" stopColor="rgba(126, 200, 212, 0.3)" />
            <stop offset="100%" stopColor="rgba(126, 200, 212, 0)" />
          </linearGradient>
        </defs>
        <polygon points={areaPoints} fill="url(#chartGradient)" />
        <polyline
          points={points}
          fill="none"
          stroke="#7ec8d4"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {[0, 180, 360].map((x) => (
          <line
            key={x}
            x1={x}
            y1={CHART_BASELINE_Y}
            x2={x}
            y2={CHART_BASELINE_Y + 5}
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
