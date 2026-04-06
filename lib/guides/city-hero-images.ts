import manifest from "./city-hero-manifest.json";

/** Local `/public/images/guide-cities/...` path for Top Nomad Hubs, when generated. */
export function getCityHeroImagePath(slug: string, cityName: string): string | undefined {
  const key = `${slug}::${cityName}`;
  return (manifest as Record<string, string>)[key];
}
