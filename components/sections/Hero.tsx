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
  { value: "2+", label: "Years at Amazon" },
  { value: "99%+", label: "Data Accuracy" },
  { value: "EU", label: "Network Scope" },
];

const marqueeItems = [
  "Amazon ROC", "SQL", "Python", "Power BI", "Excel",
  "Supply Chain", "PSG Tech", "Root Cause Analysis", "IWT Management", "SLA Compliance",
];

export function Hero() {
  return (
    <>
      {/* ── Hero ── */}
      <section
        className="relative min-h-screen flex items-stretch overflow-hidden"
        style={{ paddingTop: "64px" }}
      >
        {/* Left column */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="relative z-10 flex flex-col justify-center px-8 md:px-16 lg:px-20 py-16 w-full md:w-[48%] shrink-0"
        >
          {/* Mobile avatar — shown only on small screens */}
          <motion.div
            variants={item}
            className="md:hidden mb-8 flex justify-center"
          >
            <div
              className="w-32 h-32 rounded-full overflow-hidden"
              style={{ border: "3px solid hsl(var(--accent))" }}
            >
              <Image
                src="/images/headshot.jpg"
                alt="Dharane Dharan M"
                width={128}
                height={128}
                className="object-cover object-top w-full h-full"
                priority
              />
            </div>
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={item}
            className="font-black leading-tight tracking-tight"
            style={{
              fontSize: "clamp(2.8rem, 6vw, 5.5rem)",
              color: "hsl(var(--foreground))",
            }}
          >
            Dharane Dharan
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={item}
            className="mt-3 text-sm md:text-base font-medium"
            style={{ color: "hsl(var(--muted-foreground))" }}
          >
            Supply Chain and Operational Analyst
          </motion.p>

          {/* Buttons */}
          <motion.div variants={item} className="flex gap-3 mt-8">
            <a
              href="#projects"
              className="px-5 py-2.5 rounded-lg text-sm font-semibold transition-all"
              style={{
                background: "hsl(var(--foreground))",
                color: "hsl(var(--background))",
              }}
            >
              View projects
            </a>
            <a
              href="#contact"
              className="px-5 py-2.5 rounded-lg text-sm font-semibold border transition-all btn-ghost"
            >
              Get in touch
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={item}
            className="flex gap-10 mt-16"
          >
            {stats.map((s) => (
              <div key={s.label}>
                <p
                  className="font-black text-3xl leading-none"
                  style={{ color: "hsl(var(--foreground))" }}
                >
                  {s.value}
                </p>
                <p
                  className="text-xs mt-1.5 font-medium"
                  style={{ color: "hsl(var(--muted-foreground))" }}
                >
                  {s.label}
                </p>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right column — photo */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="hidden md:block absolute right-0 top-0 bottom-0 w-[55%]"
        >
          {/* Photo */}
          <div className="relative w-full h-full">
            <Image
              src="/images/headshot.jpg"
              alt="Dharane Dharan M"
              fill
              className="object-cover object-top"
              priority
            />

            {/* Dark gradient blending into background on the left */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to right, hsl(var(--background)) 0%, hsl(var(--background) / 0.5) 20%, transparent 45%), linear-gradient(to top, hsl(var(--background)) 0%, transparent 30%)",
              }}
            />

            {/* Floating card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="absolute bottom-8 right-8 p-4 rounded-2xl w-64"
              style={{
                background: "hsl(var(--surface) / 0.9)",
                border: "1px solid hsl(var(--border))",
                backdropFilter: "blur(16px)",
              }}
            >
              <p className="text-xs font-medium mb-1" style={{ color: "hsl(var(--muted-foreground))" }}>
                Select opportunity
              </p>
              <p className="font-bold text-sm" style={{ color: "hsl(var(--foreground))" }}>
                Available for projects
              </p>
              <p className="text-xs mt-1" style={{ color: "hsl(var(--muted-foreground))" }}>
                Open to Supply Chain & Data roles. Let&apos;s connect.
              </p>
              <div className="flex justify-end mt-3">
                <a
                  href="#contact"
                  className="w-8 h-8 rounded-full flex items-center justify-center btn-gold"
                >
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6 }}
          className="absolute bottom-6 left-8 md:left-16 lg:left-20"
        >
          <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
            <ChevronDown className="w-4 h-4" style={{ color: "hsl(var(--muted-foreground) / 0.4)" }} />
          </motion.div>
        </motion.div>
      </section>

      {/* ── Marquee bar ── */}
      <div
        className="overflow-hidden py-4 border-y"
        style={{ borderColor: "hsl(var(--border))", background: "hsl(var(--muted))" }}
      >
        <motion.div
          className="flex gap-12 whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        >
          {[...marqueeItems, ...marqueeItems].map((label, i) => (
            <span
              key={i}
              className="text-xs font-bold uppercase tracking-[3px] shrink-0 flex items-center gap-3"
              style={{ color: "hsl(var(--muted-foreground))" }}
            >
              <span style={{ color: "hsl(var(--accent))" }}>✦</span>
              {label}
            </span>
          ))}
        </motion.div>
      </div>
    </>
  );
}
