import React from "react";

const features = [
  {
    title: "Practical Learning",
    desc: "Get hands-on with real projects.",
  },
  {
    title: "Global Mentors",
    desc: "Learn from experienced tech professionals.",
  },
  {
    title: "Career Support",
    desc: "We help you land your dream remote job.",
  },
];

const WhyChooseSection = () => {
  return (
    <section className="bg-white py-20 px-4 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-[#6C2DC7] mb-10 font-poppins">
        Why Choose ThireNow Technologies
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        {features.map((feature) => (
          <div key={feature.title} className="flex flex-col items-center bg-[#D5C6F1] rounded-xl shadow-lg p-8 hover:shadow-2xl transition">
            <h3 className="text-xl font-bold text-[#6C2DC7] mb-2 font-poppins">{feature.title}</h3>
            <p className="text-black font-nunito">{feature.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseSection;
