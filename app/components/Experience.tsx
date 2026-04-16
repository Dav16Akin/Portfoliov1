"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const experiences = [
  {
    period:  "Aug 2025 — Present",
    company: "Afiari Inc.",
    role:    "Frontend Developer Intern",
    type:    "Remote",
    description:
      "Collaborating with design and backend teams at a merchant platform startup to build and maintain a responsive React/TypeScript front-end. Working in Agile sprints via Azure DevOps to deliver polished features with high design fidelity.",
    achievements: [
      "Translated Figma wireframes into React (Vite) & TypeScript interfaces with 100% design fidelity",
      "Integrated complex REST APIs and validated endpoints via Swagger, reducing data-sync errors",
      "Developed reusable UI components using Context API, streamlining development velocity",
      "Optimised UI performance and resolved production bugs — faster load times for retail merchants",
      "Managed feature delivery within Azure DevOps using Git-based branching and code reviews",
    ],
    tech: ["React", "Vite", "TypeScript", "Context API", "REST APIs", "Swagger", "Azure DevOps"],
  },
  {
    period:  "Jan 2021 — Aug 2025",
    company: "Omomi Consulting",
    role:    "Frontend Developer",
    type:    "Contract",
    description:
      "Engineered the company's public-facing website end-to-end — from UI design to production deployment. Worked closely with the MD and PM to translate business requirements into a fast, SEO-optimised landing page.",
    achievements: [
      "Built a high-performance, responsive landing page with Next.js and TypeScript from scratch",
      "Collaborated directly with the MD and PM to translate business requirements into functional specs",
      "Architected a library of reusable components, reducing future development time significantly",
      "Optimised frontend assets and code-splitting for improved SEO rankings and faster page loads",
    ],
    tech: ["Next.js", "TypeScript", "SEO", "Component Architecture", "Git"],
  },
  {
    period:  "Aug 2021 — Nov 2021",
    company: "Nupat Technologies",
    role:    "Software Engineering Intern",
    type:    "Bootcamp",
    description:
      "Gained hands-on full-stack experience building internal and client-facing features under senior engineers. Shipped a Chrome extension used to improve web accessibility.",
    achievements: [
      "Developed internal and client-facing features with React and Node.js under senior engineers",
      "Engineered a Chrome dictionary extension with instant text-highlight definitions and voice pronunciation",
      "Contributed to code reviews and feature planning in cross-functional team environments",
      "Implemented responsive frontend designs with MongoDB backend integration",
    ],
    tech: ["React", "Node.js", "MongoDB", "Chrome Extensions", "Git"],
  },
];

function ExpCard({ exp, index }: { exp: (typeof experiences)[0]; index: number }) {
  const [expanded, setExpanded] = useState(index === 0);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      style={{ borderBottom: "1px solid var(--border)" }}
    >
      <button
        onClick={() => setExpanded(!expanded)}
        style={{
          width: "100%",
          background: "none",
          border: "none",
          cursor: "pointer",
          padding: "1.75rem 0",
          display: "grid",
          gridTemplateColumns: "auto 1fr auto",
          gap: "2rem",
          alignItems: "start",
          textAlign: "left",
        }}
      >
        {/* Period */}
        <span
          className="mono"
          style={{ fontSize: "0.68rem", letterSpacing: "0.06em", color: "var(--fg-subtle)", textTransform: "uppercase", paddingTop: "0.2rem", minWidth: "11rem" }}
        >
          {exp.period}
        </span>

        {/* Role + company */}
        <div>
          <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: "1.15rem", color: "var(--fg)", marginBottom: "0.2rem" }}>
            {exp.role}
          </p>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.88rem", color: "var(--fg-muted)" }}>
            {exp.company}
          </p>
        </div>

        {/* Type + toggle */}
        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <span className="tag" style={{ flexShrink: 0 }}>{exp.type}</span>
          <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "1rem", color: "var(--fg-subtle)", transition: "transform 0.2s", display: "inline-block", transform: expanded ? "rotate(45deg)" : "rotate(0deg)" }}>
            +
          </span>
        </div>
      </button>

      {/* Expandable content */}
      <div style={{
        overflow: "hidden",
        maxHeight: expanded ? "600px" : 0,
        transition: "max-height 0.35s ease, opacity 0.3s ease",
        opacity: expanded ? 1 : 0,
      }}>
        <div style={{ paddingBottom: "2rem", paddingLeft: "13rem" }} className="exp-body">
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.88rem", lineHeight: 1.8, color: "var(--fg-muted)", marginBottom: "1.25rem" }}>
            {exp.description}
          </p>

          <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.5rem", marginBottom: "1.25rem" }}>
            {exp.achievements.map((a, i) => (
              <li key={i} style={{ display: "flex", gap: "0.75rem", fontSize: "0.85rem", fontFamily: "'Inter', sans-serif", color: "var(--fg-muted)" }}>
                <span style={{ color: "var(--accent)", flexShrink: 0, marginTop: "0.15rem" }}>→</span>
                {a}
              </li>
            ))}
          </ul>

          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
            {exp.tech.map((t) => <span key={t} className="tag">{t}</span>)}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .exp-body { padding-left: 0 !important; }
          button[style*="grid-template-columns"] {
            grid-template-columns: 1fr auto !important;
            gap: 1rem !important;
          }
        }
      `}</style>
    </motion.div>
  );
}

export default function Experience() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="experience" ref={ref} className="section" style={{ background: "var(--bg-subtle)" }}>
      <div className="container">
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: "1rem", flexWrap: "wrap", gap: "1rem" }}>
          <div>
            <p className="label" style={{ marginBottom: "1rem" }}>Career Path</p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45 }}
              className="display"
              style={{ fontSize: "clamp(2.2rem, 4.5vw, 4rem)", color: "var(--fg)" }}
            >
              Where I&apos;ve{" "}
              <span style={{ color: "var(--accent)" }}>shipped</span>.
            </motion.h2>
          </div>

          <div style={{
            background: "var(--bg-raised)",
            border: "1px solid var(--border)",
            padding: "1rem 1.5rem",
          }}>
            <p className="label" style={{ color: "var(--fg-subtle)", marginBottom: "0.25rem" }}>Total Exp</p>
            <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 800, fontSize: "1.5rem", letterSpacing: "-0.03em", color: "var(--fg)" }}>3+ Yrs</p>
          </div>
        </div>

        <div className="divider" style={{ marginBottom: "0" }} />

        {experiences.map((exp, i) => (
          <ExpCard key={exp.company} exp={exp} index={i} />
        ))}
      </div>
    </section>
  );
}
