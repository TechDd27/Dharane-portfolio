"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  subtitle: string;
}

function StarIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor" style={{ color: "hsl(var(--accent))", flexShrink: 0 }}>
      <path d="M7 0L8.5 5.5H14L9.5 8.5L11 14L7 10.5L3 14L4.5 8.5L0 5.5H5.5L7 0Z" />
    </svg>
  );
}

export function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <div className="text-center">
      {/* Top ornament */}
      <motion.div
        initial={{ opacity: 0, scaleX: 0.6 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="ornament-rule mb-4 mx-auto max-w-xs"
      >
        <StarIcon />
        <span className="font-cinzel text-[11px] tracking-[4px] uppercase" style={{ color: "hsl(var(--accent))" }}>
          {subtitle}
        </span>
        <StarIcon />
      </motion.div>

      {/* Main title */}
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="font-cinzel text-4xl md:text-5xl font-black gradient-text uppercase tracking-wider"
      >
        {title}
      </motion.h2>

      {/* Bottom ornament */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="flex items-center justify-center gap-2 mt-4"
      >
        <div className="h-px w-16" style={{ background: "linear-gradient(to right, transparent, hsl(var(--accent) / 0.5))" }} />
        <div className="w-1.5 h-1.5 rounded-full" style={{ background: "hsl(var(--accent))" }} />
        <div className="w-2.5 h-2.5 rounded-full border" style={{ borderColor: "hsl(var(--accent))", background: "transparent" }} />
        <div className="w-1.5 h-1.5 rounded-full" style={{ background: "hsl(var(--accent))" }} />
        <div className="h-px w-16" style={{ background: "linear-gradient(to left, transparent, hsl(var(--accent) / 0.5))" }} />
      </motion.div>
    </div>
  );
}
