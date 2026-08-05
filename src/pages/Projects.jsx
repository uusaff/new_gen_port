import React from 'react';
import { motion } from 'framer-motion';
import { NextPageButton } from '../components/NextPageButton';

export const Projects = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const projects = [
    {
      title: 'Nutrition Cal',
      description: 'An AI-powered calorie tracking application utilizing the Anthropic SDK. Integrates seamless Firebase authentication to deliver personalized dietary insights and secure user data management.',
      tags: ['React', 'Firebase', 'Anthropic SDK', 'Tailwind CSS'],
      github: 'https://github.com/uusaff', 
      live: '#',
      short: 'NUTRITION CAL'
    },
    {
      title: 'Exam Tracker — Neural Edition',
      description: 'A SaaS-style academic tracking platform with a crimson/pink palette. Engineered with compositor-only animations and memoized components to ensure zero layout shift and flawless accessibility over a custom canvas-based animated UI.',
      tags: ['React', 'Canvas API', 'Framer Motion', 'Vite'],
      github: 'https://github.com/uusaff/exams-tracker',
      live: 'https://usafs-tracker.vercel.app',
      short: 'EXAM TRACKER'
    },
    {
      title: 'Habit Tracker',
      description: 'A robust productivity application featuring monthly aggregated views and real-time dashboard statistics. Built with a secure Firebase backend to maintain user state and progress over time within a tropical UI theme.',
      tags: ['React', 'Firebase', 'Tailwind CSS', 'Vite'],
      github: 'https://github.com/uusaff/Habit-Tracker',
      live: 'https://habit-tracker-nine-mu.vercel.app',
      short: 'HABIT TRACKER'
    },
    {
      title: 'UMT GPA / CGPA Calculator',
      description: 'A fully responsive dynamic grading tool tailored for university students. Features complex real-time grading logic, visual data validation, and automated generation of print-optimized PDF reports.',
      tags: ['React', 'Vite', 'Tailwind CSS'],
      github: 'https://github.com/uusaff/umt-gpa-cgpa-calculator',
      live: 'https://umt-gpa-calculator.vercel.app',
      short: 'GPA CALCULATOR'
    },
    {
      title: 'Personal Portfolio Architecture',
      description: 'A highly interactive digital portfolio utilizing React Router and Framer Motion. Showcases a unified custom "SignalPulse" SVG motif alongside scroll-triggered reveal animations to deliver a premium user experience.',
      tags: ['React', 'React Router', 'Framer Motion', 'Vite'],
      github: 'https://github.com/uusaff/portfolio',
      live: 'https://portfolio-uusaff.vercel.app',
      short: 'PORTFOLIO'
    }
  ];

  return (
    <section className="py-24 px-8 max-w-7xl mx-auto min-h-[85vh]">
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeUp}
        className="flex flex-col md:flex-row justify-between items-end mb-16"
      >
        <div>
          <p className="text-xs font-bold tracking-widest uppercase mb-4 text-[#D90429]">Selected</p>
          <h2 className="font-giant text-7xl md:text-8xl tracking-tight leading-none text-[#1C1C1A] dark:text-[#F4F4F0] transition-colors duration-700">PROJECTS</h2>
        </div>
        <div className="md:border-l-2 border-[#D90429] pl-4 md:pl-6">
          <p className="text-sm max-w-sm text-gray-700 dark:text-gray-400 mt-6 md:mt-0 mb-2 transition-colors duration-700 leading-relaxed">
            A selection of recent projects that blend engineering depth, full-stack architecture, and polished user interfaces.
          </p>
        </div>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {projects.map((project, idx) => (
          <motion.div variants={fadeUp} key={idx} className="group flex flex-col">
            <a href={project.live} target="_blank" rel="noreferrer" className="block cursor-pointer flex-grow">
              {/* Image / Solid Color Block Area */}
              <div className="aspect-[4/5] bg-[#E8E8E3] dark:bg-[#1A1A1A] relative mb-4 flex flex-col p-6 transition-colors duration-500 border border-transparent group-hover:border-[#D90429]">
                <div className="flex justify-between items-center w-full text-[10px] font-bold tracking-widest uppercase border-b border-black/10 dark:border-white/10 pb-4 transition-colors duration-700">
                  <span className="text-[#1C1C1A] dark:text-[#F4F4F0]">{project.short}</span>
                  <span className="text-gray-500 dark:text-gray-400">View Project</span>
                </div>
                <div className="flex-grow flex items-center justify-center">
                   <h3 className="font-serif text-3xl md:text-4xl text-center px-4 leading-tight text-[#1C1C1A] dark:text-[#F4F4F0] group-hover:scale-105 transition-transform duration-700">{project.title}</h3>
                </div>
              </div>
            </a>
            
            {/* Metadata below the block */}
            <div className="flex justify-between items-start mt-2">
              <div>
                <h4 className="font-bold uppercase tracking-widest text-[10px] md:text-xs mb-1 text-[#1C1C1A] dark:text-[#F4F4F0]">{project.title}</h4>
                <p className="text-[10px] md:text-xs text-gray-500 dark:text-gray-400 transition-colors duration-700">{project.tags.join(', ')}</p>
              </div>
              <a href={project.github} target="_blank" rel="noreferrer" className="w-8 h-8 md:w-10 md:h-10 border border-black/20 dark:border-white/20 flex items-center justify-center hover:bg-[#D90429] hover:border-[#D90429] hover:text-[#F4F4F0] transition-all duration-300 text-[#1C1C1A] dark:text-[#F4F4F0]">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-4 h-4 md:w-5 md:h-5"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 19L19 5m0 0v12m0-12H7"></path></svg>
              </a>
            </div>
          </motion.div>
        ))}
      </motion.div>
      
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        className="mt-16 text-center md:text-left flex justify-start"
      >
        <a href="https://github.com/uusaff" target="_blank" rel="noreferrer" className="inline-block border border-[#D90429] text-[#D90429] px-8 py-4 text-xs font-bold tracking-widest uppercase hover:bg-[#D90429] hover:text-[#F4F4F0] transition-colors duration-300">
          VIEW ALL GITHUB PROJECTS
        </a>
      </motion.div>
      
      <NextPageButton to="/experience" label="Career Timeline" />
    </section>
  );
};
