import "./style.scss";
import "https://flackr.github.io/scroll-timeline/dist/scroll-timeline.js";

const toggleBtn = document.querySelector(".toggle-btn");

const navbarLinks = document.querySelector(".navbar-links");

toggleBtn.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
});

// ------------------------- image on hover effect ------------------------------
let cursorImage = document.querySelector(".cursorImage");

document.addEventListener("mousemove", function (e) {
  let x = e.clientX;
  let y = e.clientY;
  cursorImage.style.left = x + "px";
  cursorImage.style.top = y + "px";
});

document.querySelectorAll(".marquee").forEach((e, index) => {
  e.addEventListener("mouseover", function (a) {
    cursorImage.style.display = "block";
    // cursorImage.style.backgroundImage = `url("https://picsum.photos/id/${index * 12}/300/260")`;
    cursorImage.style.backgroundImage = `url(images/${e.dataset.image}.png)`;
  });
  e.addEventListener("mouseleave", () => {
    cursorImage.style.backgroundImage = "none";
  });
});
