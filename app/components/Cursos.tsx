// src/components/Cursos.tsx
"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaMicrophoneAlt, FaCheck, FaSignal, FaChevronDown } from "react-icons/fa";
import { 
  GiGrandPiano, GiMusicalKeyboard, GiGuitar, GiAccordion, 
  GiViolin, GiDrumKit, GiDrum 
} from "react-icons/gi";

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

export default function CursosAccordion() {
  // Estado para controlar qual curso está aberto (inicia com o primeiro aberto)
  const [cursoAberto, setCursoAberto] = useState<string | null>(cursosLista[0].nome);

  const toggleCurso = (nome: string) => {
    // Se clicar no que já está aberto, ele fecha. Se clicar em outro, ele abre o novo.
    setCursoAberto(cursoAberto === nome ? null : nome);
  };

  return (
    <section id="cursos" className="min-h-screen bg-[#080808] relative px-4 py-24 md:py-32">
      <div className="max-w-4xl mx-auto">
        
        <div className="text-center mb-16">
          <h2 className="text-lotus-gold uppercase tracking-[0.3em] text-sm font-bold mb-4">
            Jornada Musical
          </h2>
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tighter">
            Nossos Cursos
          </h3>
        </div>

        {/* Lista estilo Accordion (Sanfona) */}
        <div className="flex flex-col gap-4">
          {cursosLista.map((curso) => {
            const isOpen = cursoAberto === curso.nome;
            const Icon = curso.icone;

            return (
              <div 
                key={curso.nome} 
                className={`border rounded-2xl overflow-hidden transition-colors duration-300 ${
                  isOpen ? "bg-[#111] border-lotus-gold/30 shadow-lg" : "bg-white/5 border-white/5 hover:border-white/10"
                }`}
              >
                {/* Cabeçalho Clicável */}
                <button
                  onClick={() => toggleCurso(curso.nome)}
                  className="w-full flex items-center justify-between p-6 md:p-8 cursor-pointer focus:outline-none"
                >
                  <div className="flex items-center gap-6">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors duration-300 ${
                      isOpen ? "bg-lotus-gold text-[#080808]" : "bg-white/5 text-lotus-gold"
                    }`}>
                      <Icon className="text-2xl" />
                    </div>
                    <h4 className={`text-2xl md:text-3xl font-bold tracking-tight transition-colors duration-300 ${
                      isOpen ? "text-white" : "text-gray-400"
                    }`}>
                      {curso.nome}
                    </h4>
                  </div>
                  
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className={`text-xl ${isOpen ? "text-lotus-gold" : "text-gray-500"}`}
                  >
                    <FaChevronDown />
                  </motion.div>
                </button>

                {/* Conteúdo Expansível com Framer Motion */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-8 md:px-8 md:pb-10 pt-2 border-t border-white/5 flex flex-col md:flex-row gap-8">
                        
                        {/* Lado Esquerdo do Card Aberto: Descrição */}
                        <div className="flex-1">
                          <div className="flex items-center gap-2 text-lotus-gold mb-4 bg-lotus-gold/10 w-fit px-3 py-1 rounded-full border border-lotus-gold/20">
                            <FaSignal className="text-xs" />
                            <span className="text-xs font-semibold tracking-wide uppercase">{curso.niveis}</span>
                          </div>
                          <p className="text-gray-300 text-lg leading-relaxed">
                            {curso.descricao}
                          </p>
                        </div>

                        {/* Lado Direito do Card Aberto: Diferenciais */}
                        <div className="flex-1 md:border-l md:border-white/10 md:pl-8">
                          <h5 className="text-sm text-gray-500 uppercase tracking-widest mb-4 font-semibold">
                            Foco das Aulas
                          </h5>
                          <ul className="space-y-3">
                            {curso.diferenciais.map((dif, idx) => (
                              <li key={idx} className="flex items-center gap-3 text-gray-200">
                                <FaCheck className="text-lotus-gold text-sm shrink-0" />
                                <span>{dif}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}