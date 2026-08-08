import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from 'react-icons/fa';

export const Footer = () => {
  return (
    <footer className="border-t border-black/10 dark:border-white/10 py-12 px-8 max-w-4xl mx-auto relative z-10 bg-[#F4F4F0]/80 dark:bg-[#0A0A0A]/80 backdrop-blur-md mt-24 transition-colors duration-700 flex flex-col items-center text-center">
      
      {/* Brand & Tagline */}
      <div className="mb-8">
        <Link to="/" className="text-2xl font-bold hover:text-[#D90429] transition-colors uppercase tracking-widest block mb-2">
          Yousaf
        </Link>
        <p className="text-sm text-gray-700 dark:text-gray-400">
          Building modern web applications.
        </p>
      </div>

      {/* Quick Links */}
      <ul className="flex flex-wrap justify-center gap-6 text-xs font-bold tracking-widest uppercase text-[#D90429] mb-8">
        <li><Link to="/" className="hover:text-black dark:hover:text-white transition-colors">Home</Link></li>
        <li><Link to="/about" className="hover:text-black dark:hover:text-white transition-colors">About</Link></li>
        <li><Link to="/projects" className="hover:text-black dark:hover:text-white transition-colors">Projects</Link></li>
        <li><Link to="/experience" className="hover:text-black dark:hover:text-white transition-colors">Experience</Link></li>
        <li><Link to="/contact" className="hover:text-black dark:hover:text-white transition-colors">Contact</Link></li>
      </ul>

      {/* Social Icons */}
      <div className="flex gap-6 mb-8 text-gray-500">
        <a href="https://github.com/uusaff" target="_blank" rel="noreferrer" className="hover:text-[#D90429] transition-colors">
          <FaGithub className="w-5 h-5" />
          <span className="sr-only">GitHub</span>
        </a>
        <a href="https://linkedin.com/in/uusaff" target="_blank" rel="noreferrer" className="hover:text-[#D90429] transition-colors">
          <FaLinkedin className="w-5 h-5" />
          <span className="sr-only">LinkedIn</span>
        </a>
        <a href="https://instagram.com/uusaff" target="_blank" rel="noreferrer" className="hover:text-[#D90429] transition-colors">
          <FaInstagram className="w-5 h-5" />
          <span className="sr-only">Instagram</span>
        </a>
        <a href="mailto:uussaff@gmail.com" target="_blank" rel="noreferrer" className="hover:text-[#D90429] transition-colors">
          <FaEnvelope className="w-5 h-5" />
          <span className="sr-only">Email</span>
        </a>
      </div>

      {/* Divider */}
      <div className="w-full h-px bg-black/10 dark:bg-white/10 mb-6"></div>

      {/* Copyright */}
      <p className="text-[10px] font-bold tracking-widest uppercase text-gray-500">
        &copy; 2026 Yousaf. All rights reserved.
      </p>
    </footer>
  );
};
