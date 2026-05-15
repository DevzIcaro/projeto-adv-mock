import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { TbMapPin } from "react-icons/tb";
import { FiMail } from "react-icons/fi";

const lawyers = [
    {
        name: "Dr. Carlos Eduardo Menezes",
        role: "Sócio Fundador | Direito Corporativo",
        image: "./src/assets/adv4.jpg",
        whatsapp: "https://wa.me/5511999999999",
        maps: "https://maps.app.goo.gl/exemplo1",
        email: "mailto:carlos.menezes@exemplo.adv.br",
    },
    {
        name: "Drª Mariana Cavalcanti",
        role: "Especialista | Direito Tributário",
        image: "./src/assets/advogada1.jpg",
        whatsapp: "https://wa.me/5511999999999",
        maps: "https://maps.app.goo.gl/exemplo2",
        email: "mailto:mariana.cavalcanti@exemplo.adv.br",
    },
    {
        name: "Dr. Ricardo Alencar Rocha",
        role: "Associado Senior | Propriedade Intelectual",
        image: "./src/assets/adv3.jpg",
        whatsapp: "https://wa.me/5511999999999",
        maps: "https://maps.app.goo.gl/exemplo3",
        email: "mailto:ricardo.alencar@exemplo.adv.br",
    }
];

export default function AssociateCards() {
    return (
        <section
            className="w-full py-24 px-6"
            style={{
                background: "linear-gradient(360deg, #000000 0%, #1a1a1a 100%)"
            }}
        >
            <div className="max-w-5xl mx-auto">
                {/* Cabeçalho da Seção */}
                <div className="text-center mb-16">
                    <h3 className="text-white text-4xl md:text-5xl font-serif italic">
                        Nossos Associados
                    </h3>
                    <p className="text-white/60 mt-4 max-w-xl mx-auto text-sm tracking-wide">
                        Corpo jurídico altamente qualificado para entregar soluções estratégicas e personalizadas.
                    </p>
                </div>

                {/* Grid de Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
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
                            </div>

                            {/* Informações */}
                            <div className="px-2 pb-2">
                                <div className="flex justify-between items-start mb-6">
                                    <div className="min-h-[70px]"> {/* Altura mínima fixa evita desalinhamento dos botões se os nomes variarem de tamanho */}
                                        <h4 className="text-white text-xl font-serif font-bold group-hover:text-[#C6A24C] transition-colors line-clamp-2">
                                            {lawyer.name}
                                        </h4>
                                        <p className="text-[#C6A24C] pt-1.5 text-[10px] font-bold uppercase tracking-wider">
                                            {lawyer.role}
                                        </p>
                                    </div>
                                </div>

                                {/* Botões de Ação */}
                                <div className="flex flex-row justify-between gap-2">
                                    <a
                                        href={lawyer.whatsapp}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-center m-0.5 gap-3 flex-1 py-4 rounded-2xl text-white font-bold uppercase text-xs tracking-widest transition-all active:scale-95 shadow-lg shadow-black/30 hover:brightness-110"
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
                                        className="flex items-center justify-center m-0.5 gap-3 flex-1 py-4 rounded-2xl text-white font-bold uppercase text-xs tracking-widest transition-all active:scale-105 shadow-lg shadow-black/20 hover:brightness-110"
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
                                        className="flex items-center justify-center m-0.5 gap-3 flex-1 py-4 rounded-2xl text-white font-bold uppercase text-xs tracking-widest transition-all active:scale-95 shadow-lg shadow-black/30 hover:brightness-110"
                                        style={{
                                            background: "linear-gradient(135deg, #012d6e 0%, #0064b0 50%, #aaaaaa 100%)"
                                        }}
                                    >
                                        <FiMail size={18} />
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