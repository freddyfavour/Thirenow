import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const HeroSection = () => {
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  useEffect(() => {
    // Animate both elements at the same time
    const tl = gsap.timeline();
    
    tl.fromTo(
      leftRef.current,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 1.2, ease: 'power3.out' },
      0
    ).fromTo(
      rightRef.current,
      { opacity: 0, x: 120 },
      { opacity: 1, x: 0, duration: 1.2, ease: 'power3.out' },
      0
    );

    // Cleanup
    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center bg-white">
      <div className="relative z-20 w-full px-4 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pb-20 max-w-none">
          {/* Left column - headline & CTA */}
          <div ref={leftRef} className="lg:col-span-7 px-4 md:px-6 flex flex-col justify-start pt-28 md:pt-36 lg:pt-[15rem]">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 leading-tight mb-6">
                Kickstart Your Tech Career with
                <span className="block text-[var(--brand)] inline-block" style={{ textShadow: '0 1px 0 rgba(0,0,0,0.08)' }}> THireNow Technologies</span>
              </h1>

              <p className="text-lg md:text-xl text-gray-700 mb-8">
                Learn in-demand tech skills, join a vibrant community, and get connected to real job opportunities, all in one place.
              </p>

              <div className="flex items-center gap-4">
                <a href="#register" onClick={(e)=>{e.preventDefault(); document.querySelector('#register')?.scrollIntoView({behavior:'smooth'})}} className="inline-flex items-center gap-3 bg-[var(--brand)] text-white font-semibold py-3 px-6 rounded-full shadow-lg hover:opacity-95 transition">
                  <span>Join the Academy Today</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right column - rounded image card */}
          <div ref={rightRef} className="lg:col-span-5 px-4 md:px-0">
            <div className="relative w-full mt-6" style={{ height: 'calc(100vh - 1.5rem)' }}>
              {/* image card */}
              <div className="rounded-4xl overflow-hidden shadow-2xl w-full h-full" style={{ border: '1px solid rgba(0,0,0,0.06)' }}>
                <img src="/hero-bg.webp" alt="Hero" className="object-cover w-full h-full block" />
              </div>

              {/* small stat card at top-right */}
              <div className="absolute -top-3 right-3 md:right-8 bg-white rounded-lg p-3 shadow-lg w-36">
                <div className="text-xs text-gray-500">Hired Graduates</div>
                <div className="mt-2 text-sm font-semibold text-[#6b21a8]">82.4%</div>
                <div className="text-xs text-green-500">100% hands on</div>
              </div>

              {/* speech bubble */}
              <div className="absolute left-6 bottom-8 md:left-10 bg-white rounded-full px-4 py-2 shadow-md flex items-center gap-3">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 6 4 4 6.5 4c1.54 0 3.04.99 3.57 2.36h1.87C13.46 4.99 14.96 4 16.5 4 19 4 21 6 21 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="#ef4444" />
                </svg>
                <span className="text-sm text-gray-800">ThireNow helped me land my first remote job</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
