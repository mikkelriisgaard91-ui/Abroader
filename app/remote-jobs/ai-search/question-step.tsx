"use client";

import type { QuestionStepDef } from "@/lib/remote-jobs/ai-job-search-questionnaire";
import { AI_JOB_SEARCH_TOTAL_STEPS } from "@/lib/remote-jobs/ai-job-search-questionnaire";

type Props = {
  step: QuestionStepDef;
  stepIndex: number;
  selectedValue: string;
  onSelect: (value: string) => void;
  onPrevious: () => void;
  canGoBack: boolean;
};

export function QuestionStep({
  step,
  stepIndex,
  selectedValue,
  onSelect,
  onPrevious,
  canGoBack,
}: Props) {
  return (
    <div className="w-full max-w-lg">
      <p className="mb-2 text-center text-xs font-bold uppercase tracking-widest text-rj-muted">
        Step {stepIndex + 1} of {AI_JOB_SEARCH_TOTAL_STEPS}
      </p>
      <h1 className="font-rj-headline mb-8 text-center text-2xl font-bold leading-tight text-rj-fg md:text-3xl">
        {step.prompt}
      </h1>
      <div className="flex flex-col gap-3" role="group" aria-labelledby={`q-${step.id}`}>
        <span id={`q-${step.id}`} className="sr-only">
          {step.prompt}
        </span>
        {step.options.map((opt) => {
          const isSelected = selectedValue === opt.value;
          return (
            <button
              key={opt.value}
              type="button"
              onClick={() => onSelect(opt.value)}
              className={`min-h-[52px] w-full rounded-xl border px-5 py-4 text-left text-base font-semibold transition-all active:scale-[0.99] md:min-h-14 md:text-lg ${
                isSelected
                  ? "border-rj-primary/60 bg-rj-primary/15 text-rj-fg ring-2 ring-rj-primary/35"
                  : "border-white/10 bg-rj-elevated/80 text-rj-fg hover:border-rj-secondary/30 hover:bg-rj-surface-high/80"
              }`}
            >
              {opt.label}
            </button>
          );
        })}
      </div>
      <div className="mt-10 flex justify-center">
        <button
          type="button"
          onClick={onPrevious}
          disabled={!canGoBack}
          className={`text-sm font-semibold ${
            canGoBack
              ? "text-rj-secondary underline-offset-4 hover:underline"
              : "cursor-not-allowed text-rj-muted/50"
          }`}
        >
          Previous
        </button>
      </div>
    </div>
  );
}
