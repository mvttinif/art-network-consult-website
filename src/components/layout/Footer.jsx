import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: FaFacebookF, href: 'https://facebook.com/artnetwork-consult', label: 'Facebook' },
    { icon: FaLinkedinIn, href: 'https://linkedin.com/company/artnetwork-consultoria', label: 'LinkedIn' },
    { icon: FaWhatsapp, href: 'https://wa.me/351932240189?text=Olá, vim pelo site. Gostaria de mais informações sobre os serviços da ArtNetwork.', label: 'WhatsApp' },
  ];

  return (
    <footer className="bg-[#050505] text-white pt-24 pb-12 border-t border-white/10">
      <div className="container-custom px-6 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 lg:gap-24 mb-24">
          
          {/* Brand & Manifesto */}
          <div className="max-w-sm">
            <div className="flex items-center gap-3 mb-8">
              <img
                src="/ArtNetwork Logo W no-bg.svg"
                alt="ArtNetwork Consult"
                className="h-10 w-auto"
              />
              <span className="font-heading font-bold text-2xl tracking-tighter uppercase italic">
                Art<span className="text-artnetwork-primary">Network</span>
              </span>
            </div>
            <p className="text-white/40 font-body text-sm leading-relaxed tracking-wide mb-8">
              Especialistas em Inteligência Artificial e Consultoria Digital. 
              Transformamos negócios com soluções de IA inovadoras e personalizadas.
            </p>
            <div className="flex gap-4">
               {socialLinks.map((social) => (
                 <a
                   key={social.label}
                   href={social.href}
                   target="_blank"
                   rel="noopener noreferrer"
                   aria-label={social.label}
                   className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-artnetwork-primary hover:border-artnetwork-primary hover:text-white text-white/40 transition-all"
                 >
                   <social.icon className="w-4 h-4" />
                 </a>
               ))}
            </div>
          </div>

          {/* Quick Links Group */}
          <div className="grid grid-cols-2 gap-12 lg:gap-24">
            <div>
              <h4 className="text-[10px] uppercase font-body font-bold tracking-[0.3em] text-white/20 mb-8">Navegação</h4>
              <ul className="space-y-4">
                <li><ScrollLink to="inicio" smooth={true} className="text-sm font-body text-white/60 hover:text-artnetwork-primary transition-colors cursor-pointer uppercase tracking-widest">Início</ScrollLink></li>
                <li><ScrollLink to="servicos" smooth={true} className="text-sm font-body text-white/60 hover:text-artnetwork-primary transition-colors cursor-pointer uppercase tracking-widest">Serviços</ScrollLink></li>
                <li><ScrollLink to="portfolio" smooth={true} className="text-sm font-body text-white/60 hover:text-artnetwork-primary transition-colors cursor-pointer uppercase tracking-widest">Portfólio</ScrollLink></li>
                <li><ScrollLink to="contacto" smooth={true} className="text-sm font-body text-white/60 hover:text-artnetwork-primary transition-colors cursor-pointer uppercase tracking-widest">Contato</ScrollLink></li>
              </ul>
            </div>
            <div>
              <h4 className="text-[10px] uppercase font-body font-bold tracking-[0.3em] text-white/20 mb-8">Social</h4>
              <ul className="space-y-4">
                {socialLinks.map((social) => (
                  <li key={social.label}>
                    <a href={social.href} className="text-sm font-body text-white/60 hover:text-artnetwork-primary transition-colors uppercase tracking-widest">
                      {social.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact Direct */}
          <div className="md:text-right">
             <h4 className="text-[10px] uppercase font-body font-bold tracking-[0.3em] text-white/20 mb-8">Portugal & Brasil</h4>
             <p className="text-white font-heading text-lg mb-2 italic">Entre em contato conosco</p>
             <a href="mailto:contacto@artnetworkconsult.com" className="text-white/40 hover:text-white transition-colors text-sm font-body">contacto@artnetworkconsult.com</a>
          </div>
        </div>

        {/* Legal & Copyright */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
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
