"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { MapPin, Calendar, Trophy, ChevronDown } from "lucide-react";
import { experiences } from "../../config/experience";
import { SectionHeading } from "../ui/SectionHeading";
import { Badge } from "../ui/Badge";

export function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [expandedId, setExpandedId] = useState<string | null>("amazon-roc");

  return (
    <section id="experience" ref={ref} className="section">
      <SectionHeading title="Experience" subtitle="Where I've made impact" />

      <div className="mt-12 relative">
        <div className="absolute left-[19px] top-0 bottom-0 w-[2px] bg-border" />

        {experiences.map((exp, index) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            className="relative pl-12 pb-12 last:pb-0"
          >
            <div className="absolute left-[12px] top-2 w-[16px] h-[16px] rounded-full bg-accent border-4 border-background z-10" />

            <div
              className="p-6 rounded-lg bg-surface border border-border card-hover cursor-pointer"
              onClick={() => setExpandedId(expandedId === exp.id ? null : exp.id)}
            >
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-h3 text-foreground">{exp.role}</h3>
                  <p className="text-accent font-medium mt-1">{exp.company}</p>
                </div>
                <ChevronDown
                  className={`w-5 h-5 text-muted-foreground transition-transform ${
                    expandedId === exp.id ? "rotate-180" : ""
                  }`}
                />
              </div>

              <div className="flex flex-wrap gap-4 mt-3 text-sm text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" /> {exp.period}
                </span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5" /> {exp.location}
                </span>
              </div>

              {expandedId === exp.id && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  transition={{ duration: 0.3 }}
                  className="mt-5 pt-5 border-t border-border"
                >
                  <p className="text-muted-foreground text-sm mb-4">{exp.description}</p>

                  <div className="space-y-4">
                    {exp.achievements.map((achievement) => (
                      <div key={achievement.title}>
                        <h4 className="font-semibold text-foreground text-sm">{achievement.title}</h4>
                        <p className="text-muted-foreground text-sm mt-1">{achievement.description}</p>
                        <div className="flex flex-wrap gap-2 mt-2">
                          {achievement.tags.map((tag) => (
                            <Badge key={tag}>{tag}</Badge>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>

                  {exp.recognition && (
                    <div className="flex items-center gap-2 mt-5 p-3 rounded-md bg-success/10 text-success text-sm">
                      <Trophy className="w-4 h-4" />
                      {exp.recognition}
                    </div>
                  )}

                  <div className="flex flex-wrap gap-2 mt-4">
                    {exp.technologies.map((tech) => (
                      <Badge key={tech} variant="outline">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}