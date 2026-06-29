import React from "react";
import { motion } from "framer-motion";

export default function AboutHero() {
  return (
    <section className="relative min-h-[520px] pt-32 pb-20 flex items-center overflow-hidden bg-[#0B0F1A] border-b border-white/10">
      
      {/* Full-Bleed Background Image Layer */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/aboutus/braitcam.png" 
          alt="SeaChange Global Infrastructure Background" 
          className="w-full h-full object-cover object-center opacity-70" // Adjusted to a clean 70% opacity instead of over-saturating
          onError={(e) => {
            e.currentTarget.style.opacity = '0';
          }}
        />
        
        {/* Single Optimized Cinematic Overlay: Perfect text readability on left, clean image visibility on right */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B0F1A] via-[#0B0F1A]/70 to-[#0B0F1A]/20" />
      </div>

      {/* Full-Bleed Technical Hairline Grid Overlay */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.04] z-1" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="hero-grid" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#FFFFFF" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hero-grid)" />
      </svg>

      {/* Content Engine Container */}
      <div className="relative max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 mb-6"
          >
            <span className="w-6 h-px bg-[#E8430A]" />
            <span className="text-[#E8430A] text-xs font-bold tracking-[0.25em] uppercase">
              Transforming Businesses Across
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-6xl font-black text-white select-none leading-tight mb-6 tracking-tight"
          >
            South East Asia & <br />
            <span className="text-[#E8430A]">Sri Lanka</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/80 text-base sm:text-lg max-w-xl leading-relaxed border-l-2 border-[#E8430A] pl-6"
          >
            Empowering your enterprise with industry-leading compliance, digital 
            marketing, and bespoke technology solutions since 2014.
          </motion.p>
        </div>
      </div>
    </section>
  );
}