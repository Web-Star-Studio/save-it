"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

interface MenuItem {
  name: string;
  href: string;
  category: string;
}

export default function CollapsibleMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  const menuItems: MenuItem[] = [
    { name: "Início", href: "#inicio", category: "NAVEGAÇÃO" },
    { name: "Problemas", href: "#problemas", category: "NAVEGAÇÃO" },
    { name: "Soluções", href: "#solucoes", category: "NAVEGAÇÃO" },
    { name: "Credibilidade", href: "#credibilidade", category: "EMPRESA" },
    { name: "Nossa Equipe", href: "#equipe", category: "EMPRESA" },
    { name: "Casos de Sucesso", href: "#casos", category: "EMPRESA" },
    { name: "Certificações", href: "#certificacoes", category: "EMPRESA" },
    { name: "Serviços", href: "#servicos", category: "SERVIÇOS" },
    { name: "Contato", href: "#contato", category: "CONTATO" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = (href: string) => {
    setIsMenuOpen(false);
    
    // Scroll suave com offset para compensar o header fixo
    setTimeout(() => {
      const targetId = href.replace('#', '');
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        const headerHeight = 80; // Altura do header fixo
        const elementPosition = targetElement.offsetTop;
        const offsetPosition = elementPosition - headerHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }, 300); // Delay para permitir que a animação do menu termine
  };

  // Close menu on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  // Scroll detection for header background
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.pageYOffset;
      setIsScrolled(scrollPosition > 50);
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  const groupedItems = menuItems.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {} as Record<string, MenuItem[]>);

  return (
    <>
      {/* Header with Collapsible Menu Button */}
      <motion.header 
        className={`fixed top-0 w-full z-50 py-2 transition-all duration-300 ${
          isMenuOpen 
            ? 'bg-transparent' 
            : isScrolled 
              ? 'bg-slate-900/90 backdrop-blur-md' 
              : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <motion.div 
              className="flex items-center z-50"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              animate={{ opacity: isMenuOpen ? 0 : 1 }}
            >
              <div className="flex items-center gap-4">
                <Link href="/" className="cursor-pointer">
                  <Image
                    src="/logo-full.png"
                    alt="SAVE - Inteligência Tributária"
                    width={200}
                    height={70}
                    className="h-12 w-auto object-contain"
                    priority
                  />
                </Link>
              </div>
            </motion.div>

            {/* Innovative Menu Button */}
            <motion.button
              onClick={toggleMenu}
              className="relative w-16 h-16 flex flex-col justify-center items-center focus:outline-none group z-50"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Animated Menu Icon */}
              <motion.div
                className="relative w-8 h-6 flex flex-col justify-between"
                animate={isMenuOpen ? "open" : "closed"}
              >
                <motion.span
                  className={`w-full h-0.5 origin-left transition-colors duration-300 ${isMenuOpen ? 'bg-amber-400' : 'bg-white'}`}
                  variants={{
                    closed: { rotate: 0, y: 0 },
                    open: { rotate: 45, y: 5 }
                  }}
                  transition={{ duration: 0.3 }}
                />
                <motion.span
                  className={`w-full h-0.5 transition-colors duration-300 ${isMenuOpen ? 'bg-amber-400' : 'bg-white'}`}
                  variants={{
                    closed: { opacity: 1 },
                    open: { opacity: 0 }
                  }}
                  transition={{ duration: 0.3 }}
                />
                <motion.span
                  className={`w-full h-0.5 origin-left transition-colors duration-300 ${isMenuOpen ? 'bg-amber-400' : 'bg-white'}`}
                  variants={{
                    closed: { rotate: 0, y: 0 },
                    open: { rotate: -45, y: -5 }
                  }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>

              {/* Menu Label */}
              <motion.span 
                className={`absolute -bottom-2 text-xs font-light tracking-widest transition-colors duration-300 ${isMenuOpen ? 'text-amber-400' : 'text-white'}`}
                animate={{ opacity: isMenuOpen ? 0 : 1 }}
                transition={{ duration: 0.3 }}
              >
                MENU
              </motion.span>
            </motion.button>
          </div>
        </div>
      </motion.header>

      {/* Full Screen Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-black"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            {/* Background Pattern */}
            <motion.div
              className="absolute inset-0 opacity-5"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
            />

            {/* Menu Content */}
            <div className="relative h-full flex">
              {/* Left Side - Navigation */}
              <motion.div
                className="flex-1 flex flex-col justify-center pl-8 lg:pl-16"
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -100, opacity: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
              >
                {Object.entries(groupedItems).map(([category, items], categoryIndex) => (
                  <motion.div
                    key={category}
                    className="mb-12"
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ 
                      duration: 0.5, 
                      delay: 0.2 + categoryIndex * 0.1,
                      ease: "easeOut" 
                    }}
                  >
                    {/* Category Label */}
                    <motion.h3 
                      className="text-amber-400 text-xs font-bold tracking-widest mb-6 uppercase"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.4 + categoryIndex * 0.1 }}
                    >
                      {category}
                    </motion.h3>

                    {/* Menu Items */}
                    <div className="space-y-4">
                      {items.map((item, itemIndex) => {
                        const globalIndex = categoryIndex * 10 + itemIndex;
                        return (
                          <motion.a
                            key={item.name}
                            href={item.href}
                            onClick={(e) => {
                              e.preventDefault();
                              handleLinkClick(item.href);
                            }}
                            onMouseEnter={() => setHoveredIndex(globalIndex)}
                            onMouseLeave={() => setHoveredIndex(null)}
                            className="block group cursor-pointer"
                            initial={{ x: -30, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ 
                              duration: 0.4, 
                              delay: 0.3 + categoryIndex * 0.1 + itemIndex * 0.05,
                              ease: "easeOut" 
                            }}
                          >
                            <motion.div
                              className="relative overflow-hidden"
                              whileHover={{ x: 20 }}
                              transition={{ duration: 0.3, ease: "easeOut" }}
                            >
                              <motion.span
                                className="text-3xl lg:text-5xl xl:text-6xl font-light text-white leading-none block"
                                animate={{
                                  color: hoveredIndex === globalIndex ? "#fbbf24" : "#ffffff"
                                }}
                                transition={{ duration: 0.3 }}
                              >
                                {item.name}
                              </motion.span>
                              
                              {/* Hover Line */}
                              <motion.div
                                className="absolute bottom-0 left-0 h-0.5 bg-amber-400"
                                initial={{ width: 0 }}
                                animate={{ 
                                  width: hoveredIndex === globalIndex ? "100%" : "0%" 
                                }}
                                transition={{ duration: 0.3, ease: "easeInOut" }}
                              />
                            </motion.div>
                          </motion.a>
                        );
                      })}
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Right Side - Contact Info & Social */}
              <motion.div
                className="hidden lg:flex flex-col justify-between w-80 p-16 border-l border-gray-800"
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: 100, opacity: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
              >
                {/* Contact Info */}
                <motion.div
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                >
                  <h4 className="text-amber-400 text-xs font-bold tracking-widest mb-6 uppercase">
                    Contato
                  </h4>
                  <div className="space-y-4 text-white">
                    <p className="text-sm">
                      <span className="text-gray-400 block">Email</span>
                      contato@saveinteligencia.com.br
                    </p>
                    <p className="text-sm">
                      <span className="text-gray-400 block">Telefone</span>
                      0800 591 9519
                    </p>
                    <p className="text-sm">
                      <span className="text-gray-400 block">Endereço</span>
                      Benvenutti Business Center<br />
                      R. 700, 489 - Centro<br />
                      Balneário Camboriú - SC, 88330-620
                    </p>
                  </div>
                </motion.div>

                {/* Social Links */}
                <motion.div
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.7, duration: 0.5 }}
                >
                  <h4 className="text-amber-400 text-xs font-bold tracking-widest mb-6 uppercase">
                    Siga-nos
                  </h4>
                  <div className="space-y-3">
                    <motion.a
                      href="https://br.linkedin.com/company/save-inteligencia-tributaria"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-white text-sm hover:text-amber-400 transition-colors duration-300"
                      whileHover={{ x: 10 }}
                      transition={{ duration: 0.3 }}
                    >
                      LinkedIn
                    </motion.a>
                    <motion.a
                      href="https://instagram.com/saveinteligenciatributaria"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-white text-sm hover:text-amber-400 transition-colors duration-300"
                      whileHover={{ x: 10 }}
                      transition={{ duration: 0.3 }}
                    >
                      Instagram
                    </motion.a>
                    <motion.a
                      href="#"
                      className="block text-white text-sm hover:text-amber-400 transition-colors duration-300"
                      whileHover={{ x: 10 }}
                      transition={{ duration: 0.3 }}
                    >
                      YouTube
                    </motion.a>
                  </div>
                </motion.div>

                {/* CTA Button */}
                <motion.div
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.9, duration: 0.5 }}
                >
                  <motion.button
                    className="w-full bg-gradient-to-r from-amber-400 to-yellow-500 text-black py-4 px-6 text-sm font-medium tracking-wide hover:from-amber-500 hover:to-yellow-600 transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    FALE CONOSCO
                  </motion.button>
                </motion.div>
              </motion.div>
            </div>

            {/* Close indicator */}
            <motion.div
              className="absolute bottom-8 left-8 text-gray-400 text-xs tracking-widest"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              PRESSIONE ESC PARA FECHAR
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
} 