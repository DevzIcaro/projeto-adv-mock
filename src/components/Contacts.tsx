import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { TbMapPin } from "react-icons/tb";
import { FiMail } from "react-icons/fi";
import { IoLogoInstagram } from "react-icons/io5";

interface ContactCardsProps {
    imagePath?: string[]; 
}

const lawyers = [
    {
        name: "Dr. Marcus Vinícius Toledo",
        role: "Sócio Sênior | Família e Sucessões",
        experience: "+20 Anos de Experiência",
        bio: "Especialista em planejamento sucessório e resoluções de conflitos familiares complexos.",
        whatsapp: "https://wa.me/5517",
        maps: "#",
        email: "mailto:dnv.advocacia.@gmail.com",
        instagram: "https://www.instagram.com/dnv.advocacia"
    },
    {
        name: "Dr. Renato Sanches Alencar",
        role: "Sócio | Direito Empresarial e Tributário",
        experience: "+15 Anos de Experiência",
        bio: "Consultor estratégico especializado em blindagem patrimonial e estruturação societária.",
        whatsapp: "https://wa.me/5517",
        maps: "#",
        email: "mailto:dnv.advocacia.@gmail.com",
        instagram: "https://www.instagram.com/dnv.advocacia"
    }
];

export default function ContactCards({ imagePath }: ContactCardsProps) {
    return (
        <section className="w-full py-24 px-6 bg-black">
            <div className="max-w-5xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-[#C6A24C] text-sm font-bold tracking-[0.3em] uppercase mb-4">Canais de Atendimento</h2>
                    <h3 className="text-white text-4xl md:text-5xl font-serif italic">Contatos</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {lawyers.map((lawyer, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="group bg-[#0a0a0b] border border-white/10 rounded-[35px] p-5 transition-all hover:border-[#C6A24C]/40"
                        >
                            <div className="relative w-full aspect-[4/5] overflow-hidden rounded-[25px] mb-6">
                                {imagePath?.[index] && (
                                    <img
                                        src={imagePath[index]}
                                        alt={lawyer.name}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
                                    />
                                )}
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0b] via-transparent opacity-60" />
                            </div>

                            <div className="px-2 pb-2">
                                <h4 className="text-white text-2xl font-serif font-bold group-hover:text-[#C6A24C]">{lawyer.name}</h4>
                                <p className="text-[#C6A24C] text-xs font-bold uppercase mb-4">{lawyer.role}</p>
                                <p className="text-slate-400 text-sm mb-8 line-clamp-3">{lawyer.bio}</p>

                                <div className="flex flex-row gap-3">
                                    <a href={lawyer.whatsapp} className="flex-1 py-4 rounded-2xl flex justify-center text-white" style={{ background: "linear-gradient(135deg, #054640 0%, #005d4b 100%)" }}><MessageCircle size={18} /></a>
                                    <a href={lawyer.maps} className="flex-1 py-4 rounded-2xl flex justify-center text-white" style={{ background: "linear-gradient(135deg, #4a80f5 0%, #f18d00 100%)" }}><TbMapPin size={18} /></a>
                                    <a href={lawyer.email} className="flex-1 py-4 rounded-2xl flex justify-center text-white" style={{ background: "linear-gradient(135deg, #012d6e 0%, #0064b0 100%)" }}><FiMail size={18} /></a>
                                    <a href={lawyer.instagram} className="flex-1 py-4 rounded-2xl flex justify-center text-white" style={{ background: "linear-gradient(45deg, #f09433 0%, #bc1888 100%)" }}><IoLogoInstagram size={18} /></a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}