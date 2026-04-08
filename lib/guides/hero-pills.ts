import type { CountryGuide } from "./types";

/** Heroicons v2 outline (MIT), tinted for nocturnal guide hero — distinct shapes per topic. */
export const HERO_PILL_SRC = [
  "/guides/hero-pills/cost.svg",
  "/guides/hero-pills/visa.svg",
  "/guides/hero-pills/internet.svg",
] as const;

function costPillLabel(cost: CountryGuide["costOfLiving"]): string {
  switch (cost) {
    case "Low":
      return "LOW COST";
    case "Medium":
      return "MODERATE COST";
    case "High":
      return "HIGHER COST";
    case "Very High":
      return "PREMIUM COST";
    default:
      return "MODERATE COST";
  }
}

function visaPillLabel(visa: CountryGuide["visaDifficulty"]): string {
  switch (visa) {
    case "Easy":
      return "EASY VISA";
    case "Medium":
      return "PLAN VISA";
    case "Hard":
      return "VISA RESEARCH";
    default:
      return "PLAN VISA";
  }
}

function internetPillLabel(speed: CountryGuide["internetSpeed"]): string {
  switch (speed) {
    case "Excellent":
    case "Good":
      return "GOOD INTERNET";
    case "Average":
      return "OK INTERNET";
    case "Poor":
      return "CHECK INTERNET";
    default:
      return "CHECK INTERNET";
  }
}

/** Cost / visa / internet hero or card pills with SVG paths + display labels (all country guides). */
export function getHeroPills(guide: CountryGuide): { src: string; label: string }[] {
  return [
    { src: HERO_PILL_SRC[0], label: costPillLabel(guide.costOfLiving) },
    { src: HERO_PILL_SRC[1], label: visaPillLabel(guide.visaDifficulty) },
    { src: HERO_PILL_SRC[2], label: internetPillLabel(guide.internetSpeed) },
  ];
}
