import React from "react";
import { motion } from "framer-motion";

export default function AboutIntro() {
  const badgeContainer = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.08 } }
  };

  const badgeItem = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } }
  };

  return (
    <section className="bg-[#F4F7FA] relative overflow-hidden py-24">
      {/* Top boundary — steel-blue instead of orange */}
      {/* <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#8FB5CC]" /> */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Eyebrow Split Rule */}
        <div className="flex items-center gap-4 mb-16 border-b border-[#8FB5CC]/25 pb-6">
          <span className="text-[#5A8FAD] text-xs font-bold tracking-[0.25em] uppercase">
            Corporate Statement
          </span>
          <span className="flex-1 h-px bg-[#8FB5CC]/25" />
        </div>

        {/* Editorial Two-Column Layout */}
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-20 items-start">

          {/* Main Content Paragraph */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-slate-700 text-base sm:text-lg leading-relaxed"
          >
            <p className="mb-6">
              <span className="float-left text-7xl font-black text-[#8FB5CC] leading-[0.75] mr-3 mt-1 select-none">
                S
              </span>
              eaChange Solutions is a trusted provider of Compliance and Learning Management Solutions designed to help organizations navigate complex regulatory landscapes with confidence. We offer robust, easy-to-use systems that streamline compliance processes, enable real-time tracking, and support continuous employee training. Whether you're managing internal policies or preparing for audits, our tools ensure your teams are aligned, informed, and always ready. With a strong focus on operational integrity and risk reduction, SeaChange helps businesses build a culture of accountability and trust.
            </p>
            <p>
              SeaChange Solutions also offers a full suite of Digital Marketing Services that help brands stand out and grow in an increasingly competitive digital world. From strategy to execution, we craft campaigns that are tailored to your business goals—whether it's increasing visibility, driving conversions, or building customer loyalty. Our creative and data-driven approach combines branding, content, social media, paid ads, and SEO to deliver measurable impact. At SeaChange, we turn clicks into customers and marketing into momentum.
            </p>
          </motion.div>

          {/* Strategic Callout Block */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:border-l lg:border-[#8FB5CC]/25 lg:pl-12"
          >
            <p className="text-[#0D1E38] font-black text-xl sm:text-2xl italic leading-snug mb-6">
              "We accelerate cross-border scaling strategies by combining compliance assurance frameworks with high-growth digital infrastructure."
            </p>

            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 48 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="h-0.5 bg-[#8FB5CC] mb-8"
            />

            <p className="text-slate-500 text-sm leading-relaxed mb-8">
              Through optimized tracking systems and bespoke applications, we convert complex regional cross-border friction into verifiable operational efficiency.
            </p>

            {/* Micro-Meta Badges */}
            <motion.div
              variants={badgeContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-wrap gap-2"
            >
              {["Compliance Infrastructure", "Growth Analytics", "Enterprise Architecture", "SEA Grid"].map((pill) => (
                <motion.span
                  key={pill}
                  variants={badgeItem}
                  className="px-3 py-1.5 border border-[#8FB5CC]/40 text-[#5A8FAD] text-[10px] font-bold tracking-wider uppercase bg-white rounded-sm"
                >
                  {pill}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}