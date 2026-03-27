# 🎬 Lumini - Clone Netflix (Alura)

[![Status](https://img.shields.io/badge/Status-Concluído-success?style=flat-square)](https://github.com)
[![HTML5](https://img.shields.io/badge/HTML5-Semântico-orange?style=flat-square)](https://developer.mozilla.org/pt-BR/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-Moderno-blue?style=flat-square)](https://developer.mozilla.org/pt-BR/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JS-Vanilla-yellow?style=flat-square)](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
[![License](https://img.shields.io/badge/Licença-MIT-blueviolet?style=flat-square)](LICENSE)

---

## 📱 Sobre o Projeto

**Lumini** é um **clone moderno da interface Netflix** desenvolvido durante a imersão Front-End da Alura. Recria fielmente a experiência de **splash screen de carregamento**, **seleção de perfis** e **navegação para catálogo**.

### ✨ Funcionalidades Implementadas

- 🎥 **Splash Screen** - Tela de carregamento Netflix-style com logo animada (scale-in + float) e spinner rotativo (3.5s)
- 👥 **Seleção de Perfis** - 4 perfis responsivos com hover/focus effects e navegação por teclado
- 🌙 **Tema Claro/Escuro** - Toggle automático (system pref) + persistente (localStorage)
- 📱 **Totalmente Responsivo** - Mobile-first com CSS Grid adaptativo
- ♿ **Acessível** - ARIA labels, alt descritivos, keyboard navigation, alto contraste
- 🔗 **Navegação** - Links para `catalogo/catalogo.html` com parâmetros de perfil
- ⚡ **Performance** - CSS vars, animações GPU-accelerated, sem frameworks

---

## 🚀 Tecnologias

| Frontend | Ferramentas |
|:--------|:-----------:|
| **HTML5** | Semântica + Acessibilidade |
| **CSS3** | Grid, Flexbox, Vars, Animações, Gradientes |
| **JavaScript** | Vanilla - Splash logic + Theme manager |

**Sem dependências externas!** Funciona offline.

---

## 📁 Estrutura

```
Netflix Alura/
├── index.html              # Splash + Seleção de perfis
├── style.css               # Estilos + animações + temas
├── theme.js                # Toggle claro/escuro
├── js/index.js             # Splash screen logic
├── assets/                 # Logo + perfis
│   ├── logo.png
│   ├── Perfil-1.jpg ... -4.jpg
└── catalogo/               # Catálogo de filmes (página destino)
    ├── catalogo.html
    ├── catalogo.css
    └── js/...
```

---

## 🎯 Como Executar

1. **Abra `index.html`** no browser (Live Server recomendado)
```
# VS Code + Live Server extension
# Ou Python:
python -m http.server 8000
# Acesse: http://localhost:8000
```

2. **Teste a Splash** - Aguarde 3.5s para ver perfis
3. **Selecione Perfil** - Vai para catálogo com parâmetros
4. **Toggle Tema** ☀️/☾ no canto superior esquerdo

---

## 📱 Demo Responsiva

| Mobile | Tablet | Desktop |
|:------:|:------:|:-------:|
| ![Mobile](https://via.placeholder.com/300x600/141414/ffffff?text=Mobile) | ![Tablet](https://via.placeholder.com/500x400/141414/ffffff?text=Tablet) | ![Desktop](https://via.placeholder.com/1200x300/141414/ffffff?text=Desktop) |

---

## 🎨 Design System

### Cores (CSS Vars)
```css
:root {
  --bg: #141414;           /* Fundo Netflix */
  --primary: #e50914;      /* Vermelho destaque */
  --text: #ffffff;         /* Texto claro */
}
body.light { /* Overrides para modo claro */ }
```

### Animações
- **Splash**: Logo `scale(0.8→1)` + `logoFloat` (Y translate)
- **Spinner**: `@keyframes spin` 360°
- **Perfis**: `translateY(-5px)` + shadow lift
- **Transições**: `cubic-bezier` suaves, 0.25s-0.8s

---

## ♿ Acessibilidade (WCAG AA)

- ✅ **Semântica HTML5** (`<main>`, `<figure>`, `<figcaption>`)
- ✅ **ARIA Labels** em seções
- ✅ **Keyboard Focus**: `:focus-visible` + `tabindex=0`
- ✅ **Alt Texts** descritivos nas imagens
- ✅ **Contraste** 4.5:1+ em textos

---

## 🔧 Conceitos Aprendidos

- **Splash Screens** JS/CSS coordenados
- **CSS Custom Properties** para temas dinâmicos
- **CSS Grid Responsivo** `auto-fit/minmax`
- **Animações Performáticas** `transform/opacity`
- **localStorage** para preferências usuário
- **Overflow Hidden** durante loading

---

## 🚀 Próximos Passos

- [ ] Integração completa com `catalogo/js`
- [ ] Player de vídeo simulado
- [ ] Autenticação mock
- [ ] PWA com Service Worker
- [ ] Testes unitários (Vitest/Jest)
- [ ] Deploy Vercel/Netlify

---

## 📞 Autor

Desenvolvido por **Samuel** durante **Imersão Alura**

[![GitHub](https://img.shields.io/badge/GitHub-Perfil-black?style=social&logo=github)](https://github.com)

---

## 📄 Licença

[MIT License](LICENSE) - Use livremente! ✨

---

**Vlw Alura! 🎓 Feito com ❤️ e muito CSS.**

