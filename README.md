# ArtNetwork Consult

Site institucional da **ArtNetwork Consult LDA** - Agência de Web Design e Consultoria Digital em Portugal.

![React](https://img.shields.io/badge/React-18-61DAFB?logo=react)
![Vite](https://img.shields.io/badge/Vite-5-646CFF?logo=vite)
![TailwindCSS](https://img.shields.io/badge/Tailwind-4-06B6D4?logo=tailwindcss)
![License](https://img.shields.io/badge/License-Proprietary-red)

## Sobre

Website moderno e responsivo desenvolvido para apresentar os serviços de web design, marketing digital e consultoria da ArtNetwork Consult.

### Funcionalidades

- Design moderno e responsivo
- Hero interativo com gradiente que segue o mouse
- Animações suaves com Framer Motion
- Carrossel de testemunhos
- Formulário de contacto funcional (EmailJS)
- SEO optimizado
- Deploy automático via GitHub Actions

## Tech Stack

| Tecnologia | Uso |
|------------|-----|
| **React 18** | Framework UI |
| **Vite 5** | Build tool |
| **Tailwind CSS 4** | Styling |
| **Framer Motion** | Animações |
| **Swiper** | Carrossel |
| **EmailJS** | Formulário de contacto |
| **React Scroll** | Navegação suave |

## Estrutura do Projeto

```
src/
├── components/
│   ├── layout/
│   │   ├── Navbar.jsx
│   │   └── Footer.jsx
│   └── sections/
│       ├── Hero.jsx
│       ├── Services.jsx
│       ├── Portfolio.jsx
│       ├── Testimonials.jsx
│       └── Contact.jsx
├── data/
│   ├── services.js
│   ├── portfolio.js
│   └── testimonials.js
├── utils/
│   └── emailService.js
├── App.jsx
├── main.jsx
└── index.css
```

## Instalação

```bash
# Clonar repositório
git clone https://github.com/mvttinif/art-network-consult-website.git

# Instalar dependências
cd art-network-consult-website
npm install

# Iniciar servidor de desenvolvimento
npm run dev

# Build para produção
npm run build
```

## Deploy

O deploy é automático via GitHub Actions:

1. Push para `main` → GitHub Actions faz build
2. Ficheiros compilados vão para branch `deploy`
3. Hostinger puxa automaticamente da branch `deploy`

## Paleta de Cores

| Cor | Hex | Uso |
|-----|-----|-----|
| Primary Red | `#C41E3A` | CTAs, destaques |
| Dark | `#1A1A1A` | Backgrounds |
| Bright Red | `#EF4444` | Hover states |
| Gray | `#6B7280` | Texto secundário |

## Licença

Este projeto é propriedade da **ArtNetwork Consult LDA**. Todos os direitos reservados.

---

Desenvolvido com React + Vite
