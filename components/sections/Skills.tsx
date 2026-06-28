"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { skillCategories } from "../../config/skills";
import { SectionHeading } from "../ui/SectionHeading";

const RADIUS = 20;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

const categoryIcons: Record<string, string> = {
  data: "📊",
  "supply-chain": "⚔",
  automation: "⚙️",
  tools: "🛠️",
};

function SkillRing({ level, isInView, delay }: { level: number; isInView: boolean; delay: number }) {
  const offset = CIRCUMFERENCE - (level / 100) * CIRCUMFERENCE;
  return (
    <div className="relative w-11 h-11 shrink-0">
      <svg className="w-11 h-11 -rotate-90" viewBox="0 0 48 48">
        <circle cx="24" cy="24" r={RADIUS} fill="none" strokeWidth="2.5" style={{ stroke: "hsl(var(--border))" }} />
        <motion.circle
          cx="24" cy="24" r={RADIUS} fill="none" strokeWidth="2.5" strokeLinecap="round"
          strokeDasharray={CIRCUMFERENCE}
          initial={{ strokeDashoffset: CIRCUMFERENCE }}
          animate={isInView ? { strokeDashoffset: offset } : { strokeDashoffset: CIRCUMFERENCE }}
          transition={{ duration: 1.1, delay, ease: "easeOut" }}
          style={{ stroke: "hsl(var(--accent))" }}
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center text-[10px] font-black" style={{ color: "hsl(var(--accent))" }}>
        {level}
      </div>
    </div>
  );
}

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [active, setActive] = useState("all");

  const filtered = active === "all" ? skillCategories : skillCategories.filter((c) => c.id === active);

  return (
    <section id="skills" ref={ref} className="section">
      <div className="max-w-6xl mx-auto">
        <SectionHeading title="Skills" subtitle="Arsenal" number="04" />

        {/* Filter tabs */}
        <div className="flex flex-wrap gap-2 mt-12 mb-12">
          {[{ id: "all", label: "All" }, ...skillCategories.map((c) => ({ id: c.id, label: c.label }))].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActive(tab.id)}
              className="px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all"
              style={
                active === tab.id
                  ? { background: "hsl(var(--accent))", color: "hsl(var(--accent-foreground))", boxShadow: "0 0 16px hsl(var(--accent) / 0.4)" }
                  : { background: "hsl(var(--muted))", color: "hsl(var(--muted-foreground))", border: "1px solid hsl(var(--border))" }
              }
            >
              {categoryIcons[tab.id] ?? ""} {tab.label}
            </button>
          ))}
        </div>

        <div className="space-y-8">
          {filtered.map((cat, ci) => (
            <div key={cat.id}>
              {/* Category header */}
              <div className="flex items-center gap-3 mb-5">
                <span className="text-base">{categoryIcons[cat.id]}</span>
                <span className="font-cinzel font-black text-xs uppercase tracking-[3px] gradient-text">
                  {cat.label}
                </span>
                <div className="flex-1 h-px" style={{ background: "linear-gradient(to right, hsl(var(--accent) / 0.35), transparent)" }} />
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {cat.skills.map((skill, i) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 14 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: ci * 0.04 + i * 0.06 }}
                    className="editorial-card rounded-xl flex items-center gap-4 p-4"
                  >
                    <SkillRing level={skill.level} isInView={isInView} delay={ci * 0.04 + i * 0.08} />
                    <div className="min-w-0">
                      <p className="font-bold text-sm leading-tight" style={{ color: "hsl(var(--foreground))" }}>
                        {skill.name}
                      </p>
                      <p className="text-xs mt-0.5 leading-snug" style={{ color: "hsl(var(--muted-foreground))" }}>
                        {skill.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
