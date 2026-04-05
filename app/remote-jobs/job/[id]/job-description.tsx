/**
 * Renders plain-text job descriptions with readable typography (paragraphs, subheads, lists).
 */

import type { ReactNode } from "react";

const BULLET_PREFIX = /^(?:[-•*\u2022]|\d+[.)])\s+/;

/** Common section titles from job boards (Himalayas, Remotive, etc.). */
const SUBHEAD_KEYWORD =
  /^(Key\s+Responsibilities|Required\s+Qualifications|Preferred\s+Qualifications|Responsibilities|Required\s+Skills|Preferred\s+Skills|About\s+.+|Qualifications|Experience\s+Required|What\s+You\s+Will\s+Do|What\s+We\s+Offer|Benefits|Our\s+Values(?:\s+and\s+what\s+to\s+expect)?|Company\s+Description|Overview|Role\s+Overview|What\s+to\s+expect|Challenge|About\s+the\s+Team|Skills\s+and\s+Experience)/i;

const SMALL_WORDS = new Set([
  "and",
  "or",
  "of",
  "the",
  "in",
  "for",
  "to",
  "a",
  "an",
  "on",
  "at",
  "as",
  "with",
]);

function isBulletLine(line: string): boolean {
  const t = line.trim();
  if (!t) return false;
  return BULLET_PREFIX.test(t);
}

function stripBullet(line: string): string {
  return line.trim().replace(BULLET_PREFIX, "").trim();
}

function splitAttribution(text: string): { body: string; attribution?: string } {
  const m = text.match(/(?:^|\r?\n)(Originally posted on[^\r\n]+)\s*$/im);
  if (!m || m.index === undefined || !m[1]) return { body: text };
  return {
    body: text.slice(0, m.index).trimEnd(),
    attribution: m[1].trim(),
  };
}

function isLikelySubhead(line: string): boolean {
  const t = line.trim();
  if (t.length < 4 || t.length > 92) return false;
  if (isBulletLine(t)) return false;
  if (t.endsWith(".")) return false;
  if (SUBHEAD_KEYWORD.test(t)) return true;
  if (t.includes(",") || t.includes(";")) return false;

  const words = t.split(/\s+/).filter(Boolean);
  if (words.length < 2 || words.length > 8) return false;

  const titleish = words.every((w) => {
    const core = w.replace(/^[^\w&]+|[^\w&]+$/g, "");
    if (!core) return true;
    if (SMALL_WORDS.has(core.toLowerCase())) return true;
    return /^[A-Z]/.test(core);
  });
  return titleish;
}

export function JobDescription({ text }: { text: string }) {
  const { body, attribution } = splitAttribution(text);
  const lines = body.split(/\r?\n/);
  const blocks: ReactNode[] = [];
  let i = 0;
  let blockIdx = 0;

  while (i < lines.length) {
    while (i < lines.length && lines[i].trim() === "") {
      i += 1;
    }
    if (i >= lines.length) break;

    if (isBulletLine(lines[i])) {
      const items: string[] = [];
      while (i < lines.length && isBulletLine(lines[i])) {
        items.push(stripBullet(lines[i]));
        i += 1;
      }
      blocks.push(
        <ul key={`ul-${blockIdx}`} className="rj-detail__list">
          {items.map((item, j) => (
            <li key={j}>{item}</li>
          ))}
        </ul>
      );
      blockIdx += 1;
      continue;
    }

    if (isLikelySubhead(lines[i])) {
      const title = lines[i].trim();
      i += 1;
      blocks.push(
        <h3 key={`h-${blockIdx}`} className="rj-detail__subhead">
          {title}
        </h3>
      );
      blockIdx += 1;
      continue;
    }

    const para: string[] = [];
    while (
      i < lines.length &&
      lines[i].trim() !== "" &&
      !isBulletLine(lines[i]) &&
      !isLikelySubhead(lines[i])
    ) {
      para.push(lines[i].trim());
      i += 1;
    }
    if (para.length > 0) {
      blocks.push(
        <p key={`p-${blockIdx}`} className="rj-detail__para">
          {para.join(" ")}
        </p>
      );
      blockIdx += 1;
    }
  }

  return (
    <div className="rj-detail__prose-stack">
      <div className="rj-detail__prose-inner">{blocks}</div>
      {attribution ? (
        <p className="rj-detail__attribution">{attribution}</p>
      ) : null}
    </div>
  );
}
