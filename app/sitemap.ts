import type { MetadataRoute } from "next";
import { recruiterList } from "@/config/recruiters";

const BASE_URL = "https://www.abroader.io";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${BASE_URL}/hire-with-abroader`, priority: 1 },
    { url: `${BASE_URL}/flyt-til-portugal`, priority: 0.9 },
    { url: `${BASE_URL}/our-process`, priority: 0.6 },
    { url: `${BASE_URL}/choose-your-recruiter`, priority: 0.9 },
    { url: `${BASE_URL}/become-an-abroader`, priority: 0.8 },
    { url: `${BASE_URL}/privacy`, priority: 0.3 },
    { url: `${BASE_URL}/terms`, priority: 0.3 },
  ];

  const recruiterRoutes: MetadataRoute.Sitemap = recruiterList.map((recruiter) => ({
    url: `${BASE_URL}/${recruiter.slug}`,
    priority: 0.7,
  }));

  return [...staticRoutes, ...recruiterRoutes];
}
