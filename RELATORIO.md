# Relatório Técnico — Projeto CatDog

**Disciplina:** Programação Front-End  
**Aluno:** Marco Oliveira  
**Data de entrega:** Junho de 2026  
**Repositório:** https://github.com/MarcoAntonioMOliveira/catDog  
**Hospedagem:** https://marcoantoniomoliveira.github.io/catDog/

---

## 1. Objetivo

Desenvolver um site institucional para uma plataforma fictícia de adoção responsável de pets chamada **CatDog**, conectando ONGs, abrigos e famílias interessadas em adotar cães e gatos. O projeto atende aos requisitos da disciplina de Programação Front-End e serve como base para um produto real.

---

## 2. Tecnologias utilizadas

| Tecnologia | Versão | Uso |
|---|---|---|
| HTML5 | — | Estrutura semântica das páginas |
| CSS3 | — | Estilização, layout responsivo, animações |
| JavaScript | ES6+ | Interatividade, filtros, validação, modal |
| jQuery | 3.7.1 | Animação dos contadores numéricos |
| Google Fonts | — | Tipografia (Inter) |
| GitHub Pages | — | Hospedagem estática gratuita |

---

## 3. Estrutura de arquivos

```
catdog/
├── index.html          # Home: hero, pets em destaque, estatísticas
├── adotar.html         # Galeria com filtro dinâmico
├── sobre.html          # Missão, como funciona, parceiros
├── contato.html        # Formulário de contato com validação
├── css/
│   └── style.css       # Folha de estilos principal (tokens, componentes)
├── js/
│   └── main.js         # Toda a lógica JavaScript do site
└── assets/
    └── images/
        ├── logo.svg
        └── pets/       # Fotos dos pets (8 imagens, licença livre)
```

---

## 4. Páginas desenvolvidas

### 4.1 Home (`index.html`)
Apresenta a proposta da plataforma com: hero de impacto, preview de 3 pets, seção de estatísticas com contadores animados, cards dos 4 pets em destaque, seção "Como funciona" e CTA final para a página de adoção.

### 4.2 Adotar (`adotar.html`)
Galeria completa com os 8 pets disponíveis. Permite filtrar por espécie (cão/gato), porte (pequeno/médio/grande) e faixa etária (filhote/jovem/adulto). O contador de resultados atualiza em tempo real. Cada card abre um modal com informações detalhadas do pet.

### 4.3 Sobre (`sobre.html`)
Página institucional com a missão da plataforma, os 4 passos do processo de adoção e apresentação das ONGs parceiras.

### 4.4 Contato (`contato.html`)
Informações de contato + formulário com 5 campos (nome, e-mail, telefone, assunto, mensagem). Ao vir da página de adoção via `?pet=NomeDoPet`, o assunto e a mensagem são pré-preenchidos automaticamente.

---

## 5. Efeitos interativos JavaScript

### Efeito 1 — Modal de detalhes do pet
Ao clicar em qualquer card de pet, abre um modal com foto ampliada, descrição completa, tags e botão de adoção. Implementado com animação CSS de entrada/saída (opacity + translateY). Fecha com botão X, clique no overlay ou tecla Escape. Acessível com foco gerenciado.

### Efeito 2 — Filtro dinâmico sem recarregamento
Na página Adotar, três selects (espécie, porte, faixa etária) filtram os cards em tempo real sem nenhum recarregamento de página. O JavaScript intercepta os eventos `change`, aplica os filtros sobre o array de dados e re-renderiza o grid. O contador de resultados atualiza instantaneamente.

### Efeito 3 — Contadores animados com jQuery
Na seção de estatísticas da Home, quatro números (pets adotados, organizações parceiras, satisfação, pets disponíveis) animam de 0 até o valor final quando entram na viewport do usuário. Utiliza `IntersectionObserver` + `jQuery.animate()`.

### Efeitos adicionais
- **Navbar com scroll:** ao rolar a página, a barra de navegação recebe sombra suave
- **Menu hambúrguer:** em mobile, o menu colapsa em um botão animado (3 barras → X)
- **Link ativo:** o link da página atual na navbar recebe destaque automático
- **Pré-preenchimento por URL:** ao clicar "Quero adotar [pet]", o formulário de contato pré-preenche assunto e mensagem

---

## 6. Formulário de contato — validação JS

Validação em duas etapas:

1. **On blur:** ao sair de cada campo, valida individualmente e exibe mensagem de erro específica
2. **On submit:** valida todos os campos; se inválido, foca no primeiro campo com erro

Regras por campo:
- **Nome:** obrigatório, mínimo 3 caracteres
- **E-mail:** obrigatório, formato válido (regex)
- **Telefone:** opcional, formato `(XX) XXXXX-XXXX` (regex)
- **Assunto:** obrigatório, seleção do `<select>`
- **Mensagem:** obrigatória, mínimo 20 caracteres

Ao envio válido: o formulário é ocultado e exibe mensagem de sucesso com animação.

---

## 7. Responsividade

O layout adapta-se a três breakpoints:

| Breakpoint | Largura | Comportamento |
|---|---|---|
| Mobile | até 768px | Menu hambúrguer, grid 1 coluna, hero empilhado |
| Tablet | 768px–1024px | Grid 2 colunas, navbar completa |
| Desktop | 1024px+ | Grid 3–4 colunas, layout completo |

Implementado com CSS Grid, Flexbox e media queries. Testado em 375px (mobile), 768px (tablet) e 1280px (desktop).

---

## 8. SEO

Todas as páginas possuem:
- `<meta name="description">` e `<meta name="keywords">` individuais
- Open Graph (`og:title`, `og:description`, `og:type`, `og:image`)
- Tags semânticas HTML5 (`<header>`, `<main>`, `<footer>`, `<nav>`, `<section>`, `<article>`, `<aside>`)
- Atributos `alt` em todas as imagens
- `aria-label`, `aria-required`, `role` e `aria-live` para acessibilidade

---

## 9. Decisões de design

- **Design system próprio:** todas as cores, tipografia e espaçamentos são definidos como CSS Custom Properties (variáveis), facilitando manutenção e futura expansão
- **Dados no front-end:** os pets são um array JS em `main.js`, simulando uma API. Em uma versão com back-end, essa lista seria substituída por uma chamada `fetch()`
- **jQuery apenas onde agrega:** jQuery é usado somente para a animação dos contadores (`jQuery.animate()`), que não tem equivalente nativo simples. Todo o resto usa Vanilla JS
- **Imagens locais:** as fotos dos pets são hospedadas no próprio repositório (licença Unsplash CC0) para garantir disponibilidade no GitHub Pages sem depender de serviços externos

---

## 10. Como executar localmente

```bash
# Opção 1 — com Node.js
npx http-server . -p 3000 -o

# Opção 2 — com Python
python -m http.server 3000

# Opção 3 — abrir index.html diretamente no browser
```

> Abrir os arquivos `.html` diretamente pelo sistema de arquivos (`file://`) pode causar problemas com algumas features. Recomenda-se usar um servidor local.
