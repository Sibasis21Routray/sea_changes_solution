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

// Dark background service block (conditional directions with animations)
const ServiceDark = ({ title, description, imgSrc, imgAlt, imageLeft = false }) => (
  <section className="bg-[#0B1628] py-16 px-6 overflow-hidden">
    <motion.div 
      className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-14"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={staggerContainer}
    >
      {imageLeft ? (
        <>
          <motion.div variants={fadeInLeft} className="flex-shrink-0">
            <CircleImage src={imgSrc} alt={imgAlt} />
          </motion.div>
          <motion.div variants={fadeInRight} className="flex-1">
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
        </>
      ) : (
        <>
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
        </>
      )}
    </motion.div>
  </section>
);

const ServiceSections = () => (
  <>
    {/* First Software Development - Dark with Image Right */}
    <ServiceDark
      title="Software Development"
      description="We design and build custom software solutions that address specific business challenges—whether it's a streamlined internal process or a customer-facing application. Our development approach is agile, scalable, and tailored to your exact needs."
      imgSrc="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&q=80"
      imgAlt="Developer coding on monitor"
      imageLeft={false}
    />
    
    {/* Second Software Development - Light with Image Left */}
    <ServiceLight
      title="Web Development & Design"
      description="Your website is often your first impression—we make it count. From sleek corporate sites to complex web platforms, we deliver responsive, intuitive, and conversion-optimized websites that blend design excellence with robust functionality."
      imgSrc="/technology-services/Web-Development-Design.webp"
      imgAlt="Developer coding on monitor"
    />
    
    {/* Mobile App Development - Dark with Image Right */}
    <ServiceDark
      title="Mobile App Development"
      description="Reach your audience wherever they are. We develop high-performance mobile applications for iOS and Android, built with user experience, security, and future scalability in mind."
      imgSrc="/technology-services/Mobile-App-Development.webp"
      imgAlt="Mobile App Development concept"
      imageLeft={false}
    />
    
    {/* System Integration - Light with Image Left */}
    <ServiceLight
      title="System Integration & API Development"
      description="We help unify your digital ecosystem by integrating systems and building custom APIs that allow platforms to communicate efficiently. This improves data flow, eliminates silos, and enhances overall operational efficiency."
      imgSrc="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&q=80"
      imgAlt="API Development concept"
    />
    
    {/* Cloud Infrastructure - Dark with Image Right */}
    <ServiceDark
      title="Cloud Infrastructure & DevOps"
      description="Accelerate development and ensure system reliability with our cloud and DevOps solutions. We offer cloud architecture design, CI/CD automation, monitoring, and maintenance to keep your digital operations smooth, secure, and scalable."
      imgSrc="/technology-services/Cloud-Infrastructure-DevOps.webp"
      imgAlt="DevOps"
      imageLeft={false}
    />
  </>
);

export default ServiceSections;