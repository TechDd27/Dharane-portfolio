"use client";

import { motion, type Variants } from "framer-motion";
import { ArrowDown, Download, Mail, ExternalLink } from "lucide-react";
import { siteConfig } from "../../config/site";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const metrics = [
  { value: "99%+", label: "Data Accuracy" },
  { value: "EU-wide", label: "Network Scope" },
  { value: "Peak RNR", label: "Recognition" },
];

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
      {/* Dot grid */}
      <div className="absolute inset-0 dot-grid" />

      {/* Gradient orbs */}
      <div
        className="absolute top-1/4 -left-32 w-[500px] h-[500px] rounded-full blur-3xl pointer-events-none"
        style={{ background: "hsl(var(--accent) / 0.12)" }}
      />
      <div
        className="absolute bottom-1/4 -right-32 w-[400px] h-[400px] rounded-full blur-3xl pointer-events-none"
        style={{ background: "hsl(216 90% 65% / 0.1)" }}
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-4xl text-center"
      >
        {/* Status badge */}
        <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-medium mb-8" style={{ borderColor: "hsl(var(--accent) / 0.3)", background: "hsl(var(--accent) / 0.06)", color: "hsl(var(--accent))" }}>
          <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: "hsl(var(--success))" }} />
          Currently @ Amazon ROC · Open to Opportunities
        </motion.div>

        <motion.p variants={itemVariants} className="text-muted-foreground text-lg mb-3 font-medium">
          {siteConfig.hero.greeting}
        </motion.p>

        <motion.h1
          variants={itemVariants}
          className="text-6xl md:text-8xl font-extrabold tracking-tight mb-6 gradient-text leading-tight"
        >
          {siteConfig.hero.name}
        </motion.h1>

        <motion.p variants={itemVariants} className="text-lg md:text-xl text-muted-foreground font-medium mb-3 max-w-2xl mx-auto">
          Supply Chain Analyst · Operations Engineer · Data Problem Solver
        </motion.p>

        <motion.p variants={itemVariants} className="text-sm text-muted-foreground/60 mb-10">
          PSG Tech &apos;24 · Robotics &amp; Automation
        </motion.p>

        {/* Impact metrics */}
        <motion.div variants={itemVariants} className="flex flex-wrap items-center justify-center gap-3 mb-10">
          {metrics.map((m) => (
            <div
              key={m.label}
              className="px-5 py-2.5 rounded-xl border"
              style={{
                background: "hsl(var(--surface) / 0.8)",
                borderColor: "hsl(var(--border))",
                backdropFilter: "blur(8px)",
              }}
            >
              <span className="font-bold" style={{ color: "hsl(var(--accent))" }}>{m.value}</span>
              <span className="text-muted-foreground text-sm ml-2">{m.label}</span>
            </div>
          ))}
        </motion.div>

        {/* CTAs */}
        <motion.div variants={itemVariants} className="flex flex-wrap items-center justify-center gap-3">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm glow-accent transition-all"
            style={{ background: "hsl(var(--accent))", color: "hsl(var(--accent-foreground))" }}
          >
            View Projects
          </a>
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm border transition-all hover:bg-accent/10"
            style={{ borderColor: "hsl(var(--accent))", color: "hsl(var(--accent))" }}
          >
            <Download style={{ width: 15, height: 15 }} />
            Resume
          </a>
          <a
            href={siteConfig.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-lg border border-border hover:border-accent/40"
          >
            <ExternalLink style={{ width: 15, height: 15 }} />
            LinkedIn
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-5 py-3 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-lg border border-border hover:border-accent/40"
          >
            <Mail style={{ width: 15, height: 15 }} />
            Contact
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
      >
        <span className="text-xs text-muted-foreground/40 tracking-widest uppercase">scroll</span>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
          <ArrowDown style={{ width: 18, height: 18 }} className="text-muted-foreground/40" />
        </motion.div>
      </motion.div>
    </section>
  );
}
