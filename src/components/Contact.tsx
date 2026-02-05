"use client";

import { motion, useInView } from "framer-motion";
import { Globe, Linkedin, Mail, MapPin } from "lucide-react";
import { useRef } from "react";

const contactLinks = [
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "de.linkedin.com/in/draslan",
    href: "https://de.linkedin.com/in/draslan",
  },
  {
    icon: Globe,
    label: "X",
    value: "x.com/draslan_eth",
    href: "https://x.com/draslan_eth",
  },
  {
    icon: Mail,
    label: "XING",
    value: "xing.com/profile/Silas_Aslan",
    href: "https://www.xing.com/profile/Silas_Aslan",
  },
];

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-24 bg-[var(--foreground)]">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          {/* Section Header */}
          <div className="mb-16 text-center">
            <p className="text-[var(--primary)] text-sm tracking-widest uppercase mb-2">Kontakt</p>
            <h2 className="text-3xl md:text-4xl font-light text-white">Austausch statt Pitch</h2>
            <p className="mt-4 text-white/60 max-w-md mx-auto">
              Ideen, Fragen, konkrete Projekte – kurz, ehrlich und direkt.
            </p>
          </div>

          {/* Contact Links */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {contactLinks.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group p-6 bg-white/5 rounded-lg border border-white/10 hover:border-[var(--primary)]/50 transition-all text-center"
              >
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-[var(--primary)]/20 flex items-center justify-center group-hover:bg-[var(--primary)]/30 transition-colors">
                  <link.icon className="w-5 h-5 text-[var(--primary)]" />
                </div>
                <p className="text-white font-medium mb-1">{link.label}</p>
                <p className="text-white/50 text-sm">{link.value}</p>
              </motion.a>
            ))}
          </div>

          {/* Location */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex items-center justify-center gap-2 text-white/40 text-sm"
          >
            <MapPin className="w-4 h-4" />
            <span>Karlsruhe, Deutschland</span>
          </motion.div>

          {/* Subtle humor */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-12 text-center text-white/30 text-xs"
          >
            Halb deutsch, halb türkisch – 100% neugierig
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
