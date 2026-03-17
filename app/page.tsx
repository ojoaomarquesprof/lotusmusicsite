// src/app/page.tsx
import Header from "./components/Header"; // <-- Importe o Header
import Hero from "./components/Hero";
import Cursos from "./components/Cursos"; 
import SobreNos from "./components/SobreNos"; 
import ComoFunciona from "./components/ComoFunciona"; 
import Contato from "./components/Contato"; 
import BotaoFlutuante from "./components/BotaoFlutuante"; 

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#080808]">
      <Header /> {/* <-- Coloque ele aqui, acima de tudo */}
      <Hero />
      <Cursos /> 
      <SobreNos /> 
      <ComoFunciona /> 
      <Contato /> 
      <BotaoFlutuante /> 
    </main>
  );
}