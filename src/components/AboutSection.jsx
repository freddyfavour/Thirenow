import React, { useEffect, useRef, useState } from "react";

const AboutSection = () => {
  const ref = useRef(null);
  const titleRef = useRef(null);
  const paraRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    // Respect users who prefer reduced motion
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
          if (entry.isIntersecting) {
            setInView(true);
          } else {
            // when it leaves the viewport, reset so animation can replay
            setInView(false);
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className={`bg-white py-20 px-4 text-center`}
    >
      <h2
        ref={titleRef}
        className={`text-3xl md:text-4xl font-bold text-[#6C2DC7] mb-6 font-poppins transition-opacity transition-transform duration-700 ease-out ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
        style={{ transitionDelay: inView ? "100ms" : "0ms" }}
      >
        From Hiring to Empowering Africa’s Next Tech Talents
      </h2>
      <p
        ref={paraRef}
        className={`text-lg md:text-xl text-black mb-10 font-nunito max-w-2xl mx-auto transition-opacity transition-transform duration-700 ease-out ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
        style={{ transitionDelay: inView ? "200ms" : "0ms" }}
      >
        ThireNow Technologies started as a global hiring platform helping tech professionals land remote jobs. Now, we’re going beyond hiring. We’re building an Academy that trains, mentors, and connects Africans to real opportunities in the global tech ecosystem.
      </p>
      {/* Video or GIF intro can be added here */}
    </section>
  );
};

export default AboutSection;
