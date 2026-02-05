"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import workstyleData from "../../data/workstyle.json";

export default function Workstyle() {
  const { kicker, title, subtitle, steps } = workstyleData;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="workstyle" className="py-24 bg-[var(--surface)]">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-16">
            <p className="text-[var(--primary)] text-sm tracking-widest uppercase mb-2">{kicker}</p>
            <h2 className="text-3xl md:text-4xl font-light text-[var(--foreground)]">{title}</h2>
            <p className="mt-3 text-[var(--muted)] max-w-2xl">{subtitle}</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="border border-[var(--border)] rounded-lg p-6 bg-[var(--surface-alt)]"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs tracking-[0.3em] text-[var(--muted)]">0{index + 1}</span>
                  <h3 className="text-lg font-medium text-[var(--foreground)]">{step.title}</h3>
                </div>
                <p className="text-sm text-[var(--muted)] leading-relaxed">{step.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
