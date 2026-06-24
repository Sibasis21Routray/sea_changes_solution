import React from "react";
import { motion } from "framer-motion";

const playbook = [
  {
    num: 1,
    title: "Client-Centered Solutions",
    highlighted: "Client-Centered",
    desc: "We start with a collaborative discovery phase to deeply understand your business objectives, user needs, technical environment, and scalability expectations. Whether you’re building a product or modernizing your digital presence, we align on vision and scope.",
  },
  {
    num: 2,
    title: "Agile Development",
    highlighted: "Agile",
    desc: "Our team transforms your requirements into structured design—UX/UI wireframes, system architecture, API structures, and workflows. The focus is on usability, performance, and future-readiness from day one.",
  },
  {
    num: 3,
    title: "Scalable Architecture",
    highlighted: "Scalable",
    desc: "Using agile methodologies, we begin development across your chosen platforms—web, mobile, or custom software. Our code is clean, secure, and scalable, ensuring seamless integration with your existing systems.",
  },
  {
    num: 4,
    title: "Security First",
    highlighted: "Security",
    desc: "We connect your systems through API integrations, data flows, and automation pipelines. Once ready, we deploy across secure, scalable cloud infrastructure—optimized for performance, compliance, and uptime.",
  },
  {
    num: 5,
    title: "Continuous Support",
    highlighted: "Continuous",
    desc: "Before launch, we rigorously test across devices, browsers, and user roles—fine-tuning for speed, security, and stability. With feedback loops in place, we ensure a smooth go-live experience.",
  },
  {
    num: 6,
    title: "Transparent Process",
    highlighted: "Transparent",
    desc: "Post-launch, we provide ongoing maintenance, DevOps support, and enhancements. From security patches to feature rollouts, we keep your digital assets evolving as your business grows.",
  },
];

// ============ ANIMATION VARIANTS ============
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12, // Progressively staggers card animations as they enter viewport
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
      {/* Animated Section Title */}
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