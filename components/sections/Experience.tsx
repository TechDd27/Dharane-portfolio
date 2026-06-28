"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { MapPin, Calendar, ChevronDown } from "lucide-react";
import { experiences } from "../../config/experience";
import { SectionHeading } from "../ui/SectionHeading";
import { Badge } from "../ui/Badge";

export function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [expandedId, setExpandedId] = useState<string | null>("amazon-roc");

  return (
    <section id="experience" ref={ref} className="section">
      <SectionHeading title="Experience" subtitle="Chronicles of Service" />

      <div className="mt-16 relative">
        {/* Timeline spine */}
        <div
          className="absolute left-[19px] top-0 bottom-0 w-[1px]"
          style={{ background: "linear-gradient(to bottom, hsl(var(--accent) / 0.6), hsl(var(--accent) / 0.1))" }}
        />

        {experiences.map((exp, index) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, x: -24 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            className="relative pl-12 pb-12 last:pb-0"
          >
            {/* Timeline node */}
            <div
              className="absolute left-[12px] top-3 w-4 h-4 rounded-full border-2 z-10"
              style={{
                background: "hsl(var(--background))",
                borderColor: "hsl(var(--accent))",
                boxShadow: "0 0 8px hsl(var(--accent) / 0.5)",
              }}
            />

            <div
              className="heraldic-card cursor-pointer"
              onClick={() => setExpandedId(expandedId === exp.id ? null : exp.id)}
            >
              {/* Top accent */}
              <div
                className="absolute top-0 left-0 right-0 h-px"
                style={{ background: "linear-gradient(90deg, hsl(var(--accent) / 0.6), transparent)" }}
              />

              <div className="p-6">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-cinzel font-bold text-lg" style={{ color: "hsl(var(--foreground))" }}>
                      {exp.role}
                    </h3>
                    <p className="font-cinzel text-sm font-bold mt-1 gradient-text">{exp.company}</p>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 transition-transform shrink-0 mt-1`}
                    style={{
                      color: "hsl(var(--accent))",
                      transform: expandedId === exp.id ? "rotate(180deg)" : "rotate(0deg)",
                    }}
                  />
                </div>

                <div className="flex flex-wrap gap-4 mt-3 text-xs" style={{ color: "hsl(var(--muted-foreground))" }}>
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3 h-3" style={{ color: "hsl(var(--accent))" }} />
                    {exp.period}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-3 h-3" style={{ color: "hsl(var(--accent))" }} />
                    {exp.location}
                  </span>
                </div>

                {expandedId === exp.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.35 }}
                    className="mt-5 pt-5"
                    style={{ borderTop: "1px solid hsl(var(--border))" }}
                  >
                    <p className="text-sm leading-relaxed mb-5" style={{ color: "hsl(var(--muted-foreground))" }}>
                      {exp.description}
                    </p>

                    <div className="space-y-5">
                      {exp.achievements.map((achievement) => (
                        <div key={achievement.title} className="flex gap-3">
                          <div
                            className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0"
                            style={{ background: "hsl(var(--accent))" }}
                          />
                          <div>
                            <h4 className="font-cinzel font-bold text-sm" style={{ color: "hsl(var(--foreground))" }}>
                              {achievement.title}
                            </h4>
                            <p className="text-sm mt-1 leading-relaxed" style={{ color: "hsl(var(--muted-foreground))" }}>
                              {achievement.description}
                            </p>
                            <div className="flex flex-wrap gap-1.5 mt-2">
                              {achievement.tags.map((tag) => (
                                <Badge key={tag}>{tag}</Badge>
                              ))}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    {exp.recognition && (
                      <div
                        className="flex items-center gap-3 mt-5 p-4 rounded-sm border"
                        style={{
                          background: "hsl(var(--gold) / 0.08)",
                          borderColor: "hsl(var(--gold) / 0.35)",
                        }}
                      >
                        <span className="text-lg">🏆</span>
                        <span className="font-cinzel text-sm font-bold" style={{ color: "hsl(var(--gold))" }}>
                          {exp.recognition.replace("🏆 ", "")}
                        </span>
                      </div>
                    )}

                    <div className="flex flex-wrap gap-2 mt-4">
                      {exp.technologies.map((tech) => (
                        <Badge key={tech} variant="outline">{tech}</Badge>
                      ))}
                    </div>
                  </motion.div>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
