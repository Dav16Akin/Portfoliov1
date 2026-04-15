"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function About() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="about"
      ref={ref}
      className="section-padding"
      style={{ background: "var(--off-white)" }}
    >
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Left - big visual element */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            transition={{ duration: 0.7 }}
            className="relative hidden md:block"
          >
            {/* Portrait placeholder with funky treatment */}
            <div
              className="relative aspect-[3/4] max-w-sm"
              style={{ border: "1px solid var(--border)" }}
            >
              {/* Abstract profile block */}
              <div
                className="absolute inset-0"
                style={{ background: "var(--beige-light)" }}
              />

              {/* Decorative lines */}
              {[20, 40, 60].map((pct) => (
                <div
                  key={pct}
                  className="absolute left-0 right-0 h-px"
                  style={{ top: `${pct}%`, background: "var(--beige)" }}
                />
              ))}

              {/* Large initials */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span
                  className="font-syne font-black select-none"
                  style={{
                    fontSize: "clamp(5rem, 12vw, 10rem)",
                    color: "transparent",
                    WebkitTextStroke: "2px var(--beige-dark)",
                    lineHeight: 1,
                  }}
                >
                  DA
                </span>
              </div>

              {/* Corner labels */}
              <div className="absolute top-4 left-4">
                <p
                  className="font-mono text-xs tracking-widest uppercase"
                  style={{ color: "var(--beige-deeper)" }}
                >
                  Fig. 01
                </p>
              </div>
              <div className="absolute bottom-4 right-4">
                <p
                  className="font-mono text-xs tracking-widest uppercase"
                  style={{ color: "var(--beige-deeper)" }}
                >
                  Full Stack Dev
                </p>
              </div>
            </div>

            {/* Floating tag */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="absolute -bottom-6 right-0 md:right-0 p-4 max-w-[160px]"
              style={{
                border: "1px solid var(--border)",
                background: "var(--white)",
              }}
            >
              <p
                className="font-mono text-xs tracking-widest uppercase"
                style={{ color: "var(--beige-deeper)" }}
              >
                Based in Lagos, NG
              </p>
              <p
                className="font-syne font-bold text-lg mt-1"
                style={{ color: "var(--ink)" }}
              >
                Open to Remote
              </p>
            </motion.div>
          </motion.div>

          {/* Right - text */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <p className="section-label mb-6">About Me</p>

            <h2
              className="display-heading mb-8"
              style={{
                fontSize: "clamp(2.5rem, 5vw, 4rem)",
                color: "var(--ink)",
              }}
            >
              End to end,
              <br />
              <span style={{ color: "var(--beige-dark)" }}>front</span>{" "}
              to back.
            </h2>

            <div className="space-y-5" style={{ color: "var(--ink-muted)" }}>
              <p className="font-grotesk text-base leading-relaxed">
                I&apos;m a Computer Science student and full stack developer
                who moves comfortably across the entire stack. On the frontend,
                I turn Figma designs into pixel-perfect{" "}
                <strong style={{ color: "var(--ink)" }}>React/Next.js</strong>{" "}
                interfaces. On the backend, I design performant APIs and
                services in{" "}
                <strong style={{ color: "var(--ink)" }}>Go</strong>.
              </p>
              <p className="font-grotesk text-base leading-relaxed">
                With experience across{" "}
                <strong style={{ color: "var(--ink)" }}>TypeScript</strong>,
                PostgreSQL, MongoDB, REST APIs, and cloud tooling, I bring both
                user empathy and systems thinking to every project I touch.
                I&apos;m obsessed with code quality and shipping things that
                actually work in production.
              </p>
            </div>

            {/* Skills grid */}
            <div
              className="mt-10 pt-8"
              style={{ borderTop: "1px solid var(--border)" }}
            >
              <p className="section-label mb-5">Core Stack</p>
              <div className="flex flex-wrap gap-2">
                {[
                  "Next.js",
                  "React",
                  "TypeScript",
                  "Go (Golang)",
                  "PostgreSQL",
                  "MongoDB",
                  "Node.js",
                  "REST APIs",
                  "Tailwind CSS",
                  "Git",
                ].map((skill) => (
                  <span key={skill} className="tech-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
