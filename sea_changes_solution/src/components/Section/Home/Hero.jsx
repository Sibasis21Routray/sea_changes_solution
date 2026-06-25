import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-[#F5F0E8] overflow-hidden flex items-center pt-24">

      {/* Full-bleed hairline grid overlay */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="hairline" width="80" height="80" patternUnits="userSpaceOnUse">
            <path d="M 80 0 L 0 0 0 80" fill="none" stroke="#C8BFA8" strokeWidth="0.4" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hairline)" />
      </svg>

      {/* Charcoal geometric ring — top right */}
      <div className="absolute -top-32 -right-32 w-[520px] h-[520px] rounded-full border border-[#1C1C1C]/10 pointer-events-none" />
      <div className="absolute -top-16 -right-16 w-[360px] h-[360px] rounded-full border border-[#1C1C1C]/06 pointer-events-none" />

      {/* Sand fill block — right half background split */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[#EDE5D5] pointer-events-none hidden lg:block" />

      {/* Vertical rule — center split */}
      <div className="absolute top-0 left-1/2 -translate-x-px w-px h-full bg-[#1C1C1C]/10 hidden lg:block pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid lg:grid-cols-2 gap-0 min-h-[calc(100vh-6rem)] items-center">

          {/* LEFT — text */}
          <div className="py-16 lg:pr-16">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3 mb-10"
            >
              <span className="w-6 h-px bg-[#B5813A]" />
              <span className="text-[#B5813A] text-xs font-bold tracking-[0.25em] uppercase">SeaChange Solutions</span>
            </motion.div>

            <div className="overflow-hidden mb-3">
              <motion.h1
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="text-[clamp(3.5rem,8vw,6.5rem)] font-black text-[#1C1C1C] leading-[0.92] tracking-tighter"
              >
                Grow.
              </motion.h1>
            </div>
            <div className="overflow-hidden mb-3">
              <motion.h1
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="text-[clamp(3.5rem,8vw,6.5rem)] font-black text-[#B5813A] leading-[0.92] tracking-tighter"
              >
                Comply.
              </motion.h1>
            </div>
            <div className="overflow-hidden mb-12">
              <motion.h1
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
                className="text-[clamp(3.5rem,8vw,6.5rem)] font-black text-[#1C1C1C] leading-[0.92] tracking-tighter"
              >
                Thrive.
              </motion.h1>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="flex items-start gap-5 mb-12"
            >
              <span className="w-px h-16 bg-[#B5813A]/40 flex-shrink-0 mt-1" />
              <p className="text-[#5A5040] text-base sm:text-lg leading-relaxed max-w-md">
                SeaChange Solutions is a trusted partner in Southeast Asia and Sri Lanka, helping businesses expand, build a strong presence, and thrive in a fast-changing world through tailored compliance, learning, digital marketing, and technology solutions.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.75 }}
              className="flex flex-wrap items-center gap-5"
            >
              {/* <Link
                to="/services"
                className="group relative inline-flex items-center gap-3 bg-[#1C1C1C] text-[#F5F0E8] font-bold text-sm px-8 py-4 rounded-none overflow-hidden transition-all duration-300 hover:bg-[#B5813A]"
              >
                Explore Services
                <span className="w-5 h-5 rounded-full border border-current flex items-center justify-center text-xs transition-transform duration-300 group-hover:translate-x-1">→</span>
              </Link> */}
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 text-[#1C1C1C] font-semibold text-sm border-b border-[#1C1C1C]/30 pb-0.5 hover:border-[#B5813A] hover:text-[#B5813A] transition-colors duration-200"
              >
                Get in touch ↗
              </Link>
            </motion.div>
          </div>

          {/* RIGHT — image + floating card */}
          <div className="relative py-16 lg:pl-16 flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-[480px]"
            >
              {/* Image frame — sharp corners, thin border */}
              <div className="w-full aspect-[4/5] bg-[#D4C9B0] border border-[#1C1C1C]/15 overflow-hidden">
                <img
                  src="/homepage/banner_images-01.png"
                  alt="SeaChange Solutions"
                  className="w-full h-full object-cover mix-blend-multiply"
                />
              </div>

              {/* Offset label block */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.9, duration: 0.6 }}
                className="absolute -bottom-6 -left-6 bg-[#1C1C1C] px-6 py-5"
              >
                {/* <p className="text-[#B5813A] text-xs font-bold tracking-widest uppercase mb-1">Est. 2014</p> */}
                <p className="text-white font-black text-2xl leading-none">100+</p>
                <p className="text-[#A09070] text-xs mt-1">Happy Customers</p>
              </motion.div>

              {/* Top-right corner accent */}
              <div className="absolute -top-3 -right-3 w-12 h-12 border-t-2 border-r-2 border-[#B5813A]" />
            </motion.div>
          </div>

        </div>
      </div>

      {/* Bottom rule */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-[#1C1C1C]/10" />
    </section>
  );
}
