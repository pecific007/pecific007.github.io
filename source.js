function showCode(code) {
  document.querySelectorAll(".frames").forEach((frames) => {
    frames.style.display = "none";
  });
  document.querySelector(".loading_page").style.display = "flex";
  document.querySelector(".loading_color").style.animationPlayState = "running";
  document
    .querySelector(".loading_color")
    .addEventListener("animationend", function () {
      document.querySelector(".loading_page").style.display = "none";
    });

  loadLoadingPage();

  document.querySelector(`#${code}`).style.display = "block";
}

function loadLoadingPage() {
  document.querySelector(".loading_page1").style.display = "flex";
  document.querySelector(".loading_color1").style.animationPlayState =
    "running";
  document
    .querySelector(".loading_color1")
    .addEventListener("animationend", function () {
      document.querySelector(".loading_page1").style.display = "none";
    });
}

function shwoType(type) {
  document.querySelectorAll(".ALL").forEach((all) => {
    all.style.display = "none";
  });
  document.querySelector(".loading_page").style.display = "none";
  document.querySelector(`#${type}`).style.display = "block";
}

document.addEventListener("DOMContentLoaded", function () {
  document.querySelector(".loading_page").style.display = "none";
  document.querySelector(`#type1`).style.display = "block";
  document.querySelector("#code1").style.display = "block";
  let autoSelect = document.querySelector(".autoSelect");
  let code4 = document.querySelector("#code4");
  autoSelect.style.backgroundColor = "#fff";
  autoSelect.style.color = "#000";
  autoSelect.style.animationPlayState = "running";
  autoSelect.style.animationFillMode = "backwards";
  code4.style.display = "block";

  let typehtml = document.querySelector("#type_html");
  document.querySelector(".toggle").style.animationName = "switch_html";
  document.querySelector(".toggle").style.animationPlayState = "running";
  document.querySelector(".toggle").style.animationFillMode = "forwards";
  typehtml.style.color = "#fff";
  let htmlCssToggle = document.querySelector("#htmlCssToggle");
  let typecss = document.querySelector("#type_css");
  htmlCssToggle.checked = false;
  document.querySelector(".toggle").onclick = function () {
    if (htmlCssToggle.checked) {
      htmlCssToggle.checked = false;
    } else {
      htmlCssToggle.checked = true;
    }
    changeStyleToggle();
  };

  function changeStyleToggle() {
    if (htmlCssToggle.checked) {
      shwoType("type2");
      loadLoadingPage();
      let indexCss = document.querySelector("#autoSelectCss");
      code4.style.display = "block";
      indexCss.style.backgroundColor = "#fff";
      indexCss.style.color = "#000";
      indexCss.style.animationPlayState = "running";
      indexCss.style.animationFillMode = "backwards";
      document.querySelector("#code1").style.display = "block";
      document.querySelector(".toggle").style.animationName = "switch_css";
      document.querySelector(".toggle").style.animationPlayState = "running";
      document.querySelector(".toggle").style.animationFillMode = "forwards";
      typehtml.style.filter = "none";
      typehtml.style.color = "#000";
      typecss.style.color = "#fff";
    } else {
      shwoType("type1");
      showCode("code1");
      typecss.style.filter = "none";
      document.querySelector(".toggle").style.animationName = "switch_html";
      document.querySelector(".toggle").style.animationPlayState = "running";
      document.querySelector(".toggle").style.animationFillMode = "forwards";
      typehtml.style.color = "#fff";
      typecss.style.color = "#000";
    }
  }

  document.querySelectorAll(".switch_button").forEach((button) => {
    button.onclick = function () {
      sectorColorChanger();
      button.style.animationPlayState = "running";
      button.style.animationFillMode = "forwards";
      showCode(this.dataset.frame);
    };
  });

  function sectorColorChanger() {
    document.querySelectorAll(".switch_button").forEach((button) => {
      button.style.color = "#fff";
      button.style.backgroundColor = "#999";
      button.style.animationFillMode = "backwards";
    });
  }
});
