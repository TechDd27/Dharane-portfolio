"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { siteConfig } from "../../config/site";
import { SectionHeading } from "../ui/SectionHeading";

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const about = siteConfig.about;

  return (
    <section
      id="about"
      ref={ref}
      className="section-full"
      style={{ background: "hsl(var(--muted))" }}
    >
      <div className="max-w-6xl mx-auto">
        <SectionHeading title="About" subtitle="The Story" number="01" />

        <div className="mt-16 grid md:grid-cols-[1fr_1fr] gap-16 items-start">
          {/* Bio — large editorial text */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <p
              className="text-xl md:text-2xl leading-relaxed font-medium"
              style={{ color: "hsl(var(--foreground))" }}
            >
              I graduated with a degree in{" "}
              <span className="gradient-text font-bold">Robotics & Automation</span>{" "}
              — where I learned to think in systems.
            </p>
            <p
              className="text-base md:text-lg leading-relaxed mt-6"
              style={{ color: "hsl(var(--muted-foreground))" }}
            >
              At Amazon, I applied that same systems thinking to supply chains spanning
              the EU and India. I validate millions of data points, diagnose speed
              degradation across transportation networks, and coordinate cross-functional
              teams to keep operations reliable at scale.
            </p>
            <p
              className="text-base md:text-lg leading-relaxed mt-4 font-semibold"
              style={{ color: "hsl(var(--foreground))" }}
            >
              I don't just analyze — I engineer solutions.
            </p>
          </motion.div>

          {/* Stats grid */}
          <div className="grid grid-cols-2 gap-4">
            {about.stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.92 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.15 + i * 0.1 }}
                className="editorial-card rounded-2xl p-6 relative overflow-hidden"
              >
                {/* Gold corner accent */}
                <div
                  className="absolute top-0 left-0 right-0 h-px"
                  style={{ background: i === 0 ? "hsl(var(--accent))" : "hsl(var(--border))" }}
                />
                <p
                  className="font-black text-3xl leading-none gradient-text"
                >
                  {stat.value}
                </p>
                <p
                  className="text-xs uppercase tracking-[2px] mt-2 font-medium"
                  style={{ color: "hsl(var(--muted-foreground))" }}
                >
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
