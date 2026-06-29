import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "../components/Common/Navbar";
import Footer from "../components/Common/Footer";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import ComplianceLearning from "../pages/ComplianceLearning";
import DigitalMarketing from "../pages/DigitalMarketing";
import TechServices from "../pages/TechnologyServices";

// Helper component to handle automatic scrolling on page navigation
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]); // Fires every time the URL path changes

  return null;
};

// Placeholder pages — replace with real pages later
const Placeholder = ({ title }) => (
  <div className="min-h-screen flex items-center justify-center bg-[#F7FAFD] pt-20">
    <div className="text-center">
      <div className="w-16 h-16 bg-[#EEF4FB] rounded-2xl flex items-center justify-center mx-auto mb-4">
        <svg className="w-8 h-8 text-[#0B5EAB]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      </div>
      <h1 className="text-3xl font-black text-[#0B1F3A] mb-2">{title}</h1>
      <p className="text-[#4A6280]">This page is coming soon.</p>
    </div>
  </div>
);

export default function AppRouter() {
  return (
    <BrowserRouter>
      {/* Listens globally to routes and kicks the window back to the top */}
      <ScrollToTop />
      
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          {/* <Route path="/services" element={<Placeholder title="Our Services" />} /> */}
          <Route path="/services/compliance" element={<ComplianceLearning />} />
          <Route path="/services/digital-marketing" element={<DigitalMarketing />} />
          <Route path="/services/tech-services" element={<TechServices />} />
          <Route path="/blog" element={<Placeholder title="Blog" />} />
          <Route path="/blog/:slug" element={<Placeholder title="Blog Post" />} />
          <Route path="/privacy" element={<Placeholder title="Privacy Policy" />} />
          <Route path="/terms" element={<Placeholder title="Terms of Service" />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}