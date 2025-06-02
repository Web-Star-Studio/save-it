"use client";

import { motion } from "framer-motion";
import { useState, useRef } from "react";
import { useInView } from "framer-motion";

// Custom hook for scroll-triggered animations
function useScrollAnimation() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  return { ref, isInView };
}

interface CalculatorForm {
  monthlyRevenue: string;
  sector: string;
  employees: string;
}

interface CalculationResult {
  pisCofins: number;
  inssPatronal: number;
  icms: number;
  total: number;
  monthlyTotal: number;
}

export default function TaxCalculatorSection() {
  const { ref, isInView } = useScrollAnimation();
  const [formData, setFormData] = useState<CalculatorForm>({
    monthlyRevenue: '',
    sector: '',
    employees: ''
  });
  
  const [result, setResult] = useState<CalculationResult | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);

  // Setores com diferentes potenciais de economia
  const sectors = [
    { value: 'industria', label: 'Indústria', multiplier: 0.25 },
    { value: 'comercio', label: 'Comércio', multiplier: 0.18 },
    { value: 'servicos', label: 'Serviços', multiplier: 0.15 },
    { value: 'tecnologia', label: 'Tecnologia', multiplier: 0.20 },
    { value: 'saude', label: 'Saúde', multiplier: 0.22 },
    { value: 'educacao', label: 'Educação', multiplier: 0.12 },
    { value: 'construcao', label: 'Construção Civil', multiplier: 0.28 },
    { value: 'agronegocio', label: 'Agronegócio', multiplier: 0.24 },
  ];

  const calculateSavings = () => {
    if (!formData.monthlyRevenue || !formData.sector || !formData.employees) {
      return;
    }

    setIsCalculating(true);

    // Simular cálculo
    setTimeout(() => {
      const revenue = parseFloat(formData.monthlyRevenue.replace(/[^\d]/g, ''));
      const sector = sectors.find(s => s.value === formData.sector);
      const employees = parseInt(formData.employees);
      
      if (revenue && sector && employees) {
        const baseSavings = revenue * sector.multiplier;
        
        // Ajustes baseados no número de funcionários
        const employeeMultiplier = employees > 100 ? 1.3 : employees > 50 ? 1.2 : employees > 20 ? 1.1 : 1.0;
        
        const pisCofins = baseSavings * 0.4 * employeeMultiplier;
        const inssPatronal = baseSavings * 0.35 * employeeMultiplier;
        const icms = baseSavings * 0.25 * employeeMultiplier;
        
        const monthlyTotal = pisCofins + inssPatronal + icms;
        const total = monthlyTotal * 12;

        setResult({
          pisCofins: pisCofins * 12,
          inssPatronal: inssPatronal * 12,
          icms: icms * 12,
          total,
          monthlyTotal
        });
      }
      
      setIsCalculating(false);
    }, 1500);
  };

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  const formatNumber = (value: string) => {
    const number = value.replace(/[^\d]/g, '');
    return new Intl.NumberFormat('pt-BR').format(parseInt(number) || 0);
  };

  return (
    <section id="calculadora" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 text-white relative overflow-hidden">
      {/* Background Text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <motion.h2 
          className="text-[80px] sm:text-[100px] lg:text-[120px] xl:text-[200px] font-bold text-white/5 select-none"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          CALCULADORA
        </motion.h2>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 sm:w-64 h-32 sm:h-64 bg-amber-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-48 sm:w-96 h-48 sm:h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
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
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 font-inter leading-tight"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            Calculadora de Economia Tributária
          </motion.h2>
          <motion.p 
            className="text-base lg:text-lg text-gray-300 max-w-4xl mx-auto font-inter leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            whileHover={{ scale: 1.01 }}
          >
            Descubra o potencial de economia da sua empresa com base em dados reais. 
            Nossa ferramenta calcula possíveis recuperações em <strong>PIS/COFINS, INSS Patronal e ICMS</strong>.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Formulário - MOBILE RESPONSIVE */}
          <motion.div
            className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6 sm:p-8"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            whileHover={{ borderColor: "rgba(255, 255, 255, 0.3)" }}
          >
            <motion.h3 
              className="text-xl sm:text-2xl font-bold mb-6 text-white font-inter"
              whileHover={{ scale: 1.02 }}
            >
              Dados da Sua Empresa
            </motion.h3>

            <div className="space-y-6">
              {/* Faturamento Mensal */}
              <motion.div
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.2 }}
              >
                <label className="block text-sm font-medium text-gray-300 mb-2 font-inter">
                  Faturamento Mensal Aproximado
                </label>
                <motion.input
                  type="text"
                  value={formData.monthlyRevenue}
                  onChange={(e) => setFormData({
                    ...formData,
                    monthlyRevenue: `R$ ${formatNumber(e.target.value)}`
                  })}
                  placeholder="R$ 0"
                  className="w-full px-4 py-3 sm:py-4 bg-white/10 border border-white/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-amber-400 transition-colors font-inter text-sm sm:text-base"
                  whileFocus={{ scale: 1.02, borderColor: "#fbbf24" }}
                />
              </motion.div>

              {/* Setor de Atuação */}
              <motion.div
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.2 }}
              >
                <label className="block text-sm font-medium text-gray-300 mb-2 font-inter">
                  Setor de Atuação
                </label>
                <motion.select
                  value={formData.sector}
                  onChange={(e) => setFormData({ ...formData, sector: e.target.value })}
                  className="w-full px-4 py-3 sm:py-4 bg-white/10 border border-white/30 rounded-lg text-white focus:outline-none focus:border-amber-400 transition-colors font-inter text-sm sm:text-base"
                  whileFocus={{ scale: 1.02, borderColor: "#fbbf24" }}
                >
                  <option value="" className="text-gray-800">Selecione um setor</option>
                  {sectors.map((sector) => (
                    <option key={sector.value} value={sector.value} className="text-gray-800">
                      {sector.label}
                    </option>
                  ))}
                </motion.select>
              </motion.div>

              {/* Número de Funcionários */}
              <motion.div
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.2 }}
              >
                <label className="block text-sm font-medium text-gray-300 mb-2 font-inter">
                  Número de Funcionários
                </label>
                <motion.select
                  value={formData.employees}
                  onChange={(e) => setFormData({ ...formData, employees: e.target.value })}
                  className="w-full px-4 py-3 sm:py-4 bg-white/10 border border-white/30 rounded-lg text-white focus:outline-none focus:border-amber-400 transition-colors font-inter text-sm sm:text-base"
                  whileFocus={{ scale: 1.02, borderColor: "#fbbf24" }}
                >
                  <option value="" className="text-gray-800">Selecione a quantidade</option>
                  <option value="1-10" className="text-gray-800">1 a 10 funcionários</option>
                  <option value="11-20" className="text-gray-800">11 a 20 funcionários</option>
                  <option value="21-50" className="text-gray-800">21 a 50 funcionários</option>
                  <option value="51-100" className="text-gray-800">51 a 100 funcionários</option>
                  <option value="101-500" className="text-gray-800">101 a 500 funcionários</option>
                  <option value="500+" className="text-gray-800">Mais de 500 funcionários</option>
                </motion.select>
              </motion.div>

              {/* Botão Calcular */}
              <motion.button
                onClick={calculateSavings}
                disabled={!formData.monthlyRevenue || !formData.sector || !formData.employees || isCalculating}
                className="w-full bg-amber-400 text-slate-900 py-3 sm:py-4 rounded-lg font-bold text-base sm:text-lg font-inter disabled:opacity-50 disabled:cursor-not-allowed hover:bg-amber-300 transition-colors shadow-lg"
                whileHover={{ 
                  scale: formData.monthlyRevenue && formData.sector && formData.employees ? 1.02 : 1,
                  boxShadow: "0 10px 25px rgba(251, 191, 36, 0.3)"
                }}
                whileTap={{ scale: 0.98 }}
                animate={isCalculating ? { scale: [1, 1.02, 1] } : {}}
                transition={{ duration: 0.5, repeat: isCalculating ? Infinity : 0 }}
              >
                {isCalculating ? 'Calculando...' : 'CALCULAR ECONOMIA'}
              </motion.button>

              {/* Disclaimer */}
              <motion.p 
                className="text-xs text-gray-400 text-center font-inter leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                * Cálculo estimativo baseado em médias do mercado. 
                Para uma análise precisa, solicite uma consultoria personalizada.
              </motion.p>
            </div>
          </motion.div>

          {/* Resultado - MOBILE RESPONSIVE */}
          <motion.div
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 sm:p-8"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {!result ? (
              <motion.div 
                className="text-center py-12 sm:py-16"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <motion.div 
                  className="w-16 h-16 sm:w-20 sm:h-20 bg-amber-400/20 rounded-lg flex items-center justify-center mx-auto mb-4 sm:mb-6"
                  whileHover={{ scale: 1.1, backgroundColor: "rgba(251, 191, 36, 0.3)" }}
                  animate={{ rotateY: [0, 360] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                >
                  <svg className="w-8 h-8 sm:w-10 sm:h-10 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </motion.div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-3 font-inter">
                  Pronto para Descobrir?
                </h3>
                <p className="text-gray-300 font-inter text-sm sm:text-base">
                  Preencha os dados ao lado e descubra o potencial de economia da sua empresa
                </p>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <motion.h3 
                  className="text-xl sm:text-2xl font-bold mb-6 text-white text-center font-inter"
                  whileHover={{ scale: 1.02 }}
                >
                  Potencial de Economia Anual
                </motion.h3>

                <div className="space-y-4 sm:space-y-6">
                  {/* Total em destaque */}
                  <motion.div 
                    className="bg-gradient-to-r from-amber-400/20 to-amber-600/20 border-2 border-amber-400/30 rounded-lg p-4 sm:p-6 text-center"
                    whileHover={{ 
                      scale: 1.02, 
                      borderColor: "rgba(251, 191, 36, 0.5)",
                      boxShadow: "0 0 30px rgba(251, 191, 36, 0.2)"
                    }}
                    initial={{ scale: 0.9 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <div className="text-xs sm:text-sm text-amber-200 mb-2 font-inter uppercase tracking-wide">
                      Economia Total Estimada
                    </div>
                    <motion.div 
                      className="text-3xl sm:text-4xl lg:text-5xl font-bold text-amber-400 font-inter"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.6, delay: 0.4, type: "spring", stiffness: 200 }}
                    >
                      {formatCurrency(result.total)}
                    </motion.div>
                    <div className="text-xs sm:text-sm text-gray-300 mt-2 font-inter">
                      por ano ({formatCurrency(result.monthlyTotal)}/mês)
                    </div>
                  </motion.div>

                  {/* Breakdown por tipo */}
                  <div className="space-y-3 sm:space-y-4">
                    {[
                      { label: 'PIS/COFINS', value: result.pisCofins, color: 'from-blue-500 to-blue-600' },
                      { label: 'INSS Patronal', value: result.inssPatronal, color: 'from-green-500 to-green-600' },
                      { label: 'ICMS', value: result.icms, color: 'from-purple-500 to-purple-600' }
                    ].map((item, index) => (
                      <motion.div 
                        key={item.label}
                        className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-3 sm:p-4"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 + 0.6 }}
                        whileHover={{ 
                          scale: 1.02, 
                          borderColor: "rgba(255, 255, 255, 0.3)",
                          backgroundColor: "rgba(255, 255, 255, 0.15)"
                        }}
                      >
                        <div className="flex justify-between items-center">
                          <div className="flex items-center">
                            <motion.div 
                              className={`w-3 h-3 sm:w-4 sm:h-4 bg-gradient-to-r ${item.color} rounded-full mr-3`}
                              whileHover={{ scale: 1.3 }}
                              transition={{ duration: 0.2 }}
                            />
                            <span className="text-sm sm:text-base text-gray-300 font-inter">{item.label}</span>
                          </div>
                          <motion.span 
                            className="font-bold text-white font-inter text-sm sm:text-base"
                            whileHover={{ scale: 1.1, color: "#fbbf24" }}
                          >
                            {formatCurrency(item.value)}
                          </motion.span>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Call to Action */}
                  <motion.div 
                    className="text-center pt-4 sm:pt-6 border-t border-white/20"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1 }}
                  >
                    <motion.p 
                      className="text-sm text-gray-300 mb-4 font-inter"
                      whileHover={{ color: "#d1d5db" }}
                    >
                      Quer transformar essa estimativa em realidade?
                    </motion.p>
                    <motion.button 
                      className="bg-white text-slate-900 px-6 sm:px-8 py-2 sm:py-3 rounded-lg font-bold font-inter hover:bg-gray-100 transition-colors shadow-lg text-sm sm:text-base"
                      whileHover={{ 
                        scale: 1.05,
                        boxShadow: "0 10px 25px rgba(255, 255, 255, 0.2)",
                        y: -2
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      SOLICITAR ANÁLISE DETALHADA
                    </motion.button>
                  </motion.div>
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>

        {/* Seção de Benefícios - MOBILE RESPONSIVE */}
        <motion.div 
          className="mt-12 sm:mt-16 lg:mt-20 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <motion.h3 
            className="text-2xl sm:text-3xl font-bold text-white mb-8 sm:mb-12 font-inter"
            whileHover={{ scale: 1.02 }}
          >
            Por Que Escolher a Save?
          </motion.h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                icon: (
                  <svg className="w-8 h-8 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                title: 'Dentro da Lei',
                description: 'Todas as estratégias são 100% legais e baseadas na legislação tributária vigente'
              },
              {
                icon: (
                  <svg className="w-8 h-8 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                ),
                title: 'Resultados Rápidos',
                description: 'Processo otimizado que entrega resultados em até 90 dias'
              },
              {
                icon: (
                  <svg className="w-8 h-8 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                ),
                title: 'R$ 500M+ Recuperados',
                description: 'Histórico comprovado de sucesso com grandes empresas brasileiras'
              }
            ].map((benefit, index) => (
              <motion.div 
                key={benefit.title}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6 sm:p-8"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 + 1 }}
                whileHover={{ 
                  scale: 1.03,
                  borderColor: "rgba(255, 255, 255, 0.3)",
                  backgroundColor: "rgba(255, 255, 255, 0.15)",
                  y: -5
                }}
              >
                <motion.div 
                  className="w-16 h-16 bg-amber-400/20 rounded-lg flex items-center justify-center mx-auto mb-4"
                  whileHover={{ scale: 1.1, backgroundColor: "rgba(251, 191, 36, 0.3)" }}
                >
                  {benefit.icon}
                </motion.div>
                <motion.h4 
                  className="text-lg sm:text-xl font-bold text-white mb-3 font-inter"
                  whileHover={{ scale: 1.05, color: "#fbbf24" }}
                >
                  {benefit.title}
                </motion.h4>
                <motion.p 
                  className="text-gray-300 font-inter text-sm sm:text-base leading-relaxed"
                  whileHover={{ color: "#d1d5db" }}
                >
                  {benefit.description}
                </motion.p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
} 