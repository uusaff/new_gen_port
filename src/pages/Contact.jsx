import React, { useRef } from 'react';
import { ScrollReveal } from '../components/motion/ScrollReveal';
import { MagneticButton } from '../components/motion/MagneticButton';

export const Contact = () => {
  const form = useRef();

  return (
    <ScrollReveal>
      <section className="py-24 px-8 max-w-7xl mx-auto min-h-[85vh] flex flex-col lg:flex-row gap-16">
        <div className="lg:w-1/3">
          <p className="text-xs font-bold tracking-widest uppercase mb-4 text-[#D90429]">Get In Touch</p>
          <h2 className="font-giant text-7xl md:text-8xl tracking-tight leading-none text-[#1C1C1A] dark:text-[#F4F4F0] transition-colors duration-700">CONTACT</h2>
          
          <div className="mt-12 space-y-6">
            <div>
              <p className="text-xs font-bold tracking-widest uppercase text-gray-500 mb-1">Email</p>
              <a href="mailto:uussaff@gmail.com" className="text-lg font-serif hover:text-[#D90429] transition-colors">uussaff@gmail.com</a>
            </div>
            <div>
              <p className="text-xs font-bold tracking-widest uppercase text-gray-500 mb-1">Location</p>
              <p className="text-lg font-serif">Lahore, Pakistan</p>
            </div>
            
            <div className="pt-8 flex gap-3">
              {[
                { label: 'IN', url: 'https://linkedin.com/in/uusaff' },
                { label: 'GH', url: 'https://github.com/uusaff' },
                { label: 'IG', url: 'https://instagram.com/uusaff' }
              ].map((social, idx) => (
                 <MagneticButton key={idx} as="a" href={social.url} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full border border-[#D90429] flex items-center justify-center text-xs font-bold text-[#D90429] hover:bg-[#D90429] hover:text-[#F4F4F0] transition-colors">
                   {social.label}
                 </MagneticButton>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:w-2/3">
          {/* Note: This is now a standard HTML form submission. It will redirect to FormSubmit, send the email, and redirect back. */}
          <form ref={form} action="https://formsubmit.co/uussaff@gmail.com" method="POST" className="flex flex-col gap-8 max-w-2xl bg-[#F4F4F0]/80 dark:bg-[#0A0A0A]/80 p-8 border border-black/10 dark:border-white/10 shadow-xl backdrop-blur-sm relative transition-colors duration-700">
            
            {/* FormSubmit Configuration */}
            {/* Redirects back to your contact page after submission */}
            <input type="hidden" name="_next" value="https://new-gen-port.vercel.app/contact" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_subject" value="New submission from your portfolio!" />

            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold tracking-widest uppercase">Name</label>
              <input type="text" name="name" required className="border-b border-black/20 dark:border-white/20 bg-transparent py-3 focus:outline-none focus:border-[#D90429] dark:focus:border-[#D90429] dark:text-[#F4F4F0] transition-colors" placeholder="John Doe" />
            </div>
            
            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold tracking-widest uppercase">Email</label>
              <input type="email" name="email" required className="border-b border-black/20 dark:border-white/20 bg-transparent py-3 focus:outline-none focus:border-[#D90429] dark:focus:border-[#D90429] dark:text-[#F4F4F0] transition-colors" placeholder="john@example.com" />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold tracking-widest uppercase">Message</label>
              <textarea name="message" required rows="4" className="border-b border-black/20 dark:border-white/20 bg-transparent py-3 focus:outline-none focus:border-[#D90429] dark:focus:border-[#D90429] dark:text-[#F4F4F0] transition-colors resize-none" placeholder="Hello, I'd like to talk about..."></textarea>
            </div>

            <MagneticButton type="submit" className="self-start inline-flex items-center gap-2 mt-4 bg-[#D90429] text-[#F4F4F0] px-8 py-4 rounded-full text-xs font-bold tracking-widest uppercase hover:bg-[#1C1C1A] dark:hover:bg-[#F4F4F0] dark:hover:text-[#1C1C1A] transition-colors duration-300 disabled:opacity-50">
              SEND MESSAGE
            </MagneticButton>
          </form>
        </div>
      </section>
    </ScrollReveal>
  );
};
