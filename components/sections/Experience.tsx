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
      <div className="max-w-6xl mx-auto">
        <SectionHeading title="Experience" subtitle="Where I've Made Impact" number="02" />

        <div className="mt-16 space-y-4">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: index * 0.1 }}
              className="editorial-card rounded-2xl overflow-hidden cursor-pointer"
              onClick={() => setExpandedId(expandedId === exp.id ? null : exp.id)}
            >
              {/* Top accent line on hover — always gold for Amazon */}
              {exp.id === "amazon-roc" && (
                <div className="h-px" style={{ background: "hsl(var(--accent))" }} />
              )}

              <div className="p-6 md:p-8">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <h3 className="font-bold text-lg" style={{ color: "hsl(var(--foreground))" }}>
                        {exp.role}
                      </h3>
                      {exp.id === "amazon-roc" && (
                        <span
                          className="px-3 py-0.5 rounded-full text-xs font-bold"
                          style={{ background: "hsl(var(--accent))", color: "hsl(var(--accent-foreground))" }}
                        >
                          Current
                        </span>
                      )}
                    </div>
                    <p className="font-black text-xl gradient-text">{exp.company}</p>
                    <div className="flex flex-wrap gap-4 mt-2 text-xs" style={{ color: "hsl(var(--muted-foreground))" }}>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" /> {exp.period}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3" /> {exp.location}
                      </span>
                    </div>
                  </div>
                  <ChevronDown
                    className="w-5 h-5 shrink-0 mt-1 transition-transform"
                    style={{
                      color: "hsl(var(--accent))",
                      transform: expandedId === exp.id ? "rotate(180deg)" : "rotate(0deg)",
                    }}
                  />
                </div>

                {expandedId === exp.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    transition={{ duration: 0.3 }}
                    className="mt-6 pt-6"
                    style={{ borderTop: "1px solid hsl(var(--border))" }}
                  >
                    <p className="text-sm leading-relaxed mb-6" style={{ color: "hsl(var(--muted-foreground))" }}>
                      {exp.description}
                    </p>

                    <div className="space-y-5">
                      {exp.achievements.map((a) => (
                        <div key={a.title} className="flex gap-3">
                          <div
                            className="w-1 rounded-full shrink-0 mt-1"
                            style={{ background: "hsl(var(--accent))", minHeight: "1rem" }}
                          />
                          <div>
                            <h4 className="font-bold text-sm" style={{ color: "hsl(var(--foreground))" }}>
                              {a.title}
                            </h4>
                            <p className="text-sm mt-1 leading-relaxed" style={{ color: "hsl(var(--muted-foreground))" }}>
                              {a.description}
                            </p>
                            <div className="flex flex-wrap gap-1.5 mt-2">
                              {a.tags.map((tag) => <Badge key={tag}>{tag}</Badge>)}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    {exp.recognition && (
                      <div
                        className="flex items-center gap-3 mt-6 p-4 rounded-xl"
                        style={{ background: "hsl(var(--accent) / 0.08)", border: "1px solid hsl(var(--accent) / 0.3)" }}
                      >
                        <span className="text-xl">🏆</span>
                        <span className="text-sm font-bold gradient-text">{exp.recognition.replace("🏆 ", "")}</span>
                      </div>
                    )}

                    <div className="flex flex-wrap gap-2 mt-4">
                      {exp.technologies.map((t) => <Badge key={t} variant="outline">{t}</Badge>)}
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
