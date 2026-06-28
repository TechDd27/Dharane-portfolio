"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Award } from "lucide-react";
import { education, achievements } from "../../config/education";
import { SectionHeading } from "../ui/SectionHeading";
import { Badge } from "../ui/Badge";

export function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" ref={ref} className="section">
      <SectionHeading title="Education" subtitle="Academic background & recognition" />

      <div className="mt-12 space-y-8">
        {education.map((edu, index) => (
          <motion.div
            key={edu.id}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="p-6 rounded-lg bg-surface border border-border"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-accent/10">
                <GraduationCap className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="text-h3">{edu.degree}</h3>
                <p className="text-accent font-medium mt-1">{edu.institution}</p>
                <p className="text-sm text-muted-foreground mt-1">
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
          <div className="grid md:grid-cols-2 gap-4 mt-8">
            {achievements.map((a, index) => (
              <motion.div
                key={a.id}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="p-4 rounded-lg bg-surface border border-border flex items-center gap-3"
              >
                <Award className="w-5 h-5 text-accent" />
                <div>
                  <p className="font-medium text-sm">{a.title}</p>
                  <p className="text-xs text-muted-foreground">{a.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}