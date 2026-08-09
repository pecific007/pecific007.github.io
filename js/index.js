export function init() {
  fetch("https://api.github.com/users/pecific007/repos?sort=updated&per_page=5")
    .then (response => response.json())
    .then(repos => {
      const container = document.querySelector(".section-projects");

      repos.forEach(repo => {
        const tr = document.createElement("tr");
        console.log(tr);
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
}
