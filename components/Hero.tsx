
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background with industrial texture and overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80')` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/40"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10 text-center md:text-left">
        <div className="max-w-4xl">
          <div className="inline-block px-4 py-1 border-l-4 border-yellow-vibrant bg-zinc-900/80 text-white font-black text-xs mb-8 uppercase tracking-[0.3em] animate-pulse">
            ELITE FITNESS NETWORK
          </div>
          <h1 className="text-6xl md:text-9xl font-black leading-none mb-6 tracking-tighter italic uppercase text-white drop-shadow-2xl">
            UN SOLO <span className="text-yellow-vibrant">PASE.</span><br />
            LIBERTAD <span className="underline decoration-yellow-vibrant underline-offset-8">TOTAL.</span>
          </h1>
          <p className="text-xl md:text-2xl text-zinc-300 mb-12 max-w-2xl leading-tight font-medium uppercase tracking-tight">
            Entrená en nuestras 3 sedes con un pase libre único. Gimnasio, Funcional y GAP con seguimiento profesional incluido.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center md:justify-start">
            <a 
              href="https://wa.me/2612322665"
              className="bg-yellow-vibrant text-black px-10 py-5 font-black text-2xl transition-all hover:bg-white hover:-translate-y-1 active:translate-y-0 shadow-[8px_8px_0_rgba(255,215,0,0.2)] hover:shadow-[12px_12px_0_rgba(255,255,255,0.2)] uppercase italic"
            >
              QUIERO EMPEZAR
            </a>
            <a 
              href="#sedes"
              className="border-2 border-white/40 text-white px-10 py-5 font-black text-2xl backdrop-blur-sm transition-all hover:border-yellow-vibrant hover:text-yellow-vibrant uppercase italic"
            >
              VER SEDES
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-zinc-500 uppercase font-black text-[10px] tracking-[0.5em]">
        <span>Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-yellow-vibrant to-transparent"></div>
      </div>
    </section>
  );
};

export default Hero;
