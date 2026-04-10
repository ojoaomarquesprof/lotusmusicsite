// src/components/Header.tsx
"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuAberto, setMenuAberto] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linksEsquerda = [
    { nome: "Cursos", href: "#cursos" },
    { nome: "Sobre Nós", href: "#sobre" },
  ];

  const linksDireita = [
    { nome: "Como Funciona", href: "#metodologia" },
    { nome: "Contato", href: "#contato" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? "bg-[#080808]/90 backdrop-blur-md border-b border-white/5 py-3 shadow-lg" 
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        
        {/* === VERSÃO DESKTOP === */}
        <nav className="hidden md:flex items-center justify-between">
          
          <div className="flex-1 flex justify-end gap-10 pr-12">
            {linksEsquerda.map((link) => (
              <a 
                key={link.nome} 
                href={link.href} 
                className="text-xs font-bold text-gray-300 hover:text-lotus-gold uppercase tracking-[0.2em] transition-colors"
              >
                {link.nome}
              </a>
            ))}
          </div>

          {/* Centro: Logo (Aumentamos o width para 220 e height para 70) */}
          <div 
            className="shrink-0 cursor-pointer transition-transform duration-300 hover:scale-105"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <Image 
              src="/logo.png" 
              alt="Lótus Music" 
              width={220} // <-- Maior presença
              height={70} // <-- Maior presença
              priority
              className="object-contain drop-shadow-[0_0_15px_rgba(212,175,55,0.4)]"
            />
          </div>

          <div className="flex-1 flex justify-start gap-10 pl-12">
            {linksDireita.map((link) => (
              <a 
                key={link.nome} 
                href={link.href} 
                className="text-xs font-bold text-gray-300 hover:text-lotus-gold uppercase tracking-[0.2em] transition-colors"
              >
                {link.nome}
              </a>
            ))}
          </div>
        </nav>

        {/* === VERSÃO MOBILE === */}
        <nav className="md:hidden flex items-center justify-between">
          {/* Logo Mobile (Aumentamos o width para 150 e height para 50) */}
          <div 
            className="shrink-0 cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <Image 
              src="/logo.png" 
              alt="Lótus Music" 
              width={150} // <-- Maior presença no celular
              height={50} // <-- Maior presença no celular
              className="object-contain"
            />
          </div>
          <button 
            onClick={() => setMenuAberto(!menuAberto)} 
            className="text-lotus-gold text-2xl p-2 focus:outline-none"
          >
            {menuAberto ? <FaTimes /> : <FaBars />}
          </button>
        </nav>
      </div>

      <AnimatePresence>
        {menuAberto && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#0a0a0a] border-b border-white/5 overflow-hidden"
          >
            <div className="flex flex-col items-center py-8 gap-6">
              {[...linksEsquerda, ...linksDireita].map((link) => (
                <a 
                  key={link.nome} 
                  href={link.href} 
                  onClick={() => setMenuAberto(false)}
                  className="text-sm font-bold text-gray-300 hover:text-lotus-gold uppercase tracking-[0.2em] transition-colors"
                >
                  {link.nome}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}