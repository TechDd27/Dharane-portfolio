"use client";

import { motion, type Variants } from "framer-motion";
import { ArrowUpRight, Download, ChevronDown } from "lucide-react";

const container: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: "easeOut" } },
};

const floatingCards = [
  {
    id: 0,
    value: "99%+",
    label: "Data Accuracy",
    sub: "Millions of records validated",
    rotate: -5,
    x: "62%",
    y: "18%",
    duration: 5,
    delay: 0,
    gold: true,
  },
  {
    id: 1,
    value: "EU-wide",
    label: "Network Scope",
    sub: "First · Middle · Last Mile",
    rotate: 4,
    x: "68%",
    y: "48%",
    duration: 6.5,
    delay: 0.8,
    gold: false,
  },
  {
    id: 2,
    value: "🏆",
    label: "Peak Week RNR",
    sub: "Amazon Recognition Award",
    rotate: -3,
    x: "55%",
    y: "70%",
    duration: 5.5,
    delay: 1.6,
    gold: false,
  },
];

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden px-6 md:px-12 lg:px-20">
      {/* Radial glow behind name */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 30% 50%, hsl(43 88% 55% / 0.07) 0%, transparent 65%)",
        }}
      />

      {/* Subtle grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Left: main content */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="relative z-10 w-full max-w-[55%] md:max-w-[52%] pt-24 pb-16"
      >
        {/* Role pill */}
        <motion.div variants={item} className="mb-8">
          <span className="pill">
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{ background: "hsl(var(--success))", boxShadow: "0 0 6px hsl(var(--success))" }}
            />
            Supply Chain Analyst
          </span>
        </motion.div>

        {/* Name */}
        <motion.div variants={item}>
          <h1
            className="font-black leading-none tracking-tighter"
            style={{ fontSize: "clamp(3.5rem, 10vw, 8rem)", color: "hsl(var(--foreground))" }}
          >
            Dharane
          </h1>
          <h1
            className="font-black leading-none tracking-tighter gradient-text"
            style={{ fontSize: "clamp(3.5rem, 10vw, 8rem)" }}
          >
            Dharan M
          </h1>
        </motion.div>

        {/* Bio */}
        <motion.p
          variants={item}
          className="mt-8 text-base md:text-lg leading-relaxed max-w-md"
          style={{ color: "hsl(var(--muted-foreground))" }}
        >
          I validate millions of data points, diagnose speed degradation across EU transportation networks,
          and build systems that keep operations reliable at scale.
        </motion.p>

        {/* CTAs */}
        <motion.div variants={item} className="flex flex-wrap gap-3 mt-10">
          <a href="#projects" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-semibold text-sm btn-gold">
            See All Projects <ArrowUpRight className="w-4 h-4" />
          </a>
          <a href="#contact" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-semibold text-sm btn-ghost">
            Contact Now
          </a>
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-2 px-5 py-3.5 text-sm font-medium transition-colors"
            style={{ color: "hsl(var(--muted-foreground))" }}
          >
            <Download className="w-4 h-4" />
            Resume
          </a>
        </motion.div>
      </motion.div>

      {/* Right: floating achievement cards (desktop only) */}
      <div className="absolute right-0 top-0 bottom-0 w-[45%] hidden md:block pointer-events-none">
        {floatingCards.map((card) => (
          <motion.div
            key={card.id}
            className="absolute"
            style={{ left: "20%", top: card.y }}
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.6 + card.id * 0.2 }}
          >
            <motion.div
              animate={{ y: [-6, 6, -6] }}
              transition={{ duration: card.duration, repeat: Infinity, ease: "easeInOut", delay: card.delay }}
              style={{ rotate: card.rotate }}
            >
              <div
                className="rounded-2xl p-4 w-52 pointer-events-auto"
                style={{
                  background: card.gold ? "hsl(43 88% 55%)" : "hsl(var(--surface))",
                  border: `1px solid ${card.gold ? "transparent" : "hsl(var(--border))"}`,
                  boxShadow: card.gold
                    ? "0 8px 32px hsl(43 88% 55% / 0.35)"
                    : "0 8px 32px hsl(0 0% 0% / 0.4)",
                }}
              >
                <p
                  className="text-2xl font-black leading-none"
                  style={{ color: card.gold ? "hsl(var(--accent-foreground))" : "hsl(var(--foreground))" }}
                >
                  {card.value}
                </p>
                <p
                  className="font-bold text-sm mt-1"
                  style={{ color: card.gold ? "hsl(0 0% 5% / 0.8)" : "hsl(var(--foreground))" }}
                >
                  {card.label}
                </p>
                <p
                  className="text-xs mt-0.5"
                  style={{ color: card.gold ? "hsl(0 0% 5% / 0.6)" : "hsl(var(--muted-foreground))" }}
                >
                  {card.sub}
                </p>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Bottom: currently at */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-10 left-6 md:left-12 lg:left-20 flex items-center gap-6"
      >
        <span className="text-xs uppercase tracking-[3px] font-medium" style={{ color: "hsl(var(--muted-foreground))" }}>
          Currently @ Amazon ROC · PSG Tech &apos;24
        </span>
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        className="absolute bottom-10 right-6 md:right-12 lg:right-20"
      >
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
          <ChevronDown className="w-5 h-5" style={{ color: "hsl(var(--muted-foreground))" }} />
        </motion.div>
      </motion.div>
    </section>
  );
}
