import type { Metadata } from "next";
import EmployersContent from "./employers-content";

export const metadata: Metadata = {
  title: "For employers — Abroader",
  description:
    "Partner with Abroader to reach motivated international talent. Post roles, get matched with candidates, and grow your team abroad with confidence.",
};

export default function EmployersPage() {
  return <EmployersContent />;
}
