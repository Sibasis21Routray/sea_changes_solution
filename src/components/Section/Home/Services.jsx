import { Link } from "react-router-dom";

const services = [
  {
    number: "01",
    path: "/services/compliance",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Compliance & Regulatory",
    brand: "CALM by SeaChange",
    tagline: "Compliance Made Simple, Learning Made Seamless.",
    desc: "Navigate complex regulatory landscapes with confidence. We handle filings, audits, and governance frameworks so you stay compliant and penalty-free.",
  },
  {
    number: "02",
    path: "/services/digital-marketing",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
      </svg>
    ),
    title: "Digital Marketing",
    brand: "SeaChange Digital",
    tagline: "Smart Marketing. Real Results.",
    desc: "Data-driven campaigns across SEO, paid ads, social media, and content — built to grow your brand and drive measurable ROI.",
  },
  {
    number: "03",
    path: "/services/tech-services",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    title: "Technology Services",
    brand: "SeaChange Tech",
    tagline: "Engineered for What’s Next.We craft future-ready digital systems that grow with you.",
    desc: "We craft future-ready digital systems that grow with you. From custom web apps to enterprise integrations, our engineers deliver robust solutions.",
  },
];

export default function Services() {
  return (
    <section className="py-20 bg-[#0B1230]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mb-14">
          <h2 className="text-4xl sm:text-5xl font-black text-white leading-tight">
            From compliance to campaigns{" "}
            <span className="block">
              to code—<span className="text-[#7C8AED]">we power your growth.</span>
            </span>
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 rounded-3xl overflow-hidden bg-white">
          {services.map((s, idx) => (
            <Link
              key={s.number}
              to={s.path}
              className={`
                group relative flex flex-col px-8 py-12 overflow-hidden
                transition-colors duration-500
                ${idx !== 0 ? "border-l border-gray-200" : ""}
                hover:bg-[#FF4D00]
              `}
            >
              {/* Dot pattern overlay, only visible on hover */}
              <svg
                className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                aria-hidden="true"
              >
                <defs>
                  <pattern id={`dots-${idx}`} x="0" y="0" width="14" height="14" patternUnits="userSpaceOnUse">
                    <circle cx="2" cy="2" r="1.4" fill="rgba(255,255,255,0.35)" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill={`url(#dots-${idx})`} />
              </svg>

              {/* Number, faded top-left */}
              <span
                className="
                  absolute top-8 left-8 text-5xl font-black
                  text-gray-100 group-hover:text-white/15
                  transition-colors duration-500 select-none
                "
              >
                {s.number}
              </span>

              {/* Icon badge, top-right, switches style on hover */}
              <div className="relative z-10 flex justify-end mb-10">
                <div
                  className="
                    w-16 h-16 rounded-full flex items-center justify-center
                    bg-gray-50 text-[#0B1230]
                    group-hover:bg-white/15 group-hover:text-white
                    transition-colors duration-500
                  "
                >
                  {s.icon}
                </div>
              </div>

              {/* Title */}
              <h3
                className="
                  relative z-10 text-2xl font-bold text-center mb-4
                  text-[#0B1230] group-hover:text-white
                  transition-colors duration-500
                "
              >
                {s.title}
              </h3>

              {/* Underline accent */}
              <span
                className="
                  relative z-10 mx-auto w-8 h-[3px] rounded-full mb-6
                  bg-[#FF4D00] group-hover:bg-white
                  transition-colors duration-500
                "
              />

              {/* Brand + tagline */}
              <div className="relative z-10 text-center flex-1">
                <p
                  className="
                    font-bold text-sm mb-1
                    text-[#0B1230] group-hover:text-white
                    transition-colors duration-500
                  "
                >
                  {s.brand}
                </p>
                <p
                  className="
                    text-sm leading-relaxed
                    text-gray-500 group-hover:text-white/85
                    transition-colors duration-500
                  "
                >
                  {s.tagline}
                </p>
              </div>

              {/* Read More pill */}
              <div className="relative z-10 flex justify-center mt-8">
                <span
                  className="
                    inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold
                    border transition-colors duration-500
                    bg-white text-[#0B1230] border-gray-200
                    group-hover:bg-[#0B1230] group-hover:text-white group-hover:border-[#0B1230]
                  "
                >
                  Read More
                  <span
                    className="
                      w-5 h-5 rounded-full flex items-center justify-center text-xs
                      bg-[#FF4D00] text-white
                    "
                  >
                    +
                  </span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}