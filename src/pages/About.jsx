import React from 'react';
import { ScrollReveal } from '../components/motion/ScrollReveal';
import { MagneticButton } from '../components/motion/MagneticButton';
import { Link } from 'react-router-dom';
import { NextPageButton } from '../components/NextPageButton';
import { SEO } from '../components/SEO';

export const About = () => {
  return (
    <div className="pt-24 pb-32 px-8 max-w-7xl mx-auto overflow-hidden">
      <SEO 
        title="About Yousaf | Full-Stack React & Node.js Developer" 
        description="I'm a CS undergrad at UMT Lahore specializing in React, Node.js, and C++. I build high-performance software and AI-integrated SaaS. See my stack." 
      />
      {/* 1. AboutHero */}
      <ScrollReveal>
        <section className="min-h-[70vh] flex flex-col justify-center mb-24">
          <div className="flex flex-col md:flex-row gap-12 md:gap-24 items-center">
            <div className="w-full md:w-5/12 order-2 md:order-1 relative">
              <div className="absolute inset-0 bg-[#D90429]/10 dark:bg-[#D90429]/20 blur-3xl rounded-full scale-110"></div>
              <div className="w-full aspect-[4/5] bg-[#F4F4F0] dark:bg-[#0A0A0A] rounded-2xl overflow-hidden border border-black/10 dark:border-white/10 shadow-2xl relative z-10">
                <img 
                  src="/profile.png" 
                  alt="Yousaf" 
                  className="w-full h-full object-cover object-top grayscale hover:grayscale-0 transition-all duration-700 scale-105 hover:scale-100"
                />
              </div>
            </div>
            <div className="w-full md:w-7/12 order-1 md:order-2">
              <h1 className="font-serif text-5xl md:text-7xl leading-[1.1] mb-8 text-[#1C1C1A] dark:text-[#F4F4F0] transition-colors duration-700">
                The Engineer Behind the Code.
              </h1>
              <p className="text-lg md:text-xl text-gray-700 dark:text-gray-400 leading-relaxed transition-colors duration-700">
                I don't just build interfaces. I engineer systems. I'm a Full-Stack Web Developer and Computer Science undergraduate at UMT, Lahore. My focus? Shipping scalable web applications and intuitive software. With a 3.48 CGPA and a deep background in C++ data structures, I write code that performs under pressure.
              </p>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* 2. Engineering Philosophy */}
      <ScrollReveal>
        <section className="mb-32">
          <h2 className="text-xs font-bold tracking-widest uppercase mb-8 text-center text-[#D90429]">Engineering Philosophy</h2>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            
            <div className="md:col-span-7 bg-[#E8E8E3]/50 dark:bg-[#1A1A1A]/50 border border-black/5 dark:border-white/5 rounded-3xl p-8 md:p-12 hover:bg-[#E8E8E3] dark:hover:bg-[#1A1A1A] transition-colors duration-500 shadow-lg">
              <h3 className="font-serif text-3xl md:text-4xl mb-6 leading-tight text-[#1C1C1A] dark:text-[#F4F4F0]">High-Performance <br/> React UI</h3>
              <p className="text-gray-700 dark:text-gray-400 leading-relaxed text-sm md:text-base">
                Modern web ecosystems demand speed. I combine the agility of React, Node.js, and Vite with the strict memory management principles I learned through C++. The result is zero-layout-shift (ZLS) interfaces. They don't stutter. They don't break.
              </p>
            </div>

            <div className="md:col-span-5 bg-[#D90429] text-[#F4F4F0] rounded-3xl p-8 md:p-12 hover:-translate-y-2 transition-transform duration-500 shadow-xl flex flex-col justify-between">
              <div>
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-8 h-8 mb-6 opacity-80"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                <h3 className="font-serif text-2xl md:text-3xl mb-4 leading-tight">AI-Powered <br/> SaaS Integration</h3>
              </div>
              <p className="text-[#F4F4F0]/80 leading-relaxed text-sm font-medium">
                The web is getting smarter. I build generative AI directly into SaaS products using tools like the Anthropic SDK. This isn't just basic API calls. It's intelligent automation.
              </p>
            </div>

            <div className="md:col-span-12 overflow-hidden border border-black/10 dark:border-white/10 rounded-full py-4 bg-[#F4F4F0]/50 dark:bg-[#0A0A0A]/50 backdrop-blur-sm shadow-inner mt-4">
               <div className="flex justify-around items-center text-xs md:text-sm font-bold tracking-widest uppercase text-gray-500 dark:text-gray-400">
                  <span>React</span> <span className="text-[#D90429]">•</span>
                  <span>Node.js</span> <span className="text-[#D90429]">•</span>
                  <span>Tailwind CSS</span> <span className="text-[#D90429]">•</span>
                  <span className="hidden md:inline">Framer Motion</span> <span className="hidden md:inline text-[#D90429]">•</span>
                  <span>C++</span> <span className="text-[#D90429]">•</span>
                  <span>Firebase</span> <span className="text-[#D90429]">•</span>
                  <span className="hidden md:inline">MongoDB</span>
               </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* 3. Community & Beyond */}
      <ScrollReveal>
        <section className="mb-32">
          <div className="border-t border-b border-black/10 dark:border-white/10 py-24 flex flex-col items-center text-center">
            <h2 className="text-xs font-bold tracking-widest uppercase mb-12 text-[#D90429]">Life Beyond the Terminal</h2>
            <p className="font-serif text-3xl md:text-5xl leading-snug max-w-4xl mx-auto mb-12 text-[#1C1C1A] dark:text-[#F4F4F0] transition-colors duration-700">
              I care about community impact.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto text-left">
              <div className="flex gap-4">
                <div className="mt-1">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-6 h-6 text-[#D90429]"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"></path></svg>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2 text-[#1C1C1A] dark:text-[#F4F4F0]">TEDx UMT</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">I manage event logistics, keeping high-pressure events running smoothly for both speakers and attendees.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="mt-1">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-6 h-6 text-[#D90429]"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2 text-[#1C1C1A] dark:text-[#F4F4F0]">Public Mapping</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">I digitize local environments through open-source mapping edits.</p>
                </div>
              </div>
            </div>
            <p className="mt-16 text-gray-500 dark:text-gray-400 max-w-2xl text-sm italic">
              When I'm not doing that? I'm probably obsessing over the sub-pixel alignment of a new React component.
            </p>
          </div>
        </section>
      </ScrollReveal>

      {/* 4. Projects CTA */}
      <ScrollReveal>
        <section className="text-center py-12">
           <h2 className="font-serif text-4xl md:text-6xl leading-tight mb-8 text-[#1C1C1A] dark:text-[#F4F4F0]">The Tech Stack</h2>
           <p className="text-gray-700 dark:text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed">
             I scale robust backends on Firebase and MongoDB. I animate fluid frontends using Framer Motion and Tailwind CSS. My work ranges from AI-powered tools like Nutrition Cal to complex, interactive platforms like the Neural Exam Tracker.
           </p>
        </section>
      </ScrollReveal>
      
      <NextPageButton to="/projects" label="View the Work" />
    </div>
  );
};
