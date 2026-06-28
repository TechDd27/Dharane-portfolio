"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Scroll } from "lucide-react";
import { siteConfig } from "../../config/site";
import { ThemeToggle } from "../ui/ThemeToggle";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass" : "bg-transparent"
      }`}
    >
      <nav className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <span
            className="font-cinzel font-black text-xl tracking-widest gradient-text"
          >
            DDM
          </span>
          <span className="w-1 h-1 rounded-full" style={{ background: "hsl(var(--accent))" }} />
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {siteConfig.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-cinzel text-xs tracking-[2px] uppercase transition-colors relative group"
              style={{ color: "hsl(var(--muted-foreground))" }}
            >
              {item.label}
              <span
                className="absolute -bottom-1 left-0 w-0 h-px transition-all group-hover:w-full"
                style={{ background: "hsl(var(--accent))" }}
              />
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle />
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-2 px-4 py-2 rounded-sm font-cinzel font-bold text-xs uppercase tracking-widest transition-all glow-gold"
            style={{
              background: "hsl(var(--accent))",
              color: "hsl(var(--accent-foreground))",
            }}
          >
            <Scroll className="w-3 h-3" />
            Resume
          </a>
        </div>

        <button className="md:hidden p-2" onClick={() => setIsMobileOpen(!isMobileOpen)}>
          {isMobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden border-b"
            style={{ background: "hsl(var(--surface) / 0.95)", borderColor: "hsl(var(--border))", backdropFilter: "blur(16px)" }}
          >
            {siteConfig.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsMobileOpen(false)}
                className="block px-6 py-3.5 font-cinzel text-xs tracking-[2px] uppercase border-b transition-colors"
                style={{ borderColor: "hsl(var(--border) / 0.5)", color: "hsl(var(--muted-foreground))" }}
              >
                {item.label}
              </a>
            ))}
            <div className="flex items-center gap-3 px-6 py-4">
              <ThemeToggle />
              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center gap-2 px-4 py-2 rounded-sm font-cinzel font-bold text-xs uppercase tracking-widest glow-gold"
                style={{ background: "hsl(var(--accent))", color: "hsl(var(--accent-foreground))" }}
              >
                <Scroll className="w-3 h-3" /> Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
