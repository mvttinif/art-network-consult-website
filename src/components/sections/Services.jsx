import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { HiX, HiCheck } from 'react-icons/hi';
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
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-4 md:inset-auto md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:w-full md:max-w-2xl md:max-h-[85vh] bg-white rounded-3xl shadow-2xl z-50 overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="relative bg-gradient-to-br from-artnetwork-dark to-black p-8 pb-12">
              <button
                onClick={onClose}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <HiX className="w-5 h-5 text-white" />
              </button>

              <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mb-6">
                <service.icon className="w-8 h-8 text-artnetwork-primary" />
              </div>

              <h3 className="text-2xl md:text-3xl font-heading font-bold text-white mb-2">
                {service.title}
              </h3>
              <p className="text-gray-400">
                {service.description}
              </p>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-8">
              <p className="text-gray-600 leading-relaxed mb-8">
                {service.extendedDescription}
              </p>

              <h4 className="text-lg font-heading font-bold text-artnetwork-dark mb-4">
                O que inclui
              </h4>

              <ul className="space-y-3 mb-8">
                {service.features?.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-artnetwork-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <HiCheck className="w-3 h-3 text-artnetwork-primary" />
                    </div>
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href="#contacto"
                onClick={onClose}
                className="inline-flex items-center gap-2 px-6 py-3 bg-artnetwork-primary text-white font-semibold rounded-xl hover:bg-artnetwork-bright transition-colors"
              >
                Solicitar Orçamento
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
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

  // Padrão xadrez: 1 e 4 pretos, 2 e 3 brancos
  const isDark = index === 0 || index === 3;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`group relative p-8 rounded-3xl overflow-hidden transition-all duration-500 hover:scale-[1.02] ${
        isDark
          ? 'bg-gradient-to-br from-artnetwork-dark to-black text-white'
          : 'bg-white border border-gray-100'
      }`}
    >
      {/* Decorative corner */}
      <div
        className={`absolute top-0 right-0 w-24 h-24 rounded-bl-full transition-all duration-500 group-hover:w-32 group-hover:h-32 ${
          isDark ? 'bg-artnetwork-primary/20' : 'bg-artnetwork-primary/5'
        }`}
      />

      {/* Number */}
      <span className={`text-7xl font-heading font-bold absolute top-4 right-6 ${
        isDark ? 'text-white/5' : 'text-gray-100'
      }`}>
        {String(index + 1).padStart(2, '0')}
      </span>

      {/* Icon */}
      <div className={`relative z-10 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110 ${
        isDark
          ? 'bg-white/10 text-artnetwork-primary'
          : 'bg-artnetwork-primary text-white'
      }`}>
        <service.icon className="w-7 h-7" />
      </div>

      {/* Title */}
      <h3 className={`relative z-10 text-xl font-heading font-bold mb-4 ${
        isDark ? 'text-white' : 'text-artnetwork-dark'
      }`}>
        {service.title}
      </h3>

      {/* Description */}
      <p className={`relative z-10 leading-relaxed ${
        isDark ? 'text-gray-400' : 'text-gray-600'
      }`}>
        {service.description}
      </p>

      {/* Arrow link */}
      <button
        onClick={() => onOpenModal(service)}
        className={`relative z-10 mt-6 flex items-center gap-2 font-medium transition-all duration-300 group-hover:gap-4 cursor-pointer ${
          isDark ? 'text-artnetwork-bright' : 'text-artnetwork-primary'
        }`}
      >
        <span className="text-sm">Saber mais</span>
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </button>
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

  const handleOpenModal = (service) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section id="servicos" className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-artnetwork-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-artnetwork-bright/5 rounded-full blur-3xl" />
      </div>

      <div className="container-custom px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-16"
        >
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-2 text-artnetwork-primary font-medium uppercase tracking-wider text-sm mb-4"
          >
            <span className="w-8 h-[2px] bg-artnetwork-primary" />
            Serviços
          </motion.span>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-artnetwork-dark leading-tight">
            Soluções de IA
            <span className="block text-artnetwork-primary">que transformam negócios</span>
          </h2>

          <p className="text-gray-600 text-lg mt-6 max-w-xl">
            Cada projeto é único. Combinamos Inteligência Artificial e consultoria
            estratégica para impulsionar o crescimento do seu negócio.
          </p>
        </motion.div>

        {/* Services Grid - Bento style */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={service.id}
              service={service}
              index={index}
              onOpenModal={handleOpenModal}
            />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-600 mb-6">
            Não encontrou o que procura? Temos soluções para qualquer desafio digital.
          </p>
          <a
            href="#contacto"
            className="inline-flex items-center gap-2 px-8 py-4 bg-artnetwork-dark text-white font-semibold rounded-xl hover:bg-artnetwork-primary transition-colors"
          >
            Fale Connosco
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </div>

      {/* Service Modal */}
      <ServiceModal
        service={selectedService}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </section>
  );
};

export default Services;
