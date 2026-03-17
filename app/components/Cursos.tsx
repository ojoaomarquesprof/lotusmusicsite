// src/components/Cursos.tsx
"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaMicrophoneAlt, FaCheck, FaSignal } from "react-icons/fa";
import { 
  GiGrandPiano, GiMusicalKeyboard, GiGuitar, GiAccordion, 
  GiViolin, GiDrumKit, GiDrum 
} from "react-icons/gi";

// Lista de cursos enriquecida com informações completas
const cursosLista = [
  { 
    nome: "Canto", 
    icone: FaMicrophoneAlt,
    descricao: "Desenvolva sua voz unindo expressão artística e um profundo entendimento da anatomia e saúde do trato vocal.",
    niveis: "Iniciante ao Profissional",
    diferenciais: ["Técnica e Saúde Vocal", "Extensão e Afinação", "Repertório Personalizado"]
  },
  { 
    nome: "Piano", 
    icone: GiGrandPiano,
    descricao: "Domine as teclas com independência das mãos, leitura dinâmica e interpretação de grandes obras.",
    niveis: "Iniciante ao Avançado",
    diferenciais: ["Postura Ergonômica", "Leitura de Partitura", "Expressão Dinâmica"]
  },
  { 
    nome: "Teclado", 
    icone: GiMusicalKeyboard,
    descricao: "Explore a versatilidade dos timbres, arranjos e acompanhamentos para música popular e bandas.",
    niveis: "Iniciante ao Intermediário",
    diferenciais: ["Cifragem e Harmonização", "Uso de Timbres e Ritmos", "Prática em Conjunto"]
  },
  { 
    nome: "Violão", 
    icone: GiGuitar,
    descricao: "Do ritmo de acampamento às harmonias complexas da MPB, construa uma base sólida nas cordas.",
    niveis: "Iniciante ao Avançado",
    diferenciais: ["Batidas e Dedilhados", "Harmonia Prática", "Percepção Musical"]
  },
  { 
    nome: "Guitarra", 
    icone: GiGuitar,
    descricao: "Técnica, velocidade e feeling. Encontre a sua identidade sonora através de escalas, licks e riffs clássicos.",
    niveis: "Iniciante ao Avançado",
    diferenciais: ["Técnicas de Palhetada", "Improvisação", "Configuração de Timbre (Set)"]
  },
  { 
    nome: "Viola Caipira", 
    icone: GiGuitar,
    descricao: "Conecte-se com a verdadeira essência da música raiz brasileira, dominando os ritmos e afinações tradicionais.",
    niveis: "Iniciante ao Avançado",
    diferenciais: ["Afinações (Cebolão, Rio Abaixo)", "Ritmos Tradicionais", "Ponteados Clássicos"]
  },
  { 
    nome: "Sanfona", 
    icone: GiAccordion,
    descricao: "O fole é o coração. Aprenda a independência entre baixos e teclas com o autêntico balanço brasileiro.",
    niveis: "Iniciante ao Avançado",
    diferenciais: ["Independência das Mãos", "Manejo do Fole", "Repertório Regional"]
  },
  { 
    nome: "Baixo", 
    icone: GiGuitar,
    descricao: "Assuma o controle do groove e da harmonia, formando a base indispensável para qualquer estilo musical.",
    niveis: "Iniciante ao Avançado",
    diferenciais: ["Groove e Timing", "Slap, Finger e Palheta", "Criação de Linhas de Baixo"]
  },
  { 
    nome: "Ukulele", 
    icone: GiGuitar,
    descricao: "Alegre, portátil e apaixonante. A porta de entrada perfeita e rápida para o mundo dos instrumentos de corda.",
    niveis: "Iniciante",
    diferenciais: ["Aprendizado Rápido", "Ritmos Pop e Havaianos", "Leitura de Cifras Simples"]
  },
  { 
    nome: "Violino", 
    icone: GiViolin,
    descricao: "A mais pura expressão melódica. Desenvolva a postura, a arcada perfeita e a afinação precisa.",
    niveis: "Iniciante ao Avançado",
    diferenciais: ["Técnica de Arco", "Afinação Sensorial", "Postura e Relaxamento"]
  },
  { 
    nome: "Bateria", 
    icone: GiDrumKit,
    descricao: "Coordenação motora, precisão e muita energia. Torne-se o metrônomo humano da sua banda.",
    niveis: "Iniciante ao Avançado",
    diferenciais: ["Independência dos Membros", "Leitura Rítmica", "Rudimentos Essenciais"]
  },
  { 
    nome: "Cajon", 
    icone: GiDrum,
    descricao: "A percussão versátil que cabe em qualquer roda de música, trazendo o ritmo da bateria para o acústico.",
    niveis: "Iniciante ao Intermediário",
    diferenciais: ["Timbres (Grave e Agudo)", "Adaptação de Ritmos", "Dinâmica Acústica"]
  },
];

export default function CursosMenuLuxo() {
  // Estado que guarda qual curso está sendo visualizado no momento
  const [activeCurso, setActiveCurso] = useState(cursosLista[0]);

  return (
    <section className="min-h-screen bg-[#080808] relative px-4 py-12 md:py-24">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-12 relative">
        
        {/* LADO ESQUERDO: Lista de Cursos (Menu Vertical) */}
        <div className="w-full lg:w-1/2 flex flex-col gap-2 py-12">
          <h2 className="text-xl text-lotus-gold tracking-widest uppercase mb-8 font-semibold">
            Nossos Cursos
          </h2>
          
          <div className="flex flex-col gap-4">
            {cursosLista.map((curso) => (
              <button
                key={curso.nome}
                onMouseEnter={() => setActiveCurso(curso)}
                onClick={() => setActiveCurso(curso)}
                className={`text-left text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter transition-all duration-300 border-b border-white/5 pb-4 ${
                  activeCurso.nome === curso.nome 
                    ? "text-white translate-x-4" 
                    : "text-white/20 hover:text-white/60" 
                }`}
              >
                {curso.nome}
              </button>
            ))}
          </div>
        </div>

        {/* LADO DIREITO: O "Palco" Centralizado Verticalmente */}
        <div className="w-full lg:w-1/2 relative">
          
          {/* A mágica do alinhamento: h-screen (altura da tela), top-0 (gruda no topo) e flex items-center (centraliza o card no meio do espaço) */}
          <div className="sticky top-0 h-screen flex items-center justify-center">
            
            {/* O Card em si */}
            <div className="w-full bg-[#111] border border-white/5 rounded-3xl p-8 md:p-12 min-h-125 flex flex-col justify-center shadow-2xl">
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCurso.nome}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col h-full"
                >
                  {/* Ícone Gigante Dourado */}
                  <activeCurso.icone className="text-7xl md:text-8xl text-lotus-gold mb-8 drop-shadow-[0_0_20px_rgba(212,175,55,0.4)]" />
                  
                  {/* Nome do Curso e Nível */}
                  <h3 className="text-4xl md:text-5xl font-bold text-white mb-4">
                    {activeCurso.nome}
                  </h3>
                  <div className="flex items-center gap-2 text-lotus-gold mb-6 bg-lotus-gold/10 w-fit px-4 py-1.5 rounded-full border border-lotus-gold/20">
                    <FaSignal className="text-sm" />
                    <span className="text-sm font-medium tracking-wide">{activeCurso.niveis}</span>
                  </div>

                  {/* Descrição Persuasiva */}
                  <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-10 border-l-2 border-lotus-gold pl-4">
                    {activeCurso.descricao}
                  </p>

                  {/* Lista de Diferenciais */}
                  <div className="mt-auto">
                    <h4 className="text-sm text-gray-500 uppercase tracking-widest mb-4 font-semibold">Foco das Aulas</h4>
                    <ul className="space-y-3">
                      {activeCurso.diferenciais.map((dif, idx) => (
                        <li key={idx} className="flex items-center gap-3 text-gray-200">
                          <FaCheck className="text-lotus-gold text-sm shrink-0" />
                          <span className="text-lg">{dif}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </motion.div>
              </AnimatePresence>
              
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}