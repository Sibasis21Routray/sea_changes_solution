import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const features = [
  {
    title: "Local Expertise. International Best Practices.",
    icon: "🌍",
  },
  {
    title: "Comprehensive Solutions",
    icon: "📊",
  },
  {
    title: "Client-Centric Focus",
    icon: "🎯",
  },
];

export default function WhyUs() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });
  const [isHoveringImage, setIsHoveringImage] = useState(false);

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
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
    opacity: [0.9, 1, 0.9],
    transition: {
      duration: 2.5,
      repeat: Infinity,
      ease: "easeInOut"
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

  const shimmerAnimation = {
    x: ['-100%', '200%'],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "linear",
      delay: 1
    }
  };

  // Background gradient animation
  const gradientAnimation = {
    background: [
      'radial-gradient(circle at 20% 30%, rgba(255, 90, 31, 0.05), transparent 50%)',
      'radial-gradient(circle at 80% 70%, rgba(91, 99, 211, 0.05), transparent 50%)',
      'radial-gradient(circle at 50% 50%, rgba(255, 90, 31, 0.08), transparent 50%)',
      'radial-gradient(circle at 20% 30%, rgba(255, 90, 31, 0.05), transparent 50%)',
    ],
    transition: {
      duration: 12,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  // Counter animation for year
  const [count, setCount] = useState(0);
  const targetYear = 2014;

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

  return (
    <motion.section 
      ref={sectionRef}
      className="py-24 bg-[#06070D] relative overflow-hidden"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {/* Animated gradient background */}
      <motion.div
        animate={gradientAnimation}
        className="absolute inset-0 pointer-events-none"
      />

      {/* Decorative particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full"
            style={{
              backgroundColor: i % 3 === 0 ? '#FF5A1F' : i % 3 === 1 ? '#5B63D3' : '#FFFFFF',
              opacity: 0.1 + Math.random() * 0.2,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30 - Math.random() * 50],
              x: [0, (Math.random() - 0.5) * 30],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 3 + Math.random() * 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Visual side */}
          <motion.div 
            variants={fadeInLeft}
            className="relative order-2 lg:order-1 flex items-center justify-center min-h-[480px]"
          >
            {/* Animated orange blob shapes */}
            <motion.div
              animate={floatAnimation}
              className="absolute left-0 bottom-10 w-72 h-72 bg-[#FF5A1F] rounded-[40%_60%_55%_45%/45%_40%_60%_55%] opacity-90"
              style={{ transform: "rotate(-8deg)" }}
            />
            
            <motion.div
              animate={rotateSlow}
              className="absolute left-6 bottom-4 w-56 h-56 border border-white/20 rounded-[45%_55%_50%_50%/55%_45%_55%_45%]"
              style={{ transform: "rotate(10deg)" }}
            />

            {/* Additional decorative elements */}
            <motion.div
              animate={pulseAnimation}
              className="absolute -right-8 top-20 w-20 h-20 bg-[#5B63D3]/20 rounded-full blur-2xl"
            />
            <motion.div
              animate={floatAnimationSlow}
              className="absolute -left-12 top-1/2 w-16 h-16 bg-[#FF5A1F]/20 rounded-full blur-2xl"
            />

            {/* Pill-shaped image with animations */}
            <motion.div 
              className="relative w-[340px] h-[480px] rounded-[170px] overflow-hidden border-2 border-[#FF5A1F]/70 shadow-2xl"
              whileHover={{ scale: 1.02, rotate: 1 }}
              transition={{ duration: 0.4 }}
              onMouseEnter={() => setIsHoveringImage(true)}
              onMouseLeave={() => setIsHoveringImage(false)}
            >
              <motion.img
                src="/homepage/bpo-image.png"
                alt="SeaChange office building"
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.08 }}
                transition={{ duration: 0.6 }}
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                  e.currentTarget.nextSibling.style.display = "flex";
                }}
              />
              
              {/* Shimmer overlay */}
              <motion.div
                animate={shimmerAnimation}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none"
              />
              
              {/* Image hover overlay */}
              <motion.div
                animate={{
                  opacity: isHoveringImage ? 0.2 : 0
                }}
                className="absolute inset-0 bg-gradient-to-t from-[#FF5A1F]/40 via-[#5B63D3]/20 to-transparent pointer-events-none"
              />

              {/* Fallback gradient placeholder */}
              <div
                className="absolute inset-0 hidden items-center justify-center bg-gradient-to-br from-[#0B3D6B] via-[#0B5EAB] to-[#1A2A4A]"
                style={{ display: "none" }}
              />
            </motion.div>

            {/* Floating badges */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="absolute -right-4 top-12 bg-[#06070D]/90 backdrop-blur-sm border border-[#FF5A1F]/30 rounded-full px-4 py-2 shadow-xl"
            >
              <span className="text-white text-sm font-semibold flex items-center gap-2">
                <span className="w-2 h-2 bg-[#FF5A1F] rounded-full animate-pulse" />
                Trusted Since 2014
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
              transition={{ delay: 1.2, duration: 0.5 }}
              className="absolute -left-4 bottom-20 bg-[#06070D]/90 backdrop-blur-sm border border-[#5B63D3]/30 rounded-full px-4 py-2 shadow-xl"
            >
              <span className="text-white text-sm font-semibold flex items-center gap-2">
                <span className="w-2 h-2 bg-[#5B63D3] rounded-full animate-pulse" />
                500+ Clients
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
                className="text-4xl sm:text-5xl font-black text-white leading-tight mb-6"
              >
                Achieve Success with{" "}
                <motion.span
                  whileHover={{ 
                    color: "#FF5A1F",
                    textShadow: "0 0 30px rgba(255, 90, 31, 0.3)"
                  }}
                  className="inline-block"
                >
                  SeaChange
                </motion.span>
              </motion.h2>

              <motion.p 
                variants={fadeInUp}
                className="text-[#9CA8BD] text-base leading-relaxed mb-8"
              >
                Our integrated services in Compliance and Learning Management, Digital
                Marketing, and Technology are designed to let you focus on what you do
                best—while we handle the essential, often complex, but critical areas of
                your business. From staying compliant and audit-ready, to building your
                brand and deploying scalable tech, SeaChange takes care of the heavy
                lifting so you can move forward with confidence.
              </motion.p>

              <motion.div 
                variants={fadeInUp}
                className="border-t border-white/10 relative mb-8"
              >
                <motion.span 
                  initial={{ scaleX: 0 }}
                  animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  className="absolute -top-px left-0 w-12 h-[2px] bg-[#6C74D6] origin-left"
                />
              </motion.div>

              <motion.p 
                variants={fadeInUp}
                className="text-xl sm:text-2xl font-bold italic text-white mb-9 leading-snug"
              >
                Delighting Customers in{" "}
                <motion.span 
                  className="text-[#6C74D6] inline-block"
                  whileHover={{ 
                    scale: 1.05,
                    textShadow: "0 0 30px rgba(108, 116, 214, 0.3)"
                  }}
                >
                  South East Asia and Sri Lanka
                </motion.span>{" "}
                since{" "}
                <motion.span
                  className="text-[#FF5A1F] font-bold"
                  whileHover={{ scale: 1.1 }}
                >
                  {count}
                </motion.span>
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
                    <h4 className="text-white font-semibold text-base group-hover:text-[#6C74D6] transition-colors duration-300">
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
        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#FF5A1F]/30 to-transparent"
      />
    </motion.section>
  );
}