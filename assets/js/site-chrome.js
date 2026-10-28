/* Shared original-header behavior, independent of page-specific scripts. */
(() => {
  const header = document.getElementById('brand-header');
  if (!header) return;
  const menu = header.querySelector('.brand-menu');
  let scheduled = false;
  const update = () => { header.classList.toggle('scrolled', window.scrollY > 50); scheduled = false; };
  update();
  window.addEventListener('scroll', () => {
    if (!scheduled) { scheduled = true; requestAnimationFrame(update); }
  }, { passive: true });
  document.addEventListener('click', event => {
    if (menu && !menu.contains(event.target)) menu.open = false;
  });
  menu?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => { menu.open = false; }));
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && menu?.open) {
      menu.open = false;
      menu.querySelector('summary').focus();
    }
  });
})();
