import React from 'react';
import { Link } from 'react-router-dom';
import { MagneticButton } from './motion/MagneticButton';

export const NextPageButton = ({ to, label }) => {
  return (
    <div className="w-full flex justify-end mt-12 mb-8 relative z-20">
      <MagneticButton 
        as={Link} 
        to={to} 
        className="inline-flex items-center gap-4 border border-[#D90429] bg-[#D90429] text-[#F4F4F0] px-8 py-4 text-xs font-bold tracking-[0.2em] uppercase hover:bg-transparent hover:text-[#D90429] transition-colors shadow-lg hover:shadow-xl"
      >
        <span>{label}</span>
        <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
        </svg>
      </MagneticButton>
    </div>
  );
};
