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
    <section
      id="education"
      ref={ref}
      className="section-full"
      style={{ background: "hsl(var(--muted))" }}
    >
      <div className="max-w-6xl mx-auto">
        <SectionHeading title="Education" subtitle="Academic Records" number="05" />

        <div className="mt-16 space-y-4">
          {education.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: index * 0.1 }}
              className="editorial-card rounded-2xl p-6 md:p-8"
            >
              <div className="flex items-start gap-5">
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl shrink-0"
                  style={{ background: "hsl(var(--accent) / 0.1)", border: "1px solid hsl(var(--accent) / 0.2)" }}
                >
                  🎓
                </div>
                <div>
                  <h3 className="font-bold text-lg" style={{ color: "hsl(var(--foreground))" }}>{edu.degree}</h3>
                  <p className="font-black text-base gradient-text mt-0.5">{edu.institution}</p>
                  <p className="text-xs mt-1.5" style={{ color: "hsl(var(--muted-foreground))" }}>
                    {edu.period} · {edu.location} · {edu.grade}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {edu.highlights.map((h) => <Badge key={h} variant="outline">{h}</Badge>)}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}

          {achievements.length > 0 && (
            <div className="grid md:grid-cols-2 gap-4 mt-8">
              {achievements.map((a, index) => (
                <motion.div
                  key={a.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="editorial-card rounded-2xl flex items-center gap-4 p-5"
                >
                  <span className="text-2xl shrink-0">🏅</span>
                  <div>
                    <p className="font-bold text-sm" style={{ color: "hsl(var(--foreground))" }}>{a.title}</p>
                    <p className="text-xs mt-0.5" style={{ color: "hsl(var(--muted-foreground))" }}>{a.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
