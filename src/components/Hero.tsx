import { motion } from "framer-motion";
import { MessageCircle, ShieldCheck, ArrowRight } from "lucide-react";

interface HeroProps {
    imagePath?: string;
}

export default function Hero({ imagePath }: HeroProps) {
    const whatsappUrl = "https://wa.me/5517";

    const scrollToContact = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        const elem = document.getElementById("contatos");
        if (elem) {
            window.scrollTo({
                top: elem.offsetTop - 80,
                behavior: "smooth",
            });
        }
    };

    return (
        <section
            id="hero"
            className="relative w-full min-h-screen flex items-center justify-center overflow-hidden py-24 px-6 bg-black"
        >
            <div className="absolute inset-0 z-0">
                <img 
                    src={imagePath || "./src/assets/hbg-hero.jpg"} 
                    alt="Escritório de Advocacia" 
                    className="w-full h-full object-cover opacity-30" 
                />

                <div 
                    className="absolute inset-0" 
                    style={{
                        background: "radial-gradient(circle at 50% 30%, rgba(26, 26, 26, 0.4) 0%, rgba(0, 0, 0, 1) 100%)"
                    }}
                />
            </div>

            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:40px_40px] z-[1]" />

            <div className="max-w-5xl mx-auto text-center relative z-10 flex flex-col items-center">
                

                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="flex items-center gap-2 bg-white/5 border border-[#C6A24C]/30 px-4 py-2 rounded-full mb-8 backdrop-blur-md"
                >
                    <ShieldCheck className="text-[#C6A24C]" size={16} />
                    <span className="text-white/80 text-[11px] font-bold uppercase tracking-[0.2em]">
                        Toledo & Alencar Advocacia Sênior
                    </span>
                </motion.div>


                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-white text-4xl sm:text-5xl md:text-7xl font-serif font-bold tracking-tight max-w-4xl leading-[1.15] mb-6 drop-shadow-2xl"
                >
                    Defesa patrimonial e jurídica sob o comando do{" "}
                    <span className="text-[#C6A24C] italic font-normal text-nowrap">Dr. Marcus Vinícius</span> e{" "}
                    <span className="text-[#C6A24C] italic font-normal text-nowrap">Dr. Renato Sanches</span>
                </motion.h1>


                <motion.div 
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 1, delay: 0.4 }}
                    className="h-px w-32 bg-gradient-to-r from-transparent via-[#C6A24C] to-transparent mb-8"
                />

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="text-slate-300 text-base md:text-xl max-w-2xl font-light leading-relaxed mb-12 drop-shadow-md"
                >
                    Unindo mais de duas décadas de rigor técnico e atuação estratégica corporativa e familiar. Soluções de alta complexidade em Família, Sucessões, Empresarial e Tributário.
                </motion.p>


                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                    className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
                >
                    <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-3 w-full sm:w-auto px-8 py-4 rounded-2xl text-white font-bold uppercase text-xs tracking-widest transition-all duration-300 active:scale-95 shadow-xl shadow-black/40 hover:brightness-110 hover:-translate-y-0.5 group"
                        style={{
                            background: "linear-gradient(135deg, #054640 0%, #005d4b 45%, #06625f 70%, #888888 100%)"
                        }}
                    >
                        <MessageCircle size={18} className="group-hover:rotate-12 transition-transform" />
                        Agendar Consulta Sênior
                    </a>

                    <button
                        onClick={scrollToContact}
                        className="flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 rounded-2xl bg-white/5 border border-white/10 text-white font-bold uppercase text-xs tracking-widest transition-all duration-300 hover:border-[#C6A24C]/50 hover:bg-white/10 active:scale-95 group backdrop-blur-sm"
                    >
                        Canais de Atendimento
                        <ArrowRight size={14} className="text-[#C6A24C] group-hover:translate-x-1 transition-transform" />
                    </button>
                </motion.div>
            </div>

            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#0a0a0b] to-transparent z-[2] pointer-events-none" />
        </section>
    );
}