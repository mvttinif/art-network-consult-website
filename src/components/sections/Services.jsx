import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { services } from '../../data/services';

const ServiceCard = ({ service, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`group relative p-8 rounded-3xl overflow-hidden transition-all duration-500 hover:scale-[1.02] ${
        isEven
          ? 'bg-white border border-gray-100'
          : 'bg-gradient-to-br from-artnetwork-dark to-black text-white'
      }`}
    >
      {/* Decorative corner */}
      <div
        className={`absolute top-0 right-0 w-24 h-24 rounded-bl-full transition-all duration-500 group-hover:w-32 group-hover:h-32 ${
          isEven ? 'bg-artnetwork-primary/5' : 'bg-artnetwork-primary/20'
        }`}
      />

      {/* Number */}
      <span className={`text-7xl font-heading font-bold absolute top-4 right-6 ${
        isEven ? 'text-gray-100' : 'text-white/5'
      }`}>
        {String(index + 1).padStart(2, '0')}
      </span>

      {/* Icon */}
      <div className={`relative z-10 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110 ${
        isEven
          ? 'bg-artnetwork-primary text-white'
          : 'bg-white/10 text-artnetwork-primary'
      }`}>
        <service.icon className="w-7 h-7" />
      </div>

      {/* Title */}
      <h3 className={`relative z-10 text-xl font-heading font-bold mb-4 ${
        isEven ? 'text-artnetwork-dark' : 'text-white'
      }`}>
        {service.title}
      </h3>

      {/* Description */}
      <p className={`relative z-10 leading-relaxed ${
        isEven ? 'text-gray-600' : 'text-gray-400'
      }`}>
        {service.description}
      </p>

      {/* Arrow link */}
      <div className={`relative z-10 mt-6 flex items-center gap-2 font-medium transition-all duration-300 group-hover:gap-4 ${
        isEven ? 'text-artnetwork-primary' : 'text-artnetwork-bright'
      }`}>
        <span className="text-sm">Saber mais</span>
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </div>
    </motion.div>
  );
};

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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
            Soluções digitais
            <span className="block text-artnetwork-primary">que geram resultados</span>
          </h2>

          <p className="text-gray-600 text-lg mt-6 max-w-xl">
            Cada projeto é único. Desenvolvemos estratégias personalizadas
            para impulsionar o crescimento do seu negócio no mundo digital.
          </p>
        </motion.div>

        {/* Services Grid - Bento style */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
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
    </section>
  );
};

export default Services;
