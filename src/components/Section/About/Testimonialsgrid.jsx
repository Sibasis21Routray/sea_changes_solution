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
      "The training conducted by has been truly transformative for our team. It has not only enhanced the way our employees work but also changed the way they think. The sessions were insightful, practical, and highly engaging, equipping our team with the skills needed to thrive in today's fast-paced environment. I'm extremely pleased with the results and their impactful training programs.",
  },
];

const stats = [
  { value: "100", suffix: "+", label: "Happy Customers" },
  { value: "99.8", suffix: "%", label: "Customer Satisfaction Rate" },
];

function Stars() {
  return (
    <div className="flex gap-1 mt-6">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} className="w-4 h-4 text-[#FF5A1F]" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10 1.5l2.6 5.6 6.1.6-4.6 4.1 1.3 6-5.4-3.2-5.4 3.2 1.3-6L1.3 7.7l6.1-.6L10 1.5z" />
        </svg>
      ))}
    </div>
  );
}

export default function TestimonialsGrid() {
  return (
    <section className="py-20 bg-[#06070D] relative overflow-hidden">
      {/* World map dot pattern background */}
      <div
        className="absolute inset-0 opacity-[0.15] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "14px 14px",
          maskImage:
            "radial-gradient(ellipse 60% 70% at 30% 50%, black 40%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 60% 70% at 30% 50%, black 40%, transparent 75%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header row: eyebrow + heading on left, stats on right */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="w-6 h-px bg-[#6C74D6]" />
              <span className="text-white text-sm font-medium">Testimonials</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-black text-white leading-tight">
              SEACHANGE Customer <span className="text-[#6C74D6]">Reviews</span>
            </h2>
          </div>

          <div className="flex gap-12">
            {stats.map((s) => (
              <div key={s.label} className="text-center sm:text-right">
                <p className="text-4xl sm:text-5xl font-black text-white">
                  {s.value}
                  <span className="text-[#6C74D6]">{s.suffix}</span>
                </p>
                <p className="text-[#8A93A8] text-sm font-medium mt-1 max-w-[160px] sm:ml-auto">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonial cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="
                group relative bg-white rounded-2xl p-8 flex flex-col
                border border-transparent
                hover:bg-[#FF5A1F] transition-colors duration-500
              "
            >
              {/* Corner accent marks */}
              <span className="absolute top-5 left-5 w-3 h-3 border-l-2 border-t-2 border-gray-300 group-hover:border-white/50 transition-colors duration-500" />
              <span className="absolute bottom-5 right-5 w-3 h-3 border-r-2 border-b-2 border-gray-300 group-hover:border-white/50 transition-colors duration-500" />

              {/* Big quote mark */}
              <span className="absolute top-7 right-7 text-6xl font-serif text-gray-100 group-hover:text-white/15 leading-none transition-colors duration-500 select-none">
                &rdquo;
              </span>

              <div className="flex items-center gap-4 mb-5 relative z-10">
                <div className="w-12 h-12 rounded-full bg-gray-100 group-hover:bg-white/15 flex items-center justify-center transition-colors duration-500">
                  <svg className="w-6 h-6 text-gray-400 group-hover:text-white/60 transition-colors duration-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 12a5 5 0 100-10 5 5 0 000 10zm0 2c-4.4 0-8 2.2-8 5v2h16v-2c0-2.8-3.6-5-8-5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[#0B1230] group-hover:text-white font-bold text-base transition-colors duration-500">
                    {t.name}
                  </p>
                  <p className="text-[#FF5A1F] group-hover:text-white/90 text-sm font-medium transition-colors duration-500">
                    {t.title}
                  </p>
                </div>
              </div>

              <p className="relative z-10 text-[#5B6478] group-hover:text-white/90 text-sm leading-relaxed transition-colors duration-500">
                {t.quote}
              </p>

              <div className="relative z-10">
                <Stars />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}