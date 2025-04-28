// Mike icon start
const searchInput = document.getElementById('search-input');
const micButton = document.getElementById('mic-button');

// Check for browser support of Web Speech API
if ('webkitSpeechRecognition' in window) {
    const recognition = new webkitSpeechRecognition();
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.lang = 'en-US';

    micButton.addEventListener("click", () => {
        recognition.start();
    });

    recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        searchInput.value = transcript; // Display the recognized speech in the search bar
    };

    recognition.onerror = (event) => {
        console.error('Speech recognition error:', event.error);
    };
} else {
    micButton.disabled = true; // Disable the button if Web Speech API is not supported
    alert('Speech recognition not supported in this browser.');
}
// Mike icon end