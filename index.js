// REFERENCE CODE: https://www.youtube.com/watch?v=c6aGVrjE974
const candidateList = [
  {
    image: "./assets/images/prefeito-02.png",
    name: "ANTONIO JUSTINO",
    num: [4, 0],
    candidate: "Prefeito",
  },
  {
    image: "./assets/images/VEREADORES/DAMÁSIO.png",
    name: "DAMASIO BERTO",
    num: [4, 0, 0, 0, 0],
    candidate: "Vereador(a)",
  },
  {
    image: "./assets/images/VEREADORES/DENILSON.png",
    name: "DENILSON ALVES",
    num: [4, 0, 1, 2, 3],
    candidate: "Vereador(a)",
  },
  {
    image: "./assets/images/VEREADORES/EDIVALDO.png",
    name: "EDIVALDO ROCHA",
    num: [5, 5, 9, 9, 9],
    candidate: "Vereador(a)",
  },
  {
    image: "./assets/images/VEREADORES/GRACILENE.png",
    name: "GRACILENE",
    num: [4, 0, 7, 8, 9],
    candidate: "Vereador(a)",
  },
  {
    image: "./assets/images/VEREADORES/LIZ-VITORIA.png",
    name: "LIZ VITORIA",
    num: [5, 5, 7, 7, 7],
    candidate: "Vereador(a)",
  },
  {
    image: "./assets/images/VEREADORES/LUIZ-ALVES.png",
    name: "LUIZ ALVES",
    num: [4, 0, 6, 7, 8],
    candidate: "Vereador(a)",
  },
  {
    image: "./assets/images/VEREADORES/NILMA.png",
    name: "NILMA DE JOSELIO",
    num: [4, 0, 5, 5, 5],
    candidate: "Vereador(a)",
  },
  {
    image: "./assets/images/VEREADORES/RHUAN.png",
    name: "RHUAN",
    num: [4, 0, 1, 1, 1],
    candidate: "Vereador(a)",
  },
  {
    image: "./assets/images/VEREADORES/ROGERIO-MOREIRA.png",
    name: "ROGERIO MOREIRA",
    num: [4, 0, 3, 3, 3],
    candidate: "Vereador(a)",
  },
  {
    image: "./assets/images/VEREADORES/ROSINHA.png",
    name: "ROSINHA BOLACHINHA",
    num: [4, 0, 8, 8, 8],
    candidate: "Vereador(a)",
  },
  {
    image: "./assets/images/VEREADORES/RUZIA.png",
    name: "RUZIA BORGES",
    num: [4, 0, 4, 4, 4],
    candidate: "Vereador(a)",
  },
  {
    image: "./assets/images/VEREADORES/VAN-MACENA.png",
    name: "VAN MACENA",
    num: [4, 0, 2, 2, 2],
    candidate: "Vereador(a)",
  },
  {
    image: "./assets/images/VEREADORES/VERIENE-VILARIM.png",
    name: "VERIENE VILARIM",
    num: [5, 5, 6, 6, 6],
    candidate: "Vereador(a)",
  },
];

// main.js

let installPrompt = null;
const installButton = document.querySelector("#install");

window.addEventListener("beforeinstallprompt", (event) => {
  event.preventDefault();
  installPrompt = event;
  installButton.removeAttribute("hidden");
});

installButton.addEventListener("click", async () => {
  if (!installPrompt) {
    return;
  }
  const result = await installPrompt.prompt();
  console.log(`Install prompt was: ${result.outcome}`);
  disableInAppInstallPrompt();
});

function disableInAppInstallPrompt() {
  installPrompt = null;
  installButton.setAttribute("hidden", "");
}

const candidates = document.getElementById("candidates");

const loadCandidate = () => {
  candidateList.map((item) => {
    const numFinal = item.num.map((item) => `<span>${item}</span>`).toString();

    return (candidates.innerHTML += `
        <div class="card-saint">
            <div class="data-candidate">
                <div class="photo">
                    <img src="${item.image}" alt="Foto do Candidato">
                </div>
                <div class="data">
                    <div class="d-flex flex-column gap-2">
                        <div class="data-title">
                            ${item.name} <small> ${item.candidate}</small>
                        </div>
                        <div class="data-number">
                           ${numFinal.replaceAll(",", "")}
                        </div>
                        <div class="data-confirm">
                            <button class="btn btn-success">CONFIRMAR</button>
                        </div>
                    </div>
                    <div class="d-flex flex-column gap-2">
                        <div class="data-cnpj">
                            <small>Coligação A FORÇA DO TRABALHO (PSB - PSD) <br> CNPJ:
                                56.627.450/0001-63</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `);
  });
};

loadCandidate();

// MUSIC PLAY

const musicContainer = document.getElementById("music-container");
const playBtn = document.getElementById("play");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

const audio = document.getElementById("audio");
const progress = document.getElementById("progress");
const progressContainer = document.getElementById("progress-container");
const title = document.getElementById("title");
const cover = document.getElementById("cover");

// Song titles
const songs = [
  "Música 001",
  "Música 002",
  "Música 003",
  "Música 004",
  "Música 005",
  "Música 006",
  "Música 007",
  "Música 008",
  "Música 009",
  "Música 010",
  "Música 011",
];

// Keep track of song
let songIndex = 0;

// Initially load song details into DOM
loadSong(songs[songIndex]);

// Update song details
function loadSong(song) {
  title.innerText = song;
  audio.src = `assets/music/${song}.webm`;
  cover.src = `assets/images/music/cover.png`;
  // cover.src = `assets/images/music/${song}.png`;
}

// Play song
function playSong() {
  musicContainer.classList.add("play");
  playBtn.querySelector("i.fas").classList.remove("fa-play");
  playBtn.querySelector("i.fas").classList.add("fa-pause");

  audio.play();
}

// Pause song
function pauseSong() {
  musicContainer.classList.remove("play");
  playBtn.querySelector("i.fas").classList.add("fa-play");
  playBtn.querySelector("i.fas").classList.remove("fa-pause");

  audio.pause();
}

// Previous song
function prevSong() {
  songIndex--;

  if (songIndex < 0) {
    songIndex = songs.length - 1;
  }

  loadSong(songs[songIndex]);

  playSong();
}

// Next song
function nextSong() {
  songIndex++;

  if (songIndex > songs.length - 1) {
    songIndex = 0;
  }

  loadSong(songs[songIndex]);

  playSong();
}

// Update progress bar
function updateProgress(e) {
  const { duration, currentTime } = e.srcElement;
  const progressPercent = (currentTime / duration) * 100;
  progress.style.width = `${progressPercent}%`;
}

// Set progress bar
function setProgress(e) {
  const width = this.clientWidth;
  const clickX = e.offsetX;
  const duration = audio.duration;

  audio.currentTime = (clickX / width) * duration;
}

// Event listeners
playBtn.addEventListener("click", () => {
  const isPlaying = musicContainer.classList.contains("play");

  if (isPlaying) {
    pauseSong();
  } else {
    playSong();
  }
});

// Change song
prevBtn.addEventListener("click", prevSong);
nextBtn.addEventListener("click", nextSong);

// Time/song update
audio.addEventListener("timeupdate", updateProgress);

// Click on progress bar
progressContainer.addEventListener("click", setProgress);

// Song ends
audio.addEventListener("ended", nextSong);
