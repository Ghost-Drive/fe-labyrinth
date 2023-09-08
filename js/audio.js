const audioElement = document.createElement('audio');

audioElement.src = 'assets/audio/sound-loop.ogg';
audioElement.controls = false;
audioElement.loop = true;

let isAudioPlaying = false;
const playButton = document.getElementById('equalizer');
const audioEqualizer = document.getElementsByClassName('audio-container');

function clickHandler() {
  audioEqualizer[0].classList.toggle('audioOff');
  if (isAudioPlaying) {
    audioElement.pause();
    isAudioPlaying = false;
  } else if (!isAudioPlaying) {
    audioElement.play();
    isAudioPlaying = true;
  }
}
function firstClickHandler() {
  clickHandler();
  document.removeEventListener('click', firstClickHandler);
}

document.addEventListener('click', firstClickHandler);

playButton.addEventListener('click', clickHandler);