import React from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const featureItems = [
  { 
    title: "Local Expertise", 
    desc: "Deeply rooted understanding of regional compliance regulations." 
  },
  { 
    title: "Comprehensive Solutions", 
    desc: "End-to-end strategy from digital marketing to enterprise system architecture." 
  },
  { 
    title: "Client-Centric Focus", 
    desc: "Bespoke roadmaps tailored precisely to organizational velocity." 
  },
];

export default function AboutWhyUs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <motion.section 
      ref={ref}
      className="py-24 bg-[#0B0F1A] relative overflow-hidden border-b border-white/10"
    >
      {/* Full-Bleed Technical Hairline Grid Overlay */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="section-grid" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#FFFFFF" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#section-grid)" />
      </svg>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          
          {/* Newly Integrated Media Column (Before Content) */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8 }}
              className="relative w-full h-full max-w-[400px] "
            >
              <img
                src="/aboutus/bpo-banner.png"
                alt="SeaChange Operational Alignment"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>

          {/* Right Text Blocks & Feature Columns */}
          <div className="lg:col-span-7 space-y-10">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="w-6 h-px bg-[#E8430A]" />
                <span className="text-[#E8430A] text-xs font-bold tracking-[0.25em] uppercase">
                  Market Trust
                </span>
              </div>
              
              <h2 className="text-4xl font-black text-white tracking-tight mb-4">
                Delighting Customers Continuously
              </h2>
              <p className="text-white/60 text-base leading-relaxed mb-8 max-w-xl">
                SeaChange Solutions is a trusted partner in Southeast Asia and Sri Lanka, empowering businesses to expand, establish a strong presence, and thrive in today’s fast-evolving landscape through tailored learning, compliance and digital marketing solutions.
              </p>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 text-white font-bold text-sm tracking-wide border-b border-white/20 pb-1 hover:border-[#E8430A] hover:text-[#E8430A] transition-all duration-300"
              >
                <span>Get started today</span>
                <span>↗</span>
              </Link>
            </div>

            {/* Feature Blocks Stack */}
            <div className="flex flex-col gap-4 pt-4 border-t border-white/10">
              {featureItems.map((item, index) => (
                <motion.div 
                  key={item.title}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative flex bg-[#0F1525] border border-white/10 rounded-xl overflow-hidden p-6 hover:border-[#E8430A]/30 transition-colors duration-300"
                >
                  {/* Subtle active sequence highlight marker instead of standard bright blue strip */}
                  <div className="absolute left-0 top-0 h-full w-[3px] bg-[#E8430A] scale-y-0 group-hover:scale-y-100 transition-transform duration-300" />
                  
                  <div>
                    <h4 className="text-white font-bold text-base mb-1 group-hover:text-[#E8430A] transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-white/40 text-xs sm:text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </motion.section>
  );
}