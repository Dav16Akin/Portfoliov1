"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "About",      href: "#about" },
  { label: "Projects",   href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact",    href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setMenuOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    document.getElementById(href.replace("#", ""))?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <>
      {/* ─── Nav Bar ─────────────────────────────────────── */}
      <div className="nav-root" style={{ zIndex: 950 }}>
        <div className="container">
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: "100%" }}>

            {/* Logo */}
            <a
              href="#"
              onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 800,
                fontSize: "1rem",
                letterSpacing: "-0.02em",
                color: "var(--fg)",
                textDecoration: "none",
              }}
            >
              DAVID<span style={{ color: "var(--accent)" }}>.</span>
            </a>

            {/* Desktop links — hidden via CSS media query on .nav-desktop */}
            <nav className="nav-desktop">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => scrollTo(e, link.href)}
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "0.7rem",
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                    color: "var(--fg-muted)",
                    textDecoration: "none",
                    transition: "color 0.15s ease",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--fg)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "var(--fg-muted)")}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={(e) => scrollTo(e, "#contact")}
                className="btn btn-dark"
                style={{ fontSize: "0.65rem", padding: "0.5rem 1.25rem" }}
              >
                Hire Me
              </a>
            </nav>

            {/* Mobile hamburger — hidden via CSS media query on .nav-hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              className="nav-hamburger"
              style={{
                position: "relative",
                zIndex: 960,
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: "8px",
              }}
            >
              <motion.span className="ham-bar"
                animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 7 : 0 }}
                transition={{ duration: 0.2 }}
                style={{ background: menuOpen ? "#fff" : "var(--fg)" }}
              />
              <motion.span className="ham-bar"
                animate={{ opacity: menuOpen ? 0 : 1 }}
                transition={{ duration: 0.15 }}
                style={{ background: menuOpen ? "#fff" : "var(--fg)" }}
              />
              <motion.span className="ham-bar"
                animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -7 : 0 }}
                transition={{ duration: 0.2 }}
                style={{ background: menuOpen ? "#fff" : "var(--fg)" }}
              />
            </button>
          </div>
        </div>
      </div>

      {/* ─── Mobile Full-Screen Overlay — z-940 (< hamburger z-960) ── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 940,
              background: "var(--fg)",
              display: "flex",
              flexDirection: "column",
              padding: "5.5rem 2rem 3rem",
            }}
          >
            <nav style={{ display: "flex", flexDirection: "column", flex: 1 }}>
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => scrollTo(e, link.href)}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.055, duration: 0.3 }}
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 700,
                    fontSize: "clamp(2rem, 9vw, 3.2rem)",
                    letterSpacing: "-0.03em",
                    color: "#fff",
                    textDecoration: "none",
                    padding: "0.85rem 0",
                    borderBottom: "1px solid rgba(255,255,255,0.08)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    lineHeight: 1.1,
                  }}
                >
                  {link.label}
                  <span style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "0.65rem",
                    color: "var(--accent-mid)",
                    letterSpacing: "0.1em",
                    opacity: 0.7,
                  }}>
                    0{i + 1}
                  </span>
                </motion.a>
              ))}
            </nav>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.32 }}
              style={{ paddingTop: "2rem", display: "flex", flexDirection: "column", gap: "1rem" }}
            >
              <a
                href="#contact"
                onClick={(e) => scrollTo(e, "#contact")}
                className="btn"
                style={{ background: "var(--accent)", borderColor: "var(--accent)", color: "#fff", justifyContent: "center" }}
              >
                Hire Me
              </a>
              <div style={{ display: "flex", gap: "1.5rem" }}>
                {[
                  { label: "GitHub",   href: "https://github.com/Dav16Akin" },
                  { label: "LinkedIn", href: "https://linkedin.com/in/david-akin-40393123b/" },
                  { label: "X",        href: "https://x.com/codedbydavid" },
                ].map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: "0.65rem",
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      color: "rgba(255,255,255,0.35)",
                      textDecoration: "none",
                    }}
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Scoped CSS — ensures hamburger/desktop nav show/hide correctly */}
      <style>{`
        .nav-desktop {
          display: flex;
          gap: 2rem;
          align-items: center;
        }
        .nav-hamburger {
          display: none;
          flex-direction: column;
          gap: 5px;
        }
        .ham-bar {
          display: block;
          width: 22px;
          height: 1.5px;
        }
        @media (max-width: 767px) {
          .nav-desktop  { display: none !important; }
          .nav-hamburger { display: flex !important; }
        }
      `}</style>
    </>
  );
}
