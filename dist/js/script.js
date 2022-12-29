const hamburger = document.querySelector("#hamburger");

window.onscroll = () => {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;
  if (scrollY > fixedNav) {
    header.classList.add("navbar-fixed");
  } else {
    header.classList.remove("navbar-fixed");
  }
};

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("hamburger-active");
});
