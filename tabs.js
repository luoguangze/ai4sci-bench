(() => {
  const tablist = document.querySelector('.tier-tabs');
  const tabs = Array.from(tablist.querySelectorAll('[data-panel]'));
  const panels = Array.from(document.querySelectorAll('.task-card'));
  const aliases = {
    'constitutive-protocol-information': 'constitutive',
    'optical-mapping-activation-maps': 'optical-mapping',
    'strain-resolved-assembly': 'strain-assembly',
    'tier-1': 'constitutive',
    'tier-2': 'optical-mapping',
    'tier-3': 'strain-assembly',
  };

  tablist.setAttribute('role', 'tablist');
  tabs.forEach(tab => {
    tab.setAttribute('role', 'tab');
    tab.setAttribute('aria-controls', tab.dataset.panel);
  });
  panels.forEach(panel => {
    panel.setAttribute('role', 'tabpanel');
    panel.setAttribute('aria-labelledby', `tab-${panel.id}`);
    panel.tabIndex = 0;
  });

  function selectPanel(id, { focus = false, updateUrl = false } = {}) {
    const active = tabs.find(tab => tab.dataset.panel === id) || tabs[0];
    tabs.forEach(tab => {
      const selected = tab === active;
      tab.setAttribute('aria-selected', String(selected));
      tab.tabIndex = selected ? 0 : -1;
    });
    panels.forEach(panel => { panel.hidden = panel.id !== active.dataset.panel; });
    if (updateUrl && location.hash !== active.hash) {
      history.pushState(null, '', active.hash);
    }
    if (updateUrl) window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    if (focus) active.focus({ preventScroll: true });
  }

  function selectFromUrl() {
    const hash = location.hash.slice(1);
    selectPanel(aliases[hash] || hash);
  }

  tabs.forEach((tab, index) => {
    tab.addEventListener('click', event => {
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0) return;
      event.preventDefault();
      selectPanel(tab.dataset.panel, { updateUrl: true });
    });
    tab.addEventListener('keydown', event => {
      let next;
      if (event.key === 'ArrowRight') next = (index + 1) % tabs.length;
      if (event.key === 'ArrowLeft') next = (index + tabs.length - 1) % tabs.length;
      if (event.key === 'Home') next = 0;
      if (event.key === 'End') next = tabs.length - 1;
      if (event.key === ' ') next = index;
      if (next === undefined) return;
      event.preventDefault();
      selectPanel(tabs[next].dataset.panel, { focus: true, updateUrl: true });
    });
  });

  window.addEventListener('hashchange', selectFromUrl);
  window.addEventListener('popstate', selectFromUrl);
  selectFromUrl();
})();
