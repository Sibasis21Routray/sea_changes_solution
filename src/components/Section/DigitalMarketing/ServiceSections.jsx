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
      title="Branding"
      description="Strong branding is key to standing out in today's competitive digital landscape. We help businesses develop a unique brand identity that resonates with their target audience. From logo design and visual assets to crafting compelling brand stories, we create cohesive branding that leaves a lasting impression across all touchpoints."
      imgSrc="https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&q=80"
      imgAlt="Designers at work"
    />
    <ServiceDark
      title="SEO (Search Engine Optimization)"
      description="Our SEO services are focused on improving your website's visibility in search engines, driving organic traffic, and increasing your online reach. We perform in-depth keyword research, on-page optimization, and technical audits to ensure your website ranks higher and attracts the right audience."
      imgSrc="/digital-marketing/SEO.webp"
      imgAlt="Businessman using a laptop"
    />
    <ServiceLight
      title="Performance Marketing"
      description="Performance marketing is all about results, and we design data-driven campaigns to maximize ROI. Whether it's Google Ads, social media advertising, or display campaigns, we create, monitor, and optimize ads that drive conversions while staying within budget."
      imgSrc="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80"
      imgAlt="Man working with analytics"
    />
    <ServiceDark
      title="Web Development"
      description="A strong online presence starts with a well-designed, functional website. Our web development services cover everything from designing user-friendly interfaces to ensuring fast, responsive, and secure websites. We build custom websites that enhance user experience and support your business objectives."
      imgSrc="/digital-marketing/webdevlopment.webp"
      imgAlt="Developer explaining details in code"
    />
    <ServiceLight
      title="Social Media Marketing"
      description="Engaging with your audience on social media is crucial for brand visibility and growth. We offer social media management and content creation services to help you maintain a consistent, engaging presence on platforms like Facebook, Instagram, LinkedIn, and Twitter, building stronger relationships with your customers."
      imgSrc="/digital-marketing/socialmediamarketing.webp"
      imgAlt="Friends using social media"
    />
  </>
);

export default ServiceSections;