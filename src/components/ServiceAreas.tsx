import { motion } from "framer-motion";
import { Scale, Heart, ShieldCheck, Briefcase, TrendingUp, FileText, Landmark } from "lucide-react";

const focusAreas = [
  {
    title: "Direito de Família",
    description: "Atuação humanizada e técnica em divórcios judiciais e extrajudiciais, partilha de bens de alta complexidade e pensão alimentícia.",
    icon: <Heart className="w-6 h-6" />,
  },
  {
    title: "Planejamento Sucessório",
    description: "Estruturação estratégica para a transmissão de patrimônio em vida, minimizando conflitos familiares e impactos fiscais.",
    icon: <TrendingUp className="w-6 h-6" />,
  },
  {
    title: "Inventários e Sucessões",
    description: "Condução célere e segura de inventários complexos, testamentos e regularização de heranças judicial ou extrajudicialmente.",
    icon: <Landmark className="w-6 h-6" />,
  },
  {
    title: "Direito Empresarial",
    description: "Assessoria jurídica integral para sociedades, governança corporativa, prevenção de riscos operacionais e litígios comerciais.",
    icon: <Briefcase className="w-6 h-6" />,
  },
  {
    title: "Direito Tributário",
    description: "Defesa técnica em execuções fiscais, inteligência tributária e ações para recuperação de impostos pagos indevidamente.",
    icon: <Scale className="w-6 h-6" />,
  },
  {
    title: "Blindagem Patrimonial",
    description: "Mecanismos legais e societários para a proteção do patrimônio particular e empresarial contra instabilidades de mercado.",
    icon: <ShieldCheck className="w-6 h-6" />,
  },
  {
    title: "Contratos Societários",
    description: "Elaboração e análise minuciosa de acordos de acionistas, memorandos de entendimento (MoU) e contratos comerciais sênior.",
    icon: <FileText className="w-6 h-6" />,
  },
];

export default function FocusAreasGrid() {
  return (
    /* GRADIENTE UNIFORME: Sincronizado com o ecossistema escuro do site */
    <section id="areas" className="w-full py-24 px-4 bg-black">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-20">
          <h2 className="text-[#C6A24C] text-4xl md:text-5xl font-serif font-bold mb-4 italic">
            Nossos Focos de Atuação
          </h2>
          <div className="w-24 h-1 bg-[#C6A24C] mx-auto opacity-50 rounded-full" />
        </header>

        {/* GRID: Centralizado para garantir que os 7 cards fiquem alinhados mesmo em números ímpares */}
        <div className="flex flex-wrap justify-center gap-8">
          {focusAreas.map((area, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ y: -10 }}
              /* CARD: Sem fundo sólido para permitir a visão do gradiente da seção */
              className="w-full flex flex-col sm:w-[380px] bg-white/[0.02] backdrop-blur-md border border-[#C6A24C]/20 p-8 rounded-[40px] shadow-2xl transition-all duration-500 group hover:border-[#C6A24C]/60"
            >
              {/* ÍCONE ENCAPSULADO: Círculo dourado */}
              <div className="flex justify-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#C6A24C] to-[#8c6d2e] flex items-center justify-center mb-8 shadow-lg shadow-[#C6A24C]/10 text-black group-hover:scale-110 transition-transform">
                  {area.icon}
                </div>
              </div>

              <div className="flex justify-center text-center">
                <h3 className="text-[#C6A24C] text-xl font-bold mb-4 font-serif">
                  {area.title}
                </h3>
              </div>

              <div className="flex flex-1 justify-center text-center">
                <p className="text-slate-300 text-sm leading-relaxed mb-6 italic">
                  {area.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}