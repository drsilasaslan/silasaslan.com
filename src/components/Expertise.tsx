"use client";

import { motion, useInView } from "framer-motion";
import { Brain, Lightbulb, Settings, Shield } from "lucide-react";
import { useRef } from "react";

const expertiseAreas = [
  {
    icon: Brain,
    title: "KI-Enablement im Team",
    description: "Workshops, konkrete Use Cases und Transfer in den Arbeitsalltag.",
  },
  {
    icon: Shield,
    title: "Governance & Struktur",
    description: "Rollen, Prozesse und Datenschutz als Grundlage für verlässliche KI.",
  },
  {
    icon: Lightbulb,
    title: "Prototyping & Tools",
    description: "Schnelle Prototypen, kleine Apps und klare Workflows statt Folien.",
  },
  {
    icon: Settings,
    title: "Betrieb & Prozessdesign",
    description: "Automatisierung, Change und pragmatische Umsetzung im Betrieb.",
  },
];

export default function Expertise() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="expertise" className="py-24 bg-[var(--surface-alt)]">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          {/* Section Header */}
          <div className="mb-16 text-center">
            <p className="text-[var(--primary)] text-sm tracking-widest uppercase mb-2">
              Expertise
            </p>
            <h2 className="text-3xl md:text-4xl font-light text-[var(--foreground)]">
              Fokusgebiete
            </h2>
          </div>

          {/* Expertise Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {expertiseAreas.map((area, index) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-[var(--surface)] p-8 rounded-lg border border-[var(--border)] hover:border-[var(--primary)]/30 transition-all duration-300 h-full">
                  <div className="w-12 h-12 rounded-lg bg-[var(--primary)]/10 flex items-center justify-center mb-6 group-hover:bg-[var(--primary)]/20 transition-colors">
                    <area.icon className="w-6 h-6 text-[var(--primary)]" />
                  </div>
                  <h3 className="text-lg font-medium text-[var(--foreground)] mb-3">
                    {area.title}
                  </h3>
                  <p className="text-sm text-[var(--muted)] leading-relaxed">{area.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Chemistry Background Note */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-16 text-center"
          >
            <p className="text-[var(--muted)] text-sm">
              <span className="text-[var(--primary)]">Chemischer Hintergrund:</span> Organische
              Halbleiter, PEDOT:PSS Polymere, Thermoelektrik, Printed Electronics
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
