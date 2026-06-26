import React, { useEffect, useRef, useState } from "react";
import { COLORS } from "../../Common/color";

/**
 * IntroSection — paragraph-only intro statement with ring-style bubbles.
 *
 * White background. Only content is the paragraph passed in via the
 * `paragraph` prop — no label, no highlighted phrases, no other text.
 *
 * Visual: ambient bubbles are drawn as thin outlined rings (not filled
 * blurred blobs) at a mix of large and small sizes, each breathing in
 * scale on its own independent loop so they never sync up. A couple of
 * small solid-fill dots are mixed in for variety and depth.
 *
 * Animation on scroll-into-view (IntersectionObserver, fires once):
 * the paragraph fades and rises into place, in plain ink throughout.
 *
 * Colors come from ./colors.js (COLORS.ink, COLORS.signal).
 *
 * Props:
 *  - paragraph : string — the intro text (has a fallback default)
 */

// Ring bubble — thin outlined circle, breathing in scale on a loop.
const RingBubble = ({ size, top, left, right, bottom, delay, duration, opacity, strokeWidth = 1.5 }) => (
  <div
    aria-hidden="true"
    className="pointer-events-none absolute rounded-full"
    style={{
      width: size,
      height: size,
      top,
      left,
      right,
      bottom,
      border: `${strokeWidth}px solid #e6521f`,
      opacity,
      animation: `bubble-breathe ${duration}s ease-in-out ${delay}s infinite`,
    }}
  />
);

// Dot bubble — small solid-fill circle, breathing in scale on a loop.
const DotBubble = ({ size, top, left, right, bottom, delay, duration, opacity }) => (
  <div
    aria-hidden="true"
    className="pointer-events-none absolute rounded-full"
    style={{
      width: size,
      height: size,
      top,
      left,
      right,
      bottom,
      backgroundColor: COLORS.signal,
      opacity,
      animation: `bubble-breathe ${duration}s ease-in-out ${delay}s infinite`,
    }}
  />
);

const IntroSection = ({
  paragraph,
}) => {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
   <section ref={ref} className="relative isolate overflow-hidden px-6 pb-15 bg-white ">
      {/* Large rings */}
      <RingBubble size={220} top="-70px" left="2%" delay={0} duration={9} opacity={visible ? 0.18 : 0} />
      <RingBubble size={160} top="55%" right="4%" delay={1.6} duration={7.5} opacity={visible ? 0.16 : 0} />
 
      {/* Small rings */}
      <RingBubble size={48} top="20%" right="18%" delay={0.8} duration={5.5} opacity={visible ? 0.3 : 0} strokeWidth={2} />
      <RingBubble size={34} bottom="14%" left="14%" delay={2.4} duration={6} opacity={visible ? 0.3 : 0} strokeWidth={2} />
      <RingBubble size={26} top="68%" right="30%" delay={1.2} duration={5} opacity={visible ? 0.28 : 0} strokeWidth={2} />
 
      {/* Small filled dots for depth */}
      <DotBubble size={10} top="30%" left="10%" delay={0.4} duration={5} opacity={visible ? 0.5 : 0} />
      <DotBubble size={8} bottom="22%" right="12%" delay={1.9} duration={6.5} opacity={visible ? 0.5 : 0} />
      <DotBubble size={6} top="12%" left="44%" delay={3} duration={5.8} opacity={visible ? 0.45 : 0} />
 
      <div className="relative mx-auto max-w-5xl text-center">
        <p
          className="mx-auto text-lg leading-relaxed transition-all duration-700 ease-out md:text-xl"
          style={{
           color: COLORS.ink,
            transitionDelay: "100ms",
            transform: visible ? "translateY(0)" : "translateY(14px)",
            opacity: visible ? 1 : 0,
          }}
        >
          {paragraph}
        </p>
      </div>
 
      <style>{`
        @keyframes bubble-breathe {
          0%, 100% { transform: scale(0.85); }
          50% { transform: scale(1.18); }
        }
        @media (prefers-reduced-motion: reduce) {
          * { animation: none !important; transition-duration: 1ms !important; }
        }
      `}</style>
    </section>
  );
};

export default IntroSection;