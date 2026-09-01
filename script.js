const progress = document.getElementById("progress");

const currentTime = document.getElementById("current-time");

const duration = document.getElementById("duration");
const audio = document.getElementById("audio");

const playButton = document.getElementById("play");
const previousButton = document.getElementById("previous");
const nextButton = document.getElementById("next");

const record = document.querySelector(".record");
const tonearm = document.querySelector(".tonearm");

const songs = [
    {
        title: "Zzzz",
        artist: "Jazz Study",
        file: "assets/audio/alex-morgan-jazz-study-study-music-564266.mp3"
    },
    {
        title: "Meow",
        artist: "Cafe Lofi",
        file: "assets/audio/zephiramusic-cafe-lofi-591791.mp3"
    }
];

let currentSong = 0;

function loadSong(song) {
    audio.src = song.file;

    document.querySelector(".track-info h2").textContent = song.title;

    document.querySelector(".track-info p:last-child").textContent =
        song.artist;
}

loadSong(songs[currentSong]);

playButton.addEventListener("click", () => {

    if (audio.paused) {

        audio.play();

        playButton.textContent = "⏸";

        record.classList.add("playing");
        tonearm.classList.add("playing");

    } else {

        audio.pause();

        playButton.textContent = "▶";

        record.classList.remove("playing");
        tonearm.classList.remove("playing");

    }

});

nextButton.addEventListener("click", () => {

    currentSong++;

    if (currentSong >= songs.length) {
        currentSong = 0;
    }

    loadSong(songs[currentSong]);

    audio.play();

    playButton.textContent = "⏸";

    record.classList.add("playing");
    tonearm.classList.add("playing");

});

previousButton.addEventListener("click", () => {

    currentSong--;

    if (currentSong < 0) {
        currentSong = songs.length - 1;
    }

    loadSong(songs[currentSong]);

    audio.play();

    playButton.textContent = "⏸";

    record.classList.add("playing");
    tonearm.classList.add("playing");

});

audio.addEventListener("ended", () => {

    currentSong++;

    if (currentSong >= songs.length) {
        currentSong = 0;
    }

    loadSong(songs[currentSong]);

    audio.play();

    playButton.textContent = "⏸";

    record.classList.add("playing");
    tonearm.classList.add("playing");

});

audio.addEventListener("loadedmetadata", () => {

    progress.max = audio.duration;

    duration.textContent = formatTime(audio.duration);

});

audio.addEventListener("timeupdate", () => {

    progress.value = audio.currentTime;

    currentTime.textContent = formatTime(audio.currentTime);

});

progress.addEventListener("input", () => {

    audio.currentTime = progress.value;

});

function formatTime(seconds) {

    const minutes = Math.floor(seconds / 60);

    const remainingSeconds = Math.floor(seconds % 60);

    return `${minutes}:${remainingSeconds
        .toString()
        .padStart(2, "0")}`;

}

audio.addEventListener("play", () => {

    record.classList.add("playing");
    tonearm.classList.add("playing");

    playButton.textContent = "⏸";

});

audio.addEventListener("pause", () => {

    record.classList.remove("playing");
    tonearm.classList.remove("playing");

    playButton.textContent = "▶";

});