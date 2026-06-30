import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { label: "Home", path: "/" },
  {
    label: "Services",
    path: "/services",
    dropdown: [
      { label: "Compliance & Learning Management Solutions", path: "/services/compliance" },
      { label: "Digital Marketing Solutions", path: "/services/digital-marketing" },
      { label: "Technology Services", path: "/services/tech-services" },
    ],
  },
  { label: "About Us", path: "/about" },
  { label: "Contact Us", path: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setDropdownOpen(false);
  }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-[#0A1628] shadow-lg py-3" : "bg-[#0A1628] py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center select-none flex-shrink-0 group">
  <img 
    src="/homepage/logo.webp" 
    alt="SeaChange Solutions Logo" 
    className="h-15 w-auto object-contain block transition-opacity duration-200 group-hover:opacity-80" 
  />
</Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-9">
          {navLinks.map((link) =>
            link.dropdown ? (
              <div
                key={link.label}
                className="relative group"
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
              >
                <button className="flex items-center gap-1.5 text-[#C5D3E6] font-medium text-sm hover:text-white transition-colors">
                  {link.label}
                  <svg className="w-3.5 h-3.5 mt-0.5 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className="absolute top-full left-0 mt-2 w-52 bg-[#0F1F38] rounded-xl shadow-2xl border border-white/10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 translate-y-1 group-hover:translate-y-0">
                  {link.dropdown.map((item) => (
                    <Link
                      key={item.label}
                      to={item.path}
                      className="block px-5 py-3 text-sm text-[#C5D3E6] hover:bg-white/5 hover:text-white first:rounded-t-xl last:rounded-b-xl transition-colors"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={link.label}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-white ${
                  location.pathname === link.path ? "text-white" : "text-[#C5D3E6]"
                }`}
              >
                {link.label}
              </Link>
            )
          )}
        </nav>

        {/* CTA */}
        <div className="hidden lg:block">
          <Link
            to="/contact"
            className="bg-[#556BB7] text-white text-sm font-semibold px-6 py-3 rounded-full hover:bg-[#3049d6] transition-all hover:shadow-lg hover:shadow-blue-500/30 duration-200"
          >
            Schedule Consultation
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="lg:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-[#0A1628] border-t border-white/10 px-4 py-4 flex flex-col gap-1">
          {navLinks.map((link) =>
            link.dropdown ? (
              <div key={link.label}>
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="w-full flex items-center justify-between text-[#C5D3E6] font-medium text-sm py-3 px-3 rounded-lg hover:bg-white/5"
                >
                  {link.label}
                  <svg className={`w-4 h-4 transition-transform ${dropdownOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {dropdownOpen && (
                  <div className="ml-4 flex flex-col gap-1 mt-1">
                    {link.dropdown.map((item) => (
                      <Link
                        key={item.label}
                        to={item.path}
                        className="text-sm text-[#8DA3C0] py-2 px-3 rounded-lg hover:bg-white/5 hover:text-white transition-colors"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.label}
                to={link.path}
                className="text-sm font-medium text-[#C5D3E6] py-3 px-3 rounded-lg hover:bg-white/5 hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            )
          )}
          <Link
            to="/contact"
            className="mt-2 bg-[#889db9] text-white text-sm font-semibold px-6 py-3 rounded-full text-center hover:bg-[#3049d6] transition-colors"
          >
            Schedule Consultation
          </Link>
        </div>
      </div>
    </header>
  );
}