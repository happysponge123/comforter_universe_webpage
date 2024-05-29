const weak1 = document.querySelector(".weak1");
const weak2 = document.querySelector(".weak2");
const weak3 = document.querySelector(".weak3");
const weak4 = document.querySelector(".weak4");
const weak5 = document.querySelector(".weak5");
const weak6 = document.querySelector(".weak6");

const weak1Content = document.querySelector(".weak1-content");
const weak2Content = document.querySelector(".weak2-content");
const weak3Content = document.querySelector(".weak3-content");
const weak4Content = document.querySelector(".weak4-content");
const weak5Content = document.querySelector(".weak5-content");
const weak6Content = document.querySelector(".weak6-content");
const weaknessContent = document.querySelector(".weakness-content");

///weak1
weak1.addEventListener("click", function (event) {
  event.stopPropagation();
  weaknessContent.style.display = "block";
  weak1Content.style.display = "block";
});
document.addEventListener("click", function (event) {
  if (
    weak1Content.style.display === "block" ||
    weaknessContent.style.display === "block"
  ) {
    weak1Content.style.display = "none";
    weaknessContent.style.display = "none";
  }
});

///weak2
weak2.addEventListener("click", function (event) {
  event.stopPropagation();
  weaknessContent.style.display = "block";
  weak2Content.style.display = "block";
});
document.addEventListener("click", function (event) {
  if (
    weak2Content.style.display === "block" ||
    weaknessContent.style.display === "block"
  ) {
    weak2Content.style.display = "none";
    weaknessContent.style.display = "none";
  }
});

///weak3
weak3.addEventListener("click", function (event) {
  event.stopPropagation();
  weaknessContent.style.display = "block";
  weak3Content.style.display = "block";
});
document.addEventListener("click", function (event) {
  if (
    weak3Content.style.display === "block" ||
    weaknessContent.style.display === "block"
  ) {
    weak3Content.style.display = "none";
    weaknessContent.style.display = "none";
  }
});

///weak4
weak4.addEventListener("click", function (event) {
  event.stopPropagation();
  weaknessContent.style.display = "block";
  weak4Content.style.display = "block";
});
document.addEventListener("click", function (event) {
  if (
    weak4Content.style.display === "block" ||
    weaknessContent.style.display === "block"
  ) {
    weak4Content.style.display = "none";
    weaknessContent.style.display = "none";
  }
});

///weak5
weak5.addEventListener("click", function (event) {
  event.stopPropagation();
  weaknessContent.style.display = "block";
  weak5Content.style.display = "block";
});
document.addEventListener("click", function (event) {
  if (
    weak5Content.style.display === "block" ||
    weaknessContent.style.display === "block"
  ) {
    weak5Content.style.display = "none";
    weaknessContent.style.display = "none";
  }
});

///weak6
weak6.addEventListener("click", function (event) {
  event.stopPropagation();
  weaknessContent.style.display = "block";
  weak6Content.style.display = "block";
});
document.addEventListener("click", function (event) {
  if (
    weak6Content.style.display === "block" ||
    weaknessContent.style.display === "block"
  ) {
    weak6Content.style.display = "none";
    weaknessContent.style.display = "none";
  }
});
