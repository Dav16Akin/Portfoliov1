'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Loader() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState(0);

  const phases = ['Initializing...', 'Loading assets...', 'Almost ready...', ''];

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + Math.random() * 4 + 1;
      });
    }, 60);

    const phaseTimer = setInterval(() => {
      setPhase(prev => Math.min(prev + 1, phases.length - 1));
    }, 700);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => {
      clearInterval(interval);
      clearInterval(phaseTimer);
      clearTimeout(timer);
    };
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8, ease: [0.65, 0, 0.35, 1] } }}
          className="fixed inset-0 z-[99999] flex flex-col items-center justify-center"
          style={{ background: 'var(--ink)' }}
        >
          {/* Grid pattern */}
          <div className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `linear-gradient(var(--beige) 1px, transparent 1px), linear-gradient(90deg, var(--beige) 1px, transparent 1px)`,
              backgroundSize: '60px 60px',
            }}
          />

          <div className="relative z-10 w-full max-w-md px-8">
            {/* Logo / Name */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mb-16"
            >
              <p className="font-mono text-xs tracking-[0.3em] uppercase mb-4"
                style={{ color: 'var(--beige)' }}>
                Portfolio
              </p>
              <h1 className="font-syne text-6xl font-black leading-none tracking-tight text-white">
                Loading<span style={{ color: 'var(--beige)' }}>.</span>
              </h1>
            </motion.div>

            {/* Progress bar */}
            <div className="mb-4">
              <div className="h-px w-full mb-2" style={{ background: 'rgba(201,185,154,0.3)' }}>
                <motion.div
                  className="h-full"
                  style={{ background: 'var(--beige)', width: `${Math.min(progress, 100)}%`, transition: 'width 0.1s linear' }}
                />
              </div>
              <div className="flex justify-between items-center">
                <p className="font-mono text-xs tracking-widest" style={{ color: 'var(--beige)' }}>
                  {phases[phase]}
                </p>
                <p className="font-mono text-xs" style={{ color: 'var(--beige)' }}>
                  {Math.min(Math.round(progress), 100)}%
                </p>
              </div>
            </div>

            {/* Animated lines */}
            <div className="flex gap-2 mt-8">
              {[0, 1, 2, 3, 4].map(i => (
                <motion.div
                  key={i}
                  className="flex-1 h-0.5"
                  style={{ background: 'var(--beige)' }}
                  animate={{ opacity: [0.2, 1, 0.2] }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.15 }}
                />
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
