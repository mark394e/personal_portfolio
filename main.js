import "./style.scss";

const toggleBtn = document.querySelector(".toggle-btn");

const navbarLinks = document.querySelector(".navbar-links");

toggleBtn.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
});
