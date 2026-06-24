import { useEffect, useRef, useState } from "react";

const stats = [
  { end: 50, suffix: "+", label: "Projects Complete" },
  { end: 500, suffix: "+", label: "Man-years Experience" },
  { end: 100, suffix: "+", label: "Happy Customers" },
  { end: 99.8, suffix: "%", label: "Customer Satisfaction Rate", decimals: 1 },
];

function CountUp({ end, suffix, decimals = 0, duration = 2000 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const startTime = performance.now();
          const animate = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease out
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(eased * end);
            if (progress < 1) requestAnimationFrame(animate);
            else setCount(end);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end, duration]);

  return (
    <span ref={ref}>
      {count.toFixed(decimals)}
      <span className="text-[#6C74D6]">{suffix}</span>
    </span>
  );
}

export default function Stats() {
  return (
    <section className="py-20 bg-[#06070D] relative overflow-hidden">
      {/* Dotted decoration, bottom-left */}
      <div className="absolute left-0 bottom-16 flex flex-col items-start gap-1.5 pointer-events-none opacity-60">
        <div className="flex gap-1.5 pl-1">
          <span className="w-1 h-1 rounded-full bg-white/40" />
        </div>
        <div className="flex gap-1.5 pl-3">
          <span className="w-1 h-1 rounded-full bg-white/40" />
          <span className="w-1 h-1 rounded-full bg-white/40" />
        </div>
        <div className="w-28 h-7 border border-white/20 rounded-sm mt-2" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with divider lines */}
        <div className="flex items-center justify-center gap-6 mb-16">
          <span className="hidden sm:block flex-1 h-px bg-white/15" />
          <h2 className="text-white font-bold text-lg sm:text-xl whitespace-nowrap">
            SEACHANGE&apos;s Achievements
          </h2>
          <span className="hidden sm:block flex-1 h-px bg-white/15" />
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center sm:text-left">
              <p className="text-5xl sm:text-6xl font-black text-white mb-3">
                <CountUp end={s.end} suffix={s.suffix} decimals={s.decimals} />
              </p>
              <p className="text-[#8A93A8] text-sm font-medium">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}