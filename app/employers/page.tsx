import type { Metadata } from "next";
import EmployersContent from "./employers-content";

export const metadata: Metadata = {
  title: "For employers — Abroader",
  description:
    "Partner with Abroader: candidate database access, contingency search, embedded recruiters, and advertising — homepage, newsletter, and more for international hiring.",
};

export default function EmployersPage() {
  return <EmployersContent />;
}
