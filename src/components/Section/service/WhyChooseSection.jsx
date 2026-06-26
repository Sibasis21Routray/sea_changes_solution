import React from "react";
import { motion } from "framer-motion";
import COLORS from "../../Common/color";

// ============ ANIMATION VARIANTS ============
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const glowVariants = {
  animate: {
    opacity: [0.15, 0.3, 0.15],
    scale: [1, 1.08, 1],
    transition: { duration: 3.2, repeat: Infinity, ease: "easeInOut" },
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

/**
 * WhyChooseSection
 * Light counterpart to PlaybookSection: white background, same #E6521F
 * orange accent system (ambient glow on each card, hover edge, number badge).
 *
 * Props:
 *  - heading: string (default "Why Choose SEACHANGE Solutions?")
 *  - reasons: array of { num, title, desc } (required)
 */
const WhyChooseSection = ({ heading = "Why Choose SEACHANGE Solutions?", reasons = [] }) => (
  <section style={{ backgroundColor: "#FFFFFF" }} className="py-16 px-6 overflow-hidden">
    <div className="max-w-7xl mx-auto">
      {/* Animated Section Heading */}
      <div className="relative inline-block mb-10">
        <motion.h2
          initial={{ opacity: 0, y: -15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold"
          style={{ color: COLORS.ink }}
        >
          {heading}
        </motion.h2>
        <motion.span
          aria-hidden="true"
          className="absolute left-0 -bottom-2 h-1 rounded-full"
          style={{ backgroundColor: "#E6521F", transformOrigin: "left" }}
          initial={{ scaleX: 0, width: "100%" }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        />
      </div>

      {/* Grid container orchestrating child card delays */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={containerVariants}
      >
        {reasons.map((item) => (
          <motion.div
            key={item.num}
            variants={cardVariants}
            whileHover={{ y: -6 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="relative group p-7 overflow-hidden"
            style={{
              backgroundColor: "#F7F8FB",
              border: "1px solid #E3E6EF",
              borderRadius: "6px",
              boxShadow: "0 1px 3px rgba(16, 31, 56, 0.06)",
            }}
          >
            {/* Ambient orange glow, breathing softly behind the content */}
            <motion.span
              aria-hidden="true"
              className="absolute -top-10 -right-10 w-32 h-32 rounded-full pointer-events-none"
              style={{
                background: "radial-gradient(circle, #E6521F 0%, rgba(230,82,31,0) 70%)",
              }}
              variants={glowVariants}
              animate="animate"
            />

            {/* Accent edge that draws in on hover */}
            <motion.span
              aria-hidden="true"
              className="absolute top-0 left-0 w-[3px]"
              style={{ backgroundColor: "#E6521F", height: "0%" }}
              initial={false}
              whileHover={{ height: "100%" }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            />

            {/* Number badge */}
            <div
              className="relative w-9 h-9 rounded-full flex items-center justify-center text-white text-sm font-bold mb-4"
              style={{ backgroundColor: "#E6521F" }}
            >
              {item.num}
            </div>
            <h3 className="relative font-bold text-base mb-2" style={{ color: COLORS.ink }}>
              {item.title}
            </h3>
            <p className="relative text-sm leading-relaxed" style={{ color: "#5B6478" }}>
              {item.desc}
            </p>
          </motion.div>
        ))}
      </motion.div>

      {/* Animated Bottom Call to Action Text */}
      <motion.p
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.8 }}
        variants={fadeInUp}
        className="text-center font-semibold text-base mt-12"
        style={{ color: COLORS.ink }}
      >
        Let SeaChange Solutions be your partner in building a smarter, safer, and more capable organization.
      </motion.p>
    </div>
  </section>
);

export default WhyChooseSection;