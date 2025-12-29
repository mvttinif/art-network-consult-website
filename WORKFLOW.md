# Guia de Alterações - ArtNetwork Consult

## Workflow Completo

### 1. Abrir o projeto
```bash
cd C:\Users\mautt\meuProjetinho\artnetwork-consult
```

### 2. Iniciar servidor de desenvolvimento
```bash
npm run dev
```
Abre **http://localhost:5173** no browser para ver as alterações em tempo real.

### 3. Editar os ficheiros

| O que alterar | Ficheiro |
|---------------|----------|
| Textos do Hero | `src/components/sections/Hero.jsx` |
| Serviços | `src/data/services.js` |
| Portfólio | `src/data/portfolio.js` |
| Testemunhos | `src/data/testimonials.js` |
| Contactos (info) | `src/components/sections/Contact.jsx` |
| Footer/Horários | `src/components/layout/Footer.jsx` |
| Navbar | `src/components/layout/Navbar.jsx` |
| SEO/Meta tags | `index.html` |
| Imagens | Pasta `public/` |

### 4. Verificar alterações no browser
Guarda o ficheiro (Ctrl+S) → o browser atualiza automaticamente.

### 5. Quando estiver pronto, fazer deploy
```bash
git add .
git commit -m "descrição da alteração"
git push
```

### 6. Aguardar deploy automático
- GitHub Actions faz build (~1-2 min)
- Hostinger puxa automaticamente
- Site atualizado em https://artnetworkconsult.com

---

## Resumo Visual

```
Editar ficheiro → Guardar → Ver no localhost
                              ↓
                         Está bom?
                              ↓
         git add . && git commit -m "msg" && git push
                              ↓
                    Deploy automático (2 min)
                              ↓
                      Site online atualizado
```

---

## Comandos Úteis

| Comando | Descrição |
|---------|-----------|
| `npm run dev` | Iniciar servidor local |
| `npm run build` | Criar build de produção |
| `git status` | Ver ficheiros alterados |
| `git add .` | Adicionar todas as alterações |
| `git commit -m "msg"` | Criar commit |
| `git push` | Enviar para GitHub |

---

## Links Importantes

- **Site:** https://artnetworkconsult.com
- **GitHub:** https://github.com/mvttinif/art-network-consult-website
- **GitHub Actions:** https://github.com/mvttinif/art-network-consult-website/actions
- **Hostinger hPanel:** https://hpanel.hostinger.com
- **EmailJS Dashboard:** https://dashboard.emailjs.com

---

## Estrutura do Projeto

```
artnetwork-consult/
├── public/                 # Imagens e assets públicos
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.jsx
│   │   │   └── Footer.jsx
│   │   └── sections/
│   │       ├── Hero.jsx
│   │       ├── Services.jsx
│   │       ├── Portfolio.jsx
│   │       ├── Testimonials.jsx
│   │       └── Contact.jsx
│   ├── data/
│   │   ├── services.js     # Dados dos serviços
│   │   ├── portfolio.js    # Dados do portfólio
│   │   └── testimonials.js # Dados dos testemunhos
│   ├── utils/
│   │   └── emailService.js # Configuração EmailJS
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css           # Estilos globais + Tailwind
├── index.html              # Meta tags SEO
├── package.json
└── vite.config.js
```

---

## Adicionar Nova Imagem

1. Coloca a imagem na pasta `public/`
2. Usa no código: `src="/nome-da-imagem.webp"`
3. Formatos recomendados: `.webp` ou `.svg`

---

## Adicionar Novo Projeto ao Portfólio

Edita `src/data/portfolio.js`:

```javascript
{
  id: 7,  // próximo número
  title: 'Nome do Projeto',
  category: 'Website',  // ou 'Loja Online', 'Sistema Web', 'Marketing Digital'
  image: '/images/portfolio/nome-projeto.webp',
  description: 'Descrição breve do projeto.',
}
```

---

## Adicionar Novo Testemunho

Edita `src/data/testimonials.js`:

```javascript
{
  id: 5,  // próximo número
  text: 'Texto do testemunho aqui...',
  author: 'Nome da Pessoa',
  role: 'Cargo',
  company: 'Nome da Empresa',
  image: 'URL da foto ou /caminho/local.jpg',
}
```

---

## Problemas Comuns

### O site não atualiza após push
1. Verifica GitHub Actions: https://github.com/mvttinif/art-network-consult-website/actions
2. Se falhou, clica em "Re-run all jobs"
3. Na Hostinger, vai a GIT e clica "Deploy" manualmente

### Erro no npm run dev
```bash
npm install
npm run dev
```

### Alterações não aparecem no localhost
- Verifica se guardaste o ficheiro (Ctrl+S)
- Tenta refresh forçado no browser (Ctrl+Shift+R)

---

*Última atualização: Dezembro 2024*
