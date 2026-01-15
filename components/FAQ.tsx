
import React, { useState } from 'react';
import { FAQItem } from '../types';

const faqs: FAQItem[] = [
  {
    question: "¿Necesito reserva previa?",
    answer: "No. En CHRONOSFIT creemos en tu libertad. Vení directo a cualquier sede en nuestros horarios de apertura, presentate y arrancás. La primera clase es GRATIS."
  },
  {
    question: "¿Cómo son las clases y el seguimiento?",
    answer: "Todas las actividades cuentan con seguimiento profesional permanente. No importa si sos experto o principiante, los instructores te arman la rutina y te guían en cada repetición."
  },
  {
    question: "¿Dónde veo los horarios de cada sede?",
    answer: "Mantenemos nuestros horarios actualizados al día en Instagram. Podés consultarlos directamente en nuestras historias destacadas.",
    link: {
      text: "VER HORARIOS (IG HIGHLIGHTS)",
      url: "https://www.instagram.com/stories/highlights/18134123965018151/"
    }
  }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 bg-black border-y border-zinc-900">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="mb-16">
          <h2 className="text-4xl md:text-6xl font-black italic tracking-tighter uppercase mb-4 text-center md:text-left">
            PREGUNTAS <br /><span className="text-yellow-vibrant">FRECUENTES.</span>
          </h2>
          <div className="w-24 h-2 bg-yellow-vibrant mx-auto md:mx-0"></div>
        </div>
        
        <div className="grid grid-cols-1 gap-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-zinc-950 border border-zinc-900 group">
              <button 
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full flex items-center justify-between p-8 text-left transition-colors hover:bg-zinc-900"
              >
                <span className="text-xl font-black uppercase tracking-tight italic">{faq.question}</span>
                <i className={`fas fa-plus transition-transform duration-500 ${openIndex === idx ? 'rotate-45 text-yellow-vibrant' : 'text-zinc-700'}`}></i>
              </button>
              
              <div className={`transition-all duration-500 overflow-hidden ${openIndex === idx ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="p-8 pt-0 text-zinc-400 font-medium leading-relaxed border-t border-zinc-900/50">
                  <p className="mb-6">{faq.answer}</p>
                  {faq.link && (
                    <a 
                      href={faq.link.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 bg-zinc-900 text-yellow-vibrant px-6 py-3 font-black text-xs tracking-[0.2em] border border-yellow-vibrant/30 hover:bg-yellow-vibrant hover:text-black transition-all"
                    >
                      {faq.link.text}
                      <i className="fab fa-instagram text-base"></i>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
