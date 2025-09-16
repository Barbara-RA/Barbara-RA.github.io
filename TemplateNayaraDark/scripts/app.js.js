// scripts/app.js (versão com fallback e inicialização resiliente)

const PATHS = {
  status: 'data/status.json',
  groups: 'data/groups.json',
  category: 'data/category.json',
  cards: 'data/cards.json',
};

// ---- Fallbacks (usados se o fetch falhar) ----
const FALLBACK = {
  status: [
    { id: 'all', label: 'All' },
    { id: 'a_caminho', label: 'A caminho' },
    { id: 'tenho', label: 'Tenho' },
    { id: 'desejado', label: 'Desejado' },
  ],
  groups: [
    { id: 'all', label: 'All' },
    { id: 'regular', label: 'Regular' },
    { id: 'carate', label: 'Caratê' },
    { id: 'pob', label: 'POB' },
  ],
  category: [
    { id: 'all', label: 'All' },
    { id: 'hoshi', label: 'Hoshi' },
    { id: 'seokmin', label: 'Seokmin' },
    { id: 'seventeen', label: 'Seventeen' },
  ],
  cards: [
    {
      title: 'Sunset Dream',
      image: 'https://via.placeholder.com/142x220.png?text=Sunset',
      status: 'tenho',
      group: 'regular',
      category: 'hoshi',
    },
    {
      title: 'Night Walker',
      image: 'https://via.placeholder.com/142x220.png?text=Night',
      status: 'desejado',
      group: 'carate',
      category: 'seokmin',
    },
    {
      title: 'Purple Shine',
      image: 'https://via.placeholder.com/142x220.png?text=Purple',
      status: 'a_caminho',
      group: 'pob',
      category: 'seventeen',
    }
  ],
};

const state = {
  statusOptions: [],
  groupOptions: [],
  categoryOptions: [],
  cardsAll: [],
  filters: { status: 'all', group: 'all', category: 'all', search: '', sort: 'title-asc' },
};

const els = {
  statusFilter: document.getElementById('statusFilter'),
  groupFilter: document.getElementById('groupFilter'),
  categoryFilter: document.getElementById('categoryFilter'),
  cardsGrid: document.getElementById('cardsGrid'),
  cardTemplate: document.getElementById('cardTemplate'),
  resultsCount: document.getElementById('resultsCount'),
  searchInput: document.getElementById('searchInput'),
  sortSelect: document.getElementById('sortSelect'),
  reloadBtn: document.getElementById('reloadBtn'),
  clearFiltersBtn: document.getElementById('clearFiltersBtn'),
  a11yLive: document.getElementById('a11yLiveRegion'),
};

const fetchJSON = async (url) => {
  const res = await fetch(url, { cache: 'no-store' });
  if (!res.ok) throw new Error(`Falha ao carregar ${url}: ${res.status}`);
  return res.json();
};

const debounce = (fn, ms = 250) => {
  let t; return (...args) => { clearTimeout(t); t = setTimeout(() => fn.apply(this, args), ms); };
};

const speak = (msg) => { if (els.a11yLive) els.a11yLive.textContent = msg; };
const buildOrderIndex = (arr) => arr.reduce((acc, item, idx) => ((acc[item.id] = idx), acc), {});

function renderFilterList(container, options, selectedId, onSelect) {
  container.innerHTML = '';
  options.forEach((opt) => {
    const li = document.createElement('li');
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.textContent = opt.label;
    btn.dataset.value = opt.id;
    if (opt.id === selectedId) btn.classList.add('active');
    btn.addEventListener('click', () => {
      container.querySelectorAll('button').forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      onSelect(opt.id, opt.label);
    });
    li.appendChild(btn);
    container.appendChild(li);
  });
}

function sortCards(list, sortKey, idxStatus, idxGroup) {
  const arr = [...list];
  switch (sortKey) {
    case 'title-asc': return arr.sort((a,b)=>a.title.localeCompare(b.title,'pt-BR',{sensitivity:'base'}));
    case 'title-desc': return arr.sort((a,b)=>b.title.localeCompare(a.title,'pt-BR',{sensitivity:'base'}));
    case 'group': return arr.sort((a,b)=>{
      const ga = idxGroup[a.group] ?? 9e9, gb = idxGroup[b.group] ?? 9e9;
      return ga !== gb ? ga - gb : a.title.localeCompare(b.title,'pt-BR',{sensitivity:'base'});
    });
    case 'status': return arr.sort((a,b)=>{
      const sa = idxStatus[a.status] ?? 9e9, sb = idxStatus[b.status] ?? 9e9;
      return sa !== sb ? sa - sb : a.title.localeCompare(b.title,'pt-BR',{sensitivity:'base'});
    });
    default: return arr;
  }
}

function getFilteredCards() {
  const { status, group, category, search } = state.filters;
  const term = search.trim().toLowerCase();
  return state.cardsAll.filter((card) => {
    const okS = status === 'all' ? true : card.status === status;
    const okG = group === 'all' ? true : card.group === group;
    const okC = category === 'all' ? true : card.category === category;
    const okQ = term ? card.title.toLowerCase().includes(term) : true;
    return okS && okG && okC && okQ;
  });
}

function renderCards() {
  const idxS = buildOrderIndex(state.statusOptions);
  const idxG = buildOrderIndex(state.groupOptions);
  const idxC = buildOrderIndex(state.categoryOptions);
  const filtered = getFilteredCards();
  const sorted = sortCards(filtered, state.filters.sort, idxS, idxG);

  els.cardsGrid.innerHTML = '';
  const frag = document.createDocumentFragment();

  sorted.forEach((item) => {
    const node = els.cardTemplate.content.cloneNode(true);
    const article = node.querySelector('.card');
    const media = node.querySelector('.card__media');
    const img = node.querySelector('.card__img');
    const title = node.querySelector('.card__title');

    const tagStatus = node.querySelector('.card__status-tag');
    const tagGroup = node.querySelector('[data-tag-group]');
    const tagCategory = node.querySelector('.card__category-tag');

    article.dataset.status = item.status;
    article.dataset.group = item.group;
    article.dataset.category = item.category;

    // Aplica imagem como background do card
    article.style.backgroundImage = `url('${item.image}')`;
    article.style.backgroundSize = 'cover';
    article.style.backgroundPosition = 'center';
    article.style.backgroundRepeat = 'no-repeat';

    // Remove o <img> e .card__media do template
    if (img) img.remove();
    if (media) media.remove();

    title.textContent = item.title;
    // Status sempre visível
    if (tagStatus) {
      tagStatus.textContent = labelFromId(state.statusOptions, item.status);
      tagStatus.setAttribute('data-tag-status', item.status);
    }
    // Category e group só aparecem no hover
    if (tagCategory) {
      tagCategory.textContent = labelFromId(state.categoryOptions, item.category);
      tagCategory.setAttribute('data-tag-category', item.category);
    }
    if (tagGroup) {
      tagGroup.textContent = labelFromId(state.groupOptions, item.group);
      tagGroup.setAttribute('data-tag-group', item.group);
    }

    frag.appendChild(node);
  });

  els.cardsGrid.appendChild(frag);
  updateCount(sorted.length);
  speak(`${sorted.length} itens exibidos.`);
}

function updateCount(n){ els.resultsCount.textContent = `${n} ${n===1?'item':'itens'}`; }
function labelFromId(options, id){ return (options.find(o=>o.id===id)?.label) ?? id; }

function handleStatusSelect(id){ state.filters.status = id; renderCards(); }
function handleGroupSelect(id){ state.filters.group = id; renderCards(); }
const handleSearchDebounced = debounce((v)=>{ state.filters.search = v; renderCards(); }, 250);
function handleSortChange(v){ state.filters.sort = v; renderCards(); }

async function reloadData() {
  try {
    const cards = await fetchJSON(PATHS.cards);
    state.cardsAll = normalizeCards(cards);
    renderCards();
    speak('Dados recarregados.');
  } catch (err) {
    console.warn('[reload] Falha ao buscar cards.json, usando FALLBACK.', err);
    state.cardsAll = normalizeCards(FALLBACK.cards);
    renderCards();
  }
}

function clearFilters() {
  state.filters = { status: 'all', group: 'all', category: 'all', search: '', sort: 'title-asc' };
  els.searchInput.value = '';
  els.sortSelect.value = 'title-asc';
  renderFilterList(els.statusFilter, state.statusOptions, 'all', handleStatusSelect);
  renderFilterList(els.groupFilter, state.groupOptions, 'all', handleGroupSelect);
  renderFilterList(els.categoryFilter, state.categoryOptions, 'all', handleCategorySelect);
  renderCards();
  speak('Filtros limpos. Exibindo todos os itens.');
}

function normalizeOptions(arr, ensureAll = true) {
  const hasAll = arr.some((o) => o.id === 'all');
  let result = arr;
  if (!hasAll && ensureAll) result = [{ id: 'all', label: 'All' }, ...arr];
  else if (ensureAll) {
    const rest = arr.filter((o) => o.id !== 'all');
    const theAll = arr.find((o) => o.id === 'all');
    result = [theAll, ...rest];
  }
  return result;
}
function normalizeCards(arr){
  return arr.map((c)=>({
    title: String(c.title ?? '').trim(),
    image: String(c.image ?? '').trim(),
    status: String(c.status ?? 'all').trim(),
    group: String(c.group ?? 'all').trim(),
    category: String(c.category ?? 'all').trim(),
  }));
}

function isFileProtocol(){ return location.protocol === 'file:'; }


function handleCategorySelect(id){ state.filters.category = id; renderCards(); }

async function init() {
  // 1) tenta buscar status, grupos e categorias, com fallback
  let statusOpts, groupOpts, categoryOpts, cards;
  try {
    statusOpts = await fetchJSON(PATHS.status);
  } catch (e) {
    console.warn('status.json falhou, usando FALLBACK', e);
    statusOpts = FALLBACK.status;
  }
  try {
    groupOpts = await fetchJSON(PATHS.groups);
  } catch (e) {
    console.warn('groups.json falhou, usando FALLBACK', e);
    groupOpts = FALLBACK.groups;
  }
  try {
    categoryOpts = await fetchJSON(PATHS.category);
  } catch (e) {
    console.warn('category.json falhou, usando FALLBACK', e);
    categoryOpts = FALLBACK.category;
  }
  try {
    cards = await fetchJSON(PATHS.cards);
  } catch (e) {
    console.warn('cards.json falhou, exibindo zero cards', e);
    cards = [];
  }

  // 2) normaliza
  state.statusOptions = normalizeOptions(statusOpts, true);
  state.groupOptions = normalizeOptions(groupOpts, true);
  state.categoryOptions = normalizeOptions(categoryOpts, true);
  state.cardsAll = normalizeCards(cards);

  // 3) render filtros (sempre renderiza)
  renderFilterList(els.statusFilter, state.statusOptions, state.filters.status, handleStatusSelect);
  renderFilterList(els.groupFilter, state.groupOptions, state.filters.group, handleGroupSelect);
  renderFilterList(els.categoryFilter, state.categoryOptions, state.filters.category, handleCategorySelect);

  // 4) listeners
  els.searchInput.addEventListener('input', (e)=>handleSearchDebounced(e.target.value));
  els.sortSelect.addEventListener('change', (e)=>handleSortChange(e.target.value));
  els.reloadBtn.addEventListener('click', reloadData);
  els.clearFiltersBtn.addEventListener('click', clearFilters);

  // 5) primeira render
  renderCards();

  // dica: se estiver rodando via file://
  if (isFileProtocol()) {
    console.info('Dica: para que fetch() de JSON funcione sem bloqueios, rode com um servidor local (ex.: VSCode Live Server, `npx serve`, `python -m http.server`).');
  }
}

document.addEventListener('DOMContentLoaded', init);
