export default function playAudio(url) {
  const audio = new Audio(url);
  audio.volume = 1;
  audio.play();
}
