import Link from "next/link";

export default function HackathonCTA() {
  return (
    <section className="py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="relative overflow-hidden rounded-2xl border border-[var(--border)] bg-white p-8 md:p-10">
          <div
            className="absolute -top-12 -right-12 h-36 w-36 rounded-full bg-[var(--accent-light)]/30"
            aria-hidden={true}
          />
          <div
            className="absolute -bottom-10 -left-10 h-32 w-32 rounded-full bg-[var(--primary)]/20"
            aria-hidden={true}
          />

          <div className="relative flex flex-col md:flex-row md:items-center gap-6">
            <div className="flex-1">
              <p className="text-xs uppercase tracking-[0.3em] text-[var(--muted)]">
                Hackathon-Bereich
              </p>
              <h2 className="text-2xl md:text-3xl font-light text-[var(--foreground)] mt-3">
                Hackathon Browsergames von Kindern
              </h2>
              <p className="text-[var(--muted)] mt-3 max-w-2xl">
                Einblicke in Workshops, Spiele und KI-Kunst, die gemeinsam mit Kindern entwickelt
                wurden.
              </p>
            </div>
            <Link
              href="/hackathon"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-[var(--primary)] text-white text-sm font-medium shadow-sm hover:bg-[var(--primary-dark)] transition-colors"
            >
              Zu den Hackathons
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
