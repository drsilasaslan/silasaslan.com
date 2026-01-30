import Link from "next/link";

export const metadata = {
  title: "Datenschutz",
};

export default function HackathonDatenschutz() {
  return (
    <div className="hackathon-section">
      <div className="hackathon-container">
        <Link href="/hackathon" className="hackathon-button secondary">
          Zurück zur Hackathon-Übersicht
        </Link>
        <div className="hackathon-card mt-6 space-y-6 text-[var(--hack-muted)]">
          <h1 className="hackathon-display text-3xl font-extrabold text-[var(--hack-ink)]">
            Datenschutzerklärung
          </h1>

          <section className="space-y-3">
            <h2 className="hackathon-display text-xl font-bold text-[var(--hack-ink)]">
              1. Datenschutz auf einen Blick
            </h2>
            <h3 className="font-semibold text-[var(--hack-ink)]">Allgemeine Hinweise</h3>
            <p>
              Die folgenden Hinweise geben einen einfachen Überblick darüber, was
              mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website
              besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie
              persönlich identifiziert werden können.
            </p>

            <h3 className="font-semibold text-[var(--hack-ink)]">
              Datenerfassung auf dieser Website
            </h3>
            <h4 className="font-semibold text-[var(--hack-ink)]">
              Wer ist verantwortlich für die Datenerfassung auf dieser Website?
            </h4>
            <p>
              Die Datenverarbeitung auf dieser Website erfolgt durch den
              Websitebetreiber. Die Kontaktdaten können Sie dem Impressum dieser
              Website entnehmen.
            </p>

            <h4 className="font-semibold text-[var(--hack-ink)]">
              Wie erfassen wir Ihre Daten?
            </h4>
            <p>
              Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese
              mitteilen. Hierbei kann es sich z.B. um Daten handeln, die Sie in
              ein Kontaktformular eingeben.
            </p>
            <p>
              Andere Daten werden automatisch oder nach Ihrer Einwilligung beim
              Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor
              allem technische Daten (z.B. Internetbrowser, Betriebssystem oder
              Uhrzeit des Seitenaufrufs).
            </p>

            <h4 className="font-semibold text-[var(--hack-ink)]">
              Wofür nutzen wir Ihre Daten?
            </h4>
            <p>
              Ein Teil der Daten wird erhoben, um eine fehlerfreie
              Bereitstellung der Website zu gewährleisten. Andere Daten können
              zur Analyse Ihres Nutzerverhaltens verwendet werden.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="hackathon-display text-xl font-bold text-[var(--hack-ink)]">
              2. Hosting
            </h2>
            <p>Wir hosten die Inhalte unserer Website bei folgendem Anbieter:</p>
            <h3 className="font-semibold text-[var(--hack-ink)]">Externes Hosting</h3>
            <p>
              Diese Website wird extern gehostet. Die personenbezogenen Daten,
              die auf dieser Website erfasst werden, werden auf den Servern des
              Hosters gespeichert. Dabei kann es sich v. a. um IP-Adressen,
              Kontaktanfragen, Meta- und Kommunikationsdaten, Vertragsdaten,
              Kontaktdaten, Namen, Websitezugriffe und sonstige Daten, die über
              eine Website generiert werden, handeln.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="hackathon-display text-xl font-bold text-[var(--hack-ink)]">
              3. Allgemeine Hinweise und Pflichtinformationen
            </h2>
            <h3 className="font-semibold text-[var(--hack-ink)]">Datenschutz</h3>
            <p>
              Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen
              Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten
              vertraulich und entsprechend den gesetzlichen
              Datenschutzvorschriften sowie dieser Datenschutzerklärung.
            </p>
            <p>
              Wenn Sie diese Website benutzen, werden verschiedene
              personenbezogene Daten erhoben. Personenbezogene Daten sind Daten,
              mit denen Sie persönlich identifiziert werden können. Die
              vorliegende Datenschutzerklärung erläutert, welche Daten wir
              erheben und wofür wir sie nutzen. Sie erläutert auch, wie und zu
              welchem Zweck das geschieht.
            </p>

            <h3 className="font-semibold text-[var(--hack-ink)]">
              Hinweis zur verantwortlichen Stelle
            </h3>
            <p>Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:</p>
            <p>
              Silas Aslan
              <br />
              Schillerstr. 52
              <br />
              76135 Karlsruhe
              <br />
              Deutschland
            </p>
            <p>E-Mail: silas.aslan(AT)gmail(DOT)com</p>
          </section>
        </div>
      </div>
    </div>
  );
}
