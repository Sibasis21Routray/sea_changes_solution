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
    <label className="flex items-start gap-2 text-white/70 text-sm cursor-pointer select-none hover:text-white transition-colors duration-200">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="mt-0.5 w-4 h-4 rounded border-white/20 bg-white/10 text-[#E8430A] focus:ring-[#E8430A]/40 accent-[#E8430A]"
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

  const inputClass =
    "w-full bg-[#0B0F1A] border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder:text-white/30 focus:outline-none focus:ring-1 focus:ring-[#E8430A] focus:border-[#E8430A] transition-colors duration-200";

  return (
    <section className="py-20 bg-[#0B0F1A]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-[340px_1fr] gap-8 items-start">

        {/* 1st: Contact info card (Matching the About Us card layouts) */}
        <div className="bg-[#1A2035] rounded-xl border border-white/10 p-8 relative overflow-hidden order-1 shadow-xl">
          {/* Full-bleed hairline grid overlay */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="card-grid" width="30" height="30" patternUnits="userSpaceOnUse">
                <path d="M 30 0 L 0 0 0 30" fill="none" stroke="#FFFFFF" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#card-grid)" />
          </svg>

          <div className="relative flex items-center gap-3 mb-6">
            <span className="w-6 h-px bg-[#E8430A]" />
            <h3 className="text-white font-bold text-lg uppercase tracking-wider text-xs">Contact Info</h3>
          </div>

          <div className="relative border-t border-white/5 pt-6 flex items-start gap-4">
            <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#E8430A]/10 flex items-center justify-center">
              <svg className="w-5 h-5 text-[#E8430A]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <p className="text-white font-black text-base mb-0.5">Send E-Mail</p>
              <p className="text-white/60 text-sm">aa@seachangesolutions.xyz</p>
            </div>
          </div>
        </div>

        {/* 2nd: Form card */}
        <form
          onSubmit={handleSubmit}
          className="bg-[#1A2035] rounded-xl border border-white/10 p-8 sm:p-10 order-2 shadow-xl"
        >
          {/* Header */}
          <div className="flex items-center gap-3 mb-4">
            <span className="w-6 h-px bg-[#E8430A]" />
            <span className="text-[#E8430A] text-xs font-bold tracking-[0.25em] uppercase">Get In Touch</span>
          </div>
          <h2 className="text-3xl font-black text-white tracking-tight mb-8">Let&apos;s Connect</h2>

          {/* Name + Email */}
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            <input
              type="text"
              placeholder="Your Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
              className={inputClass}
            />
            <input
              type="email"
              placeholder="Email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
              className={inputClass}
            />
          </div>

          {/* Service columns */}
          <div className="border-t border-white/5 pt-8 grid sm:grid-cols-2 gap-x-10 gap-y-8 mb-8">
            <div>
              <h3 className="font-bold text-white text-xs uppercase tracking-widest text-[#E8430A] mb-4">
                Technology Services
              </h3>
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
              <h3 className="font-bold text-white text-xs uppercase tracking-widest text-[#E8430A] mb-4">
                Compliance & Learning
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

            <div className="sm:col-span-2">
              <h3 className="font-bold text-white text-xs uppercase tracking-widest text-[#E8430A] mb-4">
                Digital Marketing Solutions
              </h3>
              <div className="flex flex-wrap gap-x-8 gap-y-2.5">
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
            className={`${inputClass} resize-y mb-6`}
          />

          {submitted && (
            <p className="text-sm text-green-400 mb-4">
              Thanks! Your message has been logged to the console.
            </p>
          )}

          <button
            type="submit"
            className="inline-flex items-center gap-3 bg-[#E8430A] text-white font-bold px-8 py-3.5 rounded-full hover:bg-[#cbf336]/0 hover:opacity-90 transition-all hover:-translate-y-0.5 duration-200 shadow-lg"
          >
            <span>Submit Message</span>
            <span className="w-5 h-5 bg-white rounded-full flex items-center justify-center text-[#E8430A]">
              <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
              </svg>
            </span>
          </button>
        </form>

      </div>
    </section>
  );
}