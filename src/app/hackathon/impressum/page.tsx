import Link from "next/link";

export const metadata = {
  title: "Impressum",
};

export default function HackathonImpressum() {
  return (
    <div className="hackathon-section">
      <div className="hackathon-container">
        <Link href="/hackathon" className="hackathon-button secondary">
          Zurück zur Hackathon-Übersicht
        </Link>
        <div className="hackathon-card mt-6">
          <h1 className="hackathon-display text-3xl font-extrabold mb-6">
            Impressum
          </h1>

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
  );
}
