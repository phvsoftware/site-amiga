let darkMode = false;
let burgerOpen = false;
let articleCount = 0;

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

const closeBurgerMenu = () => {
  burgerOpen = false;
  const el = document.getElementById("burgerMenuNavbar");
  el.classList.remove("burger-navbar-open");
  el.classList.add("burger-navbar-close");
};

//Top button
const topbutton = document.getElementById("topButton");
window.onscroll = () => {
  scrollFunction();
};

const scrollFunction = () => {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    topbutton.style.display = "block";
  } else {
    topbutton.style.display = "none";
  }
  // scroll progress bar
  const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrolled = (winScroll / height) * 100;
  document.getElementById("scrollProgressBar").style.width = scrolled + "%";
};

const topFunction = () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};

const addToCart = () => {
  articleCount++;
  const el = document.getElementsByClassName("count")[0];
  el.innerHTML = articleCount;
};

const onCartClick = () => {
  let str = "";
  if (articleCount === 0) {
    str = "Aucun article n'a été ajouté :(";
  } else if (articleCount === 42) {
    document.getElementById("AZE").style.display = "block";
    return;
  } else if (articleCount < 42) {
    str = `Il y a ${articleCount} articles dans le panier, achète encore un peu...`;
  } else if (articleCount > 42) {
    str = `Il y a ${articleCount} articles dans le panier, tu dépenses trop !`;
  }
  alert(str);
};

document.addEventListener(
  "DOMContentLoaded",
  () => {
    const el1 = document.getElementById("darkMode");
    el1.addEventListener("click", clickIconDesktop, false);

    const el2 = document.getElementById("burgerMenu");
    el2.addEventListener("click", clickBurgerMenu, false);

    const el3 = document.getElementById("burgerMenu1");
    el3.addEventListener("click", closeBurgerMenu, true);
    const el4 = document.getElementById("burgerMenu2");
    el4.addEventListener("click", closeBurgerMenu, true);
    const el5 = document.getElementById("burgerMenu3");
    el5.addEventListener("click", closeBurgerMenu, true);

    const el6 = document.getElementById("topButton");
    el6.addEventListener("click", topFunction, false);

    const el7 = document.getElementsByClassName("white-button");
    for (let i = 0; i < el7.length; i++) {
      el7[i].addEventListener("click", addToCart, false);
    }

    const el8 = document.getElementsByClassName("cart-item")[0];
    el8.addEventListener("click", onCartClick, false);
  },
  false
);
