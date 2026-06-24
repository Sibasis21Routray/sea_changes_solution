import React from 'react';

export default function AboutHero() {
  return (
    /* pt-16 creates top spacing clearing so a fixed navbar doesn't hide this section */
    <section className="relative h-[280px] sm:h-[320px] pt-15 flex items-center overflow-hidden bg-[#030712]">
      {/* Background photo */}
      <img
        src="/aboutus/braitcam.png"
        alt="Team collaborating around a table"
        className="absolute inset-0 w-full h-full object-cover"
        onError={(e) => {
          e.currentTarget.style.display = "none";
          e.currentTarget.nextSibling.style.display = "block";
        }}
      />
      {/* Fallback gradient, shown if image fails to load */}
      <div
        className="absolute inset-0 hidden bg-gradient-to-br from-[#0B1F3A] via-[#16264A] to-[#0B1F3A]"
        style={{ display: "none" }}
      />

      {/* Dark overlay for text contrast */}
      <div className="absolute inset-0 bg-[#0B1230]/55" />

      {/* Title - Maintained left alignment (max-w-7xl mx-auto px-4...) */}
      <div className="relative max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <h1 className="text-4xl sm:text-5xl font-black text-white">About Us</h1>
      </div>
    </section>
  );
}