"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { education, achievements } from "../../config/education";
import { SectionHeading } from "../ui/SectionHeading";
import { Badge } from "../ui/Badge";

export function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" ref={ref} className="section">
      <SectionHeading title="Education" subtitle="The Grand Maester's Records" />

      <div className="mt-16 space-y-6">
        {education.map((edu, index) => (
          <motion.div
            key={edu.id}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: index * 0.1 }}
            className="heraldic-card p-6"
          >
            <div className="flex items-start gap-4">
              <div
                className="w-12 h-12 rounded-sm border flex items-center justify-center text-xl shrink-0"
                style={{
                  background: "hsl(var(--accent) / 0.08)",
                  borderColor: "hsl(var(--accent) / 0.25)",
                }}
              >
                🎓
              </div>
              <div>
                <h3 className="font-cinzel font-bold text-base" style={{ color: "hsl(var(--foreground))" }}>
                  {edu.degree}
                </h3>
                <p className="font-cinzel text-sm font-bold mt-1 gradient-text">{edu.institution}</p>
                <p className="text-xs mt-1.5" style={{ color: "hsl(var(--muted-foreground))" }}>
                  {edu.period} · {edu.location} · {edu.grade}
                </p>
                <div className="flex flex-wrap gap-2 mt-3">
                  {edu.highlights.map((h) => (
                    <Badge key={h} variant="outline">{h}</Badge>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}

        {achievements.length > 0 && (
          <>
            <div className="flex items-center gap-3 mt-10 mb-5">
              <span className="font-cinzel text-xs uppercase tracking-[3px]" style={{ color: "hsl(var(--accent))" }}>
                Honours &amp; Recognition
              </span>
              <div className="flex-1 h-px" style={{ background: "linear-gradient(to right, hsl(var(--accent) / 0.4), transparent)" }} />
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {achievements.map((a, index) => (
                <motion.div
                  key={a.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="heraldic-card flex items-center gap-3 p-4"
                >
                  <span className="text-xl shrink-0">🏅</span>
                  <div>
                    <p className="font-cinzel font-bold text-sm" style={{ color: "hsl(var(--foreground))" }}>
                      {a.title}
                    </p>
                    <p className="text-xs mt-0.5" style={{ color: "hsl(var(--muted-foreground))" }}>
                      {a.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
