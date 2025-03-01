document.addEventListener("DOMContentLoaded", function () {
    let button = document.getElementById("playPauseBtn");
    let synth = window.speechSynthesis;
    let utterance;
    let isPaused = false;
    let lastPosition = 0;
    let articleText = document.getElementById("blog-content").innerText;

    function playTTS() {
        utterance = new SpeechSynthesisUtterance(articleText.substring(lastPosition));
        utterance.lang = "en-US"; // Ubah ke "id-ID" untuk bahasa Indonesia
        
        utterance.onboundary = function (event) {
            lastPosition += event.charIndex; // Menyimpan posisi terakhir sebelum pause
        };

        utterance.onend = function () {
            button.innerHTML = "▶ Listen";
            lastPosition = 0; // Reset setelah selesai
            isPaused = false;
        };

        synth.speak(utterance);
        button.innerHTML = "⏸ Pause";
        isPaused = false;
    }

    button.addEventListener("click", function () {
        if (synth.speaking && !isPaused) {
            synth.pause();
            button.innerHTML = "▶ Resume";
            isPaused = true;
        } else if (isPaused) {
            synth.resume();
            button.innerHTML = "⏸ Pause";
            isPaused = false;
        } else {
            playTTS();
        }
    });
});
