import React from "react";
import { motion } from "framer-motion";

export default function ContactHero() {
  return (
    <section className="relative min-h-[520px] pt-32 pb-20 flex items-center overflow-hidden bg-[#0A1628] border-b border-[#8FB5CC]/10">

      {/* DESKTOP BACKGROUND IMAGE LAYER with enhanced animation */}
      <motion.div 
        className=" absolute inset-0 z-0"
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
      >
        <img
          src="/aboutus/braitcam.png"
          alt="Team collaborating around a table"
          className="w-full h-full object-cover object-center opacity-70 hidden md:block"
          onError={(e) => {
            e.currentTarget.style.opacity = '0';
          }}
        />
        <img
          src="/contact/bpo-banner.png"
          alt="Team collaborating around a table"
          className="w-full h-full object-cover object-center opacity-70 block md:hidden scale-115"
          onError={(e) => {
            e.currentTarget.style.opacity = '0';
          }}
        />
        {/* Animated overlay gradients */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-r from-[#0B0F1A] via-[#0B0F1A]/70 to-[#0B0F1A]/20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        />
        {/* Subtle animated tint */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-[#8FB5CC]/05"
          animate={{ 
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>

      

      {/* Enhanced Grid Overlay with fade-in */}
      <motion.svg 
        className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.04] z-1" 
        xmlns="http://www.w3.org/2000/svg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.04 }}
        transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
      >
        <defs>
          <pattern id="contact-grid" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#FFFFFF" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#contact-grid)" />
      </motion.svg>

      {/* Enhanced Floating particles with more dynamic movement */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-1">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-[#8FB5CC]"
            style={{
              width: `${2 + Math.random() * 3}px`,
              height: `${2 + Math.random() * 3}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            initial={{ 
              opacity: 0,
              scale: 0,
            }}
            animate={{
              y: [0, -30 - Math.random() * 40, 0],
              x: [0, (Math.random() - 0.5) * 30, 0],
              opacity: [0.1, 0.35, 0.1],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 4 + Math.random() * 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      {/* Decorative corner accents */}
      <motion.div
        className="absolute top-6 left-6 w-12 h-12 border-t-2 border-l-2 border-[#8FB5CC]/20 z-1"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
      />
      <motion.div
        className="absolute bottom-6 right-6 w-12 h-12 border-b-2 border-r-2 border-[#8FB5CC]/20 z-1"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
      />

      {/* Content with enhanced staggered animations */}
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 flex flex-col h-full">
        {/* Enhanced Eyebrow with shimmer line */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.08,
                delayChildren: 0.2,
              },
            },
          }}
          className="flex items-center gap-3 mb-4"
        >
          {/* Animated line with shimmer effect */}
          <motion.span
            variants={{
              hidden: { width: 0, opacity: 0 },
              visible: {
                width: 24,
                opacity: 1,
                transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] },
              },
            }}
            className="w-6 h-px bg-[#8FB5CC] block relative overflow-hidden"
          >
            <motion.span
              className="absolute inset-0 bg-white/60"
              animate={{ x: ["-100%", "200%"] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            />
          </motion.span>

          {/* Animated text with character reveal */}
          <div className="flex overflow-hidden">
            {"SeaChange Solutions".split("").map((char, index) => (
              <motion.span
                key={index}
                variants={{
                  hidden: { y: "120%", opacity: 0, rotate: 3 },
                  visible: {
                    y: 0,
                    opacity: 1,
                    rotate: 0,
                    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
                  },
                }}
                className="text-[#8FB5CC] text-xs font-bold tracking-[0.25em] uppercase inline-block hover:text-white transition-colors duration-300"
                style={{ whiteSpace: char === " " ? "pre" : "normal" }}
              >
                {char}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Enhanced Headline with word reveal */}
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.15,
                delayChildren: 0.4,
              },
            },
          }}
          className="text-4xl sm:text-6xl font-black text-white tracking-tight overflow-hidden"
        >
          <div className="overflow-hidden py-1">
            <motion.span
              variants={{
                hidden: { y: "120%", opacity: 0, rotate: 3 },
                visible: {
                  y: 0,
                  opacity: 1,
                  rotate: 0,
                  transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
                },
              }}
              className="inline-block"
            >
              Contact{" "}
            </motion.span>
          </div>
          <div className="overflow-hidden py-1">
            <motion.span
              variants={{
                hidden: { y: "120%", opacity: 0, rotate: -3 },
                visible: {
                  y: 0,
                  opacity: 1,
                  rotate: 0,
                  transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
                },
              }}
              className="text-[#8FB5CC] inline-block relative"
            >
              <motion.span
                className="inline-block"
                whileHover={{
                  color: "#FFFFFF",
                  textShadow: "0 0 30px rgba(143,181,204,0.5)",
                }}
                transition={{ duration: 0.3 }}
              >
                Us
              </motion.span>
              {/* Animated underline on hover */}
              <motion.span
                className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#8FB5CC] origin-left"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.span>
          </div>
        </motion.h1>

        {/* Scroll indicator */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="hidden md:flex items-center gap-3 mt-8"
        >
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
            className="flex items-center gap-2 text-[#8FB5CC]/60 text-sm font-medium"
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
    </section>
  );
}