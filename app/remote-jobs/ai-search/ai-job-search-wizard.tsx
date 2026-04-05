"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";
import {
  type QuestionnaireAnswers,
  QUESTION_STEPS,
} from "@/lib/remote-jobs/ai-job-search-questionnaire";
import { encodeAnswersToSegment } from "@/lib/remote-jobs/ai-search-criteria";
import { QuestionStep } from "./question-step";

const emptyAnswers = (): QuestionnaireAnswers => ({
  category: "",
  region: "",
  employmentType: "",
  seniority: "",
  salaryExpectation: "",
});

export function AiJobSearchWizard() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<QuestionnaireAnswers>(emptyAnswers);
  const [submitting, setSubmitting] = useState(false);

  const stepDef = QUESTION_STEPS[currentStep];
  const selectedValue = answers[stepDef.id];

  const handleSelect = useCallback(
    (value: string) => {
      const cleared: QuestionnaireAnswers = { ...answers, [stepDef.id]: value };
      for (let j = currentStep + 1; j < QUESTION_STEPS.length; j++) {
        const id = QUESTION_STEPS[j].id;
        cleared[id] = "";
      }
      setAnswers(cleared);

      if (currentStep < QUESTION_STEPS.length - 1) {
        setCurrentStep((s) => s + 1);
        return;
      }

      setSubmitting(true);
      const segment = encodeAnswersToSegment(cleared);
      router.push(`/remote-jobs/ai-search/matches/${segment}`);
    },
    [answers, currentStep, stepDef.id, router]
  );

  const handlePrevious = useCallback(() => {
    if (currentStep <= 0) return;
    setCurrentStep((s) => s - 1);
  }, [currentStep]);

  if (submitting) {
    return (
      <div
        className="flex min-h-[60vh] flex-col items-center justify-center gap-6 px-6"
        role="status"
        aria-live="polite"
      >
        <div
          className="h-12 w-12 animate-spin rounded-full border-2 border-rj-secondary/30 border-t-rj-primary"
          aria-hidden
        />
        <p className="max-w-sm text-center text-lg font-semibold text-rj-fg">Finding your matches…</p>
        <p className="max-w-xs text-center text-sm text-rj-muted">Hang tight while we load remote listings.</p>
      </div>
    );
  }

  return (
    <QuestionStep
      step={stepDef}
      stepIndex={currentStep}
      selectedValue={selectedValue}
      onSelect={handleSelect}
      onPrevious={handlePrevious}
      canGoBack={currentStep > 0}
    />
  );
}

export function AiJobSearchBackLink() {
  return (
    <div className="mb-10 text-center">
      <Link
        href="/remote-jobs"
        className="text-sm font-semibold text-rj-secondary underline-offset-4 hover:underline"
      >
        ← Back to remote jobs
      </Link>
    </div>
  );
}
