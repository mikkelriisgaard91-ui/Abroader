import type { CountryGuide } from "./types";

export type { CountryGuide } from "./types";
export { getHeroPills, HERO_PILL_SRC } from "./hero-pills";
import { albania } from "./countries/albania";
import { antiguaAndBarbuda } from "./countries/antigua-and-barbuda";
import { argentina } from "./countries/argentina";
import { armenia } from "./countries/armenia";
import { australia } from "./countries/australia";
import { austria } from "./countries/austria";
import { bahamas } from "./countries/bahamas";
import { barbados } from "./countries/barbados";
import { belgium } from "./countries/belgium";
import { belize } from "./countries/belize";
import { bolivia } from "./countries/bolivia";
import { bosnia } from "./countries/bosnia";
import { brazil } from "./countries/brazil";
import { bulgaria } from "./countries/bulgaria";
import { canada } from "./countries/canada";
import { cambodia } from "./countries/cambodia";
import { chile } from "./countries/chile";
import { china } from "./countries/china";
import { colombia } from "./countries/colombia";
import { costaRica } from "./countries/costa-rica";
import { croatia } from "./countries/croatia";
import { cuba } from "./countries/cuba";
import { cyprus } from "./countries/cyprus";
import { czechia } from "./countries/czechia";
import { denmark } from "./countries/denmark";
import { dominica } from "./countries/dominica";
import { dominicanRepublic } from "./countries/dominican-republic";
import { ecuador } from "./countries/ecuador";
import { elSalvador } from "./countries/el-salvador";
import { estonia } from "./countries/estonia";
import { micronesia } from "./countries/micronesia";
import { fiji } from "./countries/fiji";
import { finland } from "./countries/finland";
import { france } from "./countries/france";
import { georgia } from "./countries/georgia";
import { germany } from "./countries/germany";
import { greece } from "./countries/greece";
import { grenada } from "./countries/grenada";
import { guatemala } from "./countries/guatemala";
import { guyana } from "./countries/guyana";
import { haiti } from "./countries/haiti";
import { honduras } from "./countries/honduras";
import { hungary } from "./countries/hungary";
import { iceland } from "./countries/iceland";
import { india } from "./countries/india";
import { indonesia } from "./countries/indonesia";
import { ireland } from "./countries/ireland";
import { italy } from "./countries/italy";
import { jamaica } from "./countries/jamaica";
import { japan } from "./countries/japan";
import { kiribati } from "./countries/kiribati";
import { kosovo } from "./countries/kosovo";
import { laos } from "./countries/laos";
import { latvia } from "./countries/latvia";
import { lithuania } from "./countries/lithuania";
import { luxembourg } from "./countries/luxembourg";
import { malta } from "./countries/malta";
import { malaysia } from "./countries/malaysia";
import { marshallIslands } from "./countries/marshall-islands";
import { mexico } from "./countries/mexico";
import { moldova } from "./countries/moldova";
import { mongolia } from "./countries/mongolia";
import { montenegro } from "./countries/montenegro";
import { nauru } from "./countries/nauru";
import { nepal } from "./countries/nepal";
import { netherlands } from "./countries/netherlands";
import { newZealand } from "./countries/new-zealand";
import { nicaragua } from "./countries/nicaragua";
import { northMacedonia } from "./countries/north-macedonia";
import { norway } from "./countries/norway";
import { palau } from "./countries/palau";
import { panama } from "./countries/panama";
import { papuaNewGuinea } from "./countries/papua-new-guinea";
import { paraguay } from "./countries/paraguay";
import { peru } from "./countries/peru";
import { philippines } from "./countries/philippines";
import { poland } from "./countries/poland";
import { portugal } from "./countries/portugal";
import { romania } from "./countries/romania";
import { saintKittsAndNevis } from "./countries/saint-kitts-and-nevis";
import { saintLucia } from "./countries/saint-lucia";
import { saintVincentAndTheGrenadines } from "./countries/saint-vincent-and-the-grenadines";
import { samoa } from "./countries/samoa";
import { scotland } from "./countries/scotland";
import { serbia } from "./countries/serbia";
import { singapore } from "./countries/singapore";
import { slovakia } from "./countries/slovakia";
import { slovenia } from "./countries/slovenia";
import { solomonIslands } from "./countries/solomon-islands";
import { southKorea } from "./countries/south-korea";
import { spain } from "./countries/spain";
import { sriLanka } from "./countries/sri-lanka";
import { suriname } from "./countries/suriname";
import { sweden } from "./countries/sweden";
import { switzerland } from "./countries/switzerland";
import { taiwan } from "./countries/taiwan";
import { thailand } from "./countries/thailand";
import { tonga } from "./countries/tonga";
import { trinidadAndTobago } from "./countries/trinidad-and-tobago";
import { tuvalu } from "./countries/tuvalu";
import { turkey } from "./countries/turkey";
import { ukraine } from "./countries/ukraine";
import { unitedArabEmirates } from "./countries/united-arab-emirates";
import { uk } from "./countries/uk";
import { unitedStates } from "./countries/united-states";
import { uruguay } from "./countries/uruguay";
import { vanuatu } from "./countries/vanuatu";
import { venezuela } from "./countries/venezuela";
import { vietnam } from "./countries/vietnam";

/** Alphabetical by country name — stable for UI and static generation. */
export const allGuides: CountryGuide[] = [
  albania,
  antiguaAndBarbuda,
  argentina,
  armenia,
  australia,
  austria,
  bahamas,
  barbados,
  belgium,
  belize,
  bolivia,
  bosnia,
  brazil,
  bulgaria,
  cambodia,
  canada,
  chile,
  china,
  colombia,
  costaRica,
  croatia,
  cuba,
  cyprus,
  czechia,
  denmark,
  dominica,
  dominicanRepublic,
  ecuador,
  elSalvador,
  estonia,
  micronesia,
  fiji,
  finland,
  france,
  georgia,
  germany,
  greece,
  grenada,
  guatemala,
  guyana,
  haiti,
  honduras,
  hungary,
  iceland,
  india,
  indonesia,
  ireland,
  italy,
  jamaica,
  japan,
  kiribati,
  kosovo,
  laos,
  latvia,
  lithuania,
  luxembourg,
  malta,
  malaysia,
  marshallIslands,
  mexico,
  moldova,
  mongolia,
  montenegro,
  nauru,
  nepal,
  netherlands,
  newZealand,
  nicaragua,
  northMacedonia,
  norway,
  palau,
  panama,
  papuaNewGuinea,
  paraguay,
  peru,
  philippines,
  poland,
  portugal,
  romania,
  saintKittsAndNevis,
  saintLucia,
  saintVincentAndTheGrenadines,
  samoa,
  scotland,
  serbia,
  slovakia,
  slovenia,
  solomonIslands,
  southKorea,
  spain,
  sriLanka,
  suriname,
  sweden,
  switzerland,
  taiwan,
  thailand,
  tonga,
  trinidadAndTobago,
  tuvalu,
  turkey,
  ukraine,
  unitedArabEmirates,
  uk,
  unitedStates,
  uruguay,
  vanuatu,
  venezuela,
  vietnam,
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
