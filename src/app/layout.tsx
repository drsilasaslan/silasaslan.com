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
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16.png",
    apple: "/favicon-192.png",
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "Dr. Silas Aslan | Innovation AI.chemist",
    description: "Chemiker. Innovator. KI-Enthusiast. Taten sprechen lauter als Worte.",
    url: "https://www.silasaslan.com",
    siteName: "Dr. Silas Aslan",
    locale: "de_DE",
    type: "website",
    images: [
      {
        url: "/images/1696793999286.jpeg",
        width: 512,
        height: 512,
        alt: "Dr. Silas Aslan - Innovation AI.chemist",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr. Silas Aslan | Innovation AI.chemist",
    description: "Chemiker. Innovator. KI-Enthusiast.",
    images: ["/images/1696793999286.jpeg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" dir="ltr">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="shortcut icon" href="/favicon-16.png" />
        <link rel="apple-touch-icon" href="/favicon-192.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={`${inter.variable} antialiased`}>
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
