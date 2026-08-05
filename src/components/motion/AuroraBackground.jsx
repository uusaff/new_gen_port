import React from 'react';
import { motion } from 'framer-motion';
import { usePremiumMotion } from '../../lib/motion.js';

export const AuroraBackground = () => {
  const { disabled } = usePremiumMotion();

  if (disabled) return <div className="fixed inset-0 bg-[#F4F4F0] dark:bg-[#0A0A0A] z-[-1] transition-colors duration-700" />;

  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden bg-[#F4F4F0] dark:bg-[#0A0A0A] transition-colors duration-700">
      {/* Background Image with Light Overlay to match existing App.jsx setup */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-50 dark:opacity-20 blur-[2px] transition-opacity duration-700"
        style={{ backgroundImage: "url('/background.jpg')" }}
      />
      <div className="absolute inset-0 bg-[#F4F4F0]/80 dark:bg-[#0A0A0A]/80 transition-colors duration-700"></div>

      <motion.div
        animate={{
          x: ['0%', '10%', '-10%', '0%'],
          y: ['0%', '-10%', '10%', '0%'],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        className="absolute -top-[25%] -left-[10%] h-[70vh] w-[50vw] mix-blend-multiply dark:mix-blend-screen will-change-transform transition-colors duration-700"
        style={{ background: 'radial-gradient(circle, rgba(30,58,138,0.15) 0%, rgba(30,58,138,0) 70%)' }}
      />
      <motion.div
        animate={{
          x: ['0%', '-15%', '5%', '0%'],
          y: ['0%', '15%', '-5%', '0%'],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: 'linear', delay: 2 }}
        className="absolute -bottom-[20%] -right-[10%] h-[60vh] w-[60vw] mix-blend-multiply dark:mix-blend-screen will-change-transform transition-colors duration-700"
        style={{ background: 'radial-gradient(circle, rgba(49,46,129,0.15) 0%, rgba(49,46,129,0) 70%)' }}
      />
    </div>
  );
};
