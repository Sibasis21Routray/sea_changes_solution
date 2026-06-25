export default function AboutIntro() {
  return (
    <section className="bg-white relative overflow-hidden py-20">

      {/* Single top border rule in amber */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#B5813A]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Label bar */}
        <div className="flex items-center gap-4 mb-12 border-b border-[#E8E0D0] pb-6">
          <span className="text-[#B5813A] text-xs font-bold tracking-[0.25em] uppercase">About SeaChange</span>
          <span className="flex-1 h-px bg-[#E8E0D0]" />
          {/* <span className="text-[#C8BFA8] text-xs font-mono"> Southeast Asia & Sri Lanka</span> */}
        </div>

        {/* Two-column editorial body */}
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-20 items-start">

          {/* Column 1 */}
          <div>
            {/* Dropcap paragraph */}
            <p className="text-[#1C1C1C] text-base sm:text-lg leading-relaxed mb-6">
              <span
                className="float-left text-[5.5rem] font-black text-[#B5813A] leading-[0.72] mr-3 mt-1 select-none"
                aria-hidden="true"
              >
                S
              </span>
              eaChange Solutions is a trusted provider of Compliance and Learning Management Solutions
              designed to help organizations navigate complex regulatory landscapes with confidence.
              We offer robust, easy-to-use systems that streamline compliance processes, enable
              real-time tracking, and support continuous employee training.
            </p>
            <p className="text-[#6B5F4E] text-base sm:text-lg leading-relaxed">
              Whether you're managing internal policies or preparing for audits, our tools ensure
              your teams are aligned, informed, and always ready. With a strong focus on operational
              integrity and risk reduction, SeaChange helps businesses build a culture of
              accountability and trust.
            </p>
          </div>

          {/* Column 2 */}
          <div className="lg:border-l lg:border-[#E8E0D0] lg:pl-12">
            {/* Pull quote */}
            <p className="text-[#1C1C1C] font-black text-xl sm:text-2xl leading-snug mb-6 italic">
              "We turn clicks into customers and marketing into momentum."
            </p>

            <div className="w-10 h-[2px] bg-[#B5813A] mb-6" />

            <p className="text-[#6B5F4E] text-base leading-relaxed">
              SeaChange Solutions also offers a full suite of Digital Marketing Services that
              help brands stand out and grow in an increasingly competitive digital world. From
              strategy to execution, we craft campaigns tailored to your business goals —
              whether it's increasing visibility, driving conversions, or building customer
              loyalty. Our creative and data-driven approach combines branding, content,
              social media, paid ads, and SEO to deliver measurable impact.
            </p>

            {/* Tag row */}
            <div className="flex flex-wrap gap-2 mt-8">
              {["Compliance", "Learning", "Digital Marketing", "Technology", "SEA & Sri Lanka"].map((tag) => (
                <span
                  key={tag}
                  className="border border-[#C8BFA8] text-[#6B5F4E] text-xs font-semibold tracking-wide uppercase px-3 py-1.5 hover:border-[#B5813A] hover:text-[#B5813A] transition-colors duration-200 cursor-default"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
