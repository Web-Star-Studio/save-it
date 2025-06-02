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

// Hero Section (Main banner area)
function HeroSection() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, -300]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0.3]);

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background with parallax effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-black"
        style={{ y, opacity }}
      >
        {/* Pattern overlay */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Ccircle cx='11' cy='11' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        />
      </motion.div>

      {/* Hero Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left column - Text content */}
            <motion.div
              className="text-white"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <motion.div
                className="inline-block bg-red-600/20 text-red-400 px-4 py-2 rounded-full text-sm font-medium mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                🚀 Especialistas em Otimização Tributária
              </motion.div>

              <h1 className="text-6xl lg:text-7xl font-bold leading-tight mb-6">
                <motion.span
                  className="block"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  Maximize
                </motion.span>
                <motion.span
                  className="block text-red-500"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                >
                  Seus Lucros
                </motion.span>
              </h1>

              <motion.p
                className="text-xl text-gray-300 leading-relaxed mb-10 max-w-md"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.0 }}
              >
                Transforme sua gestão tributária com estratégias inteligentes 
                que reduzem custos e aumentam a eficiência do seu negócio.
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
              >
                <motion.button 
                  className="bg-red-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-700 transition-all duration-300 flex items-center justify-center group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Comece Agora
                  <motion.span 
                    className="ml-2 group-hover:translate-x-1 transition-transform"
                  >
                    →
                  </motion.span>
                </motion.button>
                
                <motion.button 
                  className="border border-white/30 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Saiba Mais
                </motion.button>
              </motion.div>
            </motion.div>

            {/* Right column - Visual element */}
            <motion.div
              className="relative hidden lg:block"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              <div className="relative">
                {/* Background circle */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-red-500 to-red-600 rounded-full blur-3xl opacity-20"
                  animate={{ 
                    scale: [1, 1.1, 1],
                    rotate: [0, 90, 0]
                  }}
                  transition={{ 
                    duration: 10, 
                    repeat: Infinity, 
                    ease: "linear" 
                  }}
                />
                
                {/* Floating cards */}
                <div className="relative z-10 space-y-6">
                  <motion.div
                    className="bg-white/10 backdrop-blur-lg p-6 rounded-xl border border-white/20"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.4 }}
                    whileHover={{ y: -5 }}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-green-400 text-2xl font-bold">↗ 47%</div>
                        <div className="text-white text-sm">Economia Fiscal</div>
                      </div>
                      <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center">
                        <span className="text-green-400">💰</span>
                      </div>
                    </div>
                  </motion.div>
                  
                  <motion.div
                    className="bg-white/10 backdrop-blur-lg p-6 rounded-xl border border-white/20 ml-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.6 }}
                    whileHover={{ y: -5 }}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-blue-400 text-2xl font-bold">↗ 89%</div>
                        <div className="text-white text-sm">Eficiência</div>
                      </div>
                      <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center">
                        <span className="text-blue-400">📊</span>
                      </div>
                    </div>
                  </motion.div>
                  
                  <motion.div
                    className="bg-white/10 backdrop-blur-lg p-6 rounded-xl border border-white/20"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.8 }}
                    whileHover={{ y: -5 }}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-purple-400 text-2xl font-bold">↗ 156%</div>
                        <div className="text-white text-sm">ROI Médio</div>
                      </div>
                      <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center">
                        <span className="text-purple-400">🎯</span>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 2.0 }}
      >
        <motion.div
          className="flex flex-col items-center cursor-pointer"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span className="text-sm mb-2">Scroll</span>
          <div className="w-6 h-10 border border-white rounded-full flex justify-center">
            <motion.div
              className="w-1 h-3 bg-white rounded-full mt-2"
              animate={{ y: [0, 12, 0], opacity: [1, 0, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
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
