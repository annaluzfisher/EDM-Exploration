const house = {genre:'house', path: "./music/house.mp3"};
let techno = "./music/techno.wav";
let detroitTechno =
  "./music/The Belleville Three - live  Tomorrowland 2017 (Belgium)  22.07.2017.mp3";
// const berlinTechno =
// "https://edmexploration-audiofiles.s3.us-west-1.amazonaws.com/music/Berlin-Techno-Kollektiv-Turmstrasse-Sorry-I-Am-Late.mp3";
// const acidHouse =
// "https://soundcloud.com/scottleesnell/old-skool-classic-acid-house?si=7b796d013e00437eb9b80900ef4fa870&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing";
const futureHouse = {genre:'futureHouse',path:"music/Thomas Hayden - Universe.mp3"};
const psyTrance = {
  genre: "psyTrance",
  path: "music/Teknophil (Psk) Mix 4 Decks  Psytrance Juin 2011.mp3",
};
const AUDIOTRACKS = [house, techno, detroitTechno, futureHouse,psyTrance];
//testing work around
const resultMessage = document.getElementById('result');

function playAudio(pathVariable) {
  let audio = new Audio();
  audio.crossOrigin = "anonymous";
  audio.src = pathVariable;
  audio.crossOrigin = "anonymous";
  audio.loop = "true";
  audio.controls = "true";
  document.getElementById("player").appendChild(audio);
  const audioContext = new AudioContext();
  const analyser = audioContext.createAnalyser();
  const source = audioContext.createMediaElementSource(audio);
  source.connect(analyser);
  analyser.connect(audioContext.destination);
}



function changeTrack(e) {
  for (let i = 0; i < AUDIOTRACKS.length; i++) {
   let audio = e.target.dataset.audio;
    let genre = AUDIOTRACKS[3].genre
    if (audio === genre) {
      swapIt(AUDIOTRACKS[3].path);
    } else {
     resultMessage.innerText="No Audio Available...yet!";
      resultMessage.classList.remove("hidden");
      setTimeout(() => resultMessage.classList.add("hidden"), 4000);
    }
  }
}

function swapIt(path) {
  document.getElementById("player").innerHTML="";
  playAudio(path);
   resultMessage.innerText = "Click Play on the Player";
   resultMessage.classList.remove('hidden');
   setTimeout(() => resultMessage.classList.add("hidden"),4000);
}


const waveform = document.getElementById("waveform");
waveform.addEventListener("click", (e) => changeTrack(e));
// function changeTrack(track) {
//   audioElement.setAttribute("src", `${detroitTechno}`);
//   audioContext.resume();
//   audioElement.play();
//   console.log("were in the function ");
// }
export { playAudio, house };
