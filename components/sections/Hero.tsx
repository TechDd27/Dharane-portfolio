"use client";

import { motion, type Variants } from "framer-motion";
import { Download, ChevronDown } from "lucide-react";
import { siteConfig } from "../../config/site";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.3 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

// Fixed particles — no randomness to avoid hydration mismatch
const EMBERS = [
  { id: 0,  left: "8%",  size: 2,   dur: 6,   delay: 0,   drift: 20  },
  { id: 1,  left: "15%", size: 1.5, dur: 8,   delay: 1.2, drift: -15 },
  { id: 2,  left: "23%", size: 3,   dur: 5.5, delay: 0.4, drift: 25  },
  { id: 3,  left: "31%", size: 1,   dur: 7,   delay: 2.1, drift: -10 },
  { id: 4,  left: "40%", size: 2.5, dur: 6.5, delay: 0.8, drift: 18  },
  { id: 5,  left: "48%", size: 1.5, dur: 9,   delay: 3,   drift: -22 },
  { id: 6,  left: "55%", size: 2,   dur: 5,   delay: 1.5, drift: 12  },
  { id: 7,  left: "63%", size: 3,   dur: 7.5, delay: 0.2, drift: -18 },
  { id: 8,  left: "71%", size: 1,   dur: 6,   delay: 2.5, drift: 20  },
  { id: 9,  left: "78%", size: 2,   dur: 8,   delay: 0.6, drift: -12 },
  { id: 10, left: "85%", size: 1.5, dur: 5.5, delay: 1.8, drift: 16  },
  { id: 11, left: "92%", size: 2.5, dur: 7,   delay: 3.2, drift: -20 },
  { id: 12, left: "5%",  size: 1,   dur: 6.5, delay: 4,   drift: 10  },
  { id: 13, left: "35%", size: 2,   dur: 8.5, delay: 2.8, drift: -25 },
  { id: 14, left: "67%", size: 1.5, dur: 5,   delay: 1,   drift: 22  },
];

const metrics = [
  { value: "99%+", label: "Data Accuracy" },
  { value: "EU-wide", label: "Network Scope" },
  { value: "Peak RNR", label: "Recognition" },
];

function SwordIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="14.5 17.5 3 6 3 3 6 3 17.5 14.5" />
      <line x1="13" y1="19" x2="19" y2="13" />
      <line x1="16" y1="16" x2="20" y2="20" />
      <line x1="19" y1="21" x2="21" y2="19" />
    </svg>
  );
}

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
      {/* Castle stone grid */}
      <div className="absolute inset-0 stone-grid opacity-100" />

      {/* Radial hero glow */}
      <div className="absolute inset-0 hero-glow" />

      {/* Vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 100% 80% at 50% 50%, transparent 40%, hsl(var(--background)) 100%)",
        }}
      />

      {/* Ember particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {EMBERS.map((e) => (
          <motion.div
            key={e.id}
            className="absolute rounded-full"
            style={{
              left: e.left,
              bottom: "-8px",
              width: e.size,
              height: e.size,
              background: `hsl(43 90% 65%)`,
              boxShadow: `0 0 ${e.size * 4}px 1px hsl(43 90% 60%)`,
            }}
            animate={{
              y: [-0, -700],
              x: [0, e.drift],
              opacity: [0, 0.9, 0.7, 0.4, 0],
              scale: [1, 0.8, 0.5],
            }}
            transition={{
              duration: e.dur,
              delay: e.delay,
              repeat: Infinity,
              ease: "easeOut",
            }}
          />
        ))}
      </div>

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-4xl w-full text-center"
      >
        {/* Crown / sigil line */}
        <motion.div variants={itemVariants} className="flex items-center justify-center gap-3 mb-6">
          <div className="h-px w-16" style={{ background: "linear-gradient(to right, transparent, hsl(var(--accent) / 0.7))" }} />
          <span className="font-cinzel text-xs tracking-[5px] uppercase" style={{ color: "hsl(var(--accent))" }}>
            The Portfolio of
          </span>
          <div className="h-px w-16" style={{ background: "linear-gradient(to left, transparent, hsl(var(--accent) / 0.7))" }} />
        </motion.div>

        {/* Main name — massive Cinzel */}
        <motion.h1
          variants={itemVariants}
          className="font-cinzel font-black gradient-text uppercase tracking-widest leading-none mb-2"
          style={{ fontSize: "clamp(2.8rem, 9vw, 6.5rem)" }}
        >
          Dharane
        </motion.h1>
        <motion.h1
          variants={itemVariants}
          className="font-cinzel font-black gradient-text uppercase tracking-widest leading-none mb-8"
          style={{ fontSize: "clamp(2.8rem, 9vw, 6.5rem)" }}
        >
          Dharan M
        </motion.h1>

        {/* Titles */}
        <motion.p variants={itemVariants} className="font-cinzel text-sm md:text-base tracking-[3px] uppercase mb-3" style={{ color: "hsl(var(--muted-foreground))" }}>
          Supply Chain Analyst · Operations Engineer · Data Strategist
        </motion.p>

        {/* House words */}
        <motion.div variants={itemVariants} className="flex items-center justify-center gap-3 mb-10">
          <div className="h-px w-12" style={{ background: "hsl(var(--accent) / 0.5)" }} />
          <span className="font-cinzel text-xs italic" style={{ color: "hsl(var(--accent))" }}>
            &quot;Data Validates. Systems Prevail.&quot;
          </span>
          <div className="h-px w-12" style={{ background: "hsl(var(--accent) / 0.5)" }} />
        </motion.div>

        {/* Impact metrics — heraldic badges */}
        <motion.div variants={itemVariants} className="flex flex-wrap items-center justify-center gap-3 mb-10">
          {metrics.map((m) => (
            <div
              key={m.label}
              className="px-5 py-2.5 rounded-sm border flex items-center gap-2"
              style={{
                background: "hsl(var(--surface) / 0.9)",
                borderColor: "hsl(var(--accent) / 0.35)",
                backdropFilter: "blur(8px)",
              }}
            >
              <span className="font-cinzel font-bold text-sm" style={{ color: "hsl(var(--accent))" }}>{m.value}</span>
              <span className="text-xs" style={{ color: "hsl(var(--muted-foreground))" }}>{m.label}</span>
            </div>
          ))}
        </motion.div>

        {/* CTAs */}
        <motion.div variants={itemVariants} className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-sm font-cinzel font-bold text-sm uppercase tracking-widest glow-gold transition-all"
            style={{
              background: "hsl(var(--accent))",
              color: "hsl(var(--accent-foreground))",
            }}
          >
            <SwordIcon />
            Enter the Realm
          </a>
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-sm font-cinzel font-bold text-sm uppercase tracking-widest border transition-all hover:bg-accent/10"
            style={{
              borderColor: "hsl(var(--accent) / 0.6)",
              color: "hsl(var(--accent))",
            }}
          >
            <Download style={{ width: 14, height: 14 }} />
            Scroll of Deeds
          </a>
          <a
            href={siteConfig.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3.5 rounded-sm font-cinzel text-sm uppercase tracking-wider border transition-colors"
            style={{
              borderColor: "hsl(var(--border))",
              color: "hsl(var(--muted-foreground))",
            }}
          >
            LinkedIn
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
      >
        <span className="font-cinzel text-[10px] tracking-[4px] uppercase" style={{ color: "hsl(var(--accent) / 0.5)" }}>
          Scroll
        </span>
        <motion.div animate={{ y: [0, 7, 0] }} transition={{ repeat: Infinity, duration: 2.2 }}>
          <ChevronDown style={{ width: 18, height: 18 }} className="text-muted-foreground/40" />
        </motion.div>
      </motion.div>
    </section>
  );
}
