import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";

export default function HeroBanner() {
  return (
    // SEÇÃO PRINCIPAL MODIFICADA: Adicionado o fundo com imagem
    <section className="relative w-full py-20 px-4 md:px-10 flex justify-center overflow-hidden">
      {/* IMAGEM DE FUNDO DA SEÇÃO: Com efeito de desfoque sutil no fundo */}
      <div
        className="absolute inset-0 z-0 bg-[url('./src/assets/bg-hero.jpg')] bg-cover bg-center bg-no-repeat"
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-black/60 backdrop-blur-none" /> {/* Overlay escuro e blur sutil no fundo */}
      </div>

      {/* Container Principal Estilo Card (Baseado na imagem do gráfico) MODIFICADO: Transparência e Blur */}
      <div
        className={cn(
          "relative z-10 w-full max-w-6xl overflow-hidden flex flex-col md:flex-row items-center min-h-[500px] border",
          "rounded-[40px] shadow-2xl transition-all duration-300",
          "bg-[#0a0a0b]/40 backdrop-blur-md", // TRANSPARÊNCIA E BLUR NO CARD
          "border-white/10" // BORDA SUTIL
        )}
      >

        {/* Lado Esquerdo: Imagem da Balança (Substituindo o gráfico) - Mantido */}
        <div className="w-full md:w-1/2 relative bg-transparent overflow-hidden group h-full"> {/* bg-transparent para o blur funcionar */}
          <motion.div
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
            className="h-full w-full flex items-center justify-center p-10 md:p-16"
          >
            {/* Efeito de iluminação de fundo mais espalhado - Mantido */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/10 to-transparent z-10 rounded-full blur-[80px]" />

            <img
              src="../src/assets/logo.png"
              alt="Balança da Justiça"
              className={cn(
                "w-full h-full object-contain",
                "scale-150 md:scale-125",
                "brightness-125 contrast-110",
                "transition-transform duration-1000 group-hover:scale-[1.3]"
              )}
            />
          </motion.div>
        </div>

        {/* Lado Direito: Conteúdo Textual - Mantido */}
        <div className="w-full md:w-1/2 p-10 md:p-16 flex flex-col justify-center text-left">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h1 className="text-white text-4xl md:text-5xl font-bold leading-tight mb-6">
              Natanael Vicente & <br />
              <span className="text-[#D4AF37]">Rufatto Advocacia</span>
            </h1>

            <p className="text-slate-400 text-lg md:text-xl leading-relaxed mb-10 max-w-md">
              Especialistas em Direito Empresarial, do Trabalho e
              <span className="text-slate-200"> Regularização Imobiliária</span> com foco em menor custo e agilidade registral.
            </p>

            {/* Botão Estilo "Try the Earnings Calculator" - Mantido */}
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="https://wa.me/5517981193467"
              target="_blank"
              className={cn(
                "inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-bold text-black transition-all",
              )}
              style={{
                background: "linear-gradient(135deg, #1abfa3 80%)"
              }}
            >
              <MessageCircle className="w-5 h-5" />
              CONVERSAR COM UM ESPECIALISTA
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}