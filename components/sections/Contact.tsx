"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Copy, Check } from "lucide-react";
import { siteConfig } from "../../config/site";
import { SectionHeading } from "../ui/SectionHeading";

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  );
}

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(siteConfig.links.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" ref={ref} className="section">
      <SectionHeading title="Contact" subtitle="Send a Raven" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
        className="mt-16 max-w-lg mx-auto text-center"
      >
        <p className="text-base leading-relaxed mb-10" style={{ color: "hsl(var(--muted-foreground))" }}>
          I&apos;m currently open to Supply Chain Analyst, Operations Analyst, and Data Analyst opportunities.
          Send a raven — I respond to every message.
        </p>

        {/* Email copy button */}
        <button
          onClick={copyEmail}
          className="heraldic-card inline-flex items-center gap-3 px-6 py-4 w-full max-w-sm mx-auto cursor-pointer transition-all"
        >
          <Mail className="w-4 h-4 shrink-0" style={{ color: "hsl(var(--accent))" }} />
          <span className="font-cinzel text-sm font-bold flex-1 text-left" style={{ color: "hsl(var(--foreground))" }}>
            {siteConfig.links.email}
          </span>
          {copied
            ? <Check className="w-4 h-4 shrink-0" style={{ color: "hsl(var(--success))" }} />
            : <Copy className="w-4 h-4 shrink-0" style={{ color: "hsl(var(--muted-foreground))" }} />
          }
        </button>

        {copied && (
          <motion.p
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-cinzel text-xs uppercase tracking-widest mt-3"
            style={{ color: "hsl(var(--success))" }}
          >
            ✦ Raven dispatched ✦
          </motion.p>
        )}

        {/* Social links */}
        <div className="flex items-center justify-center gap-4 mt-10">
          {[
            { href: siteConfig.links.linkedin, icon: <LinkedinIcon className="w-5 h-5" />, label: "LinkedIn" },
            { href: siteConfig.links.github, icon: <GithubIcon className="w-5 h-5" />, label: "GitHub" },
          ].map(({ href, icon, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="heraldic-card p-3.5 transition-all"
              style={{ color: "hsl(var(--muted-foreground))" }}
            >
              {icon}
            </a>
          ))}
        </div>

        {/* Ornamental closing */}
        <div className="flex items-center justify-center gap-3 mt-14">
          <div className="h-px w-16" style={{ background: "linear-gradient(to right, transparent, hsl(var(--accent) / 0.4))" }} />
          <span className="font-cinzel text-[10px] tracking-[3px] uppercase" style={{ color: "hsl(var(--accent) / 0.6)" }}>
            House Dharane
          </span>
          <div className="h-px w-16" style={{ background: "linear-gradient(to left, transparent, hsl(var(--accent) / 0.4))" }} />
        </div>
      </motion.div>
    </section>
  );
}
