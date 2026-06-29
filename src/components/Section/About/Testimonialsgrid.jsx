import { motion } from "framer-motion";

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

const avatarColors = ["#1E3A5F", "#2D6A4F", "#4A1942"];

function Stars() {
  return (
    <div className="flex gap-1 mt-6">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} className="w-4 h-4" fill="#F5A623" viewBox="0 0 20 20">
          <path d="M10 1.5l2.6 5.6 6.1.6-4.6 4.1 1.3 6-5.4-3.2-5.4 3.2 1.3-6L1.3 7.7l6.1-.6L10 1.5z" />
        </svg>
      ))}
    </div>
  );
}

export default function TestimonialsGrid() {
  return (
    <section className="py-24 relative overflow-hidden" style={{ background: "#0B0F1A" }}>
      {/* Subtle radial glow top-left */}
      <div
        className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(99,102,241,0.12) 0%, transparent 70%)",
        }}
      />
      {/* Subtle radial glow bottom-right */}
      <div
        className="absolute -bottom-40 -right-20 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(245,166,35,0.08) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10 mb-16"
        >
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-px" style={{ background: "#6366F1" }} />
              <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: "#6366F1" }}>
                Testimonials
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-black leading-tight" style={{ color: "#F0F2F8" }}>
              SEACHANGE Customer{" "}
              <span
                style={{
                  background: "linear-gradient(90deg, #6366F1 0%, #A78BFA 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Reviews
              </span>
            </h2>
          </div>

          <div className="flex gap-12">
            {stats.map((s) => (
              <div key={s.label} className="text-right">
                <p className="text-4xl sm:text-5xl font-black" style={{ color: "#F0F2F8" }}>
                  {s.value}
                  <span style={{ color: "#F5A623" }}>{s.suffix}</span>
                </p>
                <p className="text-sm font-medium mt-1 max-w-[160px] ml-auto" style={{ color: "#6B7280" }}>
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Cards */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {testimonials.map((t, index) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.12, duration: 0.6 }}
              whileHover={{
                y: -8,
                boxShadow: "0 24px 60px rgba(99,102,241,0.25)",
                borderColor: "rgba(99,102,241,0.5)",
              }}
              className="group relative flex flex-col rounded-2xl p-8 cursor-pointer"
              style={{
                background: "linear-gradient(145deg, #141824 0%, #1A1F2E 100%)",
                border: "1px solid rgba(255,255,255,0.07)",
                transition: "all 0.35s cubic-bezier(0.4,0,0.2,1)",
              }}
            >
              {/* Top shimmer line on hover */}
              <div
                className="absolute top-0 left-8 right-8 h-px rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: "linear-gradient(90deg, transparent, #6366F1, #A78BFA, transparent)" }}
              />

              {/* Quote mark */}
              <span
                className="absolute top-6 right-7 text-7xl font-serif leading-none select-none opacity-10 group-hover:opacity-20 transition-opacity duration-500"
                style={{ color: "#6366F1" }}
              >
                &rdquo;
              </span>

              {/* Avatar + name */}
              <div className="flex items-center gap-4 mb-5 relative z-10">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg shrink-0"
                  style={{ background: avatarColors[index] }}
                >
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="font-bold text-base" style={{ color: "#E8EAF0" }}>
                    {t.name}
                  </p>
                  <p
                    className="text-sm font-medium"
                    style={{
                      background: "linear-gradient(90deg, #6366F1, #A78BFA)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    {t.title}
                  </p>
                </div>
              </div>

              {/* Quote text */}
              <p className="relative z-10 text-sm leading-relaxed flex-1" style={{ color: "#8D95A8" }}>
                {t.quote}
              </p>

              {/* Stars */}
              <div className="relative z-10">
                <Stars />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}