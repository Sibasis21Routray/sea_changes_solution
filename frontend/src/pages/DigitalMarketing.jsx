import React from "react";
import HeroSection from "../components/Section/service/Herosection";
import IntroSection from "../components/Section/service/IntroSection";
import ServiceSection from "../components/Section/service/ServiceSection";
import PlaybookSection from "../components/Section/service/PlaybookSection";
import WhyChooseSection from "../components/Section/service/WhyChooseSection";
import CTASection from "../components/Section/DigitalMarketing/CTASection";

// Service data from your ServiceSections component
const SERVICES = [
  {
    theme: "light",
    title: "Branding",
    description:
      "Strong branding is key to standing out in today's competitive digital landscape. We help businesses develop a unique brand identity that resonates with their target audience. From logo design and visual assets to crafting compelling brand stories, we create cohesive branding that leaves a lasting impression across all touchpoints.",
    imgSrc:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&q=80",
    imgAlt: "Designers at work",
  },
  {
    theme: "dark",
    title: "SEO (Search Engine Optimization)",
    description:
      "Our SEO services are focused on improving your website's visibility in search engines, driving organic traffic, and increasing your online reach. We perform in-depth keyword research, on-page optimization, and technical audits to ensure your website ranks higher and attracts the right audience.",
    imgSrc: "/digital-marketing/SEO.webp",
    imgAlt: "Businessman using a laptop",
  },
  {
    theme: "light",
    title: "Performance Marketing",
    description:
      "Performance marketing is all about results, and we design data-driven campaigns to maximize ROI. Whether it's Google Ads, social media advertising, or display campaigns, we create, monitor, and optimize ads that drive conversions while staying within budget.",
    imgSrc:
      "/digital-marketing/performance-marketing.webp",
    imgAlt: "Man working with analytics",
  },
  {
    theme: "dark",
    title: "Web Development",
    description:
      "A strong online presence starts with a well-designed, functional website. Our web development services cover everything from designing user-friendly interfaces to ensuring fast, responsive, and secure websites. We build custom websites that enhance user experience and support your business objectives.",
    imgSrc: "/digital-marketing/webdevlopment.webp",
    imgAlt: "Developer explaining details in code",
  },
  {
    theme: "light",
    title: "Social Media Marketing",
    description:
      "Engaging with your audience on social media is crucial for brand visibility and growth. We offer social media management and content creation services to help you maintain a consistent, engaging presence on platforms like Facebook, Instagram, LinkedIn, and Twitter, building stronger relationships with your customers.",
    imgSrc: "/digital-marketing/socialmediamarketing.webp",
    imgAlt: "Friends using social media",
  },
];

const PLAYBOOK = [
  {
    num: 1,
    title: "Tailored Strategies",
    highlighted: "Tailored",
    desc: "We design customized marketing plans that align with your specific business goals and industry needs.",
  },
  {
    num: 2,
    title: "Content That Connects",
    highlighted: "Connects",
    desc: "Our content is designed to engage, inform, and inspire your target audience across multiple channels.",
  },
  {
    num: 3,
    title: "Data-Driven Decisions",
    highlighted: "Data-Driven",
    desc: "Using analytics and insights, we continuously monitor performance to optimize campaigns for maximum impact.",
  },
  {
    num: 4,
    title: "Omnichannel Approach",
    highlighted: "Omnichannel",
    desc: "We create seamless marketing experiences by integrating various digital channels for a unified brand presence.",
  },
  {
    num: 5,
    title: "Continuous Improvement",
    highlighted: "Continuous",
    desc: "Our team stays ahead of trends and adjusts strategies to keep your business relevant in a fast-paced digital world.",
  },
  {
    num: 6,
    title: "Transparent Communication",
    highlighted: "Transparent",
    desc: "We provide regular reports and updates, ensuring you are always informed about the progress of your campaigns.",
  },
];

const WHY_CHOOSE = [
  {
    num: 1,
    title: "Experienced Team",
    desc: "Our team of digital marketing professionals has years of experience in crafting successful campaigns.",
  },
  {
    num: 2,
    title: "Comprehensive Services",
    desc: "We offer a complete suite of digital marketing solutions under one roof, saving you time and effort.",
  },
  {
    num: 3,
    title: "Client-Centric Approach",
    desc: "We prioritize your business goals and work closely with you to achieve the desired outcomes.",
  },
  {
    num: 4,
    title: "Proven Track Record",
    desc: "With a history of successful campaigns, we have helped numerous businesses thrive in the digital space.",
  },
  {
    num: 5,
    title: "Result-Oriented Focus",
    desc: "Our goal is to deliver measurable results that contribute directly to your business growth.",
  },
  {
    num: 6,
    title: "Affordable Solutions",
    desc: "We offer competitive pricing without compromising on quality, ensuring value for your investment.",
  },
];

const DigitalMarketing = () => {
  return (
    <main className="relative min-h-screen bg-[#0B0F1A] overflow-hidden">
      
      {/* Fixed Full-Viewport Background Image Layer */}
      <div className="fixed inset-0 pointer-events-none z-0 w-screen h-screen">
        {/* DESKTOP BACKGROUND IMAGE */}
        <img 
          src="/digital-marketing/Digitalmarketing.webp" 
          alt="Background Texture" 
          className="hidden md:block w-full  object-cover object-top opacity-80"
          onError={(e) => {
            e.currentTarget.style.opacity = '0';
          }}
        />

        {/* MOBILE BACKGROUND IMAGE */}
        <img 
          src="/digital-marketing/Digitalmarketing.webp" 
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
        
        {/* Forces the main Hero Heading to be white */}
        <div className="[&_*]:!text-white">
          <HeroSection
            heading="Digital Marketing Solutions"
            chip="Digital Marketing Solutions"
          />
        </div>

        {/* Forces the Intro paragraph to be white */}
        <div className="[&_p]:!text-white">
          <IntroSection
            paragraph="At SEACHANGE Solutions, our Digital Marketing Solutions are designed to help businesses establish a strong digital presence, engage target audiences, and drive sustainable growth in Sri Lanka's dynamic market. With a holistic approach to branding, SEO, performance marketing, web development, and social media, we craft tailored strategies that deliver measurable results. Whether you are a startup seeking market entry or an established business looking to expand, our digital marketing services provide the tools and expertise to achieve your goals effectively."
          />
        </div>

        {/* Map through SERVICES array instead of using ServiceSections component */}
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

export default DigitalMarketing;