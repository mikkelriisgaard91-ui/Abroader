import type { Metadata } from "next";
import PrivacyContent from "./privacy-content";

export const metadata: Metadata = {
  title: "Privacy Policy — Abroader",
  description:
    "How Abroader collects, uses, and protects your personal data. GDPR compliant under UK and EU law.",
};

export default function PrivacyPage() {
  return <PrivacyContent />;
}
