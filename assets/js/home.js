/* Progressive enhancement: content and native disclosure controls work without JS. */
function revealAnchor() {
  const id = location.hash.slice(1);
  const target = document.getElementById(id);
  if (target instanceof HTMLDetailsElement) target.open = true;
}
revealAnchor();
window.addEventListener('hashchange', revealAnchor);
document.addEventListener('click', event => {
  const link = event.target.closest('a[href^="#"]');
  if (!link) return;
  const target = document.getElementById(link.hash.slice(1));
  if (target instanceof HTMLDetailsElement) target.open = true;
});
document.addEventListener('keydown', event => {
  if (event.key !== 'Escape') return;
  const menu = document.querySelector('.wv-mobile-nav');
  if (menu?.open) {
    menu.open = false;
    menu.querySelector('summary').focus();
  }
});
