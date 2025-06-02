"use client";

import Image from "next/image";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef, useState } from "react";
import CollapsibleMenu from "./components/CollapsibleMenu";

// Custom hook for scroll-triggered animations
function useScrollAnimation() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  return { ref, isInView };
}

// Hero Section adaptado para Save Inteligência Tributária
function HeroSection() {
  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          poster="/alex-caceres-4WJZd1MrA10-unsplash.jpg"
        >
          <source src="/Vídeo_Hero_Financeiro_Gerado.mp4" type="video/mp4" />
          {/* Fallback para browsers que não suportam vídeo */}
          <Image
            src="/alex-caceres-4WJZd1MrA10-unsplash.jpg"
            alt="Business Professional Environment"
            fill
            className="object-cover"
            priority
          />
        </video>
        <div className="absolute inset-0 bg-slate-900/50"></div>
      </div>

      {/* Social Media Icons */}
      <div className="absolute left-6 top-1/2 transform -translate-y-1/2 z-20 hidden lg:block">
        <div className="flex flex-col space-y-6">
          {[
            { icon: "M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.162-1.499-.69-2.436-2.878-2.436-4.632 0-3.78 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z", name: "Instagram" },
            { icon: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z", name: "LinkedIn" },
            { icon: "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z", name: "YouTube" }
          ].map((social, index) => (
            <motion.a 
              key={social.name}
              href="#" 
              className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center text-white hover:text-amber-400 hover:border-amber-400 transition-all duration-300 backdrop-blur-sm"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d={social.icon} />
              </svg>
            </motion.a>
          ))}
        </div>
      </div>

      {/* Content Principal */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 h-full">
        <div className="flex items-center h-full pt-20">
          <div className="max-w-3xl">
            <motion.h1 
              className="text-white leading-tight mb-8 font-playfair"
              style={{ fontSize: '4.5rem', fontWeight: '700', lineHeight: '1.1', letterSpacing: '-0.02em' }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Maximize seus{" "}
              <span className="font-orbitron font-black bg-gradient-to-r from-amber-300 via-amber-400 to-yellow-500 bg-clip-text text-transparent inline-block transform hover:scale-105 transition-transform duration-300">
                lucros
              </span>
              <br />
              pagando{" "}
              <span className="relative inline-block">
                <span className="font-inter font-light italic text-amber-400">o mínimo</span>
                <motion.div
                  className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 1, delay: 0.5 }}
                />
              </span>
              {" "}de impostos
            </motion.h1>
            
            <motion.p 
              className="text-white/90 text-xl mb-12 font-inter font-light leading-relaxed tracking-wide"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="text-amber-300 font-medium">Auditoria tributária especializada</span> para transformar seu negócio
              <br />
              <span className="text-gray-300 text-lg mt-2 block">
                Recupere tributos pagos indevidamente e otimize sua carga fiscal
              </span>
            </motion.p>

            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {[
                { text: "AUDITORIA TRIBUTÁRIA", href: "#auditoria"},
                { text: "PLANEJAMENTO FISCAL", href: "#planejamento"},
                { text: "FALE CONOSCO", href: "#contato"}
              ].map((item, index) => (
                <motion.div 
                  key={item.text}
                  className="group cursor-pointer"
                  whileHover={{ x: 15 }}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                >
                  <div className="flex items-center">
                    <div className="flex-1">
                      <a 
                        href={item.href}
                        className="block"
                      >
                        <div className="text-white font-orbitron text-sm font-bold tracking-widest group-hover:text-amber-400 transition-colors duration-300 mb-1">
                          {item.text}
                        </div>
                      </a>
                    </div>
                    <motion.svg 
                      className="ml-4 w-5 h-5 text-white group-hover:text-amber-400 transition-colors duration-300" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                      whileHover={{ x: 8 }}
                      transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7l5 5-5 5M6 12h12" />
                    </motion.svg>
                  </div>
                  
                  {/* Hover line effect */}
                  <motion.div
                    className="h-px bg-gradient-to-r from-amber-400 to-transparent mt-2"
                    initial={{ width: 0 }}
                    whileHover={{ width: '80%' }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      <motion.div
        className="absolute right-8 top-1/2 transform -translate-y-1/2 rotate-90 hidden lg:block z-20"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <div className="text-white font-light text-lg tracking-[0.5em] opacity-75 hover:opacity-100 transition-opacity duration-300">
          BRASIL
        </div>
      </motion.div>
    </section>
  );
}

// Seção Problemas - A Carga Tributária Brasileira
function ProblemsSection() {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/95 to-slate-900/90 z-10"></div>
      
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{
          backgroundImage: "url('data:image/svg+xml,%3Csvg width=\"100\" height=\"100\" viewBox=\"0 0 100 100\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cpath d=\"M20 20h60v60H20z\" fill=\"%23334155\" opacity=\"0.1\"/%3E%3C/svg%3E')"
        }}
      ></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Statistics Cards */}
          <motion.div
            ref={ref}
            className="grid grid-cols-2 gap-4 h-[500px]"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            {/* Large Blue Card - 36% PIB */}
            <motion.div
              className="bg-blue-600 text-white p-8 rounded-lg flex flex-col justify-center row-span-2"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="text-4xl lg:text-5xl font-bold mb-2">
                36%
              </div>
              <div className="text-lg font-semibold tracking-wider">
                DO PIB EM IMPOSTOS
              </div>
            </motion.div>

            {/* White Card - 153 dias */}
            <motion.div
              className="bg-white text-slate-900 p-6 rounded-lg flex flex-col justify-center"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="text-3xl lg:text-4xl font-bold mb-2">
                153 +
              </div>
              <div className="text-sm font-semibold tracking-wider">
                DIAS TRABALHANDO
              </div>
            </motion.div>

            {/* Dark Card - 72% games */}
            <motion.div
              className="bg-slate-800 text-white p-6 rounded-lg flex flex-col justify-center"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="text-3xl lg:text-4xl font-bold mb-2">
                72%
              </div>
              <div className="text-sm font-semibold tracking-wider">
                IMPOSTOS EM GAMES
              </div>
            </motion.div>

            {/* Light Blue Card - 68% eletrônicos */}
            <motion.div
              className="bg-blue-300 text-slate-900 p-6 rounded-lg flex flex-col justify-center col-span-2"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="text-3xl lg:text-4xl font-bold mb-2">
                68%
              </div>
              <div className="text-sm font-semibold tracking-wider">
                IMPOSTOS EM ELETRÔNICOS
              </div>
            </motion.div>
          </motion.div>

          {/* Right side - Text content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {/* Statistics title with outline effect */}
            <div className="space-y-4">
              <h2 
                className="text-6xl lg:text-7xl font-bold tracking-wider"
                style={{
                  WebkitTextStroke: '2px #ffffff',
                  WebkitTextFillColor: 'transparent',
                  color: 'transparent'
                }}
              >
                ESTATÍSTICAS
              </h2>
              
              <h3 className="text-3xl lg:text-4xl font-bold text-white">
                Carga Tributária do Brasil em Números
              </h3>
            </div>

            <p className="text-lg text-gray-300 leading-relaxed">
              Com a vasta complexidade tributária brasileira e a expertise necessária, 
              navegue com confiança pelo cenário fiscal brasileiro, seja para 
              otimizar sua carga tributária, regularizar pendências ou 
              implementar um planejamento tributário eficiente.
            </p>

            <motion.button
              className="bg-white text-slate-900 px-8 py-3 rounded font-semibold tracking-wider hover:bg-gray-100 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              SOBRE NÓS
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Seção Soluções - Como Funciona
function SolutionsSection() {
  const { ref, isInView } = useScrollAnimation();

  const solutions = [
    {
      title: "PIS/COFINS",
      items: [
        "Reclassificação fiscal estratégica para revenda",
        "Ressarcimento sobre insumos utilizados",
        "Exclusão da própria base de cálculo"
      ],
      example: "R$ 32.000,00 mensais de economia potencial",
      color: "from-amber-400 to-amber-600"
    },
    {
      title: "INSS Patronal", 
      items: [
        "Exclusão de verbas indenizatórias",
        "Impugnação ao Sistema S",
        "Limitação ao cálculo de 20 salários mínimos"
      ],
      example: "R$ 20.000,00 mensais de restituição",
      color: "from-amber-500 to-yellow-500"
    },
    {
      title: "ICMS",
      items: [
        "Ressarcimento do ICMS-ST",
        "Exclusão da base de outros tributos",
        "Regime especial com benefícios fiscais"
      ],
      example: "R$ 16.650,00 de crédito apurado",
      color: "from-yellow-400 to-amber-500"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            A Solução: Save Inteligência Tributária
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Com nossa expertise em auditoria tributária, identificamos oportunidades de economia 
            e recuperação de créditos tributários através de análise minuciosa.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              className="bg-gray-50 rounded-lg p-8 hover:shadow-lg transition-shadow"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className={`text-2xl font-bold bg-gradient-to-r ${solution.color} bg-clip-text text-transparent mb-6`}>
                {solution.title}
              </div>
              
              <ul className="space-y-3 mb-6">
                {solution.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start">
                    <svg className="w-5 h-5 text-amber-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              
              <div className="bg-white p-4 rounded border-l-4 border-amber-400">
                <div className="text-sm text-gray-600 mb-1">Exemplo de economia:</div>
                <div className="font-semibold text-slate-900">{solution.example}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
// Seção Credibilidade
function CredibilitySection() {
  const { ref, isInView } = useScrollAnimation();

  const cases = [
    {
      company: "Magazine Luiza",
      value: "R$ 250 milhões",
      description: "Vitória em ação judicial sobre ICMS",
      icon: "🏆"
    },
    {
      company: "Hering",
      value: "R$ 279,4 milhões", 
      description: "Sucesso para excluir ICMS sobre PIS/COFINS",
      icon: "⚖️"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-slate-900 mb-6">
            Credibilidade: Grandes Empresas Confiam na Auditoria Tributária
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Todas as grandes empresas utilizam a auditoria tributária como uma ferramenta 
            estratégica de gestão e potencialização dos lucros.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {cases.map((case_, index) => (
            <motion.div
              key={case_.company}
              className="bg-gradient-to-br from-amber-50 to-yellow-50 p-8 rounded-lg border border-amber-200"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="text-4xl mb-4">{case_.icon}</div>
              <div className="text-2xl font-bold text-slate-900 mb-2">{case_.company}</div>
              <div className="text-3xl font-bold text-amber-600 mb-2">{case_.value}</div>
              <div className="text-gray-600">{case_.description}</div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center bg-slate-900 text-white p-8 rounded-lg"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <p className="text-xl font-semibold text-amber-400">
            Este é o momento de ouro para sua empresa buscar a recuperação de tributos 
            e garantir um diferencial competitivo!
          </p>
        </motion.div>
      </div>
    </section>
  );
}

// Seção Nossa Equipe
function TeamSection() {
  const { ref, isInView } = useScrollAnimation();
  const [currentSlide, setCurrentSlide] = useState(0);

  const teamMembers = [
    {
      name: "Dr. Carlos Silva",
      quote: "Com a SAVE, a confiança leva ao sucesso.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      description: "Fazer parte da SAVE me ajudou a crescer minha confiança, tanto profissionalmente quanto pessoalmente.",
      link: "#"
    },
    {
      name: "Dra. Ana Santos",
      quote: "Na SAVE, transformei incerteza em oportunidade.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b1e5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      description: "Antes da SAVE, eu estava no meio do nada - não apenas profissionalmente, mas em termos de saber onde queria ir na vida.",
      link: "#"
    },
    {
      name: "Dr. Rafael Costa",
      quote: "Posso contar com a SAVE para me apoiar.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      description: "Mais de uma vez, a família SAVE me mostrou que posso contar com eles.",
      link: "#"
    },
    {
      name: "Dra. Marina Oliveira",
      quote: "A SAVE ensina as habilidades que mantêm clientes voltando.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      description: "Ser um agente da SAVE é emocionante. Não há monotonia, você está sempre aprendendo habilidades diversas.",
      link: "#"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.ceil(teamMembers.length / 4));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + Math.ceil(teamMembers.length / 4)) % Math.ceil(teamMembers.length / 4));
  };

  return (
    <section className="py-20 bg-slate-900 relative overflow-hidden">
      {/* Background Text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <h2 className="text-[200px] lg:text-[300px] font-bold text-slate-800/20 select-none">
          SOBRE
        </h2>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Header with Navigation */}
        <div className="flex justify-between items-start mb-12">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl lg:text-6xl font-light text-white mb-6">
              Nossa Equipe
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl">
              A família SAVE é uma das maiores e mais solidárias 
              da indústria. Encontre seu lugar entre os melhores.
            </p>
          </motion.div>

          {/* Navigation Arrows */}
          <div className="hidden lg:flex space-x-4">
            <button
              onClick={prevSlide}
              className="w-12 h-12 border border-gray-600 text-white hover:bg-white hover:text-slate-900 transition-all duration-300 flex items-center justify-center"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextSlide}
              className="w-12 h-12 border border-gray-600 text-white hover:bg-white hover:text-slate-900 transition-all duration-300 flex items-center justify-center"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Team Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              className="bg-gray-100 flex overflow-hidden group cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              {/* Image Side */}
              <div className="w-1/2 relative overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={400}
                  height={500}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Content Side */}
              <div className="w-1/2 p-8 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl lg:text-3xl font-light text-slate-900 mb-4 leading-tight">
                    "{member.quote}"
                  </h3>
                  <p className="text-gray-700 text-sm leading-relaxed mb-6">
                    {member.description}
                  </p>
                </div>

                <div>
                  <div className="mb-4">
                    <h4 className="text-lg font-semibold text-slate-900 mb-1">
                      {member.name}
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Especialista em Consultoria Tributária
                    </p>
                  </div>
                  <a 
                    href={member.link}
                    className="text-slate-900 text-sm font-medium hover:text-amber-600 transition-colors duration-300 inline-flex items-center"
                  >
                    Leia mais
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
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

// Seção Casos de Sucesso Visual
function SuccessCasesSection() {
  const { ref, isInView } = useScrollAnimation();

  const cases = [
    {
      title: "Recuperação ICMS",
      company: "Indústria Alimentícia",
      value: "R$ 2,3 milhões",
      image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      result: "Crédito recuperado em 8 meses"
    },
    {
      title: "Exclusão PIS/COFINS",
      company: "Rede de Varejo",
      value: "R$ 1,8 milhões",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      result: "Economia mensal de R$ 150k"
    },
    {
      title: "INSS Patronal",
      company: "Empresa de Tecnologia", 
      value: "R$ 950 mil",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      result: "Restituição completa obtida"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-slate-900 mb-6">
            Casos de Sucesso Recentes
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Resultados concretos que transformaram a realidade tributária 
            de nossos clientes em diferentes segmentos.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {cases.map((case_, index) => (
            <motion.div
              key={case_.title}
              className="group relative overflow-hidden rounded-lg bg-white shadow-lg hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={case_.image}
                  alt={case_.title}
                  width={800}
                  height={400}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 to-transparent"></div>
                <div className="absolute top-4 right-4">
                  <span className="bg-amber-400 text-slate-900 px-3 py-1 rounded-full text-sm font-bold">
                    {case_.value}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-2">{case_.title}</h3>
                <p className="text-gray-600 mb-2">{case_.company}</p>
                <p className="text-amber-600 font-semibold text-sm">{case_.result}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <button className="bg-amber-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-amber-700 transition-colors">
            Ver Mais Casos de Sucesso
          </button>
        </motion.div>
      </div>
    </section>
  );
}

// Seção Certificações e Parcerias
function CertificationsSection() {
  const { ref, isInView } = useScrollAnimation();

  const certifications = [
    {
      name: "CRC - Conselho Regional de Contabilidade",
      logo: "https://images.unsplash.com/photo-1606868306217-dbf5046868d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      type: "Certificação Profissional"
    },
    {
      name: "OAB - Ordem dos Advogados do Brasil",
      logo: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      type: "Registro Profissional"
    },
    {
      name: "FENACON",
      logo: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      type: "Associação Nacional"
    },
    {
      name: "CARF - Conselho Administrativo",
      logo: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      type: "Especialização"
    },
    {
      name: "Receita Federal",
      logo: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      type: "Credenciamento"
    },
    {
      name: "IBPT - Instituto Brasileiro",
      logo: "https://images.unsplash.com/photo-1572021335469-31706a17aaef?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      type: "Pesquisa Tributária"
    }
  ];

  return (
    <section className="py-20 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold mb-6">
            Certificações e Credenciamentos
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Nossa excelência é reconhecida pelos principais órgãos reguladores 
            e entidades do setor tributário no Brasil.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.name}
              className="group flex flex-col items-center text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="relative w-20 h-20 mb-4 rounded-lg overflow-hidden bg-white/10 flex items-center justify-center group-hover:bg-amber-400/20 transition-colors duration-300">
                <Image
                  src={cert.logo}
                  alt={cert.name}
                  width={60}
                  height={60}
                  className="w-12 h-12 object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>
              <h3 className="font-semibold text-sm mb-1 group-hover:text-amber-400 transition-colors duration-300">
                {cert.name}
              </h3>
              <p className="text-xs text-gray-400">{cert.type}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="bg-amber-600/10 border border-amber-600/30 rounded-lg p-6 max-w-2xl mx-auto">
            <p className="text-amber-400 font-semibold">
              ✓ Mais de 50 profissionais certificados
            </p>
            <p className="text-gray-300 text-sm mt-2">
              Equipe multidisciplinar com especializações em todas as áreas do direito tributário
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}


// Seção Serviços Visuais
function ServicesGallerySection() {
  const { ref, isInView } = useScrollAnimation();

  const services = [
    {
      title: "Auditoria Tributária",
      description: "Análise completa dos tributos pagos nos últimos 5 anos",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      benefits: ["Identificação de pagamentos indevidos", "Cálculo de créditos", "Documentação completa"]
    },
    {
      title: "Planejamento Fiscal",
      description: "Estratégias legais para redução da carga tributária",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      benefits: ["Análise de cenários", "Otimização tributária", "Compliance garantido"]
    },
    {
      title: "Recuperação de Créditos",
      description: "Restituição de valores pagos indevidamente ao fisco",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      benefits: ["Processos administrativos", "Ações judiciais", "Acompanhamento total"]
    },
    {
      title: "Contencioso Tributário",
      description: "Defesa em fiscalizações e processos administrativos",
      image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      benefits: ["Defesa especializada", "Recursos cabíveis", "Negociação com fisco"]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-amber-50 to-yellow-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-slate-900 mb-6">
            Nossos Serviços Especializados
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Soluções completas em consultoria tributária para empresas 
            de todos os portes e segmentos.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="group bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="flex flex-col lg:flex-row">
                <div className="lg:w-1/2 relative h-64 lg:h-auto">
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={600}
                    height={400}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-slate-900/50 to-transparent"></div>
                </div>
                
                <div className="lg:w-1/2 p-8">
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-2">
                    {service.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center">
                        <svg className="w-5 h-5 text-amber-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Seção CTA Final
function FinalCTASection() {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section className="py-20 bg-gradient-to-br from-amber-600 to-yellow-600 text-white">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold mb-8">
            Tome Decisões Conscientes com Inteligência Tributária!
          </h2>
          
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Chegou a hora de otimizar sua carga tributária e impulsionar seus resultados. 
            Entre em contato agora com um de nossos consultores!
          </p>
          
          <div className="space-y-4">
            <button className="bg-white text-amber-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors mr-4">
              Falar com Consultor
            </button>
            <div className="text-lg">
              <p>📱 Instagram: @saveinteligenciatributaria</p>
              <p>🌐 Website: saveinteligenciatributaria.com.br</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Footer
function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="mb-6">
              <h1 className="text-4xl font-black font-orbitron tracking-widest bg-gradient-to-r from-amber-300 via-amber-400 to-yellow-500 bg-clip-text text-transparent drop-shadow-lg filter"
                  style={{ 
                    textShadow: '0 0 20px rgba(251, 191, 36, 0.5), 0 0 40px rgba(251, 191, 36, 0.3)',
                    filter: 'drop-shadow(0 0 10px rgba(251, 191, 36, 0.4))'
                  }}>
                SAVE
              </h1>
              <p className="text-white text-base font-normal tracking-wide mt-1">
                Inteligência Tributária
              </p>
            </div>
            
            <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
              Consultoria especializada em otimização tributária, oferecendo soluções 
              estratégicas para empresas que buscam excelência em gestão fiscal.
            </p>
            
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-gray-700 rounded flex items-center justify-center hover:bg-amber-600 cursor-pointer transition-colors">
                <span className="text-sm">📧</span>
              </div>
              <div className="w-10 h-10 bg-gray-700 rounded flex items-center justify-center hover:bg-amber-600 cursor-pointer transition-colors">
                <span className="text-sm">📱</span>
              </div>
              <div className="w-10 h-10 bg-gray-700 rounded flex items-center justify-center hover:bg-amber-600 cursor-pointer transition-colors">
                <span className="text-sm">💼</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Nossos Serviços</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Auditoria Tributária</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Planejamento Fiscal</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Compliance</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Consultoria PIS/COFINS</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Contato</h3>
            <div className="space-y-3 text-gray-300">
              <p>📍 São Paulo, SP - Brasil</p>
              <p>📞 +55 11 3000-0000</p>
              <p>✉️ contato@saveinteligencia.com.br</p>
              <p>🕒 Seg-Sex: 8h às 18h</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
          <p>© 2024 Save Inteligência Tributária. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}

// Main Component
export default function Home() {
  return (
    <main className="min-h-screen">
      <CollapsibleMenu />
      <HeroSection />
      <ProblemsSection />
      <SolutionsSection />
      <CredibilitySection />
      <TeamSection />
      <SuccessCasesSection />
      <CertificationsSection />
      <ServicesGallerySection />
      <FinalCTASection />
      <Footer />
    </main>
  );
}
