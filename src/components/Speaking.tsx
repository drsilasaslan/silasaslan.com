'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Video, Calendar, ExternalLink } from 'lucide-react';

const events = [
  {
    title: 'Live-Demo: In Minuten zum eigenen Chatbot',
    event: 'KI-READY 2025 Konferenz',
    type: 'Keynote',
    link: 'https://www.youtube.com/watch?v=QdO4qU1USdw',
  },
  {
    title: 'Was du von einem Innovationsmanager für deine KI-Einführung lernen kannst',
    event: '506.ai Webinar',
    type: 'Webinar',
    date: 'September 2024',
    link: 'https://www.506.ai/webinar/innovationsmanager-ki-einfuehrung/',
  },
  {
    title: 'Künstliche Intelligenz in der Energiewirtschaft',
    event: 'EXPLORE AI Event',
    type: 'Vortrag',
  },
  {
    title: 'Startup Pitch Jury',
    event: 'Diverse Pitch-Events',
    type: 'Jury & Assessor',
  },
];

export default function Speaking() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="speaking" className="py-24 bg-[var(--surface)]">
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
              Öffentlichkeit
            </p>
            <h2 className="text-3xl md:text-4xl font-light text-[var(--foreground)]">
              Vorträge & Events
            </h2>
          </div>

          {/* Events Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {events.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="h-full p-6 bg-[var(--surface-alt)] rounded-lg border border-[var(--border)] hover:border-[var(--primary)]/30 transition-colors group">
                  <div className="flex items-start justify-between mb-4">
                    <span className="inline-flex items-center gap-1 px-2 py-1 text-xs bg-[var(--primary)]/10 text-[var(--primary)] rounded">
                      {event.type === 'Keynote' || event.type === 'Webinar' ? (
                        <Video className="w-3 h-3" />
                      ) : (
                        <Calendar className="w-3 h-3" />
                      )}
                      {event.type}
                    </span>
                    {event.link && (
                      <a
                        href={event.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[var(--muted-light)] hover:text-[var(--primary)] transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                  <h3 className="text-[var(--foreground)] font-medium mb-2 leading-snug">
                    {event.title}
                  </h3>
                  <p className="text-sm text-[var(--muted)]">{event.event}</p>
                  {event.date && (
                    <p className="text-xs text-[var(--muted-light)] mt-2">{event.date}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Blog mention */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-12 text-center"
          >
            <p className="text-[var(--muted)] text-sm mb-4">
              Regelmäßige Inhalte zu KI, Innovation und Digitalisierung
            </p>
            <a
              href="https://www.silasaslan.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[var(--primary)] hover:text-[var(--primary-dark)] transition-colors text-sm"
            >
              Blog besuchen
              <ExternalLink className="w-4 h-4" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
