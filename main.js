import "./style.scss";
import "https://flackr.github.io/scroll-timeline/dist/scroll-timeline.js";

const progressbar = document.querySelector(".progressbar");

const toggleBtn = document.querySelector(".toggle-btn");

const navbarLinks = document.querySelector(".navbar-links");

const header = document.querySelector("#header");

toggleBtn.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
});

// borrowed code from css-tricks.com
const myScrollTimeline = new ScrollTimeline({
  source: document.scrollingElement,
  orientation: "block",
  scrollOffsets: [new CSSUnitValue(0, "percent"), new CSSUnitValue(100, "percent")],
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
