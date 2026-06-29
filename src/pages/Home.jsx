import Hero from "../components/Section/Home/Hero";
import AboutIntro from "../components/Section/Home/AboutIntro";
import Services from "../components/Section/Home/Services";
import HowItWorks from "../components/Section/Home/HowItWorks";
import WhyUs from "../components/Section/Home/WhyUs";
import Stats from "../components/Section/Home/Stats";
// import Clients from "../components/section/Home/Clients";
import Testimonials from "../components/Section/Home/Testimonials";
// import BlogSection from "../components/section/Home/BlogSection";
// import CTABanner from "../components/section/Home/CTABanner";

export default function Home() {
  return (
    <>
      < Hero/>
      <AboutIntro />
      <Services />
      <HowItWorks />
      <WhyUs />
      <Stats />
      {/* <Clients /> */}
      <Testimonials />
      {/* <BlogSection /> */}
      {/* <CTABanner /> */}
    </>
  );
}
