import React, { useState } from "react";

const skills = [
  "Product Design",
  "Product Management",
  "Data Analysis",
  "Software Development",
  "Cybersecurity",
  "Content Creation and Marketing",
  "Graphics Design",
];

const sources = [
  "Instagram",
  "WhatsApp",
  "Twitter/X",
  "Friend",
  "Other",
];

const RegistrationForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
    skill: "",
    source: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Handle form submission (API, email, etc.)
    alert("Thank you for registering! We'll be in touch soon.");
  };

  return (
    <section className="bg-white py-20 px-4 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-[#6C2DC7] mb-6 font-poppins">
        Join ThireNow Tech Academy Today!
      </h2>
      <p className="text-lg md:text-xl text-black mb-10 font-nunito max-w-2xl mx-auto">
        Fill in your details below to get early access and updates on our upcoming programs.
      </p>
      <form className="max-w-xl mx-auto grid gap-6" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={form.name}
          onChange={handleChange}
          required
          className="border border-[#6C2DC7] rounded px-4 py-3 font-nunito focus:outline-none focus:ring-2 focus:ring-[#6C2DC7]"
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={form.email}
          onChange={handleChange}
          required
          className="border border-[#6C2DC7] rounded px-4 py-3 font-nunito focus:outline-none focus:ring-2 focus:ring-[#6C2DC7]"
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number (WhatsApp preferred)"
          value={form.phone}
          onChange={handleChange}
          required
          className="border border-[#6C2DC7] rounded px-4 py-3 font-nunito focus:outline-none focus:ring-2 focus:ring-[#6C2DC7]"
        />
        <input
          type="text"
          name="country"
          placeholder="Country"
          value={form.country}
          onChange={handleChange}
          required
          className="border border-[#6C2DC7] rounded px-4 py-3 font-nunito focus:outline-none focus:ring-2 focus:ring-[#6C2DC7]"
        />
        <select
          name="skill"
          value={form.skill}
          onChange={handleChange}
          required
          className="border border-[#6C2DC7] rounded px-4 py-3 font-nunito focus:outline-none focus:ring-2 focus:ring-[#6C2DC7]"
        >
          <option value="">What tech skill are you interested in?</option>
          {skills.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
        <select
          name="source"
          value={form.source}
          onChange={handleChange}
          required
          className="border border-[#6C2DC7] rounded px-4 py-3 font-nunito focus:outline-none focus:ring-2 focus:ring-[#6C2DC7]"
        >
          <option value="">How did you hear about us?</option>
          {sources.map((src) => (
            <option key={src} value={src}>{src}</option>
          ))}
        </select>
        <button
          type="submit"
          className="bg-[#6C2DC7] text-white font-bold py-4 px-10 rounded-full text-lg shadow-xl hover:bg-[#4B1A8A] transition"
        >
          Get Started
        </button>
      </form>
    </section>
  );
};

export default RegistrationForm;
