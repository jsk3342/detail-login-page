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
