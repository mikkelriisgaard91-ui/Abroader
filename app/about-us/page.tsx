import type { Metadata } from "next";
import AboutUsContent from "./about-us-content";

export const metadata: Metadata = {
  title: "About us — Abroader",
  description:
    "Meet Team Abroader: meaningful opportunities abroad, transparent job listings, and support from people who have lived and worked overseas themselves.",
};

export default function AboutUsPage() {
  return <AboutUsContent />;
}
