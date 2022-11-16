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

// ------------------------- nav and arrow scroll animation ------------------------------
const main = document.querySelector("main");
const arrow = document.querySelector(".scroll-arrow");
const navLinkData = document.querySelectorAll("[data-action='nav-link']").forEach((navLink) =>
  navLink.addEventListener("click", (event) => {
    const link = event.target.dataset.link;
    console.log(link);
    let mobil_viewport = window.matchMedia("(max-width: 800px)");
    if (link === "about-me") {
      if (mobil_viewport.matches) {
        main.scrollTo({
          top: 600,
          left: 600,
          behavior: "smooth",
        });
      } else {
        main.scrollTo({
          top: 670,
          left: 670,
          behavior: "smooth",
        });
      }
    } else if (link === "work") {
      if (mobil_viewport.matches) {
        main.scrollTo({
          top: 1975,
          left: 1975,
          behavior: "smooth",
        });
      } else {
        main.scrollTo({
          top: 1470,
          left: 1470,
          behavior: "smooth",
        });
      }
    } else if (link === "contact") {
      if (mobil_viewport.matches) {
        main.scrollTo({
          top: 2350,
          left: 2350,
          behavior: "smooth",
        });
      } else {
        main.scrollTo({
          top: 2270,
          left: 2270,
          behavior: "smooth",
        });
      }
    } else if (link === "home") {
      if (mobil_viewport.matches) {
        main.scrollTo({
          top: 0,
          left: 0,
          behavior: "smooth",
        });
      } else {
        main.scrollTo({
          top: 0,
          left: 0,
          behavior: "smooth",
        });
      }
    }
  })
);

arrow.addEventListener("click", () => {
  let mobil_viewport = window.matchMedia("(max-width: 800px)");
  if (mobil_viewport.matches) {
    main.scrollTo({
      top: 600,
      left: 600,
      behavior: "smooth",
    });
  } else {
    main.scrollTo({
      top: 670,
      left: 670,
      behavior: "smooth",
    });
  }
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
    cursorImage.style.backgroundImage = `url(./images/${e.dataset.image}.webp)`;
  });
  e.addEventListener("mouseleave", () => {
    cursorImage.style.backgroundImage = "none";
  });
});
