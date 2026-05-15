import { motion } from "framer-motion";
import { ExternalLink, BookOpenText } from "lucide-react";

interface LinkCardProps {
  backgroundImage?: string; // Prop para a URL da imagem
  links?: {
    title: string;
    description: string;
    icon: React.ReactNode;
    href: string;
    isDownload?: boolean;
  }[];
}

const defaultLinks = [
  {
    title: "Contrato de Gaveta e as Fraudes",
    description: "Entenda os riscos jurídicos e como se proteger em transações imobiliárias informais.",
    icon: <BookOpenText className="w-8 h-8" />,
    href: "/files/contrato-gaveta.pdf",
    target:"_blank",
    isDownload: true,
  },
  {
    title: "União Estável e Reflexos Modernos",
    description: "Análise sobre direitos e deveres na configuração familiar contemporânea.",
    icon: <BookOpenText className="w-8 h-8" />,
    href: "/artigos/uniao-estavel",
    target:"_blank",
  },
  // ... outros links
];

export default function CardLinks({ 
  links = defaultLinks, 
  backgroundImage = "./src/assets/biblioteca.jpg" // Defina sua imagem padrão aqui
}: LinkCardProps) {
  return (
    <section className="relative w-full py-24 px-4 overflow-hidden">
      {/* 1. Imagem de Fundo */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
      
      {/* 2. Overlay de Gradiente para escurecer a imagem e dar profundidade */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/90 via-black/70 to-[#C6A24C]/30" />

      <div className="relative z-20 max-w-7xl mx-auto">
        <header className="text-center mb-16">
          <h2 className="text-[#C6A24C] text-4xl md:text-5xl font-serif font-bold mb-4 italic">
            Links e Documentos
          </h2>
          <div className="w-24 h-1 bg-[#C6A24C] mx-auto opacity-50 rounded-full" />
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {links.map((link, index) => (
            <motion.a
              key={index}
              href={link.href}
              target={link.isDownload ? "_self" : "_blank"}
              download={link.isDownload}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, backgroundColor: "rgba(0, 0, 0, 0.6)" }}
              className="flex items-center gap-6 bg-black/50 backdrop-blur-md border border-[#C6A24C]/30 p-6 md:p-8 rounded-[30px] transition-all duration-300 group"
            >
              <div className="text-[#C6A24C] group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                {link.icon}
              </div>

              <div className="flex flex-col">
                <h3 className="text-[#C6A24C] text-xl font-bold font-serif group-hover:underline">
                  {link.title}
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed italic mt-1">
                  {link.description}
                </p>
              </div>

              <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity text-[#C6A24C]">
                <ExternalLink size={18} />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}