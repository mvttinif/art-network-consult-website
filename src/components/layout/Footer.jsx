import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useInView } from 'framer-motion';
import { scrollToSection } from '../../utils/scroll';
import { Link as RouterLink } from 'react-router-dom';

// ─── Inline SVGs ─────────────────────────────────────────────────────────────
const FacebookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
  </svg>
);

const LinkedInIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const WhatsAppIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

// ─── Animated wordmark — cada letra cai do topo com stagger ──────────────────
const WORD_ART    = ['A','r','t'];
const WORD_NET    = ['N','e','t','w','o','r','k'];

const letterVariants = {
  hidden: { y: 100, opacity: 0, rotateX: -50 },
  visible: (i) => ({
    y: 0,
    opacity: 1,
    rotateX: 0,
    transition: {
      delay: 0.15 + i * 0.06,
      duration: 0.9,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

const AnimatedWordmark = ({ inView }) => (
  <div
    className="flex items-end justify-center gap-0 select-none overflow-hidden"
    style={{ perspective: '800px' }}
    aria-label="ArtNetwork"
  >
    {/* "Art" — white */}
    <span className="flex">
      {WORD_ART.map((char, i) => (
        <motion.span
          key={`art-${i}`}
          custom={i}
          variants={letterVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="font-heading font-bold uppercase italic tracking-tighter leading-none text-white will-change-transform"
          style={{
            fontSize: 'clamp(3.5rem, 12vw, 10rem)',
            display: 'inline-block',
            transformOrigin: 'bottom center',
          }}
        >
          {char}
        </motion.span>
      ))}
    </span>

    {/* "Network" — red */}
    <span className="flex text-artnetwork-primary">
      {WORD_NET.map((char, i) => (
        <motion.span
          key={`net-${i}`}
          custom={WORD_ART.length + i}
          variants={letterVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="font-heading font-bold uppercase italic tracking-tighter leading-none will-change-transform"
          style={{
            fontSize: 'clamp(3.5rem, 12vw, 10rem)',
            display: 'inline-block',
            transformOrigin: 'bottom center',
          }}
        >
          {char}
        </motion.span>
      ))}
    </span>
  </div>
);

// ─── Footer ───────────────────────────────────────────────────────────────────
const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Trigger quando o bloco entra no viewport — margem generosa para disparar cedo
  const brandRef = useRef(null);
  const isInView = useInView(brandRef, { once: true, margin: '0px 0px -5% 0px' });

  // Parallax suave no glow — apenas cosmético, não bloqueia as animações principais
  const { scrollYProgress } = useScroll({ target: brandRef, offset: ['start end', 'end start'] });
  const rawY  = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const glowY = useSpring(rawY, { stiffness: 40, damping: 18 });

  // Parallax suave na logo e tagline enquanto o utilizador continua a rolar
  const logoY          = useTransform(scrollYProgress, [0, 1], [20, -20]);
  const logoSpringY    = useSpring(logoY, { stiffness: 60, damping: 20 });

  const taglineY       = useTransform(scrollYProgress, [0, 1], [12, -12]);
  const taglineSpringY = useSpring(taglineY, { stiffness: 60, damping: 20 });

  const socialLinks = [
    { Icon: FacebookIcon, href: 'https://facebook.com/artnetwork-consult', label: 'Facebook' },
    { Icon: LinkedInIcon, href: 'https://linkedin.com/company/artnetwork-consultoria', label: 'LinkedIn' },
    { Icon: WhatsAppIcon, href: 'https://wa.me/351932240189?text=Olá, vim pelo site. Gostaria de mais informações sobre os serviços da ArtNetwork.', label: 'WhatsApp' },
  ];

  return (
    <footer className="bg-[#050505] text-white border-t border-white/10">

      {/* ── HERO BRAND BLOCK ─────────────────────────────────── */}
      <div
        ref={brandRef}
        className="relative border-b border-white/10 py-20 lg:py-28 flex flex-col items-center justify-center overflow-hidden"
      >
        {/* Parallax glow blob */}
        <motion.div
          aria-hidden="true"
          style={{ y: glowY }}
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
        >
          <div className="w-[700px] h-[350px] bg-artnetwork-primary/6 rounded-full blur-[140px]" />
        </motion.div>

        {/* Decorative hairline above wordmark */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={isInView ? { scaleX: 1, opacity: 1 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0 }}
          className="w-24 h-px bg-artnetwork-primary/50 mb-10 origin-center"
        />

        {/* Logo icon */}
        <motion.div
          style={{ y: logoSpringY }}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
          className="mb-6 relative z-10"
        >
          <img
            src="/ArtNetwork Logo W no-bg.svg"
            alt="ArtNetwork Consult"
            className="h-14 lg:h-20 w-auto opacity-80"
            width={80}
            height={80}
            loading="lazy"
          />
        </motion.div>

        {/* Giant animated wordmark */}
        <div className="relative z-10 w-full flex justify-center px-4">
          <AnimatedWordmark inView={isInView} />
        </div>

        {/* Tagline */}
        <motion.p
          style={{ y: taglineSpringY }}
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.75, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 mt-6 text-white/25 font-body text-xs lg:text-sm uppercase tracking-[0.5em] text-center"
        >
          Inteligência Artificial &amp; Consultoria Digital
        </motion.p>

        {/* Social icons row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.95, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 flex gap-4 mt-10"
        >
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-artnetwork-primary hover:border-artnetwork-primary text-white/30 hover:text-white transition-all duration-300"
            >
              <social.Icon />
            </a>
          ))}
        </motion.div>
      </div>

      {/* ── LINKS + LEGAL ─────────────────────────────────────── */}
      <div className="container-custom px-6 lg:px-12 pt-16 pb-12">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 lg:gap-24 mb-20">

          {/* Quick Links */}
          <div className="grid grid-cols-2 gap-12 lg:gap-24">
            <div>
              <h4 className="text-[10px] uppercase font-body font-bold tracking-[0.3em] text-white/20 mb-8">Navegação</h4>
              <ul className="space-y-4">
                {['inicio','servicos','portfolio','contacto'].map((id, i) => (
                  <li key={id}>
                    <button
                      onClick={() => scrollToSection(id)}
                      className="text-sm font-body text-white/60 hover:text-artnetwork-primary transition-colors cursor-pointer uppercase tracking-widest bg-transparent border-none p-0"
                    >
                      {['Início','Serviços','Portfólio','Contacto'][i]}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-[10px] uppercase font-body font-bold tracking-[0.3em] text-white/20 mb-8">Social</h4>
              <ul className="space-y-4">
                {socialLinks.map((social) => (
                  <li key={social.label}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-body text-white/60 hover:text-artnetwork-primary transition-colors uppercase tracking-widest"
                    >
                      {social.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact */}
          <div className="md:text-right">
            <h4 className="text-[10px] uppercase font-body font-bold tracking-[0.3em] text-white/20 mb-8">Portugal &amp; Brasil</h4>
            <p className="text-white font-heading text-lg mb-2 italic">Entre em contato conosco</p>
            <a
              href="mailto:contacto@artnetworkconsult.com"
              className="text-white/40 hover:text-white transition-colors text-sm font-body"
            >
              contacto@artnetworkconsult.com
            </a>
          </div>
        </div>

        {/* Legal */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-wrap gap-8 justify-center md:justify-start">
            <RouterLink to="/privacidade" className="text-[10px] uppercase font-body font-bold tracking-[0.2em] text-white/20 hover:text-white transition-colors">Privacidade</RouterLink>
            <RouterLink to="/legal" className="text-[10px] uppercase font-body font-bold tracking-[0.2em] text-white/20 hover:text-white transition-colors">Legal</RouterLink>
            <button
              onClick={() => window.dispatchEvent(new Event('openCookieConsent'))}
              className="text-[10px] uppercase font-body font-bold tracking-[0.2em] text-white/20 hover:text-white transition-colors cursor-pointer bg-transparent border-none p-0 outline-none"
            >
              Cookies
            </button>
          </div>
          <p className="text-[10px] uppercase font-body font-bold tracking-[0.2em] text-white/10">
            &copy; {currentYear} ArtNetwork Consult LDA. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
