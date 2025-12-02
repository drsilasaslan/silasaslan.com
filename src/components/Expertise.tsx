'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  Brain, 
  Shield, 
  Lightbulb, 
  Users, 
  Mic, 
  Settings 
} from 'lucide-react';

const expertiseAreas = [
  {
    icon: Brain,
    title: 'KI & Digitalisierung',
    description: 'Generative und diskriminative KI-Integration, ChatGPT, CompanyGPT, No-Code/Low-Code-Plattformen',
  },
  {
    icon: Shield,
    title: 'DSGVO-konforme KI',
    description: 'Datenschutzgerechte KI-Implementierung, GDPR-Compliance, Stakeholder-Testing',
  },
  {
    icon: Lightbulb,
    title: 'Innovationsscouting',
    description: 'Identifikation neuer Technologien, Startup-Evaluierung, Technologie-Roadmaps',
  },
  {
    icon: Users,
    title: 'Netzwerk & Mentoring',
    description: 'Startup-Mentoring, Fachveranstaltungen, Best-Practice-Austausch',
  },
  {
    icon: Mic,
    title: 'Events & Speaking',
    description: 'Konferenz-Vorträge, Webinare, Event-Moderation, Live-Demos',
  },
  {
    icon: Settings,
    title: 'Prozessoptimierung',
    description: 'Digitalisierung von Abläufen, Automatisierung, Change-Management',
  },
];

export default function Expertise() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

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
                  <p className="text-sm text-[var(--muted)] leading-relaxed">
                    {area.description}
                  </p>
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
              <span className="text-[var(--primary)]">Chemischer Hintergrund:</span>{' '}
              Organische Halbleiter, PEDOT:PSS Polymere, Thermoelektrik, Printed Electronics
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
