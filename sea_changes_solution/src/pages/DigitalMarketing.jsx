import React from "react";
import HeroSection from "../components/Section/DigitalMarketing/HeroSection";
import IntroSection from "../components/Section/DigitalMarketing/IntroSection";
import ServiceSections from "../components/Section/DigitalMarketing/ServiceSections";
import PlaybookSection from "../components/Section/DigitalMarketing/PlaybookSection";
import WhyChooseSection from "../components/Section/DigitalMarketing/WhyChooseSection";
import CTASection from "../components/Section/DigitalMarketing/CTASection";

const DigitalMarketing = () => {
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

export default DigitalMarketing;
