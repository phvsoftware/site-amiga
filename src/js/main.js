let darkMode = false;
let burgerOpen = false;

const clickIconDesktop = () => {
  // on fait toucher le logo
  const icon = document.getElementById("darkMode");
  if (icon === null) return;
  icon.classList.toggle("rotate-icon");
  setTimeout(() => {
    icon.classList.toggle("rotate-icon");
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

document.addEventListener(
  "DOMContentLoaded",
  () => {
    const elem = document.getElementById("darkMode");
    elem.addEventListener("click", clickIconDesktop, false);

    const el2 = document.getElementById("burgerMenu");
    console.log("test7", el2);
    el2.addEventListener("click", clickBurgerMenu, false);
  },
  false
);
