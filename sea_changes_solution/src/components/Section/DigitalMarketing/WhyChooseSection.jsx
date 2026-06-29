import React from "react";
import { motion } from "framer-motion";

const reasons = [
  {
    num: 1,
    title: "Experienced Team",
    desc: "Our team of digital marketing professionals has years of experience in crafting successful campaigns.",
  },
  {
    num: 2,
    title: "Comprehensive Services",
    desc: "We offer a complete suite of digital marketing solutions under one roof, saving you time and effort.",
  },
  {
    num: 3,
    title: "Client-Centric Approach",
    desc: "We prioritize your business goals and work closely with you to achieve the desired outcomes.",
  },
  {
    num: 4,
    title: "Proven Track Record",
    desc: "With a history of successful campaigns, we have helped numerous businesses thrive in the digital space.",
  },
  {
    num: 5,
    title: "Result-Oriented Focus",
    desc: "Our goal is to deliver measurable results that contribute directly to your business growth.",
  },
  {
    num: 6,
    title: "Affordable Solutions",
    desc: "We offer competitive pricing without compromising on quality, ensuring value for your investment.",
  },
];

// ============ ANIMATION VARIANTS ============
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Delays the transition of each sequential card
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

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: "easeOut" } 
  }
};

const WhyChooseSection = () => (
  <section className="bg-white py-16 px-6 overflow-hidden">
    <div className="max-w-7xl mx-auto">
      {/* Animated Section Heading */}
      <motion.h2 
        initial={{ opacity: 0, y: -15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        className="text-[#0B1F3A] text-3xl font-bold mb-10"
      >
        Why Choose SEACHANGE Solutions?
      </motion.h2>

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
            whileHover={{ y: -5, scale: 1.01 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="bg-[#F7FAFD] rounded-2xl p-7 shadow-sm border border-gray-100/50"
          >
            {/* Number Badge */}
            <div className="w-9 h-9 rounded-full bg-[#4B6FE4] flex items-center justify-center text-white text-sm font-bold mb-4">
              {item.num}
            </div>
            <h3 className="text-[#0B1F3A] font-bold text-base mb-2">{item.title}</h3>
            <p className="text-[#4A6280] text-sm leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Animated Bottom Call to Action Text */}
      <motion.p 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.8 }}
        variants={fadeInUp}
        className="text-center text-[#0B1F3A] font-semibold text-base mt-12 max-w-4xl mx-auto leading-relaxed"
      >
        Partner with SEACHANGE Solutions to elevate your digital presence and drive meaningful results. Let us craft a strategy that not only meets but exceeds your expectations, helping you achieve long-term success in Sri Lanka's evolving digital market.
      </motion.p>
    </div>
  </section>
);

export default WhyChooseSection;