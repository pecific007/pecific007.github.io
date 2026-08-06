document.addEventListener('DOMContentLoaded', main);

function init(){ };

function main() {
  const pages = [
    {
      id: "index",
      name: "Programming",
      href: "?page=index",
      icon: "/media/icons/programming-svgrepo-com.svg"
    },
    {
      id: "art",
      name: "Art",
      href: "?page=art",
      icon: "/media/icons/art-palette-svgrepo-com.svg"
    },
    {
      id: "socials",
      name: "Socials",
      href: "?page=socials",
      icon: "/media/icons/social-youtube-svgrepo-com.svg"
    },
  ]

  const page = new URLSearchParams(location.search).get("page") ?? "index";

  if (page == 'index') {
    document.title = "Pecific007"
  } else {
    for (let p of pages) {
      // console.log(page == p.id);
      if (page == p.id) {
        document.title = p.name;
        break;
      } else {
        document.title = "Pecific007";
      }
    }
  }

  showHeader();
  showPage();
  loadStyle();
  showFooter();

  async function loadStyle() {
    document.getElementById("page-style")?.remove();

    const link = document.createElement("link");
    link.id = "page-style";
    link.rel = "stylesheet";
    link.href = `css/style-${page}.css`;
    document.head.append(link);
  }

  function showHeader() {
    /*
    This function will make:
    ```html
    <div class="webname">Pecific</div>
    <div class="nav">
        <ul class="ul" type="none">
            <a href="?page=index">
              <li class="high li">Programming</li>
            </a>
            <a href="?page=art">
                <li class="li">Art</li>
            </a>
            <a href="?page=socials">
                <li class="li">Socials</li>
            </a>
        </ul>
    </div>
    ```
    */
    const webname = document.createElement("div");
    webname.classList.add("webname");
    webname.textContent = "Pecific";
    const navbar = document.querySelector(".navbar");
    navbar.appendChild(webname);

    const nav = document.createElement("div");
    nav.classList.add("nav");
    nav.type = "none";
    const ul = document.createElement("ul");
    ul.classList.add("ul");

    for (let p of pages) {
      const anchor = document.createElement("a");
      anchor.href = p.href;
      const li = document.createElement("li")
      li.classList.add("li");
      if (p.id == page) li.classList.add("high");
      li.textContent = p.name;
      anchor.appendChild(li);
      ul.appendChild(anchor);
    }
    nav.append(ul);
    navbar.appendChild(nav);
  }

  async function showFooter() {
    /*
    This function will make:
    ```html
    <nav class="btmbar">
      <a href="?page="index">
        <span class="li">
            <img class="btbr_img" src="./media/icons/programming-svgrepo-com.svg" alt="Programming" />
        </span>
      </a>
      <a href="?page="art">
        <span class="li">
            <img class="btbr_img" src="./media/icons/art-palette-svgrepo-com.svg" alt="Art" />
        </span>
      </a>
      <a href="?page="socials">
        <span class="li">
            <img class="btbr_img" src="./media/icons/social-youtube-svgrepo-com.svg" alt="Socials" />
        </span>
      </a>
    </nav>
    ```
    */
    const navbar = document.querySelector(".btmbar");

    for (let p of pages) {
      const anchor = document.createElement("a");
      anchor.href = p.href;
      const span = document.createElement("span")
      span.classList.add("li");
      span.title = p.name;
      if (p.id == page) {
        span.classList.add("raiseup");
        span.classList.add("high");
      }
      const img = document.createElement("img");
      console.log(p);
      img.classList.add("btbr_img");
      img.src = p.icon;
      img.alt = p.name;
      span.appendChild(img);
      anchor.appendChild(span);
      navbar.append(anchor);
    }
  }

  async function showPage() {
    const ogMain = document.querySelector("main");
    const html = await fetch(`/pages/${page}.html`).then(r => r.text());
    const doc = new DOMParser().parseFromString(html, 'text/html');

    const pageMain = doc.querySelector("main");
    ogMain.replaceWith(pageMain);

    const module = await import(`/js/${page}.js`);
    module.init();
  }

}
