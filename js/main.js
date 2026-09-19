import { showNavBottom, showNavTop } from "/js/components.js";

document.addEventListener('DOMContentLoaded', () => {
  router();
  window.addEventListener('hashchange', router);
});

const validRoutes = [
  {
    id: "index",
    icon: "/media/icons/programming-svgrepo-com.svg"
  },
  {
    id: "art",
    icon: "/media/icons/art-palette-svgrepo-com.svg"
  },
  {
    id: "socials",
    icon: "/media/icons/social-youtube-svgrepo-com.svg"
  },
]

/* returns a boolean */
function validateRoute(hash, validRoutes) {
  for (let r of validRoutes) {
    if (r.id == hash) return true;
  }
  return false;
}

async function showNavBar(route, validRoutes) {
  document.querySelectorAll('nav').forEach(nav => nav.remove())
  showNavBottom(route, validRoutes);
  showNavTop(route, validRoutes);
}

async function showPage(page) {
  // HTML
  const ogMain = document.querySelector("main");
  const html = await fetch(`/pages/${page}.html`).then(r => r.text());
  const doc = new DOMParser().parseFromString(html, 'text/html');

  const pageMain = doc.querySelector("main");
  ogMain.replaceWith(pageMain);

  // CSS
  document.getElementById("page-style")?.remove();
  const link = document.createElement("link");
  link.id = "page-style";
  link.rel = "stylesheet";
  link.href = `css/style-${page}.css`;
  document.head.append(link);

}

async function loadJs(page) {
  // JS had to be separately loaded because some pages don't use js
  const module = await import(`/js/${page}.js`);
  module.init();
}

/* This is the real main function */
function router() {
  let hash;
  if (!window.location.hash || window.location.hash === '#') {
    hash = 'index';
  } else {
    hash = window.location.hash;
    if (hash.startsWith('#')) {
      hash = (hash.split('/'))[1];
    }
  }

  if (validateRoute(hash, validRoutes)) {
    (async () => {
      await showNavBar(hash, validRoutes);
      await showPage(hash);
      await loadJs(hash);
    })();
  } else {
    showPage('404');
  }
  document.addEventListener('resize', showNavBar);
}
