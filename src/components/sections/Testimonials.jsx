import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { testimonials } from '../../data/testimonials';

import 'swiper/css';
import 'swiper/css/pagination';

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="relative p-8 md:p-12 h-full border border-white/10 bg-[#050505] hover:bg-white/5 transition-colors">
      
      <div className="relative z-10 flex flex-col h-full justify-between">
        <div>
          {/* Quote Icon Minimal */}
          <div className="text-white/20 font-heading text-6xl leading-none mb-6">"</div>

          {/* Testimonial Text */}
          <p className="text-white/80 font-body leading-relaxed mb-12 text-lg lg:text-xl font-light">
            {testimonial.text}
          </p>
        </div>

        {/* Author */}
        <div className="flex flex-col gap-2 mt-auto border-t border-white/10 pt-6">
          <h4 className="font-heading font-bold text-white text-lg uppercase tracking-tight">
            {testimonial.author}
          </h4>
          <p className="text-artnetwork-primary text-[10px] font-body font-bold uppercase tracking-[0.2em]">
            {testimonial.role} <span className="text-white/30 mx-2">—</span> {testimonial.company}
          </p>
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="testemunhos" className="py-24 lg:py-32 bg-[#050505] relative border-t border-white/10">

      <div className="container-custom px-6 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 mb-20">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-2xl"
          >


            <h2 className="text-5xl lg:text-7xl font-heading font-bold text-white leading-[0.9] tracking-tighter uppercase">
              O Nosso <br />
              <span className="text-white/40 italic font-normal tracking-wide lowercase">Impacto</span>
            </h2>
          </motion.div>
          <motion.div
             initial={{ opacity: 0, x: 30 }}
             animate={inView ? { opacity: 1, x: 0 } : {}}
             transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
             <p className="text-white/50 font-body max-w-sm text-sm lg:text-base font-light">
               Resultados em estado puro. Construímos autoridade e superamos expectativas, um projeto de cada vez.
             </p>
          </motion.div>
        </div>

        {/* Testimonials Slider */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={0}
            slidesPerView={1}
            pagination={{
              clickable: true,
              bulletClass: 'swiper-pagination-bullet !bg-white/20 !w-2 !h-2 !rounded-none',
              bulletActiveClass: '!bg-artnetwork-primary !w-8',
            }}
            autoplay={{
              delay: 6000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 2 },
            }}
            className="pb-20 border-b border-t border-white/10"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id} className="h-auto">
                <TestimonialCard testimonial={testimonial} />
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        {/* Trust indicators Stark */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-8 max-w-4xl"
        >
          <div className="flex flex-col gap-2 border-l border-artnetwork-primary pl-4">
            <span className="text-white font-heading font-bold text-2xl uppercase tracking-tighter italic">Excelência</span>
            <span className="text-white/50 font-body text-[10px] uppercase tracking-[0.2em] font-bold">Padrão Digital</span>
          </div>
          <div className="flex flex-col gap-2 border-l border-white/20 pl-4">
            <span className="text-white font-heading font-bold text-2xl uppercase tracking-tighter">Apoio</span>
            <span className="text-white/50 font-body text-[10px] uppercase tracking-[0.2em] font-bold">Consultivo</span>
          </div>
          <div className="flex flex-col gap-2 border-l border-white/20 pl-4">
            <span className="text-white font-heading font-bold text-2xl uppercase tracking-tighter italic">Resultados</span>
            <span className="text-white/50 font-body text-[10px] uppercase tracking-[0.2em] font-bold">Tangíveis</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
