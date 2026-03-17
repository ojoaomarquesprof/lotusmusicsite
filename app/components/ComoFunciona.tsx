// src/components/ComoFunciona.tsx
"use client";
import { motion } from "framer-motion";
import { FaPlay, FaCalendarCheck, FaMobileAlt, FaFileAudio } from "react-icons/fa";

const diferenciais = [
  {
    titulo: "App Exclusivo do Aluno",
    descricao: "A Lótus na palma da mão. Reagende suas aulas com um clique, acompanhe seu histórico e gerencie pagamentos direto pelo celular, sem burocracia.",
    icone: FaMobileAlt,
    destaque: true, // Vamos fazer esse card brilhar mais
  },
  {
    titulo: "Material Digital na Nuvem",
    descricao: "Esqueça as pastas pesadas. Acesse suas partituras em PDF, cifras e áudios de apoio para estudo de onde estiver, a qualquer momento.",
    icone: FaFileAudio,
    destaque: false,
  },
  {
    titulo: "Aulas e Rotina Flexíveis",
    descricao: "Pacotes semanais estruturados ou aulas avulsas. Nosso modelo se adapta ao seu ritmo de aprendizado e à sua rotina, garantindo o máximo de aproveitamento.",
    icone: FaCalendarCheck,
    destaque: false,
  },
];

export default function ComoFunciona() {
  return (
    <section id="metodologia" className="py-24 md:py-32 px-4 relative bg-[#080808]">
      <div className="max-w-7xl mx-auto">
        
        {/* Cabeçalho da Sessão */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <h2 className="text-lotus-gold uppercase tracking-[0.3em] text-sm font-bold mb-4">
              A Experiência
            </h2>
            <h3 className="text-4xl md:text-6xl font-black text-white tracking-tighter">
              Métodos de <span className="text-transparent bg-clip-text bg-linear-to-r from-white to-gray-500">Alto Nível.</span>
            </h3>
          </motion.div>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 max-w-sm text-lg"
          >
            Aperte o play e descubra como unimos a arte musical com a tecnologia para facilitar a sua jornada.
          </motion.p>
        </div>

        {/* Player de Vídeo Imersivo */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative w-full aspect-video rounded-4xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.8)] border border-white/10 mb-20 group cursor-pointer bg-[#111] flex items-center justify-center"
        >
          {/* Imagem de Fundo Temporária (Thumbnail do Vídeo) */}
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-40 group-hover:opacity-30 transition-opacity duration-700 mix-blend-luminosity"></div>
          
          <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent"></div>

          {/* Botão Play Cinematográfico */}
          <div className="relative z-20 w-24 h-24 bg-lotus-gold/10 backdrop-blur-md border border-lotus-gold/50 rounded-full flex items-center justify-center group-hover:scale-110 group-hover:bg-lotus-gold transition-all duration-500">
            <FaPlay className="text-lotus-gold text-3xl ml-2 group-hover:text-[#080808] transition-colors duration-500" />
            
            {/* Efeito de anel pulsante */}
            <div className="absolute inset-0 border border-lotus-gold rounded-full animate-ping opacity-20"></div>
          </div>
        </motion.div>

        {/* Grid de Diferenciais (Bento Style) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {diferenciais.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className={`p-10 rounded-3xl border transition-all duration-500 flex flex-col h-full ${
                item.destaque 
                  ? "bg-linear-to-br from-[#1a1a1a] to-[#080808] border-lotus-gold/30 shadow-[0_0_30px_rgba(212,175,55,0.1)] hover:border-lotus-gold" 
                  : "bg-white/5 border-white/5 backdrop-blur-sm hover:bg-white/10"
              }`}
            >
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 ${
                item.destaque ? "bg-lotus-gold text-[#080808]" : "bg-white/10 text-lotus-gold"
              }`}>
                <item.icone className="text-3xl" />
              </div>
              <h4 className="text-2xl font-bold text-white mb-4 tracking-tight">{item.titulo}</h4>
              <p className="text-gray-400 leading-relaxed text-lg grow">
                {item.descricao}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}