import React from "react";
import { motion } from "framer-motion";

const playbook = [
  {
    num: 1,
    title: "Needs-Based Customization",
    highlighted: "Customization",
    desc: "We tailor every program to your industry, team size, location, and learning goals.",
  },
  {
    num: 2,
    title: "Bite-Sized, Engaging Learning",
    highlighted: "Engaging Learning",
    desc: "Our content is designed for real-world application, with short, interactive modules that stick.",
  },
  {
    num: 3,
    title: "Tech-Driven Efficiency",
    highlighted: "Tech-Driven",
    desc: "We use modern technologies to automate tracking, assessments, and progress reporting.",
  },
  {
    num: 4,
    title: "Compliance Confidence",
    highlighted: "Compliance",
    desc: "We stay ahead of legal and regulatory shifts so your teams are always up to date.",
  },
  {
    num: 5,
    title: "Integrated Learning Culture",
    highlighted: "Learning Culture",
    desc: "Our programs build a foundation for continuous learning across all levels of the organization.",
  },
  {
    num: 6,
    title: "Scalable for Growth",
    highlighted: "Scalable",
    desc: "Whether you're a startup or regional enterprise, our solutions scale with your business needs.",
  },
];

// ============ ANIMATION VARIANTS ============
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12, // Time delay between each card's animation
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
              {/* Badge/Number Ring */}
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