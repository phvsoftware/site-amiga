const clickIconDesktop = () => {
  // on fait toucher le logo
  const icon = document.getElementById("darkMode");
  icon.classList.add("rotate-icon");
  setTimeout(() => {
    icon.classList.remove("rotate-icon");
  }, 500);

  // change le theme
  darkMode = !darkMode;
  if (darkMode) {
    document.documentElement.setAttribute("data-theme", "dark");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
  }
};

const clickBurgerMenu = () => {
  const el = document.getElementById("burgerMenuNavbar");
  burgerOpen = !burgerOpen;
  if (burgerOpen) {
    el.classList.remove("burger-navbar-close");
    el.classList.add("burger-navbar-open");
  } else {
    el.classList.remove("burger-navbar-open");
    el.classList.add("burger-navbar-close");
  }
};

let darkMode = false;
let burgerOpen = false;

const el = document.getElementById("darkMode");
el.addEventListener("click", clickIconDesktop, false);

const el2 = document.getElementById("burgerMenu");
el2.addEventListener("click", clickBurgerMenu, false);
