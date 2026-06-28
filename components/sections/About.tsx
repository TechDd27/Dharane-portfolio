"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Database, Globe, Award, BarChart3 } from "lucide-react";
import { siteConfig } from "../../config/site";
import { SectionHeading } from "../ui/SectionHeading";

const statIcons = [BarChart3, Database, Globe, Award];

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const about = siteConfig.about;

  return (
    <section id="about" ref={ref} className="section">
      <SectionHeading title="About" subtitle="My story in brief" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="mt-12 space-y-10"
      >
        {/* Bio */}
        <div className="relative p-6 rounded-2xl border border-border bg-surface overflow-hidden">
          {/* Subtle corner accent */}
          <div
            className="absolute top-0 right-0 w-32 h-32 rounded-bl-full opacity-30 pointer-events-none"
            style={{ background: "radial-gradient(circle at top right, hsl(var(--accent) / 0.3), transparent 70%)" }}
          />
          <div className="flex gap-5 items-start">
            <div
              className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl shrink-0"
              style={{ background: "hsl(var(--accent) / 0.1)", border: "1px solid hsl(var(--accent) / 0.2)" }}
            >
              👤
            </div>
            <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
              {about.bio}
            </p>
          </div>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {about.stats.map((stat, i) => {
            const Icon = statIcons[i % statIcons.length];
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.15 + i * 0.1 }}
                className="relative p-5 rounded-2xl border border-border bg-surface overflow-hidden group card-hover text-center"
              >
                {/* Glow on hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl"
                  style={{ background: "radial-gradient(circle at 50% 0%, hsl(var(--accent) / 0.08), transparent 70%)" }}
                />
                <div
                  className="w-9 h-9 rounded-lg mx-auto mb-3 flex items-center justify-center"
                  style={{ background: "hsl(var(--accent) / 0.12)" }}
                >
                  <Icon className="w-4 h-4" style={{ color: "hsl(var(--accent))" }} />
                </div>
                <div className="text-2xl font-extrabold gradient-text">{stat.value}</div>
                <div className="text-xs text-muted-foreground mt-1 font-medium">{stat.label}</div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
