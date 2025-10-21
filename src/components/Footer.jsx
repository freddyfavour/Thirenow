import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 px-4 text-center">
      <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto mb-6 gap-6">
        <div className="flex items-center gap-3 mb-4 md:mb-0">
          <img src="/logo.png" alt="ThireNow Logo" className="h-12" />
          <span className="text-2xl font-bold font-poppins text-white">THireNow</span>
        </div>
        <div className="flex gap-5">
          <a href="https://www.instagram.com/thirenow?igsh=MWtqOXM3NGZpNGs3YQ==" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <img src="/instagram.svg" alt="Instagram" className="h-7 w-7" />
          </a>
          <a href="https://www.linkedin.com/company/thirenow/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <img src="/linkedin.svg" alt="LinkedIn" className="h-7 w-7" />
          </a>
          <a href="https://chat.whatsapp.com/IUv65G2m3G1597stvVsUv2?mode=ems_copy_t" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
            <img src="/whatsapp.svg" alt="WhatsApp" className="h-7 w-7" />
          </a>
          <a href="https://x.com/ThireNow?t=6k_qm8cNEBNOCYWqmdUrqA&s=09" target="_blank" rel="noopener noreferrer" aria-label="X">
            <img src="/x.svg" alt="X" className="h-7 w-7" />
          </a>
        </div>
      </div>
      <p className="text-sm font-nunito">Copyright © 2025 ThireNow Technologies</p>
    </footer>
  );
};

export default Footer;
