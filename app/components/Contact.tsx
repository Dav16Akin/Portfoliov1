"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

export default function Contact() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("akindav16@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="section-padding"
      style={{ background: "var(--off-white)" }}
    >
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Left */}
          <div>
            <p className="section-label mb-6">Get In Touch</p>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7 }}
              className="display-heading mb-8"
              style={{
                fontSize: "clamp(3rem, 5vw, 5rem)",
                color: "var(--ink)",
              }}
            >
              Let&apos;s build
              <br />
              something
              <br />
              <span style={{ color: "var(--beige-dark)", fontStyle: "italic" }}>
                great
              </span>
              .
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="font-grotesk text-base leading-relaxed mb-10"
              style={{ color: "var(--ink-muted)", maxWidth: "380px" }}
            >
              Open to full-time roles, contract work, and interesting
              collaboration opportunities. If you&apos;re building something
              ambitious, let&apos;s talk.
            </motion.p>

            {/* Email copy */}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
              onClick={handleCopyEmail}
              data-cursor
              className="flex items-center gap-4 p-5 w-full text-left transition-all duration-200"
              style={{
                border: "1px solid var(--border)",
                background: "var(--white)",
              }}
            >
              <div className="flex-1">
                <p
                  className="font-mono text-xs tracking-widest uppercase mb-1"
                  style={{ color: "var(--beige-deeper)" }}
                >
                  Email
                </p>
                <p
                  className="font-syne font-bold text-lg"
                  style={{ color: "var(--ink)" }}
                >
                  akindav16@gmail.com
                </p>
              </div>
              <motion.div
                key={copied ? "copied" : "copy"}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="font-mono text-xs tracking-widest uppercase px-3 py-1.5"
                style={{
                  border: "1px solid var(--border)",
                  color: copied ? "var(--white)" : "var(--beige-deeper)",
                  background: copied ? "var(--ink)" : "transparent",
                  transition: "all 0.2s ease",
                }}
              >
                {copied ? "Copied!" : "Copy"}
              </motion.div>
            </motion.button>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.5 }}
              className="flex gap-2 flex-wrap mt-5"
            >
              {[
                { label: "GitHub", href: "https://github.com/Dav16Akin" },
                { label: "LinkedIn", href: "https://www.linkedin.com/in/david-akin-40393123b/" },
                { label: "Twitter / X", href: "https://x.com/codedbydavid" },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener"
                  className="font-mono text-xs tracking-widest uppercase px-4 py-2.5 flex-1 text-center transition-all duration-200"
                  style={{
                    border: "1px solid var(--border)",
                    color: "var(--ink-muted)",
                  }}
                >
                  {social.label}
                </a>
              ))}
            </motion.div>
          </div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <form
              className="space-y-4"
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              {[
                {
                  id: "name",
                  label: "Name",
                  type: "text",
                  placeholder: "John Doe",
                },
                {
                  id: "email",
                  label: "Email",
                  type: "email",
                  placeholder: "john@example.com",
                },
                {
                  id: "subject",
                  label: "Subject",
                  type: "text",
                  placeholder: "Let's build X together",
                },
              ].map((field) => (
                <div key={field.id}>
                  <label
                    htmlFor={field.id}
                    className="font-mono text-xs tracking-widest uppercase block mb-2"
                    style={{ color: "var(--beige-deeper)" }}
                  >
                    {field.label}
                  </label>
                  <input
                    id={field.id}
                    type={field.type}
                    placeholder={field.placeholder}
                    className="w-full px-4 py-3 font-grotesk text-sm outline-none transition-all duration-200"
                    style={{
                      border: "1px solid var(--border)",
                      background: "var(--white)",
                      color: "var(--ink)",
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = "var(--beige-dark)";
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = "var(--border)";
                    }}
                  />
                </div>
              ))}

              <div>
                <label
                  htmlFor="message"
                  className="font-mono text-xs tracking-widest uppercase block mb-2"
                  style={{ color: "var(--beige-deeper)" }}
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder="Tell me about your project..."
                  className="w-full px-4 py-3 font-grotesk text-sm outline-none resize-none transition-all duration-200"
                  style={{
                    border: "1px solid var(--border)",
                    background: "var(--white)",
                    color: "var(--ink)",
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = "var(--beige-dark)";
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = "var(--border)";
                  }}
                />
              </div>

              <button
                type="submit"
                className="btn-primary w-full justify-center mt-2"
              >
                Send Message →
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
