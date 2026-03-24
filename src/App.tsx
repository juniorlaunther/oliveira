/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  CheckCircle2, 
  Phone, 
  Instagram, 
  MapPin, 
  HardHat, 
  Truck, 
  Construction, 
  Maximize, 
  Layers, 
  Zap, 
  ShieldCheck, 
  Clock,
  Menu,
  X,
  ArrowRight
} from "lucide-react";
import { useState, useEffect } from "react";

const WHATSAPP_LINK = "https://wa.me/5519993834208";
const INSTAGRAM_LINK = "https://www.instagram.com/fundacoes.oliveira/";

const services = [
  {
    title: "LIMPEZA DE TERRENOS",
    description: "Remoção completa de vegetação e entulhos para início imediato da obra.",
    icon: <Zap className="w-6 h-6" />,
  },
  {
    title: "FUNDAÇÃO",
    description: "Execução precisa de estacas e sapatas para garantir a estabilidade da estrutura.",
    icon: <Layers className="w-6 h-6" />,
  },
  {
    title: "TERRAPLENAGEM",
    description: "Movimentação de terra com maquinário pesado para adequação do terreno.",
    icon: <Truck className="w-6 h-6" />,
  },
  {
    title: "NIVELAMENTO",
    description: "Ajuste milimétrico de cotas para projetos que exigem precisão absoluta.",
    icon: <Maximize className="w-6 h-6" />,
  },
  {
    title: "PERFURAÇÕES",
    description: "Equipamentos especializados para perfurações de diversos diâmetros e profundidades.",
    icon: <Construction className="w-6 h-6" />,
  },
  {
    title: "DEMOLIÇÃO",
    description: "Demolição controlada com segurança e descarte correto de materiais.",
    icon: <HardHat className="w-6 h-6" />,
  },
  {
    title: "BALDRAMES",
    description: "Construção de vigas baldrames com impermeabilização de alta qualidade.",
    icon: <ShieldCheck className="w-6 h-6" />,
  },
  {
    title: "ABERTURA DE PISCINA",
    description: "Escavação precisa seguindo rigorosamente o projeto arquitetônico.",
    icon: <Layers className="w-6 h-6" />,
  },
];

const stats = [
  { label: "Obras Concluídas", value: "1.000+" },
  { label: "Anos de Experiência", value: "15+" },
  { label: "Maquinários Próprios", value: "Especiais" },
  { label: "Clientes Satisfeitos", value: "100%" },
];

const testimonials = [
  {
    name: "Ricardo Santos",
    role: "Engenheiro Civil",
    text: "A Oliveira Fundações é nossa parceira em Valinhos há anos. A precisão no nivelamento e a qualidade das perfurações são impecáveis.",
  },
  {
    name: "Ana Paula Mendes",
    role: "Arquiteta",
    text: "Excelente atendimento e cumprimento rigoroso de prazos. O maquinário moderno faz toda a diferença na agilidade da obra.",
  },
  {
    name: "Marcos Oliveira",
    role: "Proprietário Residencial",
    text: "Contratei para a limpeza e terraplenagem do meu lote em Campinas. Serviço limpo, rápido e com preço justo.",
  },
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    viewport: { once: true },
    transition: { staggerChildren: 0.1 }
  };

  const pulseAnimation = {
    scale: [1, 1.03, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  return (
    <div className="min-h-screen font-sans selection:bg-accent selection:text-primary">
      {/* Header */}
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-primary shadow-lg py-2" : "bg-primary/70 backdrop-blur-sm py-4"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className="flex-1 flex justify-start">
            <a href="#" className="flex items-center gap-2">
              <img 
                src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjvJ0ddMuQxPLa5XbubCA1JwMTMQOhfUNiV6dUoKowP68P2_65dTz7AiYfXphe758sNIuT5SvoKRMAViAEsYc3naTsmfsmDK47AJDzYhMvIyyt8sC3BEHLaJKz3VL1r-yu_DtyvkwBSNJhV85TZIGig2b1zRwu6_EA4PxuvsEbeA_LZI4GQh6KNGeoIcPA/s320/logo%20olveira%20(fundo%20azul%20e%20icoens%20em%20branco%20e%20amarelo).jpeg" 
                alt="Oliveira Fundações Logo" 
                className="h-14 sm:h-16 w-auto object-contain rounded transition-all duration-300"
                referrerPolicy="no-referrer"
              />
            </a>
          </div>

          {/* Desktop Nav - Centered */}
          <nav className="hidden lg:flex items-center justify-center gap-8 flex-1">
            {isScrolled && (
              <motion.a 
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                href="#" 
                className="text-white hover:text-accent font-medium transition-colors"
              >
                Início
              </motion.a>
            )}
            <a href="#servicos" className="text-white hover:text-accent font-medium transition-colors">Serviços</a>
            <a href="#sobre" className="text-white hover:text-accent font-medium transition-colors">Sobre</a>
            <a href="#diferenciais" className="text-white hover:text-accent font-medium transition-colors">Diferenciais</a>
          </nav>

          {/* Desktop CTA - Right */}
          <div className="flex-1 hidden lg:flex justify-end">
            <a 
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-accent text-primary px-6 py-2.5 rounded-full font-bold hover:scale-105 transition-transform flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              ORÇAMENTO
            </a>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="lg:hidden text-white p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            className="lg:hidden bg-primary border-t border-white/10"
          >
            <div className="flex flex-col p-6 gap-4 items-center text-center">
              {isScrolled && (
                <a href="#" onClick={() => setIsMenuOpen(false)} className="text-white font-medium">Início</a>
              )}
              <a href="#servicos" onClick={() => setIsMenuOpen(false)} className="text-white font-medium">Serviços</a>
              <a href="#sobre" onClick={() => setIsMenuOpen(false)} className="text-white font-medium">Sobre</a>
              <a href="#diferenciais" onClick={() => setIsMenuOpen(false)} className="text-white font-medium">Diferenciais</a>
              <a 
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-accent text-primary px-10 py-3 rounded-full font-bold text-center flex items-center justify-center gap-2 w-full max-w-xs"
              >
                <Phone className="w-4 h-4" />
                ORÇAMENTO
              </a>
            </div>
          </motion.div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgiqzTan4mbrtteF1Nl7UhqnEwsTVMUxecOJT75YkgbKL6N9ezY7VfT3Bg5YGiwsa4fWRhmYWVcHffq-eHWzcWgXojP0RFLH73GQ_cJICvkTSFtvqCqJ-c0QuUlZIj9mfXs_b-Td41B523wWLG5FE3BWdyTwhrYmm0IO4D9C50toklCGWL7WdiuBZYnX3I/s16000/hero%20op%C3%A7ao%202.png" 
            alt="Terraplenagem em obra" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/60 to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block bg-accent text-primary px-4 py-1 rounded-full text-sm font-bold tracking-wider mb-6"
            >
              VALINHOS, CAMPINAS E REGIÃO
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold text-white leading-tight mb-6"
            >
              Excelência em Fundações e <span className="text-accent">Terraplenagem</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-lg sm:text-xl text-white/90 mb-10 max-w-2xl leading-relaxed"
            >
              Entregamos soluções eficientes com maquinário de alta tecnologia e mão de obra especializada. Mais de 1.000 obras concluídas com qualidade garantida.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a 
                href={WHATSAPP_LINK}
                className="bg-accent text-primary px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform flex items-center justify-center gap-2"
              >
                Solicitar Orçamento Grátis
                <ArrowRight className="w-5 h-5" />
              </a>
              <a 
                href="#servicos"
                className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition-all text-center"
              >
                Nossos Serviços
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Authority Section */}
      <section className="bg-slate-50 py-8 sm:py-12 border-b border-slate-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            className="grid grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {stats.map((stat, idx) => (
              <motion.div 
                key={idx} 
                variants={fadeIn} 
                animate={pulseAnimation}
                className="text-center"
              >
                <div className="text-3xl sm:text-4xl font-display font-extrabold text-primary mb-1">{stat.value}</div>
                <div className="text-sm sm:text-base text-slate-600 font-medium uppercase tracking-wide">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="py-10 sm:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.h2 
              {...fadeIn}
              className="text-3xl sm:text-4xl font-display font-extrabold text-primary mb-4"
            >
              Soluções Completas para sua Obra
            </motion.h2>
            <motion.p 
              {...fadeIn}
              className="text-slate-600 text-lg"
            >
              Desde a limpeza inicial até a fundação final, cuidamos de cada etapa com precisão técnica e agilidade.
            </motion.p>
          </div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
          >
            {services.map((service, idx) => (
              <motion.div 
                key={idx}
                variants={fadeIn}
                whileHover={{ y: -5 }}
                className="p-4 sm:p-8 bg-primary border border-white/10 rounded-2xl shadow-sm hover:shadow-xl transition-all group flex flex-row items-center gap-4 sm:flex-col sm:items-start text-left"
              >
                <motion.div 
                  animate={{ y: [0, -4, 0] }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity, 
                    ease: "easeInOut",
                    delay: idx * 0.2
                  }}
                  className="w-10 h-10 sm:w-12 sm:h-12 bg-white/10 text-accent rounded-xl flex items-center justify-center shrink-0 sm:mb-6 group-hover:bg-accent group-hover:text-primary transition-colors"
                >
                  {service.icon}
                </motion.div>
                <h3 className="text-base sm:text-xl font-bold text-white mb-0 sm:mb-3">{service.title}</h3>
                <p className="hidden sm:block text-white/70 leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Bento Grid Differentials */}
      <section id="diferenciais" className="py-10 sm:py-20 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-primary mb-4">
              Por que escolher a Oliveira?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-auto md:h-[600px]">
            {/* Large Card - 1.000+ Obras */}
            <motion.div 
              {...fadeIn}
              className="md:col-span-2 md:row-span-2 bg-primary rounded-3xl p-10 text-white flex flex-col justify-end md:justify-center md:items-center md:text-center relative overflow-hidden group"
            >
              <div className="relative z-10">
                <div className="bg-accent text-primary w-14 h-14 rounded-2xl flex items-center justify-center mb-6 md:mx-auto md:w-20 md:h-20">
                  <CheckCircle2 className="w-8 h-8 md:w-12 md:h-12" />
                </div>
                <h3 className="text-3xl md:text-5xl font-bold mb-4">1.000+ Obras Concluídas</h3>
                <p className="text-white/80 text-lg max-w-xl md:mx-auto md:text-xl">
                  Nossa trajetória é marcada por resultados sólidos. Com mais de mil projetos entregues com sucesso, somos referência em confiança e qualidade técnica na região.
                </p>
              </div>
            </motion.div>

            {/* Small Card 1 - Maquinários */}
            <motion.div 
              {...fadeIn}
              className="bg-white rounded-3xl p-8 border border-slate-200 flex flex-col justify-center"
            >
              <div className="bg-primary/5 text-primary w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                <Truck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">Maquinários Especiais</h3>
              <p className="text-slate-600">Equipamentos de última geração para garantir precisão e rapidez em cada etapa da sua obra.</p>
            </motion.div>

            {/* Small Card 2 - Qualidade */}
            <motion.div 
              {...fadeIn}
              className="bg-accent rounded-3xl p-8 flex flex-col justify-center"
            >
              <div className="bg-primary text-white w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">Qualidade Garantida</h3>
              <p className="text-primary/80">Prezamos pela execução impecável, avaliando custos e maquinários ideais para cada projeto.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-10 sm:py-20 bg-white overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-1/2"
            >
              <div className="relative">
                <img 
                  src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhPFh5WpIQ4gKAWNsOaTLHPfFRNO3tC6Hb5tfCn9m4vZP0tVbBWem1EcQ47RHXcTsrgJu_niwkV3960JltCBRhaYKlPMVQZ7DqayjDqPuleg-2ZSr8_9ZJj_uiQ2OMXlwEN5mm8DX6YxpHULge2G-VvrQjzOP-6qkhxIabqj7RwaS6Yjl2SkE4MlSm53lA/s16000/sobre.png" 
                  alt="Equipe Oliveira em campo" 
                  className="rounded-3xl shadow-2xl relative z-10 w-full"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-accent rounded-3xl -z-0 hidden sm:block"></div>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-1/2"
            >
              <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Nossa História</span>
              <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-primary mb-6">
                Compromisso com a Base da sua Construção
              </h2>
              <p className="text-slate-600 text-lg mb-6 leading-relaxed">
                A Oliveira Fundações e Terraplenagem é uma empresa especializada que oferece uma ampla gama de serviços para seu terreno. Prezamos pela qualidade e por uma execução de forma eficiente, avaliando os custos e os maquinários a serem empregados, entregando assim as melhores opções para sua obra.
              </p>
              <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                Nossos equipamentos de alta tecnologia e mão de obra especializada garantem a eficácia de nossos serviços em toda a região de Valinhos e Campinas.
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center text-primary">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <span className="font-bold text-primary">Eficiência</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center text-primary">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <span className="font-bold text-primary">Tecnologia</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center text-primary">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <span className="font-bold text-primary">Confiança</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-10 sm:py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold mb-4">O que dizem nossos parceiros</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, idx) => (
              <motion.div 
                key={idx}
                {...fadeIn}
                className="bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-sm"
              >
                <div className="flex gap-1 text-accent mb-6">
                  {[...Array(5)].map((_, i) => <Zap key={i} className="w-4 h-4 fill-current" />)}
                </div>
                <p className="text-white/80 italic mb-8 leading-relaxed">"{t.text}"</p>
                <div>
                  <div className="font-bold text-lg">{t.name}</div>
                  <div className="text-accent text-sm uppercase tracking-wider">{t.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 sm:py-20 bg-accent relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 skew-x-12 translate-x-1/2"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-primary mb-8">
              Pronto para começar sua obra com o pé direito?
            </h2>
            <p className="text-primary/80 text-xl mb-12">
              Fale agora com nossos especialistas e solicite um orçamento detalhado para seu projeto.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <motion.a 
                animate={pulseAnimation}
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary text-white px-10 py-5 rounded-full font-bold text-xl hover:scale-105 transition-transform flex items-center gap-3 shadow-xl"
              >
                <Phone className="w-6 h-6" />
                Chamar no WhatsApp
              </motion.a>
              <a 
                href={INSTAGRAM_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-primary font-bold text-lg hover:underline"
              >
                <Instagram className="w-6 h-6" />
                Siga no Instagram
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary py-10 sm:py-16 text-white/60 text-center md:text-left">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="md:col-span-2 flex flex-col items-center md:items-start">
              <img 
                src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjvJ0ddMuQxPLa5XbubCA1JwMTMQOhfUNiV6dUoKowP68P2_65dTz7AiYfXphe758sNIuT5SvoKRMAViAEsYc3naTsmfsmDK47AJDzYhMvIyyt8sC3BEHLaJKz3VL1r-yu_DtyvkwBSNJhV85TZIGig2b1zRwu6_EA4PxuvsEbeA_LZI4GQh6KNGeoIcPA/s320/logo%20olveira%20(fundo%20azul%20e%20icoens%20em%20branco%20e%20amarelo).jpeg" 
                alt="Oliveira Logo" 
                className="h-12 mb-8 rounded"
                referrerPolicy="no-referrer"
              />
              <p className="max-w-md text-lg leading-relaxed">
                Especialistas em preparar o terreno para o seu sucesso. Qualidade, tecnologia e compromisso em cada metro quadrado.
              </p>
            </div>
            <div className="hidden md:block">
              <h4 className="text-white font-bold text-lg mb-6">Navegação</h4>
              <ul className="space-y-4">
                <li><a href="#" className="hover:text-accent transition-colors">Início</a></li>
                <li><a href="#servicos" className="hover:text-accent transition-colors">Serviços</a></li>
                <li><a href="#sobre" className="hover:text-accent transition-colors">Sobre Nós</a></li>
                <li><a href="#diferenciais" className="hover:text-accent transition-colors">Diferenciais</a></li>
              </ul>
            </div>
            <div className="flex flex-col items-center md:items-start">
              <h4 className="text-white font-bold text-lg mb-6">Contato</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 justify-center md:justify-start">
                  <MapPin className="w-5 h-5 text-accent shrink-0" />
                  <span>Valinhos, Campinas e Região - SP</span>
                </li>
                <li className="flex items-center gap-3 justify-center md:justify-start">
                  <Phone className="w-5 h-5 text-accent shrink-0" />
                  <span>(19) 99383-4208</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
            <p>© Copyright 2026 - Oliveira Fundações e Terraplenagem</p>
            <div className="flex gap-6 items-center">
              <a href={INSTAGRAM_LINK} target="_blank" rel="noopener noreferrer" className="text-white hover:text-accent transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="text-white hover:text-accent transition-colors">
                <Phone className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
