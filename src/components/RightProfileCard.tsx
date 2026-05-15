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
    name = "Dr. Marcus Vinícius Toledo",
    role = "Sócio Fundador | Família e Sucessões",
    description = "Especialista em Direito de Família e Sucessões, com foco em planejamento sucessório sênior, inventários de alta complexidade e proteção de patrimônio familiar.",
    quote = "A advocacia familiar exige mais do que o rigor da lei; demanda sensibilidade para entender os momentos de transição e firmeza técnica para blindar e perpetuar o patrimônio que as gerações construíram.",
    imagePath = "../src/assets/adv1.jpg"
}: ProfileCardProps) {
    return (
        <section className="w-full py-16 px-4 flex justify-center bg-black">
            
            <div className="w-full max-w-6xl flex flex-col md:flex-row bg-[#0a0a0b] border border-white/10 shadow-2xl overflow-hidden min-h-[550px] rounded-xl">

                <div className="w-full md:w-7/12 flex flex-col justify-center p-8 md:p-16 space-y-8 order-2 md:order-1">

                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-[#C6A24C] text-4xl md:text-5xl font-serif font-bold mb-2">
                            {name}
                        </h2>
                        <p className="text-slate-200 text-sm uppercase tracking-[0.3em] font-semibold">
                            {role}
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="border-l-2 border-[#C6A24C]/50 pl-6"
                    >
                        <p className="text-slate-300 text-lg leading-relaxed italic">
                            {description}
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="bg-white/5 backdrop-blur-sm p-8 border border-white/5 rounded-lg"
                    >
                        <p className="text-white text-xl md:text-2xl font-light leading-snug">
                            "{quote}"
                        </p>
                    </motion.div>
                </div>

                <div className="w-full md:w-5/12 relative overflow-hidden order-1 md:order-2 bg-[#0c0c0d]">
                    <motion.div
                        initial={{ opacity: 0, scale: 1.1 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="h-full w-full"
                        style={{
                            clipPath: "polygon(15% 0, 100% 0, 100% 100%, 0% 100%)"
                        }}
                    >
                        <img
                            src={imagePath}
                            alt={name}
                            className="h-full w-full object-cover grayscale-[20%] contrast-110 brightness-90"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent" />
                    </motion.div>
                </div>

            </div>
        </section>
    );
}