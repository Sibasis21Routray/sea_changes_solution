import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-[#0A1628] overflow-hidden flex items-center pt-24">
      {/* Decorative blob - top left */}
      <div className="absolute top-16 left-0 w-[420px] h-[320px] bg-gradient-to-br from-[#7A1F1F] via-[#5A1515] to-transparent rounded-[60%] blur-2xl opacity-70 -translate-x-1/4 pointer-events-none" />
      <div className="absolute top-24 left-10 w-[360px] h-[260px] border border-white/10 rounded-[60%] pointer-events-none" />

      {/* Dotted grid - top right */}
      <svg className="absolute top-10 right-8 w-40 h-24 pointer-events-none opacity-80" viewBox="0 0 160 96" fill="none">
        {Array.from({ length: 6 }).map((_, row) =>
          Array.from({ length: 10 }).map((_, col) => (
            <circle
              key={`${row}-${col}`}
              cx={col * 16 + 4}
              cy={row * 16 + 4}
              r="1.6"
              fill={row === 5 && col > 6 ? "#E14B3D" : "#3A4D6B"}
            />
          ))
        )}
      </svg>

      {/* Arrow accents - top right */}
      <div className="absolute top-[6.5rem] right-44 flex items-center gap-1.5 pointer-events-none">
        <svg className="w-4 h-4 text-white/40" viewBox="0 0 24 24" fill="currentColor"><path d="M5 4l12 8-12 8V4z" /></svg>
        <svg className="w-4 h-4 text-white/40" viewBox="0 0 24 24" fill="currentColor"><path d="M5 4l12 8-12 8V4z" /></svg>
        <svg className="w-5 h-5 text-[#E14B3D]" viewBox="0 0 24 24" fill="currentColor"><path d="M5 4l12 8-12 8V4z" /></svg>
      </div>

      {/* Dotted grid + circle - bottom left */}
      <div className="absolute bottom-10 left-10 w-32 h-32 rounded-full border-2 border-white/10 pointer-events-none" />
      <svg className="absolute bottom-2 left-2 w-10 h-32 pointer-events-none" viewBox="0 0 40 128" fill="none">
        {Array.from({ length: 8 }).map((_, row) =>
          Array.from({ length: 2 }).map((_, col) => (
            <circle key={`${row}-${col}`} cx={col * 16 + 6} cy={row * 16 + 6} r="1.6" fill="#3A4D6B" />
          ))
        )}
      </svg>
      <div className="absolute bottom-16 left-2 text-white/30 text-xl font-bold pointer-events-none select-none">✕</div>
      <div className="absolute bottom-28 left-2 text-[#E14B3D] text-xl font-bold pointer-events-none select-none">✕</div>
      <div className="absolute bottom-4 left-2 text-white/30 text-xl font-bold pointer-events-none select-none">✕</div>

      {/* Dotted grid - bottom center */}
      <svg className="absolute bottom-6 left-1/2 -translate-x-1/2 w-44 h-28 pointer-events-none opacity-80" viewBox="0 0 176 112" fill="none">
        {Array.from({ length: 7 }).map((_, row) =>
          Array.from({ length: 11 }).map((_, col) => (
            <circle
              key={`${row}-${col}`}
              cx={col * 16 + 4}
              cy={row * 16 + 4}
              r="1.6"
              fill={row === 2 && col === 5 ? "#E14B3D" : row === 4 && col === 7 ? "#E14B3D" : "#3A4D6B"}
            />
          ))
        )}
      </svg>

      {/* Bottom right white arc */}
      <div className="absolute -bottom-24 -right-24 w-[420px] h-[420px] bg-white/[0.03] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-9 h-9 rounded-full border-2 border-white/20 flex items-center justify-center pointer-events-none">
        <span className="w-2 h-2 rounded-full bg-white/40" />
      </div>
      <svg className="absolute bottom-24 right-2 w-8 h-24 pointer-events-none" viewBox="0 0 32 96" fill="none">
        {Array.from({ length: 6 }).map((_, row) => (
          <rect key={row} x="4" y={row * 16 + 2} width="22" height="3" rx="1.5" fill="#3A4D6B" />
        ))}
      </svg>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full z-10">
        <motiondiv className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-10 items-center">
          {/* Text */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-px bg-[#3D5AFE]" />
              <span className="text-[#9BB3D6] text-sm font-semibold tracking-wide">
                Peace of Mind with SEACHANGE
              </span>
            </div>

            <motion.h1
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  className="text-5xl sm:text-6xl lg:text-[5rem] font-black text-white leading-[1.05] tracking-tight mb-6"
>
  Grow. Comply. Thrive
</motion.h1>

           <motion.p
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1, delay: 0.3 }}
  className="text-[#9BB3D6] text-base sm:text-lg leading-relaxed mb-8 max-w-lg"
>
  SeaChange Solutions is a trusted partner in Southeast Asia and Sri Lanka,
  helping businesses expand, build a strong presence, and thrive in a
  fast-changing world through tailored compliance, learning, digital marketing,
  and technology solutions.
</motion.p>

            <div className="w-full max-w-md h-px bg-white/10" />
          </div>

          {/* Image Collage */}
          <div className="relative flex justify-center lg:justify-end items-center">
  <motion.div
    initial={{ opacity: 0, x: 80, scale: 0.9 }}
    animate={{
      opacity: 1,
      x: 0,
      scale: 1,
      y: [0, -12, 0],
    }}
    transition={{
      opacity: { duration: 1 },
      x: { duration: 1 },
      scale: { duration: 1 },
      y: {
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut",
      },
    }}
    className="w-full max-w-[550px] aspect-[10/9] overflow-hidden drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
  >
    <img
      src="/homepage/banner_images-01.png"
      alt="SeaChange Solutions Overview"
      className="w-full h-full object-contain block"
    />
  </motion.div>
</div>
        </motiondiv>
      </div>
      <motion.div
  animate={{
    opacity: [0.15, 0.35, 0.15],
    scale: [1, 1.1, 1],
  }}
  transition={{
    duration: 6,
    repeat: Infinity,
    ease: "easeInOut",
  }}
  className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-transparent to-red-500/5 pointer-events-none"
/>
    </section>
  );
}