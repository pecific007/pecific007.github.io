export function init() {
      const container = document.querySelector('.link-container');
      const template = document.querySelector("#card_template");
      (async () => {
        const icons = await fetch("/data/socials.json").then(r => r.json()).catch(e => console.error(e));
        for (let site in icons) {
          const el = document.createElement('a');
          el.classList.add('card')
          el.innerHTML = template.innerHTML;
          el.href = icons[site];
          el.target = "_blank";
          const img = el.querySelector('img');
          img.src = `media/icons/${site}.svg`;
          img.alt = `Logo: ${site}`;
          if (site == "MonkeyType") {
            img.style.width = "6rem";
            img.style.paddingInline = ".5rem";
          } else if (site == "Ready" && window.innerWidth > 850) {
            img.style.translate = "-10%";
          }
          const link = el.querySelector('button');
          link.textContent = site;
          container.appendChild(el);
        }
      })();
};
