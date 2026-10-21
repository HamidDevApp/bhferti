import type { Metadata } from "next";
import { Inter, Cairo } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });
const cairo = Cairo({ subsets: ["latin", "arabic"], weight: ["400", "600", "700"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://bhferti.com"),
  title: "BHFERTI - Solutions Agricoles Innovantes",
  description: "Des solutions agricoles innovantes pour une meilleure productivité et protection des cultures.",
  icons: {
    icon: "/images/logo-icon.png",
    shortcut: "/images/logo-icon.png",
    apple: "/images/logo-icon.png",
  },
  openGraph: {
    title: "BHFERTI - Solutions Agricoles Innovantes",
    description: "Des solutions agricoles innovantes pour une meilleure productivité et protection des cultures.",
    url: "https://bhferti.com",
    siteName: "BHFERTI",
    images: [
      {
        url: "/images/logo.png",
        width: 500,
        height: 500,
        alt: "BH FERTI Logo",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${inter.className} ${cairo.className}`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
