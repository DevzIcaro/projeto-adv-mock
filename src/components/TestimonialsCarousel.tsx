import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Carlos Eduardo Mendes",
    content: "Excelente atendimento no planejamento sucessório da nossa empresa familiar. O Dr. Marcus demonstrou uma sensibilidade e competência técnica ímpares, blindando nosso patrimônio e trazendo paz para a transição geracional.",
    rating: 5,
  },
  {
    name: "Mariana S. Albuquerque",
    content: "Conduziram meu processo de inventário com extrema rapidez, discrição e profissionalismo. Uma equipe sênior diferenciada que resolve problemas complexos sem burocracia desnecessária. Recomendo muito.",
    rating: 5,
  },
  {
    name: "Roberto F. de Almeida",
    content: "A assessoria tributária e societária do Dr. Renato reestruturou nossa operação e reduziu riscos de forma impecável. Um escritório estratégico para quem busca segurança jurídica real nos negócios.",
    rating: 5,
  },
  {
    name: "Dra. Eliane Vasconcellos",
    content: "Profissionais altamente capacitados. Atuação impecável em uma disputa societária complexa da nossa holding. O nível de entrega técnica e o atendimento consultivo sênior superaram todas as expectativas.",
    rating: 5,
  }
];

export default function TestimonialsGrid() {
  return (
    <section 
      id="avaliacoes" 
      className="relative w-full py-24 px-6 overflow-hidden"
      style={{
        background: "linear-gradient(360deg, #000000 0%, #0a0a0b 100%)"
      }}
    >

      <header className="text-center mb-16">
        <h2 className="text-[#C6A24C] text-sm font-bold tracking-[0.2em] uppercase mb-2">
          Depoimentos
        </h2>
        <h3 className="text-white text-4xl md:text-5xl font-bold font-serif italic">
          Avaliação de Nossos Clientes
        </h3>
        <div className="w-24 h-1 bg-[#C6A24C] mx-auto mt-6 opacity-50 rounded-full" />
      </header>

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
              className="relative bg-[#0c0c0d]/60 backdrop-blur-xl border border-[#C6A24C]/20 p-8 rounded-[30px] flex flex-col h-full shadow-2xl group transition-all duration-300 hover:border-[#C6A24C]/60"
            >

              <p className="text-slate-300 text-sm leading-relaxed mb-8 flex-grow font-light italic">
                "{item.content}"
              </p>

              <div className="mt-auto border-t border-white/5 pt-6">
                <p className="text-[#C6A24C] font-bold font-serif text-base tracking-wide">
                  {item.name}
                </p>
                <p className="text-white/35 text-[11px] uppercase tracking-wider mt-1">
                  Cliente do Escritório
                </p>
              </div>

              <div className="absolute inset-0 bg-gradient-to-br from-[#C6A24C]/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-[30px] pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}