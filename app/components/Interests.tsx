'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const hobbies = [
  {
    emoji: '💻',
    name: 'Open Source',
    tagline: 'Giving back to the community',
    description: "I love exploring open-source projects and contributing where I can. Reading through well-designed codebases has taught me more than any tutorial — it’s how I pick up new patterns and sharpen my craft as a full stack dev.",
    details: ['GitHub explorer', 'Learning through real code', 'Collaborative builder'],
    color: 'var(--beige)',
  },
  {
    emoji: '🎮',
    name: 'Gaming',
    tagline: 'The best storytelling on any screen',
    description: "Games like God of War and Uncharted taught me that great UX is about emotion, not just function. FIFA and Football Manager scratch the strategy itch. GTA is just pure chaos therapy after a long sprint.",
    details: ['God of War • GTA • Uncharted', 'Football Manager • FIFA', 'Story-driven & open world'],
    color: 'var(--beige-dark)',
  },
  {
    emoji: '⚽',
    name: 'Football',
    tagline: 'Teamwork on the pitch',
    description: "Football keeps me grounded. There’s a real parallel between a well-run football team and a well-run engineering team — communication, clear roles, and timing are everything.",
    details: ['Weekend 5-a-side player', 'Football Manager tactician', 'Teamwork mindset'],
    color: 'var(--beige)',
  },
  {
    emoji: '📺',
    name: 'Anime',
    tagline: 'The greatest storytelling medium',
    description: "From JJK to Demon Slayer, anime has the best world-building and hype moments of any medium. Black Clover’s underdog arc hits differently when you’re grinding your craft. My Hero Academia is motivation fuel.",
    details: ['JJK • Demon Slayer • Black Clover', 'My Hero Academia • Jujutsu Kaisen', 'Shonen enthusiast'],
    color: 'var(--beige-dark)',
  },
];

export default function Interests() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      id="interests"
      ref={ref}
      className="section-padding"
      style={{ background: 'var(--white)' }}
    >
      <div className="container-custom">
        {/* Header */}
        <div className="mb-16">
          <p className="section-label mb-5">Beyond the Terminal</p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="display-heading"
            style={{ fontSize: 'clamp(3rem, 6vw, 5.5rem)', color: 'var(--ink)' }}
          >
            What keeps me{' '}
            <span style={{ color: 'var(--beige-dark)', fontStyle: 'italic' }}>human</span>.
          </motion.h2>
        </div>

        {/* Hobbies grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {hobbies.map((hobby, i) => (
            <motion.div
              key={hobby.name}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="hobby-card group relative overflow-hidden"
            >
              {/* Background number */}
              <div
                className="absolute top-0 right-0 select-none pointer-events-none"
                style={{
                  fontSize: '12rem',
                  lineHeight: 1,
                  color: 'transparent',
                  WebkitTextStroke: '1px var(--beige-light)',
                  fontFamily: 'Syne, sans-serif',
                  fontWeight: 900,
                  opacity: 0.6,
                }}
              >
                {String(i + 1).padStart(2, '0')}
              </div>

              <div className="relative z-10">
                {/* Icon */}
                <span className="hobby-card-icon">{hobby.emoji}</span>

                {/* Name + tagline */}
                <h3 className="font-syne font-black text-3xl mb-1" style={{ color: 'var(--ink)' }}>
                  {hobby.name}
                </h3>
                <p className="font-mono text-xs tracking-widest uppercase mb-4" style={{ color: 'var(--beige-deeper)' }}>
                  — {hobby.tagline}
                </p>

                {/* Description */}
                <p className="font-grotesk text-sm leading-relaxed mb-6" style={{ color: 'var(--ink-muted)' }}>
                  {hobby.description}
                </p>

                {/* Detail pills */}
                <div className="flex flex-col gap-1">
                  {hobby.details.map((d, di) => (
                    <motion.div
                      key={di}
                      initial={{ opacity: 0, x: -10 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: i * 0.1 + di * 0.08 + 0.3 }}
                      className="flex items-center gap-2"
                    >
                      <span style={{ color: 'var(--beige)', fontSize: '0.6rem' }}>▪</span>
                      <span className="font-grotesk text-xs" style={{ color: 'var(--ink-soft)' }}>{d}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Fun banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-8 p-6 flex flex-wrap items-center justify-between gap-4"
          style={{ border: '1px solid var(--border)', background: 'var(--off-white)' }}
        >
          <p className="font-mono text-xs tracking-widest uppercase" style={{ color: 'var(--beige-deeper)' }}>
            Current Status
          </p>
          <div className="flex flex-wrap gap-6">
            {[
              { icon: '💻', text: 'Reading source code' },
              { icon: '🎮', text: 'Doing GoW on Valhalla' },
              { icon: '⚽', text: 'Weekend 5-a-side' },
              { icon: '📺', text: 'Rewatching JJK S2' },
            ].map(item => (
              <div key={item.text} className="flex items-center gap-2">
                <span>{item.icon}</span>
                <span className="font-grotesk text-sm" style={{ color: 'var(--ink-muted)' }}>{item.text}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
