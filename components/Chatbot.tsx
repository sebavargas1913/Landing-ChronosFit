
import React, { useState, useRef, useEffect } from 'react';
import { getChatbotResponse } from '../services/geminiService';
import { Message } from '../types';

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'bot', text: '¡Hola che! Soy ChronosBot. ¿En qué te puedo ayudar hoy? ¿Querés saber precios o dónde estamos?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    const botMsg = await getChatbotResponse(userMsg);
    setMessages(prev => [...prev, { role: 'bot', text: botMsg }]);
    setIsLoading(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100] font-sans">
      {/* Trigger Button with Pulse effect */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`relative w-16 h-16 rounded-full bg-yellow-vibrant text-black shadow-[0_0_20px_rgba(255,215,0,0.5)] flex items-center justify-center transition-all hover:scale-110 active:scale-90 ${isOpen ? 'rotate-90' : ''}`}
      >
        <i className={`fas ${isOpen ? 'fa-times' : 'fa-bolt'} text-2xl`}></i>
        {!isOpen && (
          <span className="absolute inset-0 rounded-full bg-yellow-vibrant animate-ping opacity-20 pointer-events-none"></span>
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="absolute bottom-20 right-0 w-[320px] sm:w-[380px] bg-black border border-zinc-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col h-[500px] animate-in fade-in slide-in-from-bottom-4 duration-300">
          {/* Header */}
          <div className="bg-zinc-900 p-4 flex items-center gap-3 border-b border-zinc-800">
            <div className="w-10 h-10 bg-yellow-vibrant rounded-full flex items-center justify-center text-black shadow-[0_0_10px_rgba(255,215,0,0.3)]">
              <i className="fas fa-bolt text-lg"></i>
            </div>
            <div>
              <h3 className="font-black italic text-white leading-none tracking-tighter uppercase">CHRONOSBOT</h3>
              <span className="flex items-center gap-1.5 text-[10px] text-yellow-vibrant font-bold uppercase tracking-widest mt-1">
                <span className="w-1.5 h-1.5 rounded-full bg-yellow-vibrant animate-pulse"></span>
                En línea
              </span>
            </div>
          </div>

          {/* Messages Container */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-zinc-950/50 custom-scrollbar">
            {messages.map((msg, idx) => (
              <div 
                key={idx} 
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`max-w-[85%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed shadow-sm ${
                  msg.role === 'user' 
                    ? 'bg-yellow-vibrant text-black font-bold rounded-tr-none' 
                    : 'bg-zinc-900 text-zinc-200 rounded-tl-none border border-zinc-800'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-zinc-900 text-zinc-500 px-4 py-2 rounded-2xl text-xs animate-pulse flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-zinc-600 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                  <span className="w-1.5 h-1.5 bg-zinc-600 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                  <span className="w-1.5 h-1.5 bg-zinc-600 rounded-full animate-bounce"></span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-4 bg-zinc-900 border-t border-zinc-800 flex gap-2">
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Preguntame lo que quieras, che..."
              className="flex-1 bg-black border border-zinc-700 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-yellow-vibrant transition-colors placeholder:text-zinc-600"
            />
            <button 
              onClick={handleSend}
              disabled={isLoading || !input.trim()}
              className="w-12 h-12 bg-yellow-vibrant text-black rounded-xl flex items-center justify-center transition-all hover:scale-105 active:scale-95 disabled:opacity-50 disabled:grayscale"
            >
              <i className="fas fa-paper-plane text-sm"></i>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
