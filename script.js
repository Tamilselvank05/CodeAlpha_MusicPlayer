// script.js
const audio = document.getElementById('audio');
const playPauseButton = document.getElementById('play-pause');
const fileInput = document.getElementById('file-input');
const songTitle = document.getElementById('song-title');

let isPlaying = false;

function playSong() {
    isPlaying = true;
    audio.play();
    playPauseButton.textContent = 'Pause';
}

function pauseSong() {
    isPlaying = false;
    audio.pause();
    playPauseButton.textContent = 'Play';
}

function togglePlayPause() {
    if (isPlaying) {
        pauseSong();
    } else {
        playSong();
    }
}

function loadFile(event) {
    const file = event.target.files[0];
    
    if (file) {
        // Check if the file is an MP3
        const fileType = file.type;
        if (fileType !== 'audio/mpeg') {
            alert('Please select an MP3 file.');
            fileInput.value = ''; // Clear the input so user can select another file
            return;
        }
        
        const fileURL = URL.createObjectURL(file);
        audio.src = fileURL;
        songTitle.textContent = file.name;
        playPauseButton.disabled = false;
        playPauseButton.textContent = 'Play';
    }
}

playPauseButton.addEventListener('click', togglePlayPause);
fileInput.addEventListener('change', loadFile);
