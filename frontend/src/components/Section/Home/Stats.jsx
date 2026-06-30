import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

const metricsData = [
  { goal: 50, endSymbol: "+", title: "Projects Completed", caption: "Across emerging SEA landscapes" },
  { goal: 500, endSymbol: "+", title: "Man-Years Experience", caption: "Deep operational intelligence" },
  { goal: 100, endSymbol: "+", title: "Corporate Partners", caption: "Retained continuous portfolios" },
  { goal: 99.8, endSymbol: "%", title: "Client Satisfaction", caption: "Measured via annual reporting", decimals: 1 }
];

function RollingDigits({ targetVal, endSymbol, decimals = 0, isTriggered }) {
  const [currentVal, setCurrentVal] = useState(0);

  useEffect(() => {
    if (!isTriggered) return;
    let frameId;
    const initialTimestamp = performance.now();
    const timeframe = 1800;

    const performStep = (currentTimestamp) => {
      const progression = Math.min((currentTimestamp - initialTimestamp) / timeframe, 1);
      const easeModifier = 1 - Math.pow(1 - progression, 4);
      setCurrentVal(easeModifier * targetVal);

      if (progression < 1) {
        frameId = requestAnimationFrame(performStep);
      } else {
        setCurrentVal(targetVal);
      }
    };

    frameId = requestAnimationFrame(performStep);
    return () => cancelAnimationFrame(frameId);
  }, [targetVal, isTriggered]);

  return (
    <span className="tabular-nums">
      {currentVal.toFixed(decimals)}
      {/* Symbol in steel-blue */}
      <span className="text-[#8FB5CC]">{endSymbol}</span>
    </span>
  );
}

export default function Stats() {
  const containerRef = useRef(null);
  const isInViewport = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section ref={containerRef} className="bg-[#07101F] relative overflow-hidden">
      {/* Top rule — steel-blue sweep */}
      <motion.div
        className="h-[3px] bg-[#8FB5CC]"
        initial={{ width: 0 }}
        animate={isInViewport ? { width: "100%" } : {}}
        transition={{ duration: 1, ease: "easeInOut" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex items-center gap-3 mb-16">
          <span className="w-6 h-px bg-[#8FB5CC]" />
          <span className="text-[#8FB5CC] text-xs font-bold tracking-[0.3em] uppercase">
            Performance Metrics
          </span>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-12 divide-x divide-[#8FB5CC]/08 text-center">
          {metricsData.map((stat) => (
            <div key={stat.title} className="px-0 lg:px-10 first:pl-0 group">
              <div className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-none mb-4">
                <RollingDigits
                  targetVal={stat.goal}
                  endSymbol={stat.endSymbol}
                  decimals={stat.decimals}
                  isTriggered={isInViewport}
                />
              </div>
              <h4 className="text-white/80 font-bold text-sm tracking-wide leading-tight mb-1 ">
                {stat.title}
              </h4>
              <p className="text-white/30 text-xs">
                {stat.caption}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}