document.addEventListener('DOMContentLoaded', () => {
  router();
  window.addEventListener('hashchange', router);
});

const validRoutes = [
  {
    id: "home",
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

function validateRoute(hash, validRoutes) {
  for (let r of validRoutes) {
    if (r.id == hash) return true;
  }
  return false;
}

async function showNavBar() {
  if (!document.querySelector(".top-navbar")) {
    let topNavBar = await fetch("/pages/parts/top-navbar.html").then(r => r.text());
    document.querySelector("header").innerHTML = topNavBar;
  }
  if (!document.querySelector(".bottom-navbar")) {
    let bottomNavBar = await fetch("/pages/parts/bottom-navbar.html").then(r => r.text());
    document.body.innerHTML += bottomNavBar;
  }
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

  // JS
  try {
    const module = await import(`/js/${page}.js`);
    module.init();
  } catch(e) {
    console.error(e);
  }
}

function router() {
  let hash;
  if (!window.location.hash || window.location.hash === '#') {
    hash = 'home';
  } else {
    hash = window.location.hash;
    if (hash.startsWith('#')) {
      hash = (hash.split('/'))[1];
    }
  }

  const valid = validateRoute(hash, validRoutes);

  (async () => {
    await showNavBar(hash, validRoutes);
    if (valid) {
      await showPage(hash);
    } else {
      showPage('404');
    }
  })();
  document.querySelectorAll(".highlight-li")?.forEach(li => li.classList.remove("highlight-li"));
  document.querySelectorAll(`[href = "/#/${hash}"`)?.forEach(e => e.querySelector(".li").classList.add("highlight-li"));
}
