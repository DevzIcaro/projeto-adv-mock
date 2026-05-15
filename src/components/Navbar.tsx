import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

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

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Trava o scroll do corpo da página quando o menu está aberto
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
    }, [isOpen]);

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
        setIsOpen(false);
    };

    return (
        <header 
            className={cn(
                "fixed top-0 left-0 w-full z-[150] transition-all duration-500",
                // Removemos o blur do header quando o menu abre para evitar bugs visuais
                isOpen ? "bg-transparent" : (scrolled 
                    ? "bg-black/90 backdrop-blur-md border-b border-white/10 py-3" 
                    : "bg-gradient-to-b from-black/95 to-transparent py-5")
            )}
        >
            <div className="container mx-auto px-6 flex items-center justify-between">
                {/* Logo */}
                <a href="#hero" onClick={(e) => scrollToSection(e, "#hero")} className="relative z-[201]">
                    <img 
                        src="./src/assets/logo.png" 
                        alt="Logo" 
                        className="h-10 md:h-12 w-auto object-contain transition-transform hover:scale-105"
                    />
                </a>

                {/* Desktop Nav */}
                <nav className="hidden lg:flex items-center gap-8">
                    {links.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={(e) => scrollToSection(e, link.href)}
                            className="text-white/70 hover:text-[#C6A24C] text-sm font-medium uppercase tracking-widest transition-colors duration-300"
                        >
                            {link.name}
                        </a>
                    ))}
                </nav>

                {/* Botão Hamburger */}
                <button 
                    className="lg:hidden relative z-[201] text-white p-2"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* ELEMENTOS DE MENU FORA DO CONTAINER PARA EVITAR CLIPPING */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Overlay: fixed inset-0 garante que cubra a viewport toda */}
                        <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            className="fixed inset-0 bg-black/98 backdrop-blur-xl z-[190] h-[100dvh] w-screen"
                        />
                        
                        {/* Menu Lateral */}
                        <motion.div 
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "tween", duration: 0.4, ease: "easeOut" }}
                            className="fixed top-0 right-0 h-[100dvh] w-[85%] max-w-[320px] bg-[#0a0a0b] border-l border-white/10 z-[200] p-10 flex flex-col shadow-2xl"
                        >
                            <div className="flex flex-col gap-8 pt-24">
                                {links.map((link) => (
                                    <a
                                        key={link.name}
                                        href={link.href}
                                        onClick={(e) => scrollToSection(e, link.href)}
                                        className="text-white text-2xl font-serif italic border-b border-white/5 pb-2 hover:text-[#C6A24C] transition-colors"
                                    >
                                        {link.name}
                                    </a>
                                ))}
                            </div>
                            
                            <div className="mt-auto pb-6">
                                <p className="text-[#C6A24C] text-xs uppercase tracking-[0.3em] font-bold">
                                    Natanael Vicente & Rufatto
                                </p>
                                <p className="text-white/20 text-[10px] uppercase mt-1">
                                    DNV Advocacia
                                </p>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </header>
    );
}