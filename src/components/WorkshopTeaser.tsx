import Link from "next/link";

export default function WorkshopTeaser() {
  return (
    <section className="py-16 bg-[var(--surface)]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="relative overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface-alt)] p-8 md:p-10">
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
                ChatGPT-Workshop
              </p>
              <h2 className="text-2xl md:text-3xl font-light text-[var(--foreground)] mt-3">
                Von 0 auf ChatGPT in 2 Stunden
              </h2>
              <p className="text-[var(--muted)] mt-3 max-w-2xl">
                Praxisnaher Einstieg für Stadtwerke: Grundlagen, Live-Demos und Übungen mit
                konkreten Arbeitsalltag-Cases.
              </p>
              <div className="flex flex-wrap gap-2 mt-5">
                {["120 Minuten", "Stadtwerke & EVU", "Live-Demos", "Interaktiv"].map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center rounded-full bg-white/70 px-3 py-1 text-xs text-[var(--muted)]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-[var(--primary)] text-white text-sm font-medium shadow-sm hover:bg-[var(--primary-dark)] transition-colors"
              >
                Kostenloses Erstgespräch
              </Link>
              <Link
                href="/workshop"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-[var(--border)] text-[var(--foreground)] text-sm font-medium hover:border-[var(--primary)]/50 transition-colors"
              >
                Details ansehen
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
