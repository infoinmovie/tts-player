const button = document.getElementById("playPauseBtn");
let isPlaying = false;
const text = "Tom Hardy Leads Brutal Action in HAVOC, A Must-Watch Netflix Thriller.Info in Movie News. Tom Hardy is once again displaying his prowess in the thrilling movie HAVOC, proving himself as one of Hollywood's toughest actors. Known for his intense and physical roles, he is prepared to draw viewers into a world filled with intrigue and violence. According to The Hollywood Reporter, HAVOC follows the story of Walker (played by Hardy), a detective who must survive pursuit from criminal gangs, corrupt politicians, and treasonous police following a chaotic drug deal. In his effort to rescue a politician's child, Walker fights against not just enemies, but also faces his dark past. Similar to his roles in The Dark Knight Rises and Mad Max: Fury Road, Hardy displays a full commitment to intense action scenes here. Empire Magazine tells us that Hardy went through extensive physical training, and so he really committed to his character and made sure the fights in the film are brutal and realistic. HAVOC is all yet another fantastic addition to all Tom Hardy fans and action genre enthusiasts alike as it solves whether his tense action sequences and complex characters in data until October 2023. Gareth Evans Returns to Roots with Brutal Action. The director from Wales is back with his signature style filled with brutal fights and stunning hand-to-hand combat choreography. With cinematography from Matt Flannery - his loyal collaborator - Havoc is set to deliver intense action with stunning visuals.
Evans not only directed but also wrote this movie. He combines his characteristic action elements with emotional depth of the characters, something rarely encountered in action movies. From Production Process to Highly-Anticipated Release
Production for Havoc began in July 2021 at several locations in Wales, including Cardiff and Swansea. The film, however, faced a number of hurdles, including July 2024 re-shoots. That shows, however, that the production team wants to make the most high-quality movie possible.
Additionally, music is a major aspect of this movie. Tyler Bates, known as the lead guitarist for Marilyn Manson and composer for John Wick, was entrusted to score Havoc. His contribution will undoubtedly intensify each scene bringing a deeper and more thrilling atmosphere.
Sturdy Cast Strengthens the Narrative
Aside from Tom Hardy, Havoc is filled with talented actors including Forest Whitaker (Godfather of Harlem), Jessie Mei Li (Shadow and Bone), Luis Guzmán (Wednesday), and Timothy Olyphant (Deadwood). They make this movie look even better, but they are adding rich dynamics to the story with their character.
One of the most awaited movies this year, Havoc has an ensemble cast, alluring chemistry from the trailer, and Evans' distinct style of action.
Netflix Ready to Deliver Non-Stop Action
As one of Netflix's major releases this year, Havoc has great potential to gain global spotlight. With its combination of brutal action, deep narrative, and high-quality actors, this movie could follow in the footsteps of The Raid's success and reintroduce Gareth Evans' cinematic style to the world.
For fans of intense and gripping action movies, Havoc is a must-watch. Mark your calendar and get ready to witness Tom Hardy's high-energy performance in a movie that will shake your screen on April 25, 2025.

";

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
