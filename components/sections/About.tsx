"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { siteConfig } from "../../config/site";
import { SectionHeading } from "../ui/SectionHeading";
import { AnimatedCounter } from "../ui/AnimatedCounter";

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
        className="grid md:grid-cols-[200px_1fr] gap-10 items-start mt-12"
      >
        <div className="mx-auto md:mx-0">
          <div className="w-40 h-40 rounded-xl bg-muted border border-border flex items-center justify-center overflow-hidden">
            <span className="text-4xl">👤</span>
          </div>
        </div>

        <div>
          <p className="text-lg leading-relaxed text-muted-foreground">{about.bio}</p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
            {about.stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                className="p-4 rounded-lg bg-surface border border-border text-center"
              >
                <div className="text-2xl font-bold text-accent">
                  <AnimatedCounter value={stat.value} />
                </div>
                <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}