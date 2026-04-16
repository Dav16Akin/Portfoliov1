"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skills = [
  "Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js",
  "MongoDB", "PostgreSQL", "Go", "REST APIs", "Git", "Azure DevOps", "Figma",
];

export default function Footer() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true });

  return (
    <footer ref={ref} style={{ background: "var(--fg)", color: "var(--bg)", borderTop: "1px solid var(--border)" }}>

      {/* CTA section */}
      <div style={{ borderBottom: "1px solid rgba(255,255,255,0.08)", padding: "5rem 0" }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.45 }}
          >
            <p
              className="label"
              style={{ color: "rgba(255,255,255,0.35)", marginBottom: "1.25rem" }}
            >
              Ready to collaborate?
            </p>
            <h2
              className="display"
              style={{
                fontSize: "clamp(3rem, 8vw, 8rem)",
                color: "var(--bg)",
                lineHeight: 0.9,
                marginBottom: "2.5rem",
              }}
            >
              Let&apos;s{" "}
              <span style={{ color: "var(--accent-mid)" }}>Talk</span>
              <span style={{ color: "var(--accent)" }}>.</span>
            </h2>
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }); }}
              className="btn"
              style={{
                background: "var(--accent)",
                borderColor: "var(--accent)",
                color: "#fff",
              }}
            >
              Get in Touch →
            </a>
          </motion.div>
        </div>
      </div>

      {/* Skills marquee */}
      <div style={{ borderBottom: "1px solid rgba(255,255,255,0.08)", padding: "0.75rem 0", overflow: "hidden" }}>
        <div style={{
          display: "flex",
          animation: "marquee 22s linear infinite",
          width: "max-content",
        }}>
          {[...skills, ...skills].map((s, i) => (
            <span
              key={i}
              className="mono"
              style={{
                fontSize: "0.65rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.2)",
                marginRight: "3rem",
                flexShrink: 0,
              }}
            >
              {s} <span style={{ color: "var(--accent-mid)" }}>✦</span>
            </span>
          ))}
        </div>
      </div>

      {/* Footer bottom bar */}
      <div className="container" style={{ padding: "2rem 2rem" }}>
        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "1.5rem" }}>

          {/* Wordmark */}
          <span style={{ fontFamily: "'Inter', sans-serif", fontWeight: 800, fontSize: "1.1rem", letterSpacing: "-0.02em" }}>
            DAVID<span style={{ color: "var(--accent-mid)" }}>.</span>
          </span>

          {/* Socials */}
          <div style={{ display: "flex", gap: "2rem" }}>
            {[
              { label: "GitHub",   href: "https://github.com/Dav16Akin" },
              { label: "LinkedIn", href: "https://linkedin.com/in/david-akin-40393123b/" },
              { label: "X",        href: "https://x.com/codedbydavid" },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mono"
                style={{
                  fontSize: "0.65rem",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.3)",
                  textDecoration: "none",
                  transition: "color 0.15s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.8)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.3)")}
              >
                {s.label}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="mono" style={{ fontSize: "0.62rem", letterSpacing: "0.05em", color: "rgba(255,255,255,0.2)" }}>
            © {new Date().getFullYear()} — All rights reserved
          </p>
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
      `}</style>
    </footer>
  );
}
