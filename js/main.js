/* ===================================================
   CatDog — main.js
   Funcionalidades:
     1. Dados dos pets (fonte de verdade)
     2. Renderização dinâmica de cards
     3. Modal de detalhes do pet
     4. Filtro dinâmico (adotar.html)
     5. Contador animado com jQuery (index.html)
     6. Efeito de scroll na navbar
     7. Menu hambúrguer responsivo
     8. Validação de formulário de contato
   =================================================== */

/* ==============================================
   1. DADOS DOS PETS
   ============================================== */
const petsData = [
  {
    id: 1,
    name: 'Thor',
    species: 'cão',
    breed: 'Labrador mix',
    age: 2,
    ageLabel: '2 anos',
    size: 'grande',
    gender: 'Macho',
    status: 'disponível',
    description: 'Thor é brincalhão e cheio de energia. Adora crianças e convive bem com outros cães. Já foi vacinado, vermifugado e castrado. Busca uma família com espaço para correr e muita disposição.',
    tags: ['Brincalhão', 'Sociável', 'Vacinado', 'Castrado'],
    image: 'https://picsum.photos/seed/thor-labrador/480/360',
    org: 'Instituto Patinhas'
  },
  {
    id: 2,
    name: 'Luna',
    species: 'gato',
    breed: 'Siamês mix',
    age: 1,
    ageLabel: '1 ano',
    size: 'pequeno',
    gender: 'Fêmea',
    status: 'disponível',
    description: 'Luna é tranquila e carinhosa. Adora colos e se adapta muito bem a apartamentos. Convive bem com outros gatos e não requer muito espaço.',
    tags: ['Tranquila', 'Carinhosa', 'Para apartamento', 'Vacinada'],
    image: 'https://picsum.photos/seed/luna-siames/480/360',
    org: 'Lar dos Miados'
  },
  {
    id: 3,
    name: 'Bob',
    species: 'cão',
    breed: 'SRD (vira-lata)',
    age: 4,
    ageLabel: '4 anos',
    size: 'médio',
    gender: 'Macho',
    status: 'disponível',
    description: 'Bob é calmo, leal e ama uma boa caminhada no parque. Já conhece comandos básicos. Ótimo companheiro para famílias com crianças maiores.',
    tags: ['Calmo', 'Leal', 'Treinado', 'Vacinado'],
    image: 'https://picsum.photos/seed/bob-srd-dog/480/360',
    org: 'Instituto Patinhas'
  },
  {
    id: 4,
    name: 'Mia',
    species: 'gato',
    breed: 'Persa mix',
    age: 3,
    ageLabel: '3 anos',
    size: 'pequeno',
    gender: 'Fêmea',
    status: 'lar temporário',
    description: 'Mia é independente mas muito afetuosa quando confia em você. Prefere ambientes tranquilos, sem muito barulho ou agitação. Perfeita para pessoas mais calmas.',
    tags: ['Independente', 'Afetuosa', 'Prefere sossego', 'Vacinada'],
    image: 'https://picsum.photos/seed/mia-persa-cat/480/360',
    org: 'Lar dos Miados'
  },
  {
    id: 5,
    name: 'Rex',
    species: 'cão',
    breed: 'Pastor mix',
    age: 1,
    ageLabel: '1 ano',
    size: 'grande',
    gender: 'Macho',
    status: 'disponível',
    description: 'Rex é um filhote curioso e muito inteligente. Aprende rapidamente e adora explorar. Ideal para quem tem quintal e disposição para treinar.',
    tags: ['Inteligente', 'Curioso', 'Ativo', 'Vacinado'],
    image: 'https://picsum.photos/seed/rex-pastor-dog/480/360',
    org: 'Instituto Patinhas'
  },
  {
    id: 6,
    name: 'Brisa',
    species: 'gato',
    breed: 'Pelo curto brasileiro',
    age: 5,
    ageLabel: '5 anos',
    size: 'pequeno',
    gender: 'Fêmea',
    status: 'disponível',
    description: 'Brisa é madura e tranquila. Ótima escolha para quem busca companhia sem muita agitação. Convive bem com crianças que respeitam seu espaço.',
    tags: ['Madura', 'Tranquila', 'Vacinada', 'Castrada'],
    image: 'https://picsum.photos/seed/brisa-pelo-curto/480/360',
    org: 'Lar dos Miados'
  },
  {
    id: 7,
    name: 'Caramelo',
    species: 'cão',
    breed: 'SRD (vira-lata)',
    age: 6,
    ageLabel: '6 anos',
    size: 'médio',
    gender: 'Macho',
    status: 'disponível',
    description: 'Caramelo espera há muito tempo por um lar. É gentil, dócil e adora um passeio tranquilo. Ele merece uma família — e vai retribuir com muita lealdade.',
    tags: ['Gentil', 'Dócil', 'Paciente', 'Vacinado'],
    image: 'https://picsum.photos/seed/caramelo-vira-lata/480/360',
    org: 'Instituto Patinhas'
  },
  {
    id: 8,
    name: 'Nala',
    species: 'gato',
    breed: 'Angora mix',
    age: 2,
    ageLabel: '2 anos',
    size: 'pequeno',
    gender: 'Fêmea',
    status: 'lar temporário',
    description: 'Nala tem pelo longo e olhos expressivos. Adora brincar com bolinhas e observar o mundo pela janela. É muito curiosa e ativa.',
    tags: ['Curiosa', 'Brincalhona', 'Pelo longo', 'Vacinada'],
    image: 'https://picsum.photos/seed/nala-angora-cat/480/360',
    org: 'Lar dos Miados'
  }
];

/* ==============================================
   2. RENDERIZAÇÃO DE CARDS DE PETS
   ============================================== */

/**
 * Gera o HTML de um card de pet.
 * @param {object} pet - Objeto do pet
 * @returns {string} HTML do card
 */
function createPetCard(pet) {
  const fallbackUrl = `https://placehold.co/480x360/F2EBD9/B4B2A9?text=${encodeURIComponent(pet.name)}`;
  return `
    <article
      class="pet-card"
      data-id="${pet.id}"
      tabindex="0"
      role="button"
      aria-label="Ver detalhes de ${pet.name}">
      <div class="pet-card__image-wrap">
        <img
          src="${pet.image}"
          alt="${pet.name} — ${pet.breed}, ${pet.ageLabel}"
          loading="lazy"
          onerror="this.onerror=null; this.src='${fallbackUrl}'">
        <span class="pet-card__badge pet-card__badge--${pet.status.replace(' ', '-')}">
          ${pet.status}
        </span>
      </div>
      <div class="pet-card__body">
        <h3 class="pet-card__name">${pet.name}</h3>
        <p class="pet-card__meta">${pet.breed} &middot; ${pet.ageLabel} &middot; ${pet.gender}</p>
        <p class="pet-card__desc">${pet.description}</p>
      </div>
      <div class="pet-card__footer">
        <button
          class="btn btn--primary"
          style="width:100%; font-size:14px; padding:8px 16px"
          onclick="openModal(${pet.id}); event.stopPropagation()">
          Quero adotar
        </button>
      </div>
    </article>
  `;
}

/**
 * Renderiza uma lista de pets em um container.
 * @param {HTMLElement} container - Elemento que vai receber os cards
 * @param {Array} pets - Lista de pets a exibir
 * @param {number|null} limit - Limite de cards (null = todos)
 */
function renderPets(container, pets, limit = null) {
  if (!container) return;

  const list = limit ? pets.slice(0, limit) : pets;

  if (list.length === 0) {
    container.innerHTML = `
      <div class="no-results">
        <p>Nenhum pet encontrado com esses filtros.</p>
        <p>Novos integrantes chegam toda semana — volte em breve!</p>
      </div>`;
    return;
  }

  container.innerHTML = list.map(createPetCard).join('');

  /* Listeners de click e teclado nos cards */
  container.querySelectorAll('.pet-card').forEach(card => {
    card.addEventListener('click', () => openModal(Number(card.dataset.id)));
    card.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openModal(Number(card.dataset.id));
      }
    });
  });
}

/* ==============================================
   3. MODAL DE DETALHES DO PET
   Efeito interativo #1: modal com animação de entrada
   ============================================== */

/**
 * Abre o modal com as informações do pet.
 * @param {number} petId - ID do pet
 */
function openModal(petId) {
  const pet = petsData.find(p => p.id === petId);
  if (!pet) return;

  const overlay = document.getElementById('petModal');
  const content = document.getElementById('modalContent');
  if (!overlay || !content) return;

  const fallbackUrl = `https://placehold.co/580x260/F2EBD9/B4B2A9?text=${encodeURIComponent(pet.name)}`;

  content.innerHTML = `
    <img
      class="modal__image"
      src="${pet.image}"
      alt="${pet.name}"
      onerror="this.onerror=null; this.src='${fallbackUrl}'">
    <div class="modal__body">
      <h2 class="modal__name" id="modalPetName">${pet.name}</h2>
      <p class="modal__meta">
        ${pet.breed} &middot; ${pet.ageLabel} &middot; ${pet.gender} &middot; Porte ${pet.size}
      </p>
      <p class="modal__desc">${pet.description}</p>
      <div class="modal__tags">
        ${pet.tags.map(t => `<span class="tag">${t}</span>`).join('')}
      </div>
      <p class="modal__org">
        Organização responsável:
        <strong>${pet.org}</strong>
      </p>
      <div class="modal__actions">
        <a
          href="contato.html?pet=${encodeURIComponent(pet.name)}"
          class="btn btn--primary"
          style="flex:1">
          Quero adotar ${pet.name}
        </a>
        <button class="btn btn--ghost" onclick="closeModal()">Fechar</button>
      </div>
    </div>
  `;

  overlay.removeAttribute('hidden');
  /* Dispara na próxima frame para garantir a transição CSS */
  requestAnimationFrame(() => overlay.classList.add('visible'));
  document.body.style.overflow = 'hidden';

  /* Foco acessível no botão de fechar */
  const closeBtn = document.getElementById('modalClose');
  if (closeBtn) closeBtn.focus();
}

/** Fecha o modal com animação de saída. */
function closeModal() {
  const overlay = document.getElementById('petModal');
  if (!overlay) return;

  overlay.classList.remove('visible');
  setTimeout(() => {
    overlay.setAttribute('hidden', '');
    document.body.style.overflow = '';
  }, 200);
}

/* ==============================================
   4. FILTRO DINÂMICO DE PETS (adotar.html)
   Efeito interativo #2: filtragem em tempo real sem reload
   ============================================== */
function initFilter() {
  const speciesSelect = document.getElementById('filterSpecies');
  const sizeSelect    = document.getElementById('filterSize');
  const ageSelect     = document.getElementById('filterAge');
  const clearBtn      = document.getElementById('clearFilters');
  const petsContainer = document.getElementById('petsGrid');
  const countEl       = document.getElementById('petsCount');

  if (!petsContainer) return; /* Só executa na página adotar.html */

  /** Aplica os filtros e re-renderiza o grid. */
  function applyFilters() {
    const species = speciesSelect ? speciesSelect.value : 'todos';
    const size    = sizeSelect    ? sizeSelect.value    : 'todos';
    const age     = ageSelect     ? ageSelect.value     : 'todos';

    const filtered = petsData.filter(pet => {
      const matchSpecies = species === 'todos' || pet.species === species;
      const matchSize    = size    === 'todos' || pet.size    === size;

      let matchAge = true;
      if (age === 'filhote') matchAge = pet.age <= 1;
      if (age === 'jovem')   matchAge = pet.age >= 2 && pet.age <= 3;
      if (age === 'adulto')  matchAge = pet.age >= 4;

      return matchSpecies && matchSize && matchAge;
    });

    renderPets(petsContainer, filtered);

    if (countEl) {
      countEl.textContent = filtered.length;
    }
  }

  /* Escuta mudanças nos selects */
  [speciesSelect, sizeSelect, ageSelect].forEach(el => {
    if (el) el.addEventListener('change', applyFilters);
  });

  /* Botão de limpar filtros */
  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      [speciesSelect, sizeSelect, ageSelect].forEach(el => {
        if (el) el.value = 'todos';
      });
      applyFilters();
    });
  }

  /* Renderização inicial com todos os pets */
  renderPets(petsContainer, petsData);
  if (countEl) countEl.textContent = petsData.length;
}

/* ==============================================
   5. CONTADOR ANIMADO COM JQUERY (index.html)
   Efeito interativo #3: números animam ao entrar na viewport
   ============================================== */
function initCounters() {
  const counters = document.querySelectorAll('.stat-card__number[data-target]');
  if (!counters.length) return;

  /* Aguarda jQuery estar disponível */
  if (typeof jQuery === 'undefined') {
    console.warn('jQuery não encontrado. Contadores exibem valor final estático.');
    counters.forEach(el => {
      el.textContent = Number(el.dataset.target).toLocaleString('pt-BR');
    });
    return;
  }

  /* IntersectionObserver: anima quando o elemento fica visível */
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;

      const el     = entry.target;
      const target = parseInt(el.dataset.target, 10);
      const suffix = el.dataset.suffix || '';

      /* jQuery animate: interpola {count} de 0 até target */
      jQuery({ count: 0 }).animate(
        { count: target },
        {
          duration: 1800,
          easing: 'swing',
          step: function () {
            el.textContent = Math.floor(this.count).toLocaleString('pt-BR') + suffix;
          },
          complete: function () {
            el.textContent = target.toLocaleString('pt-BR') + suffix;
          }
        }
      );

      observer.unobserve(el); /* Anima somente uma vez */
    });
  }, { threshold: 0.6 });

  counters.forEach(el => observer.observe(el));
}

/* ==============================================
   6. EFEITO DE SCROLL NA NAVBAR
   ============================================== */
function initNavbar() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;

  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 20);
  }, { passive: true });
}

/* ==============================================
   7. MENU HAMBÚRGUER (responsivo)
   ============================================== */
function initHamburger() {
  const toggle  = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');
  const navbar  = document.getElementById('navbar');
  if (!toggle || !navMenu) return;

  /* Abre / fecha o menu */
  toggle.addEventListener('click', () => {
    const isOpen = navMenu.classList.toggle('open');
    toggle.classList.toggle('open', isOpen);
    toggle.setAttribute('aria-expanded', String(isOpen));
  });

  /* Fecha ao clicar em um link */
  navMenu.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('open');
      toggle.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });

  /* Fecha ao clicar fora do navbar */
  document.addEventListener('click', e => {
    if (navbar && !navbar.contains(e.target)) {
      navMenu.classList.remove('open');
      toggle.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    }
  });
}

/* ==============================================
   8. VALIDAÇÃO DO FORMULÁRIO DE CONTATO
   ============================================== */
function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  /* Regras de validação por campo */
  const rules = {
    nome:     { required: true, minLength: 3 },
    email:    { required: true, pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ },
    telefone: { required: false, pattern: /^\(?\d{2}\)?[\s-]?\d{4,5}[-]?\d{4}$/ },
    assunto:  { required: true },
    mensagem: { required: true, minLength: 20 }
  };

  /* Mensagens de erro amigáveis (seguindo o tom de voz da marca) */
  const errorMessages = {
    required:  'Este campo é obrigatório.',
    minLength: n => `Mínimo de ${n} caracteres.`,
    email:     'Verifique o campo de e-mail.',
    telefone:  'Informe um telefone válido. Ex: (44) 99999-9999'
  };

  /**
   * Valida um campo e retorna a mensagem de erro ou null se válido.
   */
  function validate(name, value) {
    const rule = rules[name];
    if (!rule) return null;

    if (rule.required && !value.trim()) return errorMessages.required;
    if (value.trim() && rule.minLength && value.trim().length < rule.minLength)
      return errorMessages.minLength(rule.minLength);
    if (value.trim() && rule.pattern && !rule.pattern.test(value.trim()))
      return errorMessages[name] || 'Valor inválido.';

    return null;
  }

  /**
   * Aplica estado visual de erro ou sucesso em um campo.
   */
  function setFieldState(input, errorEl, errorMsg) {
    if (errorMsg) {
      input.classList.add('input-error');
      input.classList.remove('input-success');
      if (errorEl) {
        errorEl.textContent = errorMsg;
        errorEl.classList.add('visible');
      }
    } else if (input.value.trim()) {
      input.classList.remove('input-error');
      input.classList.add('input-success');
      if (errorEl) errorEl.classList.remove('visible');
    } else {
      input.classList.remove('input-error', 'input-success');
      if (errorEl) errorEl.classList.remove('visible');
    }
  }

  /* Validação em tempo real ao sair do campo (blur) */
  form.querySelectorAll('input, select, textarea').forEach(input => {
    const errorEl = document.getElementById(`${input.name}Error`);

    input.addEventListener('blur', () => {
      const msg = validate(input.name, input.value);
      setFieldState(input, errorEl, msg);
    });

    /* Remove o estado de erro enquanto o usuário digita */
    input.addEventListener('input', () => {
      if (input.classList.contains('input-error')) {
        const msg = validate(input.name, input.value);
        setFieldState(input, errorEl, msg);
      }
    });
  });

  /* Envio do formulário */
  form.addEventListener('submit', e => {
    e.preventDefault();

    let isValid = true;

    /* Valida todos os campos ao enviar */
    form.querySelectorAll('input, select, textarea').forEach(input => {
      const errorEl = document.getElementById(`${input.name}Error`);
      const msg = validate(input.name, input.value);
      setFieldState(input, errorEl, msg);
      if (msg) isValid = false;
    });

    if (isValid) {
      /* Simula envio bem-sucedido */
      form.style.display = 'none';
      const successEl = document.getElementById('formSuccess');
      if (successEl) successEl.classList.add('visible');
    } else {
      /* Foca no primeiro campo com erro */
      const firstError = form.querySelector('.input-error');
      if (firstError) firstError.focus();
    }
  });
}

/* ==============================================
   9. PRÉ-PREENCHIMENTO VIA URL (?pet=NomeDoPet)
   ============================================== */
function prefillPetFromURL() {
  const params      = new URLSearchParams(window.location.search);
  const petName     = params.get('pet');
  const assuntoField = document.getElementById('assuntoField');

  if (petName && assuntoField) {
    assuntoField.value = `Interesse em adotar: ${petName}`;
  }
}

/* ==============================================
   10. PETS EM DESTAQUE (index.html)
   ============================================== */
function initHome() {
  const featured = document.getElementById('featuredPets');
  if (!featured) return;
  /* Exibe os primeiros 4 pets */
  renderPets(featured, petsData, 4);
}

/* ==============================================
   11. LINK ATIVO NA NAVBAR
   ============================================== */
function setActiveNavLink() {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link').forEach(link => {
    const href = link.getAttribute('href');
    const isActive = href === currentPage || (currentPage === '' && href === 'index.html');
    link.classList.toggle('active', isActive);
  });
}

/* ==============================================
   12. INICIALIZAÇÃO — executa após o DOM carregar
   ============================================== */
document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initHamburger();
  setActiveNavLink();
  initCounters();
  initHome();
  initFilter();
  initContactForm();
  prefillPetFromURL();

  /* Modal: fechar ao clicar no overlay ou no botão X */
  const overlay  = document.getElementById('petModal');
  const closeBtn = document.getElementById('modalClose');

  if (overlay) {
    overlay.addEventListener('click', e => {
      if (e.target === overlay) closeModal();
    });
  }

  if (closeBtn) {
    closeBtn.addEventListener('click', closeModal);
  }

  /* Modal: fechar com a tecla Escape */
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeModal();
  });
});
