import React from "react";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-[#6C2DC7] via-[#D5C6F1] to-white min-h-screen flex flex-col justify-center items-center text-center px-4 py-24 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="w-96 h-96 bg-[#6C2DC7] opacity-20 rounded-full blur-3xl absolute -top-32 -left-32"></div>
        <div className="w-72 h-72 bg-[#D5C6F1] opacity-30 rounded-full blur-2xl absolute top-40 right-0"></div>
      </div>
      <h1 className="text-4xl md:text-6xl font-bold text-[#6C2DC7] mb-6 font-poppins drop-shadow-lg">
        Kickstart Your Tech Career with ThireNow Technologies
      </h1>
      <p className="text-lg md:text-2xl text-black mb-10 font-nunito max-w-2xl mx-auto">
        Learn in-demand tech skills, join a vibrant community, and get connected to real job opportunities — all in one place.
      </p>
      <a href="#register">
        <button className="bg-[#6C2DC7] text-white font-bold py-4 px-10 rounded-full text-lg shadow-xl hover:bg-[#4B1A8A] transition mb-8">
          Join the Academy Today
        </button>
      </a>
      <div className="flex flex-wrap gap-6 justify-center items-center mt-8">
        {/* Add logos here if available */}
      </div>
    </section>
  );
};

export default HeroSection;
