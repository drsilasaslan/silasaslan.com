"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import otongoData from "../../data/otongo.json";

export default function Otongo() {
  const { kicker, title, intro, pillars, cta } = otongoData;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="otongo" className="py-24 bg-[var(--surface-alt)]">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="rounded-2xl border border-[var(--border)] bg-white p-8 md:p-10"
        >
          <div className="flex flex-col lg:flex-row gap-10 lg:items-center">
            <div className="flex-1">
              <p className="text-xs uppercase tracking-[0.3em] text-[var(--muted)]">{kicker}</p>
              <h2 className="text-2xl md:text-3xl font-light text-[var(--foreground)] mt-3">
                {title}
              </h2>
              <p className="text-[var(--muted)] mt-4 max-w-2xl">{intro}</p>
              <ul className="mt-6 space-y-2 text-sm text-[var(--muted)]">
                {pillars.map((pillar) => (
                  <li key={pillar} className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--primary)]" />
                    <span>{pillar}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex items-center">
              <a
                href={cta.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-[var(--primary)] text-white text-sm font-medium shadow-sm hover:bg-[var(--primary-dark)] transition-colors"
              >
                {cta.label}
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
