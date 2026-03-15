import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '@/assets/torque-tactix-logo.png';

interface CinematicIntroProps {
  onComplete: () => void;
}

const CinematicIntro = ({ onComplete }: CinematicIntroProps) => {
  const [phase, setPhase] = useState<'name' | 'brand' | 'tagline'>('name');
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setPhase('brand'), 2200);
    const t2 = setTimeout(() => setPhase('tagline'), 4200);
    const t3 = setTimeout(() => {
      setExiting(true);
      setTimeout(onComplete, 800);
    }, 6200);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!exiting && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-background overflow-hidden"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Ambient glow */}
          <div className="absolute inset-0">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[150px]"
              style={{ background: 'radial-gradient(circle, hsl(43 74% 49% / 0.08), transparent)' }} />
            <div className="absolute top-1/4 right-1/3 w-[300px] h-[300px] rounded-full blur-[100px]"
              style={{ background: 'radial-gradient(circle, hsl(30 60% 42% / 0.05), transparent)' }} />
          </div>

          {/* Founder name */}
          <div className="relative z-10 text-center">
            <AnimatePresence mode="wait">
              {phase === 'name' && (
                <motion.div
                  key="name"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                >
                  <motion.p
                    className="font-mono text-xs tracking-[0.4em] text-muted-foreground uppercase mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                  >
                    Founded by
                  </motion.p>
                  <motion.h1
                    className="font-display text-5xl md:text-7xl lg:text-8xl font-bold gold-shimmer"
                    initial={{ opacity: 0, scale: 0.9, filter: 'blur(10px)' }}
                    animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                    transition={{ delay: 0.5, duration: 1, ease: [0.22, 1, 0.36, 1] }}
                  >
                    Mahir Ahmed Ifty
                  </motion.h1>
                  <motion.p
                    className="mt-4 font-mono text-xs tracking-[0.3em] text-muted-foreground"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2, duration: 0.6 }}
                  >
                    +880 1608-095085
                  </motion.p>
                </motion.div>
              )}

              {phase === 'brand' && (
                <motion.div
                  key="brand"
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  className="flex flex-col items-center"
                >
                  <motion.img
                    src={logo}
                    alt="Torque Tactix"
                    className="w-48 md:w-64 mb-6"
                    initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
                    animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                  />
                </motion.div>
              )}

              {phase === 'tagline' && (
                <motion.div
                  key="tagline"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8 }}
                  className="flex flex-col items-center"
                >
                  <motion.img
                    src={logo}
                    alt="Torque Tactix"
                    className="w-40 md:w-56 mb-8 opacity-80"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.8 }}
                    transition={{ duration: 0.5 }}
                  />
                  <motion.p
                    className="font-display text-xl md:text-2xl tracking-[0.15em] gold-shimmer"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                  >
                    Precision · Power · Prestige
                  </motion.p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Skip button */}
          <motion.button
            className="absolute bottom-8 right-8 z-30 glass-button font-mono text-xs text-muted-foreground tracking-widest uppercase"
            onClick={onComplete}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
          >
            Skip →
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CinematicIntro;
