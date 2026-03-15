import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { introCarPool } from '@/data/cars';
import logo from '@/assets/torque-tactix-logo.png';

interface CinematicIntroProps {
  onComplete: () => void;
}

const CinematicIntro = ({ onComplete }: CinematicIntroProps) => {
  const [phase, setPhase] = useState<'drive-in' | 'spin' | 'logo'>('drive-in');
  const [car] = useState(() => introCarPool[Math.floor(Math.random() * introCarPool.length)]);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setPhase('spin'), 1800);
    const t2 = setTimeout(() => setPhase('logo'), 4800);
    const t3 = setTimeout(() => {
      setExiting(true);
      setTimeout(onComplete, 800);
    }, 6500);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {phase !== 'done' && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-background overflow-hidden"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Ambient glow */}
          <div className="absolute inset-0">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px]" />
            <div className="absolute top-1/3 right-1/4 w-[300px] h-[300px] rounded-full bg-accent/5 blur-[80px]" />
          </div>

          {/* Car animation */}
          <motion.div
            className="relative z-10"
            initial={{ x: '-100vw', scale: 0.6, opacity: 0 }}
            animate={
              phase === 'drive-in'
                ? { x: 0, scale: 1, opacity: 1 }
                : phase === 'spin'
                ? { x: 0, scale: 1, opacity: 1, rotateY: 360 }
                : { x: 0, scale: 0.85, opacity: 0.3, y: -40 }
            }
            transition={{
              duration: phase === 'drive-in' ? 1.5 : phase === 'spin' ? 3 : 1,
              ease: [0.22, 1, 0.36, 1],
            }}
            style={{ perspective: 1000 }}
          >
            <img
              src={car.image}
              alt={car.name}
              className="w-[500px] md:w-[700px] max-w-[90vw] object-contain drop-shadow-2xl"
            />
          </motion.div>

          {/* Logo reveal */}
          <AnimatePresence>
            {phase === 'logo' && (
              <motion.div
                className="absolute inset-0 flex flex-col items-center justify-center z-20"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
              >
                <motion.img
                  src={logo}
                  alt="Torque Tactix"
                  className="w-48 md:w-64 mb-6"
                  initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  transition={{ delay: 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                />
                <motion.p
                  className="font-mono text-sm md:text-base tracking-[0.3em] text-primary/80 uppercase"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                >
                  Precision. Power. Prestige.
                </motion.p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Skip button */}
          <motion.button
            className="absolute bottom-8 right-8 z-30 font-mono text-xs text-muted-foreground/50 hover:text-primary transition-colors tracking-widest uppercase"
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
