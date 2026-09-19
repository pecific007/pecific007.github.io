export function showNavBottom(page, pages) {
  /*
  This function will make:
  ```html
  <nav class="btmbar">
    <a href="/#/index">
      <span class="li">
        <img class="btbr_img" src="./media/icons/programming-svgrepo-com.svg" alt="Programming" />
      </span>
    </a>
    <a href="/#/art">
      <span class="li">
        <img class="btbr_img" src="./media/icons/art-palette-svgrepo-com.svg" alt="Art" />
      </span>
    </a>
    <a href="/#/socials">
      <span class="li">
        <img class="btbr_img" src="./media/icons/social-youtube-svgrepo-com.svg" alt="Socials" />
      </span>
    </a>
  </nav>
  ```
  */
  const navbar = document.createElement('nav');
  navbar.classList.add('btmbar');

  for (let p of pages) {
    const anchor = document.createElement("a");
    anchor.href = `/#/${p.id}`;
    const span = document.createElement("span")
    span.classList.add("li");
    span.title = p.id;
    if (p.id == page) {
      span.classList.add("raiseup");
      span.classList.add("high");
    }
    const img = document.createElement("img");
    img.classList.add("btbr_img");
    img.src = p.icon;
    img.alt = p.id;
    span.appendChild(img);
    anchor.appendChild(span);
    navbar.append(anchor);
  }
  document.body.appendChild(navbar);
}

export function showNavTop(page, pages) {
  /*
  This function will make:
  ```html
  <nav>
    <div class="webname">Pecific</div>
    <div class="nav">
      <ul class="ul"art type="none">
        <a href="/#/index">
          <li class="high li">Programming</li>
        </arta>
        <a href="/#/art">
          <li class="li">Art</li>
        </arta>
        <a href="/#/socials">
          <li class="li">Socials</li>
        </a>
      </ul>
    </div>
  </nav>
  ```
  */
  const webname = document.createElement("div");
  webname.classList.add("webname");
  webname.textContent = "Pecific";
  const navbar = document.createElement('nav');
  navbar.classList.add('navbar')
  navbar.appendChild(webname);

  const nav = document.createElement("div");
  nav.classList.add("nav");
  nav.type = "none";
  const ul = document.createElement("ul");
  ul.classList.add("ul");

  for (let p of pages) {
    const anchor = document.createElement("a");
    anchor.href = `/#/${p.id}`;
    const li = document.createElement("li")
    li.classList.add("li");
    if (p.id == page) li.classList.add("high");
    li.textContent = `${p.id}`;
    anchor.appendChild(li);
    ul.appendChild(anchor);
  }
  nav.append(ul);
  navbar.appendChild(nav);
  document.querySelector('header').appendChild(navbar);
}
