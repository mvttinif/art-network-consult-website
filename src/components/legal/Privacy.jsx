import { useEffect } from 'react';
import { motion } from 'framer-motion';

const Privacy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="pt-32 pb-24 bg-[#0a0a0a] min-h-screen">
      <div className="container-custom px-6 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl"
        >
          <span className="inline-block text-artnetwork-primary font-body text-xs font-bold uppercase tracking-[0.2em] mb-6">
            [ 06 — Privacidade ]
          </span>
          <h1 className="text-5xl lg:text-7xl font-heading font-bold text-white leading-[0.9] tracking-tighter uppercase mb-12">
            Política de <br />
            <span className="text-white/40 italic font-normal tracking-wide lowercase">Privacidade</span>
          </h1>

          <div className="space-y-12 text-white/70 font-body font-light leading-relaxed">
            <div>
              <h2 className="text-white font-heading text-xl mb-4 uppercase tracking-wider">1. Recolha de Dados</h2>
              <p>
                A ArtNetwork Consult respeita a sua privacidade. Recolhemos apenas os dados necessários através do nosso formulário de contacto (Nome, Email, Telefone, Empresa) e do assistente de IA, com a finalidade exclusiva de responder às suas solicitações e melhorar a sua experiência.
              </p>
            </div>

            <div>
              <h2 className="text-white font-heading text-xl mb-4 uppercase tracking-wider">2. Utilização da Informação</h2>
              <p>
                Os dados recolhidos são utilizados para processar pedidos de orçamento, suporte técnico e comunicações comerciais relacionadas com os nossos serviços de IA e Consultoria Digital. Nunca partilhamos ou vendemos os seus dados a terceiros.
              </p>
            </div>

            <div>
              <h2 className="text-white font-heading text-xl mb-4 uppercase tracking-wider">3. Cookies e Rastreio</h2>
              <p>
                Utilizamos cookies técnicos mínimos para garantir a funcionalidade do site e ferramentas analíticas (como o Meta Pixel indicado pelo uso do CAPI) para medir a eficácia das nossas campanhas. Pode configurar o seu navegador para recusar cookies, embora isso possa afetar algumas funcionalidades.
              </p>
            </div>

            <div>
              <h2 className="text-white font-heading text-xl mb-4 uppercase tracking-wider">4. Segurança</h2>
              <p>
                Implementamos medidas de segurança físicas, eletrónicas e procedimentais para proteger a sua informação pessoal de acessos não autorizados, em conformidade com o RGPD (Regulamento Geral sobre a Proteção de Dados).
              </p>
            </div>

            <div>
              <h2 className="text-white font-heading text-xl mb-4 uppercase tracking-wider">5. Seus Direitos</h2>
              <p>
                O utilizador tem o direito de solicitar o acesso, retificação ou eliminação dos seus dados pessoais a qualquer momento. Para exercer estes direitos, contacte-nos através do e-mail: **contacto@artnetworkconsult.com**.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Privacy;
