"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  subtitle: string;
  number?: string;
  align?: "left" | "center";
}

export function SectionHeading({ title, subtitle, number, align = "left" }: SectionHeadingProps) {
  const isCenter = align === "center";
  return (
    <div className={isCenter ? "text-center" : ""}>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className={`flex items-center gap-3 mb-4 ${isCenter ? "justify-center" : ""}`}
      >
        {number && (
          <span className="text-xs font-bold tracking-[3px] tabular-nums" style={{ color: "hsl(var(--accent))" }}>
            {number}
          </span>
        )}
        <span className="text-xs uppercase tracking-[3px] font-medium" style={{ color: "hsl(var(--muted-foreground))" }}>
          {subtitle}
        </span>
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.08 }}
        className="font-cinzel font-black uppercase tracking-wider gradient-text"
        style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", lineHeight: 1.1 }}
      >
        {title}
      </motion.h2>

      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.18, duration: 0.5 }}
        className={`mt-5 h-px gold-rule ${isCenter ? "mx-auto max-w-[120px]" : "max-w-[80px]"}`}
      />
    </div>
  );
}
