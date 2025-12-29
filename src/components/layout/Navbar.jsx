import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { HiMenu, HiX } from 'react-icons/hi';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { id: 'inicio', label: 'Início' },
  { id: 'servicos', label: 'Serviços' },
  { id: 'portfolio', label: 'Portfólio' },
  { id: 'testemunhos', label: 'Testemunhos' },
  { id: 'contacto', label: 'Contacto' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-black/90 backdrop-blur-xl border-b border-white/5'
          : 'bg-transparent'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-20 px-6 lg:px-8">
          {/* Logo */}
          <Link
            to="inicio"
            smooth={true}
            duration={500}
            className="cursor-pointer flex items-center gap-3 group"
          >
            <div className="relative">
              <img
                src="/ArtNetwork Logo W no-bg.svg"
                alt="ArtNetwork Consult"
                className="h-10 w-auto rounded-lg transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <div className="hidden sm:block">
              <span className="text-white font-heading font-bold text-lg">
                Art<span className="text-artnetwork-primary">Network</span>
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.id}
                to={link.id}
                smooth={true}
                duration={500}
                offset={-80}
                spy={true}
                activeClass="!text-artnetwork-primary"
                className="relative px-4 py-2 text-gray-400 hover:text-white transition-colors cursor-pointer font-medium text-sm group"
              >
                {link.label}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-artnetwork-primary transition-all duration-300 group-hover:w-1/2" />
              </Link>
            ))}

            <Link
              to="contacto"
              smooth={true}
              duration={500}
              className="ml-4 px-6 py-2.5 bg-artnetwork-primary text-white text-sm font-semibold rounded-full cursor-pointer hover:bg-artnetwork-bright transition-colors"
            >
              Começar
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white p-2 hover:text-artnetwork-primary transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <HiX className="w-6 h-6" />
            ) : (
              <HiMenu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black/95 backdrop-blur-xl border-t border-white/5"
          >
            <div className="px-6 py-6 space-y-1">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    to={link.id}
                    smooth={true}
                    duration={500}
                    offset={-80}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block py-3 text-gray-400 hover:text-white transition-colors cursor-pointer font-medium border-b border-white/5"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="pt-4"
              >
                <Link
                  to="contacto"
                  smooth={true}
                  duration={500}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block w-full py-3 bg-artnetwork-primary text-white text-center font-semibold rounded-xl cursor-pointer"
                >
                  Começar Projeto
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
