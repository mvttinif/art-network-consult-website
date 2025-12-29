import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { testimonials } from '../../data/testimonials';
import { HiStar } from 'react-icons/hi';
import { FaQuoteLeft } from 'react-icons/fa';

import 'swiper/css';
import 'swiper/css/pagination';

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="relative p-8 h-full">
      {/* Background card */}
      <div className="absolute inset-0 bg-white rounded-3xl shadow-lg" />

      {/* Decorative accent */}
      <div className="absolute top-0 left-8 w-20 h-1 bg-gradient-to-r from-artnetwork-primary to-artnetwork-bright rounded-full" />

      <div className="relative z-10">
        {/* Quote Icon */}
        <FaQuoteLeft className="w-8 h-8 text-artnetwork-primary/20 mb-4" />

        {/* Stars */}
        <div className="flex gap-1 mb-4">
          {[...Array(5)].map((_, i) => (
            <HiStar key={i} className="w-5 h-5 text-yellow-400" />
          ))}
        </div>

        {/* Testimonial Text */}
        <p className="text-gray-700 leading-relaxed mb-8 text-lg">
          "{testimonial.text}"
        </p>

        {/* Author */}
        <div className="flex items-center gap-4">
          <div className="relative">
            <img
              src={testimonial.image}
              alt={testimonial.author}
              className="w-14 h-14 rounded-full object-cover ring-2 ring-artnetwork-primary/20"
            />
            <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-artnetwork-primary rounded-full flex items-center justify-center">
              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
          <div>
            <h4 className="font-heading font-bold text-artnetwork-dark">
              {testimonial.author}
            </h4>
            <p className="text-gray-500 text-sm">
              {testimonial.role}, {testimonial.company}
            </p>
          </div>
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
    <section id="testemunhos" className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-artnetwork-primary/5 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-artnetwork-bright/5 rounded-full blur-3xl -translate-y-1/2" />

      <div className="container-custom px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-flex items-center gap-2 text-artnetwork-primary font-medium uppercase tracking-wider text-sm mb-4">
            <span className="w-8 h-[2px] bg-artnetwork-primary" />
            Testemunhos
            <span className="w-8 h-[2px] bg-artnetwork-primary" />
          </span>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-artnetwork-dark leading-tight">
            Clientes que
            <span className="text-artnetwork-primary"> confiam</span> em nós
          </h2>

          <p className="text-gray-600 text-lg mt-6">
            Histórias reais de empresas que transformaram a sua presença digital connosco.
          </p>
        </motion.div>

        {/* Testimonials Slider */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={24}
            slidesPerView={1}
            pagination={{
              clickable: true,
              bulletClass: 'swiper-pagination-bullet !bg-artnetwork-primary/30 !w-3 !h-3',
              bulletActiveClass: '!bg-artnetwork-primary !w-8 !rounded-full',
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="pb-16"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id} className="h-auto py-2">
                <TestimonialCard testimonial={testimonial} />
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 flex flex-wrap justify-center items-center gap-8 text-gray-400 text-sm"
        >
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-artnetwork-primary" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>100% Clientes Satisfeitos</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-artnetwork-primary" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>Suporte Dedicado</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-artnetwork-primary" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>Resultados Comprovados</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
