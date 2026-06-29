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
    imgSrc: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=900&q=80",
    imgAlt: "Woman working on laptop",
  },
  {
    theme: "light",
    code: "02",
    title: "Policy & Code of Conduct Programs",
    description:
      "We help businesses roll out internal policies and codes of conduct with clarity and consistency. Through engaging digital learning and structured rollouts, we support employee understanding and adherence to your company's ethical framework.",
    imgSrc: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=900&q=80",
    imgAlt: "Two colleagues comparing information",
  },
  {
    theme: "dark",
    code: "03",
    title: "Country-Specific Cultural & Legal Training",
    description:
      "We offer tailored training for expatriates and international teams on local laws, workplace culture, and operational do's and don't—helping your workforce adapt, integrate, and contribute effectively from the start.",
    imgSrc: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=900&q=80",
    imgAlt: "Diverse group of friends",
  },
  {
    theme: "light",
    code: "04",
    title: "Onboarding & Orientation Modules",
    description:
      "Our onboarding programs introduce new hires to your company's culture, values, and expectations in a structured, engaging, and compliant manner—accelerating productivity and creating a unified employee experience from day one.",
    imgSrc: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=900&q=80",
    imgAlt: "Business colleagues in a lobby",
  },
  {
    theme: "dark",
    code: "05",
    title: "Performance & Skills Development Programs",
    description:
      "Beyond compliance, we design training focused on leadership, communication, customer service, and role-based skills development to unlock your team's full potential and improve overall performance.",
    imgSrc: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=900&q=80",
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
    <main>
      <HeroSection heading="Compliance & Learning Management Solutions" chip="Risk, Compliance & Learning" />
      <IntroSection paragraph="At SeaChange Solutions, our compliance and learning management solutions are designed to equip businesses in Southeast Asia and Sri Lanka with the knowledge, systems, and confidence to meet regulatory requirements and empower their teams through effective learning. We help organizations navigate complex compliance landscapes, streamline training processes, and foster a culture of continuous development. Whether you're aiming to reduce risk, enhance employee performance, or stay ahead of regulatory changes, our solutions are tailored to your specific operational environment." />
      <PartnershipSection />

      {SERVICES.map((service, i) => (
        <ServiceSection key={service.code} {...service} reversed={i % 2 === 1} />
      ))}

      <PlaybookSection items={PLAYBOOK} />
      <WhyChooseSection reasons={WHY_CHOOSE} />
    </main>
  );
};

export default ComplianceLearning;