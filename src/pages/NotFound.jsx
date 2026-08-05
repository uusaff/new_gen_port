import React from 'react';
import { Link } from 'react-router-dom';
import { TextReveal } from '../components/motion/TextReveal';
import { MagneticButton } from '../components/motion/MagneticButton';
import { AuroraBackground } from '../components/motion/AuroraBackground';
import { AmbientCursor } from '../components/motion/AmbientCursor';

export const NotFound = () => {
  return (
    <section className="relative pt-12 pb-24 px-8 overflow-hidden flex flex-col items-center justify-center min-h-[85vh]">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full flex justify-center text-center z-0 pointer-events-none select-none">
        <TextReveal text="404" className="font-giant text-[35vw] md:text-[30vw] leading-[0.8] text-[#E8E8E3] dark:text-[#1A1A1A] tracking-normal whitespace-nowrap transition-colors duration-700" />
      </div>

      <div className="relative z-20 flex flex-col items-center text-center mt-12 md:mt-24">
        <p className="text-xs font-bold tracking-widest uppercase mb-4 text-[#D90429]">Error 404</p>
        <h2 className="font-serif text-5xl md:text-7xl leading-[1.1] mb-6 uppercase">
          Compilation Failed
        </h2>
        <div className="w-16 h-1 bg-[#D90429] mb-8"></div>
        <p className="text-sm md:text-base leading-relaxed max-w-lg text-gray-700 dark:text-gray-300 bg-[#F4F4F0]/80 dark:bg-[#0A0A0A]/80 backdrop-blur-sm p-6 border border-black/10 dark:border-white/10 shadow-lg mb-12 transition-colors duration-700">
          The requested route was not found on this server. The page you are looking for may have been moved, deleted, or perhaps it only exists in a parallel dimension.
        </p>
        
        <Link to="/">
          <MagneticButton className="inline-flex items-center gap-2 border border-[#1C1C1A] dark:border-white/20 px-8 py-4 text-xs font-bold tracking-widest uppercase hover:bg-[#D90429] hover:border-[#D90429] hover:text-[#F4F4F0] dark:text-[#F4F4F0] transition-colors">
            RETURN TO HOMEPAGE
          </MagneticButton>
        </Link>
      </div>
    </section>
  );
};
