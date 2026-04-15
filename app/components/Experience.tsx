"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const experiences = [
  {
    period: "Aug 2025 — Present",
    company: "Afiari Inc.",
    role: "Frontend Developer Intern",
    type: "Remote",
    description:
      "Collaborating with design and backend teams at a merchant platform startup to build and maintain a responsive React/TypeScript front-end. Working in Agile-style sprints via Azure DevOps to deliver polished features with high design fidelity.",
    achievements: [
      "Translated Figma wireframes into responsive React (Vite) & TypeScript interfaces with 100% design fidelity",
      "Integrated complex REST APIs and validated endpoints via Swagger, reducing data-sync errors",
      "Developed a library of reusable UI components using Context API, streamlining development velocity",
      "Optimized UI performance and resolved production bugs — faster load times for retail merchants",
      "Managed end-to-end feature delivery within Azure DevOps using Git-based branching and code reviews",
    ],
    tech: ["React", "Vite", "TypeScript", "Context API", "REST APIs", "Swagger", "Azure DevOps"],
  },
  {
    period: "Jan 2021 — Aug 2025",
    company: "Omomi Consulting",
    role: "Frontend Developer",
    type: "Contract",
    description:
      "Engineered the company’s public-facing website end-to-end — from UI design to production deployment. Worked closely with the MD and PM to translate business requirements into a fast, SEO-optimized landing page.",
    achievements: [
      "Built a high-performance, responsive landing page with Next.js and TypeScript from scratch",
      "Collaborated directly with the MD and PM to translate business requirements into functional specs",
      "Architected a library of reusable components, reducing future development time significantly",
      "Optimized frontend assets and code-splitting for improved SEO rankings and faster page loads",
      "Iterated on features through rapid prototyping and stakeholder feedback cycles",
    ],
    tech: ["Next.js", "TypeScript", "SEO", "Component Architecture", "Git"],
  },
  {
    period: "Aug 2021 — Nov 2021",
    company: "Nupat Technologies",
    role: "Software Engineering Intern",
    type: "Bootcamp",
    description:
      "Gained hands-on full-stack experience building internal and client-facing features under senior engineers. Contributed to cross-functional teams and shipped a unique Chrome extension used to improve web accessibility.",
    achievements: [
      "Developed internal and client-facing features using React and Node.js under senior engineers",
      "Engineered a Chrome dictionary extension with instant text-highlight definitions, phonetics & voice pronunciation",
      "Contributed to code reviews and feature planning in cross-functional team environments",
      "Implemented responsive frontend designs with MongoDB backend integration",
      "Adopted version control best practices to facilitate smoother handovers and project scalability",
    ],
    tech: ["React", "Node.js", "MongoDB", "Chrome Extensions", "Git"],
  },
];

function ExperienceCard({
  exp,
  index,
}: {
  exp: (typeof experiences)[0];
  index: number;
}) {
  const [expanded, setExpanded] = useState(index === 0);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -40 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.12 }}
      className="timeline-entry pb-12"
    >
      {/* Card */}
      <div
        className="cursor-pointer"
        style={{
          border: "1px solid var(--border)",
          background: expanded ? "var(--off-white)" : "var(--white)",
          transition: "background 0.3s ease",
        }}
        onClick={() => setExpanded(!expanded)}
        data-cursor
      >
        {/* Header */}
        <div className="p-6 flex items-start justify-between gap-4">
          <div className="flex-1">
            <div className="flex flex-wrap items-center gap-3 mb-2">
              <span
                className="font-mono text-xs tracking-widest uppercase"
                style={{ color: "var(--beige-deeper)" }}
              >
                {exp.period}
              </span>
              <span
                className="font-mono text-xs tracking-widest uppercase px-2 py-0.5"
                style={{
                  border: "1px solid var(--border)",
                  color: "var(--beige-deeper)",
                }}
              >
                {exp.type}
              </span>
            </div>
            <h3
              className="font-syne font-bold text-2xl"
              style={{ color: "var(--ink)" }}
            >
              {exp.role}
            </h3>
            <p
              className="font-grotesk text-base mt-1"
              style={{ color: "var(--beige-deeper)" }}
            >
              @ {exp.company}
            </p>
          </div>

          {/* Toggle icon */}
          <motion.div
            animate={{ rotate: expanded ? 45 : 0 }}
            transition={{ duration: 0.25 }}
            className="flex-shrink-0 w-8 h-8 flex items-center justify-center"
          >
            <span
              className="font-mono text-base"
              style={{ color: "var(--ink)" }}
            >
              +
            </span>
          </motion.div>
        </div>

        {/* Expandable content */}
        <motion.div
          initial={false}
          animate={{ height: expanded ? "auto" : 0, opacity: expanded ? 1 : 0 }}
          transition={{ duration: 0.4, ease: [0.25, 0, 0, 1] }}
          style={{ overflow: "hidden" }}
        >
          <div className="px-6 pb-6">
            <p
              className="font-grotesk text-sm leading-relaxed mt-5 mb-5"
              style={{ color: "var(--ink-muted)" }}
            >
              {exp.description}
            </p>

            {/* Achievements */}
            <div className="mb-5">
              <p className="section-label mb-4">Key Achievements</p>
              <ul className="space-y-2">
                {exp.achievements.map((a, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span
                      style={{
                        color: "var(--beige)",
                        marginTop: "2px",
                        flexShrink: 0,
                      }}
                    >
                      →
                    </span>
                    <span
                      className="font-grotesk text-sm"
                      style={{ color: "var(--ink-muted)" }}
                    >
                      {a}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech stack */}
            <div className="flex flex-wrap gap-2">
              {exp.tech.map((t) => (
                <span key={t} className="tech-tag">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function Experience() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="section-padding"
      style={{ background: "var(--off-white)" }}
    >
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-16">
          {/* Left sticky heading */}
          <div className="lg:col-span-1">
            <div className="lg:sticky lg:top-24">
              <p className="section-label mb-6">Career Path</p>
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7 }}
                className="display-heading mb-8"
                style={{
                  fontSize: "clamp(2rem, 4vw, 3.5rem)",
                  color: "var(--ink)",
                }}
              >
                Where I&apos;ve
                <br />
                <span
                  style={{ color: "var(--beige-dark)", fontStyle: "italic" }}
                >
                  shipped
                </span>
                <br />
                things.
              </motion.h2>

              <motion.div
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ delay: 0.3 }}
                className="p-5"
                style={{
                  border: "1px solid var(--border)",
                  background: "var(--white)",
                }}
              >
                <p
                  className="font-mono text-xs tracking-widest uppercase mb-3"
                  style={{ color: "var(--beige-deeper)" }}
                >
                  Total Experience
                </p>
                <p
                  className="font-syne font-black text-4xl"
                  style={{ color: "var(--ink)" }}
                >
                  3+ Yrs
                </p>
                <p
                  className="font-grotesk text-sm mt-1"
                  style={{ color: "var(--ink-soft)" }}
                >
                  Frontend & Web Development
                </p>
              </motion.div>
            </div>
          </div>

          {/* Right timeline */}
          <div className="lg:col-span-2">
            <div className="pt-2">
              {experiences.map((exp, i) => (
                <ExperienceCard key={exp.company} exp={exp} index={i} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
