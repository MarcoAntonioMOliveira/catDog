# CatDog — Especificação do Projeto

Site de adoção responsável de pets. Trabalho de faculdade — disciplina de Programação Front-End.
Stack: HTML5 · CSS3 · JavaScript (ES6+) · jQuery 3.7

---

## Requisitos da disciplina

| # | Requisito | Status |
|---|-----------|--------|
| 1 | Mínimo 4 páginas interligadas | ✅ index, adotar, sobre, contato |
| 2 | Layout responsivo | ✅ implementado (verificar breakpoints) |
| 3 | Menu de navegação funcional | ✅ navbar + hamburger mobile |
| 4 | Formulário com validação JS | ✅ contato.html — validação em tempo real |
| 5 | Efeito interativo #1 | ✅ Modal de detalhes do pet (animação CSS) |
| 6 | Efeito interativo #2 | ✅ Filtro dinâmico de pets (sem reload) |
| 7 | SEO básico | ✅ meta description, keywords, Open Graph |
| 8 | GitHub Pages (hospedagem) | ⬜ configurar no repositório |
| 9 | Relatório técnico | ⬜ criar documento |
| 10 | Entrega em ZIP | ⬜ gerar ao final |

---

## Módulo 1 — Navegação global

Presente em todas as páginas via código repetido (sem framework).

**Componentes:**
- `navbar` — barra superior com logo, links e CTA
- `navToggle` — botão hambúrguer (mobile)
- `navMenu` — lista de links com classe `active` na página atual
- `footer` — rodapé com brand + nav repetida

**JS envolvido:** `initNavbar()`, `initHamburger()`, `setActiveNavLink()`

---

## Módulo 2 — Home (`index.html`)

**Seções:**
- Hero — headline, subtítulo, CTAs (Adotar / Saiba mais)
- Pets em destaque — grid com os 4 primeiros pets de `petsData`
- Estatísticas — contadores animados com jQuery (`data-target`)
- Como funciona — 3 passos ilustrados
- CTA final — link para adotar.html

**JS envolvido:** `initHome()`, `initCounters()`

---

## Módulo 3 — Adotar (`adotar.html`)

**Seções:**
- Page hero — título da página
- Barra de filtros — espécie, porte, faixa etária + contador + "Limpar"
- Grid de pets — cards renderizados dinamicamente de `petsData`
- CTA — link para contato.html

**JS envolvido:** `initFilter()`, `renderPets()`, `createPetCard()`

**Dados:** array `petsData` em `main.js` — 8 pets fictícios com imagens do picsum.photos

---

## Módulo 4 — Modal de pet

Compartilhado entre `index.html` e `adotar.html`.

**Comportamento:**
- Abre ao clicar em qualquer card ou botão "Quero adotar"
- Exibe foto, dados, tags, organização e botão de adoção
- Botão de adoção leva para `contato.html?pet=NomeDoPet`
- Fecha com botão X, clique no overlay ou tecla Escape
- Foco acessível no botão de fechar ao abrir

**JS envolvido:** `openModal()`, `closeModal()`

> **Bug conhecido:** `prefillPetFromURL()` tenta setar o valor do `<select>` com uma string livre ("Interesse em adotar: Thor"), mas as opções são valores fixos — não casa. Precisa corrigir para setar o valor `interesse-adocao`.

---

## Módulo 5 — Sobre (`sobre.html`)

**Seções:**
- Page hero
- Missão — texto institucional
- Como funciona — 3 etapas do processo de adoção
- Equipe / parceiros — cards de ONGs parceiras

---

## Módulo 6 — Contato (`contato.html`)

**Seções:**
- Page hero
- Grid: informações de contato (email, tel, horário, local) + formulário

**Formulário — campos:**
- Nome (obrigatório, min 3 chars)
- E-mail (obrigatório, regex)
- Telefone (opcional, regex)
- Assunto (obrigatório, `<select>`)
- Mensagem (obrigatória, min 20 chars)

**Comportamento JS:**
- Validação on blur + correção on input
- Submit valida tudo; foca no primeiro erro
- Sucesso: esconde form, exibe `#formSuccess`
- Pré-preenchimento via `?pet=` na URL

**JS envolvido:** `initContactForm()`, `prefillPetFromURL()`

---

## Módulo 7 — Interatividade JS

| Efeito | Função | Página |
|--------|--------|--------|
| Modal com animação de entrada/saída | `openModal()` / `closeModal()` | adotar, index |
| Filtro dinâmico sem reload | `initFilter()` | adotar |
| Contadores animados com jQuery | `initCounters()` | index |
| Scroll na navbar (sombra) | `initNavbar()` | todas |
| Menu hambúrguer | `initHamburger()` | todas |

---

## Entrega

1. **GitHub Pages** — `https://marcoantoniomoliveira.github.io/catDog/`
2. **ZIP** — pasta `catdog/` compactada sem `.git`
3. **Relatório técnico** — documento descrevendo: objetivo, tecnologias, estrutura de arquivos, efeitos implementados, decisões de design

---

## Pendências até entrega

- [ ] Ativar GitHub Pages (branch `main`, pasta raiz)
- [ ] Corrigir `prefillPetFromURL()` — select value errado
- [ ] Testar responsividade em mobile (375px), tablet (768px) e desktop (1280px)
- [ ] Testar validação do formulário no browser
- [ ] Testar todos os efeitos interativos no browser
- [ ] Escrever relatório técnico
- [ ] Gerar ZIP para entrega
