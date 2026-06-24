export default function Testimonials() {
  return (
    <section className="py-20 bg-gray-50/50 relative overflow-hidden group/section">
      {/* Dynamic Keyframe Pipeline */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        @keyframes subtleScaleUp {
          from { opacity: 0; transform: scale(0.96) translateY(15px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .animate-card-pop {
          animation: subtleScaleUp 0.9s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>

      {/* Background Infinite Moving Text Accent (Cinematic Marquee) */}
      <div className="absolute top-1/2 -translate-y-1/2 left-0 w-[200%] flex whitespace-nowrap opacity-[0.03] select-none pointer-events-none font-black text-[10rem] text-[#0B1F3A] uppercase tracking-wider animate-marquee">
        <span>Trust • Excellence • Compliance • Growth • Strategy • Learning •&nbsp;</span>
        <span>Trust • Excellence • Compliance • Growth • Strategy • Learning •&nbsp;</span>
      </div>

      {/* Decorative Bottom Left Corner Anchor */}
      <div
        className="absolute bottom-0 left-0 w-48 h-2 bg-gradient-to-r from-[#FF5A1F]/30 to-transparent transition-all duration-700 group-hover/section:w-72"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Interactive Testimonial Frame */}
        <div className="bg-white border border-gray-100 rounded-3xl p-8 sm:p-14 shadow-[0_15px_40px_-15px_rgba(11,31,58,0.05)] transition-all duration-500 hover:shadow-[0_30px_60px_-15px_rgba(11,31,58,0.1)] hover:-translate-y-1 opacity-0 animate-card-pop">
          
          {/* Header Block */}
          <div className="text-center max-w-xl mx-auto mb-10">
            <h2 className="text-3xl sm:text-4xl font-black text-[#0B1F3A] leading-tight mb-4">
              What our <span className="text-[#5B63D3]">Customers</span> say
            </h2>
            <div className="w-16 h-1 bg-[#5B63D3] mx-auto rounded-full transition-all duration-500 group-hover/section:w-28" />
          </div>

          {/* Testimonial Quote Canvas */}
          <div className="text-center relative max-w-3xl mx-auto">
            {/* SVG Decorative Open Quote Icon */}
            <span className="absolute -top-8 -left-4 text-8xl text-gray-100 font-serif select-none pointer-events-none">“</span>
            
            <p className="relative z-10 text-xl sm:text-2xl font-bold italic text-[#0B1F3A] leading-relaxed mb-6">
              &ldquo;Working with SEACHANGE was so easy&rdquo;
            </p>

            <p className="text-[#5B6478] text-base sm:text-lg leading-relaxed max-w-2xl mx-auto mb-10">
              We needed to run a large learning and compliance program for my team
              and SeaChange handled the entire project brilliantly.
            </p>
          </div>

          {/* Separator Divider Line */}
          <div className="w-12 h-px bg-gray-200 mx-auto mb-6" />

          {/* Attribution Metadata */}
          <div className="text-center">
            <p className="text-[#0B1F3A] font-black text-base tracking-wide uppercase">N. Haycocks</p>
            <p className="text-[#5B6478] text-xs font-semibold tracking-wider uppercase mt-1">CEO &amp; Founder</p>
          </div>

        </div>
      </div>
    </section>
  );
}