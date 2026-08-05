import React from 'react';
import { motion } from 'framer-motion';
import { NextPageButton } from '../components/NextPageButton';

export const Education = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  return (
    <section className="min-h-screen py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-5xl mx-auto">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="text-center mb-16"
        >
          <span className="text-xs font-bold tracking-widest text-[#D90429] uppercase mb-4 block">
            Background
          </span>
          <h1 className="font-giant text-7xl md:text-8xl tracking-tight leading-none text-[#1C1C1A] dark:text-[#F4F4F0] uppercase">
            Education
          </h1>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="relative bg-[#F4F4F0] dark:bg-[#0A0A0A] border border-black/10 dark:border-white/10 p-8 md:p-16 shadow-2xl rounded-sm"
        >
          {/* Inner Plaque Border */}
          <div className="absolute inset-4 border border-black/5 dark:border-white/5 pointer-events-none"></div>

          <div className="relative z-10 flex flex-col items-center text-center">
            
            <motion.div variants={fadeUp} className="mb-12">
              <h2 className="font-serif text-3xl md:text-5xl text-[#1C1C1A] dark:text-[#F4F4F0] leading-tight mb-4">
                Bachelor of Science in <br /> Computer Science
              </h2>
              <p className="text-gray-500 tracking-widest uppercase text-sm font-bold">
                University of Management & Technology, Lahore
              </p>
              <p className="text-gray-400 text-xs mt-2">2021 — 2025</p>
            </motion.div>

            <motion.div variants={fadeUp} className="mb-16">
              <div className="inline-flex flex-col items-center justify-center w-40 h-40 rounded-full border-4 border-[#D90429] shadow-[0_0_40px_rgba(217,4,41,0.2)] bg-[#E8E8E3] dark:bg-[#1A1A1A]">
                <span className="text-sm font-bold tracking-widest uppercase text-[#D90429] mb-1">CGPA</span>
                <span className="font-giant text-5xl text-[#1C1C1A] dark:text-[#F4F4F0]">3.48</span>
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="w-full max-w-2xl border-t border-black/10 dark:border-white/10 pt-12">
              <p className="text-xs font-bold tracking-widest text-[#D90429] uppercase mb-8">Core Competencies</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { title: "Data Structures", icon: "M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" },
                  { title: "Algorithms", icon: "M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" },
                  { title: "Object-Oriented Prog.", icon: "M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" }
                ].map((item, idx) => (
                  <div key={idx} className="flex flex-col items-center">
                    <div className="w-12 h-12 mb-4 text-[#D90429] bg-[#D90429]/10 rounded-full flex items-center justify-center">
                       <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d={item.icon}></path></svg>
                    </div>
                    <h3 className="font-bold text-sm text-[#1C1C1A] dark:text-[#F4F4F0] text-center">{item.title}</h3>
                  </div>
                ))}
              </div>
            </motion.div>
            
          </div>
        </motion.div>
      </div>
      <NextPageButton to="/services" label="How I Can Help" />
    </section>
  );
};
