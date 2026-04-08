"use client";

import { useId, useState } from "react";

export function ColivingFaq({ items }: { items: { question: string; answer: string }[] }) {
  const baseId = useId();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="mx-auto max-w-[720px] divide-y divide-white/10 rounded-2xl border border-white/10 bg-rj-surface-high/50">
      {items.map((item, i) => {
        const open = openIndex === i;
        const panelId = `${baseId}-panel-${i}`;
        const buttonId = `${baseId}-btn-${i}`;
        return (
          <div key={item.question}>
            <h3 className="font-rj-headline m-0">
              <button
                id={buttonId}
                type="button"
                aria-expanded={open}
                aria-controls={panelId}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-base font-bold text-rj-fg transition hover:bg-white/[0.04] sm:px-6 sm:py-5 sm:text-lg"
                onClick={() => setOpenIndex(open ? null : i)}
              >
                <span className="text-pretty pr-2">{item.question}</span>
                <span
                  className={`shrink-0 text-xl font-light text-rj-secondary transition-transform duration-200 ${open ? "rotate-45" : ""}`}
                  aria-hidden
                >
                  +
                </span>
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              hidden={!open}
              className={open ? "block" : "hidden"}
            >
              <p className="px-5 pb-5 pl-5 text-pretty leading-relaxed text-rj-muted sm:px-6 sm:pb-6 sm:pr-8">
                {item.answer}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
