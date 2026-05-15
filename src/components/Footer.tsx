import React from "react";
import { MapPin, Phone, Mail, ExternalLink } from "lucide-react";
import { IoLogoInstagram } from "react-icons/io5";

interface FooterProps {
    logoPath?: string;
}

const links = [
    { name: "Home", href: "#hero" },
    { name: "Sobre Nós", href: "#sobre" },
    { name: "Advogados", href: "#advogados" },
    { name: "Áreas de Atuação", href: "#areas" },
    { name: "Registros", href: "#registros" },
    { name: "Avaliações", href: "#avaliacoes" },
    { name: "Contatos", href: "#contatos" },
    { name: "Associados", href: "#associados" },
];

export default function Footer({ logoPath }: FooterProps) {
    const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        const targetId = href.replace("#", "");
        const elem = document.getElementById(targetId);
        if (elem) {
            window.scrollTo({
                top: elem.offsetTop - 80,
                behavior: "smooth",
            });
        }
    };

    return (
        <footer className="bg-[#0a0a0b] border-t border-white/5 pt-16 pb-8">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

                    <div className="flex flex-col gap-6">
                        {logoPath && (
                            <img
                                src={logoPath}
                                alt="Logo DNV"
                                className="h-12 w-fit object-contain opacity-90"
                            />
                        )}
                        <div className="space-y-2">
                            <h3 className="text-[#C6A24C] font-serif text-lg leading-snug">
                                Dr. Marcus Vinícius <br /> & Dr. Renato Sanches
                            </h3>
                            <p className="text-white/40 text-[10px] uppercase tracking-[0.2em]">
                                Advocacia & Consultoria Sênior
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col gap-6">
                        <h4 className="text-white font-medium text-sm uppercase tracking-widest">Navegação</h4>
                        <nav className="flex flex-col gap-3">
                            {links.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={(e) => scrollToSection(e, link.href)}
                                    className="text-white/50 hover:text-[#C6A24C] text-sm transition-colors duration-300 flex items-center gap-2 group"
                                >
                                    <span className="h-px w-0 bg-[#C6A24C] transition-all duration-300 group-hover:w-3" />
                                    {link.name}
                                </a>
                            ))}
                        </nav>
                    </div>

                    <div className="flex flex-col gap-6">
                        <h4 className="text-white font-medium text-sm uppercase tracking-widest">Contatos</h4>
                        <div className="flex flex-col gap-4">
                            <a 
                                href="https://maps.app.goo.gl/EiGxT8JE4pgAsDJT9" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="flex items-start gap-3 group text-white/60 hover:text-[#C6A24C] transition-colors"
                            >
                                <MapPin size={18} className="text-[#C6A24C] shrink-0 mt-1" />
                                <span className="text-sm leading-relaxed">
                                    Rua SETE, nº 590, Centro.<br /> Santa Fé do Sul - SP
                                </span>
                            </a>
                            <a 
                                href="https://wa.me/5517" 
                                className="flex items-center gap-3 text-white/60 hover:text-[#C6A24C] transition-colors"
                            >
                                <Phone size={18} className="text-[#C6A24C]" />
                                <span className="text-sm">(17) 98119-3467</span>
                            </a>
                            <a 
                                href="https://www.instagram.com/dnv.advocacia" 
                                className="flex items-center gap-3 text-white/60 hover:text-[#C6A24C] transition-colors"
                            >
                                <IoLogoInstagram size={18} className="text-[#C6A24C]" />
                                <span className="text-sm">dnv.advocacia</span>
                            </a>
                            <a 
                                href="mailto:dnv.advocacia.@gmail.com" 
                                className="flex items-center gap-3 text-white/60 hover:text-[#C6A24C] transition-colors"
                            >
                                <Mail size={18} className="text-[#C6A24C]" />
                                <span className="text-sm break-all">dnv.advocacia.@gmail.com</span>
                            </a>
                        </div>
                    </div>

                    <div className="flex flex-col gap-6">
                        <h4 className="text-white font-medium text-sm uppercase tracking-widest">Excelência</h4>
                        <p className="text-white/40 text-sm leading-relaxed italic font-serif">
                            "Compromisso com a integridade, o rigor técnico e a justiça em cada causa defendida."
                        </p>
                        <div className="h-px w-full bg-gradient-to-r from-[#C6A24C]/50 to-transparent" />
                    </div>
                </div>

                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-white/30 text-[11px] tracking-wider uppercase">
                        © {new Date().getFullYear()} DNV Advocacia. Todos os direitos reservados.
                    </p>

                    <div className="flex items-center gap-2 text-white/30 text-[11px] uppercase tracking-wider">
                        <span>Desenvolvido por</span>
                        <a
                            href="https://wa.me/5517"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white/60 hover:text-[#C6A24C] transition-colors flex items-center gap-1 font-bold"
                        >
                            Ícaro Carneiro <ExternalLink size={10} />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}