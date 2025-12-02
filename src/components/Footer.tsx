import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 bg-[var(--foreground)] border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Copyright */}
          <p className="text-white/40 text-sm">
            © {currentYear} Dr. Silas Aslan. Alle Rechte vorbehalten.
          </p>

          {/* Legal Links */}
          <div className="flex items-center gap-6">
            <Link
              href="/impressum"
              className="text-white/40 hover:text-white/70 text-sm transition-colors"
            >
              Impressum
            </Link>
            <Link
              href="/datenschutz"
              className="text-white/40 hover:text-white/70 text-sm transition-colors"
            >
              Datenschutz
            </Link>
          </div>

          {/* Tagline */}
          <p className="text-white/30 text-xs">
            Innovation AI.chemist – as a chemist, I get it!
          </p>
        </div>
      </div>
    </footer>
  );
}
