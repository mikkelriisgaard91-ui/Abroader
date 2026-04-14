import { Inter, Poppins } from "next/font/google";

const inter = Inter({ subsets: ["latin"], display: "swap", variable: "--font-travel-body" });
const poppins = Poppins({
  weight: ["600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-travel-heading",
});

export default function TravelLayout({ children }: { children: React.ReactNode }) {
  return <div className={`${inter.variable} ${poppins.variable}`}>{children}</div>;
}
