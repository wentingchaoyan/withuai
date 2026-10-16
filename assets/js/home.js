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

// Keep both screenshots available without JavaScript, then enhance with a switcher.
for (const gallery of document.querySelectorAll('.home-screen-gallery')) {
  const controls = gallery.querySelector('.home-screen-switch');
  const buttons = [...controls.querySelectorAll('button')];
  const screens = [...gallery.querySelectorAll('.home-app-screen')];
  function selectScreen(index) {
    screens.forEach((screen, i) => { screen.hidden = i !== index; });
    buttons.forEach((button, i) => button.setAttribute('aria-pressed', String(i === index)));
  }
  buttons.forEach((button, i) => button.addEventListener('click', () => selectScreen(i)));
  selectScreen(0);
  controls.hidden = false;
}
