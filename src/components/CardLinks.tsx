import { motion } from "framer-motion";
import { ExternalLink, BookOpenText } from "lucide-react";

interface LinkCardProps {
  backgroundImage?: string;
  links?: {
    title: string;
    description: string;
    icon: React.ReactNode;
    href: string;
    isDownload?: boolean;
  }[];
}

const defaultBg = {  
  backgroundImage: "./src/assets/biblioteca.jpg"
}

const defaultLinks = [
  {
    title: "Contrato de Gaveta e as Fraudes",
    description: "Entenda os riscos jurídicos e como se proteger em transações imobiliárias informais.",
    icon: <BookOpenText className="w-8 h-8" />,
    href: "/files/contrato-gaveta.pdf",
    isDownload: true,
  },
  {
    title: "União Estável e Reflexos Modernos",
    description: "Análise sobre direitos e deveres na configuração familiar contemporânea.",
    icon: <BookOpenText className="w-8 h-8" />,
    href: "/artigos/uniao-estavel",
  },
];

export default function CardLinks({ links = defaultLinks, backgroundImage = defaultBg.backgroundImage }: LinkCardProps) {
  return (
    <section className="relative w-full py-24 px-4 overflow-hidden bg-black">
      <div className="absolute inset-0 z-0">
        {backgroundImage && (
          <img 
            src={backgroundImage} 
            alt="Background" 
            className="w-full h-full object-cover opacity-100" 
          />
        )}
        <div 
          className="absolute inset-0" 
          style={{ background: "linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.1) 0%, rgba(0,0,0,1) 100%)" }}
        />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto">
        <header className="text-center mb-16">
          <h2 className="text-[#C6A24C] text-sm font-bold tracking-[0.3em] uppercase mb-4">Recursos e Artigos</h2>
          <h3 className="text-white text-4xl md:text-5xl font-serif font-bold italic">Links e Documentos</h3>
          <div className="w-24 h-1 bg-[#C6A24C] mx-auto mt-6 opacity-50 rounded-full" />
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {links.map((link, index) => (
            <motion.a
              key={index}
              href={link.href}
              target={link.isDownload ? "_self" : "_blank"}
              download={link.isDownload}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-6 bg-[#0a0a0b]/80 backdrop-blur-md border border-white/10 p-6 md:p-8 rounded-[30px] group hover:border-[#C6A24C]/40"
            >
              <div className="text-[#C6A24C] bg-white/5 p-4 rounded-2xl">{link.icon}</div>
              <div className="flex flex-col">
                <h3 className="text-white text-xl font-bold font-serif group-hover:text-[#C6A24C]">{link.title}</h3>
                <p className="text-slate-400 text-sm">{link.description}</p>
              </div>
              <div className="ml-auto opacity-0 group-hover:opacity-100 text-[#C6A24C]"><ExternalLink size={18} /></div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}