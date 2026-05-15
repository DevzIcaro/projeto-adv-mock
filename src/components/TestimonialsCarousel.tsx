import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    name: "Igor Prates",
    content: "Atendimento maravilhoso. Fui para solucionar um caso, ganhei amigos.",
    rating: 5,
  },
  {
    name: "Andreia A. Peralta",
    content: "Fui muito bem atendida, muito profissional e capacitada, superou as minhas expectativas. Parabéns pelo trabalho.",
    rating: 5,
  },
  {
    name: "Beatriz Zatti de Melo",
    content: "Os melhores da região!!!",
    rating: 5,
  },
  {
    name: "Ícaro Carneiro",
    content: "Profissionalismo e dedicação impecáveis em cada etapa do processo, me ajudaram muito me orientando sobre as implicações legais para realizar um contrato bem alinhado para minha área de atuação profissional.",
    rating: 5,
  }
];

export default function TestimonialsCarousel() {
  return (
    <section className="relative w-full py-24 px-6 bg-black overflow-hidden"
      style={{
        background: "linear-gradient(360deg, #000000 0%, #1a1a1a 100%)"
      }}>
      {/* Título da Seção */}
      <header className="text-center mb-16">
        <h2 className="text-[#C6A24C] text-sm font-bold tracking-[0.2em] uppercase mb-2">
          Depoimentos
        </h2>
        <h3 className="text-white text-4xl md:text-5xl font-bold font-serif italic">
          Avaliação de Nossos Clientes
        </h3>
        <div className="w-24 h-1 bg-[#C6A24C] mx-auto mt-6 opacity-50 rounded-full" />
      </header>

      {/* Container do Carrossel (Flex com Scroll ou Grid Responsivo) */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="relative bg-[#0a0a0b]/60 backdrop-blur-xl border border-[#C6A24C]/20 p-8 rounded-[30px] flex flex-col h-full shadow-2xl group"
            >
              {/* Ícone de Aspas Decorativo */}
              <Quote className="absolute top-6 right-8 text-[#C6A24C] opacity-60 w-10 h-10 group-hover:opacity-20 transition-opacity" />

              {/* Estrelas */}
              <div className="flex gap-1 mb-6">
                {[...Array(item.rating)].map((_, i) => (
                  <Star key={i} size={16} className="fill-[#C6A24C] text-[#C6A24C]" />
                ))}
              </div>

              {/* Texto da Avaliação */}
              <p className="text-slate-300 italic leading-relaxed mb-8 flex-grow">
                "{item.content}"
              </p>

              {/* Assinatura */}
              <div className="mt-auto border-t border-[#C6A24C]/10 pt-6">
                <p className="text-[#C6A24C] font-bold font-serif text-lg">
                  - {item.name}
                </p>
              </div>

              {/* Efeito de brilho no hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#C6A24C]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-[30px] pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}