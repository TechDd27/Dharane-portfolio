"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { skillCategories } from "../../config/skills";
import { SectionHeading } from "../ui/SectionHeading";

/* ── Circular ring per skill ─────────────────────────────── */
const RADIUS = 20;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

const categoryIcons: Record<string, string> = {
  data: "📊",
  "supply-chain": "⚔",
  automation: "⚙️",
  tools: "🛠️",
};

function SkillRing({
  level,
  isInView,
  delay,
}: {
  level: number;
  isInView: boolean;
  delay: number;
}) {
  const offset = CIRCUMFERENCE - (level / 100) * CIRCUMFERENCE;
  return (
    <div className="relative w-11 h-11 shrink-0">
      <svg className="w-11 h-11 -rotate-90" viewBox="0 0 48 48">
        <circle
          cx="24" cy="24" r={RADIUS}
          fill="none" strokeWidth="2.5"
          style={{ stroke: "hsl(var(--border))" }}
        />
        <motion.circle
          cx="24" cy="24" r={RADIUS}
          fill="none" strokeWidth="2.5" strokeLinecap="round"
          strokeDasharray={CIRCUMFERENCE}
          initial={{ strokeDashoffset: CIRCUMFERENCE }}
          animate={isInView ? { strokeDashoffset: offset } : { strokeDashoffset: CIRCUMFERENCE }}
          transition={{ duration: 1.1, delay, ease: "easeOut" }}
          style={{ stroke: "hsl(var(--accent))" }}
        />
      </svg>
      <div
        className="absolute inset-0 flex items-center justify-center text-[10px] font-black"
        style={{ color: "hsl(var(--accent))" }}
      >
        {level}
      </div>
    </div>
  );
}

/* ── Radar / diamond chart ───────────────────────────────── */
const radarCategories = [
  { label: "Data", fullLabel: "Data & Analytics", pct: 87, angle: -Math.PI / 2 },
  { label: "Ops", fullLabel: "Supply Chain", pct: 84, angle: 0 },
  { label: "Tools", fullLabel: "Tools", pct: 71, angle: Math.PI / 2 },
  { label: "Eng", fullLabel: "Automation", pct: 70, angle: Math.PI },
];

function SkillRadar({ isInView }: { isInView: boolean }) {
  const cx = 100, cy = 100, R = 68;
  const guides = [0.25, 0.5, 0.75, 1.0];

  const pt = (pct: number, angle: number) => ({
    x: cx + (pct / 100) * R * Math.cos(angle),
    y: cy + (pct / 100) * R * Math.sin(angle),
  });

  const dataPoints = radarCategories.map((c) => pt(c.pct, c.angle));
  const dataStr = dataPoints.map((p) => `${p.x.toFixed(2)},${p.y.toFixed(2)}`).join(" ");

  return (
    <svg width={200} height={200} viewBox="0 0 200 200" className="overflow-visible">
      {/* Guide diamonds */}
      {guides.map((g, gi) => {
        const pts = radarCategories
          .map((c) => {
            const p = pt(g * 100, c.angle);
            return `${p.x.toFixed(2)},${p.y.toFixed(2)}`;
          })
          .join(" ");
        return (
          <polygon
            key={gi}
            points={pts}
            fill="none"
            stroke="hsl(var(--border))"
            strokeWidth={gi === 3 ? "1" : "0.6"}
            strokeDasharray={gi === 3 ? undefined : "2,3"}
          />
        );
      })}

      {/* Axis lines */}
      {radarCategories.map((c, i) => {
        const end = pt(100, c.angle);
        return (
          <line
            key={i}
            x1={cx} y1={cy}
            x2={end.x.toFixed(2)} y2={end.y.toFixed(2)}
            stroke="hsl(var(--border))" strokeWidth="0.6"
          />
        );
      })}

      {/* Data polygon — animates from center outward */}
      <motion.polygon
        points={dataStr}
        fill="hsl(var(--accent) / 0.12)"
        stroke="hsl(var(--accent))"
        strokeWidth="1.5"
        strokeLinejoin="round"
        initial={{ scale: 0, opacity: 0 }}
        animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
        style={{ transformOrigin: `${cx}px ${cy}px` }}
        transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.3 }}
      />

      {/* Data point dots */}
      {dataPoints.map((p, i) => (
        <motion.circle
          key={i}
          cx={p.x.toFixed(2)} cy={p.y.toFixed(2)} r={3.5}
          fill="hsl(var(--accent))"
          stroke="hsl(var(--background))" strokeWidth="1.5"
          initial={{ opacity: 0, scale: 0 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          style={{ transformOrigin: `${p.x.toFixed(2)}px ${p.y.toFixed(2)}px` }}
          transition={{ delay: 0.9 + i * 0.1, duration: 0.3 }}
        />
      ))}

      {/* Center dot */}
      <circle cx={cx} cy={cy} r={2} fill="hsl(var(--accent) / 0.4)" />

      {/* Axis labels */}
      <text x={cx} y={cy - R - 12} textAnchor="middle" fontSize="8" fontWeight="700"
        fill="hsl(var(--muted-foreground))" fontFamily="sans-serif" letterSpacing="1">
        DATA {radarCategories[0].pct}%
      </text>
      <text x={cx + R + 10} y={cy + 3} textAnchor="start" fontSize="8" fontWeight="700"
        fill="hsl(var(--muted-foreground))" fontFamily="sans-serif" letterSpacing="1">
        OPS {radarCategories[1].pct}%
      </text>
      <text x={cx} y={cy + R + 18} textAnchor="middle" fontSize="8" fontWeight="700"
        fill="hsl(var(--muted-foreground))" fontFamily="sans-serif" letterSpacing="1">
        TOOLS {radarCategories[2].pct}%
      </text>
      <text x={cx - R - 10} y={cy + 3} textAnchor="end" fontSize="8" fontWeight="700"
        fill="hsl(var(--muted-foreground))" fontFamily="sans-serif" letterSpacing="1">
        ENG {radarCategories[3].pct}%
      </text>
    </svg>
  );
}

/* ── Main section ────────────────────────────────────────── */
export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [active, setActive] = useState("all");

  const filtered =
    active === "all"
      ? skillCategories
      : skillCategories.filter((c) => c.id === active);

  return (
    <section id="skills" ref={ref} className="section">
      <div className="max-w-6xl mx-auto">
        <SectionHeading title="Skills" subtitle="Arsenal" number="04" />

        {/* ── Skill Snapshot card ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-12 editorial-card rounded-2xl p-6 md:p-8 flex flex-col sm:flex-row items-center gap-8"
        >
          {/* Radar */}
          <div className="shrink-0">
            <SkillRadar isInView={isInView} />
          </div>

          {/* Category bars */}
          <div className="flex-1 w-full">
            <p
              className="text-xs font-black uppercase tracking-[3px] mb-5"
              style={{ color: "hsl(var(--muted-foreground))" }}
            >
              Category Strength
            </p>
            <div className="space-y-4">
              {radarCategories.map((cat, i) => (
                <div key={cat.fullLabel}>
                  <div className="flex items-center justify-between mb-1.5">
                    <span
                      className="text-xs font-bold uppercase tracking-[1.5px]"
                      style={{ color: "hsl(var(--foreground))" }}
                    >
                      {categoryIcons[skillCategories[i]?.id] ?? ""} {cat.fullLabel}
                    </span>
                    <span
                      className="text-xs font-black"
                      style={{ color: "hsl(var(--accent))" }}
                    >
                      {cat.pct}%
                    </span>
                  </div>
                  <div
                    className="h-1.5 rounded-full overflow-hidden"
                    style={{ background: "hsl(var(--border))" }}
                  >
                    <motion.div
                      className="h-full rounded-full"
                      style={{ background: "hsl(var(--accent))" }}
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${cat.pct}%` } : { width: 0 }}
                      transition={{ duration: 1.1, delay: 0.4 + i * 0.1, ease: "easeOut" }}
                    />
                  </div>
                </div>
              ))}
            </div>
            <p
              className="text-xs mt-5 leading-relaxed"
              style={{ color: "hsl(var(--muted-foreground))" }}
            >
              4 domains · 18 skills · applied daily at Amazon ROC
            </p>
          </div>
        </motion.div>

        {/* ── Filter tabs ── */}
        <div className="flex flex-wrap gap-2 mt-10 mb-8">
          {[
            { id: "all", label: "All" },
            ...skillCategories.map((c) => ({ id: c.id, label: c.label })),
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActive(tab.id)}
              className="px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all"
              style={
                active === tab.id
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
              {categoryIcons[tab.id] ?? ""} {tab.label}
            </button>
          ))}
        </div>

        {/* ── Skill cards ── */}
        <div className="space-y-8">
          {filtered.map((cat, ci) => (
            <div key={cat.id}>
              <div className="flex items-center gap-3 mb-5">
                <span className="text-base">{categoryIcons[cat.id]}</span>
                <span className="font-cinzel font-black text-xs uppercase tracking-[3px] gradient-text">
                  {cat.label}
                </span>
                <div
                  className="flex-1 h-px"
                  style={{
                    background:
                      "linear-gradient(to right, hsl(var(--accent) / 0.35), transparent)",
                  }}
                />
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
                    <SkillRing
                      level={skill.level}
                      isInView={isInView}
                      delay={ci * 0.04 + i * 0.08}
                    />
                    <div className="min-w-0">
                      <p
                        className="font-bold text-sm leading-tight"
                        style={{ color: "hsl(var(--foreground))" }}
                      >
                        {skill.name}
                      </p>
                      <p
                        className="text-xs mt-0.5 leading-snug"
                        style={{ color: "hsl(var(--muted-foreground))" }}
                      >
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
