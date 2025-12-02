import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import CookieBanner from "@/components/CookieBanner";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dr. Silas Aslan | Innovation AI.chemist",
  description: "Chemiker. Innovator. KI-Enthusiast. Prokurist & Innovationsmanager bei SWK-NOVATEC GmbH. Expertise in KI, Digitalisierung und Innovationsscouting.",
  keywords: ["Dr. Silas Aslan", "Innovation", "KI", "Chemie", "Digitalisierung", "Karlsruhe", "SWK-NOVATEC"],
  authors: [{ name: "Dr. Silas Aslan" }],
  openGraph: {
    title: "Dr. Silas Aslan | Innovation AI.chemist",
    description: "Chemiker. Innovator. KI-Enthusiast. Taten sprechen lauter als Worte.",
    url: "https://www.silasaslan.com",
    siteName: "Dr. Silas Aslan",
    locale: "de_DE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr. Silas Aslan | Innovation AI.chemist",
    description: "Chemiker. Innovator. KI-Enthusiast.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className={`${inter.variable} antialiased`}>
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
