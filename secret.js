const word = document.getElementById('magicWord');
const gifContainer = document.getElementById('gifContainer');
const gifImage = document.getElementById('magicGif');
const audio = document.getElementById('audiogif');

const gifAudioPairs = [
  { gif: 'gif1.gif', sound: 'audio1.mp3' },
  { gif: 'gif2.gif', sound: 'audio2.mp3' },
  { gif: 'gif3.gif', sound: 'audio3.mp3' },
  { gif: 'gif4.gif', sound: 'audio4.mp3' },
  { gif: 'gif5.gif', sound: 'audio5.mp3' }
];

let tapCount = 0;
let lastTapTime = 0;

word.addEventListener('click', () => {
  const currentTime = new Date().getTime();

  if (currentTime - lastTapTime > 1000) {
    tapCount = 0;
  }

  lastTapTime = currentTime;
  tapCount++;

  if (tapCount === 5) {
    const random = gifAudioPairs[Math.floor(Math.random() * gifAudioPairs.length)];

    // Show GIF (force reload)
    gifImage.src = '';
    setTimeout(() => {
      gifImage.src = random.gif;
    }, 10);
    gifContainer.style.display = 'block';

    // Set and play audio
    audio.pause();
    audio.src = random.sound;
    audio.currentTime = 0;
    audio.play().catch(e => console.warn('Audio autoplay blocked:', e));

    // Hide GIF and stop audio after 3s
    setTimeout(() => {
      gifContainer.style.display = 'none';
      audio.pause();
    }, 1900);

    tapCount = 0;
  }
});