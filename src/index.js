import { makeNodes } from "./scripts/node";
import {
  startPage,
  button,
  toggleOverviewVisibility,
  startTheShow
} from "./scripts/util";

require('./scripts/background');
require('./scripts/audio');


document.addEventListener("DOMContentLoaded", async () => {
  startPage();
  let data = await fetchA();
  makeNodes(data);
  toggleOverviewVisibility()
  startTheShow();
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


