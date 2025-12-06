'use client';

import { ExternalLink } from 'lucide-react';

const kirbyPanelUrl =
  process.env.NEXT_PUBLIC_KIRBY_PANEL_URL ?? '/kirby/panel';
const isExternalKirbyPanel = /^https?:\/\//.test(kirbyPanelUrl);
const normalizedPanelUrl = kirbyPanelUrl.endsWith('/')
  ? kirbyPanelUrl.slice(0, -1)
  : kirbyPanelUrl;
const panelLogoutUrl = `${normalizedPanelUrl}/logout`;

export default function TestButton() {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2">
      <div>
        <a
          href={kirbyPanelUrl}
          target={isExternalKirbyPanel ? '_blank' : undefined}
          rel={isExternalKirbyPanel ? 'noopener noreferrer' : undefined}
          className="bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white px-4 py-2 rounded-full shadow-lg flex items-center gap-2 transition-colors"
        >
          <ExternalLink size={16} />
          <span className="text-sm font-medium">Member Login</span>
        </a>
      </div>

      <a
        href={kirbyPanelUrl}
        target={isExternalKirbyPanel ? '_blank' : undefined}
        rel={isExternalKirbyPanel ? 'noopener noreferrer' : undefined}
        className="text-xs text-[var(--muted)] hover:text-[var(--primary)] underline-offset-2 hover:underline transition-colors"
      >
        Admin Login
      </a>

      <a
        href={panelLogoutUrl}
        target={isExternalKirbyPanel ? '_blank' : undefined}
        rel={isExternalKirbyPanel ? 'noopener noreferrer' : undefined}
        className="text-xs text-[var(--muted)] hover:text-white px-3 py-1 rounded-full border border-[var(--border)] hover:bg-[var(--primary)] hover:border-[var(--primary)] transition-colors"
      >
        Logout
      </a>
    </div>
  );
}
