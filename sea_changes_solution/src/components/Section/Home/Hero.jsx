import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section className="relative min-h-screen bg-[#0B0F1A] overflow-hidden flex items-center pt-24">
      {/* Floating particles background */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 2 }}
      >
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#E8430A] rounded-full"
            initial={{
              x: Math.random() * 100 + "%",
              y: Math.random() * 100 + "%",
            }}
            animate={{
              x: [
                Math.random() * 100 + "%",
                Math.random() * 100 + "%",
                Math.random() * 100 + "%",
              ],
              y: [
                Math.random() * 100 + "%",
                Math.random() * 100 + "%",
                Math.random() * 100 + "%",
              ],
            }}
            transition={{
              duration: 10 + Math.random() * 10,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </motion.div>

      {/* Full-bleed hairline grid overlay */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="hairline" width="80" height="80" patternUnits="userSpaceOnUse">
            <path d="M 80 0 L 0 0 0 80" fill="none" stroke="#ffffff" strokeWidth="0.15" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hairline)" />
      </svg>

      {/* Geometric ring — top right with pulse animation */}
      <motion.div
        className="absolute -top-32 -right-32 w-[520px] h-[520px] rounded-full border border-white/10 pointer-events-none"
        animate={{ rotate: 360 }}
        transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute -top-16 -right-16 w-[360px] h-[360px] rounded-full border border-white/05 pointer-events-none"
        animate={{ rotate: -360 }}
        transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
      />

      {/* Slightly lighter right half background split */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[#0F1525] pointer-events-none hidden lg:block" />

      {/* Vertical rule — center split */}
      <div className="absolute top-0 left-1/2 -translate-x-px w-px h-full bg-white/10 hidden lg:block pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <motion.div
          className="grid lg:grid-cols-2 gap-0 min-h-[calc(100vh-6rem)] items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* LEFT — text */}
          <div className="py-16 lg:pr-16">
            <motion.div variants={itemVariants} className="flex items-center gap-3 mb-10">
              <motion.span
                className="w-6 h-px bg-[#E8430A]"
                animate={{ width: ["0%", "100%", "100%"] }}
                transition={{ duration: 1, ease: "easeInOut" }}
              />
              <span className="text-[#E8430A] text-xs font-bold tracking-[0.25em] uppercase">SeaChange Solutions</span>
            </motion.div>

            <div className="overflow-hidden mb-3">
              <motion.h1
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="text-[clamp(3.5rem,8vw,6.5rem)] font-black text-white leading-[0.92] tracking-tighter"
              >
                Grow.
              </motion.h1>
            </div>
            <div className="overflow-hidden mb-3">
              <motion.h1
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="text-[clamp(3.5rem,8vw,6.5rem)] font-black text-[#E8430A] leading-[0.92] tracking-tighter"
              >
                Comply.
              </motion.h1>
            </div>
            <div className="overflow-hidden mb-12">
              <motion.h1
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
                className="text-[clamp(3.5rem,8vw,6.5rem)] font-black text-white leading-[0.92] tracking-tighter"
              >
                Thrive.
              </motion.h1>
            </div>

            <motion.div variants={itemVariants} className="flex items-start gap-5 mb-12">
              <motion.span
                className="w-px h-16 bg-[#E8430A]/40 flex-shrink-0 mt-1"
                animate={{ height: ["0%", "100%"] }}
                transition={{ duration: 1.5, delay: 0.5 }}
              />
              <p className="text-white/60 text-base sm:text-lg leading-relaxed max-w-md">
                SeaChange Solutions is a trusted partner in Southeast Asia and Sri Lanka, helping businesses expand, build a strong presence, and thrive in a fast-changing world through tailored compliance, learning, digital marketing, and technology solutions.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center gap-5"
            >
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 text-white font-semibold text-sm border-b border-white/30 pb-0.5 hover:border-[#E8430A] hover:text-[#E8430A] transition-colors duration-200"
              >
                Get in touch ↗
              </Link>
            </motion.div>
          </div>

          {/* RIGHT — image + floating card */}
          <div className="relative py-16 px-4 lg:pl-16 flex items-center justify-center w-full">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-[480px] "
            >
              {/* Full visible image — no clipping, no border */}
              <img
                src="/homepage/banner_images-01.png"
                alt="SeaChange Solutions"
                className="w-full h-full object-cover select-none"
              />

              {/* Floating 100+ badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.6, type: "spring", stiffness: 100 }}
                className="absolute -bottom-6 -left-4 bg-[#E8430A] px-6 py-5 shadow-lg z-30"
              >
                <p className="text-white font-black text-2xl leading-none">100+</p>
                <p className="text-white/70 text-xs mt-1 font-medium tracking-wide">Happy Customers</p>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Bottom rule */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-white/10" />
    </section>
  );
}