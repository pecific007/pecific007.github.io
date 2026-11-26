export function init() {
/*
  fetch("https://api.github.com/users/pecific007/repos?sort=updated&per_page=5")
    .then (response => response.json())
    .then(repos => {
      const container = document.querySelector(".section-projects");

      repos.forEach(repo => {
        const tr = document.createElement("tr");
        tr.classList.add("card");
        tr.style.minWidth = "100%";
        tr.style.marginBottom = "1rem";
        const td = document.createElement("td");
        td.classList.add("projects-item");
        const link = document.createElement("a");
        link.href = repo.html_url;
        link.target = "_blank";
        const button = document.createElement("button");
        button.classList.add("blue_button");
        button.textContent = repo.name;
        link.appendChild(button);
        td.appendChild(link);
        tr.appendChild(td);
        container.appendChild(tr);
      })
    })
*/
  debug();
  // loadTerminalTemplate();
}

// function loadTerminalTemplate() {
//   (async () => {
//     const t = await fetch("/pages/parts/term.html").then(r => r.text());
//     let con = document.querySelector(".content");
//     con.innerHTML += t;
//   })();
// }

function debug() {
  (async () => {
    const repos = [
      {
        "cmd": "tip", "args": [
          { "arg": "fey create @project", "out": "//---- Cursor ----//\n\n" },
          { "arg": "fey create @tip 10 Change to immediate mode GUI", "out": "//---- Cursor ----//\n\n" },
          { "arg": "fey show @all", "out": "//---- Cursor ----//\n\n@id:2 | @title:Make simple version first | @critical:8 | @done:false\n" },
        ]
      },
    ];
    const term_content = await fetch("/pages/parts/term.html").then(r => r.text());
    const container = document.querySelector(".section-projects");
    repos.forEach(repo => {
      const prompt = `<span class="prompt"> ~</span>\n&rsaquo; `;
      const term_el = document.createElement("div");
      term_el.innerHTML = term_content;
      const termMain = term_el.querySelector(".term-main");
      repo.args.forEach(a => {
        termMain.innerHTML += `${prompt}<span class="command">${repo.cmd}</span> ${a.arg}\n${a.out}`;
      });
      termMain.innerHTML += `${prompt}`;
      container.appendChild(term_el);
    });
  })();
}
