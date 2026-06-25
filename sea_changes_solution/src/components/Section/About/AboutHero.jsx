import React from "react";
import { motion } from "framer-motion";

export default function AboutHero() {
  return (
    <section className="relative h-[320px] sm:h-[380px] pt-16 flex items-center overflow-hidden bg-[#030712]">

      {/* Background photo */}
      <img
        src="/aboutus/braitcam.png"
        alt="Team collaborating around a table"
        className="absolute inset-0 w-full h-full object-cover"
        onError={(e) => {
          e.currentTarget.style.display = "none";
          e.currentTarget.nextSibling.style.display = "block";
        }}
      />
      {/* Fallback gradient */}
      <div
        className="absolute inset-0 hidden bg-gradient-to-br from-[#0B1F3A] via-[#16264A] to-[#0B1F3A]"
        style={{ display: "none" }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[#0B1230]/60" />

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full"
            style={{
              backgroundColor: i % 2 === 0 ? "#FF5A1F" : "#5B63D3",
              opacity: 0.1 + Math.random() * 0.15,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20 - Math.random() * 30],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 3 + Math.random() * 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Decorative top-right stripe */}
      <motion.div
        animate={{ x: [0, 15, 0], y: [0, -8, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 right-0 w-28 h-36 pointer-events-none overflow-hidden opacity-60"
      >
        <svg viewBox="0 0 112 144" className="w-full h-full">
          <polygon points="112,0 112,36 66,0" fill="#E8EAF6" />
          <polygon points="112,36 112,72 84,72 66,36" fill="#FF5A1F" opacity="0.5" />
          <polygon points="112,72 112,108 84,108 84,72" fill="#0B1F3A" opacity="0.85" />
        </svg>
      </motion.div>

      {/* Bottom decorative animated line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#5B63D3]/50 to-transparent origin-left"
      />

      {/* Content */}
      <div className="relative max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-4"
        >
          <span className="w-8 h-px bg-[#5B63D3]" />
          <span className="text-[#9BB3D6] text-sm font-semibold tracking-wide">SeaChange Solutions</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="text-4xl sm:text-5xl font-black text-white"
        >
          About{" "}
          <motion.span
            whileHover={{ color: "#FF5A1F", textShadow: "0 0 30px rgba(255,90,31,0.3)" }}
            className="text-[#5B63D3] inline-block"
          >
            Us
          </motion.span>
        </motion.h1>
      </div>
    </section>
  );
}