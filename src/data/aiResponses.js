export const aiResponses = {
  greetings: {
    initial: 'Olá! Sou o assistente virtual da ArtNetwork Consult. Como posso ajudá-lo hoje?',
    return: 'Bem-vindo de volta! Em que posso ajudar?',
  },

  quickActions: [
    {
      id: 'ai_help',
      label: 'Como a IA pode ajudar?',
      keywords: ['ia', 'inteligencia artificial', 'ai', 'automatizar', 'automacao'],
    },
    {
      id: 'services',
      label: 'Quais serviços oferecem?',
      keywords: ['servico', 'servicos', 'oferecem', 'fazem', 'trabalho'],
    },
    {
      id: 'meeting',
      label: 'Agendar uma reunião',
      keywords: ['reuniao', 'agendar', 'marcar', 'contacto', 'falar'],
    },
  ],

  responses: {
    ai_help: {
      text: 'A Inteligência Artificial pode transformar o seu negócio de várias formas:\n\n• **Chatbots inteligentes** - Atendimento automático 24/7 para os seus clientes\n• **Automação de processos** - Reduza tarefas repetitivas e aumente a produtividade\n• **Análise preditiva** - Tome decisões baseadas em dados e previsões\n• **Personalização** - Ofereça experiências únicas para cada cliente\n\nGostaria de saber mais sobre alguma destas soluções?',
      followUp: ['Chatbots', 'Automação', 'Análise de dados'],
    },
    services: {
      text: 'Na ArtNetwork Consult oferecemos soluções digitais completas:\n\n• **Soluções de IA** - Chatbots, automação e análise preditiva\n• **Consultoria Web** - Estratégia digital, marketing e otimização\n• **Sistemas Web** - Dashboards e aplicações personalizadas\n• **Criação de Sites** - Websites profissionais e landing pages\n\nQual destas áreas lhe interessa mais?',
      followUp: ['IA', 'Consultoria', 'Sites'],
    },
    meeting: {
      text: 'Excelente! Ficamos felizes em conversar consigo.\n\nPode agendar uma reunião de várias formas:\n\n• **Email**: artnetworkconsult@gmail.com\n• **Telefone**: +351 965 093 138\n• **Formulário**: Preencha o formulário de contacto abaixo\n\nPreferimos fazer uma videochamada inicial para entender melhor o seu projeto. Qual o melhor horário para si?',
      followUp: ['Manhã', 'Tarde', 'Enviar email'],
    },
    pricing: {
      text: 'Os nossos preços variam conforme a complexidade e âmbito do projeto.\n\n**Oferecemos orçamento gratuito** - sem compromisso!\n\nPara lhe dar uma estimativa precisa, precisamos de entender:\n• O tipo de solução que precisa\n• O tamanho e setor do seu negócio\n• Os objetivos que quer alcançar\n\nGostaria de agendar uma reunião para discutirmos o seu projeto?',
      followUp: ['Agendar reunião', 'Enviar email'],
    },
    chatbots: {
      text: 'Os chatbots com IA são uma das nossas especialidades!\n\nPodemos criar assistentes virtuais que:\n• Respondem perguntas frequentes automaticamente\n• Qualificam leads e captam contactos\n• Integram com o seu CRM e sistemas\n• Funcionam 24 horas por dia, 7 dias por semana\n\nJá imaginou ter um assistente que nunca dorme e atende centenas de clientes simultaneamente?',
      followUp: ['Ver exemplos', 'Pedir orçamento'],
    },
    default: {
      text: 'Obrigado pela sua mensagem! Para lhe dar a melhor resposta, posso ajudá-lo com:\n\n• Informações sobre os nossos serviços de IA\n• Marcar uma reunião para discutir o seu projeto\n• Esclarecer dúvidas sobre preços e prazos\n\nO que gostaria de saber?',
      followUp: ['Serviços', 'Agendar reunião', 'Preços'],
    },
  },

  keywords: {
    preco: 'pricing',
    custo: 'pricing',
    orcamento: 'pricing',
    quanto: 'pricing',
    valor: 'pricing',
    chatbot: 'chatbots',
    bot: 'chatbots',
    assistente: 'chatbots',
    reuniao: 'meeting',
    agendar: 'meeting',
    marcar: 'meeting',
    contacto: 'meeting',
    contactar: 'meeting',
    falar: 'meeting',
    servico: 'services',
    servicos: 'services',
    oferecem: 'services',
    fazem: 'services',
    ia: 'ai_help',
    inteligencia: 'ai_help',
    artificial: 'ai_help',
    automacao: 'ai_help',
    automatizar: 'ai_help',
  },
};
