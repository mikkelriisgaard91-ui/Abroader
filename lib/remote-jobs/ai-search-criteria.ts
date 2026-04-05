import type { QuestionnaireAnswers } from "@/lib/remote-jobs/ai-job-search-questionnaire";

const VERSION = 1;

export type EncodedCriteria = string;

function toBase64Url(json: string): string {
  const bytes = new TextEncoder().encode(json);
  let binary = "";
  bytes.forEach((b) => {
    binary += String.fromCharCode(b);
  });
  return btoa(binary).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

function fromBase64Url(segment: string): string | null {
  try {
    const padded = segment.replace(/-/g, "+").replace(/_/g, "/");
    const pad = padded.length % 4 === 0 ? "" : "=".repeat(4 - (padded.length % 4));
    const bin = atob(padded + pad);
    const bytes = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
    return new TextDecoder().decode(bytes);
  } catch {
    return null;
  }
}

function isQuestionnaireAnswers(x: unknown): x is QuestionnaireAnswers {
  if (!x || typeof x !== "object") return false;
  const o = x as Record<string, unknown>;
  return (
    typeof o.category === "string" &&
    typeof o.region === "string" &&
    typeof o.employmentType === "string" &&
    typeof o.seniority === "string" &&
    typeof o.salaryExpectation === "string"
  );
}

export function encodeAnswersToSegment(answers: QuestionnaireAnswers): EncodedCriteria {
  const payload = { v: VERSION, a: answers };
  return toBase64Url(JSON.stringify(payload));
}

export function decodeSegmentToAnswers(segment: string): QuestionnaireAnswers | null {
  const raw = fromBase64Url(segment.trim());
  if (!raw) return null;
  let parsed: unknown;
  try {
    parsed = JSON.parse(raw);
  } catch {
    return null;
  }
  if (!parsed || typeof parsed !== "object") return null;
  const o = parsed as { v?: unknown; a?: unknown };
  if (o.v !== VERSION || !o.a) return null;
  if (!isQuestionnaireAnswers(o.a)) return null;
  return o.a;
}
