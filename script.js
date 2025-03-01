const button = document.getElementById("playPauseBtn");
let isPlaying = false;
const text = "Info in Movie News. Tom Hardy is once again displaying his prowess in the thrilling movie HAVOC, proving himself as one of Hollywood's toughest actors. Known for his intense and physical roles, he is prepared to draw viewers into a world filled with intrigue and violence. According to The Hollywood Reporter, HAVOC follows the story of Walker (played by Hardy), a detective who must survive pursuit from criminal gangs, corrupt politicians, and treasonous police following a chaotic drug deal. In his effort to rescue a politician's child, Walker fights against not just enemies, but also faces his dark past.";

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
