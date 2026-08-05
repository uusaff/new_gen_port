import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { usePremiumMotion } from '../../lib/motion.js';

export const ScrollReveal = ({ children }) => {
  const ref = useRef(null);
  const { disabled } = usePremiumMotion();
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.2 1"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, 0]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.95, 1]);

  if (disabled) return <div ref={ref}>{children}</div>;

  return (
    <motion.div
      ref={ref}
      style={{ y, opacity, scale }}
      className="will-change-[transform,opacity]"
    >
      {children}
    </motion.div>
  );
};
