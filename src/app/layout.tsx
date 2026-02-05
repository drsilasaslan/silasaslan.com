import type { Metadata } from "next";
import { Inter } from "next/font/google";
import type { ReactNode } from "react";
import "./globals.css";
import CookieBanner from "@/components/CookieBanner";
import contact from "../../data/contact.json";
import hero from "../../data/hero.json";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const siteUrl = "https://www.silasaslan.com";
const siteTitle = "Dr. Silas Aslan | Innovation AI.chemist";
const siteDescription =
  "Chemiker. Innovator. KI-Enthusiast. Prokurist & Innovationsmanager bei SWK-NOVATEC GmbH. Expertise in KI, Digitalisierung und Innovationsscouting.";
const revisedDate = "2026-02-05";

const [postalCodeCandidate, ...localityParts] = contact.city.split(" ");
const hasPostalCode = /^[0-9]{4,6}$/.test(postalCodeCandidate);
const addressLocality = hasPostalCode ? localityParts.join(" ") : contact.city;
const postalCode = hasPostalCode ? postalCodeCandidate : undefined;
const contactEmail = contact.email.replace(/\(at\)/g, "@").replace(/\(dot\)/g, ".");

const sameAs = Array.from(
  new Set(
    [
      hero.socialLinks?.linkedin,
      hero.socialLinks?.x,
      ...contact.social.map((item) => item.url),
    ].filter((value): value is string => Boolean(value)),
  ),
);

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "Dr. Silas Aslan",
      url: siteUrl,
      logo: `${siteUrl}${hero.profileImage}`,
      sameAs,
      address: {
        "@type": "PostalAddress",
        streetAddress: contact.address,
        addressLocality,
        postalCode,
        addressCountry: contact.country,
      },
      contactPoint: [
        {
          "@type": "ContactPoint",
          contactType: "contact",
          email: contactEmail,
        },
      ],
    },
    {
      "@type": "Person",
      "@id": `${siteUrl}/#person`,
      name: "Dr. Silas Aslan",
      url: siteUrl,
      image: `${siteUrl}${hero.profileImage}`,
      sameAs,
      description: siteDescription,
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "Dr. Silas Aslan",
      inLanguage: "de-DE",
      publisher: {
        "@id": `${siteUrl}/#person`,
      },
      description: siteDescription,
    },
    {
      "@type": "WebPage",
      "@id": `${siteUrl}/#webpage`,
      url: siteUrl,
      name: siteTitle,
      isPartOf: {
        "@id": `${siteUrl}/#website`,
      },
      about: {
        "@id": `${siteUrl}/#person`,
      },
      inLanguage: "de-DE",
      description: siteDescription,
    },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: siteTitle,
  description: siteDescription,
  alternates: {
    canonical: "/",
  },
  keywords: [
    "Dr. Silas Aslan",
    "Innovation",
    "KI",
    "Chemie",
    "Digitalisierung",
    "Karlsruhe",
    "SWK-NOVATEC",
  ],
  authors: [{ name: "Dr. Silas Aslan" }],
  other: {
    author: "Dr. Silas Aslan",
    subject: "Innovation, KI-Governance und Prototyping",
    topic: "KI, Digitalisierung, Innovation, Governance, Enablement",
    revised: revisedDate,
  },
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16.png",
    apple: "/favicon-192.png",
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: siteTitle,
    description: "Chemiker. Innovator. KI-Enthusiast. Taten sprechen lauter als Worte.",
    url: siteUrl,
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
    title: siteTitle,
    description: "Chemiker. Innovator. KI-Enthusiast.",
    images: ["/images/1696793999286.jpeg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="de" dir="ltr">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="shortcut icon" href="/favicon-16.png" />
        <link rel="apple-touch-icon" href="/favicon-192.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
        <script
          type="application/ld+json"
          // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD is required for SEO metadata.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className={`${inter.variable} antialiased`}>
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
