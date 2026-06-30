import React from "react";
import HeroSection from "../components/Section/service/Herosection";
import IntroSection from "../components/Section/service/IntroSection";
import ServiceSection from "../components/Section/service/ServiceSection";
import PlaybookSection from "../components/Section/service/PlaybookSection";
import WhyChooseSection from "../components/Section/service/WhyChooseSection";
import CTASection from "../components/Section/TechServices/CTASection";

// Service data from your ServiceSections component
const SERVICES = [
  {
    theme: "dark",
    title: "Software Development",
    description:
      "We design and build custom software solutions that address specific business challenges—whether it's a streamlined internal process or a customer-facing application. Our development approach is agile, scalable, and tailored to your exact needs.",
    imgSrc:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&q=80",
    imgAlt: "Developer coding on monitor",
  },
  {
    theme: "light",
    title: "Web Development & Design",
    description:
      "Your website is often your first impression—we make it count. From sleek corporate sites to complex web platforms, we deliver responsive, intuitive, and conversion-optimized websites that blend design excellence with robust functionality.",
    imgSrc: "/technology-services/Web-Development-Design.webp",
    imgAlt: "Developer coding on monitor",
  },
  {
    theme: "dark",
    title: "Mobile App Development",
    description:
      "Reach your audience wherever they are. We develop high-performance mobile applications for iOS and Android, built with user experience, security, and future scalability in mind.",
    imgSrc: "/technology-services/Mobile-App-Development.webp",
    imgAlt: "Mobile App Development concept",
  },
  {
    theme: "light",
    title: "System Integration & API Development",
    description:
      "We help unify your digital ecosystem by integrating systems and building custom APIs that allow platforms to communicate efficiently. This improves data flow, eliminates silos, and enhances overall operational efficiency.",
    imgSrc:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&q=80",
    imgAlt: "API Development concept",
  },
  {
    theme: "dark",
    title: "Cloud Infrastructure & DevOps",
    description:
      "Accelerate development and ensure system reliability with our cloud and DevOps solutions. We offer cloud architecture design, CI/CD automation, monitoring, and maintenance to keep your digital operations smooth, secure, and scalable.",
    imgSrc: "/technology-services/Cloud-Infrastructure-DevOps.webp",
    imgAlt: "DevOps",
  },
];

const PLAYBOOK = [
  {
    num: 1,
    title: "Client-Centered Solutions",
    highlighted: "Client-Centered",
    desc: "We start with a collaborative discovery phase to deeply understand your business objectives, user needs, technical environment, and scalability expectations. Whether you're building a product or modernizing your digital presence, we align on vision and scope.",
  },
  {
    num: 2,
    title: "Agile Development",
    highlighted: "Agile",
    desc: "Our team transforms your requirements into structured design—UX/UI wireframes, system architecture, API structures, and workflows. The focus is on usability, performance, and future-readiness from day one.",
  },
  {
    num: 3,
    title: "Scalable Architecture",
    highlighted: "Scalable",
    desc: "Using agile methodologies, we begin development across your chosen platforms—web, mobile, or custom software. Our code is clean, secure, and scalable, ensuring seamless integration with your existing systems.",
  },
  {
    num: 4,
    title: "Security First",
    highlighted: "Security",
    desc: "We connect your systems through API integrations, data flows, and automation pipelines. Once ready, we deploy across secure, scalable cloud infrastructure—optimized for performance, compliance, and uptime.",
  },
  {
    num: 5,
    title: "Continuous Support",
    highlighted: "Continuous",
    desc: "Before launch, we rigorously test across devices, browsers, and user roles—fine-tuning for speed, security, and stability. With feedback loops in place, we ensure a smooth go-live experience.",
  },
  {
    num: 6,
    title: "Transparent Process",
    highlighted: "Transparent",
    desc: "Post-launch, we provide ongoing maintenance, DevOps support, and enhancements. From security patches to feature rollouts, we keep your digital assets evolving as your business grows.",
  },
];

const WHY_CHOOSE = [
  {
    num: 1,
    title: "Full-Stack Expertise",
    desc: "From software and mobile apps to responsive websites and backend systems, we offer end-to-end development across the full technology stack—so you don't have to juggle multiple vendors.",
  },
  {
    num: 2,
    title: "Custom-Built, Business-Ready",
    desc: "We build solutions tailored to your unique business goals—no templates, no shortcuts. Whether it's a customer portal or enterprise integration, we deliver technology that actually fits.",
  },
  {
    num: 3,
    title: "Scalable & Cloud-Optimized",
    desc: "We design for scale from day one. Our cloud-first DevOps practices ensure your applications are fast, secure, and ready to grow with your business.",
  },
  {
    num: 4,
    title: "Seamless System Integration",
    desc: "Your systems should talk to each other—so we make it happen. From APIs to ERP integrations, we ensure your tools work together, not in silos.",
  },
  {
    num: 5,
    title: "Design Meets Functionality",
    desc: "We blend intuitive UI/UX design with powerful backend performance to deliver solutions that are both beautiful and built to perform.",
  },
  {
    num: 6,
    title: "Ongoing Support & Maintenance",
    desc: "Our job doesn't end at launch. We provide continuous technical support, feature enhancements, and infrastructure monitoring to keep your systems running smoothly and securely.",
  },
];

const TechnologyServices = () => {
  return (
    <main className="relative min-h-screen bg-[#0B0F1A] overflow-hidden">
      
      {/* Fixed Full-Viewport Background Image Layer */}
      <div className="fixed inset-0 pointer-events-none z-0 w-screen h-screen">
        {/* DESKTOP BACKGROUND IMAGE */}
        <img 
          src="/technology-services/Technology-Services.webp" 
          alt="Background Texture" 
          className="hidden md:block w-full h-full object-cover object-center opacity-80"
          onError={(e) => {
            e.currentTarget.style.opacity = '0';
          }}
        />

        {/* MOBILE BACKGROUND IMAGE */}
        <img 
          src="/technology-services/Technology-Services.webp" 
          alt="Mobile Background Texture" 
          className="block md:hidden w-full h-full object-cover object-center opacity-70"
          onError={(e) => {
            e.currentTarget.style.opacity = '0';
          }}
        />
        
        {/* Cinematic dark mask over the image */}
        <div className="absolute inset-0 bg-[#0B0F1A]/50" />
      </div>

      <div className="relative z-10 w-full h-full [&_section]:bg-transparent [&_div]:bg-transparent">
        
        {/* UNIVERSAL CHILD SELECTOR: Forces the Hero Heading to render white */}
        <div className="[&_*]:!text-white">
          <HeroSection heading=" Technology Services" chip="Technology Services"/>
        </div>

        {/* TARGETED SELECTION: Forces the Intro paragraph to render white */}
        <div className="[&_p]:!text-white">
          <IntroSection 
            paragraph="At SeaChange Solutions, our technology services are built to empower your business with scalable, secure, and efficient digital systems. We bring ideas to life through end-to-end tech execution that aligns with your strategic goals."
          />
        </div>

        {/* Map through SERVICES array and render ServiceSection */}
        {SERVICES.map((service, i) => (
          <ServiceSection
            key={service.title}
            theme={service.theme}
            title={service.title}
            description={service.description}
            imgSrc={service.imgSrc}
            imgAlt={service.imgAlt}
            reversed={i % 2 === 1}
          />
        ))}

        <PlaybookSection items={PLAYBOOK} />
        <WhyChooseSection reasons={WHY_CHOOSE} />
        <CTASection />
      </div>
    </main>
  );
};

export default TechnologyServices;