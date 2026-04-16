"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

export default function Contact() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("akindav16@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" ref={ref} className="section" style={{ background: "var(--bg)" }}>
      <div className="container">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "start" }}
          className="contact-grid">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.45 }}
          >
            <p className="label" style={{ marginBottom: "1rem" }}>Get in Touch</p>
            <h2
              className="display"
              style={{ fontSize: "clamp(2.2rem, 4vw, 3.5rem)", color: "var(--fg)", marginBottom: "1.5rem" }}
            >
              Let&apos;s build something{" "}
              <span style={{ color: "var(--accent)" }}>great</span>.
            </h2>

            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.95rem", lineHeight: 1.75, color: "var(--fg-muted)", marginBottom: "2.5rem", maxWidth: "380px" }}>
              Open to full-time roles, contract work, and interesting collaborations.
              If you&apos;re building something ambitious, let&apos;s talk.
            </p>

            {/* Email copy block */}
            <button
              onClick={copyEmail}
              style={{
                width: "100%",
                background: "var(--bg-raised)",
                border: "1px solid var(--border)",
                padding: "1.25rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "1rem",
                cursor: "pointer",
                textAlign: "left",
                marginBottom: "1rem",
                transition: "border-color 0.18s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = "var(--accent)")}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = "var(--border)")}
            >
              <div>
                <p className="label" style={{ color: "var(--fg-subtle)", marginBottom: "0.25rem" }}>Email</p>
                <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: "0.95rem", color: "var(--fg)" }}>
                  akindav16@gmail.com
                </p>
              </div>
              <span
                className="btn btn-outline"
                style={{
                  fontSize: "0.62rem",
                  padding: "0.35rem 0.9rem",
                  background: copied ? "var(--accent)" : "transparent",
                  borderColor: copied ? "var(--accent)" : "var(--border-strong)",
                  color: copied ? "#fff" : "var(--fg-muted)",
                  transition: "all 0.18s ease",
                  flexShrink: 0,
                }}
              >
                {copied ? "Copied!" : "Copy"}
              </span>
            </button>

            {/* Socials */}
            <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
              {[
                { label: "GitHub",   href: "https://github.com/Dav16Akin" },
                { label: "LinkedIn", href: "https://linkedin.com/in/david-akin-40393123b/" },
                { label: "Twitter",  href: "https://x.com/codedbydavid" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline"
                  style={{ flex: 1, justifyContent: "center", fontSize: "0.65rem" }}
                >
                  {s.label} ↗
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.45, delay: 0.12 }}
          >
            <form
              style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
              onSubmit={(e) => e.preventDefault()}
            >
              {[
                { id: "name",    label: "Name",    type: "text",  placeholder: "John Doe" },
                { id: "email",   label: "Email",   type: "email", placeholder: "john@example.com" },
                { id: "subject", label: "Subject", type: "text",  placeholder: "Let's build X together" },
              ].map((f) => (
                <div key={f.id}>
                  <label
                    htmlFor={f.id}
                    className="label"
                    style={{ display: "block", marginBottom: "0.4rem", color: "var(--fg-subtle)" }}
                  >
                    {f.label}
                  </label>
                  <input
                    id={f.id}
                    type={f.type}
                    placeholder={f.placeholder}
                    style={{
                      width: "100%",
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "0.9rem",
                      padding: "0.75rem 1rem",
                      border: "1px solid var(--border)",
                      background: "var(--bg-raised)",
                      color: "var(--fg)",
                      outline: "none",
                      transition: "border-color 0.18s ease",
                    }}
                    onFocus={(e) => (e.target.style.borderColor = "var(--accent)")}
                    onBlur={(e) => (e.target.style.borderColor = "var(--border)")}
                  />
                </div>
              ))}

              <div>
                <label htmlFor="message" className="label" style={{ display: "block", marginBottom: "0.4rem", color: "var(--fg-subtle)" }}>
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder="Tell me about your project..."
                  style={{
                    width: "100%",
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.9rem",
                    padding: "0.75rem 1rem",
                    border: "1px solid var(--border)",
                    background: "var(--bg-raised)",
                    color: "var(--fg)",
                    outline: "none",
                    resize: "none",
                    transition: "border-color 0.18s ease",
                  }}
                  onFocus={(e) => (e.target.style.borderColor = "var(--accent)")}
                  onBlur={(e) => (e.target.style.borderColor = "var(--border)")}
                />
              </div>

              <button type="submit" className="btn btn-dark" style={{ justifyContent: "center", marginTop: "0.25rem" }}>
                Send Message →
              </button>
            </form>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; gap: 3rem !important; }
        }
      `}</style>
    </section>
  );
}
