const menuToggle = document.querySelector(".menu-toggle");
const menuOn = document.querySelector(".menu-on");

menuToggle.addEventListener("click", function (event) {
  event.stopPropagation();
  menuOn.style.display = "flex";
});

document.addEventListener("click", function (event) {
  if (menuOn.style.display === "flex") {
    menuOn.style.display = "none";
  }
});
