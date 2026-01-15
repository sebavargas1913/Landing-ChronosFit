
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/90 backdrop-blur-md border-b border-yellow-vibrant/20">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <div className="flex items-center">
          <a href="#" className="flex items-center group">
            <img 
              src="logo-light.png" 
              alt="CHRONOSFIT" 
              className="h-8 md:h-12 w-auto object-contain transition-transform group-hover:scale-105"
              onError={(e) => {
                const target = e.currentTarget;
                target.style.display = 'none';
                const fallback = target.nextElementSibling as HTMLElement;
                if (fallback) fallback.classList.remove('hidden');
              }}
            />
            <span className="hidden text-2xl font-black italic tracking-tighter text-white">
              CHRONOS<span className="text-yellow-vibrant">FIT</span>
            </span>
          </a>
        </div>
        
        <a 
          href="https://wa.me/2612322665" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-yellow-vibrant text-black px-6 py-2.5 rounded-none font-black text-sm transition-all hover:bg-white hover:shadow-[0_0_20px_rgba(255,215,0,0.4)] flex items-center gap-2 skew-x-[-12deg]"
        >
          <div className="skew-x-[12deg] flex items-center gap-2">
            <i className="fab fa-whatsapp text-lg"></i>
            <span className="hidden sm:inline uppercase">QUIERO ENTRENAR</span>
          </div>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
