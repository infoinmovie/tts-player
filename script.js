const playPauseBtn = document.getElementById('playPauseBtn');
const textToRead = document.getElementById('text').innerText;
let isPlaying = false;
let utterance = new SpeechSynthesisUtterance(textToRead);

utterance.lang = 'en-US'; // Change to 'id-ID' for Indonesian voice

playPauseBtn.addEventListener('click', function () {
    if (!isPlaying) {
        speechSynthesis.speak(utterance);
        playPauseBtn.textContent = '⏸ Pause';
        isPlaying = true;
    } else {
        speechSynthesis.cancel();
        playPauseBtn.textContent = '▶ Play';
        isPlaying = false;
    }
});
