export function init() {
      const container = document.querySelector('.card_container');
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
        "Sketchfab": "https://sketchfab.com/Minute_watchers_64"
      }

      for (let site in icons) {
        let el = document.createElement('label');
        el.classList.add('card')
        el.innerHTML = template.innerHTML;
        let img = el.querySelector('img');
        img.src = `media/icons/${site}.svg`;
        img.alt = `Logo: ${site}`;
          if (site == "MonkeyType") {
            img.style.width = "6rem";
            img.style.paddingInline = ".5rem";
          }
          else if (site == "GitLab") {
            img.style.width = "6rem";
            img.style.height = "6rem";
            img.style.backgroundColor = "#6650edAA";
            img.style.borderRadius = "15px";
            img.style.paddingInline = ".8rem";
          }
        let btn = el.querySelector('button');
        btn.textContent = site;
        let link = el.querySelector('a');
        link.href = icons[site];
        container.appendChild(el);
      }
};
