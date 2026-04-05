import type { Metadata } from "next";
import { AiJobSearchBackLink, AiJobSearchWizard } from "./ai-job-search-wizard";

export const metadata: Metadata = {
  title: "AI job search — Abroader",
  description: "Answer a few questions to find remote roles that fit you.",
};

const glassPanel =
  "rounded-xl border border-rj-secondary/15 bg-rj-elevated/45 backdrop-blur-[12px]";

export default function AiJobSearchPage() {
  return (
    <main className="relative min-h-[100dvh] w-full overflow-x-hidden bg-rj-bg px-6 py-12 md:py-16">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-64 bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(126,200,212,0.08),transparent_55%)]"
        aria-hidden
      />
      <div className="relative z-[1] mx-auto flex max-w-2xl flex-col items-center">
        <AiJobSearchBackLink />
        <div className={`w-full p-8 md:p-10 ${glassPanel}`}>
          <p className="font-rj-accent mb-2 text-center text-sm text-rj-secondary">Remote AI job search</p>
          <AiJobSearchWizard />
        </div>
      </div>
    </main>
  );
}
