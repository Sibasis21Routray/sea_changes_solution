import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const companyLinks = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about" },
  { label: "Contact Us", path: "/contact" },
];

const serviceLinks = [
  { label: "Compliance and Learning Management", path: "/services/compliance" },
  { label: "Digital Marketing Solutions", path: "/services/digital-marketing" },
  { label: "Technology Services", path: "/services/tech-services" },
];

const socials = [
  {
    label: "Facebook",
    href: "#",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "#",
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    label: "Twitter",
    href: "#",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "#",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
        <polygon fill="white" points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" />
      </svg>
    ),
  },
];

function ScrollTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className={`fixed bottom-8 right-8 w-12 h-12 rounded-full bg-[#FF5A1F] text-white flex items-center justify-center shadow-lg hover:bg-[#E64A12] transition-all duration-300 z-40 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3 pointer-events-none"
      }`}
    >
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
      </svg>
    </button>
  );
}

export default function Footer() {
  return (
    <footer className="bg-[#0B0E1F] text-white relative overflow-hidden">
      {/* Decorative orange blob, top-left */}
      <div
        className="absolute -top-16 -left-16 w-64 h-64 bg-[#FF5A1F] rounded-[40%_60%_55%_45%/45%_40%_60%_55%] opacity-90 pointer-events-none"
        style={{ transform: "rotate(-12deg)" }}
      />
      {/* Striped circle outline, top-left */}
      <div className="absolute -top-6 left-0 w-44 h-44 rounded-full border border-white/15 overflow-hidden pointer-events-none">
        <div
          className="w-full h-full opacity-40"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, transparent, transparent 6px, rgba(255,255,255,0.5) 6px, rgba(255,255,255,0.5) 7px)",
          }}
        />
      </div>
      {/* X marks, left side */}
      <div className="absolute left-[68px] top-[330px] flex flex-col gap-2 pointer-events-none">
        <span className="text-white text-xl font-bold leading-none">×</span>
        <span className="text-[#FF5A1F] text-xl font-bold leading-none">×</span>
      </div>

      {/* Decorative circle outline + plus grid, right side */}
      <div className="absolute right-0 top-10 w-72 h-72 rounded-full border border-white/10 translate-x-1/3 pointer-events-none" />
      <div className="absolute right-10 top-44 grid grid-cols-3 gap-2 pointer-events-none opacity-50">
        {Array.from({ length: 9 }).map((_, i) => (
          <span key={i} className="text-white/40 text-xs leading-none">
            +
          </span>
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 mb-16">
          {/* About Us */}
          <div>
            <h4 className="text-white font-bold text-2xl mb-3">About Us</h4>
            <span className="block w-12 h-[2px] bg-[#5B63D3] mb-6" />
            <p className="text-[#8A93A8] text-sm leading-relaxed max-w-xs">
              SeaChange Solutions is a trusted partner in Southeast Asia and Sri
              Lanka, helping businesses expand, build a strong presence, and
              thrive in a fast-changing world through tailored compliance,
              learning, digital marketing, and technology solutions.
            </p>
            <div className="flex gap-3 mt-6">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#5B63D3] flex items-center justify-center transition-colors duration-200"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-bold text-2xl mb-3">Company</h4>
            <span className="block w-12 h-[2px] bg-[#5B63D3] mb-6" />
            <ul className="flex flex-col gap-4">
              {companyLinks.map((l) => (
                <li key={l.label}>
                  <Link
                    to={l.path}
                    className="text-white text-sm font-medium hover:text-[#FF5A1F] transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold text-2xl mb-3">Services</h4>
            <span className="block w-12 h-[2px] bg-[#5B63D3] mb-6" />
            <ul className="flex flex-col gap-4">
              {serviceLinks.map((l) => (
                <li key={l.label}>
                  <Link
                    to={l.path}
                    className="text-white text-sm font-medium hover:text-[#FF5A1F] transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative bg-[#11142B] border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-7 flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link to="/" className="flex items-center select-none flex-shrink-0 group">
  <img 
    src="/homepage/logo.webp" 
    alt="SeaChange Solutions Logo" 
    className="h-20 w-auto object-contain block transition-opacity duration-200 group-hover:opacity-80" 
  />
</Link>

          <p className="text-[#C5CAD6] text-sm">
  Copyright &copy; {new Date().getFullYear()}{" "}
  <Link 
    to="/" 
    className="text-[#7C84E0] hover:text-[#6C74D6] transition-colors duration-200 font-medium"
  >
    Seachange Solutions
  </Link>
</p>
        </div>
      </div>

      <ScrollTopButton />
    </footer>
  );
}