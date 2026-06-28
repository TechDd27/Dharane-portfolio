"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { projects } from "../../config/projects";
import { SectionHeading } from "../ui/SectionHeading";
import { Badge } from "../ui/Badge";

const heraldryEmojis: Record<string, string> = {
  "roc-metrics-dashboard": "📊",
  "maintenance-chatbot": "⚙️",
};

const accentColors = [
  "hsl(43 88% 54%)",
  "hsl(172 60% 48%)",
  "hsl(0 65% 48%)",
];

const headerGradients = [
  "linear-gradient(135deg, hsl(43 88% 54% / 0.15), hsl(38 80% 40% / 0.08))",
  "linear-gradient(135deg, hsl(172 60% 48% / 0.12), hsl(200 70% 50% / 0.06))",
  "linear-gradient(135deg, hsl(0 65% 48% / 0.1), hsl(30 70% 45% / 0.06))",
];

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" ref={ref} className="section">
      <SectionHeading title="Projects" subtitle="Works of the Realm" />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: index * 0.1 }}
          >
            {project.status === "coming-soon" ? (
              <div
                className="h-full p-6 rounded-sm border-2 border-dashed flex flex-col items-center justify-center text-center min-h-[320px]"
                style={{ borderColor: "hsl(var(--accent) / 0.2)" }}
              >
                <motion.div
                  animate={{ rotate: [0, 180, 360] }}
                  transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
                  className="mb-4 text-2xl"
                  style={{ color: "hsl(var(--accent) / 0.3)" }}
                >
                  ✦
                </motion.div>
                <p className="font-cinzel font-bold text-sm uppercase tracking-widest" style={{ color: "hsl(var(--muted-foreground))" }}>
                  Coming Soon
                </p>
                <p className="text-xs mt-2" style={{ color: "hsl(var(--muted-foreground) / 0.5)" }}>
                  A new quest begins
                </p>
              </div>
            ) : (
              <div className="heraldic-card h-full flex flex-col group">
                {/* Gradient header with crest */}
                <div
                  className="relative h-40 flex items-center justify-center overflow-hidden rounded-t-sm"
                  style={{ background: headerGradients[index % headerGradients.length] }}
                >
                  {/* Stone grid overlay */}
                  <div
                    className="absolute inset-0 stone-grid opacity-30"
                  />
                  {/* Top accent line */}
                  <div
                    className="absolute top-0 left-0 right-0 h-px"
                    style={{ background: `linear-gradient(90deg, transparent, ${accentColors[index % accentColors.length]}, transparent)` }}
                  />

                  {/* Crest icon */}
                  <div
                    className="relative z-10 w-16 h-16 rounded-sm border flex items-center justify-center text-3xl"
                    style={{
                      background: "hsl(var(--surface) / 0.8)",
                      borderColor: `${accentColors[index % accentColors.length]}40`,
                      backdropFilter: "blur(4px)",
                    }}
                  >
                    {heraldryEmojis[project.id] ?? "⚔"}
                  </div>

                  {/* Status badge */}
                  <div className="absolute top-3 right-3">
                    <Badge variant={project.status === "completed" ? "success" : "default"}>
                      {project.status === "completed" ? "Completed" : "In Progress"}
                    </Badge>
                  </div>
                </div>

                {/* Card body */}
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="font-cinzel font-bold text-base" style={{ color: "hsl(var(--foreground))" }}>
                    {project.title}
                  </h3>
                  <p className="text-sm mt-1.5 leading-relaxed flex-1" style={{ color: "hsl(var(--muted-foreground))" }}>
                    {project.subtitle}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mt-4">
                    {project.techStack.slice(0, 4).map((tech) => (
                      <Badge key={tech} variant="outline" size="sm">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div
                    className="inline-flex items-center gap-1 mt-4 font-cinzel text-xs font-bold uppercase tracking-widest transition-all"
                    style={{ color: accentColors[index % accentColors.length] }}
                  >
                    View Case Study <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
