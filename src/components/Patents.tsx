'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FileText } from 'lucide-react';

const patents = [
  {
    title: 'Siebdrucktinte und Verfahren zu deren Herstellung',
    titleEn: 'Screenprint ink & production method',
  },
  {
    title: 'Siebdruckfähiges Fluid für die Anwendung in einem thermoelektrischen Generator als n-Typ Material',
    titleEn: 'Screen-printable fluid for TEG n-type material',
  },
  {
    title: 'Organic Semiconductor, Method for their Preparation and their Use',
    titleEn: null,
  },
  {
    title: 'Verfahren zur Herstellung von polythiophenhaltigen Fluiden',
    titleEn: 'Method for producing polythiophene-containing fluids',
    date: '8. Oktober 2015',
  },
  {
    title: 'Organische Halbleiter, Verfahren zu ihrer Herstellung und ihre Verwendung',
    titleEn: 'Organic semiconductors, preparation and use',
    date: '23. Dezember 2016',
  },
];

export default function Patents() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="patents" className="py-24 bg-[var(--surface-alt)]">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          {/* Section Header */}
          <div className="mb-16">
            <p className="text-[var(--primary)] text-sm tracking-widest uppercase mb-2">
              Geistiges Eigentum
            </p>
            <h2 className="text-3xl md:text-4xl font-light text-[var(--foreground)]">
              Patente & Publikationen
            </h2>
          </div>

          {/* Patents List */}
          <div className="space-y-6">
            {patents.map((patent, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="flex gap-4 p-6 bg-[var(--surface)] rounded-lg border border-[var(--border)] hover:border-[var(--primary)]/30 transition-colors">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-lg bg-[var(--primary)]/10 flex items-center justify-center">
                      <FileText className="w-5 h-5 text-[var(--primary)]" />
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-[var(--foreground)] font-medium mb-1 leading-snug">
                      {patent.title}
                    </h3>
                    {patent.titleEn && (
                      <p className="text-sm text-[var(--muted-light)] italic mb-2">
                        {patent.titleEn}
                      </p>
                    )}
                    {patent.date && (
                      <p className="text-xs text-[var(--primary)]">
                        Erteilt: {patent.date}
                      </p>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Note */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-8 text-center text-sm text-[var(--muted-light)]"
          >
            Alle Patente im Bereich organische Halbleiter und thermoelektrische Materialien
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
