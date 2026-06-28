"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { siteConfig } from "../../config/site";
import { SectionHeading } from "../ui/SectionHeading";

const statIcons = ["⚔", "📜", "🌍", "🏆"];

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const about = siteConfig.about;

  return (
    <section id="about" ref={ref} className="section">
      <SectionHeading title="About" subtitle="The Chronicle" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
        className="mt-16 space-y-10"
      >
        {/* Bio card — parchment style */}
        <div
          className="relative p-8 rounded-sm border overflow-hidden"
          style={{
            background: "hsl(var(--surface))",
            borderColor: "hsl(var(--accent) / 0.25)",
          }}
        >
          {/* Top accent bar */}
          <div
            className="absolute top-0 left-0 right-0 h-px"
            style={{ background: "linear-gradient(90deg, transparent, hsl(var(--accent) / 0.7), transparent)" }}
          />
          {/* Bottom accent bar */}
          <div
            className="absolute bottom-0 left-0 right-0 h-px"
            style={{ background: "linear-gradient(90deg, transparent, hsl(var(--accent) / 0.4), transparent)" }}
          />
          {/* Corner glow */}
          <div
            className="absolute top-0 left-0 w-32 h-32 pointer-events-none"
            style={{ background: "radial-gradient(circle at 0% 0%, hsl(var(--accent) / 0.06), transparent 70%)" }}
          />

          <div className="flex gap-5 items-start">
            <div
              className="w-12 h-12 rounded-sm flex items-center justify-center text-xl shrink-0 border"
              style={{
                background: "hsl(var(--accent) / 0.08)",
                borderColor: "hsl(var(--accent) / 0.25)",
              }}
            >
              ⚔
            </div>
            <p className="text-base md:text-lg leading-relaxed" style={{ color: "hsl(var(--muted-foreground))" }}>
              {about.bio}
            </p>
          </div>
        </div>

        {/* Stats grid — heraldic shields */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {about.stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
              className="relative heraldic-card text-center p-6 group"
            >
              {/* Corner ornaments */}
              <div
                className="absolute top-2 left-2 w-3 h-3 border-l border-t"
                style={{ borderColor: "hsl(var(--accent) / 0.4)" }}
              />
              <div
                className="absolute top-2 right-2 w-3 h-3 border-r border-t"
                style={{ borderColor: "hsl(var(--accent) / 0.4)" }}
              />
              <div
                className="absolute bottom-2 left-2 w-3 h-3 border-l border-b"
                style={{ borderColor: "hsl(var(--accent) / 0.4)" }}
              />
              <div
                className="absolute bottom-2 right-2 w-3 h-3 border-r border-b"
                style={{ borderColor: "hsl(var(--accent) / 0.4)" }}
              />

              <div className="text-2xl mb-2">{statIcons[i % statIcons.length]}</div>
              <div className="font-cinzel font-black text-2xl gradient-text">{stat.value}</div>
              <div className="font-cinzel text-[10px] tracking-[2px] uppercase mt-1" style={{ color: "hsl(var(--muted-foreground))" }}>
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
