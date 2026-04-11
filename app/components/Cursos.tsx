// src/components/Cursos.tsx
"use client";
import { motion, Variants } from "framer-motion"; // <-- Adicionado o Variants aqui
import { FaMicrophoneAlt, FaCheck, FaSignal } from "react-icons/fa";
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
    diferenciais: ["Técnicas de Palhetada", "Improvisação", "Configuração de Timbre"]
  },
  { 
    nome: "Viola Caipira", 
    icone: GiGuitar,
    descricao: "Conecte-se com a verdadeira essência da música raiz brasileira, dominando os ritmos e afinações tradicionais.",
    niveis: "Iniciante ao Avançado",
    diferenciais: ["Afinações Tradicionais", "Ritmos Regionais", "Ponteados Clássicos"]
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
    diferenciais: ["Groove e Timing", "Slap, Finger e Palheta", "Criação de Linhas"]
  },
  { 
    nome: "Ukulele", 
    icone: GiGuitar,
    descricao: "Alegre, portátil e apaixonante. A porta de entrada perfeita e rápida para o mundo dos instrumentos de corda.",
    niveis: "Iniciante",
    diferenciais: ["Aprendizado Rápido", "Ritmos Pop e Havaianos", "Leitura de Cifras"]
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
    diferenciais: ["Independência", "Leitura Rítmica", "Rudimentos Essenciais"]
  },
  { 
    nome: "Cajon", 
    icone: GiDrum,
    descricao: "A percussão versátil que cabe em qualquer roda de música, trazendo o ritmo da bateria para o acústico.",
    niveis: "Iniciante ao Intermediário",
    diferenciais: ["Timbres (Grave/Agudo)", "Adaptação de Ritmos", "Dinâmica Acústica"]
  },
];

// <-- Adicionado : Variants aqui
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

// <-- Adicionado : Variants aqui
const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

export default function CursosCards() {
  return (
    <section id="cursos" className="min-h-screen bg-[#080808] relative px-4 py-24 md:py-32">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-lotus-gold uppercase tracking-[0.3em] text-sm font-bold mb-4">
            Jornada Musical
          </h2>
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tighter">
            Nossos Cursos
          </h3>
          <p className="mt-6 text-gray-400 max-w-2xl mx-auto text-lg">
            Escolha o seu instrumento e comece a trilhar o seu caminho na música com a metodologia exclusiva da nossa escola.
          </p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {cursosLista.map((curso) => {
            const Icon = curso.icone;

            return (
              <motion.div 
                key={curso.nome}
                variants={cardVariants}
                className="group flex flex-col bg-[#111] border border-white/5 rounded-2xl p-8 hover:border-lotus-gold/50 hover:shadow-[0_0_30px_rgba(212,175,55,0.1)] transition-all duration-300"
              >
                {/* Ícone e Título */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-full bg-white/5 text-lotus-gold flex items-center justify-center group-hover:bg-lotus-gold group-hover:text-[#080808] transition-colors duration-300">
                    <Icon className="text-3xl" />
                  </div>
                  <h4 className="text-2xl font-bold text-white tracking-tight">
                    {curso.nome}
                  </h4>
                </div>

                {/* Badge de Nível */}
                <div className="flex items-center gap-2 text-lotus-gold mb-4 bg-lotus-gold/10 w-fit px-3 py-1 rounded-full border border-lotus-gold/20">
                  <FaSignal className="text-[10px]" />
                  <span className="text-[10px] font-bold tracking-wider uppercase">{curso.niveis}</span>
                </div>

                {/* Descrição */}
                <p className="text-gray-400 text-sm leading-relaxed mb-8 grow">
                  {curso.descricao}
                </p>

                {/* Diferenciais */}
                <div className="mt-auto pt-6 border-t border-white/5">
                  <ul className="space-y-3">
                    {curso.diferenciais.map((dif, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-gray-300">
                        <FaCheck className="text-lotus-gold mt-1 shrink-0" size={12} />
                        <span>{dif}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}