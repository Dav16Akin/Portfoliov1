"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skills = [
  "Next.js", "React", "TypeScript", "Go (Golang)",
  "PostgreSQL", "MongoDB", "Node.js", "REST APIs",
  "Tailwind CSS", "Git",
];

export default function About() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="about" ref={ref} className="section" style={{ background: "var(--bg-subtle)" }}>
      <div className="container">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "start" }}
          className="about-grid">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.45 }}
          >
            <p className="label" style={{ marginBottom: "1.25rem" }}>About Me</p>
            <h2
              className="display"
              style={{ fontSize: "clamp(2.2rem, 4vw, 3.5rem)", color: "var(--fg)", marginBottom: "2rem" }}
            >
              End to end,<br />
              <span style={{ color: "var(--accent)" }}>front</span> to back.
            </h2>

            {/* Identity card */}
            <div style={{
              background: "var(--bg-raised)",
              border: "1px solid var(--border)",
              padding: "1.5rem",
              marginBottom: "2rem",
            }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}>
                {[
                  { label: "Role",     value: "Full Stack Dev" },
                  { label: "Location", value: "Lagos, Nigeria" },
                  { label: "Frontend", value: "React / Next.js" },
                  { label: "Backend",  value: "Go / Node.js" },
                  { label: "Status",   value: "Open to Work" },
                  { label: "Focus",    value: "Remote-first" },
                ].map((item) => (
                  <div key={item.label}>
                    <p className="label" style={{ color: "var(--fg-subtle)", marginBottom: "0.2rem" }}>{item.label}</p>
                    <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: "0.88rem", color: "var(--fg)" }}>{item.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.45, delay: 0.12 }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem", color: "var(--fg-muted)", lineHeight: 1.8, fontSize: "0.95rem", fontFamily: "'Inter', sans-serif" }}>
              <p>
                I&apos;m a Computer Science student and full stack developer who moves comfortably across the
                entire stack. On the frontend I turn Figma designs into pixel-perfect{" "}
                <strong style={{ color: "var(--fg)", fontWeight: 600 }}>React/Next.js</strong> interfaces.
                On the backend I design and ship performant APIs in{" "}
                <strong style={{ color: "var(--fg)", fontWeight: 600 }}>Go</strong>.
              </p>
              <p>
                With experience across <strong style={{ color: "var(--fg)", fontWeight: 600 }}>TypeScript</strong>,
                PostgreSQL, MongoDB, REST APIs, and cloud tooling — I bring both user empathy and systems
                thinking to every project. Obsessed with code quality and production-readiness.
              </p>
            </div>

            {/* Stack */}
            <div style={{ marginTop: "2.5rem", paddingTop: "2rem", borderTop: "1px solid var(--border)" }}>
              <p className="label" style={{ marginBottom: "1rem", color: "var(--fg-subtle)" }}>Core Stack</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                {skills.map((s) => (
                  <span key={s} className="tag">{s}</span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 2.5rem !important; }
        }
      `}</style>
    </section>
  );
}
