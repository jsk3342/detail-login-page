let emptyCheck = document.getElementById("empty_check");
let fullCheck = document.getElementById("full_check");

emptyCheck.addEventListener("click", function () {
  emptyCheck.classList.add("hidden");
  fullCheck.classList.remove("hidden");
});

fullCheck.addEventListener("click", function () {
  emptyCheck.classList.remove("hidden");
  fullCheck.classList.add("hidden");
});

let loginBtu = document.querySelector(".login-btu");
let loginContainer = document.querySelector(".login-container");
let modalContainer = document.querySelector(".modal-container");
let blackBackground = document.querySelector(".black-background");
let closeIcon = document.querySelector(".modal-close-icon");

loginBtu.addEventListener("click", function () {
  loginContainer.classList.add("hidden");
  modalContainer.classList.remove("hidden");
  modalContainer.classList.add("modal-container-show");
  blackBackground.classList.add("show-modal");
});

window.addEventListener("click", e => {
  e.target === blackBackground
    ? blackBackground.classList.remove("show-modal")
    : false;
  loginContainer.classList.remove("hidden");
});

closeIcon.addEventListener("click", function () {
  blackBackground.classList.remove("show-modal");
  loginContainer.classList.remove("hidden");
});
