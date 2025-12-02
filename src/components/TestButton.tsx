'use client';

import { useState } from 'react';
import { ExternalLink, X } from 'lucide-react';

export default function TestButton() {
  const [showIframe, setShowIframe] = useState(false);

  if (showIframe) {
    return (
      <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm">
        <div className="relative w-full h-full p-4">
          <button
            onClick={() => setShowIframe(false)}
            className="absolute top-6 right-6 z-10 bg-white/90 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg transition-colors"
            aria-label="Schließen"
          >
            <X size={24} />
          </button>
          
          <div className="w-full h-full bg-white rounded-lg shadow-2xl overflow-hidden">
            <iframe
              src="https://wp.silasaslan.com/wordpress/?page_id=23"
              style={{ width: '100%', height: '100%', border: 'none' }}
              loading="lazy"
              title="WordPress Testseite"
            />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 z-40">
      <button
        onClick={() => setShowIframe(true)}
        className="bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white px-4 py-2 rounded-full shadow-lg flex items-center gap-2 transition-colors"
      >
        <ExternalLink size={16} />
        <span className="text-sm font-medium">WordPress Test</span>
      </button>
    </div>
  );
}
