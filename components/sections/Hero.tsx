"use client";

import { motion, type Variants } from "framer-motion";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import Image from "next/image";

const container: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const stats = [
  { value: "99%+", label: "Data Accuracy" },
  { value: "EU", label: "Network Scope" },
  { value: "Peak", label: "RNR Award" },
  { value: "2+", label: "Years @ Amazon" },
];

// Marquee tools/companies
const marqueeItems = [
  "Amazon ROC", "SQL", "Python", "Power BI", "Excel",
  "Supply Chain", "PSG Tech", "Root Cause Analysis", "IWT Management", "SLA Compliance",
];

export function Hero() {
  return (
    <>
      <section className="relative min-h-screen flex items-center overflow-hidden px-6 md:px-12 lg:px-20 pt-20">
        {/* Subtle bg glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse 50% 60% at 70% 50%, hsl(43 88% 55% / 0.055) 0%, transparent 65%)",
          }}
        />

        <div className="relative z-10 w-full grid md:grid-cols-[1fr_1.1fr] gap-10 md:gap-16 items-center">

          {/* ── Left column ── */}
          <motion.div variants={container} initial="hidden" animate="visible">

            {/* Availability pill */}
            <motion.div variants={item} className="mb-8">
              <span className="pill">
                <span
                  className="w-2 h-2 rounded-full animate-pulse"
                  style={{ background: "hsl(var(--success))", boxShadow: "0 0 6px hsl(var(--success))" }}
                />
                Available for opportunities
              </span>
            </motion.div>

            {/* Headline — Sevora two-line style */}
            <motion.div variants={item}>
              <h1
                className="font-black leading-[0.92] tracking-tight"
                style={{ fontSize: "clamp(3rem, 8.5vw, 7rem)", color: "hsl(var(--foreground))" }}
              >
                Supply Chain
              </h1>
              <h1
                className="font-black leading-[0.92] tracking-tight"
                style={{ fontSize: "clamp(3rem, 8.5vw, 7rem)", color: "hsl(var(--foreground) / 0.28)" }}
              >
                Analyst.
              </h1>
            </motion.div>

            {/* Bio */}
            <motion.p
              variants={item}
              className="mt-8 text-base leading-relaxed max-w-md"
              style={{ color: "hsl(var(--muted-foreground))" }}
            >
              I validate millions of data points, diagnose speed degradation across EU
              transportation networks, and build systems that keep operations reliable at scale.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={item} className="flex flex-wrap gap-3 mt-8">
              <a href="#projects" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-semibold text-sm btn-gold">
                View Projects <ArrowUpRight className="w-4 h-4" />
              </a>
              <a href="#contact" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-semibold text-sm btn-ghost">
                Get in Touch
              </a>
            </motion.div>

            {/* Stats row */}
            <motion.div
              variants={item}
              className="flex flex-wrap gap-8 mt-12 pt-8"
              style={{ borderTop: "1px solid hsl(var(--border))" }}
            >
              {stats.map((s) => (
                <div key={s.label}>
                  <p className="font-black text-2xl leading-none gradient-text">{s.value}</p>
                  <p className="text-xs uppercase tracking-widest mt-1 font-medium" style={{ color: "hsl(var(--muted-foreground))" }}>
                    {s.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* ── Right column: Photo ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            {/* Photo frame */}
            <div
              className="relative w-full overflow-hidden"
              style={{
                borderRadius: "1.5rem",
                aspectRatio: "3/4",
                background: "hsl(var(--surface))",
                border: "1px solid hsl(var(--border))",
              }}
            >
              <Image
                src="/images/headshot.jpg"
                alt="Dharane Dharan M"
                fill
                className="object-cover object-top"
                priority
                onError={() => {}}
              />

              {/* Photo overlay gradient */}
              <div
                className="absolute inset-0"
                style={{
                  background: "linear-gradient(to bottom, transparent 50%, hsl(var(--background) / 0.7) 100%)",
                }}
              />

              {/* Floating "available" card — Sevora style */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.6 }}
                className="absolute bottom-5 right-5 left-5 p-4 rounded-2xl flex items-center justify-between gap-3"
                style={{
                  background: "hsl(var(--surface) / 0.92)",
                  border: "1px solid hsl(var(--border))",
                  backdropFilter: "blur(16px)",
                }}
              >
                <div>
                  <p className="font-bold text-sm" style={{ color: "hsl(var(--foreground))" }}>
                    Open to new roles
                  </p>
                  <p className="text-xs mt-0.5" style={{ color: "hsl(var(--muted-foreground))" }}>
                    Supply Chain · Operations · Data Analyst
                  </p>
                </div>
                <a
                  href="#contact"
                  className="w-9 h-9 rounded-full flex items-center justify-center shrink-0 btn-gold"
                >
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </motion.div>
            </div>

            {/* Name tag top-left of photo */}
            <motion.div
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 }}
              className="absolute -top-3 -left-3 px-4 py-2 rounded-full"
              style={{
                background: "hsl(var(--accent))",
                color: "hsl(var(--accent-foreground))",
              }}
            >
              <span className="font-bold text-xs uppercase tracking-widest">Dharane Dharan M</span>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
            <ChevronDown className="w-5 h-5" style={{ color: "hsl(var(--muted-foreground) / 0.4)" }} />
          </motion.div>
        </motion.div>
      </section>

      {/* ── Marquee bar ── */}
      <div
        className="overflow-hidden py-5 border-y"
        style={{ borderColor: "hsl(var(--border))", background: "hsl(var(--muted))" }}
      >
        <motion.div
          className="flex gap-12 whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
        >
          {[...marqueeItems, ...marqueeItems].map((label, i) => (
            <span
              key={i}
              className="text-xs font-bold uppercase tracking-[3px] shrink-0"
              style={{ color: "hsl(var(--muted-foreground))" }}
            >
              {i % 2 === 0 ? (
                <span>
                  <span style={{ color: "hsl(var(--accent))" }}>✦</span> {label}
                </span>
              ) : label}
            </span>
          ))}
        </motion.div>
      </div>
    </>
  );
}
