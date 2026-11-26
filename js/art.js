export function init() {
  (async () => {
    const list_all = await fetch("/data/art.json").then(r => r.json());

    const template = document.querySelector("#card_template");
    const content = document.querySelector(".content");

    for (let path in list_all) {
      let el = document.createElement("div");
      el.classList.add("card_all");
      el.innerHTML = template.innerHTML;
      content.appendChild(el);
      let img = el.querySelector("img");
      img.src = `/media/art/${path}.webp`;
      img.alt = list_all[path];
      img.loading = "lazy";
      el.querySelector(".title").textContent = path.replaceAll("_", " ");
    }
  })();
}
