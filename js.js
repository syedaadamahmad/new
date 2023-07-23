window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

//theme
const darkTheme = "dark-theme";

// Add dark theme change here
const darkThemeSetUp = () => {
  if (getCurrentTheme() === "dark") {
    document.getElementById("toggleBtn").checked = true;
  } else {
    document.getElementById("toggleBtn").checked = false;
  }
};

const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "dark" : "light";

//   Get user's theme preference from local storage
const selectedTheme = localStorage.getItem("selected-theme");
if (selectedTheme === "dark") {
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darkTheme
  );
  darkThemeSetUp();
}

const themeButton = document.getElementById("toggleBtn");
themeButton.addEventListener("change", () => {
  document.body.classList.toggle(darkTheme);
  localStorage.setItem("selected-theme", getCurrentTheme());
  darkThemeSetUp();
});