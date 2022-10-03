const body = document.querySelector("body");
let modeToggle = document.querySelector(".dark-light"); //

let getMode = localStorage.getItem("mode");
if (getMode && getMode === "dark-mode") {
  body.classList.add("dark-theme");
}

// js code to toggle dark and light mode
modeToggle.addEventListener("click", () => {
  modeToggle.classList.toggle("active");
  body.classList.toggle("dark-theme");

  // js code to keep user selected mode even page refresh or file reopen
  if (!body.classList.contains("dark-theme")) {
    localStorage.setItem("mode", "light-mode");
  } else {
    localStorage.setItem("mode", "dark-mode");
  }
});

// <div class="dark-light text-white">
//   <i class="bx bx-moon moon"></i>
//   <i class="bx bx-sun sun"></i>
// </div>;
