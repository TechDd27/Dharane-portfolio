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
    <div className="relative w-12 h-12 shrink-0">
      <svg className="w-12 h-12 -rotate-90" viewBox="0 0 48 48">
        <circle cx="24" cy="24" r={RADIUS} fill="none" strokeWidth="2.5" style={{ stroke: "hsl(var(--muted))" }} />
        <motion.circle
          cx="24" cy="24" r={RADIUS}
          fill="none" strokeWidth="2.5" strokeLinecap="round"
          strokeDasharray={CIRCUMFERENCE}
          initial={{ strokeDashoffset: CIRCUMFERENCE }}
          animate={isInView ? { strokeDashoffset: offset } : { strokeDashoffset: CIRCUMFERENCE }}
          transition={{ duration: 1.2, delay, ease: "easeOut" }}
          style={{ stroke: "hsl(var(--accent))" }}
        />
      </svg>
      <div
        className="absolute inset-0 flex items-center justify-center font-cinzel font-bold text-[10px]"
        style={{ color: "hsl(var(--accent))" }}
      >
        {level}
      </div>
    </div>
  );
}

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [activeCategory, setActiveCategory] = useState("all");

  const filtered = activeCategory === "all"
    ? skillCategories
    : skillCategories.filter((c) => c.id === activeCategory);

  const tabs = [
    { id: "all", label: "All", icon: "✦" },
    ...skillCategories.map((c) => ({ id: c.id, label: c.label, icon: categoryIcons[c.id] ?? "•" })),
  ];

  return (
    <section id="skills" ref={ref} className="section">
      <SectionHeading title="Skills" subtitle="Arsenal of the Realm" />

      {/* Category tabs */}
      <div className="flex flex-wrap gap-2 mt-14 mb-10 justify-center">
        {tabs.map((tab) => {
          const active = activeCategory === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveCategory(tab.id)}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-sm font-cinzel text-xs uppercase tracking-widest transition-all"
              style={
                active
                  ? {
                      background: "hsl(var(--accent))",
                      color: "hsl(var(--accent-foreground))",
                      boxShadow: "0 0 16px hsl(var(--accent) / 0.4)",
                    }
                  : {
                      background: "hsl(var(--muted))",
                      color: "hsl(var(--muted-foreground))",
                      border: "1px solid hsl(var(--border))",
                    }
              }
            >
              <span>{tab.icon}</span>
              {tab.label}
            </button>
          );
        })}
      </div>

      <div className="space-y-10">
        {filtered.map((category, catIdx) => (
          <div key={category.id}>
            {/* Category header */}
            <div className="flex items-center gap-3 mb-5">
              <span className="text-lg">{categoryIcons[category.id]}</span>
              <span className="font-cinzel font-bold text-xs uppercase tracking-[3px]" style={{ color: "hsl(var(--accent))" }}>
                {category.label}
              </span>
              <div className="flex-1 h-px" style={{ background: "linear-gradient(to right, hsl(var(--accent) / 0.4), transparent)" }} />
              <span className="font-cinzel text-[10px]" style={{ color: "hsl(var(--muted-foreground))" }}>
                {category.skills.length} skills
              </span>
            </div>

            <div className="grid sm:grid-cols-2 gap-3">
              {category.skills.map((skill, i) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 16 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.45, delay: catIdx * 0.04 + i * 0.07 }}
                  className="heraldic-card flex items-center gap-4 p-4"
                >
                  <SkillRing level={skill.level} isInView={isInView} delay={catIdx * 0.04 + i * 0.09} />
                  <div className="min-w-0">
                    <p className="font-cinzel font-bold text-sm" style={{ color: "hsl(var(--foreground))" }}>
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
    </section>
  );
}
