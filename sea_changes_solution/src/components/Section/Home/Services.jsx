import { Link } from "react-router-dom";
import { useState } from "react";

const services = [
  {
    number: "01",
    path: "/services/compliance",
    title: "Compliance & Regulatory",
    brand: "CALM by SeaChange",
    tagline: "Compliance Made Simple, Learning Made Seamless.",
    desc: "Navigate complex regulatory landscapes with confidence. We handle filings, audits, and governance frameworks so you stay compliant and penalty-free.",
    tag: "Risk & Governance",
  },
  {
    number: "02",
    path: "/services/digital-marketing",
    title: "Digital Marketing",
    brand: "SeaChange Digital",
    tagline: "Smart Marketing. Real Results.",
    desc: "Data-driven campaigns across SEO, paid ads, social media, and content — built to grow your brand and drive measurable ROI.",
    tag: "Growth & Brand",
  },
  {
    number: "03",
    path: "/services/tech-services",
    title: "Technology Services",
    brand: "SeaChange Tech",
    tagline: "Engineered for What's Next.",
    desc: "We craft future-ready digital systems that grow with you. From custom web apps to enterprise integrations, our engineers deliver robust solutions.",
    tag: "Engineering",
  },
];

export default function Services() {
  const [hovered, setHovered] = useState(null);

  return (
    <section className="bg-[#1C1C1C] relative overflow-hidden">

      {/* Subtle grid */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.04]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="sg" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#F5F0E8" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#sg)" />
      </svg>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header row */}
        <div className="border-b border-white/10 py-14 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
          <div>
            <span className="text-[#B5813A] text-xs font-bold tracking-[0.25em] uppercase block mb-3">What We Offer</span>
            <h2 className="text-4xl sm:text-5xl font-black text-white leading-tight max-w-xl">
              Three pillars.<br />One partner.
            </h2>
          </div>
          <p className="text-[#7A6E5E] text-sm leading-relaxed max-w-xs">
            From staying audit-ready to building your brand and deploying scalable technology — all under one roof.
          </p>
        </div>

        {/* Service rows */}
        {services.map((s, i) => (
          <Link
            key={s.number}
            to={s.path}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
            className={`
              group relative flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-0
              border-b border-white/10 py-10 lg:py-8 transition-all duration-300
              ${hovered === i ? "bg-[#252520]" : ""}
            `}
          >
            {/* Animated left fill strip */}
            <div
              className="absolute left-0 top-0 h-full w-[3px] bg-[#B5813A] transition-all duration-500 origin-top"
              style={{ transform: hovered === i ? "scaleY(1)" : "scaleY(0)" }}
            />

            {/* Number */}
            <div className="lg:w-20 flex-shrink-0">
              <span className="text-[#3A3A35] font-black text-4xl tabular-nums leading-none group-hover:text-[#B5813A] transition-colors duration-300">
                {s.number}
              </span>
            </div>

            {/* Tag pill */}
            <div className="lg:w-36 flex-shrink-0">
              <span className="inline-block border border-white/15 text-[#8A8070] text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-none">
                {s.tag}
              </span>
            </div>

            {/* Title + brand */}
            <div className="lg:w-64 flex-shrink-0 lg:px-8">
              <h3 className="text-white font-black text-xl mb-1 group-hover:text-[#E8D5B0] transition-colors duration-300">
                {s.title}
              </h3>
              <p className="text-[#5A5040] text-xs font-semibold tracking-wide">{s.brand}</p>
            </div>

            {/* Desc — hidden until hover on desktop */}
            <div className="flex-1 lg:px-8">
              <p className="text-[#7A6E5E] text-sm leading-relaxed lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300">
                {s.desc}
              </p>
            </div>

            {/* Arrow */}
            <div className="lg:w-16 flex-shrink-0 flex lg:justify-end">
              <span className="w-9 h-9 border border-white/15 flex items-center justify-center text-[#5A5040] group-hover:border-[#B5813A] group-hover:text-[#B5813A] transition-all duration-300 group-hover:translate-x-1">
                →
              </span>
            </div>
          </Link>
        ))}

        {/* Footer note */}
        <div className="py-8 text-center">
          {/* <Link
            to="/services"
            className="text-[#5A5040] text-sm hover:text-[#B5813A] transition-colors duration-200 font-medium tracking-wide"
          >
            View all services ↗
          </Link> */}
        </div>
      </div>
    </section>
  );
}
