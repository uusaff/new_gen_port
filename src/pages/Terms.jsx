import React from 'react';
import { ScrollReveal } from '../components/motion/ScrollReveal';

export const Terms = () => {
  return (
    <ScrollReveal>
      <section className="py-24 px-8 max-w-4xl mx-auto min-h-[85vh]">
        <div className="mb-16 border-b border-black/10 dark:border-white/10 pb-12 transition-colors duration-700">
          <p className="text-xs font-bold tracking-widest uppercase mb-4 text-[#D90429]">Legal</p>
          <h1 className="font-giant text-6xl md:text-8xl tracking-tight leading-none text-[#1C1C1A] dark:text-[#F4F4F0] mb-6 transition-colors duration-700">TERMS & CONDITIONS</h1>
          <p className="text-sm font-bold tracking-widest uppercase text-gray-500">Last Updated: August 2026</p>
        </div>

        <div className="space-y-12 text-gray-800 dark:text-gray-300 leading-relaxed font-sans transition-colors duration-700">
          <section>
            <h2 className="font-serif text-3xl font-semibold mb-6 text-[#1C1C1A] dark:text-[#F4F4F0] transition-colors duration-700">1. Agreement to Terms</h2>
            <p className="mb-4">
              By accessing and using this portfolio website owned by Muhammad Yousaf Anwar, you agree to be bound by these Terms and Conditions. If you disagree with any part of these terms, you may not access the service.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-3xl font-semibold mb-6 text-[#1C1C1A] dark:text-[#F4F4F0] transition-colors duration-700">2. Intellectual Property</h2>
            <p className="mb-4">
              The overarching design, UI/UX architecture, custom animations, and original copy on this website are the intellectual property of Muhammad Yousaf Anwar. 
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li><span className="font-semibold text-[#D90429]">The Portfolio Code:</span> You may not blindly clone, scrape, or re-publish the complete source code of this portfolio as your own work.</li>
              <li><span className="font-semibold text-[#D90429]">Project Assets:</span> Source code and assets linked in the "Projects" section belong to their respective repositories and are governed by their specific open-source licenses (e.g., MIT, GPL) where applicable.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-3xl font-semibold mb-6 text-[#1C1C1A] dark:text-[#F4F4F0] transition-colors duration-700">3. Fair Use of Code Snippets</h2>
            <p className="mb-4">
              I am a strong advocate for open-source development and knowledge sharing. Any specific, isolated code snippets or motion configuration functions provided openly on this site (or in accompanying blog posts/feeds) may be freely used, modified, and integrated into your own personal or commercial projects. Attribution is appreciated but not legally required for isolated snippets.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-3xl font-semibold mb-6 text-[#1C1C1A] dark:text-[#F4F4F0] transition-colors duration-700">4. Disclaimer of Liability</h2>
            <p className="mb-4">
              This website and its content are provided on an "as is" and "as available" basis. Muhammad Yousaf Anwar makes no warranties, expressed or implied, regarding the accuracy, reliability, or availability of the site.
            </p>
            <p className="mb-4">
              In no event shall Muhammad Yousaf Anwar be liable for any direct, indirect, incidental, consequential, or punitive damages arising out of your access to, or use of, this website or the projects linked within it. You use the provided software, tools, and code at your own risk.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-3xl font-semibold mb-6 text-[#1C1C1A] dark:text-[#F4F4F0] transition-colors duration-700">5. Changes to Terms</h2>
            <p className="mb-4">
              I reserve the right to modify or replace these Terms at any time without prior notice. By continuing to access or use the site after revisions become effective, you agree to be bound by the revised terms.
            </p>
          </section>
        </div>
      </section>
    </ScrollReveal>
  );
};
