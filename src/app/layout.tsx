import type { Metadata } from "next";
import { Hedvig_Letters_Serif } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const hedvig = Hedvig_Letters_Serif({
  variable: "--font-hedvig",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: {
    default: "Zen Salon | Acne, Laser & Anti-Aging Solutions",
    template: "%s | Zen Salon",
  },
  description:
    "Advanced dermatology and modern aesthetic treatments designed to improve skin health: acne care, laser treatments, botox & fillers and anti-aging solutions.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={hedvig.variable}>
      <body className="overflow-x-clip">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
