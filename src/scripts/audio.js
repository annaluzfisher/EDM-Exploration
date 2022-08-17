const house = "./music/house.mp3";
let techno = "./music/techno.wav";
let detroitTechno = "./music/The Belleville Three - live  Tomorrowland 2017 (Belgium)  22.07.2017.mp3";
const berlinTechno =
  "https://edmexploration-audiofiles.s3.us-west-1.amazonaws.com/music/Berlin-Techno-Kollektiv-Turmstrasse-Sorry-I-Am-Late.mp3";
const acidHouse =
  "https://soundcloud.com/scottleesnell/old-skool-classic-acid-house?si=7b796d013e00437eb9b80900ef4fa870&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing";
const AUDIOTRACKS = [house,techno,detroitTechno,berlinTechno]
//testing work around


let audio = new Audio();
audio.crossOrigin = "anonymous";
audio.src = techno;
audio.crossOrigin = "anonymous";
audio.loop ='true';
audio.controls = 'true';
document.getElementById('player').appendChild(audio);
const audioContext = new AudioContext();
const analyser = audioContext.createAnalyser();
const source = audioContext.createMediaElementSource(audio);
source.connect(analyser);
analyser.connect(audioContext.destination);


//destination is usually the speakers. will connect other things to thecontext like create gain

// const gainNode = audioContext.createGain();
// could use also new GainNode()
// track.connect(gainNode).connect(audioContext.destination);

// audioElement.addEventListener(
//   "click",
//   () => {
//     if (audioContext.state === "suspended") {
//       audioContext.resume();
//     }
//     //Key Point: If an AudioContext is created prior to the document receiving a user gesture, it will be created in the "suspended" state, and you will need to call resume() after a user gesture is received.
//     if (playButton.dataset.playing === "false") {
//       audioElement.play();
//       playButton.dataset.playing = "true";
//     } else if (playButton.dataset.playing === "true") {
//       audioElement.pause();
//       playButton.dataset.playing = "false";
//     }
//   },
//   false
// ); //captures bubbling. unsure if needed. false is default?

// audioElement.addEventListener(
//   "ended",
//   () => {
//     playButton.dataset.playing = "false";
//   },
//   false
// );
//again with the false...necessary for audio?.

// volumeBar.addEventListener("input", () => {
//   gainNode.gain.value = volumeBar.value;
// });


// let currentBuffer = null;

// const visualizeAudio = (url) => {
//   fetch(url)
//     .then((response) => response.arrayBuffer())
//     .then((arrayBuffer) => audioContext.decodeAudioData(arrayBuffer))
//     .then((audioBuffer) => console.log((audioBuffer.getChannelData())));
// };

// function visualize(audioBuffer) {}

function changeTrack(){
  audioElement.setAttribute("src", `${detroitTechno}`);
  audioContext.resume();
  audioElement.play();
  console.log('were in the function ');
}
export { changeTrack };