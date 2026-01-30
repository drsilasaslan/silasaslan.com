import Link from "next/link";

const hackathonData = require("../../../data/hackathon.json");

type Game = {
  id: string;
  title: string;
  description: string;
  href: string;
  image?: string;
  placeholder?: string;
  badge?: string;
};

export default function HackathonPage() {
  const {
    hero,
    about,
    hackathonSectionTitle,
    hackathons,
    future,
    gamesSectionTitle,
    games,
    artworkSectionTitle,
    artworkIntro,
    artworks,
  } = hackathonData;

  const gameMap = new Map<string, Game>(
    games.map((game: Game) => [game.id, game])
  );

  const renderGameCard = (game: Game, compact = false) => (
    <div
      key={game.id}
      className={`hackathon-card ${compact ? "p-5" : ""}`}
    >
      <div
        className={`hackathon-game-thumb ${game.image ? "image" : ""}`}
        style={
          game.image
            ? { backgroundImage: `url(${game.image})` }
            : undefined
        }
        aria-hidden
      >
        {!game.image && <span>{game.placeholder ?? game.title}</span>}
      </div>
      <div className="mt-4 flex items-center justify-between gap-3">
        <h4 className="hackathon-display text-lg font-bold">{game.title}</h4>
        {game.badge && <span className="hackathon-tag">{game.badge}</span>}
      </div>
      <p className="text-sm text-[var(--hack-muted)] mt-2">
        {game.description}
      </p>
      <a
        href={game.href}
        className="hackathon-button primary mt-4"
        aria-label={`${game.title} spielen`}
      >
        Spielen
      </a>
    </div>
  );

  return (
    <div>
      <header className="hackathon-header">
        <div className="hackathon-container">
          <nav className="hackathon-nav">
            <Link href="/hackathon" className="hackathon-brand hackathon-display">
              {hero.title}
              <span>Kinder</span>
            </Link>
            <div className="hackathon-nav-links">
              <a href="#hackathons">Hackathons</a>
              <a href="#spiele">Spiele</a>
              <a href="#kunst">Kunstwerke</a>
              <Link href="/">Zur Hauptseite</Link>
            </div>
          </nav>
        </div>
      </header>

      <main>
        <section className="hackathon-hero" id="intro">
          <span className="hackathon-float one" aria-hidden />
          <span className="hackathon-float two" aria-hidden />
          <span className="hackathon-float three" aria-hidden />

          <div className="hackathon-container">
            <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] items-center">
              <div>
                <span className="hackathon-pill">Workshops + Hackathons</span>
                <h1 className="hackathon-display text-4xl md:text-5xl font-extrabold mt-4">
                  {hero.title}
                </h1>
                <p className="text-lg text-[var(--hack-muted)] mt-3">
                  {hero.subtitle}
                </p>
                <div className="flex flex-wrap gap-3 mt-6">
                  <a href="#spiele" className="hackathon-button primary">
                    Spiele entdecken
                  </a>
                  <a href="#hackathons" className="hackathon-button secondary">
                    Hackathons ansehen
                  </a>
                </div>
                <div className="flex flex-wrap gap-2 mt-6">
                  <span className="hackathon-tag">9-14 Jahre</span>
                  <span className="hackathon-tag">KI + Programmierung</span>
                  <span className="hackathon-tag">Karlsruhe</span>
                </div>
              </div>

              <div className="hackathon-hero-card">
                <h2 className="hackathon-display text-2xl font-bold mb-4">
                  {hero.introHeading}
                </h2>
                <div className="space-y-4 text-[var(--hack-muted)]">
                  {hero.introParagraphs.map((paragraph: string) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="hackathon-section" id="about">
          <div className="hackathon-container">
            <div className="hackathon-card soft">
              <div className="grid gap-8 md:grid-cols-[0.9fr_1.1fr] items-center">
                <div>
                  <img
                    src={about.image}
                    alt={about.imageAlt}
                    className="w-full h-full object-cover rounded-3xl border-4 border-white"
                  />
                </div>
                <div>
                  <p className="hackathon-pill">{about.title}</p>
                  <h2 className="hackathon-display text-3xl font-extrabold mt-4">
                    {about.name}
                  </h2>
                  <p className="text-[var(--hack-muted)] font-semibold mt-2">
                    {about.role}
                  </p>
                  <div className="space-y-4 text-[var(--hack-muted)] mt-4">
                    {about.paragraphs.map((paragraph: string) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="hackathon-section" id="hackathons">
          <div className="hackathon-container">
            <h2 className="hackathon-display hackathon-section-title font-extrabold">
              {hackathonSectionTitle}
            </h2>
            <div className="space-y-6">
              {hackathons.map((hackathon: any) => (
                <div className="hackathon-card" key={hackathon.title}>
                  <div className="flex flex-col gap-6">
                    <div>
                      <h3 className="hackathon-display text-2xl font-bold">
                        {hackathon.title}
                      </h3>
                      <p className="text-[var(--hack-muted)] mt-2">
                        {hackathon.description}
                      </p>
                    </div>

                    <div className="hackathon-grid two">
                      {hackathon.highlights.map((highlight: any) => (
                        <div className="hackathon-highlight" key={highlight.title}>
                          <h4 className="font-bold">{highlight.title}</h4>
                          <p className="text-sm text-[var(--hack-muted)] mt-2">
                            {highlight.text}
                          </p>
                        </div>
                      ))}
                    </div>

                    {hackathon.gameIds && (
                      <div className="hackathon-grid three">
                        {hackathon.gameIds
                          .map((id: string) => gameMap.get(id))
                          .filter(Boolean)
                          .map((game: Game) => renderGameCard(game, true))}
                      </div>
                    )}
                  </div>
                </div>
              ))}

              <div className="hackathon-card soft">
                <h3 className="hackathon-display text-2xl font-bold">
                  {future.title}
                </h3>
                <p className="text-[var(--hack-muted)] mt-2">{future.text}</p>
              </div>
            </div>
          </div>
        </section>

        <section className="hackathon-section" id="spiele">
          <div className="hackathon-container">
            <h2 className="hackathon-display hackathon-section-title font-extrabold">
              {gamesSectionTitle}
            </h2>
            <div className="hackathon-grid three">
              {games.map((game: Game) => renderGameCard(game))}
            </div>
          </div>
        </section>

        <section className="hackathon-section" id="kunst">
          <div className="hackathon-container">
            <h2 className="hackathon-display hackathon-section-title font-extrabold">
              {artworkSectionTitle}
            </h2>
            <p className="text-[var(--hack-muted)] max-w-2xl">
              {artworkIntro}
            </p>
            <div className="hackathon-grid three mt-6">
              {artworks.map((artwork: any) => (
                <div className="hackathon-card hackathon-artwork" key={artwork.title}>
                  <img src={artwork.image} alt={artwork.alt} />
                  <div className="mt-4">
                    <div className="text-xs uppercase tracking-widest text-[var(--hack-muted)]">
                      {artwork.date}
                    </div>
                    <h4 className="hackathon-display text-lg font-bold mt-2">
                      {artwork.title}
                    </h4>
                    <p className="text-sm text-[var(--hack-muted)] mt-2">
                      {artwork.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="hackathon-footer">
        <div className="hackathon-container">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <p className="text-sm text-[var(--hack-muted)]">
              © 2025 Silas Aslan
            </p>
            <div className="flex flex-wrap gap-4 text-sm">
              <Link href="/hackathon/impressum">Impressum</Link>
              <Link href="/hackathon/datenschutz">Datenschutz</Link>
              <Link href="/hackathon/nutzungsbedingungen">
                Nutzungsbedingungen
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
