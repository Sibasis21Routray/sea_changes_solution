import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import COLORS from "../../Common/Color";

// ============ TOKENS ============
const THEMES = {
  light: {
    bg: "#F3F5FA",
    heading: COLORS.ink,
    body: "#5C6B8A",
    border: COLORS.ink,
    btnText: COLORS.ink,
  },
  dark: {
    bg: COLORS.ink,
    heading: "#FFFFFF",
    body: "#A9B3CC",
    border: "#FFFFFF",
    btnText: "#FFFFFF",
  },
};
const SIGNAL = COLORS.signal;


// ============ ANIMATED ARROW BUTTON ============
const ArrowButton = ({ theme, to = "/contact", children = "Find out more" }) => {
  const t = THEMES[theme];
  
  return (
    <Link to={to} className="inline-block group">
      <motion.div
        className="inline-flex items-center gap-3 text-sm font-medium px-6 py-3"
        style={{
          fontFamily: "Inter, sans-serif",
          color: t.btnText,
          border: `1px solid ${t.border}`,
          borderRadius: "3px",
        }}
        whileHover={{ 
          backgroundColor: '#e6521f', 
          borderColor: '#e6521f', 
          color: "#fff" 
        }}
        transition={{ duration: 0.25 }}
      >
        {children}
        <motion.span
          className="inline-block"
          initial={{ x: 0 }}
          whileHover={{ x: 4 }}
          transition={{ type: "spring", stiffness: 400, damping: 20 }}
        >
          →
        </motion.span>
      </motion.div>
    </Link>
  );
};

// ============ IMAGE WITH SCROLL-TILTING SHADOW ============
const RevealImage = ({ src, alt }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.9", "start 0.2"],
  });

  const clip = useTransform(scrollYProgress, [0, 1], [35, 0]);
  const clipPath = useTransform(clip, (v) => `inset(${v}% ${v / 2}% ${v}% ${v / 2}%)`);
  const scale = useTransform(scrollYProgress, [0, 1], [1.12, 1]);

  const shadowSkew = useTransform(scrollYProgress, [0, 1], [-22, 6]);
  const shadowX = useTransform(scrollYProgress, [0, 1], [-30, 18]);
  const shadowOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.05, 0.35, 0.18]);

  return (
    <div ref={ref} className="relative w-full md:w-[420px] flex-shrink-0">
      <motion.div
        aria-hidden="true"
        className="absolute left-2 right-2 bottom-0 h-[88%] -z-10"
        style={{
          backgroundColor: "#000",
          opacity: shadowOpacity,
          skewX: shadowSkew,
          x: shadowX,
          transformOrigin: "bottom left",
          filter: "blur(2px)",
        }}
      />
      <div className="relative aspect-[4/5] overflow-hidden" style={{ backgroundColor: COLORS.ink }}>
        <motion.img
          src={src}
          alt={alt}
          className="w-full h-full object-cover"
          style={{ clipPath, scale, filter: "grayscale(0.15)" }}
        />
        <div className="absolute inset-3 pointer-events-none">
          <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-[#e6521f]" />
          <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-[#e6521f]" />
        </div>
      </div>
    </div>
  );
};

// ============ MAIN SERVICE SECTION ============
const ServiceSection = ({
  title,
  description,
  imgSrc,
  imgAlt,
  theme = "light",
  reversed = false,
  code,
  to = "/contact",
}) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.8", "start 0.3"] });
  const lineScale = useTransform(scrollYProgress, [0.1, 0.9], [0, 1]);
  const textY = useTransform(scrollYProgress, [0, 1], [40, 0]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.6], [0, 1]);

  const t = THEMES[theme] || THEMES.light;

  return (
    <section ref={ref} className="py-10 px-6 md:px-16" style={{ backgroundColor: t.bg }}>
      <div
        className={`max-w-6xl mx-auto flex flex-col ${
          reversed ? "md:flex-row-reverse" : "md:flex-row"
        } items-center gap-12 md:gap-20`}
      >
        <RevealImage src={imgSrc} alt={imgAlt} />

        <motion.div style={{ y: textY, opacity: textOpacity }} className="flex-1">
          {code && (
            <span
              className="font-mono text-xs tracking-[0.2em] uppercase"
              style={{ color: SIGNAL }}
            >
              Service {code}
            </span>
          )}

          <h2
            className="mt-4 text-3xl md:text-[2.4rem] leading-[1.1] font-bold"
            style={{
              color: t.heading,
              fontFamily: "'Space Grotesk', sans-serif",
              letterSpacing: "-0.01em",
            }}
          >
            {title}
          </h2>

          <motion.div
            className="h-[3px] mt-6 mb-7 origin-left"
            style={{ backgroundColor: SIGNAL, scaleX: lineScale, width: 64 }}
          />

          <p
            className="text-[15px] leading-relaxed mb-9 max-w-md"
            style={{ color: t.body, fontFamily: "Inter, sans-serif" }}
          >
            {description}
          </p>

          <ArrowButton theme={theme} to={to} />
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceSection;