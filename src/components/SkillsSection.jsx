import React from "react";

const skills = [
  {
    name: "Product Management",
    description: "Plan, prioritize and ship products that solve real user problems.",
  },
  {
    name: "Product Design (UI/UX)",
    description: "Design beautiful, usable interfaces and craft delightful experiences.",
  },
  { name: "Data Analytics", description: "Turn data into insights to drive better decisions." },
  {
    name: "Frontend & Backend Development",
    description: "Build reliable web apps using modern frontend and backend tools.",
  },
  { name: "Cybersecurity", description: "Learn to protect apps and infrastructure from attacks." },
  { name: "Content Creation", description: "Craft compelling content, video, copy and social that converts." },
];

const SkillsSection = () => {
  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
            In-Demand Skills You Can Learn
          </h2>
          <p className="text-gray-600 mx-auto">We teach the practical skills companies hire for hands-on, project-led training that gets you job-ready.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill) => (
            <div key={skill.name} className="bg-white rounded-3xl shadow-lg p-6 hover:shadow-2xl transition transform hover:-translate-y-1">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center bg-[color:var(--brand)]/10">
                  {/* simple decorative shape */}
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="9" stroke="rgba(76,29,149,0.7)" strokeWidth="1.2" />
                    <path d="M8 12h8" stroke="rgba(76,29,149,0.7)" strokeWidth="1.6" strokeLinecap="round" />
                    <path d="M12 8v8" stroke="rgba(76,29,149,0.7)" strokeWidth="1.6" strokeLinecap="round" />
                  </svg>
                </div>

                <div>
                  <div className="text-lg font-semibold text-[color:var(--brand)] mb-1">{skill.name}</div>
                  <div className="text-sm text-gray-600">{skill.description}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
