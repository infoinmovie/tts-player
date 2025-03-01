const button = document.getElementById("playPauseBtn");
let isPlaying = false;
const text = "This is a sample text-to-speech audio. Welcome to our article!";

// Create speech synthesis
const speech = new SpeechSynthesisUtterance(text);
speech.rate = 1.0;
speech.pitch = 1.0;
speech.lang = "en-US";

button.addEventListener("click", function() {
    if (!isPlaying) {
        speechSynthesis.speak(speech);
        button.classList.add("pause");
    } else {
        speechSynthesis.cancel();
        button.classList.remove("pause");
    }
    isPlaying = !isPlaying;
});
