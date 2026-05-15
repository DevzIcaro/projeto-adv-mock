import { motion } from "framer-motion";
import { MessageCircle, ShieldCheck, ArrowRight } from "lucide-react";

export default function Hero() {
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
            className="relative w-full min-h-screen flex items-center justify-center overflow-hidden py-24 px-6"
            style={{
                background: "radial-gradient(circle at 50% 30%, #1a1a1a 0%, #000000 100%)"
            }}
        >
            {/* Linhas de Grade de Fundo Sutis (Visual Premium) */}
            <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:40px_40px]" />

            <div className="max-w-5xl mx-auto text-center relative z-10 flex flex-col items-center">
                
                {/* Badge de Apresentação */}
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

                {/* Título Principal Impactante */}
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-white text-4xl sm:text-5xl md:text-7xl font-serif font-bold tracking-tight max-w-4xl leading-[1.15] mb-6"
                >
                    Defesa patrimonial e jurídica sob o comando do{" "}
                    <span className="text-[#C6A24C] italic font-normal">Dr. Marcus Vinícius</span> e{" "}
                    <span className="text-[#C6A24C] italic font-normal">Dr. Renato Sanches</span>
                </motion.h1>

                {/* Linha Divisória Elegante */}
                <motion.div 
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 1, delay: 0.4 }}
                    className="h-px w-32 bg-gradient-to-r from-transparent via-[#C6A24C] to-transparent mb-8"
                />

                {/* Subtítulo / Proposta de Valor */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="text-slate-400 text-base md:text-xl max-w-2xl font-light leading-relaxed mb-12"
                >
                    Unindo mais de duas décadas de rigor técnico e atuação estratégica corporativa e familiar. Soluções de alta complexidade em Família, Sucessões, Empresarial e Tributário.
                </motion.p>

                {/* CTAs (Chamadas para Ação) */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                    className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
                >
                    {/* Botão Principal: WhatsApp */}
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

                    {/* Botão Secundário: Conhecer os Sócios */}
                    <button
                        onClick={scrollToContact}
                        className="flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 rounded-2xl bg-transparent border border-white/10 text-white font-bold uppercase text-xs tracking-widest transition-all duration-300 hover:border-[#C6A24C]/50 hover:bg-white/5 active:scale-95 group"
                    >
                        Canais de Atendimento
                        <ArrowRight size={14} className="text-[#C6A24C] group-hover:translate-x-1 transition-transform" />
                    </button>
                </motion.div>
            </div>

            {/* Gradiente Inferior para Transição Suave entre Seções */}
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#0a0a0b] to-transparent pointer-events-none" />
        </section>
    );
}