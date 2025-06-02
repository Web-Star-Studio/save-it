"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef, useState } from "react";
import CollapsibleMenu from "./components/CollapsibleMenu";
import TaxCalculatorSection from "./components/TaxCalculator";

// Custom hook for scroll-triggered animations
function useScrollAnimation() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  return { ref, isInView };
}

// Hero Section adaptado para Save Inteligência Tributária - MOBILE RESPONSIVE
function HeroSection() {
  return (
    <section id="inicio" className="relative h-screen overflow-hidden">
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
          <source src="/Vídeo_Hero_para_Site_Financeiro.mp4" type="video/mp4" />
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

      {/* Social Media Icons - Hidden on mobile */}
      <div className="absolute left-6 top-1/2 transform -translate-y-1/2 z-20 hidden lg:block">
        <div className="flex flex-col space-y-6">
          {[
            { icon: "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z", name: "YouTube" },
            { icon: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z", name: "LinkedIn" }
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

      {/* Content Principal - MOBILE RESPONSIVE */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex items-center h-full pt-16 sm:pt-20">
          <div className="max-w-full lg:max-w-3xl">
            <motion.h1 
              className="text-white leading-tight mb-6 sm:mb-8 font-inter text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold"
              style={{ lineHeight: '1.1', letterSpacing: '-0.03em' }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Maximize seus{" "}
              <span className="font-inter font-bold bg-gradient-to-r from-amber-300 via-amber-400 to-yellow-500 bg-clip-text text-transparent inline-block transform hover:scale-105 transition-transform duration-300">
                lucros
              </span>
              <br />
              pagando{" "}
              <span className="relative inline-block">
                <span className="font-inter font-normal italic text-amber-400">o mínimo</span>
                <motion.div
                  className="absolute -bottom-1 sm:-bottom-2 left-0 h-0.5 sm:h-1 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 1, delay: 0.5 }}
                />
              </span>
              {" "}de impostos
            </motion.h1>
            
            <motion.p 
              className="text-white/90 text-base sm:text-lg lg:text-xl mb-8 sm:mb-12 font-inter font-normal leading-relaxed tracking-normal px-0 sm:px-0"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="text-amber-300 font-semibold">Auditoria tributária especializada</span> para transformar seu negócio
              <br className="hidden sm:block" />
              <span className="text-gray-300 text-sm sm:text-base lg:text-lg mt-1 sm:mt-2 block font-light">
                Recupere tributos pagos indevidamente e otimize sua carga fiscal
              </span>
            </motion.p>

            <motion.div
              className="space-y-4 sm:space-y-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {[
                { text: "NOSSOS SERVIÇOS", href: "#servicos"},
                { text: "SOLUÇÕES TRIBUTÁRIAS", href: "#solucoes"},
                { text: "FALE CONOSCO", href: "#contato"}
              ].map((item, index) => (
                <motion.div 
                  key={item.text}
                  className="group cursor-pointer"
                  whileHover={{ x: 10 }}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                >
                  <div className="flex items-center">
                    <div className="flex-1">
                      <Link 
                        href={item.href}
                        className="block"
                      >
                        <div className="text-white font-inter text-xs sm:text-sm font-medium tracking-wider group-hover:text-amber-400 transition-colors duration-300 mb-1">
                          {item.text}
                        </div>
                      </Link>
                    </div>
                    <motion.svg 
                      className="ml-4 w-4 h-4 sm:w-5 sm:h-5 text-white group-hover:text-amber-400 transition-colors duration-300" 
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

      {/* Right side text - Hidden on mobile */}
      <motion.div
        className="absolute right-8 top-1/2 transform -translate-y-1/2 rotate-90 hidden lg:block z-20"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <div className="text-white font-inter font-normal text-base tracking-[0.4em] opacity-70 hover:opacity-100 transition-opacity duration-300">
          BRASIL
        </div>
      </motion.div>
    </section>
  );
}

// Seção Problemas - MOBILE RESPONSIVE
function ProblemsSection() {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section id="problemas" className="py-12 sm:py-16 lg:py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/95 to-slate-900/90 z-10"></div>
      
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{
          backgroundImage: "url('data:image/svg+xml,%3Csvg width=\"100\" height=\"100\" viewBox=\"0 0 100 100\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cpath d=\"M20 20h60v60H20z\" fill=\"%23334155\" opacity=\"0.1\"/%3E%3C/svg%3E')"
        }}
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left side - Statistics Cards - MOBILE RESPONSIVE */}
          <motion.div
            ref={ref}
            className="grid grid-cols-2 gap-3 sm:gap-4 h-auto lg:h-[500px] order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Large Blue Card - 36% PIB */}
            <motion.div
              className="bg-blue-600 text-white p-4 sm:p-6 lg:p-8 rounded-lg flex flex-col justify-center row-span-2 cursor-pointer min-h-[160px] sm:min-h-[200px]"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 10px 25px rgba(37, 99, 235, 0.3)",
                y: -3
              }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.div 
                className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-2"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                36%
              </motion.div>
              <div className="text-sm sm:text-base lg:text-lg font-semibold tracking-wider">
                DO PIB EM IMPOSTOS
              </div>
            </motion.div>

            {/* White Card - 153 dias */}
            <motion.div
              className="bg-white text-slate-900 p-3 sm:p-4 lg:p-6 rounded-lg flex flex-col justify-center cursor-pointer min-h-[75px] sm:min-h-[95px]"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 8px 20px rgba(0, 0, 0, 0.1)",
                y: -2
              }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.div 
                className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold mb-1 sm:mb-2"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                153 +
              </motion.div>
              <div className="text-xs sm:text-sm font-semibold tracking-wider">
                DIAS TRABALHANDO
              </div>
            </motion.div>

            {/* Dark Card - 72% games */}
            <motion.div
              className="bg-slate-800 text-white p-3 sm:p-4 lg:p-6 rounded-lg flex flex-col justify-center cursor-pointer min-h-[75px] sm:min-h-[95px]"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 8px 20px rgba(30, 41, 59, 0.4)",
                y: -2
              }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.div 
                className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold mb-1 sm:mb-2"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                72%
              </motion.div>
              <div className="text-xs sm:text-sm font-semibold tracking-wider">
                IMPOSTOS EM GAMES
              </div>
            </motion.div>

            {/* Light Blue Card - 68% eletrônicos */}
            <motion.div
              className="bg-blue-300 text-slate-900 p-3 sm:p-4 lg:p-6 rounded-lg flex flex-col justify-center col-span-2 cursor-pointer min-h-[75px] sm:min-h-[95px]"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 8px 20px rgba(147, 197, 253, 0.3)",
                y: -2
              }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.div 
                className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold mb-1 sm:mb-2"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                68%
              </motion.div>
              <div className="text-xs sm:text-sm font-semibold tracking-wider">
                IMPOSTOS EM ELETRÔNICOS
              </div>
            </motion.div>
          </motion.div>

          {/* Right side - Text content - MOBILE RESPONSIVE */}
          <motion.div
            className="space-y-6 sm:space-y-8 order-1 lg:order-2"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            {/* Statistics title with outline effect */}
            <motion.div 
              className="space-y-3 sm:space-y-4"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <motion.h2 
                className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-wider"
                style={{
                  WebkitTextStroke: '1px #ffffff',
                  WebkitTextFillColor: 'transparent',
                  color: 'transparent'
                }}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                ESTATÍSTICAS
              </motion.h2>
              
              <motion.h3 
                className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-white"
                whileHover={{ x: 10 }}
                transition={{ duration: 0.3 }}
              >
                Carga Tributária do Brasil em Números
              </motion.h3>
            </motion.div>

            <motion.p 
              className="text-base lg:text-lg text-gray-300 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.7 }}
              whileHover={{ scale: 1.01 }}
            >
              Com a vasta complexidade tributária brasileira e a expertise necessária, 
              navegue com confiança pelo cenário fiscal brasileiro, seja para 
              otimizar sua carga tributária, regularizar pendências ou 
              implementar um planejamento tributário eficiente.
            </motion.p>

            <motion.button
              className="bg-white text-slate-900 px-6 sm:px-8 py-2 sm:py-3 rounded font-semibold tracking-wider hover:bg-gray-100 transition-colors text-sm sm:text-base"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.9 }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 25px rgba(255, 255, 255, 0.2)",
                y: -2
              }}
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

// Seção Soluções - MOBILE RESPONSIVE
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
      bgColor: "bg-gradient-to-br from-slate-700 to-slate-800"
    },
    {
      title: "INSS Patronal", 
      items: [
        "Exclusão de verbas indenizatórias",
        "Impugnação ao Sistema S",
        "Limitação ao cálculo de 20 salários mínimos"
      ],
      example: "R$ 20.000,00 mensais de restituição",
      bgColor: "bg-gradient-to-br from-gray-700 to-gray-800"
    },
    {
      title: "ICMS",
      items: [
        "Ressarcimento do ICMS-ST",
        "Exclusão da base de outros tributos",
        "Regime especial com benefícios fiscais"
      ],
      example: "R$ 16.650,00 de crédito apurado",
      bgColor: "bg-gradient-to-br from-slate-600 to-slate-700"
    }
  ];

  return (
    <section id="solucoes" className="py-12 sm:py-16 lg:py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Background Text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <motion.h2 
          className="text-[120px] sm:text-[150px] lg:text-[200px] xl:text-[300px] font-bold text-slate-800/15 select-none"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          SOLUÇÕES
        </motion.h2>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left side - Text content - MOBILE RESPONSIVE */}
          <motion.div
            ref={ref}
            className="space-y-6 sm:space-y-8 order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Solutions title with outline effect */}
            <motion.div 
              className="space-y-3 sm:space-y-4"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <motion.h2 
                className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-wide font-inter"
                style={{
                  WebkitTextStroke: '1px #ffffff',
                  WebkitTextFillColor: 'transparent',
                  color: 'transparent'
                }}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                A SOLUÇÃO
              </motion.h2>
              
              <motion.h3 
                className="text-xl sm:text-2xl lg:text-3xl font-bold text-white font-inter"
                whileHover={{ x: 10 }}
                transition={{ duration: 0.3 }}
              >
                Save Inteligência Tributária
              </motion.h3>
            </motion.div>

            <motion.p 
              className="text-base lg:text-lg text-gray-300 leading-relaxed font-inter"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              whileHover={{ scale: 1.01 }}
            >
              Com nossa expertise em auditoria tributária, identificamos oportunidades de economia 
              e recuperação de créditos tributários através de análise minuciosa da sua empresa.
            </motion.p>

            <motion.button
              className="bg-white text-slate-900 px-6 sm:px-8 py-2 sm:py-3 rounded font-medium tracking-wide hover:bg-gray-100 transition-colors font-inter text-sm sm:text-base"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.7 }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 25px rgba(255, 255, 255, 0.2)",
                y: -2
              }}
              whileTap={{ scale: 0.95 }}
            >
              FALE CONOSCO
            </motion.button>
          </motion.div>

          {/* Right side - Solution Cards - MOBILE RESPONSIVE */}
          <motion.div
            className="grid gap-4 sm:gap-6 order-1 lg:order-2"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            {solutions.map((solution, index) => (
              <motion.div
                key={solution.title}
                className={`${solution.bgColor} text-white p-4 sm:p-6 lg:p-8 rounded-lg relative overflow-hidden border border-gray-600 hover:border-gray-500 transition-all duration-300 cursor-pointer`}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                whileHover={{ 
                  y: -4,
                  scale: 1.02,
                  boxShadow: "0 15px 30px rgba(0, 0, 0, 0.3)"
                }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Subtle background pattern */}
                <motion.div 
                  className="absolute inset-0 opacity-10"
                  whileHover={{ opacity: 15 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="absolute top-0 right-0 w-16 sm:w-24 h-16 sm:h-24 bg-white/10 rounded-full -translate-y-8 sm:-translate-y-12 translate-x-8 sm:translate-x-12"></div>
                </motion.div>
                
                <div className="relative z-10">
                  <motion.div 
                    className="flex items-center justify-between mb-4 sm:mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
                  >
                    <motion.h4 
                      className="text-lg sm:text-xl font-bold font-inter tracking-wide"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                    >
                      {solution.title}
                    </motion.h4>
                    <motion.div 
                      className="w-8 h-8 sm:w-10 sm:h-10 rounded bg-white/15 flex items-center justify-center"
                      whileHover={{ 
                        scale: 1.1,
                        rotate: 360,
                        backgroundColor: "rgba(255, 255, 255, 0.25)"
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </motion.div>
                  </motion.div>
                  
                  <motion.ul 
                    className="space-y-2 sm:space-y-3 mb-4 sm:mb-6"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.6, delay: index * 0.1 + 0.4 }}
                  >
                    {solution.items.map((item, itemIndex) => (
                      <motion.li 
                        key={itemIndex} 
                        className="flex items-start group"
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.4, delay: index * 0.1 + itemIndex * 0.05 + 0.5 }}
                        whileHover={{ x: 5 }}
                      >
                        <motion.svg 
                          className="w-3 h-3 sm:w-4 sm:h-4 mr-2 sm:mr-3 mt-1 flex-shrink-0 text-gray-300"
                          fill="currentColor" 
                          viewBox="0 0 20 20"
                          whileHover={{ scale: 1.2, rotate: 360 }}
                          transition={{ duration: 0.3 }}
                        >
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </motion.svg>
                        <span className="text-gray-200 font-inter text-xs sm:text-sm group-hover:text-white transition-colors duration-200">{item}</span>
                      </motion.li>
                    ))}
                  </motion.ul>
                  
                  <motion.div 
                    className="bg-white/10 backdrop-blur-sm p-3 sm:p-4 rounded border-l-2 border-gray-400"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: index * 0.1 + 0.7 }}
                    whileHover={{ 
                      backgroundColor: "rgba(255, 255, 255, 0.15)",
                      borderColor: "#fbbf24"
                    }}
                  >
                    <motion.div 
                      className="text-xs text-gray-300 mb-1 font-inter uppercase tracking-wide"
                      whileHover={{ color: "#fbbf24" }}
                    >
                      Exemplo de economia
                    </motion.div>
                    <motion.div 
                      className="font-bold text-white text-sm sm:text-base font-inter"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                    >
                      {solution.example}
                    </motion.div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Bottom Statistics - MOBILE RESPONSIVE */}
        <motion.div
          className="mt-12 sm:mt-16 lg:mt-20 pt-8 sm:pt-12 border-t border-gray-700"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
        >
          <motion.div 
            className="text-center mb-6 sm:mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 1 }}
          >
            <motion.h4 
              className="text-lg sm:text-xl font-bold text-white mb-2 font-inter"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              Resultados Comprovados
            </motion.h4>
            <motion.p 
              className="text-gray-400 font-inter text-sm sm:text-base"
              whileHover={{ color: "#d1d5db" }}
              transition={{ duration: 0.3 }}
            >
              Economia mensal estimada para empresa que fatura R$ 1.000.000,00
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 text-center">
            {[
              { value: "R$ 68.650", label: "economia mensal total", period: "Por mês" },
              { value: "R$ 823.800", label: "acumulado anual", period: "12 meses" },
              { value: "8,2%", label: "do faturamento", period: "Margem extra" }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="bg-gray-800 border border-gray-700 p-4 sm:p-6 rounded cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                whileHover={{ 
                  scale: 1.05,
                  borderColor: "#6b7280",
                  boxShadow: "0 10px 25px rgba(0, 0, 0, 0.2)",
                  y: -3
                }}
                whileTap={{ scale: 0.98 }}
              >
                <motion.div 
                  className="text-xl sm:text-2xl font-bold text-white mb-2 font-inter"
                  whileHover={{ scale: 1.1, color: "#fbbf24" }}
                  transition={{ duration: 0.2 }}
                >
                  {stat.value}
                </motion.div>
                <motion.div 
                  className="text-white font-medium mb-1 font-inter text-xs sm:text-sm"
                  whileHover={{ scale: 1.05 }}
                >
                  {stat.label}
                </motion.div>
                <motion.div 
                  className="text-gray-400 text-xs font-inter"
                  whileHover={{ color: "#9ca3af" }}
                >
                  {stat.period}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Seção Credibilidade - MOBILE RESPONSIVE
function CredibilitySection() {
  const { ref, isInView } = useScrollAnimation();

  const cases = [
    {
      company: "Magazine Luiza",
      value: "R$ 250 milhões",
      description: "Vitória em ação judicial sobre ICMS",
      bgColor: "bg-gradient-to-br from-slate-700 to-slate-800",
      category: "ICMS"
    },
    {
      company: "Hering",
      value: "R$ 279,4 milhões", 
      description: "Sucesso para excluir ICMS sobre PIS/COFINS",
      bgColor: "bg-gradient-to-br from-gray-700 to-gray-800",
      category: "PIS/COFINS"
    }
  ];

  return (
    <section id="credibilidade" className="py-12 sm:py-16 lg:py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Background Text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <h2 className="text-[100px] sm:text-[120px] lg:text-[150px] xl:text-[250px] font-bold text-slate-800/15 select-none">
          CREDIBILIDADE
        </h2>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left side - Case Studies Cards - MOBILE RESPONSIVE */}
          <motion.div
            ref={ref}
            className="space-y-6 sm:space-y-8 order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            {cases.map((case_, index) => (
              <motion.div
                key={case_.company}
                className={`${case_.bgColor} p-4 sm:p-6 lg:p-8 rounded-lg relative overflow-hidden border border-gray-600 hover:border-gray-500 transition-all duration-300`}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -2 }}
              >
                {/* Subtle background pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-0 right-0 w-16 sm:w-24 h-16 sm:h-24 bg-white/10 rounded-full -translate-y-8 sm:-translate-y-12 translate-x-8 sm:translate-x-12"></div>
                </div>

                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-4 sm:mb-6">
                    <div className="w-8 h-8 sm:w-12 sm:h-12 bg-white/10 rounded-lg flex items-center justify-center">
                      <svg className="w-4 h-4 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div className="bg-white/15 px-2 sm:px-3 py-1 rounded">
                      <span className="text-xs font-inter font-medium tracking-wide text-gray-200">
                        {case_.category}
                      </span>
                    </div>
                  </div>

                  {/* Company */}
                  <div className="mb-4 sm:mb-6">
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 font-inter">
                      {case_.company}
                    </h3>
                    <p className="text-gray-300 font-inter text-sm">
                      {case_.description}
                    </p>
                  </div>

                  {/* Value */}
                  <div className="bg-white/10 backdrop-blur-sm p-3 sm:p-4 rounded border-l-2 border-gray-400">
                    <div className="text-xs text-gray-300 mb-1 font-inter uppercase tracking-wide">
                      Valor recuperado
                    </div>
                    <div className="text-lg sm:text-xl font-bold text-white font-inter">
                      {case_.value}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Right side - Text content - MOBILE RESPONSIVE */}
          <motion.div
            className="space-y-6 sm:space-y-8 order-1 lg:order-2"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {/* Title with outline effect */}
            <div className="space-y-3 sm:space-y-4">
              <h2 
                className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-wide font-inter"
                style={{
                  WebkitTextStroke: '1px #ffffff',
                  WebkitTextFillColor: 'transparent',
                  color: 'transparent'
                }}
              >
                CREDIBILIDADE
              </h2>
              
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white font-inter leading-tight">
                Grandes Empresas Confiam na Auditoria Tributária
              </h3>
            </div>

            <p className="text-base lg:text-lg text-gray-300 leading-relaxed font-inter">
              Todas as grandes empresas utilizam a auditoria tributária como uma ferramenta 
              estratégica de gestão e potencialização dos lucros.
            </p>

            {/* Statistics */}
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              <motion.div
                className="bg-gray-800 border border-gray-700 p-4 sm:p-6 rounded text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <div className="text-xl sm:text-2xl font-bold text-white mb-2 font-inter">
                  R$ 529M+
                </div>
                <div className="text-gray-400 text-xs sm:text-sm font-inter">
                  Valor total recuperado
                </div>
              </motion.div>

              <motion.div
                className="bg-gray-800 border border-gray-700 p-4 sm:p-6 rounded text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                <div className="text-xl sm:text-2xl font-bold text-white mb-2 font-inter">
                  100%
                </div>
                <div className="text-gray-400 text-xs sm:text-sm font-inter">
                  Taxa de sucesso
                </div>
              </motion.div>
            </div>

            {/* Call to action */}
            <motion.div
              className="bg-gray-800 border border-gray-700 rounded p-4 sm:p-6"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <p className="text-white font-medium text-sm sm:text-base mb-3 font-inter">
                Momento estratégico para recuperação de tributos
              </p>
              <p className="text-gray-400 text-xs sm:text-sm font-inter">
                Garanta vantagem competitiva através de auditoria tributária especializada
              </p>
            </motion.div>

            <motion.button
              className="bg-white text-slate-900 px-6 sm:px-8 py-2 sm:py-3 rounded font-medium tracking-wide hover:bg-gray-100 transition-colors font-inter text-sm sm:text-base"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 1.2 }}
            >
              FALE CONOSCO
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Seção Nossa Equipe - MOBILE RESPONSIVE
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
      image: "/Gemini_Generated_Image_8h7ee8h7ee8h7ee8.png",
      description: "Antes da SAVE, eu estava no meio do nada - não apenas profissionalmente, mas em termos de saber onde queria ir na vida.",
      link: "#"
    },
    {
      name: "Dr. Rafael Costa",
      quote: "Posso contar com a SAVE para me apoiar.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      description: "Mais de uma vez, a família SAVE me mostrou que posso contar com eles.",
      link: "#"
    },
    {
      name: "Dra. Marina Oliveira",
      quote: "A SAVE ensina as habilidades que mantêm clientes voltando.",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
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
    <section id="equipe" className="py-12 sm:py-16 lg:py-20 bg-slate-900 relative overflow-hidden">
      {/* Background Text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <motion.h2 
          className="text-[120px] sm:text-[150px] lg:text-[200px] xl:text-[300px] font-bold text-slate-800/20 select-none"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          SOBRE
        </motion.h2>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header with Navigation */}
        <div className="flex flex-col lg:flex-row justify-between items-start mb-8 sm:mb-12">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h2 
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-light text-white mb-4 sm:mb-6"
              whileHover={{ scale: 1.02, x: 10 }}
              transition={{ duration: 0.3 }}
            >
              Nossa Equipe
            </motion.h2>
            <motion.p 
              className="text-base lg:text-lg text-gray-300 max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ scale: 1.01 }}
            >
              A família SAVE é uma das maiores e mais solidárias 
              da indústria. Encontre seu lugar entre os melhores.
            </motion.p>
          </motion.div>

          {/* Navigation Arrows - Hidden on mobile */}
          <motion.div 
            className="hidden lg:flex space-x-4 mt-4 lg:mt-0"
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <motion.button
              onClick={prevSlide}
              className="w-12 h-12 border border-gray-600 text-white hover:bg-white hover:text-slate-900 transition-all duration-300 flex items-center justify-center"
              whileHover={{ 
                scale: 1.1,
                boxShadow: "0 5px 15px rgba(255, 255, 255, 0.2)"
              }}
              whileTap={{ scale: 0.9 }}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </motion.button>
            <motion.button
              onClick={nextSlide}
              className="w-12 h-12 border border-gray-600 text-white hover:bg-white hover:text-slate-900 transition-all duration-300 flex items-center justify-center"
              whileHover={{ 
                scale: 1.1,
                boxShadow: "0 5px 15px rgba(255, 255, 255, 0.2)"
              }}
              whileTap={{ scale: 0.9 }}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </motion.button>
          </motion.div>
        </div>

        {/* Team Cards Grid - MOBILE RESPONSIVE */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              className="bg-gray-100 flex flex-col sm:flex-row overflow-hidden group cursor-pointer rounded-lg"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 15px 30px rgba(0, 0, 0, 0.15)"
              }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Image Side */}
              <motion.div 
                className="w-full sm:w-1/2 h-64 sm:h-auto relative overflow-hidden"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.5 }}
              >
                <Image
                  src={member.image}
                  alt={member.name}
                  width={400}
                  height={500}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                />
              </motion.div>

              {/* Content Side */}
              <motion.div 
                className="w-full sm:w-1/2 p-4 sm:p-6 lg:p-8 flex flex-col justify-between"
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
              >
                <div>
                  <motion.h3 
                    className="text-xl sm:text-2xl lg:text-3xl font-light text-slate-900 mb-3 sm:mb-4 leading-tight"
                    whileHover={{ scale: 1.02, color: "#0f172a" }}
                    transition={{ duration: 0.2 }}
                  >
                    "{member.quote}"
                  </motion.h3>
                  <motion.p 
                    className="text-gray-700 text-sm leading-relaxed mb-4 sm:mb-6"
                    whileHover={{ color: "#374151" }}
                    transition={{ duration: 0.3 }}
                  >
                    {member.description}
                  </motion.p>
                </div>

                <div>
                  <motion.div 
                    className="mb-4"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <motion.h4 
                      className="text-base sm:text-lg font-semibold text-slate-900 mb-1"
                      whileHover={{ scale: 1.05 }}
                    >
                      {member.name}
                    </motion.h4>
                    <motion.p 
                      className="text-gray-600 text-xs sm:text-sm"
                      whileHover={{ color: "#4b5563" }}
                    >
                      Especialista em Consultoria Tributária
                    </motion.p>
                  </motion.div>
                  <motion.a 
                    href={member.link}
                    className="text-slate-900 text-sm font-medium hover:text-amber-600 transition-colors duration-300 inline-flex items-center"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    Leia mais
                    <motion.svg 
                      className="w-4 h-4 sm:w-5 sm:h-5 ml-2" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                      whileHover={{ x: 3 }}
                      transition={{ duration: 0.2 }}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </motion.svg>
                  </motion.a>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Seção Casos de Sucesso Visual - MOBILE RESPONSIVE
function SuccessCasesSection() {
  const { ref, isInView } = useScrollAnimation();

  const cases = [
    {
      title: "Recuperação ICMS",
      company: "Indústria Alimentícia",
      value: "R$ 2,3 milhões",
      image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      result: "Crédito recuperado em 8 meses",
      category: "ICMS"
    },
    {
      title: "Exclusão PIS/COFINS",
      company: "Rede de Varejo",
      value: "R$ 1,8 milhões",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      result: "Economia mensal de R$ 150k",
      category: "PIS/COFINS"
    },
    {
      title: "INSS Patronal",
      company: "Empresa de Tecnologia", 
      value: "R$ 950 mil",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      result: "Restituição completa obtida",
      category: "INSS"
    }
  ];

  return (
    <section id="casos" className="py-12 sm:py-16 lg:py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Background Text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <motion.h2 
          className="text-[100px] sm:text-[120px] lg:text-[150px] xl:text-[250px] font-bold text-slate-800/15 select-none"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          CASES
        </motion.h2>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h2 
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 font-inter"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            Casos de Sucesso Recentes
          </motion.h2>
          <motion.p 
            className="text-base lg:text-lg text-gray-300 max-w-4xl mx-auto font-inter"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            whileHover={{ scale: 1.01 }}
          >
            Resultados concretos que transformaram a realidade tributária 
            de nossos clientes em diferentes segmentos.
          </motion.p>
        </motion.div>

        <div className="space-y-6 sm:space-y-8">
          {cases.map((case_, index) => (
            <motion.div
              key={case_.title}
              className="bg-white flex flex-col lg:flex-row overflow-hidden group cursor-pointer rounded-lg"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 15px 30px rgba(0, 0, 0, 0.2)"
              }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Image Side - MOBILE RESPONSIVE */}
              <motion.div 
                className="w-full lg:w-2/5 h-64 lg:h-auto relative overflow-hidden order-1 lg:order-1"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.5 }}
              >
                <Image
                  src={case_.image}
                  alt={case_.title}
                  width={800}
                  height={500}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-slate-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                />
                
                {/* Category Badge */}
                <motion.div 
                  className="absolute top-4 sm:top-6 left-4 sm:left-6"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: index * 0.2 + 0.3 }}
                  whileHover={{ scale: 1.1 }}
                >
                  <span className="bg-amber-400 text-slate-900 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium font-inter">
                    {case_.category}
                  </span>
                </motion.div>

                {/* Value Badge */}
                <motion.div 
                  className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: index * 0.2 + 0.5 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <span className="bg-slate-900/90 backdrop-blur-sm text-white px-3 sm:px-4 py-1 sm:py-2 rounded text-base sm:text-lg font-bold font-inter">
                    {case_.value}
                  </span>
                </motion.div>
              </motion.div>
              
              {/* Content Side - MOBILE RESPONSIVE */}
              <motion.div 
                className="w-full lg:w-3/5 p-6 sm:p-8 lg:p-12 flex flex-col justify-center order-2 lg:order-2"
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
              >
                <div className="space-y-4 sm:space-y-6">
                  <motion.h3 
                    className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 font-inter leading-tight"
                    whileHover={{ scale: 1.02, color: "#0f172a" }}
                    transition={{ duration: 0.2 }}
                  >
                    {case_.title}
                  </motion.h3>
                  
                  <motion.div 
                    className="space-y-2"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <motion.p 
                      className="text-lg sm:text-xl text-gray-600 font-medium font-inter"
                      whileHover={{ color: "#374151" }}
                    >
                      {case_.company}
                    </motion.p>
                    <motion.div 
                      className="flex items-center text-gray-500"
                      whileHover={{ color: "#6b7280" }}
                    >
                      <motion.svg 
                        className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                        whileHover={{ scale: 1.2, rotate: 360 }}
                        transition={{ duration: 0.3 }}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </motion.svg>
                      <span className="font-inter text-sm sm:text-base">{case_.result}</span>
                    </motion.div>
                  </motion.div>

                  <motion.div 
                    className="pt-2 sm:pt-4"
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: index * 0.2 + 0.7 }}
                  >
                    <motion.div 
                      className="inline-flex items-center text-slate-900 font-medium font-inter group-hover:text-amber-600 transition-colors duration-300 text-sm sm:text-base"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      Ver detalhes do caso
                      <motion.svg 
                        className="w-4 h-4 sm:w-5 sm:h-5 ml-2" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                        whileHover={{ x: 3 }}
                        transition={{ duration: 0.2 }}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </motion.svg>
                    </motion.div>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-12 sm:mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <motion.button 
            className="bg-white text-slate-900 px-6 sm:px-8 py-2 sm:py-3 rounded font-medium hover:bg-gray-100 transition-colors font-inter text-sm sm:text-base"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 10px 25px rgba(255, 255, 255, 0.2)",
              y: -2
            }}
            whileTap={{ scale: 0.95 }}
          >
            Ver Mais Casos de Sucesso
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}

// Seção Certificações e Parcerias - MOBILE RESPONSIVE
function CertificationsSection() {
  const { ref, isInView } = useScrollAnimation();

  const certifications = [
    {
      name: "CRC - Conselho Regional de Contabilidade",
      logo: "https://images.unsplash.com/photo-1606868306217-dbf5046868d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      coverImage: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      type: "Certificação Profissional",
      description: "Registro ativo junto ao Conselho Regional de Contabilidade"
    },
    {
      name: "OAB - Ordem dos Advogados do Brasil",
      logo: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      coverImage: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      type: "Registro Profissional",
      description: "Habilitação para exercício da advocacia tributária"
    },
    {
      name: "FENACON",
      logo: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      coverImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      type: "Associação Nacional",
      description: "Federação Nacional das Empresas de Serviços Contábeis"
    },
    {
      name: "CARF - Conselho Administrativo",
      logo: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      coverImage: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      type: "Especialização",
      description: "Atuação em processos administrativos fiscais"
    },
    {
      name: "Receita Federal",
      logo: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      coverImage: "https://images.unsplash.com/photo-1572021335469-31706a17aaef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      type: "Credenciamento",
      description: "Habilitação para representação perante a RFB"
    },
    {
      name: "IBPT - Instituto Brasileiro",
      logo: "https://images.unsplash.com/photo-1572021335469-31706a17aaef?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      coverImage: "https://images.unsplash.com/photo-1606868306217-dbf5046868d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      type: "Pesquisa Tributária",
      description: "Parceria para estudos e pesquisas tributárias"
    }
  ];

  return (
    <section id="certificacoes" className="py-12 sm:py-16 lg:py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Background Text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <motion.h2 
          className="text-[80px] sm:text-[100px] lg:text-[120px] xl:text-[200px] font-bold text-slate-800/15 select-none"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          CREDENCIAIS
        </motion.h2>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h2 
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 font-inter"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            Certificações e Credenciamentos
          </motion.h2>
          <motion.p 
            className="text-base lg:text-lg text-gray-300 max-w-4xl mx-auto font-inter"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            whileHover={{ scale: 1.01 }}
          >
            Nossa excelência é reconhecida pelos principais órgãos reguladores 
            e entidades do setor tributário no Brasil.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.name}
              className="bg-white rounded-lg overflow-hidden group cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
              whileHover={{ 
                scale: 1.03,
                boxShadow: "0 15px 30px rgba(0, 0, 0, 0.15)",
                y: -5
              }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Cover Image Section - Full Width */}
              <motion.div 
                className="relative h-32 sm:h-40 overflow-hidden"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.5 }}
              >
                {/* Background Cover Image */}
                <Image
                  src={cert.coverImage}
                  alt={`${cert.name} cover`}
                  width={800}
                  height={320}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Overlay gradiente */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-slate-900/60 via-slate-900/40 to-slate-900/70 opacity-80 group-hover:opacity-90 transition-opacity duration-300"
                  initial={{ opacity: 0.8 }}
                  whileHover={{ opacity: 0.9 }}
                />

                {/* Type Badge no canto superior direito */}
                <motion.div 
                  className="absolute top-3 sm:top-4 right-3 sm:right-4"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: index * 0.1 + 0.3 }}
                  whileHover={{ scale: 1.1 }}
                >
                  <span className="bg-amber-400 text-slate-900 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium font-inter shadow-lg">
                    {cert.type}
                  </span>
                </motion.div>

                {/* Verification Badge no canto inferior esquerdo */}
                <motion.div 
                  className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 flex items-center"
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: index * 0.1 + 0.5 }}
                  whileHover={{ scale: 1.05, x: 2 }}
                >
                  <motion.div 
                    className="w-2 h-2 sm:w-3 sm:h-3 bg-green-400 rounded-full mr-2 shadow-lg"
                    whileHover={{ scale: 1.3 }}
                    transition={{ duration: 0.2 }}
                  />
                  <span className="text-xs text-white font-bold font-inter bg-black/30 backdrop-blur-sm px-2 py-1 rounded">
                    ATIVO
                  </span>
                </motion.div>
              </motion.div>
              
              {/* Content Section */}
              <motion.div 
                className="p-4 sm:p-6"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
              >
                <motion.h3 
                  className="font-bold text-lg sm:text-xl mb-2 sm:mb-3 text-slate-900 transition-colors duration-300 group-hover:text-slate-800 font-inter leading-tight"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  {cert.name}
                </motion.h3>
                
                <motion.p 
                  className="text-gray-600 text-sm font-inter leading-relaxed mb-3 sm:mb-4"
                  whileHover={{ color: "#374151" }}
                  transition={{ duration: 0.3 }}
                >
                  {cert.description}
                </motion.p>

                {/* Action link */}
                <motion.div 
                  className="flex items-center justify-between pt-2 border-t border-gray-100"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.4, delay: index * 0.1 + 0.7 }}
                >
                  <motion.div 
                    className="text-xs sm:text-sm text-gray-500 font-inter"
                    whileHover={{ color: "#6b7280" }}
                  >
                    Credencial verificada
                  </motion.div>
                  <motion.div 
                    className="inline-flex items-center text-slate-900 font-medium font-inter group-hover:text-amber-600 transition-colors duration-300"
                    whileHover={{ x: 3 }}
                    transition={{ duration: 0.2 }}
                  >
                    <span className="text-xs sm:text-sm">Ver detalhes</span>
                    <motion.svg 
                      className="w-3 h-3 sm:w-4 sm:h-4 ml-1" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                      whileHover={{ x: 2 }}
                      transition={{ duration: 0.2 }}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </motion.svg>
                  </motion.div>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Statistics - MOBILE RESPONSIVE */}
        <motion.div
          className="text-center mt-12 sm:mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <motion.div 
            className="bg-gray-800 border border-gray-700 rounded-lg p-6 sm:p-8 max-w-4xl mx-auto"
            whileHover={{ 
              borderColor: "#6b7280",
              boxShadow: "0 10px 25px rgba(0, 0, 0, 0.2)"
            }}
            transition={{ duration: 0.3 }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 text-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <motion.p 
                  className="text-white font-semibold text-lg sm:text-xl mb-2 font-inter"
                  whileHover={{ color: "#fbbf24" }}
                >
                  50+ Profissionais Certificados
                </motion.p>
                <motion.p 
                  className="text-gray-400 text-sm font-inter"
                  whileHover={{ color: "#d1d5db" }}
                >
                  Equipe especializada e credenciada
                </motion.p>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <motion.p 
                  className="text-white font-semibold text-lg sm:text-xl mb-2 font-inter"
                  whileHover={{ color: "#fbbf24" }}
                >
                  15+ Anos de Experiência
                </motion.p>
                <motion.p 
                  className="text-gray-400 text-sm font-inter"
                  whileHover={{ color: "#d1d5db" }}
                >
                  Expertise consolidada no mercado
                </motion.p>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// Seção Galeria de Serviços - MOBILE RESPONSIVE
function ServicesGallerySection() {
  const { ref, isInView } = useScrollAnimation();

  const services = [
    {
      title: "Auditoria PIS/COFINS",
      description: "Análise completa para exclusão do ICMS da base de cálculo e identificação de créditos não aproveitados.",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Federal",
      items: ["Exclusão ICMS", "Créditos presumidos", "Regime especial", "Restituição"]
    },
    {
      title: "Recuperação de ICMS",
      description: "Identificação e recuperação de créditos de ICMS em operações interestaduais e substituição tributária.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Estadual",
      items: ["ST pago a maior", "Diferencial de alíquota", "Crédito presumido", "Devolução"]
    },
    {
      title: "INSS sobre GNRE",
      description: "Auditoria em recolhimentos via GNRE e identificação de valores pagos indevidamente.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Previdenciário",
      items: ["GNRE indevida", "Obras públicas", "Terceirização", "Compensação"]
    },
    {
      title: "ISS Regressivo",
      description: "Análise de enquadramento e aplicação de alíquotas progressivas do ISS conforme legislação municipal.",
      image: "https://images.unsplash.com/photo-1572021335469-31706a17aaef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Municipal",
      items: ["Alíquota reduzida", "Enquadramento", "Base de cálculo", "Isenções"]
    },
    {
      title: "Simples Nacional",
      description: "Otimização tributária e análise de enquadramento para empresas do Simples Nacional.",
      image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Regime Especial",
      items: ["Sublimites", "Atividades", "Anexos", "Exclusão indevida"]
    },
    {
      title: "Defesa Tributária",
      description: "Representação em processos administrativos e judiciais para defesa dos interesses tributários.",
      image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Contencioso",
      items: ["Auto de infração", "Recursos", "Mandado segurança", "Execução fiscal"]
    }
  ];

  return (
    <section id="servicos" className="py-12 sm:py-16 lg:py-20 bg-white relative overflow-hidden">
      {/* Background Text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <motion.h2 
          className="text-[100px] sm:text-[120px] lg:text-[150px] xl:text-[250px] font-bold text-gray-100/50 select-none"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          SERVIÇOS
        </motion.h2>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h2 
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 sm:mb-6 font-inter"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            Nossos Serviços Especializados
          </motion.h2>
          <motion.p 
            className="text-base lg:text-lg text-gray-600 max-w-4xl mx-auto font-inter"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            whileHover={{ scale: 1.01 }}
          >
            Oferecemos soluções completas em consultoria tributária, focadas em 
            resultados concretos para otimização da carga fiscal de sua empresa.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
          <motion.div
              key={service.title}
              className="bg-white border border-gray-200 rounded-lg overflow-hidden group cursor-pointer shadow-lg hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
            whileHover={{ 
              scale: 1.02,
                boxShadow: "0 15px 30px rgba(0, 0, 0, 0.1)",
              y: -5
            }}
            whileTap={{ scale: 0.98 }}
          >
              {/* Image Section */}
              <motion.div 
                className="relative h-48 sm:h-56 overflow-hidden"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.5 }}
              >
            <Image
                  src={service.image}
                  alt={service.title}
              width={800}
                  height={400}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            
                {/* Overlay */}
            <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"
                  initial={{ opacity: 0.8 }}
              whileHover={{ opacity: 0.9 }}
            />

                {/* Category Badge */}
            <motion.div 
                  className="absolute top-3 sm:top-4 left-3 sm:left-4"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: index * 0.1 + 0.3 }}
                  whileHover={{ scale: 1.1 }}
                >
                  <span className="bg-amber-400 text-slate-900 px-2 sm:px-3 py-1 rounded-full text-xs font-bold font-inter shadow-lg">
                    {service.category}
                  </span>
                </motion.div>
                
                {/* Title Overlay */}
              <motion.div
                  className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4"
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: index * 0.1 + 0.5 }}
                >
                  <h3 className="text-lg sm:text-xl font-bold text-white font-inter leading-tight">
                    {service.title}
                  </h3>
            </motion.div>
          </motion.div>

              {/* Content Section */}
              <motion.div
                className="p-4 sm:p-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
              >
                    <motion.p 
                  className="text-gray-600 text-sm sm:text-base font-inter leading-relaxed mb-4"
                  whileHover={{ color: "#374151" }}
                  transition={{ duration: 0.3 }}
                    >
                      {service.description}
                    </motion.p>

                {/* Service Items */}
                  <motion.div 
                  className="space-y-2"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.4, delay: index * 0.1 + 0.7 }}
                >
                  {service.items.map((item, itemIndex) => (
          <motion.div
                      key={item}
                      className="flex items-center text-sm text-gray-500"
                      initial={{ opacity: 0, x: -10 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.3, delay: index * 0.1 + 0.8 + itemIndex * 0.1 }}
                      whileHover={{ x: 5, color: "#6b7280" }}
            >
                <motion.div 
                        className="w-1.5 h-1.5 bg-amber-400 rounded-full mr-2 sm:mr-3"
                        whileHover={{ scale: 1.3 }}
                        transition={{ duration: 0.2 }}
                      />
                      <span className="font-inter">{item}</span>
                </motion.div>
                  ))}
          </motion.div>

                {/* Action Button */}
          <motion.div
                  className="mt-4 sm:mt-6 pt-4 border-t border-gray-100"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.4, delay: index * 0.1 + 1 }}
                >
            <motion.div
                    className="inline-flex items-center text-slate-900 font-medium font-inter group-hover:text-amber-600 transition-colors duration-300 text-sm"
                    whileHover={{ x: 3 }}
                transition={{ duration: 0.2 }}
              >
                    Saiba mais
                <motion.svg 
                      className="w-4 h-4 ml-2" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                      whileHover={{ x: 2 }}
                      transition={{ duration: 0.2 }}
                >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </motion.svg>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Seção Final CTA - MOBILE RESPONSIVE
function FinalCTASection() {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section id="contato" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 sm:w-64 h-32 sm:h-64 bg-amber-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-48 sm:w-96 h-48 sm:h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      {/* Background Text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <motion.h2 
          className="text-[80px] sm:text-[100px] lg:text-[120px] xl:text-[200px] font-bold text-white/5 select-none"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          CONTATO
        </motion.h2>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h2 
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 font-inter leading-tight"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            Pronto para Recuperar Milhões em Tributos?
          </motion.h2>
          
          <motion.p 
            className="text-lg sm:text-xl text-gray-300 mb-8 sm:mb-12 font-inter leading-relaxed max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            whileHover={{ scale: 1.01 }}
          >
            Nossa auditoria especializada já recuperou mais de R$ 500 milhões para empresas como a sua. 
            Não deixe dinheiro na mesa. Comece sua análise gratuita hoje mesmo.
          </motion.p>

          {/* CTA Buttons - MOBILE RESPONSIVE */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-8 sm:mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <motion.button 
              className="w-full sm:w-auto bg-amber-400 text-slate-900 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold text-base sm:text-lg font-inter shadow-lg hover:bg-amber-300 transition-colors"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 15px 30px rgba(251, 191, 36, 0.3)",
                y: -2
              }}
              whileTap={{ scale: 0.95 }}
            >
              ANÁLISE GRATUITA AGORA
            </motion.button>
            
            <motion.button 
              className="w-full sm:w-auto border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-medium text-base sm:text-lg font-inter hover:bg-white hover:text-slate-900 transition-colors"
                whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 25px rgba(255, 255, 255, 0.2)",
                y: -2
              }}
              whileTap={{ scale: 0.95 }}
            >
              FALAR COM ESPECIALISTA
            </motion.button>
          </motion.div>

          {/* Contact Info - MOBILE RESPONSIVE */}
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              transition={{ duration: 0.2 }}
            >
              <motion.div 
                className="w-12 h-12 bg-amber-400/20 rounded-lg flex items-center justify-center mx-auto mb-3 sm:mb-4"
                whileHover={{ backgroundColor: "rgba(251, 191, 36, 0.3)" }}
              >
                <svg className="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
              </motion.div>
              <h3 className="font-semibold text-white mb-1 sm:mb-2 font-inter text-sm sm:text-base">Telefone</h3>
              <p className="text-gray-300 font-inter text-sm sm:text-base">0800 591 9519</p>
            </motion.div>

                  <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              transition={{ duration: 0.2 }}
            >
              <motion.div 
                className="w-12 h-12 bg-amber-400/20 rounded-lg flex items-center justify-center mx-auto mb-3 sm:mb-4"
                whileHover={{ backgroundColor: "rgba(251, 191, 36, 0.3)" }}
              >
                <svg className="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </motion.div>
              <h3 className="font-semibold text-white mb-1 sm:mb-2 font-inter text-sm sm:text-base">Email</h3>
              <p className="text-gray-300 font-inter text-sm sm:text-base">contato@saveinteligencia.com.br</p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              transition={{ duration: 0.2 }}
            >
              <motion.div 
                className="w-12 h-12 bg-amber-400/20 rounded-lg flex items-center justify-center mx-auto mb-3 sm:mb-4"
                whileHover={{ backgroundColor: "rgba(251, 191, 36, 0.3)" }}
              >
                <svg className="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </motion.div>
              <h3 className="font-semibold text-white mb-1 sm:mb-2 font-inter text-sm sm:text-base">Localização</h3>
              <p className="text-gray-300 font-inter text-sm sm:text-base">Balneário Camboriú, SC</p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// Footer - MOBILE RESPONSIVE
function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-8">
          {/* Logo e Descrição */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/logo-full.png"
                alt="SAVE - Inteligência Tributária"
                width={150}
                height={60}
                className="h-10 sm:h-12 w-auto object-contain"
              />
            </Link>
            <p className="text-gray-300 text-sm leading-relaxed mb-4 font-inter">
              Especialistas em auditoria tributária e recuperação de créditos, 
              ajudando empresas a otimizar sua carga fiscal dentro da lei.
            </p>
            <div className="flex space-x-4">
              <motion.a 
                href="#" 
                className="text-gray-400 hover:text-amber-400 transition-colors"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </motion.a>
              <motion.a 
                href="#" 
                className="text-gray-400 hover:text-amber-400 transition-colors"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </motion.a>
            </div>
          </div>

          {/* Serviços */}
          <div>
            <h3 className="text-white font-semibold mb-4 font-inter text-sm sm:text-base">Serviços</h3>
            <ul className="space-y-2 text-sm">
              {["Auditoria PIS/COFINS", "Recuperação ICMS", "INSS sobre GNRE", "ISS Regressivo", "Defesa Tributária"].map((service) => (
                <li key={service}>
                  <motion.a 
                    href="#" 
                    className="text-gray-300 hover:text-amber-400 transition-colors font-inter"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    {service}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          {/* Links Úteis */}
          <div>
            <h3 className="text-white font-semibold mb-4 font-inter text-sm sm:text-base">Links Úteis</h3>
            <ul className="space-y-2 text-sm">
              {["Sobre Nós", "Nossa Equipe", "Casos de Sucesso", "Blog", "Contato"].map((link) => (
                <li key={link}>
                  <motion.a 
                    href="#" 
                    className="text-gray-300 hover:text-amber-400 transition-colors font-inter"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    {link}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="text-white font-semibold mb-4 font-inter text-sm sm:text-base">Contato</h3>
            <div className="space-y-3 text-sm">
              <motion.div 
                className="flex items-center text-gray-300"
                whileHover={{ x: 5, color: "#fbbf24" }}
                transition={{ duration: 0.2 }}
              >
                <svg className="w-4 h-4 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="font-inter">0800 591 9519</span>
              </motion.div>
              <motion.div 
                className="flex items-center text-gray-300"
                whileHover={{ x: 5, color: "#fbbf24" }}
                transition={{ duration: 0.2 }}
              >
                <svg className="w-4 h-4 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="font-inter">contato@saveinteligencia.com.br</span>
              </motion.div>
              <motion.div 
                className="flex items-start text-gray-300"
                whileHover={{ x: 5, color: "#fbbf24" }}
                transition={{ duration: 0.2 }}
              >
                <svg className="w-4 h-4 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="font-inter">Balneário Camboriú, SC</span>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-6 sm:pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <motion.p 
              className="text-gray-400 text-xs sm:text-sm font-inter text-center sm:text-left"
              whileHover={{ color: "#d1d5db" }}
            >
              © 2024 SAVE - Inteligência Tributária. Todos os direitos reservados.
            </motion.p>
            <div className="flex space-x-4 sm:space-x-6 text-xs sm:text-sm">
              <motion.a 
                href="#" 
                className="text-gray-400 hover:text-amber-400 transition-colors font-inter"
                whileHover={{ scale: 1.05 }}
              >
                Política de Privacidade
              </motion.a>
              <motion.a 
                href="#" 
                className="text-gray-400 hover:text-amber-400 transition-colors font-inter"
                whileHover={{ scale: 1.05 }}
              >
                Termos de Uso
              </motion.a>
            </div>
          </div>
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
      <TaxCalculatorSection />
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

