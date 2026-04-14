import type { Metadata } from "next";
import TravelContent from "./travel-content";

export const metadata: Metadata = {
  title: "Travel planning — weekends to months on the road | Abroader",
  description:
    "Personal travel planning and advice: city breaks, multi-stop routes, and long trips. We help with budgets, flights, stays, and experiences — you book when you're ready.",
};

export default function TravelPage() {
  return <TravelContent />;
}
