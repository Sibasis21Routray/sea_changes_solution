import React from "react";
import { Link } from "react-router-dom";

const CTASection = () => (
  <section className="bg-[#0B1628] py-16 px-6">
    <div className="max-w-3xl mx-auto text-center">
      <h2 className="text-white text-3xl md:text-4xl font-bold mb-4">Start a Project</h2>
      <p className="text-gray-300 text-base leading-relaxed mb-8">
        Get the ball rolling by reaching out to us, and we'll set up a complimentary meeting to dive deep into
        your needs. No strings attached, just a friendly chat to ensure we're on the same wavelength!
      </p>
      <Link
        to="/contact"
        className="inline-block bg-[#556BB7] hover:bg-[#556BB7] text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-200"
      >
        Schedule a Consultation
      </Link>
    </div>
  </section>
);

export default CTASection;