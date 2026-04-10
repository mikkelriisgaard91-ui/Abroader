import Link from "next/link";
import type { CountryGuide } from "@/lib/guides";
import {
  findCountryGuideForLocationHint,
  findMatchedCityInGuide,
  getPeerGuidesForComparison,
} from "@/lib/guides";

const usdCompact = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

function formatUsdMonthly(n: number): string {
  return `${usdCompact.format(n)}/mo`;
}

function oneLineExcerpt(text: string | undefined, max = 160): string | undefined {
  if (!text?.trim()) return undefined;
  const one = text.replace(/\s+/g, " ").trim();
  const cut = one.length <= max ? one : `${one.slice(0, max - 1).trimEnd()}…`;
  return cut;
}

/** Up to four scannable bullets from highlights, bestFor, and optionally culturalTips. */
function countryFactBullets(guide: CountryGuide): string[] {
  const out: string[] = [];
  for (const h of guide.highlights) {
    if (out.length >= 2) break;
    out.push(h);
  }
  for (const b of guide.bestFor) {
    if (out.length >= 4) break;
    if (!out.some((x) => x.toLowerCase().includes(b.toLowerCase()))) out.push(b);
  }
  if (guide.culturalTips && out.length < 4) {
    const ex = oneLineExcerpt(guide.culturalTips, 200);
    if (ex) out.push(ex);
  }
  return out.slice(0, 4);
}

function InsightsFallback() {
  return (
    <section
      className="mb-8 rounded-2xl border border-white/10 bg-rj-surface-high/35 px-5 py-6 backdrop-blur-sm md:px-6"
      aria-labelledby="lj-country-fallback-heading"
    >
      <h2 id="lj-country-fallback-heading" className="font-rj-headline mb-2 text-lg font-bold text-rj-fg">
        Destination context
      </h2>
      <p className="mb-3 text-sm leading-relaxed text-rj-muted">
        We couldn&apos;t match this role to one of our country guides from the location text alone. Browse
        relocation, cost-of-living, and visa notes for 100+ destinations.
      </p>
      <Link href="/guides" className="text-sm font-semibold text-rj-primary underline-offset-2 hover:underline">
        Browse country guides →
      </Link>
    </section>
  );
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-white/10 bg-rj-elevated/40 px-3 py-2.5">
      <div className="text-xs font-medium uppercase tracking-wide text-rj-muted">{label}</div>
      <div className="mt-1 text-sm font-semibold text-rj-fg">{value}</div>
    </div>
  );
}

function InsightsWithGuide({
  guide,
  peers,
  locationLabel,
}: {
  guide: CountryGuide;
  peers: CountryGuide[];
  locationLabel: string;
}) {
  const matchedCity = findMatchedCityInGuide(locationLabel, guide);
  const { costBreakdown } = guide;
  const factBullets = countryFactBullets(guide);

  const title = matchedCity ? (
    <>
      <span className="mr-2" aria-hidden>
        {guide.flag}
      </span>
      <span className="text-rj-fg">{matchedCity.name}</span>
      <span className="font-normal text-rj-muted"> · </span>
      <span className="font-normal text-rj-fg/90">{guide.country}</span>
    </>
  ) : (
    <>
      <span className="mr-2" aria-hidden>
        {guide.flag}
      </span>
      Living in {guide.country}
    </>
  );

  return (
    <section
      className="mb-8 rounded-2xl border border-white/10 bg-rj-surface-high/35 px-5 py-6 backdrop-blur-sm md:px-6"
      aria-labelledby="lj-country-insights-heading"
    >
      <h2 id="lj-country-insights-heading" className="font-rj-headline mb-1 text-xl font-bold text-rj-fg">
        {title}
      </h2>
      <p className="mb-5 text-sm text-rj-muted">
        City notes, cost breakdowns, and comparisons from our {guide.country} guide — general context for relocating
        (not specific to this employer).
      </p>

      {matchedCity ? (
        <div className="mb-6 rounded-xl border border-rj-secondary/25 bg-rj-elevated/30 px-4 py-4">
          <h3 className="mb-2 text-sm font-bold text-rj-secondary">About {matchedCity.name}</h3>
          <p className="mb-3 text-sm leading-relaxed text-rj-fg/95">{matchedCity.vibe}</p>
          <ul className="space-y-1.5 text-sm text-rj-fg/95">
            <li>
              <span className="text-rj-muted">Rent:</span> {matchedCity.avgRent}
            </li>
            <li>
              <span className="text-rj-muted">Coworking:</span> {matchedCity.coworkingSpaces}
            </li>
          </ul>
        </div>
      ) : null}

      {factBullets.length > 0 ? (
        <div className="mb-6">
          <h3 className="mb-2 text-sm font-bold text-rj-secondary">At a glance</h3>
          <ul className="list-inside list-disc space-y-1.5 text-sm leading-relaxed text-rj-fg/95">
            {factBullets.map((line, i) => (
              <li key={`fact-${i}`}>{line}</li>
            ))}
          </ul>
        </div>
      ) : null}

      <div className="mb-6 grid gap-4 md:grid-cols-2">
        <div>
          <h3 className="mb-2 text-sm font-bold text-rj-secondary">Monthly costs (indicative)</h3>
          <ul className="space-y-1.5 text-sm text-rj-fg/95">
            <li>
              <span className="text-rj-muted">Rent:</span> {costBreakdown.rent}
            </li>
            <li>
              <span className="text-rj-muted">Food:</span> {costBreakdown.food}
            </li>
            <li>
              <span className="text-rj-muted">Transport:</span> {costBreakdown.transport}
            </li>
            <li>
              <span className="text-rj-muted">Coworking:</span> {costBreakdown.coworking}
            </li>
          </ul>
        </div>
      </div>

      {peers.length > 0 ? (
        <div className="mb-6">
          <h3 className="mb-1 text-xs font-bold uppercase tracking-wide text-rj-muted">Regional cost snapshot</h3>
          <p className="mb-2 text-xs text-rj-muted">Same region, similar cost tier where possible.</p>
          <div className="overflow-x-auto rounded-xl border border-white/10">
            <table className="w-full min-w-[280px] text-left text-sm">
              <thead>
                <tr className="border-b border-white/10 bg-rj-elevated/50">
                  <th className="px-3 py-2 font-semibold text-rj-fg">Destination</th>
                  <th className="px-3 py-2 font-semibold text-rj-fg">Est. monthly</th>
                  <th className="px-3 py-2 font-semibold text-rj-fg">COL</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/5 bg-rj-primary/5">
                  <td className="px-3 py-2 font-medium text-rj-fg">
                    {guide.flag} {guide.country}
                  </td>
                  <td className="px-3 py-2 text-rj-fg">{formatUsdMonthly(guide.avgMonthlyCost)}</td>
                  <td className="px-3 py-2 text-rj-muted">{guide.costOfLiving}</td>
                </tr>
                {peers.map((p) => (
                  <tr key={p.slug} className="border-b border-white/5 last:border-0">
                    <td className="px-3 py-2 text-rj-fg">
                      {p.flag} {p.country}
                    </td>
                    <td className="px-3 py-2 text-rj-fg">{formatUsdMonthly(p.avgMonthlyCost)}</td>
                    <td className="px-3 py-2 text-rj-muted">{p.costOfLiving}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-2 text-xs text-rj-muted">
            Guide-level estimates in USD; real spend varies widely.
          </p>
        </div>
      ) : null}

      <Link
        href={`/guides/${guide.slug}`}
        className="inline-flex items-center gap-1 text-sm font-semibold text-rj-primary transition-colors hover:text-rj-secondary"
      >
        Read full {guide.country} guide <span aria-hidden>→</span>
      </Link>
    </section>
  );
}

export function LanguageJobCountryInsights({ locationLabel }: { locationLabel: string }) {
  const guide = findCountryGuideForLocationHint(locationLabel);
  if (!guide) {
    return <InsightsFallback />;
  }
  const peers = getPeerGuidesForComparison(guide, 2);
  return <InsightsWithGuide guide={guide} peers={peers} locationLabel={locationLabel} />;
}

/** Compact Quick facts + Costs & logistics for the job detail sidebar (above featured ads). */
export function LanguageJobCountryMetricsSidebar({ locationLabel }: { locationLabel: string }) {
  const guide = findCountryGuideForLocationHint(locationLabel);
  if (!guide) return null;

  return (
    <div className="lj-sidebar-metrics" aria-labelledby="lj-sidebar-quick-facts-heading">
      <h2 id="lj-sidebar-quick-facts-heading" className="rj-detail__aside-title">
        Quick facts
      </h2>
      <p className="rj-detail__aside-lede">
        Capital, languages, currency, and headline costs from our {guide.country} guide.
      </p>
      <div className="mb-5 grid grid-cols-1 gap-2">
        <Metric label="Capital" value={guide.capital} />
        <Metric label="Languages" value={guide.language} />
        <Metric label="Timezone" value={guide.timezone} />
        <Metric label="Currency" value={guide.currency} />
      </div>
      <h3 className="mb-2 text-xs font-bold uppercase tracking-wide text-rj-secondary">Costs &amp; logistics</h3>
      <div className="grid grid-cols-1 gap-2">
        <Metric label="Cost of living" value={guide.costOfLiving} />
        <Metric label="Est. monthly budget" value={formatUsdMonthly(guide.avgMonthlyCost)} />
        <Metric label="Visa (typical)" value={guide.visaDifficulty} />
        <Metric label="Internet" value={guide.internetSpeed} />
      </div>
    </div>
  );
}
