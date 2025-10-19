import React from "react";

const AboutSection = () => {
  return (
    <section className="bg-white py-20 px-4 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-[#6C2DC7] mb-6 font-poppins">
        From Hiring to Empowering Africa’s Next Tech Talents
      </h2>
      <p className="text-lg md:text-xl text-black mb-10 font-nunito max-w-2xl mx-auto">
        ThireNow Technologies started as a global hiring platform helping tech professionals land remote jobs. Now, we’re going beyond hiring — we’re building an Academy that trains, mentors, and connects Africans to real opportunities in the global tech ecosystem.
      </p>
      {/* Video or GIF intro can be added here */}
    </section>
  );
};

export default AboutSection;
