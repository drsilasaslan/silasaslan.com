"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { useSyncExternalStore } from "react";

const consentKey = "cookie-consent";

const getSnapshot = () => {
  if (typeof window === "undefined") {
    return false;
  }
  return !localStorage.getItem(consentKey);
};

const getServerSnapshot = () => false;

const subscribe = (callback: () => void) => {
  if (typeof window === "undefined") {
    return () => undefined;
  }
  window.addEventListener("cookie-consent-change", callback);
  window.addEventListener("storage", callback);
  return () => {
    window.removeEventListener("cookie-consent-change", callback);
    window.removeEventListener("storage", callback);
  };
};

const notifyConsentChange = () => {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new Event("cookie-consent-change"));
  }
};

export default function CookieBanner() {
  const isVisible = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const acceptAll = () => {
    localStorage.setItem(
      consentKey,
      JSON.stringify({
        necessary: true,
        analytics: true,
        marketing: false,
        timestamp: new Date().toISOString(),
      }),
    );
    notifyConsentChange();
  };

  const acceptNecessary = () => {
    localStorage.setItem(
      consentKey,
      JSON.stringify({
        necessary: true,
        analytics: false,
        marketing: false,
        timestamp: new Date().toISOString(),
      }),
    );
    notifyConsentChange();
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6"
        >
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl border border-[var(--border)] p-6">
            <div className="flex items-start justify-between gap-4 mb-4">
              <h3 className="text-lg font-medium text-[var(--foreground)]">Cookie-Einstellungen</h3>
              <button
                type="button"
                onClick={acceptNecessary}
                className="text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
                aria-label="Schließen"
              >
                <X size={20} />
              </button>
            </div>

            <p className="text-sm text-[var(--muted)] mb-6">
              Diese Website verwendet Cookies, um Ihnen die bestmögliche Erfahrung zu bieten.
              Notwendige Cookies sind für die Grundfunktionen der Website erforderlich. Weitere
              Informationen finden Sie in unserer{" "}
              <a href="/datenschutz" className="text-[var(--primary)] hover:underline">
                Datenschutzerklärung
              </a>
              .
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <button
                type="button"
                onClick={acceptNecessary}
                className="px-6 py-2.5 text-sm border border-[var(--border)] rounded-lg text-[var(--foreground)] hover:bg-[var(--surface-alt)] transition-colors"
              >
                Nur notwendige
              </button>
              <button
                type="button"
                onClick={acceptAll}
                className="px-6 py-2.5 text-sm bg-[var(--primary)] text-white rounded-lg hover:bg-[var(--primary-dark)] transition-colors"
              >
                Alle akzeptieren
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
