import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { usePremiumMotion } from '../../lib/motion.js';

export const MagneticButton = ({ children, className = '', as = 'button', href, ...props }) => {
  const ref = useRef(null);
  const { spring, disabled } = usePremiumMotion();
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const smoothX = useSpring(x, spring);
  const smoothY = useSpring(y, spring);

  const handlePointerMove = (e) => {
    if (disabled || !ref.current) return;
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    x.set(middleX * 0.2); // 20% magnetic pull
    y.set(middleY * 0.2);
  };

  const handlePointerLeave = () => {
    x.set(0);
    y.set(0);
  };

  const MotionComponent = as === 'a' ? motion.a : motion.button;

  return (
    <MotionComponent
      ref={ref}
      href={as === 'a' ? href : undefined}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      style={{ x: smoothX, y: smoothY }}
      whileTap={disabled ? {} : { scale: 0.95 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className={`relative overflow-hidden group ${className}`}
      {...props}
    >
      {children}
      <div className="absolute inset-0 z-[-1] bg-black/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
    </MotionComponent>
  );
};
