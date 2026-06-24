export default function ContactHero() {
  return (
    <section className="relative h-[280px] sm:h-[320px] flex items-center overflow-hidden">
      {/* Background photo */}
      {/* TODO: replace src with your own photo (same as AboutHero's image) */}
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

      {/* Title */}
      <div className="relative max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl font-black text-white">Contact Us</h1>
      </div>
    </section>
  );
}