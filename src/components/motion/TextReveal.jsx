import React from 'react';
import { motion } from 'framer-motion';
import { usePremiumMotion, EASING } from '../../lib/motion.js';

export const TextReveal = ({ text, className = '', delay = 0 }) => {
  const { disabled } = usePremiumMotion();
  const words = text.split(' ');

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.04, delayChildren: delay * i },
    }),
  };

  const child = {
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: EASING },
    },
    hidden: {
      y: '120%',
      opacity: 0,
    },
  };

  if (disabled) return <h1 className={className}>{text}</h1>;

  return (
    <motion.h1
      className={`flex flex-wrap justify-center gap-x-[0.25em] ${className}`}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-10%' }}
    >
      {words.map((word, index) => (
        <span key={index} className="overflow-hidden pb-4">
          <motion.span variants={child} className="inline-block will-change-transform">
            {word}
          </motion.span>
        </span>
      ))}
    </motion.h1>
  );
};
