import { siteConfig } from "@/config/site";

function DiamondIcon() {
  return (
    <svg width="10" height="10" viewBox="0 0 10 10" fill="currentColor" style={{ color: "hsl(var(--accent))" }}>
      <polygon points="5,0 10,5 5,10 0,5" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer style={{ borderTop: "1px solid hsl(var(--border))" }} className="py-10 px-6">
      {/* Ornamental top */}
      <div className="flex items-center justify-center gap-3 mb-6">
        <div className="h-px w-20" style={{ background: "linear-gradient(to right, transparent, hsl(var(--accent) / 0.4))" }} />
        <DiamondIcon />
        <div className="h-px w-20" style={{ background: "linear-gradient(to left, transparent, hsl(var(--accent) / 0.4))" }} />
      </div>

      <div className="max-w-5xl mx-auto text-center space-y-2">
        <p className="font-cinzel text-xs tracking-[3px] uppercase gradient-text font-bold">
          {siteConfig.name}
        </p>
        <p className="font-cinzel text-[10px] tracking-[2px] uppercase" style={{ color: "hsl(var(--muted-foreground))" }}>
          &ldquo;Data Validates. Systems Prevail.&rdquo;
        </p>
        <p className="text-xs mt-4" style={{ color: "hsl(var(--muted-foreground) / 0.6)" }}>
          © 2026 · Forged with Next.js &amp; Tailwind CSS
        </p>
      </div>
    </footer>
  );
}
