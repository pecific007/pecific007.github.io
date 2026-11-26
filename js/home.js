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
  loadTerminalTemplate();
}

function loadTerminalTemplate() {
  (async () => {
    const t = await fetch("/pages/parts/term.html").then(r => r.text());
    let con = document.querySelector(".content");
    con.innerHTML += t;
  })();
}

function debug() {
  let repos = [
    { "name": "first" },
    { "name": "second" },
    { "name": "third" },
    { "name": "fourth" },
    { "name": "fifth" },
  ];
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
    button.classList.add("primary-button");
    button.textContent = repo.name;
    link.appendChild(button);
    td.appendChild(link);
    tr.appendChild(td);
    container.appendChild(tr);
  });
}
