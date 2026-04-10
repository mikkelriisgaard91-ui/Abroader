import { PROCESS_STEPS, RECRUITER_CONTACT_URL } from "../../content";

export function LanguageJobRecruitmentSteps() {
  return (
    <section
      className="mb-8 rounded-2xl border border-white/10 bg-rj-surface-high/35 px-5 py-6 backdrop-blur-sm md:px-6"
      aria-labelledby="lj-recruitment-steps-heading"
    >
      <h2 id="lj-recruitment-steps-heading" className="font-rj-headline mb-4 text-lg font-bold text-rj-fg">
        How hiring works
      </h2>
      <p className="mb-5 text-sm text-rj-muted">
        Abroader supports your application end-to-end — here&apos;s what usually happens after you click apply.
      </p>
      <ol className="space-y-4">
        {PROCESS_STEPS.map((s) => (
          <li key={s.step} className="flex gap-4">
            <span
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-rj-primary text-sm font-bold text-rj-on-primary"
              aria-hidden
            >
              {s.step}
            </span>
            <div className="min-w-0 pt-0.5">
              <h3 className="text-base font-bold text-rj-fg">{s.title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-rj-muted">{s.body}</p>
              {s.step === 2 ? (
                <p className="mt-2 text-sm">
                  <a
                    href={RECRUITER_CONTACT_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-rj-primary underline-offset-2 hover:underline"
                  >
                    Speak to a recruiter
                  </a>{" "}
                  anytime if you have questions before applying.
                </p>
              ) : null}
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
