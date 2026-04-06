import type { CountryGuide } from "./types";

export type { CountryGuide } from "./types";
import { albania } from "./countries/albania";
import { armenia } from "./countries/armenia";
import { austria } from "./countries/austria";
import { belgium } from "./countries/belgium";
import { bosnia } from "./countries/bosnia";
import { bulgaria } from "./countries/bulgaria";
import { croatia } from "./countries/croatia";
import { cyprus } from "./countries/cyprus";
import { czechia } from "./countries/czechia";
import { denmark } from "./countries/denmark";
import { estonia } from "./countries/estonia";
import { finland } from "./countries/finland";
import { france } from "./countries/france";
import { georgia } from "./countries/georgia";
import { germany } from "./countries/germany";
import { greece } from "./countries/greece";
import { hungary } from "./countries/hungary";
import { iceland } from "./countries/iceland";
import { ireland } from "./countries/ireland";
import { italy } from "./countries/italy";
import { kosovo } from "./countries/kosovo";
import { latvia } from "./countries/latvia";
import { lithuania } from "./countries/lithuania";
import { luxembourg } from "./countries/luxembourg";
import { malta } from "./countries/malta";
import { moldova } from "./countries/moldova";
import { montenegro } from "./countries/montenegro";
import { netherlands } from "./countries/netherlands";
import { northMacedonia } from "./countries/north-macedonia";
import { norway } from "./countries/norway";
import { poland } from "./countries/poland";
import { portugal } from "./countries/portugal";
import { romania } from "./countries/romania";
import { scotland } from "./countries/scotland";
import { serbia } from "./countries/serbia";
import { slovakia } from "./countries/slovakia";
import { slovenia } from "./countries/slovenia";
import { spain } from "./countries/spain";
import { sweden } from "./countries/sweden";
import { switzerland } from "./countries/switzerland";
import { turkey } from "./countries/turkey";
import { ukraine } from "./countries/ukraine";
import { uk } from "./countries/uk";

/** Alphabetical by country name — stable for UI and static generation. */
export const allGuides: CountryGuide[] = [
  albania,
  armenia,
  austria,
  belgium,
  bosnia,
  bulgaria,
  croatia,
  cyprus,
  czechia,
  denmark,
  estonia,
  finland,
  france,
  georgia,
  germany,
  greece,
  hungary,
  iceland,
  ireland,
  italy,
  kosovo,
  latvia,
  lithuania,
  luxembourg,
  malta,
  moldova,
  montenegro,
  netherlands,
  northMacedonia,
  norway,
  poland,
  portugal,
  romania,
  scotland,
  serbia,
  slovakia,
  slovenia,
  spain,
  sweden,
  switzerland,
  turkey,
  ukraine,
  uk,
];

export function getGuideBySlug(slug: string): CountryGuide | undefined {
  return allGuides.find((g) => g.slug === slug);
}

export function guideHasDigitalNomadVisa(guide: CountryGuide): boolean {
  return guide.visaOptions.some((o) => /digital nomad/i.test(o.name));
}

/** Deterministic peers for “related guides” — next countries in alphabetical slug order (wrap). */
export function getRelatedGuides(slug: string, count = 3): CountryGuide[] {
  const sorted = [...allGuides].sort((a, b) => a.slug.localeCompare(b.slug));
  const idx = sorted.findIndex((g) => g.slug === slug);
  if (idx === -1) return sorted.slice(0, count);
  const out: CountryGuide[] = [];
  for (let i = 1; i < sorted.length && out.length < count; i++) {
    const g = sorted[(idx + i) % sorted.length];
    if (g.slug !== slug) out.push(g);
  }
  return out;
}
