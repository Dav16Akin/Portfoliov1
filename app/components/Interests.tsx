"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const interests = [
  {
    id: "01",
    emoji: "💻",
    name: "Open Source",
    tagline: "Giving back to the community",
    body: "I explore open-source projects and contribute where I can. Reading well-designed codebases has taught me more than any tutorial — it's how I pick up patterns and sharpen my craft.",
    details: ["GitHub explorer", "Learning through real code", "Collaborative builder"],
  },
  {
    id: "02",
    emoji: "🎮",
    name: "Gaming",
    tagline: "The best storytelling on any screen",
    body: "God of War and Uncharted taught me that great UX is emotion, not just function. FIFA and Football Manager scratch the strategy itch. GTA is chaos therapy.",
    details: ["God of War · GTA · Uncharted", "Football Manager · FIFA", "Story-driven & open world"],
  },
  {
    id: "03",
    emoji: "⚽",
    name: "Football",
    tagline: "Teamwork on the pitch",
    body: "Football keeps me grounded. There&apos;s a real parallel between a well-run football team and a well-run engineering team — communication, clear roles, and timing are everything.",
    details: ["Weekend 5-a-side", "Football Manager tactician", "Team-first mindset"],
  },
  {
    id: "04",
    emoji: "📺",
    name: "Anime",
    tagline: "World-class storytelling",
    body: "From JJK to Demon Slayer, anime has the best world-building. Black Clover&apos;s underdog arc hits differently when you&apos;re grinding your craft.",
    details: ["JJK · Demon Slayer · Black Clover", "My Hero Academia · Jujutsu Kaisen", "Shonen enthusiast"],
  },
];

export default function Interests() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="interests" ref={ref} className="section" style={{ background: "var(--bg)" }}>
      <div className="container">
        <p className="label" style={{ marginBottom: "1rem" }}>Beyond the Terminal</p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.45 }}
          className="display"
          style={{ fontSize: "clamp(2.2rem, 4.5vw, 4rem)", color: "var(--fg)", marginBottom: "1rem" }}
        >
          What keeps me{" "}
          <span style={{ color: "var(--accent)" }}>human</span>.
        </motion.h2>

        <div className="divider" style={{ marginBottom: "0" }} />

        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 0 }} className="interests-grid">
          {interests.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              style={{
                padding: "2.5rem 2rem",
                borderRight: i % 2 === 0 ? "1px solid var(--border)" : "none",
                borderBottom: i < 2 ? "1px solid var(--border)" : "none",
              }}
            >
              <div style={{ display: "flex", alignItems: "flex-start", gap: "1rem", marginBottom: "1rem" }}>
                <span style={{ fontSize: "1.75rem", flexShrink: 0 }}>{item.emoji}</span>
                <div>
                  <h3 style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: "1.1rem", color: "var(--fg)", marginBottom: "0.15rem" }}>
                    {item.name}
                  </h3>
                  <p className="label" style={{ color: "var(--fg-subtle)" }}>{item.tagline}</p>
                </div>
              </div>

              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.88rem", lineHeight: 1.75, color: "var(--fg-muted)", marginBottom: "1rem" }}>
                {item.body}
              </p>

              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.25rem" }}>
                {item.details.map((d) => (
                  <li key={d} style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.65rem", color: "var(--fg-subtle)", letterSpacing: "0.04em" }}>
                    <span style={{ color: "var(--accent-mid)", marginRight: "0.4rem" }}>▸</span>
                    {d}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Status bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.4 }}
          style={{
            marginTop: "2rem",
            padding: "1rem 1.5rem",
            border: "1px solid var(--border)",
            background: "var(--bg-subtle)",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            gap: "2rem",
          }}
        >
          <p className="label" style={{ color: "var(--fg-subtle)", flexShrink: 0 }}>Current Status</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "1.5rem" }}>
            {[
              { icon: "💻", text: "Reading source code" },
              { icon: "🎮", text: "GoW — Valhalla DLC" },
              { icon: "⚽", text: "Weekend 5-a-side" },
              { icon: "📺", text: "Rewatching JJK S2" },
            ].map((item) => (
              <div key={item.text} style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <span>{item.icon}</span>
                <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.85rem", color: "var(--fg-muted)" }}>{item.text}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .interests-grid { grid-template-columns: 1fr !important; }
          .interests-grid > div {
            border-right: none !important;
            border-bottom: 1px solid var(--border) !important;
          }
        }
      `}</style>
    </section>
  );
}
