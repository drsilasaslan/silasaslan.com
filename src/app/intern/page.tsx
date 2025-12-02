'use client';

import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function InternPage() {
  return (
    <div className="min-h-screen bg-[var(--surface)]">
      {/* Header */}
      <header className="bg-white border-b border-[var(--border)] sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[var(--muted)] hover:text-[var(--primary)] transition-colors"
          >
            <ArrowLeft size={18} />
            <span className="text-sm">Zurück zur Startseite</span>
          </Link>
          <span className="text-sm text-[var(--muted-light)]">Interner Bereich</span>
        </div>
      </header>

      {/* iFrame Content */}
      <main className="w-full">
        <iframe
          src="https://wp.silasaslan.com/wordpress/?page_id=23"
          style={{ width: '100%', minHeight: '80vh', border: 'none' }}
          loading="lazy"
          title="Interner Bereich"
        />
      </main>
    </div>
  );
}
