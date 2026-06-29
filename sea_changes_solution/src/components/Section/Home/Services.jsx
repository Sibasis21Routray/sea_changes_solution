import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const servicesList = [
  {
    id: "01",
    title: "Compliance & Regulatory Infrastructure",
    subBrand: "CALM by SeaChange",
    scope: "Risk Management & Audits",
    description: "Streamline external and internal compliance management metrics. Our automated regulatory oversight loops guard your regional entities against operational friction and penalties.",
    target: "/services/compliance"
  },
  {
    id: "02",
    title: "Performance Digital Marketing",
    subBrand: "SeaChange Digital Hub",
    scope: "Growth Strategy & Scale",
    description: "Multi-channel conversion infrastructure using data acquisition strategies across search engines and paid growth spaces to maximize absolute investment value.",
    target: "/services/digital-marketing"
  },
  {
    id: "03",
    title: "Advanced Tech & Engineering Services",
    subBrand: "SeaChange Systems Tech",
    scope: "Enterprise Integration",
    description: "Architecting microservice fabrics, modern dashboard systems, and distributed custom applications configured for extreme uptime and regional user scale.",
    target: "/services/tech-services"
  }
];

export default function Services() {
  const [activeHover, setActiveHover] = useState(null);

  return (
    <section className="bg-[#0B0F1A] py-24 relative overflow-hidden border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header Frame */}
        <div className="mb-16">
          <span className="text-[#E8430A] text-xs font-bold tracking-[0.3em] uppercase block mb-4">
            Core Competencies
          </span>
          <h2 className="text-4xl font-black text-white tracking-tight">
            Integrated Solutions
          </h2>
        </div>

        {/* Structural Rows Wrapper Stack */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col border-t border-white/10"
        >
          {servicesList.map((item, index) => (
            <div
              key={item.id}
              className="border-b border-white/10 py-8 px-2 flex flex-col lg:flex-row lg:items-center justify-between gap-4 cursor-pointer group transition-colors duration-300 hover:bg-white/[0.01]"
              onMouseEnter={() => setActiveHover(index)}
              onMouseLeave={() => setActiveHover(null)}
            >
              {/* Row Numerical Label & Primary Identity Title */}
              <div className="flex items-start gap-6 lg:w-[400px]">
                <span className="text-white/20 font-black text-sm pt-1 tracking-wider group-hover:text-[#E8430A] transition-colors duration-300">
                  {item.id}
                </span>
                <div>
                  <h3 className="text-xl font-bold text-white mb-1 group-hover:text-white/90 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-[#E8430A]/60 text-xs font-semibold tracking-wide uppercase">
                    {item.subBrand}
                  </p>
                </div>
              </div>

              {/* Smooth Animated Dynamic Height Layout Box */}
              <div className="flex-1 py-2 lg:py-0">
                <div className="hidden lg:block">
                  <AnimatePresence initial={false}>
                    {activeHover === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <p className="text-white/50 text-sm leading-relaxed max-w-xl pr-4">
                          {item.description}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
                {/* Fallback layout for mobile devices */}
                <div className="block lg:hidden">
                  <p className="text-white/50 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Vector Action Button */}
              <div className="lg:w-16 flex lg:justify-end mt-2 lg:mt-0">
                <Link to={item.target}>
                  <motion.div 
                    animate={{ 
                      rotate: activeHover === index ? 45 : 0,
                      borderColor: activeHover === index ? "#E8430A" : "rgba(255,255,255,0.1)",
                      color: activeHover === index ? "#E8430A" : "rgba(255,255,255,0.3)"
                    }}
                    transition={{ duration: 0.2 }}
                    className="w-10 h-10 border rounded-full flex items-center justify-center text-sm"
                  >
                    →
                  </motion.div>
                </Link>
              </div>

            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}