import { makeNodes, clearThePage, clearTreeBelow, toggleBubbles } from "./scripts/node";
import {
  startPage,
  button,
  toggleOverviewVisibility,
  startTheShow,
  bpmBar,
  bpmDiv,
  x,
  bubbles,
} from "./scripts/util";

// require("./scripts/audio");
import { playAudio, darude } from "./scripts/audio";

document.addEventListener("DOMContentLoaded", async () => {
  startPage();
  let data = await fetchA();
  makeNodes(data);
});

button.addEventListener("click", () => {
  playAudio(darude.path);
  toggleOverviewVisibility();
  setTimeout(startTheShow, 2300);
});

const fetchA = async function () {
  const getEdmGenres = await fetch("data/data.json");
  let data = await getEdmGenres.json().catch((err) => console.log(err));
  return data;
};

// window.addEventListener("click", (e) => {
//   console.log(e.target);
// });

bpmBar.addEventListener("input", function () {
  let num = document.getElementById("bpm-number");
  num.innerHTML = bpmBar.value;
  setBpm(bpmBar.value);
});

function setBpm(num) {
  let newSpeed = (60 / num).toFixed(2);
  bpmDiv.style["animation-duration"] = newSpeed + "s";
}

x.addEventListener("click", () => {
  for (let node of bubbles) {
    if (node.contentVisible()){
       node.toggleContentVisibility();
    setTimeout(() => {
      clearTreeBelow(node);
      clearThePage();
      toggleBubbles(node.siblings);
      node.toggleBubbleVisibility();
    }, 900);
  }
  break;
  }
});
