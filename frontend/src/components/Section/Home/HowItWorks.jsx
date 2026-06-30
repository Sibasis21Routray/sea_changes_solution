import React from "react";
import { motion } from "framer-motion";

const structuralSteps = [
  { sequence: "01", header: "Discovery & Consultation", info: "We kick things off with an in-depth consultation to understand your business goals, challenges, and target markets—whether you're growing in Sri Lanka, scaling in Southeast Asia, or seeking stronger digital and compliance foundations. Our discovery sessions uncover insights that shape a strategic and personalized roadmap." },
  { sequence: "02", header: "Strategic Planning", info: "Based on your unique needs, we craft a tailored strategy that integrates our core services—Compliance & Learning Management and Digital Marketing. Whether it's aligning your operations with local regulatory standards or building a digital presence that speaks to your audience, we develop a roadmap that balances precision with impact." },
  { sequence: "03", header: "Implementation & Setup", info: "Our team handles the complete implementation process—seamlessly onboarding your business into our Compliance & Learning Management systems and launching your digital marketing campaigns. This includes LMS integration, policy rollout, content planning, platform setup, and ad campaign execution." },
  { sequence: "04", header: "Operational Support", info: "Once everything is up and running, we provide hands-on, ongoing support to keep your systems optimized and your marketing efforts effective. From managing compliance updates and delivering staff training modules, to campaign monitoring, ad optimization, and content scheduling." },
  { sequence: "05", header: "Continuous Improvement & Scaling", info: "We don't just set things up and walk away. SeaChange is built for long-term partnerships. We continuously assess what's working, identify areas for enhancement, and adapt our strategies to keep pace with your business growth. Whether scaling your learning programs or expanding your digital footprint, we evolve with you." },
  { sequence: "06", header: "Insights & Reporting", info: "Data is at the heart of every decision we help you make. Through regular reporting and insight-driven reviews, we provide clarity on compliance readiness, training progress, campaign performance, and audience engagement. These insights inform smarter strategies and drive meaningful results—month after month." },
];

export default function HowItWorks() {
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (idx) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1],
        delay: (idx % 3) * 0.12
      }
    })
  };

  return (
    <section className="bg-[#0A1628] py-24 relative overflow-hidden border-b border-[#8FB5CC]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-[#8FB5CC] text-xs font-bold tracking-[0.3em] uppercase block mb-4">
            Deployment Protocol
          </span>
          <h2 className="text-4xl font-black text-white tracking-tight">
            Our Strategy Framework
          </h2>
        </div>

        {/* 3-Column Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {structuralSteps.map((step, idx) => (
            <motion.div
              key={idx}
              custom={idx}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-20px" }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="bg-[#0D1E38] border border-[#8FB5CC]/10 p-8 relative group rounded-xl hover:border-[#8FB5CC]/35 transition-colors duration-300 flex flex-col justify-between min-h-[260px]"
            >
              <div>
                {/* Step number badge — steel-blue */}
                <div className="w-10 h-10 bg-[#1E3A5F] border border-[#8FB5CC]/30 text-[#8FB5CC] font-black text-sm flex items-center justify-center mb-6 rounded-lg">
                  {step.sequence}
                </div>

                <h3 className="text-white font-bold text-lg mb-3 tracking-wide">
                  {step.header}
                </h3>
                <p className="text-white/40 text-xs sm:text-sm leading-relaxed">
                  {step.info}
                </p>
              </div>

              {/* Corner accents on hover — steel-blue */}
              <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-[#8FB5CC] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-tl-xl" />
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-[#8FB5CC] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-br-xl" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}