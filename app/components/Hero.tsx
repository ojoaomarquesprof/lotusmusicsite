// src/components/Hero.tsx
"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaPlay } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="relative w-full h-screen bg-[#080808] overflow-hidden flex items-center justify-center">
      
      {/* 1. Camada de Fundo (O Grande Teatro/Estúdio Iluminado) */}
      <div className="absolute inset-0 opacity-80 z-0">
        <div className="absolute inset-0 bg-linear-to-b from-[#B8860B]/80 via-[#1a1405]/90 to-[#080808] opacity-90 z-10" />
        
        {/* A imagem do teatro/estúdio que você escolheu */}
        <Image 
          src="/stage.jpg" 
          alt="Palco da Lótus Music" 
          fill 
          className="object-cover object-center mix-blend-overlay opacity-60 z-0"
        />
      </div>

      {/* 2. Conteúdo Principal (Tipografia Gigante e Botões) */}
      <div className="relative z-20 w-full max-w-7xl px-6 md:px-12 flex flex-col items-center text-center mt-16">
        
        {/* Subtítulo de Entrada */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex items-center gap-4 mb-6"
        >
          <div className="w-12 h-px bg-lotus-gold" />
          <p className="text-lotus-gold font-semibold tracking-[0.3em] uppercase text-xs md:text-sm">
            Santo Amaro, Cambé
          </p>
          <div className="w-12 h-px bg-lotus-gold" />
        </motion.div>

        {/* Título Principal de Alto Impacto */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter leading-[1.1] mb-6">
            A sua jornada musical <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-lotus-gold via-yellow-600 to-lotus-gold">
              começa aqui.
            </span>
          </h1>
        </motion.div>

        {/* Texto de Apoio (Copy persuasiva) */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-gray-300 text-lg md:text-xl font-light max-w-2xl mb-12"
        >
          Mais do que notas musicais, ensinamos técnica, saúde e expressão. 
          Descubra o poder transformador da música com a metodologia exclusiva da Lótus Music.
        </motion.p>

        {/* Botões de Ação */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center gap-6"
        >
          {/* Botão Primário */}
          <a 
            href="#cursos"
            className="group relative inline-flex items-center justify-center bg-lotus-gold text-[#080808] px-10 py-4 rounded-full text-sm font-bold tracking-widest uppercase overflow-hidden transition-all hover:scale-105"
          >
            Explorar Cursos
          </a>

          {/* Botão Secundário (Play Video) */}
          <a 
            href="#metodologia"
            className="group flex items-center gap-4 text-white hover:text-lotus-gold transition-colors"
          >
            <div className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center group-hover:border-lotus-gold transition-colors">
              <FaPlay className="text-sm ml-1" />
            </div>
            <span className="text-sm font-bold tracking-widest uppercase">Assistir Vídeo</span>
          </a>
        </motion.div>

      </div>

      {/* Gradiente na base para fundir suavemente com a próxima sessão (Cursos) */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-linear-to-t from-[#080808] to-transparent z-10" />

    </section>
  );
}