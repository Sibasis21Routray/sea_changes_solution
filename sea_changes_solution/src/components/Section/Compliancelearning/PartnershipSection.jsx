import React, { useEffect, useRef, useState } from "react";
import { COLORS } from "../../Common/Color";


const TextBlock = ({ children, icon, animate = false, duration = 4, delay = 0 }) => (
  <div className="relative flex gap-4 pl-1">
    
    <div className="flex flex-row gap-3">
      {icon && (
        <div
          className="mb-2 flex h-7 w-10 items-center justify-center rounded-md"
          style={{ backgroundColor: `${COLORS.signal}1F`, color: COLORS.signal }}
        >
          {icon}
        </div>
      )}
      <p>{children}</p>
    </div>
  </div>
);

// Small inline icon set, kept simple and consistent (1.5px stroke, 16px box)
const icons = {
  handshake: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M8 12l2.5 2.5L16 9" />
      <path d="M3 11l4-4 3 1 3-2 4 4-2 2-2-2-3 2-3-1-4 4z" />
    </svg>
  ),
  users: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="9" cy="8" r="3" />
      <path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6" />
      <circle cx="17" cy="9" r="2.5" />
      <path d="M16 14.2c2.3.4 4 2.3 4 4.8" />
    </svg>
  ),
  briefcase: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="8" width="18" height="11" rx="2" />
      <path d="M8 8V6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
      <path d="M3 13h18" />
    </svg>
  ),
  brain: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 3a3 3 0 0 0-3 3v1a3 3 0 0 0-2 5 3 3 0 0 0 2 5h1a3 3 0 0 0 3 3" />
      <path d="M15 3a3 3 0 0 1 3 3v1a3 3 0 0 1 2 5 3 3 0 0 1-2 5h-1a3 3 0 0 1-3 3" />
      <path d="M9 3v18M15 3v18" />
    </svg>
  ),
  growth: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 17l5-5 4 4 8-8" />
      <path d="M16 7h5v5" />
    </svg>
  ),
};

const PartnershipSection = ({
  heading = "Our Partnership with UPS",
  taglineLine1 = "TOGETHER WE HAVE UNLOCKED THE POTENTIAL OF OUR CLIENTS AND THEIR",
  taglineLine2 = "STAFF WITH TRANSFORMATIONAL TRAINING AND COMPLIANCE PROGRAMS",
  logoSrc = "/compliance/UPS.png",
  logoAlt = "Ultimate Performance Solutions Logo",
  partnerName = "Ultimate Performance Solutions",
}) => {
  const [visible, setVisible] = useState(false);
  const [imgFailed, setImgFailed] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="px-6 py-16" style={{ backgroundColor: COLORS.ink }}>
      <div className="mx-auto max-w-7xl">
        <div
          className="mb-10 text-center transition-all duration-700 ease-out"
          style={{
            transform: visible ? "translateY(0)" : "translateY(12px)",
            opacity: visible ? 1 : 0,
          }}
        >
          <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">{heading}</h2>
          <p
            className="mb-1 text-sm font-bold uppercase tracking-widest"
            style={{ color: COLORS.signal }}
          >
            {taglineLine1}
          </p>
          <p className="text-sm font-bold uppercase tracking-widest" style={{ color: COLORS.signal }}>
            {taglineLine2}
          </p>
        </div>

        <div className="flex flex-col items-center gap-12 md:flex-row">
          {/* UPS Logo */}
          <div
            className="flex w-full flex-shrink-0 items-center justify-center transition-all duration-700 ease-out md:w-80"
            style={{
              transitionDelay: "120ms",
              transform: visible ? "translateY(0)" : "translateY(14px)",
              opacity: visible ? 1 : 0,
            }}
          >
            <div className="flex flex-col items-center text-center">
              <div className="mb-2 flex h-14 items-center justify-center sm:h-16">
                {!imgFailed ? (
                  <img
                    src={logoSrc}
                    alt={logoAlt}
                    className="block h-full object-contain brightness-110"
                    onError={() => setImgFailed(true)}
                  />
                ) : (
                  <span
                    className="text-5xl font-black leading-none tracking-tight"
                    style={{ color: COLORS.signal }}
                  >
                    UPS
                  </span>
                )}
              </div>
              <p className="mt-1 text-sm uppercase tracking-widest text-gray-400">{partnerName}</p>
            </div>
          </div>

          {/* Text — split into blocks, each with a left-side vertical bar */}
          <div
            className="flex flex-col gap-5 text-base leading-relaxed text-gray-300 transition-all duration-700 ease-out"
          >
            <TextBlock icon={icons.handshake} animate={visible} duration={4} delay={0}>
              Our partner, <strong className="text-white">Ultimate Performance Solutions (UPS)</strong>,
              specializes in <strong className="text-white">transformational coaching</strong> to drive
              sustainable, positive change.
            </TextBlock>

            <TextBlock icon={icons.users} animate={visible} duration={4.6} delay={0.3}>
              At <strong className="text-white">SeaChange</strong>, we collaborate with UPS to empower
              individuals and organizations through proven coaching methods.
            </TextBlock>

            <TextBlock icon={icons.briefcase} animate={visible} duration={5.2} delay={0.6}>
              With extensive experience in{" "}
              <strong className="text-white">
                senior management across global, regional, and country levels
              </strong>
              , UPS goes beyond conventional training to deliver real results.
            </TextBlock>

            <TextBlock icon={icons.brain} animate={visible} duration={4.8} delay={0.9}>
              Their approach focuses on{" "}
              <strong className="text-white">mindset and behavioral transformation</strong>, using{" "}
              <strong className="text-white">NLP, EFT, Hypnosis, and Sport &amp; Exercise Psychology</strong>.
            </TextBlock>

            <TextBlock icon={icons.growth} animate={visible} duration={4.2} delay={1.2}>
              Together, SeaChange and UPS are committed to providing impactful learning experiences that
              foster personal and professional growth, helping individuals unlock their full potential.
            </TextBlock>
          </div>
        </div>
      </div>

    </section>
  );
};

export default PartnershipSection;