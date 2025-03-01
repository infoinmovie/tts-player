document.addEventListener("DOMContentLoaded", function () {
    let button = document.getElementById("playPauseBtn");
    let popupButton = document.getElementById("popupPlayPauseBtn");
    let closePopup = document.getElementById("popupCloseBtn");
    let popup = document.getElementById("ttsPopup");
    let ttsButton = document.getElementById("ttsButton");
    let synth = window.speechSynthesis;
    let utterance;
    let isPaused = false;
    let lastPosition = 0;
    let articleText = document.getElementById("blog-content").innerText;

    function playTTS() {
        utterance = new SpeechSynthesisUtterance(articleText.substring(lastPosition));
        utterance.lang = "en-US"; // Bisa diubah ke "id-ID" untuk bahasa Indonesia
        
        utterance.onboundary = function (event) {
            lastPosition += event.charIndex;
        };

        utterance.onend = function () {
            button.innerHTML = "▶";
            popupButton.innerHTML = "▶";
            lastPosition = 0;
            isPaused = false;
        };

        synth.speak(utterance);
        button.innerHTML = "⏸";
        popupButton.innerHTML = "⏸";
        isPaused = false;
    }

    function toggleTTS() {
        if (synth.speaking && !isPaused) {
            synth.pause();
            button.innerHTML = "▶";
            popupButton.innerHTML = "▶";
            isPaused = true;
        } else if (isPaused) {
            synth.resume();
            button.innerHTML = "⏸";
            popupButton.innerHTML = "⏸";
            isPaused = false;
        } else {
            playTTS();
        }
    }

    button.addEventListener("click", toggleTTS);
    popupButton.addEventListener("click", toggleTTS);
    closePopup.addEventListener("click", function () {
        popup.classList.add("hidden");
    });

    window.addEventListener("scroll", function () {
        let rect = ttsButton.getBoundingClientRect();
        if (rect.top < 0 || rect.bottom > window.innerHeight) {
            popup.classList.remove("hidden");
        } else {
            popup.classList.add("hidden");
        }
    });
});
