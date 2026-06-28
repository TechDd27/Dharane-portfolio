"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { siteConfig } from "../../config/site";
import { SectionHeading } from "../ui/SectionHeading";
import { AnimatedCounter } from "../ui/AnimatedCounter";

const processSteps = [
  { icon: "🔍", label: "Detect", desc: "Signal in the noise" },
  { icon: "📊", label: "Diagnose", desc: "Root cause, not symptom" },
  { icon: "⚡", label: "Fix", desc: "Systemic improvement" },
];

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

        <div className="mt-14 grid md:grid-cols-[1fr_1fr] gap-12 items-start">

          {/* Bio — left column */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <p
              className="text-xl md:text-2xl leading-relaxed font-medium"
              style={{ color: "hsl(var(--foreground))" }}
            >
              Most people see a delayed shipment. I see a chain of small failures
              that compounded — a missed validation, an unflagged anomaly, a gap
              between what the data said and what was{" "}
              <span className="gradient-text font-bold">actually happening on the ground.</span>
            </p>

            <p
              className="text-base leading-relaxed mt-5"
              style={{ color: "hsl(var(--muted-foreground))" }}
            >
              I studied{" "}
              <span style={{ color: "hsl(var(--foreground))", fontWeight: 600 }}>Robotics & Automation</span>{" "}
              because I wanted to understand how complex systems break — not just in
              theory, but down to the sensor, the signal, the feedback loop. At Amazon,
              I apply that same instinct to supply chains: validating millions of records,
              hunting root causes of speed degradation across First/Middle/Last Mile,
              and closing the gap between what the dashboard shows and what&apos;s
              actually true.
            </p>

            <p
              className="text-base leading-relaxed mt-5 font-semibold"
              style={{ color: "hsl(var(--foreground))" }}
            >
              I don&apos;t wait for someone to tell me what broke. I go find it first.
            </p>

            {/* ── Process flow infographic ── */}
            <div className="mt-9 flex flex-col sm:flex-row items-stretch gap-2">
              {processSteps.flatMap((step, i) => [
                <motion.div
                  key={step.label}
                  initial={{ opacity: 0, y: 12 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.45, delay: 0.5 + i * 0.12 }}
                  className="flex-1 flex flex-col items-center gap-2 px-4 py-4 rounded-xl text-center editorial-card"
                >
                  <span className="text-2xl">{step.icon}</span>
                  <span
                    className="text-[11px] font-black uppercase tracking-[2px]"
                    style={{ color: "hsl(var(--accent))" }}
                  >
                    {step.label}
                  </span>
                  <span
                    className="text-xs leading-snug"
                    style={{ color: "hsl(var(--muted-foreground))" }}
                  >
                    {step.desc}
                  </span>
                </motion.div>,
                ...(i < processSteps.length - 1
                  ? [
                      <div
                        key={`arrow-${i}`}
                        className="hidden sm:flex items-center self-center shrink-0"
                        style={{ color: "hsl(var(--accent) / 0.5)" }}
                      >
                        →
                      </div>,
                    ]
                  : []),
              ])}
            </div>
          </motion.div>

          {/* Stats grid — right column */}
          <div className="grid grid-cols-2 gap-4">
            {about.stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.92 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                className="editorial-card rounded-2xl p-5 md:p-6 relative overflow-hidden"
              >
                {/* Top accent bar */}
                <div
                  className="absolute top-0 left-0 right-0 h-px"
                  style={{
                    background:
                      i === 0
                        ? "hsl(var(--accent))"
                        : "hsl(var(--border))",
                  }}
                />

                <p className="font-black text-xl md:text-2xl leading-tight gradient-text">
                  <AnimatedCounter value={stat.value} />
                </p>
                <p
                  className="text-xs uppercase tracking-[2px] mt-2 font-medium leading-snug"
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
