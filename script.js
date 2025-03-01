const button = document.getElementById("playPauseBtn");
let isPlaying = false;
const text = "After years of delays and anticipation, A Minecraft Movie is finally set to hit theaters on April 4, 2025. This live-action adaptation of the world’s best-selling game promises an epic adventure with a star-studded cast and a fresh creative approach.!";

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
