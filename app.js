(() => {
  'use strict';
  const input = document.querySelector('#search');
  const cards = [...document.querySelectorAll('.searchable')];
  const sections = [...document.querySelectorAll('main > section')];
  const filters = [...document.querySelectorAll('[data-filter]')];
  let active = 'all';
  const norm = value => value.toLowerCase().replace(/ё/g, 'е').replace(/[^a-zа-я0-9]+/gi, ' ').trim();
  function apply() {
    const query = norm(input.value);
    const words = query.split(/\s+/).filter(Boolean);
    let count = 0;
    cards.forEach(card => {
      const text = norm(card.dataset.search + ' ' + card.textContent);
      card.hidden = !((active === 'all' || active === card.dataset.group) && words.every(word => text.includes(word) || text.replace(/\s/g, '').includes(word)));
      if (!card.hidden) count++;
    });
    sections.forEach(section => { section.hidden = ![...section.querySelectorAll('.searchable')].some(card => !card.hidden); });
    filters.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.filter === active)));
    document.querySelector('.search-status').hidden = !query && active === 'all';
    document.querySelector('#result-count').textContent = 'Найдено: ' + count;
    document.querySelector('#empty').hidden = count > 0;
  }
  function reset() { input.value = ''; active = 'all'; apply(); }
  input.addEventListener('input', apply);
  input.addEventListener('search', apply);
  filters.forEach(button => button.addEventListener('click', () => { active = button.dataset.filter; apply(); }));
  document.querySelector('#reset').addEventListener('click', () => { reset(); input.focus(); });
  document.querySelector('#empty-reset').addEventListener('click', () => { reset(); input.focus(); });
  // Navigation always exposes its destination, including while a filter is active.
  document.querySelectorAll('a[href^="#"]').forEach(link => link.addEventListener('click', () => { reset(); }));
  let toastTimer;
  const notify = message => {
    const toast = document.querySelector('#toast');
    toast.textContent = message; toast.classList.add('visible');
    clearTimeout(toastTimer); toastTimer = setTimeout(() => toast.classList.remove('visible'), 2800);
  };
  function fallbackCopy(text) {
    const field = document.createElement('textarea');
    field.value = text; field.readOnly = true;
    field.style.cssText = 'position:fixed;top:0;left:0;opacity:0';
    const focused = document.activeElement;
    document.body.append(field); field.focus(); field.select(); field.setSelectionRange(0, field.value.length);
    let success = false;
    try { success = document.execCommand('copy'); } catch (_) {}
    field.remove(); if (focused) focused.focus({preventScroll:true});
    return success;
  }
  document.querySelectorAll('[data-copy]').forEach(button => button.addEventListener('click', async () => {
    let success = false;
    try { if (navigator.clipboard && window.isSecureContext) { await navigator.clipboard.writeText(button.dataset.copy); success = true; } } catch (_) {}
    if (!success) success = fallbackCopy(button.dataset.copy);
    notify(success ? 'Ссылка скопирована' : 'Не удалось скопировать. Открой ссылку и скопируй адрес из браузера.');
  }));
  apply();
})();
