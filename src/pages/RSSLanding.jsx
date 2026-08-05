import React, { useState } from 'react';
import { ScrollReveal } from '../components/motion/ScrollReveal';
import { MagneticButton } from '../components/motion/MagneticButton';

export const RSSLanding = () => {
  const [copied, setCopied] = useState(false);
  const rssUrl = "https://portfolio-nu-gold-48.vercel.app/rss.xml";

  const handleCopy = () => {
    navigator.clipboard.writeText(rssUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <ScrollReveal>
      <section className="py-24 px-8 max-w-5xl mx-auto flex flex-col lg:flex-row items-center gap-16 min-h-[85vh]">
        <div className="lg:w-1/2 flex flex-col items-start">
          <div className="w-16 h-16 bg-[#D90429] flex items-center justify-center rounded-2xl mb-8 shadow-xl shadow-[#D90429]/20">
            {/* RSS Icon */}
            <svg fill="none" stroke="white" viewBox="0 0 24 24" className="w-8 h-8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 11a9 9 0 0 1 9 9" />
              <path d="M4 4a16 16 0 0 1 16 16" />
              <circle cx="5" cy="19" r="1" />
            </svg>
          </div>
          
          <p className="text-xs font-bold tracking-widest uppercase mb-4 text-[#D90429]">Stay Updated</p>
          <h1 className="font-giant text-7xl md:text-8xl tracking-tight leading-none text-[#1C1C1A] dark:text-[#F4F4F0] mb-6 transition-colors duration-700">RSS FEED</h1>
          
          <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed mb-8 max-w-md transition-colors duration-700">
            Subscribe to my RSS feed to get real-time updates directly in your favorite feed reader. I frequently publish deep-dives into modern web architectures, UI engineering insights, and release notes for my latest open-source projects.
          </p>

          <div className="w-full bg-[#F4F4F0]/80 dark:bg-[#0A0A0A]/80 backdrop-blur-sm border border-black/10 dark:border-white/10 p-2 flex items-center justify-between shadow-sm transition-colors duration-700">
            <code className="text-sm font-mono text-gray-600 dark:text-gray-400 px-4 truncate flex-grow transition-colors duration-700">
              {rssUrl}
            </code>
            <button 
              onClick={handleCopy}
              className="bg-[#1C1C1A] dark:bg-white text-[#F4F4F0] dark:text-[#1C1C1A] px-6 py-3 text-xs font-bold tracking-widest uppercase hover:bg-[#D90429] dark:hover:bg-[#D90429] dark:hover:text-[#F4F4F0] transition-colors shrink-0"
            >
              {copied ? 'COPIED!' : 'COPY URL'}
            </button>
          </div>
        </div>

        <div className="lg:w-1/2 w-full h-full">
           <div className="aspect-square bg-gradient-to-br from-[#E8E8E3] to-[#DFDFD9] dark:from-[#1A1A1A] dark:to-[#222] border border-black/10 dark:border-white/10 flex items-center justify-center relative overflow-hidden group transition-colors duration-700">
              <div className="absolute inset-0 bg-[#D90429]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              
              <div className="text-center p-8 relative z-10">
                <h3 className="font-serif text-3xl font-semibold mb-4 text-[#1C1C1A] dark:text-[#F4F4F0] transition-colors duration-700">Why RSS?</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-8 transition-colors duration-700">
                  No algorithms. No infinite scroll. Just clean, chronological content delivered straight to you the moment it's published.
                </p>
                <MagneticButton as="a" href={rssUrl} target="_blank" rel="noreferrer" className="inline-block border border-[#D90429] text-[#D90429] px-8 py-3 text-xs font-bold tracking-widest uppercase hover:bg-[#D90429] hover:text-[#F4F4F0] transition-colors">
                  VIEW RAW XML
                </MagneticButton>
              </div>
           </div>
        </div>
      </section>
    </ScrollReveal>
  );
};
