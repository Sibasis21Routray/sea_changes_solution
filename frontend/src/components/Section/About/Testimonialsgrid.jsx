import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";

const testimonials = [
  {
    name: "N. Haycocks",
    title: "CEO & Founder",
    quote:
      "SeaChange has been instrumental in helping us navigate the South Asian market. Their deep understanding of regional consumer behavior and marketing strategies has allowed me to focus on my core business with confidence. Their expertise, professionalism, and strategic insights have made a real impact. I highly recommend SeaChange to anyone looking to succeed in this dynamic market.",
  },
  {
    name: "R.K. Teo",
    title: "Managed Services Lead",
    quote:
      "Having an outsourced partner manage our digital marketing strategy and execution end to end has been a blessing. SeaChange brings expertise, efficiency, and a deep understanding of the digital landscape, allowing us to focus on our core operations. Their seamless execution and strategic approach have made a significant impact, and I highly recommend them to any business looking for a reliable marketing partner.",
  },
  {
    name: "Susan Koo",
    title: "HR Manager",
    quote:
      "The training conducted by SeaChange has been truly transformative for our team. It has not only enhanced the way our employees work but also changed the way they think. The sessions were insightful, practical, and highly engaging, equipping our team with the skills needed to thrive in today's fast-paced environment. I'm extremely pleased with the results and their impactful training programs.",
  },
];

const stats = [
  { value: "100", suffix: "+", label: "Happy Customers" },
  { value: "99.8", suffix: "%", label: "Customer Satisfaction Rate" },
];

// Steel-blue depth palette for avatars
const avatarColors = ["#1E3A5F", "#2A4F72", "#163050"];

function CountUp({ value, suffix }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const isDecimal = value.includes(".");
  const target = parseFloat(value);
  const mv = useMotionValue(0);
  const rounded = useTransform(mv, (v) => (isDecimal ? v.toFixed(1) : Math.round(v)));

  useEffect(() => {
    if (inView) {
      const controls = animate(mv, target, { duration: 1.6, ease: [0.16, 1, 0.3, 1] });
      return controls.stop;
    }
  }, [inView, mv, target]);

  return (
    <span ref={ref}>
      <motion.span>{rounded}</motion.span>
      <span style={{ color: "#8FB5CC" }}>{suffix}</span>
    </span>
  );
}

function Stars({ delay = 0 }) {
  return (
    <div className="flex gap-1 mt-6">
      {Array.from({ length: 5 }).map((_, i) => (
        <motion.svg
          key={i}
          initial={{ opacity: 0, scale: 0, rotate: -45 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ 
            delay: delay + i * 0.1, 
            duration: 0.5, 
            type: "spring", 
            stiffness: 300, 
            damping: 15 
          }}
          className="w-4 h-4"
          fill="#8FB5CC"
          viewBox="0 0 20 20"
          whileHover={{ 
            scale: 1.3, 
            rotate: 15,
            fill: "#C5DCE8",
            transition: { type: "spring", stiffness: 400, damping: 10 }
          }}
        >
          <path d="M10 1.5l2.6 5.6 6.1.6-4.6 4.1 1.3 6-5.4-3.2-5.4 3.2 1.3-6L1.3 7.7l6.1-.6L10 1.5z" />
        </motion.svg>
      ))}
    </div>
  );
}

export default function TestimonialsGrid() {
  const sectionRef = useRef(null);

  return (
    <section ref={sectionRef} className="py-24 relative overflow-hidden" style={{ background: "#0A1628" }}>

      {/* Enhanced Ambient glows with animation */}
      <motion.div
        className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(143,181,204,0.07) 0%, transparent 70%)" }}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.7, 1, 0.7],
          x: [0, 30, 0],
          y: [0, -20, 0],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-40 -right-20 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(90,143,173,0.05) 0%, transparent 70%)" }}
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.5, 1, 0.5],
          x: [0, -20, 0],
          y: [0, 30, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      />

      {/* Floating decorative elements */}
      <motion.div
        className="absolute top-20 right-1/4 w-1.5 h-1.5 bg-[#8FB5CC]/30 rounded-full pointer-events-none"
        animate={{
          y: [-40, 40, -40],
          x: [-20, 20, -20],
          opacity: [0.2, 0.6, 0.2],
          scale: [1, 1.5, 1],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-40 left-1/3 w-2 h-2 bg-[#5A8FAD]/20 rounded-full pointer-events-none"
        animate={{
          y: [30, -30, 30],
          x: [15, -15, 15],
          opacity: [0.1, 0.5, 0.1],
          scale: [1, 1.8, 1],
        }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Enhanced Header with staggered animations */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.15,
                delayChildren: 0.1,
              },
            },
          }}
          className="grid grid-cols-1 lg:grid-cols-12 items-end gap-10 mb-16 w-full"
        >
          <div className="lg:col-span-7">
            {/* Badge with animated line */}
            <motion.div
              variants={{
                hidden: { opacity: 0, x: -20 },
                visible: { 
                  opacity: 1, 
                  x: 0,
                  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
                },
              }}
              className="flex items-center gap-3 mb-4"
            >
              <motion.span
                className="w-8 h-px bg-[#8FB5CC] relative overflow-hidden"
                variants={{
                  hidden: { width: 0, opacity: 0 },
                  visible: {
                    width: 32,
                    opacity: 1,
                    transition: { duration: 0.7, delay: 0.3, ease: [0.65, 0, 0.35, 1] }
                  }
                }}
              >
                <motion.span
                  className="absolute inset-0 bg-white/60"
                  animate={{ x: ["-100%", "200%"] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                />
              </motion.span>
              <motion.span
                className="text-xs font-semibold uppercase tracking-widest text-white"
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.5, delay: 0.5 }
                  }
                }}
              >
                Testimonials
              </motion.span>
            </motion.div>

            {/* Animated heading with word reveal */}
            <h2 className="text-4xl sm:text-5xl font-black leading-none text-[#F0F2F8]">
              <div className="overflow-hidden py-1">
                <motion.span
                  variants={{
                    hidden: { y: "120%", opacity: 0, rotate: 3 },
                    visible: {
                      y: 0,
                      opacity: 1,
                      rotate: 0,
                      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.3 }
                    }
                  }}
                  className="inline-block"
                >
                  SEACHANGE Customer{" "}
                </motion.span>
              </div>
              <div className="overflow-hidden py-1">
                <motion.span
                  variants={{
                    hidden: { y: "120%", opacity: 0, rotate: 3 },
                    visible: {
                      y: 0,
                      opacity: 1,
                      rotate: 0,
                      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.45 }
                    }
                  }}
                  className="inline-block"
                >
                  <motion.span
                    className="text-[#8FB5CC]"
                    whileHover={{
                      color: "#FFFFFF",
                      textShadow: "0 0 20px rgba(143,181,204,0.4)",
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    Reviews
                  </motion.span>
                </motion.span>
              </div>
            </h2>
          </div>

          {/* Enhanced Stats with pop animation */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.7, delay: 0.6, ease: [0.16, 1, 0.3, 1] }
              }
            }}
            className="flex gap-10 lg:gap-14"
          >
            {stats.map((s, idx) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 + idx * 0.15, duration: 0.6, type: "spring", stiffness: 200, damping: 15 }}
                whileHover={{ scale: 1.05 }}
                className="text-right flex flex-col justify-end min-w-[140px] sm:min-w-[180px]"
              >
                <p className="text-4xl sm:text-5xl font-black text-[#F0F2F8] leading-none">
                  <CountUp value={s.value} suffix={s.suffix} />
                </p>
                <motion.p
                  className="text-sm font-medium mt-2 text-[#6B7280] whitespace-nowrap leading-none"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1 + idx * 0.2 }}
                >
                  {s.label}
                </motion.p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Enhanced Cards with professional animations */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3,
              },
            },
          }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {testimonials.map((t, index) => (
            <motion.div
              key={t.name}
              variants={{
                hidden: { 
                  opacity: 0, 
                  y: 60, 
                  scale: 0.92,
                  rotateX: -15,
                },
                visible: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  rotateX: 0,
                  transition: {
                    duration: 0.9,
                    ease: [0.16, 1, 0.3, 1],
                  }
                },
              }}
              whileHover={{
                y: -10,
                scale: 1.02,
                boxShadow: "0 30px 80px rgba(143,181,204,0.15)",
                borderColor: "rgba(143,181,204,0.4)",
                transition: { type: "spring", stiffness: 250, damping: 18 },
              }}
              className="group relative flex flex-col rounded-2xl p-8 cursor-pointer"
              style={{
                background: "linear-gradient(145deg, #0D1E38 0%, #111F36 100%)",
                border: "1px solid rgba(143,181,204,0.08)",
                transformPerspective: 1000,
              }}
            >
              {/* Enhanced shimmer line with gradient animation */}
              <motion.div
                className="absolute top-0 left-8 right-8 h-px rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: "linear-gradient(90deg, transparent, #8FB5CC, #C5DCE8, transparent)" }}
                animate={{
                  background: [
                    "linear-gradient(90deg, transparent, #8FB5CC, #C5DCE8, transparent)",
                    "linear-gradient(90deg, transparent, #C5DCE8, #8FB5CC, transparent)",
                    "linear-gradient(90deg, transparent, #8FB5CC, #C5DCE8, transparent)",
                  ],
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              />

              {/* Animated quote mark */}
              <motion.span
                className="absolute top-6 right-7 text-7xl font-serif leading-none select-none opacity-10 group-hover:opacity-20 transition-opacity duration-500"
                style={{ color: "#8FB5CC" }}
                animate={{
                  y: [0, -5, 0],
                  scale: [1, 1.05, 1],
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: index * 0.5 }}
              >
                &rdquo;
              </motion.span>

              {/* Avatar + name with enhanced animations */}
              <div className="flex items-center gap-4 mb-5 relative z-10">
                <motion.div
                  initial={{ scale: 0, rotate: -30 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ 
                    delay: 0.5 + index * 0.15, 
                    type: "spring", 
                    stiffness: 280, 
                    damping: 16 
                  }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg shrink-0 relative overflow-hidden"
                  style={{ background: avatarColors[index] }}
                >
                  {/* Avatar shimmer */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                    animate={{ x: ["-100%", "200%"] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: index * 0.5 }}
                  />
                  <span className="relative z-10">{t.name.charAt(0)}</span>
                </motion.div>
                <div>
                  <motion.p
                    className="font-bold text-base text-[#E8EAF0]"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 + index * 0.15, duration: 0.4 }}
                  >
                    {t.name}
                  </motion.p>
                  <motion.p
                    className="text-sm font-medium"
                    style={{
                      background: "linear-gradient(90deg, #8FB5CC, #C5DCE8)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.7 + index * 0.15, duration: 0.5 }}
                  >
                    {t.title}
                  </motion.p>
                </div>
              </div>

              {/* Quote text with fade-in animation */}
              <motion.p
                className="relative z-10 text-sm leading-relaxed flex-1 text-[#8D95A8]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.75 + index * 0.15, duration: 0.6 }}
              >
                {t.quote}
              </motion.p>

              {/* Stars with hover interaction */}
              <div className="relative z-10">
                <Stars delay={0.8 + index * 0.15} />
              </div>

              {/* Card hover gradient overlay */}
              <motion.div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: "linear-gradient(135deg, rgba(143,181,204,0.03) 0%, transparent 50%, rgba(143,181,204,0.02) 100%)",
                }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}