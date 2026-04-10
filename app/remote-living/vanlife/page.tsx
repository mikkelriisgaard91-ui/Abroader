import type { Metadata } from "next";
import VanlifeContent from "./vanlife-content";

export const metadata: Metadata = {
  title: "Van Life Jobs, Travel & Freedom | Abroader",
  description:
    "Your complete guide to van life: how to make money on the road, find remote jobs, choose the right van, and start living freely. Real advice, no fluff.",
  openGraph: {
    title: "Live Anywhere. Work From the Road. | Abroader",
    description:
      "Everything you need to start van life — jobs, vans, tools, and the honest truth about life on the road.",
    type: "website",
  },
};

export default function VanlifePage() {
  return <VanlifeContent />;
}
