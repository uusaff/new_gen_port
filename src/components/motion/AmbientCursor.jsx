import React, { useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { usePremiumMotion } from '../../lib/motion.js';

export const AmbientCursor = () => {
  const { disabled } = usePremiumMotion();
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, { damping: 40, stiffness: 50, mass: 0.5 });
  const smoothY = useSpring(mouseY, { damping: 40, stiffness: 50, mass: 0.5 });

  useEffect(() => {
    if (disabled) return;
    const updateMousePosition = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, [mouseX, mouseY, disabled]);

  if (disabled) return null;

  return (
    <motion.div
      style={{ x: smoothX, y: smoothY, background: 'radial-gradient(circle, rgba(0,0,0,0.06) 0%, rgba(0,0,0,0) 60%)' }}
      className="pointer-events-none fixed top-0 left-0 z-0 h-96 w-96 -translate-x-1/2 -translate-y-1/2 mix-blend-multiply will-change-transform"

    />
  );
};
