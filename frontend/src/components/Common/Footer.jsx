import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

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

// const socials = [
//   {
//     label: "Facebook",
//     href: "#",
//     icon: (
//       <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
//         <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
//       </svg>
//     ),
//   },
//   {
//     label: "Instagram",
//     href: "#",
//     icon: (
//       <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
//         <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
//         <circle cx="12" cy="12" r="4" />
//         <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
//       </svg>
//     ),
//   },
//   {
//     label: "Twitter",
//     href: "#",
//     icon: (
//       <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
//         <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
//       </svg>
//     ),
//   },
//   {
//     label: "YouTube",
//     href: "#",
//     icon: (
//       <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
//         <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
//         <polygon fill="white" points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" />
//       </svg>
//     ),
//   },
// ];

/* ── Animated scroll-to-top button ── */
function ScrollTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <motion.button
      type="button"
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className="fixed bottom-8 right-8 w-12 h-12 rounded-full bg-[#FF5A1F] text-white flex items-center justify-center shadow-lg z-40"
      initial={false}
      animate={
        visible
          ? { opacity: 1, y: 0, scale: 1, pointerEvents: "auto" }
          : { opacity: 0, y: 16, scale: 0.8, pointerEvents: "none" }
      }
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ scale: 1.1, backgroundColor: "#E64A12" }}
      whileTap={{ scale: 0.9 }}
    >
      <motion.svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        strokeWidth={2.5}
        viewBox="0 0 24 24"
        animate={{ y: [0, -2, 0] }}
        transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
      </motion.svg>
    </motion.button>
  );
}

/* ── Reveal-on-scroll wrapper ── */
const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const linkStagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07, delayChildren: 0.25 } },
};

const linkItem = {
  hidden: { opacity: 0, x: -14 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] } },
};

function AnimatedLink({ to, children }) {
  return (
    <motion.li variants={linkItem}>
      <Link to={to} className="group relative inline-flex items-center text-white text-sm font-medium">
        <motion.span
          className="absolute -left-4 text-[#FF5A1F] opacity-0 group-hover:opacity-100"
          initial={{ x: -4 }}
          whileHover={{ x: 0 }}
          transition={{ duration: 0.2 }}
        >
          →
        </motion.span>
        <span className="relative transition-colors duration-200 group-hover:text-[#FF5A1F] group-hover:translate-x-2 inline-block transition-transform">
          {children}
        </span>
        <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-[#FF5A1F] group-hover:w-full transition-all duration-300" />
      </Link>
    </motion.li>
  );
}

export default function Footer() {
  return (
    <footer className="bg-[#0B0E1F] text-white relative overflow-hidden">
      {/* Decorative orange blob, top-left — slow morph + float */}
      <motion.div
        className="absolute -top-16 -left-16 w-64 h-64 bg-[#FF5A1F] opacity-90 pointer-events-none"
        style={{ transform: "rotate(-12deg)" }}
        animate={{
          borderRadius: [
            "40% 60% 55% 45% / 45% 40% 60% 55%",
            "55% 45% 40% 60% / 40% 55% 45% 60%",
            "40% 60% 55% 45% / 45% 40% 60% 55%",
          ],
          y: [0, 14, 0],
          rotate: [-12, -6, -12],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Striped circle outline, top-left — slow continuous rotation */}
      <motion.div
        className="absolute -top-6 left-0 w-44 h-44 rounded-full border border-white/15 overflow-hidden pointer-events-none"
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      >
        <div
          className="w-full h-full opacity-40"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, transparent, transparent 6px, rgba(255,255,255,0.5) 6px, rgba(255,255,255,0.5) 7px)",
          }}
        />
      </motion.div>

      {/* Decorative circle outline, right side — counter rotation + breathing scale */}
      <motion.div
        className="absolute right-0 top-10 w-72 h-72 rounded-full border border-[#9EB7D2] translate-x-1/3 pointer-events-none"
        animate={{ rotate: -360, scale: [1, 1.04, 1] }}
        transition={{
          rotate: { duration: 80, repeat: Infinity, ease: "linear" },
          scale: { duration: 6, repeat: Infinity, ease: "easeInOut" },
        }}
      />

      {/* Plus grid — staggered twinkle */}
      <div className="absolute right-10 top-44 grid grid-cols-3 gap-2 pointer-events-none">
        {Array.from({ length: 9 }).map((_, i) => (
          <motion.span
            key={i}
            className="text-white/40 text-xs leading-none"
            animate={{ opacity: [0.2, 0.7, 0.2] }}
            transition={{
              duration: 2.4,
              repeat: Infinity,
              delay: (i % 3) * 0.3 + Math.floor(i / 3) * 0.2,
              ease: "easeInOut",
            }}
          >
            +
          </motion.span>
        ))}
      </div>

      {/* ── Main content ── */}
      <motion.div
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12"
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
      >
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 mb-16">

          {/* About Us */}
          <motion.div variants={fadeUp}>
            <h4 className="text-white font-bold text-2xl mb-3">About Us</h4>
            <motion.span
              className="block h-[2px] bg-[#889db9] mb-6 origin-left"
              initial={{ scaleX: 0, width: "3rem" }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            />
            <p className="text-white text-sm leading-relaxed max-w-xs">
              SeaChange Solutions is a trusted partner in Southeast Asia and Sri
              Lanka, helping businesses expand, build a strong presence, and
              thrive in a fast-changing world through tailored compliance,
              learning, digital marketing, and technology solutions.
            </p>
            {/* <motion.div
              className="flex gap-3 mt-6"
              variants={linkStagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {socials.map((s) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  variants={linkItem}
                  className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center"
                  whileHover={{
                    scale: 1.15,
                    rotate: 8,
                    backgroundColor: "#889db9",
                  }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 350, damping: 15 }}
                >
                  {s.icon}
                </motion.a>
              ))}
            </motion.div> */}
          </motion.div>

          {/* Company */}
          <motion.div variants={fadeUp}>
            <h4 className="text-white font-bold text-2xl mb-3">Company</h4>
            <motion.span
              className="block h-[2px] bg-[#889db9] mb-6 origin-left"
              initial={{ scaleX: 0, width: "3rem" }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            />
            <motion.ul
              className="flex flex-col gap-4 pl-0"
              variants={linkStagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {companyLinks.map((l) => (
                <AnimatedLink key={l.label} to={l.path}>{l.label}</AnimatedLink>
              ))}
            </motion.ul>
          </motion.div>

          {/* Services */}
          <motion.div variants={fadeUp}>
            <h4 className="text-white font-bold text-2xl mb-3">Services</h4>
            <motion.span
              className="block h-[2px] bg-[#889db9] mb-6 origin-left"
              initial={{ scaleX: 0, width: "3rem" }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            />
            <motion.ul
              className="flex flex-col gap-4 pl-0"
              variants={linkStagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {serviceLinks.map((l) => (
                <AnimatedLink key={l.label} to={l.path}>{l.label}</AnimatedLink>
              ))}
            </motion.ul>
          </motion.div>
        </div>
      </motion.div>

      {/* ── Bottom bar ── */}
      <motion.div
        className="relative bg-[#11142B] border-t border-white/10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-7 flex flex-col sm:flex-row items-center justify-between gap-4">
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <Link to="/" className="flex items-center select-none flex-shrink-0 group">
              <motion.img
                src="/homepage/logo.webp"
                alt="SeaChange Solutions Logo"
                className="h-20 w-auto object-contain block"
                whileHover={{ scale: 1.05, opacity: 0.85 }}
                transition={{ duration: 0.2 }}
              />
            </Link>
          </motion.div>

          <motion.p
            className="text-[#C5CAD6] text-sm"
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            Copyright &copy; {new Date().getFullYear()}{" "}
            <Link
              to="/"
              className="text-[#8197B2] hover:text-[#9EB7D2] transition-colors duration-200 font-medium"
            >
              Seachange Solutions
            </Link>
          </motion.p>
        </div>
      </motion.div>

      <ScrollTopButton />
    </footer>
  );
}