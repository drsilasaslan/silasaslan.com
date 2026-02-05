import type { Metadata } from "next";
import Link from "next/link";

const siteUrl = "https://www.silasaslan.com";
const pageTitle = "Impressum | Hackathon";
const pageDescription = "Impressum der Hackathon-Seite.";

const breadcrumbData = {
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Startseite",
      item: `${siteUrl}/`,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Hackathon",
      item: `${siteUrl}/hackathon/`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Impressum",
      item: `${siteUrl}/hackathon/impressum/`,
    },
  ],
};

const webPageData = {
  "@type": "WebPage",
  "@id": `${siteUrl}/hackathon/impressum/#webpage`,
  url: `${siteUrl}/hackathon/impressum/`,
  name: pageTitle,
  description: pageDescription,
  isPartOf: {
    "@id": `${siteUrl}/#website`,
  },
  about: {
    "@id": `${siteUrl}/#person`,
  },
  inLanguage: "de-DE",
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [webPageData, breadcrumbData],
};

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: "/hackathon/impressum/",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: `${siteUrl}/hackathon/impressum/`,
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["/images/1696793999286.jpeg"],
  },
};

export default function HackathonImpressum() {
  return (
    <>
      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD is required for SEO metadata.
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="hackathon-section">
        <div className="hackathon-container">
          <Link href="/hackathon" className="hackathon-button secondary">
            Zurück zur Hackathon-Übersicht
          </Link>
          <div className="hackathon-card mt-6">
            <h1 className="hackathon-display text-3xl font-extrabold mb-6">Impressum</h1>

            <section className="space-y-3 text-[var(--hack-muted)]">
              <h2 className="hackathon-display text-xl font-bold text-[var(--hack-ink)]">
                Angaben gemäß § 5 TMG
              </h2>
              <p>
                Silas Aslan
                <br />
                Schillerstr. 52
                <br />
                76135 Karlsruhe
                <br />
                Deutschland
              </p>

              <h2 className="hackathon-display text-xl font-bold text-[var(--hack-ink)] mt-6">
                Kontakt
              </h2>
              <p>E-Mail: silas.aslan(AT)gmail(DOT)com</p>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
