import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { HiX } from 'react-icons/hi';
import { services } from '../../data/services';

const ServiceModal = ({ service, isOpen, onClose }) => {
  if (!service) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#050505]/95 z-50 backdrop-blur-md"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-4 md:inset-auto md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:w-full md:max-w-4xl bg-[#0a0a0a] border border-white/10 z-50 flex flex-col md:flex-row h-[90vh] md:h-[70vh] rounded-none overflow-hidden"
          >
            {/* Header / Accent Column */}
            <div className="relative bg-artnetwork-primary text-white p-8 md:p-12 md:w-1/3 flex flex-col justify-between">
              <button
                onClick={onClose}
                className="md:hidden absolute top-4 right-4 w-10 h-10 border border-white/20 flex items-center justify-center hover:bg-white hover:text-artnetwork-primary transition-colors"
              >
                <HiX className="w-5 h-5" />
              </button>

              <div>
                <div className="w-12 h-12 flex items-center justify-center border border-white/30 mb-8" aria-hidden="true">
                  <service.icon className="w-6 h-6" />
                </div>
                <h3 className="text-3xl font-heading font-bold mb-4 tracking-tight leading-none">
                  {service.title}
                </h3>
              </div>
              
              <div className="hidden md:block">
                <span className="text-[10px] uppercase font-body tracking-[0.2em] opacity-50">ArtNetwork Standard</span>
              </div>
            </div>

            {/* Content Column */}
            <div className="flex-1 overflow-y-auto p-8 md:p-12 relative flex flex-col">
              <button
                onClick={onClose}
                className="hidden md:flex absolute top-8 right-8 w-12 h-12 border border-white/10 items-center justify-center hover:bg-white hover:text-black transition-colors text-white"
              >
                <HiX className="w-5 h-5" />
              </button>

              <p className="text-white/80 font-body text-lg leading-relaxed mb-12 max-w-xl">
                {service.extendedDescription || service.description}
              </p>

              <div className="mb-12">
                <h4 className="text-xs font-body font-bold text-white uppercase tracking-[0.2em] mb-6 border-b border-white/10 pb-4">
                  O que inclui
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
                  {service.features?.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-4">
                      <span className="text-artnetwork-primary font-bold mt-1 text-xs">0{idx + 1}</span>
                      <span className="text-white/80 font-body text-sm font-light">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <div className="mt-auto pt-8 border-t border-white/10">
                <a
                  href="#contacto"
                  onClick={onClose}
                  className="inline-flex items-center justify-between w-full p-4 bg-white text-black font-body font-bold text-xs uppercase tracking-[0.2em] hover:bg-artnetwork-primary hover:text-white transition-colors group"
                >
                  <span>Solicitar Orçamento</span>
                  <span className="group-hover:translate-x-2 transition-transform">→</span>
                </a>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

const ServiceCard = ({ service, index, onOpenModal }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className={`group relative border-t p-6 sm:p-8 flex flex-col md:flex-row gap-6 md:gap-8 items-start md:items-center justify-between hover:bg-white/[0.03] transition-colors cursor-pointer overflow-hidden ${
        index === 0 
          ? 'border-artnetwork-primary/50 bg-gradient-to-r from-artnetwork-primary/[0.03] to-transparent shadow-[inset_0_1px_20px_rgba(200,20,50,0.05)]' 
          : 'border-white/30'
      }`}
      onClick={() => onOpenModal(service)}
    >
      {/* Decorative pulse for the AI card */}
      {index === 0 && (
        <div className="absolute top-0 right-1/4 w-32 h-px bg-gradient-to-r from-transparent via-artnetwork-primary to-transparent opacity-50 group-hover:opacity-100 transition-opacity"></div>
      )}

      <div className="flex items-start md:items-center gap-4 md:gap-8 w-full md:w-1/2">
        <span className={`text-xl md:text-2xl font-heading font-bold tracking-tighter mt-1 md:mt-0 ${index === 0 ? 'text-white' : 'text-artnetwork-primary'}`}>
          {String(index + 1).padStart(2, '0')}
        </span>
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-1 md:mb-2">
            <h3 className="text-2xl lg:text-3xl font-heading font-bold text-white leading-tight">
              {service.title}
            </h3>
            {index === 0 && (
              <span className="px-2 py-[2px] border border-artnetwork-primary bg-artnetwork-primary/10 text-artnetwork-primary text-[8px] uppercase font-bold tracking-[0.2em] rounded-full hidden sm:inline-block">
                Core
              </span>
            )}
          </div>
        </div>
      </div>

      <div className="w-full md:w-1/2 flex items-center justify-between md:justify-end gap-6 pl-10 md:pl-0">
         <p className="font-body text-sm text-white/70 font-light line-clamp-2 md:block max-w-[280px] text-left md:text-right hidden sm:block">
            {service.description}
         </p>
         <button 
           className="w-12 h-12 rounded-full border border-white/40 flex items-center justify-center text-white group-hover:bg-white group-hover:text-black group-hover:border-white transition-all shrink-0 md:ml-6"
           aria-label={`Saber mais sobre ${service.title}`}
         >
            <svg className="w-5 h-5 -rotate-45" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
         </button>
      </div>
    </motion.div>
  );
};

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [selectedService, setSelectedService] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id="servicos" className="py-24 lg:py-32 bg-black relative">
      <div className="container-custom px-6 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-2xl"
          >

            <h2 className="text-5xl lg:text-7xl font-heading font-bold text-white leading-[0.9] tracking-tighter uppercase">
              Estratégia <br />
              <span className="text-white/40 italic font-normal tracking-wide lowercase">Aplicada</span>
            </h2>
          </motion.div>
          
          <motion.div
             initial={{ opacity: 0, x: 30 }}
             animate={inView ? { opacity: 1, x: 0 } : {}}
             transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
             <p className="text-white/70 font-body max-w-sm text-sm lg:text-base font-light leading-relaxed">
               Não entregamos ferramentas genéricas. Entregamos vantagens competitivas através 
               de tecnologias de ponta e precisão brutal.
             </p>
          </motion.div>
        </div>

        {/* Services List - Brutalist Editorial List */}
        <div className="border-b border-white/30">
          {services.map((service, index) => (
            <ServiceCard
              key={service.id}
              service={service}
              index={index}
              onOpenModal={(s) => {
                setSelectedService(s);
                setIsModalOpen(true);
              }}
            />
          ))}
        </div>

      </div>

      <ServiceModal
        service={selectedService}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
};

export default Services;
