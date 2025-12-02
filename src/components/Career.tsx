'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const careerItems = [
  {
    period: '2025 – Heute',
    role: 'Prokurist & Innovationsmanager',
    company: 'SWK-NOVATEC GmbH',
    description: 'AI & Innovation Scouting für die Stadtwerke Karlsruhe',
    highlight: true,
  },
  {
    period: '2023 – 2025',
    role: 'Projektmanager Innovation',
    company: 'SWK-NOVATEC GmbH',
    description: 'KI-Integration, DSGVO-konforme Lösungen, Innovationsscouting',
  },
  {
    period: '2016 – 2019',
    role: 'Mitgründer & Head of Materials',
    company: 'otego GmbH',
    description: 'Thermoelektrische Generatoren, Lab-Aufbau, Team von 4 auf 12 Mitarbeiter',
    highlight: true,
  },
  {
    period: '2014 – 2018',
    role: 'Promotion (Dr. rer. nat.)',
    company: 'KIT Karlsruhe',
    description: 'Chemie – PEDOT-basierte Druckfluide für thermoelektrische Anwendungen',
  },
  {
    period: '2011 – 2013',
    role: 'M.Sc. Chemie',
    company: 'Universität Heidelberg',
    description: 'Organische Chemie',
  },
  {
    period: '2007 – 2011',
    role: 'B.Sc. Chemie + Auslandsjahr',
    company: 'Universität Heidelberg / Bristol',
    description: 'ERASMUS-Stipendium, Materials Science',
  },
];

export default function Career() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="career" className="py-24 bg-[var(--surface)]">
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
              Werdegang
            </p>
            <h2 className="text-3xl md:text-4xl font-light text-[var(--foreground)]">
              Karriere & Bildung
            </h2>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-[var(--border)] transform md:-translate-x-1/2" />

            {careerItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative mb-12 md:mb-8 pl-8 md:pl-0 ${
                  index % 2 === 0 ? 'md:pr-[calc(50%+2rem)] md:text-right' : 'md:pl-[calc(50%+2rem)]'
                }`}
              >
                {/* Timeline dot */}
                <div 
                  className={`absolute left-0 md:left-1/2 top-1 w-3 h-3 rounded-full transform md:-translate-x-1/2 ${
                    item.highlight 
                      ? 'bg-[var(--primary)]' 
                      : 'bg-[var(--muted-light)]'
                  }`} 
                />

                {/* Content */}
                <div className={`${item.highlight ? 'bg-[var(--surface-alt)] p-6 rounded-lg' : ''}`}>
                  <p className="text-sm text-[var(--primary)] mb-1">{item.period}</p>
                  <h3 className="text-lg font-medium text-[var(--foreground)] mb-1">
                    {item.role}
                  </h3>
                  <p className="text-[var(--muted)] text-sm mb-2">{item.company}</p>
                  <p className="text-[var(--muted-light)] text-sm">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Awards mention */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-12 pt-8 border-t border-[var(--border)] text-center"
          >
            <p className="text-sm text-[var(--muted)]">
              <span className="text-[var(--accent)]">Auszeichnung:</span>{' '}
              Gewinner &ldquo;Elevator Pitch BW&rdquo; Regional Cup Karlsruhe
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
