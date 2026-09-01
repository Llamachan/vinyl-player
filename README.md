# 🎵 Vinyl

A pastel-themed vinyl record player built with **HTML, CSS, and JavaScript**.

The project combines a vintage-inspired turntable interface with a functional local music player. Users can play, pause, skip tracks, control volume, mute the player, and seek through songs using the progress bar.

## ✨ Features

* 💿 Animated spinning vinyl record
* 🦾 Animated tonearm
* ▶️ Play / pause controls
* ⏮ Previous track
* ⏭ Next track
* 🔄 Automatic track progression
* 🎚️ Volume control
* 🔇 Mute / unmute
* ⏱️ Track progress and duration
* 🎵 Track number and metadata
* 📱 Responsive layout
* 🎨 Pastel vinyl-player aesthetic

## 🛠️ Built With

* **HTML5** — page structure and audio element
* **CSS3** — styling, animations, gradients, and responsive design
* **JavaScript** — audio controls, track management, progress tracking, and volume control

## 📁 Project Structure

```text
vinyl-player/
│
├── assets/
│   └── audio/
│       ├── song1.mp3
│       └── song2.mp3
│
├── index.html
├── style.css
├── script.js
└── README.md
```

## 🎧 How It Works

The player uses the HTML5 `<audio>` element to handle music playback.

JavaScript manages the current track and connects the player controls to the audio element.

```text
User Interaction
       ↓
JavaScript
       ↓
HTML5 Audio API
       ↓
Local MP3
       ↓
Player UI
```

The vinyl record and tonearm animations are controlled using CSS classes that are added and removed based on the audio's play/pause state.

## 🚀 Running the Project

Clone the repository:

```bash
git clone YOUR_REPOSITORY_URL
```

Navigate into the project:

```bash
cd vinyl-player
```

Open `index.html` in a browser.

No framework, package manager, or build process is required.

## 📚 What I Practiced

This project was created to practice:

* HTML structure
* CSS layouts and visual design
* CSS animations
* JavaScript DOM manipulation
* JavaScript event listeners
* HTML5 Audio API
* Managing application state
* Git branching
* Git commits
* GitHub pull requests

## 🔮 Future Improvements

Potential future additions include:

* Custom playlist management
* Shuffle and repeat modes
* Improved accessibility
* Keyboard controls
* More detailed turntable interactions
* Persistent playback settings

## 📄 License

This project is intended for educational and portfolio purposes.
