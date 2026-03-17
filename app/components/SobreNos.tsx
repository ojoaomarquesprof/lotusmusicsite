// src/components/SobreNos.tsx
"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

export default function SobreNos() {
  const containerRef = useRef<HTMLElement>(null);
  
  // Captura o progresso da rolagem para o efeito Parallax
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // A imagem vai mover lentamente de -10% para 10% do eixo Y enquanto a tela rola
  const yImg = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section id="sobre" ref={containerRef} className="relative bg-[#080808] py-32 px-4 border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

        {/* LADO ESQUERDO: Imagem com Parallax e Filtro Editorial */}
        <div className="w-full lg:w-1/2 relative h-125 md:h-175 rounded-3xl overflow-hidden group">
          
          {/* O contêiner da imagem é maior que o espaço para permitir o parallax sem cortar as bordas */}
          <motion.div style={{ y: yImg }} className="absolute inset-[-15%] w-[130%] h-[130%]">
            <Image
              src="/joao-perfil.jpg" // Garanta que a sua foto no teclado está na pasta public com esse nome!
              alt="Professor João Marques"
              fill
              className="object-cover object-center grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 ease-in-out"
            />
            {/* Sombras nas bordas para misturar a foto com o fundo do site perfeitamente */}
            <div className="absolute inset-0 bg-linear-to-t from-[#080808] via-transparent to-[#080808] opacity-80" />
            <div className="absolute inset-0 bg-linear-to-r from-[#080808] via-transparent to-[#080808] opacity-80" />
          </motion.div>

          {/* Distintivo Flutuante estilo Editorial */}
          <div className="absolute bottom-8 left-8 bg-black/60 backdrop-blur-md border border-white/10 p-6 rounded-2xl max-w-xs transition-transform duration-500 group-hover:scale-105">
            <p className="text-lotus-gold text-sm font-bold tracking-widest uppercase mb-1">Direção Musical</p>
            <p className="text-white text-xl font-medium tracking-tight">João Marques</p>
          </div>
        </div>

        {/* LADO DIREITO: Texto (Copywriting focado na sua autoridade) */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-lotus-gold uppercase tracking-[0.3em] text-sm font-bold mb-4">
              A Essência da Lótus
            </h2>
            <h3 className="text-5xl md:text-6xl font-black text-white mb-8 tracking-tighter leading-[1.1]">
              Muito prazer, <br/>
              <span className="text-transparent bg-clip-text bg-linear-to-r from-lotus-gold to-yellow-600">
                João Marques.
              </span>
            </h3>

            <div className="space-y-6 text-gray-300 text-lg md:text-xl leading-relaxed font-light">
              <p>
                A música exige mais do que apenas repetição; exige entendimento, técnica e sensibilidade. Minha missão é guiar você na descoberta do seu verdadeiro potencial, fugindo de fórmulas prontas.
              </p>
              <p>
                Como multi-instrumentista, trago uma visão ampla e integrada para a sala de aula. Seja nas teclas ou nas cordas, a música é tratada aqui como uma linguagem universal.
              </p>
              <p>
                No canto, o cuidado vai além da afinação. Unindo a arte vocal a um <strong className="text-white font-medium">conhecimento aprofundado em anatomia e fisiologia do trato vocal</strong>, garanto que o seu desenvolvimento aconteça com máxima performance e total respeito à saúde da sua voz.
              </p>
            </div>

            {/* Badges de Especialidade */}
            <div className="mt-12 grid grid-cols-2 gap-6 border-t border-white/10 pt-10">
              <div>
                <h4 className="text-white font-bold text-3xl mb-2">12+</h4>
                <p className="text-gray-400 text-sm uppercase tracking-wider">Cursos Ministrados</p>
              </div>
              <div>
                <h4 className="text-white font-bold text-3xl mb-2">+ 10 anos</h4>
                <p className="text-gray-400 text-sm uppercase tracking-wider">Ensinando Música</p>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}