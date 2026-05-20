import { scrollToSection } from '../../utils/scroll';
import { Link as RouterLink } from 'react-router-dom';

// Inline SVGs — eliminates react-icons/fa from bundle entirely
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

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { Icon: FacebookIcon, href: 'https://facebook.com/artnetwork-consult', label: 'Facebook' },
    { Icon: LinkedInIcon, href: 'https://linkedin.com/company/artnetwork-consultoria', label: 'LinkedIn' },
    { Icon: WhatsAppIcon, href: 'https://wa.me/351932240189?text=Olá, vim pelo site. Gostaria de mais informações sobre os serviços da ArtNetwork.', label: 'WhatsApp' },
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
                width={40}
                height={40}
                loading="lazy"
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
                   <social.Icon />
                 </a>
               ))}
            </div>
          </div>

          {/* Quick Links Group */}
          <div className="grid grid-cols-2 gap-12 lg:gap-24">
            <div>
              <h4 className="text-[10px] uppercase font-body font-bold tracking-[0.3em] text-white/20 mb-8">Navegação</h4>
              <ul className="space-y-4">
                <li><button onClick={() => scrollToSection('inicio')} className="text-sm font-body text-white/60 hover:text-artnetwork-primary transition-colors cursor-pointer uppercase tracking-widest bg-transparent border-none p-0">Início</button></li>
                <li><button onClick={() => scrollToSection('servicos')} className="text-sm font-body text-white/60 hover:text-artnetwork-primary transition-colors cursor-pointer uppercase tracking-widest bg-transparent border-none p-0">Serviços</button></li>
                <li><button onClick={() => scrollToSection('portfolio')} className="text-sm font-body text-white/60 hover:text-artnetwork-primary transition-colors cursor-pointer uppercase tracking-widest bg-transparent border-none p-0">Portfólio</button></li>
                <li><button onClick={() => scrollToSection('contacto')} className="text-sm font-body text-white/60 hover:text-artnetwork-primary transition-colors cursor-pointer uppercase tracking-widest bg-transparent border-none p-0">Contacto</button></li>
              </ul>
            </div>
            <div>
              <h4 className="text-[10px] uppercase font-body font-bold tracking-[0.3em] text-white/20 mb-8">Social</h4>
              <ul className="space-y-4">
                {socialLinks.map((social) => (
                  <li key={social.label}>
                    <a href={social.href} target="_blank" rel="noopener noreferrer" className="text-sm font-body text-white/60 hover:text-artnetwork-primary transition-colors uppercase tracking-widest">
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
