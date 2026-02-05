"use client";

import { motion } from "framer-motion";
import { ArrowDown, Linkedin, Mail } from "lucide-react";
import Image from "next/image";
import heroData from "../../data/hero.json";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with patina texture */}
      <div className="absolute inset-0">
        <Image
          src={heroData.backgroundImage}
          alt="Background"
          fill={true}
          className="object-cover"
          priority={true}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--foreground)]/70 via-[var(--foreground)]/50 to-[var(--foreground)]/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center md:text-left"
          >
            <p className="text-[var(--accent-light)] text-sm tracking-widest uppercase mb-4">
              {heroData.kicker}
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-6 leading-tight">
              {heroData.title}
            </h1>
            <p className="text-lg text-white/80 mb-8 max-w-lg leading-relaxed">
              {heroData.intro}
              <br />
              <span className="text-white/60 text-base">{heroData.tagline}</span>
            </p>

            {/* Subtle CTA */}
            <div className="flex items-center gap-6 justify-center md:justify-start">
              <a
                href={heroData.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/70 hover:text-white transition-colors group"
              >
                <Linkedin size={20} />
                <span className="text-sm">LinkedIn</span>
              </a>
              <a
                href="#contact"
                className="flex items-center gap-2 text-white/70 hover:text-white transition-colors group"
              >
                <Mail size={20} />
                <span className="text-sm">Kontakt</span>
              </a>
            </div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center md:justify-end"
          >
            <div className="relative">
              {/* Subtle border effect */}
              <div className="absolute -inset-1 bg-gradient-to-br from-[var(--primary)]/30 to-[var(--accent)]/30 rounded-full blur-sm" />
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white/10">
                <Image
                  src={heroData.profileImage}
                  alt="Dr. Silas Aslan"
                  fill={true}
                  className="object-cover"
                  priority={true}
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <a
            href="#about"
            className="flex flex-col items-center text-white/50 hover:text-white/80 transition-colors"
          >
            <span className="text-xs tracking-widest uppercase mb-2">Mehr erfahren</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
            >
              <ArrowDown size={20} />
            </motion.div>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
