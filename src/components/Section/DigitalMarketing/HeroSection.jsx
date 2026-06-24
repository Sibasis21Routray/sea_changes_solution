import React from "react";

const HeroSection = () => {
  return (
    <section
      className="relative min-h-[340px] flex items-end pb-12"
      style={{
        background:
          "linear-gradient(rgba(10,18,40,0.72), rgba(10,18,40,0.82)), url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1600&q=80') center/cover no-repeat",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 w-full">
        <h1 className="text-white text-4xl md:text-5xl font-bold leading-tight max-w-3xl">
          Digital Marketing Solutions
        </h1>
      </div>
    </section>
  );
};

export default HeroSection;
