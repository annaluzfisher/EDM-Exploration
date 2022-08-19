import { makeNodes } from "./scripts/node";
import {
  startPage,
  button,
  toggleOverviewVisibility,
  startTheShow,
  bpmBar,
  bpmDiv,
} from "./scripts/util";

require("./scripts/audio");
import { playAudio, darude } from "./scripts/audio";

document.addEventListener("DOMContentLoaded", async () => {
  startPage();
  let data = await fetchA();
  makeNodes(data);
  
});

button.addEventListener("click", () => {
    playAudio(darude.path);
  toggleOverviewVisibility();
  setTimeout(startTheShow, 3000);
});

const fetchA = async function () {
  const getEdmGenres = await fetch("data/data.json");
  let data = await getEdmGenres.json().catch((err) => console.log(err));
  return data;
};

window.addEventListener("click", (e) => {
  console.log(e.target);
});

bpmBar.addEventListener("input", function () {
  let num = document.getElementById("bpm-number");
  num.innerHTML = bpmBar.value;
  setBpm(bpmBar.value);
});

function setBpm(num) {
  let newSpeed = (60 / num).toFixed(2);
  bpmDiv.style["animation-duration"] = newSpeed + "s";
}
