import { Link } from 'react-scroll';
import {
  HiOutlineMail,
  HiOutlinePhone,
  HiOutlineLocationMarker,
} from 'react-icons/hi';
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    'Criação de Sites',
    'Web Design',
    'Marketing Digital',
    'Lojas Online',
    'Soluções de IA',
    'Sistemas Web',
  ];

  const socialLinks = [
    { icon: FaFacebookF, href: '#', label: 'Facebook' },
    { icon: FaInstagram, href: '#', label: 'Instagram' },
    { icon: FaLinkedinIn, href: '#', label: 'LinkedIn' },
    { icon: FaWhatsapp, href: '#', label: 'WhatsApp' },
  ];

  return (
    <footer className="bg-artnetwork-dark text-white">
      <div className="container-custom section-padding pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <img
                src="/ArtNetwork Logo W no-bg.svg"
                alt="ArtNetwork Consult"
                className="h-12 w-auto rounded-lg"
              />
              <span className="font-heading font-bold text-xl">ArtNetwork</span>
            </div>
            <p className="text-artnetwork-gray leading-relaxed mb-6">
              Agência de web design e consultoria digital. Transformamos ideias
              em sucesso online com soluções inovadoras e personalizadas.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-artnetwork-gray/20 flex items-center justify-center
                           hover:bg-artnetwork-primary transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-6">Serviços</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <Link
                    to="servicos"
                    smooth={true}
                    duration={500}
                    className="text-artnetwork-gray hover:text-artnetwork-primary transition-colors cursor-pointer"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-6">Contacto</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <HiOutlineMail className="w-5 h-5 text-artnetwork-primary mt-1" />
                <a
                  href="mailto:info@artnetwork.pt"
                  className="text-artnetwork-gray hover:text-artnetwork-primary transition-colors"
                >
                  info@artnetwork.pt
                </a>
              </li>
              <li className="flex items-start gap-3">
                <HiOutlinePhone className="w-5 h-5 text-artnetwork-primary mt-1" />
                <a
                  href="tel:+351000000000"
                  className="text-artnetwork-gray hover:text-artnetwork-primary transition-colors"
                >
                  +351 000 000 000
                </a>
              </li>
              <li className="flex items-start gap-3">
                <HiOutlineLocationMarker className="w-5 h-5 text-artnetwork-primary mt-1" />
                <span className="text-artnetwork-gray">Portugal</span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-6">Horário</h3>
            <ul className="space-y-3 text-artnetwork-gray">
              <li className="flex justify-between">
                <span>Segunda - Sexta</span>
                <span>9:00 - 18:00</span>
              </li>
              <li className="flex justify-between">
                <span>Sábado</span>
                <span>10:00 - 14:00</span>
              </li>
              <li className="flex justify-between">
                <span>Domingo</span>
                <span>Fechado</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-artnetwork-gray/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-artnetwork-gray text-sm">
              &copy; {currentYear} ArtNetwork Consult LDA. Todos os direitos
              reservados.
            </p>
            <div className="flex gap-6 text-sm">
              <a
                href="#"
                className="text-artnetwork-gray hover:text-artnetwork-primary transition-colors"
              >
                Política de Privacidade
              </a>
              <a
                href="#"
                className="text-artnetwork-gray hover:text-artnetwork-primary transition-colors"
              >
                Termos de Serviço
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
