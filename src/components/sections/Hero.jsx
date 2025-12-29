import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import { HiArrowDown } from 'react-icons/hi';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
  const heroRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        setMousePosition({ x, y });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section
      ref={heroRef}
      id="inicio"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        background: `
          radial-gradient(
            circle at ${mousePosition.x}% ${mousePosition.y}%,
            rgba(196, 30, 58, 0.4) 0%,
            rgba(196, 30, 58, 0.1) 25%,
            transparent 50%
          ),
          radial-gradient(
            circle at ${100 - mousePosition.x}% ${100 - mousePosition.y}%,
            rgba(239, 68, 68, 0.3) 0%,
            transparent 40%
          ),
          linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 50%, #0f0f0f 100%)
        `,
      }}
    >
      {/* Formas Orgânicas Decorativas */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Blob 1 */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="absolute -top-40 -right-40 w-[500px] h-[500px] opacity-20"
          style={{
            background: 'linear-gradient(135deg, #C41E3A 0%, #EF4444 100%)',
            borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
            filter: 'blur(40px)',
          }}
        />

        {/* Blob 2 */}
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, -90, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
          className="absolute -bottom-20 -left-20 w-[400px] h-[400px] opacity-15"
          style={{
            background: 'linear-gradient(135deg, #EF4444 0%, #C41E3A 100%)',
            borderRadius: '40% 60% 70% 30% / 40% 50% 60% 50%',
            filter: 'blur(40px)',
          }}
        />

        {/* Linhas decorativas */}
        <svg className="absolute top-20 left-10 w-40 h-40 opacity-10" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="40" fill="none" stroke="#C41E3A" strokeWidth="0.5" />
          <circle cx="50" cy="50" r="30" fill="none" stroke="#C41E3A" strokeWidth="0.5" />
          <circle cx="50" cy="50" r="20" fill="none" stroke="#C41E3A" strokeWidth="0.5" />
        </svg>

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Text Content */}
          <div className="order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8"
                style={{
                  background: 'rgba(196, 30, 58, 0.1)',
                  border: '1px solid rgba(196, 30, 58, 0.3)',
                }}
              >
                <span className="w-2 h-2 rounded-full bg-artnetwork-primary animate-pulse" />
                <span className="text-artnetwork-primary text-sm font-medium">
                  Web Design & Consultoria Digital
                </span>
              </motion.div>

              {/* Headline */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold text-white leading-[1.1] mb-6">
                Criamos
                <span className="block relative">
                  <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-artnetwork-primary to-artnetwork-bright">
                    experiências
                  </span>
                </span>
                digitais únicas
              </h1>

              {/* Description */}
              <p className="text-lg md:text-xl text-gray-400 max-w-xl mb-10 leading-relaxed">
                Transformamos a sua visão em realidade digital. Sites, lojas online
                e estratégias de marketing que <strong className="text-white">geram resultados</strong>.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap gap-4">
                <Link
                  to="contacto"
                  smooth={true}
                  duration={500}
                  className="group relative inline-flex items-center gap-2 px-8 py-4 bg-artnetwork-primary text-white font-semibold rounded-xl cursor-pointer overflow-hidden transition-transform hover:scale-105"
                >
                  <span className="relative z-10">Iniciar Projeto</span>
                  <svg className="relative z-10 w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                  <div className="absolute inset-0 bg-gradient-to-r from-artnetwork-bright to-artnetwork-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>

                <Link
                  to="portfolio"
                  smooth={true}
                  duration={500}
                  className="inline-flex items-center gap-2 px-8 py-4 text-white font-semibold rounded-xl cursor-pointer border border-white/20 hover:bg-white/5 transition-colors"
                >
                  Ver Trabalhos
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Right - Visual Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="order-1 lg:order-2 flex justify-center"
          >
            <div className="relative">
              {/* Main visual - Abstract shapes */}
              <div className="relative w-72 h-72 md:w-96 md:h-96">
                {/* Rotating ring */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                  className="absolute inset-0 rounded-full border border-artnetwork-primary/30"
                  style={{
                    borderStyle: 'dashed',
                  }}
                />

                {/* Center logo */}
                <div className="absolute inset-8 rounded-full bg-gradient-to-br from-artnetwork-dark to-black flex items-center justify-center border border-white/10">
                  <img
                    src="/ArtNetwork Logo.svg"
                    alt="ArtNetwork"
                    className="w-24 h-24 md:w-32 md:h-32 object-contain rounded-2xl"
                  />
                </div>

                {/* Floating elements */}
                <motion.div
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute -top-4 right-8 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg border border-white/10"
                >
                  <span className="text-white text-sm font-medium">Web Design</span>
                </motion.div>

                <motion.div
                  animate={{ y: [10, -10, 10] }}
                  transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute -bottom-4 left-8 px-4 py-2 bg-artnetwork-primary/20 backdrop-blur-sm rounded-lg border border-artnetwork-primary/30"
                >
                  <span className="text-white text-sm font-medium">Marketing Digital</span>
                </motion.div>

                <motion.div
                  animate={{ x: [-10, 10, -10] }}
                  transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute top-1/2 -right-8 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg border border-white/10"
                >
                  <span className="text-white text-sm font-medium">Lojas Online</span>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 pt-10 border-t border-white/10"
        >
          <div className="grid grid-cols-3 gap-8 max-w-2xl">
            <div>
              <div className="text-3xl md:text-4xl font-heading font-bold text-white">
                100<span className="text-artnetwork-primary">+</span>
              </div>
              <div className="text-sm text-gray-500 mt-1">Projetos Entregues</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-heading font-bold text-white">
                50<span className="text-artnetwork-primary">+</span>
              </div>
              <div className="text-sm text-gray-500 mt-1">Clientes Satisfeitos</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-heading font-bold text-white">
                5<span className="text-artnetwork-primary">+</span>
              </div>
              <div className="text-sm text-gray-500 mt-1">Anos de Experiência</div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 z-20"
        style={{ transform: 'translateX(-50%)' }}
      >
        <Link
          to="servicos"
          smooth={true}
          duration={500}
          className="cursor-pointer"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-gray-500 hover:text-artnetwork-primary transition-colors"
          >
            <span className="text-xs uppercase tracking-widest">Explorar</span>
            <HiArrowDown className="w-5 h-5" />
          </motion.div>
        </Link>
      </motion.div>
    </section>
  );
};

export default Hero;
