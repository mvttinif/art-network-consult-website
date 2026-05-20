const t={greetings:{initial:"Olá! Sou o assistente virtual da ArtNetwork Consult, especialistas em Inteligência Artificial. Como posso ajudá-lo hoje?",patterns:["ola","oi","bom dia","boa tarde","boa noite","hey","hello","hi"],responses:["Olá! Em que posso ajudá-lo hoje?","Olá! Bem-vindo à ArtNetwork Consult. Como posso ser útil?","Oi! Estou aqui para ajudar. O que gostaria de saber?"]},quickActions:[{id:"ai_help",label:"Como a IA pode ajudar?"},{id:"services",label:"Quais serviços oferecem?"},{id:"meeting",label:"Agendar uma reunião"}],intents:{ai_help:{keywords:["ia","inteligencia artificial","ai","machine learning","ml","automacao","automatizar","automatico","robot","robo"],weight:2},chatbots:{keywords:["chatbot","chat bot","bot","assistente virtual","assistente","atendimento automatico","whatsapp bot"],weight:3},services:{keywords:["servico","servicos","oferecem","fazem","trabalho","trabalham","especialidade","area","areas"],weight:1},meeting:{keywords:["reuniao","agendar","marcar","contacto","contactar","falar","ligar","telefonar","email","conversar","encontro"],weight:2},pricing:{keywords:["preco","precos","custo","custos","orcamento","quanto","valor","valores","investimento","pagar","cobram","caro","barato"],weight:2},portfolio:{keywords:["portfolio","projetos","trabalhos","exemplos","casos","clientes","referencias","mostrar"],weight:2},website:{keywords:["site","sites","website","pagina","landing page","loja online","ecommerce","e-commerce"],weight:2},consulting:{keywords:["consultoria","estrategia","auditoria","analise","otimizacao","seo","marketing","digital"],weight:2},systems:{keywords:["sistema","sistemas","dashboard","painel","aplicacao","app","software","plataforma","crm","erp"],weight:2},timeline:{keywords:["tempo","demora","prazo","prazos","quando","duracao","dias","semanas","meses","rapido"],weight:2},thanks:{keywords:["obrigado","obrigada","agradeco","valeu","thanks","thank you"],weight:3},bye:{keywords:["adeus","tchau","ate logo","ate mais","bye","goodbye"],weight:3},help:{keywords:["ajuda","ajudar","duvida","duvidas","pergunta","perguntas","informacao","informacoes","saber","explicar"],weight:1},location:{keywords:["onde","localizacao","endereco","morada","escritorio","portugal","lisboa","porto"],weight:2},about:{keywords:["quem","empresa","artnetwork","sobre","historia","equipa","fundador"],weight:2}},responses:{ai_help:{text:`A Inteligência Artificial pode revolucionar o seu negócio de várias formas:

• **Chatbots inteligentes** - Atendimento automático 24/7
• **Automação de processos** - Reduza tarefas repetitivas em até 80%
• **Análise preditiva** - Antecipe tendências e comportamentos
• **Personalização** - Experiências únicas para cada cliente
• **Processamento de documentos** - Extração automática de dados

Qual destas soluções desperta mais o seu interesse?`,followUp:["chatbots","pricing","meeting"]},chatbots:{text:`Os chatbots com IA são uma das nossas especialidades! Podemos criar assistentes virtuais que:

• Respondem perguntas frequentes automaticamente
• Qualificam leads e captam contactos
• Processam pedidos e reservas
• Integram com WhatsApp, Messenger e website
• Funcionam 24h/dia, 7 dias/semana
• Aprendem e melhoram com o tempo

**Exemplo real:** Um cliente reduziu 60% das chamadas de suporte com o nosso chatbot.

Quer saber como podemos implementar no seu negócio?`,followUp:["pricing","portfolio","meeting"]},services:{text:`Na ArtNetwork Consult somos especialistas em soluções digitais:

🤖 **Soluções de IA** - Chatbots, automação e análise preditiva
📊 **Consultoria Web** - Estratégia digital e otimização
⚙️ **Sistemas Web** - Dashboards e aplicações à medida
🌐 **Criação de Sites** - Websites modernos e funcionais

Todos os nossos serviços são personalizados às necessidades do seu negócio. Qual área lhe interessa mais?`,followUp:["ai_help","consulting","website"]},meeting:{text:`Ótimo! Adoramos conhecer novos projetos. Pode contactar-nos por:

📧 **Email:** contacto@artnetworkconsult.com
📱 **Telefone:** +351 965 093 138
💬 **WhatsApp:** Mesmo número
📝 **Formulário:** Abaixo nesta página

**Oferecemos uma consulta inicial gratuita** de 30 minutos para entender o seu projeto.

Prefere manhã ou tarde?`,followUp:["services","pricing"]},pricing:{text:`Os nossos preços são ajustados a cada projeto, pois cada negócio tem necessidades únicas.

**Oferecemos orçamento 100% gratuito** e sem compromisso!

Para uma estimativa mais precisa, precisamos entender:
• Que tipo de solução procura
• A dimensão do seu negócio
• Os objetivos que pretende alcançar

**Dica:** A maioria dos nossos clientes de IA vê retorno do investimento em 3-6 meses.

Quer agendar uma reunião para discutirmos?`,followUp:["meeting","services"]},portfolio:{text:`Temos orgulho nos projetos que desenvolvemos! Alguns destaques:

🏦 **Assistente Virtual Bancário** - Chatbot com NLP para atendimento ao cliente
📈 **Sistema de Análise Preditiva** - ML para previsão de vendas
🎫 **Automação de Atendimento** - Triagem automática de tickets
📊 **Dashboard Executivo** - KPIs em tempo real

Pode ver mais detalhes na secção Portfólio do nosso site, ou posso explicar algum projeto específico?`,followUp:["ai_help","meeting"]},website:{text:`Criamos websites profissionais e modernos:

• **Sites institucionais** - Presença online profissional
• **Landing pages** - Páginas otimizadas para conversão
• **E-commerce** - Lojas online completas
• **Portais** - Plataformas com área de cliente

Todos os sites incluem:
✓ Design responsivo (mobile-friendly)
✓ Otimização SEO
✓ Velocidade otimizada
✓ Integração com analytics

Já tem uma ideia do que precisa?`,followUp:["pricing","meeting"]},consulting:{text:`A nossa consultoria web ajuda empresas a crescer online:

📋 **Auditoria Digital** - Análise completa da sua presença online
🎯 **Estratégia** - Plano personalizado de crescimento
🔍 **SEO** - Melhor posicionamento no Google
📱 **Redes Sociais** - Estratégia de conteúdo
📊 **Analytics** - Métricas e relatórios de performance

Começamos sempre com um diagnóstico gratuito. Interessado?`,followUp:["meeting","pricing"]},systems:{text:`Desenvolvemos sistemas web à medida:

📊 **Dashboards** - Visualização de dados em tempo real
👥 **CRM** - Gestão de clientes e vendas
📦 **ERP** - Gestão empresarial integrada
🔄 **Automações** - Workflows e processos automáticos
🔗 **Integrações** - Conexão entre sistemas

Todos os sistemas incluem formação e suporte técnico. Que tipo de sistema procura?`,followUp:["pricing","meeting"]},timeline:{text:`Os prazos variam conforme a complexidade do projeto:

⏱️ **Chatbot simples:** 2-4 semanas
⏱️ **Website institucional:** 3-6 semanas
⏱️ **Sistema web:** 6-12 semanas
⏱️ **Projeto de IA complexo:** 8-16 semanas

Trabalhamos com metodologia ágil, o que significa que vai vendo resultados desde o início.

**Tem um prazo específico em mente?** Podemos adaptar o planeamento.`,followUp:["meeting","pricing"]},thanks:{text:`De nada! Foi um prazer ajudar. 😊

Se tiver mais alguma dúvida, estou por aqui. Pode também:

• Explorar o nosso site para mais informações
• Preencher o formulário de contacto
• Ligar-nos diretamente

Boa sorte com o seu projeto!`,followUp:["services","meeting"]},bye:{text:`Até breve! 👋

Foi um prazer conversar consigo. Se precisar de ajuda no futuro, estarei aqui.

**Lembre-se:** Oferecemos consulta inicial gratuita!

Tenha um excelente dia!`,followUp:[]},location:{text:`A ArtNetwork Consult está sediada em **Portugal** 🇵🇹

Trabalhamos com clientes de todo o país e também internacionalmente, graças às ferramentas digitais.

**Reuniões:** Preferencialmente por videochamada (Zoom, Meet, Teams) para maior conveniência.

Se preferir reunião presencial, podemos combinar um encontro.`,followUp:["meeting","services"]},about:{text:`A **ArtNetwork Consult** é uma empresa especializada em Inteligência Artificial e consultoria web.

🎯 **Missão:** Transformar negócios através da tecnologia e IA
💡 **Visão:** Ser referência em soluções de IA em Portugal
⭐ **Valores:** Inovação, qualidade e resultados

**Números:**
• 100+ projetos entregues
• 50+ clientes satisfeitos
• 5+ anos de experiência

Quer saber mais sobre os nossos serviços?`,followUp:["services","portfolio"]},help:{text:`Claro, estou aqui para ajudar! Posso dar-lhe informações sobre:

• 🤖 Soluções de Inteligência Artificial
• 💼 Os nossos serviços e especialidades
• 💰 Preços e orçamentos
• 📅 Agendar uma reunião
• 📁 Ver o nosso portfólio

Sobre o que gostaria de saber mais?`,followUp:["services","ai_help","meeting"]},default:{text:`Obrigado pela sua mensagem! Não tenho a certeza se entendi completamente.

Posso ajudá-lo com:
• Informações sobre soluções de IA
• Os nossos serviços e portfólio
• Preços e orçamentos
• Agendar uma reunião

Pode reformular a sua pergunta ou escolher uma das opções acima?`,followUp:["services","ai_help","meeting"]}},followUpLabels:{chatbots:"Chatbots",pricing:"Preços",meeting:"Agendar reunião",services:"Serviços",portfolio:"Portfólio",ai_help:"Soluções IA",consulting:"Consultoria",website:"Websites",systems:"Sistemas"}},m=e=>e.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9\s]/g," ").replace(/\s+/g," ").trim(),u=e=>{const o=m(e),a=o.split(" ");return a.length<=3?t.greetings.patterns.some(n=>o.includes(n)||a.includes(n)):!1},g=()=>{const e=t.greetings.responses;return{text:e[Math.floor(Math.random()*e.length)],followUp:["ai_help","services","meeting"]}},f=(e,o,a)=>{const n=m(e),i=n.split(" ");let s=0,r=0;for(const p of a.keywords){const l=m(p);i.includes(l)?(s+=3*a.weight,r++):l.includes(" ")&&n.includes(l)?(s+=4*a.weight,r++):n.includes(l)?(s+=2*a.weight,r++):i.some(d=>d.includes(l)||l.includes(d))&&(s+=1*a.weight,r++)}return r>1&&(s+=r*.5),{intentId:o,score:s,matchedKeywords:r}},h=e=>{const o=[];for(const[a,n]of Object.entries(t.intents)){const i=f(e,a,n);i.score>0&&o.push(i)}return o.sort((a,n)=>n.score-a.score),o.length>0&&o[0].score>=2?o[0].intentId:null},c=e=>!e||e.length===0?[]:e.map(o=>({id:o,label:t.followUpLabels[o]||o})),w=async(e,o=null)=>{const a=300+Math.random()*700;if(await new Promise(s=>setTimeout(s,a)),o&&t.responses[o]){const s=t.responses[o];return{text:s.text,followUp:c(s.followUp)}}if(u(e)){const s=g();return{text:s.text,followUp:c(s.followUp)}}const n=h(e);if(n&&t.responses[n]){const s=t.responses[n];return{text:s.text,followUp:c(s.followUp)}}const i=t.responses.default;return{text:i.text,followUp:c(i.followUp)}},b=()=>t.greetings.initial,v=()=>t.quickActions,A=e=>!!t.responses[e];export{w as getAIResponse,b as getInitialGreeting,v as getQuickActions,A as hasResponse};
