import type { Metadata } from "next";
import { Inter, Cairo } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Providers } from "@/components/Providers";
import { WhatsAppButton } from "@/components/common/WhatsAppButton";
import ProductModal from "@/components/products/ProductModal";

const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800"], variable: "--font-inter" });
const cairo = Cairo({ subsets: ["latin", "arabic"], weight: ["400", "600", "700", "800"], variable: "--font-cairo" });

export const metadata: Metadata = {
  metadataBase: new URL("https://bhferti.com"),
  title: "BH FERTI — Engrais, biostimulants et protection biologique | Aït Melloul",
  description:
    "BH FERTI, distributeur d'intrants agricoles à Aït Melloul : engrais, biostimulants, correcteurs de carences et protection biologique. Fiches techniques et devis sur WhatsApp.",
  icons: {
    icon: "/images/logo-icon.png",
    shortcut: "/images/logo-icon.png",
    apple: "/images/logo-icon.png",
  },
  openGraph: {
    title: "BH FERTI — Intrants agricoles professionnels",
    description: "Engrais, biostimulants et protection biologique pour l'agriculture marocaine.",
    url: "https://bhferti.com",
    siteName: "BH FERTI",
    images: [{ url: "/images/logo.png", width: 500, height: 500, alt: "BH FERTI Logo" }],
    locale: "fr_FR",
    alternateLocale: ["ar_MA"],
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" dir="ltr">
      <body className={`${inter.variable} ${cairo.variable} antialiased`}>
        <Providers>
          <Navbar />
          {children}
          <Footer />
          <ProductModal />
          <WhatsAppButton />
        </Providers>
      </body>
    </html>
  );
}
