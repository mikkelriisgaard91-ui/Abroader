import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import {
  RETREAT_CATEGORY_SLUGS,
  getCategoryLandingCopy,
  isRetreatCategorySlug,
} from "@/lib/retreats/category-landing";
import type { RetreatCategory } from "@/lib/retreats/catalog";
import { RetreatsCatalogSection, RetreatsCatalogSectionFallback } from "../retreats-catalog-section";

const SITE = "https://abroader.vercel.app";

/** Brand: --gold #fcba36, on-gold per rj-on-primary */
const primaryCtaClass =
  "inline-flex items-center justify-center rounded-full bg-[#fcba36] px-8 py-4 text-base font-semibold text-[#2a1f0a] shadow-[0_8px_28px_rgba(252,186,54,0.28)] transition-all hover:brightness-[0.97] active:scale-[0.98] sm:px-10 sm:text-lg";

type PageProps = { params: Promise<{ category: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return RETREAT_CATEGORY_SLUGS.map((category) => ({ category }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { category: raw } = await params;
  if (!isRetreatCategorySlug(raw)) {
    return { title: "Retreats — Abroader" };
  }
  const copy = getCategoryLandingCopy(raw);
  const url = `${SITE}/retreats/${raw}`;
  return {
    title: copy.metaTitle,
    description: copy.metaDescription,
    openGraph: {
      title: copy.metaTitle,
      description: copy.metaDescription,
      url,
      type: "website",
    },
    alternates: {
      canonical: url,
    },
  };
}

export default async function RetreatCategoryPage({ params }: PageProps) {
  const { category: raw } = await params;
  if (!isRetreatCategorySlug(raw)) {
    notFound();
  }
  const category = raw as RetreatCategory;
  const copy = getCategoryLandingCopy(category);

  return (
    <main className="lj-page overflow-x-hidden pb-16 font-rj-body">
      <section className="relative flex min-h-[min(780px,92vh)] w-full items-center overflow-hidden px-4 pt-16 pb-0 sm:px-6 md:px-10 lg:min-h-[min(860px,90vh)] lg:px-12 lg:pt-20 lg:pb-0">
        <div className="pointer-events-none absolute inset-0 z-0 bg-[#e8f4f7]">
          <Image
            src={copy.heroImage}
            alt={copy.heroImageAlt}
            fill
            priority
            sizes="100vw"
            quality={100}
            className="object-cover object-[50%_55%]"
          />
        </div>
        <div
          className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-br from-white/78 via-[#e8f4f7]/65 to-[#fafafa]/90"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-t from-[#fafafa]/92 via-transparent to-white/30"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 z-[2] h-14 bg-gradient-to-t from-[#fafafa] via-[#fafafa]/65 to-transparent sm:h-16"
          aria-hidden
        />

        <div className="relative z-10 mx-auto w-full max-w-[1400px] pb-8 sm:pb-10 lg:pb-12">
          <div className="retreats-hero-breathe max-w-3xl rounded-[2rem] border border-[rgba(36,99,116,0.12)] bg-white/82 p-8 shadow-[0_24px_56px_-28px_rgba(36,99,116,0.14)] backdrop-blur-md sm:p-10 md:p-12">
            <nav className="mb-4 text-sm font-medium text-[#5a6c70]" aria-label="Breadcrumb">
              <Link href="/retreats" className="text-[#246374] underline-offset-2 hover:underline">
                Retreats
              </Link>
              <span aria-hidden className="mx-2">
                /
              </span>
              <span className="text-[#2a3d42]">{copy.heroTitle}</span>
            </nav>
            <h1 className="font-rj-headline mb-5 text-balance text-3xl font-bold leading-[1.12] text-[#1a2e33] sm:text-4xl md:text-5xl lg:text-[2.75rem]">
              {copy.heroTitle}
            </h1>
            <p className="mb-8 max-w-2xl text-pretty text-lg leading-relaxed text-[#4a5c60] md:text-xl">{copy.heroSubtitle}</p>
            <a href="#browse-retreats" className={primaryCtaClass}>
              See listings
            </a>
          </div>
        </div>
      </section>

      <Suspense fallback={<RetreatsCatalogSectionFallback />}>
        <RetreatsCatalogSection presetCategory={category} />
      </Suspense>

      <section className="px-4 py-12 sm:px-6 md:px-10 lg:px-12 lg:py-16">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-6 text-[#5a6c70]">Browse all retreat styles or explore other ways to go abroad.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/retreats"
              className="inline-flex items-center justify-center rounded-full border border-[rgba(36,99,116,0.2)] bg-white px-8 py-3 text-sm font-semibold text-[#246374] shadow-sm transition-colors hover:border-[rgba(36,99,116,0.35)] hover:bg-[#e8f4f7]"
            >
              All retreats
            </Link>
            <Link
              href="/remote-jobs"
              className="inline-flex items-center justify-center rounded-full border border-[rgba(36,99,116,0.2)] bg-white px-8 py-3 text-sm font-semibold text-[#246374] shadow-sm transition-colors hover:border-[rgba(36,99,116,0.35)] hover:bg-[#e8f4f7]"
            >
              Remote jobs
            </Link>
            <Link
              href="/volunteering"
              className="inline-flex items-center justify-center rounded-full border border-[rgba(36,99,116,0.2)] bg-white px-8 py-3 text-sm font-semibold text-[#246374] shadow-sm transition-colors hover:border-[rgba(36,99,116,0.35)] hover:bg-[#e8f4f7]"
            >
              Volunteering
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
