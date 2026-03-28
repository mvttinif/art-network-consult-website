import { useState, useEffect, useRef } from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import Spline from '@splinetool/react-spline';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center bg-black overflow-hidden selection:bg-artnetwork-primary selection:text-white"
    >
      {/* Editorial Grid overlay for structure */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.02] z-0 flex justify-between px-6 lg:px-12">
        <div className="w-[1px] h-full bg-white"></div>
        <div className="w-[1px] h-full bg-white"></div>
        <div className="w-[1px] h-full bg-white"></div>
        <div className="w-[1px] h-full bg-white"></div>
      </div>
      
      {/* Dynamic 3D Element via Spline (Spans background) */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-auto">
         <Spline 
          scene="https://prod.spline.design/ePI80qDtDhPPhf2g/scene.splinecode" 
          onLoad={() => setIsLoaded(true)}
          aria-label="ArtNetwork Nucleus - Interativo 3D"
          role="img"
        />
        {!isLoaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-black">
            <motion.div 
              animate={{ opacity: [0.4, 1, 0.4] }} 
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="text-white/60 tracking-widest text-xs font-body font-bold"
            >
              INITIALIZING 3D ENVIRONMENT...
            </motion.div>
          </div>
        )}
      </div>

      {/* Container - enable pointer events none on container so we can click background, and auto on content */}
      <div className="container-custom relative z-10 px-6 lg:px-12 w-full pt-16 lg:pt-0 pointer-events-none">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8 mt-12 mb-8">
          
          {/* Left Side: Editorial Typography Content */}
          <div className="w-full lg:w-[60%] flex flex-col items-start text-left lg:py-12 pointer-events-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex items-center gap-4 mb-6">
                <span className="h-px w-12 bg-artnetwork-primary"></span>
                <span className="text-white/90 text-sm font-body font-bold uppercase tracking-[0.25em] flex items-center gap-3">
                  Agência de IA e Digital 
                  <span className="px-2 py-0.5 rounded-full bg-artnetwork-primary/20 text-artnetwork-primary border border-artnetwork-primary/30 text-[9px] flex items-center gap-1 animate-pulse">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
                    POWERED BY AI
                  </span>
                </span>
              </div>

              <h1 className="text-5xl md:text-6xl xl:text-[6rem] font-heading font-bold text-white leading-[0.95] tracking-tight mb-6 pointer-events-auto">
                Moldamos <br />
                o Futuro com <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-artnetwork-primary via-red-300 to-white italic font-light tracking-wide inline-block pr-6 pb-2">
                  Inteligência 
                </span>
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-artnetwork-primary via-red-300 to-white italic font-light tracking-wide inline-block pr-6 pb-2">
                  Artificial
                </span>
              </h1>

              <p className="text-base md:text-lg text-white/80 max-w-lg mb-8 leading-relaxed font-body font-light pointer-events-auto">
                A sua agência de consultoria digital em Portugal. Desenvolvemos websites de alta performance, gerimos social media e elevamos o seu negócio através de <span className="text-white font-bold">desenvolvimento web contínuo e tecnologia baseada em IA (AI)</span>.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-6 mt-2 pointer-events-auto">
                <Link
                  to="contacto"
                  smooth={true}
                  duration={500}
                  offset={-80}
                  ignoreCancelEvents={true}
                  className="px-8 py-4 bg-artnetwork-primary hover:bg-white text-white hover:text-black font-body font-bold text-sm uppercase tracking-widest rounded-none transition-all duration-300 flex items-center justify-center gap-3 group cursor-pointer"
                >
                  <span className="relative overflow-hidden flex items-center gap-2">
                    Iniciar Projeto
                    <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </span>
                </Link>
                <Link
                  to="portfolio"
                  smooth={true}
                  duration={500}
                  offset={-80}
                  ignoreCancelEvents={true}
                  className="px-8 py-4 bg-transparent border border-white/40 hover:border-white text-white font-body font-bold text-sm uppercase tracking-widest rounded-none transition-all duration-300 flex items-center justify-center cursor-pointer"
                >
                  Ver Casos
                </Link>
              </div>

               {/* Stats Bar */}
               <div className="mt-12 pt-6 sm:pt-8 sm:border-t border-white/20 flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-12 max-w-lg pointer-events-auto bg-white/5 backdrop-blur-md p-6 border border-white/10 relative overflow-hidden">
                <div className="absolute inset-0 bg-artnetwork-primary/5 hidden sm:block"></div>
                <div className="flex flex-col gap-1 relative z-10">
                  <span className="text-xl font-heading font-bold text-white tracking-widest uppercase">Estratégia</span>
                  <span className="text-[10px] text-white/60 uppercase font-bold tracking-[0.2em] font-body">Personalizada</span>
                </div>
                <div className="flex flex-col gap-1 pt-6 sm:pt-0 pl-0 sm:pl-8 border-t sm:border-t-0 sm:border-l border-white/20 relative z-10 w-full sm:w-auto">
                  <span className="text-xl font-heading font-bold text-white tracking-widest uppercase">Impacto</span>
                  <span className="text-[10px] text-white/60 uppercase font-bold tracking-[0.2em] font-body">Mensurável</span>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>

      {/* Modern Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 right-12 hidden lg:flex items-center gap-4 origin-right rotate-90 z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <span className="text-[10px] text-white/50 uppercase tracking-[0.4em] font-body">Descubra mais</span>
        <div className="w-16 h-[1px] bg-white/20 relative overflow-hidden">
          <motion.div 
            className="absolute top-0 left-0 w-full h-full bg-artnetwork-primary origin-left"
            animate={{ scaleX: [0, 1, 0], transformOrigin: ["0% 50%", "0% 50%", "100% 50%"] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>

    </section>
  );
};

export default Hero;
