import React from "react";
import { motion } from "framer-motion";

// ============ ANIMATION VARIANTS ============
const fadeInLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { duration: 0.7, ease: "easeOut" } 
  }
};

const fadeInRight = {
  hidden: { opacity: 0, x: 40 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { duration: 0.7, ease: "easeOut" } 
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    }
  }
};

// Reusable circular image with red blob quote mark
// FIXED: Changed imgAlt to alt to match the destructured prop
const CircleImage = ({ src, alt }) => (
  <div className="relative flex-shrink-0 w-64 h-64 md:w-80 md:h-80">
    <div className="w-full h-full rounded-full overflow-hidden border-4 border-white shadow-xl">
      <motion.img 
        src={src} 
        alt={alt} 
        className="w-full h-full object-cover" 
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.4 }}
      />
    </div>
    {/* Red blob with quote mark */}
    <motion.div
      className="absolute -bottom-4 -left-4 w-20 h-20 flex items-center justify-center"
      style={{
        background: "#E84545",
        borderRadius: "60% 40% 70% 30% / 50% 60% 40% 50%",
      }}
      whileHover={{ rotate: -10, scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300, damping: 15 }}
    >
      <span className="text-white text-4xl font-serif leading-none select-none">&ldquo;</span>
    </motion.div>
  </div>
);

// Light background service block (image left, text right)
const ServiceLight = ({ title, description, imgSrc, imgAlt }) => (
  <section className="bg-white py-16 px-6 overflow-hidden">
    <motion.div 
      className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-14"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={staggerContainer}
    >
      <motion.div variants={fadeInLeft} className="flex-shrink-0">
        <CircleImage src={imgSrc} alt={imgAlt} />
      </motion.div>
      <motion.div variants={fadeInRight} className="flex-1">
        <h2 className="text-[#0B1F3A] text-2xl md:text-3xl font-bold mb-3">{title}</h2>
        <div className="w-12 h-0.5 bg-[#4B6FE4] mb-5" />
        <p className="text-[#4A6280] text-base leading-relaxed mb-7">{description}</p>
        <motion.a
          href="/contact"
          className="inline-flex items-center gap-2 bg-[#4B6FE4] hover:bg-[#3a5fd4] text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-colors duration-200"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.98 }}
        >
          Find out More
          <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center text-xs">→</span>
        </motion.a>
      </motion.div>
    </motion.div>
  </section>
);

// Dark background service block (text left, image right)
const ServiceDark = ({ title, description, imgSrc, imgAlt }) => (
  <section className="bg-[#0B1628] py-16 px-6 overflow-hidden">
    <motion.div 
      className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-14"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={staggerContainer}
    >
      <motion.div variants={fadeInLeft} className="flex-1 order-2 md:order-1">
        <h2 className="text-white text-2xl md:text-3xl font-bold mb-3">{title}</h2>
        <div className="w-12 h-0.5 bg-[#4B6FE4] mb-5" />
        <p className="text-gray-300 text-base leading-relaxed mb-7">{description}</p>
        <motion.a
          href="/contact"
          className="inline-flex items-center gap-2 bg-[#4B6FE4] hover:bg-[#3a5fd4] text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-colors duration-200"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.98 }}
        >
          Find out More
          <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center text-xs">→</span>
        </motion.a>
      </motion.div>
      <motion.div variants={fadeInRight} className="order-1 md:order-2 flex-shrink-0">
        <CircleImage src={imgSrc} alt={imgAlt} />
      </motion.div>
    </motion.div>
  </section>
);

const ServiceSections = () => (
  <>
    <ServiceLight
      title="Compliance and Learning Management (CALM) Platform"
      description="Our scalable and user-friendly Compliance and Learning Management (CALM) platform makes it easy to manage, track, and evaluate training across teams and sites. With built-in multilingual capabilities, we ensure your content is accessible and relevant to diverse workforces across Southeast Asia and Sri Lanka. We provide implementation, content migration, system customization, and ongoing support to ensure seamless integration into your organization."
      imgSrc="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80"
      imgAlt="Woman working on laptop"
    />
    <ServiceDark
      title="Policy & Code of Conduct Programs"
      description="We help businesses roll out internal policies and codes of conduct with clarity and consistency. Through engaging digital learning and structured rollouts, we support employee understanding and adherence to your company's ethical framework."
      imgSrc="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80"
      imgAlt="Two colleagues comparing information"
    />
    <ServiceLight
      title="Country-Specific Cultural & Legal Training"
      description="We offer tailored training for expatriates and international teams on local laws, workplace culture, and operational do's and don't—helping your workforce adapt, integrate, and contribute effectively from the start."
      imgSrc="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&q=80"
      imgAlt="Diverse group of friends"
    />
    <ServiceDark
      title="Onboarding & Orientation Modules"
      description="Our onboarding programs introduce new hires to your company's culture, values, and expectations in a structured, engaging, and compliant manner—accelerating productivity and creating a unified employee experience from day one."
      imgSrc="https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80"
      imgAlt="Business colleagues in a lobby"
    />
    <ServiceLight
      title="Performance & Skills Development Programs"
      description="Beyond compliance, we design training focused on leadership, communication, customer service, and role-based skills development to unlock your team's full potential and improve overall performance."
      imgSrc="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&q=80"
      imgAlt="Young woman giving a lecture"
    />
  </>
);

export default ServiceSections;