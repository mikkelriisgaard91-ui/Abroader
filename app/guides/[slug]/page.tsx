import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { allGuides, getGuideBySlug, getRelatedGuides } from "@/lib/guides";
import NocturnalCountryGuideView from "./nocturnal-country-guide-view";

const SITE = "https://abroader.vercel.app";

type PageProps = { params: Promise<{ slug: string }> };

/** Allow any slug at runtime if a guide is added without rebuilding (optional). */
export const dynamicParams = true;

export async function generateStaticParams() {
  return allGuides.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);
  if (!guide) {
    return { title: "Guide not found — Abroader" };
  }
  const url = `${SITE}/guides/${guide.slug}`;
  return {
    title: guide.seoTitle,
    description: guide.seoDescription,
    openGraph: {
      title: guide.seoTitle,
      description: guide.seoDescription,
      type: "article",
      url,
    },
    alternates: {
      canonical: url,
    },
  };
}

export default async function GuideCountryPage({ params }: PageProps) {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);
  if (!guide) notFound();

  const related = getRelatedGuides(slug, 3);

  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: guide.seoTitle,
    description: guide.seoDescription,
    dateModified: guide.updated ?? undefined,
    author: {
      "@type": "Organization",
      name: "Abroader",
    },
  };

  const faqLd =
    guide.faqs?.length ?
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: guide.faqs.map((f) => ({
          "@type": "Question",
          name: f.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: f.answer,
          },
        })),
      }
    : null;

  return (
    <main style={{ flex: 1, width: "100%" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }}
      />
      {faqLd ? (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      ) : null}
      <NocturnalCountryGuideView guide={guide} related={related} />
    </main>
  );
}
