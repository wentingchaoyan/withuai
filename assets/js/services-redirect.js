// Preserve existing campaign queries and anchors on links to the former Services page.
const home = document.documentElement.lang === 'en' ? '/en/' : '/';
location.replace(home + location.search + location.hash);
