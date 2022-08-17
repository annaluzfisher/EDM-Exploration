import { makeNodes } from "./scripts/node";
import {
  startPage,
  button,
  data,
  toggleOverviewVisibility,
  startTheShow
} from "./scripts/util";

require('./scripts/background');
require('./scripts/audio');
// import { myFetch } from './scripts/napster';

document.addEventListener("DOMContentLoaded", () => {
  startPage();
  makeNodes(data);
  toggleOverviewVisibility()

});


button.addEventListener("click", () => {
  toggleOverviewVisibility();
  setTimeout(startTheShow,4000);
});




//QUESTIONS


//text in files to later be rendered in html for descriptions
//using the fetched data from the api. remember you couldn't even use your local file? 

// help with the icons!!! 
//the children... ask about appending and if that is standards. should that be a node class function? when does it happen if the nodes are all generated at once sort of. aaaaaaaaah!!!
// github questions

