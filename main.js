import "./style.scss";

// ------------------------- burger menu ------------------------------
const menuBtn = document.querySelector(".menu-btn");
const navbarLinks = document.querySelector(".navbar-links");
let menuOpen = false;

menuBtn.addEventListener("click", () => {
  if (!menuOpen) {
    menuBtn.classList.add("open");
    navbarLinks.classList.add("active");
    menuOpen = true;
  } else {
    menuBtn.classList.remove("open");
    navbarLinks.classList.remove("active");
    menuOpen = false;
  }
});

document.querySelectorAll(".navbar-links a").forEach((a) => {
  a.addEventListener("click", () => {
    menuBtn.classList.remove("open");
    navbarLinks.classList.remove("active");
    menuOpen = false;
  });
});

const arrow = document.querySelector(".scroll-arrow");
const aboutMePage = document.querySelector("#about-me");

arrow.addEventListener("click", scrollArrowDown);

function scrollArrowDown() {
  console.log("scroll event");
  aboutMePage.scrollTo({
    top: 450,
    left: 450,
    behavior: "smooth",
  });
}

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
    cursorImage.style.backgroundImage = `url(../images/${e.dataset.image}.png)`;
  });
  e.addEventListener("mouseleave", () => {
    cursorImage.style.backgroundImage = "none";
  });
});
