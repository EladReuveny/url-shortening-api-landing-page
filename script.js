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
