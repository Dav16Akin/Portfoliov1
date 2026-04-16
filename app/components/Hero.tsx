"use client";

import { motion } from "framer-motion";


export default function Hero() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        paddingTop: "56px",
        background: "var(--bg)",
        display: "flex",
        alignItems: "center",
      }}
    >
      <div className="container" style={{ paddingTop: "3rem", paddingBottom: "4rem" }}>

        {/* ── Top badge ─────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "3rem" }}
        >
          <span
            style={{
              width: 7,
              height: 7,
              background: "#22c55e",
              display: "inline-block",
              animation: "pulse 2s infinite",
            }}
          />
          <span className="label">Available for work — Lagos, Nigeria</span>
        </motion.div>

        {/* ── Two-column layout ─────────────────────────── */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center" }}
          className="hero-grid">

          {/* Left: text */}
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="display"
              style={{ fontSize: "clamp(3.5rem, 7vw, 6.5rem)", color: "var(--fg)", marginBottom: "0.5rem" }}
            >
              Full Stack
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.18 }}
              className="display"
              style={{ fontSize: "clamp(3.5rem, 7vw, 6.5rem)", color: "var(--fg)", marginBottom: "1.75rem" }}
            >
              Developer<span style={{ color: "var(--accent)" }}>.</span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.28 }}
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "1rem",
                lineHeight: 1.75,
                color: "var(--fg-muted)",
                maxWidth: "480px",
                marginBottom: "0.5rem",
              }}
            >
              <span style={{ color: "var(--fg)", fontWeight: 600 }}>Akinloluwa David Oluwaleye.</span>{" "}
              I build polished frontends with React & Next.js and performant backends in Go —
              end to end, from pixel to database.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap", marginTop: "2rem" }}
            >
              <button
                onClick={() => scrollTo("projects")}
                className="btn btn-dark"
              >
                View Projects →
              </button>
              <button
                onClick={() => scrollTo("contact")}
                className="btn btn-outline"
              >
                Get in Touch
              </button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.45 }}
              style={{
                display: "flex",
                gap: "2.5rem",
                marginTop: "3.5rem",
                paddingTop: "2rem",
                borderTop: "1px solid var(--border)",
              }}
            >
              {[
                { value: "4+",  label: "Years exp" },
                { value: "10+", label: "Projects" },
                { value: "3",   label: "Companies" },
              ].map((s) => (
                <div key={s.label}>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 800, fontSize: "1.75rem", letterSpacing: "-0.03em", color: "var(--fg)", lineHeight: 1 }}>
                    {s.value}
                  </p>
                  <p className="label" style={{ marginTop: "0.3rem", color: "var(--fg-subtle)" }}>
                    {s.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: Go code block */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55, delay: 0.3 }}
            className="hero-code"
            style={{
              background: "#0D1117",
              border: "1px solid #30363D",
              overflow: "hidden",
            }}
          >
            {/* Window chrome */}
            <div style={{
              padding: "0.65rem 1rem",
              borderBottom: "1px solid #30363D",
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
            }}>
              <span style={{ width: 10, height: 10, background: "#FF5F57", display: "inline-block" }} />
              <span style={{ width: 10, height: 10, background: "#FEBC2E", display: "inline-block" }} />
              <span style={{ width: 10, height: 10, background: "#28C840", display: "inline-block" }} />
              <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.62rem", color: "#636E7B", marginLeft: "0.5rem" }}>
                david.go
              </span>
            </div>

            {/* Code */}
            <pre style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "0.78rem",
              lineHeight: 1.75,
              color: "#E6EDF3",
              padding: "1.5rem",
              overflow: "auto",
              margin: 0,
            }}>
              <code>
                <span style={{ color: "#FF7B72" }}>package</span> main{"\n\n"}
                <span style={{ color: "#FF7B72" }}>type</span> <span style={{ color: "#FFA657" }}>Developer</span> <span style={{ color: "#FF7B72" }}>struct</span> {"{"} {"\n"}
                {"\t"}Name     <span style={{ color: "#79C0FF" }}>string</span>{"\n"}
                {"\t"}Role     <span style={{ color: "#79C0FF" }}>string</span>{"\n"}
                {"\t"}Stack    []<span style={{ color: "#79C0FF" }}>string</span>{"\n"}
                {"\t"}Location <span style={{ color: "#79C0FF" }}>string</span>{"\n"}
                {"\t"}Open     <span style={{ color: "#79C0FF" }}>bool</span>{"\n"}
                {"}\n\n"}
                <span style={{ color: "#FF7B72" }}>var</span> <span style={{ color: "#FFA657" }}>David</span> = <span style={{ color: "#FFA657" }}>Developer</span>{"{"}{"\n"}
                {"\t"}Name:     <span style={{ color: "#A5D6FF" }}>&quot;Akinloluwa David&quot;</span>,{"\n"}
                {"\t"}Role:     <span style={{ color: "#A5D6FF" }}>&quot;Full Stack&quot;</span>,{"\n"}
                {"\t"}Stack:    []<span style={{ color: "#79C0FF" }}>string</span>{"{"}{"\n"}
                {"\t\t"}<span style={{ color: "#A5D6FF" }}>&quot;Go&quot;</span>, <span style={{ color: "#A5D6FF" }}>&quot;Next.js&quot;</span>,{"\n"}
                {"\t\t"}<span style={{ color: "#A5D6FF" }}>&quot;PostgreSQL&quot;</span>, <span style={{ color: "#A5D6FF" }}>&quot;TypeScript&quot;</span>,{"\n"}
                {"\t"}{"}"},{"\n"}
                {"\t"}Location: <span style={{ color: "#A5D6FF" }}>&quot;Lagos, NG&quot;</span>,{"\n"}
                {"\t"}Open:     <span style={{ color: "#79C0FF" }}>true</span>, <span style={{ color: "#8B949E" }}>// hire me</span>{"\n"}
                {"}"}
              </code>
            </pre>
          </motion.div>
        </div>
      </div>

      {/* Responsive grid styles */}
      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0.35; }
        }
        @media (max-width: 768px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
          .hero-code { display: none !important; }
        }
      `}</style>
    </section>
  );
}
