import React from "react";

const HeroSection = () => {
  return (
    <section
      className="relative min-h-[340px] flex items-end pb-12"
      style={{
        background: "linear-gradient(rgba(10,18,40,0.72), rgba(10,18,40,0.82)), url('/compliance/compliancehero.jpg') center/cover no-repeat",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 w-full">
        <h1 className="text-white text-4xl md:text-4xl font-bold leading-tight max-w-3xl">
          Compliance & Learning Management Solutions
        </h1>
      </div>
    </section>
  );
};

export default HeroSection;
