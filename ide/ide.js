document.addEventListener('DOMContentLoaded', main);

let fileIndex = new Map();
let opendFiles = new Map();
let activeTab = null;

function indexFiles(node) {
  if (node.type == "file") {
    fileIndex.set(node.path, node);
    return;
  }

  for (const child of Object.values(node.children)) {
    indexFiles(child);
  }
}

async function main() {
  const { FileTree } = await import('/ide/file-list.js');
  const fileExplorer = document.getElementById("fileExplorer");
  loadFileExplorer(FileTree, fileExplorer);
  document.querySelector(".root").parentElement.open = true; // Opens the root directory automatically.
  indexFiles(FileTree);
}

function openFile(node) {
  let validPath = fileIndex.has(node.path);
  if (!validPath) return;
  loadSourceFile(node.path, node.language);
  if (!opendFiles.has(node.path)) {
    opendFiles.set(node.path, node);
  }
  activeTab = node.path;
  document.querySelectorAll('.file').forEach((f) => {
    if (f.dataset.path == activeTab) {
      f.dataset.active = true;
    } else {
      f.dataset.active = false;
    }
  })
  drawTabs();
}

function drawTabs() {
  const tabBar = document.querySelector(".tabs-container");
  tabBar.innerHTML = "";
  for (const [path, node] of opendFiles) {
    const btn = document.createElement("button");
    if (path == activeTab) {
      btn.dataset.active = true;
    } else {
      btn.dataset.active = false;
    }
    btn.classList.add("tab");
    btn.textContent = `🖹 ${node.name} `;
    btn.dataset.path = path;
    btn.onclick = function () {
      openFile(node);
    }
    tabBar.appendChild(btn);
  }
}

async function loadSourceFile(path, language) {
  const code = document.querySelector("code")
  const source = await fetch(path).then(r => r.text());
  code.textContent = source;
  code.className = `language-${language}`;
  const lineNumbers = document.querySelector("#lineNumbers");
  const lineCount = source.split("\n").length;
      lineNumbers.textContent = Array.from(
          { length: lineCount },
          (_, i) => i + 1
      ).join("\n");
  code.removeAttribute("data-highlighted");
  hljs.highlightElement(code);

}

function loadFileExplorer(node, container) {
  if (node.type === "dir") {
    const details = document.createElement("details");
    const summary = document.createElement("summary");
    summary.className = "file";
    summary.textContent = node.name;
    if (node.name === "root") {
      summary.classList.add("root");
    }
    details.appendChild(summary);

    const children = document.createElement("div");
    children.className = "files";

    for (const fileName in node.children) {
      const child = node.children[fileName];
      if (child.type === "dir") {
        child.name = fileName;
      }
      loadFileExplorer(child, children);
    }
    details.appendChild(children);
    container.appendChild(details);
  } else if (node.type === "file") {
    const file = document.createElement("button");
    file.classList.add("file");
    file.onclick = function () {
      openFile(node);
    }
    file.textContent = `🖹 ${node.name}`;
    file.dataset.active = false;
    file.dataset.path = node.path;
    container.appendChild(file);
  }

  /* will delete later when I'm sure I won't need this.

  for (const [dirName, files] of Object.entries(sourceFiles)) {
    const details = document.createElement("details");
    const summary = document.createElement("summary");
    summary.textContent = dirName;
    summary.className = "file"

    details.appendChild(summary);

    const div = document.createElement("div");
    div.className = "files";

    for (const [fileName, path] of Object.entries(files)) {
      const button = document.createElement("button");
      button.className = "file";
      button.textContent = `🖹 ${fileName}`;
      button.dataset.name = fileName;
      button.dataset.path = path;
      button.dataset.open = false;
      button.dataset.current = false;
      div.appendChild(button);
    }

    details.appendChild(div);

    fileExplorer.appendChild(details);
    } */
}
