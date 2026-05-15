import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ProfileCardProps {
    name?: string;
    role?: string;
    description?: string;
    quote?: string;
    imagePath?: string;
}

export default function RightProfileCard({
    name = "Gabriela Rufatto da Cruz",
    role = "Especialista em Regularização Imobiliária",
    description = "Especialista em Regularização Imobiliária, com foco no fácil acesso ao registro e menor custo.",
    quote = "Há mais de 05 anos no mercado imobiliário, desburocratizando pilhas de papéis em registro, com único intuito de proteger a tão sonhada casa própria, os imóveis de aluguéis que se tornarão a aposentadoria tranquila, os empreendimentos, que passam a ser também, novos sonhos.",
    imagePath = "../src/assets/gabriela.png"
}: ProfileCardProps) {
    return (
        /* SECTION: Agora com o gradiente linear do Preto para o Dourado #C39830 */
        <section className="w-full py-16 px-4 flex justify-center bg-linear-to-b from-black to-[#C39830]/85">
            
            <div className="w-full max-w-6xl flex flex-col md:flex-row bg-black/40 backdrop-blur-md border border-white/10 shadow-2xl overflow-hidden min-h-[550px] rounded-xl">

                {/* LADO ESQUERDO: Conteúdo Textual */}
                <div className="w-full md:w-7/12 flex flex-col justify-center p-8 md:p-16 space-y-8 order-2 md:order-1">

                    {/* Nome e Título */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-[#C39830] text-4xl md:text-5xl font-serif font-bold mb-2">
                            {name}
                        </h2>
                        <p className="text-slate-200 text-sm uppercase tracking-[0.3em] font-semibold">
                            {role}
                        </p>
                    </motion.div>

                    {/* Descrição Técnica */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="border-l-2 border-[#C39830]/50 pl-6"
                    >
                        <p className="text-slate-300 text-lg leading-relaxed italic">
                            {description}
                        </p>
                    </motion.div>

                    {/* Caixa de Mensagem (Vidro) */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="bg-black/60 backdrop-blur-sm p-8 border border-[#C39830]/20 rounded-lg"
                    >
                        <p className="text-white text-xl md:text-2xl font-light leading-snug">
                            "{quote}"
                        </p>
                    </motion.div>
                </div>

                {/* LADO DIREITO: Imagem com Corte Inclinado */}
                <div className="w-full md:w-5/12 relative overflow-hidden order-1 md:order-2">
                    <motion.div
                        initial={{ opacity: 0, scale: 1.1 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                        className="h-full w-full"
                        style={{
                            clipPath: "polygon(15% 0, 100% 0, 100% 100%, 0% 100%)"
                        }}
                    >
                        <img
                            src={imagePath}
                            alt={name}
                            className="h-full w-full object-cover contrast-110 brightness-75"
                        />
                        {/* Vinheta lateral para suavizar a transição com o texto */}
                        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent" />
                    </motion.div>
                </div>

            </div>
        </section>
    );
}