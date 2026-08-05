export const FileTree = {
  type: "dir",
  name: "root",
  children: {
    pages: {
      type: "dir",
      children: {
        "index.html": {
          type: "file",
          name: "index.html",
          path: "/pages/index.html",
          language: "html",
        },
        "art.html": {
          type: "file",
          name: "art.html",
          path: "/pages/art.html",
          language: "html",
        },
        "socials.html": {
          type: "file",
          name: "socials.html",
          path: "/pages/socials.html",
          language: "html",
        },
      }
    },
    css: {
      type: "dir",
      children: {
        "style-general.css": {
          type: "file",
          name: "style-general.css",
          path: "/css/style-general.css",
          language: "css",
        },
        "style-index.css": {
          type: "file",
          name: "style-index.css",
          path: "/css/style-index.css",
          language: "css",
        },
        "style-art.css": {
          type: "file",
          name: "style-art.css",
          path: "/css/style-art.css",
          language: "css",
        },
        "style-socials.css": {
          type: "file",
          name: "style-socials.css",
          path: "/css/style-socials.css",
          language: "css",
        },
      }
    },
    js: {
      type: "dir",
      children: {
        "main.js": {
          type: "file",
          name: "main.js",
          path: "/js/main.js",
          language: "js",
        },
        "index.js": {
          type: "file",
          name: "index.js",
          path: "/js/index.js",
          language: "js",
        },
        "art.js": {
          type: "file",
          name: "art.js",
          path: "/js/art.js",
          language: "js",
        },
        "socials.js": {
          type: "file",
          name: "socials.js",
          path: "/js/socials.js",
          language: "js",
        },
      }
    },
  }
}
