import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getColivingExtendedContent } from "@/lib/coliving/extended";
import { getAllColivingSlugs, getColivingBySlug } from "../content";
import { ColivingDefaultView } from "./coliving-default-view";
import { ColivingExtendedView } from "./coliving-extended-view";

const SITE = "https://abroader.vercel.app";

type PageProps = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllColivingSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const listing = getColivingBySlug(slug);
  if (!listing) {
    return { title: "Co-living — Abroader" };
  }
  const url = `${SITE}/co-living/${listing.id}`;
  const description =
    listing.description.length > 155 ? `${listing.description.slice(0, 152)}…` : listing.description;
  return {
    title: `${listing.title} — Co-living — Abroader`,
    description,
    openGraph: {
      title: `${listing.title} — Abroader`,
      description,
      url,
      type: "website",
    },
    alternates: {
      canonical: url,
    },
  };
}

export default async function CoLivingDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const listing = getColivingBySlug(slug);
  if (!listing) {
    notFound();
  }

  const extended = getColivingExtendedContent(listing.id);
  if (extended) {
    return <ColivingExtendedView listing={listing} extended={extended} />;
  }

  return <ColivingDefaultView listing={listing} />;
}
