import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { HiOutlineArrowRight } from 'react-icons/hi';
import { sendEmail } from '../../utils/emailService';

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });

  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    if (!formData.name || !formData.email || !formData.message) {
      setStatus({
        type: 'error',
        message: 'Por favor, preencha os campos obrigatórios.',
      });
      setIsSubmitting(false);
      return;
    }

    const result = await sendEmail(formData);

    if (result.success) {
      setStatus({
        type: 'success',
        message: 'Mensagem enviada com sucesso.',
      });
      setFormData({ name: '', email: '', company: '', message: '' });
    } else {
      setStatus({
        type: 'error',
        message: 'Erro ao enviar. Tente novamente.',
      });
    }

    setIsSubmitting(false);
  };

  return (
    <section id="contacto" className="py-24 lg:py-32 pb-32 lg:pb-40 bg-[#050505] relative border-t border-white/10">
      <div className="container-custom px-6 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="relative mb-24 lg:mb-32">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col lg:flex-row lg:items-end justify-between gap-8"
          >
            <div className="relative">

              <h2 className="text-5xl md:text-7xl lg:text-[8rem] font-heading font-bold text-white leading-[0.85] tracking-tighter uppercase">
                Vamos <br />
                <span className="text-white/20 italic font-normal tracking-wide lowercase">Conversar?</span>
              </h2>
            </div>
            
            <div className="lg:mb-6 max-w-sm pr-16 lg:pr-0">
              <p className="text-white/60 font-body text-base lg:text-lg font-light leading-relaxed border-l-2 border-artnetwork-primary pl-6">
                Pronto para transformar o seu projeto? Preencha o formulário e a nossa equipa entrará em contacto para uma consulta estratégica.
              </p>
            </div>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-12 xl:gap-20">
          {/* Left: Contact Details / Minimalist info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col justify-between"
          >
            <div className="space-y-16">
              <div className="group">
                <span className="text-[10px] uppercase font-body font-bold tracking-[0.4em] text-artnetwork-primary block mb-4 opacity-50 group-hover:opacity-100 transition-opacity">Email</span>
                <a 
                  href="mailto:contacto@artnetworkconsult.com" 
                  className="text-xl sm:text-2xl lg:text-xl xl:text-[1.75rem] 2xl:text-3xl font-heading font-bold text-white hover:text-artnetwork-primary transition-all duration-300 border-b border-white/10 group-hover:border-artnetwork-primary pb-6 block w-fit max-w-full tracking-tighter whitespace-nowrap"
                >
                  contacto@artnetworkconsult.com
                </a>
              </div>
              
              <div className="group">
                <span className="text-[10px] uppercase font-body font-bold tracking-[0.4em] text-artnetwork-primary block mb-4 opacity-50 group-hover:opacity-100 transition-opacity">Telefone & WhatsApp</span>
                <a 
                  href="tel:+351932240189" 
                  className="text-xl sm:text-2xl lg:text-xl xl:text-[1.75rem] 2xl:text-3xl font-heading font-bold text-white hover:text-artnetwork-primary transition-all duration-300 border-b border-white/10 group-hover:border-artnetwork-primary pb-6 block w-fit max-w-full tracking-tighter"
                >
                  +351 932 240 189
                </a>
              </div>

              <div className="pt-8 grid grid-cols-1 sm:grid-cols-2 gap-12 border-t border-white/5">
                <div>
                  <span className="text-[10px] uppercase font-body font-bold tracking-[0.3em] text-white/40 block mb-6">Apoio ao Cliente</span>
                  <ul className="space-y-4 font-body text-sm text-white/60">
                    <li className="flex justify-between items-center group/item hover:text-white transition-colors">
                       <span className="font-light">Segunda - Sexta</span>
                       <span className="text-white font-bold h-px w-8 bg-white/20 mx-4 hidden sm:block"></span>
                       <span className="text-white font-medium">9:00 - 18:00</span>
                    </li>
                    <li className="flex justify-between items-center group/item hover:text-white transition-colors">
                       <span className="font-light">Sábado</span>
                       <span className="text-white font-bold h-px w-8 bg-white/20 mx-4 hidden sm:block"></span>
                       <span className="text-white font-medium">10:00 - 14:00</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <span className="text-[10px] uppercase font-body font-bold tracking-[0.3em] text-white/40 block mb-6">Localização</span>
                  <p className="text-white/70 font-body text-sm leading-relaxed">
                    Portugal <span className="text-artnetwork-primary mx-2">/</span> Disponibilidade <span className="text-white font-bold italic">Global</span>
                  </p>
                  <p className="text-white/30 font-body text-[10px] uppercase tracking-[0.2em] mt-4">
                    Focado em Resultados que Escalam.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Modern Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="p-8 lg:p-16 border border-white/10 relative overflow-hidden group/form bg-white/[0.02]"
          >
              {/* Subtle accent border */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-artnetwork-primary/5 blur-3xl rounded-full -mr-16 -mt-16 group-hover/form:bg-artnetwork-primary/10 transition-all duration-700"></div>
              
              <form onSubmit={handleSubmit} className="space-y-12 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="relative group">
                  <label className="text-[10px] uppercase font-body font-bold tracking-[0.2em] text-white/40 mb-2 block">Nome</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-white/20 py-2 text-white focus:border-artnetwork-primary outline-none transition-all font-body text-lg font-light"
                    required
                  />
                </div>
                <div className="relative group">
                  <label className="text-[10px] uppercase font-body font-bold tracking-[0.2em] text-white/40 mb-2 block">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-white/20 py-2 text-white focus:border-artnetwork-primary outline-none transition-all font-body text-lg font-light"
                    required
                  />
                </div>
              </div>

              <div className="relative group">
                <label className="text-[10px] uppercase font-body font-bold tracking-[0.2em] text-white/40 mb-2 block">Empresa (opcional)</label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-white/20 py-2 text-white focus:border-artnetwork-primary outline-none transition-all font-body text-lg font-light"
                />
              </div>

              <div className="relative group">
                <label className="text-[10px] uppercase font-body font-bold tracking-[0.2em] text-white/40 mb-2 block">Como podemos ajudar?</label>
                 <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full bg-transparent border-b border-white/20 py-2 text-white focus:border-artnetwork-primary outline-none transition-all font-body text-lg font-light resize-none"
                  required
                />
              </div>

              {status.message && (
                <div className={`text-sm font-body ${status.type === 'success' ? 'text-green-400' : 'text-artnetwork-primary'}`}>
                  {status.message}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full group relative flex items-center justify-between p-6 bg-white hover:bg-artnetwork-primary text-black hover:text-white transition-all duration-500 overflow-hidden"
              >
                <div className="absolute inset-0 w-0 bg-artnetwork-primary group-hover:w-full transition-all duration-500 ease-out -z-10"></div>
                <span className="font-heading font-bold text-lg uppercase tracking-tighter">
                  {isSubmitting ? 'A processar pedido...' : 'Enviar Pedido de Consulta'}
                </span>
                <div className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center bg-black/5 group-hover:bg-white/20 group-hover:border-white/20 transition-all">
                  <HiOutlineArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </div>
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
