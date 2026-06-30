import { Link } from "react-router-dom";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef, useEffect, useState } from "react";

function useCounter(target, duration = 1800, start = false) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      setValue(Math.floor(ease * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);
  return value;
}

function Particle({ delay, x, size, duration }) {
  return (
    <motion.div
      className="absolute rounded-full pointer-events-none"
      style={{ width: size, height: size, left: `${x}%`, bottom: "-10px", background: "rgba(232,184,75,0.18)" }}
      animate={{ y: [0, -500], opacity: [0, 0.5, 0], scale: [0.5, 1, 0.3] }}
      transition={{ duration, delay, repeat: Infinity, ease: "easeOut" }}
    />
  );
}

export default function Hero() {
  const sectionRef = useRef(null);
  const [statsVisible, setStatsVisible] = useState(false);

  const c1 = useCounter(100, 2000, statsVisible);
  const c2 = useCounter(50, 1600, statsVisible);
  const c3 = useCounter(500, 1200, statsVisible);

  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const smoothBgY = useSpring(bgY, { stiffness: 60, damping: 20 });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStatsVisible(true); },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const particles = [
    { delay: 0,   x: 8,  size: 5, duration: 9  },
    { delay: 2,   x: 22, size: 3, duration: 11 },
    { delay: 1,   x: 55, size: 4, duration: 10 },
    { delay: 3,   x: 75, size: 6, duration: 8  },
    { delay: 1.5, x: 88, size: 3, duration: 12 },
  ];

  const slideUp = { hidden: { opacity: 0, y: 28 }, visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] } } };
  const stagger = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.11, delayChildren: 0.35 } } };

  return (
    <section
      ref={sectionRef}
      className="relative h-full md:h-screen  overflow-hidden flex items-center"
    >
      {/* Parallax BG */}
      <motion.div className="absolute inset-0 w-full h-[115%] -top-[8%]" style={{ y: smoothBgY }}>
        <img src="/homepage/hero-bg.png" alt="" aria-hidden className="w-full h-full object-cover object-center" />
      </motion.div>

      {/* Dark overlay */}
      {/* <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "linear-gradient(110deg, rgba(8,14,30,0.88) 0%, rgba(8,14,30,0.68) 52%, rgba(8,14,30,0.32) 100%)" }}
      /> */}

      {/* Gold vignette */}
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at 0% 100%, rgba(232,184,75,0.07) 0%, transparent 52%)" }} />

      {/* Grid */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.05]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid" width="72" height="72" patternUnits="userSpaceOnUse">
            <path d="M 72 0 L 0 0 0 72" fill="none" stroke="#7c93ac" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>

      {/* Particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {particles.map((p, i) => <Particle key={i} {...p} />)}
      </div>

      {/* Content */}
      <div className="relative w-full max-w-7xl mx-auto px-6 lg:px-12 z-10 mt-30 md:mt-20 lg:mt-0 ">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">

          {/* ── LEFT ── */}
          <motion.div variants={stagger} initial="hidden" animate="visible" className="flex flex-col">

            {/* Eyebrow */}
            <motion.div variants={slideUp} className="flex items-center gap-3 mb-5">
              <motion.span
                className="h-px bg-[#7c93ac]"
                initial={{ width: 0 }}
                animate={{ width: 24 }}
                transition={{ duration: 1.1, delay: 0.5 }}
              />
              <span className="text-[#7c93ac] text-[10px] font-bold uppercase tracking-[0.26em]">
                Peace of Mind with SEACHANGE
              </span>
            </motion.div>

            {/* Headline */}
            <div className="mb-1 overflow-hidden">
              <motion.h1
                className="font-black leading-[1.0] tracking-tight text-white"
                style={{ fontSize: "clamp(2.4rem, 5.5vw, 3.8rem)" }}
                initial={{ y: "105%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.85, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                 Grow.   
                <motion.span
                  style={{ color: "#7c93ac" }}
                  initial={{ opacity: 0, scale: 0.4, rotate: -20 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  transition={{ duration: 0.5, delay: 1.0, type: "spring", stiffness: 220 }}
                >
                     Comply .
                </motion.span>
              </motion.h1>
            </div>
            <div className="mb-4 overflow-hidden">
              <motion.h1
                className="font-black leading-[1.0] tracking-tight text-white"
                style={{ fontSize: "clamp(2.4rem, 5.5vw, 3.8rem)" }}
                initial={{ y: "105%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.85, delay: 0.64, ease: [0.16, 1, 0.3, 1] }}
              >
                 Thrive 
              </motion.h1>
            </div>

            {/* Underline */}
            <motion.div
              className="mb-5"
              style={{ height: "3px", background: "#7c93ac", borderRadius: "2px", originX: 0, width: "clamp(150px, 36%, 260px)" }}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.95, delay: 1.05, ease: [0.16, 1, 0.3, 1] }}
            />

            {/* Body */}
            <motion.p
              variants={slideUp}
              className="text-white/70 text-sm sm:text-base leading-relaxed mb-7 max-w-sm"
              style={{ textShadow: "0 1px 6px rgba(0,0,0,0.5)" }}
            >
              SeaChange Solutions is a trusted partner in Southeast Asia and Sri Lanka, helping businesses expand, build a strong presence, and thrive in a fast-changing world through tailored compliance, learning, digital marketing, and technology solutions.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={slideUp} className="flex flex-wrap items-center gap-3 mb-8">
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2.5 px-6 py-2.5 font-semibold text-sm rounded-full"
                  style={{ background: "#7c93ac", color: "#0D1117" }}
                >
                 Get a Consultation
                  <motion.span
                    className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 text-xs"
                    // style={{ background: "rgba(0,0,0,0.15)" }}
                    animate={{ x: [0, 3, 0] }}
                    transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
                    aria-hidden
                  >→</motion.span>
                </Link>
              </motion.div>

              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                {/* <Link
                  to="/about"
                  className="inline-flex items-center gap-2 px-6 py-2.5 font-semibold text-sm rounded-full border-2 text-white transition-all duration-200 hover:bg-white/10"
                  style={{ borderColor: "rgba(255,255,255,0.45)" }}
                >
                  Get a consultation
                </Link> */}
              </motion.div>
            </motion.div>

            {/* Stats */}
            <motion.div variants={slideUp} className="flex flex-wrap items-center gap-0">
              {/* Blue card */}
              <motion.div
                className="flex flex-col justify-center px-5 py-4 rounded-xl mr-3"
                style={{ background: "#f23c32", minWidth: "110px" }}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <p className="font-black text-white leading-none flex items-baseline gap-0.5" style={{ fontSize: "1.65rem" }}>
                  {statsVisible ? (c1 >= 10000 ? "100" : `${(c1)}`) : "0"}
                  <span style={{ color: "#7c93ac", fontSize: "1rem" }}>+</span>
                </p>
                <p className="text-white/65 text-[10px] mt-0.5 font-medium">Happy customers</p>
              </motion.div>

              <span className="text-white/35 font-bold text-lg mx-2.5 select-none" aria-hidden>+</span>

              <div className="flex flex-col justify-center px-3 py-4" style={{ minWidth: "76px" }}>
                <p className="font-black text-white leading-none flex items-baseline gap-0.5" style={{ fontSize: "1.65rem" }}>
                  {statsVisible ? (c2 >= 50 ? "50" : c2) : "0"}
                  <span style={{ color: "#7c93ac", fontSize: "1rem" }}>+</span>
                </p>
                <p className="text-white/50 text-[10px] mt-0.5 font-medium">Projects Completed</p>
              </div>

              <span className="text-white/35 font-bold text-lg mx-2.5 select-none" aria-hidden>+</span>

              <div className="flex flex-col justify-center px-3 py-4" style={{ minWidth: "68px" }}>
                <p className="font-black text-white leading-none flex items-baseline gap-0.5" style={{ fontSize: "1.65rem" }}>
                  {statsVisible ? (c3 >= 500 ? "500" : c3) : "0"}
                  <span style={{ color: "#7c93ac", fontSize: "1rem" }}>+</span>
                </p>
                <p className="text-white/50 text-[10px] mt-0.5 font-medium">Man-years Experience</p>
              </div>
            </motion.div>
          </motion.div>

          {/* ── RIGHT — image card ── */}
          <motion.div
            className="flex justify-center lg:justify-end"
            style={{ height: "clamp(320px, 52vh, 480px)" }}
          >
            <motion.div
              className="relative rounded-2xl overflow-hidden"
              style={{ width: "100%", maxWidth: "460px", height: "100%" }}
              initial={{ opacity: 0, scale: 0.93, y: 32 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1.0, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ scale: 1.02 }}
            >
              <img
                src="/homepage/banner_images-01.png"
                alt="Mountain landscape"
                className="w-full h-full object-fill"
                style={{ filter: "brightness(0.88) saturate(1.1)" }}
              />
              <div
                className="absolute inset-0 pointer-events-none"
                style={{ background: "linear-gradient(to top, rgba(8,14,30,0.6) 0%, transparent 42%)" }}
              />

              {/* Corner accent */}
              <div
                className="absolute top-3 right-3 w-8 h-8 pointer-events-none"
                style={{ borderTop: "2px solid rgba(232,184,75,0.45)", borderRight: "2px solid rgba(232,184,75,0.45)" }}
              />

              {/* Next trip pill */}
              <motion.div
                className="absolute bottom-4 left-4"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 1.15 }}
              >
                {/* <div
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold text-white"
                  style={{ background: "rgba(15,20,40,0.78)", backdropFilter: "blur(10px)", border: "1px solid rgba(255,255,255,0.1)" }}
                >
                  <motion.span
                    className="w-1.5 h-1.5 rounded-full bg-[#7c93ac] flex-shrink-0"
                    animate={{ scale: [1, 1.5, 1], opacity: [1, 0.4, 1] }}
                    transition={{ duration: 1.8, repeat: Infinity }}
                  />
                  Next trip
                  <motion.span
                    className="opacity-60 text-sm"
                    animate={{ x: [0, 3, 0] }}
                    transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                  >→</motion.span>
                </div> */}
              </motion.div>
            </motion.div>
          </motion.div>

        </div>
      </div>

      {/* Scroll indicator */}
      {/* <motion.div
        className="absolute bottom-5 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.8 }}
      >
        <span className="text-white/30 text-[9px] tracking-[0.22em] uppercase">Scroll</span>
        <motion.div
          className="w-px h-6 bg-[#7c93ac]/35"
          animate={{ scaleY: [0, 1, 0], originY: 0 }}
          transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div> */}
    </section>
  );
}