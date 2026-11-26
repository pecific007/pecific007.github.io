export function init() {
      const container = document.querySelector('.link-container');
      const template = document.querySelector("#card_template");
      // All links to display:
      const icons = {
        "GitLab": "https://gitlab.com/Pecific007",
        "Github": "https://github.com/pecific007",
        "YouTube": "https://youtube.com/@prash_rathod007",
        "Instagram": "https://www.instagram.com/endframe_art/",
        "Wordpress": "https://pecific007.wordpress.com",
        "Weather": "/weather_react",
        "MonkeyType": "https://monkeytype.com/profile/Pecific007",
        "Sketchfab": "https://sketchfab.com/Minute_watchers_64",
        "Ready": "/ready"
      }

      for (let site in icons) {
        let el = document.createElement('a');
        el.classList.add('card')
        el.innerHTML = template.innerHTML;
        el.href = icons[site];
        el.target = "_blank";
        let img = el.querySelector('img');
        img.src = `media/icons/${site}.svg`;
        img.alt = `Logo: ${site}`;
        if (site == "MonkeyType") {
          img.style.width = "6rem";
          img.style.paddingInline = ".5rem";
        } else if (site == "Ready" && window.innerWidth > 850) {
          img.style.translate = "-10%";
        }
        let link = el.querySelector('button');
        link.textContent = site;
        container.appendChild(el);
      }
};
