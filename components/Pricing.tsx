
import React from 'react';

const Pricing: React.FC = () => {
  const benefits = [
    "Acceso a nuestras 3 sedes",
    "Frecuencia libre sin restricciones",
    "Todas las actividades incluidas",
    "Instructores en todos los horarios",
    "Seguimiento profesional garantizado"
  ];

  return (
    <section id="precios" className="py-24 bg-zinc-950 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-vibrant/5 rounded-full blur-[120px]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
          <div className="text-left">
            <h2 className="text-5xl md:text-7xl font-black italic tracking-tighter mb-2 leading-none">
              INVERSIÓN <br /><span className="text-yellow-vibrant uppercase">EN VOS.</span>
            </h2>
            <p className="text-zinc-500 font-bold uppercase tracking-widest text-sm">Transparencia total. Sin contratos letra chica.</p>
          </div>
          <div className="hidden md:block w-32 h-1 bg-yellow-vibrant mb-4"></div>
        </div>
        
        <div className="max-w-2xl mx-auto">
          <div className="bg-black border-2 border-zinc-800 rounded-none p-10 md:p-16 relative overflow-hidden group">
            {/* Corner Accent */}
            <div className="absolute top-0 right-0 w-24 h-24 overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-vibrant/10 rotate-45 translate-x-16 -translate-y-16"></div>
            </div>

            <div className="relative z-10">
              <h3 className="text-2xl font-black uppercase tracking-[0.2em] text-zinc-500 mb-8 flex items-center gap-4">
                <span className="w-8 h-[2px] bg-yellow-vibrant"></span>
                PASE LIBRE TOTAL
              </h3>
              
              <div className="flex flex-col md:flex-row items-baseline gap-4 mb-2">
                <span className="text-8xl font-black text-white leading-none tracking-tighter">$40.000</span>
                <span className="text-zinc-500 font-bold text-xl uppercase tracking-tighter">/ MENSUAL</span>
              </div>
              
              <div className="inline-block py-2 px-6 border border-zinc-700 text-yellow-vibrant text-xs font-black mb-12 uppercase tracking-[0.2em]">
                Inscripción anual $12.000
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 mb-12">
                {benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-center gap-4 border-b border-zinc-900 pb-3">
                    <i className="fas fa-check text-yellow-vibrant text-xs"></i>
                    <span className="text-zinc-400 font-bold uppercase text-[11px] tracking-wide">{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="mb-12">
                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-600 mb-4">Medios de Pago</p>
                <div className="flex flex-wrap gap-4 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                  <div className="flex items-center gap-2 bg-zinc-900 px-3 py-1 rounded">
                    <i className="fas fa-money-bill-wave text-white"></i>
                    <span className="text-[9px] font-black text-white uppercase">Efectivo</span>
                  </div>
                  <div className="flex items-center gap-2 bg-zinc-900 px-3 py-1 rounded">
                    <i className="fas fa-university text-white"></i>
                    <span className="text-[9px] font-black text-white uppercase">Transferencia</span>
                  </div>
                  <div className="flex items-center gap-2 bg-zinc-900 px-3 py-1 rounded">
                    <i className="fas fa-credit-card text-white"></i>
                    <span className="text-[9px] font-black text-white uppercase">Tarjetas</span>
                  </div>
                </div>
              </div>
              
              <a 
                href="https://wa.me/2612322665"
                className="block w-full bg-white text-black py-6 font-black text-2xl text-center transition-all hover:bg-yellow-vibrant hover:scale-[1.02] uppercase italic"
              >
                ¡SOLICITAR PASE AHORA!
              </a>
              
              <p className="mt-8 text-zinc-600 text-[10px] uppercase tracking-[0.4em] font-black text-center">
                Vení a tu primera clase gratis y conocé el box
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
