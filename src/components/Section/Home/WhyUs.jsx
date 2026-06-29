import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function WhyUs() {
  return (
    <section className="bg-white py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 items-center gap-16">
          
          {/* Left Column Image Presentation Module */}
          <motion.div
            initial={{ opacity: 0, x: -40, scale: 0.98 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex items-center justify-center"
          >
            <div className="w-[320px] h-[320px] sm:w-[420px] sm:h-[420px] overflow-hidden rounded-3xl shadow-xl border border-slate-100 relative z-10 bg-slate-100">
              <img
                src="/homepage/bpo-image.png"
                alt="SeaChange Regional Core Management"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Structural Abstract Frame Background Design Element */}
            <div className="absolute -bottom-6 -right-6 w-[280px] h-[280px] border-2 border-dashed border-slate-200 rounded-3xl pointer-events-none z-0" />
          </motion.div>

          {/* Right Text Block Content Frame */}
          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col justify-center"
          >
            <span className="text-[#E8430A] text-xs font-bold tracking-[0.25em] uppercase mb-4 block">
              Market Position
            </span>
            <h2 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight mb-6">
              Achieve absolute scale<br />with SeaChange
            </h2>
            <p className="text-slate-500 text-sm sm:text-base leading-relaxed mb-8 max-w-md">
              We assume the operational weight of auditing, compliance mapping, multi-channel deployment, and technology system configuration — freeing your leadership team to focus entirely on core business strategy.
            </p>

            {/* Dynamic Highlight Block */}
            <div className="border-l-2 border-[#E8430A] pl-5 mb-10">
              <p className="text-slate-900 font-bold text-lg italic leading-snug">
                Delighting customer ecosystems across South East Asia and Sri Lanka with high-integrity operations since 2014.
              </p>
            </div>

            {/* Action CTA Trigger Button */}
            <Link
              to="/about"
              className="inline-flex items-center gap-3 bg-[#E8430A] text-white font-bold text-xs tracking-wider uppercase px-8 py-4.5 rounded-sm hover:bg-[#0B0F1A] transition-colors duration-300 shadow-lg shadow-orange-600/10 w-fit"
            >
              <span>Learn More About Us</span>
              <span>→</span>
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  );
}