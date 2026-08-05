document.addEventListener('DOMContentLoaded', main);

async function main() {
  await loadFileExplorer();
  document.querySelectorAll(".file").forEach((f) => {
    if (f.tagName !== "SUMMARY") {
      f.onclick = function() {
        loadSourceFile(f.dataset.path);
      }
    }
  })
}

function getLanguage(path) {
  let language = "html";
  if (path.endsWith('.js')) {
    language = "javascript";
  } else if (path.endsWith('.css')) {
    language = "css";
  } else if (path.endsWith('.html')) {
    language = "html";
  }
  return language;
}

async function loadSourceFile(path) {
  const language = getLanguage(path);
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

async function loadFileExplorer() {
  const { sourceFiles } = await import('/ide/file-list.js');
  const fileExplorer = document.getElementById("fileExplorer");
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
      button.dataset.path = path;
      div.appendChild(button);
    }

    details.appendChild(div);

    fileExplorer.appendChild(details);
  }
}
