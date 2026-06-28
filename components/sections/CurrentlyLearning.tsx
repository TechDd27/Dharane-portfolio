"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const learning = [
  "Power BI",
  "Tableau",
  "Python for Data Analysis",
  "Snowflake",
  "Supply Chain Management",
];

export function CurrentlyLearning() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <div
      ref={ref}
      className="border-y py-6 px-6 md:px-12"
      style={{
        borderColor: "hsl(var(--border))",
        background: "hsl(var(--muted))",
      }}
    >
      <div className="max-w-6xl mx-auto flex flex-wrap items-center gap-x-6 gap-y-3">
        {/* Label */}
        <div className="flex items-center gap-2 shrink-0">
          <motion.span
            animate={{ rotate: [0, 360] }}
            transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
            className="text-base"
          >
            🔄
          </motion.span>
          <span
            className="text-xs font-black uppercase tracking-[3px]"
            style={{ color: "hsl(var(--muted-foreground))" }}
          >
            Currently leveling up
          </span>
          <span style={{ color: "hsl(var(--border))" }}>—</span>
        </div>

        {/* Pills */}
        <div className="flex flex-wrap gap-2">
          {learning.map((item, i) => (
            <motion.span
              key={item}
              initial={{ opacity: 0, y: 6 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className="px-3 py-1 rounded-full text-xs font-semibold"
              style={{
                border: "1px solid hsl(var(--accent) / 0.4)",
                color: "hsl(var(--accent))",
                background: "hsl(var(--accent) / 0.06)",
              }}
            >
              {item}
            </motion.span>
          ))}
        </div>
      </div>
    </div>
  );
}
