"use client";
import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";

export default function ParticlesBackground() {
  const [init, setInit] = useState(false);

  // Novo jeito de inicializar o Particles na versão 3
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  if (!init) return null;

  return (
    <Particles
      id="tsparticles"
      className="absolute inset-0 -z-10"
      // Usamos "as any" no final das options para o TypeScript parar de 
      // ser chato com as propriedades de notas musicais que são plugins adicionais
      options={{
        background: {
          color: {
            value: "#0A192F", // Fundo azul escuro elegante da Lotus
          },
        },
        fpsLimit: 60,
        particles: {
          color: {
            value: "#D4AF37", // Notas em dourado
          },
          links: {
            enable: false,
          },
          move: {
            direction: "top",
            enable: true,
            outModes: {
              default: "out",
            },
            random: true,
            speed: 1.5,
            straight: false,
          },
          number: {
            value: 30, // Quantidade ideal para não poluir
          },
          opacity: {
            value: 0.2, // Bem suave
          },
          shape: {
            type: "char",
            options: {
              char: {
                value: ["♪", "♫", "♩", "♬"],
                font: "Verdana",
                style: "",
                weight: "400",
              },
            },
          },
          size: {
            value: { min: 10, max: 24 },
          },
        },
        detectRetina: true,
      } as any} 
    />
  );
}