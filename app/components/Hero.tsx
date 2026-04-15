"use client";

import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const skills = [
  "Next.js",
  "React",
  "TypeScript",
  "Go (Golang)",
  "REST APIs",
  "PostgreSQL",
  "MongoDB",
  "Node.js",
  "Tailwind CSS",
  "Git",
  "Azure DevOps",
  "Figma",
  "Swagger",
  "NextAuth",
];

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const y = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-screen flex flex-col justify-end pb-20 pt-24 md:pb-16 md:pt-32 overflow-hidden"
      style={{ background: "var(--white)" }}
    >
      {/* Grid lines background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(var(--beige-light) 1px, transparent 1px), linear-gradient(90deg, var(--beige-light) 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
          opacity: 0.5,
        }}
      />

      {/* Large background text */}
      <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 overflow-hidden pointer-events-none select-none">
        <p
          className="font-syne font-black text-center"
          style={{
            fontSize: "clamp(6rem, 18vw, 20rem)",
            color: "transparent",
            WebkitTextStroke: "1px var(--beige-light)",
            lineHeight: 1,
            userSelect: "none",
          }}
        >
          FULLSTACK
        </p>
      </div>

      <motion.div
        style={{ y, opacity }}
        className="container-custom relative z-10"
      >
        {/* Status indicator */}
        <div className="flex items-center gap-3 mb-8">
          <div
            className="flex items-center gap-2 px-3 py-1.5"
            style={{ border: "1px solid var(--border)" }}
          >
            <motion.div
              className="w-2 h-2"
              style={{ background: "#22c55e" }}
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
            <span
              className="font-mono text-xs tracking-widest uppercase"
              style={{ color: "var(--ink-soft)" }}
            >
              Available for work
            </span>
          </div>
        </div>

        {/* Main heading */}
        <div className="mb-8">
          <h1
            className="display-heading mb-4"
            style={{
              fontSize: "clamp(3rem, 9vw, 8rem)",
              color: "var(--ink)",
            }}
          >
            Full Stack
            <br />
            <span
              style={{
                color: "var(--beige-dark)",
                WebkitTextStroke: "1px var(--beige-dark)",
                background: "transparent",
                WebkitTextFillColor: "transparent",
              }}
            >
              Developer
            </span>
            <span style={{ color: "var(--beige)" }}>.</span>
          </h1>

          <div className="max-w-xl">
            <p
              className="font-grotesk text-lg leading-relaxed"
              style={{ color: "var(--ink-muted)" }}
            >
              I build polished frontends with React & Next.js{" "}
              <em style={{ color: "var(--beige-deeper)", fontStyle: "italic" }}>
                and
              </em>{" "}
              robust backends with Go — end to end, from pixel to database.
            </p>
          </div>
        </div>

        {/* CTA row */}
        <div className="flex flex-wrap items-center gap-3 mb-12 md:mb-16">
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById("projects")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="btn-primary"
          >
            View Projects →
          </a>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="btn-secondary"
          >
            Let&apos;s Talk
          </a>
        </div>

        {/* Divider + Meta */}
        <div className="section-divider mb-8" />

        <div className="flex flex-wrap items-start gap-8 md:gap-16">
          {[
            { label: "Years Exp", value: "4+" },
            { label: "Projects", value: "10+" },
            { label: "Companies", value: "3" },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="stat-number">{stat.value}</p>
              <p className="section-label mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Scrolling tech marquee */}
      <div
        className="absolute bottom-0 left-0 right-0 overflow-hidden"
        style={{
          borderTop: "1px solid var(--border)",
          background: "var(--off-white)",
        }}
      >
        <div className="marquee-inner py-3">
          {[...skills, ...skills].map((s, i) => (
            <span
              key={i}
              className="font-mono text-xs tracking-widest uppercase mx-8 flex-shrink-0"
              style={{ color: "var(--beige-deeper)" }}
            >
              {s} <span style={{ color: "var(--beige)" }}>✦</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
