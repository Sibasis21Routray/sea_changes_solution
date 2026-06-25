import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function Testimonials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="bg-[#F5F0E8] py-24 relative overflow-hidden">

      {/* Hairline grid */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-50" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="tg" width="80" height="80" patternUnits="userSpaceOnUse">
            <path d="M 80 0 L 0 0 0 80" fill="none" stroke="#C8BFA8" strokeWidth="0.3" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#tg)" />
      </svg>

      {/* Giant background quote mark — decorative */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 text-[22rem] font-black text-[#1C1C1C]/[0.025] leading-none select-none pointer-events-none"
        aria-hidden="true"
        style={{ fontFamily: "Georgia, serif" }}
      >
        "
      </div>

      <div ref={ref} className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Eyebrow */}
        <div className="flex items-center gap-4 mb-16">
          <span className="w-6 h-px bg-[#B5813A]" />
          <span className="text-[#B5813A] text-xs font-bold tracking-[0.25em] uppercase">
            Client Voice
          </span>
        </div>

        {/* Quote */}
        <motion.blockquote
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >
          <p className="text-[clamp(1.6rem,4vw,3rem)] font-black text-[#1C1C1C] leading-[1.15] tracking-tight mb-4">
            "Working with SEACHANGE was so easy."
          </p>

          <p className="text-[#6B5F4E] text-base sm:text-lg leading-relaxed max-w-2xl mb-12">
            We needed to run a large learning and compliance program for my team
            and SeaChange handled the entire project brilliantly — from setup
            to completion, every step was seamless.
          </p>

          {/* Attribution row */}
          <div className="flex items-center gap-6">
            {/* Initials block */}
            <div className="w-12 h-12 bg-[#1C1C1C] flex items-center justify-center flex-shrink-0">
              <span className="text-[#B5813A] font-black text-sm">NH</span>
            </div>

            <div className="border-l border-[#C8BFA8] pl-6">
              <p className="text-[#1C1C1C] font-black text-sm tracking-wide uppercase">N. Haycocks</p>
              <p className="text-[#9A8A74] text-xs tracking-wide uppercase mt-0.5">CEO & Founder</p>
            </div>

            <div className="flex-1 h-px bg-[#C8BFA8] hidden sm:block" />

            {/* Star row */}
            <div className="hidden sm:flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-4 h-4 text-[#B5813A]" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M8 1.2l1.8 3.6 4 .58-2.9 2.82.68 3.98L8 10.26l-3.58 1.88.68-3.98L2.2 5.38l4-.58L8 1.2z" />
                </svg>
              ))}
            </div>
          </div>
        </motion.blockquote>

        {/* Decorative bottom bracket */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16 h-px bg-[#C8BFA8] origin-left"
        />
      </div>
    </section>
  );
}
