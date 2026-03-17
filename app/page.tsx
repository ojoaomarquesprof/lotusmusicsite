// src/app/page.tsx
import Hero from "./components/Hero";
import Cursos from "./components/Cursos"; 
import SobreNos from "./components/SobreNos"; 
import ComoFunciona from "./components/ComoFunciona"; 
import Contato from "./components/Contato"; // <-- Importe o Contato
import BotaoFlutuante from "./components/BotaoFlutuante"; // <-- Importe o Botão Flutuante

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#080808]">
      <Hero />
      <Cursos /> 
      <SobreNos /> 
      <ComoFunciona /> 
      <Contato /> {/* <-- Adicione aqui */}
      <BotaoFlutuante /> {/* <-- Adicione aqui */}
    </main>
  );
}