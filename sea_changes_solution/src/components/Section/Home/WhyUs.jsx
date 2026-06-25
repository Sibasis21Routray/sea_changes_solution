import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const features = [
  { title: "Local Expertise. International Best Practices.", icon: "→" },
  { title: "Comprehensive Solutions", icon: "→" },
  { title: "Client-Centric Focus", icon: "→" },
];

function useCountUp(target, active, duration = 2000) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    let frame;
    const start = performance.now();
    const tick = (now) => {
      const t = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      setCount(Math.floor(eased * target));
      if (t < 1) frame = requestAnimationFrame(tick);
      else setCount(target);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [active, target, duration]);
  return count;
}

export default function WhyUs() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });
  const year = useCountUp(2014, inView);

  return (
    <section ref={ref} className="bg-[#F5F0E8] relative overflow-hidden">

      {/* Hairline grid background decoration */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-40" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="wg" width="80" height="80" patternUnits="userSpaceOnUse">
            <path d="M 80 0 L 0 0 0 80" fill="none" stroke="#C8BFA8" strokeWidth="0.4" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#wg)" />
      </svg>

      <div className="relative max-w-7xl mx-auto">
        {/* FIXED: Changed items-center to items-start to pull the right text column up to the top */}
        <div className="grid lg:grid-cols-2 items-start pt-12 lg:pt-20 pb-16 lg:pb-20">

          {/* LEFT — Image column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex items-center justify-center p-8 lg:p-0 lg:pr-16"
          >
            {/* Perfectly sized standalone responsive image frame */}
            <div className="w-[340px] h-[340px] sm:w-[440px] sm:h-[440px] overflow-hidden rounded-3xl shadow-xl border border-[#C8BFA8] relative z-10 bg-white/20">
              <img
                src="/homepage/bpo-image.png"
                alt="SeaChange office"
                className="w-full h-full object-cover mix-blend-multiply opacity-85"
              />
            </div>
          </motion.div>

          {/* RIGHT — text column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="px-8 lg:px-16 flex flex-col justify-start"
          >
            <span className="text-[#B5813A] text-xs font-bold tracking-[0.25em] uppercase mb-6 block">
              Why SeaChange
            </span>

            <h2 className="text-4xl sm:text-5xl font-black text-[#1C1C1C] leading-tight mb-6">
              Achieve Success<br />
              with SeaChange
            </h2>

            <p className="text-[#6B5F4E] text-base leading-relaxed mb-8 max-w-md">
              Our integrated services in Compliance and Learning Management,
              Digital Marketing, and Technology are designed to let you focus
              on what you do best — while we handle the essential, often complex,
              but critical areas of your business.
            </p>

            {/* Italic call-out */}
            <div className="border-l-2 border-[#B5813A] pl-5 mb-10">
              <p className="text-[#1C1C1C] font-black text-lg italic leading-snug">
                Delighting Customers in South East Asia and Sri Lanka since{" "}
                <span className="text-[#B5813A] not-italic">{year}</span>.
              </p>
            </div>

            {/* Features */}
            <div className="flex flex-col gap-4 mb-10">
              {features.map((f) => (
                <div
                  key={f.title}
                  className="group flex items-center gap-4 cursor-default"
                >
                  <span className="w-7 h-7 border border-[#C8BFA8] flex items-center justify-center text-[#B5813A] text-xs flex-shrink-0 group-hover:bg-[#1C1C1C] group-hover:border-[#1C1C1C] group-hover:text-white transition-all duration-200">
                    {f.icon}
                  </span>
                  <span className="text-[#1C1C1C] font-semibold text-sm group-hover:text-[#B5813A] transition-colors duration-200">
                    {f.title}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <Link
              to="/about"
              className="group inline-flex items-center gap-3 bg-[#1C1C1C] text-[#F5F0E8] font-bold text-sm px-8 py-4 self-start hover:bg-[#B5813A] transition-colors duration-300"
            >
              Learn More About Us
              <span className="w-5 h-5 rounded-full border border-current flex items-center justify-center text-xs transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  );
}