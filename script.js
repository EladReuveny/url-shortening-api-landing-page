const input = document.querySelector(".input");
const inputField = document.querySelector(".input__field");
const link = document.querySelector(".input a");

link.addEventListener("click", (e) => {
  e.preventDefault();

  if (inputField.value.trim() === "") {
    input.style.setProperty("--after-content", "'Please add a link'");
  } else {
    input.style.removeProperty("--after-content");
  }
});

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav__links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");

  if (navLinks.classList.contains("active")) {
    hamburger.innerHTML = '<div class="close-icon">&times;</div>';
  } else {
    hamburger.innerHTML = '<div class="hamburger" id="hamburger">&#9776;</div>';
  }
});
