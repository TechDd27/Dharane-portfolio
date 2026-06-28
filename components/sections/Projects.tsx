"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { projects } from "../../config/projects";
import { SectionHeading } from "../ui/SectionHeading";
import { Badge } from "../ui/Badge";

const projectMeta = [
  {
    id: "supply-chain-dashboard",
    emoji: "📊",
    accentColor: "hsl(43 88% 55%)",
    bg: "hsl(43 88% 55% / 0.06)",
  },
  {
    id: "maintenance-chatbot",
    emoji: "⚙️",
    accentColor: "hsl(172 60% 48%)",
    bg: "hsl(172 60% 48% / 0.05)",
  },
  {
    id: "hotel-booking-analysis",
    emoji: "📈",
    accentColor: "hsl(258 70% 65%)",
    bg: "hsl(258 70% 65% / 0.06)",
  },
];

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const realProjects = projects.filter((p) => p.status !== "coming-soon");

  return (
    <section
      id="projects"
      ref={ref}
      className="section-full"
      style={{ background: "hsl(var(--muted))" }}
    >
      <div className="max-w-6xl mx-auto">
        <SectionHeading title="Projects" subtitle="Works of the Realm" number="03" />

        <div className="mt-16 space-y-6">
          {realProjects.map((project, index) => {
            const meta = projectMeta.find((m) => m.id === project.id) ?? projectMeta[0];
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 32 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="editorial-card rounded-2xl overflow-hidden"
              >
                <div className={`flex flex-col md:flex-row ${isEven ? "" : "md:flex-row-reverse"}`}>
                  {/* Visual panel */}
                  <div
                    className="md:w-2/5 min-h-[220px] flex items-center justify-center relative"
                    style={{ background: meta.bg }}
                  >
                    {/* Index number — huge faded */}
                    <span
                      className="absolute font-black select-none"
                      style={{
                        fontSize: "9rem",
                        color: meta.accentColor,
                        opacity: 0.08,
                        lineHeight: 1,
                        bottom: "-1rem",
                        right: "1rem",
                      }}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <motion.div
                      animate={{ scale: [1, 1.06, 1] }}
                      transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                      className="text-6xl relative z-10"
                    >
                      {meta.emoji}
                    </motion.div>

                    {/* Top accent */}
                    <div
                      className="absolute top-0 left-0 right-0 h-px"
                      style={{ background: `linear-gradient(90deg, ${meta.accentColor}, transparent)` }}
                    />
                  </div>

                  {/* Content panel */}
                  <div className="md:w-3/5 p-8 md:p-10 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between mb-4">
                        <Badge variant={project.status === "completed" ? "success" : "default"}>
                          {project.status === "completed" ? "Completed" : "In Progress"}
                        </Badge>
                        <span
                          className="font-black text-sm"
                          style={{ color: meta.accentColor }}
                        >
                          {String(index + 1).padStart(2, "0")}
                        </span>
                      </div>

                      <h3
                        className="font-cinzel font-black text-2xl md:text-3xl uppercase tracking-wide mb-3"
                        style={{ color: "hsl(var(--foreground))" }}
                      >
                        {project.title}
                      </h3>
                      <p
                        className="text-sm leading-relaxed mb-2 font-semibold"
                        style={{ color: "hsl(var(--foreground))" }}
                      >
                        {project.subtitle}
                      </p>
                      <p className="text-sm leading-relaxed" style={{ color: "hsl(var(--muted-foreground))" }}>
                        {project.description}
                      </p>
                    </div>

                    <div className="mt-6">
                      <div className="flex flex-wrap gap-1.5 mb-5">
                        {project.techStack.map((t) => (
                          <Badge key={t} variant="outline" size="sm">{t}</Badge>
                        ))}
                      </div>

                      {project.caseStudy && (
                        <a
                          href={project.caseStudy}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest transition-opacity hover:opacity-70"
                          style={{ color: meta.accentColor }}
                        >
                          View Case Study <ArrowUpRight className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}

        </div>
      </div>
    </section>
  );
}
