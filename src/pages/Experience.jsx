import React from 'react';
import { motion } from 'framer-motion';
import { NextPageButton } from '../components/NextPageButton';

export const Experience = () => {
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
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-black/10 dark:border-white/10 pb-10 mb-16"
        >
          <div>
            <span className="text-xs font-bold tracking-widest text-[#D90429] uppercase mb-4 block">
              Career
            </span>
            <h1 className="font-giant text-7xl md:text-8xl tracking-tight leading-none text-[#1C1C1A] dark:text-[#F4F4F0] uppercase">
              Experience
            </h1>
          </div>
          <div className="md:max-w-sm md:border-l-2 border-[#D90429] pl-6">
            <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
              A timeline of engineering architecture, full-stack development, and professional growth.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="space-y-12"
        >
          {/* Card 1: Independent Developer */}
          <motion.div variants={fadeUp} className="group relative bg-[#F4F4F0] dark:bg-[#0A0A0A] border border-black/10 dark:border-white/10 rounded-2xl p-8 md:p-12 hover:border-[#D90429] transition-all duration-500 overflow-hidden shadow-xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#D90429]/5 dark:bg-[#D90429]/10 blur-3xl rounded-full -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
            
            <div className="relative z-10 flex flex-col lg:flex-row gap-8 lg:gap-16 justify-between">
              <div className="lg:w-1/3 border-b lg:border-b-0 lg:border-r border-black/10 dark:border-white/10 pb-6 lg:pb-0 lg:pr-8">
                <span className="inline-block px-3 py-1 bg-[#D90429] text-[#F4F4F0] text-[10px] font-bold tracking-widest uppercase rounded-sm mb-6">2023 — Present</span>
                <h3 className="font-serif text-4xl leading-tight mb-2 text-[#1C1C1A] dark:text-[#F4F4F0]">Independent Developer</h3>
                <p className="text-sm font-bold tracking-widest text-[#D90429] uppercase">Freelance</p>
              </div>
              
              <div className="lg:w-2/3">
                <p className="text-lg text-[#1C1C1A] dark:text-[#F4F4F0] leading-relaxed mb-8 font-medium">
                  Designing and engineering highly polished, scalable web architectures. Focused on delivering premium, zero-layout-shift (ZLS) interfaces and robust backend systems for diverse client requirements.
                </p>
                <ul className="space-y-4">
                  {[
                    "Architected full-stack SaaS solutions utilizing React, Node.js, and Firebase, ensuring seamless state management and realtime data synchronization.",
                    "Engineered complex compositor-only animations via Framer Motion and the Canvas API to achieve sub-pixel perfect, 60fps UI performance.",
                    "Integrated cutting-edge AI capabilities via the Anthropic SDK into client workflows, boosting automated productivity and generative content features."
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-4 text-gray-600 dark:text-gray-400 text-sm leading-relaxed border-l-2 border-[#D90429] pl-4">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Card 2: CS Student */}
          <motion.div variants={fadeUp} className="group relative bg-[#E8E8E3]/50 dark:bg-[#1A1A1A]/50 border border-black/5 dark:border-white/5 rounded-2xl p-8 md:p-12 hover:border-black/20 dark:hover:border-white/20 transition-all duration-500">
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 justify-between opacity-80 group-hover:opacity-100 transition-opacity duration-500">
              <div className="lg:w-1/3 border-b lg:border-b-0 lg:border-r border-black/10 dark:border-white/10 pb-6 lg:pb-0 lg:pr-8">
                <span className="inline-block px-3 py-1 border border-gray-400 text-gray-500 dark:text-gray-400 text-[10px] font-bold tracking-widest uppercase rounded-sm mb-6">2021 — Present</span>
                <h3 className="font-serif text-3xl leading-tight mb-2 text-[#1C1C1A] dark:text-[#F4F4F0]">Computer Science</h3>
                <p className="text-sm font-bold tracking-widest text-gray-500 uppercase">Student @ UMT</p>
              </div>
              
              <div className="lg:w-2/3">
                <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed mb-6 font-medium">
                  Establishing a rigorous foundation in lower-level system design, algorithmic efficiency, and core software engineering paradigms.
                </p>
                <ul className="space-y-4">
                  {[
                    "Mastered object-oriented programming (OOP) and complex data structures using C++.",
                    "Collaborated on academic capstone projects, applying formal software development lifecycles (SDLC) to dynamic applications.",
                    "Managed rigorous freelance engineering workloads alongside intensive academic requirements, delivering production-ready applications on schedule."
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-4 text-gray-600 dark:text-gray-400 text-sm leading-relaxed border-l-2 border-gray-400 pl-4">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
      <NextPageButton to="/contact" label="Let's Talk" />
    </section>
  );
};
