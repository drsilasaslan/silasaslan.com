'use client';

import Link from 'next/link';
import { ExternalLink } from 'lucide-react';

export default function TestButton() {
  return (
    <div className="fixed bottom-6 right-6 z-40">
      <Link
        href="/intern"
        className="bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white px-4 py-2 rounded-full shadow-lg flex items-center gap-2 transition-colors"
      >
        <ExternalLink size={16} />
        <span className="text-sm font-medium">Member Login</span>
      </Link>
    </div>
  );
}
