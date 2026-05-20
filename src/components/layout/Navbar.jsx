import { useState, useEffect, useRef } from 'react';
// Inline SVGs — eliminates react-icons/hi from the critical path bundle
const MenuIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
  </svg>
);
const CloseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
);
import { scrollToSection } from '../../utils/scroll';
import useScrollOffset from '../../hooks/useScrollOffset';

// No framer-motion, no react-scroll — pure CSS transitions
const navLinks = [
  { id: 'inicio', label: 'Início' },
  { id: 'servicos', label: 'Serviços' },
  { id: 'portfolio', label: 'Portfólio' },
  { id: 'contacto', label: 'Contacto' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const scrollOffset = useScrollOffset();
  const menuRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on outside click
  useEffect(() => {
    if (!isMobileMenuOpen) return;
    const handleClick = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsMobileMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [isMobileMenuOpen]);

  const handleNav = (id) => {
    setIsMobileMenuOpen(false);
    scrollToSection(id, scrollOffset);
  };

  return (
    <nav
      ref={menuRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-black/90 border-b border-white/5'
          : 'bg-transparent'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-20 px-6 lg:px-8">
          {/* Logo */}
          <button
            onClick={() => handleNav('inicio')}
            className="cursor-pointer flex items-center gap-3 group bg-transparent border-none p-0"
            aria-label="Ir para início"
          >
            <div className="relative">
              <img
                src="/ArtNetwork Logo W no-bg.svg"
                alt="ArtNetwork Consult"
                className="h-10 w-auto rounded-lg transition-transform duration-300 group-hover:scale-110"
                width={40}
                height={40}
              />
            </div>
            <div className="hidden sm:block">
              <span className="text-white font-heading font-bold text-lg">
                Art<span className="text-artnetwork-primary">Network</span>
              </span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNav(link.id)}
                className="relative px-4 py-2 text-white/50 hover:text-white transition-all cursor-pointer font-body text-[11px] uppercase tracking-[0.2em] group after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-0.5 after:bg-artnetwork-primary after:transition-all after:duration-300 hover:after:w-1/2 bg-transparent border-none"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => handleNav('contacto')}
              className="ml-4 px-6 py-2.5 bg-artnetwork-primary text-white text-sm font-semibold rounded-full cursor-pointer hover:bg-artnetwork-bright transition-colors border-none"
            >
              Começar
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white p-2 hover:text-artnetwork-primary transition-colors bg-transparent border-none"
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {/* Mobile Menu — CSS-only animation, no framer-motion */}
      <div
        className={`md:hidden bg-black/95 border-t border-white/5 overflow-hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
        aria-hidden={!isMobileMenuOpen}
      >
        <div className="px-6 py-6 space-y-1">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNav(link.id)}
              className="block w-full text-left py-3 text-gray-400 hover:text-white transition-colors cursor-pointer font-medium border-b border-white/5 bg-transparent border-none"
            >
              {link.label}
            </button>
          ))}
          <div className="pt-4">
            <button
              onClick={() => handleNav('contacto')}
              className="block w-full py-3 bg-artnetwork-primary text-white text-center font-semibold rounded-xl cursor-pointer border-none"
            >
              Começar Projeto
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
