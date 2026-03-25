# 🎬 Netflix Profile Selector

> Tela de seleção de perfis inspirada na Netflix - Projeto desenvolvido durante imersão front-end da Alura com uso de IA

![Status](https://img.shields.io/badge/Status-Concluído-success?style=flat-square)
![HTML5](https://img.shields.io/badge/HTML5-Semântico-orange?style=flat-square)
![CSS3](https://img.shields.io/badge/CSS3-Responsivo-blue?style=flat-square)
![License](https://img.shields.io/badge/Licença-MIT-blueviolet?style=flat-square)

---

## 📋 Sobre o Projeto

Este projeto implementa uma **interface moderna de seleção de perfis** inspirada no design visual da Netflix. Desenvolvido com foco em **semântica HTML5**, **acessibilidade web** e **responsividade**, demonstrando boas práticas de desenvolvimento front-end.

### ✨ Destaques

- ✅ **HTML5 Semântico** - Uso correto de tags semânticas (`<header>`, `<main>`, `<section>`, `<article>`, `<figure>`)
- ♿ **Acessibilidade** - `aria-label`, `tabindex`, `alt text` descritivo para inclusive design
- 📱 **Responsivo** - Grid CSS adaptativo com `auto-fit` e `minmax()`
- 🎨 **Design Netflix-like** - Tema escuro com gradientes, sombras e animações suaves
- ⌨️ **Navegação por Teclado** - Suporte completo com `:focus-visible`
- 🎯 **Performance** - CSS otimizado com variáveis CSS e transições eficientes

---

## 🚀 Tecnologias Utilizadas

| Tecnologia | Descrição |
|:---:|:---|
| **HTML5** | Marcação semântica e estrutura acessível |
| **CSS3** | Grid Layout, Flexbox, Variáveis CSS, Gradientes |
| **JavaScript** | (Ready for interactivity) |

---

## 📁 Estrutura do Projeto

```
netflix-alura/
├── index.html          # Marcação semântica com perfis
├── style.css           # Estilos inspirados na Netflix
├── README.MD           # Este arquivo
└── assets/             # Imagens dos perfis
    ├── Perfil-1.jpg
    ├── Perfil-2.jpg
    ├── Perfil-3.jpg
    └── Perfil-4.jpg
```

---

## 🎯 Funcionalidades

### Layout Centralizado
- Perfis organizados em grade responsiva
- Centralização automática em qualquer tamanho de tela
- Título próximo aos ícones de perfil

### Interatividade Visual
- **Hover Effect**: Cards levantam com sombra profunda
- **Focus State**: Suporte para navegação por teclado
- **Animações Suaves**: Transições em `transform`, `box-shadow` e `border-color`
- **Indicador Visual**: Borda vermelha (Netflix red #e50914) ao interagir

### Design Responsivo
- Grid adaptativo com `repeat(auto-fit, minmax(140px, 1fr))`
- Ajustes automáticos para mobile (até 540px)
- Tipografia fluida com `clamp()`

---

## 🎨 Paleta de Cores

```css
--bg: #141414              /* Fundo principal (quase preto) */
--surface: #1f1f1f         /* Superfície secundária */
--surface-contrast: #2a2a2a /* Contraste para profundidade */
--text: #ffffff            /* Texto principal (branco) */
--text-muted: #e5e5e5      /* Texto secundário (cinza claro) */
--primary: #e50914         /* Destaque (Netflix red) */
```

---

## 📱 Responsividade

### Desktop (1024px+)
- 4 perfis por linha em telas grandes
- Espaçamento amplo (2rem)
- Título com tamanho máximo

### Mobile (até 540px)
- Grid adaptável com colunas redimensionadas
- Espaçamento reduzido (1rem)
- Tipografia otimizada

---

## ♿ Acessibilidade

Implementadas as melhores práticas de inclusive design:

```html
<!-- ARIA Labels para contexto semântico -->
<section class="profiles" aria-label="Seleção de perfil">

<!-- Alt text descritivo para imagens -->
<img alt="figura esguia de estética gótica e melancólica...">

<!-- Navegação por teclado -->
<article class="profile" tabindex="0">
```

✅ **Suporte para:**
- Leitores de tela
- Navegação via teclado (Tab, Enter)
- Focus visual claramente identificável
- Contraste de cores (WCAG AA)

---

## 🛠️ Como Usar

### 1. Clone o Repositório
```bash
git clone https://github.com/seu-usuario/netflix-alura.git
cd netflix-alura
```

### 2. Abra no Navegador
```bash
# Opção 1: Abra direto o arquivo
open index.html

# Opção 2: Use um servidor local (recomendado)
python -m http.server 8000
# Acesse: http://localhost:8000
```

### 3. Customize os Perfis
Edite `index.html` para adicionar seus perfis:
```html
<article class="profile" tabindex="0">
    <figure>
        <img src="/assets/seu-perfil.jpg" alt="Descrição do perfil">
        <figcaption>Seu Nome</figcaption>
    </figure>
</article>
```

---

## 💡 Conceitos Implementados

### HTML Semântico
- `<header>` - Seção de cabeçalho
- `<main>` - Conteúdo principal
- `<section>` - Grupo temático (perfis)
- `<article>` - Elemento autossuficiente
- `<figure>` + `<figcaption>` - Imagem com legenda

### CSS Moderno
- **CSS Grid** - `repeat(auto-fit, minmax())` para layout responsivo
- **Flexbox** - Centralização sem esforço
- **Variáveis CSS** - Tema reutilizável
- **Gradientes** - Radial e linear para profundidade
- **Sombras** - Elevação visual com `box-shadow`

### Acessibilidade Web
- **ARIA Attributes** - Contexto semântico extra
- **Semantic HTML** - Significado estrutural claro
- **Keyboard Navigation** - `tabindex` e `:focus-visible`
- **Color Contrast** - Texto legível (WCAG AA+)

---

## 🎓 Aprendizados

Este projeto serviu para consolidar:

- ✨ Uso correto de **HTML5 semântico**
- 🎨 Criação de **layouts responsivos com CSS Grid**
- ♿ Implementação de **acessibilidade web**
- 🔄 **Variáveis CSS** para temas dinâmicos
- ⚡ **CSS Transitions** para animações suaves
- 📱 **Mobile-first** e **progressive enhancement**

---

## 🚀 Possíveis Melhorias Futuras

- [ ] Adicionar JavaScript para interatividade funcional
- [ ] Animação de carregamento ao selecionar perfil
- [ ] Modo claro (light theme)
- [ ] PWA (Progressive Web App) para offline
- [ ] Testes de acessibilidade com ferramentas (Lighthouse, axe)
- [ ] Deploy no GitHub Pages ou Vercel

---

## 📞 Contato

Desenvolvido durante a **Imersão Front-End Alura** com uso de IA generativa.

- **GitHub**: [github.com](https://github.com)
- **Portfolio**: [seu-portfolio.com](https://seu-portfolio.com)

---

## 📄 Licença

Este projeto está licenciado sob a **MIT License** - veja o arquivo [LICENSE](LICENSE) para detalhes.

---

### 🙏 Agradecimentos

- [Alura](https://www.alura.com.br) - Pela excelente imersão
- [Netflix](https://www.netflix.com) - Design inspirador
- Web Standards - HTML/CSS/Acessibilidade

---

<div align="center">

**⭐ Se este projeto foi útil, considere deixar uma estrela!**

Desenvolvido com 💜 e CSS

</div>
