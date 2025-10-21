import React from "react";

const CommunitySection = () => {
  return (
    <section className="bg-[color:var(--brand)]/95 py-20 px-4 text-white">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left - headline and CTA */}
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4 font-poppins">Learn, Grow & Win Big!</h2>
            <p className="text-white/90 text-lg md:text-xl mb-6 font-nunito max-w-xl">
              At ThireNow Technologies, we don’t just teach tech, we build community. Join mentorship sessions, career challenges, and community-driven projects that reward top learners.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="https://chat.whatsapp.com/IUv65G2m3G1597stvVsUv2?mode=ems_copy_t" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center bg-white text-[color:var(--brand)] font-semibold py-3 px-6 rounded-full shadow-sm hover:shadow-md transition">Join the Community</a>
              <a href="#register" className="inline-flex items-center justify-center border border-white/30 text-white font-medium py-3 px-6 rounded-full hover:bg-white/5 transition">See Programs</a>
            </div>
          </div>

          {/* Right - feature cards */}
          <div className="grid grid-cols-1 gap-4">
            <div className="bg-white/8 rounded-2xl p-6 backdrop-blur-sm border border-white/10 shadow-sm flex items-start gap-4">
              <div className="w-14 h-14 rounded-lg bg-white/10 flex items-center justify-center">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                  <path d="M12 2v6" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M6.5 9a5.5 5.5 0 0 0 11 0" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div>
                <div className="font-semibold">Mentorship Sessions</div>
                <div className="text-sm text-white/85">Weekly live sessions with industry mentors.</div>
              </div>
            </div>

            <div className="bg-white/8 rounded-2xl p-6 backdrop-blur-sm border border-white/10 shadow-sm flex items-start gap-4">
              <div className="w-14 h-14 rounded-lg bg-white/10 flex items-center justify-center">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                  <path d="M12 3v18" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M6 10h12" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div>
                <div className="font-semibold">Career Challenges</div>
                <div className="text-sm text-white/85">Practical challenges that build your portfolio — win rewards.</div>
              </div>
            </div>

            <div className="bg-white/8 rounded-2xl p-6 backdrop-blur-sm border border-white/10 shadow-sm flex items-start gap-4">
              <div className="w-14 h-14 rounded-lg bg-white/10 flex items-center justify-center">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                  <path d="M12 6v6" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M8 16h8" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div>
                <div className="font-semibold">Community Giveaways</div>
                <div className="text-sm text-white/85">Exciting rewards for top contributors and challenge winners.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
