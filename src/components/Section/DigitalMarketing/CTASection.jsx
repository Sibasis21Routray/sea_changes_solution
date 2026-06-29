import React from "react";

const CTASection = () => (
  <section className="bg-[#0B1628] py-16 px-6">
    <div className="max-w-3xl mx-auto text-center">
      <h2 className="text-white text-3xl md:text-4xl font-bold mb-4">Start a Project</h2>
      <p className="text-gray-300 text-base leading-relaxed mb-8">
        Get the ball rolling by reaching out to us, and we'll set up a complimentary meeting to dive deep into
        your needs. No strings attached, just a friendly chat to ensure we're on the same wavelength!
      </p>
      <a
        href="/contact"
        className="inline-block bg-[#4B6FE4] hover:bg-[#3a5fd4] text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-200"
      >
        Schedule a Consultation
      </a>
    </div>
  </section>
);

export default CTASection;
