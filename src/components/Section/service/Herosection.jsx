import React, { useEffect, useState } from "react";
import { COLORS } from "../../Common/color.js";

/**
 * HeroSection — "Word cascade"
 *
 * White background. Only a chip + heading as content — no side panel,
 * no ring, no body copy. The heading's words fade and rise in one after
 * another on load, with a very soft ambient glow pulse behind the text.
 *
 * Colors come from ./colors.js (COLORS.ink, COLORS.signal) so the
 * palette stays consistent across components — update it there, not here.
 *
 * Props:
 *  - heading : string — H1 text (split into words for the cascade)
 *  - chip    : string — small label/tag shown above the heading
 */

const HeroSection = ({
  heading,
  chip,
}) => {
  const [started, setStarted] = useState(false);
  const words = heading.split(" ");

  useEffect(() => {
    const t = setTimeout(() => setStarted(true), 60);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative isolate flex min-h-[420px] items-center justify-center overflow-hidden  px-6 pt-20 bg-white" >
      {/* Ambient glow pulse, very quiet */}
      <div

        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transition-opacity duration-[1800ms] ease-out"
        style={{
          width: 560,
          height: 280,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${COLORS.signal}14, transparent 70%)`,
          opacity: started ? 1 : 0,
        }}
      />

      <div className="relative mx-auto flex max-w-3xl flex-col items-center text-center">
        {/* Chip */}
        <div
          className="mb-6 inline-flex items-center gap-2 rounded-full px-3 py-1 transition-all duration-700 ease-out"
          style={{
            border: `1px solid ${COLORS.signal}33`,
            backgroundColor: `${COLORS.signal}0D`,
            transform: started ? "translateY(0)" : "translateY(8px)",
            opacity: started ? 1 : 0,
          }}
        >
          <span className="relative flex h-1.5 w-1.5">
            <span
              className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-75"
              style={{ backgroundColor: COLORS.signal }}
            />
            <span
              className="relative inline-flex h-1.5 w-1.5 rounded-full"
              style={{ backgroundColor: COLORS.signal }}
            />
          </span>
          <span
            className="font-mono text-[11px] uppercase tracking-[0.14em]"
            style={{ color: COLORS.signal }}
          >
            {chip}
          </span>
        </div>

        {/* Heading — word-by-word cascade */}
        <h1 className="text-4xl font-bold leading-[1.15] tracking-tight md:text-5xl">
          {words.map((word, i) => (
            <span
              key={`${word}-${i}`}
              className="inline-block transition-all ease-out"
              style={{
                color: COLORS.ink,
                marginRight: "0.28em",
                transitionDuration: "560ms",
                transitionDelay: `${120 + i * 70}ms`,
                transform: started ? "translateY(0)" : "translateY(16px)",
                opacity: started ? 1 : 0,
              }}
            >
              {word}
            </span>
          ))}
        </h1>
      </div>

      <style>{`
        @media (prefers-reduced-motion: reduce) {
          * { animation: none !important; transition-duration: 1ms !important; }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;