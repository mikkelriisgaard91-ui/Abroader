"use client";

import { longTermIncomeContent } from "@/config/abroaderLanding";

const CHART_BASELINE_Y = 118;
const CHART_TOP_Y = 16;
const CHART_MAX = 35;
const BAR_WIDTH = 20;
const BAR_GAP = 6;
const GROUP_CENTERS = [72, 180, 288];

function valueToHeight(value: number): number {
  const range = CHART_BASELINE_Y - CHART_TOP_Y;
  return (value / CHART_MAX) * range;
}

function buildAriaLabel(): string {
  const { chartSeries, chartMetrics } = longTermIncomeContent;
  const rows = chartMetrics
    .map(
      (metric) =>
        `${metric.label}: ${metric.clients} ${chartSeries.clients.label.toLowerCase()}, ${metric.placements} ${chartSeries.placements.label.toLowerCase()}, typical earnings ${metric.earnings}`
    )
    .join("; ");
  return `Practice growth over three years. ${rows}.`;
}

export default function RecurringIncomeChart() {
  const { chartTitle, chartSeries, chartMetrics } = longTermIncomeContent;

  return (
    <div
      className="relative w-full aspect-[4/3] max-w-md mx-auto lg:max-w-none"
      role="img"
      aria-label={buildAriaLabel()}
    >
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-accent/5 to-amber/5 border border-border/40" />

      <div className="absolute top-5 left-6 right-6">
        <p className="text-xs font-bold uppercase tracking-wider text-ink-subtle">{chartTitle}</p>
      </div>

      {chartMetrics.map((metric, i) => (
        <div
          key={`${metric.label}-earnings`}
          className="absolute z-10 -translate-x-1/2"
          style={{
            left: `${(GROUP_CENTERS[i] / 360) * 100}%`,
            top: "14%",
          }}
        >
          <div className="glass-panel-strong px-2.5 py-1.5 shadow-glass text-center min-w-[4.5rem]">
            <p className="text-[9px] font-semibold uppercase tracking-wider text-ink-subtle leading-none mb-1">
              Earnings
            </p>
            <p className="text-sm font-bold text-ink leading-none">{metric.earnings}</p>
          </div>
        </div>
      ))}

      <svg
        viewBox="0 0 360 150"
        className="absolute inset-4 w-[calc(100%-2rem)] h-[calc(100%-2rem)]"
        aria-hidden="true"
      >
        {[0, 10, 20, 30].map((tick) => {
          const y = CHART_BASELINE_Y - valueToHeight(tick);
          return (
            <g key={tick}>
              <line
                x1={24}
                y1={y}
                x2={336}
                y2={y}
                stroke="rgba(0, 22, 29, 0.06)"
                strokeWidth="1"
                strokeDasharray={tick === 0 ? undefined : "4 4"}
              />
              <text
                x={16}
                y={y + 3}
                textAnchor="end"
                className="fill-ink-subtle text-[8px] font-medium"
              >
                {tick}
              </text>
            </g>
          );
        })}

        {chartMetrics.map((metric, i) => {
          const cx = GROUP_CENTERS[i];
          const clientsHeight = valueToHeight(metric.clients);
          const placementsHeight = valueToHeight(metric.placements);
          const clientsX = cx - BAR_WIDTH - BAR_GAP / 2;
          const placementsX = cx + BAR_GAP / 2;

          return (
            <g key={metric.label}>
              <rect
                x={clientsX}
                y={CHART_BASELINE_Y - clientsHeight}
                width={BAR_WIDTH}
                height={clientsHeight}
                rx={4}
                fill={chartSeries.clients.color}
                opacity={0.85}
              />
              <rect
                x={placementsX}
                y={CHART_BASELINE_Y - placementsHeight}
                width={BAR_WIDTH}
                height={placementsHeight}
                rx={4}
                fill={chartSeries.placements.color}
              />
              <text
                x={clientsX + BAR_WIDTH / 2}
                y={CHART_BASELINE_Y - clientsHeight - 6}
                textAnchor="middle"
                className="fill-ink-muted text-[9px] font-bold"
              >
                {metric.clients}
              </text>
              <text
                x={placementsX + BAR_WIDTH / 2}
                y={CHART_BASELINE_Y - placementsHeight - 6}
                textAnchor="middle"
                className="fill-ink text-[9px] font-bold"
              >
                {metric.placements}
              </text>
              <text
                x={cx}
                y={CHART_BASELINE_Y + 14}
                textAnchor="middle"
                className="fill-ink-subtle text-[9px] font-semibold"
              >
                {metric.label}
              </text>
            </g>
          );
        })}
      </svg>

      <div className="absolute bottom-5 left-6 right-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
        {Object.values(chartSeries).map((series) => (
          <div key={series.label} className="flex items-center gap-2">
            <span
              className="w-2.5 h-2.5 rounded-sm shrink-0"
              style={{ backgroundColor: series.color }}
            />
            <span className="text-[10px] font-medium text-ink-muted">{series.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
