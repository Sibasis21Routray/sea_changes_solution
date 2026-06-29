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

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
};

export default function ServicesAlt() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.15 });

  const shimmerAnimation = {
    x: ["-100%", "200%"],
    transition: { duration: 4, repeat: Infinity, ease: "linear", delay: 1 },
  };

  return (
    <section className="py-20 bg-[#0B1230] relative overflow-hidden" ref={ref}>

      {/* Subtle animated gradient */}
      <motion.div
        animate={{
          background: [
            "radial-gradient(circle at 10% 20%, rgba(91,99,211,0.04), transparent 50%)",
            "radial-gradient(circle at 90% 80%, rgba(255,90,31,0.04), transparent 50%)",
            "radial-gradient(circle at 10% 20%, rgba(91,99,211,0.04), transparent 50%)",
          ],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 pointer-events-none"
      />

      {/* Decorative stripe – top right */}
      <motion.div
        animate={{ x: [0, 20, 0], y: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 right-0 w-32 h-44 pointer-events-none overflow-hidden opacity-60"
      >
        <svg viewBox="0 0 120 160" className="w-full h-full">
          <polygon points="120,0 120,40 70,0" fill="#E8EAF6" />
          <polygon points="120,40 120,80 90,80 70,40" fill="#FF5A1F" opacity="0.45" />
          <polygon points="120,80 120,120 90,120 90,80" fill="#0B1F3A" opacity="0.8" />
        </svg>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-2xl mb-14"
        >
          <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-4">
            <span className="w-6 h-px bg-[#5B63D3]" />
            <span className="text-[#5B63D3] text-sm font-semibold tracking-wide">Our Services</span>
          </motion.div>
          <motion.h2
            variants={fadeInUp}
            className="text-4xl sm:text-5xl font-black text-white leading-tight"
          >
            We provide everything you need to get started, grow and{" "}
            <motion.span
              whileHover={{ color: "#FF5A1F", textShadow: "0 0 30px rgba(255,90,31,0.2)" }}
              className="text-[#5B63D3] inline-block"
            >
              thrive.
            </motion.span>
          </motion.h2>

          <motion.div variants={fadeInUp} className="border-t border-gray-200 relative mt-8">
            <motion.span
              initial={{ scaleX: 0 }}
              animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="absolute -top-px left-0 w-12 h-[2px] bg-[#5B63D3] origin-left"
            />
          </motion.div>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 rounded-2xl overflow-hidden bg-[#0D1526] border border-white/10"
        >
          {services.map((s, idx) => (
            <motion.div key={s.number} variants={fadeInUp}>
              <Link
                to={s.path}
                className={`
                  group relative flex flex-col px-8 py-12 overflow-hidden h-full
                  transition-colors duration-500
                  ${idx !== 0 ? "border-l border-white/10" : ""}
                  hover:bg-[#FF5A1F]
                `}
              >
                {/* Dot pattern overlay on hover */}
                <svg
                  className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  aria-hidden="true"
                >
                  <defs>
                    <pattern id={`svc-dots-${idx}`} x="0" y="0" width="14" height="14" patternUnits="userSpaceOnUse">
                      <circle cx="2" cy="2" r="1.4" fill="rgba(255,255,255,0.35)" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill={`url(#svc-dots-${idx})`} />
                </svg>

                {/* Number watermark */}
                <span className="absolute top-8 left-8 text-5xl font-black text-white/10 group-hover:text-white/15 transition-colors duration-500 select-none">
                  {s.number}
                </span>

                {/* Icon badge */}
                <div className="relative z-10 flex justify-center mb-8">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center bg-white/10 border border-white/20 text-white group-hover:bg-white/15 group-hover:border-white/30 group-hover:text-white transition-colors duration-500">
                    {s.icon}
                  </div>
                </div>

                {/* Title */}
                <h3 className="relative z-10 text-xl font-bold text-center mb-4 text-white group-hover:text-white transition-colors duration-500">
                  {s.title}
                </h3>

                {/* Underline */}
                <span className="relative z-10 mx-auto w-8 h-[3px] rounded-full mb-6 bg-[#FF5A1F] group-hover:bg-white transition-colors duration-500" />

                {/* Brand + tagline */}
                <div className="relative z-10 text-center flex-1">
                  <p className="font-bold text-sm mb-1 text-white/90 group-hover:text-white transition-colors duration-500">
                    {s.brand}
                  </p>
                  <p className="text-sm leading-relaxed text-white/50 group-hover:text-white/85 transition-colors duration-500">
                    {s.tagline}
                  </p>
                </div>

                {/* Read More pill */}
                <div className="relative z-10 flex justify-center mt-8">
                  <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold border transition-colors duration-500 bg-white/10 text-white border-white/20 group-hover:bg-[#0B1230] group-hover:text-white group-hover:border-[#0B1230]">
                    Read More
                    <span className="w-5 h-5 rounded-full flex items-center justify-center text-xs bg-[#FF5A1F] text-white">+</span>
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}