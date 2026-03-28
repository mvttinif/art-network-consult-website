import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { portfolioItems, categories } from '../../data/portfolio';

const PortfolioCard = ({ item, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className={`group relative ${item.status === 'coming-soon' ? 'cursor-default' : 'cursor-pointer'}`}
    >
      {/* Image Container */}
      <div className="relative aspect-[4/5] md:aspect-[21/9] lg:aspect-[24/10] overflow-hidden bg-[#050505] border border-white/10 group-hover:border-white/40 transition-colors duration-500">
        <img
          src={item.image}
          alt={item.title}
          className={`w-full h-full object-cover transition-all duration-700 ${
            item.status === 'coming-soon' ? 'opacity-30 mix-blend-luminosity scale-105 blur-sm' : 'opacity-70 group-hover:scale-105 group-hover:opacity-100'
          }`}
        />

        {/* Coming Soon Overlay */}
        {item.status === 'coming-soon' && (
          <div className="absolute inset-0 flex items-center justify-center p-6 bg-black/40">
            <div className="bg-white text-black px-6 py-2">
              <span className="text-xs font-body font-bold tracking-[0.2em] uppercase">
                Em Breve
              </span>
            </div>
          </div>
        )}

        {/* Content Overlay */}
        <div className={`absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black via-black/40 to-transparent ${item.status === 'coming-soon' ? 'opacity-60' : ''}`}>
          <div className="container-custom w-full px-6 lg:px-12 pb-12 md:pb-20">
            <div className="flex justify-between items-end gap-8">
              <div className="max-w-3xl">
                {/* Category hidden as requested */}
                {/* <span
                  className="inline-block text-artnetwork-primary font-body text-xs font-bold uppercase tracking-[0.3em] mb-4"
                >
                  [ {item.category} ]
                </span> */}
      
                <h3 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-white leading-none tracking-tighter uppercase mb-2">
                  {item.title}
                </h3>

                <p className="text-white/70 text-base md:text-lg font-body font-light max-w-xl opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100">
                  {item.description}
                </p>
              </div>
              
              {/* View button */}
              {item.status !== 'coming-soon' && (
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/btn hidden md:flex w-20 h-20 border border-white/20 rounded-full items-center justify-center text-white bg-white/5 hover:bg-white hover:text-black transition-all duration-500 shrink-0 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500"
                  onClick={(e) => e.stopPropagation()}
                >
                  <span className="text-3xl transform group-hover/btn:translate-x-1 transition-transform">→</span>
                </a>
              )}
            </div>
          </div>
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
    <section id="portfolio" className="py-24 lg:py-32 bg-[#0a0a0a] relative border-t border-white/10 overflow-hidden">
      
      {/* Header Container */}
      <div className="container-custom px-6 lg:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 mb-20">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-2xl"
          >

            <h2 className="text-5xl lg:text-7xl font-heading font-bold text-white leading-[0.9] tracking-tighter uppercase">
              Projetos <br />
              <span className="text-white/40 italic font-normal tracking-wide lowercase">Impacto</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap gap-4 lg:justify-end"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 text-[10px] font-body font-bold uppercase tracking-[0.2em] transition-all duration-300 border ${
                  activeCategory === category
                  ? 'border-artnetwork-primary bg-artnetwork-primary text-white'
                  : 'border-white/20 text-white/50 hover:text-white hover:border-white'
                  }`}
              >
                {category}
              </button>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Portfolio Full Width Grid */}
      <div className="w-full relative z-10 border-y border-white/5">
        <div className="grid grid-cols-1">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
              <PortfolioCard key={item.id} item={item} index={index} />
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Bottom CTA Container */}
      <div className="container-custom px-6 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-32 pt-16 border-t border-white/20 flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div>
            <h3 className="text-3xl lg:text-5xl font-heading font-bold text-white mb-2 tracking-tighter uppercase">
              A SUA Próxima <br />
              <span className="text-white/40 italic font-normal lowercase italic">História de Sucesso</span>
            </h3>
            <p className="font-body text-white/40 text-sm tracking-[0.2em] uppercase mt-4">
              Ligue-se à vanguarda tecnológica.
            </p>
          </div>
          <a
            href="#contacto"
            className="group flex flex-col items-center justify-center p-8 bg-white hover:bg-artnetwork-primary text-black hover:text-white transition-colors duration-500 rounded-full shrink-0 h-40 w-40"
          >
            <span className="font-body text-[10px] uppercase tracking-[0.2em] font-bold text-center">
              Avançar
            </span>
            <span className="text-2xl mt-1 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">↗</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
