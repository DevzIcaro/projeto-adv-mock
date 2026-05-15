import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
// Importação dos ícones do Lucide
import { Brain, ShieldCheck, Handshake } from "lucide-react";

const aboutSteps = [
  {
    title: "Estratégia Jurídica",
    description: "Não apenas advogados, mas parceiros estratégicos. Unimos especialização técnica e visão de negócio para entregar soluções precisas onde outros enxergam apenas burocracia.",
    side: "left",
    icon: Brain, // Passamos a referência do componente
  },
  {
    title: "Transparência",
    description: "Sua causa não é apenas um número. Priorizamos um atendimento humano e direto, onde você entende cada etapa do processo e participa das decisões que moldam o seu futuro.",
    side: "right",
    icon: ShieldCheck, // Representando a clareza e segurança
  },
  {
    title: "Compromisso",
    description: "Mais do que 15 anos de história, acumulamos um legado de vitórias. Nosso histórico de casos bem-sucedidos é o reflexo de uma dedicação incansável à proteção dos interesses de nossos clientes.",
    side: "left",
    icon: Handshake,
  }
];

export default function AboutUs() {
  return (
    <section className="relative w-full py-24 px-6 bg-black overflow-hidden">
      {/* Título da Seção */}
      <div className="text-center mb-20">
        <h2 className="text-[#C6A24C] text-sm font-bold tracking-[0.2em] uppercase mb-2">Conheça o Escritório</h2>
        <h3 className="text-white text-4xl md:text-5xl font-bold">Sobre Nós</h3>
      </div>

      <div className="max-w-5xl mx-auto relative">
        {/* Linha Central da Timeline */}
        <div className="absolute left-1/2 w-[2px] h-full bg-gradient-to-b from-[#C6A24C]/50 via-[#C6A24C]/20 to-transparent transform -translate-x-1/2 hidden md:block" />

        {aboutSteps.map((step, index) => {
          // Atribuímos o ícone a uma variável com letra maiúscula para usá-lo como componente
          const Icon = step.icon;

          return (
            <div key={index} className={cn(
              "relative flex flex-col md:flex-row items-center justify-between mb-16 md:mb-24",
              step.side === "right" ? "md:flex-row-reverse" : ""
            )}>
              
              {/* LADO DO ÍCONE */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="w-full md:w-[45%] flex justify-center mb-8 md:mb-0"
              >
                <div className="w-48 h-48 md:w-64 md:h-64 bg-[#0a0a0b]/60 backdrop-blur-md border border-[#C6A24C]/20 rounded-[40px] flex items-center justify-center shadow-2xl group transition-all duration-500 hover:border-[#C6A24C]/50">
                  {/* Renderização Dinâmica do Ícone */}
                  <Icon 
                    strokeWidth={1} 
                    className="w-20 h-20 md:w-28 md:h-28 text-[#C6A24C] opacity-40 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500" 
                  />
                  
                  {/* Brilho interno sutil */}
                  <div className="absolute inset-0 bg-[#C6A24C]/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-[40px]" />
                </div>
              </motion.div>

              {/* Ponto Dourado na Timeline */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#C6A24C] rounded-full shadow-[0_0_15px_#C6A24C] z-10 hidden md:block" />

              {/* LADO DO TEXTO */}
              <motion.div 
                initial={{ opacity: 0, x: step.side === "left" ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={cn(
                  "w-full md:w-[45%] text-center md:text-left",
                  step.side === "right" ? "md:text-right" : "md:text-left"
                )}
              >
                <h4 className="text-[#C6A24C] text-2xl font-bold mb-4 font-serif">{step.title}</h4>
                <p className="text-slate-400 text-lg leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            </div>
          );
        })}
      </div>
    </section>
  );
}