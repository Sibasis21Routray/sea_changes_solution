import React from "react";
import HeroSection from "../components/Section/TechServices/HeroSection";
import IntroSection from "../components/Section/TechServices/IntroSection";
import ServiceSections from "../components/Section/TechServices/ServiceSections";
import PlaybookSection from "../components/Section/TechServices/PlaybookSection";
import WhyChooseSection from "../components/Section/TechServices/WhyChooseSection";
import CTASection from "../components/Section/TechServices/CTASection";

const TechnologyServices = () => {
  return (
    <main>
      <HeroSection />
      <IntroSection />
      <ServiceSections />
      <PlaybookSection />
      <WhyChooseSection />
      <CTASection />
    </main>
  );
};

export default TechnologyServices;
