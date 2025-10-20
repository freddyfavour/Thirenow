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
    <section className="bg-white py-20 px-4">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        {/* header: two columns - title left, description right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#3b1450] font-poppins">
            Why Choose ThireNow Technologies
          </h2>

          <p className="text-gray-600 md:text-lg max-w-xl ml-auto">
            We combine practical, project-led learning with hands-on mentorship and personalized career support to help you build real-world skills and land remote roles faster. Every part of our program is designed to get you job-ready from the projects you work on to the one-on-one guidance you receive.
          </p>
        </div>

        {/* cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="rounded-xl bg-[color:var(--brand)]/6 p-8 shadow-md hover:shadow-lg transition">
            <div className="mb-6 flex items-center justify-center">
              {/* circle icon */}
              <svg width="84" height="84" viewBox="0 0 84 84" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                <rect width="84" height="84" rx="18" fill="rgba(62,36,85,0.06)" />
                <circle cx="42" cy="42" r="16" fill="var(--brand)" opacity="0.98" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-[color:var(--brand)] mb-2">Practical Learning</h3>
            <p className="text-gray-700">Get hands-on with real projects that build your portfolio and skills employers value.</p>
          </div>

          {/* Card 2 */}
          <div className="rounded-xl bg-[color:var(--brand)]/8 p-8 shadow-md hover:shadow-lg transition">
            <div className="mb-6 flex items-center justify-center">
              {/* triangle icon */}
              <svg width="84" height="84" viewBox="0 0 84 84" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                <rect width="84" height="84" rx="18" fill="rgba(62,36,85,0.04)" />
                <polygon points="42,26 58,54 26,54" fill="var(--brand)" opacity="0.98" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-[color:var(--brand)] mb-2">Global Mentors</h3>
            <p className="text-gray-700">Learn from experienced tech professionals who guide you through real-world problems.</p>
          </div>

          {/* Card 3 */}
          <div className="rounded-xl bg-[color:var(--brand)]/7 p-8 shadow-md hover:shadow-lg transition">
            <div className="mb-6 flex items-center justify-center">
              {/* square icon */}
              <svg width="84" height="84" viewBox="0 0 84 84" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                <rect width="84" height="84" rx="18" fill="rgba(62,36,85,0.03)" />
                <rect x="28" y="28" width="28" height="28" rx="6" fill="var(--brand)" opacity="0.98" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-[color:var(--brand)] mb-2">Career Support</h3>
            <p className="text-gray-700">We help with job placement, interview prep, and ongoing career guidance to get you hired.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
