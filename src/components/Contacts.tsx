import { motion } from "framer-motion";
import { MessageCircle, ArrowUpRight } from "lucide-react";
import { TbMapPin } from "react-icons/tb";
import { FiMail } from "react-icons/fi";
import { IoLogoInstagram } from "react-icons/io5";

const lawyers = [
    {
        name: "Dr. Marcus Vinícius Toledo",
        role: "Sócio Sênior | Família e Sucessões",
        experience: "+20 Anos de Experiência",
        bio: "Especialista em planejamento sucessório e resoluções de conflitos familiares complexos, priorizando sempre a segurança jurídica e a preservação do patrimônio familiar.",
        image: "./src/assets/adv1.jpg",
        whatsapp: "https://wa.me/5517",
        maps: "https://maps.app.goo.gl/EiGxT8JE4pgAsDJT9",
        email: "mailto:dnv.advocacia.@gmail.com",
        instagram: "https://www.instagram.com/dnv.advocacia"
    },
    {
        name: "Dr. Renato Sanches Alencar",
        role: "Sócio | Direito Empresarial e Tributário",
        experience: "+15 Anos de Experiência",
        bio: "Consultor estratégico especializado em blindagem patrimonial, defesas fiscais complexas e estruturação societária para empresas de médio e grande porte.",
        image: "./src/assets/adv2.jpg",
        whatsapp: "https://wa.me/5517",
        maps: "https://maps.app.goo.gl/EiGxT8JE4pgAsDJT9",
        email: "mailto:dnv.advocacia.@gmail.com",
        instagram: "https://www.instagram.com/dnv.advocacia"
    }
];

export default function ContactCards() {
    return (
        <section
            className="w-full py-24 px-6"
            style={{
                background: "linear-gradient(180deg, #000000 0%, #1a1a1a 100%)"
            }}
        >
            <div className="max-w-5xl mx-auto">
                {/* Cabeçalho da Seção */}
                <div className="text-center mb-16">
                    <h2 className="text-[#C6A24C] text-sm font-bold tracking-[0.3em] uppercase mb-4">
                        Canais de Atendimento
                    </h2>
                    <h3 className="text-white text-4xl md:text-5xl font-serif italic">
                        Contatos
                    </h3>
                </div>

                {/* Grid de Cards (2 colunas para os 2 advogados) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {lawyers.map((lawyer, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="group relative bg-[#0a0a0b] border border-white/10 rounded-[35px] p-5 transition-all duration-500 hover:border-[#C6A24C]/40 hover:shadow-[0_20px_50px_rgba(198,162,76,0.1)]"
                        >
                            {/* Container da Imagem */}
                            <div className="relative w-full aspect-[4/5] overflow-hidden rounded-[25px] mb-6">
                                <img
                                    src={lawyer.image}
                                    alt={lawyer.name}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
                                />
                                {/* Overlay de Gradiente */}
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0b] via-transparent to-transparent opacity-60" />

                                {/* Badge de Experiência */}
                                <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md border border-[#C6A24C]/30 px-4 py-1.5 rounded-full">
                                    <span className="text-[#C6A24C] text-[10px] font-bold uppercase tracking-widest">
                                        {lawyer.experience}
                                    </span>
                                </div>
                            </div>

                            {/* Informações */}
                            <div className="px-2 pb-2">
                                <div className="flex justify-between items-start mb-3">
                                    <div>
                                        <h4 className="text-white text-2xl font-serif font-bold group-hover:text-[#C6A24C] transition-colors">
                                            {lawyer.name}
                                        </h4>
                                        <p className="text-[#C6A24C] text-xs font-bold uppercase tracking-tighter mt-1">
                                            {lawyer.role}
                                        </p>
                                    </div>
                                    <ArrowUpRight className="text-white/20 group-hover:text-[#C6A24C] transition-colors flex-shrink-0" size={24} />
                                </div>

                                {/* Box de Bio com altura mínima para manter os botões alinhados */}
                                <div className="min-h-[72px] mb-8">
                                    <p className="text-slate-400 text-sm leading-relaxed line-clamp-3">
                                        {lawyer.bio}
                                    </p>
                                </div>

                                {/* Botões de Ação Dinâmicos */}
                                <div className="flex flex-row gap-3">
                                    <a
                                        href={lawyer.whatsapp}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-center flex-1 py-4 rounded-2xl text-white font-bold uppercase text-xs tracking-widest transition-all active:scale-95 shadow-lg shadow-black/30 hover:brightness-110"
                                        style={{
                                            background: "linear-gradient(135deg, #054640 0%, #005d4b 45%, #06625f 70%, #aaaaaa 100%)"
                                        }}
                                    >
                                        <MessageCircle size={18} />
                                    </a>
                                    <a
                                        href={lawyer.maps}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-center flex-1 py-4 rounded-2xl text-white font-bold uppercase text-xs tracking-widest transition-all active:scale-105 shadow-lg shadow-black/20 hover:brightness-110"
                                        style={{
                                            background: "linear-gradient(135deg, #4a80f5 0%, #9bbff4 45%, #a7cdf2 55%, #bbdaa4 70%, #f18d00 100%)"
                                        }}
                                    >
                                        <TbMapPin size={18} />
                                    </a>
                                    <a
                                        href={lawyer.email}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-center flex-1 py-4 rounded-2xl text-white font-bold uppercase text-xs tracking-widest transition-all active:scale-95 shadow-lg shadow-black/30 hover:brightness-110"
                                        style={{
                                            background: "linear-gradient(135deg, #012d6e 0%, #0064b0 50%, #aaaaaa 100%)"
                                        }}
                                    >
                                        <FiMail size={18} />
                                    </a>
                                    <a
                                        href={lawyer.instagram}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-center flex-1 py-4 rounded-2xl text-white font-bold uppercase text-xs tracking-widest transition-all active:scale-95 shadow-lg shadow-black/20 hover:opacity-90"
                                        style={{
                                            background: "linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)"
                                        }}
                                    >
                                        <IoLogoInstagram size={18} />
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}