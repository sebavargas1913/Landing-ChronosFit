
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Pricing from './components/Pricing';
import Locations from './components/Locations';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Chatbot from './components/Chatbot';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-black overflow-x-hidden selection:bg-yellow-vibrant selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <Pricing />
        <Locations />
        <Testimonials />
        <FAQ />
      </main>
      
      <footer className="bg-black py-20 border-t border-zinc-900">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="flex flex-col items-center md:items-start">
              <img 
                src="logo-light.png" 
                alt="CHRONOSFIT" 
                className="h-10 w-auto mb-6 opacity-60 hover:opacity-100 transition-opacity"
                onError={(e) => {
                  const target = e.currentTarget;
                  target.style.display = 'none';
                  const fallback = target.nextElementSibling as HTMLElement;
                  if (fallback) fallback.classList.remove('hidden');
                }}
              />
              <h2 className="hidden text-3xl font-black italic tracking-tighter text-white mb-4">
                CHRONOS<span className="text-yellow-vibrant">FIT</span>
              </h2>
              <p className="text-zinc-500 text-sm font-bold uppercase tracking-widest max-w-xs text-center md:text-left">
                Red de entrenamiento líder. Mendoza, Argentina.
              </p>
            </div>
            
            <div className="flex flex-col items-center md:items-end">
              <div className="flex gap-4 mb-8">
                <a href="https://www.instagram.com/stories/highlights/18134123965018151/" target="_blank" className="w-14 h-14 bg-zinc-900 flex items-center justify-center rounded-none rotate-45 border border-zinc-800 hover:border-yellow-vibrant hover:bg-yellow-vibrant hover:text-black transition-all group">
                  <i className="fab fa-instagram text-2xl -rotate-45"></i>
                </a>
                <a href="https://wa.me/2612322665" target="_blank" className="w-14 h-14 bg-zinc-900 flex items-center justify-center rounded-none rotate-45 border border-zinc-800 hover:border-yellow-vibrant hover:bg-yellow-vibrant hover:text-black transition-all group">
                  <i className="fab fa-whatsapp text-2xl -rotate-45"></i>
                </a>
              </div>
              <p className="text-zinc-700 text-[10px] tracking-[0.4em] uppercase font-black text-center md:text-right">
                © {new Date().getFullYear()} CHRONOSFIT • DESARROLLADO PARA ELITE ATHLETES
              </p>
            </div>
          </div>
        </div>
      </footer>
      <Chatbot />
    </div>
  );
};

export default App;
