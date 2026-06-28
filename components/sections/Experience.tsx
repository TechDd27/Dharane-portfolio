"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { MapPin, Calendar, ChevronDown, ExternalLink } from "lucide-react";
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

        <div className="mt-14 space-y-5">
          {experiences.map((exp, index) => (
            <div key={exp.id} className="md:flex md:gap-5 md:items-start">

              {/* ── Timeline marker column (desktop only) ── */}
              <div className="hidden md:flex flex-col items-center shrink-0 w-5 pt-8">
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={isInView ? { scale: 1, opacity: 1 } : {}}
                  transition={{ delay: 0.25 + index * 0.12, type: "spring", stiffness: 300 }}
                  className="w-3 h-3 rounded-full shrink-0"
                  style={{
                    background:
                      exp.id === "amazon-roc"
                        ? "hsl(var(--accent))"
                        : "hsl(var(--surface))",
                    border: "2px solid hsl(var(--accent) / 0.5)",
                    boxShadow:
                      exp.id === "amazon-roc"
                        ? "0 0 10px hsl(var(--accent) / 0.55)"
                        : "none",
                  }}
                />
                {/* Connector to next card */}
                {index < experiences.length - 1 && (
                  <motion.div
                    className="flex-1 w-px mt-2 min-h-[2rem]"
                    initial={{ scaleY: 0, transformOrigin: "top" }}
                    animate={isInView ? { scaleY: 1 } : {}}
                    transition={{ delay: 0.5 + index * 0.12, duration: 0.6 }}
                    style={{
                      background:
                        "linear-gradient(to bottom, hsl(var(--accent) / 0.3), hsl(var(--accent) / 0.05))",
                    }}
                  />
                )}
              </div>

              {/* ── Experience card ── */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.55, delay: index * 0.1 }}
                className="flex-1 editorial-card rounded-2xl overflow-hidden cursor-pointer"
                onClick={() => setExpandedId(expandedId === exp.id ? null : exp.id)}
              >
                {/* Gold top line for current role */}
                {exp.id === "amazon-roc" && (
                  <div className="h-px" style={{ background: "hsl(var(--accent))" }} />
                )}

                <div className="p-6 md:p-8">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3 mb-2">
                        <h3
                          className="font-bold text-lg"
                          style={{ color: "hsl(var(--foreground))" }}
                        >
                          {exp.role}
                        </h3>
                        {exp.id === "amazon-roc" && (
                          <span
                            className="px-3 py-0.5 rounded-full text-xs font-bold"
                            style={{
                              background: "hsl(var(--accent))",
                              color: "hsl(var(--accent-foreground))",
                            }}
                          >
                            Current
                          </span>
                        )}
                      </div>
                      <p className="font-black text-xl gradient-text">{exp.company}</p>
                      <div
                        className="flex flex-wrap gap-4 mt-2 text-xs"
                        style={{ color: "hsl(var(--muted-foreground))" }}
                      >
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" /> {exp.period}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3 h-3" /> {exp.location}
                        </span>
                      </div>
                    </div>
                    <ChevronDown
                      className="w-5 h-5 shrink-0 mt-1 transition-transform duration-300"
                      style={{
                        color: "hsl(var(--accent))",
                        transform:
                          expandedId === exp.id ? "rotate(180deg)" : "rotate(0deg)",
                      }}
                    />
                  </div>

                  {/* Expanded content */}
                  {expandedId === exp.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      transition={{ duration: 0.3 }}
                      className="mt-6 pt-6"
                      style={{ borderTop: "1px solid hsl(var(--border))" }}
                    >
                      <p
                        className="text-sm leading-relaxed mb-6"
                        style={{ color: "hsl(var(--muted-foreground))" }}
                      >
                        {exp.description}
                      </p>

                      <div className="space-y-5">
                        {exp.achievements.map((a) => (
                          <div key={a.title} className="flex gap-3">
                            <div
                              className="w-1 rounded-full shrink-0 mt-1"
                              style={{
                                background: "hsl(var(--accent))",
                                minHeight: "1rem",
                              }}
                            />
                            <div>
                              <h4
                                className="font-bold text-sm"
                                style={{ color: "hsl(var(--foreground))" }}
                              >
                                {a.title}
                              </h4>
                              <p
                                className="text-sm mt-1 leading-relaxed"
                                style={{ color: "hsl(var(--muted-foreground))" }}
                              >
                                {a.description}
                              </p>
                              <div className="flex flex-wrap gap-1.5 mt-2">
                                {a.tags.map((tag) => (
                                  <Badge key={tag}>{tag}</Badge>
                                ))}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>

                      {exp.recognition && (
                        <div
                          className="flex items-center gap-3 mt-6 p-4 rounded-xl"
                          style={{
                            background: "hsl(var(--accent) / 0.08)",
                            border: "1px solid hsl(var(--accent) / 0.3)",
                          }}
                        >
                          <span className="text-xl">🏆</span>
                          <span className="text-sm font-bold gradient-text">
                            {exp.recognition.replace("🏆 ", "")}
                          </span>
                        </div>
                      )}

                      <div className="flex flex-wrap items-center justify-between gap-2 mt-4">
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((t) => (
                            <Badge key={t} variant="outline">
                              {t}
                            </Badge>
                          ))}
                        </div>
                        {exp.certificateUrl && (
                          <a
                            href={exp.certificateUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest transition-opacity hover:opacity-70"
                            style={{ color: "hsl(var(--accent))" }}
                          >
                            View Certificate <ExternalLink className="w-3 h-3" />
                          </a>
                        )}
                      </div>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
