
import React from 'react';
import { Testimonial } from '../types';

const testimonials: Testimonial[] = [
  {
    name: "Lautaro G.",
    role: "ATLETA SEDE MAIPÚ",
    text: "Poder entrenar en Rodeo o San Martín según donde me toque el laburo ese día es impagable. No existe otro gym con esta libertad."
  },
  {
    name: "Micaela R.",
    role: "ATLETA GAP",
    text: "Vengo sin turno, me presento y los profes me guían en todo. El seguimiento es real, no sos un número más como en los gimnasios de cadena."
  },
  {
    name: "Facundo M.",
    role: "ATLETA FUNCIONAL",
    text: "La primera clase me convenció. Me explicaron todo, probé las máquinas y el ambiente es excelente. Motivación pura en cada rincón."
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-zinc-950 overflow-hidden relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black italic tracking-tighter text-center uppercase mb-4">
            LA TRIBU <span className="text-yellow-vibrant">CHRONOS.</span>
          </h2>
          <div className="w-48 h-1 bg-yellow-vibrant/30"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div key={idx} className="bg-black p-10 border-l-4 border-yellow-vibrant relative group hover:bg-zinc-900 transition-colors">
              <i className="fas fa-quote-right absolute top-6 right-6 text-zinc-800 text-4xl group-hover:text-yellow-vibrant/10 transition-colors"></i>
              <p className="text-lg text-zinc-300 mb-10 italic leading-relaxed relative z-10">
                "{t.text}"
              </p>
              <div className="flex flex-col">
                <h4 className="font-black text-white text-xl tracking-tighter italic">{t.name}</h4>
                <span className="text-[10px] text-yellow-vibrant font-black uppercase tracking-[0.3em] mt-1">{t.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
