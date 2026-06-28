"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { skillCategories } from "../../config/skills";
import { SectionHeading } from "../ui/SectionHeading";

const RADIUS = 20;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

type SkillRingProps = {
  level: number;
  isInView: boolean;
  delay: number;
};

function SkillRing({ level, isInView, delay }: SkillRingProps) {
  const offset = CIRCUMFERENCE - (level / 100) * CIRCUMFERENCE;
  return (
    <div className="relative w-12 h-12 shrink-0">
      <svg className="w-12 h-12 -rotate-90" viewBox="0 0 48 48">
        <circle
          cx="24" cy="24" r={RADIUS}
          fill="none"
          strokeWidth="3"
          style={{ stroke: "hsl(var(--muted))" }}
        />
        <motion.circle
          cx="24" cy="24" r={RADIUS}
          fill="none"
          strokeWidth="3"
          strokeLinecap="round"
          strokeDasharray={CIRCUMFERENCE}
          initial={{ strokeDashoffset: CIRCUMFERENCE }}
          animate={isInView ? { strokeDashoffset: offset } : { strokeDashoffset: CIRCUMFERENCE }}
          transition={{ duration: 1.1, delay, ease: "easeOut" }}
          style={{ stroke: "hsl(var(--accent))" }}
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center text-[10px] font-bold" style={{ color: "hsl(var(--accent))" }}>
        {level}
      </div>
    </div>
  );
}

type SkillCardProps = {
  name: string;
  level: number;
  description: string;
  isInView: boolean;
  delay: number;
};

function SkillCard({ name, level, description, isInView, delay }: SkillCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.45, delay }}
      className="flex items-center gap-4 p-4 rounded-xl border border-border bg-surface card-hover"
    >
      <SkillRing level={level} isInView={isInView} delay={delay + 0.1} />
      <div className="min-w-0">
        <p className="font-semibold text-sm text-foreground leading-tight">{name}</p>
        <p className="text-xs text-muted-foreground mt-0.5 leading-snug">{description}</p>
      </div>
    </motion.div>
  );
}

const categoryIcons: Record<string, string> = {
  data: "📊",
  "supply-chain": "🚚",
  automation: "⚙️",
  tools: "🛠️",
};

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [activeCategory, setActiveCategory] = useState("all");

  const filtered =
    activeCategory === "all"
      ? skillCategories
      : skillCategories.filter((c) => c.id === activeCategory);

  return (
    <section id="skills" ref={ref} className="section">
      <SectionHeading title="Skills" subtitle="Tools & technologies I work with" />

      {/* Category filter */}
      <div className="flex flex-wrap gap-2 mt-10 mb-8">
        {[{ id: "all", label: "All Skills", icon: "✦" }, ...skillCategories.map((c) => ({ id: c.id, label: c.label, icon: categoryIcons[c.id] ?? "•" }))].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveCategory(tab.id)}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium transition-all"
            style={
              activeCategory === tab.id
                ? { background: "hsl(var(--accent))", color: "hsl(var(--accent-foreground))", boxShadow: "0 0 16px hsl(var(--accent-glow) / 0.3)" }
                : { background: "hsl(var(--muted))", color: "hsl(var(--muted-foreground))" }
            }
          >
            <span>{tab.icon}</span>
            {tab.label}
          </button>
        ))}
      </div>

      {/* Skill grids per category */}
      <div className="space-y-10">
        {filtered.map((category, catIdx) => (
          <div key={category.id}>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-lg">{categoryIcons[category.id]}</span>
              <h3 className="text-sm font-bold uppercase tracking-widest text-muted-foreground">
                {category.label}
              </h3>
              <div className="flex-1 h-px" style={{ background: "hsl(var(--border))" }} />
              <span className="text-xs text-muted-foreground">{category.skills.length} skills</span>
            </div>
            <div className="grid sm:grid-cols-2 gap-3">
              {category.skills.map((skill, i) => (
                <SkillCard
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  description={skill.description}
                  isInView={isInView}
                  delay={catIdx * 0.05 + i * 0.07}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
