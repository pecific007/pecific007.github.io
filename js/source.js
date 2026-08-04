function showCode(code) {
  // First hide all the code
  document.querySelectorAll(".frames").forEach((frames) => {
    frames.style.display = "none";
  });
  // Play the loading animation
  document.querySelector(".loading_page").style.display = "flex";
  document.querySelector(".loading_color").style.animationPlayState = "running";
  document
    .querySelector(".loading_color")
    .addEventListener("animationend", function () {
      // When animation ends, hide loading page
      document.querySelector(".loading_page").style.display = "none";
    });

  // Call the loading page function
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

function showType(type) {
  document.querySelectorAll(".ALL").forEach((all) => {
    all.style.display = "none";
  });
  document.querySelector(`#${type}`).style.display = "block";
}

document.addEventListener("DOMContentLoaded", function () {
  document.querySelector(".loading_page").style.display = "none";
  document.querySelector(`#type1`).style.display = "block";
  document.querySelector("#code1").style.display = "block";
  document.querySelectorAll(".autoSelect").forEach((autoSelect) => {
    autoSelect.style.backgroundColor = "#fff";
    autoSelect.style.color = "#000";
    autoSelect.style.animationPlayState = "running";
    autoSelect.style.animationFillMode = "forwards";
  });
  let code4 = document.querySelector("#code4");
  code4.style.display = "block";

  let typehtml = document.querySelector("#type_html");
  let toggle = document.querySelector(".toggle");
  toggle.style.animationPlayState = "running";
  toggle.style.animationDirection = "normal";
  typehtml.style.color = "#fff";
  let htmlCssToggle = document.querySelector("#htmlCssToggle");
  let typecss = document.querySelector("#type_css");
  htmlCssToggle.checked = false;
  toggle.onclick = function () {
    if (htmlCssToggle.checked) {
      htmlCssToggle.checked = false;
    } else {
      htmlCssToggle.checked = true;
    }
    changeStyleToggle();
  };

  function changeStyleToggle() {
    if (htmlCssToggle.checked) {
      showType("type2");
      loadLoadingPage();
      let indexCss = document.querySelector("#autoSelectCss");
      code4.style.display = "block";
      indexCss.style.backgroundColor = "#fff";
      indexCss.style.color = "#000";
      indexCss.style.animationPlayState = "running";
      document.querySelector("#code1").style.display = "block";
      toggle.style.animationPlayState = "running";
      toggle.style.animationDirection = "reverse";
      typehtml.style.color = "#000";
      typecss.style.color = "#fff";
    } else {
      showType("type1");
      showCode("code1");
      typecss.style.filter = "none";
      toggle.style.animationPlayState = "running";
      toggle.style.animationDirection = "normal";
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
