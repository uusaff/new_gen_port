import React from 'react';
import { ScrollReveal } from '../components/motion/ScrollReveal';

export const PrivacyPolicy = () => {
  return (
    <ScrollReveal>
      <section className="py-24 px-8 max-w-4xl mx-auto min-h-[85vh]">
        <div className="mb-16 border-b border-black/10 dark:border-white/10 pb-12 transition-colors duration-700">
          <p className="text-xs font-bold tracking-widest uppercase mb-4 text-[#D90429]">Legal</p>
          <h1 className="font-giant text-6xl md:text-8xl tracking-tight leading-none text-[#1C1C1A] dark:text-[#F4F4F0] mb-6 transition-colors duration-700">PRIVACY POLICY</h1>
          <p className="text-sm font-bold tracking-widest uppercase text-gray-500">Last Updated: August 2026</p>
        </div>

        <div className="space-y-12 text-gray-800 dark:text-gray-300 leading-relaxed font-sans transition-colors duration-700">
          <section>
            <h2 className="font-serif text-3xl font-semibold mb-6 text-[#1C1C1A] dark:text-[#F4F4F0] transition-colors duration-700">1. Introduction</h2>
            <p className="mb-4">
              Welcome to the personal portfolio of Muhammad Yousaf Anwar. I respect your privacy and am committed to protecting your personal data. This Privacy Policy explains how your information is collected, used, and safeguarded when you visit and interact with this website.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-3xl font-semibold mb-6 text-[#1C1C1A] dark:text-[#F4F4F0] transition-colors duration-700">2. Information Collection</h2>
            <p className="mb-4">I may collect certain information directly from you when you choose to interact with the site, particularly through the Contact form. The data collected includes:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li><span className="font-semibold text-[#D90429]">Identity Data:</span> Your name, as provided in the contact form.</li>
              <li><span className="font-semibold text-[#D90429]">Contact Data:</span> Your email address, used exclusively to reply to your inquiries.</li>
              <li><span className="font-semibold text-[#D90429]">Message Content:</span> Any specific details or project requirements you include in your message.</li>
            </ul>
            <p>
              This information is processed securely using third-party email routing services (e.g., EmailJS) and is sent directly to my personal inbox.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-3xl font-semibold mb-6 text-[#1C1C1A] dark:text-[#F4F4F0] transition-colors duration-700">3. Analytics and Cookies</h2>
            <p className="mb-4">
              To improve the user experience and optimize the performance of this portfolio, this site may utilize standard web analytics tools and cookies.
            </p>
            <p className="mb-4">
              These tracking technologies collect anonymized, aggregated data such as:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Browser type and operating system.</li>
              <li>Pages visited, time spent on the site, and navigation paths.</li>
              <li>General geographic location (city or country level).</li>
            </ul>
            <p>
              Cookies can be disabled through your browser settings without significantly degrading the visual experience of this site.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-3xl font-semibold mb-6 text-[#1C1C1A] dark:text-[#F4F4F0] transition-colors duration-700">4. Data Security</h2>
            <p className="mb-4">
              I have implemented appropriate technical security measures to prevent your personal data from being accidentally lost, used, or accessed in an unauthorized way. Contact form submissions are encrypted in transit. However, please remember that no method of transmission over the internet is 100% secure.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-3xl font-semibold mb-6 text-[#1C1C1A] dark:text-[#F4F4F0] transition-colors duration-700">5. Contact Information</h2>
            <p className="mb-4">
              If you have any questions about this Privacy Policy or my privacy practices, please contact me at:
            </p>
            <p className="font-bold text-[#D90429]">uussaff@gmail.com</p>
          </section>
        </div>
      </section>
    </ScrollReveal>
  );
};
