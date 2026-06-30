import React from "react";
import PartnershipSection from "../components/Section/Compliancelearning/PartnershipSection";
import PlaybookSection from "../components/Section/service/PlaybookSection";
import WhyChooseSection from "../components/Section/service/WhyChooseSection";
import HeroSection from "../components/Section/service/Herosection";
import IntroSection from "../components/Section/service/IntroSection";
import ServiceSection from "../components/Section/service/ServiceSection";

const SERVICES = [
  {
    theme: "dark",
    code: "01",
    title: "Compliance and Learning Management (CALM) Platform",
    description:
      "Our scalable and user-friendly Compliance and Learning Management (CALM) platform makes it easy to manage, track, and evaluate training across teams and sites. With built-in multilingual capabilities, we ensure your content is accessible and relevant to diverse workforces across Southeast Asia and Sri Lanka. We provide implementation, content migration, system customization, and ongoing support to ensure seamless integration into your organization.",
    imgSrc: "/compliance/Clam01.webp",
    imgAlt: "Woman working on laptop",
  },
  {
    theme: "light",
    code: "02",
    title: "Policy & Code of Conduct Programs",
    description:
      "We help businesses roll out internal policies and codes of conduct with clarity and consistency. Through engaging digital learning and structured rollouts, we support employee understanding and adherence to your company's ethical framework.",
    imgSrc: "/compliance/Clam02.webp",
    imgAlt: "Two colleagues comparing information",
  },
  {
    theme: "dark",
    code: "03",
    title: "Country-Specific Cultural & Legal Training",
    description:
      "We offer tailored training for expatriates and international teams on local laws, workplace culture, and operational do's and don't—helping your workforce adapt, integrate, and contribute effectively from the start.",
    imgSrc: "/compliance/clam03.webp",
    imgAlt: "Diverse group of friends",
  },
  {
    theme: "light",
    code: "04",
    title: "Onboarding & Orientation Modules",
    description:
      "Our onboarding programs introduce new hires to your company's culture, values, and expectations in a structured, engaging, and compliant manner—accelerating productivity and creating a unified employee experience from day one.",
    imgSrc: "/compliance/clam0.webp",
    imgAlt: "Business colleagues in a lobby",
  },
  {
    theme: "dark",
    code: "05",
    title: "Performance & Skills Development Programs",
    description:
      "Beyond compliance, we design training focused on leadership, communication, customer service, and role-based skills development to unlock your team's full potential and improve overall performance.",
    imgSrc: "/compliance/05.webp",
    imgAlt: "Young woman giving a lecture",
  },
];

const PLAYBOOK = [
  {
    num: 1,
    title: "Needs-Based Customization",
    highlighted: "Customization",
    desc: "We tailor every program to your industry, team size, location, and learning goals.",
  },
  {
    num: 2,
    title: "Bite-Sized, Engaging Learning",
    highlighted: "Engaging Learning",
    desc: "Our content is designed for real-world application, with short, interactive modules that stick.",
  },
  {
    num: 3,
    title: "Tech-Driven Efficiency",
    highlighted: "Tech-Driven",
    desc: "We use modern technologies to automate tracking, assessments, and progress reporting.",
  },
  {
    num: 4,
    title: "Compliance Confidence",
    highlighted: "Compliance",
    desc: "We stay ahead of legal and regulatory shifts so your teams are always up to date.",
  },
  {
    num: 5,
    title: "Integrated Learning Culture",
    highlighted: "Learning Culture",
    desc: "Our programs build a foundation for continuous learning across all levels of the organization.",
  },
  {
    num: 6,
    title: "Scalable for Growth",
    highlighted: "Scalable",
    desc: "Whether you're a startup or regional enterprise, our solutions scale with your business needs.",
  },
];

const WHY_CHOOSE = [
  {
    num: 1,
    title: "Proven Track Record",
    desc: "Trusted by industry leaders for our ability to simplify compliance and boost team performance.",
  },
  {
    num: 2,
    title: "Content That Connects",
    desc: "Our training is crafted to be practical, engaging, and easy to apply in real work scenarios.",
  },
  {
    num: 3,
    title: "Regional Expertise",
    desc: "Deep understanding of Southeast Asian and Sri Lankan compliance frameworks and workplace cultures.",
  },
  {
    num: 4,
    title: "End-to-End Support",
    desc: "From initial setup to content delivery and tracking, we manage the full training lifecycle.",
  },
  {
    num: 5,
    title: "Time & Cost Efficient",
    desc: "We streamline training processes, reduce admin load, and deliver measurable ROI.",
  },
  {
    num: 6,
    title: "People-First Approach",
    desc: "We focus on building understanding, not just ticking boxes—empowering your workforce to do the right thing.",
  },
];

const ComplianceLearning = () => {
  return (
    <main className="relative min-h-screen bg-[#0B0F1A] overflow-hidden">
      
      {/* Fixed Full-Viewport Background Image Layer */}
      <div className="fixed inset-0 pointer-events-none z-0 w-screen h-screen">
        {/* DESKTOP BACKGROUND IMAGE */}
        <img 
          src="/compliance/compliancehero.jpg" 
          alt="Background Texture" 
          className="hidden md:block w-full h-full object-cover object-center opacity-80"
          onError={(e) => {
            e.currentTarget.style.opacity = '0';
          }}
        />

        {/* MOBILE BACKGROUND IMAGE */}
        <img 
          src="/compliance/compliancehero.jpg" 
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
        
        {/* UNIVERSAL CHILD SELECTOR: Forces EVERYTHING inside HeroSection to be white */}
        <div className="[&_*]:!text-white">
          <HeroSection heading="Compliance & Learning Management Solutions" chip="Risk, Compliance & Learning" />
        </div>
        
        {/* TARGETED SELECTION: Keeps the Intro paragraph white */}
        <div className="[&_p]:!text-white">
          <IntroSection paragraph="At SeaChange Solutions, our compliance and learning management solutions are designed to equip businesses in Southeast Asia and Sri Lanka with the knowledge, systems, and confidence to meet regulatory requirements and empower their teams through effective learning. We help organizations navigate complex compliance landscapes, streamline training processes, and foster a culture of continuous development. Whether you're aiming to reduce risk, enhance employee performance, or stay ahead of regulatory changes, our solutions are tailored to your specific operational environment." />
        </div>
        
        <PartnershipSection />

        {SERVICES.map((service, i) => (
          <ServiceSection key={service.code} {...service} reversed={i % 2 === 1} />
        ))}

        <PlaybookSection items={PLAYBOOK} />
        <WhyChooseSection reasons={WHY_CHOOSE} />
      </div>
    </main>
  );
};

export default ComplianceLearning;