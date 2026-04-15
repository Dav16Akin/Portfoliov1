"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skills = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Node.js",
  "MongoDB",
  "PostgreSQL",
  "Go",
  "REST APIs",
  "Git",
  "Azure DevOps",
  "Figma",
];

export default function Footer() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true });

  return (
    <footer ref={ref} style={{ background: "var(--ink)" }}>
      {/* Big CTA text */}
      <div
        className="py-16 overflow-hidden"
        style={{ borderBottom: "1px solid rgba(201,185,154,0.2)" }}
      >
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.7 }}
          >
            <p
              className="font-mono text-xs tracking-[0.3em] uppercase mb-4"
              style={{ color: "var(--beige)" }}
            >
              Ready to collaborate?
            </p>
            <h2
              className="display-heading"
              style={{
                fontSize: "clamp(3.5rem, 8vw, 9rem)",
                color: "var(--white)",
                lineHeight: 0.9,
              }}
            >
              Let&apos;s{" "}
              <span
                style={{
                  color: "transparent",
                  WebkitTextStroke: "1px var(--beige)",
                }}
              >
                Talk
              </span>
              <span style={{ color: "var(--beige)" }}>.</span>
            </h2>
          </motion.div>
        </div>
      </div>

      {/* Marquee skills */}
      <div
        className="py-3 overflow-hidden"
        style={{ borderBottom: "1px solid rgba(201,185,154,0.2)" }}
      >
        <div
          className="marquee-inner"
          style={{ "--marquee-duration": "18s" } as React.CSSProperties}
        >
          {[...skills, ...skills].map((s, i) => (
            <span
              key={i}
              className="font-mono text-xs tracking-widest uppercase mx-8 flex-shrink-0"
              style={{ color: "rgba(201,185,154,0.5)" }}
            >
              {s} <span style={{ color: "var(--beige)" }}>✦</span>
            </span>
          ))}
        </div>
      </div>

      {/* Footer bottom */}
      <div className="container-custom py-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <span
              className="font-syne font-black text-2xl"
              style={{ color: "var(--white)" }}
            >
              DAVID<span style={{ color: "var(--beige)" }}>.</span>
            </span>
            <p
              className="font-mono text-xs tracking-widest uppercase mt-1"
              style={{ color: "rgba(201,185,154,0.5)" }}
            >
              Full Stack Dev
            </p>
          </div>

          <div className="flex gap-6">
            {[
              { label: "GitHub", href: "https://github.com/Dav16Akin" },
              { label: "LinkedIn", href: "https://www.linkedin.com/in/david-akin-40393123b/" },
              { label: "X / Twitter", href: "https://x.com/codedbydavid" },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs tracking-widest uppercase transition-colors duration-200"
                style={{ color: "rgba(201,185,154,0.5)" }}
                onMouseEnter={(e) => {
                  (e.target as HTMLElement).style.color = "var(--beige)";
                }}
                onMouseLeave={(e) => {
                  (e.target as HTMLElement).style.color =
                    "rgba(201,185,154,0.5)";
                }}
              >
                {s.label}
              </a>
            ))}
          </div>

          <p
            className="font-mono text-xs tracking-widest"
            style={{ color: "rgba(201,185,154,0.4)" }}
          >
            © {new Date().getFullYear()} — All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
