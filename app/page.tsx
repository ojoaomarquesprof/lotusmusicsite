// src/app/page.tsx
import Header from "./components/Header";
import Hero from "./components/Hero";
import Cursos from "./components/Cursos"; 
import ComoFunciona from "./components/ComoFunciona"; 
import SobreNos from "./components/SobreNos"; 
import Contato from "./components/Contato"; 
import BotaoFlutuante from "./components/BotaoFlutuante"; 
import Footer from "./components/Footer"; // <-- Importe o Footer

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#080808]">
      <Header />
      <Hero />
      <Cursos /> 
      <ComoFunciona /> 
      <SobreNos /> 
      <Contato /> 
      <Footer /> {/* <-- Adicione aqui, antes do botão flutuante */}
      <BotaoFlutuante /> 
    </main>
  );
}