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
    <section id="contacto" className="py-24 lg:py-32 bg-[#050505] relative border-t border-white/10">
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
            <span className="inline-block text-artnetwork-primary font-body text-xs font-bold uppercase tracking-[0.2em] mb-6">
              [ 04 — Contacto ]
            </span>

            <h2 className="text-5xl lg:text-7xl font-heading font-bold text-white leading-[0.9] tracking-tighter uppercase">
              Iniciar <br />
              <span className="text-white/40 italic font-normal tracking-wide lowercase">Conversa</span>
            </h2>
          </motion.div>
          
          <motion.div
             initial={{ opacity: 0, x: 30 }}
             animate={inView ? { opacity: 1, x: 0 } : {}}
             transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
             <p className="text-white/70 font-body max-w-sm text-sm lg:text-base font-light leading-relaxed">
               Pronto para transformar o seu projeto? Preencha o formulário e a nossa equipa entrará em contacto para uma consulta estratégica.
             </p>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-2 gap-20">
          {/* Left: Contact Details / Minimalist info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col justify-between"
          >
            <div className="space-y-12">
              <div>
                <span className="text-[10px] uppercase font-body font-bold tracking-[0.3em] text-artnetwork-primary block mb-4">Direct Link</span>
                <a href="mailto:artnetworkconsult@gmail.com" className="text-2xl md:text-4xl font-heading font-bold text-white hover:text-artnetwork-primary transition-colors border-b border-white/20 pb-4 inline-block">
                  artnetworkconsult@gmail.com
                </a>
              </div>
              
              <div>
                <span className="text-[10px] uppercase font-body font-bold tracking-[0.3em] text-artnetwork-primary block mb-4">Phone Support</span>
                <a href="tel:+351965093138" className="text-2xl md:text-4xl font-heading font-bold text-white hover:text-artnetwork-primary transition-colors border-b border-white/20 pb-4 inline-block">
                  +351 965 093 138
                </a>
              </div>

              <div className="pt-12 grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                  <span className="text-[10px] uppercase font-body font-bold tracking-[0.3em] text-artnetwork-primary block mb-6">Horário de Atendimento</span>
                  <ul className="space-y-3 font-body text-sm text-white/70">
                    <li className="flex justify-between border-b border-white/5 pb-2">
                       <span>Segunda - Sexta</span>
                       <span className="text-white font-medium">9:00 - 18:00</span>
                    </li>
                    <li className="flex justify-between border-b border-white/5 pb-2">
                       <span>Sábado</span>
                       <span className="text-white font-medium">10:00 - 14:00</span>
                    </li>
                    <li className="flex justify-between">
                       <span>Domingo</span>
                       <span className="text-white font-medium italic">Fechado</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <span className="text-[10px] uppercase font-body font-bold tracking-[0.3em] text-artnetwork-primary block mb-6">Suporte Rápido</span>
                  <p className="text-white/70 font-body text-sm leading-relaxed mb-4">
                    Disponíveis também via <span className="text-white font-bold italic">WhatsApp</span> para consultas urgentes e suporte consultivo.
                  </p>
                  <p className="text-white/40 font-body text-[10px] uppercase tracking-widest leading-relaxed">
                    Portugal — Disponibilidade Global <br />
                    <span className="text-white/60">Focado em Resultados que Escalam.</span>
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Modern Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white/5 p-8 lg:p-12 border border-white/10"
          >
            <form onSubmit={handleSubmit} className="space-y-10">
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
                className="group flex items-center gap-4 text-white uppercase font-body font-bold text-xs tracking-[0.3em] hover:text-artnetwork-primary transition-colors disabled:opacity-50"
              >
                <span>{isSubmitting ? 'A Enviar' : 'Enviar Pedido'}</span>
                <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:border-artnetwork-primary transition-colors">
                  <HiOutlineArrowRight className="w-5 h-5" />
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
