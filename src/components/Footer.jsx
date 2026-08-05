import React from 'react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="border-t border-black/10 dark:border-white/10 py-16 px-8 max-w-7xl mx-auto relative z-10 bg-[#F4F4F0]/80 dark:bg-[#0A0A0A]/80 backdrop-blur-md mt-24 transition-colors duration-700">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Bio Column */}
        <div className="md:col-span-2">
          <Link to="/" className="text-2xl font-bold hover:text-[#D90429] transition-colors uppercase tracking-widest block mb-4">
            Yousaf
          </Link>
          <p className="text-sm text-gray-700 dark:text-gray-400 leading-relaxed max-w-sm mb-6 border-l-2 border-[#D90429] pl-4">
            Computer Science student at UMT, Lahore. Full-stack web developer building modern applications with React, Firebase, Tailwind CSS, and Framer Motion.
          </p>
          <div className="flex flex-wrap gap-4 text-xs font-bold tracking-widest uppercase">
             <a href="https://github.com/uusaff" target="_blank" rel="noreferrer" className="hover:text-[#D90429] transition-colors">GitHub</a>
             <a href="https://linkedin.com/in/uusaff" target="_blank" rel="noreferrer" className="hover:text-[#D90429] transition-colors">LinkedIn</a>
             <a href="https://instagram.com/uusaff" target="_blank" rel="noreferrer" className="hover:text-[#D90429] transition-colors">Instagram</a>
             <a href="https://mail.google.com/mail/?view=cm&fs=1&to=uussaff@gmail.com" target="_blank" rel="noreferrer" className="hover:text-[#D90429] transition-colors">Email</a>
             <a href="https://facebook.com/" target="_blank" rel="noreferrer" className="hover:text-[#D90429] transition-colors">Facebook</a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-xs font-bold tracking-widest uppercase mb-6 text-[#D90429]">Quick Links</h4>
          <ul className="space-y-3 text-sm font-medium uppercase tracking-widest">
            <li><Link to="/" className="hover:text-[#D90429] transition-colors">Home</Link></li>
            <li><Link to="/about" className="hover:text-[#D90429] transition-colors">About</Link></li>
            <li><Link to="/projects" className="hover:text-[#D90429] transition-colors">Projects</Link></li>
            <li><Link to="/experience" className="hover:text-[#D90429] transition-colors">Experience</Link></li>
            <li><Link to="/contact" className="hover:text-[#D90429] transition-colors">Contact</Link></li>
          </ul>
        </div>

        {/* Connect */}
        <div>
           <h4 className="text-xs font-bold tracking-widest uppercase mb-6 text-[#D90429]">Connect</h4>
           <ul className="space-y-3 text-sm font-medium">
             <li><a href="https://mail.google.com/mail/?view=cm&fs=1&to=uussaff@gmail.com" target="_blank" rel="noreferrer" className="hover:text-[#D90429] transition-colors">uussaff@gmail.com</a></li>
             <li><a href="https://github.com/uusaff" target="_blank" rel="noreferrer" className="hover:text-[#D90429] transition-colors">github.com/uusaff</a></li>
             <li><a href="https://linkedin.com/in/uusaff" target="_blank" rel="noreferrer" className="hover:text-[#D90429] transition-colors">linkedin.com/in/uusaff</a></li>
           </ul>
        </div>
      </div>

      <div className="mt-16 pt-8 border-t border-black/10 dark:border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-bold tracking-widest uppercase text-gray-500">
        <p>© 2026 Yousaf. All rights reserved.</p>
        <p>Built with Next.js, TypeScript, Tailwind CSS & Framer Motion.</p>
        <div className="flex gap-4">
          <Link to="/privacy" className="hover:text-[#D90429] transition-colors">Privacy Policy</Link>
          <span>·</span>
          <Link to="/terms" className="hover:text-[#D90429] transition-colors">Terms of Service</Link>
          <span>·</span>
          <Link to="/rss" className="hover:text-[#D90429] transition-colors">RSS Feed</Link>
        </div>
      </div>
    </footer>
  );
};
