import React from "react";
import { motion } from "framer-motion";

const playbook = [
  {
    num: 1,
    title: "Tailored Strategies",
    highlighted: "Tailored",
    desc: "We design customized marketing plans that align with your specific business goals and industry needs.",
  },
  {
    num: 2,
    title: "Content That Connects",
    highlighted: "Connects",
    desc: "Our content is designed to engage, inform, and inspire your target audience across multiple channels.",
  },
  {
    num: 3,
    title: "Data-Driven Decisions",
    highlighted: "Data-Driven",
    desc: "Using analytics and insights, we continuously monitor performance to optimize campaigns for maximum impact.",
  },
  {
    num: 4,
    title: "Omnichannel Approach",
    highlighted: "Omnichannel",
    desc: "We create seamless marketing experiences by integrating various digital channels for a unified brand presence.",
  },
  {
    num: 5,
    title: "Continuous Improvement",
    highlighted: "Continuous",
    desc: "Our team stays ahead of trends and adjusts strategies to keep your business relevant in a fast-paced digital world.",
  },
  {
    num: 6,
    title: "Transparent Communication",
    highlighted: "Transparent",
    desc: "We provide regular reports and updates, ensuring you are always informed about the progress of your campaigns.",
  },
];

// ============ ANIMATION VARIANTS ============
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12, // Staggers the initial entrance animation for each sequential card
    },
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

const PlaybookSection = () => (
  <section className="bg-[#0B1628] py-16 px-6 overflow-hidden">
    <div className="max-w-7xl mx-auto">
      {/* Animated Section Heading */}
      <motion.h2 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        className="text-white text-3xl font-bold mb-10"
      >
        Our Playbook
      </motion.h2>

      {/* Grid container orchestrating child card delays */}
      <motion.div 
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={containerVariants}
      >
        {playbook.map((item) => {
          const parts = item.title.split(item.highlighted);
          return (
            <motion.div
              key={item.num}
              variants={cardVariants}
              whileHover={{ y: -6, scale: 1.01 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="bg-[#F7FAFD] rounded-2xl p-7 shadow-lg"
            >
              <div className="w-9 h-9 rounded-full bg-[#0B1F3A] flex items-center justify-center text-white text-sm font-bold mb-4">
                {item.num}
              </div>
              <h3 className="text-[#0B1F3A] font-bold text-base mb-2">
                {parts[0]}
                <span className="text-[#4B6FE4]">{item.highlighted}</span>
                {parts[1]}
              </h3>
              <p className="text-[#4A6280] text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  </section>
);

export default PlaybookSection;