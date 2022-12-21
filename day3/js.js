var resumeBtn = document.getElementById("resumebtn");
var workBtn = document.getElementById("workbtn");
var contactBtn = document.getElementById("contactbtn");
var clickbutton = document.getElementById("homebtn");

var x = document.getElementsByClassName("collapse");

clickbutton.addEventListener("click", function () {
  for (let i = 0; i < x.length; i++) {
    if (x[i].classList.contains("show")) {
      x[i].classList.remove("show");
    }
  }
});

resumeBtn.addEventListener("click", function () {
  for (let i = 0; i < x.length; i++) {
    if (x[i].classList.contains("show")) {
      x[i].classList.remove("show");
    }
  }
});

workBtn.addEventListener("click", function () {
  for (let i = 0; i < x.length; i++) {
    if (x[i].classList.contains("show")) {
      x[i].classList.remove("show");
    }
  }
});

contactBtn.addEventListener("click", function () {
  for (let i = 0; i < x.length; i++) {
    if (x[i].classList.contains("show")) {
      x[i].classList.remove("show");
    }
  }
});