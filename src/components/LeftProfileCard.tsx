import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ProfileCardProps {
  name: string;
  role: string;
  description: string;
  quote: string;
  imagePath: string;
}

export default function LeftProfileCard({ 
  name = "Diego Natanael Vicente",
  role = "Sócio Fundador",
  description = "Especialista em Direito Empresarial e Direito do Trabalho com mais de 15 anos de experiência.",
  quote = "O advogado é aquele que transforma o sonho em objetivo, empenhando todas as forças para que ele se torne realidade.",
  imagePath = "../src/assets/natanael.png" 
}: ProfileCardProps) {
  return (
    <section className="w-full py-16 px-4 flex justify-center bg-black">
      <div className="w-full max-w-6xl flex flex-col md:flex-row bg-[#0a0a0b] border border-white/10 shadow-2xl overflow-hidden min-h-[550px]">
        
        {/* Lado Esquerdo: Imagem com Corte Diagonal Rígido */}
        <div className="w-full md:w-5/12 relative overflow-hidden bg-[#0c0c0d]">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="h-full w-full"
            style={{
              clipPath: "polygon(0 0, 100% 0, 85% 100%, 0% 100%)" // Corte inclinado reto para rigidez
            }}
          >
            <img 
              src={imagePath} 
              alt={name}
              className="h-full w-full object-cover grayscale-[30%] contrast-110 brightness-90"
            />
            {/* Overlay sutil para integração de cor */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </motion.div>
        </div>

        {/* Lado Direito: Conteúdo em Divs Separadas */}
        <div className="w-full md:w-7/12 flex flex-col justify-center p-8 md:p-16 space-y-8">
          
          {/* Div do Nome e Título */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-[#D4AF37] text-4xl md:text-5xl font-serif font-bold mb-2">
              {name}
            </h2>
            <p className="text-slate-200 text-sm uppercase tracking-[0.3em] font-semibold">
              {role}
            </p>
          </motion.div>

          {/* Div da Descrição Técnica */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="border-l-2 border-[#D4AF37]/30 pl-6"
          >
            <p className="text-slate-400 text-lg leading-relaxed italic">
              {description}
            </p>
          </motion.div>

          {/* Div da Mensagem/Aspas (A "Caixa de Vidro") */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white/5 backdrop-blur-sm p-8 border border-white/5 rounded-sm"
          >
            <p className="text-white text-xl md:text-2xl font-light leading-snug">
              "{quote}"
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}