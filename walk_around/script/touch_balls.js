const redBall = document.querySelector(".red");
const blueBall = document.querySelector(".blue");
const touchBlue = document.querySelector(".touch-blue");
const touchRed = document.querySelector(".touch-red");

redBall.addEventListener("click", function (event) {
  event.stopPropagation();
  touchRed.style.display = "block";
});

document.addEventListener("click", function (event) {
  if (
    touchRed.style.display === "block" ||
    touchBlue.style.display === "block"
  ) {
    touchRed.style.display = "none";
  }
});

blueBall.addEventListener("click", function (event) {
  event.stopPropagation();
  touchBlue.style.display = "block";
});

document.addEventListener("click", function (event) {
  if (
    touchRed.style.display === "block" ||
    touchBlue.style.display === "block"
  ) {
    touchBlue.style.display = "none";
  }
});
