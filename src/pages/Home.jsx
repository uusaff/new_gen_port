import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { TextReveal } from '../components/motion/TextReveal';
import { NextPageButton } from '../components/NextPageButton';
import { SEO } from '../components/SEO';

export const Home = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const slideInRight = {
    hidden: { opacity: 0, x: 40 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.6 } },
  };

  return (
    <section className="relative pt-12 pb-24 px-8 overflow-hidden flex flex-col items-center min-h-[90vh]">
      <SEO 
        title="Yousaf | Full-Stack Web Developer & Engineer in Lahore" 
        description="Need high-performance web applications with zero layout shift? I engineer fast, scalable full-stack software. Let's talk about your next project." 
      />
      {/* Background Marquee */}
      <div className="absolute top-[40%] md:top-1/2 left-0 w-full z-10 pointer-events-none select-none overflow-hidden -translate-y-1/2">
        <motion.div
          className="flex whitespace-nowrap will-change-transform w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 30, repeat: Infinity }}
        >
          <div className="flex items-center">
            <TextReveal text="PORTFOLIO — " className="font-giant text-[28vw] md:text-[25vw] leading-[0.8] text-black/10 dark:text-white/10 tracking-normal pr-8 transition-colors duration-700" />
            <TextReveal text="PORTFOLIO — " className="font-giant text-[28vw] md:text-[25vw] leading-[0.8] text-black/10 dark:text-white/10 tracking-normal pr-8 transition-colors duration-700" />
          </div>
          <div className="flex items-center">
            <TextReveal text="PORTFOLIO — " className="font-giant text-[28vw] md:text-[25vw] leading-[0.8] text-black/10 dark:text-white/10 tracking-normal pr-8 transition-colors duration-700" />
            <TextReveal text="PORTFOLIO — " className="font-giant text-[28vw] md:text-[25vw] leading-[0.8] text-black/10 dark:text-white/10 tracking-normal pr-8 transition-colors duration-700" />
          </div>
        </motion.div>
      </div>

      {/* Layered Background Image */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
        className="absolute top-[5%] md:top-[-2%] left-1/2 -translate-x-1/2 w-[100%] sm:w-[75%] md:w-[60%] max-w-2xl z-0 pointer-events-none flex justify-center items-center"
      >
        <img 
          src="/profile.png" 
          alt="Yousaf" 
          className="w-full h-auto object-contain drop-shadow-2xl"
          style={{ maskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)' }}
        />
      </motion.div>

      {/* Foreground Content */}
      <div className="relative z-20 w-full max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-end h-full flex-grow mt-[40vh] md:mt-[25vh]">
        
        {/* Left Side: Staggered Text & CTAs */}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="w-full md:w-1/2 lg:w-5/12 mb-12 md:mb-0"
        >
          <motion.h1 variants={fadeUp} className="font-serif text-6xl md:text-7xl leading-[0.9] mb-4 text-[#1C1C1A] dark:text-[#F4F4F0]">
            Yousaf: Full-Stack Web Developer.
          </motion.h1>
          
          <motion.h2 variants={fadeUp} className="inline-block border border-[#D90429] text-[#D90429] px-4 py-2 text-[10px] sm:text-xs font-bold tracking-widest uppercase mb-6 bg-[#F4F4F0] dark:bg-[#0A0A0A] transition-colors duration-700">
            Engineering high-performance software. No layout shifts. No bloated code.
          </motion.h2>
          
          <motion.p variants={fadeUp} className="text-sm md:text-base leading-relaxed max-w-sm text-gray-800 dark:text-gray-200 bg-white/40 dark:bg-black/40 p-4 -ml-4 rounded-xl border-l-2 border-[#D90429] transition-colors duration-700 mb-8">
            I build fast, scalable web applications and developer tools. Using React, Node.js, and Tailwind CSS, I turn complex system requirements into seamless digital products. Let's engineer something that actually matters.
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-wrap gap-4 items-center">
            <Link to="/projects" className="bg-[#D90429] border border-[#D90429] text-white px-6 py-3 text-xs font-bold tracking-widest uppercase hover:bg-transparent hover:text-[#D90429] transition-all duration-300 rounded-sm">
              View Projects
            </Link>
            <Link to="/contact" className="border border-black/20 dark:border-white/20 text-[#1C1C1A] dark:text-[#F4F4F0] px-6 py-3 text-xs font-bold tracking-widest uppercase hover:border-[#D90429] hover:text-[#D90429] transition-all duration-300 rounded-sm bg-white/30 dark:bg-black/30 backdrop-blur-md">
              Contact Me
            </Link>
          </motion.div>

          <motion.div variants={fadeUp} className="flex gap-6 mt-10">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-[#D90429] transition-colors duration-300">
              <span className="sr-only">GitHub</span>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-[#D90429] transition-colors duration-300">
              <span className="sr-only">LinkedIn</span>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
            </a>
            <a href="https://instagram.com/uusaff" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-[#D90429] transition-colors duration-300">
              <span className="sr-only">Instagram</span>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
            </a>
          </motion.div>
        </motion.div>

        {/* Right Side: Badges & Spinner */}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={slideInRight}
          className="w-full md:w-1/3 flex flex-col items-start md:items-end text-left md:text-right mt-12 md:mt-0 z-20"
        >
          <div className="w-24 h-24 rounded-full border border-[#D90429]/50 flex items-center justify-center mb-12 animate-[spin_12s_linear_infinite] bg-[#F4F4F0]/50 dark:bg-[#0A0A0A]/50 backdrop-blur-sm transition-colors duration-700">
            <svg viewBox="0 0 100 100" className="w-full h-full">
               <path id="circlePath" d="M 50, 50 m -32, 0 a 32,32 0 1,1 64,0 a 32,32 0 1,1 -64,0" fill="transparent"/>
               <text className="text-[10px] tracking-[0.2em] uppercase font-bold" fill="#D90429">
                 <textPath href="#circlePath" startOffset="0">Uusaff's Creations</textPath>
               </text>
            </svg>
          </div>
          <div className="border border-black/10 dark:border-white/10 p-5 w-56 rounded-xl bg-[#F4F4F0]/80 dark:bg-[#0A0A0A]/80 backdrop-blur-md shadow-xl transition-colors duration-700 flex flex-col justify-center">
            <p className="text-[10px] font-bold tracking-widest uppercase text-gray-500 mb-1">Based In</p>
            <p className="text-sm font-semibold text-[#1C1C1A] dark:text-[#F4F4F0]">Lahore, Pakistan</p>
          </div>
          <div className="border border-black/10 dark:border-white/10 p-5 w-56 mt-4 rounded-xl bg-[#F4F4F0]/80 dark:bg-[#0A0A0A]/80 backdrop-blur-md shadow-xl transition-colors duration-700 flex flex-col justify-center">
            <p className="text-[10px] font-bold tracking-widest uppercase text-gray-500 mb-1">Available For</p>
            <p className="text-sm font-semibold text-[#D90429]">Freelance</p>
          </div>
        </motion.div>
      </div>

      <NextPageButton to="/about" label="Meet the Engineer" />
    </section>
  );
};
