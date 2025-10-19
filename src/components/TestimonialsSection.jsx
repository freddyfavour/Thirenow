import React from "react";

const testimonials = [
  {
    name: "Adaora E.",
    role: "Frontend Developer",
    quote:
      "ThireNow helped me land my first remote job and the webinars were super insightful!",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Chinedu O.",
    role: "UI/UX Designer",
    quote:
      "The Academy’s community and mentors are top-notch. I feel ready for global tech roles!",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Mercy A.",
    role: "Mentor",
    quote:
      "I love helping young Africans break into tech. ThireNow is making a real impact!",
    img: "https://randomuser.me/api/portraits/women/65.jpg",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="bg-[#D5C6F1] py-20 px-4 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-[#6C2DC7] mb-10 font-poppins">
        Success Stories
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        {testimonials.map((t) => (
          <div key={t.name} className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center hover:shadow-2xl transition">
            <img src={t.img} alt={t.name} className="w-20 h-20 rounded-full mb-4 object-cover border-4 border-[#6C2DC7]" />
            <h3 className="text-xl font-bold text-[#6C2DC7] font-poppins mb-1">{t.name}</h3>
            <span className="text-sm text-black mb-2 font-nunito">{t.role}</span>
            <p className="text-black italic font-nunito">“{t.quote}”</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
