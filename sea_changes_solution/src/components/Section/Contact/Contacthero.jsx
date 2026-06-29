import { motion } from "framer-motion";

export default function ContactHero() {
  return (
    <section className="relative h-[320px] sm:h-[380px] pt-20 flex items-center overflow-hidden bg-[#0B0F1A] border-b border-white/10">

      {/* Background photo */}
      <div className="absolute inset-0 z-0">
        <img
          src="/aboutus/braitcam.png"
          alt="Team collaborating around a table"
          className="w-full h-full object-cover object-center opacity-70"
          onError={(e) => {
            e.currentTarget.style.opacity = '0';
          }}
        />
        {/* Single Optimized Cinematic Overlay matching the Hero banner theme */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B0F1A] via-[#0B0F1A]/70 to-[#0B0F1A]/20" />
      </div>

      {/* Full-bleed hairline grid overlay */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.04]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="contact-grid" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#FFFFFF" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#contact-grid)" />
      </svg>

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-[#E8430A]"
            style={{
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

      {/* Content */}
      <div className="relative max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-4"
        >
          <span className="w-6 h-px bg-[#E8430A]" />
          <span className="text-[#E8430A] text-xs font-bold tracking-[0.25em] uppercase">SeaChange Solutions</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="text-4xl sm:text-6xl font-black text-white tracking-tight"
        >
          Contact <span className="text-[#E8430A]">Us</span>
        </motion.h1>
      </div>
    </section>
  );
}