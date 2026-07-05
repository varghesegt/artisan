import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Artisan Studio - Premium Digital Experiences",
    template: "%s | Artisan Studio",
  },
  description:
    "We craft premium websites, social media strategies, and compelling content that elevate brands and captivate audiences.",
  keywords: [
    "premium websites",
    "social media marketing",
    "content creation",
    "digital agency",
    "brand strategy",
    "web design",
  ],
  openGraph: {
    title: "Artisan Studio - Premium Digital Experiences",
    description:
      "We craft premium websites, social media strategies, and compelling content that elevate brands and captivate audiences.",
    type: "website",
    locale: "en_US",
    siteName: "Artisan Studio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Artisan Studio - Premium Digital Experiences",
    description:
      "We craft premium websites, social media strategies, and compelling content that elevate brands and captivate audiences.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} h-full`}
    >
      <body className="min-h-full flex flex-col antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
