'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';

const projects = [
  {
    id: '01',
    title: 'PaySim',
    category: 'Full Stack — FinTech',
    description: 'A full-featured payment simulation platform built end-to-end. The Next.js/Tailwind frontend features wallet management, transaction tracking, and interactive financial analytics — all powered by a custom Go backend API with clean architecture and real-world transaction handling.',
    tech: ['Next.js', 'Tailwind CSS', 'TypeScript', 'Go', 'PostgreSQL', 'REST APIs'],
    metrics: ['Full-stack', 'Wallet management', 'Live analytics'],
    accent: 'var(--beige)',
    repo: 'https://github.com/Dav16Akin/paysim',
    live: 'https://paysim-sigma.vercel.app/',
    wip: true,
  },
  {
    id: '02',
    title: 'Hustle Connect',
    category: 'Full Stack — EdTech',
    description: 'A platform for university students to showcase their side hustles, projects, and skills. Built with Next.js (App Router), MongoDB, and NextAuth for authentication. Features smooth Framer Motion animations, robust Zod form validation, and a modern shadcn/ui component library.',
    tech: ['Next.js', 'TypeScript', 'MongoDB', 'NextAuth', 'Framer Motion', 'shadcn/ui'],
    metrics: ['Auth & profiles', 'Student showcase', 'Live on Vercel'],
    accent: 'var(--beige)',
    repo: 'https://github.com/HuzzlConnect/huzzl-frontend',
    live: 'https://huzzl-tawny.vercel.app/',
    wip: false,
  },
  {
    id: '03',
    title: 'SportX',
    category: 'Frontend — E-Commerce',
    description: 'A responsive sports equipment e-commerce storefront built with Next.js and TypeScript. Features product listings, category filtering, cart management with Zustand state, and a clean, mobile-first design that puts the shopping experience first.',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Zustand', 'Responsive Design'],
    metrics: ['Mobile-first', 'Cart & filters', 'Live on Vercel'],
    accent: 'var(--beige)',
    repo: 'https://github.com/Dav16Akin/sportx',
    live: 'https://sportx-eight.vercel.app/',
    wip: false,
  },
  {
    id: '04',
    title: 'Go Payment API',
    category: 'Backend — Go',
    description: 'The Go backend powering PaySim — a clean-architecture payment service supporting user creation, wallet management, and peer-to-peer money transfers. Designed to simulate real-world fintech systems with a focus on transaction integrity and scalability.',
    tech: ['Go', 'PostgreSQL', 'REST APIs', 'Clean Architecture', 'JWT'],
    metrics: ['Wallet system', 'P2P transfers', 'Fintech patterns'],
    accent: 'var(--beige)',
    repo: 'https://github.com/Dav16Akin/go-payment-api',
    live: 'https://paysim-sigma.vercel.app/',
    wip: true,
  },
];

function ProjectCard({ project, index }: { project: typeof projects[0], index: number }) {
  const [hovered, setHovered] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.25, 0, 0, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="project-card group"
      data-cursor
    >
      <div className="p-10 relative z-10">
        {/* Project number + category */}
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-center gap-2 flex-wrap">
            <span
              className="font-mono text-xs tracking-widest uppercase"
              style={{ color: 'var(--beige-deep, var(--beige-deeper))' }}
            >
              {project.category}
            </span>
            {project.wip && (
              <span
                className="font-mono text-xs tracking-widest uppercase px-2 py-0.5"
                style={{
                  border: '1px solid var(--beige)',
                  color: 'var(--beige-deeper)',
                  letterSpacing: '0.15em',
                }}
              >
                WIP
              </span>
            )}
          </div>
          <span
            className="font-syne font-black"
            style={{
              fontSize: '5rem',
              lineHeight: 1,
              color: 'transparent',
              WebkitTextStroke: '1px var(--beige-light)',
              transition: 'all 0.3s ease',
              ...(hovered && { WebkitTextStroke: '1px var(--beige)' }),
            }}
          >
            {project.id}
          </span>
        </div>

        {/* Title */}
        <h3
          className="display-heading mb-4"
          style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', color: 'var(--ink)' }}
        >
          {project.title}
        </h3>

        {/* Description */}
        <p className="font-grotesk text-sm leading-relaxed mb-6" style={{ color: 'var(--ink-muted)', maxWidth: '100%' }}>
          {project.description}
        </p>

        {/* Metrics */}
        <div className="flex gap-6 mb-6 py-4">
          {project.metrics.map(m => (
            <div key={m}>
              <p className="font-syne font-bold text-sm" style={{ color: 'var(--ink)' }}>{m}</p>
            </div>
          ))}
        </div>

        {/* Tech tags + links */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap gap-2">
            {project.tech.map(t => (
              <span key={t} className="tech-tag">{t}</span>
            ))}
          </div>
          <div className="flex gap-3">
            <a href={project.repo} target="_blank" rel="noopener noreferrer" className="btn-secondary text-xs py-2 px-4">
              GitHub
            </a>
            <a href={project.live} target="_blank" rel="noopener noreferrer" className="btn-primary text-xs py-2 px-4">
              Live →
            </a>
          </div>
        </div>
      </div>

      {/* Hover accent bar */}
      <motion.div
        className="absolute bottom-0 left-0 h-0.5"
        style={{ background: 'var(--beige-dark)' }}
        animate={{ width: hovered ? '100%' : '0%' }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
      />
    </motion.div>
  );
}

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="section-padding"
      style={{ background: 'var(--white)' }}
    >
      <div className="container-custom">
        {/* Section header */}
        <div className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <p className="section-label mb-5">Selected Work</p>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={headingInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7 }}
              className="display-heading"
              style={{ fontSize: 'clamp(3rem, 6vw, 6rem)', color: 'var(--ink)', maxWidth: '600px' }}
            >
              Projects that{' '}
              <span style={{ color: 'var(--beige-dark)', fontStyle: 'italic' }}>ship</span>.
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={headingInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="font-grotesk text-sm max-w-xs"
            style={{ color: 'var(--ink-soft)' }}
          >
            Each project solves a real problem. Clean architecture, battle-tested in production.
          </motion.p>
        </div>

        {/* Projects list */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        {/* Footer CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={headingInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-12 flex justify-center"
        >
          <a href="https://github.com/Dav16Akin" target="_blank" rel="noopener" className="btn-secondary gap-2">
            View all on GitHub ↗
          </a>
        </motion.div>
      </div>
    </section>
  );
}
