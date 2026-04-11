// src/components/Contato.tsx
"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { FaWhatsapp, FaMapMarkerAlt, FaInstagram } from "react-icons/fa";

export default function Contato() {
  const [nome, setNome] = useState("");
  const [interesse, setInteresse] = useState("");

  const enviarParaWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    
    // ATENÇÃO: Troque este número pelo WhatsApp real da Lótus Music (com DDD, sem espaços)
    const numeroWhatsApp = "5543996027177"; 
    
    const textoBase = `Olá! Me chamo ${nome} e estava navegando no site da Lótus. Gostaria de saber mais sobre as aulas de ${interesse || "música"}!`;
    const textoCodificado = encodeURIComponent(textoBase);
    
    window.open(`https://wa.me/${5543996027177}?text=${textoCodificado}`, "_blank");
  };

  return (
    <section id="contato" className="py-24 md:py-32 px-4 relative bg-[#080808] border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20">
        
        {/* Lado Esquerdo: Formulário Minimalista */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-1/2 flex flex-col justify-center"
        >
          <h2 className="text-lotus-gold uppercase tracking-[0.3em] text-sm font-bold mb-4">
            Dê o Primeiro Passo
          </h2>
          <h3 className="text-5xl md:text-6xl font-black text-white mb-12 tracking-tighter">
            Vamos afinar <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-lotus-gold to-yellow-700">
              essa ideia?
            </span>
          </h3>

          <form onSubmit={enviarParaWhatsApp} className="space-y-12">
            {/* Campo Nome (Estilo Minimalista) */}
            <div className="relative group">
              <input 
                type="text" 
                required
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                className="w-full bg-transparent border-b border-white/20 px-0 py-4 text-white text-xl focus:outline-none focus:border-lotus-gold transition-colors peer placeholder-transparent"
                placeholder="Seu Nome"
              />
              <label className="absolute left-0 -top-4 text-sm text-gray-500 transition-all peer-placeholder-shown:text-xl peer-placeholder-shown:top-4 peer-focus:-top-4 peer-focus:text-sm peer-focus:text-lotus-gold pointer-events-none">
                Como podemos te chamar?
              </label>
            </div>

            {/* Campo Interesse (Estilo Minimalista) */}
            <div className="relative group">
              <input 
                type="text" 
                required
                value={interesse}
                onChange={(e) => setInteresse(e.target.value)}
                className="w-full bg-transparent border-b border-white/20 px-0 py-4 text-white text-xl focus:outline-none focus:border-lotus-gold transition-colors peer placeholder-transparent"
                placeholder="Instrumento"
              />
              <label className="absolute left-0 -top-4 text-sm text-gray-500 transition-all peer-placeholder-shown:text-xl peer-placeholder-shown:top-4 peer-focus:-top-4 peer-focus:text-sm peer-focus:text-lotus-gold pointer-events-none">
                Qual instrumento tocou seu coração? (Ex: Canto, Piano...)
              </label>
            </div>

            {/* Botão de Envio */}
            <button 
              type="submit"
              className="group relative w-full md:w-auto inline-flex items-center justify-center gap-3 bg-white/5 border border-lotus-gold/50 text-lotus-gold px-12 py-5 rounded-full text-lg font-bold tracking-wide uppercase overflow-hidden transition-all hover:bg-lotus-gold hover:text-[#080808]"
            >
              <FaWhatsapp className="text-2xl" />
              <span>Chamar no WhatsApp</span>
            </button>
          </form>
        </motion.div>

        {/* Lado Direito: Informações e Mapa Escuro */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full lg:w-1/2 flex flex-col"
        >
          <div className="bg-[#111] border border-white/5 rounded-3xl p-8 h-full flex flex-col">
            
            <div className="mb-8 space-y-4">
              <div className="flex items-center gap-4 text-gray-300">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-lotus-gold border border-white/10">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <p className="text-white font-bold">Lótus Music</p>
                  <p className="text-sm">Rua José Afonso dos Santos, 12</p>
                </div>
              </div>

              <a href="#" className="flex items-center gap-4 text-gray-300 hover:text-lotus-gold transition-colors w-fit">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                  <FaInstagram />
                </div>
                <p className="text-sm font-medium tracking-widest uppercase">@LotusMusic</p>
              </a>
            </div>

            {/* Mapa do Google (com filtro para ficar escuro) */}
            <div className="grow w-full rounded-2xl overflow-hidden border border-white/10 min-h-75 relative">
              <iframe 
                src="https://maps.google.com/maps?q=Rua+José+Afonso+dos+Santos,+12&t=&z=15&ie=UTF8&iwloc=&output=embed" 
                className="absolute inset-0 w-full h-full"
                style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) contrast(1.1) opacity(0.8)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}