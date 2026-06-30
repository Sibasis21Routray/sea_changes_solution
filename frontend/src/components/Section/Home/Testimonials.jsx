import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function Testimonials() {
  const sectionRef = useRef(null);
  const sectionInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <section ref={sectionRef} className="bg-[#F4F7FA] py-24 relative overflow-hidden border-t border-[#8FB5CC]/15">

      {/* Large typographic background accent — cool blue-grey tint */}
      <div
        className="absolute top-4 left-1/2 -translate-x-1/2 font-black leading-none select-none pointer-events-none font-serif"
        style={{
          fontSize: "20rem",
          color: "transparent",
          WebkitTextStroke: "1px rgba(143,181,204,0.12)",
        }}
      >
        "
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="flex justify-center mb-6">
          <span className="text-[#5A8FAD] text-xs font-bold tracking-[0.3em] uppercase">
            Client Endorsements
          </span>
        </div>

        <blockquote className="text-center">
          <p className="text-2xl sm:text-4xl font-black text-[#0D1E38] tracking-tight leading-tight mb-6">
            "Working with SEACHANGE was completely seamless."
          </p>
          <p className="text-slate-500 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed mb-10">
            We tasked their systems team with deploying a massive multi-jurisdictional compliance and learning framework. The entire operation transitioned ahead of schedule, with flawless technical integrity.
          </p>

          {/* Attribution row */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 border-t border-[#8FB5CC]/20 pt-8 max-w-md mx-auto">
            {/* Monogram — steel-blue */}
            <div
              className="w-10 h-10 text-white font-black text-xs flex items-center justify-center rounded-lg shadow-sm"
              style={{ background: "#8FB5CC" }}
            >
              NH
            </div>

            <div className="text-center sm:text-left">
              <h5 className="text-[#0D1E38] font-bold text-sm tracking-wide uppercase">
                N. Haycocks
              </h5>
              <p className="text-slate-400 text-[11px] font-semibold uppercase tracking-wider">
                CEO &amp; Managing Director
              </p>
            </div>

            {/* Stars — steel-blue */}
            <div className="flex items-center gap-0.5 sm:ml-auto text-[#8FB5CC]">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
              ))}
            </div>
          </div>
        </blockquote>
      </div>
    </section>
  );
}