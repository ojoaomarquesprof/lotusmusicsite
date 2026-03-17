// src/components/Hero.tsx
"use client";
import { useEffect } from "react";
import { motion, useMotionValue, useSpring, useMotionTemplate } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, { stiffness: 400, damping: 30, mass: 0.5 });
  const smoothY = useSpring(mouseY, { stiffness: 400, damping: 30, mass: 0.5 });

  useEffect(() => {
    const updateMouse = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", updateMouse);
    return () => window.removeEventListener("mousemove", updateMouse);
  }, [mouseX, mouseY]);

  // Holofote sutil (spotlight) que segue o mouse, iluminando a cortina de veludo
  const spotlight = useMotionTemplate`radial-gradient(circle 600px at ${mouseX}px ${mouseY}px, rgba(212,175,55,0.2) 0%, rgba(0,0,0,0) 80%)`;

  return (
    // Fundo preto quase puro (#080808) para o máximo contraste
    <section className="relative w-full h-screen bg-[#080808] overflow-hidden flex items-center justify-center cursor-default">
      
      {/* 1. Camada de Fundo (O Grande Teatro/Estúdio Iluminado) */}
      <div className="absolute inset-0 opacity-80 z-0">
        {/* Usamos um gradiente dourado/acobreado que simula a luz de palco quente */}
        <div className="absolute inset-0 bg-linear-to-b from-[#B8860B] via-[#8B4513] to-black opacity-90" />
        
        {/* A imagem do teatro/estúdio que você escolheu */}
        <Image 
          src="/stage.jpg" // <-- Use a sua imagem aqui
          alt="Palco da Lótus Music" 
          fill 
          className="object-cover object-center mix-blend-multiply opacity-50"
        />
      </div>

      {/* 2. Camada Escura com Máscara "Spotlight" (Mantivemos o efeito misterioso) */}
      <motion.div
        className="absolute inset-0 bg-[#080808] z-10 pointer-events-none"
        style={{
          WebkitMaskImage: spotlight,
          maskImage: spotlight,
        } as any}
      />

      {/* 3. A LOGO GIGANTE (O grande astro do palco) */}
      <div className="relative z-20 w-full px-12 pointer-events-none flex items-center justify-center">
        {/* Aplicamos um efeito de brilho branco que se transforma em dourado na luz */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          style={{
            filter: "drop-shadow(0 0 15px rgba(255,255,255,0.7))",
            mixBlendMode: "difference" // Esse efeito faz a logo brilhar na escuridão
          }}
          className="w-full flex items-center justify-center max-w-[85vw]" // <-- Removemos max-w-2xl e colocamos max-w-[85vw]
        >
          <Image 
            src="/logo.png" 
            alt="Lótus Music - Escola de Música" 
            width={1920} // <-- Definimos um tamanho base enorme
            height={500}
            priority
            className="w-full h-auto object-contain"
          />
        </motion.div>
      </div>

      {/* 4. Subtítulo (Mais sutil agora) */}
      <div className="absolute bottom-12 left-12 z-30 pointer-events-none text-white/40 max-w-sm">
        <p className="text-sm font-extralight tracking-[0.2em] uppercase">
          Cambé | Londrina
        </p>
      </div>

      {/* Removemos o cursor customizado para focar totalmente na experiência imersiva */}

    </section>
  );
}