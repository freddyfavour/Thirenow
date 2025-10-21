import React, { useEffect, useRef, useState } from "react";

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
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setInView(true);
          else setInView(false); // replay on re-entry
        });
      },
      { threshold: 0.15 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="bg-white py-20 px-4">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className={`text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 transition-opacity transition-transform duration-700 ease-out ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`} style={{ transitionDelay: inView ? '100ms' : '0ms' }}>
            In-Demand Skills You Can Learn
          </h2>
          <p className={`text-gray-600 mx-auto transition-opacity transition-transform duration-700 ease-out ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`} style={{ transitionDelay: inView ? '180ms' : '0ms' }}>We teach the practical skills companies hire for hands-on, project-led training that gets you job-ready.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, idx) => (
            <div
              key={skill.name}
              className={`bg-white rounded-3xl shadow-lg p-6 hover:shadow-2xl transition transform hover:-translate-y-1 transition-opacity transition-transform duration-700 ease-out ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
              style={{ transitionDelay: inView ? `${250 + idx * 80}ms` : '0ms' }}
            >
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
