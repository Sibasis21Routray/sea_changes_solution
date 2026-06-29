import React from "react";
import { motion } from "framer-motion";

const reasons = [
  {
    num: 1,
    title: "Full-Stack Expertise",
    desc: "From software and mobile apps to responsive websites and backend systems, we offer end-to-end development across the full technology stack—so you don’t have to juggle multiple vendors.",
  },
  {
    num: 2,
    title: "Custom-Built, Business-Ready",
    desc: "We build solutions tailored to your unique business goals—no templates, no shortcuts. Whether it’s a customer portal or enterprise integration, we deliver technology that actually fits.",
  },
  {
    num: 3,
    title: "Scalable & Cloud-Optimized",
    desc: "We design for scale from day one. Our cloud-first DevOps practices ensure your applications are fast, secure, and ready to grow with your business.",
  },
  {
    num: 4,
    title: "Seamless System Integration",
    desc: "Your systems should talk to each other—so we make it happen. From APIs to ERP integrations, we ensure your tools work together, not in silos.",
  },
  {
    num: 5,
    title: "Design Meets Functionality",
    desc: "We blend intuitive UI/UX design with powerful backend performance to deliver solutions that are both beautiful and built to perform.",
  },
  {
    num: 6,
    title: "Ongoing Support & Maintenance",
    desc: "Our job doesn’t end at launch. We provide continuous technical support, feature enhancements, and infrastructure monitoring to keep your systems running smoothly and securely.",
  },
];

// ============ ANIMATION VARIANTS ============
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Delays the entry of each card sequentially
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

      {/* Grid container managing the staggered children elements */}
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
            {/* Number Indicator */}
            <div className="w-9 h-9 rounded-full bg-[#4B6FE4] flex items-center justify-center text-white text-sm font-bold mb-4">
              {item.num}
            </div>
            <h3 className="text-[#0B1F3A] font-bold text-base mb-2">{item.title}</h3>
            <p className="text-[#4A6280] text-sm leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Animated Closing Summary Paragraph */}
      <motion.p 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.8 }}
        variants={fadeInUp}
        className="text-center text-[#0B1F3A] font-semibold text-base mt-12 max-w-4xl mx-auto leading-relaxed"
      >
        Partner with SEACHANGE Solutions to harness the power of technology and accelerate your business transformation. Let us build the digital foundation your business needs to thrive today and into the future.
      </motion.p>
    </div>
  </section>
);

export default WhyChooseSection;