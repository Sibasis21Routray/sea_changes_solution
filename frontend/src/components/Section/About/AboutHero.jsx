import React from "react";
import { motion } from "framer-motion";

export default function AboutHero() {
  return (
    <section className="relative min-h-[520px] pt-32 pb-20 flex items-center overflow-hidden bg-[#0A1628] border-b border-[#8FB5CC]/10">

      {/* Background Image with enhanced animations */}
      <motion.div 
        className="absolute inset-0 z-0"
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
      >
        <img
          src="/aboutus/braitcam.png"
          alt="SeaChange Global Infrastructure Background"
          className="w-full h-full object-cover object-center opacity-70"
          style={{ filter: "saturate(0.75) brightness(0.85)" }}
          onError={(e) => { e.currentTarget.style.opacity = "0"; }}
        />
        {/* Cool-tinted cinematic overlay with animated reveal */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-r from-[#0A1628] via-[#0A1628]/75 to-[#0A1628]/15"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        />
        {/* Subtle steel-blue tint with pulse animation */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-[#8FB5CC]/05"
          animate={{ 
            opacity: [0.5, 1, 0.5],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>

      {/* Hairline grid overlay with fade-in */}
      <motion.svg
        className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.04] z-[1]"
        xmlns="http://www.w3.org/2000/svg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.04 }}
        transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
      >
        <defs>
          <pattern id="hero-grid" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#8FB5CC" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hero-grid)" />
      </motion.svg>

      {/* Floating ambient particles */}
      <motion.div
        className="absolute top-1/4 right-1/3 w-2 h-2 bg-[#8FB5CC]/20 rounded-full pointer-events-none z-[2]"
        animate={{
          y: [-30, 30, -30],
          x: [-20, 20, -20],
          opacity: [0.2, 0.5, 0.2],
          scale: [1, 1.5, 1],
        }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/3 left-1/4 w-1.5 h-1.5 bg-[#5A8FAD]/25 rounded-full pointer-events-none z-[2]"
        animate={{
          y: [20, -20, 20],
          x: [15, -15, 15],
          opacity: [0.1, 0.4, 0.1],
          scale: [1, 1.8, 1],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
      <motion.div
        className="absolute top-1/2 right-1/4 w-1 h-1 bg-[#8FB5CC]/15 rounded-full pointer-events-none z-[2]"
        animate={{
          y: [-40, 40, -40],
          opacity: [0.15, 0.45, 0.15],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      />

      {/* Decorative corner accents */}
      <motion.div
        className="absolute top-8 left-8 w-16 h-16 border-t-2 border-l-2 border-[#8FB5CC]/20 z-[2]"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
      />
      <motion.div
        className="absolute bottom-8 right-8 w-16 h-16 border-b-2 border-r-2 border-[#8FB5CC]/20 z-[2]"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 1, ease: [0.16, 1, 0.3, 1] }}
      />

      {/* Content */}
      <div className="relative max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="max-w-2xl">

          {/* Enhanced Eyebrow */}
          <motion.div
            initial="initial"
            animate="animate"
            variants={{
              initial: {},
              animate: { transition: { staggerChildren: 0.03 } }
            }}
            className="flex items-center gap-4 mb-6 select-none overflow-hidden"
          >
            {/* Elegant line expansion animation with shimmer */}
            <motion.span 
              variants={{
                initial: { scaleX: 0, originX: 0, opacity: 0 },
                animate: { 
                  scaleX: 1, 
                  opacity: 1,
                  transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] } 
                }
              }}
              className="w-8 h-[1.5px] bg-[#8FB5CC] block relative overflow-hidden"
            >
              <motion.span
                className="absolute inset-0 bg-white/60"
                animate={{ x: ["-100%", "200%"] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              />
            </motion.span>

            {/* Enhanced split-text character animation */}
            <div className="flex overflow-hidden py-1">
              {"Transforming Businesses Across".split("").map((char, index) => (
                <motion.span
                  key={index}
                  variants={{
                    initial: { y: "110%", opacity: 0, rotate: 5 },
                    animate: { 
                      y: 0, 
                      opacity: 1, 
                      rotate: 0,
                      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } 
                    }
                  }}
                  className="text-[#8FB5CC] text-xs font-bold tracking-[0.25em] uppercase inline-block hover:text-white transition-colors duration-300"
                  style={{ whiteSpace: char === " " ? "pre" : "normal" }}
                >
                  {char}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Enhanced Headline */}
          <motion.h1
            initial="initial"
            animate="animate"
            variants={{
              initial: {},
              animate: {
                transition: {
                  staggerChildren: 0.15,
                  delayChildren: 0.2
                }
              }
            }}
            className="text-4xl sm:text-6xl font-black text-white select-none leading-[1.15] mb-6 tracking-tight overflow-hidden"
          >
            {/* First Line Reveal Block */}
            <div className="overflow-hidden block py-1">
              <motion.span
                variants={{
                  initial: { y: "120%", opacity: 0, rotate: 3 },
                  animate: { 
                    y: 0, 
                    opacity: 1, 
                    rotate: 0,
                    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } 
                  }
                }}
                className="inline-block"
              >
                South East Asia &
              </motion.span>
            </div>

            {/* Second Line Reveal Block with enhanced interactivity */}
            <div className="overflow-hidden block py-1">
              <motion.span
                variants={{
                  initial: { y: "120%", opacity: 0, rotate: -3 },
                  animate: { 
                    y: 0, 
                    opacity: 1, 
                    rotate: 0,
                    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } 
                  }
                }}
                className="text-[#8FB5CC] inline-block relative"
              >
                <motion.span
                  whileHover={{ 
                    color: "#FFFFFF",
                    textShadow: "0 0 30px rgba(143,181,204,0.5)",
                  }}
                  transition={{ duration: 0.3 }}
                  className="inline-block"
                >
                  Sri Lanka
                </motion.span>
                {/* Underline animation on hover */}
                <motion.span
                  className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#8FB5CC] origin-left"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.span>
            </div>
          </motion.h1>

          {/* Enhanced Body with professional border and glow */}
          <motion.p
            initial="initial"
            animate="animate"
            variants={{
              initial: { opacity: 0, x: -15 },
              animate: { 
                opacity: 1, 
                x: 0, 
                transition: { duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] } 
              }
            }}
            className="relative text-white/75 text-base sm:text-lg max-w-xl leading-relaxed pl-6 group"
          >
            {/* Animated border with glow */}
            <motion.span
              variants={{
                initial: { scaleY: 0 },
                animate: { 
                  scaleY: 1, 
                  transition: { duration: 0.8, delay: 0.4, ease: [0.25, 1, 0.5, 1] } 
                }
              }}
              className="absolute left-0 top-0 bottom-0 w-[2px] bg-[#8FB5CC] origin-top block group-hover:shadow-[0_0_8px_rgba(143,181,204,0.3)] transition-shadow duration-500"
            />
            
            {/* Secondary accent dot */}
            <motion.span
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1.2 }}
              className="absolute left-[-3px] top-0 w-2 h-2 bg-[#8FB5CC] rounded-full"
            />

            Empowering your enterprise with industry-leading compliance, digital
            marketing, and bespoke technology solutions since 2014.
          </motion.p>

          {/* New: Animated CTA hint */}
          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="mt-8 flex items-center gap-3"
          >
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
              className="text-[#8FB5CC]/60 text-sm font-medium flex items-center gap-2"
            >
              <span>Scroll to explore</span>
              <motion.svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                animate={{ y: [0, 3, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </motion.svg>
            </motion.div>
          </motion.div> */}
        </div>
      </div>
    </section>
  );
}