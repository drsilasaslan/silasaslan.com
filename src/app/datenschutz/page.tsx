import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export const metadata = {
  title: 'Datenschutzerklärung | Dr. Silas Aslan',
  description: 'Datenschutzerklärung gemäß DSGVO',
};

export default function Datenschutz() {
  return (
    <div className="min-h-screen bg-[var(--surface)]">
      {/* Header */}
      <header className="bg-white border-b border-[var(--border)]">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[var(--muted)] hover:text-[var(--primary)] transition-colors"
          >
            <ArrowLeft size={18} />
            <span className="text-sm">Zurück zur Startseite</span>
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-3xl font-light text-[var(--foreground)] mb-8">Datenschutzerklärung</h1>

        <div className="prose prose-gray max-w-none space-y-8">
          {/* 1. Datenschutz auf einen Blick */}
          <section>
            <h2 className="text-xl font-medium text-[var(--foreground)] mb-4">
              1. Datenschutz auf einen Blick
            </h2>
            
            <h3 className="text-lg font-medium text-[var(--foreground)] mt-6 mb-3">
              Allgemeine Hinweise
            </h3>
            <p className="text-[var(--muted)] leading-relaxed">
              Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren 
              personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene 
              Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können. 
              Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem 
              Text aufgeführten Datenschutzerklärung.
            </p>

            <h3 className="text-lg font-medium text-[var(--foreground)] mt-6 mb-3">
              Datenerfassung auf dieser Website
            </h3>
            <p className="text-[var(--muted)] leading-relaxed">
              <strong className="text-[var(--foreground)]">
                Wer ist verantwortlich für die Datenerfassung auf dieser Website?
              </strong>
              <br />
              Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen 
              Kontaktdaten können Sie dem Abschnitt „Hinweis zur Verantwortlichen Stelle" in dieser 
              Datenschutzerklärung entnehmen.
            </p>

            <p className="text-[var(--muted)] leading-relaxed mt-4">
              <strong className="text-[var(--foreground)]">Wie erfassen wir Ihre Daten?</strong>
              <br />
              Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann 
              es sich z.B. um Daten handeln, die Sie in ein Kontaktformular eingeben. Andere Daten 
              werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere 
              IT-Systeme erfasst. Das sind vor allem technische Daten (z.B. Internetbrowser, 
              Betriebssystem oder Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten erfolgt 
              automatisch, sobald Sie diese Website betreten.
            </p>

            <p className="text-[var(--muted)] leading-relaxed mt-4">
              <strong className="text-[var(--foreground)]">Wofür nutzen wir Ihre Daten?</strong>
              <br />
              Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu 
              gewährleisten. Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden.
            </p>

            <p className="text-[var(--muted)] leading-relaxed mt-4">
              <strong className="text-[var(--foreground)]">
                Welche Rechte haben Sie bezüglich Ihrer Daten?
              </strong>
              <br />
              Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und 
              Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein 
              Recht, die Berichtigung oder Löschung dieser Daten zu verlangen. Wenn Sie eine 
              Einwilligung zur Datenverarbeitung erteilt haben, können Sie diese Einwilligung 
              jederzeit für die Zukunft widerrufen. Außerdem haben Sie das Recht, unter bestimmten 
              Umständen die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. 
              Des Weiteren steht Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.
            </p>
          </section>

          {/* 2. Hosting */}
          <section>
            <h2 className="text-xl font-medium text-[var(--foreground)] mb-4">
              2. Hosting
            </h2>
            <p className="text-[var(--muted)] leading-relaxed">
              Wir hosten die Inhalte unserer Website bei folgendem Anbieter:
            </p>
            
            <h3 className="text-lg font-medium text-[var(--foreground)] mt-6 mb-3">
              Externes Hosting
            </h3>
            <p className="text-[var(--muted)] leading-relaxed">
              Diese Website wird extern gehostet. Die personenbezogenen Daten, die auf dieser Website 
              erfasst werden, werden auf den Servern des Hosters gespeichert. Hierbei kann es sich 
              v.a. um IP-Adressen, Kontaktanfragen, Meta- und Kommunikationsdaten, Vertragsdaten, 
              Kontaktdaten, Namen, Websitezugriffe und sonstige Daten, die über eine Website generiert 
              werden, handeln.
            </p>
            <p className="text-[var(--muted)] leading-relaxed mt-4">
              Das externe Hosting erfolgt zum Zwecke der Vertragserfüllung gegenüber unseren 
              potenziellen und bestehenden Kunden (Art. 6 Abs. 1 lit. b DSGVO) und im Interesse einer 
              sicheren, schnellen und effizienten Bereitstellung unseres Online-Angebots durch einen 
              professionellen Anbieter (Art. 6 Abs. 1 lit. f DSGVO).
            </p>
          </section>

          {/* 3. Allgemeine Hinweise und Pflichtinformationen */}
          <section>
            <h2 className="text-xl font-medium text-[var(--foreground)] mb-4">
              3. Allgemeine Hinweise und Pflichtinformationen
            </h2>
            
            <h3 className="text-lg font-medium text-[var(--foreground)] mt-6 mb-3">
              Datenschutz
            </h3>
            <p className="text-[var(--muted)] leading-relaxed">
              Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. 
              Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen 
              Datenschutzvorschriften sowie dieser Datenschutzerklärung.
            </p>
            <p className="text-[var(--muted)] leading-relaxed mt-4">
              Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben. 
              Personenbezogene Daten sind Daten, mit denen Sie persönlich identifiziert werden können. 
              Die vorliegende Datenschutzerklärung erläutert, welche Daten wir erheben und wofür wir 
              sie nutzen. Sie erläutert auch, wie und zu welchem Zweck das geschieht.
            </p>

            <h3 className="text-lg font-medium text-[var(--foreground)] mt-6 mb-3">
              Hinweis zur verantwortlichen Stelle
            </h3>
            <p className="text-[var(--muted)] leading-relaxed">
              Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
            </p>
            <p className="text-[var(--muted)] leading-relaxed mt-4">
              Dr. Silas Aslan<br />
              [Straße und Hausnummer]<br />
              [PLZ] Karlsruhe<br />
              Deutschland<br /><br />
              E-Mail: [E-Mail-Adresse]
            </p>
            <p className="text-[var(--muted)] leading-relaxed mt-4">
              Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder 
              gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen 
              Daten (z.B. Namen, E-Mail-Adressen o. Ä.) entscheidet.
            </p>

            <h3 className="text-lg font-medium text-[var(--foreground)] mt-6 mb-3">
              Speicherdauer
            </h3>
            <p className="text-[var(--muted)] leading-relaxed">
              Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt 
              wurde, verbleiben Ihre personenbezogenen Daten bei uns, bis der Zweck für die 
              Datenverarbeitung entfällt. Wenn Sie ein berechtigtes Löschersuchen geltend machen oder 
              eine Einwilligung zur Datenverarbeitung widerrufen, werden Ihre Daten gelöscht, sofern 
              wir keine anderen rechtlich zulässigen Gründe für die Speicherung Ihrer personenbezogenen 
              Daten haben; in letzterem Fall erfolgt die Löschung nach Fortfall dieser Gründe.
            </p>

            <h3 className="text-lg font-medium text-[var(--foreground)] mt-6 mb-3">
              Allgemeine Hinweise zu den Rechtsgrundlagen der Datenverarbeitung
            </h3>
            <p className="text-[var(--muted)] leading-relaxed">
              Sofern Sie in die Datenverarbeitung eingewilligt haben, verarbeiten wir Ihre 
              personenbezogenen Daten auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO bzw. Art. 9 Abs. 2 
              lit. a DSGVO, sofern besondere Datenkategorien nach Art. 9 Abs. 1 DSGVO verarbeitet 
              werden. Sofern Sie in die Speicherung von Cookies oder in den Zugriff auf Informationen 
              in Ihr Endgerät eingewilligt haben, erfolgt die Datenverarbeitung zusätzlich auf 
              Grundlage von § 25 Abs. 1 TDDDG.
            </p>

            <h3 className="text-lg font-medium text-[var(--foreground)] mt-6 mb-3">
              Widerruf Ihrer Einwilligung zur Datenverarbeitung
            </h3>
            <p className="text-[var(--muted)] leading-relaxed">
              Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich. 
              Sie können eine bereits erteilte Einwilligung jederzeit widerrufen. Die Rechtmäßigkeit 
              der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.
            </p>

            <h3 className="text-lg font-medium text-[var(--foreground)] mt-6 mb-3">
              Widerspruchsrecht gegen die Datenerhebung in besonderen Fällen (Art. 21 DSGVO)
            </h3>
            <p className="text-[var(--muted)] leading-relaxed">
              WENN DIE DATENVERARBEITUNG AUF GRUNDLAGE VON ART. 6 ABS. 1 LIT. E ODER F DSGVO ERFOLGT, 
              HABEN SIE JEDERZEIT DAS RECHT, AUS GRÜNDEN, DIE SICH AUS IHRER BESONDEREN SITUATION 
              ERGEBEN, GEGEN DIE VERARBEITUNG IHRER PERSONENBEZOGENEN DATEN WIDERSPRUCH EINZULEGEN. 
              DIE JEWEILIGE RECHTSGRUNDLAGE, AUF DER EINE VERARBEITUNG BERUHT, ENTNEHMEN SIE DIESER 
              DATENSCHUTZERKLÄRUNG. WENN SIE WIDERSPRUCH EINLEGEN, WERDEN WIR IHRE BETROFFENEN 
              PERSONENBEZOGENEN DATEN NICHT MEHR VERARBEITEN.
            </p>

            <h3 className="text-lg font-medium text-[var(--foreground)] mt-6 mb-3">
              Beschwerderecht bei der zuständigen Aufsichtsbehörde
            </h3>
            <p className="text-[var(--muted)] leading-relaxed">
              Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein Beschwerderecht bei 
              einer Aufsichtsbehörde zu. Das Beschwerderecht besteht unbeschadet anderweitiger 
              verwaltungsrechtlicher oder gerichtlicher Rechtsbehelfe.
            </p>

            <h3 className="text-lg font-medium text-[var(--foreground)] mt-6 mb-3">
              Recht auf Datenübertragbarkeit
            </h3>
            <p className="text-[var(--muted)] leading-relaxed">
              Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung oder in Erfüllung 
              eines Vertrags automatisiert verarbeiten, an sich oder an einen Dritten in einem 
              gängigen, maschinenlesbaren Format aushändigen zu lassen.
            </p>

            <h3 className="text-lg font-medium text-[var(--foreground)] mt-6 mb-3">
              Auskunft, Berichtigung und Löschung
            </h3>
            <p className="text-[var(--muted)] leading-relaxed">
              Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf 
              unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft 
              und Empfänger und den Zweck der Datenverarbeitung und ggf. ein Recht auf Berichtigung 
              oder Löschung dieser Daten.
            </p>

            <h3 className="text-lg font-medium text-[var(--foreground)] mt-6 mb-3">
              Recht auf Einschränkung der Verarbeitung
            </h3>
            <p className="text-[var(--muted)] leading-relaxed">
              Sie haben das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten 
              zu verlangen. Hierzu können Sie sich jederzeit an uns wenden.
            </p>
          </section>

          {/* 4. Datenerfassung auf dieser Website */}
          <section>
            <h2 className="text-xl font-medium text-[var(--foreground)] mb-4">
              4. Datenerfassung auf dieser Website
            </h2>
            
            <h3 className="text-lg font-medium text-[var(--foreground)] mt-6 mb-3">
              Cookies
            </h3>
            <p className="text-[var(--muted)] leading-relaxed">
              Unsere Internetseiten verwenden so genannte „Cookies". Cookies sind kleine Datenpakete 
              und richten auf Ihrem Endgerät keinen Schaden an. Sie werden entweder vorübergehend für 
              die Dauer einer Sitzung (Session-Cookies) oder dauerhaft (permanente Cookies) auf Ihrem 
              Endgerät gespeichert. Session-Cookies werden nach Ende Ihres Besuchs automatisch 
              gelöscht. Permanente Cookies bleiben auf Ihrem Endgerät gespeichert, bis Sie diese 
              selbst löschen oder eine automatische Löschung durch Ihren Webbrowser erfolgt.
            </p>
            <p className="text-[var(--muted)] leading-relaxed mt-4">
              Cookies können von uns (First-Party-Cookies) oder von Drittunternehmen stammen 
              (sog. Third-Party-Cookies). Third-Party-Cookies ermöglichen die Einbindung bestimmter 
              Dienstleistungen von Drittunternehmen innerhalb von Webseiten.
            </p>
            <p className="text-[var(--muted)] leading-relaxed mt-4">
              Cookies, die zur Durchführung des elektronischen Kommunikationsvorgangs, zur 
              Bereitstellung bestimmter, von Ihnen erwünschter Funktionen oder zur Optimierung der 
              Website erforderlich sind (notwendige Cookies), werden auf Grundlage von Art. 6 Abs. 1 
              lit. f DSGVO gespeichert, sofern keine andere Rechtsgrundlage angegeben wird.
            </p>

            <h3 className="text-lg font-medium text-[var(--foreground)] mt-6 mb-3">
              Einwilligung mit Cookie-Banner
            </h3>
            <p className="text-[var(--muted)] leading-relaxed">
              Diese Website nutzt ein Cookie-Banner zur Einholung Ihrer Einwilligung für die 
              Speicherung bestimmter Cookies auf Ihrem Endgerät oder für den Einsatz bestimmter 
              Technologien. Ihre Einwilligung wird lokal in Ihrem Browser gespeichert. Sie können 
              Ihre Cookie-Einstellungen jederzeit ändern, indem Sie Ihre Browser-Cookies löschen.
            </p>

            <h3 className="text-lg font-medium text-[var(--foreground)] mt-6 mb-3">
              Server-Log-Dateien
            </h3>
            <p className="text-[var(--muted)] leading-relaxed">
              Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten 
              Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind:
            </p>
            <ul className="list-disc list-inside text-[var(--muted)] mt-4 space-y-2">
              <li>Browsertyp und Browserversion</li>
              <li>verwendetes Betriebssystem</li>
              <li>Referrer URL</li>
              <li>Hostname des zugreifenden Rechners</li>
              <li>Uhrzeit der Serveranfrage</li>
              <li>IP-Adresse</li>
            </ul>
            <p className="text-[var(--muted)] leading-relaxed mt-4">
              Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen. 
              Die Erfassung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO.
            </p>
          </section>

          {/* 5. Soziale Medien */}
          <section>
            <h2 className="text-xl font-medium text-[var(--foreground)] mb-4">
              5. Soziale Medien
            </h2>
            
            <h3 className="text-lg font-medium text-[var(--foreground)] mt-6 mb-3">
              Verlinkung zu sozialen Netzwerken
            </h3>
            <p className="text-[var(--muted)] leading-relaxed">
              Auf dieser Website sind lediglich Verlinkungen zu sozialen Netzwerken wie LinkedIn und 
              XING eingebunden. Beim Klick auf diese Links werden Sie auf die entsprechenden externen 
              Seiten weitergeleitet. Erst beim Besuch dieser externen Seiten werden Daten an die 
              jeweiligen Anbieter übertragen. Informationen zum Umgang mit Ihren personenbezogenen 
              Daten bei Nutzung dieser Websites entnehmen Sie bitte den jeweiligen 
              Datenschutzerklärungen der Anbieter.
            </p>
          </section>

          {/* 6. Plugins und Tools */}
          <section>
            <h2 className="text-xl font-medium text-[var(--foreground)] mb-4">
              6. Plugins und Tools
            </h2>
            
            <h3 className="text-lg font-medium text-[var(--foreground)] mt-6 mb-3">
              Google Fonts (lokales Hosting)
            </h3>
            <p className="text-[var(--muted)] leading-relaxed">
              Diese Seite nutzt zur einheitlichen Darstellung von Schriftarten so genannte Google 
              Fonts, die lokal installiert sind. Eine Verbindung zu Servern von Google findet dabei 
              nicht statt.
            </p>
          </section>
        </div>

        {/* Note */}
        <div className="mt-12 p-4 bg-[var(--surface-alt)] rounded-lg border border-[var(--border)]">
          <p className="text-sm text-[var(--muted)]">
            <strong className="text-[var(--foreground)]">Hinweis:</strong> Bitte ersetzen Sie die 
            Platzhalter [Straße und Hausnummer], [PLZ] und [E-Mail-Adresse] mit Ihren tatsächlichen 
            Kontaktdaten. Bei Verwendung weiterer Dienste (z.B. Analytics, Newsletter) muss diese 
            Datenschutzerklärung entsprechend erweitert werden.
          </p>
        </div>

        {/* Last updated */}
        <p className="mt-8 text-sm text-[var(--muted-light)]">
          Stand: Dezember 2024
        </p>
      </main>
    </div>
  );
}
