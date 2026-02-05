"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import aboutData from "../../data/about.json";
import nowData from "../../data/now.json";

export default function About() {
  const { title, subtitle, intro, focus, outlook } = aboutData;
  const { entries } = nowData;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 bg-[var(--surface)]">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          {/* Section Header */}
          <div className="mb-12">
            <p className="text-[var(--primary)] text-sm tracking-widest uppercase mb-2">
              Über mich
            </p>
            <h2 className="text-3xl md:text-4xl font-light text-[var(--foreground)]">{title}</h2>
            <p className="text-[var(--muted)] mt-3">{subtitle}</p>
          </div>

          {/* Content */}
          <div className="space-y-8 text-[var(--muted)] leading-relaxed">
            <div>
              <p className="text-[var(--primary)] text-xs tracking-widest uppercase mb-3">
                Worum es mir geht
              </p>
              <p className="text-lg">{intro}</p>
            </div>

            <div>
              <p className="text-[var(--primary)] text-xs tracking-widest uppercase mb-3">
                KI im Alltag
              </p>
              <p>
                {focus} {outlook}
              </p>
            </div>

            <div className="pt-6 border-t border-[var(--border)]">
              <p className="text-[var(--primary)] text-xs tracking-widest uppercase mb-4">
                Aktuell
              </p>
              <ul className="grid gap-3 text-sm md:text-base">
                {entries.map((entry) => (
                  <li key={entry.title} className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--primary)]" />
                    <span>{entry.title}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
