import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

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

function ServiceCheckbox({ label, checked, onChange, index }) {
  return (
    <motion.label
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4, delay: 0.1 + index * 0.05, ease: "easeOut" }}
      whileHover={{ x: 4 }}
      className="flex items-start gap-2.5 text-white/70 text-sm cursor-pointer select-none hover:text-white transition-colors duration-200 group"
    >
      <motion.input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        whileTap={{ scale: 0.85 }}
        className="mt-0.5 w-4 h-4 rounded border-white/20 bg-white/5 text-[#8FB5CC] focus:ring-[#8FB5CC]/40 focus:ring-offset-0 accent-[#8FB5CC] cursor-pointer"
      />
      <motion.span
        className="group-hover:text-white transition-colors duration-200"
        animate={{ color: checked ? "#8FB5CC" : "rgba(255,255,255,0.7)" }}
        transition={{ duration: 0.2 }}
      >
        {label}
      </motion.span>
      {checked && (
        <motion.svg
          initial={{ scale: 0, rotate: -90 }}
          animate={{ scale: 1, rotate: 0 }}
          exit={{ scale: 0 }}
          className="w-4 h-4 text-[#8FB5CC] ml-auto flex-shrink-0"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </motion.svg>
      )}
    </motion.label>
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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focusedField, setFocusedField] = useState(null);
  const [turnstileToken, setTurnstileToken] = useState(null);
  const [turnstileLoaded, setTurnstileLoaded] = useState(false);
  const turnstileRef = useRef(null);
  const widgetIdRef = useRef(null);

  // Get environment variables for Vite
  const TURNSTILE_SITE_KEY = import.meta.env.VITE_TURNSTILE_SITE_KEY;
  const API_URL = import.meta.env.VITE_API_URL;

  // Load Turnstile script
  useEffect(() => {
    // Check if Turnstile is already loaded
    if (window.turnstile) {
      setTurnstileLoaded(true);
      renderTurnstile();
      return;
    }

    const script = document.createElement('script');
    script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit';
    script.async = true;
    script.defer = true;
    script.onload = () => {
      setTurnstileLoaded(true);
      if (window.turnstile) {
        renderTurnstile();
      }
    };
    script.onerror = () => {
      console.error('Failed to load Turnstile script');
    };
    document.head.appendChild(script);

    return () => {
      // Cleanup Turnstile widget
      if (window.turnstile && widgetIdRef.current) {
        try {
          window.turnstile.remove(widgetIdRef.current);
        } catch (e) {
          // Ignore cleanup errors
        }
      }
    };
  }, []);

  const renderTurnstile = () => {
    if (!window.turnstile || !turnstileRef.current) return;

    // Clear any existing widget
    if (widgetIdRef.current) {
      try {
        window.turnstile.remove(widgetIdRef.current);
        widgetIdRef.current = null;
      } catch (e) {
        // Ignore
      }
    }

    // Render new widget
    try {
      widgetIdRef.current = window.turnstile.render(turnstileRef.current, {
        sitekey: TURNSTILE_SITE_KEY,
        callback: (token) => {
          setTurnstileToken(token);
        },
        'expired-callback': () => {
          setTurnstileToken(null);
        },
        'error-callback': () => {
          setTurnstileToken(null);
        },
        theme: 'dark',
        size: 'normal',
      });
    } catch (error) {
      console.error('Error rendering Turnstile:', error);
    }
  };

  // Re-render Turnstile if container becomes available
  useEffect(() => {
    if (turnstileLoaded && turnstileRef.current) {
      // Small delay to ensure DOM is ready
      const timer = setTimeout(() => {
        renderTurnstile();
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [turnstileLoaded]);

  const toggleService = (label) => {
    setForm((prev) => ({
      ...prev,
      services: prev.services.includes(label)
        ? prev.services.filter((s) => s !== label)
        : [...prev.services, label],
    }));
  };

  const generateMessage = () => {
    const serviceList = form.services.length > 0 
      ? form.services.map(s => `• ${s}`).join('\n')
      : 'No services selected';

    return `Contact Request from ${form.name}

Email: ${form.email}

Services Requested:
${serviceList}

Message:
${form.message || 'No additional message provided.'}

---
This message was automatically generated from the contact form.`;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (form.services.length === 0) {
      alert("Please select at least one service.");
      return;
    }

    if (!turnstileToken) {
      alert("Please complete the CAPTCHA verification.");
      return;
    }

    setIsSubmitting(true);

    const fullMessage = generateMessage();
    const formData = {
      name: form.name,
      email: form.email,
      subject: form.services.join(', '),
      message: fullMessage,
      turnstileToken: turnstileToken,
    };

    try {
      const response = await fetch(`${API_URL}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message');
      }

      setSubmitted(true);
      setForm({ name: "", email: "", message: "", services: [] });
      setTurnstileToken(null);
      
      // Reset Turnstile
      if (window.turnstile && widgetIdRef.current) {
        try {
          window.turnstile.reset(widgetIdRef.current);
        } catch (e) {
          console.error('Error resetting Turnstile:', e);
        }
      }

      setTimeout(() => setSubmitted(false), 6000);
    } catch (error) {
      console.error("Error submitting form:", error);
      alert(error.message || "There was an error submitting your message. Please try again.");
      
      // Reset Turnstile on error
      if (window.turnstile && widgetIdRef.current) {
        try {
          window.turnstile.reset(widgetIdRef.current);
        } catch (e) {
          console.error('Error resetting Turnstile:', e);
        }
      }
      setTurnstileToken(null);
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass = (field) =>
    `w-full bg-[#0B0F1A] border ${
      focusedField === field ? 'border-[#8FB5CC]' : 'border-white/10'
    } rounded-lg px-4 py-3.5 text-sm text-white placeholder:text-white/30 focus:outline-none focus:ring-1 focus:ring-[#8FB5CC] focus:border-[#8FB5CC] transition-all duration-200`;

  return (
    <section className="py-16 md:py-20 bg-[#0B0F1A] relative overflow-hidden">
      {/* Ambient Background Elements */}
      <motion.div
        className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(143,181,204,0.04) 0%, transparent 70%)" }}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(90,143,173,0.03) 0%, transparent 70%)" }}
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.3, 1, 0.3],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      />

      {/* Floating Particles */}
      <motion.div
        className="absolute top-1/4 right-1/4 w-1.5 h-1.5 bg-[#8FB5CC]/20 rounded-full pointer-events-none"
        animate={{
          y: [-30, 30, -30],
          x: [-15, 15, -15],
          opacity: [0.1, 0.4, 0.1],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Enhanced Header with Animation */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
          }}
          className="text-center mb-12"
        >
          <motion.h2
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
              },
            }}
            className="text-3xl md:text-4xl font-black text-white tracking-tight"
          >
            <motion.span
              className="text-[#8FB5CC] inline-block"
              whileHover={{
                color: "#FFFFFF",
                textShadow: "0 0 20px rgba(143,181,204,0.4)",
              }}
              transition={{ duration: 0.3 }}
            >
              Let's Connect
            </motion.span>
          </motion.h2>
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.6, delay: 0.2 },
              },
            }}
            className="text-white/50 text-sm mt-2 max-w-md mx-auto"
          >
            Fill out the form below and we'll get back to you within 24 hours.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-[340px_1fr] gap-6 md:gap-8 items-start">
          {/* Contact Info Card with Animation */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -5, scale: 1.01 }}
            className="bg-[#1A2035] rounded-xl border border-white/10 p-6 md:p-8 relative overflow-hidden shadow-xl hover:border-white/20 transition-colors duration-300"
          >
            {/* Animated Grid Overlay */}
            <motion.svg
              className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.03]"
              xmlns="http://www.w3.org/2000/svg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.03 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <defs>
                <pattern id="card-grid" width="30" height="30" patternUnits="userSpaceOnUse">
                  <path d="M 30 0 L 0 0 0 30" fill="none" stroke="#FFFFFF" strokeWidth="1" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#card-grid)" />
            </motion.svg>

            <motion.div
              className="relative"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.1, delayChildren: 0.3 } },
              }}
            >
              <div className="flex items-center gap-3 mb-6">
                <motion.span
                  variants={{
                    hidden: { width: 0, opacity: 0 },
                    visible: {
                      width: 24,
                      opacity: 1,
                      transition: { duration: 0.6, delay: 0.3, ease: [0.65, 0, 0.35, 1] },
                    },
                  }}
                  className="w-6 h-px bg-[#8FB5CC] block relative overflow-hidden"
                >
                  <motion.span
                    className="absolute inset-0 bg-white/60"
                    animate={{ x: ["-100%", "200%"] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  />
                </motion.span>
                <motion.h3
                  variants={{
                    hidden: { opacity: 0, x: -10 },
                    visible: { opacity: 1, x: 0, transition: { duration: 0.4, delay: 0.5 } },
                  }}
                  className="text-white font-bold text-xs uppercase tracking-wider"
                >
                  Contact Info
                </motion.h3>
              </div>

              <div className="border-t border-white/5 pt-6">
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.6 } },
                  }}
                  className="flex items-start gap-4"
                >
                  <motion.div
                    className="flex-shrink-0 w-11 h-11 rounded-lg bg-[#8FB5CC]/10 flex items-center justify-center"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300, damping: 15 }}
                  >
                    <motion.svg
                      className="w-5 h-5 text-[#8FB5CC]"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                      animate={{ rotate: [0, 10, -10, 0] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </motion.svg>
                  </motion.div>
                  <div>
                    <p className="text-white font-semibold text-sm mb-0.5">Send E-Mail</p>
                    <motion.a
                      href="mailto:aa@seachangesolutions.xyz"
                      className="text-white/60 text-sm hover:text-[#8FB5CC] transition-colors duration-200"
                      whileHover={{ x: 3 }}
                    >
                      aa@seachangesolutions.xyz
                    </motion.a>
                  </div>
                </motion.div>

                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.8 } },
                  }}
                  className="mt-6 pt-6 border-t border-white/5"
                >
                  <div className="flex items-start gap-4">
                    <motion.div
                      className="flex-shrink-0 w-11 h-11 rounded-lg bg-[#8FB5CC]/10 flex items-center justify-center"
                      whileHover={{ scale: 1.1, rotate: -5 }}
                      transition={{ type: "spring", stiffness: 300, damping: 15 }}
                    >
                      <svg className="w-5 h-5 text-[#8FB5CC]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5m0 0V8m0 5h5m-5 0H7" />
                      </svg>
                    </motion.div>
                    <div>
                      <p className="text-white font-semibold text-sm mb-0.5">Response Time</p>
                      <p className="text-white/60 text-sm">Within 24 hours</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>

          {/* Form Card with Enhanced Animation */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="bg-[#1A2035] rounded-xl border border-white/10 p-6 md:p-8 lg:p-10 shadow-xl hover:border-white/20 transition-colors duration-300"
          >
            {/* Form Header */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.1, delayChildren: 0.4 } },
              }}
              className="mb-8"
            >
              <motion.div
                variants={{
                  hidden: { opacity: 0, x: -15 },
                  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
                }}
                className="flex items-center gap-3 mb-2"
              >
                <motion.span
                  variants={{
                    hidden: { width: 0, opacity: 0 },
                    visible: {
                      width: 24,
                      opacity: 1,
                      transition: { duration: 0.6, delay: 0.5, ease: [0.65, 0, 0.35, 1] },
                    },
                  }}
                  className="w-6 h-px bg-[#8FB5CC] block relative overflow-hidden"
                >
                  <motion.span
                    className="absolute inset-0 bg-white/60"
                    animate={{ x: ["-100%", "200%"] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                  />
                </motion.span>
                <motion.span
                  variants={{
                    hidden: { opacity: 0, y: 10 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.4, delay: 0.6 } },
                  }}
                  className="text-[#8FB5CC] text-xs font-bold tracking-[0.25em] uppercase"
                >
                  Get In Touch
                </motion.span>
              </motion.div>
              <motion.h2
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.7, delay: 0.6, ease: [0.16, 1, 0.3, 1] },
                  },
                }}
                className="text-2xl md:text-3xl font-black text-white tracking-tight"
              >
                Let's Connect
              </motion.h2>
            </motion.div>

            {/* Name + Email with staggered entrance */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.1, delayChildren: 0.7 } },
              }}
              className="grid sm:grid-cols-2 gap-4 mb-8"
            >
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                }}
              >
                <motion.input
                  type="text"
                  placeholder="Your Name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  onFocus={() => setFocusedField('name')}
                  onBlur={() => setFocusedField(null)}
                  required
                  whileFocus={{ scale: 1.01 }}
                  className={inputClass('name')}
                />
              </motion.div>
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.1 } },
                }}
              >
                <motion.input
                  type="email"
                  placeholder="Email Address"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  onFocus={() => setFocusedField('email')}
                  onBlur={() => setFocusedField(null)}
                  required
                  whileFocus={{ scale: 1.01 }}
                  className={inputClass('email')}
                />
              </motion.div>
            </motion.div>

            {/* Service Selection with staggered animations */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.1, delayChildren: 0.8 } },
              }}
              className="border-t border-white/5 pt-8 grid sm:grid-cols-2 gap-x-8 gap-y-8 mb-8"
            >
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                }}
              >
                <h3 className="font-bold text-white/90 text-xs uppercase tracking-widest text-[#8FB5CC] mb-4 flex items-center gap-2">
                  <span>Technology Services</span>
                  <motion.span
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 1 }}
                    className="flex-1 h-px bg-white/5 origin-left block"
                  />
                </h3>
                <div className="flex flex-col gap-3">
                  {techServices.map((s, idx) => (
                    <ServiceCheckbox
                      key={s}
                      label={s}
                      checked={form.services.includes(s)}
                      onChange={() => toggleService(s)}
                      index={idx}
                    />
                  ))}
                </div>
              </motion.div>

              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.1 } },
                }}
              >
                <h3 className="font-bold text-white/90 text-xs uppercase tracking-widest text-[#8FB5CC] mb-4 flex items-center gap-2">
                  <span>Compliance & Learning</span>
                  <motion.span
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 1.1 }}
                    className="flex-1 h-px bg-white/5 origin-left block"
                  />
                </h3>
                <div className="flex flex-col gap-3">
                  {complianceServices.map((s, idx) => (
                    <ServiceCheckbox
                      key={s}
                      label={s}
                      checked={form.services.includes(s)}
                      onChange={() => toggleService(s)}
                      index={idx}
                    />
                  ))}
                </div>
              </motion.div>

              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.2 } },
                }}
                className="sm:col-span-2"
              >
                <h3 className="font-bold text-white/90 text-xs uppercase tracking-widest text-[#8FB5CC] mb-4 flex items-center gap-2">
                  <span>Digital Marketing Solutions</span>
                  <motion.span
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 1.2 }}
                    className="flex-1 h-px bg-white/5 origin-left block"
                  />
                </h3>
                <div className="flex flex-wrap gap-x-6 gap-y-3">
                  {marketingServices.map((s, idx) => (
                    <ServiceCheckbox
                      key={s}
                      label={s}
                      checked={form.services.includes(s)}
                      onChange={() => toggleService(s)}
                      index={idx}
                    />
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* Message Textarea */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.9 }}
              className="mb-6"
            >
              <motion.textarea
                placeholder="Write a Message"
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                onFocus={() => setFocusedField('message')}
                onBlur={() => setFocusedField(null)}
                whileFocus={{ scale: 1.01 }}
                className={`${inputClass('message')} resize-y min-h-[120px]`}
              />
            </motion.div>

            {/* Turnstile CAPTCHA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.95 }}
              className="mb-6 flex flex-col items-center"
            >
              <div 
                ref={turnstileRef} 
                className="turnstile-container"
              />
              {turnstileLoaded && !turnstileToken && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-xs text-white/30 mt-2 text-center"
                >
                  Please complete the CAPTCHA verification
                </motion.p>
              )}
            </motion.div>

            {/* Animated Success Message */}
            <AnimatePresence>
              {submitted && (
                <motion.div
                  initial={{ opacity: 0, height: 0, scale: 0.95 }}
                  animate={{ opacity: 1, height: "auto", scale: 1 }}
                  exit={{ opacity: 0, height: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="mb-6 p-4 bg-green-500/10 border border-green-500/20 rounded-lg overflow-hidden"
                >
                  <motion.p
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-sm text-green-400 flex items-center gap-2"
                  >
                    <motion.svg
                      className="w-5 h-5 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                      initial={{ scale: 0, rotate: -90 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ delay: 0.3, type: "spring", stiffness: 300, damping: 15 }}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </motion.svg>
                    <span>✓ Message sent successfully! We'll get back to you soon.</span>
                  </motion.p>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Submit Button with enhanced animations */}
            <motion.button
              type="submit"
              disabled={isSubmitting || submitted || !turnstileToken}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 1 }}
              whileHover={!isSubmitting && !submitted && turnstileToken ? { scale: 1.02, y: -2 } : {}}
              whileTap={!isSubmitting && !submitted && turnstileToken ? { scale: 0.98 } : {}}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#8FB5CC] text-white font-bold px-8 py-3.5 rounded-full hover:bg-[#7A9DB5] transition-all duration-200 shadow-lg shadow-[#8FB5CC]/20 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:bg-[#8FB5CC] relative overflow-hidden"
            >
              <AnimatePresence mode="wait">
                {isSubmitting ? (
                  <motion.div
                    key="submitting"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center gap-3"
                  >
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <span>Sending...</span>
                  </motion.div>
                ) : submitted ? (
                  <motion.span
                    key="submitted"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    ✓ Sent!
                  </motion.span>
                ) : (
                  <motion.div
                    key="idle"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center gap-3"
                  >
                    <span>Submit Message</span>
                    
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>

            {/* Service Selection Hint */}
            <AnimatePresence>
              {form.services.length === 0 && !submitted && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="text-xs text-white/30 mt-4 text-center sm:text-left"
                >
                  * Please select at least one service to proceed
                </motion.p>
              )}
            </AnimatePresence>
          </motion.form>
        </div>
      </div>
    </section>
  );
}