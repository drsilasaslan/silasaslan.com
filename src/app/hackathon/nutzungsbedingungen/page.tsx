import Link from "next/link";

export const metadata = {
  title: "Nutzungsbedingungen",
};

export default function HackathonNutzungsbedingungen() {
  return (
    <div className="hackathon-section">
      <div className="hackathon-container">
        <Link href="/hackathon" className="hackathon-button secondary">
          Zurück zur Hackathon-Übersicht
        </Link>
        <div className="hackathon-card mt-6 space-y-6 text-[var(--hack-muted)]">
          <h1 className="hackathon-display text-3xl font-extrabold text-[var(--hack-ink)]">
            Nutzungsbedingungen
          </h1>

          <section className="space-y-3">
            <h2 className="hackathon-display text-xl font-bold text-[var(--hack-ink)]">
              1. Geltungsbereich
            </h2>
            <p>
              Diese Nutzungsbedingungen gelten für die Nutzung der Website und der darauf
              angebotenen Browser-Spiele. Mit dem Zugriff auf die Website und der Nutzung der Spiele
              erklären Sie sich mit diesen Nutzungsbedingungen einverstanden.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="hackathon-display text-xl font-bold text-[var(--hack-ink)]">
              2. Nutzung der Website
            </h2>
            <p>
              Die Website und die darauf enthaltenen Spiele dürfen ausschließlich zu privaten,
              nicht-kommerziellen Zwecken genutzt werden. Die Spiele wurden von Kindern im Rahmen
              von Hackathons entwickelt und dienen der Demonstration ihrer kreativen und technischen
              Fähigkeiten.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="hackathon-display text-xl font-bold text-[var(--hack-ink)]">
              3. Haftungsausschluss
            </h2>
            <p>
              Die Nutzung der Website und der Spiele erfolgt auf eigene Gefahr. Wir übernehmen keine
              Gewähr für die ständige Verfügbarkeit der Website oder der Spiele. Technische
              Störungen können nicht ausgeschlossen werden.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="hackathon-display text-xl font-bold text-[var(--hack-ink)]">
              4. Datenschutz
            </h2>
            <p>
              Es werden keine personenbezogenen Daten gespeichert oder verarbeitet, mit Ausnahme der
              standardmäßigen Server-Logdateien, die für den technischen Betrieb erforderlich sind.
              Weitere Informationen finden Sie in unserer Datenschutzerklärung.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="hackathon-display text-xl font-bold text-[var(--hack-ink)]">
              5. Urheberrecht
            </h2>
            <p>
              Die auf dieser Website veröffentlichten Inhalte, insbesondere die Browser-Spiele und
              Kunstwerke, unterliegen dem Urheberrecht. Jede Vervielfältigung oder Weitergabe bedarf
              der vorherigen schriftlichen Zustimmung.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="hackathon-display text-xl font-bold text-[var(--hack-ink)]">
              6. Änderungen der Nutzungsbedingungen
            </h2>
            <p>
              Wir behalten uns vor, diese Nutzungsbedingungen jederzeit ohne Nennung von Gründen zu
              ändern. Die geänderten Nutzungsbedingungen werden auf der Website bekannt gegeben.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="hackathon-display text-xl font-bold text-[var(--hack-ink)]">
              7. Kontakt
            </h2>
            <p>Bei Fragen zu diesen Nutzungsbedingungen können Sie sich an uns wenden:</p>
            <p>E-Mail: silas.aslan(AT)gmail(DOT)com</p>
          </section>
        </div>
      </div>
    </div>
  );
}
