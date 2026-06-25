import React from "react";
import HeroSection from "../components/Section/Compliancelearning/HeroSection";
import IntroSection from "../components/Section/Compliancelearning/IntroSection";
import PartnershipSection from "../components/Section/Compliancelearning/PartnershipSection";
import ServiceSections from "../components/Section/Compliancelearning/ServiceSections";
import PlaybookSection from "../components/Section/Compliancelearning/PlaybookSection";
import WhyChooseSection from "../components/Section/Compliancelearning/WhyChooseSection";
// import CTASection from "../components/section/Compliancelearning/CTASection";

const ComplianceLearning = () => {
  return (
    <main>
      <HeroSection />
      <IntroSection />
      <PartnershipSection />
      <ServiceSections />
      <PlaybookSection />
      <WhyChooseSection />
      {/* <CTASection /> */}
    </main>
  );
};

export default ComplianceLearning;
