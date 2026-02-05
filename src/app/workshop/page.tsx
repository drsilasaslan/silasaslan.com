import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import workshopData from "../../../data/workshop.json";

const siteUrl = "https://www.silasaslan.com";
const pageTitle = "ChatGPT-Workshop | Dr. Silas Aslan";
const pageDescription =
  "Von 0 auf ChatGPT in 2 Stunden – kompakter KI-Einstieg für Stadtwerke mit Live-Demos, Übungen und Transfer in den Arbeitsalltag.";

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
      name: "Workshop",
      item: `${siteUrl}/workshop/`,
    },
  ],
};

const webPageData = {
  "@type": "WebPage",
  "@id": `${siteUrl}/workshop/#webpage`,
  url: `${siteUrl}/workshop/`,
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
    canonical: "/workshop/",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: `${siteUrl}/workshop/`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["/images/1696793999286.jpeg"],
  },
};

type WorkshopHero = {
  kicker: string;
  title: string;
  subtitle: string;
  intro: string;
  tags: string[];
  primaryCta: {
    label: string;
    href: string;
  };
  secondaryCta: {
    label: string;
    href: string;
  };
};

type WorkshopSection = {
  title: string;
  items: string[];
};

type WorkshopAgendaItem = {
  time: string;
  title: string;
  details: string[];
};

type WorkshopAgenda = {
  title: string;
  summary: string[];
  schedule: WorkshopAgendaItem[];
};

type WorkshopData = {
  hero: WorkshopHero;
  outcomes: WorkshopSection;
  agenda: WorkshopAgenda;
  topics: WorkshopSection[];
  useCases: WorkshopSection;
  prompts: WorkshopSection;
  resources: WorkshopSection;
  cta: {
    title: string;
    text: string;
    cta: {
      label: string;
      href: string;
    };
  };
};

export default function WorkshopPage() {
  const { hero, outcomes, agenda, topics, useCases, prompts, resources, cta } =
    workshopData as WorkshopData;

  return (
    <>
      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD is required for SEO metadata.
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
        <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-sm border-b border-[var(--border)]">
          <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between gap-6">
            <Link
              href="/"
              className="text-lg font-medium tracking-tight text-[var(--foreground)] hover:text-[var(--primary)] transition-colors"
            >
              Dr. Silas Aslan
            </Link>
            <nav className="hidden md:flex items-center gap-6 text-sm text-[var(--muted)]">
              <a href="#agenda" className="hover:text-[var(--primary)] transition-colors">
                Agenda
              </a>
              <a href="#topics" className="hover:text-[var(--primary)] transition-colors">
                Themen
              </a>
              <a href="#cases" className="hover:text-[var(--primary)] transition-colors">
                Praxisfälle
              </a>
              <a href="#prompts" className="hover:text-[var(--primary)] transition-colors">
                Prompt-Labor
              </a>
              <a href="/#contact" className="hover:text-[var(--primary)] transition-colors">
                Kontakt
              </a>
            </nav>
            <Link
              href={hero.primaryCta.href}
              className="hidden sm:inline-flex items-center justify-center px-4 py-2 rounded-full bg-[var(--primary)] text-white text-sm font-medium hover:bg-[var(--primary-dark)] transition-colors"
            >
              {hero.primaryCta.label}
            </Link>
          </div>
        </header>

        <main>
          <section className="pt-24 pb-20">
            <div className="max-w-6xl mx-auto px-6">
              <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] items-center">
                <div>
                  <p className="text-[var(--primary)] text-sm tracking-widest uppercase mb-3">
                    {hero.kicker}
                  </p>
                  <h1 className="text-4xl md:text-5xl font-light leading-tight">{hero.title}</h1>
                  <p className="text-lg text-[var(--muted)] mt-4 max-w-2xl">{hero.subtitle}</p>
                  <p className="text-[var(--muted)] mt-4 max-w-2xl">{hero.intro}</p>
                  <div className="flex flex-wrap gap-2 mt-6">
                    {hero.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center rounded-full bg-[var(--surface-alt)] px-3 py-1 text-xs text-[var(--muted)]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-4 mt-8">
                    <Link
                      href={hero.primaryCta.href}
                      className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-[var(--primary)] text-white text-sm font-medium shadow-sm hover:bg-[var(--primary-dark)] transition-colors"
                    >
                      {hero.primaryCta.label}
                    </Link>
                    <a
                      href={hero.secondaryCta.href}
                      className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-[var(--border)] text-[var(--foreground)] text-sm font-medium hover:border-[var(--primary)]/50 transition-colors"
                    >
                      {hero.secondaryCta.label}
                    </a>
                  </div>
                </div>
                <div className="rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-6 md:p-8">
                  <h2 className="text-xl font-semibold text-[var(--foreground)] mb-4">
                    {outcomes.title}
                  </h2>
                  <ul className="space-y-3 text-sm text-[var(--muted)]">
                    {outcomes.items.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--primary)]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section id="agenda" className="py-20 bg-[var(--surface)]">
            <div className="max-w-6xl mx-auto px-6">
              <div className="mb-10">
                <p className="text-[var(--primary)] text-sm tracking-widest uppercase mb-2">
                  Agenda
                </p>
                <h2 className="text-3xl md:text-4xl font-light text-[var(--foreground)]">
                  {agenda.title}
                </h2>
              </div>
              <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
                <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface-alt)] p-6">
                  <p className="text-xs uppercase tracking-[0.3em] text-[var(--muted)]">
                    Kurzüberblick
                  </p>
                  <ul className="mt-4 space-y-3 text-sm text-[var(--muted)]">
                    {agenda.summary.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--primary)]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-2xl border border-[var(--border)] bg-white p-6">
                  <details className="group">
                    <summary className="cursor-pointer list-none text-sm font-semibold text-[var(--foreground)] flex items-center justify-between">
                      Vollständiger Zeitplan
                      <span className="text-[var(--muted)] group-open:rotate-45 transition-transform">
                        +
                      </span>
                    </summary>
                    <div className="mt-6 space-y-4 text-sm text-[var(--muted)]">
                      {agenda.schedule.map((slot) => (
                        <div
                          key={slot.time}
                          className="rounded-xl border border-[var(--border)] bg-[var(--surface-alt)] p-4"
                        >
                          <div className="flex flex-wrap items-center justify-between gap-2">
                            <span className="text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
                              {slot.time}
                            </span>
                            <span className="text-sm font-semibold text-[var(--foreground)]">
                              {slot.title}
                            </span>
                          </div>
                          <ul className="mt-3 space-y-2">
                            {slot.details.map((detail) => (
                              <li key={detail} className="flex gap-2">
                                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[var(--primary)]" />
                                <span>{detail}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </details>
                </div>
              </div>
            </div>
          </section>

          <section id="topics" className="py-20">
            <div className="max-w-6xl mx-auto px-6">
              <div className="mb-10">
                <p className="text-[var(--primary)] text-sm tracking-widest uppercase mb-2">
                  Inhalte
                </p>
                <h2 className="text-3xl md:text-4xl font-light text-[var(--foreground)]">
                  Themen, die immer dabei sind
                </h2>
              </div>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {topics.map((topic) => (
                  <div
                    key={topic.title}
                    className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6"
                  >
                    <h3 className="text-lg font-semibold text-[var(--foreground)] mb-4">
                      {topic.title}
                    </h3>
                    <ul className="space-y-2 text-sm text-[var(--muted)]">
                      {topic.items.map((item) => (
                        <li key={item} className="flex gap-2">
                          <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[var(--primary)]" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section id="cases" className="py-20 bg-[var(--surface)]">
            <div className="max-w-6xl mx-auto px-6">
              <div className="mb-10">
                <p className="text-[var(--primary)] text-sm tracking-widest uppercase mb-2">
                  Stadtwerke-Fokus
                </p>
                <h2 className="text-3xl md:text-4xl font-light text-[var(--foreground)]">
                  {useCases.title}
                </h2>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                {useCases.items.map((item) => (
                  <div
                    key={item}
                    className="rounded-xl border border-[var(--border)] bg-[var(--surface-alt)] p-4 text-sm text-[var(--muted)]"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section id="prompts" className="py-20">
            <div className="max-w-6xl mx-auto px-6">
              <div className="mb-10">
                <p className="text-[var(--primary)] text-sm tracking-widest uppercase mb-2">
                  Übungen
                </p>
                <h2 className="text-3xl md:text-4xl font-light text-[var(--foreground)]">
                  {prompts.title}
                </h2>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                {prompts.items.map((item) => (
                  <div
                    key={item}
                    className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-4 text-sm text-[var(--muted)]"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="py-20 bg-[var(--surface)]">
            <div className="max-w-6xl mx-auto px-6">
              <div className="mb-10">
                <p className="text-[var(--primary)] text-sm tracking-widest uppercase mb-2">
                  Ressourcen
                </p>
                <h2 className="text-3xl md:text-4xl font-light text-[var(--foreground)]">
                  {resources.title}
                </h2>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                {resources.items.map((item) => (
                  <div
                    key={item}
                    className="rounded-xl border border-[var(--border)] bg-[var(--surface-alt)] p-4 text-sm text-[var(--muted)]"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="py-20">
            <div className="max-w-4xl mx-auto px-6">
              <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8 text-center">
                <p className="text-[var(--primary)] text-sm tracking-widest uppercase mb-2">
                  Erstgespräch
                </p>
                <h2 className="text-3xl font-light text-[var(--foreground)]">{cta.title}</h2>
                <p className="text-[var(--muted)] mt-4">{cta.text}</p>
                <div className="mt-6">
                  <Link
                    href={cta.cta.href}
                    className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-[var(--primary)] text-white text-sm font-medium shadow-sm hover:bg-[var(--primary-dark)] transition-colors"
                  >
                    {cta.cta.label}
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}
