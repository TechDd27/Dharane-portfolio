"use client";

import { motion } from "framer-motion";
import { ArrowDown, Download, Mail, ExternalLink } from "lucide-react";
import { siteConfig } from "../../config/site";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export function Hero() {
  const hero = siteConfig.hero;

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative max-w-3xl text-center"
      >
        <motion.p variants={itemVariants} className="text-muted-foreground text-lg mb-4">
          {hero.greeting}
        </motion.p>

        <motion.h1 variants={itemVariants} className="text-hero font-extrabold tracking-tight mb-6">
          {hero.name}
        </motion.h1>

        <motion.p variants={itemVariants} className="text-xl md:text-2xl text-muted-foreground font-medium mb-4">
          {hero.tagline}
        </motion.p>

        <motion.p variants={itemVariants} className="text-base text-muted-foreground/70 mb-10">
          {hero.subtitle}
        </motion.p>

        <motion.div variants={itemVariants} className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium text-sm bg-accent text-accent-foreground hover:bg-accent-hover transition-all shadow-lg"
          >
            View Projects
          </a>
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium text-sm border border-accent text-accent hover:bg-accent/10 transition-all"
          >
            <Download style={{ width: 16, height: 16 }} />
            Resume
          </a>
          <a
            href="https://linkedin.com/in/ddmk"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-3 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ExternalLink style={{ width: 16, height: 16 }} />
            LinkedIn
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-4 py-3 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <Mail style={{ width: 16, height: 16 }} />
            Contact
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
          <ArrowDown style={{ width: 20, height: 20 }} className="text-muted-foreground/50" />
        </motion.div>
      </motion.div>
    </section>
  );
}