export const aiResponses = {
  greetings: {
    initial: 'Olá! Sou o assistente virtual da ArtNetwork Consult, especialistas em Inteligência Artificial. Como posso ajudá-lo hoje?',
    patterns: ['ola', 'oi', 'bom dia', 'boa tarde', 'boa noite', 'hey', 'hello', 'hi'],
    responses: [
      'Olá! Em que posso ajudá-lo hoje?',
      'Olá! Bem-vindo à ArtNetwork Consult. Como posso ser útil?',
      'Oi! Estou aqui para ajudar. O que gostaria de saber?',
    ],
  },

  quickActions: [
    {
      id: 'ai_help',
      label: 'Como a IA pode ajudar?',
    },
    {
      id: 'services',
      label: 'Quais serviços oferecem?',
    },
    {
      id: 'meeting',
      label: 'Agendar uma reunião',
    },
  ],

  // Intenções com palavras-chave ponderadas e sinónimos
  intents: {
    ai_help: {
      keywords: ['ia', 'inteligencia artificial', 'ai', 'machine learning', 'ml', 'automacao', 'automatizar', 'automatico', 'robot', 'robo'],
      weight: 2,
    },
    chatbots: {
      keywords: ['chatbot', 'chat bot', 'bot', 'assistente virtual', 'assistente', 'atendimento automatico', 'whatsapp bot'],
      weight: 3,
    },
    services: {
      keywords: ['servico', 'servicos', 'oferecem', 'fazem', 'trabalho', 'trabalham', 'especialidade', 'area', 'areas'],
      weight: 1,
    },
    meeting: {
      keywords: ['reuniao', 'agendar', 'marcar', 'contacto', 'contactar', 'falar', 'ligar', 'telefonar', 'email', 'conversar', 'encontro'],
      weight: 2,
    },
    pricing: {
      keywords: ['preco', 'precos', 'custo', 'custos', 'orcamento', 'quanto', 'valor', 'valores', 'investimento', 'pagar', 'cobram', 'caro', 'barato'],
      weight: 2,
    },
    portfolio: {
      keywords: ['portfolio', 'projetos', 'trabalhos', 'exemplos', 'casos', 'clientes', 'referencias', 'mostrar'],
      weight: 2,
    },
    website: {
      keywords: ['site', 'sites', 'website', 'pagina', 'landing page', 'loja online', 'ecommerce', 'e-commerce'],
      weight: 2,
    },
    consulting: {
      keywords: ['consultoria', 'estrategia', 'auditoria', 'analise', 'otimizacao', 'seo', 'marketing', 'digital'],
      weight: 2,
    },
    systems: {
      keywords: ['sistema', 'sistemas', 'dashboard', 'painel', 'aplicacao', 'app', 'software', 'plataforma', 'crm', 'erp'],
      weight: 2,
    },
    timeline: {
      keywords: ['tempo', 'demora', 'prazo', 'prazos', 'quando', 'duracao', 'dias', 'semanas', 'meses', 'rapido'],
      weight: 2,
    },
    thanks: {
      keywords: ['obrigado', 'obrigada', 'agradeco', 'valeu', 'thanks', 'thank you'],
      weight: 3,
    },
    bye: {
      keywords: ['adeus', 'tchau', 'ate logo', 'ate mais', 'bye', 'goodbye'],
      weight: 3,
    },
    help: {
      keywords: ['ajuda', 'ajudar', 'duvida', 'duvidas', 'pergunta', 'perguntas', 'informacao', 'informacoes', 'saber', 'explicar'],
      weight: 1,
    },
    location: {
      keywords: ['onde', 'localizacao', 'endereco', 'morada', 'escritorio', 'portugal', 'lisboa', 'porto'],
      weight: 2,
    },
    about: {
      keywords: ['quem', 'empresa', 'artnetwork', 'sobre', 'historia', 'equipa', 'fundador'],
      weight: 2,
    },
  },

  responses: {
    ai_help: {
      text: 'A Inteligência Artificial pode revolucionar o seu negócio de várias formas:\n\n• **Chatbots inteligentes** - Atendimento automático 24/7\n• **Automação de processos** - Reduza tarefas repetitivas em até 80%\n• **Análise preditiva** - Antecipe tendências e comportamentos\n• **Personalização** - Experiências únicas para cada cliente\n• **Processamento de documentos** - Extração automática de dados\n\nQual destas soluções desperta mais o seu interesse?',
      followUp: ['chatbots', 'pricing', 'meeting'],
    },
    chatbots: {
      text: 'Os chatbots com IA são uma das nossas especialidades! Podemos criar assistentes virtuais que:\n\n• Respondem perguntas frequentes automaticamente\n• Qualificam leads e captam contactos\n• Processam pedidos e reservas\n• Integram com WhatsApp, Messenger e website\n• Funcionam 24h/dia, 7 dias/semana\n• Aprendem e melhoram com o tempo\n\n**Exemplo real:** Um cliente reduziu 60% das chamadas de suporte com o nosso chatbot.\n\nQuer saber como podemos implementar no seu negócio?',
      followUp: ['pricing', 'portfolio', 'meeting'],
    },
    services: {
      text: 'Na ArtNetwork Consult somos especialistas em soluções digitais:\n\n🤖 **Soluções de IA** - Chatbots, automação e análise preditiva\n📊 **Consultoria Web** - Estratégia digital e otimização\n⚙️ **Sistemas Web** - Dashboards e aplicações à medida\n🌐 **Criação de Sites** - Websites modernos e funcionais\n\nTodos os nossos serviços são personalizados às necessidades do seu negócio. Qual área lhe interessa mais?',
      followUp: ['ai_help', 'consulting', 'website'],
    },
    meeting: {
      text: 'Ótimo! Adoramos conhecer novos projetos. Pode contactar-nos por:\n\n📧 **Email:** artnetworkconsult@gmail.com\n📱 **Telefone:** +351 965 093 138\n💬 **WhatsApp:** Mesmo número\n📝 **Formulário:** Abaixo nesta página\n\n**Oferecemos uma consulta inicial gratuita** de 30 minutos para entender o seu projeto.\n\nPrefere manhã ou tarde?',
      followUp: ['services', 'pricing'],
    },
    pricing: {
      text: 'Os nossos preços são ajustados a cada projeto, pois cada negócio tem necessidades únicas.\n\n**Oferecemos orçamento 100% gratuito** e sem compromisso!\n\nPara uma estimativa mais precisa, precisamos entender:\n• Que tipo de solução procura\n• A dimensão do seu negócio\n• Os objetivos que pretende alcançar\n\n**Dica:** A maioria dos nossos clientes de IA vê retorno do investimento em 3-6 meses.\n\nQuer agendar uma reunião para discutirmos?',
      followUp: ['meeting', 'services'],
    },
    portfolio: {
      text: 'Temos orgulho nos projetos que desenvolvemos! Alguns destaques:\n\n🏦 **Assistente Virtual Bancário** - Chatbot com NLP para atendimento ao cliente\n📈 **Sistema de Análise Preditiva** - ML para previsão de vendas\n🎫 **Automação de Atendimento** - Triagem automática de tickets\n📊 **Dashboard Executivo** - KPIs em tempo real\n\nPode ver mais detalhes na secção Portfólio do nosso site, ou posso explicar algum projeto específico?',
      followUp: ['ai_help', 'meeting'],
    },
    website: {
      text: 'Criamos websites profissionais e modernos:\n\n• **Sites institucionais** - Presença online profissional\n• **Landing pages** - Páginas otimizadas para conversão\n• **E-commerce** - Lojas online completas\n• **Portais** - Plataformas com área de cliente\n\nTodos os sites incluem:\n✓ Design responsivo (mobile-friendly)\n✓ Otimização SEO\n✓ Velocidade otimizada\n✓ Integração com analytics\n\nJá tem uma ideia do que precisa?',
      followUp: ['pricing', 'meeting'],
    },
    consulting: {
      text: 'A nossa consultoria web ajuda empresas a crescer online:\n\n📋 **Auditoria Digital** - Análise completa da sua presença online\n🎯 **Estratégia** - Plano personalizado de crescimento\n🔍 **SEO** - Melhor posicionamento no Google\n📱 **Redes Sociais** - Estratégia de conteúdo\n📊 **Analytics** - Métricas e relatórios de performance\n\nComeçamos sempre com um diagnóstico gratuito. Interessado?',
      followUp: ['meeting', 'pricing'],
    },
    systems: {
      text: 'Desenvolvemos sistemas web à medida:\n\n📊 **Dashboards** - Visualização de dados em tempo real\n👥 **CRM** - Gestão de clientes e vendas\n📦 **ERP** - Gestão empresarial integrada\n🔄 **Automações** - Workflows e processos automáticos\n🔗 **Integrações** - Conexão entre sistemas\n\nTodos os sistemas incluem formação e suporte técnico. Que tipo de sistema procura?',
      followUp: ['pricing', 'meeting'],
    },
    timeline: {
      text: 'Os prazos variam conforme a complexidade do projeto:\n\n⏱️ **Chatbot simples:** 2-4 semanas\n⏱️ **Website institucional:** 3-6 semanas\n⏱️ **Sistema web:** 6-12 semanas\n⏱️ **Projeto de IA complexo:** 8-16 semanas\n\nTrabalhamos com metodologia ágil, o que significa que vai vendo resultados desde o início.\n\n**Tem um prazo específico em mente?** Podemos adaptar o planeamento.',
      followUp: ['meeting', 'pricing'],
    },
    thanks: {
      text: 'De nada! Foi um prazer ajudar. 😊\n\nSe tiver mais alguma dúvida, estou por aqui. Pode também:\n\n• Explorar o nosso site para mais informações\n• Preencher o formulário de contacto\n• Ligar-nos diretamente\n\nBoa sorte com o seu projeto!',
      followUp: ['services', 'meeting'],
    },
    bye: {
      text: 'Até breve! 👋\n\nFoi um prazer conversar consigo. Se precisar de ajuda no futuro, estarei aqui.\n\n**Lembre-se:** Oferecemos consulta inicial gratuita!\n\nTenha um excelente dia!',
      followUp: [],
    },
    location: {
      text: 'A ArtNetwork Consult está sediada em **Portugal** 🇵🇹\n\nTrabalhamos com clientes de todo o país e também internacionalmente, graças às ferramentas digitais.\n\n**Reuniões:** Preferencialmente por videochamada (Zoom, Meet, Teams) para maior conveniência.\n\nSe preferir reunião presencial, podemos combinar um encontro.',
      followUp: ['meeting', 'services'],
    },
    about: {
      text: 'A **ArtNetwork Consult** é uma empresa especializada em Inteligência Artificial e consultoria web.\n\n🎯 **Missão:** Transformar negócios através da tecnologia e IA\n💡 **Visão:** Ser referência em soluções de IA em Portugal\n⭐ **Valores:** Inovação, qualidade e resultados\n\n**Números:**\n• 100+ projetos entregues\n• 50+ clientes satisfeitos\n• 5+ anos de experiência\n\nQuer saber mais sobre os nossos serviços?',
      followUp: ['services', 'portfolio'],
    },
    help: {
      text: 'Claro, estou aqui para ajudar! Posso dar-lhe informações sobre:\n\n• 🤖 Soluções de Inteligência Artificial\n• 💼 Os nossos serviços e especialidades\n• 💰 Preços e orçamentos\n• 📅 Agendar uma reunião\n• 📁 Ver o nosso portfólio\n\nSobre o que gostaria de saber mais?',
      followUp: ['services', 'ai_help', 'meeting'],
    },
    default: {
      text: 'Obrigado pela sua mensagem! Não tenho a certeza se entendi completamente.\n\nPosso ajudá-lo com:\n• Informações sobre soluções de IA\n• Os nossos serviços e portfólio\n• Preços e orçamentos\n• Agendar uma reunião\n\nPode reformular a sua pergunta ou escolher uma das opções acima?',
      followUp: ['services', 'ai_help', 'meeting'],
    },
  },

  // Respostas para follow-ups
  followUpLabels: {
    chatbots: 'Chatbots',
    pricing: 'Preços',
    meeting: 'Agendar reunião',
    services: 'Serviços',
    portfolio: 'Portfólio',
    ai_help: 'Soluções IA',
    consulting: 'Consultoria',
    website: 'Websites',
    systems: 'Sistemas',
  },
};
