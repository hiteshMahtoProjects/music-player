const image = document.querySelector("img");
const title = document.getElementById("title");
const artist = document.getElementById("artist");
const progressContainer = document.getElementById("progress-container");
const progress = document.getElementById("progress");
// const duration = document.getElementById("duration");
const music = document.querySelector("audio");
const previousBtn = document.getElementById("previous");
const playBtn = document.getElementById("play");
const nextBtn = document.getElementById("next");

// Music
const song = [
  {
    name: "kesariya",
    displayName: "Kesariya - Brahmāstra",
    artist: "Arijit Singh",
  },
  {
    name: "until",
    displayName: "Until I Found You",
    artist: "Stephen Sanchez",
  },
  {
    name: "saath",
    displayName: "Agar Tum Saath Ho",
    artist: "Alka Yagnik & Arijit Singh",
  },
  {
    name: "jhumka",
    displayName: "What JHUMKA?",
    artist: "Arijit Singh & Jonita Gandhi",
  },
  {
    name: "flower",
    displayName: "Flowers",
    artist: "Miley Cyrus",
  },
  {
    name: "shut-up",
    displayName: "Shut Up",
    artist: "Alan Walker & Upsahl",
  },
];
// Check if Playing
let isPlaying = false;

// Play
function playSong() {
  isPlaying = true;
  playBtn.classList.replace("fa-play", "fa-pause");
  playBtn.setAttribute("title", "Pause");
  music.play();
}

// Pause
function pauseSong() {
  isPlaying = false;
  playBtn.classList.replace("fa-pause", "fa-play");
  playBtn.setAttribute("title", "Play");
  music.pause();
}

// Play or Pause Event Listener
playBtn.addEventListener("click", () => (isPlaying ? pauseSong() : playSong()));

// Update DOM
function loadSong(song) {
  title.textContent = song.displayName;
  artist.textContent = song.artist;
  music.src = `${song.name}.mp3`;
  image.src = `${song.name}.jpg`;
}

// Current Song
let songIndex = 0;

// Previous Song
function previousSong() {
  songIndex--;
  if (songIndex < 0) songIndex = song.length - 1;
  loadSong(song[songIndex]);
  playSong();
}

// Next Song
function nextSong() {
  songIndex++;
  if (songIndex > song.length - 1) songIndex = 0;
  loadSong(song[songIndex]);
  playSong();
}

// On Load - Select first song
loadSong(song[songIndex]);

// Update Progress Bar and time
function updateProgressBar(e) {
  if (isPlaying) console.log(e);
}

// Event Listener
previousBtn.addEventListener("click", previousSong);
nextBtn.addEventListener("click", nextSong);
music.addEventListener("timeupdate", updateProgressBar);
