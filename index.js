let is_mobile;
console.log(window.innerWidth)
document.addEventListener("DOMContentLoaded", function () {
  if (window.innerWidth <= 500) {
    is_mobile = true;
  } else {
    is_mobile = false;
  }
});

function changeStyle(name) {
  if (is_mobile) {
    let lang_class = "lang" + "-" + name;
    let cd_class = "code" + "-" + name;
    const ht = document.getElementById(lang_class);
    const cd = document.getElementById(cd_class);
    cd.style.animationPlayState = "running";
    // cd.style.display = cd.style.display == "none" ? "flex" : "none";
    if (cd.style.display === "none") {
      cd.style.animationName = "appear";
      cd.style.display = "flex";
    } else {
      cd.style.animationName = "dissappear";
      cd.style.display = "none";
    }
    // ht.style.background = "transparent";
    ht.style.background =
      ht.style.background ==
      "linear-gradient(to bottom, var(--ltblack) 80%, rgba(43, 39, 255, 0.2))"
        ? "transparent"
        : "linear-gradient(to bottom, var(--ltblack) 80%, rgba(43, 39, 255, 0.2))";
    ht.style.filter =
      ht.style.filter == "none"
        ? "drop-shadow(0px 0px 5px rgba(255, 228, 255, 0.9))"
        : "none";
    ht.style.border =
      ht.style.border == "3px solid var(--blueViolet)"
        ? "3px solid var(--purpwhite)"
        : "3px solid var(--blueViolet)";
  }
  else {
    return;
  }
}
