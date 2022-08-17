const houseUrl = "./music/house.mp3";
let technoUrl = "./music/techno.wav";
let detroitTechno =
  "./music/The Belleville Three - live  Tomorrowland 2017 (Belgium)  22.07.2017.mp3";

let testAudio = [houseUrl,technoUrl,detroitTechno]


const audioContext = new AudioContext();
const audioElement = document.querySelector("audio");
audioElement.setAttribute("src", `${houseUrl}`);
const track = audioContext.createMediaElementSource(audioElement);
//grabbing the source of the track and attaching it to the context
//like setting the context for canvas?
const playButton = document.getElementById("play-button");
const volumeBar = document.getElementById("bar");


//destination is usually the speakers. will connect other things to thecontext like create gain

const gainNode = audioContext.createGain();
//could use also new GainNode()
track.connect(gainNode).connect(audioContext.destination);

playButton.addEventListener(
  "click",
  () => {
    if (audioContext.state === "suspended") {
      audioContext.resume();
    }
    //Key Point: If an AudioContext is created prior to the document receiving a user gesture, it will be created in the "suspended" state, and you will need to call resume() after a user gesture is received.
    if (playButton.dataset.playing === "false") {
      audioElement.play();
      playButton.dataset.playing = "true";
    } else if (playButton.dataset.playing === "true") {
      audioElement.pause();
      playButton.dataset.playing = "false";
    }
  },
  false
); //captures bubbling. unsure if needed. false is default?

audioElement.addEventListener(
  "ended",
  () => {
    playButton.dataset.playing = "false";
  },
  false
);
//again with the false...necessary for audio?.

volumeBar.addEventListener("input", () => {
  gainNode.gain.value = volumeBar.value;
  console.log(volumeBar.value);
  console.log(gainNode.gain.value);
});


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