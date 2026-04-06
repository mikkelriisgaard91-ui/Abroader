"use client";

import { useState } from "react";

export function NocturnalGuideFAQ({
  faqs,
}: {
  faqs: { question: string; answer: string }[];
}) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="flex flex-col gap-3">
      {faqs.map((item, i) => {
        const isOpen = open === i;
        return (
          <div
            key={i}
            className="rounded-2xl border border-gg-outline-variant/30 bg-gg-surface-container-high/80 overflow-hidden"
          >
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="w-full text-left px-5 py-4 flex justify-between items-center gap-3 bg-transparent border-none cursor-pointer text-gg-on-surface font-gg-body"
            >
              <span className="font-gg-headline font-bold text-gg-secondary text-base pr-2">{item.question}</span>
              <span className="material-symbols-gg text-gg-primary shrink-0 text-xl">{isOpen ? "expand_less" : "expand_more"}</span>
            </button>
            {isOpen ? (
              <div className="px-5 pb-4 text-gg-on-surface-variant text-sm leading-relaxed border-t border-gg-outline-variant/20 pt-3">
                {item.answer}
              </div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
