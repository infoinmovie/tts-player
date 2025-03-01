const button = document.getElementById("playPauseBtn");
let isPlaying = false;
const text = "Info in Movie News. Tom Hardy is once again displaying his prowess in the thrilling movie HAVOC, proving himself as one of Hollywood's toughest actors. Known for his intense and physical roles, he is prepared to draw viewers into a world filled with intrigue and violence. ";

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
