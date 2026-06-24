import React from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const features = [
  { title: "Local Expertise. International Best Practices." },
  { title: "Comprehensive Solutions" },
  { title: "Client-Centric Focus" },
];

export default function AboutWhyUs() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });
  const [isHoveringImage, setIsHoveringImage] = useState(false);
  const [count, setCount] = useState(0);
  const targetYear = 2014;

  // Counter animation for year
  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 2000;
      const step = 20;
      const increment = targetYear / (duration / step);
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= targetYear) {
          setCount(targetYear);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, step);
      
      return () => clearInterval(timer);
    }
  }, [isInView]);

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.7, ease: "easeOut" } 
    }
  };

  const fadeInDown = {
    hidden: { opacity: 0, y: -30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.7, ease: "easeOut" } 
    }
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { duration: 0.7, ease: "easeOut" } 
    }
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { duration: 0.7, ease: "easeOut" } 
    }
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      transition: { duration: 0.7, ease: "easeOut" } 
    }
  };

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  // Floating animations
  const floatAnimation = {
    y: [0, -15, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  const floatAnimationSlow = {
    y: [0, -10, 0],
    transition: {
      duration: 5,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  const pulseAnimation = {
    scale: [1, 1.05, 1],
    opacity: [0.7, 1, 0.7],
    transition: {
      duration: 2.5,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  const shimmerAnimation = {
    x: ['-100%', '200%'],
    transition: {
      duration: 3.5,
      repeat: Infinity,
      ease: "linear",
      delay: 0.5
    }
  };

  const rotateSlow = {
    rotate: [0, 360],
    transition: {
      duration: 60,
      repeat: Infinity,
      ease: "linear"
    }
  };

  const rotateMedium = {
    rotate: [0, 360],
    transition: {
      duration: 40,
      repeat: Infinity,
      ease: "linear"
    }
  };

  // Background gradient animation
  const gradientAnimation = {
    background: [
      'radial-gradient(circle at 80% 20%, rgba(255, 90, 31, 0.03), transparent 40%)',
      'radial-gradient(circle at 20% 80%, rgba(91, 99, 211, 0.03), transparent 40%)',
      'radial-gradient(circle at 50% 50%, rgba(255, 90, 31, 0.05), transparent 40%)',
      'radial-gradient(circle at 80% 20%, rgba(255, 90, 31, 0.03), transparent 40%)',
    ],
    transition: {
      duration: 12,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  // Decorative diagonal stripe animation
  const stripeAnimation = {
    x: [0, 20, 0],
    y: [0, -10, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  return (
    <motion.section 
      ref={sectionRef}
      className="py-24 bg-white relative overflow-hidden"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {/* Animated gradient background */}
      <motion.div
        animate={gradientAnimation}
        className="absolute inset-0 pointer-events-none"
      />

      {/* Animated diagonal stripe decoration */}
      <motion.div
        animate={stripeAnimation}
        className="absolute top-0 right-0 w-32 h-44 pointer-events-none overflow-hidden opacity-70"
      >
        <svg viewBox="0 0 120 160" className="w-full h-full">
          <polygon points="120,0 120,40 70,0" fill="#E8EAF6" />
          <polygon points="120,40 120,80 90,80 70,40" fill="#FF5A1F" opacity="0.5" />
          <polygon points="120,80 120,120 90,120 90,80" fill="#0B1F3A" opacity="0.85" />
        </svg>
      </motion.div>

      {/* Decorative particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full"
            style={{
              backgroundColor: i % 3 === 0 ? '#FF5A1F' : i % 3 === 1 ? '#5B63D3' : '#0B1F3A',
              opacity: 0.05 + Math.random() * 0.1,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -40 - Math.random() * 60],
              x: [0, (Math.random() - 0.5) * 30],
              opacity: [0.05, 0.15, 0.05],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 4,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Visual side */}
          <motion.div 
            variants={fadeInLeft}
            className="relative order-2 lg:order-1 flex items-center justify-center w-full"
          >
            {/* Animated orange background blob */}
            <motion.div
              animate={floatAnimation}
              className="absolute left-0 bottom-4 w-64 h-64 bg-[#FF5A1F] rounded-[40%_60%_55%_45%/45%_40%_60%_55%] opacity-90 pointer-events-none z-0"
              style={{ transform: "rotate(-8deg)" }}
            />

            {/* Additional decorative blobs */}
            <motion.div
              animate={rotateSlow}
              className="absolute -right-8 top-12 w-32 h-32 border border-[#FF5A1F]/10 rounded-full pointer-events-none"
            />
            <motion.div
              animate={rotateMedium}
              className="absolute -left-8 bottom-20 w-24 h-24 border border-[#5B63D3]/10 rounded-full pointer-events-none"
            />
            <motion.div
              animate={pulseAnimation}
              className="absolute right-0 top-1/2 w-16 h-16 bg-[#5B63D3]/5 rounded-full blur-2xl pointer-events-none"
            />

            {/* Image frame */}
            <motion.div 
              className="relative w-full max-w-[500px] aspect-[54/46] z-10 drop-shadow-[0_15px_35px_rgba(0,0,0,0.15)]"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4 }}
              onMouseEnter={() => setIsHoveringImage(true)}
              onMouseLeave={() => setIsHoveringImage(false)}
            >
              <motion.img
                src="/aboutus/bpo-banner.png"
                alt="SeaChange business collaboration and modern office infrastructure"
                className="w-full h-full object-contain block"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6 }}
                onError={(e) => {
                  console.error("Image failed to render:", e.currentTarget.src);
                }}
              />
              
              {/* Shimmer overlay */}
              <motion.div
                animate={shimmerAnimation}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none"
              />
              
              {/* Image hover overlay */}
              <motion.div
                animate={{
                  opacity: isHoveringImage ? 0.1 : 0
                }}
                className="absolute inset-0 bg-gradient-to-t from-[#FF5A1F]/20 via-[#5B63D3]/10 to-transparent pointer-events-none"
              />
            </motion.div>

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="absolute -right-4 top-10 bg-white shadow-xl border border-[#FF5A1F]/20 rounded-full px-4 py-2 z-20"
            >
              <span className="text-[#0B1F3A] text-sm font-semibold flex items-center gap-2">
                <span className="w-2 h-2 bg-[#FF5A1F] rounded-full animate-pulse" />
                Trusted Partner
              </span>
            </motion.div>
          </motion.div>

          {/* Text side */}
          <motion.div 
            variants={fadeInRight}
            className="order-1 lg:order-2"
          >
            <motion.div variants={staggerChildren}>
              <motion.h2 
                variants={fadeInUp}
                className="text-4xl sm:text-5xl font-black text-[#0B1F3A] leading-tight mb-6"
              >
                Delighting Customers in{" "}
                <motion.span 
                  className="text-[#5B63D3] inline-block"
                  whileHover={{ 
                    scale: 1.05,
                    textShadow: "0 0 30px rgba(91, 99, 211, 0.3)"
                  }}
                >
                  South East Asia &amp; Sri Lanka
                </motion.span>{" "}
                since{" "}
                <motion.span
                  className="text-[#FF5A1F] inline-block"
                  whileHover={{ scale: 1.1 }}
                >
                  {count}
                </motion.span>
              </motion.h2>

              <motion.p 
                variants={fadeInUp}
                className="text-[#5B6478] text-base leading-relaxed mb-8"
              >
                SeaChange Solutions is a trusted partner in Southeast Asia and Sri
                Lanka, empowering businesses to expand, establish a strong presence,
                and thrive in today&apos;s fast-evolving landscape through tailored
                learning, compliance and digital marketing solutions.
              </motion.p>

              <motion.div 
                variants={fadeInUp}
                className="border-t border-gray-200 relative mb-8"
              >
                <motion.span 
                  initial={{ scaleX: 0 }}
                  animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  className="absolute -top-px left-0 w-12 h-[2px] bg-[#5B63D3] origin-left"
                />
              </motion.div>

              <motion.p 
                variants={fadeInUp}
                className="text-[#5B63D3] font-bold italic text-lg uppercase tracking-wide mb-7"
                whileHover={{ 
                  letterSpacing: '0.15em',
                  transition: { duration: 0.3 }
                }}
              >
                SeaChange
              </motion.p>

              {/* Features list */}
              <motion.div 
                variants={staggerChildren}
                className="flex flex-col gap-5 mb-10"
              >
                {features.map((f, index) => (
                  <motion.div 
                    key={f.title} 
                    variants={fadeInLeft}
                    className="flex items-center gap-4 group"
                    whileHover={{ x: 10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div 
                      className="flex-shrink-0 w-7 h-7 bg-[#5B63D3] rounded-full flex items-center justify-center"
                      whileHover={{ 
                        scale: 1.2,
                        backgroundColor: "#FF5A1F",
                        rotate: 360
                      }}
                      transition={{ duration: 0.4 }}
                    >
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </motion.div>
                    <h4 className="text-[#0B1F3A] font-semibold text-base group-hover:text-[#5B63D3] transition-colors duration-300">
                      {f.title}
                    </h4>
                  </motion.div>
                ))}
              </motion.div>

              {/* CTA Button */}
              <motion.div
                variants={fadeInUp}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  to="/about"
                  className="inline-flex items-center gap-3 bg-[#5B63D3] text-white font-bold px-7 py-3.5 rounded-full hover:bg-[#4A52C2] transition-all hover:-translate-y-0.5 duration-200 group relative overflow-hidden"
                >
                  {/* Button shimmer */}
                  <motion.span
                    animate={shimmerAnimation}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none"
                  />
                  <span className="relative z-10">Learn More</span>
                  <motion.span 
                    className="w-7 h-7 bg-white rounded-full flex items-center justify-center text-[#FF5A1F] relative z-10"
                    whileHover={{ rotate: 45 }}
                    transition={{ duration: 0.3 }}
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
                    </svg>
                  </motion.span>
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>

        </div>
      </div>

      {/* Bottom decorative line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
        transition={{ delay: 0.8, duration: 1 }}
        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#5B63D3]/30 to-transparent"
      />
    </motion.section>
  );
}