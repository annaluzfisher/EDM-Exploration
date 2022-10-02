// logic for handling drop down menu, overview show/hide, link clicks
//place to store variables used all over

const data = require("../../data/data.json");
const mainContent = document.getElementById("main-content");
const overview = document.getElementById("overview");
const thePage = document.getElementById("the-page");
const dots = document.getElementById("dots");
const tree = document.getElementById("tree");
const button = document.getElementById("button");
const innerContentBox = document.getElementById("inner-content-box");
const contentBox = document.getElementById("content-box");
const hiddenSpace = document.getElementById("hidden-space");
const bpmBar = document.getElementById('bpm-bar');
const bpmDiv = document.getElementById('bpm');
 const root = document.querySelector(":root");
const x = document.getElementById("x");


let bubbles = [];

const startPage = function () {
  thePage.classList.add("overlay");
  overview.classList.add("visible");
};

const toggleOverviewVisibility = function () {
  overview.classList.toggle("hidden");
  thePage.style.opacity = 1;
};

function startTheShow() {
  let root = bubbles[0];
  root.toggleBubbleVisibility();
}


// function updateBpm (){
//    let num = document.getElementById("bpm-number");
//    num.innerHTML = bpmBar.value;
// }

export {
  hiddenSpace,
  startTheShow,
  data,
  bubbles,
  innerContentBox,
  contentBox,
  button,
  tree,
  mainContent,
  overview,
  thePage,
  dots,
  startPage,
  toggleOverviewVisibility,
  bpmBar,
  bpmDiv,
  root,
  x
};
