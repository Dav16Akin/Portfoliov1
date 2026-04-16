"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Loader() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) { clearInterval(interval); return 100; }
        return prev + Math.random() * 5 + 1;
      });
    }, 55);

    const timer = setTimeout(() => setLoading(false), 2800);
    return () => { clearInterval(interval); clearTimeout(timer); };
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6, ease: [0.65, 0, 0.35, 1] } }}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 99999,
            background: "var(--fg)",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "flex-end",
            padding: "3rem",
          }}
        >
          {/* Name / logo */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.5 }}
            style={{ marginBottom: "2.5rem" }}
          >
            <p style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "0.65rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.35)",
              marginBottom: "0.5rem",
            }}>
              Portfolio
            </p>
            <h1 style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 900,
              fontSize: "clamp(3rem, 8vw, 6rem)",
              letterSpacing: "-0.04em",
              color: "#fff",
              lineHeight: 0.95,
            }}>
              DAVID<span style={{ color: "var(--accent-mid)" }}>.</span>
            </h1>
          </motion.div>

          {/* Progress */}
          <div style={{ width: "100%", maxWidth: "400px" }}>
            <div style={{ height: 1, background: "rgba(255,255,255,0.1)", width: "100%", marginBottom: "0.75rem" }}>
              <div
                className="loader-progress"
                style={{ width: `${Math.min(progress, 100)}%` }}
              />
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.62rem", letterSpacing: "0.08em", color: "rgba(255,255,255,0.25)" }}>
                Loading assets
              </p>
              <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.62rem", color: "rgba(255,255,255,0.25)" }}>
                {Math.min(Math.round(progress), 100)}%
              </p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
