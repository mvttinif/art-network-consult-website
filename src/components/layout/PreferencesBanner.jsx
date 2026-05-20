import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const PreferencesBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showCustomize, setShowCustomize] = useState(false);
  const [preferences, setPreferences] = useState({
    necessary: true,
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    const handleOpen = () => {
      setIsVisible(true);
      setShowCustomize(true);
    };

    window.addEventListener('openCookieConsent', handleOpen);

    const savedConsent = localStorage.getItem('artnetwork_cookie_consent');
    if (!savedConsent) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1500);
      return () => {
        clearTimeout(timer);
        window.removeEventListener('openCookieConsent', handleOpen);
      };
    }

    return () => {
      window.removeEventListener('openCookieConsent', handleOpen);
    };
  }, []);

  const handleAcceptAll = () => {
    const allConsents = { necessary: true, analytics: true, marketing: true };
    localStorage.setItem('artnetwork_cookie_consent', JSON.stringify(allConsents));
    setIsVisible(false);
    window.dispatchEvent(new Event('cookieConsentChanged'));
  };

  const handleRejectAll = () => {
    const minimalConsents = { necessary: true, analytics: false, marketing: false };
    localStorage.setItem('artnetwork_cookie_consent', JSON.stringify(minimalConsents));
    setIsVisible(false);
    window.dispatchEvent(new Event('cookieConsentChanged'));
  };

  const handleSavePreferences = () => {
    localStorage.setItem('artnetwork_cookie_consent', JSON.stringify(preferences));
    setIsVisible(false);
    window.dispatchEvent(new Event('cookieConsentChanged'));
  };

  const togglePreference = (key) => {
    setPreferences((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          className="fixed bottom-6 left-6 right-6 md:left-auto md:max-w-md z-[100] bg-[#050505]/95 border border-white/10 p-6 shadow-2xl backdrop-blur-xl"
        >
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <span className="text-artnetwork-primary text-xl">🍪</span>
              <h3 className="text-white font-heading text-sm font-bold uppercase tracking-[0.2em]">
                Preferências de Cookies
              </h3>
            </div>
            
            <p className="text-white/60 font-body text-xs font-light leading-relaxed">
              Utilizamos cookies para melhorar a sua experiência, analisar o tráfego do site e apoiar as nossas campanhas de marketing. Consulte a nossa{' '}
              <Link to="/privacidade" className="text-artnetwork-primary hover:underline font-medium">
                Política de Privacidade
              </Link>{' '}
              para obter mais informações.
            </p>

            {showCustomize && (
              <motion.div 
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                className="border-t border-white/10 pt-4 mt-2 space-y-3"
              >
                {/* Necessary */}
                <div className="flex items-center justify-between">
                  <div className="pr-4">
                    <h4 className="text-white text-xs font-body font-semibold uppercase tracking-wider">Necessários</h4>
                    <p className="text-white/40 text-[10px] font-body">Essenciais para o funcionamento do site.</p>
                  </div>
                  <input
                    type="checkbox"
                    checked={true}
                    disabled
                    className="w-4 h-4 bg-transparent border-white/20 text-artnetwork-primary rounded cursor-not-allowed"
                  />
                </div>

                {/* Analytics */}
                <div className="flex items-center justify-between">
                  <div className="pr-4">
                    <h4 className="text-white text-xs font-body font-semibold uppercase tracking-wider">Analíticos</h4>
                    <p className="text-white/40 text-[10px] font-body">Ajudam-nos a compreender o uso do site.</p>
                  </div>
                  <input
                    type="checkbox"
                    checked={preferences.analytics}
                    onChange={() => togglePreference('analytics')}
                    className="w-4 h-4 bg-transparent border-white/20 text-artnetwork-primary rounded cursor-pointer accent-artnetwork-primary"
                  />
                </div>

                {/* Marketing */}
                <div className="flex items-center justify-between">
                  <div className="pr-4">
                    <h4 className="text-white text-xs font-body font-semibold uppercase tracking-wider">Marketing</h4>
                    <p className="text-white/40 text-[10px] font-body">Permitem-nos apresentar anúncios relevantes.</p>
                  </div>
                  <input
                    type="checkbox"
                    checked={preferences.marketing}
                    onChange={() => togglePreference('marketing')}
                    className="w-4 h-4 bg-transparent border-white/20 text-artnetwork-primary rounded cursor-pointer accent-artnetwork-primary"
                  />
                </div>
              </motion.div>
            )}

            <div className="flex flex-wrap gap-2 mt-2 pt-2 border-t border-white/5">
              {!showCustomize ? (
                <>
                  <button
                    onClick={handleAcceptAll}
                    className="flex-1 min-w-[120px] bg-white hover:bg-artnetwork-primary text-black hover:text-white text-[10px] font-body font-bold uppercase tracking-wider py-2.5 px-4 transition-all cursor-pointer"
                  >
                    Aceitar Todos
                  </button>
                  <button
                    onClick={() => setShowCustomize(true)}
                    className="flex-1 min-w-[120px] border border-white/10 hover:border-white text-white text-[10px] font-body font-bold uppercase tracking-wider py-2.5 px-4 transition-all cursor-pointer"
                  >
                    Personalizar
                  </button>
                  <button
                    onClick={handleRejectAll}
                    className="w-full text-white/40 hover:text-white text-[10px] font-body font-bold uppercase tracking-wider py-2 transition-all cursor-pointer text-center mt-1"
                  >
                    Recusar Não Necessários
                  </button>
                </>
              ) : (
                <>
                  <button
                    onClick={handleSavePreferences}
                    className="flex-1 min-w-[120px] bg-white hover:bg-artnetwork-primary text-black hover:text-white text-[10px] font-body font-bold uppercase tracking-wider py-2.5 px-4 transition-all cursor-pointer"
                  >
                    Guardar Escolhas
                  </button>
                  <button
                    onClick={handleAcceptAll}
                    className="flex-1 min-w-[120px] border border-white/10 hover:border-white text-white text-[10px] font-body font-bold uppercase tracking-wider py-2.5 px-4 transition-all cursor-pointer"
                  >
                    Aceitar Todos
                  </button>
                </>
              )}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PreferencesBanner;
