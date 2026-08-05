import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NextPageButton } from '../components/NextPageButton';
import { SEO } from '../components/SEO';

export const Services = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (idx) => {
    setExpandedIndex(expandedIndex === idx ? null : idx);
  };

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

  const services = [
    {
      title: "Frontend Engineering",
      tags: ["React", "Framer Motion", "Tailwind CSS"],
      desc: "I deliver buttery-smooth, zero-layout-shift (ZLS) interfaces. Performance isn't an afterthought—it's the baseline.",
      icon: "M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z",
      details: [
        { title: "ZLS React Architecture", text: "UIs that never jump during data loads. I use compositor-only Framer Motion animations to lock in 60fps performance across all devices." },
        { title: "Component-Driven Scale", text: "Highly modular, memoized React. No unnecessary re-renders. Every component follows SOLID principles." },
        { title: "State Management", text: "Zustand for global state. React Query for server caching. Your data flows exactly where it needs to." },
        { title: "Pixel-Perfect Tailwind", text: "High-fidelity Figma designs translated into responsive CSS. Exact sub-pixel precision." }
      ]
    },
    {
      title: "Backend & Systems",
      tags: ["Node.js", "C++", "Firebase", "MongoDB"],
      desc: "Scalable infrastructure meets raw efficiency. I leverage lower-level C++ paradigms to write Node.js backends that actually perform.",
      icon: "M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01",
      details: [
        { title: "Node.js Microservices", text: "RESTful APIs and real-time WebSockets that handle high concurrency without bottlenecking." },
        { title: "Firebase & Realtime Data", text: "Production-ready NoSQL schemas backed by ironclad Security Rules." },
        { title: "Systems-Level Optimization", text: "My C++ background means I understand memory management. I fix the bottlenecks that higher-level languages hide." },
        { title: "Enterprise Security", text: "Bulletproof JWT strategies, OAuth, and strict role-based access control (RBAC)." }
      ]
    },
    {
      title: "AI & LLM Integration",
      tags: ["Anthropic SDK", "LLMs", "Gen AI"],
      desc: "Don't just add a chatbot. Weave generative AI directly into your SaaS architecture to automate complex business logic.",
      icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
      details: [
        { title: "Anthropic LLM Orchestration", text: "Advanced conversational flows and generative pipelines using Claude 3.5 Sonnet." },
        { title: "RAG Architecture", text: "Securely connect AI models to your proprietary databases for grounded, context-aware responses." },
        { title: "Structured Parsing", text: "Strict prompt engineering that forces LLMs to output deterministic, strongly-typed JSON." }
      ]
    }
  ];

  return (
    <section className="min-h-screen py-24 px-6 md:px-12 lg:px-24">
      <SEO 
        title="Web Development Services | React, Node.js & AI Integration" 
        description="Looking for a full-stack developer? I offer React frontend engineering, scalable Node.js backends, and Anthropic AI integration for modern SaaS products." 
      />
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-black/10 dark:border-white/10 pb-10 mb-16"
        >
          <div>
            <h1 className="text-xs font-bold tracking-widest text-[#D90429] uppercase mb-4 block">
              Technical Capabilities
            </h1>
            <h2 className="font-giant text-7xl md:text-8xl tracking-tight leading-none text-[#1C1C1A] dark:text-[#F4F4F0] uppercase">
              Services
            </h2>
          </div>
          <div className="md:max-w-sm md:border-l-2 border-[#D90429] pl-6">
            <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
              High-value software engineering. Built for scale.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start"
        >
          {services.map((service, idx) => {
            const isExpanded = expandedIndex === idx;

            return (
              <motion.div 
                layout
                variants={fadeUp} 
                key={idx} 
                className="group flex flex-col bg-[#F4F4F0] dark:bg-[#0A0A0A] rounded-2xl border border-black/10 dark:border-white/10 hover:border-[#D90429] transition-colors duration-500 overflow-hidden relative shadow-lg"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#D90429]/5 dark:bg-[#D90429]/10 blur-2xl rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
                
                <div className="p-8 md:p-10 relative z-10 flex flex-col h-full">
                  <div className="w-14 h-14 mb-8 text-[#1C1C1A] dark:text-[#F4F4F0] group-hover:text-[#D90429] transition-colors duration-500 flex items-center justify-center bg-white/50 dark:bg-black/20 rounded-full border border-black/5 dark:border-white/5">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-7 h-7"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d={service.icon}></path></svg>
                  </div>
                  <h3 className="font-serif text-3xl leading-tight mb-4 text-[#1C1C1A] dark:text-[#F4F4F0]">{service.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm mb-6">
                    {service.desc}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {service.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="text-[10px] font-bold tracking-widest uppercase bg-[#E8E8E3] dark:bg-[#1A1A1A] text-gray-600 dark:text-gray-300 px-3 py-1.5 rounded-sm transition-colors duration-500 group-hover:text-[#D90429]">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Expand Button */}
                  <button 
                    onClick={() => toggleExpand(idx)}
                    className="mt-auto self-start text-xs font-bold tracking-widest uppercase flex items-center gap-2 text-[#1C1C1A] dark:text-[#F4F4F0] group-hover:text-[#D90429] transition-colors"
                  >
                    {isExpanded ? "Close Details" : "Explore Details"}
                    <motion.svg 
                      animate={{ rotate: isExpanded ? 180 : 0 }}
                      className="w-4 h-4" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </motion.svg>
                  </button>

                  {/* Expanded Content */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0, marginTop: 0 }}
                        animate={{ opacity: 1, height: "auto", marginTop: 32 }}
                        exit={{ opacity: 0, height: 0, marginTop: 0 }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="border-t border-black/10 dark:border-white/10 pt-8 space-y-6">
                          {service.details.map((detail, dIdx) => (
                            <div key={dIdx}>
                              <h4 className="font-bold text-sm text-[#1C1C1A] dark:text-[#F4F4F0] mb-2">{detail.title}</h4>
                              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed border-l-2 border-[#D90429] pl-3">
                                {detail.text}
                              </p>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
      <NextPageButton to="/contact" label="Let's Talk" />
    </section>
  );
};
