import React from "react";
import { motion } from "framer-motion";
import COLORS from "../../Common/Color";

// ============ ANIMATION VARIANTS ============
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

/**
 * PlaybookSection
 * Props:
 *  - heading: string (default "Our Playbook")
 *  - items: array of { num, title, highlighted, desc } (required)
 *
 * Layout: a sequence of steps rendered as cards on a white background,
 * joined by a connecting thread. Cards sit one shade below pure white
 * (a soft off-white) so they read as raised surfaces against the light field.
 */
const PlaybookSection = ({ heading = "Our Playbook", items = [] }) => (
  <section style={{ backgroundColor: "#FFFFFF", position: "relative" }} className="py-16 px-6 overflow-hidden">
    <div className="max-w-7xl mx-auto relative z-10">
      <div className="relative inline-block mb-10">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold"
          style={{ color: COLORS.ink, fontFamily: "'Space Grotesk', sans-serif" }}
        >
          {heading}
        </motion.h2>
        <motion.span
          aria-hidden="true"
          className="absolute left-0 -bottom-2 h-1 rounded-full"
          style={{ backgroundColor: COLORS.signal, transformOrigin: "left" }}
          initial={{ scaleX: 0, width: "100%" }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        />
      </div>

      <motion.div
        className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={containerVariants}
      >
        {/* Connecting thread, drawn behind the cards, only meaningful at lg+ where the grid reads as a path */}
        <motion.div
          aria-hidden="true"
          className="hidden lg:block absolute pointer-events-none"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.8, ease: "easeInOut", delay: 0.2 }}
        />

        {items.map((item) => {
          const parts = item.title.split(item.highlighted);
          return (
            <motion.div
              key={item.num}
              variants={cardVariants}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="relative z-10 group p-7 overflow-hidden"
              style={{
                backgroundColor: "#F7F8FB",
                border: "1px solid #E3E6EF",
                borderRadius: "6px",
                boxShadow: "0 1px 3px rgba(16, 31, 56, 0.06)",
              }}
            >
              {/* Accent edge that draws in on hover, top-left to bottom */}
              <motion.span
                aria-hidden="true"
                className="absolute top-0 left-0 w-[3px]"
                style={{ backgroundColor: COLORS.signal, height: "0%" }}
                initial={false}
                whileHover={{ height: "100%" }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              />

              {/* Small ambient pulse dot, orange, top-right of each card */}
              <motion.span
                aria-hidden="true"
                className="absolute top-4 right-4 w-2 h-2 rounded-full"
                style={{ backgroundColor: "#E8804A" }}
                animate={{ opacity: [0.3, 0.9, 0.3], scale: [1, 1.3, 1] }}
                transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut", delay: item.num * 0.2 }}
              />

              <h3
                className="relative font-bold text-lg mb-2"
                style={{ color: COLORS.ink, fontFamily: "'Space Grotesk', sans-serif" }}
              >
                {parts[0]}
                <span style={{ color: COLORS.signal }}>{item.highlighted}</span>
                {parts[1]}
              </h3>
              <p className="relative text-[15px] leading-relaxed" style={{ color: "#5B6478" }}>
                {item.desc}
              </p>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  </section>
);

export default PlaybookSection;