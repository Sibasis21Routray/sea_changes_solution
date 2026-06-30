import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const services = [
  {
    number: "01",
    path: "/services/compliance",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Compliance and Learning Management",
    brand: "CALM by SeaChange",
    tagline: "Compliance Made Simple, Learning Made Seamless.",
  },
  {
    number: "02",
    path: "/services/digital-marketing",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
      </svg>
    ),
    title: "Digital Marketing",
    brand: "SeaChange Digital",
    tagline: "Smart Marketing. Real Results.",
  },
  {
    number: "03",
    path: "/services/tech-services",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    title: "Technology Services",
    brand: "SeaChange Tech",
    tagline: "Engineered for What's Next. We craft future-ready digital systems that grow with you.",
  },
];

export default function ServicesAlt() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <section className="py-20 bg-[#0A1628] relative overflow-hidden" ref={ref}>

      {/* Ambient glow — steel-blue tones with enhanced animation */}
      <motion.div
        animate={{
          background: [
            "radial-gradient(circle at 10% 20%, rgba(143,181,204,0.05) 0%, transparent 50%)",
            "radial-gradient(circle at 90% 80%, rgba(143,181,204,0.04) 0%, transparent 50%)",
            "radial-gradient(circle at 50% 50%, rgba(143,181,204,0.06) 0%, transparent 60%)",
            "radial-gradient(circle at 10% 20%, rgba(143,181,204,0.05) 0%, transparent 50%)",
          ],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 pointer-events-none"
      />

      {/* Enhanced decorative corner stripe with 3D rotation */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85, rotate: -5 }}
        animate={{ 
          opacity: 0.45, 
          scale: 1,
          rotate: 0,
          x: [0, 15, -10, 0],
          y: [0, -12, 8, 0],
          rotateZ: [0, 3, -3, 0],
          rotateX: [0, 2, -1, 0],
        }}
        transition={{
          opacity: { duration: 1.5, ease: "easeOut" },
          scale: { duration: 1.5, ease: [0.16, 1, 0.3, 1] },
          rotate: { duration: 1.5, ease: [0.16, 1, 0.3, 1] },
          x: { duration: 10, repeat: Infinity, ease: "easeInOut" },
          y: { duration: 8, repeat: Infinity, ease: "easeInOut" },
          rotateZ: { duration: 12, repeat: Infinity, ease: "easeInOut" },
          rotateX: { duration: 14, repeat: Infinity, ease: "easeInOut" },
        }}
        className="absolute top-0 right-0 w-32 h-44 pointer-events-none overflow-hidden will-change-transform"
        style={{ perspective: "1000px" }}
      >
        <svg viewBox="0 0 120 160" className="w-full h-full">
          <polygon points="120,0 120,40 70,0" fill="#8FB5CC" opacity="0.2" />
          <polygon points="120,40 120,80 90,80 70,40" fill="#5A8FAD" opacity="0.25" />
          <polygon points="120,80 120,120 90,120 90,80" fill="#0D1E38" opacity="0.9" />
        </svg>
      </motion.div>

      {/* New: Floating particles with sophisticated movement */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-1 h-1 bg-[#8FB5CC]/30 rounded-full"
        animate={inView ? {
          y: [-30, 30, -30],
          x: [-20, 20, -20],
          opacity: [0.2, 0.6, 0.2],
          scale: [1, 1.5, 1],
        } : {}}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/3 right-1/3 w-2 h-2 bg-[#8FB5CC]/20 rounded-full"
        animate={inView ? {
          y: [20, -20, 20],
          x: [10, -10, 10],
          opacity: [0.1, 0.5, 0.1],
          scale: [1, 1.8, 1],
        } : {}}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      />
      <motion.div
        className="absolute top-1/2 right-1/4 w-1.5 h-1.5 bg-[#5A8FAD]/25 rounded-full"
        animate={inView ? {
          y: [-15, 25, -15],
          x: [15, -15, 15],
          opacity: [0.15, 0.55, 0.15],
        } : {}}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header with enhanced animations */}
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.12,
                delayChildren: 0.08
              }
            }
          }}
          className="max-w-2xl mb-14 select-none"
        >
          {/* Enhanced Badge Reveal with glow pulse */}
          <motion.div 
            variants={{
              hidden: { opacity: 0, x: -15, scale: 0.98 },
              visible: { 
                opacity: 1, 
                x: 0, 
                scale: 1,
                transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } 
              }
            }}
            className="flex items-center gap-3 mb-4"
          >
            {/* Animated line with shimmer */}
            <motion.span 
              className="w-6 h-px bg-[#8FB5CC] relative overflow-hidden"
              variants={{
                hidden: { width: 0, opacity: 0 },
                visible: { 
                  width: 24, 
                  opacity: 1,
                  transition: { duration: 0.6, delay: 0.3, ease: [0.65, 0, 0.35, 1] }
                }
              }}
            >
              <motion.span
                className="absolute inset-0 bg-white/50"
                animate={{ x: ["-100%", "200%"] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              />
            </motion.span>
            <motion.span 
              className="text-[#8FB5CC] text-xs font-bold tracking-[0.25em] uppercase"
              variants={{
                hidden: { opacity: 0, x: -10 },
                visible: { 
                  opacity: 1, 
                  x: 0,
                  transition: { duration: 0.5, delay: 0.5 }
                }
              }}
            >
              Our Services
            </motion.span>
          </motion.div>

          {/* Enhanced Masked Heading with word-by-word reveal */}
          <h2 className="text-4xl sm:text-5xl font-black text-white leading-[1.2] tracking-tight">
            <div className="overflow-hidden block py-1">
              <motion.span
                variants={{
                  hidden: { y: "120%", opacity: 0, rotate: 5 },
                  visible: { 
                    y: 0, 
                    opacity: 1, 
                    rotate: 0,
                    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.3 } 
                  }
                }}
                className="inline-block"
              >
                We provide everything you need to
              </motion.span>
            </div>
            
            <div className="overflow-hidden block py-1">
              <motion.span
                variants={{
                  hidden: { y: "120%", opacity: 0, rotate: 5 },
                  visible: { 
                    y: 0, 
                    opacity: 1, 
                    rotate: 0,
                    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.45 } 
                  }
                }}
                className="inline-block"
              >
                get started, grow and{" "}
                <motion.span
                  whileHover={{ 
                    color: "#FFFFFF",
                    textShadow: "0 0 20px rgba(143,181,204,0.5)",
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                  className="text-[#8FB5CC] inline-block cursor-default font-black relative"
                >
                  thrive.
                  <motion.span
                    className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#8FB5CC]"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                    style={{ transformOrigin: "left" }}
                  />
                </motion.span>
              </motion.span>
            </div>
          </h2>

          {/* Enhanced Decorative Rule with multiple trackers */}
          <motion.div 
            variants={{
              hidden: { opacity: 0, scaleX: 0.9 },
              visible: { 
                opacity: 1, 
                scaleX: 1,
                transition: { duration: 0.6, delay: 0.6 } 
              }
            }}
            className="border-t border-[#8FB5CC]/15 relative mt-8"
          >
            {/* Primary tracker */}
            <motion.span
              variants={{
                hidden: { scaleX: 0 },
                visible: { 
                  scaleX: 1, 
                  transition: { delay: 0.8, duration: 1, ease: [0.25, 1, 0.5, 1] } 
                }
              }}
              className="absolute -top-px left-0 w-16 h-[2px] bg-[#8FB5CC] origin-left block"
            />
            {/* Secondary tracker with delay */}
            <motion.span
              initial={{ scaleX: 0 }}
              animate={inView ? { scaleX: 1 } : {}}
              transition={{ delay: 1.1, duration: 0.7, ease: [0.25, 1, 0.5, 1] }}
              className="absolute -top-px left-20 w-8 h-[2px] bg-[#8FB5CC]/30 origin-left block"
            />
          </motion.div>
        </motion.div>

        {/* Cards grid with enhanced animations */}
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
              }
            }
          }}
          className="grid grid-cols-1 md:grid-cols-3 rounded-2xl overflow-hidden bg-[#0D1E38] border border-[#8FB5CC]/10 divide-y md:divide-y-0 md:divide-x divide-[#8FB5CC]/10"
        >
          {services.map((s, idx) => (
            <div key={s.number} className="overflow-hidden block h-full">
              <motion.div 
                variants={{
                  hidden: { opacity: 0, y: 60, scale: 0.95 },
                  visible: { 
                    opacity: 1, 
                    y: 0, 
                    scale: 1,
                    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } 
                  }
                }}
                className="h-full"
              >
                <Link
                  to={s.path}
                  className="group relative flex flex-col px-8 py-12 overflow-hidden h-full bg-transparent transition-all duration-500 ease-out hover:bg-[#1E3A5F]/40"
                  style={{ display: "block" }}
                >
                  <motion.div
                    className="flex flex-col h-full"
                    whileHover={{ y: -6 }}
                    transition={{ type: "spring", stiffness: 260, damping: 22 }}
                  >
                    {/* Enhanced hover gradient with motion */}
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-b from-[#8FB5CC]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                      animate={inView ? {
                        y: ["0%", "100%", "0%"],
                      } : {}}
                      transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                    />

                    {/* Enhanced dot pattern with rotation */}
                    <motion.svg
                      className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                      aria-hidden="true"
                      animate={{ rotate: 0 }}
                      whileHover={{ rotate: 90 }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    >
                      <defs>
                        <pattern id={`svc-dots-${idx}`} x="0" y="0" width="14" height="14" patternUnits="userSpaceOnUse">
                          <circle cx="2" cy="2" r="1.4" fill="rgba(143,181,204,0.15)" />
                        </pattern>
                      </defs>
                      <rect width="100%" height="100%" fill={`url(#svc-dots-${idx})`} />
                    </motion.svg>

                    {/* Enhanced Number watermark with parallax */}
                    <motion.span
                      initial={{ opacity: 0, y: -20, scale: 0.5 }}
                      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
                      transition={{ delay: 0.4 + idx * 0.15, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                      className="absolute top-8 left-8 text-5xl font-black text-white/[0.04] group-hover:text-white/[0.08] group-hover:-translate-y-2 group-hover:scale-110 transition-all duration-700 ease-out select-none"
                    >
                      {s.number}
                    </motion.span>

                    {/* Icon badge with enhanced interactions */}
                    <div className="relative z-10 flex justify-center mb-8">
                      <motion.div
                        whileHover={{ scale: 1.15, rotate: 12 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ type: "spring", stiffness: 300, damping: 14 }}
                        className="w-16 h-16 rounded-full flex items-center justify-center bg-[#8FB5CC]/10 border border-[#8FB5CC]/25 text-[#8FB5CC] group-hover:bg-[#8FB5CC]/20 group-hover:border-[#8FB5CC]/50 group-hover:text-white group-hover:shadow-lg group-hover:shadow-[#8FB5CC]/20 transition-all duration-500 ease-out"
                      >
                        <motion.div
                          animate={{ rotate: [0, 10, -10, 0] }}
                          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        >
                          {s.icon}
                        </motion.div>
                      </motion.div>
                    </div>

                    {/* Title with character reveal */}
                    <h3 className="relative z-10 text-xl font-bold text-center mb-4 text-white tracking-tight group-hover:tracking-wider transition-all duration-500">
                      {s.title}
                    </h3>

                    {/* Enhanced underline with glow effect */}
                    <motion.span 
                      className="relative z-10 mx-auto w-8 h-[3px] rounded-full mb-6 bg-[#8FB5CC] group-hover:w-16 group-hover:bg-white transition-all duration-500 ease-out"
                      whileHover={{ 
                        boxShadow: "0 0 10px rgba(143,181,204,0.6)",
                      }}
                    />

                    {/* Brand + tagline */}
                    <div className="relative z-10 text-center flex-1">
                      <motion.p 
                        className="font-bold text-sm mb-1 text-white/90 group-hover:text-white transition-colors duration-500"
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 400, damping: 20 }}
                      >
                        {s.brand}
                      </motion.p>
                      <p className="text-sm leading-relaxed text-white/45 group-hover:text-white/80 transition-colors duration-500">
                        {s.tagline}
                      </p>
                    </div>

                    {/* Enhanced Read More Pill with ripple effect */}
                    <div className="relative z-10 flex justify-center mt-8">
                      <motion.span
                        whileHover={{ scale: 1.08 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ type: "spring", stiffness: 350, damping: 18 }}
                        className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full text-sm font-semibold border transition-all duration-500 ease-out bg-[#8FB5CC]/10 text-white border-[#8FB5CC]/20 group-hover:bg-[#0A1628] group-hover:border-[#8FB5CC]/30 group-hover:shadow-xl group-hover:shadow-[#8FB5CC]/10 relative overflow-hidden"
                      >
                        <motion.div
                          className="absolute inset-0 bg-[#8FB5CC]/10 rounded-full"
                          initial={{ scale: 0, opacity: 0 }}
                          whileHover={{ scale: 1.5, opacity: 1 }}
                          transition={{ duration: 0.5 }}
                        />
                        <span className="relative z-10">Read More</span>
                        <motion.span 
                          className="w-5 h-5 rounded-full flex items-center justify-center text-xs bg-[#8FB5CC] text-[#0A1628] font-bold transition-all duration-500 ease-out group-hover:rotate-90 group-hover:scale-110 relative z-10"
                          whileHover={{ rotate: 180 }}
                          transition={{ type: "spring", stiffness: 400, damping: 15 }}
                        >
                          +
                        </motion.span>
                      </motion.span>
                    </div>
                  </motion.div>
                </Link>
              </motion.div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}