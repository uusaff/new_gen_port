import React from 'react';

export const VideoBackground = () => {
  return (
    <div className="fixed inset-0 w-full h-full z-[-2] overflow-hidden pointer-events-none bg-[#F4F4F0] dark:bg-[#0A0A0A] transition-colors duration-700">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto -translate-x-1/2 -translate-y-1/2 object-cover blur-[20px] opacity-80 dark:opacity-60 transition-opacity duration-700"
      >
        <source src="/cropped_bg.mp4" type="video/mp4" />
      </video>
      {/* Overlay to ensure text readability */}
      <div className="absolute inset-0 bg-white/20 dark:bg-black/40 transition-colors duration-700"></div>
    </div>
  );
};
