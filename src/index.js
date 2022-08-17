import { makeNodes } from "./scripts/node";
import {
  startPage,
  button,
  toggleOverviewVisibility,
  startTheShow,
  bpmBar
} from "./scripts/util";

require('./scripts/background');
require('./scripts/audio');
import { playAudio , house} from './scripts/audio';

document.addEventListener("DOMContentLoaded", async () => {
  startPage();
  let data = await fetchA();
  makeNodes(data);
  toggleOverviewVisibility()
  startTheShow();
  playAudio(house.path);
  // createAudioSource(AUDIOTRACKS[0]);
});


button.addEventListener("click", () => {
  toggleOverviewVisibility();
  setTimeout(startTheShow,4000);
});

const fetchA = async function () {
  const getEdmGenres = await fetch("data/data.json");
  let data = await getEdmGenres.json().catch((err) => console.log(err));
  return data;
};

window.addEventListener('click', (e) => {
  console.log(e.target);
})

bpmBar.addEventListener('input', function (){
 let num =  document.getElementById("bpm-number");
 num.innerHTML = bpmBar.value;
 })
// document.addEventListener('keydown',changeTrack);

// consider a rails api. free static server. drag and drop into public folder
// heroku create git push