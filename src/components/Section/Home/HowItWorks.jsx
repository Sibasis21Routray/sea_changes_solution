const steps = [
  {
    step: "1",
    title: "Discovery & Consultation",
    desc: "We kick things off with an in-depth consultation to understand your business goals, challenges, and target markets—whether you're growing in Sri Lanka, scaling in Southeast Asia, or seeking stronger digital and compliance foundations. Our discovery sessions uncover insights that shape a strategic and personalized roadmap.",
  },
  {
    step: "2",
    title: "Strategic Planning",
    desc: "Based on your unique needs, we craft a tailored strategy that integrates our core services—Compliance & Learning Management and Digital Marketing. Whether it’s aligning your operations with local regulatory standards or building a digital presence that speaks to your audience, we develop a roadmap that balances precision with impact. From policy design and employee training to content strategy and campaign planning, we ensure every element supports your long-term success.",
  },
  {
    step: "3",
    title: "Implementation & Setup",
    desc: "Our team handles the complete implementation process—seamlessly onboarding your business into our Compliance & Learning Management systems and launching your digital marketing campaigns. This includes LMS integration, policy rollout, content planning, platform setup, and ad campaign execution. We take care of the technical and operational groundwork so you can focus on leading your business forward.",
  },
  {
    step: "4",
    title: "Operational Support",
    desc: "Once everything is up and running, we provide hands-on, ongoing support to keep your systems optimized and your marketing efforts effective. From managing compliance updates and delivering staff training modules, to campaign monitoring, ad optimization, and content scheduling, we ensure consistent performance across all touchpoints.",
  },
  {
    step: "5",
    title: "Continuous Improvement & Scaling",
    desc: "We don’t just set things up and walk away. SeaChange is built for long-term partnerships. We continuously assess what’s working, identify areas for enhancement, and adapt our strategies to keep pace with your business growth. Whether scaling your learning programs or expanding your digital footprint, we evolve with you.",
  },
  {
    step: "6",
    title: "Insights & Reporting",
    desc: "CData is at the heart of every decision we help you make. Through regular reporting and insight-driven reviews, we provide clarity on compliance readiness, training progress, campaign performance, and audience engagement. These insights inform smarter strategies and drive meaningful results—month after month.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-20 bg-[#F5F6FA] relative overflow-hidden">
      {/* Orange dot decoration, top-left */}
      <div
        className="absolute top-10 left-6 w-24 h-24 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, #FF6B35 1.5px, transparent 1.5px)",
          backgroundSize: "10px 10px",
          opacity: 0.6,
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-14">
          <h2 className="text-4xl sm:text-5xl font-black text-[#0B1F3A] leading-tight">
            The fastest way to{" "}
            <span className="text-[#5B63D3]">GROW, COMPLY and THRIVE</span>
          </h2>
          <div className="mt-8 border-t border-gray-200 relative">
            <span className="absolute -top-px left-0 w-12 h-[2px] bg-[#5B63D3]" />
          </div>
        </div>

        {/* Steps Grid: 3 columns x 2 rows */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((s) => (
            <div
              key={s.step}
              className="bg-[#EEF0F5] rounded-2xl p-10 flex flex-col items-center text-center"
            >
              {/* Number circle */}
              <div className="w-20 h-20 rounded-full bg-white p-1.5 mb-6 flex items-center justify-center">
                <div className="w-full h-full rounded-full bg-[#5B63D3] flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">{s.step}</span>
                </div>
              </div>

              <h3 className="text-[#0B1F3A] font-bold text-xl mb-3">{s.title}</h3>
              <p className="text-[#6B7280] text-[15px] leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}