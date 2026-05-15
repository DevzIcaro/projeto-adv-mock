import { motion } from "framer-motion";
import { Scale, Home, ShieldCheck, Briefcase, Users, FileText, Gavel } from "lucide-react";

const focusAreas = [
  {
    title: "Advocacia Contenciosa",
    description: "Gestão estratégica de litígios judiciais em diversas instâncias com foco em resultados céleres.",
    icon: <Gavel className="w-6 h-6" />,
  },
  {
    title: "Regularização Imobiliária",
    description: "Especialidade em usucapião, desmembramentos e segurança jurídica para sua propriedade.",
    icon: <Home className="w-6 h-6" />,
  },
  {
    title: "Direito Empresarial",
    description: "Assessoria completa para empresas, desde a estruturação até a prevenção de riscos operacionais.",
    icon: <Briefcase className="w-6 h-6" />,
  },
  {
    title: "Registro de Marcas",
    description: "Proteção da sua identidade visual e propriedade intelectual junto aos órgãos competentes.",
    icon: <ShieldCheck className="w-6 h-6" />,
  },
  {
    title: "Direito do Trabalho",
    description: "Defesa dos direitos trabalhistas e consultoria preventiva para relações de emprego saudáveis.",
    icon: <Users className="w-6 h-6" />,
  },
  {
    title: "Contratos e Acordos",
    description: "Elaboração e análise técnica de contratos para garantir total proteção em suas transações.",
    icon: <FileText className="w-6 h-6" />,
  },
  {
    title: "Direito Civil",
    description: "Resolução de conflitos civis, responsabilidade civil e consultoria jurídica personalizada.",
    icon: <Scale className="w-6 h-6" />,
  },
];

export default function FocusAreasGrid() {
  return (
    /* GRADIENTE UNIFORME: Sincronizado com a seção anterior */
    <section className="w-full py-24 px-4 bg-black">
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
              transition={{ duration: 0.1, delay: index * 0.05 }}
              whileHover={{ y: -10 }}
              /* CARD: Sem fundo sólido para permitir a visão do gradiente da seção */
              className="w-full flex flex-col sm:w-[380px] bg-black/50 backdrop-blur-md border border-[#C6A24C]/90 p-8 rounded-[40px] shadow-2xl transition-all duration-500 group "
            >
              {/* ÍCONE ENCAPSULADO: Círculo dourado conforme solicitado */}
              <div className="flex justify-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#C6A24C] to-[#8c6d2e] flex items-center justify-center mb-8 shadow-lg shadow-[#C6A24C]/10 text-black group-hover:scale-110 transition-transform">
                  {area.icon}
                </div>
              </div>

              <div className="flex justify-center">
                <h3 className="text-[#C6A24C] text-xl font-bold mb-4 font-serif">
                  {area.title}
                </h3>
              </div>

              <div className="flex justify-center">
                <p className="text-slate-300 text-sm leading-relaxed mb-6 italic text-left">
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