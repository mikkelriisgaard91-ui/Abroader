import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { retreatCategoryHref } from "@/lib/retreats/category-landing";
import {
  RETREAT_CATEGORY_LABELS,
  type RetreatListing,
  type RetreatPartner,
} from "@/lib/retreats/catalog";
import {
  getRetreatListingDetail,
  type RetreatListingDetail,
} from "@/lib/retreats/listing-details";
import type { RetreatListingGalleryImage } from "@/lib/retreats/retreat-listing-detail.types";
import {
  getAllRetreatListingIds,
  getRetreatListingById,
  isRetreatListingId,
} from "@/lib/retreats/listing-helpers";

const SITE = "https://www.abroader.io";

type PageProps = { params: Promise<{ id: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllRetreatListingIds().map((id) => ({ id }));
}

function partnerBookLabel(partner?: RetreatPartner): string {
  if (partner === "bookyogaretreats") return "Book on BookYogaRetreats";
  if (partner === "tripaneer") return "Book on Tripaneer";
  return "Check dates & book on BookSurfCamps";
}

function absoluteHeroForMetadata(
  listing: RetreatListing,
  detail: RetreatListingDetail | undefined,
): string {
  if (detail?.heroImageSrc?.startsWith("http")) return detail.heroImageSrc;
  const c = listing.coverImage;
  if (c.startsWith("http")) return c;
  const path = c.startsWith("/") ? c : `/${c}`;
  return `${SITE}${path}`;
}

function buildDescription(listing: RetreatListing): string {
  const bits = [
    `${listing.title} at ${listing.organizer} — ${listing.location}.`,
    ...listing.bullets.slice(0, 2),
  ];
  if (listing.priceNote) bits.push(listing.priceNote);
  return bits.join(" ").slice(0, 320);
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const listing = getRetreatListingById(id);
  if (!listing) return { title: "Retreat — Abroader" };
  const detail = getRetreatListingDetail(id);
  const ogImageUrl = absoluteHeroForMetadata(listing, detail);
  const url = `${SITE}/retreats/listing/${id}`;
  const title = `${listing.title} — ${listing.organizer} | Abroader`;
  const description = buildDescription(listing);
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      type: "website",
      images: [{ url: ogImageUrl }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImageUrl],
    },
  };
}

export default async function RetreatListingPage({ params }: PageProps) {
  const { id } = await params;
  if (!isRetreatListingId(id)) notFound();
  const listing = getRetreatListingById(id)!;
  const detail = getRetreatListingDetail(id);
  const heroSrc = detail?.heroImageSrc ?? listing.coverImage;
  const categoryLabel = RETREAT_CATEGORY_LABELS[listing.category];
  const categoryHref = retreatCategoryHref(listing.category);
  const url = `${SITE}/retreats/listing/${id}`;

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE },
      { "@type": "ListItem", position: 2, name: "Retreats", item: `${SITE}/retreats` },
      {
        "@type": "ListItem",
        position: 3,
        name: categoryLabel,
        item: `${SITE}${categoryHref}`,
      },
      { "@type": "ListItem", position: 4, name: listing.title, item: url },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <main className="lj-page overflow-x-hidden pb-16 font-rj-body">
        <section className="relative flex min-h-[min(520px,78vh)] w-full flex-col justify-end overflow-hidden px-4 pb-10 pt-20 sm:px-6 md:px-10 lg:min-h-[min(580px,82vh)] lg:px-12 lg:pb-14 lg:pt-24">
          <div className="pointer-events-none absolute inset-0 z-0 bg-[#0d2d36]">
            <Image
              src={heroSrc}
              alt={listing.coverImageAlt}
              fill
              priority
              sizes="100vw"
              quality={90}
              className="object-cover object-center"
            />
          </div>
          <div
            className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-t from-[#0d2d36]/95 via-[#0d2d36]/55 to-[#0d2d36]/25"
            aria-hidden
          />

          <div className="relative z-10 mx-auto w-full max-w-[900px]">
            <nav className="mb-5 text-sm font-medium text-white/75" aria-label="Breadcrumb">
              <Link href="/" className="text-white/85 underline-offset-2 hover:underline">
                Home
              </Link>
              <span className="mx-2" aria-hidden>
                /
              </span>
              <Link href="/retreats" className="text-white/85 underline-offset-2 hover:underline">
                Retreats
              </Link>
              <span className="mx-2" aria-hidden>
                /
              </span>
              <Link
                href={categoryHref}
                className="text-white/85 underline-offset-2 hover:underline"
              >
                {categoryLabel}
              </Link>
              <span className="mx-2" aria-hidden>
                /
              </span>
              <span className="text-white">{listing.title}</span>
            </nav>

            {listing.badge ? (
              <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-[#8ed2e1]">
                {listing.badge}
              </p>
            ) : null}

            <h1 className="font-rj-headline mb-4 text-balance text-3xl font-bold leading-[1.12] text-white sm:text-4xl md:text-5xl">
              {listing.title}
            </h1>
            <p className="mb-2 text-lg font-semibold text-[#c8eef5]">{listing.organizer}</p>
            <p className="mb-8 text-base text-white/80">{listing.location}</p>

            <div className="flex flex-wrap gap-3">
              <a
                href={listing.href}
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="inline-flex items-center justify-center rounded-full bg-[#fcba36] px-8 py-3.5 text-base font-semibold text-[#2a1f0a] shadow-[0_8px_28px_rgba(252,186,54,0.35)] transition-all hover:brightness-[0.97] active:scale-[0.98]"
              >
                {partnerBookLabel(listing.partner)}
              </a>
              <Link
                href="/retreats"
                className="inline-flex items-center justify-center rounded-full border-2 border-white/35 bg-white/10 px-8 py-3.5 text-base font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/18"
              >
                All retreats
              </Link>
            </div>
          </div>
        </section>

        {detail?.galleryImages?.length ? (
          <section className="border-b border-[rgba(36,99,116,0.08)] bg-[#fafafa] px-4 py-10 sm:px-6 md:px-10 lg:px-12 lg:py-14">
            <div className="mx-auto max-w-[1100px]">
              <h2 className="font-rj-headline mb-8 text-xl font-bold text-[#1a2e33] md:text-2xl">
                Gallery
              </h2>
              <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3">
                {detail.galleryImages.map((img: RetreatListingGalleryImage, idx: number) => (
                  <div
                    key={`${img.src}-${idx}`}
                    className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-[rgba(36,99,116,0.12)] bg-[#e8f4f7] shadow-[0_8px_28px_-16px_rgba(36,99,116,0.18)]"
                  >
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      sizes="(max-width: 768px) 50vw, 33vw"
                      quality={85}
                      className="object-cover object-center"
                    />
                  </div>
                ))}
              </div>
              {detail.photoNote ? (
                <p className="mx-auto mt-10 max-w-3xl text-center text-xs leading-relaxed text-[#5a6c70]">
                  {detail.photoNote}
                </p>
              ) : null}
            </div>
          </section>
        ) : null}

        <section className="border-b border-[rgba(36,99,116,0.1)] bg-[#fafafa] px-4 py-12 sm:px-6 md:px-10 lg:px-12 lg:py-16">
          <div className="mx-auto max-w-[720px]">
            <h2 className="font-rj-headline mb-6 text-xl font-bold text-[#1a2e33] md:text-2xl">
              At a glance
            </h2>
            <ul className="mb-10 flex flex-col gap-4 text-[#4a5c60]">
              {listing.bullets.map((line) => (
                <li key={line} className="flex gap-3 text-base leading-relaxed">
                  <span
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#fcba36]"
                    aria-hidden
                  />
                  <span>{line}</span>
                </li>
              ))}
            </ul>

            {listing.priceNote ? (
              <p className="border-t border-[rgba(36,99,116,0.12)] pt-8 text-sm leading-relaxed text-[#5a6c70]">
                {listing.priceNote}
              </p>
            ) : null}

            {detail?.introParagraphs?.length ? (
              <div className="mt-12 space-y-5 border-t border-[rgba(36,99,116,0.12)] pt-12">
                <h2 className="font-rj-headline text-xl font-bold text-[#1a2e33] md:text-2xl">
                  About this retreat
                </h2>
                {detail.introParagraphs.map((para: string, i: number) => (
                  <p key={i} className="text-base leading-relaxed text-[#4a5c60]">
                    {para}
                  </p>
                ))}
              </div>
            ) : null}

            {detail?.whatsIncluded?.length ? (
              <div className="mt-12 space-y-4 border-t border-[rgba(36,99,116,0.12)] pt-12">
                <h2 className="font-rj-headline text-xl font-bold text-[#1a2e33] md:text-2xl">
                  What&apos;s typically included
                </h2>
                <ul className="flex flex-col gap-3">
                  {detail.whatsIncluded.map((line: string) => (
                    <li key={line} className="flex gap-3 text-base leading-relaxed text-[#4a5c60]">
                      <span className="font-semibold text-[#246374]" aria-hidden>
                        ✓
                      </span>
                      {line}
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}

            {detail?.programNotes?.length ? (
              <div className="mt-12 space-y-4 border-t border-[rgba(36,99,116,0.12)] pt-12">
                <h2 className="font-rj-headline text-xl font-bold text-[#1a2e33] md:text-2xl">
                  Programme
                </h2>
                {detail.programNotes.map((para: string, i: number) => (
                  <p key={i} className="text-base leading-relaxed text-[#4a5c60]">
                    {para}
                  </p>
                ))}
              </div>
            ) : null}

            {detail?.accommodationNotes?.length ? (
              <div className="mt-12 space-y-4 border-t border-[rgba(36,99,116,0.12)] pt-12">
                <h2 className="font-rj-headline text-xl font-bold text-[#1a2e33] md:text-2xl">
                  Stay & location
                </h2>
                {detail.accommodationNotes.map((para: string, i: number) => (
                  <p key={i} className="text-base leading-relaxed text-[#4a5c60]">
                    {para}
                  </p>
                ))}
              </div>
            ) : null}

            {detail?.goodToKnow?.length ? (
              <div className="mt-12 border-t border-[rgba(36,99,116,0.12)] pt-12">
                <h2 className="font-rj-headline mb-6 text-xl font-bold text-[#1a2e33] md:text-2xl">
                  Good to know
                </h2>
                <div className="grid gap-4 sm:grid-cols-1">
                  {detail.goodToKnow.map((tip: { title: string; body: string }) => (
                    <div
                      key={tip.title}
                      className="rounded-2xl border border-[rgba(36,99,116,0.12)] bg-white p-5 shadow-sm"
                    >
                      <h3 className="font-rj-headline mb-2 text-base font-bold text-[#246374]">
                        {tip.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-[#4a5c60]">{tip.body}</p>
                    </div>
                  ))}
                </div>
              </div>
            ) : null}

            <div className="mt-14 rounded-3xl border border-[rgba(36,99,116,0.14)] bg-white p-8 shadow-[0_16px_48px_-24px_rgba(36,99,116,0.12)]">
              <p className="mb-6 text-center text-sm leading-relaxed text-[#5a6c70]">
                Abroader may earn a commission when you book through partner links. Availability,
                inclusions, and prices change — always confirm on the booking site before you pay.
              </p>
              <div className="flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:flex-wrap">
                <a
                  href={listing.href}
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className="inline-flex items-center justify-center rounded-full bg-[#fcba36] px-8 py-3.5 text-center text-base font-semibold text-[#2a1f0a] shadow-[0_8px_28px_rgba(252,186,54,0.28)] transition-all hover:brightness-[0.97]"
                >
                  {partnerBookLabel(listing.partner)}
                </a>
                <Link
                  href={categoryHref}
                  className="inline-flex items-center justify-center rounded-full border border-[rgba(36,99,116,0.22)] bg-[#e8f4f7]/80 px-8 py-3.5 text-center text-base font-semibold text-[#246374] hover:border-[rgba(36,99,116,0.35)]"
                >
                  More {categoryLabel.toLowerCase()} retreats
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
