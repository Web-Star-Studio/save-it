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

// Hero Section com ajustes para o novo header
function HeroSection() {
  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Image - Igual RE/MAX */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
          alt="Business District Aerial View"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-slate-900/50"></div>
      </div>

      {/* Social Media Icons - Lateral Esquerda com animações */}
      <div className="absolute left-6 top-1/2 transform -translate-y-1/2 z-20 hidden lg:block">
        <div className="flex flex-col space-y-6">
          {[
            { icon: "M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z", name: "Twitter" },
            { icon: "M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.162-1.499-.69-2.436-2.878-2.436-4.632 0-3.78 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z", name: "Instagram" },
            { icon: "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z", name: "YouTube" },
            { icon: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z", name: "LinkedIn" }
          ].map((social, index) => (
            <motion.a 
              key={social.name}
              href="#" 
              className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center text-white hover:text-red-400 hover:border-red-400 transition-all duration-300 backdrop-blur-sm"
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

      {/* Content Principal - Layout exato RE/MAX */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 h-full">
        <div className="flex items-center h-full pt-20">
          <div className="max-w-2xl">
            {/* Título Principal - Tipografia exata */}
            <motion.h1 
              className="text-white leading-tight mb-6"
              style={{ fontSize: '4rem', fontWeight: '400', lineHeight: '1.1' }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Your journey begins with{" "}
              <br />
              <span className="font-bold bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">SAVE</span>
            </motion.h1>
            
            {/* Subtítulo - Igual RE/MAX */}
            <motion.p 
              className="text-white text-lg mb-12 font-light"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              ...leading to unparalleled success.
            </motion.p>

            {/* Botões de Ação - Layout exato RE/MAX com melhorias */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {[
                { text: "BUY A SERVICE", href: "#services" },
                { text: "SELL A SERVICE", href: "#sell" },
                { text: "JOIN OUR FAMILY", href: "#join" }
              ].map((item, index) => (
                <motion.div 
                  key={item.text}
                  className="flex items-center group cursor-pointer"
                  whileHover={{ x: 10 }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                >
                  <a 
                    href={item.href}
                    className="text-white text-sm font-normal tracking-wider hover:text-red-400 transition-colors duration-300"
                  >
                    {item.text}
                  </a>
                  <motion.svg 
                    className="ml-3 w-4 h-4 text-white group-hover:text-red-400 transition-colors duration-300" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </motion.svg>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Texto Lateral Direita - "BRASIL" com efeito moderno */}
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

// Stats Section (like "RE/MAX Europe in Numbers")
function StatsSection() {
  const { ref, isInView } = useScrollAnimation();

  const stats = [
    { number: "500", suffix: "+", label: "Empresas atendidas em todo o Brasil", subtext: "Presente em todas as regiões" },
    { number: "2", suffix: "Mil+", label: "Processos otimizados", subtext: "Redução significativa de custos" },
    { number: "85", suffix: "%", label: "Taxa de sucesso", subtext: "Em otimização tributária" },
    { number: "15", suffix: "+", label: "Anos de experiência", subtext: "No mercado brasileiro" }
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
            Save Inteligência Tributária em Números
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nossa presença nacional e expertise comprovada em consultoria tributária demonstram nosso compromisso com a excelência.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center bg-gray-50 p-8 rounded-lg"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="text-4xl lg:text-5xl font-bold text-red-600 mb-2">
                {stat.number}
                <span className="text-slate-900">{stat.suffix}</span>
              </div>
              <div className="text-lg font-semibold text-slate-900 mb-2">
                {stat.label}
              </div>
              <div className="text-sm text-gray-600">
                {stat.subtext}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Our People Section (like RE/MAX team grid)
function OurPeopleSection() {
  const { ref, isInView } = useScrollAnimation();

  const team = [
    { name: "Ana Silva", role: "Sócia Fundadora", image: "https://images.unsplash.com/photo-1494790108755-2616b612b29c?ixlib=rb-4.0.3&w=400&q=80" },
    { name: "Carlos Santos", role: "Especialista Tributário Sênior", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&w=400&q=80" },
    { name: "Mariana Costa", role: "Consultora Fiscal", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&w=400&q=80" },
    { name: "Ricardo Oliveira", role: "Analista Tributário", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&w=400&q=80" },
    { name: "Fernanda Lima", role: "Especialista em Compliance", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&w=400&q=80" },
    { name: "Paulo Rodrigues", role: "Consultor Sênior", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&w=400&q=80" }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Nossa Equipe</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Profissionais altamente qualificados e experientes em consultoria tributária, 
            dedicados a entregar as melhores soluções para nossos clientes.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="aspect-square relative">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-2">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Find Your Solution Section (like "Find your dream home" with map)
function FindSolutionSection() {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section className="py-20 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-6">
              Encontre sua solução tributária ideal
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Nossa presença nacional nos permite atender empresas em todo o Brasil 
              com soluções personalizadas em consultoria tributária.
            </p>
            <button className="bg-red-600 text-white px-8 py-3 rounded font-medium hover:bg-red-700 transition-colors">
              Consulte sua região
            </button>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-gray-700 rounded-lg p-8 h-96 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">🗺️</div>
                <div className="text-xl font-semibold">Mapa do Brasil</div>
                <div className="text-gray-300 mt-2">Cobertura Nacional</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Services Section (like "Find your event")
function ServicesSection() {
  const { ref, isInView } = useScrollAnimation();

  const services = [
    {
      title: "Planejamento Tributário Estratégico",
      description: "Estruturação fiscal avançada para otimização da carga tributária empresarial.",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&w=600&q=80",
      date: "Consulta Permanente"
    },
    {
      title: "Auditoria e Compliance Fiscal",
      description: "Revisão completa dos processos tributários e adequação às normas vigentes.",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&w=600&q=80",
      date: "Análise Contínua"
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
            Encontre seu serviço ideal
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Oferecemos soluções especializadas em consultoria tributária para atender 
            as necessidades específicas do seu negócio.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="aspect-video relative">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded text-sm">
                  {service.date}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <button className="text-red-600 font-medium hover:text-red-700">
                  Saiba mais →
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Join Our Family Section (like RE/MAX logo section)
function JoinFamilySection() {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-slate-900 mb-8">
            Junte-se à nossa família
          </h2>
          
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-32 h-32 bg-red-600 rounded-full mb-6">
              <span className="text-white text-4xl font-bold">S</span>
            </div>
          </div>
          
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Faça parte de uma rede de excelência em consultoria tributária. 
            Conecte-se conosco e transforme os desafios fiscais em oportunidades de crescimento.
          </p>
          
          <button className="bg-red-600 text-white px-8 py-3 rounded font-medium hover:bg-red-700 transition-colors">
            Fale Conosco
          </button>
        </motion.div>
      </div>
    </section>
  );
}

// Resources Section (like "Stay informed with RE/MAX")
function ResourcesSection() {
  const { ref, isInView } = useScrollAnimation();

  const resources = [
    {
      title: "SAVE TALK: CONVERSANDO 2024",
      subtitle: "Novidades tributárias e estratégias para 2024",
      description: "Evento online gratuito com especialistas discutindo as principais mudanças na legislação tributária brasileira.",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&w=600&q=80"
    },
    {
      title: "SAVE MASTER CONFERENCE 2024",
      subtitle: "Conferência anual de tributação",
      description: "O maior evento de consultoria tributária do país, reunindo especialistas e empresários para debater tendências e estratégias.",
      image: "https://images.unsplash.com/photo-1551818255-e6e10975cd17?ixlib=rb-4.0.3&w=600&q=80"
    },
    {
      title: "SAVE WEBINAR SERIES",
      subtitle: "Webinars mensais especializados",
      description: "Série de webinars gratuitos cobrindo temas específicos da consultoria tributária e planejamento fiscal estratégico.",
      image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&w=600&q=80"
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
          <h2 className="text-4xl font-bold mb-4">
            Mantenha-se informado com a Save
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Eventos, webinars e conteúdos exclusivos para manter você sempre atualizado 
            sobre as melhores práticas em consultoria tributária.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {resources.map((resource, index) => (
            <motion.div
              key={resource.title}
              className="bg-gray-800 rounded-lg overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="aspect-video relative">
                <Image
                  src={resource.image}
                  alt={resource.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-red-400 font-bold text-lg mb-2">{resource.title}</h3>
                <h4 className="text-white font-semibold mb-3">{resource.subtitle}</h4>
                <p className="text-gray-300 text-sm">{resource.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Calculator Section (like "Find your new home now")
function CalculatorSection() {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <motion.div
          ref={ref}
          className="text-center mb-12"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Calcule sua economia fiscal agora
          </h2>
          <p className="text-xl text-gray-600">
            Use nossa calculadora para descobrir quanto sua empresa pode economizar 
            com nossa consultoria tributária especializada.
          </p>
        </motion.div>

        <motion.div
          className="bg-gray-50 p-8 rounded-lg"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="grid md:grid-cols-3 gap-6 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Faturamento Anual (R$)
              </label>
              <input
                type="text"
                placeholder="Ex: 1.000.000"
                className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Setor de Atividade
              </label>
              <select className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500">
                <option>Selecione o setor</option>
                <option>Comércio</option>
                <option>Indústria</option>
                <option>Serviços</option>
                <option>Tecnologia</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Regime Tributário
              </label>
              <select className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500">
                <option>Selecione o regime</option>
                <option>Simples Nacional</option>
                <option>Lucro Presumido</option>
                <option>Lucro Real</option>
              </select>
            </div>
          </div>
          
          <div className="text-center">
            <button className="bg-red-600 text-white px-12 py-3 rounded-lg font-medium hover:bg-red-700 transition-colors">
              Calcular Economia
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Gallery Section (property images grid)
function GallerySection() {
  const { ref, isInView } = useScrollAnimation();

  const images = [
    "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&w=600&q=80",
    "https://images.unsplash.com/photo-1551818255-e6e10975cd17?ixlib=rb-4.0.3&w=600&q=80",
    "https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&w=600&q=80",
    "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&w=600&q=80",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&w=600&q=80",
    "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&w=600&q=80"
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Nossos Projetos e Sucessos
          </h2>
          <p className="text-xl text-gray-600">
            Conheça alguns dos projetos de otimização tributária que desenvolvemos 
            para nossos clientes em diversos setores.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <motion.div
              key={index}
              className="aspect-video relative rounded-lg overflow-hidden group cursor-pointer"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Image
                src={image}
                alt={`Projeto ${index + 1}`}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="text-lg font-semibold">Projeto {index + 1}</div>
                  <div className="text-sm">Ver detalhes</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Footer (Dark like RE/MAX)
function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and Company Info */}
          <div className="md:col-span-2">
            <div className="mb-6">
              <div className="text-2xl font-bold">
                <span className="bg-red-600 text-white px-3 py-1 rounded">SAVE</span>
                <span className="ml-2">INTELIGÊNCIA TRIBUTÁRIA</span>
              </div>
            </div>
            
            <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
              Consultoria especializada em otimização tributária, oferecendo soluções 
              estratégicas para empresas que buscam excelência em gestão fiscal.
            </p>
            
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-gray-700 rounded flex items-center justify-center hover:bg-red-600 cursor-pointer transition-colors">
                <span className="text-sm">📧</span>
              </div>
              <div className="w-10 h-10 bg-gray-700 rounded flex items-center justify-center hover:bg-red-600 cursor-pointer transition-colors">
                <span className="text-sm">📱</span>
              </div>
              <div className="w-10 h-10 bg-gray-700 rounded flex items-center justify-center hover:bg-red-600 cursor-pointer transition-colors">
                <span className="text-sm">💼</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Nossos Serviços</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Planejamento Tributário</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Auditoria Fiscal</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Compliance</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Consultoria Especializada</a></li>
            </ul>
          </div>

          {/* Contact */}
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
      <StatsSection />
      <OurPeopleSection />
      <FindSolutionSection />
      <ServicesSection />
      <JoinFamilySection />
      <ResourcesSection />
      <CalculatorSection />
      <GallerySection />
      <Footer />
    </main>
  );
}
