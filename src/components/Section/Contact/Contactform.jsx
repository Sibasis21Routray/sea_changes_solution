import { useState } from "react";

const techServices = [
  "Software Development",
  "Web Development & Design",
  "Mobile App Development",
  "System Integration & API Development",
  "Cloud Infrastructure & DevOps",
];

const marketingServices = [
  "Branding",
  "SEO",
  "Performance Marketing",
  "Web Development",
  "Social Media Marketing",
];

const complianceServices = ["Compliance and Learning Management Platform"];

function ServiceCheckbox({ label, checked, onChange }) {
  return (
    <label className="flex items-start gap-2 text-[#0B1230] text-sm cursor-pointer select-none">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="mt-0.5 w-4 h-4 rounded border-gray-300 text-[#5B63D3] focus:ring-[#5B63D3]"
      />
      <span>{label}</span>
    </label>
  );
}

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
    services: [],
  });
  const [submitted, setSubmitted] = useState(false);

  const toggleService = (label) => {
    setForm((prev) => ({
      ...prev,
      services: prev.services.includes(label)
        ? prev.services.filter((s) => s !== label)
        : [...prev.services, label],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Contact form submitted:", form);
    setSubmitted(true);
  };

  return (
    <section className="py-20 bg-[#F1F2F6]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-[1fr_320px] gap-8 items-start">
        {/* Form card */}
        <form
          onSubmit={handleSubmit}
          className="bg-[#F7F7FA] rounded-3xl shadow-sm border border-gray-100 p-8 sm:p-10"
        >
          <h2 className="text-3xl font-black text-[#0B1230] mb-8">Let&apos;s Connect</h2>

          {/* Name + Email */}
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            <input
              type="text"
              placeholder="Your Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
              className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 text-sm text-[#0B1230] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#5B63D3]/40"
            />
            <input
              type="email"
              placeholder="Email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
              className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 text-sm text-[#0B1230] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#5B63D3]/40"
            />
          </div>

          {/* Service columns */}
          <div className="grid sm:grid-cols-2 gap-x-10 gap-y-8 mb-8">
            <div>
              <h3 className="font-bold text-[#0B1230] text-base mb-3">Technology Services</h3>
              <div className="flex flex-col gap-2.5">
                {techServices.map((s) => (
                  <ServiceCheckbox
                    key={s}
                    label={s}
                    checked={form.services.includes(s)}
                    onChange={() => toggleService(s)}
                  />
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-bold text-[#0B1230] text-base mb-3">
                Compliance and Learning Management Platform
              </h3>
              <div className="flex flex-col gap-2.5">
                {complianceServices.map((s) => (
                  <ServiceCheckbox
                    key={s}
                    label={s}
                    checked={form.services.includes(s)}
                    onChange={() => toggleService(s)}
                  />
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-bold text-[#0B1230] text-base mb-3">Digital Marketing Solutions</h3>
              <div className="flex flex-wrap gap-x-6 gap-y-2.5">
                {marketingServices.map((s) => (
                  <ServiceCheckbox
                    key={s}
                    label={s}
                    checked={form.services.includes(s)}
                    onChange={() => toggleService(s)}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Message */}
          <textarea
            placeholder="Write a Message"
            rows={6}
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 text-sm text-[#0B1230] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#5B63D3]/40 resize-y mb-6"
          />

          {/* Turnstile-style placeholder */}
          {/* <div className="flex items-center justify-between bg-white border border-gray-200 rounded-lg px-4 py-3 mb-8 max-w-sm">
            <div className="flex items-center gap-3">
              <span className="w-6 h-6 rounded-full bg-green-600 flex items-center justify-center flex-shrink-0">
                <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </span>
              <span className="text-sm text-[#0B1230]">Success!</span>
            </div>
            <div className="text-right leading-none">
              <p className="text-xs font-bold text-[#0B1230] tracking-wide">CLOUDFLARE</p>
              <div className="flex gap-2 mt-0.5">
                <a href="#" className="text-[10px] text-gray-400 underline">Privacy</a>
                <span className="text-[10px] text-gray-400">·</span>
                <a href="#" className="text-[10px] text-gray-400 underline">Help</a>
              </div>
            </div>
          </div> */}

          {submitted && (
            <p className="text-sm text-green-700 mb-4">
              Thanks! Your message has been logged to the console.
            </p>
          )}

          <button
            type="submit"
            className="bg-[#5B63D3] text-white font-bold px-8 py-3.5 rounded-full hover:bg-[#4A52C2] transition-colors duration-200"
          >
            Submit Message
          </button>
        </form>

        {/* Contact info card */}
        <div className="bg-[#0B0E1F] rounded-2xl p-8 relative overflow-hidden">
          {/* World map dot pattern */}
          <div
            className="absolute inset-0 opacity-[0.18] pointer-events-none"
            style={{
              backgroundImage:
                "radial-gradient(circle, rgba(255,255,255,0.6) 1px, transparent 1px)",
              backgroundSize: "10px 10px",
              maskImage:
                "radial-gradient(ellipse 70% 70% at 70% 30%, black 40%, transparent 75%)",
              WebkitMaskImage:
                "radial-gradient(ellipse 70% 70% at 70% 30%, black 40%, transparent 75%)",
            }}
          />

          <div className="relative flex items-center gap-3 mb-8">
            <span className="w-6 h-px bg-[#6C74D6]" />
            <h3 className="text-white font-bold text-xl">Contact Info</h3>
          </div>

          <div className="relative border-t border-white/10 pt-6 flex items-start gap-4">
            <div className="flex-shrink-0 w-11 h-11 rounded-lg bg-white/10 flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth={1.75} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <p className="text-white font-bold text-base mb-1">Send E-Mail</p>
              <p className="text-[#8A93A8] text-sm">aa@seachangesolutions.xyz</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}