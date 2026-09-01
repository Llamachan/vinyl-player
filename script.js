const progress = document.getElementById("progress");

const currentTime = document.getElementById("current-time");

const duration = document.getElementById("duration");
const audio = document.getElementById("audio");

const playButton = document.getElementById("play");
const previousButton = document.getElementById("previous");
const nextButton = document.getElementById("next");

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

    } else {

        audio.pause();

        playButton.textContent = "▶";

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

});

previousButton.addEventListener("click", () => {

    currentSong--;

    if (currentSong < 0) {
        currentSong = songs.length - 1;
    }

    loadSong(songs[currentSong]);

    audio.play();

    playButton.textContent = "⏸";

});

audio.addEventListener("ended", () => {

    currentSong++;

    if (currentSong >= songs.length) {
        currentSong = 0;
    }

    loadSong(songs[currentSong]);

    audio.play();

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