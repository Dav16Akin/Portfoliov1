"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const projects = [
  {
    id: "01",
    title: "PaySim",
    category: "Full Stack — FinTech",
    description:
      "A full-featured payment simulation platform built end-to-end. Next.js/Tailwind frontend with wallet management, transaction tracking, and financial analytics — powered by a custom Go backend with clean architecture.",
    tech: ["Go", "PostgreSQL", "Next.js", "TypeScript", "REST APIs"],
    repo: "https://github.com/Dav16Akin/paysim",
    live: "https://paysim-sigma.vercel.app/",
    wip: true,
  },
  {
    id: "02",
    title: "Ordify",
    category: "Full Stack — Commerce",
    description:
      "A lightweight web tool that helps small vendors sell faster on WhatsApp. Vendors create a simple product page, share their link, and customers send complete orders — with all selected items and totals — directly via WhatsApp. No back-and-forth messaging required.",
    tech: [
      "Next.js",
      "TypeScript",
      "Supabase",
      "Framer Motion",
      "WhatsApp API",
    ],
    repo: "https://github.com/Dav16Akin/ordify",
    live: "https://ordify-ochre.vercel.app",
    wip: false,
  },
  {
    id: "03",
    title: "Hustle Connect",
    category: "Full Stack — EdTech",
    description:
      "A platform for university students to showcase side hustles, projects, and skills. Built with Next.js App Router, MongoDB, NextAuth, and Framer Motion. Features robust Zod validation and a modern shadcn/ui component library.",
    tech: ["Next.js", "TypeScript", "MongoDB", "NextAuth", "shadcn/ui"],
    repo: "https://github.com/HuzzlConnect/huzzl-frontend",
    live: "https://huzzl-tawny.vercel.app/",
    wip: false,
  },
  {
    id: "04",
    title: "SportX",
    category: "Frontend — E-Commerce",
    description:
      "A responsive sports equipment storefront with product listings, category filtering, and cart management using Zustand. Mobile-first design with fast page loads and a clean shopping experience.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Zustand"],
    repo: "https://github.com/Dav16Akin/sportx",
    live: "https://sportx-eight.vercel.app/",
    wip: false,
  },
  {
    id: "05",
    title: "Go Payment API",
    category: "Backend — Go",
    description:
      "The Go backend powering PaySim. Clean-architecture payment service with user management, wallet system, and peer-to-peer transfers. Designed for transaction integrity and scalability in fintech contexts.",
    tech: ["Go", "PostgreSQL", "REST APIs", "Clean Architecture", "JWT"],
    repo: "https://github.com/Dav16Akin/go-payment-api",
    live: "https://paysim-sigma.vercel.app/",
    wip: true,
  },
];

function ProjectRow({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) {
  const [hovered, setHovered] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.45, delay: index * 0.08 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        borderBottom: "1px solid var(--border)",
        paddingTop: "2.5rem",
        paddingBottom: "2.5rem",
        position: "relative",
        cursor: "default",
        transition: "background 0.2s ease",
        background: hovered ? "var(--bg-subtle)" : "transparent",
      }}
    >
      {/* Accent left bar on hover */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: hovered ? 3 : 0,
          height: "100%",
          background: "var(--accent)",
          transition: "width 0.2s ease",
        }}
      />

      <div
        style={{
          paddingLeft: hovered ? "calc(0rem + 8px)" : "0rem",
          transition: "padding 0.2s ease",
        }}
      >
        {/* Row 1: number + title + category */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "3.5rem 1fr auto",
            gap: "1.5rem",
            alignItems: "baseline",
            marginBottom: "1rem",
          }}
        >
          {/* Number */}
          <span
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "0.72rem",
              color: hovered ? "var(--accent)" : "var(--fg-subtle)",
              letterSpacing: "0.06em",
              transition: "color 0.2s ease",
              userSelect: "none",
            }}
          >
            {project.id}
          </span>

          {/* Title */}
          <h3
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(1.6rem, 3vw, 2.4rem)",
              letterSpacing: "-0.03em",
              color: "var(--fg)",
              lineHeight: 1,
            }}
          >
            {project.title}
          </h3>

          {/* Category + WIP */}
          <div
            style={{
              display: "flex",
              gap: "0.5rem",
              alignItems: "center",
              flexShrink: 0,
            }}
          >
            {project.wip && (
              <span
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "0.58rem",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  padding: "0.15rem 0.5rem",
                  border: "1px solid var(--accent)",
                  color: "var(--accent)",
                }}
              >
                WIP
              </span>
            )}
            <span
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "0.65rem",
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                color: "var(--fg-subtle)",
              }}
            >
              {project.category}
            </span>
          </div>
        </div>

        {/* Row 2: description */}
        <div style={{ paddingLeft: "5rem" }}>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.9rem",
              lineHeight: 1.75,
              color: "var(--fg-muted)",
              maxWidth: "680px",
              marginBottom: "1.25rem",
            }}
          >
            {project.description}
          </p>

          {/* Tech + links */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "1rem",
            }}
          >
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.35rem" }}>
              {project.tech.map((t) => (
                <span key={t} className="tag">
                  {t}
                </span>
              ))}
            </div>
            <div style={{ display: "flex", gap: "0.5rem", flexShrink: 0 }}>
              <a
                href={project.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
                style={{ fontSize: "0.62rem", padding: "0.45rem 1rem" }}
              >
                GitHub ↗
              </a>
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-dark"
                style={{ fontSize: "0.62rem", padding: "0.45rem 1rem" }}
              >
                Live ↗
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile styles */}
      <style>{`
        @media (max-width: 640px) {
          .project-row-grid {
            grid-template-columns: 2.5rem 1fr !important;
          }
        }
      `}</style>
    </motion.div>
  );
}

export default function Projects() {
  const headingRef = useRef<HTMLDivElement>(null);
  const inView = useInView(headingRef, { once: true, margin: "-60px" });

  return (
    <section
      id="projects"
      className="section"
      style={{ background: "var(--bg)" }}
    >
      <div className="container">
        {/* Header */}
        <div
          ref={headingRef}
          style={{
            marginBottom: "1rem",
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "1rem",
          }}
        >
          <div>
            <p className="label" style={{ marginBottom: "1rem" }}>
              Selected Work
            </p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45 }}
              className="display"
              style={{
                fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
                color: "var(--fg)",
              }}
            >
              Projects
            </motion.h2>
          </div>
          <motion.a
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            href="https://github.com/Dav16Akin"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
          >
            All on GitHub ↗
          </motion.a>
        </div>

        {/* Divider */}
        <div className="divider" />

        {/* Project list */}
        {projects.map((project, i) => (
          <ProjectRow key={project.id} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}
