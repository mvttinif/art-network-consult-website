import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { portfolioItems, categories } from '../../data/portfolio';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';

const PortfolioCard = ({ item }) => {
  const isLink = item.status !== 'coming-soon' && item.url && item.url !== '#';
  
  const CardContent = (
    <div className="relative aspect-[4/5] overflow-hidden bg-[#050505] border border-white/10 group-hover:border-white/40 transition-colors duration-500">
      <img
        src={item.image}
        alt={item.title}
        className={`w-full h-full object-cover transition-all duration-700 ${
          item.status === 'coming-soon'
            ? 'opacity-30 mix-blend-luminosity scale-100 group-hover:scale-105 group-hover:opacity-40 blur-[2px]'
            : 'opacity-70 group-hover:scale-105 group-hover:opacity-100'
        }`}
      />

      {/* Base Gradient Overlay (always visible to ensure title contrast) */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent z-10" />

      {/* Hover Dark Gradient Overlay (fades in on hover to ensure description readability) */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />

      {/* Coming Soon Overlay */}
      {item.status === 'coming-soon' && (
        <div className="absolute top-4 right-4 z-20 bg-white/10 backdrop-blur-md text-white border border-white/10 px-3 py-1 rounded-full">
          <span className="text-[9px] font-body font-bold tracking-[0.15em] uppercase">
            Em Breve
          </span>
        </div>
      )}

      {/* Content Overlay */}
      <div className="absolute inset-0 flex flex-col justify-end z-20">
        <div className="w-full p-6 md:p-8 pb-8 md:pb-10">
          <div className="flex flex-col justify-end items-start gap-3">
            <div className="w-full">
              <span className="inline-block text-artnetwork-primary font-body text-[10px] font-bold uppercase tracking-[0.2em] mb-2 bg-white/5 px-3 py-1 rounded-full border border-white/5">
                {item.category}
              </span>
      
              <h3 className="text-2xl md:text-3xl font-heading font-bold text-white leading-tight uppercase mb-2 tracking-tight">
                {item.title}
              </h3>

              {item.description && (
                <p className="text-white/80 text-sm font-body font-light line-clamp-3 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100">
                  {item.description}
                </p>
              )}
            </div>
            
            <div className="flex flex-wrap gap-2 w-full mt-2 justify-between items-center">
              {item.tags && (
                <div className="flex flex-wrap gap-1.5">
                  {item.tags.map((tag) => (
                    <span key={tag} className="text-[9px] uppercase tracking-wider text-white/40 bg-white/5 border border-white/10 px-2 py-0.5 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              {item.status !== 'coming-soon' && (
                <div className="group/btn flex w-10 h-10 border border-white/20 rounded-full items-center justify-center text-white bg-white/5 hover:bg-white hover:text-black transition-all duration-500 shrink-0">
                  <span className="text-lg transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform">↗</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  if (isLink) {
    return (
      <a
        href={item.url}
        target="_blank"
        rel="noopener noreferrer"
        className="block group relative h-full cursor-pointer"
      >
        {CardContent}
      </a>
    );
  }

  return (
    <div className="group relative h-full cursor-default">
      {CardContent}
    </div>
  );
};

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('Todos');
  const [swiperInstance, setSwiperInstance] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  
  const [titleRef, titleInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [sectionRef, sectionInView] = useInView({
    threshold: 0.1,
  });

  const filteredItems =
    activeCategory === 'Todos'
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeCategory);

  // Reset swiper position when category changes
  useEffect(() => {
    if (swiperInstance) {
      swiperInstance.slideTo(0);
    }
  }, [activeCategory, swiperInstance]);

  // Pause/Play autoplay based on whether the section is in view
  useEffect(() => {
    if (swiperInstance && swiperInstance.autoplay) {
      if (sectionInView) {
        swiperInstance.autoplay.start();
      } else {
        swiperInstance.autoplay.stop();
      }
    }
  }, [sectionInView, swiperInstance]);

  return (
    <section ref={sectionRef} id="portfolio" className="py-24 lg:py-32 bg-[#0a0a0a] relative border-t border-white/10 overflow-hidden">
      
      {/* Header Container */}
      <div className="container-custom px-6 lg:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 mb-20">
          <motion.div
            ref={titleRef}
            initial={{ opacity: 0, y: 30 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
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
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap gap-4 lg:justify-end"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 text-[10px] font-body font-bold uppercase tracking-[0.2em] transition-all duration-300 border cursor-pointer ${
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

      {/* Portfolio Carousel */}
      <div className="container-custom px-6 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="w-full"
        >
          <Swiper
            onSwiper={setSwiperInstance}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            modules={[Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 8000, disableOnInteraction: false }}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="portfolio-swiper"
          >
            {filteredItems.map((item) => (
              <SwiperSlide key={item.id}>
                <PortfolioCard item={item} />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Controls */}
          <div className="flex items-center gap-6 mt-12 justify-center">
            <button
              onClick={() => swiperInstance?.slidePrev()}
              aria-label="Projeto anterior"
              className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black hover:border-white transition-all cursor-pointer bg-white/5 active:scale-95"
            >
              <span className="text-xl">←</span>
            </button>

            {/* Custom dots */}
            <div className="flex gap-2">
              {filteredItems.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => swiperInstance?.slideToLoop(idx)}
                  aria-label={`Ir para slide ${idx + 1}`}
                  className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                    activeIndex === idx ? 'w-8 bg-artnetwork-primary' : 'w-2 bg-white/20 hover:bg-white/40'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={() => swiperInstance?.slideNext()}
              aria-label="Próximo projeto"
              className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black hover:border-white transition-all cursor-pointer bg-white/5 active:scale-95"
            >
              <span className="text-xl">→</span>
            </button>
          </div>
        </motion.div>
      </div>

      {/* Bottom CTA Container */}
      <div className="container-custom px-6 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
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
