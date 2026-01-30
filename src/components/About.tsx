'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
const aboutData = require('../../data/about.json');

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

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
            <h2 className="text-3xl md:text-4xl font-light text-[var(--foreground)]">
              {aboutData.title}
            </h2>
          </div>

          {/* Content */}
          <div className="space-y-6 text-[var(--muted)] leading-relaxed">
            <p className="text-lg">
              Mit einem Doktortitel in Chemie vom KIT und über einem Jahrzehnt Erfahrung 
              an der Schnittstelle von Wissenschaft, Technologie und Innovation, 
              bringe ich eine einzigartige Perspektive in die Welt der KI und Digitalisierung.
            </p>
            
            <p>
              Als Prokurist und Innovationsmanager bei der SWK-NOVATEC GmbH treibe ich 
              die KI-Integration und das Innovationsscouting für die Stadtwerke Karlsruhe voran. 
              Mein Fokus liegt auf DSGVO-konformen KI-Lösungen, die echten Mehrwert schaffen – 
              nicht auf Buzzwords.
            </p>

            <p>
              Meine Reise führte mich von der Grundlagenforschung über die Startup-Gründung 
              (otego GmbH) bis hin zur Rolle als Innovationstreiber im öffentlichen Sektor. 
              Diese Vielfalt prägt meinen Ansatz: pragmatisch, wissenschaftlich fundiert, 
              aber immer mit einem Augenzwinkern.
            </p>

            {/* Subtle quote */}
            <blockquote className="border-l-2 border-[var(--primary)]/30 pl-6 my-8 italic text-[var(--foreground)]/70">
              &ldquo;Es ist nicht wichtig, was man mitbringt – 
              sondern was man daraus macht.&rdquo;
            </blockquote>

            {/* Quick facts */}
<div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-[var(--border)]">
<div>
<p className="text-2xl font-light text-[var(--primary)]">5</p>
<p className="text-sm text-[var(--muted-light)]">Patente</p>
</div>
<div>
<p className="text-2xl font-light text-[var(--primary)]">10+</p>
<p className="text-sm text-[var(--muted-light)]">Jahre Erfahrung</p>
</div>
<div>
<p className="text-2xl font-light text-[var(--primary)]">2</p>
<p className="text-sm text-[var(--muted-light)]">Sprachen</p>
</div>
<div>
<p className="text-2xl font-light text-[var(--primary)]">1</p>
<p className="text-sm text-[var(--muted-light)]">Startup gegründet</p>
</div>
</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
