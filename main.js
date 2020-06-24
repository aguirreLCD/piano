// get all keys
const keys = document.querySelectorAll(".key");

// play notes
function playNote(event) { 
  // keycode
  let audioKeyCode = getKeyCode(event);
  console.log(audioKeyCode);
  
  
  // typed or pressed key
  const key = document.querySelector(`.key[data-key = "${audioKeyCode}"]`);
  // console.log(key);
  
  
  // if key exists
  const cantFoundAnyKey = !key;
  if(cantFoundAnyKey) {
    return;
  };

  // add / remove class - aparecer quando esta tocando
  addPlayingClass(key);
  
  // play audio
  playAudio(audioKeyCode); 
};

function addPlayingClass(key) {
  key.classList.add("playing");
};

function removePlayingClass(event) {
  event.target.classList.remove("playing");
};

function getKeyCode(event) {
  let keyCode;
  const isKeyboard = event.type === "keydown";

  if(isKeyboard) {
    keyCode = event.keyCode;
  } else {
    keyCode = event.target.dataset.key;
  };

  return keyCode;

// console.log(event.type);
// console.log(keyCode);
};

function playAudio(audioKeyCode) {
  const audio = document.querySelector(`audio[data-key = "${audioKeyCode}"]`);
  // console.log(audio);
  audio.currentTime = 0;
  audio.play();
};

function registerEvents() {
  // click with mouse
  keys.forEach( function(key) {
    key.addEventListener("click", playNote);
    key.addEventListener("transitionend", removePlayingClass);
  });
  
  // keyboard type
  window.addEventListener("keydown", playNote);
};

window.addEventListener("load", registerEvents);
