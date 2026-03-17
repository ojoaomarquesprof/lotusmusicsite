// src/components/Footer.tsx
import Image from "next/image";
import { FaInstagram, FaWhatsapp, FaYoutube, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#030303] pt-24 pb-8 border-t border-white/5 relative z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Grid Principal do Rodapé */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          {/* Coluna 1: Marca e Sobre (Agora maior e com alinhamento inteligente) */}
          <div className="flex flex-col gap-6 items-center md:items-start text-center md:text-left">
            <Image 
              src="/logo.png" 
              alt="Lótus Music" 
              width={260} // <-- Logo bem maior agora que as margens foram cortadas
              height={90} 
              className="object-contain"
            />
            <p className="text-gray-400 text-sm leading-relaxed md:pr-4">
              A sua melhor versão começa aqui. Estrutura de alto nível, metodologia exclusiva e paixão por formar verdadeiros músicos.
            </p>
            {/* Redes Sociais */}
            <div className="flex gap-4 mt-2 justify-center md:justify-start">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-lotus-gold hover:bg-white/10 transition-all">
                <FaInstagram className="text-lg" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-lotus-gold hover:bg-white/10 transition-all">
                <FaWhatsapp className="text-lg" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-lotus-gold hover:bg-white/10 transition-all">
                <FaYoutube className="text-lg" />
              </a>
            </div>
          </div>

          {/* Coluna 2: Navegação Rápida */}
          <div className="flex flex-col gap-6 items-center md:items-start text-center md:text-left">
            <h4 className="text-white font-bold tracking-widest uppercase text-sm">Explorar</h4>
            <ul className="flex flex-col gap-3">
              <li><a href="#cursos" className="text-gray-400 hover:text-lotus-gold text-sm transition-colors">Nossos Cursos</a></li>
              <li><a href="#metodologia" className="text-gray-400 hover:text-lotus-gold text-sm transition-colors">Como Funciona (App)</a></li>
              <li><a href="#sobre" className="text-gray-400 hover:text-lotus-gold text-sm transition-colors">Direção Musical</a></li>
              <li><a href="#contato" className="text-gray-400 hover:text-lotus-gold text-sm transition-colors">Agendar Aula</a></li>
            </ul>
          </div>

          {/* Coluna 3: Cursos em Destaque */}
          <div className="flex flex-col gap-6 items-center md:items-start text-center md:text-left">
            <h4 className="text-white font-bold tracking-widest uppercase text-sm">Especialidades</h4>
            <ul className="flex flex-col gap-3">
              <li className="text-gray-400 text-sm">Canto & Saúde Vocal</li>
              <li className="text-gray-400 text-sm">Piano & Teclado</li>
              <li className="text-gray-400 text-sm">Violão & Guitarra</li>
              <li className="text-gray-400 text-sm">Viola Caipira & Sanfona</li>
            </ul>
          </div>

          {/* Coluna 4: Contato Direto */}
          <div className="flex flex-col gap-6 items-center md:items-start text-center md:text-left">
            <h4 className="text-white font-bold tracking-widest uppercase text-sm">Contato</h4>
            <ul className="flex flex-col gap-4 items-center md:items-start">
              <li className="flex items-start gap-3 text-gray-400 text-sm">
                <FaWhatsapp className="text-lotus-gold mt-1 shrink-0" />
                <span>(43) 99999-9999</span>
              </li>
              <li className="flex items-start gap-3 text-gray-400 text-sm">
                <FaEnvelope className="text-lotus-gold mt-1 shrink-0" />
                <span>contato@lotusmusic.com.br</span>
              </li>
              <li className="flex items-start gap-3 text-gray-400 text-sm text-center md:text-left">
                <FaMapMarkerAlt className="text-lotus-gold mt-1 shrink-0" />
                <span>Rua José Afonso dos Santos, 12 <br/> (Em cima dos Correios)<br/>Cambé | Londrina - PR</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Linha Inferior (Copyright e Créditos) */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-xs tracking-wider text-center md:text-left">
            &copy; 2026 Lótus Music. Todos os direitos reservados.
          </p>
          <p className="text-gray-600 text-xs tracking-wider flex items-center gap-1">
            Desenvolvido por <a href="#" className="text-gray-400 hover:text-lotus-gold transition-colors font-medium">Sonus Prime</a>
          </p>
        </div>

      </div>
    </footer>
  );
}