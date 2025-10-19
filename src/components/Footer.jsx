import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 px-4 text-center">
      <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto mb-6 gap-6">
        <img src="/thirenow-logo.png" alt="ThireNow Logo" className="h-12 mb-4 md:mb-0" />
        <nav className="flex gap-8 text-base font-nunito mb-4 md:mb-0">
          <a href="#about" className="hover:text-[#6C2DC7] transition">About</a>
          <a href="#skills" className="hover:text-[#6C2DC7] transition">Programs</a>
          <a href="#community" className="hover:text-[#6C2DC7] transition">Community</a>
          <a href="#register" className="hover:text-[#6C2DC7] transition">Contact</a>
        </nav>
        <div className="flex gap-5">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <img src="/instagram.svg" alt="Instagram" className="h-7 w-7" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <img src="/linkedin.svg" alt="LinkedIn" className="h-7 w-7" />
          </a>
          <a href="https://wa.me/" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
            <img src="/whatsapp.svg" alt="WhatsApp" className="h-7 w-7" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="X">
            <img src="/x.svg" alt="X" className="h-7 w-7" />
          </a>
        </div>
      </div>
      <p className="text-sm font-nunito">Copyright © 2025 ThireNow Technologies</p>
    </footer>
  );
};

export default Footer;
