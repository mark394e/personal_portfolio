import "./style.scss";
import "https://flackr.github.io/scroll-timeline/dist/scroll-timeline.js";

const progressbar = document.querySelector(".progressbar");

const toggleBtn = document.querySelector(".toggle-btn");

const navbarLinks = document.querySelector(".navbar-links");

toggleBtn.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
});

// borrowed code from css-tricks.com
const myScrollTimeline = new ScrollTimeline({
  source: document.scrollingElement,
  orientation: "block",
  scrollOffsets: [new CSSUnitValue(0, "vw"), new CSSUnitValue(100, "vw")],
});

const properties2 = {
  duration: 1,
  fill: "forwards",
  timeline: myScrollTimeline,
};

const keyframes2 = [
  { backgroundColor: "#f7620c", transform: "scaleX(0)" },
  { backgroundColor: "#f7620c", transform: "scaleX(1.001)" },
];
// ------------------------- end of borrowed code ------------------------------

// adding animation to progressbar
const progress = progressbar.animate(keyframes2, properties2);

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
