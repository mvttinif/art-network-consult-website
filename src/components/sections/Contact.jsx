import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  HiOutlineMail,
  HiOutlinePhone,
  HiOutlineLocationMarker,
  HiOutlineClock,
} from 'react-icons/hi';
import { sendEmail } from '../../utils/emailService';

const contactInfo = [
  {
    icon: HiOutlineMail,
    title: 'Email',
    content: 'artnetworkconsult@gmail.com',
    href: 'mailto:artnetworkconsult@gmail.com',
  },
  {
    icon: HiOutlinePhone,
    title: 'Telefone',
    content: '+351 965 093 138',
    href: 'tel:+351965093138',
  },
  {
    icon: HiOutlineLocationMarker,
    title: 'Localização',
    content: 'Portugal',
    href: null,
  },
  {
    icon: HiOutlineClock,
    title: 'Horário',
    content: 'Seg - Sex: 9h - 18h',
    href: null,
  },
];

const serviceOptions = [
  'Criação de Site',
  'Web Design',
  'Marketing Digital',
  'Loja Online',
  'Soluções de IA',
  'Sistemas Web',
  'Outro',
];

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
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

    // Validate required fields
    if (!formData.name || !formData.email || !formData.service || !formData.message) {
      setStatus({
        type: 'error',
        message: 'Por favor, preencha todos os campos obrigatórios.',
      });
      setIsSubmitting(false);
      return;
    }

    const result = await sendEmail(formData);

    if (result.success) {
      setStatus({
        type: 'success',
        message: 'Mensagem enviada com sucesso! Entraremos em contacto em breve.',
      });
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        message: '',
      });
    } else {
      setStatus({
        type: 'error',
        message: 'Erro ao enviar mensagem. Por favor, tente novamente ou contacte-nos diretamente.',
      });
    }

    setIsSubmitting(false);
  };

  return (
    <section id="contacto" className="py-24 bg-white overflow-hidden">
      <div className="container-custom px-4 sm:px-6 lg:px-8">
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
            Contacto
            <span className="w-8 h-[2px] bg-artnetwork-primary" />
          </span>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-artnetwork-dark leading-tight">
            Vamos <span className="text-artnetwork-primary">conversar</span>?
          </h2>

          <p className="text-gray-600 text-lg mt-6">
            Tem um projeto em mente? Entre em contacto connosco e vamos
            transformar as suas ideias em realidade.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <div className="bg-artnetwork-dark rounded-3xl p-6 md:p-8 h-full">
              <h3 className="text-2xl font-heading font-bold text-white mb-8">
                Informações de Contacto
              </h3>

              <div className="space-y-6">
                {contactInfo.map((item) => (
                  <div key={item.title} className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-artnetwork-primary/20 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6 text-artnetwork-primary" />
                    </div>
                    <div>
                      <h4 className="text-white font-medium mb-1">{item.title}</h4>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-gray-400 hover:text-artnetwork-primary transition-colors"
                        >
                          {item.content}
                        </a>
                      ) : (
                        <p className="text-gray-400">{item.content}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="mt-12 p-6 bg-artnetwork-primary/10 rounded-xl border border-artnetwork-primary/20">
                <h4 className="text-white font-heading font-bold mb-2">
                  Orçamento Grátis
                </h4>
                <p className="text-gray-400 text-sm">
                  Preencha o formulário e receba um orçamento personalizado sem
                  qualquer compromisso.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-artnetwork-dark mb-2"
                  >
                    Nome *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-artnetwork-primary focus:ring-2 focus:ring-artnetwork-primary/20 outline-none transition-all"
                    placeholder="O seu nome"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-artnetwork-dark mb-2"
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-artnetwork-primary focus:ring-2 focus:ring-artnetwork-primary/20 outline-none transition-all"
                    placeholder="o.seu@email.com"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-artnetwork-dark mb-2"
                  >
                    Telefone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-artnetwork-primary focus:ring-2 focus:ring-artnetwork-primary/20 outline-none transition-all"
                    placeholder="+351 000 000 000"
                  />
                </div>

                {/* Company */}
                <div>
                  <label
                    htmlFor="company"
                    className="block text-sm font-medium text-artnetwork-dark mb-2"
                  >
                    Empresa
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-artnetwork-primary focus:ring-2 focus:ring-artnetwork-primary/20 outline-none transition-all"
                    placeholder="Nome da empresa"
                  />
                </div>
              </div>

              {/* Service */}
              <div>
                <label
                  htmlFor="service"
                  className="block text-sm font-medium text-artnetwork-dark mb-2"
                >
                  Serviço de Interesse *
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-artnetwork-primary focus:ring-2 focus:ring-artnetwork-primary/20 outline-none transition-all bg-white"
                >
                  <option value="">Selecione um serviço</option>
                  {serviceOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-artnetwork-dark mb-2"
                >
                  Mensagem *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-artnetwork-primary focus:ring-2 focus:ring-artnetwork-primary/20 outline-none transition-all resize-none"
                  placeholder="Descreva o seu projeto ou dúvida..."
                />
              </div>

              {/* Status Message */}
              {status.message && (
                <div
                  className={`p-4 rounded-xl ${status.type === 'success'
                    ? 'bg-green-100 text-green-800'
                    : 'bg-red-100 text-red-800'
                    }`}
                >
                  {status.message}
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-artnetwork-primary text-white font-semibold rounded-xl hover:bg-artnetwork-bright transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'A Enviar...' : 'Enviar Mensagem'}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
