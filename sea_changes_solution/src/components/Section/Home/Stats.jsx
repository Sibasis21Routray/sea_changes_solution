import { useEffect, useRef, useState } from "react";

const stats = [
  { end: 50, suffix: "+", label: "Projects\nCompleted", sublabel: "across SEA & Sri Lanka" },
  { end: 500, suffix: "+", label: "Man-years\nExperience", sublabel: "combined team depth" },
  { end: 100, suffix: "+", label: "Happy\nCustomers", sublabel: "and counting" },
  { end: 99.8, suffix: "%", label: "Satisfaction\nRate", sublabel: "from client surveys", decimals: 1 },
];

function CountUp({ end, suffix, decimals = 0, duration = 2200 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const startTime = performance.now();
          const animate = (now) => {
            const t = Math.min((now - startTime) / duration, 1);
            const eased = 1 - Math.pow(1 - t, 4);
            setCount(eased * end);
            if (t < 1) requestAnimationFrame(animate);
            else setCount(end);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.25 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      {count.toFixed(decimals)}
      <span className="text-[#B5813A]">{suffix}</span>
    </span>
  );
}

export default function Stats() {
  return (
    <section className="bg-[#272720] py-0 relative overflow-hidden">

      {/* Top border stripe */}
      <div className="h-[3px] bg-[#B5813A] w-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">

        {/* Eyebrow */}
        <div className="flex items-center gap-4 mb-16">
          <span className="w-6 h-px bg-[#B5813A]" />
          <span className="text-[#B5813A] text-xs font-bold tracking-[0.25em] uppercase">
            SeaChange by the numbers
          </span>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-white/[0.07]">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className="px-6 lg:px-10 first:pl-0 last-of-type:border-r-0 group"
            >
              {/* Big number */}
              <p className="text-[clamp(3rem,6vw,5rem)] font-black text-white leading-none mb-3">
                <CountUp end={s.end} suffix={s.suffix} decimals={s.decimals} />
              </p>

              {/* Label — two lines */}
              <p className="text-[#9A8A74] text-sm font-semibold leading-tight mb-1 whitespace-pre-line">
                {s.label}
              </p>
              <p className="text-[#5A5040] text-xs">{s.sublabel}</p>
            </div>
          ))}
        </div>

        {/* Divider rule */}
        <div className="mt-16 pt-10 border-t border-white/[0.07] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          {/* <p className="text-[#5A5040] text-sm">
            Serving businesses across Southeast Asia and Sri Lanka since 2014.
          </p> */}
          {/* <span className="text-[#B5813A] text-sm font-semibold">Est. 2014</span> */}
        </div>
      </div>

      {/* Bottom border stripe */}
      <div className="h-px bg-white/[0.07] w-full" />
    </section>
  );
}
