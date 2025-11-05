function showCode(code) {
  document.querySelectorAll(".frames").forEach((frames) => {
    frames.style.display = "none";
  });
  document.querySelector(`#${code}`).style.display = "block";
}

function shwoType(type) {
  document.querySelectorAll(".ALL").forEach((all) => {
    all.style.display = "none";
  });
  document.querySelector(`#${type}`).style.display = "block";
}

document.addEventListener("DOMContentLoaded", function () {
  document.querySelector(`#type1`).style.display = "block";

  document.querySelectorAll(".type").forEach((type) => {
    type.onclick = function () {
      shwoType(this.dataset.type);
    };
  });

  document.querySelector("#code1").style.display = "block";
  let autoSelect = document.querySelector(".autoSelect");
  let code4 = document.querySelector("#code4");
  autoSelect.style.backgroundColor = "#fff";
  autoSelect.style.color = "#000";
  autoSelect.style.fontSize = "20px";
  autoSelect.style.animationPlayState = "running";
  autoSelect.style.animationFillMode = "backwards";
  code4.style.display = "block";
  code4.style.backgroundColor = "#fff";
  code4.style.color = "#000";
  code4.style.fontSize = "20px";
  code4.style.animationPlayState = "running";
  code4.style.animationFillMode = "backwards";

  let typehtml = document.querySelector("#type_html");
  document.querySelector(".toggle").style.animationName = "switch_html";
  document.querySelector(".toggle").style.animationPlayState = "running";
  document.querySelector(".toggle").style.animationFillMode = "forwards";
  typehtml.style.backgroundColor = "#6650ed";
  typehtml.style.color = "#fff";
  typehtml.style.filter = "drop-shadow(0px 1px 2px rgba(0,0,0,0.5))";
  html_is_selected = true;
  //   filter: drop-shadow(0px 0px 2px rgba(0,0,0,0.5));
  let typecss = document.querySelector("#type_css");
  document.querySelector(".toggle").onclick = function () {
      code4.style.display = "block";
      code4.style.backgroundColor = "#fff";
      code4.style.color = "#000";
      code4.style.fontSize = "20px";
      code4.style.animationPlayState = "running";
      code4.style.animationFillMode = "backwards";
    document.querySelector("#code1").style.display = "block";
    if (html_is_selected) {
      html_is_selected = false;
      document.querySelector(".toggle").style.animationName = "switch_css";
      document.querySelector(".toggle").style.animationPlayState = "running";
      document.querySelector(".toggle").style.animationFillMode = "forwards";
      typehtml.style.filter = "none";
      typecss.style.filter = "drop-shadow(0px 1px 2px rgba(0,0,0,0.5))";
      typehtml.style.backgroundColor = "transparent";
      typehtml.style.color = "#000";
      typecss.style.backgroundColor = "#6650ed";
      typecss.style.color = "#fff";
    } else {
      html_is_selected = true;
      typecss.style.filter = "none";
      document.querySelector(".toggle").style.animationName = "switch_html";
      document.querySelector(".toggle").style.animationPlayState = "running";
      document.querySelector(".toggle").style.animationFillMode = "forwards";
      typehtml.style.filter = "drop-shadow(0px 1px 2px rgba(0,0,0,0.5))";
      typehtml.style.backgroundColor = "#6650ed";
      typehtml.style.color = "#fff";
      typecss.style.backgroundColor = "transparent";
      typecss.style.color = "#000";
    }
  };

  document.querySelectorAll(".switch_button").forEach((button) => {
    button.onclick = function () {
      sectorColorChanger();
      button.style.fontSize = "20px";
      button.style.animationPlayState = "running";
      button.style.animationFillMode = "forwards";
      showCode(this.dataset.frame);
    };
  });

  function sectorColorChanger() {
    document.querySelectorAll(".switch_button").forEach((button) => {
      button.style.color = "#fff";
      button.style.backgroundColor = "#555";
      button.style.fontSize = "15px";
      button.style.animationFillMode = "backwards";
    });
  }
});
