// src/components/BotaoFlutuante.tsx
"use client";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

export default function BotaoFlutuante() {
  // ATENÇÃO: Troque pelo seu número
  const numeroWhatsApp = "5543999999999"; 
  const mensagemPadrao = encodeURIComponent("Olá! Estou no site da Lótus Music e gostaria de mais informações.");

  return (
    <motion.a
      href={`https://wa.me/${numeroWhatsApp}?text=${mensagemPadrao}`}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ type: "spring", stiffness: 260, damping: 20, delay: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-8 right-8 z-100 bg-[#25D366] text-white p-4 rounded-full shadow-[0_4px_20px_rgba(37,211,102,0.4)] cursor-pointer flex items-center justify-center group"
    >
      <div className="absolute inset-0 bg-[#25D366] rounded-full animate-ping opacity-60"></div>
      <FaWhatsapp className="text-4xl relative z-10" />
    </motion.a>
  );
}