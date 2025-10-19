import React from "react";

const skills = [
  { name: "Product Management" },
  { name: "Product Design (UI/UX)" },
  { name: "Data Analytics" },
  { name: "Frontend & Backend Development" },
  { name: "Cybersecurity" },
  { name: "Digital Marketing" },
  { name: "AI & No-Code Tools" },
];

const SkillsSection = () => {
  return (
    <section className="bg-[#D5C6F1] py-20 px-4 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-[#6C2DC7] mb-10 font-poppins">
        In-Demand Skills You Can Learn
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        {skills.map((skill) => (
          <div key={skill.name} className="flex flex-col items-center bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition">
            <span className="text-lg font-semibold text-[#6C2DC7] font-poppins mb-2">{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
