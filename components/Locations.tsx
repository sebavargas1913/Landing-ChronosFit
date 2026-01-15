
import React from 'react';
import { LocationInfo } from '../types';

const locations: LocationInfo[] = [
  {
    name: "Rodeo de la Cruz",
    address: "Bandera de los Andes, esq. Concordia. 1er piso.",
    activities: ["Gimnasio", "Funcional"],
    imageUrl: "https://picsum.photos/id/674/800/600"
  },
  {
    name: "Maipú",
    address: "C. Colectora Sur s/n (Centro Comercial Paso).",
    activities: ["Gimnasio", "Funcional"],
    imageUrl: "https://picsum.photos/id/353/800/600"
  },
  {
    name: "San Martín",
    address: "C. Lavalle 1992, esq. Húsares de Junín.",
    activities: ["Gimnasio", "Funcional", "GAP"],
    imageUrl: "https://picsum.photos/id/119/800/600"
  }
];

const Locations: React.FC = () => {
  return (
    <section id="sedes" className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black italic tracking-tighter mb-4">ELEGÍ TU <span className="text-yellow-vibrant">SEDE</span></h2>
          <p className="text-zinc-500">Un mismo pase, tres mundos a tu disposición.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {locations.map((loc, idx) => (
            <div key={idx} className="group overflow-hidden bg-zinc-900 rounded-2xl border border-zinc-800 transition-all hover:border-yellow-vibrant/50">
              <div className="h-64 overflow-hidden relative">
                <img 
                  src={loc.imageUrl} 
                  alt={loc.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 grayscale group-hover:grayscale-0"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-black/80 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-full uppercase border border-white/10">
                    Sede {loc.name}
                  </span>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-black italic mb-3">{loc.name.toUpperCase()}</h3>
                <div className="flex items-start gap-3 mb-6">
                  <i className="fas fa-map-marker-alt text-yellow-vibrant mt-1"></i>
                  <p className="text-zinc-400 text-sm leading-snug">{loc.address}</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {loc.activities.map((act, i) => (
                    <span key={i} className="text-[10px] font-black uppercase tracking-widest bg-zinc-800 text-zinc-300 px-3 py-1 rounded-sm group-hover:bg-yellow-vibrant group-hover:text-black transition-colors">
                      {act}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Locations;
