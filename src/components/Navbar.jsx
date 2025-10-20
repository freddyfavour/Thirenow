import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`fixed w-full top-0 left-0 z-40 transition-all duration-300 ${scrolled ? 'backdrop-blur-md bg-white/90 shadow-md border-b border-gray-100' : ''}`}>
      <div className="w-full px-4 md:px-8 lg:px-12">
        <div className="flex items-center justify-start h-16 max-w-[1400px] gap-8">
          <a href="#hero" className="flex items-center gap-3">
            <img src="/logo.png" alt="ThireNow" className="h-10 md:h-12" />
          </a>

          <div className="hidden md:flex items-center gap-8 text-gray-800 font-medium">
            <a href="#about" className="hover:underline">About</a>
            <a href="#skills" className="hover:underline">Skills</a>
            <a href="#why" className="hover:underline">Why</a>
            <a href="#community" className="hover:underline">Community</a>
            <a href="#testimonials" className="hover:underline">Testimonials</a>
          </div>

          <div className="hidden md:flex items-center">
            <a href="#register" className="px-4 py-2 rounded-full bg-[color:var(--brand)] text-white font-semibold">Join</a>
          </div>

          {/* mobile controls */}
          <div className="flex items-center md:hidden ml-auto">
            <a href="#register" className="mr-3 text-gray-800">
              <span className="inline-flex items-center px-3 py-2 rounded-full bg-[color:var(--brand)] text-white font-semibold">Join</span>
            </a>
            <button aria-label="Toggle menu" onClick={() => setMobileOpen(!mobileOpen)} className="p-2 rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-200">
              {mobileOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
        {/* Mobile dropdown menu */}
        {mobileOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-md z-40">
            <div className="max-w-[1400px] mx-auto px-4 md:px-8 py-4 flex flex-col gap-3">
              <a onClick={() => setMobileOpen(false)} href="#about" className="text-gray-800 py-2">About</a>
              <a onClick={() => setMobileOpen(false)} href="#skills" className="text-gray-800 py-2">Skills</a>
              <a onClick={() => setMobileOpen(false)} href="#why" className="text-gray-800 py-2">Why</a>
              <a onClick={() => setMobileOpen(false)} href="#community" className="text-gray-800 py-2">Community</a>
              <a onClick={() => setMobileOpen(false)} href="#testimonials" className="text-gray-800 py-2">Testimonials</a>
              <a onClick={() => setMobileOpen(false)} href="#register" className="mt-2 inline-flex items-center justify-center px-4 py-2 rounded-full bg-[color:var(--brand)] text-white font-semibold">Join</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
