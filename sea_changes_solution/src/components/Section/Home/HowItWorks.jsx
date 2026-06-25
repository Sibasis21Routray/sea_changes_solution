import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const steps = [
  {
    step: "01",
    title: "Discovery & Consultation",
    desc: "We kick things off with an in-depth consultation to understand your business goals, challenges, and target markets—whether you're growing in Sri Lanka, scaling in Southeast Asia, or seeking stronger digital and compliance foundations. Our discovery sessions uncover insights that shape a strategic and personalized roadmap.",
  },
  {
    step: "02",
    title: "Strategic Planning",
    desc: "Based on your unique needs, we craft a tailored strategy that integrates our core services—Compliance & Learning Management and Digital Marketing. Whether it’s aligning your operations with local regulatory standards or building a digital presence that speaks to your audience, we develop a roadmap that balances precision with impact. From policy design and employee training to content strategy and campaign planning, we ensure every element supports your long-term success.",
  },
  {
    step: "03",
    title: "Implementation & Setup",
    desc: "Our team handles the complete implementation process—seamlessly onboarding your business into our Compliance & Learning Management systems and launching your digital marketing campaigns. This includes LMS integration, policy rollout, content planning, platform setup, and ad campaign execution. We take care of the technical and operational groundwork so you can focus on leading your business forward.",
  },
  {
    step: "04",
    title: "Operational Support",
    desc: "Once everything is up and running, we provide hands-on, ongoing support to keep your systems optimized and your marketing efforts effective. From managing compliance updates and delivering staff training modules, to campaign monitoring, ad optimization, and content scheduling, we ensure consistent performance across all touchpoints.",
  },
  {
    step: "05",
    title: "Continuous Improvement",
    desc: "We don’t just set things up and walk away. SeaChange is built for long-term partnerships. We continuously assess what’s working, identify areas for enhancement, and adapt our strategies to keep pace with your business growth. Whether scaling your learning programs or expanding your digital footprint, we evolve with you.",
  },
  {
    step: "06",
    title: "Insights & Reporting",
    desc: "Data is at the heart of every decision we help you make. Through regular reporting and insight-driven reviews, we provide clarity on compliance readiness, training progress, campaign performance, and audience engagement. These insights inform smarter strategies and drive meaningful results—month after month.",
  },
];

function StepCard({ s, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const isEven = index % 2 === 1;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: isEven ? 30 : -30 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`relative flex ${isEven ? "lg:flex-row-reverse" : "lg:flex-row"} items-start gap-0`}
    >
      {/* Step number pillar */}
      <div className="w-24 flex-shrink-0 flex flex-col items-center pt-1">
        <div className="w-10 h-10 bg-[#1C1C1C] flex items-center justify-center flex-shrink-0">
          <span className="text-[#B5813A] text-xs font-black tabular-nums">{s.step}</span>
        </div>
        {index < steps.length - 1 && (
          <div className="w-px flex-1 bg-[#C8BFA8] mt-3 min-h-[60px]" />
        )}
      </div>

      {/* Content card */}
      <div className="flex-1 pb-14 lg:pb-16">
        <div className="bg-white border border-[#E0D8C8] p-8 relative group hover:border-[#B5813A]/40 transition-colors duration-300">

          {/* Corner accent */}
          <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-[#B5813A] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-[#B5813A] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          <h3 className="text-[#1C1C1C] font-black text-xl mb-4">{s.title}</h3>
          <p className="text-[#6B5F4E] text-sm leading-relaxed">{s.desc}</p>
        </div>
      </div>
    </motion.div>
  );
}

export default function HowItWorks() {
  return (
    <section className="py-24 bg-[#F5F0E8] relative overflow-hidden">

      {/* Hairline grid */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-60" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="hg" width="80" height="80" patternUnits="userSpaceOnUse">
            <path d="M 80 0 L 0 0 0 80" fill="none" stroke="#C8BFA8" strokeWidth="0.3" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hg)" />
      </svg>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-16 text-center">
          <span className="inline-block text-[#B5813A] text-xs font-bold tracking-[0.25em] uppercase mb-4">Our Process</span>
          <h2 className="text-4xl sm:text-5xl font-black text-[#1C1C1C] leading-tight">
            How we work
          </h2>
          <p className="text-[#6B5F4E] text-base mt-4 max-w-md mx-auto leading-relaxed">
            A repeatable, six-stage method that turns ambiguity into momentum and momentum into results.
          </p>
        </div>

        {/* Steps */}
        <div>
          {steps.map((s, i) => (
            <StepCard key={s.step} s={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
