const house = {genre:'house', path: "./music/house.mp3"};

const detroitTechno = {genre: "detroitTechno",path : "./music/The Belleville Three - live  Tomorrowland 2017 (Belgium)  22.07.2017.mp3"};

const futureHouse = {genre:'futureHouse',path:"music/Thomas Hayden - Universe.mp3"};
const psyTrance = {
  genre: "psyTrance",
  path: "music/Teknophil (Psk) Mix 4 Decks  Psytrance Juin 2011.mp3",
};
const speedcore = {
  genre: "speedcore",
  path: "music/01_SPaCeyALieN_Fuck_Your_Faketone_Intro.mp3",
};
const minimalTechno = {genre: 'minimalTechno', path: ""}
const AUDIOTRACKS = [house, detroitTechno, futureHouse,psyTrance,speedcore];
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
    let genre = AUDIOTRACKS[i].genre
    console.log('audio',audio,'genre',genre)
    if (audio === genre) {
      swapIt(AUDIOTRACKS[i].path);
      break;
    } else {
     resultMessage.innerText="No Audio Available...yet!";
      resultMessage.classList.remove("hidden");
      setTimeout(() => resultMessage.classList.add("hidden"), 4000);
    }
  }
}

function swapIt(path) {
  console.log(path);
  document.getElementById("player").innerHTML="";
  playAudio(path);
   resultMessage.innerText = "Click Play on the Player";
   resultMessage.classList.remove('hidden');
   setTimeout(() => resultMessage.classList.add("hidden"),4000);
}


const waveform = document.getElementById("waveform");
waveform.addEventListener("click", (e) => changeTrack(e));

export { playAudio, house };
