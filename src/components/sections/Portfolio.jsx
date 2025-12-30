import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { portfolioItems } from '../../data/portfolio';
import { HiArrowRight } from 'react-icons/hi';

const categories = ['Todos', 'Website', 'Loja Online', 'Sistema Web', 'Marketing Digital'];

const PortfolioCard = ({ item, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-artnetwork-dark">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />

        {/* Content */}
        <div className="absolute inset-0 p-6 flex flex-col justify-end">
          {/* Category */}
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: isHovered ? 1 : 0.7, y: isHovered ? 0 : 10 }}
            className="inline-block self-start px-3 py-1 bg-artnetwork-primary text-white text-xs font-medium rounded-full mb-3"
          >
            {item.category}
          </motion.span>

          {/* Title */}
          <h3 className="text-xl md:text-2xl font-heading font-bold text-white mb-2 transition-transform duration-300 group-hover:translate-x-2">
            {item.title}
          </h3>

          {/* Description - shows on hover */}
          <motion.p
            initial={{ opacity: 0, height: 0 }}
            animate={{
              opacity: isHovered ? 1 : 0,
              height: isHovered ? 'auto' : 0,
            }}
            transition={{ duration: 0.3 }}
            className="text-gray-300 text-sm overflow-hidden"
          >
            {item.description}
          </motion.p>

          {/* View button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? 0 : -20 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="mt-4 flex items-center gap-2 text-artnetwork-primary font-medium"
          >
            <span>Ver projeto</span>
            <HiArrowRight className="w-4 h-4" />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('Todos');
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const filteredItems =
    activeCategory === 'Todos'
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeCategory);

  return (
    <section id="portfolio" className="py-24 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-gray-50 to-transparent pointer-events-none" />

      <div className="container-custom px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-12">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <span className="inline-flex items-center gap-2 text-artnetwork-primary font-medium uppercase tracking-wider text-sm mb-4">
              <span className="w-8 h-[2px] bg-artnetwork-primary" />
              Portfólio
            </span>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-artnetwork-dark leading-tight">
              Projetos que
              <span className="block">
                <span className="text-artnetwork-primary">inspiram</span> confiança
              </span>
            </h2>
          </motion.div>

          {/* Filter Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap gap-2"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeCategory === category
                    ? 'bg-artnetwork-primary text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
              >
                {category}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Portfolio Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
              <PortfolioCard key={item.id} item={item} index={index} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 flex flex-col md:flex-row items-center justify-between gap-6 p-6 md:p-8 rounded-2xl bg-gradient-to-r from-artnetwork-dark to-black overflow-hidden"
        >
          <div className="text-center md:text-left">
            <h3 className="text-xl md:text-2xl font-heading font-bold text-white mb-2">
              Tem um projeto em mente?
            </h3>
            <p className="text-gray-400">
              Vamos criar algo incrível juntos.
            </p>
          </div>
          <a
            href="#contacto"
            className="inline-flex items-center gap-2 px-6 md:px-8 py-3 md:py-4 bg-artnetwork-primary text-white font-semibold rounded-xl hover:bg-artnetwork-bright transition-colors whitespace-nowrap"
          >
            Começar Projeto
            <HiArrowRight className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
