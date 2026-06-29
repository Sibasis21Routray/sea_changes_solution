import React from "react";

const PartnershipSection = () => {
  return (
    <section className="bg-[#0B1628] py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-white text-3xl md:text-4xl font-bold mb-4">
            Our Partnership with UPS
          </h2>
          <p className="text-[#4B6FE4] text-sm font-bold uppercase tracking-widest mb-1">
            TOGETHER WE HAVE UNLOCKED THE POTENTIAL OF OUR CLIENTS AND THEIR
          </p>
          <p className="text-[#4B6FE4] text-sm font-bold uppercase tracking-widest">
            STAFF WITH TRANSFORMATIONAL TRAINING AND COMPLIANCE PROGRAMS
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* UPS Logo */}
          <div className="flex-shrink-0 flex items-center justify-center w-full md:w-80">
  <div className="text-center flex flex-col items-center">
    
    {/* Logo Image Container instead of raw text letters */}
    <div className="h-14 sm:h-16 flex items-center justify-center mb-2">
      <img
        src="/compliance/UPS.png" // Ensure the path points to where you placed UPS.png (e.g., public/homepage/)
        alt="Ultimate Performance Solutions Logo"
        className="h-full object-contain block mx-auto brightness-110"
        onError={(e) => {
          // Fallback text if the image asset path is missing during a build
          e.currentTarget.style.display = "none";
          e.currentTarget.nextSibling.style.display = "block";
        }}
      />
      
      {/* Hidden fallback text that only appears if image crashes */}
      <span className="hidden text-white text-5xl font-black tracking-tight leading-none text-[#4B6FE4]">
        UPS
      </span>
    </div>

    {/* Description Subtext */}
    <p className="text-gray-400 text-sm tracking-widest uppercase mt-1">
      Ultimate Performance Solutions
    </p>
    
  </div>
</div>

          {/* Text */}
          <div className="text-gray-300 text-base leading-relaxed">
            <p>
              Our partner,{" "}
              <strong className="text-white">Ultimate Performance Solutions (UPS)</strong>, specializes in{" "}
              <strong className="text-white">transformational coaching</strong> to drive sustainable, positive
              change. At <strong className="text-white">Seachange</strong>, we collaborate with UPS to empower
              individuals and organizations through proven coaching methods. With extensive experience in{" "}
              <strong className="text-white">
                senior management across global, regional, and country levels
              </strong>
              , UPS goes beyond conventional training to deliver real results. Their approach focuses on{" "}
              <strong className="text-white">mindset and behavioral transformation</strong>, using{" "}
              <strong className="text-white">NLP, EFT, Hypnosis, and Sport &amp; Exercise Psychology</strong>.
              Together, Seachange and UPS are committed to providing impactful learning experiences that foster
              personal and professional growth, helping individuals unlock their full potential.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnershipSection;
