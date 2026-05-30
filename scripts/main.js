const bgm = document.getElementById("bgm");
let isPlaying = false;

function toggleMusic() {
  if (!isPlaying) {
    bgm.play();
    document.querySelector(".music-btn-fixed").textContent = "⏸ Pause Music";
  } else {
    bgm.pause();
    document.querySelector(".music-btn-fixed").textContent = "▶ Play Music";
  }
  isPlaying = !isPlaying;
}

function changeMessage() {
  document.getElementById("message").textContent = "look down then!";
}

function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}