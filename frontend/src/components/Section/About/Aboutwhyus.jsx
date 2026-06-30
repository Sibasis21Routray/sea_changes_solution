import React from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const featureItems = [
  {
    title: "Local Expertise",
    desc: "Deeply rooted understanding of regional compliance regulations.",
  },
  {
    title: "Comprehensive Solutions",
    desc: "End-to-end strategy from digital marketing to enterprise system architecture.",
  },
  {
    title: "Client-Centric Focus",
    desc: "Bespoke roadmaps tailored precisely to organizational velocity.",
  },
];

// Professional animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const fadeUpVariants = {
  hidden: { 
    opacity: 0, 
    y: 40,
    filter: "blur(5px)"
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.7,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

const scaleInVariants = {
  hidden: { 
    opacity: 0, 
    scale: 0.92,
    y: 30
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const lineVariants = {
  hidden: { width: 0, opacity: 0 },
  visible: {
    width: 24,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: [0.65, 0, 0.35, 1],
      delay: 0.4,
    },
  },
};

const cardVariants = {
  hidden: { 
    opacity: 0, 
    x: 40,
    scale: 0.98
  },
  visible: (index) => ({
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      delay: 0.5 + index * 0.12,
      ease: [0.215, 0.61, 0.355, 1],
    },
  }),
  hover: {
    x: 8,
    scale: 1.02,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
};

const stripVariants = {
  hidden: { scaleY: 0, originY: 0.5 },
  hover: {
    scaleY: 1,
    transition: {
      duration: 0.4,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function AboutWhyUs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <motion.section
      ref={ref}
      className="py-24 bg-[#0A1628] relative overflow-hidden border-b border-[#8FB5CC]/10"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      {/* Hairline grid — steel-blue tint */}
      <motion.svg
        className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.03]"
        xmlns="http://www.w3.org/2000/svg"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 0.03 } : {}}
        transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
      >
        <defs>
          <pattern id="section-grid" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#8FB5CC" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#section-grid)" />
      </motion.svg>

      {/* Ambient glow — bottom right */}
      <motion.div
        className="absolute -bottom-40 -right-40 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(143,181,204,0.05) 0%, transparent 70%)" }}
        initial={{ opacity: 0, scale: 0.3 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 1.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
      />

      {/* Floating particles */}
      <motion.div
        className="absolute top-20 right-1/4 w-1 h-1 bg-[#8FB5CC]/20 rounded-full"
        animate={isInView ? {
          y: [-20, 20, -20],
          opacity: [0.2, 0.5, 0.2],
        } : {}}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-40 left-1/3 w-2 h-2 bg-[#8FB5CC]/10 rounded-full"
        animate={isInView ? {
          y: [20, -20, 20],
          opacity: [0.1, 0.4, 0.1],
        } : {}}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 items-center">

          {/* Left — Image */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <motion.div
              variants={scaleInVariants}
              className="relative w-full max-w-[400px] group"
            >
              {/* Glow behind image */}
              <motion.div
                className="absolute -inset-4 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                style={{
                  background: "radial-gradient(circle at center, rgba(143,181,204,0.08) 0%, transparent 70%)",
                }}
              />
              
              <img
                src="/aboutus/bpo-banner.png"
                alt="SeaChange Operational Alignment"
                className="w-full h-full object-cover relative z-10"
                style={{ filter: "saturate(0.85)" }}
              />
              
              {/* Thin steel-blue inset frame */}
              <motion.div
                className="absolute inset-0 pointer-events-none z-20"
                style={{ boxShadow: "inset 0 0 0 1px rgba(143,181,204,0.15)" }}
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
              />
              
              {/* Corner accents */}
              <motion.div
                className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#8FB5CC]/30 z-30"
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 1.2 }}
              />
              <motion.div
                className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#8FB5CC]/30 z-30"
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 1.4 }}
              />
            </motion.div>
          </div>

          {/* Right — Text */}
          <div className="lg:col-span-7 space-y-10">
            <motion.div variants={containerVariants}>
              <motion.div
                className="flex items-center gap-3 mb-4"
                variants={fadeUpVariants}
              >
                <motion.span
                  className="w-6 h-px bg-[#8FB5CC]"
                  variants={lineVariants}
                />
                <motion.span
                  className="text-[#8FB5CC] text-xs font-bold tracking-[0.25em] uppercase"
                  initial={{ opacity: 0, x: -10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.6, ease: "easeOut" }}
                >
                  Market Trust
                </motion.span>
              </motion.div>

              <motion.h2
                className="text-4xl font-black text-white tracking-tight mb-4"
                variants={fadeUpVariants}
              >
                Delighting Customers Continuously
              </motion.h2>

              <motion.p
                className="text-white/60 text-base leading-relaxed mb-8 max-w-xl"
                variants={fadeUpVariants}
              >
                SeaChange Solutions is a trusted partner in Southeast Asia and Sri Lanka, empowering businesses to expand, establish a strong presence, and thrive in today's fast-evolving landscape through tailored learning, compliance and digital marketing solutions.
              </motion.p>

              <motion.div
                variants={fadeUpVariants}
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 text-white font-bold text-sm tracking-wide border-b border-white/20 pb-1 hover:border-[#8FB5CC] hover:text-[#8FB5CC] transition-all duration-300"
                >
                  <span>Get started today</span>
                  <motion.span
                    animate={isInView ? { x: [0, 5, 0] } : {}}
                    transition={{ 
                      duration: 2, 
                      repeat: Infinity, 
                      ease: "easeInOut",
                      delay: 1.5
                    }}
                    className="inline-block"
                  >
                    ↗
                  </motion.span>
                </Link>
              </motion.div>
            </motion.div>

            {/* Feature cards */}
            <motion.div
              className="flex flex-col gap-4 pt-4 border-t border-[#8FB5CC]/10"
              variants={containerVariants}
            >
              {featureItems.map((item, index) => (
                <motion.div
                  key={item.title}
                  custom={index}
                  variants={cardVariants}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  whileHover="hover"
                  className="group relative flex bg-[#0D1E38] border border-[#8FB5CC]/10 rounded-xl overflow-hidden p-6 hover:border-[#8FB5CC]/30 transition-colors duration-300 cursor-default"
                >
                  {/* Animated left strip */}
                  <motion.div
                    className="absolute left-0 top-0 h-full w-[3px] bg-[#8FB5CC] origin-center"
                    variants={stripVariants}
                    initial="hidden"
                    whileHover="hover"
                  />

                  {/* Card number accent */}
                  <motion.div
                    className="absolute top-4 right-4 text-4xl font-black text-[#8FB5CC]/5 select-none"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.8 + index * 0.15 }}
                  >
                    {`0${index + 1}`}
                  </motion.div>

                  <div className="relative z-10">
                    <motion.h4
                      className="text-white font-bold text-base mb-1 group-hover:text-[#8FB5CC] transition-colors"
                      initial={{ opacity: 0, y: 10 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 0.7 + index * 0.15, duration: 0.4 }}
                    >
                      {item.title}
                    </motion.h4>
                    <motion.p
                      className="text-white/40 text-xs sm:text-sm leading-relaxed"
                      initial={{ opacity: 0 }}
                      animate={isInView ? { opacity: 1 } : {}}
                      transition={{ delay: 0.8 + index * 0.15, duration: 0.4 }}
                    >
                      {item.desc}
                    </motion.p>
                  </div>

                  {/* Subtle hover gradient */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-[#8FB5CC]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>

        </div>
      </div>
    </motion.section>
  );
}